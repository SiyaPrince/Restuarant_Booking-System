# The Table — V2.1 Verification Results

## Static Checks

| Check | Status |
|---|---|
| index.html: module entry | PASS |
| index.html: disclosure hook | PASS |
| index.html: toggle hook | PASS |
| index.html: panel hook | PASS |
| index.html: aria-expanded | PASS |
| index.html: aria-controls | PASS |
| index.html: one H1 | PASS |
| menu.html: module entry | PASS |
| menu.html: disclosure hook | PASS |
| menu.html: toggle hook | PASS |
| menu.html: panel hook | PASS |
| menu.html: aria-expanded | PASS |
| menu.html: aria-controls | PASS |
| menu.html: one H1 | PASS |
| about.html: module entry | PASS |
| about.html: disclosure hook | PASS |
| about.html: toggle hook | PASS |
| about.html: panel hook | PASS |
| about.html: aria-expanded | PASS |
| about.html: aria-controls | PASS |
| about.html: one H1 | PASS |
| gallery.html: module entry | PASS |
| gallery.html: disclosure hook | PASS |
| gallery.html: toggle hook | PASS |
| gallery.html: panel hook | PASS |
| gallery.html: aria-expanded | PASS |
| gallery.html: aria-controls | PASS |
| gallery.html: one H1 | PASS |
| reservations.html: module entry | PASS |
| reservations.html: disclosure hook | PASS |
| reservations.html: toggle hook | PASS |
| reservations.html: panel hook | PASS |
| reservations.html: aria-expanded | PASS |
| reservations.html: aria-controls | PASS |
| reservations.html: one H1 | PASS |
| contact.html: module entry | PASS |
| contact.html: disclosure hook | PASS |
| contact.html: toggle hook | PASS |
| contact.html: panel hook | PASS |
| contact.html: aria-expanded | PASS |
| contact.html: aria-controls | PASS |
| contact.html: one H1 | PASS |
| js/main.js exists | PASS |
| js/navigation.js exists | PASS |
| js/header.js exists | PASS |
| js/gallery.js exists | PASS |
| js/forms.js exists | PASS |
| js/reservations.js exists | PASS |
| js/contact.js exists | PASS |
| js/menu.js exists | PASS |
| navigation.js feature: "Escape" | PASS |
| navigation.js feature: "Tab" | PASS |
| navigation.js feature: nav-open | PASS |
| navigation.js feature: aria-expanded | PASS |
| navigation.js feature: aria-hidden | PASS |
| navigation.js feature: returnFocusTo | PASS |
| navigation.js feature: trapFocus | PASS |
| No prohibited internal governance labels | PASS |

Static result: PASS (58/58).

## Manual Browser Verification Required

- Open and close the mobile menu.
- Confirm background scroll is locked while open.
- Press Escape and confirm the menu closes.
- Tab through the open menu and confirm focus remains within it.
- Close the menu and confirm focus returns to the trigger.
- Disable JavaScript and confirm the native disclosure fallback still works.
