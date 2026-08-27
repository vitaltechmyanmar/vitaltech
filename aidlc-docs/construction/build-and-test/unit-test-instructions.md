# Unit Test Execution

## Current Test Scope
No automated unit-test framework or test suite was included in the approved first-release scope. The project package manifest has no `test` script. Do not run `npm test` unless a test runner and corresponding tests are intentionally added later.

The executable validation baseline is the deterministic production build plus source-level review of the typed content registry, metadata resolver, shared components, and routes.

## Run the Available Validation

### 1. Execute the production build
Run from `d:\AI-DLC-Workshop\vitaltech`:

```powershell
npm run build
```

A successful build validates that Astro can process all page imports, TypeScript-backed content, component templates, and static generation paths.

### 2. Review the validation result
- **Expected automated unit-test result**: N/A; no unit-test suite is configured.
- **Expected build result**: successful completion with generated `dist/` output.
- **Coverage target**: N/A; coverage tooling was not selected.
- **Test report location**: N/A; no test runner or coverage reporter exists.
- **Previously verified baseline**: the production build passed on 2026-08-27, and representative Astro and TypeScript files had no diagnostics.

### 3. Perform focused source checks
For changes to site behavior, review the relevant source before rebuilding:
- Central content, navigation, metadata, and contact actions: `src/content/site.ts`, `src/lib/site.ts`, and `src/types/site.ts`.
- Shared layout and navigation behavior: `src/layouts/BaseLayout.astro`, `src/components/SiteHeader.astro`, and `src/components/SiteFooter.astro`.
- Individual page behavior: the matching file in `src/pages/`.

## When a Future Unit-Test Suite Is Added
1. Add a pinned, approved test runner and an npm script such as `test`.
2. Create tests for pure content and resolver behavior first, including metadata resolution and contact-action placeholder behavior.
3. Run the project-defined test command after `npm run build`.
4. Record the actual total, passed, failed, and coverage values in the Build and Test summary.

Until then, do not represent unit tests or coverage as executed.
