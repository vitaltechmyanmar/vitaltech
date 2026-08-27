# Technology Stack Icons User Story

## TSI-US-01 - Recognize the Technology Ecosystem

**Persona**: Technology Decision Maker or Technical Evaluator

**Story**: As a technology decision maker or technical evaluator, I want to see the key cloud, platform, infrastructure, and delivery technologies Vital Tech Myanmar works with while reviewing Services, so that I can quickly understand the ecosystem supporting its delivery capabilities.

## Acceptance Criteria
1. **Given** I review the Services page, **when** I move past the detailed service list, **then** I encounter a clearly headed Technology ecosystem section before the existing contact CTA.
2. **Given** I view the Technology ecosystem section, **when** I scan its cards, **then** I see AWS, Docker, Kubernetes, Terraform, GitLab, GitHub, GitHub Actions, Red Hat, and OpenStack exactly once each with visible labels and corresponding Dashboard Icons SVG assets.
3. **Given** I view the section on mobile, tablet, or desktop, **when** the grid adapts to the viewport, **then** icons and labels remain readable without horizontal scrolling or cropping.
4. **Given** I use assistive technology, **when** I encounter the cards, **then** their visible text identifies each technology and decorative icon imagery does not create redundant announcements.
5. **Given** I continue through Services, **when** I use the existing service navigation, anchors, or CTA, **then** those elements retain their current destinations and behavior.
6. **Given** I load the static website, **when** technology icons are displayed, **then** they are served as local SVG assets without runtime third-party icon requests or client-side JavaScript.

## Requirement Coverage
| Requirement | Coverage |
|---|---|
| Dashboard Icons source and local assets | Criteria 2 and 6 |
| Professional editorial layout | Criteria 1, 2, and 3 |
| Responsive behavior | Criterion 3 |
| Accessibility | Criterion 4 |
| Existing Services preservation | Criterion 5 |
| Static-first performance and build validation | Criterion 6 |

## INVEST Review
| Criterion | Result | Rationale |
|---|---|---|
| Independent | Yes | The section can be added without altering current Services logic or other routes. |
| Negotiable | Yes | Card grouping and visual detail can be refined while retaining the nine approved technologies. |
| Valuable | Yes | Evaluators can quickly recognize the delivery ecosystem. |
| Estimable | Yes | The route, placement, asset set, and styling patterns are identified. |
| Small | Yes | One static section, local assets, and focused supporting code. |
| Testable | Yes | Labels, assets, output location, route behavior, and build result can be checked directly. |
