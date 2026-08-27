# Integration Test Instructions

## Purpose
Validate the interactions that exist within this single static Astro application: layout composition, navigation, centralized content, contact-placeholder rendering, route metadata, and generated static assets. There are no backend services, APIs, databases, queues, CMS integrations, or service-to-service contracts in scope.

## Test Environment
- Build the site from the workspace root using `npm run build`.
- Review generated files in `dist/`.
- Optionally start `npm run preview` manually after the build for a browser-based static review.
- No credentials, service endpoints, or environment variables are required.

## Test Scenarios

### Scenario 1: Shared shell and route navigation
- **Description**: Confirm shared layout and navigation integrate with all public routes.
- **Setup**: Run `npm run build` successfully.
- **Steps**:
  1. Review `dist/index.html` and the route directories for Services, Industries, About, Insights, Careers, and Contact.
  2. In a local preview or generated HTML, follow each primary navigation link.
  3. At a narrow viewport, open and close the mobile navigation with keyboard and pointer input.
- **Expected results**: Every primary route resolves; the mobile navigation remains keyboard accessible; the static route links are present in generated HTML.
- **Cleanup**: Stop the local preview if it was started.

### Scenario 2: Centralized content and contact action rendering
- **Description**: Confirm page CTAs and shared header/footer consume the configured placeholder contact model.
- **Setup**: Run `npm run build` after any content configuration change.
- **Steps**:
  1. Inspect Home, Careers, and Contact output.
  2. Confirm phone, email, and WhatsApp actions are visibly labelled placeholders until official values are supplied.
  3. Confirm no contact form or submission endpoint appears.
- **Expected results**: Contact actions are consistent across routes and do not present fabricated official endpoints.
- **Cleanup**: None.

### Scenario 3: Static discoverability assets
- **Description**: Confirm metadata and indexing output integrate with generated pages.
- **Setup**: Run `npm run build`.
- **Steps**:
  1. Inspect a representative page in `dist/` for title, description, canonical, and Open Graph metadata.
  2. Confirm `dist/robots.txt`, `dist/sitemap-index.xml`, and `dist/sitemap-0.xml` exist.
  3. Confirm canonical and sitemap URLs remain recognised placeholders until a production domain is configured.
- **Expected results**: Required static discoverability artifacts exist and use the centralized site configuration.
- **Cleanup**: None.

## Execution Command

```powershell
npm run build
```

There is no separate integration-test runner because the system contains one static front-end unit with no external runtime dependencies. Record manual scenario outcomes in release-review notes when a browser preview is available.

## Failure Handling
- If a route is missing, inspect the matching `src/pages/` file and navigation configuration, then rebuild.
- If metadata or the sitemap is wrong, correct the centralized site configuration or Astro setup, then rebuild.
- If contact actions are inconsistent, correct the content registry or shared contact component, then rebuild.
