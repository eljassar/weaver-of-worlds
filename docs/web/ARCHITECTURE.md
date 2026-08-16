# MAVYR Website — Technical Architecture

**Status:** Authoritative  
**Owns:** runtime boundaries, state ownership, file/module structure, dependency policy, loading strategy, failure behavior  
**Does not own:** art direction or active-task scope

---

# 1. Architecture Decision

Keep MAVYR as a **static, progressively enhanced website** unless measured requirements prove that the current platform is insufficient.

Canonical dependency direction:

```text
Semantic HTML
    ↓
CSS visual system
    ↓
Progressive JavaScript enhancement
    ↓
Browser platform APIs
    ↓
GitHub Pages
```

The website must not require JavaScript for essential reading order or core project meaning.

---

# 2. Why This Architecture

The product is a one-page cinematic project experience, not an application with server state, authenticated workflows, or complex client-side data synchronization.

The current stack already provides:

- fast static delivery
- low operational complexity
- direct semantic control
- simple deployment
- enough browser capability for sophisticated visual work

A framework migration would currently increase moving parts before solving a demonstrated product problem.

---

# 3. Current-State Risks

The current implementation is credible, but several patterns must be corrected as cinematic scope increases:

1. one large CSS file can become difficult to reason about;
2. one large JS file currently owns multiple bespoke scene behaviors;
3. hard-coded camera/scroll choreography can create section-specific mini-engines;
4. content metadata can drift when duplicated in HTML and JS;
5. large raster assets can dominate transfer cost;
6. visual quality cannot be verified reliably from source review alone.

The target architecture addresses these risks without turning the site into a framework project.

---

# 4. Target Repository Shape

Evolve toward this structure **only as phases earn the split**:

```text
/
├── AGENTS.md
├── index.html
├── README.md
├── .nojekyll
├── robots.txt
├── sitemap.xml
│
├── docs/
│   └── web/
│       ├── VISION.md
│       ├── ARCHITECTURE.md
│       ├── QUALITY.md
│       ├── WORK_ORDER.md
│       ├── PHASE_PLAN.md
│       ├── BENCHMARK.md
│       └── decisions/
│           └── README.md
│
├── .agents/
│   └── skills/
│       ├── mavyr-web-scene/
│       │   └── SKILL.md
│       └── mavyr-web-qa/
│           └── SKILL.md
│
└── assets/
    ├── css/
    │   ├── tokens.css
    │   ├── base.css
    │   ├── layout.css
    │   ├── scenes.css
    │   └── motion.css
    │
    ├── js/
    │   ├── site.js
    │   ├── runtime/
    │   │   ├── scheduler.js
    │   │   ├── viewport.js
    │   │   └── preferences.js
    │   └── scenes/
    │       ├── causal-scene.js
    │       ├── casting-scene.js
    │       └── creator-scene.js
    │
    └── images/
        ├── identity/
        ├── world/
        ├── codex/
        ├── territory/
        ├── casting/
        ├── creator/
        └── texture/
```

Do not create empty architecture for future work. Split a file when ownership or verification clearly improves.

---

# 5. HTML Ownership

`index.html` owns:

- document structure
- semantic headings
- canonical copy
- actor/person names
- legal disclaimers
- links
- meaningful image alternatives
- default reading order
- scene IDs
- static fallbacks

Use semantic sectioning before JavaScript abstractions.

A scene may expose presentation metadata using `data-*` attributes when the metadata belongs to the element and is not domain content.

Example:

```html
<section
  id="living-consequence"
  data-scene="causal"
  data-motion="propagate"
>
  ...
</section>
```

Do not serialize the entire page into JavaScript configuration.

---

# 6. CSS Architecture

When the current stylesheet becomes difficult to change safely, split by responsibility.

## 6.1 Cascade order

Use explicit cascade layers after the split:

```css
@layer reset, tokens, base, layout, components, scenes, motion, utilities;
```

Do not create a large utility framework. The `utilities` layer should remain tiny.

## 6.2 `tokens.css`

Owns design primitives only:

- color
- typography roles
- spacing
- max widths
- z-index tiers
- border/hairline roles
- motion durations/easing
- focus styles

Prefer semantic tokens over scene-specific names.

Example:

```css
--color-bg-canvas
--color-bg-depth
--color-text-primary
--color-text-muted
--color-accent-causal
--color-accent-causal-soft
--color-material-bronze
--duration-response
--duration-reveal
--ease-cinematic
```

## 6.3 `base.css`

Owns:

- reset/normalization
- body/document defaults
- links
- focus
- selection
- typography primitives
- accessibility helpers

## 6.4 `layout.css`

Owns reusable page geometry:

- canvas widths
- gutters
- section spacing
- editorial grids
- full-bleed primitives
- responsive composition primitives

## 6.5 `scenes.css`

Owns static scene composition and scene-specific responsive layout.

Avoid putting continuous runtime mechanics here unless they are expressed through CSS variables set by scene controllers.

## 6.6 `motion.css`

Owns shared motion vocabulary:

- appear
- withdraw
- travel
- transform
- propagate
- cut
- reduced-motion overrides

The motion layer should make scene behavior more consistent, not create an animation framework.

---

# 7. JavaScript Runtime Architecture

JavaScript owns enhancement, not core content.

## 7.1 `site.js`

Responsibilities:

- boot runtime
- read motion/user preferences
- register scenes
- initialize global navigation enhancement
- start/stop shared scheduler
- handle resize lifecycle at the top level

It should not contain scene-specific choreography after modularization.

## 7.2 Scene controller contract

A scene controller should expose a narrow lifecycle where needed:

```js
export function createScene(root, context) {
  return {
    measure() {},
    enter() {},
    update(frame) {},
    leave() {},
    destroy() {}
  };
}
```

Not every scene needs every method. Do not create controllers for static sections.

## 7.3 Shared runtime context

A shared context may provide:

```text
scheduler
viewport metrics
reduced-motion state
coarse/fine pointer capability
visibility state
```

Do not use a global service container. Pass only what a scene requires.

---

# 8. Scheduler & Frame Discipline

Use one requestAnimationFrame scheduler for continuous active visual work.

Rules:

1. inactive/offscreen scenes do not update;
2. scroll listeners only schedule work; they do not perform expensive scene rendering directly;
3. batch layout reads before writes;
4. cached geometry is invalidated on meaningful resize/content change;
5. avoid repeatedly calling `getBoundingClientRect()` across many elements every frame;
6. do not allocate unnecessary arrays/objects in hot loops;
7. stop the scheduler when no registered active scene needs continuous updates.

A scene that can be expressed with CSS + IntersectionObserver should not join the continuous scheduler.

---

# 9. Scene Activation

Use `IntersectionObserver` for:

- activation near viewport
- reveal lifecycle
- pausing offscreen work
- lazy enhancement

Use generous root margins only when pre-measurement/preloading materially prevents visible latency.

Do not observe hundreds of decorative nodes individually when a scene-level observer is enough.

---

# 10. Scroll Policy

Native scrolling is canonical.

Allowed:

- sticky composition
- locally pinned visual planes
- progress-derived transforms
- selective scroll-linked narrative sequences

Disallowed by default:

- `preventDefault()` on wheel/touch for cinematic navigation
- synthetic smooth-scrolling engines
- forced snapping after ordinary scroll
- one wheel event = one scene transition behavior
- multi-screen empty distance whose only purpose is animation duration

Any sticky/pinned scene must document:

```text
why pinning is necessary
expected scroll distance
mobile alternative
reduced-motion alternative
escape behavior
```

---

# 11. State Ownership

State should live at the narrowest responsible boundary.

Examples:

- navigation active section → navigation module
- causal propagation progress → causal scene controller
- actor visual index → casting scene controller, derived from DOM order
- user motion preference → runtime preference service

Avoid a site-wide mutable object containing every scene's state.

Scene state must be reconstructable from document/runtime state after resize or re-entry when practical.

---

# 12. Image Pipeline

Source/master images are not automatically delivery images.

For production raster artwork:

```text
Master source
   ↓
art-directed crop(s)
   ↓
responsive dimensions
   ↓
AVIF preferred
   ↓
WebP fallback
   ↓
PNG/JPEG fallback only when justified
```

Use:

- `<picture>` for art-directed source changes
- `srcset`/`sizes` for density/width selection
- intrinsic `width`/`height` or `aspect-ratio`
- `decoding="async"` where appropriate
- `loading="lazy"` for offscreen imagery
- `fetchpriority="high"` only for the actual likely LCP image

Rules:

- normally one high-priority visual on initial load;
- do not eager-load deep casting portraits;
- never ship a multi-megabyte PNG as the default photographic delivery asset without documented necessity;
- protect subject-safe crops on mobile.

---

# 13. Font Strategy

Typography quality matters, but webfont cost must remain controlled.

Rules:

- two primary families maximum unless explicitly approved;
- subset/limit weights and styles;
- prefer WOFF2 for owned/licensed webfonts;
- preload only the font files required for the initial viewport;
- use appropriate fallback metrics if layout shift becomes visible;
- never ship font files without proper licensing.

---

# 14. Video & Audio Policy

## Video

Do not use autoplay video by default.

A video must justify:

- stronger narrative value than a still image
- transfer/decode cost
- mobile behavior
- reduced-motion behavior
- poster fallback
- data/battery impact

## Audio

No autoplay audio.

If audio is introduced in a later phase:

- explicit opt-in
- obvious mute control
- persistence only when appropriate
- no essential information carried only by sound

---

# 15. Accessibility Architecture

Accessibility is a structural requirement.

Preserve:

- logical DOM order
- semantic landmarks/headings
- keyboard navigation
- visible focus
- skip navigation
- sufficient contrast
- meaningful alt text
- readable legal text
- no hover-only essential information
- `prefers-reduced-motion`

Visual DOM reordering should not create a different or confusing keyboard/screen-reader sequence.

Reduced motion must use a deliberately composed alternate state, not merely `animation-duration: 0.01ms` everywhere.

---

# 16. Responsive Architecture

Use layout systems rather than device-specific coordinate piles.

Prefer:

- grid/flex
- `min()` / `max()` / `clamp()` for spacing and bounds
- `aspect-ratio`
- container-aware layout when it clearly improves scene reuse
- content-driven breakpoints

Avoid:

- dozens of breakpoint patches
- desktop absolute positioning simply scaled down
- viewport-width font scaling without readable bounds

For signature scenes, define explicit desktop, compact-desktop/tablet, and mobile composition decisions.

---

# 17. Failure Behavior

The site must fail soft.

If JavaScript fails:

- all essential content remains readable.

If a scene asset fails:

- text remains readable;
- layout does not collapse;
- fallback background/placeholder is intentional and quiet.

If an optional advanced browser API is unsupported:

- use the static/basic interaction state;
- never block the page.

If a scene controller throws:

- isolate the failure when practical;
- do not prevent unrelated content from working.

---

# 18. Dependency Policy

Default: **zero new production dependencies**.

A new dependency requires all of:

1. a real product requirement;
2. evidence native browser APIs are materially worse;
3. compatibility assessment;
4. bundle/transfer cost assessment;
5. maintenance/security assessment;
6. explicit approval in a work order or architecture decision.

Do not add a library to solve a problem already handled well by a few readable lines of platform code.

---

# 19. Architecture Decision Records

Use a lightweight ADR only for expensive-to-reverse choices, such as:

- framework migration
- runtime animation library
- WebGL/Three.js introduction
- deployment platform change
- custom build pipeline
- major content/data ownership change

Do not create ADRs for ordinary CSS or scene-layout decisions.

Template:

```text
Decision
Context
Options considered
Chosen option
Why
Consequences
Revisit trigger
```

---

# 20. Browser Strategy

Primary quality targets:

- current Chromium
- current Firefox
- current Safari/WebKit behavior where practical for public compatibility

The site may progressively enhance newer capabilities, but core content/interaction must not depend on one experimental browser feature.

Feature-detect optional APIs.

---

# 21. Verification Boundary

Source inspection is necessary but insufficient for frontend work.

Any change affecting layout, motion, media, or interaction must be rendered in a real browser and checked using `docs/web/QUALITY.md`.

Visual verification should include screenshots at required viewports and interaction states. Use the `$mavyr-web-qa` skill when available.

---

# 22. Architecture Completion Standard

Architecture remains healthy when:

- HTML is the content source of truth;
- CSS owns composition and visual system;
- JavaScript owns only progressive behavior;
- scene controllers have narrow ownership;
- one scheduler coordinates continuous work;
- offscreen scenes are quiet;
- assets are responsive and intentionally loaded;
- no framework/dependency is present without earned value;
- desktop/mobile/reduced-motion behavior is explicit;
- visual verification is part of completion rather than an afterthought.
