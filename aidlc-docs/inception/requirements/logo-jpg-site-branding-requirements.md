# Requirements — Local JPG Site Logo and Favicon

## Intent Analysis

- **User request**: Use the uploaded local `public/logo.jpg` as the visible site logo and favicon.
- **Request type**: Visual-branding enhancement.
- **Scope**: Two shared Astro integration points plus validation; no content, route, metadata, dependency, or infrastructure change.
- **Complexity**: Minimal. The requested asset exists and the current header and favicon integration points are known.

## Functional Requirements

1. Replace the current decorative CSS `V` mark in `src/components/SiteHeader.astro` with the local `/logo.jpg` asset.
2. Preserve the existing adjacent visible `Vital Tech` wordmark, home destination (`/`), `site-logo-link` test ID, and accessible home-link name.
3. Render the header image at a constrained, aspect-ratio-preserving size using its intrinsic `1674 × 1516` dimensions; do not lazy-load the above-the-fold logo.
4. Make the image decorative (`alt=""`) because the parent home link already supplies the accessible name and the adjacent wordmark remains visible.
5. Change the global favicon link in `src/layouts/BaseLayout.astro` from `/favicon.svg` to `/logo.jpg` with MIME type `image/jpeg`.
6. Leave the Open Graph image (`/og-preview.svg`), current routes, navigation, contact links, page metadata, mobile-menu behavior, and all other public assets unchanged.

## Non-Functional Requirements

1. Use only the already-uploaded local asset in `public/`; add no dependency, remote asset, font, image conversion, or runtime behavior.
2. Preserve header responsiveness and avoid layout shift by supplying intrinsic image dimensions.
3. Build successfully with `npm run build`.
4. Confirm generated HTML uses `/logo.jpg` for the favicon and header logo while retaining the home-link test ID and accessible labeling.
5. Acknowledge that the non-square JPEG is appropriate for the visible header with `w-auto`, but browser favicon rendering can letterbox or reduce its fine detail at small square sizes. The requested direct JPG favicon is accepted for this minimal change.

## Out of Scope

- Creating PNG, ICO, Apple touch-icon, manifest, or multi-resolution favicon variants.
- Editing or deleting `public/favicon.svg`.
- Updating social/Open Graph media.
- Changing colors, typography, navigation, copy, routes, or page content.
- Adding browser-test tooling or packages.

## Extension Configuration

- **Resiliency Baseline**: Disabled in the existing project state; not applicable to a local static-asset integration.
- **Security Baseline**: Disabled in the existing project state; no user data, credential, request, or security boundary changes.
- **Property-Based Testing**: Disabled in the existing project state; no executable business logic or pure transformation is added.

## Acceptance Criteria

- The shared header displays `/logo.jpg` in place of the CSS `V` mark, retains its existing home-link semantics and `site-logo-link` test ID, and does not change navigation behavior.
- Every generated page declares `/logo.jpg` as its JPEG favicon.
- The existing Open Graph image and all non-branding behavior remain unchanged.
- The production build and whitespace validation pass.

## Content Validation

This document contains plain Markdown only. It has no Mermaid, ASCII art, JSON, YAML, or embedded diagrams; Markdown headings, inline-code paths, and escaped image `alt` text were verified before creation.
