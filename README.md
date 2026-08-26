# The Table

A frontend-first restaurant website project for a fictional contemporary South African restaurant in Rosebank, Johannesburg.

## Current Version

**Version 1 — Static HTML/CSS Acceptance Candidate (v1.9)**

All six primary pages are implemented:

- Home
- Menu
- About
- Gallery
- Reservations
- Contact

Version 1 currently demonstrates:

- Semantic multi-page HTML5 structure.
- Mobile-first responsive CSS.
- Shared design tokens and reusable component styles.
- Accessible navigation and form foundations.
- Editorial restaurant layouts across six distinct page responsibilities.
- Static reservation and contact interfaces that do not pretend backend functionality exists.
- No JavaScript, package-manager dependency, CSS framework, backend or database.

### Remaining Version 1 acceptance items

- Replace temporary editorial media surfaces with final restaurant photography.
- Finalise the fictional street address.
- Finalise the restaurant telephone number.
- Complete real-browser visual QA at desktop, tablet and mobile widths.
- Repair any issues discovered during that rendered review before tagging Version 1 complete.

## Design Direction

Modern, elegant, warm, refined, premium and welcoming.

The visual system uses:

- Cormorant Garamond for editorial display typography.
- Inter for interface and body typography.
- Warm Ivory as the primary canvas.
- Charcoal as the primary text/dark surface.
- Deep Olive as the main brand colour.
- Restrained Clay and Brass accents.
- Editorial imagery and minimally rounded surfaces.

## Run Locally

No build step is required.

From the project directory:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

You may also open the HTML files directly, although a local HTTP server is preferred for realistic browser testing.

## Project State

Continuation and verification notes are maintained in:

`docs/project_state/`

Start with:

- `current_state.md`
- `project_map.md`
- `verification_results_v1_9.md`

## Version Roadmap

1. Static HTML/CSS — current acceptance candidate.
2. JavaScript interaction.
3. React.
4. TypeScript.
5. Next.js.
6. Full-stack reservations and management.
7. Production engineering.

The product design should evolve rather than being repeatedly rebuilt.


## Version 2 Status

**V2.1 — JavaScript foundation and mobile navigation**

The project now uses native ES modules. The first JavaScript enhancement improves the existing mobile navigation while preserving the Version 1 no-JavaScript fallback.


### V2.2 — Sticky / Scrolled Header

The shared header now has JavaScript-enhanced scroll state. Home transitions from the transparent hero overlay to the standard Warm Ivory navigation treatment after scrolling.


### V2.3 — Shared Form Validation Architecture

A reusable accessible validation layer now exists for Reservations and Contact. Page-specific validation is intentionally deferred to the next bounded iterations.


### V2.4 — Reservation Validation

The Reservations page now uses the shared accessible validation layer for date, time, guests, name, email and phone. Valid frontend input produces an honest readiness state rather than a false booking confirmation.


### V2.5 — Contact Validation

The Contact page now uses the shared accessible validation layer for name, email, subject and message. Valid frontend input produces an honest readiness state rather than a false delivery confirmation.


### V2.6 — Gallery Lightbox

Gallery items now open in an accessible full-screen viewer with keyboard navigation, previous/next controls, focus management and scroll locking.


### V2.7 — Menu Active Category

The sticky Menu category navigation now tracks the visible section using IntersectionObserver while preserving the original anchor-link fallback.


### V2.8 — Restrained Reveal Motion

Selected editorial content now reveals on entry using IntersectionObserver. Motion is intentionally limited and respects `prefers-reduced-motion`.


## Version 2 Acceptance Candidate — v2.9

All planned JavaScript interactions are implemented. A cross-page code/accessibility review has been completed and repaired. Real-browser interaction QA remains the final Version 2 acceptance requirement before the React migration.
