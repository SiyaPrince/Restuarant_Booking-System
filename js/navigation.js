const focusableSelector =
  'a[href], button:not([disabled]), summary, input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function initNavigation() {
  const nav = document.querySelector("[data-mobile-nav]");
  if (!nav) return;

  const toggle = nav.querySelector("[data-mobile-nav-toggle]");
  const panel = nav.querySelector("[data-mobile-nav-panel]");
  if (!toggle || !panel) return;

  let returnFocusTo = null;

  function focusableItems() {
    return [...panel.querySelectorAll(focusableSelector)].filter(
      (element) =>
        !element.hasAttribute("disabled") &&
        element.getAttribute("aria-hidden") !== "true"
    );
  }

  function syncState() {
    const open = nav.open;

    toggle.setAttribute("aria-expanded", String(open));
    panel.setAttribute("aria-hidden", String(!open));
    document.body.classList.toggle("nav-open", open);

    if (open) {
      returnFocusTo = document.activeElement;
      requestAnimationFrame(() => focusableItems()[0]?.focus());
    } else if (
      returnFocusTo instanceof HTMLElement &&
      document.contains(returnFocusTo)
    ) {
      requestAnimationFrame(() => returnFocusTo.focus());
      returnFocusTo = null;
    }
  }

  function closeNavigation() {
    if (!nav.open) return;
    nav.open = false;
    syncState();
  }

  function trapFocus(event) {
    const items = focusableItems();

    if (!items.length) {
      event.preventDefault();
      return;
    }

    const first = items[0];
    const last = items[items.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  nav.addEventListener("toggle", syncState);

  panel.addEventListener("click", (event) => {
    if (event.target.closest("a[href]")) {
      closeNavigation();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!nav.open) return;

    if (event.key === "Escape") {
      event.preventDefault();
      closeNavigation();
    } else if (event.key === "Tab") {
      trapFocus(event);
    }
  });

  syncState();
}
