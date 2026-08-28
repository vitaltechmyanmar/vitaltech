# Theme Refresh Requirements Questions

## Context

The current Astro site uses a light cobalt editorial system. The requested refresh will be original to Vital Tech Myanmar: it will not copy HashiCorp logos, proprietary fonts, wording, illustrations, exact layouts, or brand assets.

The following choices determine the visual direction and the implementation boundary.

## Question 1
Which original color and surface direction should lead the refresh?

A) Dark technical foundation — near-black and charcoal surfaces, warm off-white type, and an original Vital Tech signal color such as ember orange; use blue only as a restrained secondary accent (recommended)

B) High-contrast hybrid — dark hero, navigation, and footer with light content surfaces, using original orange and blue accents

C) Light structured system — retain a bright canvas but move to stronger black typography, warm-gray rules, and an original orange signal color

X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 2
How broadly should the approved visual direction be applied?

A) Comprehensive shared refresh — update global tokens, type scale, header, footer, hero, buttons, cards, CTA/contact surfaces, and targeted page-level utility exceptions; preserve all copy, routes, and interaction behavior (recommended)

B) Shared-chrome refresh — update global tokens, header, footer, and hero only; leave existing card and section treatments mostly intact

C) Palette-only refresh — change semantic colors while preserving current component geometry and type hierarchy

X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 3
What typography and asset boundary should the implementation follow?

A) Use the existing system-font approach and original CSS geometry/texture only; do not add external font, illustration, icon, image, or package dependencies (recommended)

B) Add a new open-source web font after selecting and documenting its license; do not add branded visual assets

C) Other asset or typography approach (describe the permitted source, license, and intended use)

X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Existing Extension Decisions

Resiliency Baseline, Security Baseline, and Property-Based Testing are already disabled in `aidlc-docs/aidlc-state.md`. They are not re-opened for this UI-only theme refresh.
