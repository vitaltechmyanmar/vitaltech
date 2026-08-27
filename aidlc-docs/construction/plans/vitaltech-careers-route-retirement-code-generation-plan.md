# Code Generation Plan - Vital Tech Careers Route Retirement

## Unit Context

- **Unit name**: `vitaltech-careers-route-retirement`
- **Project type**: Brownfield Astro static site.
- **Responsibility**: Retire the public Careers route and clean the centralized route/navigation/type surface while preserving six active public pages.
- **Code location**: Existing application source remains under `src/`; documentation remains under `aidlc-docs/`.
- **Dependencies**: None. Navigation is data-driven from `src/content/site.ts`; sitemap output is route-derived by Astro.
- **Owned data entities**: None. The `CareerOpportunity` static interface and empty export are retired rather than replaced.
- **Out of scope**: Shared header/footer/layout/contact components, robots/sitemap configuration, packages, infrastructure, hosting redirects, and visual styling.

## Story and Requirement Traceability

| Source | Coverage in this unit |
|---|---|
| Requirements 1-3 | Remove the route, navigation, metadata, empty careers export, route literal, and unused type. |
| Requirements 4-7 | Preserve six routes, provide no redirect, leave shared components untouched, and update active build/integration instructions. |
| US-07 criterion 1 | Generated navigation exposes only Home, Services, Industries, About, Insights, and Contact. |
| US-07 criterion 2 | The repository provides no replacement or redirect for the legacy `/careers` URL. |
| US-07 criterion 4 | Both desktop and mobile navigation derive from the same retained six-item central data. |

## Generation Plan

This document is the single source of truth for this unit’s code generation. Execute steps in order and mark each checkbox immediately upon completion.

### Part 1 - Planning

- [x] **Step 1: Analyze the unit context.** Confirm the approved requirements, story mapping, central navigation dependency, and static-host 404 decision.
- [x] **Step 2: Inspect existing target files.** Confirm the Careers route source, central content registry, route type union, and active test instructions.
- [x] **Step 3: Define the bounded change surface.** Limit source changes to `src/types/site.ts`, `src/content/site.ts`, and removal of `src/pages/careers.astro`; leave shared components and generated `dist/` untouched.
- [x] **Step 4: Define active-documentation updates.** Change `build-instructions.md` and `integration-test-instructions.md` from seven-route/Careers behavior to six-route/no-Careers behavior; preserve historical artifacts.
- [x] **Step 5: Define validation.** Run `npm run build`, confirm no generated Careers route or sitemap entry, confirm no generated Careers navigation test IDs, confirm source cleanup, and run `git diff --check`.
- [x] **Step 6: Create this code-generation plan.**
- [x] **Step 7: Obtain approval for the complete plan.**

### Part 2 - Generation

- [x] **Step 8: Retire Careers route types in `src/types/site.ts`.** Remove the `/careers` `RoutePath` literal and the unused `CareerOpportunity` interface. Do not alter unrelated type definitions.
- [x] **Step 9: Retire Careers static content in `src/content/site.ts`.** Remove the `CareerOpportunity` import, Careers navigation item, empty `careers` export, and `/careers` metadata entry. Preserve the remaining six navigation items, contact channels, technology icons, and page metadata.
- [x] **Step 10: Delete `src/pages/careers.astro`.** Use the delete operation; do not replace it with a redirect, placeholder, or duplicate route.
- [x] **Step 11: Update active build instructions.** In `aidlc-docs/construction/build-and-test/build-instructions.md`, state that build output contains the six active pages and explicitly exclude a Careers page.
- [x] **Step 12: Update active integration-test instructions.** In `aidlc-docs/construction/build-and-test/integration-test-instructions.md`, remove Careers route/contact assertions and add checks for its absent generated route, sitemap entry, and navigation identifiers.
- [x] **Step 13: Create the code-generation summary.** Create `aidlc-docs/construction/vitaltech-careers-route-retirement/code/code-generation-summary.md` with the source/documentation changes, intentional non-changes, and pending build validation scope.
- [x] **Step 14: Validate the implementation.** Run `npm run build`; verify no `dist/careers/`, no `/careers/` in `dist/sitemap-0.xml`, and no desktop/mobile/footer Careers navigation identifiers in generated HTML; verify source no longer exports or imports the retired type/route; run `git diff --check`.
- [x] **Step 15: Record implementation completion.** Mark completed plan steps, update workflow state, and present the code-generation review gate.

## Expected Interfaces and Contracts

- `navigation` remains the single source for the header, mobile navigation, and footer; it will contain six items.
- `pageMetadata` continues to satisfy `Record<RoutePath, PageMetadata>` after both its route type and Careers entry are removed.
- Astro continues to derive the static page and sitemap set from route files; no sitemap configuration edit is required.
- The retired `/careers` path has no repository-level redirect or replacement.

## Validation Criteria

1. `src/pages/careers.astro` no longer exists.
2. `src/content/site.ts` and `src/types/site.ts` no longer reference the retired Careers route or `CareerOpportunity` type.
3. A fresh production build succeeds and generates only the six active public pages.
4. Generated output contains no `dist/careers/`, `/careers/` sitemap entry, or Careers navigation test ID.
5. `git diff --check` exits successfully.

## Extension Compliance

| Extension | Status | Applicability |
|---|---|---|
| Resiliency Baseline | Disabled | N/A; route retirement introduces no resiliency design. |
| Security Baseline | Disabled | N/A; no security extension is enabled and no authentication/data handling changes occur. |
| Property-Based Testing | Disabled | N/A; no property-based testing extension is enabled for this static removal. |
