# Vital Tech Myanmar Website - Application Design

## Design Summary
Vital Tech Myanmar will be implemented as one framework-neutral, front-end-only public website application. It provides seven full routes, centralized typed content, section-based service detail, configurable direct-contact actions, and reusable visual components that support the approved dark, lime-accented premium brand direction.

## Approved Architecture Decisions
| Decision | Outcome |
|---|---|
| Service composition | A single `/services` page holds detailed section-based content for all five service groups. |
| Content organization | Services, industries, insights, careers, company details, navigation, and contact data are centralized in typed content modules. |
| Contact configuration | Phone, email, and WhatsApp actions are resolved through a shared configuration service and initially use clearly labelled placeholders until official endpoints are supplied. |
| Insights | The Insights route displays article cards when approved content exists and supports optional detail destinations. |
| Careers | The Careers route leads candidates to a configured direct email or WhatsApp discovery route. |
| Navigation | All seven public pages use full routes; a responsive mobile navigation presents the same route set. |
| Technology scope | No framework has yet been selected; that decision belongs to the upcoming NFR Requirements stage. |

## Public Route Model
| Route | Primary user outcome | Core components |
|---|---|---|
| `/` | Understand Vital Tech Myanmar’s value and priority capabilities. | `PageHero`, `ServiceOverview`, proof content, `CallToActionBand` |
| `/services` | Explore section-based detail for all five service groups. | `ServiceNavigator`, `ServiceDetailSection`, `ContactActionGroup` |
| `/industries` | Assess industry fit and approved evidence. | `IndustryCapabilityGrid`, optional `CaseStudyCard` |
| `/about` | Establish company and delivery confidence. | Narrative sections, team or approach content, CTA |
| `/insights` | Browse thought leadership or see a truthful empty state. | `InsightCardList` |
| `/careers` | Discover work context and direct application route. | `CareerOpportunityList`, `ContactActionGroup` |
| `/contact` | Choose phone, email, or WhatsApp without using a form. | `ContactActionGroup` |

## Shared Component System
- `AppShell` composes the global page frame, metadata, header, route content, and footer.
- `SiteHeader`, `MobileNavigation`, and `SiteFooter` expose the same canonical route set.
- `PageHero`, `SectionHeading`, and `CallToActionBand` provide a consistent presentation language across routes.
- `ServiceOverview`, `ServiceDetailSection`, `IndustryCapabilityGrid`, `InsightCardList`, `CareerOpportunityList`, and `ContactActionGroup` render reusable domain-specific content.
- Route components orchestrate content; presentation components remain reusable and data-driven.

## Service Layer
The static presentation layer uses six small read-only services:
1. `SiteContentService` supplies centralized typed content.
2. `ContactConfigService` resolves phone, email, and WhatsApp actions or labelled placeholders.
3. `NavigationService` supplies canonical route data and active state.
4. `MetadataService` supplies page titles, descriptions, canonical paths, and share-preview content.
5. `InsightPresentationService` selects populated or empty insight presentation.
6. `CareerActionService` resolves the approved direct application-discovery action.

No component sends data to a backend, submits a form, stores user data, or relies on a custom API.

## Visual-System Direction
The component system must be capable of presenting the approved visual language without coupling content to styling:
- Near-black canvas with high-visibility lime accents.
- Large solid headline emphasis paired with fine outlined display treatment where legible.
- Compact lime navigation and wordmark treatment.
- Restrained blue ambient light as a decorative visual motif only.
- Spacious editorial layouts that preserve semantic hierarchy, readable contrast, visible focus states, and small-screen usability.

## Key Constraints
- English only at launch.
- The release is front-end only and excludes a contact-form backend, CMS, account features, multilingual support, hosting, and deployment configuration.
- Content must remain maintainable and ready to replace with final approved business material.
- Direct-contact endpoints must be centrally configurable before release.

## Traceability
| Requirement or story | Design response |
|---|---|
| US-01 and US-02: service discovery | Home and Services routes; service overview, navigator, and section-detail components. |
| US-03 and US-04: credibility | Industries, optional case studies, and About route components fed by centralized approved content. |
| US-05: Insights | `InsightPresentationService` and `InsightCardList` prevent misleading empty content. |
| US-06: direct contact | `ContactConfigService` and `ContactActionGroup` appear in header, footer, CTA bands, Careers, and Contact page. |
| US-07: Careers | `CareerActionService` and `CareerOpportunityList` support the chosen direct application-discovery route. |
| US-08: accessible navigation | Shared shell, canonical navigation service, responsive mobile navigation, and reusable semantic section components. |

## Design Artifacts
- Component details: `components.md`
- Interface and method contracts: `component-methods.md`
- Services and orchestration: `services.md`
- Dependencies and communication: `component-dependency.md`

## Extension Compliance
| Extension | Status | Rationale |
|---|---|---|
| Resiliency Baseline | N/A | Disabled during Requirements Analysis. |
| Security Baseline | N/A | Disabled during Requirements Analysis. |
| Property-Based Testing | N/A | Disabled during Requirements Analysis. |
