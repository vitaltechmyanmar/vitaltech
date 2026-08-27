# Project README Documentation Requirements

## Intent Analysis

- **User request**: Create the project README file.
- **Request type**: Documentation-only enhancement.
- **Scope estimate**: Single root-level Markdown file, informed by the existing Astro project configuration and active build/test documentation.
- **Complexity estimate**: Simple. The project structure, commands, routes, and contact model are already defined and validated.

## Functional Requirements

1. Create a root `README.md` that identifies the project as the Vital Tech Myanmar static marketing website.
2. Describe the current technology stack accurately: Astro, TypeScript, Tailwind CSS, Vite integration, and generated sitemap support.
3. Provide reproducible local setup, development, production-build, and static-preview commands using the package scripts.
4. Describe the six active public routes: Home, Services, Industries, About, Insights, and Contact; do not document a Careers page.
5. Identify the centralized content configuration at `src/content/site.ts`, including the current approved phone and email channels.
6. Provide a concise project-structure overview and list the generated `dist/` output as a build artifact, not a source-controlled hand-edit target.
7. Reference the build/test documentation for detailed validation and document the successful `npm run build` baseline.

## Non-Functional Requirements

1. Keep the README concise, accurate, and readable in standard Markdown renderers.
2. Use only claims verified by the current repository; do not invent a production domain, license, deployment target, analytics, backend, test runner, or contribution policy.
3. Include no diagrams, remote embeds, secrets, or external runtime dependencies.
4. Do not modify application source, package dependencies, generated output, or historical workflow artifacts.

## Acceptance Criteria

- A root `README.md` exists.
- It documents install, development, build, and preview commands from `package.json`.
- It lists the six current routes and omits Careers.
- It identifies current contact links and their centralized configuration.
- It accurately distinguishes source files from generated `dist/` output.
- `git diff --check` passes after creation.

## User Stories Decision

**Skip User Stories**: This is a documentation-only change with no functional or user-interface behavior change.

## Extension Compliance

- **Resiliency Baseline**: N/A — disabled in `aidlc-docs/aidlc-state.md` and not applicable to a README-only change.
- **Security Baseline**: N/A — disabled in `aidlc-docs/aidlc-state.md` and no security behavior changes.
- **Property-Based Testing**: N/A — disabled in `aidlc-docs/aidlc-state.md` and no executable logic changes.
