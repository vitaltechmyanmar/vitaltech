# Unit Test Execution

## Current Test Scope

No automated unit-test framework or test suite is configured for this static Astro site. The JPG branding update adds no executable business logic, data transformation, API, or test runner. Do not run `npm test` unless a test runner and tests are added in a future change.

## Available Automated Validation

### 1. Production build

```powershell
npm run build
```

A successful build validates Astro component imports, TypeScript-backed content, Tailwind CSS compilation, route templates, shared layout composition, and static generation.

### 2. Shared branding source contracts

Confirm:

- `src/components/SiteHeader.astro` has `/logo.jpg`, empty decorative alt text, `width="1674"`, `height="1516"`, `h-8`, `w-auto`, and `object-contain`.
- `src/layouts/BaseLayout.astro` has the JPEG favicon link to `/logo.jpg`.
- The header home-link label, `site-logo-link`, visible wordmark, and `/og-preview.svg` remain unchanged.
- No external font, package, or remote design asset was added.

### 3. Results

- **Automated unit-test result**: N/A; no test suite exists.
- **Coverage target**: N/A; coverage tooling is not configured.
- **Deterministic validation baseline**: Astro build plus source and generated-output contract checks.
- **Recorded JPG branding result**: Build and source-contract checks passed on 2026-08-31.
