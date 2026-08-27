# Contact Update Execution Plan

## Scope
Update the centralized typed contact model and shared contact renderer so approved Phone and Email links appear consistently across current contact locations. Preserve the visual system, page content, routes, metadata, and static architecture.

## Risk and Impact
- **Risk level**: Low.
- **Affected application files**: `src/types/site.ts`, `src/content/site.ts`, and `src/components/ContactActions.astro`.
- **Affected visitors**: Clients and candidates using shared contact controls.
- **No changes**: Page routes, metadata, header navigation, footer composition, form behavior, backend services, dependencies, or deployment.

## Workflow Selection
- [x] Requirements Analysis: Approved minimal contact requirements.
- [x] User Stories: Approved CU-US-01.
- [x] Workflow Planning: This plan is awaiting approval.
- [ ] Application Design: Skip; no new component or service boundary.
- [ ] Units Generation: Skip; one small centralized change.
- [ ] Functional Design: Skip; no new business logic.
- [ ] NFR Requirements and Design: Skip; existing accessibility and static-site standards apply unchanged.
- [ ] Infrastructure Design: Skip; no infrastructure change.
- [ ] Code Generation: Execute; update the typed contact data and shared render behavior.
- [ ] Build and Test: Execute; build and inspect generated contact output.
- [ ] Operations: Placeholder; no deployment work.

## Change Sequence
1. Extend the typed contact shape to support an ordered set of links for one channel while retaining the existing placeholder option.
2. Configure the two approved Phone `tel:` values and one Email `mailto:` value in the centralized content registry; omit WhatsApp.
3. Update the shared contact renderer to present each approved Phone number as a separate labelled link while retaining accessible group semantics and existing test IDs for the core channel actions.
4. Run diagnostics and `npm run build`; inspect generated shared contact output and verify no WhatsApp placeholder remains.
5. Document completed work and manual browser checks.

## Success Criteria
- The two approved phone numbers and approved email link render as functional links in every current `ContactActions` location.
- Phone numbers are separately callable and clearly labelled.
- WhatsApp does not render.
- Existing shared contact layout variants and static site behavior remain intact.
- `npm run build` succeeds.

## Approval Status
[Answer]: Awaiting approval
