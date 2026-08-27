# Careers Route Retirement Requirements

## Intent Analysis

- **User request**: Remove the Careers page.
- **Request type**: Public-route retirement and content cleanup.
- **Scope estimate**: A small, multi-file change within the existing Astro static site.
- **Complexity estimate**: Simple. The route is data-driven through shared navigation and route metadata.

## Functional Requirements

1. Remove the public `/careers` Astro route by deleting its route source.
2. Remove Careers from the centralized navigation data so it no longer appears in desktop navigation, mobile navigation, or the footer.
3. Remove Careers-specific page metadata, the empty careers content export, and the associated route/type definitions.
4. Preserve the remaining public routes: `/`, `/services`, `/industries`, `/about`, `/insights`, and `/contact`.
5. Do not add a replacement route or redirect. After deployment, the retired `/careers` URL will be handled as a static-host 404.
6. Leave shared, route-agnostic components unchanged, including the header, footer, contact actions, layout, robots route, and sitemap configuration.
7. Update current build and integration-test instructions to reflect the six active public routes and no Careers navigation scenario.

## Non-Functional Requirements

1. The production Astro build must complete successfully after the removal.
2. A fresh generated site must not contain `dist/careers/`, a `/careers/` sitemap entry, or Careers navigation test IDs.
3. The remaining site navigation, metadata, contact channels, styles, and public routes must continue to function unchanged.
4. Historical plans and audit records must remain intact; only active documentation that describes the current site behavior will be updated.

## Acceptance Criteria

- `src/pages/careers.astro` no longer exists.
- No source navigation item, route metadata entry, or route type references `/careers`.
- The generated sitemap omits `/careers/`.
- The generated HTML contains no Careers navigation link identifiers.
- `npm run build` completes successfully for the six remaining routes.

## Scope Boundaries

- No hosting redirect, CDN cache invalidation, or deployment configuration is added in this repository.
- No changes are made to unrelated pages, shared component implementations, visual styling, dependencies, or contact channels.

## Extension Compliance

- **Resiliency Baseline**: N/A — disabled in `aidlc-docs/aidlc-state.md`.
- **Security Baseline**: N/A — disabled in `aidlc-docs/aidlc-state.md`.
- **Property-Based Testing**: N/A — disabled in `aidlc-docs/aidlc-state.md`.
