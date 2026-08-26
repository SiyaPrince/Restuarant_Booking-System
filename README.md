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
