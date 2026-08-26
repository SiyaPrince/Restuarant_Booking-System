# The Table — Project Map

```text
The Table/
├── index.html
├── menu.html
├── about.html
├── gallery.html
├── reservations.html
├── contact.html
├── .gitignore
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
├── assets/
│   ├── images/
│   │   ├── home/
│   │   ├── menu/
│   │   ├── about/
│   │   ├── gallery/
│   │   └── shared/
│   ├── icons/
│   └── fonts/
├── favicon/
├── docs/
│   ├── planning documents
│   └── project_state/
│       ├── specification and file plan
│       ├── implementation history
│       ├── current_state.md
│       ├── project_map.md
│       └── verification records
├── README.md
└── LICENSE
```

## Structural Responsibilities

- Root HTML files own page structure and content.
- `css/tokens.css` owns approved design constants.
- `css/base.css` owns global element defaults.
- `css/layout.css` owns reusable layout primitives.
- `css/components.css` owns shared UI components.
- `css/pages/*.css` owns page-specific composition only.
- `assets/images/<page>/` owns page-specific photography when final assets are introduced.
- `docs/project_state/` records the actual continuation state and verification evidence.

## Where to Work Next

The next bounded Version 1 task is **real-browser visual QA and final content-asset integration**.

Do not begin Version 2 JavaScript until Version 1 browser QA has been completed and any discovered layout/accessibility issues have been repaired.
