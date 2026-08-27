# Theme Change Requirements - Vital Tech Myanmar Website

## Intent Analysis
- **User request**: Change the existing Vital Tech Myanmar website theme.
- **Request type**: User-experience enhancement and visual-system redesign.
- **Scope estimate**: System-wide front-end change affecting global tokens, shared components, and all seven public routes.
- **Complexity estimate**: Moderate. The information architecture and business content remain in place, while colors, typography, reusable layout patterns, and page composition are substantially refreshed.
- **Requirements depth**: Standard. The visual direction, scope, layout style, asset strategy, technical boundaries, and validation baseline are defined.

## Design Direction
Replace the near-black, acid-lime, and blue-ambient theme with a bright clean technology system:
- White or soft-gray page surfaces.
- Deep navy primary typography and navigation.
- Cobalt-blue accent, action, and focus treatments.
- Clean editorial layouts with generous whitespace, clear typographic hierarchy, crisp grids, and restrained blue accent areas.
- A substantial layout and typography refresh across the site rather than a color-only reskin.

## Functional Requirements

### FR-01: Global Visual System
The site shall use centralized visual tokens for bright neutral surfaces, deep navy text, cobalt-blue accents, borders, shadows, focus states, and responsive spacing.

### FR-02: Full-Site Application
The selected theme shall apply consistently to the shared header, footer, page heroes, calls to action, cards, navigation, and all public routes: Home, Services, Industries, About, Insights, Careers, and Contact.

### FR-03: Editorial Layout Refresh
The site shall replace the current dark, ambient presentation with clean editorial compositions that use whitespace, readable sections, structured grids, and restrained accent surfaces. Existing business content and route coverage shall remain available unless a layout change requires a presentational reflow.

### FR-04: Typography Refresh
The shared typography system shall be updated to support a clear editorial hierarchy with readable body content, distinct headings, and consistent responsive scaling.

### FR-05: Temporary Asset Strategy
Implementation shall proceed without final logo, palette, or image assets. Any temporary visual treatments shall be clearly replaceable, shall not fabricate official brand assets, and shall not block later insertion of approved materials.

### FR-06: Existing Behavior Preservation
The refresh shall preserve current static navigation, direct-contact placeholder behavior, discoverability metadata, sitemap generation, robots directives, and mobile-navigation progressive enhancement. It shall not add a backend, CMS, analytics, form processing, authentication, or deployment configuration.

## Non-Functional Requirements

### NFR-01: Accessibility
The refreshed design shall preserve semantic landmarks, keyboard navigation, visible focus indicators, reduced-motion support, and a WCAG 2.2 AA target. Navy, blue, and neutral color combinations must maintain usable text and interactive-control contrast.

### NFR-02: Responsiveness
Layouts, navigation, editorial grids, spacing, and typography shall remain usable from small mobile viewports through desktop displays.

### NFR-03: Performance
The theme refresh shall remain static-first and lightweight. Prefer CSS-led treatments and avoid adding unapproved large video, raster, tracking, or runtime dependencies.

### NFR-04: Maintainability
Theme values and reusable layout primitives shall remain centralized so final brand colors, logos, and imagery can be inserted without page-by-page rework.

### NFR-05: Validation
The implementation shall pass `npm run build`. The visual validation baseline remains source/static-output review; a live browser and assistive-technology review remains a manual release check because this environment has no browser-preview tool.

## Constraints and Exclusions
- Retain Astro, TypeScript, Tailwind CSS, and existing pinned dependencies.
- Do not alter service copy, direct-contact endpoints, or placeholder policy without new approved content.
- Do not add final logo, palette, imagery, analytics, form submission, API, CMS, database, authentication, deployment, or hosting work.
- Resiliency Baseline, Security Baseline, and Property-Based Testing remain disabled; they are N/A for this visual-only change.

## Acceptance Criteria
1. Every public route renders the bright clean technology theme with white or soft-gray surfaces, deep navy typography, and cobalt-blue accents.
2. The shared shell and reusable components use centralized visual tokens rather than isolated page-only overrides.
3. Layout and typography demonstrate the selected clean editorial direction while preserving all existing routes and business content.
4. Keyboard focus, readable contrast, responsive navigation, and reduced-motion behavior continue to work.
5. Temporary visual assets are replaceable and do not claim to be approved Vital Tech Myanmar branding.
6. `npm run build` succeeds after implementation.

## Deferred Inputs
- Official Vital Tech Myanmar logo.
- Final brand palette and imagery.
- Any future content, case-study, insight, or careers updates independent of the visual refresh.
