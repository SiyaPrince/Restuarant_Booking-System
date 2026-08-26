const SCROLL_THRESHOLD = 24;

export function initHeader() {
  const header = document.querySelector("[data-site-header]");
  if (!header) return;

  const isOverlayHeader = header.classList.contains("site-header--overlay");
  let framePending = false;

  function syncHeaderState() {
    const scrolled = window.scrollY > SCROLL_THRESHOLD;

    header.classList.toggle("site-header--scrolled", scrolled);
    header.dataset.scrolled = String(scrolled);

    if (isOverlayHeader) {
      header.classList.toggle("site-header--overlay-active", !scrolled);
    }
  }

  function requestHeaderSync() {
    if (framePending) return;

    framePending = true;
    requestAnimationFrame(() => {
      syncHeaderState();
      framePending = false;
    });
  }

  syncHeaderState();

  window.addEventListener("scroll", requestHeaderSync, { passive: true });
}
