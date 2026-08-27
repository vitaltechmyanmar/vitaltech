# Logical Components - Vital Tech Myanmar Website

## Component Model
The first-release logical architecture contains build-time content and presentation components plus a narrowly scoped client interaction island. All components are local to the static Astro application; there are no runtime infrastructure services.

| Logical component | Responsibility | Input | Output | Runtime role |
|---|---|---|---|---|
| `ContentRegistry` | Holds typed approved company, service, industry, case-study, insight, careers, and contact-label content. | Source content modules. | Typed collections and page-ready content. | Build time. |
| `PageMetadataResolver` | Resolves unique route metadata. | Route identifier, page metadata, configurable site URL. | Title, description, canonical placeholder, Open Graph fields. | Build time. |
| `NavigationModel` | Defines canonical public routes and active navigation metadata. | Navigation source module and resolved route. | Ordered route links and active-state information. | Build time; passed to client island where needed. |
| `ContactActionResolver` | Resolves configured or placeholder contact actions. | Contact configuration, requested channel, display context. | Protocol-safe action or labelled placeholder state. | Build time for static links; no remote call. |
| `VisualTokenSystem` | Defines reusable Tailwind theme values and component visual conventions. | Project design-token definitions. | Near-black, lime, blue, typography, spacing, focus, and responsive utility patterns. | Build and browser CSS. |
| `AssetStrategy` | Selects lightweight image, font, and decorative visual treatment. | Asset manifest and visual requirements. | Optimized assets, reserved dimensions, CSS ambient effects. | Build and browser delivery. |
| `StaticRouteComposer` | Composes each route from content and shared components. | ContentRegistry, metadata, navigation, contact actions, route definition. | Static HTML route output. | Build time. |
| `MobileNavigationIsland` | Enhances small-screen navigation only. | Navigation model and menu state. | Accessible open/close mobile menu behavior. | Scoped client-side island. |
| `StaticBuildOutput` | Produces deployable public assets. | Astro build configuration and all route components. | Static HTML, CSS, optimized assets, sitemap, and robots directives. | Build output. |

## Component Interactions

### Static Page Composition
1. `StaticRouteComposer` receives the requested route definition.
2. It reads route content from `ContentRegistry`.
3. It obtains metadata through `PageMetadataResolver`.
4. It obtains canonical route links through `NavigationModel`.
5. It obtains contact display data through `ContactActionResolver`.
6. It applies visual conventions from `VisualTokenSystem` and asset choices from `AssetStrategy`.
7. It emits static route HTML into `StaticBuildOutput`.

### Mobile Navigation Enhancement
1. The static page renders canonical navigation links first.
2. `MobileNavigationIsland` hydrates only the small-screen menu control when needed.
3. The island manages visible menu state, keyboard behavior, and focus restoration.
4. If the island does not load, the base page still exposes core content and navigation links through static markup and progressive enhancement patterns.

### Contact Action Resolution
1. Shared layout or route content requests a channel and display context.
2. `ContactActionResolver` reads the centralized configuration.
3. With approved official data, it returns a protocol-safe direct action.
4. Without official data, it returns the selected clearly labelled placeholder representation.
5. The route renders the result without client-side submission, tracking, or third-party calls.

## Data and Dependency Boundaries
- `ContentRegistry` is the sole source of recurring content; pages do not duplicate service or contact values.
- `PageMetadataResolver`, `NavigationModel`, and `ContactActionResolver` read from centralized typed modules only.
- `MobileNavigationIsland` receives read-only presentation data and does not fetch, persist, or transmit data.
- `VisualTokenSystem` affects presentation only; it does not own content or behavior.
- `AssetStrategy` handles decorative and meaningful asset choices; no large video or runtime visual service is required.
- `StaticBuildOutput` is the final boundary. Hosting, CDN, headers, monitoring, and uptime management are intentionally not represented because deployment is out of scope.

## Explicitly Excluded Logical Components
| Excluded component | Why it is excluded |
|---|---|
| Cache | Static route output and local build-time content do not require runtime caching in this project. |
| Queue | The site has no asynchronous job, message, or submission workflow. |
| Circuit breaker | No remote runtime dependency or backend service exists. |
| Retry handler | The application makes no remote content or form-submission calls. |
| Database adapter | Content is stored in typed source modules for the first release. |
| Analytics adapter | Analytics is explicitly excluded. |
| Consent manager | No tracking or cookies requiring consent are included. |
| Authentication service | No account or protected content scope exists. |

## Maintainability Rules
1. Each logical component has one purpose and a defined input/output contract.
2. Source content, metadata, contact data, and route definitions remain separate from visual token definitions.
3. New service, industry, insight, careers, or case-study entries should add structured content before changing route logic.
4. New essential interactivity must justify a distinct client island; visual enhancement alone is insufficient.
5. A future CMS, analytics provider, form workflow, or hosting platform must be introduced through a separately approved change and adapter boundary.

## Traceability
| NFR objective | Logical components |
|---|---|
| Static delivery and graceful degradation | `StaticRouteComposer`, `StaticBuildOutput`, `MobileNavigationIsland` |
| Content scalability | `ContentRegistry`, reusable route composition |
| Accessible responsive navigation | `NavigationModel`, `MobileNavigationIsland`, `VisualTokenSystem` |
| Direct contact safety | `ContactActionResolver`, `ContentRegistry` |
| Lightweight premium visuals | `VisualTokenSystem`, `AssetStrategy` |
| Search and sharing metadata | `PageMetadataResolver`, `StaticBuildOutput` |
| No runtime infrastructure | Explicitly excluded components table |

## Extension Compliance
| Extension | Status | Rationale |
|---|---|---|
| Resiliency Baseline | N/A | Disabled; no runtime dependency requires resilience components. |
| Security Baseline | N/A | Disabled; no backend or user data component exists. |
| Property-Based Testing | N/A | Disabled. |
