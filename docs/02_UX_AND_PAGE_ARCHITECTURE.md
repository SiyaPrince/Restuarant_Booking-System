# The Table — UX and Page Architecture

## Document Purpose

This document defines the page responsibilities, content hierarchy, wireframe-level structure, user flow logic, and page-specific frontend decisions for The Table.

It is the downstream source of truth for page composition.

---

# 1. Core UX Rule

The site follows:

> **One page, one primary responsibility.**

The homepage should not attempt to display the full menu, full restaurant story, full gallery, complete reservation form, and full contact experience.

Page depth should be distributed intentionally across the site.

---

# 2. Final Page Responsibilities

| Page | Primary Job |
|---|---|
| Home | Introduce, entice, and direct |
| Menu | Help customers evaluate food and price |
| About | Explain who The Table is and what shapes its food |
| Gallery | Show what it feels like to be at The Table |
| Reservations | Capture booking intent with minimal friction |
| Contact | Make it effortless to find, visit, or contact the restaurant |

---

# 3. Global Header

Desktop structure:

```text
THE TABLE        Menu    About    Gallery    Contact      [Reserve]
```

Decisions:

- The logo links to Home.
- No separate Home nav link on desktop.
- No separate Reservations nav item if Reserve CTA is present.
- Current internal page should have a subtle active state.
- Internal pages use a Warm Ivory header with Charcoal text.
- Home uses an overlay header over the hero.

Version 2 may add:

- Sticky header.
- Transparent-to-solid transition on Home.
- Full-screen mobile menu.

---

# 4. Global Footer

The footer should provide:

## Brand
- THE TABLE.
- Tagline: Come together. Eat well.

## Navigation
- Menu.
- About.
- Gallery.
- Contact.
- Reserve.

## Visit
- Rosebank.
- Johannesburg.
- South Africa.

## Contact
- Phone.
- Email.

## Hours
- Condensed restaurant hours.

## Social
- Instagram.
- Facebook or other relevant channels if later needed.

## Legal
- Copyright.
- Privacy placeholder if required.
- Optional credits.

The footer remains structurally consistent across all pages.

---

# 5. Home Page

## 5.1 Purpose

The Home page should:

- Establish the restaurant identity.
- Create interest.
- Give a small taste of the food.
- Show a glimpse of the atmosphere.
- Make reservation and menu actions easy.
- Provide essential visit information.

It should **not** explain everything.

## 5.2 Locked Structure

```text
Header
Hero
Short Restaurant Introduction
Small Featured Menu Teaser
Atmosphere / Gallery Teaser
Reservation CTA
Essential Visit Information
Footer
```

## 5.3 Homepage Narrative

```text
Who are you?
↓
What do you serve?
↓
What does it feel like?
↓
Can I book?
↓
Where are you / when are you open?
```

## 5.4 Hero

Working content:

**Eyebrow:**  
CONTEMPORARY SOUTH AFRICAN DINING

**H1:**  
There is always room at The Table.

**Supporting copy:**  
Seasonal ingredients, thoughtful cooking and warm hospitality, made for moments worth sharing.

**Primary CTA:**  
Reserve a Table

**Secondary CTA:**  
Explore the Menu →

Hero direction:

- Approximately 90–100vh on desktop.
- Cinematic restaurant/interior image.
- Text aligned predominantly lower-left / centre-left.
- Directional dark overlay rather than uniform black wash.
- Restaurant/interior imagery preferred over a close-up food image because the hero sells the place, not a single dish.
- Rosebank / Johannesburg detail may appear subtly in the composition.

## 5.5 Mobile Hero

Mobile should change composition rather than shrink desktop.

- Single-column content.
- Left-aligned.
- Deliberately recropped background.
- Primary CTA full or near-full width if appropriate.
- Secondary CTA below.
- Generous tap targets.
- Shortened supporting copy if needed.

## 5.6 Introduction

Warm Ivory.

Working content:

**Eyebrow:** OUR TABLE

**Heading:**  
Seasonal cooking. Familiar flavours. Made to be shared.

Working body:

The Table brings contemporary South African cooking together with warm hospitality in the heart of Johannesburg. Our menus follow the seasons, bringing familiar ingredients to the table with a fresh perspective.

CTA:

**Discover our story →**

This section should be typography-led rather than image-led to create rhythm after the cinematic hero.

## 5.7 Featured Menu Teaser

Purpose:

Give a small taste of the food without reproducing Menu.

Use only 2–3 signature dishes.

Working dishes:

### Cape Malay-Spiced Prawns — R165
Charred citrus · coriander · smoked chilli

### Karoo Springbok Loin — R320
Roasted beetroot · fermented plum · rosemary jus

### Rooibos-Poached Pear — R115
Cultured cream · honeycomb · toasted almond

Design direction:

- Editorial, asymmetric composition on desktop.
- Do not use three identical SaaS-like food cards.
- Food image + typography.
- Minimal containers.
- Mobile becomes a vertical editorial feed.

CTA:

**View Full Menu →**

## 5.8 Atmosphere / Gallery Teaser

Purpose:

Sell the experience rather than only food.

Working content:

**Eyebrow:** MORE THAN DINNER

**Heading:**  
Stay a little longer.

Working body:

The room is warm, the plates are generous, and there is no need to rush. The Table was designed for long conversations, shared courses and evenings worth remembering.

CTA:

**Explore the Gallery →**

Direction:

- Deep Olive or dark visual treatment.
- One strong interior/atmosphere image.
- Split image/text layout on desktop.
- Stack cleanly on mobile.

## 5.9 Reservation CTA

Compact, not oversized.

Working content:

**Eyebrow:** YOUR TABLE AWAITS

**Heading:**  
Make an evening of it.

**Supporting:**  
Dinner, conversation and something worth raising a glass to.

CTA:

**Reserve a Table**

Dark Charcoal section.

## 5.10 Essential Visit Information

Purpose:

Give the most practical information without becoming Contact.

Include:

- Rosebank, Johannesburg.
- Condensed opening hours.
- Phone.
- Email.
- Directions link placeholder.

No full detailed contact form or long operational section.

## 5.11 Explicitly Excluded from Home

Do not add:

- Full menu.
- Restaurant philosophy section.
- Long story.
- Chef biography.
- Full gallery.
- Full reservation form.
- Testimonials carousel.
- Large map.
- Newsletter popup.
- Social feed grid.
- Promotions banner.
- App download prompt.
- Chatbot.
- Discount code.
- Multiple competing CTAs.

---

# 6. Menu Page

## 6.1 Purpose

Help customers quickly understand:

- What the restaurant serves.
- What sounds appealing.
- What the approximate cost is.

The page should feel like a **digital restaurant menu**, not an ordering app.

## 6.2 Locked Structure

```text
Header
Menu Introduction
Category Navigation
Starters
Mains
Desserts
Drinks
Compact Reservation CTA
Footer
```

## 6.3 Introduction

No full-screen hero.

Warm Ivory.

Working content:

**Eyebrow:** THE MENU

**H1:**  
Food worth gathering around.

**Description:**  
Our menu follows the seasons, bringing together South African ingredients, familiar flavours and a contemporary approach to cooking.

Optional seasonal marker:

**WINTER MENU · 2026**

## 6.4 Category Navigation

```text
STARTERS    MAINS    DESSERTS    DRINKS
```

Use real anchor links:

- `#starters`
- `#mains`
- `#desserts`
- `#drinks`

This must work without JavaScript.

Version 2 may add active-section behaviour if it improves usability.

## 6.5 Menu Presentation

Do not use an image for every dish.

Primary presentation is typography:

```text
DISH NAME                                      PRICE
Short ingredient description
```

Images act as editorial breaks, not item thumbnails.

## 6.6 Category Visual Motif

```text
01 — STARTERS
02 — MAINS
03 — DESSERTS
04 — DRINKS
```

Numbers are a subtle editorial device.

## 6.7 Working Starter Menu

- Cape Malay-Spiced Prawns — R165  
  charred citrus · coriander · smoked chilli

- Charred Corn — R110  
  smoked butter · lime · spring onion

- Beef Tartare — R175  
  cured egg yolk · mustard seed · sourdough

- Roasted Beetroot — R125  
  goat's cheese · walnut · buchu

- Line Fish Crudo — R160  
  citrus · chilli · cucumber · herbs

- Wild Mushroom Toast — R135  
  cultured cream · thyme · sourdough

## 6.8 Working Main Menu

- Karoo Springbok Loin — R320  
  roasted beetroot · fermented plum · rosemary jus

- Braised Beef Short Rib — R295  
  smoked potato · onion · red wine jus

- Market Line Fish — R285  
  seasonal greens · mussel broth · lemon

- Free-Range Chicken — R245  
  charred leek · sweetcorn · herb jus

- Wild Mushroom Risotto — R210  
  aged hard cheese · herbs · truffle

- Fire-Roasted Cauliflower — R195  
  chickpea · tahini · preserved lemon

## 6.9 Working Dessert Menu

- Rooibos-Poached Pear — R115  
  cultured cream · honeycomb · toasted almond

- Warm Malva — R120  
  brown butter · vanilla · apricot

- Dark Chocolate — R135  
  coffee · cocoa nib · salted caramel

- Cape Citrus — R110  
  lemon curd · meringue · yoghurt

## 6.10 Drinks

Do not create an unnecessarily enormous wine list in V1.

Recommended groups:

- Signature Cocktails — 4–6.
- Wine by the Glass — 4–6.
- Non-Alcoholic — 3–5.

Potential future action:

**View Full Wine List →**

## 6.11 Dietary Information

Use restrained abbreviations if needed:

- V — Vegetarian.
- VG — Vegan.
- GF — Gluten-free.

Do not create noisy coloured badges.

Do not imply strong allergen guarantees unless the underlying restaurant policy supports them.

## 6.12 Menu Imagery

Use approximately 2–3 editorial images across the page:

- Strong food photograph.
- Kitchen or plating image.
- Optional drinks/detail image.

Do not bind one image to every menu item.

## 6.13 Mobile Menu

- Primarily one column.
- Category navigation may scroll horizontally.
- Dish name, description, and price remain easy to scan.
- No tiny two-column cards.
- Price may sit right-aligned with dish name where width allows.
- Anchor navigation works without JS.

## 6.14 Bottom CTA

Working direction:

**FOUND SOMETHING YOU LIKE?**

**Save room for the rest.**

**Reserve a Table**

Compact dark section.

---

# 7. About Page

## 7.1 Purpose

Answer:

- Why does The Table exist?
- What shapes the food?
- Who is behind it?

Avoid turning the page into a corporate history document.

## 7.2 Locked Structure

```text
Header
About Introduction
Restaurant Story
Editorial Image Pair
Food Philosophy
Chef / People
Closing Statement
Footer
```

## 7.3 Introduction

Warm Ivory.

Working content:

**Eyebrow:** ABOUT THE TABLE

**H1:**  
A restaurant built around the simple idea of coming together.

Use a strong atmosphere/table image in a split layout.

Avoid another food plate as the lead image.

## 7.4 Restaurant Story

Working heading:

**The best meals rarely end when the plates are cleared.**

Working direction:

The Table began with a simple belief: restaurants are about more than what arrives from the kitchen. They are places where birthdays stretch into evenings, friends become regulars, and conversations last longer than planned.

The copy should remain concise.

## 7.5 Story Image Pair

Use:

- One larger dining / people image.
- One smaller detail image.

Asymmetric editorial placement.

## 7.6 Food Philosophy

This is where the philosophy deliberately removed from Home belongs.

Working content:

**Eyebrow:** 02 — OUR KITCHEN

**Heading:**  
Rooted here. Inspired everywhere.

Working body:

South African ingredients are the starting point of our kitchen, not its boundary. Our menu follows the seasons, combining familiar flavours with contemporary technique and influences gathered from further afield.

Secondary line:

**We cook with restraint. Good ingredients should still taste like themselves.**

## 7.7 Culinary Principles

### 01 — SEASONAL
Menus change with what is available and at its best.

### 02 — ROOTED
South African produce and flavours shape the kitchen.

### 03 — CONSIDERED
Technique serves the ingredient, never the other way around.

Design:

- Typography.
- Numbers.
- Dividers.
- Whitespace.
- No decorative icons.

Deep Olive section with Warm Ivory text is preferred.

## 7.8 Chef Section

Use one fictional executive chef rather than inventing a full staff directory.

Content:

- Chef name.
- Executive Chef role.
- Short biography.
- Cooking philosophy.

Photography:

- Environmental portrait.
- Working in kitchen.
- Natural movement.
- Avoid arms-crossed corporate headshot.

Working heading:

**Cooking with a sense of place.**

Do not fabricate awards and prestige simply to fill space.

## 7.9 Closing

Working statement:

**Everyone has a place at The Table.**

Supporting line:

**Come hungry. Stay as long as you'd like.**

Link:

**Find us in Rosebank →**

Use an atmosphere/table image if needed.

No additional large reservation section required.

---

# 8. Gallery Page

## 8.1 Purpose

Show what it feels like to be at The Table.

The Gallery should be visually driven and text-light.

## 8.2 Locked Structure

```text
Header
Gallery Introduction
Editorial Image Grid
Compact Reservation CTA
Footer
```

Optional filters are deferred unless image quantity later justifies them.

## 8.3 Introduction

**Eyebrow:** GALLERY

**H1:**  
A glimpse of The Table.

Supporting line:

From the kitchen to the dining room, a look at the food, people and atmosphere that shape the experience.

## 8.4 Gallery Content Mix

Include:

- Food.
- Interior.
- Exterior.
- Kitchen.
- Chef.
- Staff.
- Table details.
- Guests / atmosphere.
- Events later if needed.

Avoid a gallery that is almost entirely plated food.

## 8.5 Image Quantity

Target for V1:

**12–18 images**

Enough to feel substantial without creating an endless page.

## 8.6 Image Ratios

Use a controlled system:

- Portrait — 4:5.
- Landscape — 3:2.
- Wide — 16:9.
- Square — 1:1.

## 8.7 Layout

Use an editorial CSS Grid composition with varied image spans.

Avoid a rigid grid where all thumbnails are identical.

## 8.8 Image Order

Early images should establish:

1. Interior.
2. Signature dish.
3. Guests/table atmosphere.
4. Chef/kitchen.
5. Detail.
6. Another dish.

Mix categories rather than grouping all food together.

## 8.9 Captions

Most images do not require visible captions.

Use captions only when they provide real context.

Examples:

- Seasonal menu · Winter.
- Evening service.

## 8.10 V1 Interaction

CSS only:

- Very subtle hover scale where appropriate.
- No functionality that depends on hover.

## 8.11 Version 2 Lightbox

Later add:

- Full-screen image.
- Previous / next controls.
- Image count.
- Escape to close.
- Keyboard navigation.
- Focus trapping.
- Touch / swipe consideration.
- Background scroll prevention.
- Accessible control labels.

## 8.12 Mobile

Mostly single-column.

Occasional image pairing is allowed if it remains legible and intentional.

Do not force desktop masonry into a narrow viewport.

## 8.13 Bottom CTA

Working direction:

**Like what you see?**

**Come experience it for yourself.**

**Reserve a Table**

Compact only.

---

# 9. Reservations Page

## 9.1 Purpose

Move the user from:

**I want to eat here**

to:

**I have supplied the information required for a reservation request**

with minimal friction.

This should be one of the simplest pages.

## 9.2 Locked Structure

```text
Header
Reservation Introduction
Reservation Form
Useful Booking Information
Footer
```

Do not add:

- Food gallery.
- Restaurant story.
- Featured dishes.
- Another large reservation CTA.
- Unrelated marketing sections.

## 9.3 Introduction

Working content:

**Eyebrow:** RESERVATIONS

**H1:**  
Your table is waiting.

**Supporting:**  
Choose your date, time and party size, and we'll take care of the rest.

## 9.4 Form Order

User mental model comes first.

### Your Visit
1. Date.
2. Time.
3. Guests.

### Your Details
4. Full name.
5. Email.
6. Phone.
7. Special requests.

## 9.5 Desktop Layout

Preferred split:

- Left: approximately 40%.
- Right: approximately 60%.

Left:

- Heading.
- Short introduction.
- Rosebank / Johannesburg context.
- Optional compact booking note.

Right:

- Form.

No image behind the form.

Warm Ivory background.

## 9.6 Form Fields

- Date.
- Time.
- Guests.
- Full name.
- Email.
- Phone.
- Special requests.

Special requests should support:

- Dietary requirements.
- Accessibility needs.
- Other relevant notes.

## 9.7 Input Decisions

- Native semantic date input in V1.
- Time as select or appropriate native control.
- Guests as controlled selection rather than arbitrary free text.
- Name remains one **Full name** field.
- Email uses `type="email"`.
- Phone uses `type="tel"`.
- Do not prevent international telephone numbers unnecessarily.

## 9.8 Guest Count

Working options:

1–8 guests.

For larger groups:

**9+ guests — Contact us**

This can become a real business rule later.

## 9.9 CTA Language

For V1 and V2 without backend reservation confirmation:

**Request a Table**

Do not use misleading language such as **Booking Confirmed** when nothing is persisted.

Once real availability and reservation persistence exist, the language can evolve.

## 9.10 V1 Behaviour

The form exists as a properly structured interface.

Do not fake backend submission.

## 9.11 Version 2 Validation

Add:

- Required-field validation.
- Email validation.
- Clear field-level errors.
- Useful form feedback.
- No false booking confirmation.

Error messages should be specific:

- “Please enter a valid email address.”
- “Please choose a reservation date.”

Avoid:

- “Invalid input.”
- “Required.”

## 9.12 Booking Information

Compact **GOOD TO KNOW** area may include:

- Groups larger than 8 should contact the restaurant.
- Dietary requirements should be supplied with the request.
- Tables may be held for approximately 15 minutes after reservation time.

Exact operational policy can be refined later.

## 9.13 Mobile

Single-column.

- Date.
- Time.
- Guests.
- Name.
- Email.
- Phone.
- Special requests.
- CTA.
- Booking notes.

Desktop field pairs should stack.

No multi-step form in the initial frontend because seven fields do not justify it.

A multi-step flow may become appropriate later when real-time availability creates a genuine stage sequence.

---

# 10. Contact Page

## 10.1 Purpose

Make it effortless to:

- Find The Table.
- Know when it is open.
- Call or email.
- Get directions.
- Send a general enquiry.

## 10.2 Locked Structure

```text
Header
Contact Introduction
Location + Contact Details
Opening Hours
Map / Directions
Contact Form
Footer
```

## 10.3 Introduction

Working content:

**Eyebrow:** CONTACT

**H1:**  
Come find your seat.

Practical information should begin immediately.

No large marketing hero.

## 10.4 Visit Information

Working location:

**Rosebank, Johannesburg, South Africa**

Final street address will be invented later and checked to avoid accidental real-business confusion.

Include:

- Address.
- Directions link.
- Phone.
- Email.

Phone and email must become real `tel:` and `mailto:` links in implementation.

## 10.5 Opening Hours

Working schedule:

| Day | Hours |
|---|---|
| Monday | Closed |
| Tuesday | 12:00–22:00 |
| Wednesday | 12:00–22:00 |
| Thursday | 12:00–22:00 |
| Friday | 12:00–23:00 |
| Saturday | 12:00–23:00 |
| Sunday | 12:00–17:00 |

Use simple typography and dividers rather than seven cards.

## 10.6 Map

Real map integration is deferred.

V1 should not fake an interactive map.

Provide:

**Get Directions →**

Later versions may add mapping integration.

The address must always remain available as text even after a map is added.

## 10.7 Contact Form

Purpose:

General enquiries rather than reservations.

Fields:

- Name.
- Email.
- Subject.
- Message.

Working heading:

**Send us a note.**

Working supporting copy:

**Questions, private dining enquiries or something else? We'd be happy to hear from you.**

Phone is not required unless a real need is identified later.

## 10.8 Future Subject Categories

Potential future structured options:

- General enquiry.
- Private dining.
- Events.
- Media.
- Feedback.
- Other.

Do not introduce these until useful.

## 10.9 Mobile Order

Practical information comes before the contact form:

```text
Contact intro
Visit
Phone / Email
Opening Hours
Directions / Map
Contact Form
Footer
```

A mobile visitor trying to find the restaurant should not have to scroll through a form first.

## 10.10 Explicitly Excluded

Do not add:

- Restaurant history.
- Chef details.
- Menu preview.
- Large food gallery.
- Testimonials.
- Reservation duplication.
- Newsletter.
- Social feed.
- FAQ block without a real need.

---

# 11. Mobile Navigation Direction

Ultimate Version 2 direction:

```text
THE TABLE                         CLOSE

01  Home
02  Menu
03  About
04  Gallery
05  Contact

Reserve a Table

Rosebank · Johannesburg
Instagram
```

Visual direction:

- Full-screen overlay.
- Charcoal or Deep Olive background.
- Warm Ivory text.
- Large typography.
- Accessible focus management.

Version 1 will not fake this interaction without JavaScript. See technical architecture document.

---

# 12. Page Colour Rhythm

## Home

- Hero: photography / dark overlay.
- Introduction: Warm Ivory.
- Featured menu: Warm Ivory / subtle neutral.
- Atmosphere: Deep Olive.
- Reservation CTA: Charcoal.
- Visit: Warm Ivory.
- Footer: Charcoal.

## Menu

- Primarily Warm Ivory.
- Editorial image breaks.
- Optional Soft Stone differentiation.
- Compact dark reservation CTA.
- Footer Charcoal.

## About

- Intro: Warm Ivory.
- Story: Warm Ivory.
- Editorial imagery.
- Kitchen philosophy: Deep Olive.
- Chef: Warm Ivory.
- Closing: photography / Warm Ivory.
- Footer: Charcoal.

## Gallery

- Warm Ivory introduction.
- Image-led gallery.
- Compact CTA.
- Charcoal footer.

## Reservations

- Warm Ivory intro and form.
- Soft Stone / subtle booking-information separation.
- Charcoal footer.

## Contact

- Warm Ivory practical content.
- Neutral map treatment later.
- Warm Ivory / Soft Stone form area.
- Charcoal footer.

---

# 13. Page State Planning

Although some states are not implemented until JavaScript/backend stages, the frontend should anticipate them.

## Forms
- Default.
- Focus.
- Filled.
- Valid.
- Invalid.
- Disabled.
- Submitting.
- Success.
- Failure.

## Gallery
- Image loading.
- Loaded.
- Lightbox open.
- Lightbox closed.

## Menu
- Content available.
- Empty category later if data-driven.

## Reservations later
- Available.
- No availability.
- Request submitted.
- Booking confirmed only when actual backend confirmation exists.
- Booking failed.

These states should be represented truthfully.
