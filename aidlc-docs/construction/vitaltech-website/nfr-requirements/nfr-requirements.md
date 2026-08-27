# NFR Requirements - Vital Tech Myanmar Website

## Unit Scope
`vitaltech-website` is a statically generated, public marketing website with seven routes. It contains no customer account, form-submission, authentication, database, custom API, analytics, or production-infrastructure implementation in the first release.

## NFR Decisions Summary
| Area | Decision |
|---|---|
| Front-end stack | Astro with TypeScript |
| Styling | Tailwind CSS with a defined project theme and reusable utility patterns |
| Accessibility target | WCAG 2.2 Level AA |
| Performance target | Optimize assets and avoid unnecessary JavaScript; no numeric Core Web Vitals threshold is committed |
| Browser policy | Current and immediately preceding Chrome, Edge, Firefox, and Safari; recent Android Chrome and iOS Safari |
| SEO and sharing | Page title, description, canonical URL placeholder, Open Graph metadata, sitemap, and robots directives |
| Analytics | None in the first release |
| Acceptance verification | Successful production build; visual review determines release readiness |

## Responsiveness and Usability
1. The website must be designed mobile-first and remain usable from narrow mobile viewports through large desktop viewports.
2. Critical navigation, direct-contact actions, content headings, and primary calls to action must remain available without horizontal page scrolling.
3. The responsive navigation must expose the same public routes as desktop navigation and provide a clear open, close, and focus experience.
4. Service navigation, card grids, call-to-action bands, and direct-contact controls must reflow without losing content or requiring precision pointer input.
5. The dark, lime, outlined-display visual system must preserve readable text hierarchy on small and large screens.

## Accessibility
1. Public routes, navigation, buttons, links, menus, and direct-contact actions must target WCAG 2.2 Level AA.
2. Use semantic landmarks, meaningful heading order, and native controls where practical.
3. All keyboard-operable controls must have visible focus indicators and a logical focus order.
4. The mobile navigation must be operable with keyboard input, close with Escape where supported by the selected implementation, and restore focus predictably.
5. Core text, call-to-action labels, and interactive states must meet readable contrast requirements against near-black, lime, and blue-accent surfaces.
6. Meaningful images require text alternatives; decorative ambient glows and non-informative visual motifs must not produce redundant announcements.
7. The outlined display treatment may be used only where its legibility and contrast remain suitable; solid text must communicate critical information.

## Performance and Asset Handling
1. Prefer Astro’s static output and ship client-side JavaScript only for interactions that require it, such as the responsive navigation.
2. Optimize images, use responsive dimensions where supported by the selected implementation, and avoid autoplay-heavy media.
3. Use modern font-loading and asset-loading practices to avoid blocking the first readable content.
4. Avoid nonessential third-party scripts; the first release includes no analytics script.
5. Favor CSS gradients or lightweight decorative treatment over large visual assets where they can reproduce the dark-blue ambient glow and premium visual depth.
6. No numeric Core Web Vitals threshold is a release gate. The implementation must nevertheless avoid unnecessary JavaScript, unoptimized media, and layout-shifting visual behavior.

## Browser Compatibility
1. Support the current and immediately preceding major versions of Chrome, Edge, Firefox, and Safari.
2. Support recent Android Chrome and iOS Safari.
3. Use progressive enhancement: direct-contact links, route navigation, and core content must remain available when optional visual or enhanced interaction features are unavailable.
4. Avoid relying on browser-specific behavior without a suitable fallback.

## Search and Sharing
1. Every public route must have a unique, content-appropriate page title and meta description.
2. The site must use a configurable canonical URL placeholder until the production domain is supplied.
3. Public routes must have Open Graph metadata suitable for link previews.
4. The generated static site must include a sitemap and robots directives appropriate for public indexing.
5. Metadata content must use approved company and service claims only.

## Direct Contact and Placeholder Safety
1. Phone, email, and WhatsApp endpoints must be centralized in configuration rather than copied into page components.
2. Until official endpoints are supplied, contact controls must use clearly labelled placeholder behavior selected in Application Design; they must not appear as official, working business contact data.
3. When official endpoints are supplied, phone, email, and WhatsApp actions must use protocol-appropriate destinations.
4. There is no contact-form submission, data capture, or third-party contact integration in this release.

## Maintainability
1. Use TypeScript for application and content-model contracts.
2. Keep recurring content in typed centralized modules so company details, services, industries, insights, careers, metadata, and contact configuration can be changed without page-wide duplication.
3. Establish reusable Tailwind theme tokens for the near-black surface, lime accent, subdued blue ambient color, typography, spacing, and interactive states.
4. Keep layout components, route components, content modules, and utility functions clearly separated.
5. Pin dependency versions in the package manifest during implementation and avoid unnecessary packages.

## Availability and Scalability
1. The site must generate a static production build suitable for deployment to a static host selected later.
2. Production uptime, CDN behavior, monitoring, deployment, and disaster recovery are out of scope because Infrastructure Design and hosting selection are not included in the first release.
3. The static architecture avoids database or server capacity constraints within this project boundary.

## Verification Baseline
1. A production build must complete successfully before the front-end is accepted.
2. Per the selected verification baseline, automated type checking, linting, accessibility scanning, and formal responsive test execution are not acceptance gates for this release.
3. Visual review determines release readiness and must examine the approved route set, dark-and-lime visual system, direct-contact presentation, responsive navigation, and core content legibility.
4. The absence of automated gates does not relax the stated WCAG 2.2 AA, browser-support, metadata, or maintainability requirements; it defines the selected release-acceptance process.

## Out of Scope
- Backend, database, customer data collection, form submission, authentication, authorization, CMS integration, analytics, cookie consent, hosting selection, deployment configuration, monitoring, and incident response.

## Extension Compliance
| Extension | Status | Rationale |
|---|---|---|
| Resiliency Baseline | N/A | Disabled during Requirements Analysis. |
| Security Baseline | N/A | Disabled during Requirements Analysis. |
| Property-Based Testing | N/A | Disabled during Requirements Analysis. |
