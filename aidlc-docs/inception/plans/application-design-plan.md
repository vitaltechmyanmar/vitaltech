# Vital Tech Myanmar Website - Application Design Plan

## Purpose
Define the high-level application architecture for the new public website: page and component boundaries, reusable content patterns, direct-contact configuration, navigation, and the small orchestration layer needed to present static company content consistently.

## Design Scope
- One front-end website application with seven public pages.
- Shared premium dark-and-lime visual system, responsive navigation, and reusable content sections.
- No backend, database, custom API, contact-form submission service, or hosting implementation in the first release.
- Direct phone, email, and WhatsApp routes must remain configurable until official endpoints are available.

## Application Design Checklist
- [x] Review approved requirements, user stories, execution plan, and planning answers.
- [x] Define components and responsibilities in `aidlc-docs/inception/application-design/components.md`.
- [x] Define high-level component methods and interfaces in `aidlc-docs/inception/application-design/component-methods.md`.
- [x] Define presentation and configuration services in `aidlc-docs/inception/application-design/services.md`.
- [x] Define dependency relationships and communication patterns in `aidlc-docs/inception/application-design/component-dependency.md`.
- [x] Consolidate the application design in `aidlc-docs/inception/application-design/application-design.md`.
- [x] Validate design completeness, component boundaries, and consistency with the approved stories.

## Design Questions
Complete every `[Answer]:` field by choosing one option. Choose **X** and add a short explanation if none matches.

## Question 1 - Service-page composition
How should visitors reach detailed service information?

A) One Services page with expandable or section-based details for all five service groups

B) One Services overview page plus dedicated detail pages for each service group

C) One Services overview page plus dedicated detail pages only for Software Development, Cloud, and DevOps

X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 2 - Content organization
How should editable company content be organized in the application?

A) Centralized typed content modules for services, industries, insights, careers, and contact details; pages compose those modules

B) Page-local content defined directly within each page component

C) A hybrid: centralized shared data for repeatable items and page-local content for unique narrative sections

X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 3 - Direct-contact configuration
How should the application behave before the official phone, email, and WhatsApp endpoints are supplied?

A) Use clearly labelled placeholder links in a centralized contact configuration module

B) Hide unavailable channels and show only configured direct-contact options

C) Display the channels as text only until configured, without clickable actions

X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 4 - Insights experience
What should the first-release Insights page provide?

A) A listing of article cards with optional detail-page routes for published content

B) A listing of article cards that link to external or future destinations only

C) A professional empty state until approved insights content is available

X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 5 - Careers action
What application-discovery route should the Careers page emphasize?

A) A direct email or WhatsApp route configured through the shared contact module

B) An external hiring-platform link configured through the shared contact module

C) Both direct contact and an external hiring-platform link when available

X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 6 - Navigation behavior
How should the primary site navigation be structured?

A) Full routes for all seven public pages, with a responsive menu on small screens

B) A single scrolling home page with anchored sections plus standalone Careers and Contact routes

C) Full routes for core company pages with selected long-form content kept as in-page sections

X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Approval Status
After the planning answers are reviewed and ambiguity is resolved, this design plan requires explicit approval before application-design artifacts are generated.

[Answer]: Approved - 2026-08-27T14:28:38Z
