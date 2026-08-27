# Services and Orchestration Patterns

## Architectural Style
The first release uses a static presentation architecture. Small application services coordinate centralized content and configuration for route components; they do not call a backend or own persistence.

## Service Definitions

| Service | Responsibility | Inputs | Outputs | Consumers |
|---|---|---|---|---|
| `SiteContentService` | Supplies centralized typed content for company, services, industries, case studies, insights, and careers. | Static content modules and requested content key. | `SiteContent` or scoped content collections. | All route components and content components. |
| `ContactConfigService` | Resolves direct-contact display and action configuration. | `ContactChannel`, contact configuration, optional page context. | `ContactAction`, placeholder representation, or unavailable result. | Header, footer, CTA bands, Careers, Contact page. |
| `NavigationService` | Supplies canonical route information and active navigation state. | Current route and navigation configuration. | Ordered navigation items and active item. | `AppShell`, header, mobile navigation, footer. |
| `MetadataService` | Supplies page title, description, canonical path, and social-preview content. | Resolved route and page metadata configuration. | `PageMetadata`. | `AppShell` and each route component. |
| `InsightPresentationService` | Determines how insight content is presented without fabricating publications. | Insight collection and availability state. | Populated-list model or truthful empty-state model. | `InsightsPage`, `InsightCardList`. |
| `CareerActionService` | Resolves the agreed direct application-discovery action. | Career configuration and `ContactConfigService`. | Email or WhatsApp `ContactAction`, or a clearly labelled unavailable state. | `CareersPage`, `CareerOpportunityList`. |

## Orchestration by Journey

### Service Discovery
1. `NavigationService` resolves the requested route.
2. `SiteContentService` supplies the Home or Services content model.
3. Route components compose `PageHero`, service sections, and contact actions.
4. `ContactConfigService` provides a contextual direct-contact action where configured.

### Credibility Evaluation
1. `SiteContentService` supplies approved industry and company information.
2. The Industries or Case Studies and About routes render capability and proof content.
3. `MetadataService` provides accurate descriptive metadata.
4. `ContactConfigService` gives the visitor a direct follow-up path.

### Insights Exploration
1. `InsightPresentationService` receives available insight entries.
2. It returns a populated-list model for approved entries or an honest empty-state model.
3. `InsightsPage` renders the result through `InsightCardList`.

### Candidate Discovery
1. `SiteContentService` supplies Careers content and approved opportunities.
2. `CareerActionService` resolves the configured email or WhatsApp action.
3. `CareersPage` renders the action with the same `ContactActionGroup` pattern used elsewhere.

## Service Constraints
- Services are read-only in the first release.
- No service may submit data, call an unapproved third party, expose secrets, or make unsupported marketing claims.
- Official contact endpoints remain centralized so a future update changes one configuration source rather than each page.
- If a contact endpoint is not available, the application shows the approved labelled placeholder behavior selected in Application Design planning.
- The service layer is intentionally small; business rules and infrastructure orchestration are out of scope for this front-end-only release.

## Future Extension Points
- A CMS adapter can later implement the `SiteContentService` contract without changing route composition.
- A validated form or CRM adapter can later extend `ContactConfigService` or add a dedicated inquiry service after a separate requirements decision.
- A hiring-platform adapter can later extend `CareerActionService` while retaining direct email or WhatsApp fallback.
