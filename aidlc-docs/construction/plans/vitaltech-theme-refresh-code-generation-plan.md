# Code Generation Plan - Vital Tech Theme Refresh

## Unit Context
- **Unit**: `vitaltech-theme-refresh`
- **Project type**: Brownfield static Astro application.
- **Application code location**: `d:\AI-DLC-Workshop\vitaltech`.
- **Documentation location**: `aidlc-docs/construction/vitaltech-theme-refresh/code/`.
- **Stories**: TC-US-01 through TC-US-04 in `aidlc-docs/inception/user-stories/theme-change-stories.md`.
- **Dependencies**: Existing Astro 7, TypeScript, Tailwind CSS, centralized content, metadata, route configuration, direct-contact resolver, and mobile-navigation script.
- **Boundaries**: No backend, API, data model, CMS, analytics, form, authentication, dependency addition, or deployment work.

## Single Source of Truth
After approval, this plan governs all theme-refresh source changes. Each completed checkbox must be marked immediately in this file.

## Generation Steps

### Step 1 - Establish Bright Editorial Foundation
- [x] Modify `src/styles/global.css` in place.
- [x] Replace dark and lime tokens with white or soft-gray surfaces, deep navy text, cobalt-blue accents, accessible borders, shadows, selection, focus, and reduced-motion-safe effects.
- [x] Add reusable editorial layout and surface primitives so route pages do not require isolated color overrides.
- [x] Preserve the existing Tailwind import, responsive base behavior, and WCAG-focused focus styling.
- **Story coverage**: TC-US-02, TC-US-03.

### Step 2 - Refresh Shared Layout and Navigation
- [x] Modify `src/layouts/BaseLayout.astro` and `src/components/SiteHeader.astro` in place.
- [x] Apply the light shell, clean header, cobalt-blue active and action states, and accessible skip-link styling.
- [x] Preserve metadata, landmarks, static links, mobile menu script, aria behavior, and all existing `data-testid` values.
- **Story coverage**: TC-US-03.

### Step 3 - Refresh Reusable Editorial Components
- [x] Modify `PageHero.astro`, `SectionHeading.astro`, `ServiceCard.astro`, `CallToAction.astro`, `SiteFooter.astro`, and `ContactActions.astro` in place.
- [x] Replace dark panels and lime treatments with white and soft-gray surfaces, navy typography, cobalt-blue accents, generous spacing, and clear editorial cards.
- [x] Preserve component props, semantic headings, direct-contact placeholder behavior, links, and test IDs.
- **Story coverage**: TC-US-01, TC-US-02, TC-US-04.

### Step 4 - Recompose the Home Route
- [x] Modify `src/pages/index.astro` in place.
- [x] Use the shared editorial patterns to prioritize Software Development, Cloud, and DevOps after the Home hero.
- [x] Preserve existing content, service destinations, and contact calls to action.
- **Story coverage**: TC-US-01, TC-US-03, TC-US-04.

### Step 5 - Refresh Remaining Public Routes
- [x] Modify `services.astro`, `industries.astro`, `about.astro`, `insights.astro`, `careers.astro`, and `contact.astro` in place.
- [x] Apply consistent editorial layouts, readable grids, truthful empty states, and clearly visible contact placeholders across all routes.
- [x] Preserve service anchors, content, routes, metadata inputs, and no-form behavior.
- **Story coverage**: TC-US-02, TC-US-03, TC-US-04.

### Step 6 - Update Temporary Visual Assets
- [x] Modify `public/favicon.svg` and `public/og-preview.svg` in place.
- [x] Replace dark/lime artwork with a simple, replaceable bright-neutral, navy, and cobalt-blue abstract treatment; do not introduce a fabricated final logo.
- **Story coverage**: TC-US-04.

### Step 7 - Verify Source Contracts
- [x] Inspect affected Astro and TypeScript files for diagnostics.
- [x] Confirm routes, test IDs, semantic landmarks, aria controls, direct-contact placeholders, sitemap configuration, and metadata behavior remain intact.
- **Story coverage**: TC-US-01 through TC-US-04.

### Step 8 - Build and Review Static Output
- [x] Run `npm run build`.
- [x] Resolve build failures before closing Code Generation.
- [x] Review generated route coverage, assets, and static discoverability files. Record that browser rendering and assistive-technology checks remain manual release work.
- **Story coverage**: TC-US-01 through TC-US-04.

### Step 9 - Create Code Generation Summary
- [x] Create `aidlc-docs/construction/vitaltech-theme-refresh/code/code-generation-summary.md`.
- [x] Record modified files, story coverage, validation result, preserved behavior, temporary asset strategy, and manual release checks.

## Explicitly Excluded Work
- Content rewrites, official brand assets, contact endpoint changes, backend logic, forms, analytics, CMS, APIs, databases, new dependencies, automated test suites, deployment configuration, and hosting.

## Expected Outcome
A full-site bright clean technology presentation with clean editorial layouts, navy and cobalt-blue visual language, replaceable abstract temporary visuals, preserved visitor journeys, and a successful Astro production build.

## Approval Status
[Answer]: Approved and executed - 2026-08-27T15:15:12Z
