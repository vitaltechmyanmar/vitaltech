# Unit Test Execution

## Current Test Scope

No automated unit-test framework or test suite is configured for this static Astro site. The approved theme refresh adds no executable business logic, API, data transformation, or test runner. Do not run `npm test` unless a test runner and tests are explicitly added in a future change.

## Available Automated Validation

### 1. Execute the production build

```powershell
npm run build
```

A successful build validates Astro component imports, TypeScript-backed content, Tailwind CSS compilation, route templates, and static generation.

### 2. Check visual-system source contracts

Confirm `src/styles/global.css` retains:

- `color-scheme: dark`
- original charcoal, warm-neutral, ember, and secondary-blue semantic roles
- visible `:focus-visible` treatment
- `prefers-reduced-motion` fallback

Confirm affected shared components and routes use semantic tokens rather than stale light or cobalt-only utility classes.

### 3. Review results

- **Automated unit-test result**: N/A; no test suite exists.
- **Coverage target**: N/A; coverage tooling is not configured.
- **Deterministic validation baseline**: Astro build plus focused source-contract checks.
- **Recorded theme-refresh result**: Build and source visual-system checks passed on 2026-08-28.

## Future Test Suite Guidance

If tests are added later, use an approved pinned toolchain and cover pure metadata/content utilities and critical interactive behavior before representing coverage or test totals as executed.
