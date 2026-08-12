const root = document.documentElement;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const motionEnabled = !reducedMotion.matches;
const revealElements = [...document.querySelectorAll("[data-reveal]")];
const causalSequence = document.querySelector("[data-causal-sequence]");

const revealAll = () => {
  revealElements.forEach((element) => element.classList.add("is-revealed"));
};

if (motionEnabled) {
  root.classList.add("motion-enabled");

  requestAnimationFrame(() => {
    requestAnimationFrame(() => root.classList.add("is-loaded"));
  });
} else {
  root.classList.add("is-loaded");
  revealAll();
}

if (motionEnabled && "IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -14%", threshold: 0.08 },
  );

  revealElements.forEach((element) => revealObserver.observe(element));

  if (causalSequence) {
    causalSequence.classList.add("is-motion-ready");

    const sequenceObserver = new IntersectionObserver(
      ([entry], observer) => {
        if (!entry.isIntersecting) return;

        causalSequence.classList.add("is-active");
        observer.unobserve(entry.target);
      },
      { rootMargin: "0px 0px -18%", threshold: 0.08 },
    );

    sequenceObserver.observe(causalSequence);
  }
} else {
  revealAll();
}

const siteHeader = document.querySelector(".site-header");
const navigationLinks = [...document.querySelectorAll(".site-nav__link[href^='#']")];
const navigationTargets = navigationLinks
  .map((link) => ({ link, target: document.querySelector(link.hash) }))
  .filter(({ target }) => target);

const updateNavigation = () => {
  siteHeader?.classList.toggle("is-scrolled", window.scrollY > 12);

  const readingLine = window.scrollY + window.innerHeight * 0.42;
  let activeItem = navigationTargets[0];

  navigationTargets.forEach((item) => {
    if (item.target.offsetTop <= readingLine) activeItem = item;
  });

  navigationTargets.forEach(({ link }) => {
    const isActive = link === activeItem?.link;
    link.classList.toggle("site-nav__link--active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  });
};

let navigationFrame;
const scheduleNavigationUpdate = () => {
  if (navigationFrame) return;

  navigationFrame = requestAnimationFrame(() => {
    updateNavigation();
    navigationFrame = undefined;
  });
};

updateNavigation();
window.addEventListener("scroll", scheduleNavigationUpdate, { passive: true });
window.addEventListener("resize", scheduleNavigationUpdate);
