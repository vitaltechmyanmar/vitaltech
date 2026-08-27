# Integration Test Instructions

## Purpose

Validate the interactions that exist within this single static Astro application: layout composition, centralized navigation and content, configured direct-contact rendering, route metadata, and generated static assets. There are no backend services, APIs, databases, queues, CMS integrations, or service-to-service contracts in scope.

## Test Environment

- Build the site from the workspace root using `npm run build`.
- Review generated files in `dist/`.
- Optionally start `npm run preview` manually after the build for a browser-based static review.
- No credentials, service endpoints, or environment variables are required.

## Test Scenarios

### Scenario 1: Shared shell, active-route navigation, and retired route

- **Description**: Confirm the shared layout and data-driven navigation integrate with the six active public routes while omitting Careers.
- **Setup**: Run `npm run build` successfully.
- **Steps**:
  1. Review `dist/index.html` and the route directories for Services, Industries, About, Insights, and Contact.
  2. In generated HTML, confirm desktop, mobile, and footer navigation contains Home, Services, Industries, About, Insights, and Contact only.
  3. Confirm generated HTML contains no `desktop-nav-careers-link`, `mobile-nav-careers-link`, or `footer-nav-careers-link` identifier.
  4. Confirm `dist/careers/` does not exist and `dist/sitemap-0.xml` has no `/careers/` entry.
  5. At a narrow viewport, open and close the mobile navigation with keyboard and pointer input.
- **Expected results**: Every active route resolves; the mobile navigation remains keyboard accessible; no Careers destination, generated route, sitemap entry, or navigation identifier remains.
- **Cleanup**: Stop the local preview if it was started.

### Scenario 2: Centralized contact action rendering

- **Description**: Confirm page calls to action and shared header/footer consume the configured direct-contact model.
- **Setup**: Run `npm run build` after any content configuration change.
- **Steps**:
  1. Inspect Home and Contact output.
  2. Confirm phone actions use `tel:+959443167419` and `tel:+959964444882` and the email action uses `mailto:info@vitaltechmyanmar.com`.
  3. Confirm no WhatsApp action, contact form, or submission endpoint appears.
- **Expected results**: Phone and email actions are consistent across active routes and do not present a form or unapproved channel.
- **Cleanup**: None.

### Scenario 3: Static discoverability assets

- **Description**: Confirm metadata and indexing output integrate with generated pages.
- **Setup**: Run `npm run build`.
- **Steps**:
  1. Inspect a representative page in `dist/` for title, description, canonical, and Open Graph metadata.
  2. Confirm `dist/robots.txt`, `dist/sitemap-index.xml`, and `dist/sitemap-0.xml` exist.
  3. Confirm canonical and sitemap URLs remain recognised placeholders until a production domain is configured.
- **Expected results**: Required static discoverability artifacts exist, use the centralized site configuration, and list only the six active public routes.
- **Cleanup**: None.

## Execution Command

```powershell
npm run build
```

There is no separate integration-test runner because the system contains one static front-end unit with no external runtime dependencies. Record manual scenario outcomes in release-review notes when a browser preview is available.

## Failure Handling

- If an active route is missing, inspect the matching `src/pages/` file and navigation configuration, then rebuild.
- If a retired Careers route, navigation identifier, or sitemap entry remains, inspect `src/content/site.ts`, `src/types/site.ts`, and `src/pages/`, then rebuild.
- If metadata or the sitemap is wrong, correct the centralized site configuration or Astro setup, then rebuild.
- If contact actions are inconsistent, correct the content registry or shared contact component, then rebuild.
