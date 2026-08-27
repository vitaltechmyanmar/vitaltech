# Vital Tech Myanmar Website - NFR Requirements Plan

## Unit Context
- **Unit**: `vitaltech-website`
- **Type**: Single front-end public website application.
- **Functional Design status**: Skipped as planned because the unit has no complex business rules, calculations, data workflow, or persistence layer. Application Design and user-story acceptance criteria provide the required functional context.
- **Infrastructure status**: Hosting and deployment remain outside the first release.

## NFR Assessment Scope
The assessment will establish the front-end technology stack and measurable quality constraints for responsive behavior, accessibility, performance, static delivery, search visibility, maintainability, asset handling, browser behavior, and verification. The release remains front-end only: no authentication, customer data, custom backend, or contact-form submission service.

## Assessment Checklist
- [x] Review approved requirements, stories, and application design for NFR inputs.
- [x] Confirm the front-end implementation and styling stack.
- [x] Define responsive and browser-support requirements.
- [x] Define accessibility target and verification expectations.
- [x] Define performance and optimized-asset targets.
- [x] Define SEO, metadata, and static-discoverability requirements.
- [x] Define contact-link configuration and safe placeholder requirements.
- [x] Define maintainability, code-quality, and verification expectations.
- [x] Create `aidlc-docs/construction/vitaltech-website/nfr-requirements/nfr-requirements.md`.
- [x] Create `aidlc-docs/construction/vitaltech-website/nfr-requirements/tech-stack-decisions.md`.
- [x] Validate requirements are measurable, consistent, and within the front-end-only release scope.

## Planning Questions
Replace every `[Answer]:` value with one letter. Choose **X** and add a concise explanation if none of the options applies.

## Question 1 - Front-end framework
Which implementation stack should the first release use?

A) Astro with TypeScript for a content-first, statically generated marketing site

B) React with Vite and TypeScript for a familiar component-driven single-page application

C) Next.js with TypeScript and static export for React-based routing and future expansion

D) Semantic HTML, modern CSS, and minimal JavaScript with no framework

X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 2 - Styling approach
Which styling approach should establish the premium dark-and-lime visual system?

A) CSS Modules or component-scoped CSS with design tokens

B) Tailwind CSS with a defined project theme and reusable utility patterns

C) One global modern CSS system with custom properties and documented component conventions

X) Other (please describe after [Answer]: tag below)

[Answer]: B

## Question 3 - Accessibility target
What accessibility conformance target should guide the first release?

A) WCAG 2.2 Level AA for public content, navigation, controls, focus states, contrast, and responsive layouts

B) WCAG 2.1 Level AA for public content, navigation, controls, focus states, contrast, and responsive layouts

C) Practical semantic and keyboard-accessibility checks without formal WCAG target

X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 4 - Performance target
Which performance standard should the front end target on representative mobile connections?

A) Aim for Core Web Vitals in the good range: LCP at or below 2.5 seconds, INP at or below 200 milliseconds, and CLS at or below 0.1

B) Optimize assets and avoid unnecessary JavaScript, without committing to numeric Core Web Vitals thresholds

C) Set custom performance thresholds (describe after [Answer]: tag below)

X) Other (please describe after [Answer]: tag below)

[Answer]: B

## Question 5 - Browser support
Which browser-support policy should apply at launch?

A) The current and immediately preceding major versions of Chrome, Edge, Firefox, and Safari; recent Android Chrome and iOS Safari

B) Current evergreen desktop browsers only

C) A specific organization-defined browser matrix (describe after [Answer]: tag below)

X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 6 - Search and sharing metadata
What discoverability scope should the first release include?

A) Per-page title, meta description, canonical URL placeholder, Open Graph metadata, sitemap, and robots directives

B) Per-page title and meta description only

C) Defer SEO and share metadata until after visual implementation

X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 7 - Analytics and consent
What tracking behavior should be included in the first release?

A) No analytics or tracking in the first release

B) Privacy-preserving analytics without cookie consent, subject to provider selection later

C) Analytics with consent management, subject to provider and legal requirements later

X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 8 - Quality verification
What verification baseline should be required before the front-end build is accepted?

A) Production build, static type checking where applicable, linting, responsive manual checks, keyboard navigation checks, and automated accessibility scanning

B) Production build, linting, and responsive manual checks only

C) Production build only; visual review determines release readiness

X) Other (please describe after [Answer]: tag below)

[Answer]: C

## Approval Status
After all answers are complete and any ambiguity is resolved, this NFR requirements plan will be used to generate the unit NFR artifacts.

[Answer]: NFR artifacts generated; awaiting explicit NFR Requirements approval
