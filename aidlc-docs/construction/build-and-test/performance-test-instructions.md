# Performance Test Instructions

## Applicability
Formal load, stress, throughput, and concurrent-user testing is not applicable to this approved first-release scope. The deliverable is a static Astro site without a backend, API, database, queue, cache, user sessions, or runtime service to load test. No numeric Core Web Vitals, response-time, or throughput target was selected.

## Performance Baseline
The implementation uses build-time static generation, minimal client-side enhancement limited to mobile navigation, CSS-led visual effects, and no intentionally large hero video or raster media. These are architectural optimizations, not measured performance guarantees.

## Repeatable Build-Time Check

```powershell
npm run build
```

Review the command output for successful static generation and inspect `dist/_astro/` for emitted assets. A build success does not measure browser runtime performance, but it confirms the static asset pipeline completes.

## Manual Browser Review When a Preview Environment Is Available
1. Run `npm run build`.
2. Start `npm run preview` manually in a terminal.
3. Review Home and Services on current desktop and mobile browsers.
4. Confirm the navigation opens and closes smoothly, content remains readable, and decorative glow effects do not obscure text.
5. Check that reduced-motion preferences preserve usable content and interaction.
6. Capture browser performance data only if a future release defines measurable acceptance thresholds and a test environment.

## Not Executed
- **Load testing**: N/A; no server-side workload or threshold is defined.
- **Stress testing**: N/A; no stateful runtime system is in scope.
- **Throughput testing**: N/A; no API or transaction endpoint exists.
- **Performance report**: N/A; no benchmark tool or numeric target was selected.

## Future Measurable Performance Testing
Before adding performance tooling, define target devices, representative network conditions, page-level Core Web Vitals targets, asset budgets, and an approved toolchain. Then record actual outcomes against those explicit targets rather than inferring them from a build result.
