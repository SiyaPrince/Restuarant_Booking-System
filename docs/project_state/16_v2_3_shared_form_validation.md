# The Table — V2.3 Shared Form Validation Architecture

## Objective

Create one reusable client-side validation layer for both Reservations and Contact before implementing page-specific validation rules.

## Implemented

`js/forms.js` now owns shared validation primitives:

- `validateRequired()`
- `validateEmail()`
- `setFieldError()`
- `clearFieldError()`
- `clearFormErrors()`
- `focusFirstInvalid()`
- `setFormStatus()`
- `clearFormStatus()`
- `bindLiveErrorClearing()`

## Accessibility Behaviour

Field errors:

- add `aria-invalid="true"`
- create a visible text message
- connect that error to the field with `aria-describedby`
- preserve existing help-text relationships
- remove only the generated error reference when repaired

Form status regions:

- use `role="status"`
- use `aria-live="polite"`
- start hidden
- support info, error and success visual states

## Progressive Enhancement

Native browser validation remains active in this iteration.

`novalidate` will only be introduced on a form when its page-specific JavaScript validation module is implemented and verified.

## CSS

Shared validation states are owned by `components.css`, not by Reservations or Contact page stylesheets.

## Deferred

- Reservation-specific rules.
- Reservation date/time validation.
- Contact-specific validation.
- Form submission/demo completion states.
- Backend delivery or persistence.

## Next Planned Iteration

V2.4 — Reservation form validation and frontend feedback.
