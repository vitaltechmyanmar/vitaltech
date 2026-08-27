# Component Definitions

## Design Principles
- Keep all recurring company content in centralized typed modules rather than duplicating it in page definitions.
- Compose the seven public routes from shared layouts and reusable visual sections.
- Keep direct-contact actions visible, centralized, and configurable.
- Preserve a premium dark, lime-accented visual language while prioritizing semantic content and accessible interactive behavior.
- Keep this application framework-neutral until the NFR Requirements stage selects the implementation stack.

## Application Shell and Shared Components

| Component | Purpose | Primary responsibilities | High-level interface |
|---|---|---|---|
| `AppShell` | Establish the shared site frame. | Composes header, route content, footer, global styles, and page metadata. | Receives the resolved route and page metadata; renders a complete document view. |
| `SiteHeader` | Provide persistent desktop navigation and primary contact access. | Presents brand link, primary navigation, and an optional prominent contact action. | Receives navigation items, current route, brand data, and contact configuration. |
| `MobileNavigation` | Provide an accessible small-screen navigation experience. | Opens, closes, and focuses a route list; exposes direct contact action without hiding core routes. | Receives navigation items, current route, open state, and close callback. |
| `SiteFooter` | Reinforce navigation, service categories, and contact channels. | Presents footer navigation, legal or company detail, and configured contact actions. | Receives navigation, service summaries, company details, and contact configuration. |
| `PageHero` | Introduce a page with a clear title, outcome, and optional action. | Renders the headline, supporting copy, visual motif, and optional CTA. | Receives title, eyebrow, summary, visual variant, and action list. |
| `SectionHeading` | Establish consistent section hierarchy. | Renders labelled headings and supporting introductions with readable hierarchy. | Receives eyebrow, title, summary, and alignment variant. |
| `CallToActionBand` | Convert interest into direct contact. | Presents a concise offer and configured contact actions. | Receives context-specific CTA copy and contact-action variants. |

## Content and Capability Components

| Component | Purpose | Primary responsibilities | High-level interface |
|---|---|---|---|
| `ServiceOverview` | Present the five Vital Tech Myanmar service groups. | Composes service cards or links with visual priority for Software Development, Cloud, and DevOps. | Receives a collection of service summaries and a featured-service set. |
| `ServiceDetailSection` | Provide section-based detail on the single Services route. | Renders a service proposition, outcomes, scope, delivery signals, and related contact action. | Receives one service definition and the shared contact configuration. |
| `ServiceNavigator` | Help visitors scan and jump among service sections. | Renders section links or an accessible in-page index. | Receives service identifiers, labels, and active-section state. |
| `IndustryCapabilityGrid` | Explain industry relevance and solution capabilities. | Renders approved industries, needs, and associated capabilities without unsupported claims. | Receives industry definitions and optional approved proof points. |
| `CaseStudyCard` | Present approved delivery evidence when available. | Displays customer-safe context, challenge, approach, and outcome only after content approval. | Receives an approved case-study summary or is omitted. |
| `InsightCardList` | Surface published or draft-safe insights. | Renders article cards and routes to optional detail destinations; shows an honest empty state when none exist. | Receives insight summaries and detail-route availability. |
| `CareerOpportunityList` | Introduce available opportunities or application discovery. | Renders approved roles or a truthful opportunity state plus direct career contact action. | Receives opportunity items and configured career contact action. |
| `ContactActionGroup` | Provide phone, email, and WhatsApp actions consistently. | Shows only valid configured actions; can display labelled placeholders during content preparation. | Receives contact configuration, display variant, and contextual label. |

## Route Components

| Route component | Route | Purpose | Composition |
|---|---|---|---|
| `HomePage` | `/` | Deliver immediate company value, priority services, credibility cues, and contact route. | `PageHero`, `ServiceOverview`, selected industry or proof content, `CallToActionBand`. |
| `ServicesPage` | `/services` | Provide detailed section-based information for all five services. | `PageHero`, `ServiceNavigator`, repeated `ServiceDetailSection`, `CallToActionBand`. |
| `IndustriesPage` | `/industries` or `/case-studies` | Show industries served, solution capability, and approved evidence. | `PageHero`, `IndustryCapabilityGrid`, optional `CaseStudyCard`, `CallToActionBand`. |
| `AboutPage` | `/about` | Establish company identity, approach, team, and delivery confidence. | `PageHero`, narrative sections, team or approach modules, `CallToActionBand`. |
| `InsightsPage` | `/insights` | Surface thought leadership through a listing and optional details. | `PageHero`, `InsightCardList`, empty state when necessary. |
| `CareersPage` | `/careers` | Help candidates understand the environment and begin an application discovery route. | `PageHero`, culture or opportunity sections, `CareerOpportunityList`, `ContactActionGroup`. |
| `ContactPage` | `/contact` | Provide a clear, non-form-based path to contact the company. | `PageHero`, `ContactActionGroup`, company location or hours when approved. |

## Component Boundaries
- Route components orchestrate content placement; they do not own duplicated service or contact data.
- Presentational components render supplied content and actions; they do not perform network requests or persist data.
- Centralized services supply content, contact availability, navigation state, and metadata to routes and shared components.
- The first release contains no authentication, form-submission, CMS, database, custom API, or hosting-specific component.

## Coverage Traceability
| Story or requirement area | Components |
|---|---|
| Service discovery: US-01 and US-02 | `HomePage`, `ServicesPage`, `ServiceOverview`, `ServiceDetailSection`, `ServiceNavigator` |
| Credibility: US-03 and US-04 | `IndustriesPage`, `IndustryCapabilityGrid`, `CaseStudyCard`, `AboutPage` |
| Insights: US-05 | `InsightsPage`, `InsightCardList` |
| Direct contact: US-06 | `SiteHeader`, `SiteFooter`, `CallToActionBand`, `ContactActionGroup`, `ContactPage` |
| Careers: US-07 | `CareersPage`, `CareerOpportunityList`, `ContactActionGroup` |
| Navigation and accessibility: US-08 | `AppShell`, `SiteHeader`, `MobileNavigation`, `SiteFooter`, all interactive components |
