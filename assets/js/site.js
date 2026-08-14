const root = document.documentElement;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const motionEnabled = !reducedMotion.matches;
const revealElements = [...document.querySelectorAll("[data-reveal]")];
const causalSequence = document.querySelector("[data-causal-sequence]");

const castingTargets = [
  {
    name: "Sophie Thatcher",
    image: "assets/images/actors target/Sophie_Thatcher_Selected.png",
    note: "",
    camera: { x: [-10, 8], y: [8, -4], scale: [1, 1.035], origin: "56% 43%" },
  },
  {
    name: "Bertie Carvel",
    image: "assets/images/actors target/Bertie_Carvel.png",
    note: "",
    camera: { x: [9, -7], y: [4, -5], scale: [1.034, 1.004], origin: "44% 42%" },
  },
  {
    name: "Olivia Cooke",
    image: "assets/images/actors target/Olivia_Cooke.png",
    note: "",
    camera: { x: [-5, 6], y: [9, -6], scale: [1.006, 1.038], origin: "51% 38%" },
  },
  {
    name: "Rhys Ifans",
    image: "assets/images/actors target/Rhys Ifans.png",
    note: "",
    camera: { x: [8, -9], y: [6, -3], scale: [1.036, 1.002], origin: "52% 40%" },
  },
  {
    name: "Morfydd Clark",
    image: "assets/images/actors target/Morfydd_Clark.png",
    note: "",
    camera: { x: [-8, 7], y: [5, -7], scale: [1.002, 1.032], origin: "48% 42%" },
  },
  {
    name: "Ramon Tikaram",
    image: "assets/images/actors target/Ramon_Tikaram.png",
    note: "",
    camera: { x: [7, -8], y: [8, -4], scale: [1.035, 1.003], origin: "45% 39%" },
  },
  {
    name: "Andrew Wincott",
    image: "assets/images/actors target/Andrew Wincott.png",
    note: "",
    camera: { x: [-6, 8], y: [7, -5], scale: [1.004, 1.034], origin: "50% 41%" },
  },
  {
    name: "Emma Gregory",
    image: "assets/images/actors target/Emma_Gregory.png",
    note: "",
    camera: { x: [8, -6], y: [5, -6], scale: [1.03, 1.006], origin: "54% 40%" },
  },
];

const castingSection = document.querySelector("[data-casting]");
const castingSequence = castingSection?.querySelector("[data-casting-sequence]");
const castingStage = castingSection?.querySelector("[data-casting-stage]");
const castingActors = [...(castingSection?.querySelectorAll("[data-casting-actor]") ?? [])];
const castingSettleDelay = 140;
const castingSettleThreshold = 0.22;
const castingSettleAnchor = 0.46;

const clamp = (value, minimum = 0, maximum = 1) => Math.min(maximum, Math.max(minimum, value));
const lerp = (start, end, progress) => start + (end - start) * progress;
const smoothstep = (start, end, value) => {
  const progress = clamp((value - start) / (end - start));
  return progress * progress * (3 - 2 * progress);
};

let castingGeometry = { top: 0, range: 1 };
let castingInView = false;
let castingDesktop = false;
let castingSettleTimer;

const measureCasting = () => {
  if (!castingSection || !castingSequence || castingActors.length !== castingTargets.length) return;

  castingDesktop = motionEnabled && window.matchMedia("(min-width: 48.01rem)").matches;
  castingSequence.classList.toggle("is-cinematic", castingDesktop);

  if (!castingDesktop) {
    root.classList.remove("casting-stage-active");
    return;
  }

  const sequenceTop = castingSequence.getBoundingClientRect().top + window.scrollY;
  castingGeometry = {
    top: sequenceTop,
    range: Math.max(1, castingSequence.offsetHeight - window.innerHeight),
  };
};

const updateCastingStage = () => {
  if (!castingDesktop || !castingSequence || !castingStage || !castingInView) {
    root.classList.remove("casting-stage-active");
    return;
  }

  const sectionProgress = clamp((window.scrollY - castingGeometry.top) / castingGeometry.range);
  const actorPosition = sectionProgress * castingActors.length;
  const withinStage = window.scrollY >= castingGeometry.top - Math.min(120, window.innerHeight * 0.12)
    && window.scrollY <= castingGeometry.top + castingGeometry.range + 1;

  root.classList.toggle("casting-stage-active", withinStage);
  castingStage.style.setProperty("--casting-progress", sectionProgress.toFixed(4));

  castingActors.forEach((actor, index) => {
    const target = castingTargets[index];
    const relativeProgress = actorPosition - index;
    const localProgress = clamp(relativeProgress);
    const cameraProgress = localProgress < 0.2
      ? lerp(0, 0.45, smoothstep(0, 0.2, localProgress))
      : localProgress <= 0.72
        ? 0.45
        : lerp(0.45, 1, smoothstep(0.72, 1, localProgress));
    const isFirst = index === 0;
    const isLast = index === castingActors.length - 1;
    const imageEntrance = isFirst ? 1 : smoothstep(-0.14, 0.18, relativeProgress);
    const textEntrance = isFirst ? 1 : smoothstep(-0.1, 0.2, relativeProgress);
    const imageExit = 1 - smoothstep(isLast ? 0.78 : 0.72, 1, relativeProgress);
    const textExit = 1 - smoothstep(isLast ? 0.82 : 0.74, 1, relativeProgress);
    const imagePresence = clamp(Math.min(imageEntrance, imageExit));
    const textPresence = clamp(Math.min(textEntrance, textExit));
    const presence = Math.max(imagePresence, textPresence);
    const textY = lerp(14, -4, textPresence);

    actor.style.setProperty("--actor-presence", presence.toFixed(4));
    actor.style.setProperty("--actor-image-presence", imagePresence.toFixed(4));
    actor.style.setProperty("--actor-text-presence", textPresence.toFixed(4));
    actor.style.setProperty("--actor-text-y", textY.toFixed(2));
    actor.style.setProperty("--camera-x", lerp(target.camera.x[0], target.camera.x[1], cameraProgress).toFixed(2));
    actor.style.setProperty("--camera-y", lerp(target.camera.y[0], target.camera.y[1], cameraProgress).toFixed(2));
    actor.style.setProperty("--camera-scale", lerp(target.camera.scale[0], target.camera.scale[1], cameraProgress).toFixed(4));
    actor.style.setProperty("--camera-origin", target.camera.origin);
    actor.classList.toggle("is-active", presence > 0.01);
  });
};

const settleCastingToNearestActor = () => {
  castingSettleTimer = undefined;

  if (!castingDesktop || !castingSequence || !castingInView) return;

  const currentScroll = window.scrollY;
  const sequenceEnd = castingGeometry.top + castingGeometry.range;
  if (currentScroll < castingGeometry.top || currentScroll > sequenceEnd) return;

  const actorPosition = clamp((currentScroll - castingGeometry.top) / castingGeometry.range) * castingActors.length;
  let nearestAnchor = castingSettleAnchor;
  let nearestDistance = Math.abs(actorPosition - nearestAnchor);

  for (let index = 1; index < castingActors.length; index += 1) {
    const anchor = index + castingSettleAnchor;
    const distance = Math.abs(actorPosition - anchor);
    if (distance >= nearestDistance) continue;

    nearestAnchor = anchor;
    nearestDistance = distance;
  }

  if (nearestDistance > castingSettleThreshold) return;

  const targetScroll = castingGeometry.top + (nearestAnchor / castingActors.length) * castingGeometry.range;
  if (Math.abs(targetScroll - currentScroll) < 2) return;

  window.scrollTo({ top: targetScroll, behavior: "smooth" });
};

const scheduleCastingSettle = () => {
  if (castingSettleTimer) window.clearTimeout(castingSettleTimer);
  if (!castingDesktop || !castingInView) return;

  castingSettleTimer = window.setTimeout(settleCastingToNearestActor, castingSettleDelay);
};

if (castingSection && castingSequence && castingActors.length === castingTargets.length) {
  measureCasting();

  if (motionEnabled && "IntersectionObserver" in window) {
    castingSection.classList.add("is-mobile-enhanced");

    const castingSectionObserver = new IntersectionObserver(
      ([entry]) => {
        castingInView = entry.isIntersecting;
        scheduleNavigationUpdate();
      },
      { rootMargin: "100% 0px", threshold: 0 },
    );

    const castingActorObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          castingActorObserver.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12%", threshold: 0.08 },
    );

    castingSectionObserver.observe(castingSection);
    castingActors.forEach((actor) => castingActorObserver.observe(actor));
  } else {
    castingInView = true;
    castingActors.forEach((actor) => actor.classList.add("is-revealed"));
  }
}

const creatorSection = document.querySelector("[data-creator-cinematic]");
const creatorNarrative = creatorSection?.querySelector("[data-creator-narrative]");
let creatorGeometry = { top: 0, range: 1 };
let creatorInView = false;
let creatorDesktop = false;

const measureCreator = () => {
  if (!creatorSection || !creatorNarrative) return;

  creatorDesktop = motionEnabled && window.matchMedia("(min-width: 64.01rem)").matches;
  creatorSection.classList.toggle("is-cinematic", creatorDesktop);

  if (!creatorDesktop) {
    root.classList.remove("creator-stage-active");
    return;
  }

  creatorGeometry = {
    top: creatorNarrative.getBoundingClientRect().top + window.scrollY,
    range: Math.max(1, creatorNarrative.offsetHeight - window.innerHeight),
  };
};

const updateCreatorReveal = () => {
  if (!creatorDesktop || !creatorSection || !creatorNarrative || !creatorInView) {
    root.classList.remove("creator-stage-active");
    return;
  }

  const progress = clamp((window.scrollY - creatorGeometry.top) / creatorGeometry.range);
  const withinStage = window.scrollY >= creatorGeometry.top - Math.min(120, window.innerHeight * 0.12)
    && window.scrollY <= creatorGeometry.top + creatorGeometry.range + 1;
  const exitProgress = smoothstep(0.82, 1, progress);
  const portraitPresence = smoothstep(0, 0.18, progress) * lerp(1, 0.62, exitProgress);
  const namePresence = smoothstep(0.12, 0.3, progress) * lerp(1, 0.72, exitProgress);
  const copyPresence = smoothstep(0.22, 0.38, progress) * lerp(1, 0.72, exitProgress);
  const linksPresence = smoothstep(0.32, 0.44, progress) * lerp(1, 0.72, exitProgress);
  const indexPresence = lerp(1, 0.55, exitProgress);

  root.classList.toggle("creator-stage-active", withinStage);
  creatorSection.style.setProperty("--creator-progress", progress.toFixed(4));
  creatorSection.style.setProperty("--creator-index-presence", indexPresence.toFixed(4));
  creatorSection.style.setProperty("--creator-portrait-presence", portraitPresence.toFixed(4));
  creatorSection.style.setProperty("--creator-name-presence", namePresence.toFixed(4));
  creatorSection.style.setProperty("--creator-copy-presence", copyPresence.toFixed(4));
  creatorSection.style.setProperty("--creator-links-presence", linksPresence.toFixed(4));
  creatorSection.style.setProperty("--creator-camera-y", `${lerp(8, -3, progress).toFixed(2)}px`);
  creatorSection.style.setProperty("--creator-camera-scale", lerp(1.018, 1, progress).toFixed(4));
};

if (creatorSection && creatorNarrative) {
  measureCreator();

  if (motionEnabled && "IntersectionObserver" in window) {
    creatorSection.classList.add("is-motion-ready");

    const creatorObserver = new IntersectionObserver(
      ([entry]) => {
        creatorInView = entry.isIntersecting;
        if (entry.isIntersecting) creatorSection.classList.add("is-revealed");
        scheduleNavigationUpdate();
      },
      { rootMargin: "100% 0px", threshold: 0 },
    );

    creatorObserver.observe(creatorSection);
  } else {
    creatorInView = true;
    creatorSection.classList.add("is-revealed");
  }
}

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
    updateCastingStage();
    updateCreatorReveal();
    navigationFrame = undefined;
  });
};

updateNavigation();
updateCastingStage();
updateCreatorReveal();
const handlePageScroll = () => {
  scheduleNavigationUpdate();
  scheduleCastingSettle();
};

window.addEventListener("scroll", handlePageScroll, { passive: true });
window.addEventListener("resize", () => {
  measureCasting();
  measureCreator();
  scheduleNavigationUpdate();
});
