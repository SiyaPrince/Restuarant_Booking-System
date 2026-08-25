# The Table — Foundation Test and Verification v1.1

## Verification Scope

This record covers only the shared Version 1 foundation.

## Planned Automated / Static Checks

1. Confirm all expected files exist.
2. Confirm every HTML page contains:
   - one `<main id="main-content">`
   - one H1
   - skip link targeting `#main-content`
   - primary navigation
   - shared footer
3. Confirm local navigation targets exist.
4. Confirm linked local CSS files exist.
5. Confirm each page has a title and meta description.
6. Confirm no JavaScript files or script tags are present.
7. Confirm CSS token file contains the locked primary design tokens.
8. Confirm page-specific stylesheets contain no premature page implementation.

## Manual Checks Required After Delivery

1. Open all six pages in a modern desktop browser.
2. Verify fonts load and fall back acceptably if blocked.
3. Keyboard-tab through the header and confirm focus is visible.
4. Activate the skip link and confirm focus/navigation reaches main content.
5. Resize to mobile width and confirm navigation wraps/flows without horizontal overflow.
6. Verify footer remains readable on mobile.
7. Confirm page links navigate to the expected local page.
8. Visually confirm Warm Ivory, Charcoal and Deep Olive match the approved design direction.

## Status Vocabulary

- PASS
- FAIL
- PARTIAL
- INCONCLUSIVE
- NOT RUN
- BLOCKED
- NOT APPLICABLE

## Current Closeout

Automated/static checks are recorded in `verification_results.md`.

Browser/manual checks remain **NOT RUN** until performed in an actual browser by the developer/user.
