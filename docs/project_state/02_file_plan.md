# The Table — Version 1 File Plan

## Root Responsibility

The project root contains the static frontend entry pages and clearly separated support directories.

## Page Files

- `index.html` — Home page shell.
- `menu.html` — Menu page shell.
- `about.html` — About page shell.
- `gallery.html` — Gallery page shell.
- `reservations.html` — Reservations page shell.
- `contact.html` — Contact page shell.

## CSS Files

- `css/reset.css` — Browser baseline reset only.
- `css/tokens.css` — Design-system constants only.
- `css/base.css` — Global element and typography defaults only.
- `css/layout.css` — Reusable structural layout primitives only.
- `css/components.css` — Reusable interface component styles only.
- `css/utilities.css` — Small, generic utilities only.
- `css/pages/*.css` — Page-specific composition only.

## Assets

- `assets/images/<page>/` — Page-owned imagery.
- `assets/images/shared/` — Truly cross-page imagery only.
- `assets/icons/` — Project-owned icon assets if later required.
- `assets/fonts/` — Reserved for future local font assets if deliberately adopted.
- `favicon/` — Favicons and related browser icons.

## Project-State Support

- `docs/project_state/` — Concise current-state, implementation and verification documents used to continue the project safely across sessions.

## Dependency Boundary

Version 1 uses no JavaScript packages, CSS frameworks or build dependencies.

The only current external runtime dependency is the requested web typography served from Google Fonts. The CSS contains robust system fallbacks.
