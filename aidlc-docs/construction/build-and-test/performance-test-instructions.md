# Performance Test Instructions

## Applicability

Formal load, stress, throughput, and concurrent-user testing is N/A. This is a static Astro site with no backend, API, database, queue, cache, session, or runtime service. The JPG branding update introduces no new dependency, external request, or numeric performance target.

## Static Asset Baseline

The visible header logo and favicon use the existing local `public/logo.jpg` file:

- no external font, image, icon package, or design-library request
- no new runtime JavaScript or framework
- static asset served from the public directory
- existing mobile navigation enhancement and reduced-motion behavior remain unchanged

## Repeatable Check

```powershell
npm run build
```

Review successful static generation and emitted assets in `dist/`. This verifies the asset pipeline but is not a browser runtime performance measurement.

## Manual Browser Review

1. Run `npm run build`.
2. Start `npm run preview` manually.
3. Review header logo rendering on desktop and mobile sizes.
4. Confirm browser favicon rendering is acceptable at small square sizes.
5. Capture performance metrics only if future acceptance thresholds and measurement tooling are approved.

## Not Executed

- **Load, stress, throughput, and benchmark tests**: N/A; no runtime target or threshold.
- **Performance report**: N/A; no metric collection tool or target is configured.
