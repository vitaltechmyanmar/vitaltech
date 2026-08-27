# Code Generation Plan - Contact Update

## Unit Context
- **Unit**: `vitaltech-contact-update`
- **Story**: CU-US-01.
- **Scope**: Centralized Phone and Email contact links only.
- **No new dependencies or runtime services**.

## Single Source of Truth
After approval, this plan governs the contact-update code changes. Each completed checkbox must be marked immediately in this file.

## Generation Steps

### Step 1 - Extend Contact Type Safely
- [x] Modify `src/types/site.ts` in place to support multiple ordered contact links for a channel while preserving optional placeholder behavior.
- [x] Keep the contact type explicit enough to distinguish a visible label from a URI.

### Step 2 - Configure Approved Contact Values
- [x] Modify `src/content/site.ts` in place.
- [x] Add two Phone links: visible labels `+959 443 167 419` and `+959 964444882`, with URI values `tel:+959443167419` and `tel:+959964444882`.
- [x] Add Email link: visible label `info@vitaltechmyanmar.com`, URI `mailto:info@vitaltechmyanmar.com`.
- [x] Omit WhatsApp entirely from the channel list.

### Step 3 - Render Shared Contact Links
- [x] Modify `src/components/ContactActions.astro` in place.
- [x] Render each Phone number as a separate clearly labelled link under one Phone group.
- [x] Render the Email action as a labelled link.
- [x] Preserve layout variants, semantic accessibility, responsive styling, and existing channel-level test-ID behavior where applicable.

### Step 4 - Validate
- [x] Run diagnostics for the three changed files.
- [x] Run `npm run build` and resolve failures.
- [x] Inspect static output or source contracts to confirm both telephone URIs, the email URI, and no WhatsApp output.

### Step 5 - Document Completion
- [x] Create `aidlc-docs/construction/vitaltech-contact-update/code/code-generation-summary.md` with modified files, values, validation, preserved behavior, and manual release checks.

## Approval Status
[Answer]: Approved and executed - 2026-08-27T15:37:12Z
