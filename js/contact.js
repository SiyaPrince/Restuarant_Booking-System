import {
  bindLiveErrorClearing,
  clearFormErrors,
  clearFormStatus,
  focusFirstInvalid,
  setFieldError,
  setFormStatus,
  validateEmail,
  validateRequired,
} from "./forms.js";

export function initContact() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  const status = form.querySelector("[data-form-status]");
  const name = form.elements.name;
  const email = form.elements.email;
  const subject = form.elements.subject;
  const message = form.elements.message;

  if (!name || !email || !subject || !message) return;

  form.noValidate = true;
  bindLiveErrorClearing(form);

  form.addEventListener("input", () => clearFormStatus(status));
  form.addEventListener("change", () => clearFormStatus(status));

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    clearFormErrors(form);
    clearFormStatus(status);

    const valid = [
      validateRequired(name, "Please enter your name."),
      validateEmail(email),
      validateRequired(subject, "Please enter a subject."),
      validateMessage(message),
    ].every(Boolean);

    if (!valid) {
      setFormStatus(
        status,
        "Please review the highlighted contact details.",
        "error"
      );
      focusFirstInvalid(form);
      return;
    }

    setFormStatus(
      status,
      "Your message is ready. Online message delivery is not connected yet; please email hello@thetable.co.za to contact the restaurant.",
      "success"
    );
  });
}

function validateMessage(field) {
  if (!validateRequired(field, "Please enter your message.")) {
    return false;
  }

  if (field.value.trim().length < 10) {
    setFieldError(field, "Please enter a little more detail in your message.");
    return false;
  }

  return true;
}
