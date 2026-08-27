# Code Generation Plan - Vital Tech Myanmar Website

## Unit Context
- **Unit**: `vitaltech-website`
- **Project type**: Greenfield, single front-end application.
- **Application-code location**: `d:\AI-DLC-Workshop\vitaltech` (workspace root only).
- **Documentation location**: `aidlc-docs/construction/vitaltech-website/code/`.
- **Stack**: Astro with TypeScript and Tailwind CSS, using exact pinned dependency versions selected during package setup.
- **Architecture**: Static public website with seven routes, centralized typed content, scoped client hydration for mobile navigation, no backend, no CMS, no analytics, no form submission, and no deployment configuration.

## Story Coverage
| Story | Planned implementation coverage |
|---|---|
| US-01 | Home value proposition, priority services, visual hero, and direct-contact CTA. |
| US-02 | Section-based Services route for Software Development, Cloud, DevOps, System Integration, and Managed IT. |
| US-03 | Industries and approved-evidence sections driven by centralized content. |
| US-04 | About route with company approach, credibility, and approved team or company material placeholders. |
| US-05 | Insights listing with honest empty-state behavior and optional detail destinations. |
| US-06 | Configurable phone, email, and WhatsApp actions in header, footer, page CTAs, Careers, and Contact. |
| US-07 | Careers route with application-discovery contact path. |
| US-08 | Semantic shell, responsive navigation, focus states, route metadata, and mobile-first layout. |

## Dependencies and Interfaces
- **Internal dependencies**: centralized content registry, metadata resolver, navigation model, contact-action resolver, visual token system, and mobile navigation island.
- **External dependencies**: Astro, TypeScript, Tailwind CSS, and only essential first-party build integrations selected with pinned versions in the package manifest.
- **No owned data entities**: all content is static typed source data; no database, API, queue, cache, or repository layer is created.
- **No external service dependency**: direct contact links are static and centrally configured; official endpoint values remain clearly labelled placeholders until supplied.

## Single Source of Truth
This plan defines the complete approved sequence for code generation. After approval, steps must be executed in order and each completed step must be marked `[x]` immediately.

## Generation Steps

### Step 1 - Set Up the Astro Application Foundation
- [x] Create the root package manifest, Astro configuration, TypeScript configuration, ignore rules, and Tailwind integration files at the workspace root.
- [x] Install exact pinned versions of Astro, TypeScript, Tailwind CSS, and required official integration packages only after the plan is approved.
- [x] Create the base `src/` and `public/` application structure.
- [x] Configure static output, project metadata defaults, and a configurable site URL placeholder.

**Planned paths**: `package.json`, `astro.config.mjs`, `tsconfig.json`, `.gitignore`, Tailwind integration/configuration files as appropriate to the selected pinned version, `src/`, `public/`.

### Step 2 - Implement Typed Content, Metadata, Navigation, and Contact Models
- [x] Create TypeScript types for routes, metadata, services, industries, insights, careers, contact channels, and page content.
- [x] Create centralized content modules with professional, clearly replaceable launch copy and approved placeholder structures where final company material is not present.
- [x] Implement the metadata resolver, navigation model, and contact-action resolver.
- [x] Keep contact actions visibly labelled as placeholders until official values are provided.

**Planned paths**: `src/content/`, `src/lib/`, `src/types/`.

### Step 3 - Establish the Visual Token System and Global Base Styles
- [x] Define Tailwind theme values and global styling primitives for near-black surfaces, acid-lime accents, low-opacity dark-blue ambient glow, typography, spacing, focus states, and responsive layouts.
- [x] Create accessible global element styles and reduced-motion behavior.
- [x] Implement lightweight CSS-led visual effects; do not add large video or raster hero assets solely to imitate the reference.

**Planned paths**: `src/styles/`, Tailwind theme/configuration file when required by the selected pinned version.

### Step 4 - Build the Shared Application Shell and Interactive Navigation
- [x] Create shared layout, header, footer, hero, section-heading, and contact-action components.
- [x] Create the narrowly scoped mobile-navigation island with stable `data-testid` attributes for its toggle and route links.
- [x] Implement keyboard-accessible menu behavior, visible focus styling, and static-link fallback patterns.
- [x] Ensure shared components read centralized navigation and contact models rather than hard-coded values.

**Planned paths**: `src/layouts/`, `src/components/`, `src/components/islands/`.

### Step 5 - Build Home, Services, Industries, and About Routes
- [x] Implement the Home page with premium dark hero, priority service presentation, credibility content, and direct-contact CTA.
- [x] Implement the section-based Services page with all five approved service groups and accessible in-page navigation.
- [x] Implement the Industries route with industries served, solution capabilities, and only approved evidence structures.
- [x] Implement the About route with company approach and approved-content placeholders.

**Planned paths**: `src/pages/index.astro`, `src/pages/services.astro`, `src/pages/industries.astro`, `src/pages/about.astro`, reusable `src/components/` sections.

### Step 6 - Build Insights, Careers, and Contact Routes
- [x] Implement the Insights route with card listing and a truthful empty state when no approved articles exist.
- [x] Implement the Careers route with company context, opportunity structures, and configured email or WhatsApp application-discovery action.
- [x] Implement the Contact route with clear phone, email, and WhatsApp presentation, no form, and non-deceptive placeholder behavior.

**Planned paths**: `src/pages/insights.astro`, `src/pages/careers.astro`, `src/pages/contact.astro`.

### Step 7 - Add Static Discoverability and Public Assets
- [x] Apply unique titles, descriptions, canonical placeholders, and Open Graph metadata to every route.
- [x] Generate sitemap and robots directives as part of the static site output.
- [x] Add minimal public assets such as favicon and social-preview placeholder only when they can be created or sourced without unapproved external content.

**Planned paths**: `src/pages/`, `public/`, Astro configuration and/or build-time metadata modules.

### Step 8 - Verify the Production Build and Perform Visual Review
- [x] Run the deterministic production build command.
- [x] Resolve build failures before marking the implementation complete.
- [x] Perform the selected static-output and source-level visual review: route coverage, responsive navigation, contact presentation, content legibility, focus styles, and the approved dark/lime/blue visual system. A live browser rendering check remains manual because no browser-preview tool is available in this environment.
- [x] Do not add automated test suites, lint gates, or accessibility scanners because they are not selected first-release acceptance gates.

**Planned command**: package-defined production build command, expected to be `npm run build` after package setup.

### Step 9 - Create Code Generation Summary Documentation
- [x] Create a markdown summary of created application files, implemented story coverage, configuration points, known placeholder content, and build result.
- [x] Store the summary only in `aidlc-docs/construction/vitaltech-website/code/`.

**Planned path**: `aidlc-docs/construction/vitaltech-website/code/code-generation-summary.md`.

## Explicitly Excluded Generation Work
- Backend logic, API layer, repository layer, database entities or migrations, form submission, analytics, CMS integration, authentication, deployment artifacts, infrastructure configuration, automated test suites, and third-party tracking scripts.

## Expected Scope
- **Generation steps**: 9.
- **Application outcome**: a responsive, static Astro website with seven public routes, reusable components, typed content, configured metadata, and safe direct-contact placeholders.
- **Validation outcome**: successful production build and documented visual review.

## Approval Status
[Answer]: Approved and executed - 2026-08-27T14:54:41Z
