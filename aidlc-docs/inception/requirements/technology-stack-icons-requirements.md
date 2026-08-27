# Technology Stack Icons Requirements - Vital Tech Myanmar

## Intent Analysis
- **User request**: Add Dashboard Icons for AWS, Docker, Kubernetes, Terraform, GitLab, GitHub, GitHub Actions, Red Hat, and OpenStack.
- **Request type**: User-facing Services-page enhancement.
- **Scope**: One static, responsive technology-ecosystem section, local SVG icon assets, and supporting centralized data/component code as needed.
- **Requirements depth**: Standard. The requested icon set is explicit; placement, visual treatment, accessibility, performance, and attribution boundary are defined.

## Placement and Purpose
Add a `Technology ecosystem` section to `/services`, after the detailed service list and before the existing contact CTA. It will substantiate Vital Tech Myanmar’s Software Development, Cloud, DevOps, System Integration, and Managed IT capability without changing service copy or route structure.

## Required Technology Set
The section shall display exactly these nine technologies/tools:
1. AWS
2. Docker
3. Kubernetes
4. Terraform
5. GitLab
6. GitHub
7. GitHub Actions
8. Red Hat
9. OpenStack

## Functional Requirements

### FR-01: Dashboard Icons Source
Use SVG assets sourced from Dashboard Icons for each requested technology. Obtain the appropriate light or neutral variant from the official Dashboard Icons catalogue, retain source provenance in implementation documentation, and follow any applicable source terms.

### FR-02: Local Static Assets
Store approved SVG assets locally under the site’s public assets rather than adding runtime network requests. Do not add an icon package or other dependency.

### FR-03: Professional Editorial Layout
Render the icons in one responsive, consistent grid using the site’s existing bright-neutral surfaces, deep navy typography, cobalt-blue accents, editorial card treatment, and spacing. Each card shall pair the icon with a visible technology name.

### FR-04: Responsive Behavior
The grid shall remain readable and operable from small mobile screens through desktop sizes, without horizontal scrolling or cropped icons.

### FR-05: Accessibility
Treat logo SVGs as decorative when their visible card label supplies the accessible technology name. Ensure the section has a semantic heading, cards retain readable labels, and no information relies on color alone.

### FR-06: Existing Site Preservation
Preserve all current Services content, service anchors, navigation, contact actions, metadata, static output, and no-form/no-backend behavior.

## Non-Functional Requirements
- **Performance**: Use optimized static SVG assets; no client-side JavaScript or external runtime icon requests.
- **Maintainability**: Keep technology names, asset references, and optional group labels in centralized typed data rather than duplicating them in template markup.
- **Design consistency**: Reuse existing global tokens and editorial-card patterns rather than introducing a disconnected visual system.
- **Validation**: `npm run build` must pass. Static output must include all nine technology labels and local SVG references.

## Acceptance Criteria
1. `/services` shows a clearly labelled Technology ecosystem section between service details and the existing CTA.
2. Every requested technology appears once with a Dashboard Icons SVG and visible text label.
3. Icons use a consistent size, padding, background, and responsive grid treatment aligned with the current website design.
4. The section is accessible, responsive, and static-first.
5. Existing Services content, anchors, CTA, and direct-contact behavior remain intact.
6. `npm run build` succeeds after implementation.

## Exclusions
- No technology claims beyond the supplied list.
- No external icon fetches at runtime, icon library dependency, analytics, backend, CMS, form, deployment, or hosting changes.
- No modification of the existing bright editorial visual system.

## Source References
Dashboard Icons provides SVG availability for [AWS](https://dashboardicons.com/icons/aws), [Terraform](https://dashboardicons.com/icons/terraform), [GitLab](https://dashboardicons.com/icons/gitlab), and [GitHub](https://dashboardicons.com/icons/github). The implementation will obtain the corresponding requested Dashboard Icons SVG variants before generating the static assets.
