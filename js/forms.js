const ERROR_CLASS = "form-field--error";
const ERROR_MESSAGE_CLASS = "form-field__error";

export function validateRequired(field, message = "This field is required.") {
  if (!field) return false;

  const value = field.value?.trim?.() ?? "";
  const valid = value.length > 0;

  if (!valid) {
    setFieldError(field, message);
    return false;
  }

  clearFieldError(field);
  return true;
}

export function validateEmail(field, message = "Please enter a valid email address.") {
  if (!field) return false;

  const value = field.value.trim();

  if (!value) {
    setFieldError(field, "Please enter your email address.");
    return false;
  }

  const valid = field.validity.valid;

  if (!valid) {
    setFieldError(field, message);
    return false;
  }

  clearFieldError(field);
  return true;
}

export function setFieldError(field, message) {
  const wrapper = field.closest(".form-field");
  if (!wrapper) return;

  clearFieldError(field);

  wrapper.classList.add(ERROR_CLASS);
  field.setAttribute("aria-invalid", "true");

  const error = document.createElement("p");
  error.className = ERROR_MESSAGE_CLASS;
  error.id = `${field.id}-error`;
  error.textContent = message;

  const describedBy = new Set(
    (field.getAttribute("aria-describedby") || "")
      .split(/\s+/)
      .filter(Boolean)
  );

  describedBy.add(error.id);
  field.setAttribute("aria-describedby", [...describedBy].join(" "));

  wrapper.append(error);
}

export function clearFieldError(field) {
  const wrapper = field.closest(".form-field");
  if (!wrapper) return;

  wrapper.classList.remove(ERROR_CLASS);
  field.removeAttribute("aria-invalid");

  const existingError = wrapper.querySelector(`.${ERROR_MESSAGE_CLASS}`);
  if (!existingError) return;

  const describedBy = new Set(
    (field.getAttribute("aria-describedby") || "")
      .split(/\s+/)
      .filter(Boolean)
  );

  describedBy.delete(existingError.id);

  if (describedBy.size) {
    field.setAttribute("aria-describedby", [...describedBy].join(" "));
  } else {
    field.removeAttribute("aria-describedby");
  }

  existingError.remove();
}

export function clearFormErrors(form) {
  if (!form) return;

  form.querySelectorAll("[aria-invalid='true']").forEach((field) => {
    clearFieldError(field);
  });
}

export function focusFirstInvalid(form) {
  if (!form) return;

  const firstInvalid = form.querySelector("[aria-invalid='true']");
  firstInvalid?.focus();
}

export function setFormStatus(statusElement, message, type = "info") {
  if (!statusElement) return;

  statusElement.textContent = message;
  statusElement.dataset.status = type;
  statusElement.hidden = false;
}

export function clearFormStatus(statusElement) {
  if (!statusElement) return;

  statusElement.textContent = "";
  statusElement.removeAttribute("data-status");
  statusElement.hidden = true;
}

export function bindLiveErrorClearing(form) {
  if (!form) return;

  form.addEventListener("input", (event) => {
    const field = event.target.closest("input, select, textarea");
    if (!field || field.getAttribute("aria-invalid") !== "true") return;

    clearFieldError(field);
  });

  form.addEventListener("change", (event) => {
    const field = event.target.closest("input, select, textarea");
    if (!field || field.getAttribute("aria-invalid") !== "true") return;

    clearFieldError(field);
  });
}
