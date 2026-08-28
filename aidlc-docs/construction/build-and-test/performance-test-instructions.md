# Performance Test Instructions

## Applicability

Formal load, stress, throughput, and concurrent-user testing remains N/A. This is a static Astro site with no backend, API, database, queue, cache, session, or runtime service. No numeric Core Web Vitals, asset budget, or response-time target was selected for the theme refresh.

## Theme Performance Baseline

The refreshed design uses compiled CSS and existing local assets only:

- no external font or design-library request
- no new image, illustration, icon package, or runtime framework
- CSS-led grid, surface, and ambient treatments
- existing minimal client-side enhancement for mobile navigation
- reduced-motion fallback retained

## Repeatable Check

```powershell
npm run build
```

Review successful static generation and emitted assets in `dist/_astro/`. This confirms the asset pipeline but does not constitute browser-runtime performance measurement.

## Manual Browser Review

1. Run `npm run build`.
2. Start `npm run preview` manually.
3. Review Home and Services on current desktop and mobile browsers.
4. Confirm dark surfaces, glow/ambient treatment, cards, and outlined display text remain readable.
5. Confirm reduced-motion preferences preserve usable content and interaction.
6. Capture performance metrics only when future acceptance thresholds and a measurement toolchain are approved.

## Not Executed

- **Load, stress, throughput, and benchmark tests**: N/A; no applicable runtime target or threshold.
- **Performance report**: N/A; no metric collection tool or target was selected.
