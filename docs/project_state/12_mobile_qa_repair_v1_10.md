# The Table — Mobile QA Repair v1.10

## Evidence

Real mobile screenshots demonstrated:

1. Horizontal scrolling on narrow screens.
2. Warm Ivory canvas exposed to the right of the dark footer.
3. Desktop navigation links wrapping underneath the logo rather than using the approved mobile menu.

## Root-Level Repairs

### Container sizing

The previous container declaration relied on arithmetic inside `min()`.

v1.10 replaces that pattern with a more robust full-width + max-width + horizontal-padding container model.

### Overflow resilience

The root document, main content, header, footer, grid children and footer text are constrained to the viewport and given safe minimum widths/wrapping behavior.

This is not intended to hide component overflow; it accompanies the actual container/header repairs.

### Mobile navigation

A semantic native `details` / `summary` disclosure menu replaces the wrapped desktop navigation below 48rem.

It provides:

- Menu / Close control
- full-screen Charcoal panel
- Home
- Menu
- About
- Gallery
- Contact
- Reserve a Table
- Rosebank / Johannesburg context
- email access
- current-page indication

No JavaScript is introduced.

## Desktop

At 48rem and above:

- desktop navigation is restored
- mobile disclosure navigation is hidden
- existing Reserve action remains

## Version Boundary

This repair stays inside Version 1.

Version 2 may later replace or enhance the native disclosure with JavaScript for focus trapping, explicit body scroll management, animation control and richer header state behavior.
