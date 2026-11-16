import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL, RESEND_API_KEY } from 'astro:env/server';
import { contactChannels, contactForm, services } from '../../content/site';

export const prerender = false;

const MAX_BODY_BYTES = 20_000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^[0-9+()\-.\s]{5,40}$/;

const rateLimitHits = new Map<string, number[]>();

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (rateLimitHits.get(key) ?? []).filter((time) => now - time < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= RATE_LIMIT_MAX) {
    rateLimitHits.set(key, recent);
    return true;
  }

  recent.push(now);
  rateLimitHits.set(key, recent);

  if (rateLimitHits.size > 1_000) {
    for (const [entry, times] of rateLimitHits) {
      if (!times.some((time) => now - time < RATE_LIMIT_WINDOW_MS)) rateLimitHits.delete(entry);
    }
  }

  return false;
}

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

function redirectToContact(result: 'sent' | 'error'): Response {
  return new Response(null, {
    status: 303,
    headers: {
      Location: `/contact?form=${result}#contact-form`,
      'Cache-Control': 'no-store',
    },
  });
}

async function readPayload(request: Request): Promise<Record<string, string> | null> {
  const contentType = request.headers.get('content-type') ?? '';

  try {
    if (contentType.includes('application/json')) {
      const data: unknown = await request.json();
      if (!data || typeof data !== 'object' || Array.isArray(data)) return null;

      return Object.fromEntries(
        Object.entries(data).map(([key, value]) => [key, typeof value === 'string' ? value : '']),
      );
    }

    const formData = await request.formData();

    return Object.fromEntries(
      [...formData.entries()].map(([key, value]) => [key, typeof value === 'string' ? value : '']),
    );
  } catch {
    return null;
  }
}

interface Enquiry {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

function validate(data: Record<string, string>): { enquiry: Enquiry; errors: Record<string, string> } {
  const errors: Record<string, string> = {};
  const name = (data.name ?? '').trim();
  const email = (data.email ?? '').trim();
  const company = (data.company ?? '').trim();
  const phone = (data.phone ?? '').trim();
  const service = (data.service ?? '').trim();
  const message = (data.message ?? '').trim();

  if (name.length < 2 || name.length > 100) {
    errors.name = 'Please enter your name (2-100 characters).';
  }

  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    errors.email = 'Please enter a valid email address.';
  }

  if (company.length < 2 || company.length > 120) {
    errors.company = 'Please enter your organization (2-120 characters).';
  }

  if (!phone) {
    errors.phone = 'Please enter your phone number.';
  } else if (!PHONE_PATTERN.test(phone)) {
    errors.phone = 'Please enter a valid phone number.';
  }

  if (!service) {
    errors.service = 'Please select an area of interest.';
  } else if (!services.some((item) => item.title === service)) {
    errors.service = 'Please choose an area of interest from the list.';
  }

  if (message.length < 10 || message.length > 5000) {
    errors.message = 'Please describe your enquiry in 10-5000 characters.';
  }

  return {
    enquiry: { name, email, company, phone, service, message },
    errors,
  };
}

function escapeHtml(value: string): string {
  const entities: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };

  return value.replace(/[&<>"']/g, (character) => entities[character] ?? character);
}

function defaultRecipient(): string {
  return contactChannels.find((channel) => channel.id === 'email')?.links?.[0]?.label ?? '';
}

function buildEmail(enquiry: Enquiry): { html: string; text: string } {
  const messageHtml = escapeHtml(enquiry.message).replace(/\r?\n/g, '<br />');
  const rows: Array<[string, string]> = [
    ['Name', escapeHtml(enquiry.name)],
    ['Email', escapeHtml(enquiry.email)],
    ['Organization', enquiry.company ? escapeHtml(enquiry.company) : 'Not provided'],
    ['Phone', enquiry.phone ? escapeHtml(enquiry.phone) : 'Not provided'],
    ['Area of interest', enquiry.service ? escapeHtml(enquiry.service) : 'Not specified'],
  ];

  const html = `
    <div style="font-family: Arial, Helvetica, sans-serif; color: #102a4c; line-height: 1.6;">
      <h1 style="font-size: 20px; margin: 0 0 16px;">New website enquiry</h1>
      <table style="border-collapse: collapse; margin-bottom: 20px;">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><td style="padding: 4px 16px 4px 0; font-weight: 700; vertical-align: top;">${label}</td><td style="padding: 4px 0;">${value}</td></tr>`,
          )
          .join('')}
      </table>
      <h2 style="font-size: 16px; margin: 0 0 8px;">Message</h2>
      <p style="margin: 0;">${messageHtml}</p>
    </div>
  `.trim();

  const text = [
    'New website enquiry',
    '',
    `Name: ${enquiry.name}`,
    `Email: ${enquiry.email}`,
    `Organization: ${enquiry.company || 'Not provided'}`,
    `Phone: ${enquiry.phone || 'Not provided'}`,
    `Area of interest: ${enquiry.service || 'Not specified'}`,
    '',
    'Message:',
    enquiry.message,
  ].join('\n');

  return { html, text };
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const acceptsHtml = (request.headers.get('accept') ?? '').includes('text/html');
  const fail = (status: number, message: string, errors?: Record<string, string>) =>
    acceptsHtml
      ? redirectToContact('error')
      : jsonResponse({ ok: false, message, ...(errors ? { errors } : {}) }, status);

  const contentLength = Number(request.headers.get('content-length') ?? '0');
  if (contentLength > MAX_BODY_BYTES) {
    return fail(413, contactForm.failureMessage);
  }

  const data = await readPayload(request);
  if (!data) {
    return fail(400, contactForm.validationMessage);
  }

  if ((data.website ?? '').trim()) {
    return acceptsHtml
      ? redirectToContact('sent')
      : jsonResponse({ ok: true, message: contactForm.successMessage });
  }

  if (isRateLimited(clientAddress ?? 'unknown')) {
    return fail(429, contactForm.rateLimitMessage);
  }

  const { enquiry, errors } = validate(data);
  if (Object.keys(errors).length > 0) {
    return fail(400, contactForm.validationMessage, errors);
  }

  const recipient = CONTACT_TO_EMAIL || defaultRecipient();
  const from = CONTACT_FROM_EMAIL || 'Vital Tech Website <onboarding@resend.dev>';

  if (!RESEND_API_KEY || !recipient) {
    console.error('Contact form is not configured: set RESEND_API_KEY and CONTACT_TO_EMAIL.');
    return fail(503, contactForm.unavailableMessage);
  }

  const subject = `New website enquiry - ${enquiry.name}`.replace(/[\r\n]+/g, ' ');
  const { html, text } = buildEmail(enquiry);

  try {
    const resend = new Resend(RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from,
      to: [recipient],
      replyTo: enquiry.email,
      subject,
      html,
      text,
    });

    if (error) {
      console.error('Resend rejected the contact form email:', error);
      return fail(502, contactForm.failureMessage);
    }
  } catch (error) {
    console.error('Failed to send contact form email:', error);
    return fail(502, contactForm.failureMessage);
  }

  return acceptsHtml
    ? redirectToContact('sent')
    : jsonResponse({ ok: true, message: contactForm.successMessage });
};
