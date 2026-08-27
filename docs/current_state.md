# The Table — Current Project State

## Current Status

**Version 2 — LOCKED / ACCEPTED**

Version 2 is the authoritative interactive frontend baseline for The Table.

This lock follows:

- static/code acceptance
- cross-page JavaScript/accessibility review
- real browser visual QA
- accepted visual repairs for:
  - Reservations form
  - Contact form
  - About principles layout
  - Gallery mobile gutters

## Implemented Pages

- Home
- Menu
- About
- Gallery
- Reservations
- Contact

## Implemented Interaction Layer

- Mobile full-screen navigation enhancement.
- Escape handling, focus trapping/restoration and background scroll lock.
- Sticky/scrolled shared header.
- Shared accessible form-validation utilities.
- Reservation-form client-side validation.
- Contact-form client-side validation.
- Accessible Gallery lightbox using native `<dialog>`.
- Menu category tracking using `IntersectionObserver`.
- Restrained reveal motion with reduced-motion support.

## Progressive Enhancement

- Navigation retains a native HTML fallback.
- Menu category anchors work without JavaScript.
- Page content remains available without reveal JavaScript.
- Forms remain semantic.
- Gallery content remains visible without the lightbox.

## Accepted Visual Repairs

### Reservations + Contact
- Restored premium control styling.
- Corrected malformed reveal markup.
- Restored balanced field composition.
- Preserved validation hooks and enabled submit controls.

### About
- Corrected malformed reveal markup.
- Restored Seasonal / Rooted / Considered as a balanced principles system.

### Gallery
- Corrected mobile gutter containment.
- Preserved equal left/right spacing.
- Preserved the Gallery lightbox and 12-item structure.

## Deferred Beyond Version 2

- Final restaurant photography.
- Final fictional street address and telephone number.
- Backend reservation submission and persistence.
- Contact message delivery.
- Authentication.
- Database.
- React / TypeScript migration.

## Lock Rule

Version 2 should no longer be altered as ordinary feature development.

Any future correction to this baseline should be explicit, documented, and verified.

## Next Stage

**Version 3 — React migration planning**

The React phase must migrate the accepted product rather than redesign it.

## Imagery Completion

The previously abstract media surfaces have been connected to generated restaurant imagery across Home, Menu, About, and Gallery. The Gallery now uses real image elements and its lightbox displays the selected image rather than placeholder text. See `docs/IMAGE_ASSET_INVENTORY.md` for the asset map.
