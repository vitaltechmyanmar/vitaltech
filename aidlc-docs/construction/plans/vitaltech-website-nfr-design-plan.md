# Vital Tech Myanmar Website - NFR Design Plan

## Unit Context
- **Unit**: `vitaltech-website`
- **NFR Requirements status**: Approved.
- **Stack**: Astro with TypeScript and Tailwind CSS.
- **Architecture**: Static public site, centralized typed content and contact configuration, no backend, no custom API, no analytics, and no production hosting decision.
- **Visual direction**: Near-black canvas, acid-lime navigation and focal type, fine outlined display lettering, solid lime headline emphasis, and decorative dark-blue ambient light.

## NFR Design Scope
The design will convert the approved quality requirements into implementation patterns: static-first Astro composition, Tailwind design tokens, client-island boundaries, accessible navigation and contact behavior, optimized asset patterns, metadata composition, progressive enhancement, and build-time logical components.

## Design Checklist
- [x] Review the approved NFR requirements and technology-stack decisions.
- [x] Define static-first resilience and graceful-degradation patterns.
- [x] Define content-scale and build-time scalability patterns.
- [x] Define Astro island, asset, font, and layout-stability performance patterns.
- [x] Define public-site safety and contact-placeholder patterns.
- [x] Define logical components for content, metadata, navigation, contact actions, and build output.
- [x] Create `aidlc-docs/construction/vitaltech-website/nfr-design/nfr-design-patterns.md`.
- [x] Create `aidlc-docs/construction/vitaltech-website/nfr-design/logical-components.md`.
- [x] Validate NFR design patterns against the selected stack, visual direction, and scope boundaries.

## Question 1 - Resilience Pattern
This release has no runtime service, form backend, or selected deployment provider. Which resilience strategy should its NFR design use?

A) Static-first graceful degradation: core content and contact labels render without client JavaScript; enhanced mobile navigation and decorative effects are optional

B) Add runtime retry and fallback patterns now for future remote content or contact services

C) Keep resilience concerns entirely out of the front-end design until hosting is selected

X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 2 - Scalability Pattern
How should the design prepare the static website for growth in services, industries, insights, and careers content?

A) Centralized typed content collections with reusable route and card components; all content remains in source modules for the first release

B) Add a CMS integration boundary now, despite no CMS being included in the first release

C) Keep all content local to each page until the site has more content

X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 3 - Performance Pattern
Which Astro interaction and visual-asset boundary should the implementation follow?

A) Use Astro static rendering by default; hydrate only the mobile navigation or other essential interactions; use CSS gradients and optimized media for the blue ambient visual treatment

B) Hydrate all major sections for animation and interaction flexibility

C) Use large raster or video hero assets to reproduce the visual reference as closely as possible

X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 4 - Public-Site Safety Pattern
The security extension is disabled and the website collects no user data. Which minimum public-site safety pattern should be designed into the front end?

A) No analytics or third-party scripts; no secrets in source; centrally configured protocol-safe contact links; approved content only; dependency versions pinned during implementation

B) Add client-side security headers and a consent layer now

C) No explicit safety pattern beyond visual implementation

X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 5 - Logical Components
Which logical components should the NFR design formalize?

A) Content registry, metadata resolver, navigation model, contact-action resolver, visual token system, asset strategy, and static build output; no queues, caches, or circuit breakers

B) Add runtime caches, queues, and circuit breakers for future service integration

C) Define only the Tailwind visual token system; keep all other components implicit

X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Approval Status
After every answer is completed and ambiguity is resolved, this plan will generate the NFR design artifacts.

[Answer]: NFR design artifacts generated; awaiting explicit NFR Design approval
