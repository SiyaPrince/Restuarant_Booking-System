const SELECTORS = {
  navigation: "[data-menu-category-nav]",
  link: "[data-menu-category-link]",
  section: "[data-menu-category-section]",
};

export function initMenu() {
  const navigation = document.querySelector(SELECTORS.navigation);
  if (!navigation) return;

  const links = [...navigation.querySelectorAll(SELECTORS.link)];
  const sections = [...document.querySelectorAll(SELECTORS.section)];

  if (!links.length || !sections.length) return;

  const linkById = new Map(
    links
      .map((link) => {
        const href = link.getAttribute("href");
        if (!href?.startsWith("#")) return null;
        return [href.slice(1), link];
      })
      .filter(Boolean)
  );

  function setActiveCategory(id) {
    links.forEach((link) => {
      const active = link === linkById.get(id);
      link.classList.toggle("is-active", active);

      if (active) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  if (!("IntersectionObserver" in window)) {
    const initialId = getInitialCategoryId(sections);
    if (initialId) setActiveCategory(initialId);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => {
          const topDifference =
            Math.abs(a.boundingClientRect.top) -
            Math.abs(b.boundingClientRect.top);

          if (topDifference !== 0) return topDifference;

          return b.intersectionRatio - a.intersectionRatio;
        });

      if (!visible.length) return;

      setActiveCategory(visible[0].target.id);
    },
    {
      root: null,
      rootMargin: "-20% 0px -55% 0px",
      threshold: [0, 0.1, 0.25, 0.5],
    }
  );

  sections.forEach((section) => observer.observe(section));

  links.forEach((link) => {
    link.addEventListener("click", () => {
      const href = link.getAttribute("href");
      if (!href?.startsWith("#")) return;
      setActiveCategory(href.slice(1));
    });
  });

  const initialId = getInitialCategoryId(sections);
  if (initialId) setActiveCategory(initialId);
}

function getInitialCategoryId(sections) {
  const hash = window.location.hash.slice(1);
  if (hash && sections.some((section) => section.id === hash)) {
    return hash;
  }

  return sections[0]?.id ?? "";
}
