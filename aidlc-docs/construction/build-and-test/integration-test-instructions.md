# Integration Test Instructions

## Purpose

Validate the static Astro application after the shared JPG branding update. The relevant integration surface is the shared base layout and header across all six generated routes; no backend, API, database, queue, CMS, or service-to-service contract exists.

## Environment

- Build from the workspace root with `npm run build`.
- Inspect generated files in `dist/`.
- Optionally use `npm run preview` for manual browser review.
- No credentials, service endpoint, or environment variable is required.

## Scenarios

### Scenario 1: Shared JPG identity across active routes

1. Run `npm run build`.
2. Confirm generated Home, Services, Industries, About, Insights, and Contact pages contain the JPEG favicon link to `/logo.jpg`.
3. Confirm the shared header renders `/logo.jpg` with decorative empty alt text, intrinsic `1674 × 1516` dimensions, and `site-logo-link`.
4. Confirm `/og-preview.svg` remains present in generated Open Graph metadata.

**Expected result**: Every active page uses the requested local JPG for branding while social metadata remains unchanged.

### Scenario 2: Existing route and contact contracts

1. Confirm the six desktop navigation test IDs remain in generated pages.
2. Confirm approved telephone and email URI destinations remain present.
3. Confirm no `dist/careers/` output or Careers sitemap entry exists.

**Expected result**: The shared-branding update does not alter routes, navigation, contact behavior, or retired-route behavior.

### Scenario 3: Manual browser presentation

1. Run `npm run preview` manually after building.
2. Inspect the header at narrow and wide viewports.
3. Navigate to the home link by keyboard and confirm visible focus.
4. Open, close, and dismiss the mobile menu.
5. Inspect favicon legibility at the browser’s small square tab size.

**Expected result**: Header layout and mobile-menu behavior are preserved. The non-square JPG may be scaled or letterboxed in browser favicon slots; verify it remains acceptable for the intended browser targets.

## Execution Command

```powershell
npm run build
```

No separate integration-test runner is configured.
