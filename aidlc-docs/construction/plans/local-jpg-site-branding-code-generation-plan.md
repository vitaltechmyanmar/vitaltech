# Code Generation Plan — Local JPG Site Branding

## Plan Status

- **Unit**: `local-jpg-site-branding`
- **Project type**: Brownfield Astro static site
- **Status**: Code Generation complete; awaiting user review.
- **Plan authority**: This document is the single source of truth for Code Generation Part 2. Complete each step in order and mark its checkboxes immediately after the stated work is done.

## Unit Context

### Responsibility

Replace the current shared CSS/text identity mark and SVG favicon reference with the existing local `public/logo.jpg` asset. This unit changes presentation metadata only.

### Traceability

- **Requirements**: `aidlc-docs/inception/requirements/logo-jpg-site-branding-requirements.md`
- **Workflow plan**: `aidlc-docs/inception/plans/logo-jpg-site-branding-execution-plan.md`
- **User-story assessment**: No user story is required because no journey, workflow, or user behavior changes.

### Interfaces and Contracts to Preserve

- Header home URL, accessible name, visible `Vital Tech` wordmark, `site-logo-link` test ID, and all navigation/mobile-menu behavior.
- Six active routes, page metadata, canonical links, Open Graph image (`/og-preview.svg`), contact links, and existing public assets.
- No package, remote asset, external font, API, deployment, or configuration change.

## Approved Generation Steps

### Step 1 — Render the local logo in shared header chrome

- [x] Modify `src/components/SiteHeader.astro` in place.
- [x] Replace only the decorative CSS `V` mark with an `<img>` that uses `src="/logo.jpg"`, `alt=""`, `width="1674"`, `height="1516"`, a fixed `h-8` rendered height, `w-auto`, and `object-contain`.
- [x] Retain the parent `aria-label`, the adjacent visual wordmark, the home href, `site-logo-link`, and all navigation/mobile-menu code exactly as currently implemented.

### Step 2 — Replace the shared favicon reference

- [x] Modify `src/layouts/BaseLayout.astro` in place.
- [x] Change only the global favicon link to `href="/logo.jpg"` and `type="image/jpeg"`.
- [x] Preserve canonical, title, description, Open Graph, body, skip-link, and shared-header/footer markup unchanged.

### Step 3 — Record the generated-code outcome

- [x] Create `aidlc-docs/construction/local-jpg-site-branding/code/code-generation-summary.md`.
- [x] Record the two modified source files, preserved contracts, local-only asset boundary, and validation evidence.

### Step 4 — Build and validate generated output

- [x] Run `npm run build` from the workspace root.
- [x] Confirm all six active generated pages contain the JPEG favicon link and the header image with the required source, dimensions, decorative alt text, and existing `site-logo-link` test ID.
- [x] Confirm generated output retains `/og-preview.svg`, active navigation identifiers, approved telephone/email links, and no generated Careers route or sitemap entry.
- [x] Confirm no remote reference or dependency was introduced and run `git diff --check`.
- [x] Document that browser-specific favicon rendering at small square sizes remains a manual release check because the approved source is a non-square JPEG.

## Completion Criteria

- All plan checkboxes are marked complete only after their corresponding work is performed.
- The uploaded JPG appears as the header mark and declared favicon on every static page.
- Existing visible wording, accessibility semantics, navigation behavior, metadata, routes, and Open Graph image are preserved.
- The production build and static-output/whitespace checks pass.

## Pre-Creation Content Validation

This plan is standard Markdown with headings, lists, inline code, and an HTML-code reference only. It contains no Mermaid, ASCII diagram, JSON, or YAML block; all quotes inside inline code are balanced and parsing-compatible.

## Extension Compliance

| Extension | Status | Applicability |
|---|---|---|
| Resiliency Baseline | Disabled | N/A — static local asset substitution only. |
| Security Baseline | Disabled | N/A — no data, request, credential, or dependency change. |
| Property-Based Testing | Disabled | N/A — no executable business logic or transformation. |
