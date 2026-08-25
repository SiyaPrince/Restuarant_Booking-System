# The Table — Foundation Implementation Plan v1.1

## Bounded Objective

Create the reusable static foundation required by every Version 1 page without implementing any page's final content composition.

## Files Created

### HTML
- `index.html`
- `menu.html`
- `about.html`
- `gallery.html`
- `reservations.html`
- `contact.html`

### Global CSS
- `css/reset.css`
- `css/tokens.css`
- `css/base.css`
- `css/layout.css`
- `css/components.css`
- `css/utilities.css`

### Page CSS Stubs
- `css/pages/home.css`
- `css/pages/menu.css`
- `css/pages/about.css`
- `css/pages/gallery.css`
- `css/pages/reservations.css`
- `css/pages/contact.css`

### Support
- Page-specific and shared asset directories.
- Neutral project-state documentation.

## Preserve List for the Next Iteration

The next implementation step must preserve:

- Current filenames and folder responsibilities.
- CSS loading order.
- Design token names.
- Global container classes.
- Shared header markup and class names unless a verified accessibility/usability issue requires change.
- Shared footer markup and class names unless a verified accessibility/usability issue requires change.
- Skip-link pattern.
- Current navigation routes.
- Version 1 no-JavaScript constraint.

## Explicitly Deferred

- Home page final hero and sections.
- Mobile overlay navigation.
- Sticky/scrolled header.
- Forms.
- Gallery lightbox.
- Menu data.
