# The Table — V2.1 JavaScript Foundation and Mobile Navigation

## Objective

Introduce the JavaScript architecture and enhance the existing mobile navigation without redesigning Version 1.

## JavaScript Structure

```text
js/
├── main.js
├── navigation.js
├── header.js
├── gallery.js
├── forms.js
├── reservations.js
├── contact.js
└── menu.js
```

## Implemented

- Native ES modules.
- Shared `main.js` entry point on all six pages.
- Progressive enhancement over the existing `details` / `summary` mobile menu.
- `aria-expanded` synchronization.
- `aria-hidden` synchronization.
- Escape-to-close.
- Focus trapping while the menu is open.
- Focus restoration after close.
- Background scroll locking while open.
- Close-on-navigation-link selection.

## Progressive Enhancement

Without JavaScript, the Version 1 native disclosure navigation still works.

With JavaScript, state management and keyboard behaviour are enhanced.

## Deferred

- Sticky/scrolled header.
- Gallery lightbox.
- Reservation validation.
- Contact validation.
- Active menu category.
- Reveal motion.
