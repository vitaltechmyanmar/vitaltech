# Integration Test Instructions

## Purpose

Validate interactions inside the single static Astro application after the theme refresh: shared layout composition, six-route navigation, direct contact links, generated sitemap output, and the shared dark visual system. No backend, API, database, queue, CMS, or service-to-service contract exists.

## Environment

- Build from the workspace root with `npm run build`.
- Inspect generated files in `dist/`.
- Optionally run `npm run preview` manually for browser review.
- No credentials, service endpoint, or environment variable is required.

## Scenarios

### Scenario 1: Active routes and navigation

1. Run `npm run build`.
2. Confirm `dist/` contains exactly Home, Services, Industries, About, Insights, and Contact HTML pages.
3. Confirm desktop navigation includes `desktop-nav-home-link`, `desktop-nav-services-link`, `desktop-nav-industries-link`, `desktop-nav-about-link`, `desktop-nav-insights-link`, and `desktop-nav-contact-link`.
4. Confirm `dist/careers/` and Careers sitemap entries are absent.

**Expected result**: All six active routes and their navigation identifiers are present; the retired Careers route remains absent.

### Scenario 2: Direct contact continuity

1. Inspect generated HTML across the active pages.
2. Confirm `tel:+959443167419`, `tel:+959964444882`, and `mailto:info@vitaltechmyanmar.com` are present.
3. Confirm no contact form or WhatsApp action is emitted.

**Expected result**: The shared theme has not changed approved contact destinations or accessibility labels.

### Scenario 3: Dark-system composition and interaction

1. Inspect `src/styles/global.css` for dark semantic roles, visible focus styling, and reduced-motion support.
2. In a manual preview, inspect header/footer, hero, cards, CTA/contact actions, technology tiles, and route-local service/industry/contact treatments at narrow and wide viewports.
3. Open, close, and dismiss the mobile navigation with pointer and keyboard input.
4. Navigate with keyboard to confirm visible focus against dark surfaces.

**Expected result**: The original charcoal/warm-neutral/ember/secondary-blue system remains consistent; mobile navigation and direct contact behavior are unchanged; no horizontal scrolling occurs.

## Execution Command

```powershell
npm run build
```

No separate integration-test runner is configured. Record manual preview outcomes in release notes when a browser is available.
