# Component Methods and Interfaces

## Conventions
The following signatures are framework-neutral design contracts. They define inputs and outputs for the later selected front-end stack; they do not prescribe implementation details or detailed business rules.

```text
Route = "/" | "/services" | "/industries" | "/about" | "/insights" | "/careers" | "/contact"
ContactChannel = "phone" | "email" | "whatsapp"
View = framework-rendered page or component output
```

## Shared Shell Interfaces

| Component | Method or interface | Inputs | Output | Purpose |
|---|---|---|---|---|
| `AppShell` | `render(route, pageModel)` | `Route`, `PageModel` | `View` | Composes the selected page within shared header and footer. |
| `SiteHeader` | `render(navigation, activeRoute, contact)` | `NavigationItem[]`, `Route`, `ContactConfig` | `View` | Displays brand, route navigation, and a primary contact option. |
| `MobileNavigation` | `open()` | None | `void` | Reveals the small-screen navigation with focus management. |
| `MobileNavigation` | `close(reason)` | `"action" | "route-change" | "escape"` | `void` | Hides the menu and restores a predictable focus target. |
| `MobileNavigation` | `render(navigation, activeRoute, isOpen)` | `NavigationItem[]`, `Route`, `boolean` | `View` | Produces accessible mobile route controls. |
| `SiteFooter` | `render(company, navigation, services, contact)` | `CompanyProfile`, `NavigationItem[]`, `ServiceSummary[]`, `ContactConfig` | `View` | Presents secondary navigation and direct contact actions. |

## Content Component Interfaces

| Component | Method or interface | Inputs | Output | Purpose |
|---|---|---|---|---|
| `PageHero` | `render(hero)` | `HeroContent` | `View` | Renders the page heading, summary, art direction variant, and optional actions. |
| `SectionHeading` | `render(heading)` | `SectionHeadingContent` | `View` | Renders an accessible section heading and intro. |
| `ServiceOverview` | `render(services, featuredIds)` | `ServiceDefinition[]`, `string[]` | `View` | Produces service discovery cards with approved visual priority. |
| `ServiceNavigator` | `render(services, activeId)` | `ServiceSummary[]`, `string?` | `View` | Provides an accessible in-page navigation index. |
| `ServiceDetailSection` | `render(service, contact)` | `ServiceDefinition`, `ContactConfig` | `View` | Renders a single service section and relevant direct contact action. |
| `IndustryCapabilityGrid` | `render(industries)` | `IndustryDefinition[]` | `View` | Explains approved industry and capability pairings. |
| `CaseStudyCard` | `render(caseStudy)` | `CaseStudySummary` | `View` | Renders only approved customer-safe evidence. |
| `InsightCardList` | `render(insights, state)` | `InsightSummary[]`, `"populated" | "empty"` | `View` | Displays insight cards or a professional empty state. |
| `CareerOpportunityList` | `render(opportunities, careerAction)` | `CareerOpportunity[]`, `ContactAction` | `View` | Shows role or application-discovery content. |
| `ContactActionGroup` | `render(contact, variant, context)` | `ContactConfig`, `"header" | "inline" | "footer" | "page"`, `string` | `View` | Builds direct phone, email, and WhatsApp actions safely. |

## Route Interfaces

| Route component | Method | Inputs | Output | Purpose |
|---|---|---|---|---|
| `HomePage` | `buildPageModel(content)` | `SiteContent` | `PageModel` | Selects home hero, featured services, proof, and CTA content. |
| `ServicesPage` | `buildPageModel(content)` | `SiteContent` | `PageModel` | Selects service index and all five section-based details. |
| `IndustriesPage` | `buildPageModel(content)` | `SiteContent` | `PageModel` | Selects industry, capability, and approved proof content. |
| `AboutPage` | `buildPageModel(content)` | `SiteContent` | `PageModel` | Selects company story, team, and approach content. |
| `InsightsPage` | `buildPageModel(content)` | `SiteContent` | `PageModel` | Selects insight summaries and the correct populated or empty state. |
| `CareersPage` | `buildPageModel(content)` | `SiteContent` | `PageModel` | Selects careers content and the configured application-discovery route. |
| `ContactPage` | `buildPageModel(contact, company)` | `ContactConfig`, `CompanyProfile` | `PageModel` | Presents all configured direct contact actions with no submission form. |

## Interaction Contracts

| Interaction | Contract | Expected outcome |
|---|---|---|
| Route selection | `navigate(to: Route): void` | The selected public route loads and the active navigation state updates. |
| Service in-page selection | `scrollToService(serviceId: string): void` | The selected service section is brought into view with a stable destination. |
| Direct contact selection | `resolveContactAction(channel: ContactChannel): ContactAction | null` | A valid configured channel yields a platform-appropriate action; unavailable data yields the configured placeholder state. |
| Insight selection | `resolveInsightDestination(insightId: string): Destination | null` | A published insight links to its approved route or destination; unavailable detail remains non-deceptive. |
| Career action selection | `resolveCareerAction(): ContactAction | null` | The candidate receives the configured email or WhatsApp route. |

## Input and Output Notes
- `ContactConfig` centralizes display labels, availability, and protocol-safe destinations for `tel:`, `mailto:`, and WhatsApp links.
- `SiteContent` centralizes company, service, industry, case-study, insight, career, and navigation content.
- `PageModel` is a presentation-ready composition object; it contains no persistence or network side effects.
- Detailed validation rules, visual rendering details, and framework event handling are deferred to the appropriate Construction stages.
