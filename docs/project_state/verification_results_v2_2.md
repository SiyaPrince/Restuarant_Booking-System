# The Table — V2.2 Verification Results

## Static Checks

| Check | Status |
|---|---|
| header.js exists | PASS |
| main.js imports header | PASS |
| main.js initializes header | PASS |
| header uses passive scroll listener | PASS |
| header applies scrolled class | PASS |
| header tracks data state | PASS |
| header uses threshold | PASS |
| header detects Home overlay | PASS |
| index.html: header data hook | PASS |
| index.html: module entry preserved | PASS |
| index.html: one H1 | PASS |
| menu.html: header data hook | PASS |
| menu.html: module entry preserved | PASS |
| menu.html: one H1 | PASS |
| about.html: header data hook | PASS |
| about.html: module entry preserved | PASS |
| about.html: one H1 | PASS |
| gallery.html: header data hook | PASS |
| gallery.html: module entry preserved | PASS |
| gallery.html: one H1 | PASS |
| reservations.html: header data hook | PASS |
| reservations.html: module entry preserved | PASS |
| reservations.html: one H1 | PASS |
| contact.html: header data hook | PASS |
| contact.html: module entry preserved | PASS |
| contact.html: one H1 | PASS |
| Home overlay header present | PASS |
| menu.html: no overlay header | PASS |
| about.html: no overlay header | PASS |
| gallery.html: no overlay header | PASS |
| reservations.html: no overlay header | PASS |
| contact.html: no overlay header | PASS |
| Header CSS contains /* V2.2 sticky/scrolled header enhancement */ | PASS |
| Header CSS contains .js .site-header--scrolled | PASS |
| Header CSS contains backdrop-filter: blur(10px); | PASS |
| Header CSS contains @media (prefers-reduced-motion: reduce) | PASS |
| V2.1 navigation module preserved | PASS |
| V2.1 Escape behaviour preserved | PASS |
| V2.1 focus trap preserved | PASS |
| No prohibited internal governance labels | PASS |

Static result: PASS (40/40).

## Manual Browser Verification Required

- On Home, confirm header starts transparent over the hero.
- Scroll slightly and confirm it becomes Warm Ivory / Charcoal.
- Confirm Reserve becomes Deep Olive after scroll.
- Confirm internal pages remain stable and do not jump.
- Confirm mobile navigation still opens/closes correctly.
- Confirm no header height jump occurs during state change.
