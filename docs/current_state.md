# The Table — Current State

## Current Iteration

**Version 1.9 — Static HTML/CSS acceptance candidate**

## Implemented

### Shared Foundation

- Six-page semantic HTML5 structure.
- Shared primary navigation and footer.
- Skip-to-content accessibility foundation.
- Global design tokens.
- Cormorant Garamond / Inter typography system.
- Mobile-first layout primitives.
- Shared buttons, links, form controls, header and footer styles.
- Reduced-motion handling.
- Responsive page-specific CSS.

### Home

- Cinematic hero composition.
- Restaurant identity and primary CTAs.
- Short restaurant introduction.
- Three-item featured menu teaser.
- Atmosphere / Gallery teaser.
- Compact reservation CTA.
- Essential visit information.

### Menu

- Seasonal menu introduction.
- Anchor-based category navigation.
- Starters, Mains, Desserts and Drinks.
- Dietary key.
- Editorial visual breaks.
- Compact reservation CTA.

### About

- Restaurant introduction and story.
- Editorial image composition.
- Deep Olive kitchen-philosophy section.
- Seasonal / Rooted / Considered principles.
- Executive chef section.
- Closing location link.

### Gallery

- Concise gallery introduction.
- 12-item editorial grid.
- Controlled image aspect-ratio system.
- Responsive mobile/tablet/desktop grid rules.
- Compact reservation CTA.

### Reservations

- Semantic reservation-request form.
- Date, time and guest fields.
- Full name, email, phone and special requests.
- Booking guidance section.
- Static action intentionally disabled until real submission functionality exists.

### Contact

- Visit information.
- Email contact.
- Full weekly opening hours.
- Pre-publication directions section.
- General enquiry form.
- Static action intentionally disabled until real message delivery exists.

## Version 1 Boundaries Preserved

- No JavaScript.
- No package-manager dependencies.
- No CSS framework.
- No backend.
- No database.
- No authentication.
- No fake successful reservation or message submission.

## Open Acceptance Items

1. Final restaurant photography is not installed.
2. Exact fictional street address is not finalised.
3. Telephone number is not finalised.
4. Real-browser visual QA remains required at desktop, tablet and mobile widths.
5. Any issues found during browser QA must be repaired before Version 1 is tagged complete.

## Verification State

- Cross-page static verification v1.8: passed.
- Expanded static acceptance verification v1.9: see `verification_results_v1_9.md`.
- Browser rendering in the current automation environment: blocked by the environment and therefore not counted as evidence.
- Local human/browser verification: not yet recorded.

## Next Bounded Task

Perform real-browser Version 1 visual QA and integrate final content assets. Do not start Version 2 JavaScript before the Version 1 acceptance gate is closed.
