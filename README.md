# The Table

A responsive, multi-page restaurant website built with **HTML5, CSS3, and vanilla JavaScript**.

**The Table** is a frontend learning and portfolio project for a fictional contemporary South African restaurant in Rosebank, Johannesburg. The project was designed and developed from the ground up to strengthen and demonstrate core frontend development skills without relying on a JavaScript framework, CSS framework, backend, database, or authentication service.

The project is intentionally complete at the **HTML + CSS + JavaScript** stage.

---

## Project Status

**Complete — Frontend-only project**

The current release is the accepted and browser-reviewed version of the website.

The website contains six pages:

- Home
- Menu
- About
- Gallery
- Reservations
- Contact

The completed frontend includes responsive layouts, accessible navigation, interactive forms, a gallery lightbox, menu-section tracking, restrained motion, and progressive-enhancement behaviour.

This project will **not** be migrated to React, TypeScript, Next.js, or a backend. Those technologies are intentionally reserved for separate projects in the broader learning progression.

---

## Purpose of the Project

The Table was created with two related goals.

### 1. Frontend Learning

The primary learning objective was to develop a practical understanding of the technologies that form the foundation of browser-based frontend development:

- HTML
- CSS
- JavaScript

Rather than beginning with a framework, the project deliberately works directly with the browser platform.

This makes it possible to practise and understand:

- semantic document structure
- HTML forms and controls
- CSS layout systems
- responsive design
- design tokens
- reusable styling
- the cascade and inheritance
- DOM selection and manipulation
- browser events
- form validation
- JavaScript modules
- accessibility
- focus management
- progressive enhancement
- browser testing and debugging

### 2. Portfolio Demonstration

The project also demonstrates the ability to take a frontend project through a realistic development process:

**requirements → UX planning → visual design → HTML structure → CSS implementation → responsive design → JavaScript interaction → accessibility → browser QA → repair → acceptance**

The result is intended to demonstrate frontend engineering fundamentals rather than the ability to assemble a website using a framework.

---

## Why No Framework?

The absence of React, Vue, Angular, Tailwind CSS, or another framework is intentional.

The purpose of this project is to demonstrate an understanding of the technologies those tools ultimately build upon.

The website therefore uses:

```text
HTML
+
CSS
+
Vanilla JavaScript
```

instead of:

```text
Framework
+
UI library
+
Backend
```

This creates a clear learning boundary for the project.

Future projects can introduce frameworks and additional technologies incrementally without turning The Table into a project that attempts to demonstrate every part of the web-development stack.

---

## Technology Stack

### HTML5

Used for:

- document structure
- navigation
- content hierarchy
- forms
- page landmarks
- menu sections
- gallery content
- accessibility foundations

### CSS3

Used for:

- visual design
- typography
- design tokens
- layout
- spacing
- responsive behaviour
- component styling
- form styling
- interaction states
- animations and transitions
- mobile layouts

The project uses native CSS rather than a CSS framework.

### Vanilla JavaScript

Used for:

- mobile navigation behaviour
- header scroll state
- form validation
- reservation-form interaction
- contact-form interaction
- gallery lightbox behaviour
- keyboard interaction
- focus management
- menu category tracking
- reveal motion

JavaScript is organised using native **ES modules**.

---

## Design Direction

The visual identity of The Table is:

**Modern · Elegant · Warm · Refined · Premium · Welcoming**

The website avoids excessive decoration and instead relies on typography, spacing, proportion, restrained colour, and editorial composition.

### Typography

The design uses:

- **Cormorant Garamond** for editorial/display typography
- **Inter** for body copy and interface text

### Colour Direction

The visual system is centred around:

- Warm Ivory
- Charcoal
- Deep Olive
- restrained Clay accents
- restrained Brass accents

### Design Principles

The interface prioritises:

- clear visual hierarchy
- generous whitespace
- restrained ornamentation
- readable typography
- intentional alignment
- consistent spacing
- strong food and restaurant imagery
- obvious primary actions
- mobile usability

---

## Website Architecture

The website follows a traditional multi-page architecture:

```text
The Table
│
├── Home
├── Menu
├── About
├── Gallery
├── Reservations
└── Contact
```

Each page has a distinct responsibility rather than forcing all restaurant information into one long homepage.

### Home

Provides a concise introduction to the restaurant and establishes its identity, atmosphere, and primary actions.

### Menu

Presents the restaurant's food and drink offering in clearly separated categories.

Categories include:

- Starters
- Mains
- Desserts
- Drinks

### About

Communicates the restaurant story, philosophy, culinary direction, principles, and people behind the restaurant.

### Gallery

Provides an editorial visual presentation of the restaurant, food, atmosphere, service, and environment.

### Reservations

Provides the frontend reservation interface and demonstrates accessible client-side validation.

### Contact

Provides restaurant contact information, opening information, directions content, and a validated enquiry form.

---

## Semantic HTML

The project intentionally uses semantic HTML where the document structure or content has a meaningful HTML representation.

Examples include:

```html
<header>
<nav>
<main>
<section>
<footer>
<form>
<fieldset>
<legend>
<label>
<figure>
<button>
```

Each page contains a primary heading and uses structured page sections rather than treating the entire document as generic layout containers.

Navigation uses actual links, forms use associated labels and native form controls, and related reservation fields are grouped using form semantics.

Generic `<div>` elements are still used where an element exists purely for layout or grouping and no more appropriate semantic element is required.

The goal is therefore not to avoid `<div>`, but to use meaningful HTML when meaning exists.

---

## Accessibility

Accessibility was treated as part of the frontend implementation rather than as a final add-on.

The project includes considerations such as:

- semantic page landmarks
- heading hierarchy
- keyboard-accessible navigation
- skip navigation
- associated form labels
- accessible validation feedback
- `aria-invalid` state management
- `aria-describedby` relationships
- visible focus states
- keyboard-operable gallery behaviour
- focus trapping where appropriate
- focus restoration after modal/navigation interactions
- Escape-key handling
- reduced-motion support
- progressive enhancement

The gallery lightbox uses the native `<dialog>` element and includes keyboard navigation and focus management.

---

## Responsive Design

The website was designed to work across:

- mobile phones
- tablets
- laptops
- desktop displays

The implementation follows a mobile-conscious responsive approach rather than treating mobile as a scaled-down desktop layout.

Responsive work includes:

- fluid containers
- controlled page gutters
- responsive typography
- adaptive grids
- stacked mobile forms
- mobile navigation
- responsive gallery layouts
- mobile-safe spacing
- controlled media widths
- horizontal-overflow prevention

Real-browser review was used to identify and repair issues that static code checks could not reveal, including mobile gutter and form-layout regressions.

---

## CSS Architecture

CSS is separated by responsibility rather than being placed into a single stylesheet.

The styling system includes:

- global design tokens
- base/reset rules
- typography
- shared components
- layout utilities
- page-specific styles
- responsive rules
- interaction states

Design tokens provide shared values for concepts such as:

```text
Colour
Typography
Spacing
Borders
Radius
Motion
Layout
```

This reduces arbitrary styling decisions and helps maintain visual consistency across the six pages.

---

## JavaScript Architecture

JavaScript is written using native ES modules.

The interaction layer is divided into focused modules rather than placing all behaviour inside one script.

The project includes modules responsible for areas such as:

```text
main.js
│
├── navigation
├── header
├── forms
├── reservations
├── contact
├── gallery
├── menu
└── animations
```

`main.js` acts as the application entry point and initialises the relevant interaction modules.

Each module is designed to exit safely when its required page elements are not present, allowing the same JavaScript entry point to be used across the multi-page website.

---

## JavaScript Features

### Mobile Navigation

The mobile navigation is progressively enhanced with JavaScript.

Interaction behaviour includes:

- open/close state
- Escape-key closing
- keyboard focus management
- focus trapping
- focus restoration
- background scroll control

The underlying navigation retains an HTML fallback.

### Header Behaviour

The shared header responds to page scroll state.

On the Home page, the header transitions from its hero-overlay presentation into the standard navigation treatment as the user scrolls.

Scroll-related DOM updates are throttled with `requestAnimationFrame`.

### Shared Form Validation

Reservations and Contact use a shared validation architecture.

The validation system supports:

- required-field validation
- email validation
- field-level error messages
- `aria-invalid`
- `aria-describedby`
- first-invalid-field focus
- live correction of invalid fields
- form-level status feedback

Page-specific validation remains in the relevant Reservation or Contact module.

### Reservation Validation

The reservation form validates frontend input including:

- date
- time
- number of guests
- full name
- email
- phone number

Past reservation dates are rejected.

Because this is a frontend-only project, a successful validation state **does not pretend that a reservation has been created**.

The interface explicitly communicates that online booking confirmation is not connected.

### Contact Validation

The Contact form validates:

- name
- email
- subject
- message

The message also requires a minimum amount of meaningful input.

As with Reservations, successful client-side validation does not falsely claim that a message was delivered.

### Gallery Lightbox

Gallery items can be opened in a full-screen viewer.

The lightbox supports:

- pointer interaction
- keyboard activation
- Previous / Next navigation
- Arrow Left / Arrow Right navigation
- Escape to close
- item counter
- captions
- focus trapping
- focus restoration
- background scroll locking
- wraparound navigation

### Menu Category Tracking

The Menu page uses `IntersectionObserver` to track which category is currently being viewed.

The active category navigation supports:

- Starters
- Mains
- Desserts
- Drinks

The original anchor links remain functional without JavaScript.

### Reveal Motion

Selected editorial sections use restrained reveal motion as they enter the viewport.

The effect is intentionally limited to major content blocks rather than being applied to every element.

Users who prefer reduced motion receive the content without the animation.

---

## Progressive Enhancement

Progressive enhancement is an important principle in the project.

JavaScript improves the experience, but core content is not unnecessarily dependent on JavaScript.

Examples include:

- Menu category links remain normal anchor links.
- Gallery content remains visible without the lightbox.
- Page content remains available without reveal animation.
- Forms retain meaningful HTML structure.
- Navigation retains an HTML fallback.

Where browser capabilities such as `IntersectionObserver` are unavailable, the implementation is designed to fail open rather than hide essential content.

---

## Forms and Backend Boundaries

The Reservations and Contact pages are intentionally **frontend interfaces only**.

There is no server receiving either form.

The project therefore does not:

- create reservations
- store reservation records
- check real table availability
- send confirmation emails
- send SMS messages
- deliver Contact enquiries
- persist customer information

This boundary is reflected directly in the interface.

A valid form indicates that the entered information is ready, but it does not falsely tell the visitor that an external action has occurred.

---

## Project Structure

The project is organised broadly as follows:

```text
the_table/
│
├── index.html
├── menu.html
├── about.html
├── gallery.html
├── reservations.html
├── contact.html
│
├── css/
│   ├── base.css
│   ├── components.css
│   ├── layout.css
│   ├── tokens.css
│   ├── utilities.css
│   └── pages/
│       ├── home.css
│       ├── menu.css
│       ├── about.css
│       ├── gallery.css
│       ├── reservations.css
│       └── contact.css
│
├── js/
│   ├── main.js
│   ├── navigation.js
│   ├── header.js
│   ├── forms.js
│   ├── reservations.js
│   ├── contact.js
│   ├── gallery.js
│   ├── menu.js
│   └── animations.js
│
├── assets/
│
├── docs/
│   └── project_state/
│
└── README.md
```

The exact asset contents may evolve as final restaurant imagery is introduced, but the frontend architecture is intentionally kept simple and understandable.

---

## Running the Project Locally

No package installation or build process is required.

Clone or download the repository and run a local HTTP server from the project root.

Using Python:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

A local HTTP server is recommended rather than opening individual HTML files directly because it more accurately represents normal browser delivery and ES-module behaviour.

No environment variables, API keys, database credentials, or package installation are required.

---

## Dependencies

The project deliberately has a very small dependency surface.

There are:

- no npm runtime dependencies
- no React dependency
- no Vue dependency
- no Angular dependency
- no CSS framework
- no JavaScript UI library
- no validation library
- no lightbox library
- no backend SDK
- no database client
- no authentication SDK

Browser-native APIs are used wherever practical.

---

## Testing and Quality Assurance

The project went through both code-level verification and real-browser review.

Development checks covered areas such as:

- page structure
- heading counts
- local link integrity
- form-label relationships
- ARIA references
- JavaScript module presence
- JavaScript syntax
- progressive-enhancement behaviour
- keyboard interaction architecture
- form-validation architecture
- responsive structure

Browser QA was then used to verify the actual rendered experience.

Issues identified during browser review included:

- Reservation form presentation
- Contact form presentation
- About principles layout
- Gallery mobile gutter containment

These were repaired and rechecked before the frontend version was accepted.

This distinction is important: passing static checks does not guarantee that a UI is visually correct.

---

## Development History

The project was deliberately built in stages.

### Version 1 — Static Frontend

The first stage focused on:

- semantic HTML
- CSS
- page architecture
- design system
- responsive layouts
- typography
- accessibility foundations
- six complete page compositions

The objective was to establish a functional and visually coherent website before introducing JavaScript.

### Version 2 — Interactive Frontend

The second stage introduced vanilla JavaScript while preserving the established design.

JavaScript additions included:

- mobile navigation
- header scroll behaviour
- shared form validation
- Reservation validation
- Contact validation
- Gallery lightbox
- Menu category tracking
- reveal motion

Version 2 then underwent cross-page review and real-browser QA.

Accepted visual repairs were consolidated into the final frontend baseline.

### Final Project State

The HTML/CSS/JavaScript implementation is the **final technology stage of The Table**.

There is no planned React migration for this repository.

---

## Scope

### Included

- HTML5
- CSS3
- vanilla JavaScript
- ES modules
- responsive web design
- semantic HTML
- accessibility practices
- DOM interaction
- client-side validation
- keyboard interaction
- responsive navigation
- modal/lightbox behaviour
- CSS design system
- progressive enhancement
- reduced-motion support
- browser QA

### Intentionally Out of Scope

- React
- Vue
- Angular
- TypeScript
- Next.js
- Tailwind CSS
- Node.js backend
- REST API
- database
- authentication
- customer accounts
- real reservation persistence
- reservation availability engine
- admin dashboard
- payment processing
- online ordering

These are not missing requirements for this project. They are deliberately outside its learning boundary.

---

## Current Limitations

Because The Table is a frontend-only project:

1. Reservation submissions are not persisted.
2. Contact messages are not delivered.
3. Restaurant availability is not calculated.
4. There are no customer accounts.
5. There is no administration interface.
6. Menu information is maintained in frontend content rather than a database.
7. Some restaurant details and media may remain fictional or placeholder content.

These limitations are intentional and should not be interpreted as incomplete backend implementation.

---

## Learning Outcomes

The project demonstrates practical experience with several fundamental frontend concepts.

### HTML

- structuring complete pages
- semantic elements
- headings and document hierarchy
- links and navigation
- forms
- fieldsets and legends
- labels and controls
- accessibility relationships
- multi-page architecture

### CSS

- the cascade
- inheritance
- custom properties
- design tokens
- responsive layouts
- Grid
- Flexbox
- spacing systems
- typography
- component states
- page-specific styling
- media queries
- responsive forms
- visual debugging

### JavaScript

- variables and functions
- modules
- DOM queries
- event listeners
- state represented through DOM attributes/classes
- arrays
- maps
- callbacks
- form validation
- regular expressions
- keyboard events
- focus management
- browser APIs
- `IntersectionObserver`
- `requestAnimationFrame`
- progressive enhancement

### Frontend Engineering

- separating concerns
- translating design decisions into code
- maintaining shared UI behaviour
- debugging browser-specific presentation issues
- preserving accessibility during interaction development
- validating assumptions in a real browser
- repairing regressions without unnecessarily rebuilding working features

---

## Portfolio Value

The Table is intended to demonstrate that a polished frontend experience can be designed and implemented without depending on a framework.

It provides evidence of the ability to:

- translate a project brief into a frontend architecture
- plan page responsibilities before coding
- design a consistent interface system
- write structured HTML
- build responsive layouts
- create maintainable CSS
- implement browser interactions with JavaScript
- build accessible form behaviour
- manage keyboard and focus interactions
- progressively enhance static content
- test across responsive layouts
- identify and repair UI regressions
- take a frontend project from planning through acceptance

The project's value is not that it uses the largest possible technology stack.

Its value is that the chosen technologies are understood and used deliberately.

---

## Learning Progression

The Table represents one stage in a broader project-based learning strategy.

The approach is to increase technical complexity **between projects**, rather than continuously adding technologies to one application.

A conceptual progression is:

```text
Project 1
HTML + CSS + JavaScript
        ↓
Project 2
HTML + CSS + JavaScript + React
        ↓
Project 3
React + TypeScript
        ↓
Later frontend projects
Frameworks, APIs, testing, state and architecture
        ↓
Backend-focused projects
        ↓
Full-stack applications
```

The Table occupies the first stage.

This means the project can remain a clear demonstration of frontend fundamentals while later projects demonstrate increasingly advanced frontend and eventually full-stack development.

---

## Future of The Table

The Table is considered **feature-complete within its defined frontend scope**.

Future changes should primarily be maintenance or presentation improvements, for example:

- replacing temporary imagery with final restaurant photography
- refining fictional restaurant details
- correcting accessibility issues discovered by further testing
- fixing browser compatibility problems
- performance optimisation
- deployment-related adjustments

Major framework migrations or backend functionality should be implemented as separate learning projects rather than added to this repository.

---

## Project Documentation

Detailed planning, design, implementation, and verification records are maintained in the `docs/` directory.

These documents record areas such as:

- project and brand brief
- UX and page architecture
- design system
- responsive and accessibility decisions
- frontend technical architecture
- implementation state
- verification results
- acceptance reviews

The documentation exists to preserve the reasoning behind the implementation rather than leaving the code as the only record of the project.

---

## Project Principles

Several principles guided development:

1. **Design before implementation.**  
   Page responsibilities, visual hierarchy, and responsive behaviour were considered before feature coding.

2. **Fundamentals before frameworks.**  
   HTML, CSS, and JavaScript are the learning focus of this project.

3. **Progressive enhancement.**  
   JavaScript enhances useful HTML rather than unnecessarily replacing it.

4. **Accessibility is part of implementation.**  
   Keyboard behaviour, focus, form relationships, reduced motion, and semantic structure are considered part of frontend quality.

5. **Responsive design is not optional.**  
   Mobile behaviour is designed and tested rather than treated as a final scaling exercise.

6. **Do not fake backend functionality.**  
   A frontend-only form should not claim that a reservation or message was actually delivered.

7. **Refine rather than rebuild.**  
   Working architecture is preserved where possible, and defects are repaired at their source.

8. **Technology should serve the learning objective.**  
   Additional frameworks are not introduced simply because they are popular or because they appear later in a generic roadmap.

---

## Conclusion

The Table is a focused frontend project demonstrating the development of a complete responsive website using the core browser technologies:

**HTML5 · CSS3 · Vanilla JavaScript**

It intentionally stops there.

The project demonstrates the ability to work with the browser directly, build and maintain a visual system, create responsive layouts, implement interaction without a framework, apply accessibility practices, and validate the finished interface through real-browser testing.

Rather than turning one restaurant website into an example of every technology in the web stack, The Table establishes a strong frontend-fundamentals baseline from which later projects can introduce React, TypeScript, other frontend frameworks, backend development, and eventually full-stack architecture.
