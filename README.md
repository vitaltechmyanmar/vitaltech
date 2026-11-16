# Vital Tech Myanmar

A marketing website for Vital Tech Myanmar. The site presents cloud managed services, CI/CD automation, infrastructure as code, repository and artifact management, system integration, and DevOps consulting for organizations seeking a practical technology partner.

## Technology Stack

- [Astro](https://astro.build/) 7.2.8 for prerendered pages and one on-demand contact endpoint
- [@astrojs/vercel](https://docs.astro.build/en/guides/integrations-guide/vercel/) 11.0.22 for the Vercel deployment adapter
- [Resend](https://resend.com/) 6.38.1 for contact form email delivery
- TypeScript 7.0.2 for typed site content and routes
- Tailwind CSS 4.3.3 with the Vite integration for styling
- `@astrojs/sitemap` 3.7.3 for generated sitemap files

## Prerequisites

- A current Node.js LTS release compatible with Astro 7.2.8
- npm

## Local Development

Install the locked dependencies from the workspace root:

```powershell
npm ci
```

Start the local Astro development server:

```powershell
npm run dev
```

The contact form needs a Resend API key. Copy `.env.example` to `.env` and fill in `RESEND_API_KEY` (and, once a sending domain is verified, `CONTACT_FROM_EMAIL`). Without a key the form renders normally but submissions return a temporary-unavailable message.

Create a production build:

```powershell
npm run build
```

Preview the built site, including the contact endpoint, after a successful build:

```powershell
npm run preview
```

`astro preview` is not supported by the Vercel adapter. Use `npm run dev` for local form testing, or `vercel dev` after linking the project to reproduce the deployed environment.

## Active Routes

| Route | Purpose |
|---|---|
| `/` | Home and service overview |
| `/services` | Technology and delivery capabilities |
| `/industries` | Industry context and solution relevance |
| `/about` | Company positioning and approach |
| `/insights` | Technology and delivery perspectives |
| `/contact` | Contact form and direct contact options |

## Content and Contact Configuration

Centralized site content, navigation, metadata, services, industries, technology icons, and contact actions are defined in [`src/content/site.ts`](src/content/site.ts).

The current approved public contact links are:

- Phone: [`tel:+959443167419`](tel:+959443167419)
- Phone: [`tel:+959964444882`](tel:+959964444882)
- Email: [`mailto:info@vitaltechmyanmar.com`](mailto:info@vitaltechmyanmar.com)

The configured canonical site URL is currently a placeholder. Update `siteUrl` in `src/content/site.ts` with the approved production domain before a public launch, then rebuild and review generated sitemap and canonical URLs.

## Contact Form and Resend

The contact page includes a form that submits to `/api/contact`. The endpoint validates the input, filters honeypot submissions, rate-limits each IP to five messages per ten minutes, and sends the enquiry with Resend.

Configure the integration in `.env` (never commit it):

| Variable | Required | Purpose |
|---|---|---|
| `RESEND_API_KEY` | Yes | Resend API key used to send enquiry emails |
| `CONTACT_FROM_EMAIL` | No | Sender address; defaults to Resend's test sender, which only delivers to the account owner |
| `CONTACT_TO_EMAIL` | No | Recipient address; defaults to the approved email in `src/content/site.ts` |

Set `CONTACT_FROM_EMAIL` to an address on a domain verified in Resend before launch. Form copy, service options, and success/error messages live in the `contactForm` export in `src/content/site.ts`.

## Deploying to Vercel

The project deploys with the `@astrojs/vercel` adapter and needs no `vercel.json`.

1. Import the repository in Vercel and keep **Framework Preset** set to **Astro**, **Build Command** `npm run build`, and **Output Directory** at its default. Vercel reads the generated `.vercel/output` bundle; pointing the output directory at `dist` causes 404s.
2. Add the environment variables in **Project Settings → Environment Variables** for Production (and Preview if desired):
   - `RESEND_API_KEY` (mark as sensitive)
   - `CONTACT_FROM_EMAIL`
   - `CONTACT_TO_EMAIL`
3. Redeploy after adding variables so the `/api/contact` function receives them.

If the deployment succeeds but the site returns a 404, confirm the adapter in `astro.config.mjs` is `vercel()` (not `@astrojs/node`), the output directory setting is default, and the project's Root Directory points at this repository. Serverless functions cannot run from a purely static upload of `dist/client`.

## Project Structure

```text
src/
  components/       Shared Astro UI components (including ContactForm.astro)
  content/          Centralized typed site content
  layouts/          Shared page layouts
  pages/            Prerendered Astro routes
  pages/api/        On-demand contact endpoint
  styles/           Global styling
public/             Static assets, including technology icons
aidlc-docs/         Workflow and build/test documentation
dist/               Generated build output (dist/client)
.vercel/output/     Generated Vercel deployment bundle
```

`dist/` and `.vercel/` are generated by `npm run build` and are ignored by Git. Do not edit its files manually; regenerate them after source or content changes.

## Verification

Run the production build after application changes:

```powershell
npm run build
```

The current validation baseline is a successful Astro build plus a manual submission through the contact form with `npm run dev`. The project does not define a separate unit-test script. Detailed build, integration-check, and manual release guidance is available in:

- [`aidlc-docs/construction/build-and-test/build-instructions.md`](aidlc-docs/construction/build-and-test/build-instructions.md)
- [`aidlc-docs/construction/build-and-test/integration-test-instructions.md`](aidlc-docs/construction/build-and-test/integration-test-instructions.md)
- [`aidlc-docs/construction/build-and-test/build-and-test-summary.md`](aidlc-docs/construction/build-and-test/build-and-test-summary.md)
