# The Table — Responsive, Accessibility and Interaction Specification

## Document Purpose

This document defines the responsive behaviour, accessibility expectations, performance considerations, and interaction principles for The Table.

These are product requirements, not optional polish.

---

# 1. Responsive Principle

Mobile is a primary experience.

Do not:

- Build desktop first and then compress it.
- Preserve a desktop layout purely for consistency.
- Hide important content because space is smaller.
- Shrink typography and controls until they technically fit.

Instead:

> **Preserve content priority while changing composition.**

---

# 2. Mobile-First Implementation Direction

Version 1 CSS should start from mobile and enhance upward.

Conceptual order:

```text
Mobile base
↓
Tablet
↓
Laptop
↓
Desktop
```

This avoids a large desktop stylesheet followed by extensive mobile overrides.

---

# 3. Breakpoint Philosophy

Breakpoints should respond to **content failure**.

Initial reference ranges:

| Range | Concept |
|---|---|
| `<480px` | Small mobile |
| `480–767px` | Mobile |
| `768–1023px` | Tablet |
| `1024–1279px` | Laptop |
| `1280px+` | Desktop |
| `1600px+` | Large display |

If navigation breaks at 1100px, change it at 1100px.

Do not preserve a breakpoint merely because it was pre-planned.

---

# 4. Navigation Responsiveness

## Desktop

```text
THE TABLE   Menu   About   Gallery   Contact   Reserve
```

## Version 1 Mobile Constraint

Version 1 contains no JavaScript.

Do not create a fake hamburger menu that cannot correctly manage state and accessibility.

Preferred V1 approach:

- A usable responsive navigation arrangement.
- Links may wrap or stack cleanly.
- Reserve remains visible.
- No hidden functionality.

A CSS-checkbox menu is possible but intentionally not preferred because it teaches a workaround that Version 2 will immediately replace.

## Version 2 Mobile Navigation

Use a proper full-screen overlay.

Requirements:

- Open button.
- Close button.
- Keyboard operability.
- Focus management.
- Focus trapping while open.
- Escape to close.
- Background scroll prevention.
- Current-page state.
- Reserve CTA.
- Large tap targets.

---

# 5. Responsive Typography

Large headings should use fluid sizing where possible.

Conceptual approach:

```css
font-size: clamp(minimum, preferred-fluid-value, maximum);
```

Avoid dozens of font-size media queries.

Mobile typography should be recomposed, not merely shrunk.

---

# 6. Responsive Images

Images may require different crops on different viewports.

Do not assume the same `object-position` works everywhere.

Responsive image strategy may use:

- `srcset`.
- `sizes`.
- `<picture>`.
- Deliberate art direction.
- Different crops where necessary.

---

# 7. Home Responsive Rules

## Hero
- Desktop: approximately full viewport.
- Mobile: single-column.
- Reposition/crop hero image deliberately.
- Text stays left aligned.
- Primary CTA becomes easier to tap.
- Supporting copy may shorten if necessary.

## Featured Menu
- Desktop: asymmetric editorial layout.
- Mobile: vertical dish feed.
- Do not force small side-by-side cards.

## Atmosphere
- Desktop: split image/text.
- Mobile: stack.
- Image remains prominent.

## Visit Information
- Desktop: multiple information columns.
- Tablet: two-column if needed.
- Mobile: stack logically.

---

# 8. Menu Responsive Rules

- Desktop may use asymmetric category / dish composition.
- Mobile becomes one column.
- Category nav may scroll horizontally.
- Dish prices remain visually connected to dish names.
- Descriptions wrap naturally.
- Do not reproduce a desktop PDF-style menu on phones.

---

# 9. About Responsive Rules

- Intro split becomes stacked.
- Editorial image pair may remain intentionally asymmetrical but must not create awkward overlaps.
- Philosophy principles stack when necessary.
- Chef image and biography stack cleanly on mobile.
- Narrative copy uses constrained reading width.

---

# 10. Gallery Responsive Rules

Desktop:

- CSS Grid editorial composition.
- Varied spans.

Mobile:

- Primarily one column.
- Occasional two-image pairing only where useful.
- Do not shrink many thumbnails into tiny columns.

Version 2 lightbox controls must remain usable with touch and keyboard.

---

# 11. Reservation Responsive Rules

Mobile:

- Single column.
- Date, time, guests stack.
- Full name, email, phone stack.
- Special requests full width.
- CTA easy to tap.
- No horizontal overflow.
- Correct mobile keyboard types.

Desktop may place related short fields side by side.

---

# 12. Contact Responsive Rules

Mobile order:

1. Page intro.
2. Address.
3. Phone/email.
4. Opening hours.
5. Directions/map.
6. Contact form.
7. Footer.

Practical information must appear before the form.

---

# 13. Accessibility Target

Aim for:

**WCAG 2.2 AA principles wherever reasonably applicable.**

Accessibility should be addressed during design and implementation, not treated as a final repair stage.

---

# 14. Semantic HTML Requirements

Use semantic elements according to actual meaning:

- `<header>`.
- `<nav>`.
- `<main>`.
- `<section>`.
- `<article>` where appropriate.
- `<figure>` and `<figcaption>` where useful.
- `<form>`.
- `<address>`.
- `<footer>`.

Do not replace all semantics with generic `<div>` elements.

---

# 15. Heading Hierarchy

Each page has one primary `<h1>`.

Working page H1s:

- Home: **There is always room at The Table.**
- Menu: **Food worth gathering around.**
- About: **A restaurant built around the simple idea of coming together.**
- Gallery: **A glimpse of The Table.**
- Reservations: **Your table is waiting.**
- Contact: **Come find your seat.**

Use heading levels according to structure, not visual size.

---

# 16. Skip Link

Every page should include:

**Skip to main content**

It should become visible on keyboard focus.

Target:

```html
<main id="main-content">
```

---

# 17. Keyboard Navigation

The full site must remain usable with keyboard input.

Keyboard users must be able to:

- Navigate the header.
- Follow page links.
- Activate CTAs.
- Use form fields.
- Submit forms when enabled.
- Operate future mobile navigation.
- Operate future gallery lightbox.
- See where focus currently is.

---

# 18. Focus Visibility

Do not remove browser focus indication without replacement.

Preferred direction:

- 2px visible outline.
- Small offset.
- Deep Olive on light.
- Warm Ivory or Brass-compatible alternative on dark.

Every interactive element requires a clear focus state.

---

# 19. Link vs Button Rule

Use a **link** when the user is navigating somewhere.

Examples:

- Menu.
- About.
- View Full Menu.
- Reserve when it navigates to the Reservations page.
- Directions.

Use a **button** when the user performs an action.

Examples:

- Open mobile navigation.
- Close mobile navigation.
- Submit form.
- Open/close lightbox.
- Next/previous image.

Do not choose element type based on appearance.

---

# 20. Form Labels

Every field requires a persistent label.

Do not use placeholders as replacements for labels.

Correct pattern:

```text
EMAIL ADDRESS

[ name@example.com ]
```

The label remains visible after typing.

---

# 21. Form Field Association

Implementation should use matching `for` and `id` values.

Example concept:

```html
<label for="reservation-email">Email address</label>
<input id="reservation-email" name="email" type="email">
```

---

# 22. Appropriate Input Types

Use:

- `type="email"`.
- `type="tel"`.
- `type="date"` where appropriate.
- Native select/input controls when they solve the problem.

Do not build custom controls merely for visual novelty.

---

# 23. Autocomplete

Use useful browser autocomplete values:

- `name`.
- `email`.
- `tel`.

This improves mobile speed and accessibility.

---

# 24. Validation

Version 2 validation must:

- Explain what is wrong.
- Explain how to fix it.
- Associate messages with the relevant fields.
- Not rely only on colour.
- Preserve user input.

Good:

**Please enter a valid email address.**

Bad:

**Invalid input.**

---

# 25. Reservation Honesty

Do not display:

**Your reservation is confirmed**

until the backend actually confirms and persists a reservation.

Before real backend functionality, use truthful interface feedback.

The frontend must never claim a business transaction occurred when it did not.

---

# 26. Dietary / Allergen Communication

Special requests can capture dietary and accessibility information.

Do not imply a guaranteed allergen-free environment without real restaurant policy and process.

A later policy may state that the restaurant will try to accommodate dietary requirements but shared kitchen environments may exist.

---

# 27. Image Alternative Text

Informative images need meaningful alt text.

Good:

- `Seared springbok loin with roasted beetroot`.
- `Dining room at The Table during evening service`.
- `Chef plating a dish in the open kitchen`.

Bad:

- `image`.
- `food image`.
- `restaurant picture`.

Purely decorative imagery may use empty alt text.

---

# 28. Image Performance

Restaurant websites can become image-heavy.

Requirements:

- Compress assets.
- Use modern formats where appropriate.
- Do not deploy full camera-resolution originals unnecessarily.
- Use responsive image sources.
- Establish image dimensions to reduce layout shift.
- Lazy-load below-the-fold images.
- Do not lazy-load the main hero image.

---

# 29. Gallery Performance

Gallery is likely the most image-heavy page.

Use:

- Responsive sizes.
- Lazy loading.
- Efficient formats.
- Controlled number of images.
- Meaningful dimensions/aspect ratios.

Do not load 12–18 full-resolution source photographs immediately.

---

# 30. Text Contrast

- Body text should meet WCAG AA contrast.
- Secondary text must remain readable.
- Do not use Clay or Brass for small text without verifying contrast.
- Text over photography must be tested carefully.

---

# 31. Hero Contrast

Do not place light text over uncontrolled photography and assume it is readable.

Use:

- Directional gradient overlay.
- Appropriate image art direction.
- Controlled text placement.
- Real contrast verification.

Avoid embedding essential text directly into the image.

---

# 32. Touch Targets

Mobile interactive controls should be comfortably tappable.

This applies to:

- Navigation.
- Reserve CTA.
- Form controls.
- Gallery controls.
- Future lightbox controls.

Avoid tiny icon-only controls.

---

# 33. Motion Principles

Motion should be:

**Subtle · Purposeful · Fast · Smooth**

Use motion for:

- Feedback.
- Orientation.
- Navigation.
- Image transitions.
- Controlled content reveals.

Avoid:

- Scroll hijacking.
- Cursor-following gimmicks.
- Long page entrance sequences.
- Bouncing.
- Spinning.
- Excessive parallax.
- Animating every section.

---

# 34. Motion Durations

Reference tokens:

- Fast — 150ms.
- Standard — 250ms.
- Smooth — 400ms.
- Editorial — 600ms.

Use `ease-out` or a similarly restrained easing curve.

---

# 35. Reduced Motion

Respect `prefers-reduced-motion`.

When enabled:

- Remove decorative large translations.
- Disable unnecessary image scaling.
- Do not hide content behind reveal animations.
- Keep functionality identical.

---

# 36. Version 1 Interaction Scope

With HTML/CSS only:

- Navigation.
- Links.
- Anchor links.
- Form controls.
- Hover states.
- Focus states.
- CSS transitions.
- Responsive layouts.

No interaction should pretend JavaScript exists.

---

# 37. Version 2 Interaction Scope

JavaScript should add meaningful capability:

- Full-screen mobile navigation.
- Sticky header transformation.
- Gallery lightbox.
- Form validation.
- Form feedback.
- Possible active menu-category state.
- Subtle reveal animation only if it improves the experience.

Do not add JavaScript merely because Version 2 requires JavaScript.

---

# 38. Future Gallery Lightbox Accessibility

When implemented:

- Open with button/action.
- Close with keyboard and visible control.
- Escape closes.
- Focus is trapped while modal is open.
- Focus returns to the triggering element after close.
- Previous/next controls have accessible labels.
- Background does not scroll.
- Touch interaction does not remove keyboard interaction.

---

# 39. Header Behaviour — Version 2

Home may transition:

```text
Transparent over hero
↓
Warm Ivory on scroll
```

Requirements:

- No layout jump.
- Sufficient contrast in both states.
- Subtle border rather than heavy shadow.
- Sticky behaviour should not cover anchored content unexpectedly.

---

# 40. Core Web Performance Direction

Later production versions should aim for strong Core Web Vitals.

Current frontend habits should support that goal through:

- Efficient images.
- Avoiding unnecessary JS.
- Avoiding unnecessary dependencies.
- Efficient font loading.
- Explicit media dimensions.
- Minimal layout shift.

---

# 41. SEO Foundation

Even the static frontend should use:

- Correct document titles.
- Useful meta descriptions.
- Semantic headings.
- Descriptive links.
- Meaningful copy.
- Alt text.
- Clean page structure.

Later Next.js versions may add:

- Structured restaurant data.
- Open Graph metadata.
- Social previews.
- Sitemap.
- Robots configuration.
- Local SEO improvements.

---

# 42. Accessibility Verification Checklist

Before declaring Version 1 complete, verify:

- Skip link works.
- Every page has one logical H1.
- Heading order is sensible.
- Navigation works by keyboard.
- Current-page navigation state is communicated.
- Focus is visible.
- Forms have labels.
- Required states are clear.
- Inputs use appropriate types.
- Images have useful alt handling.
- Text contrast is sufficient.
- Page zoom does not destroy layout.
- Mobile controls are usable.
- No content relies exclusively on hover.
- No colour is the sole carrier of meaning.

---

# 43. Performance Verification Checklist

Before declaring Version 1 complete, verify:

- Hero is appropriately sized.
- Hero is not lazy-loaded.
- Below-the-fold images are lazy-loaded where useful.
- Gallery images are optimised.
- No huge uncompressed source files are deployed.
- Image dimensions/aspect ratios are established.
- Only required fonts/weights are loaded.
- No unnecessary libraries exist.
- No avoidable render-blocking assets were introduced.
