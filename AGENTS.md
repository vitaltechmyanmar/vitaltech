# AGENTS.md

Static marketing site for Vital Tech Myanmar: Astro 7 + TypeScript + Tailwind CSS 4. No backend, database, CMS, or deployment target.

## Commands

Run from the repository root:

```bash
npm ci          # install from lockfile
npm run dev     # Astro dev server
npm run build   # production static build into dist/
npm run preview # preview a completed build
```

There is no lint, format, typecheck, or test script. Do not run `npm test`. `npm run build` is the only automated gate; it does not run full TypeScript checks (`@astrojs/check` is not installed). Node must satisfy `^20.19.0 || >=22.12.0` per the lockfile.

A successful build generates six pages plus `robots.txt` and sitemap files. Confirm no errors and inspect `dist/` only after success. `dist/` is generated and Git-ignored; never edit it by hand.

## Content and routes

- All copy, navigation, contact links, services, industries, insights, and page metadata are centralized in `src/content/site.ts`; types live in `src/types/site.ts`. Do not hardcode or duplicate site copy/contact details in components or pages.
- `src/lib/site.ts` holds small helpers (canonical URL, metadata lookup, contact channel lookup) that read from `src/content/site.ts`.
- Pages in `src/pages/` render through `src/layouts/BaseLayout.astro`, which supplies header, footer, metadata, canonical URL, and favicon.
- Adding or removing a route requires updating the `RoutePath` union (`src/types/site.ts`), the `pageMetadata` record and `navigation` (`src/content/site.ts`), and the matching `src/pages/*.astro` file. The sitemap is generated from built pages automatically.
- `/careers` was intentionally retired; there is no redirect. Do not re-add it unless asked. `insights` is intentionally empty and renders an empty state.
- Contact phone numbers and email are approved values in `src/content/site.ts`. Change them only when explicitly requested.

## Configuration gotchas

- The canonical site URL is duplicated: `site` in `astro.config.mjs` (used by `@astrojs/sitemap`) and `siteUrl` in `src/content/site.ts` (used by canonical/OG URLs and `robots.txt.ts`). Both are placeholders (`https://vitaltech.example.com`); keep them in sync and update both before launch.
- Tailwind 4 is wired through `@tailwindcss/vite` with `@import "tailwindcss"` in `src/styles/global.css`. There is no `tailwind.config.js`; theme tokens live in the `@theme` block and shared patterns in `@layer components`. The light navy/cobalt system uses semantic roles (`canvas`, `surface`, `ink`, `muted`, `line`, `accent`, `inverse-*`); use the `Button`, `Card`, and `Badge` primitives in `src/components/ui/` instead of one-off button/card classes.
- Branding uses `public/logo.jpg` for both the header image and favicon, and `public/og-preview.svg` for Open Graph. The header hardcodes the asset's `1674 × 1516` dimensions; update them if the asset changes. The file is actually PNG data served as `image/jpeg`, and it is non-square, so favicon rendering is checked manually in a browser.
- There are no CI workflows or `.github/` files in this checkout. `.kiro/steering/pr-conventions.md` asks for the contributor statement in PR bodies and references `.github/pull_request_template.md`, which is absent here.

## AI-DLC workflow

`.kiro/steering/core-workflow.md` declares a mandatory AI-DLC workflow for software development requests and overrides other workflows. Load it before starting feature work.

Its listed rule-detail search paths do not exist in this repo; the actual rules are in `aws-aidlc-rule-details/` at the repository root. Workflow artifacts belong in `aidlc-docs/` only; application code stays at the root.

When following that workflow, keep `aidlc-docs/aidlc-state.md` current and append to `aidlc-docs/audit.md` (never overwrite it), including raw user input and timestamps.
