# Build and Test Summary - Careers Route Retirement

## Scope

This stage validates retirement of the public Careers route while preserving the six active Vital Tech Myanmar static pages and approved direct-contact channels. The retired `/careers` URL has no repository-level redirect and is left to the static host's normal 404 behavior.

## Build Status

- **Build tool**: npm with Astro 7.2.8.
- **Build command**: `npm run build`.
- **Build status**: Success.
- **Build duration**: 2.31 seconds, as reported by Astro on 2026-08-27.
- **Build artifacts**: Home at `dist/index.html`; static route directories for About, Contact, Industries, Insights, and Services; `robots.txt`; `sitemap-index.xml`; `sitemap-0.xml`; technology icon assets; and compiled output under `dist/_astro/`.
- **Route count**: 6 pages built. No Careers route was generated.

## Test Execution Summary

### Route Retirement and Integration Checks

- **Active route generation**: Pass. The final build generated Home, About, Contact, Industries, Insights, and Services only.
- **Retired route output**: Pass. `dist/careers/` is absent.
- **Navigation output**: Pass. Generated HTML contains no `desktop-nav-careers-link`, `mobile-nav-careers-link`, `footer-nav-careers-link`, or `/careers` reference.
- **Sitemap output**: Pass. `dist/sitemap-0.xml` lists the six active URLs and has no `/careers/` entry.
- **Source cleanup**: Pass. Application source contains no `CareerOpportunity`, `/careers`, or Careers navigation item.
- **Phone and email links**: Pass. Generated HTML includes `tel:+959443167419`, `tel:+959964444882`, and `mailto:info@vitaltechmyanmar.com`.
- **Public WhatsApp output**: Pass. Generated HTML contains no WhatsApp action. The generic internal `ContactChannel` type still permits the value, but no configured public channel uses it.
- **Whitespace check**: Pass. `git diff --check` exited successfully; only existing LF-to-CRLF conversion warnings were reported.

### Unit Tests

- **Status**: N/A.
- **Reason**: The approved static-site scope has no configured unit-test runner, test script, or coverage tool. The Astro production build is the available deterministic automated validation baseline.

### Performance Tests

- **Status**: N/A.
- **Reason**: No backend, API, database, runtime service, or measurable performance target is in scope. The static build completed successfully.

### Additional Tests

- **Contract tests**: N/A; no service boundaries or APIs exist.
- **Security suite**: N/A; no security test tool is configured and the Security Baseline extension is disabled.
- **End-to-end suite**: N/A; no browser automation tool is configured.
- **Manual browser/device checks**: Pending. Before public release, use `npm run preview` manually to verify narrow-screen menu interaction, keyboard navigation, and device-specific phone/email handoff.

## Active Instruction Files

- `build-instructions.md`
- `unit-test-instructions.md`
- `integration-test-instructions.md`
- `performance-test-instructions.md`
- `build-and-test-summary.md`

## Extension Compliance

- **Resiliency Baseline**: N/A — disabled in `aidlc-docs/aidlc-state.md`.
- **Security Baseline**: N/A — disabled in `aidlc-docs/aidlc-state.md`.
- **Property-Based Testing**: N/A — disabled in `aidlc-docs/aidlc-state.md`.

## Overall Status

- **Build**: Success.
- **Automated static-route and generated-output checks**: Pass.
- **Manual browser/device checks**: Pending before public release.
- **Ready for Operations**: Pending approval of this Build and Test result. Operations remains a placeholder; no deployment work is in scope.
