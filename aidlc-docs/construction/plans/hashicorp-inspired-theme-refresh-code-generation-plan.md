# Code Generation Plan — Original Dark Technical Theme Refresh

## Plan Status

- **Unit**: `hashicorp-inspired-theme-refresh`
- **Project type**: Brownfield Astro static site
- **Status**: Code Generation complete; awaiting user review.
- **Plan authority**: This document is the single source of truth for Code Generation Part 2. Execute the numbered steps in order and mark each checkbox immediately after its work is complete.

## Unit Context and Traceability

### Responsibility

Refresh the existing Vital Tech Myanmar visual system in place with an original dark technical expression. The unit changes presentation only: semantic CSS tokens, reusable component styling, and route-local utilities that conflict with the new system.

### Stories Implemented

- **US-07 — Navigate Confidently Across the Site**: deliver a consistent original dark technical system, visible focus, readable contrast, responsive navigation/contact behavior, and no copied HashiCorp material.
- **Regression support for US-01 through US-06**: preserve the existing page hierarchy, service discovery, content, direct contact, routes, metadata, and stable automation identifiers.

### Dependencies and Interfaces

- **Consumes**: Existing Astro layouts, components, semantic Tailwind v4 CSS tokens, centralized route/content data, local technology icons, and direct contact data.
- **Preserves**: Six public routes (`/`, `/services`, `/industries`, `/about`, `/insights`, `/contact`), the absence of `/careers`, all copy, metadata, contact URI destinations, navigation labels, `data-testid` values, semantic landmarks, and mobile-menu behavior.
- **Owns**: No API, data model, service, database, runtime, deployment, or package boundary.
- **External-boundary rule**: Add no font, image, icon, package, HashiCorp asset, logo, copy, layout, or design-library dependency.

## Approved Generation Steps

### Step 1 — Establish the centralized dark technical system

- [x] Modify `src/styles/global.css` in place.
- [x] Replace the light/cobalt semantic roles with a coherent charcoal and near-black surface scale, warm readable foreground roles, ember-orange primary emphasis, and restrained blue secondary roles.
- [x] Update the page shell, original ambient geometry, outlined display treatment, editorial card surfaces, section frame, navigation link behavior, primary/secondary button variants, empty state, selection, and focus ring to use the revised semantic roles.
- [x] Preserve CSS-first Tailwind v4 token usage, system fonts, compact responsive behavior, and `prefers-reduced-motion` handling; introduce no external asset or package.

### Step 2 — Refresh shared shell and page-introduction surfaces

- [x] Modify `src/layouts/BaseLayout.astro`, `src/components/SiteHeader.astro`, `src/components/SiteFooter.astro`, and `src/components/PageHero.astro` in place.
- [x] Update the skip link, page/chrome surfaces, Vital Tech `V` mark treatment, desktop and mobile navigation, header contact action, footer labels, hero outlined/primary headline roles, and ambient placement to consume the new system.
- [x] Preserve canonical and social metadata, route typing, all navigation destinations and labels, every existing `data-testid`, and current mobile-menu JavaScript and keyboard behavior.

### Step 3 — Refresh reusable content, conversion, and technology components

- [x] Modify `src/components/ServiceCard.astro`, `src/components/CallToAction.astro`, `src/components/ContactActions.astro`, `src/components/SectionHeading.astro`, and `src/components/TechnologyEcosystem.astro` in place.
- [x] Replace light-panel, cobalt-only, and hard-coded CTA override utilities with semantic dark-system treatments for cards, number markers, outcomes, contact links/placeholders, section hierarchy, technology tiles, and icon backplates.
- [x] Retain all text, contact href values, technology icon paths, image accessibility attributes, interactive behavior, and stable test identifiers.

### Step 4 — Correct route-local visual exceptions

- [x] Review `src/pages/index.astro`, `src/pages/services.astro`, `src/pages/industries.astro`, `src/pages/about.astro`, `src/pages/insights.astro`, and `src/pages/contact.astro`; modify only the route-local exceptions in Services, Industries, Insights, and Contact because Home and About already consume shared semantic roles.
- [x] Re-theme service navigation pills, service outcome rules, capability tags, panels, cards, and the contact card border using the new semantic roles.
- [x] Preserve all route paths, copy, anchors, imports, page metadata bindings, component composition, contact destinations, and no-horizontal-scroll responsive layouts.

### Step 5 — Record the implementation boundary and outcome

- [x] Create `aidlc-docs/construction/hashicorp-inspired-theme-refresh/code/code-generation-summary.md` after source implementation.
- [x] Record modified paths, the implemented design-system roles, US-07 and regression-story coverage, preserved contracts, no-copy/no-dependency compliance, and automated validation evidence.
- [x] Do not edit historical workflow artifacts or ignored generated `dist/` output.

### Step 6 — Build and validate the static site

- [x] Run `npm run build` from the workspace root.
- [x] Verify the generated output contains exactly the six active routes and their sitemap entries, with no generated `/careers` route or sitemap entry.
- [x] Verify active navigation identifiers and all approved `tel:+959443167419`, `tel:+959964444882`, and `mailto:info@vitaltechmyanmar.com` links remain present in generated output.
- [x] Check source files for unintended `hashicorp` references and remote/external asset additions; confirm the source remains original and dependency-free.
- [x] Run `git diff --check` and address all whitespace errors before declaring Code Generation complete.
- [x] Perform focused source-level review of focus, contrast-token, responsive, and reduced-motion coverage; document that live browser visual review remains a manual release check if no browser-preview tool is available.

## Completion Criteria

- All six steps are marked complete only after their stated work is performed.
- The original dark technical system is applied consistently across global styles, shared components, and all six active routes.
- Existing behavioral and public-route contracts remain unchanged, including the retired `/careers` static-host 404 behavior.
- No HashiCorp trade dress or external visual/dependency material is introduced.
- The build and validation checks in Step 6 pass, and the code-generation summary accurately records the evidence.

## Pre-Creation Content Validation

- This plan contains standard Markdown only; it includes no Mermaid, ASCII art, JSON, or YAML blocks.
- All paths use inline code formatting, headings are balanced, and no special-character escaping or visual fallback is required.

## Extension Compliance

| Extension | Status | Applicability |
|---|---|---|
| Resiliency Baseline | Disabled | N/A — presentation-only static-site work adds no resiliency behavior. |
| Security Baseline | Disabled | N/A — no security feature, data handling, or dependency change is introduced. |
| Property-Based Testing | Disabled | N/A — no executable business logic or data transformation is introduced. |
