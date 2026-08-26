const SELECTOR = "[data-reveal]";
const VISIBLE_CLASS = "is-revealed";

export function initRevealMotion() {
  const elements = [...document.querySelectorAll(SELECTOR)];
  if (!elements.length) return;

  if (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    !("IntersectionObserver" in window)
  ) {
    elements.forEach((element) => element.classList.add(VISIBLE_CLASS));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add(VISIBLE_CLASS);
        currentObserver.unobserve(entry.target);
      });
    },
    {
      root: null,
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.12,
    }
  );

  elements.forEach((element) => observer.observe(element));
}
