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

export function initReservations() {
  const form = document.querySelector("[data-reservation-form]");
  if (!form) return;

  const status = form.querySelector("[data-form-status]");
  const date = form.elements.date;
  const time = form.elements.time;
  const guests = form.elements.guests;
  const name = form.elements.name;
  const email = form.elements.email;
  const phone = form.elements.phone;

  if (!date || !time || !guests || !name || !email || !phone) return;

  form.noValidate = true;
  setMinimumReservationDate(date);
  bindLiveErrorClearing(form);

  form.addEventListener("input", () => clearFormStatus(status));
  form.addEventListener("change", () => clearFormStatus(status));

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    clearFormErrors(form);
    clearFormStatus(status);

    const valid = [
      validateReservationDate(date),
      validateRequired(time, "Please choose a reservation time."),
      validateGuestCount(guests),
      validateRequired(name, "Please enter your full name."),
      validateEmail(email),
      validatePhone(phone),
    ].every(Boolean);

    if (!valid) {
      setFormStatus(
        status,
        "Please review the highlighted reservation details.",
        "error"
      );
      focusFirstInvalid(form);
      return;
    }

    setFormStatus(
      status,
      "Your reservation details are ready. Online booking confirmation is not connected yet; please contact the restaurant to complete the reservation.",
      "success"
    );
  });
}

function setMinimumReservationDate(field) {
  field.min = toLocalDateValue(new Date());
}

function validateReservationDate(field) {
  if (!validateRequired(field, "Please choose a reservation date.")) {
    return false;
  }

  const selected = parseDateValue(field.value);
  const today = startOfDay(new Date());

  if (!selected || selected < today) {
    setFieldError(field, "Please choose today or a future date.");
    return false;
  }

  return true;
}

function validateGuestCount(field) {
  if (!validateRequired(field, "Please select the number of guests.")) {
    return false;
  }

  const guests = Number(field.value);

  if (!Number.isInteger(guests) || guests < 1) {
    setFieldError(field, "Please select at least one guest.");
    return false;
  }

  return true;
}

function validatePhone(field) {
  if (!validateRequired(field, "Please enter a phone number.")) {
    return false;
  }

  const compact = field.value.replace(/[\s().-]/g, "");
  const valid = /^\+?\d{7,15}$/.test(compact);

  if (!valid) {
    setFieldError(field, "Please enter a valid phone number.");
    return false;
  }

  return true;
}

function parseDateValue(value) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return null;

  const [, year, month, day] = match;
  const date = new Date(Number(year), Number(month) - 1, Number(day));
  return Number.isNaN(date.getTime()) ? null : date;
}

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function toLocalDateValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
