# Vital Tech Myanmar

Marketing website and digital technical portal for Vital Tech Myanmar. The site presents enterprise cloud managed services, CI/CD automation, infrastructure as code, repository and artifact governance, system integration, and DevOps consulting for organizations seeking a dependable technology partner.

---

## Technology Stack

- **[Astro](https://astro.build/) 7.2.8**: Prerendered static content pages and one on-demand contact endpoint
- **[@astrojs/vercel](https://docs.astro.build/en/guides/integrations-guide/vercel/) 11.0.22**: Vercel deployment adapter with Build Output API v3
- **[Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile/)**: Non-interactive, privacy-first CAPTCHA alternative protecting form endpoints
- **[Resend](https://resend.com/) 6.38.1**: Transactional email delivery API for inquiry notifications
- **[Tailwind CSS](https://tailwindcss.com/) 4.3.3**: Modern Vite-integrated utility styling with `@theme` design tokens
- **TypeScript 7.0.2**: Strongly typed site models, routing unions, and content schemas
- **`@astrojs/sitemap` 3.7.3**: Automated multi-page sitemap generation

---

## Active Routes

| Route | Purpose | Rendering Mode |
|---|---|---|
| `/` | Home: Value proposition, TrustProof delivery metrics, endorsements, and tech ecosystem | Prerendered |
| `/services` | Service hub: 6 capability cards, 5-stage Cloud Blueprint, and interactive Cloud ROI Estimator | Prerendered |
| `/services/<service-id>` | Service detail playbooks: Scopes, challenges, delivery phases, tooling, and technical FAQs | Prerendered (`getStaticPaths`) |
| `/industries` | Industry hub: Strategic technology solutions tailored to specific market sectors | Prerendered |
| `/industries/<industry-id>` | Industry playbooks: Financial Services, Digital Commerce, Growing Enterprises, Professional Services | Prerendered (`getStaticPaths`) |
| `/about` | Company authority: Engineering Competencies, Regional Infrastructure Mastery, SLAs, and Models | Prerendered |
| `/insights` | Knowledge hub: Thought leadership and technical engineering perspectives | Prerendered |
| `/insights/<slug>` | Article reading experience: Long-form technical deep dives with read times and structured copy | Prerendered (`getStaticPaths`) |
| `/contact` | Contact portal: Direct channels (phone, email) and progressive Turnstile contact form | Prerendered |
| `/404` | Branded 404 page: High-contrast error message with quick directory links back to core sections | Prerendered |
| `/api/contact` | On-demand contact endpoint: Turnstile `siteverify`, honeypot, rate limiting, and Resend delivery | Serverless Function |
| `/robots.txt` | Dynamic robots directives linking to `sitemap-index.xml` | Prerendered |

For detailed documentation on site architecture and dynamic routing, see:
- [`docs/site-architecture.md`](docs/site-architecture.md) — Comprehensive technical architecture, design tokens, and components
- [`docs/service-detail-pages.md`](docs/service-detail-pages.md) — Service detail page models, scopes, and maintenance workflows

---

## Centralized Content & Type Safety

All copy, navigation links, services, industries, insights, and page metadata are centralized in:
- **`src/content/site.ts`**: Single source of truth for all user-facing content
- **`src/types/site.ts`**: TypeScript definitions for all site models, routes, and components
- **`src/lib/site.ts`**: Query and lookup helpers (canonical URLs, route metadata, path derivation)

> **Important**: Do not hardcode marketing copy or contact details into individual `.astro` components. Always update `src/content/site.ts` and `src/types/site.ts`.

---

## Contact Form & Security Integration

The contact form submits to `/api/contact`. The endpoint executes a multi-layer verification pipeline:
1. **Cloudflare Turnstile**: Validates the token against Cloudflare's `siteverify` endpoint with hostname verification.
2. **Honeypot Filter**: Silently rejects automated submissions filling hidden bot traps.
3. **In-Memory Rate Limiting**: Restricts submissions to 5 requests per 10 minutes per IP address.
4. **Resend Email Delivery**: Delivers formatted inquiry notifications to the team inbox.

Configure the environment variables in `.env` (never commit this file):

| Variable | Scope | Required | Purpose |
|---|---|---|---|
| `RESEND_API_KEY` | Server | Yes | Resend API key used to send enquiry emails |
| `CONTACT_FROM_EMAIL` | Server | No | Sender address (must use a verified domain in Resend for production) |
| `CONTACT_TO_EMAIL` | Server | No | Recipient address; defaults to `info@vitaltechmyanmar.com` |
| `PUBLIC_TURNSTILE_SITEKEY` | Client / Server | Yes | Public Cloudflare Turnstile sitekey rendered in the widget |
| `TURNSTILE_SECRET` | Server | Yes | Server-only Turnstile secret for token validation |
| `TURNSTILE_HOSTNAMES` | Server | No | Comma-separated list of allowed frontend hostnames |

---

## Brand Assets & Vector Identity

All branding utilizes high-resolution vector SVG assets:
- **Primary Wordmark**: `public/vital-tech-primary.svg` (Header logo and brand identifier)
- **Official V Icon**: `public/vital-tech-icon.svg` (Gradient geometric V symbol)
- **Web App Favicon**: `public/favicon.svg` (64×64 vector icon) & `public/favicon.ico` (32×32 fallback)
- **iOS Touch Icon**: `public/apple-touch-icon.png` (180×180 PNG clip icon)
- **Open Graph Social Card**: `public/og-preview.svg` (1200×630 vector preview card for LinkedIn/Twitter)
- **Official Tech Icons**: `public/technology-icons/` (AWS, Linux, Kubernetes, Terraform, Prometheus, etc.)

---

## Deploying to Vercel

The project deploys seamlessly with the `@astrojs/vercel` adapter:

1. Import the repository in Vercel with **Framework Preset** set to **Astro**, **Build Command** `npm run build`, and **Output Directory** at the default (`.vercel/output`).
2. Add the environment variables (`RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL`, `PUBLIC_TURNSTILE_SITEKEY`, `TURNSTILE_SECRET`, `TURNSTILE_HOSTNAMES`) in **Project Settings → Environment Variables**.
3. Deploy and verify the live deployment on Vercel.

---

## Workflow Preferences & Governance

- Local build and test commands are intentionally skipped in this WSL checkout per project rules. The user verifies changes directly through Vercel deployments.
- Functional and configuration updates are documented with dated entries in [`AGENTS.md`](AGENTS.md).
