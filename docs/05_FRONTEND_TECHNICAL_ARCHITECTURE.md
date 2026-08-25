# The Table — Frontend Technical Architecture v1.0

## Document Purpose

This document defines the implementation architecture for Version 1 and the intended migration path into JavaScript, React, TypeScript, Next.js, and full-stack development.

The goal is to prevent ad hoc technical decisions during implementation.

---

# 1. Version 1 Technology

Version 1 uses only:

- HTML5.
- CSS3.

Explicitly excluded:

- JavaScript.
- React.
- Tailwind.
- Bootstrap.
- Sass.
- Component libraries.
- Build tools.
- State libraries.
- Routing libraries.
- Backend services.

The purpose is to demonstrate semantic HTML, maintainable CSS, layout, responsiveness, accessibility, and frontend fundamentals first.

---

# 2. Project Structure

```text
the-table/
│
├── index.html
├── menu.html
├── about.html
├── gallery.html
├── reservations.html
├── contact.html
│
├── css/
│   ├── reset.css
│   ├── tokens.css
│   ├── base.css
│   ├── layout.css
│   ├── components.css
│   ├── utilities.css
│   └── pages/
│       ├── home.css
│       ├── menu.css
│       ├── about.css
│       ├── gallery.css
│       ├── reservations.css
│       └── contact.css
│
├── assets/
│   ├── images/
│   │   ├── home/
│   │   ├── menu/
│   │   ├── about/
│   │   ├── gallery/
│   │   └── shared/
│   │
│   ├── icons/
│   └── fonts/
│
├── favicon/
│
├── README.md
└── LICENSE
```

This structure is intentionally organised but not overengineered.

---

# 3. HTML Files

Use predictable filenames:

- `index.html`
- `menu.html`
- `about.html`
- `gallery.html`
- `reservations.html`
- `contact.html`

Avoid unnecessarily creative filenames because simple paths make development and future migration clearer.

---

# 4. CSS Architecture

## `reset.css`

Responsibilities:

- Normalize/remove problematic browser defaults.
- Box sizing.
- Base media behavior.
- Form inheritance where appropriate.

## `tokens.css`

Single source of truth for:

- Colours.
- Typography values.
- Spacing.
- Containers.
- Radii.
- Motion values.
- Borders.
- Optional z-index levels.

## `base.css`

Global element styling:

- `html`.
- `body`.
- Headings.
- Paragraphs.
- Links.
- Images.
- Buttons.
- Inputs.
- Textareas.
- Selects.
- Base focus behaviour.

## `layout.css`

Reusable structural patterns:

- Containers.
- Sections.
- Grid.
- Split layouts.
- Stack/flow patterns.
- Generic layout helpers.

## `components.css`

Reusable interface patterns:

- Site header.
- Navigation.
- Footer.
- Buttons.
- Text links.
- Section headings.
- Menu item.
- Form field.
- CTA.
- Opening-hours pattern.
- Reusable image treatments.

## `utilities.css`

Only a small set of genuinely useful utilities.

Examples:

- `.visually-hidden`.
- `.text-center`.
- `.flow`.

Do not recreate a utility-first framework manually.

## `css/pages/*.css`

Only genuinely page-specific composition.

Examples:

- Homepage hero positioning.
- Featured-dish asymmetric layout.
- About editorial image arrangement.
- Gallery span rules.
- Reservation split.
- Contact information composition.

---

# 5. CSS Loading Order

Each page should load CSS in this order:

```text
reset.css
tokens.css
base.css
layout.css
components.css
utilities.css
page-specific.css
```

The page stylesheet is allowed to override global patterns only where the page composition genuinely requires it.

---

# 6. CSS Principle

> **Global first, page-specific second.**

If a button appears on multiple pages, style it once globally.

Do not duplicate it inside:

- `home.css`.
- `menu.css`.
- `about.css`.
- `reservations.css`.

---

# 7. CSS Variables

Use `:root` custom properties as the source of truth.

Conceptual example:

```css
:root {
  --color-canvas: #F4F0E8;
  --color-surface: #E6DED2;
  --color-ink: #1C1C19;
  --color-ink-soft: #656159;
  --color-brand: #394438;
  --color-brand-hover: #2F382E;
  --color-clay: #A76245;
  --color-brass: #B79662;
  --color-border: #CFC6B9;
}
```

Use:

```css
background: var(--color-canvas);
```

rather than repeating literals everywhere.

---

# 8. Token Categories

`tokens.css` should eventually define:

- Colour tokens.
- Font-family tokens.
- Fluid text tokens.
- Spacing tokens.
- Container sizes.
- Radius tokens.
- Border tokens.
- Motion durations/easing.
- Optional z-index scale.

---

# 9. Semantic Page Skeleton

Each page should generally use:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  ...
</head>
<body>

  <a href="#main-content" class="skip-link">Skip to main content</a>

  <header>
    <nav></nav>
  </header>

  <main id="main-content">
    ...
  </main>

  <footer></footer>

</body>
</html>
```

Avoid unnecessary root wrappers unless a later feature needs them.

---

# 10. Semantic Elements

Prefer meaningful elements:

- `<header>`.
- `<nav>`.
- `<main>`.
- `<section>`.
- `<article>` where appropriate.
- `<figure>`.
- `<figcaption>`.
- `<form>`.
- `<address>`.
- `<footer>`.

Do not use semantic elements just for variety; use them only when they represent the content correctly.

---

# 11. Heading Architecture

Each page gets one primary H1.

Use H2/H3 according to document structure.

Visual appearance is controlled by CSS, not by selecting a heading level.

---

# 12. Container Classes

Define reusable container classes:

```text
.container
.container--wide
.container--reading
```

Conceptual targets:

- Standard: 1240px.
- Wide: 1440px.
- Reading: 680px.

---

# 13. Section Pattern

Typical:

```html
<section class="section">
  <div class="container">
    ...
  </div>
</section>
```

Possible modifiers only where genuinely needed:

- `.section--dark`
- `.section--olive`
- `.section--compact`
- `.section--full`

Do not pre-create dozens of unused modifiers.

---

# 14. Class Naming

Use a lightweight BEM-inspired system.

Examples:

```text
.site-header
.site-header__logo
.site-header__nav
.site-header__actions

.menu-item
.menu-item__header
.menu-item__name
.menu-item__price
.menu-item__description
```

This provides structure without excessive verbosity.

---

# 15. Selector Strategy

Avoid brittle selectors such as:

```css
header nav ul li a
main section div div p
```

Prefer explicit component classes:

```css
.site-nav__link
.menu-item__description
```

---

# 16. IDs

Use IDs primarily for:

- Section anchors.
- Form label relationships.
- Accessibility relationships.

Example:

- `#starters`
- `#mains`
- `#desserts`
- `#drinks`
- `#main-content`

Do not use IDs as the normal CSS styling system.

---

# 17. Specificity

Keep specificity low.

Avoid `!important` except in rare exceptional cases.

Avoid deeply nested selectors.

The stylesheet should not become a specificity contest.

---

# 18. Layout Technology

Use:

## Flexbox
For:

- Navigation.
- Button/action groups.
- Small rows.
- Hours rows.
- Simple one-dimensional alignment.

## CSS Grid
For:

- Page composition.
- Featured menu layout.
- Gallery.
- About splits.
- Contact columns.
- Footer structure.

Do not force either technology everywhere.

---

# 19. Mobile-First CSS

Base styles target mobile.

Enhance with a small number of media queries.

Initial conceptual media-query points may be:

- approximately `48rem`.
- approximately `64rem`.
- approximately `80rem`.

Add another breakpoint only if content genuinely needs it.

---

# 20. Fluid CSS

Use modern CSS where it simplifies the system:

- `clamp()`.
- `min()`.
- `max()`.

Particularly useful for:

- Typography.
- Section spacing.
- Container padding.

Avoid clever CSS purely for novelty.

---

# 21. Header Architecture

Global structure:

```text
site-header
├── logo
├── navigation
│   ├── Menu
│   ├── About
│   ├── Gallery
│   └── Contact
└── Reserve CTA
```

Home modifier:

```text
.site-header--overlay
```

Internal page direction:

```text
.site-header--light
```

Future Version 2 state:

```text
.site-header--scrolled
```

Underlying HTML should not need to change.

---

# 22. Current Navigation State

Internal pages should communicate current-page location visually and accessibly.

Future implementation should use the appropriate current-page attribute/state in addition to visual styling.

---

# 23. Footer Architecture

Static footer structure:

```text
footer
├── brand
├── navigation
├── visit / hours
├── contact / social
└── legal
```

Version 1 duplicates this static markup across pages.

That duplication is acceptable and pedagogically useful.

When React is introduced, this repeated structure naturally becomes a shared component.

Do not introduce a template engine in V1 solely to remove duplication.

---

# 24. Reusable Component Inventory

Even before React, think in reusable patterns:

- Site Header.
- Logo.
- Navigation.
- Reserve CTA.
- Primary Button.
- Secondary Button.
- Text Link.
- Section Heading.
- Image Block.
- Menu Category.
- Menu Item.
- Gallery Item.
- Reservation Form.
- Contact Form.
- Form Field.
- Opening Hours.
- Footer.

---

# 25. Home File Responsibility

`index.html` contains only:

- Hero.
- Introduction.
- Featured Menu.
- Atmosphere.
- Reservation CTA.
- Visit summary.

`home.css` contains only unique Home composition.

---

# 26. Menu File Responsibility

`menu.html` contains:

- Page intro.
- Category navigation.
- Starters.
- Mains.
- Desserts.
- Drinks.
- Compact reservation CTA.

Menu data remains static HTML in V1.

This is deliberate so later progression is visible.

---

# 27. Menu Anchors

Use actual IDs:

- `starters`.
- `mains`.
- `desserts`.
- `drinks`.

The category navigation must work without JavaScript.

---

# 28. Menu Semantics

Structure dishes clearly with:

- Name.
- Price.
- Description.
- Optional dietary indicator.

Use `<article>` only if it semantically makes sense; do not overuse semantic elements for their own sake.

---

# 29. About File Responsibility

`about.html` contains:

- Intro.
- Story.
- Editorial image pair.
- Kitchen philosophy.
- Culinary principles.
- Chef.
- Closing statement.

`about.css` handles the page-specific editorial compositions.

---

# 30. Gallery File Responsibility

`gallery.html` contains:

- Introduction.
- Editorial image grid.
- Compact CTA.

Use CSS Grid for the gallery.

Do not use a masonry library in V1.

---

# 31. Gallery Asset Naming

Do not use camera filenames such as:

- `IMG_0123.jpg`.
- `image-final2.jpg`.

Use descriptive filenames:

- `dining-room-evening.webp`.
- `springbok-main.webp`.
- `chef-plating.webp`.
- `table-setting-detail.webp`.

Every gallery image should have:

- Filename.
- Alt text decision.
- Aspect ratio.
- Visual purpose.

---

# 32. Reservations File Responsibility

`reservations.html` contains one reservation form.

Field names should be future-friendly:

- `reservation_date`.
- `reservation_time`.
- `guest_count`.
- `full_name`.
- `email`.
- `phone`.
- `special_requests`.

Use real labels and semantic input types.

No fake persistence.

---

# 33. Contact File Responsibility

`contact.html` contains:

- Visit information.
- Phone.
- Email.
- Opening hours.
- Directions placeholder.
- Contact form.

Contact form names:

- `name`.
- `email`.
- `subject`.
- `message`.

No fake map in V1.

---

# 34. Form Association

Use matching label/input relationships.

Concept:

```html
<label for="reservation-email">Email address</label>
<input
  id="reservation-email"
  name="email"
  type="email"
  autocomplete="email"
>
```

---

# 35. Responsive Images

Use as appropriate:

- `srcset`.
- `sizes`.
- `<picture>`.
- Width/height attributes.
- CSS `aspect-ratio`.
- Art-directed crop decisions.

---

# 36. Image Formats

Prefer efficient modern formats for deployment, such as WebP where appropriate.

Keep source originals outside the production asset path if needed.

Do not deploy 6000px images everywhere.

---

# 37. Lazy Loading

Use `loading="lazy"` for appropriate below-the-fold images.

Do **not** lazy-load the critical homepage hero.

---

# 38. Font Strategy

Initial frontend may use appropriately referenced web fonts.

Do not prematurely complicate V1 with self-hosting unless needed.

Later production work may evaluate:

- Self-hosting.
- Subsetting.
- Preload.
- `font-display`.
- Removing unused weights.

---

# 39. Version 1 Mobile Navigation Decision

Because V1 has no JavaScript:

- Do not build a fake interactive hamburger.
- Do not use a checkbox hack by default.
- Keep a visible, usable responsive navigation arrangement.

Version 2 will add the real full-screen navigation interaction.

This gives JavaScript a meaningful feature rather than an artificial requirement.

---

# 40. Version 2 JavaScript Structure

When JavaScript is introduced:

```text
js/
├── main.js
├── navigation.js
├── gallery.js
├── reservations.js
└── contact.js
```

Avoid one enormous `script.js`.

---

# 41. Version 2 JavaScript Responsibilities

Add:

- Mobile navigation.
- Sticky/scrolled header behaviour.
- Gallery lightbox.
- Form validation.
- Form feedback.
- Optional menu active-section enhancement.
- Controlled reveal/motion only if justified.

Do not add JavaScript simply because the roadmap says to.

---

# 42. Menu Data Evolution

## Version 1
Static HTML.

## Version 2
Potential JavaScript arrays/objects.

Conceptual dish model:

```text
name
description
price
category
dietary
```

## React
Render the same structured data through reusable components.

This creates a visible learning progression.

---

# 43. React Migration Direction

Future conceptual structure:

```text
src/
├── components/
├── pages/
├── data/
├── styles/
├── assets/
└── App
```

Static patterns become:

- SiteHeader.
- Footer.
- Button.
- SectionHeading.
- MenuItem.
- GalleryItem.
- FormField.

The project should be **converted**, not redesigned.

---

# 44. TypeScript Migration

TypeScript should add real safety, not merely change file extensions.

Use types/interfaces for:

- Menu items.
- Categories.
- Form data.
- Component props.
- Gallery entries.
- Reservation data.
- Shared content models.

---

# 45. Next.js Migration

Later introduce:

- Production routing.
- Image optimisation.
- Metadata.
- SEO.
- Server functionality.
- Production architecture.

Tailwind remains optional and should be adopted only with a deliberate reason.

---

# 46. What V1 Must Not Introduce

No:

- NPM complexity without need.
- Frameworks.
- CSS-in-JS.
- Giant utility systems.
- Custom component libraries.
- Fake backend.
- JSON server.
- Auth.
- Routing library.
- State library.
- Animation library.

---

# 47. Git Workflow

Simple branches are enough:

- `main`.
- `development`.

Optional feature branches:

- `feature/home-page`.
- `feature/menu-page`.
- `feature/about-page`.
- etc.

Do not introduce enterprise-level Git complexity for a solo learning project.

---

# 48. Commit Quality

Avoid vague commits:

- `update`.
- `changes`.
- `stuff`.
- `fix`.
- `more css`.

Prefer:

- `feat: build responsive homepage hero`
- `feat: add menu category layout`
- `style: implement global typography system`
- `fix: correct mobile reservation form overflow`
- `a11y: add keyboard focus states`

---

# 49. README Requirements

Eventually document:

- Project purpose.
- Screenshots.
- Technologies.
- Design philosophy.
- Information architecture.
- Accessibility decisions.
- Responsive strategy.
- Version progression.
- Setup instructions.
- Roadmap.

The README should make the project evolution obvious to portfolio reviewers.

---

# 50. Development Order

Use this implementation order:

```text
1. Project foundation
2. Global design system
3. Header
4. Footer
5. Home
6. Menu
7. About
8. Gallery
9. Reservations
10. Contact
11. Cross-page responsive review
12. Accessibility review
13. Performance review
14. Final polish
```

---

# 51. Per-Page Build Cycle

For each page:

```text
HTML structure
↓
Base styling
↓
Desktop composition
↓
Mobile / tablet refinement
↓
Accessibility
↓
Polish
↓
Move on
```

This keeps the project usable throughout development.

---

# 52. Why Home Comes First

Home establishes:

- Header treatment.
- Typography.
- Major spacing.
- Primary CTA.
- Photography style.
- Container widths.
- Responsive patterns.

Later pages reuse this foundation.

---

# 53. Architecture Layers

Version 1:

```text
CONTENT
Restaurant copy, menu, imagery

↓

STRUCTURE
Semantic HTML

↓

DESIGN SYSTEM
Tokens, typography, spacing, reusable components

↓

PAGE COMPOSITION
Page-specific CSS
```

Then:

```text
INTERACTION
JavaScript

↓

COMPONENT ARCHITECTURE
React

↓

TYPE SAFETY
TypeScript

↓

PRODUCTION FRAMEWORK
Next.js

↓

APPLICATION SERVICES
Backend, Database, Authentication
```

---

# 54. Architecture Lock

Version 1 decisions now considered locked:

- Static multi-page HTML.
- Mobile-first CSS.
- Separated global and page styles.
- CSS custom-property design tokens.
- Lightweight BEM-inspired naming.
- Semantic HTML.
- Accessible forms.
- CSS Grid + Flexbox.
- Responsive imagery.
- Progressive enhancement.
- No JavaScript in V1.
- No frontend framework in V1.
- No CSS framework.
- Shared visual components.
- Page-specific compositions.
- Clean migration path into JavaScript and React.
