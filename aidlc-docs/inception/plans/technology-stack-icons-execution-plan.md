# Technology Stack Icons Execution Plan

## Scope
Add one static Technology ecosystem section to the existing Services page. The section will use nine locally stored Dashboard Icons SVG assets and the current bright editorial visual system.

## Risk and Impact
- **Risk level**: Low to medium. The change affects one public route and introduces third-party-sourced static brand artwork.
- **Affected application files**: centralized technology data, one reusable icon-section component, `src/pages/services.astro`, and local public SVG assets.
- **Preserved behavior**: Services anchors, existing content, CTA, navigation, metadata, direct-contact actions, and static architecture.
- **No changes**: Backend, APIs, forms, analytics, CMS, dependencies, deployment, or other routes.

## Workflow Selection
- [x] Requirements Analysis: Approved technology-stack icon requirements.
- [x] User Stories: Approved TSI-US-01.
- [x] Workflow Planning: This plan is awaiting approval.
- [ ] Application Design: Skip; the change reuses existing component and content patterns.
- [ ] Units Generation: Skip; one small static front-end unit.
- [ ] Functional Design: Skip; no business rules or data-model behavior.
- [ ] NFR Requirements and Design: Skip; existing static, accessibility, responsive, and performance standards apply.
- [ ] Infrastructure Design: Skip; no infrastructure change.
- [ ] Code Generation: Execute; acquire static assets, add centralized technology data and reusable presentation, then compose Services.
- [ ] Build and Test: Execute; validate production build and generated Services output.
- [ ] Operations: Placeholder; no deployment work.

## Change Sequence
1. Obtain the light or neutral Dashboard Icons SVG variants for AWS, Docker, Kubernetes, Terraform, GitLab, GitHub, GitHub Actions, Red Hat, and OpenStack. Store them as local, unmodified source-attributed assets under `public/technology-icons/`.
2. Add typed, centralized technology-stack data with labels, ordered asset paths, and optional group category if useful for presentation.
3. Add one reusable Technology Ecosystem component using semantic heading and list structure; use existing editorial-card tokens, visible labels, decorative SVG treatment, responsive grid, and no client-side code.
4. Insert the component in `src/pages/services.astro` after service details and before the existing `CallToAction`.
5. Validate all nine asset references and labels in static output, confirm no runtime remote image URL exists, run `npm run build`, and document asset sources plus manual visual checks.

## Success Criteria
- `/services` renders all nine requested technologies exactly once after detailed services and before CTA.
- Every item has a local Dashboard Icons SVG and visible label.
- The grid is responsive, accessible, visually consistent, and static-first.
- Existing Services route behavior and content remain unchanged.
- `npm run build` succeeds.

## Approval Status
[Answer]: Awaiting approval
