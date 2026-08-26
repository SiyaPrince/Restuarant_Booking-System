# The Table — V2.6 Verification Results

## Static Checks

| Check | Status |
|---|---|
| gallery.js active | PASS |
| main imports gallery | PASS |
| main initializes gallery | PASS |
| gallery container hook | PASS |
| 12 interactive gallery items | PASS |
| items keyboard focusable | PASS |
| items expose button role | PASS |
| dialog present | PASS |
| close control present | PASS |
| previous control present | PASS |
| next control present | PASS |
| counter present | PASS |
| caption present | PASS |
| native showModal used | PASS |
| native close used | PASS |
| Escape handling | PASS |
| ArrowLeft handling | PASS |
| ArrowRight handling | PASS |
| Tab focus trap | PASS |
| focus restoration | PASS |
| scroll lock | PASS |
| scroll unlock | PASS |
| backdrop click closes | PASS |
| wrapping navigation | PASS |
| Enter activation | PASS |
| Space activation | PASS |
| Lightbox CSS contains /* V2.6 gallery lightbox */ | PASS |
| Lightbox CSS contains .lightbox::backdrop | PASS |
| Lightbox CSS contains .lightbox__media | PASS |
| Lightbox CSS contains .lightbox__footer | PASS |
| Lightbox CSS contains body.lightbox-open | PASS |
| navigation.js preserved | PASS |
| header.js preserved | PASS |
| forms.js preserved | PASS |
| reservations.js preserved | PASS |
| contact.js preserved | PASS |
| main preserves initNavigation(); | PASS |
| main preserves initHeader(); | PASS |
| main preserves initReservations(); | PASS |
| main preserves initContact(); | PASS |
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
| No prohibited internal governance labels | PASS |

Static result: PASS (53/53).

## Manual Browser Verification Required

- Open several gallery items with mouse/touch.
- Open an item with Enter and Space.
- Confirm the viewer fills the screen.
- Confirm Previous/Next wrap correctly.
- Test ArrowLeft and ArrowRight.
- Press Escape and confirm close.
- Tab through controls and confirm focus stays in the viewer.
- Close and confirm focus returns to the item that opened it.
- Confirm the page behind the viewer does not scroll.
- Test the layout on a phone and desktop.
