# Build Instructions

## Scope
Build the static Vital Tech Myanmar website from the workspace root. The build produces deployable static files only; no backend, runtime service, form processor, CMS, or infrastructure configuration is required.

## Prerequisites
- **Build tool**: npm with the project-local Astro CLI.
- **Runtime**: A current Node.js LTS release compatible with Astro 7.2.8.
- **Dependencies**: Exact versions are locked in `package-lock.json`; primary tools are Astro 7.2.8, TypeScript 7.0.2, Tailwind CSS 4.3.3, `@tailwindcss/vite` 4.3.3, and `@astrojs/sitemap` 3.7.3.
- **Environment variables**: None required.
- **System requirements**: Windows, macOS, or Linux with npm and enough disk space for the dependency cache, `node_modules/`, and the generated `dist/` directory.

## Build Steps

### 1. Install dependencies
Run from `d:\AI-DLC-Workshop\vitaltech`:

```powershell
npm ci
```

Use `npm ci` for a clean, reproducible installation from the committed lock file. If actively updating dependencies, use `npm install` deliberately and review any lock-file changes.

### 2. Configure the environment
No environment configuration is needed. Before a public launch, replace the placeholder site URL and contact endpoints in the centralized site-content configuration with approved production values. Do not treat placeholder links as production contact information.

### 3. Build the application

```powershell
npm run build
```

### 4. Verify build success
- **Expected result**: Astro completes without errors and reports generation of the static site.
- **Build artifact location**: `dist/`.
- **Expected output**: static HTML for Home, Services, Industries, About, Insights, and Contact, alongside `robots.txt`, sitemap files, and compiled assets under `dist/_astro/`. No Careers page is generated.
- **Previously verified result**: `npm run build` completed successfully on 2026-08-27 during Code Generation validation.
- **Acceptable warning to investigate**: npm may report that an `esbuild` post-install script was blocked by an allow-list policy. Do not bypass local security controls automatically. Confirm the Astro CLI and `npm run build` work; they did during the recorded validation.

## Optional Local Static Preview
After a successful build, run the following command manually in a terminal to review the built site:

```powershell
npm run preview
```

Stop the preview process when review is complete. This is a local review aid, not a deployment step.

## Troubleshooting

### Dependency installation fails
- **Likely causes**: unsupported Node.js version, unavailable npm registry, stale `node_modules/`, or a corrupted local npm cache.
- **Resolution**:
  1. Confirm that the Node.js version is compatible with Astro 7.2.8.
  2. Confirm network and registry access if dependencies are not already cached.
  3. Remove only the local dependency directory if it is known to be stale, then run `npm ci` again.
  4. Do not change pinned package versions merely to bypass an installation warning.

### Build fails with a source or configuration error
- **Likely causes**: invalid Astro or TypeScript syntax, a broken import, invalid content data, or malformed static-page configuration.
- **Resolution**:
  1. Read the full `npm run build` output.
  2. Correct the referenced source or configuration file.
  3. Re-run `npm run build`.
  4. Inspect `dist/` only after the build succeeds.

### Sitemap or canonical URLs use placeholder values
- **Cause**: the project deliberately uses `https://vitaltech.example.com` until the production domain is supplied.
- **Resolution**: update the central site URL configuration with the approved production domain, rebuild, and inspect the generated canonical and sitemap URLs before release.
