# The Table — V2.6 Gallery Lightbox

## Objective

Enhance the existing Gallery page with a full-screen accessible viewer without changing the editorial gallery layout.

## Implemented

- `gallery.js` is active through `main.js`.
- Existing gallery figures are interactive and keyboard-activatable.
- Native `<dialog>` provides the modal foundation.
- Full-screen Charcoal viewer.
- Current item counter.
- Previous / next controls.
- Close control.
- Escape closes.
- Left/Right arrow keys navigate.
- Tab focus remains within the open viewer.
- Focus returns to the triggering gallery item on close.
- Background page scroll is locked while open.
- Clicking the backdrop closes the viewer.
- Navigation wraps from first to last and last to first.

## Current Media Behaviour

The project still uses the approved temporary editorial media surfaces rather than final photography.

The lightbox therefore presents the same descriptive visual content in an enlarged viewer. Final photography can later replace the surfaces without changing the interaction architecture.

## Explicitly Deferred

- final restaurant photography
- touch swipe gestures
- image preloading
- thumbnail strip
- download/share actions
- autoplay slideshow

## Next Planned Iteration

V2.7 — Menu active-category state.
