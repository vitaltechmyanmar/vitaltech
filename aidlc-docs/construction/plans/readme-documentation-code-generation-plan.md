# Code Generation Plan - Project README Documentation

## Unit Context

- **Unit name**: `readme-documentation`.
- **Project type**: Brownfield Astro static site.
- **Responsibility**: Add a root README that accurately describes the existing project and its verified local workflow.
- **Application code changes**: None.
- **Primary output**: `README.md` at the workspace root.
- **Supporting documentation**: `aidlc-docs/construction/readme-documentation/code/code-generation-summary.md`.
- **Dependencies**: `package.json`, `src/content/site.ts`, and active build/test instructions supply all factual information.
- **Out of scope**: Source code, dependencies, configuration, `dist/`, deployment guidance, production-domain claims, license claims, and contributor-policy claims.

## Requirement Traceability

| Requirement | Planned coverage |
|---|---|
| README overview and stack | Project overview and technology-stack sections. |
| Local commands | Prerequisites and npm command sections derived from `package.json`. |
| Six active routes | Site routes section listing Home, Services, Industries, About, Insights, and Contact only. |
| Content and contact information | Content configuration section with `src/content/site.ts` and approved phone/email links. |
| Source vs build output | Project structure and build-output sections describe `dist/` as generated output. |
| Validation baseline | Verification section links to the active build/test documentation and known successful build. |

## Generation Plan

This plan is the single source of truth for the README implementation. Complete steps in order and mark each checkbox immediately when the corresponding work is complete.

### Part 1 - Planning

- [x] **Step 1: Confirm the source of truth.** Read `package.json`, `src/content/site.ts`, active build instructions, and the approved README requirements.
- [x] **Step 2: Define README sections.** Include overview, technology stack, prerequisites, local commands, active routes, content/contact configuration, project structure, build output, verification, and documentation references.
- [x] **Step 3: Define content boundaries.** Omit Careers, deployment instructions, unverified production or license claims, secrets, external embeds, and contribution guidance.
- [x] **Step 4: Define validation.** Inspect the rendered Markdown structure conceptually, search the README for retired/unverified content, and run `git diff --check`.
- [x] **Step 5: Create this code-generation plan.**
- [x] **Step 6: Obtain plan approval.**

### Part 2 - Generation

- [x] **Step 7: Create root `README.md`.** Write concise, verified Markdown using only current project data.
- [x] **Step 8: Create the code-generation summary.** Document the README addition, its factual sources, and intentional non-changes.
- [x] **Step 9: Validate README content.** Confirm required sections, npm commands, six routes, approved contact links, generated-output guidance, and absence of retired or unverified claims.
- [x] **Step 10: Run repository whitespace validation.** Run `git diff --check` and resolve any new whitespace issue.
- [x] **Step 11: Record completion.** Mark plan progress, update workflow state, and present the code-generation review gate.

## Content Validation Checklist

- No Mermaid or ASCII diagrams will be included.
- PowerShell snippets are fenced as `powershell` and contain verified package-script commands.
- Markdown headings, lists, inline code, and links use standard syntax.
- No complex visual or embedded content requires a fallback.

## Extension Compliance

| Extension | Status | Applicability |
|---|---|---|
| Resiliency Baseline | Disabled | N/A; README-only change. |
| Security Baseline | Disabled | N/A; no security behavior or credentials. |
| Property-Based Testing | Disabled | N/A; no executable logic. |
