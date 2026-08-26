# The Table — V2.7 Verification Results

## Static Checks

| Check | Status |
|---|---|
| menu.js active | PASS |
| main imports menu | PASS |
| main initializes menu | PASS |
| category nav hook present | PASS |
| 4 category link hooks | PASS |
| 4 category section hooks | PASS |
| IntersectionObserver used | PASS |
| observer rootMargin present | PASS |
| observer thresholds present | PASS |
| active class applied | PASS |
| aria-current applied | PASS |
| aria-current removed from inactive links | PASS |
| anchor click enhancement present | PASS |
| initial hash supported | PASS |
| fallback first category supported | PASS |
| starters anchor preserved | PASS |
| starters section preserved | PASS |
| mains anchor preserved | PASS |
| mains section preserved | PASS |
| desserts anchor preserved | PASS |
| desserts section preserved | PASS |
| drinks anchor preserved | PASS |
| drinks section preserved | PASS |
| Menu active CSS contains /* V2.7 active Menu category state */ | PASS |
| Menu active CSS contains .is-active | PASS |
| Menu active CSS contains [aria-current="true"] | PASS |
| Menu active CSS contains @media (prefers-reduced-motion: reduce) | PASS |
| navigation.js preserved | PASS |
| header.js preserved | PASS |
| forms.js preserved | PASS |
| reservations.js preserved | PASS |
| contact.js preserved | PASS |
| gallery.js preserved | PASS |
| main preserves initNavigation(); | PASS |
| main preserves initHeader(); | PASS |
| main preserves initReservations(); | PASS |
| main preserves initContact(); | PASS |
| main preserves initGallery(); | PASS |
| index.html: one H1 | PASS |
| index.html: module entry | PASS |
| menu.html: one H1 | PASS |
| menu.html: module entry | PASS |
| about.html: one H1 | PASS |
| about.html: module entry | PASS |
| gallery.html: one H1 | PASS |
| gallery.html: module entry | PASS |
| reservations.html: one H1 | PASS |
| reservations.html: module entry | PASS |
| contact.html: one H1 | PASS |
| contact.html: module entry | PASS |
| index.html: local links resolve | PASS |
| menu.html: local links resolve | PASS |
| about.html: local links resolve | PASS |
| gallery.html: local links resolve | PASS |
| reservations.html: local links resolve | PASS |
| contact.html: local links resolve | PASS |
| No prohibited internal governance labels | PASS |

Static result: PASS (57/57).

## Manual Browser Verification Required

- Open Menu and confirm Starters is active initially.
- Scroll through Mains, Desserts and Drinks and confirm active state follows.
- Click each category and confirm anchor navigation still works.
- Load `menu.html#desserts` and confirm Desserts initializes active.
- Verify category navigation remains usable on mobile horizontal scroll.
- Disable JavaScript and confirm all four anchor links still work.
