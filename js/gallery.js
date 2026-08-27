const SELECTORS = {
  gallery: "[data-gallery]",
  item: "[data-gallery-item]",
  dialog: "[data-lightbox]",
  media: "[data-lightbox-media]",
  caption: "[data-lightbox-caption]",
  counter: "[data-lightbox-counter]",
  close: "[data-lightbox-close]",
  previous: "[data-lightbox-previous]",
  next: "[data-lightbox-next]",
  focusable:
    'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
};

export function initGallery() {
  const gallery = document.querySelector(SELECTORS.gallery);
  const dialog = document.querySelector(SELECTORS.dialog);

  if (!gallery || !dialog) return;

  const items = [...gallery.querySelectorAll(SELECTORS.item)];
  if (!items.length) return;

  gallery.dataset.galleryReady = "true";

  const media = dialog.querySelector(SELECTORS.media);
  const caption = dialog.querySelector(SELECTORS.caption);
  const counter = dialog.querySelector(SELECTORS.counter);
  const closeButton = dialog.querySelector(SELECTORS.close);
  const previousButton = dialog.querySelector(SELECTORS.previous);
  const nextButton = dialog.querySelector(SELECTORS.next);

  if (
    !media ||
    !caption ||
    !counter ||
    !closeButton ||
    !previousButton ||
    !nextButton
  ) {
    return;
  }

  let currentIndex = 0;
  let returnFocusTo = null;

  items.forEach((item, index) => {
    item.addEventListener("click", () => openLightbox(index));

    item.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLightbox(index);
      }
    });
  });

  closeButton.addEventListener("click", closeLightbox);
  previousButton.addEventListener("click", () => showItem(currentIndex - 1));
  nextButton.addEventListener("click", () => showItem(currentIndex + 1));

  dialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeLightbox();
  });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!dialog.open) return;

    if (event.key === "Escape") {
      event.preventDefault();
      closeLightbox();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      showItem(currentIndex - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      showItem(currentIndex + 1);
    } else if (event.key === "Tab") {
      trapFocus(event);
    }
  });

  function openLightbox(index) {
    currentIndex = normaliseIndex(index);
    returnFocusTo = document.activeElement;

    showItem(currentIndex);
    dialog.showModal();
    document.body.classList.add("lightbox-open");

    requestAnimationFrame(() => closeButton.focus());
  }

  function closeLightbox() {
    if (!dialog.open) return;

    dialog.close();
    document.body.classList.remove("lightbox-open");

    if (
      returnFocusTo instanceof HTMLElement &&
      document.contains(returnFocusTo)
    ) {
      requestAnimationFrame(() => returnFocusTo.focus());
    }

    returnFocusTo = null;
  }

  function showItem(index) {
    currentIndex = normaliseIndex(index);

    const item = items[currentIndex];
    const label =
      item.dataset.galleryLabel ||
      item.getAttribute("aria-label") ||
      `Gallery image ${currentIndex + 1}`;

    const description =
      item.dataset.galleryCaption ||
      item.querySelector("figcaption")?.textContent?.trim() ||
      label;

    const sourceImage = item.querySelector(".gallery-item__media");

    if (sourceImage instanceof HTMLImageElement) {
      media.src = sourceImage.currentSrc || sourceImage.src;
      media.alt = sourceImage.alt || label;
    }

    caption.textContent = description;
    counter.textContent = `${currentIndex + 1} / ${items.length}`;
  }

  function normaliseIndex(index) {
    return (index + items.length) % items.length;
  }

  function trapFocus(event) {
    const focusable = [...dialog.querySelectorAll(SELECTORS.focusable)].filter(
      (element) =>
        element instanceof HTMLElement &&
        !element.hasAttribute("disabled") &&
        element.getAttribute("aria-hidden") !== "true"
    );

    if (!focusable.length) {
      event.preventDefault();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
}
