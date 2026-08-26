# The Table — V2.4 Verification Results

## Static Checks

| Check | Status |
|---|---|
| reservations.js active module exists | PASS |
| main imports reservations module | PASS |
| main initializes reservations | PASS |
| reservation form hook present | PASS |
| reservation status hook present | PASS |
| JS progressively sets noValidate | PASS |
| minimum date set | PASS |
| past-date validation present | PASS |
| time required | PASS |
| guest validation present | PASS |
| name required | PASS |
| shared email validation used | PASS |
| phone validation present | PASS |
| phone allows international prefix | PASS |
| invalid submission focuses field | PASS |
| submission prevented | PASS |
| no false booking confirmation | PASS |
| honest completion copy present | PASS |
| live error clearing bound | PASS |
| form status clearing bound | PASS |
| navigation.js preserved | PASS |
| header.js preserved | PASS |
| forms.js preserved | PASS |
| navigation still initialized | PASS |
| header still initialized | PASS |
| contact validation remains deferred | PASS |
| index.html: one H1 | PASS |
| index.html: module entry preserved | PASS |
| menu.html: one H1 | PASS |
| menu.html: module entry preserved | PASS |
| about.html: one H1 | PASS |
| about.html: module entry preserved | PASS |
| gallery.html: one H1 | PASS |
| gallery.html: module entry preserved | PASS |
| reservations.html: one H1 | PASS |
| reservations.html: module entry preserved | PASS |
| contact.html: one H1 | PASS |
| contact.html: module entry preserved | PASS |
| No prohibited internal governance labels | PASS |

Static result: PASS (39/39).

## Manual Browser Verification Required

- Submit the empty reservation form and confirm field errors appear.
- Confirm focus moves to the first invalid field.
- Select a past date and confirm it is rejected.
- Confirm the date picker does not offer dates before today where supported.
- Correct an invalid field and confirm its error clears.
- Test a valid email and common South African/international phone formats.
- Complete all required fields and confirm the frontend-only completion message appears.
- Confirm no page navigation/reload occurs on submission.
