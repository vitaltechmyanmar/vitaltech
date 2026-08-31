# Build Instructions

## Scope

Build the Vital Tech Myanmar Astro static site after the original dark technical refresh and local JPG branding update. The current branding change uses the existing `public/logo.jpg` asset in shared header and favicon markup; it adds no runtime service, environment variable, dependency, or deployment requirement.

## Prerequisites

- **Build tool**: npm with the project-local Astro CLI.
- **Runtime**: A current Node.js LTS release compatible with Astro 7.2.8.
- **Dependencies**: Versions are locked in `package-lock.json`; no package changed for the JPG branding update.
- **Environment variables**: None required.
- **System requirements**: Windows, macOS, or Linux with npm, installed dependencies, and space for `dist/`.

## Build Steps

### 1. Install dependencies

```powershell
npm ci
```

### 2. Configure the environment

No configuration is needed. The application uses local Astro source, existing local technology icons, system fonts, and the user-provided `public/logo.jpg` asset.

### 3. Build the application

```powershell
npm run build
```

### 4. Verify build success

- **Expected result**: Astro completes without errors and reports six generated pages.
- **Artifacts**: `dist/index.html`, active route directories, `robots.txt`, sitemap files, and compiled assets under `dist/_astro/`.
- **Branding verification**: Generated pages declare `/logo.jpg` as `image/jpeg` favicon and render the same local image in the shared header; `/og-preview.svg` remains the Open Graph image.
- **Recorded result**: The JPG branding build succeeded on 2026-08-31 with six pages built in 3.80 seconds.

## Optional Static Preview

After a successful build, run manually:

```powershell
npm run preview
```

Review narrow and wide header layouts, home-link keyboard focus, mobile navigation, and the small favicon in the browser tab. The approved source JPG is non-square, so favicon legibility is a manual browser check.

## Troubleshooting

### Build fails

1. Read the complete `npm run build` output.
2. Correct the referenced Astro, CSS, or TypeScript source.
3. Rebuild.
4. Inspect `dist/` only after success.

### Logo or favicon is not updated

1. Confirm `public/logo.jpg` exists.
2. Confirm `SiteHeader.astro` references `/logo.jpg` with the required dimensions.
3. Confirm `BaseLayout.astro` declares `/logo.jpg` as `image/jpeg`.
4. Rebuild and clear browser favicon cache if necessary.
