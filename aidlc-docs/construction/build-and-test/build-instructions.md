# Build Instructions

## Scope

Build the Vital Tech Myanmar Astro static site from the workspace root. The original dark technical theme refresh changes presentation only; it adds no runtime service, environment variable, dependency, or deployment requirement.

## Prerequisites

- **Build tool**: npm with the project-local Astro CLI.
- **Runtime**: A current Node.js LTS release compatible with Astro 7.2.8.
- **Dependencies**: Exact versions are locked in `package-lock.json`; no package changed for the theme refresh.
- **Environment variables**: None required.
- **System requirements**: Windows, macOS, or Linux with npm, existing dependencies, and space for `dist/`.

## Build Steps

### 1. Install dependencies

```powershell
npm ci
```

Use `npm ci` for a clean installation from the lock file. Do not add visual packages, external fonts, or unpinned dependencies for this theme refresh.

### 2. Configure the environment

No configuration is needed. The build uses local Astro source, system fonts, existing local technology icons, and CSS-defined visual effects only.

### 3. Build the application

```powershell
npm run build
```

### 4. Verify build success

- **Expected result**: Astro completes without errors and reports six generated pages.
- **Artifacts**: `dist/index.html`; route directories for Services, Industries, About, Insights, and Contact; `robots.txt`; sitemap files; and compiled assets in `dist/_astro/`.
- **Theme verification**: Generated pages should use the compiled dark semantic system; no external font or design asset is fetched by the theme.
- **Recorded result**: The theme-refresh build completed successfully on 2026-08-28 with six pages built in 5.86 seconds.

## Optional Local Static Preview

Run manually after a successful build:

```powershell
npm run preview
```

Use the preview to inspect the original dark technical surfaces at narrow and wide viewports, keyboard focus, mobile menu behavior, and phone/email actions. Stop the preview after review.

## Troubleshooting

### Build fails with a source or configuration error

1. Read the full `npm run build` output.
2. Correct the referenced Astro, CSS, or TypeScript source.
3. Rebuild.
4. Inspect `dist/` only after the build succeeds.

### Visual output appears inconsistent

1. Confirm `src/styles/global.css` contains the dark semantic tokens and focus/reduced-motion rules.
2. Check route-local utilities in Services, Industries, Insights, and Contact for conflicting light-theme values.
3. Rebuild and inspect the static preview.
