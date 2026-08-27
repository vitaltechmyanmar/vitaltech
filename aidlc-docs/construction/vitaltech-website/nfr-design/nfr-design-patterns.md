# NFR Design Patterns - Vital Tech Myanmar Website

## Design Intent
This design applies the approved Astro, TypeScript, Tailwind CSS, WCAG 2.2 AA, static-delivery, and visual-direction requirements without introducing a backend, runtime service dependency, analytics, form submission, or deployment-specific infrastructure.

## 1. Static-First Graceful Degradation

### Pattern
Render every public route as static HTML. The core company value proposition, service content, navigation links, page metadata, direct-contact labels, and contact information remain present without client-side JavaScript.

### Application
- Use Astro page routes and server-static components for all seven public pages.
- Keep navigation links as standard anchor elements.
- Build direct phone, email, and WhatsApp actions from centralized configuration into static link markup where an official endpoint is available.
- When an endpoint is unavailable, render the approved clearly labelled placeholder state without fabricating an action.
- Treat mobile-menu animation, nonessential motion, and decorative blue ambient effects as progressive enhancements rather than dependencies for content or contact access.

### Resilience Result
A visitor can read the essential content and identify contact methods even if optional client-side interaction or decorative styling does not load. No retry, circuit-breaker, queue, cache, or service-failover pattern is needed because the release contains no runtime remote dependency.

## 2. Content-Scale and Build-Time Scalability

### Pattern
Use centralized typed content collections and reusable route components so the static site can grow without duplicating page logic.

### Application
- Maintain typed collections for company profile, services, industries, case studies, insights, careers, navigation, contact configuration, and page metadata.
- Use reusable card, section, list, and call-to-action components to render repeatable collection entries.
- Keep the single Services route section-based; additional services become collection entries rather than new route logic.
- Allow future insight or case-study detail routes to be generated from approved entries, without adding a CMS in the first release.
- Keep content source modules independent of page layouts so a future CMS adapter can satisfy the same content contract.

### Scalability Boundary
The site scales at build time through content and route generation. There are no runtime databases, caches, queues, worker pools, or capacity controls in scope.

## 3. Astro Island and Interaction Boundary

### Pattern
Use Astro static rendering by default. Create client islands only for essential interactive behavior.

### Application
- Keep route content, cards, headings, service sections, case studies, insights, careers information, metadata, and direct-contact links static.
- Scope client hydration to mobile navigation and only future interactions that cannot be expressed accessibly with native HTML and CSS.
- Do not hydrate broad page sections solely for visual animation.
- Prefer semantic HTML controls, CSS transitions, and `prefers-reduced-motion` treatment over JavaScript-driven presentation.

### Performance Result
The client payload remains limited to necessary interaction, preserving fast delivery and reliable base content.

## 4. Asset, Font, and Layout-Stability Pattern

### Pattern
Use intentional, optimized assets and CSS-led visual effects to reproduce the premium reference direction without large media costs or layout shift.

### Application
- Use CSS gradients, blur, opacity, and layered pseudo-elements for the dark-blue ambient glow instead of large raster or video hero backgrounds.
- Reserve dimensions for meaningful images and provide descriptive alternatives when images carry content.
- Use optimized image formats and responsive dimensions where meaningful imagery is included.
- Load only required font weights; configure fallbacks with similar proportions to reduce text reflow.
- Use explicit layout spacing and media dimensions to avoid visible content movement during loading.
- Avoid autoplay video, unbounded animation, and third-party visual libraries.

### Visual System
- **Base surface**: near-black.
- **Primary accent**: acid-lime for identity, active navigation, contact emphasis, and focal headline text.
- **Ambient accent**: dark-blue, low-opacity decorative glow.
- **Display treatment**: outlined leading word used as a visual layer; solid high-contrast text communicates the critical message.

## 5. Accessible Navigation and Contact Pattern

### Pattern
Provide semantic, keyboard-operable site navigation and direct-contact actions that remain usable across screen sizes.

### Application
- Use `<header>`, `<nav>`, `<main>`, and `<footer>` landmarks with a coherent heading order.
- Use standard links for routes and protocol-appropriate contact actions.
- Implement mobile navigation with a semantic button, `aria-expanded`, an accessible label, keyboard operation, clear Escape behavior where used, and predictable focus restoration.
- Provide visible focus styles that remain discernible on near-black and lime-accent surfaces.
- Ensure primary text and calls to action maintain WCAG 2.2 AA contrast; decorative outlined type is not the sole carrier of essential information.
- Include a visible direct contact action in relevant global and page-level contexts.

## 6. Public-Site Safety Pattern

### Pattern
Keep the public static site free of unnecessary runtime, tracking, secret, and unapproved-content risk.

### Application
- Include no analytics, advertising, tag-manager, cookie-consent, or other third-party tracking scripts.
- Keep keys, tokens, credentials, and private contact data out of source files.
- Centralize contact actions and only emit `tel:`, `mailto:`, or WhatsApp destinations after official values are supplied.
- Keep placeholder contact states explicit and non-deceptive.
- Render only approved company, service, case-study, insight, and careers claims.
- Pin dependency versions in the package manifest and keep the dependency set minimal.

### Security Boundary
Security extension rules are disabled. This pattern establishes pragmatic public-site hygiene; it does not add backend security controls, browser response headers, user-data handling, consent workflows, or authentication.

## 7. Metadata and Static Discoverability Pattern

### Pattern
Resolve route metadata from centralized page definitions at build time.

### Application
- Define unique titles, descriptions, canonical-path placeholders, and Open Graph fields for every public route.
- Store the base site URL as configurable build-time content until a production domain is supplied.
- Generate sitemap and robots directives as part of the static build configuration.
- Use approved content only in search and social metadata.

## 8. Release Verification Pattern

### Pattern
A successful production build is the automated acceptance gate; visual review determines release readiness.

### Visual Review Checklist
- Confirm every public route is generated and linked.
- Check the lime masthead, outlined display treatment, solid lime focal copy, and blue ambient glow for legibility on practical viewport sizes.
- Confirm route navigation and direct-contact presentation are visible and understandable.
- Check mobile navigation behavior and focus styling manually.
- Confirm no placeholder contact action appears as a working official endpoint.

## Explicitly Not Included
- Remote-content retry logic, runtime failover, circuit breakers, queues, caches, or server-side scaling components.
- CMS, analytics, consent tooling, form submission, user accounts, API integrations, deployment architecture, monitoring, or production security-header configuration.

## Extension Compliance
| Extension | Status | Rationale |
|---|---|---|
| Resiliency Baseline | N/A | Disabled; static-first graceful degradation is used as project-specific design guidance. |
| Security Baseline | N/A | Disabled; public-site hygiene is applied without enabling extension constraints. |
| Property-Based Testing | N/A | Disabled; no property-based testing requirement applies. |
