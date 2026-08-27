# Careers Route Retirement Story Generation Plan

## Purpose

Update the living user-story and persona documentation so it reflects the retirement of the public Careers route while preserving the six active visitor journeys.

## Story Breakdown Approaches

- **User journey-based**: Remove the candidate journey and revise shared navigation/contact journeys. This is the recommended approach because the change is defined by what visitors can no longer discover or access.
- **Feature-based**: Organize the update around route, navigation, and sitemap behavior. This is less useful because the artifacts are visitor-facing stories, not implementation specifications.
- **Persona-based**: Retire only the Prospective Candidate persona and its story. This risks missing Careers mentions in shared visitor stories.
- **Domain-based**: Group updates by recruitment versus public-site domains. This adds no value for a single retired route.
- **Epic-based**: Add a route-retirement epic. This is unnecessarily broad for a small removal.

## Recommended Approach

Use a user journey-based update: remove the Prospective Candidate journey, revise shared navigation/contact acceptance criteria to enumerate only active routes, and add explicit route-retirement acceptance criteria to the shared navigation story.

## Decision Required

## Question 1
How should the user-story update represent the retired legacy `/careers` URL?

A) State that no replacement or redirect is provided and that the legacy URL is expected to return a static-host 404 (recommended)

B) State that a redirect will be added; provide its destination after the `[Answer]:` tag

X) Other (please describe after [Answer]: tag below)

[Answer]:A

## Generation Checklist

- [x] Confirm the legacy URL behavior from Question 1.
- [x] Remove the Prospective Candidate persona from `personas.md`.
- [x] Remove the career-discovery story from `stories.md`.
- [x] Revise shared contact and navigation stories to remove Careers and enumerate the six active routes.
- [x] Add route-retirement acceptance criteria to the shared navigation story.
- [x] Renumber remaining stories and update coverage and persona mappings.
- [x] Verify every remaining story is Independent, Negotiable, Valuable, Estimable, Small, and Testable.
- [x] Verify story and persona documentation contains no active Careers or Prospective Candidate claims.
- [x] Generate stories.md with user stories following INVEST criteria.
- [x] Generate personas.md with user archetypes and characteristics.
- [x] Include acceptance criteria for each story.
- [x] Map personas to relevant user stories.
- [x] Present the generated artifacts for review.

## Extension Compliance

- **Resiliency Baseline**: N/A — disabled in `aidlc-docs/aidlc-state.md`.
- **Security Baseline**: N/A — disabled in `aidlc-docs/aidlc-state.md`.
- **Property-Based Testing**: N/A — disabled in `aidlc-docs/aidlc-state.md`.
