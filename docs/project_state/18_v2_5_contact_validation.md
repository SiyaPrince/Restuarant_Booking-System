# The Table — V2.5 Contact Form Validation

## Objective

Activate the shared V2.3 validation architecture on the Contact page without implying that a real message has been delivered.

## Implemented

- `contact.js` is now active through `main.js`.
- Contact form receives a dedicated JavaScript hook.
- Native validation is progressively replaced only when JavaScript initializes.
- Name is required.
- Email uses the shared semantic email validator.
- Subject is required.
- Message is required and must contain at least a small amount of meaningful detail.
- Invalid submission focuses the first invalid field.
- Existing field errors clear while the user corrects them.
- Form-level feedback uses the shared live status region.

## Completion State

A valid frontend form does **not** claim the message was sent.

The interface explains that the message is ready and directs the user to the restaurant email address until backend delivery is connected.

## Explicitly Deferred

- backend message delivery
- email service integration
- enquiry persistence
- structured enquiry categories
- spam protection
- rate limiting
- attachments
- auto-response email

## Next Planned Iteration

V2.6 — Gallery lightbox.
