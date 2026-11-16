# AGENTS.md

Marketing site for Vital Tech Myanmar: Astro 7 + TypeScript + Tailwind CSS 4. Pages are prerendered; the contact form is handled by one on-demand endpoint (`/api/contact`) through the `@astrojs/node` adapter and Resend. No database or CMS.

## Commands

Run from the repository root:

```bash
npm ci          # install from lockfile
npm run dev     # Astro dev server
npm run build   # production build (prerendered pages + Node server bundle)
npm run preview # run the built server locally
```

There is no lint, format, typecheck, or test script. Do not run `npm test`. `npm run build` is the only automated gate; it does not run full TypeScript checks (`@astrojs/check` is not installed). Node must satisfy `^20.19.0 || >=22.12.0` per the lockfile.

A successful build produces six prerendered pages plus `robots.txt` and sitemap files in `dist/client/`, and a Node server bundle in `dist/server/`. Confirm no errors and inspect `dist/` only after success. `dist/` is generated and Git-ignored; never edit it by hand. Deploy by running `node dist/server/entry.mjs` (respects `HOST`/`PORT`), not by uploading `dist/client/` to static-only hosting.

## Content and routes

- All copy, navigation, contact links, services, industries, insights, and page metadata are centralized in `src/content/site.ts`; types live in `src/types/site.ts`. Do not hardcode or duplicate site copy/contact details in components or pages.
- `src/lib/site.ts` holds small helpers (canonical URL, metadata lookup, contact channel lookup) that read from `src/content/site.ts`.
- Pages in `src/pages/` render through `src/layouts/BaseLayout.astro`, which supplies header, footer, metadata, canonical URL, and favicon.
- Adding or removing a route requires updating the `RoutePath` union (`src/types/site.ts`), the `pageMetadata` record and `navigation` (`src/content/site.ts`), and the matching `src/pages/*.astro` file. The sitemap is generated from built pages automatically.
- `/careers` was intentionally retired; there is no redirect. Do not re-add it unless asked. `insights` is intentionally empty and renders an empty state.
- Contact phone numbers and email are approved values in `src/content/site.ts`. Change them only when explicitly requested.

## Contact form and email

- `src/components/ContactForm.astro` renders the form and progressively enhances it with `fetch`; without JavaScript it posts natively and the endpoint redirects back to `/contact#contact-form`.
- `src/pages/api/contact.ts` is the only on-demand route (`export const prerender = false`). It validates input, drops honeypot submissions, applies a per-IP in-memory rate limit (5 requests per 10 minutes, reset on restart), and sends through Resend.
- Form copy, service options, and user-facing messages live in the `contactForm` export in `src/content/site.ts`; do not hardcode them in the component or endpoint.
- Configuration uses Astro's typed env (`env.schema` in `astro.config.mjs`): `RESEND_API_KEY` (required to send), `CONTACT_FROM_EMAIL` (defaults to Resend's test sender), and `CONTACT_TO_EMAIL` (defaults to the approved email in `src/content/site.ts`). Copy `.env.example` to `.env` and fill values; `.env` is Git-ignored.
- Without `RESEND_API_KEY` the endpoint returns 503 and the form shows the unavailable message. `CONTACT_FROM_EMAIL` must use a domain verified in Resend; `onboarding@resend.dev` only delivers to the Resend account owner.
- The endpoint protects the API key by never exposing it to the browser. Keep it server-only; do not add client-side Resend calls or `PUBLIC_` env vars for it.

## Configuration gotchas

- The canonical site URL is duplicated: `site` in `astro.config.mjs` (used by `@astrojs/sitemap`) and `siteUrl` in `src/content/site.ts` (used by canonical/OG URLs and `robots.txt.ts`). Both are placeholders (`https://vitaltech.example.com`); keep them in sync and update both before launch.
- Tailwind 4 is wired through `@tailwindcss/vite` with `@import "tailwindcss"` in `src/styles/global.css`. There is no `tailwind.config.js`; theme tokens live in the `@theme` block and shared patterns in `@layer components`. The light navy/cobalt system uses semantic roles (`canvas`, `surface`, `ink`, `muted`, `line`, `accent`, `inverse-*`); use the `Button`, `Card`, and `Badge` primitives in `src/components/ui/` instead of one-off button/card classes.
- Branding uses `public/logo.jpg` for both the header image and favicon, and `public/og-preview.svg` for Open Graph. The header hardcodes the asset's `1674 × 1516` dimensions; update them if the asset changes. The file is actually PNG data served as `image/jpeg`, and it is non-square, so favicon rendering is checked manually in a browser.
- There are no CI workflows or `.github/` files in this checkout. If contributing via PR, include context in the PR body; `.github/pull_request_template.md` is absent here.
