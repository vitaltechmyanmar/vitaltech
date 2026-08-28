# Original Dark Technical Theme Refresh Requirements

## Intent Analysis

- **User request**: Change the website theme and color with high-level HashiCorp-inspired direction, without copying the reference, and enhance it with an original Vital Tech Myanmar expression.
- **Request type**: Site-wide visual-system enhancement.
- **Scope estimate**: Multiple shared components plus targeted page-level visual utility adjustments across the existing Astro static site.
- **Complexity estimate**: Moderate. The refresh changes the public experience across all pages while preserving routes, content, semantics, and interactions.

## Approved Direction

Create an original **dark technical foundation** for Vital Tech Myanmar:

- Use near-black and charcoal surfaces with warm off-white text.
- Establish a distinct Vital Tech signal color in the ember-orange family; blue may remain a restrained secondary accent.
- Use original CSS geometry, grid/rule texture, contrast, and modular surfaces rather than HashiCorp assets, exact palette values, copy, typefaces, logos, illustrations, or layouts.
- Retain the existing system-font strategy and add no external font, illustration, icon, image, or package dependency.

## Functional Requirements

1. Refresh the shared global visual system in `src/styles/global.css`, including semantic color tokens, page surfaces, typography scale, rules, focus styling, selection treatment, buttons, cards, ambient treatment, and responsive motion behavior.
2. Refresh the shared `SiteHeader`, `SiteFooter`, `PageHero`, `ServiceCard`, call-to-action, contact, technology, and section-heading treatments so all active routes share one coherent system.
3. Apply targeted adjustments to route-local visual utilities where existing light/cobalt-specific classes prevent the new shared system from rendering consistently.
4. Preserve the six active routes, all page copy, technology icons, contact destination links, metadata, navigation labels, data-testid values, keyboard interaction, mobile navigation behavior, and static generation behavior.
5. Preserve the Vital Tech Myanmar identity and original `V` mark concept; do not replace it with any HashiCorp mark, logo geometry, or branded asset.
6. Introduce no runtime client-side framework, external visual dependency, font request, image request, asset package, or design-library dependency.

## Non-Functional Requirements

1. Maintain or improve visual contrast, visible focus states, semantic structure, responsive layout behavior, and `prefers-reduced-motion` support.
2. Support the existing viewport range without horizontal scrolling, including compact navigation and CTA behavior on small screens.
3. Keep the implementation centralized and maintainable through existing CSS-first Tailwind v4 semantic tokens and reusable components.
4. Avoid exact reproduction of HashiCorp visual trade dress. The completed site must be recognizably Vital Tech Myanmar and original in palette, composition, copy, and asset use.
5. A production `npm run build` must succeed and preserve all six generated routes, sitemap output, active navigation identifiers, and approved phone/email links.

## Acceptance Criteria

- Global page, header, footer, hero, button, card, CTA/contact, technology, and section-heading surfaces render in the new dark technical system.
- The primary visual palette uses original charcoal, warm neutral, and ember-orange roles; any blue role is secondary rather than the dominant brand color.
- No HashiCorp-specific asset, text, layout duplication, font, logo, or external design package is introduced.
- The existing site content, routes, links, test IDs, accessibility behavior, and responsive interaction remain intact.
- No route emits light-theme-only surfaces that conflict with the new system after targeted local exceptions are updated.
- `npm run build` and `git diff --check` pass.

## User Stories Decision

**Execute User Stories**: Yes.

**Rationale**: The refresh directly changes the visual and responsive visitor experience across all public routes, shared navigation, direct-contact paths, cards, and call-to-action surfaces. Visitor-facing acceptance criteria and unchanged journey guarantees add value before implementation.

## Extension Compliance

- **Resiliency Baseline**: N/A — disabled in `aidlc-docs/aidlc-state.md`; no resiliency behavior is added.
- **Security Baseline**: N/A — disabled in `aidlc-docs/aidlc-state.md`; no security behavior is added.
- **Property-Based Testing**: N/A — disabled in `aidlc-docs/aidlc-state.md`; no executable business logic is added.
