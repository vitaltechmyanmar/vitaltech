# Vital Tech Myanmar Website - User Stories

## Story Structure

Stories are organized by visitor-outcome epics and prioritize the Strategic Technology Leader journey. Each story uses the approved Given/When/Then acceptance-criteria depth and reflects the six active public routes.

## Epic 1 - Discover Services and Business Value

### US-01 - Understand the Company Proposition
**Persona**: Strategic Technology Leader

**Story**: As a Strategic Technology Leader, I want to understand Vital Tech Myanmar’s core value and primary technology services from the Home page, so that I can quickly determine whether the company is relevant to my organization’s needs.

**Acceptance Criteria**
1. **Given** I arrive on the Home page, **when** the primary content loads, **then** I can identify Vital Tech Myanmar as a partner for Software Development, Cloud, DevOps, System Integration, and Managed IT Solutions.
2. **Given** I am viewing the service overview, **when** I scan its hierarchy, **then** Software Development, Cloud, and DevOps receive the strongest visual emphasis while System Integration and Managed IT remain easy to find.
3. **Given** I view the site on a small or large screen, **when** I reach the hero and service overview, **then** the value proposition and primary actions remain readable and usable without horizontal scrolling.

### US-02 - Explore Relevant Service Capabilities
**Persona**: Technical Solution Evaluator

**Story**: As a Technical Solution Evaluator, I want to explore each service area and its business relevance, so that I can identify the capabilities that fit my organization’s technical challenge.

**Acceptance Criteria**
1. **Given** I open the Services page, **when** I review the content, **then** I can find distinct information for Custom Software Development, Cloud Solutions, DevOps, System Integration, and Managed IT Solutions.
2. **Given** I select or navigate to a service area, **when** I review its summary, **then** I can understand its intended business outcome and its relationship to the broader Vital Tech Myanmar offering.
3. **Given** I use keyboard navigation, **when** I move through service links and interactive controls, **then** the focused item is visible and operable.

## Epic 2 - Evaluate Credibility and Fit

### US-03 - Assess Industry Relevance and Evidence
**Persona**: Strategic Technology Leader

**Story**: As a Strategic Technology Leader, I want to review industries served, solution capabilities, and approved proof points, so that I can assess whether Vital Tech Myanmar has relevant experience before I contact the team.

**Acceptance Criteria**
1. **Given** I open the Industries page, **when** I review its content, **then** I can identify the industries served and the associated solution capabilities.
2. **Given** approved case-study evidence is available, **when** I select a case study, **then** I can review its delivery context and outcomes without unsubstantiated claims.
3. **Given** a case study has not been approved or supplied, **when** I view the page, **then** the site presents industry and capability information without implying a customer endorsement.

### US-04 - Establish Company Confidence
**Persona**: Strategic Technology Leader

**Story**: As a Strategic Technology Leader, I want to understand Vital Tech Myanmar’s identity, team, and approach, so that I can judge the company’s credibility and fit as a technology partner.

**Acceptance Criteria**
1. **Given** I open the About page, **when** I review the content, **then** I can understand the company’s positioning, technology focus, and relevant team or delivery information provided by the business.
2. **Given** I navigate from an About section to a related service or contact action, **when** I activate that link, **then** I reach the intended destination.
3. **Given** company imagery is shown, **when** I use assistive technology, **then** meaningful images provide appropriate text alternatives and decorative visuals do not create redundant announcements.

### US-05 - Explore Technical Perspective
**Persona**: Technical Solution Evaluator

**Story**: As a Technical Solution Evaluator, I want to browse Insights content, so that I can understand Vital Tech Myanmar’s perspective on relevant technology and delivery topics.

**Acceptance Criteria**
1. **Given** I open the Insights page, **when** content is available, **then** I can scan published items by a clear title, topic, and concise summary.
2. **Given** I select an insight, **when** its detail is available in the first release, **then** I can reach the relevant content or designated destination through a clear link.
3. **Given** no published insight is currently available, **when** I view the Insights page, **then** I receive a truthful, professional empty-state or placeholder message without misleading publication claims.

## Epic 3 - Initiate Direct Contact

### US-06 - Reach the Right Team Directly
**Persona**: Strategic Technology Leader

**Story**: As a Strategic Technology Leader, I want prominent direct phone and email contact options, so that I can start a conversation through my preferred channel without completing a form.

**Acceptance Criteria**
1. **Given** I am on the Home, Services, Industries, About, Insights, or Contact page, **when** I seek an action to contact Vital Tech Myanmar, **then** I can access at least one visible direct-contact route.
2. **Given** official phone and email endpoints have been configured, **when** I choose one, **then** its link uses the appropriate destination format for that channel.
3. **Given** I open the Contact page, **when** I review the available actions, **then** I can clearly distinguish phone and email routes and am not presented with a non-functioning submission form.

## Epic 4 - Navigate a Premium, Accessible Experience

### US-07 - Navigate Confidently Across the Site
**Persona**: All Personas

**Story**: As a website visitor, I want clear navigation and an accessible premium visual experience, so that I can reach relevant information and contact paths with confidence on any device.

**Acceptance Criteria**
1. **Given** I visit any public page, **when** I use primary or footer navigation, **then** I can reach Home, Services, Industries, About, Insights, and Contact, and I am not presented with a Careers destination.
2. **Given** I request the retired legacy `/careers` URL, **when** the static site host resolves the request, **then** no replacement or redirect is provided and the host returns its normal 404 response.
3. **Given** I use a keyboard or assistive technology, **when** I move through navigation and interactive controls, **then** the content uses meaningful landmarks, visible focus states, and accessible labels.
4. **Given** I use a smaller screen, **when** navigation condenses, **then** I can reveal, use, and dismiss it without losing access to the six active page links or direct contact options.

## Coverage Map
| Requirement or page | Stories |
|---|---|
| Home | US-01, US-06, US-07 |
| Services | US-02, US-06, US-07 |
| Industries | US-03, US-06, US-07 |
| About | US-04, US-06, US-07 |
| Insights | US-05, US-06, US-07 |
| Contact | US-06, US-07 |
| Retired legacy `/careers` URL | US-07 |
| Direct contact | US-06, US-07 |

## INVEST Review
| Story | Independent | Negotiable | Valuable | Estimable | Small | Testable |
|---|---|---|---|---|---|---|
| US-01 | Yes | Yes | Yes | Yes | Yes | Yes |
| US-02 | Yes | Yes | Yes | Yes | Yes | Yes |
| US-03 | Yes | Yes | Yes | Yes | Yes | Yes |
| US-04 | Yes | Yes | Yes | Yes | Yes | Yes |
| US-05 | Yes | Yes | Yes | Yes | Yes | Yes |
| US-06 | Yes | Yes | Yes | Yes | Yes | Yes |
| US-07 | Yes | Yes | Yes | Yes | Yes | Yes |

## Persona Mapping
| Persona | Relevant stories |
|---|---|
| Strategic Technology Leader | US-01, US-03, US-04, US-06, US-07 |
| Technical Solution Evaluator | US-02, US-05, US-07 |
