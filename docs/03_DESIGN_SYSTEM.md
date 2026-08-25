# The Table — Frontend Design System v1.0

## Document Purpose

This document defines the visual design constants for The Table.

These values and principles should be treated as the default frontend design system. They should not be casually changed while coding.

---

# 1. Design Philosophy

The Table uses five core design principles.

## Editorial over app-like

The interface should resemble premium hospitality/editorial design more than a dashboard, delivery platform, or SaaS product.

## Typography over decoration

Hierarchy should primarily come from:

- Type.
- Spacing.
- Photography.
- Composition.
- Alignment.

## Warm rather than clinical

Pure white, pure black, and cold greys should rarely dominate.

## Restrained rather than empty

Simplification should improve the experience, not become minimalism for its own sake.

## Consistent without becoming repetitive

Pages share one visual language but can use different compositions according to their job.

---

# 2. Locked Visual DNA

**Warm editorial photography + oversized serif typography + restrained sans-serif interface type + Warm Ivory backgrounds + Deep Olive / Charcoal surfaces + earthy accents + generous whitespace + asymmetric layouts + short hospitality-driven copy.**

---

# 3. Colour System

| Token | Name | Hex | Role |
|---|---|---|---|
| `--color-canvas` | Warm Ivory | `#F4F0E8` | Primary background |
| `--color-surface` | Soft Stone | `#E6DED2` | Secondary surface |
| `--color-ink` | Charcoal | `#1C1C19` | Main text / dark surfaces |
| `--color-ink-soft` | Warm Grey | `#656159` | Secondary text |
| `--color-brand` | Deep Olive | `#394438` | Primary brand colour |
| `--color-brand-hover` | Dark Olive | `#2F382E` | Brand hover |
| `--color-clay` | Muted Clay | `#A76245` | Warm accent |
| `--color-brass` | Muted Brass | `#B79662` | Fine decorative accent |
| `--color-border` | Stone Grey | `#CFC6B9` | Borders / dividers |
| `--color-white-soft` | Soft Cream | `#FCFAF6` | Input/light contrast surfaces |
| `--color-error` | Deep Rust | `#9A3F32` | Errors |
| `--color-success` | Forest Green | `#456249` | Success feedback |

Avoid using pure `#FFFFFF` or `#000000` as the primary visual system unless there is a specific reason.

---

# 4. Colour Balance

Approximate visual ratio:

- **60–70%** Warm Ivory / neutral surfaces.
- **20–25%** Charcoal / imagery / dark areas.
- **10–15%** Deep Olive.
- **Less than 5%** Clay and Brass.

Clay and Brass are accents, not competing brand colours.

---

# 5. Dark Surface Roles

## Charcoal

Use for:

- Reservation CTA.
- Footer.
- Future mobile navigation overlay.
- Strong editorial punctuation.

## Deep Olive

Use for:

- About philosophy.
- Atmospheric content.
- Selected brand surfaces.

Dark sections should be intentional, not alternated purely for visual variety.

---

# 6. Typography Pairing

## Display Typeface

**Cormorant Garamond**

Use for:

- Hero headlines.
- H1.
- H2.
- Large editorial statements.
- Selected quotations.
- Selected menu/category typography.

Recommended weights:

- 400 Regular.
- 500 Medium.
- 600 SemiBold.

Avoid extremely thin display weights.

## Interface / Body Typeface

**Inter**

Use for:

- Navigation.
- Body copy.
- Forms.
- Menu descriptions.
- Prices.
- Buttons.
- Labels.
- Footer.
- Small interface text.

Recommended weights:

- 400 Regular.
- 500 Medium.
- 600 SemiBold.

---

# 7. Font Fallbacks

Display:

```css
"Cormorant Garamond", Georgia, serif
```

Interface:

```css
"Inter", Arial, Helvetica, sans-serif
```

The site must remain readable if web fonts fail.

---

# 8. Typography Scale

| Role | Desktop | Mobile | Typeface |
|---|---:|---:|---|
| Display XL | 88–96px | 52–60px | Cormorant Garamond |
| Display | 68–76px | 44–52px | Cormorant Garamond |
| H1 | 56–64px | 40–46px | Cormorant Garamond |
| H2 | 44–52px | 34–40px | Cormorant Garamond |
| H3 | 30–36px | 28–32px | Cormorant Garamond |
| H4 | 22–26px | 21–24px | Cormorant / Inter |
| Body Large | 19–21px | 18–19px | Inter |
| Body | 16–18px | 16px | Inter |
| Body Small | 14px | 14px | Inter |
| Label | 12–13px | 12px | Inter |
| Caption | 12–13px | 12px | Inter |

Use fluid scaling with `clamp()` where appropriate rather than many arbitrary media-query font sizes.

---

# 9. Line Height

Large serif:

- approximately `0.95–1.08`.

Body:

- approximately `1.55–1.7`.

Interface:

- approximately `1.3–1.5`.

---

# 10. Letter Spacing

Large serif:

- normal to slightly negative.

Uppercase labels:

- approximately `0.08em–0.14em`.

Buttons:

- approximately `0.04em–0.08em`.

Body copy:

- normal tracking.

---

# 11. Eyebrow Labels

Pattern:

```text
OUR KITCHEN
```

Style:

- Inter.
- 12–13px.
- Medium or SemiBold.
- Uppercase.
- Approximately 0.10em letter spacing.

Colour:

- Charcoal on light.
- Soft Cream on dark.
- Clay/Brass only when contrast and hierarchy justify it.

---

# 12. Text Alignment

Default:

**Left aligned**

Centre alignment should be reserved for:

- Reservation CTA.
- Occasional editorial statements.
- Specific visual moments.

Do not centre every section heading and paragraph.

---

# 13. Spacing System

Use an 8px-based scale with small fine-detail values.

| Token | Value |
|---|---:|
| `2xs` | 4px |
| `xs` | 8px |
| `sm` | 12px |
| `md` | 16px |
| `lg` | 24px |
| `xl` | 32px |
| `2xl` | 48px |
| `3xl` | 64px |
| `4xl` | 96px |
| `5xl` | 128px |
| `6xl` | 160px |

Avoid arbitrary spacing such as `37px`, `53px`, and `27px` unless a true visual reason exists.

---

# 14. Major Section Spacing

Desktop:

- approximately 96–160px.

Mobile:

- approximately 64–96px.

Content-dense areas such as menu categories may use tighter internal rhythm.

---

# 15. Containers

## Wide

`max-width: 1440px`

Use for:

- Large imagery.
- Gallery.
- Wider editorial layouts.

## Standard

`max-width: 1240px`

Use for:

- Most page content.

## Reading

`max-width: 680px`

Use for:

- Story paragraphs.
- Introductions.
- Long text.
- Form supporting copy.

---

# 16. Horizontal Page Padding

Working direction:

| Viewport | Horizontal Padding |
|---|---:|
| Small mobile | 20px |
| Mobile | 24px |
| Tablet | 40px |
| Laptop | 64px |
| Desktop | 80px |
| Large desktop | 96px |

The implementation may use fluid values instead of six hardcoded media-query states.

---

# 17. Grid System

Conceptual design grids:

- Desktop: 12 columns.
- Tablet: 8 columns.
- Mobile: 4 columns.

Typical desktop gap:

- 24–32px.

This is a composition system; every section does not need literal 12-track CSS.

---

# 18. Breakpoint Starting Points

| Range | Concept |
|---|---|
| `<480px` | Small mobile |
| `480–767px` | Mobile |
| `768–1023px` | Tablet |
| `1024–1279px` | Laptop |
| `1280px+` | Desktop |
| `1600px+` | Large-display consideration |

Breakpoints should ultimately be chosen when content begins to fail rather than according to named devices.

---

# 19. Border System

Standard light border:

```css
1px solid #CFC6B9
```

Dark surface border:

```css
1px solid rgba(244, 240, 232, 0.18)
```

Use for:

- Forms.
- Dividers.
- Menu rules.
- Footer separation.

Do not outline every content block.

---

# 20. Radius System

| Token | Value |
|---|---:|
| Small | 2px |
| Standard | 4px |
| Soft | 8px |
| Large | 12px |

Defaults:

- Images: mostly 0–4px.
- Buttons: approximately 4px.
- Form fields: approximately 4px.
- Cards: 4–8px when cards are genuinely needed.

Avoid 24px and pill-radius styling as a global visual language.

---

# 21. Shadows

Shadows should be uncommon.

Possible soft elevation:

```css
0 8px 30px rgba(28, 28, 25, 0.08)
```

Use only where functionally useful:

- Future navigation overlay.
- Lightbox.
- Floating UI.

Do not put shadows on normal menu items, photographs, or every form container.

---

# 22. Buttons

## Primary Button

Typical use:

**Reserve a Table**

Direction:

- Background: Deep Olive.
- Text: Soft Cream.
- Border: Deep Olive.
- Radius: 4px.
- Height: approximately 48–52px.
- Horizontal padding: approximately 22–28px.
- Inter Medium.
- Approximately 14px.
- Slight uppercase/tracking.

Hover:

- Dark Olive.

Focus:

- Strong visible outline.

Disabled:

- Lower emphasis but still readable.

## Dark-Surface Primary

On Charcoal or Olive:

- Background: Warm Ivory.
- Text: Charcoal.

## Secondary Button

Transparent background with Charcoal border/text on light surfaces.

Invert on dark surfaces.

Use sparingly.

Most supporting actions should be text links instead.

---

# 23. Text Links

Examples:

- Explore the Menu →
- Discover our story →
- Explore the Gallery →
- Find us in Rosebank →

Style:

- Inter Medium.
- Approximately 14–16px.

Possible hover:

- Underline movement.
- Arrow shift of 2–4px.
- Subtle colour change.

Keep motion restrained.

---

# 24. Header

Desktop height:

- approximately 76–88px.

Mobile height:

- approximately 64–72px.

Header states:

## Home Overlay
- Transparent.
- Light logo/text.

## Standard Internal Page
- Warm Ivory.
- Charcoal text.

## Scrolled State — Version 2
- Warm Ivory.
- Charcoal text.
- Subtle lower border.
- Sticky.

Avoid a heavy drop shadow.

---

# 25. Navigation

Desktop:

```text
THE TABLE       Menu    About    Gallery    Contact      Reserve
```

Hover:

- Subtle underline or weight change.

Active page:

- Underline or other quiet current-page treatment.

Do not use filled navigation tabs.

---

# 26. Mobile Navigation

Version 2 visual direction:

- Full-screen overlay.
- Charcoal or Deep Olive.
- Warm Ivory text.
- Large navigation typography.
- Numbered items optional.
- Prominent Reserve CTA.

No tiny dropdown.

---

# 27. Image System

Use controlled aspect ratios:

| Type | Ratio |
|---|---|
| Portrait | 4:5 |
| Square | 1:1 |
| Landscape | 3:2 |
| Cinematic | 16:9 |

Hero may use adaptive full-cover crop.

---

# 28. Image Treatment

Default:

- Large editorial crop.
- Minimal or zero rounding.
- Strong art direction.
- `object-fit: cover` where appropriate.
- `object-position` adjusted per subject rather than always centred.

Examples of subject-sensitive positioning:

- `center 35%`
- `left center`
- `70% center`

---

# 29. Gallery Hover

Very subtle:

```css
transform: scale(1.02);
```

Approximately 400ms.

Use overflow clipping.

No aggressive zoom or tilt.

---

# 30. Menu Item System

Visual pattern:

```text
DISH NAME                                    R320
Short ingredient description
```

Working typography:

- Dish name: Inter Medium, 16–18px.
- Price: Inter Medium, 15–17px.
- Description: Inter Regular, 14–16px, Warm Grey.

Typical vertical space between dishes:

- approximately 28–40px.

---

# 31. Menu Category Pattern

```text
01
STARTERS
```

Use small number + category heading.

Do not overpower the dish content.

---

# 32. Form System

Reservations and Contact share one form language.

Typical input height:

- 52–56px.

Textarea:

- minimum 140–180px.

Field gap:

- 24–28px.

Labels:

- Inter Medium.
- 12–13px.
- Uppercase or small-label treatment.

---

# 33. Input Appearance

Default:

- Background: `#FCFAF6`.
- Border: `#CFC6B9`.
- Text: `#1C1C19`.
- Radius: 4px.
- Padding: approximately 14–16px vertically, 16px horizontally.

Placeholder:

- Warm Grey.

---

# 34. Focus State

Focus must remain clearly visible.

Direction:

- Deep Olive border.
- 2px visible outline.
- Small outline offset.

Never remove `outline` without replacing it with an equally visible focus indication.

---

# 35. Error State

- Border: Deep Rust.
- Supporting message: approximately 14px, Deep Rust.
- Error text is mandatory.

Do not rely on red colour alone.

Example:

```text
EMAIL ADDRESS

[ invalid-email ]

Please enter a valid email address.
```

---

# 36. Success State

Use Forest Green in a restrained manner.

Do not turn entire forms bright green.

A concise message and later optional icon is sufficient.

---

# 37. Focus Style — Global

Every interactive control needs keyboard focus:

- Nav links.
- Buttons.
- Text links.
- Inputs.
- Lightbox controls.
- Mobile menu controls.

Recommended visual concept:

- 2px Deep Olive outline.
- Approximately 3px offset.
- Warm Ivory / Brass alternative on dark backgrounds.

---

# 38. Hover Philosophy

Use hover for feedback, not entertainment.

Appropriate:

- Colour shifts.
- Underline changes.
- Small arrow translations.
- Tiny image scaling.

Avoid:

- Rotations.
- Perspective tilt.
- 3D hover cards.
- Heavy shadow jumps.
- Elastic/bouncy movement.

---

# 39. Motion Tokens

| Token | Duration | Intended Use |
|---|---:|---|
| Fast | 150ms | Colour / focus |
| Standard | 250ms | Buttons / links |
| Smooth | 400ms | Image hover |
| Editorial | 600ms | Future content reveals |

Preferred feel:

- `ease-out`.
- Restrained custom easing if later justified.

---

# 40. Reduced Motion

Future motion must respect `prefers-reduced-motion`.

When reduced motion is preferred:

- Remove unnecessary large translations.
- Remove decorative image scaling.
- Do not make content availability depend on animation.
- Preserve complete functionality.

---

# 41. Section Header Pattern

Common structure:

```text
EYEBROW

Large serif heading

Optional supporting paragraph
```

Not every section needs all three.

---

# 42. Desktop Split Layouts

Useful ratios include:

- 6 / 6.
- 5 / 7.
- 7 / 5.

Do not default every section to identical 50/50 image/text blocks.

---

# 43. Mobile Layout Rule

Mobile is primarily single-column.

Exceptions:

- Small image pairings.
- Compact hours rows.
- Category navigation.
- Small information groupings.

Never preserve desktop complexity if readability suffers.

---

# 44. Footer Visual System

Background:

- Charcoal.

Primary text:

- Warm Ivory.

Secondary text:

- Soft Stone.

Desktop zones:

- Brand.
- Navigation.
- Hours / Visit.
- Contact / Social.
- Legal row.

Mobile stacks vertically.

---

# 45. Icons

Icons should be rare and functional.

Appropriate uses:

- Mobile menu.
- Close.
- Previous/next.
- Directions/external link if useful.
- Social brands.

Do not add icons beside every conceptual statement.

---

# 46. Accessibility Colour Rule

- Body text should meet WCAG AA contrast.
- Muted text must remain genuinely readable.
- Brass and Clay should not be used for small text on Warm Ivory unless contrast is verified.

---

# 47. Reading Width

Body copy:

- roughly 55–75 characters per line.

Large headings:

- constrained enough to preserve intentional line breaks.

Forms:

- should not stretch to the full page width on desktop.

---

# 48. Locked Design Constants

The following are now design constants:

- Brand colour: Deep Olive.
- Primary background: Warm Ivory.
- Main text: Charcoal.
- Display typeface: Cormorant Garamond.
- Interface typeface: Inter.
- Corner language: square to subtle 4px.
- Spacing: 8px-based.
- Desktop composition: conceptual 12-column grid.
- Primary navigation: logo + Menu / About / Gallery / Contact + Reserve.
- Primary CTA language: Reserve a Table.
- Form style: restrained outlined fields.
- Image style: editorial, large, minimally rounded.
- Motion: restrained and functional.
- Overall aesthetic: warm editorial hospitality.

These should not be casually changed during implementation.
