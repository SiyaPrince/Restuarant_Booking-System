# The Table — V2.7 Menu Active Category

## Objective

Enhance the existing sticky Menu category navigation so that Starters, Mains, Desserts and Drinks reflect the section currently being viewed.

## Implemented

- `menu.js` is active through `main.js`.
- Existing anchor navigation remains intact.
- Stable `data-*` JavaScript hooks are added to the Menu category navigation and sections.
- `IntersectionObserver` tracks visible menu sections.
- The most relevant visible section becomes active.
- Active category receives:
  - `.is-active`
  - `aria-current="true"`
- Clicking a category updates the active state immediately.
- URL hash is respected on initial load where valid.
- Reduced-motion-safe CSS is preserved.

## Progressive Enhancement

Without JavaScript:

- all category links still work as normal anchor links
- sticky category navigation remains usable

With JavaScript:

- the current section is highlighted as the user scrolls

## Explicitly Deferred

- filtering menu items
- dynamic menu data
- dietary filtering
- search
- animated category transitions
- API-driven menu content

## Next Planned Iteration

V2.8 — optional restrained reveal motion, followed by cross-page JavaScript review and V2 acceptance.
