# Technology Stack Decisions - Vital Tech Myanmar Website

## Decision Record

### Front-End Framework: Astro with TypeScript
**Decision**: Use Astro with TypeScript to build the public website as statically generated output.

**Rationale**:
- The website is content-first, multi-route, and does not require authenticated application behavior or a backend.
- Astro supports static output and minimizes client-side JavaScript by default, matching the performance direction.
- Component composition supports the approved application design without requiring a large runtime for static page content.
- TypeScript supports the centralized typed content and contact configuration model.

**Consequences**:
- The project will use Astro page routes and components for the seven public pages.
- Interactive behavior is limited to scoped client-side code where it is genuinely needed, such as mobile navigation.
- Package versions must be pinned in the implementation manifest.

### Styling: Tailwind CSS
**Decision**: Use Tailwind CSS with an explicit project theme and reusable utility patterns.

**Rationale**:
- A defined theme can consistently apply the near-black base, lime accents, dark-blue ambient detail, typography scale, spacing, focus states, and responsive behavior.
- Utility patterns allow efficient reuse across page sections and component variants.
- The approach supports a cohesive premium editorial interface without repeated local styling rules.

**Consequences**:
- Define project-level theme tokens before building page components.
- Encapsulate recurring visual patterns through component conventions rather than ad hoc utility duplication.
- Maintain visible focus, contrast, and responsive states as part of every interactive component pattern.

### Accessibility: WCAG 2.2 Level AA
**Decision**: Target WCAG 2.2 Level AA for public routes and interactions.

**Rationale**:
- The company website is a public entry point for prospective clients and candidates.
- Semantic content, keyboard access, focus visibility, readable contrast, and meaningful alternatives support all visitor journeys.

**Consequences**:
- Critical information cannot rely on decorative outlined type alone.
- Navigation, menu controls, direct-contact actions, and links must be keyboard accessible and visibly focused.
- Ambient blue visual elements remain decorative and must not obstruct text or interaction clarity.

### Performance: Optimized Static Delivery Without Numeric Thresholds
**Decision**: Optimize assets and avoid unnecessary JavaScript; do not commit to numeric Core Web Vitals thresholds in the first release.

**Rationale**:
- The selected static architecture already favors lean output.
- No representative production hosting or measured device/network baseline has been selected.
- The project can prevent known performance risks without asserting unverifiable numeric outcomes.

**Consequences**:
- Prefer optimized images, responsive dimensions, modern fonts, static content, and lightweight decorative effects.
- Avoid autoplay media and nonessential third-party scripts.
- Use client-side JavaScript only for required interaction.

### Browser Support: Current and Previous Evergreen Versions
**Decision**: Support the current and immediately preceding major versions of Chrome, Edge, Firefox, and Safari, plus recent Android Chrome and iOS Safari.

**Rationale**:
- This coverage serves Myanmar business visitors across desktop and mobile while avoiding unsupported legacy-browser complexity.

**Consequences**:
- Use standards-based HTML, CSS, and JavaScript with progressive enhancement.
- Verify critical navigation and contact behavior across the supported browser family during visual review.

### Discoverability: Full Metadata and Static Indexing Assets
**Decision**: Include title, description, canonical placeholder, Open Graph metadata, sitemap, and robots directives.

**Rationale**:
- The site must be discoverable and shareable as a public business website.
- Static generation supports predictable page metadata and indexing assets.

**Consequences**:
- Maintain metadata alongside page content in centralized typed modules.
- Make the site base URL configurable until production domain information is supplied.
- Do not publish unapproved claims in page or share-preview metadata.

### Analytics: None in First Release
**Decision**: Include no analytics or tracking scripts in the first release.

**Rationale**:
- No provider, legal expectation, consent approach, or business measurement requirement has been approved.
- Omitting tracking keeps the initial front end lightweight and avoids introducing consent decisions outside scope.

**Consequences**:
- No tracking SDK, cookie banner, tag manager, or analytics-specific configuration is included.
- Analytics can be introduced later through a separately approved change.

### Release Verification: Production Build and Visual Review
**Decision**: A successful production build is the required automated acceptance gate; visual review determines release readiness.

**Rationale**:
- This directly follows the selected quality-verification baseline.

**Consequences**:
- The construction plan must include a deterministic production build command.
- Automated linting, type checking, accessibility scanning, and test suites are not first-release acceptance gates.
- Visual review must explicitly check route coverage, contact-action appearance, mobile navigation, visual hierarchy, and content legibility.

## Deferred Decisions
| Topic | Deferral rationale |
|---|---|
| Production host and deployment | Out of scope for first release; Infrastructure Design is skipped. |
| Production domain | Not supplied; use configurable canonical and contact placeholders. |
| Analytics provider and consent | Analytics is intentionally excluded from first release. |
| CMS | Content is maintained in typed source modules for first release. |
| Contact submission provider | Direct contact links replace a form workflow in this release. |
| Specific package versions | Pin exact versions when the implementation manifest is created during Code Generation. |

## Extension Compliance
| Extension | Status | Rationale |
|---|---|---|
| Resiliency Baseline | N/A | Disabled during Requirements Analysis. |
| Security Baseline | N/A | Disabled during Requirements Analysis. |
| Property-Based Testing | N/A | Disabled during Requirements Analysis. |
