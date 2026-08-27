# Contact Update User Story

## CU-US-01 - Use Approved Direct Contact Channels

**Persona**: Prospective Client or Candidate

**Story**: As a prospective client or candidate, I want to call either approved Vital Tech Myanmar phone number or email the team from a shared contact location, so that I can begin a conversation without encountering unavailable or misleading contact actions.

## Acceptance Criteria
1. **Given** I view any existing shared contact-action location, **when** I select the first Phone action, **then** it opens a `tel:+959443167419` link with a clear visible label for `+959 443 167 419`.
2. **Given** I view any existing shared contact-action location, **when** I select the second Phone action, **then** it opens a `tel:+959964444882` link with a clear visible label for `+959 964444882`.
3. **Given** I view any existing shared contact-action location, **when** I select the Email action, **then** it opens a `mailto:info@vitaltechmyanmar.com` link with a clear visible label.
4. **Given** I use a keyboard or a small-screen device, **when** I navigate the contact actions, **then** each action is visible, distinguishable, and operable.
5. **Given** WhatsApp has no approved public value, **when** I view shared contact actions, **then** no WhatsApp placeholder or nonfunctional action is displayed.
6. **Given** I use any contact action, **when** it renders in the current bright editorial system, **then** it retains the same shared presentation and no form or backend behavior is introduced.

## Requirement Coverage
| Requirement | Coverage |
|---|---|
| Callable phone links | Criteria 1 and 2 |
| Callable email link | Criterion 3 |
| Shared-location coverage | Criteria 1 through 4 |
| WhatsApp omission | Criterion 5 |
| Accessibility and visual consistency | Criteria 4 and 6 |
| Static-only boundary | Criterion 6 |

## INVEST Review
| Criterion | Result | Rationale |
|---|---|---|
| Independent | Yes | The centralized contact configuration and renderer can be changed without altering routes, backend logic, or content models beyond the contact type. |
| Negotiable | Yes | Labels and visual grouping can be refined without changing the approved endpoints or channel scope. |
| Valuable | Yes | Visitors gain immediate usable direct contact options. |
| Estimable | Yes | The existing centralized contact model and renderer identify the affected files. |
| Small | Yes | The change is restricted to the contact model, renderer, and static validation. |
| Testable | Yes | URI targets, visible labels, channel omission, and production build can be checked directly. |
