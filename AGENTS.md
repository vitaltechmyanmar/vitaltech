# AGENTS.md

Marketing site for Vital Tech Myanmar: Astro 7 + TypeScript + Tailwind CSS 4. Pages are prerendered; the contact form is handled by one on-demand endpoint (`/api/contact`) through the `@astrojs/vercel` adapter and Resend. No database or CMS.

## Commands

Run from the repository root:

```bash
npm ci          # install from lockfile
npm run dev     # Astro dev server
npm run build   # production build (prerendered pages + Vercel output bundle)
npm run preview # not supported by the Vercel adapter; use npm run dev or vercel dev
```

There is no lint, format, typecheck, or test script. Do not run `npm test`. `npm run build` is the only automated gate; it does not run full TypeScript checks (`@astrojs/check` is not installed). Node must satisfy `^20.19.0 || >=22.12.0` per the lockfile.

A successful build produces six prerendered pages plus `robots.txt` and sitemap files in `dist/client/`, and the Vercel Build Output API bundle in `.vercel/output/` (static assets plus the `/api/contact` function). Confirm no errors and inspect `dist/` only after success. Both `dist/` and `.vercel/` are generated and Git-ignored; never edit them by hand. Deploy through Vercel; uploading `dist/client/` to static-only hosting will not run the contact form. `astro preview` does not work with the Vercel adapter — use `npm run dev` or `vercel dev` to test the form locally.

## Content and routes

- All copy, navigation, contact links, services, industries, insights, and page metadata are centralized in `src/content/site.ts`; types live in `src/types/site.ts`. Do not hardcode or duplicate site copy/contact details in components or pages.
- `src/lib/site.ts` holds small helpers (canonical URL, metadata lookup, contact channel lookup) that read from `src/content/site.ts`.
- Pages in `src/pages/` render through `src/layouts/BaseLayout.astro`, which supplies header, footer, metadata, canonical URL, and favicon.
- Adding or removing a route requires updating the `RoutePath` union (`src/types/site.ts`), the `pageMetadata` record and `navigation` (`src/content/site.ts`), and the matching `src/pages/*.astro` file. The sitemap is generated from built pages automatically.
- `/careers` was intentionally retired; there is no redirect. Do not re-add it unless asked. `insights` is intentionally empty and renders an empty state.
- Contact phone numbers and email are approved values in `src/content/site.ts`. Change them only when explicitly requested.

## Contact form and email

- `src/components/ContactForm.astro` renders the form and progressively enhances it with `fetch`; the native fallback still posts to `/api/contact`, but Turnstile verification requires JavaScript.
- `src/pages/api/contact.ts` is the only on-demand route (`export const prerender = false`). It verifies Turnstile via `siteverify` before other checks, validates input, drops honeypot submissions, applies a per-IP in-memory rate limit (5 requests per 10 minutes, reset on restart), and sends through Resend.
- Form copy, service options, and user-facing messages live in the `contactForm` export in `src/content/site.ts`; do not hardcode them in the component or endpoint.
- Configuration uses Astro's typed env (`env.schema` in `astro.config.mjs`): `RESEND_API_KEY` (required to send), `CONTACT_FROM_EMAIL` (defaults to Resend's test sender), `CONTACT_TO_EMAIL` (defaults to the approved email in `src/content/site.ts`), `PUBLIC_TURNSTILE_SITEKEY` (build-time public sitekey), `TURNSTILE_SECRET` (server-only secret), and `TURNSTILE_HOSTNAMES` (comma-separated exact frontend hostnames). Copy `.env.example` to `.env` and fill values; `.env` is Git-ignored.
- Without `RESEND_API_KEY` the endpoint returns 503 and the form shows the unavailable message. `CONTACT_FROM_EMAIL` must use a domain verified in Resend; `onboarding@resend.dev` only delivers to the Resend account owner.
- The endpoint protects the API key by never exposing it to the browser. Keep it server-only; do not add client-side Resend calls or `PUBLIC_` env vars for it.
- Keep the Turnstile secret server-only as well. `siteverify` must run in the endpoint, never in the browser; the public sitekey is the only Turnstile value exposed to the client.

## Configuration gotchas

- The canonical site URL is duplicated: `site` in `astro.config.mjs` (used by `@astrojs/sitemap`) and `siteUrl` in `src/content/site.ts` (used by canonical/OG URLs and `robots.txt.ts`). Both are placeholders (`https://vitaltech.example.com`); keep them in sync and update both before launch.
- Tailwind 4 is wired through `@tailwindcss/vite` with `@import "tailwindcss"` in `src/styles/global.css`. There is no `tailwind.config.js`; theme tokens live in the `@theme` block and shared patterns in `@layer components`. The light navy/cobalt system uses semantic roles (`canvas`, `surface`, `ink`, `muted`, `line`, `accent`, `inverse-*`); use the `Button`, `Card`, and `Badge` primitives in `src/components/ui/` instead of one-off button/card classes.
- Branding uses `public/logo.jpg` for both the header image and favicon, and `public/og-preview.svg` for Open Graph. The header hardcodes the asset's `1674 × 1516` dimensions; update them if the asset changes. The file is actually PNG data served as `image/jpeg`, and it is non-square, so favicon rendering is checked manually in a browser.
- There are no CI workflows or `.github/` files in this checkout. If contributing via PR, include context in the PR body; `.github/pull_request_template.md` is absent here.
- Deployment targets Vercel with `@astrojs/vercel` (`output: 'static'`, and `prerender = false` only on `src/pages/api/contact.ts`). Do not swap in `@astrojs/node`: Vercel then deploys without a function bundle and every route returns 404. Keep the Vercel project's Framework Preset as Astro, Build Command `npm run build`, and Output Directory at the default (Vercel reads `.vercel/output`). Set `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL`, `PUBLIC_TURNSTILE_SITEKEY`, `TURNSTILE_SECRET`, and `TURNSTILE_HOSTNAMES` in the Vercel project for Production and Preview, then redeploy so the function picks them up.

## Change log

Append a dated entry here for every code or configuration change.

- 2026-11-18: Added Cloudflare Turnstile protection to the contact form: typed env fields, explicit widget with token reset, canonical `siteverify` gate, centralized action/message copy, Vercel env documentation, and this change-log rule.
