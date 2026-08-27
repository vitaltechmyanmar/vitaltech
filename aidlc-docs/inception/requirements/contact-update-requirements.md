# Contact Update Requirements - Vital Tech Myanmar

## Intent Analysis
- **User request**: Add approved public contact information.
- **Request type**: Customer-facing content and direct-contact capability update.
- **Scope**: Centralized typed contact configuration and its shared site-wide presentation.
- **Requirements depth**: Minimal. Official public values, channel scope, display behavior, and preservation constraints are now explicit.

## Approved Public Contact Details
| Channel | Display and behavior |
|---|---|
| Phone | Publish `+959 443 167 419` and `+959 964444882` as two separately callable telephone links under the Phone channel. |
| Email | Publish `info@vitaltechmyanmar.com` as a clickable email link. |
| WhatsApp | Do not publish a WhatsApp channel; no official value was provided. |

## Functional Requirements
1. Replace the current Phone and Email placeholders with the approved values and functional `tel:` and `mailto:` links.
2. Publish both approved phone numbers as separate callable links while retaining a clear Phone grouping and accessible labels.
3. Publish the approved Phone and Email information everywhere the shared `ContactActions` component is currently used: footer, page CTAs, Careers, Contact, and other existing shared contact locations.
4. Do not display a WhatsApp contact action or a WhatsApp placeholder.
5. Preserve existing routes, content, direct-contact component placement, shared layout, metadata, test IDs where applicable, and no-form policy.

## Non-Functional Requirements
1. Phone and email links must use valid `tel:` and `mailto:` URI schemes.
2. Contact controls must remain keyboard accessible, have clear visible labels, and remain legible within the current bright editorial theme.
3. Keep the typed contact model and component rendering centralized to prevent duplicated values or inconsistent contact behavior.
4. The site must continue to pass `npm run build`.

## Acceptance Criteria
1. Visitors can call either `+959 443 167 419` or `+959 964444882` from distinct Phone links.
2. Visitors can send an email using `info@vitaltechmyanmar.com` from a labelled Email link.
3. Phone and Email are visible in every existing shared contact-action location.
4. WhatsApp is absent rather than shown as an unavailable placeholder.
5. No contact form, backend endpoint, analytics, or unrelated content change is added.
6. The production build succeeds.

## Exclusions
- WhatsApp publication.
- Form submission, CRM integration, backend processing, analytics, CMS, deployment, or new dependencies.
