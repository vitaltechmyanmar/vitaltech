# Theme Change User Stories - Vital Tech Myanmar

## Scope
These stories cover only the approved visual-system, layout, typography, and experience refresh. They preserve existing content, seven public routes, direct-contact placeholders, static metadata, and mobile-navigation behavior.

## Epic 1 - Discover Priority Services Clearly

### TC-US-01 - Scan Priority Services After the Home Hero
**Persona**: Strategic Technology Leader

**Story**: As a Strategic Technology Leader, I want the Home page to lead naturally from the company proposition into Software Development, Cloud, and DevOps, so that I can assess the primary capabilities before deciding to contact Vital Tech Myanmar.

**Acceptance Criteria**
1. **Given** I arrive on the Home page, **when** I move past the hero, **then** Software Development, Cloud, and DevOps are the most prominent service-discovery content.
2. **Given** I review the priority service content, **when** I choose a service, **then** I can reach its existing detailed destination without a broken or changed route.
3. **Given** I use a small or large screen, **when** I scan the hero and service grid, **then** the hierarchy is readable without horizontal scrolling.

## Epic 2 - Evaluate Credibility Through Editorial Clarity

### TC-US-02 - Review Capability Content in a Clean Editorial Layout
**Persona**: Technical Solution Evaluator

**Story**: As a Technical Solution Evaluator, I want services, industries, About, and Insights content presented with clear typography, whitespace, and structured grids, so that I can evaluate Vital Tech Myanmar without visual noise.

**Acceptance Criteria**
1. **Given** I view a public route, **when** I scan headings, summaries, cards, and calls to action, **then** the typography and spacing establish a clear reading hierarchy.
2. **Given** I move between public routes, **when** I compare shared cards, sections, and actions, **then** the bright neutral, navy, and cobalt-blue visual system remains consistent.
3. **Given** approved evidence or insight content is unavailable, **when** I reach its existing empty state, **then** it remains truthful and visually distinct without inventing content.

## Epic 3 - Navigate a Consistent, Accessible Experience

### TC-US-03 - Use the Full Site Across Devices
**Persona**: All Personas

**Story**: As a visitor, I want consistent navigation, focus feedback, and responsive layouts in the refreshed visual system, so that I can reach information and actions confidently on any supported device.

**Acceptance Criteria**
1. **Given** I use the header, footer, or mobile navigation, **when** I choose a public route, **then** I can reach the existing destination and identify the current page.
2. **Given** I use a keyboard, **when** I move through links, buttons, and the mobile navigation toggle, **then** focus is visible and controls remain operable.
3. **Given** I use reduced-motion preferences, **when** decorative blue editorial effects appear, **then** content and navigation remain usable without disruptive motion.

## Epic 4 - Reach a Direct Contact Path Without Misrepresentation

### TC-US-04 - Find Contact Actions in the Refreshed Layout
**Persona**: Strategic Technology Leader and Prospective Candidate

**Story**: As a visitor, I want direct-contact calls to action to remain clear in the new editorial layout, so that I can begin a conversation or opportunity inquiry without being misled by unavailable contact details.

**Acceptance Criteria**
1. **Given** I view a shared header, footer, hero, CTA, Careers, or Contact section, **when** I look for a way to connect, **then** I can identify the existing direct-contact action or placeholder state.
2. **Given** official contact endpoints are still unavailable, **when** I view a channel, **then** I see a clearly labelled placeholder rather than a fabricated link or form.
3. **Given** I later receive final brand assets, **when** they are inserted, **then** the temporary abstract cobalt-blue treatment can be replaced without changing contact behavior.

## Coverage Map
| Requirement | Stories |
|---|---|
| FR-01 Global visual system | TC-US-02, TC-US-03 |
| FR-02 Full-site application | TC-US-02, TC-US-03, TC-US-04 |
| FR-03 Editorial layout refresh | TC-US-01, TC-US-02 |
| FR-04 Typography refresh | TC-US-01, TC-US-02 |
| FR-05 Temporary asset strategy | TC-US-04 |
| FR-06 Behavior preservation | TC-US-01, TC-US-03, TC-US-04 |
| NFR-01 Accessibility | TC-US-03 |
| NFR-02 Responsiveness | TC-US-01, TC-US-03 |
| NFR-03 Performance | TC-US-03 |
| NFR-04 Maintainability | TC-US-02, TC-US-04 |
| NFR-05 Build validation | TC-US-01, TC-US-02, TC-US-03, TC-US-04 |

## INVEST Review
| Story | Independent | Negotiable | Valuable | Estimable | Small | Testable |
|---|---|---|---|---|---|---|
| TC-US-01 | Yes | Yes | Yes | Yes | Yes | Yes |
| TC-US-02 | Yes | Yes | Yes | Yes | Yes | Yes |
| TC-US-03 | Yes | Yes | Yes | Yes | Yes | Yes |
| TC-US-04 | Yes | Yes | Yes | Yes | Yes | Yes |

## Persona Mapping
| Persona | Relevant stories |
|---|---|
| Strategic Technology Leader | TC-US-01, TC-US-03, TC-US-04 |
| Technical Solution Evaluator | TC-US-02, TC-US-03 |
| Prospective Candidate | TC-US-03, TC-US-04 |
