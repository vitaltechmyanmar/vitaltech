# Service Detail Pages

This document describes the individual service detail pages implemented for Vital Tech Myanmar, including routes, design direction, content model, assets, and maintenance guidance.

## Overview

Each service in `src/content/site.ts` now has a dedicated prerendered detail page in addition to the `/services` hub page.

- **Hub:** `/services` — overview page listing all services as cards linking to detail pages.
- **Detail pages:** `/services/<service-id>` — one page per service, generated statically from `services` via `src/pages/services/[id].astro` (`getStaticPaths`).

Service slugs are the existing `service.id` values (e.g. `/services/cloud-managed-service`, `/services/cicd-automation`, `/services/infrastructure-as-code`, `/services/code-repositories-artifact-management`, `/services/system-integration`, `/services/devops-consulting`).

## Design direction

The detail pages are designed as **technical delivery playbooks**:

- **Audience:** technical leads and engineering/operations decision-makers.
- **Tone:** rich, detailed, and technically credible (qualitative; no fabricated metrics or unapproved customer claims).
- **Visuals:** a dedicated abstract illustration per service, plus structured sections, badges, cards, tooling icons, and an on-page section navigation for scannable long-form content.

## Page structure

Implemented in `src/pages/services/[id].astro`:

1. **Hero/profile** — back link, service kicker/title/summary, badges (index, core capability when featured, audience), primary CTA, and per-service illustration panel.
2. **On-page navigation** — in-page links to available sections.
3. **Technical overview** — intro, technical summary, and primary outcome.
4. **Technical challenges** — problem space the service addresses.
5. **Engagement scope** — boundaries: *Included*, *Inputs (from your team)*, and *Outputs & artifacts*.
6. **Delivery model** — phased approach/execution flow.
7. **Tooling & platforms** — service-relevant technologies mapped to `technologyStack` icons/labels.
8. **Engineering principles** — practices and controls emphasized.
9. **Detailed deliverables** — concrete outputs and artifacts.
10. **Technical FAQ** — native `<details>/<summary>` accordion (no client-side dependency).
11. **Fit and context** — when the service is most relevant.
12. **Related capabilities** — links to other service detail pages.
13. **Call to action** — service-specific discussion prompt.

Sections render conditionally when the corresponding content is present.

## Content model

Types are defined in `src/types/site.ts`; all service copy and metadata remain centralized in `src/content/site.ts`.

### `Service` fields

| Field | Type | Purpose |
|---|---|---|
| `id` | `string` | Canonical slug/route segment (`/services/<id>`). |
| `title`, `kicker`, `summary`, `outcome`, `capabilities` | existing | Core service content (used by cards/hub and as fallbacks). |
| `featured` | `boolean?` | Featured flag (home/cards/badges). |
| `metaTitle`, `metaDescription` | `string?` | Optional per-service SEO overrides. |
| `intro` | `string?` | Overview text (falls back to `summary`). |
| `technicalSummary` | `string?` | Deeper technical positioning (falls back to `intro`/`summary`). |
| `illustration` | `{ src, alt }?` | Per-service illustration asset and accessible alt text. |
| `challenges` | `string[]?` | Technical challenges/problem space. |
| `deliverables` | `string[]?` | Detailed outputs (falls back to `capabilities` on detail page). |
| `scope` | `{ included, inputs?, outputs? }?` | Engagement boundaries, prerequisites, and artifacts. |
| `approach` | `{ title, description }[]?` | Delivery phases/steps. |
| `tooling` | `string[]?` | Tool/platform labels; matched to `technologyStack` for icons when labels align. |
| `principles` | `string[]?` | Engineering principles/controls. |
| `idealFor` | `string[]?` | Fit/context scenarios. |
| `faqs` | `{ question, answer }[]?` | Technical FAQ items. |

### Supporting types

- `ServiceApproachStep`, `ServiceIllustration`, `ServiceScope`, `ServiceFaq` in `src/types/site.ts`.
- Path types: `RoutePath` (static nav/metadata routes), `ServiceRoutePath` (`/services/${string}`), `PagePath` (`RoutePath | ServiceRoutePath`).

## Routing, layout, and helpers

- **`src/pages/services/[id].astro`** — prerendered detail route from `services`.
- **`src/pages/services.astro`** — hub page linking to detail pages.
- **`src/components/ServiceCard.astro`** — links to `/services/${service.id}`.
- **`src/layouts/BaseLayout.astro`** — accepts `PagePath`; uses the actual path for canonical URL and resolves active nav path (service detail pages highlight **Services**).
- **`src/lib/site.ts`** — `getCanonicalUrl(pathname: PagePath)`, `getActiveRoutePath`, `getServicePath`, `getServiceById`, `getServiceMetadata` (derives title/description with per-service overrides and fallbacks).
- **`src/components/ui/Card.astro`** — supports `as="details"` for FAQ accordions.

Static route metadata remains in `pageMetadata` (`RoutePath`); service detail metadata is derived per service via `getServiceMetadata`.

## Assets

Per-service illustrations live in `public/service-illustrations/`:

- `cloud-managed-service.svg`
- `cicd-automation.svg`
- `infrastructure-as-code.svg`
- `code-repositories-artifact-management.svg`
- `system-integration.svg`
- `devops-consulting.svg`

Each service references its illustration via `illustration.src`/`illustration.alt` in `src/content/site.ts`. To change an illustration, replace the SVG (or point to another asset in `public/`) and keep alt text accurate.

Tooling icons are resolved from `technologyStack` in `src/content/site.ts` (assets in `public/technology-icons/`). If a `tooling` label does not match a `technologyStack` entry, the page renders a text badge fallback.

## How to add or update a service

1. Add/update the service object in `src/content/site.ts` (ensure a unique `id`; provide detail fields and `illustration`/`metaDescription` as needed).
2. Add the corresponding illustration to `public/service-illustrations/` and reference it from the service.
3. `getStaticPaths`, `/services` hub, cards, related services, and sitemap entries update from centralized data—no new route file is required for an additional service using the existing template.
4. If navigation, static route set, or top-level metadata must change, follow `AGENTS.md` (update `RoutePath`, `pageMetadata`, `navigation`, and matching page files as applicable).

## Verification

- `npm run build` — production build (prerendered pages + Vercel output). Confirms routes generate without errors.
- `npm run dev` or `vercel dev` — local review (Vercel adapter does not support `astro preview`).
- Manually verify: `/services` hub links, each `/services/<id>` page, canonical/OG metadata, Services nav active state on detail pages, illustration rendering/alt text, and contact CTA flow.

## Related files

- `src/pages/services/[id].astro`
- `src/pages/services.astro`
- `src/components/ServiceCard.astro`
- `src/content/site.ts`
- `src/types/site.ts`
- `src/lib/site.ts`
- `src/layouts/BaseLayout.astro`
- `src/components/ui/Card.astro`
- `public/service-illustrations/`
