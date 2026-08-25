# The Table — Version 1 Specification

## Objective

Implement the first static frontend version of The Table using semantic HTML5 and CSS3 while preserving the approved product, UX and visual design decisions.

## Current Iteration

This iteration is limited to the shared project foundation.

### In Scope

- Project folder structure.
- Six HTML page shells.
- Shared semantic header and navigation.
- Shared semantic footer.
- Skip-link accessibility foundation.
- Global design tokens.
- Global typography.
- Base element styles.
- Container and layout primitives.
- Shared button/link/header/footer components.
- Empty page-specific stylesheets for controlled later extension.

### Out of Scope

- Homepage section implementation.
- Menu content implementation.
- About content implementation.
- Gallery grid and imagery.
- Reservation form.
- Contact content and contact form.
- JavaScript.
- Backend, persistence, authentication or administration.
- Production deployment.

## Non-Negotiables

- No project branding or internal governance labels from external development standards.
- No JavaScript in Version 1.
- No CSS framework.
- Maintain the approved colour, typography and spacing system.
- Maintain one clear primary responsibility per file.
- Keep dependencies minimal.
- Use semantic HTML and visible keyboard focus.
- Preserve a clean migration path into later JavaScript and React versions.

## Success Conditions

- All planned foundation files exist.
- Every HTML file loads the same global CSS stack plus one page stylesheet.
- Navigation paths resolve locally.
- Each page includes one H1 and one main landmark.
- Skip link targets the main landmark.
- Current internal navigation state is represented.
- Shared header and footer are structurally consistent.
- CSS tokens centralise approved visual constants.
- No page-specific product content beyond foundation placeholders is implemented.
