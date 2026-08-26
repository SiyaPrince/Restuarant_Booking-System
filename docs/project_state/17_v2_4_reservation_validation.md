# The Table — V2.4 Reservation Form Validation

## Objective

Activate the shared V2.3 validation architecture on the Reservations page without pretending a backend reservation has been created.

## Implemented

- `reservations.js` is now active through `main.js`.
- Reservation form receives a dedicated JavaScript hook.
- Native browser validation is progressively replaced only when JavaScript initializes.
- Minimum date is set to the user's current local date.
- Past dates are rejected.
- Time is required.
- Guest count must represent at least one guest.
- Full name is required.
- Email uses the shared semantic email validator.
- Phone validation accepts common formatting characters and 7–15 digits.
- Invalid submission focuses the first invalid field.
- Existing field errors clear as the user corrects them.
- Form-level feedback uses the V2.3 live status region.

## Completion State

A valid frontend form does **not** claim that a reservation was booked or confirmed.

The interface instead explains that the reservation details are ready and that online booking confirmation is not connected yet.

## Explicitly Deferred

- backend submission
- reservation persistence
- availability checking
- closed-day rules
- table allocation
- confirmation email/SMS
- payment/deposit
- real restaurant business-hour enforcement

## Next Planned Iteration

V2.5 — Contact form validation and frontend feedback.
