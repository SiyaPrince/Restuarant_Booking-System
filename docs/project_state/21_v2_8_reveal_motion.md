# The Table — V2.8 Restrained Reveal Motion

## Objective

Add a restrained editorial reveal effect to selected high-level content without animating every element or making content availability depend on motion.

## Implemented

- New `animations.js` module.
- Native `IntersectionObserver`.
- Selected major content blocks use `data-reveal`.
- Reveals run once, then the element is unobserved.
- Motion uses:
  - opacity transition
  - small vertical translation
  - existing editorial duration token
- `prefers-reduced-motion: reduce` disables the effect and makes content immediately visible.

## Scope Control

Reveal motion is intentionally **not** applied to:

- every menu item
- every gallery item
- every form field
- navigation
- footer content
- critical interactive controls

The goal is rhythm, not spectacle.

## Progressive Enhancement

Without JavaScript, all content is visible normally because reveal hiding is scoped behind the `.js` root class.

With JavaScript, selected sections reveal as they enter the viewport.

## Version 2 Feature Work

V2 interaction feature implementation is now complete.

The next stage is:

**Version 2 cross-page JavaScript, accessibility, interaction and regression review.**
