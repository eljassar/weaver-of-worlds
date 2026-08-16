# MAVYR Website — Codex Operating Contract

**Status:** Authoritative  
**Scope:** `eljassar/weaver-of-worlds`  
**Purpose:** Give Codex durable, minimal, high-signal instructions for building the MAVYR website without visual, architectural, or scope drift.

---

## 1. Mission

Build MAVYR's public website as a **cinematic, minimal, elegant, dark-violet web experience** that communicates the project through world, people, causality, material culture, and production credibility.

The site must feel authored for MAVYR rather than generated from a generic game/portfolio template.

The governing product idea is:

> **Small territory. High density. Deep consequence.**

The governing website idea is:

> **A controlled aperture into Maramis, directed with cinematic restraint.**

---

## 2. Authority & Conflict Resolution

Obey explicit Director/user instructions first. Within the repository, use this authority order:

1. `docs/web/VISION.md` — product, art-direction, narrative, and visual truth
2. `docs/web/ARCHITECTURE.md` — technical boundaries and ownership
3. `docs/web/QUALITY.md` — acceptance gates and verification truth
4. `docs/web/WORK_ORDER.md` — current bounded task; may not override 1–3
5. `docs/web/PHASE_PLAN.md` — sequencing and phase boundaries
6. `docs/web/BENCHMARK.md` — reference evidence; never a cloning mandate
7. current implementation — evidence of present state, not product truth

If two instructions conflict, stop the lower-authority interpretation and follow the higher one. Do not silently invent a compromise.

---

## 3. Required Reading Protocol

Before changing code:

1. read this file;
2. read `docs/web/WORK_ORDER.md`;
3. read every document listed under its `Required Reads`;
4. inspect the relevant implementation and assets;
5. inspect existing behavior before proposing replacement;
6. state any assumption that materially affects architecture, visual direction, or scope.

Do not load every document reflexively when the active task does not require it. Keep working context high-signal.

---

## 4. Repository Reality

Current production architecture is intentionally lightweight:

```text
index.html
assets/
  css/site.css
  js/site.js
  images/
.nojekyll
README.md
robots.txt
sitemap.xml
```

Current facts:

- static GitHub Pages deployment
- semantic single-page HTML
- no framework
- no bundler
- no required build step
- CSS token system already exists
- reduced-motion support already exists
- progressive reveal and bespoke scroll-linked scenes already exist

Preserve this simplicity unless a measured requirement proves a change is necessary.

---

## 5. Non-Negotiable Product Laws

### 5.1 MAVYR before spectacle

Every visible or interactive decision must strengthen at least one of:

- MAVYR identity
- Maramis world specificity
- living consequence
- human presence
- craft
- production credibility

If an effect is impressive but could belong to another dark website, remove or redesign it.

### 5.2 Dark violet is identity, not a shortcut

The website is intentionally dark-mode and purple-led.

Use dark violet-black as the environmental substrate and restrained luminous violet as causal/interactive energy. Preserve natural Maramis materials—earth, bronze, ash, stone, cloth, firelight, moonlight—inside imagery and world evidence.

Do not recolor the entire world purple. Do not turn the interface into neon cyberpunk.

### 5.3 Cinematic does not mean slow

Cinema comes from:

- framing
- hierarchy
- pacing
- contrast
- reveal
- cut
- continuity
- selective motion

Never manufacture “cinema” by trapping the user in long scroll distances, forced delays, or scroll hijacking.

### 5.4 Real visual evidence beats decorative effects

Prefer intentional world art, portraits, codex drawings, maps, material studies, and meaningful system graphics over gradients, particles, glass, glow, and abstract decoration.

### 5.5 Semantic HTML is canonical

Essential content and reading order belong in HTML. JavaScript enhances presentation and interaction; it must not become the only owner of essential content.

### 5.6 One source of truth

Do not duplicate canonical content in HTML and JavaScript when avoidable. Runtime metadata may describe presentation, never duplicate domain content unnecessarily.

### 5.7 Progressive enhancement is mandatory

The page must remain coherent with:

- JavaScript unavailable
- reduced motion enabled
- narrow/mobile viewport
- slow network
- low-power device
- failed optional asset

### 5.8 Performance is art direction

Dropped frames, delayed input, heavy initial transfer, layout shift, and late-loading visual anchors reduce perceived quality and are product defects.

### 5.9 No unnecessary platform migration

Do not introduce React, Next.js, Vue, Svelte, Tailwind, Three.js, WebGL, a CMS, a bundler, or another dependency merely to appear sophisticated.

A dependency must solve a demonstrated problem better than the native stack and must be approved by the current work order or architecture decision.

### 5.10 Mobile is an alternate cut, not a compressed desktop

Preserve narrative priority while recomposing layout, crop, timing, and motion for smaller screens.

---

## 6. Visual Thesis

Use this sentence as the default visual check:

> **Obsidian-violet editorial cinema: near-black architectural space, controlled violet causality light, natural Maramis materiality, monumental typography, sparse technical notation, and a few precise motions that make consequence feel alive.**

For the complete system, read `docs/web/VISION.md`.

---

## 7. Engineering Doctrine

Prefer:

- semantic HTML
- modern CSS and custom properties
- CSS cascade layers when the stylesheet split occurs
- native ES modules only when modularization earns them
- `IntersectionObserver` for activation
- `ResizeObserver` only when geometry ownership requires it
- one requestAnimationFrame scheduler for active continuous scene work
- transform/opacity for high-frequency animation
- feature detection
- responsive image markup (`srcset`, `sizes`, intrinsic dimensions)
- AVIF/WebP delivery for photographic/painted raster assets where practical
- progressive enhancement and deterministic fallbacks

Avoid:

- per-element scroll listeners
- wheel/touch interception
- layout reads/writes interleaved each frame
- offscreen requestAnimationFrame work
- global mutable scene state without ownership
- repeated ad-hoc animation engines
- timeout chains used as choreography
- magic scroll distances without a documented narrative reason
- abstractions created for hypothetical future pages

---

## 8. Scene Contract

A cinematic section becomes a `scene` only when it has a written contract:

```text
Scene ID
Purpose
Narrative beat
Primary visual subject
Primary takeaway
Composition
Entry
Hold / interaction
Exit
Mobile cut
Reduced-motion cut
Loading / failure fallback
Performance risk
Acceptance evidence
```

If the contract is not clear, do not implement custom motion.

For scene implementation, use the repo skill:

`$mavyr-web-scene`

---

## 9. Motion Vocabulary

Use only the shared families unless the work order explicitly adds one:

- **Appear** — reveal into readable state
- **Withdraw** — remove non-essential information
- **Travel** — meaningful change of viewpoint
- **Transform** — state changes because meaning changes
- **Propagate** — causality travels through connected elements
- **Cut** — deliberate near-instant compositional punctuation

Motion must preserve immediate user control.

---

## 10. Asset Families

Every production visual belongs to one family:

```text
World Master
Human Study
Maramis Codex
Territory / Map
Causal / System Graphic
Material / Texture
Identity Mark
```

Before shipping an asset, establish:

- purpose
- owning scene
- source/master file
- desktop crop
- mobile crop
- intrinsic dimensions/aspect ratio
- delivery formats
- responsive sizes
- fallback
- rights/attribution state when applicable

Do not use filler imagery to occupy space.

---

## 11. Codex Execution Protocol

For non-trivial implementation work:

### A. Inspect

- inspect relevant files and rendered behavior;
- identify the current source of truth;
- record the actual problem, not a guessed one.

### B. Plan

- restate the active work-order objective;
- identify files likely to change;
- identify risks and verification needed;
- keep the plan bounded to the current work order.

### C. Implement

- make the smallest coherent change;
- preserve unrelated behavior;
- do not refactor outside scope unless required for correctness.

### D. Verify

- run deterministic checks;
- render the page in a real browser when visual behavior changed;
- compare desktop and mobile screenshots;
- test keyboard and reduced motion when relevant;
- inspect console errors and asset failures;
- measure performance when assets, layout, or continuous motion changed.

### E. Review

Before declaring a phase complete, perform a review pass against `docs/web/QUALITY.md`. Use `/review` or an equivalent independent review when available.

### F. Report

Return the completion report defined in Section 15.

---

## 12. Subagent Policy

Use subagents when independent read-heavy work materially improves quality, for example:

- repository exploration
- accessibility audit
- performance analysis
- visual QA across viewports
- code review
- asset inventory

Do not use parallel agents to edit the same scene/files concurrently. Parallel write-heavy work increases merge and consistency risk for this small site.

The main agent owns final design coherence and integration.

---

## 13. Visual Verification Law

A visual change is not verified from source code alone.

For meaningful frontend changes:

1. render in a real browser;
2. capture or inspect at minimum the viewport states required by `QUALITY.md`;
3. compare against the scene contract and any approved visual references;
4. check for overflow, occlusion, broken crops, unreadable text, and accidental dead space;
5. iterate before declaring completion.

Use `$mavyr-web-qa` when available.

---

## 14. Phase & Work-Order Discipline

`PHASE_PLAN.md` defines sequence. `WORK_ORDER.md` defines the only active implementation objective.

Codex may solve the active work order exceptionally well. Codex may not prematurely implement later phases.

If a valuable future improvement appears during current work:

- record it under `Deferred / Next Phase` in the completion report;
- do not implement it unless required by the active objective.

---

## 15. Required Completion Report

Every substantive work order ends with:

```text
Work Order
Outcome
Files Changed
Visual / UX Decisions
Architecture Decisions
Verification Performed
Browser / Viewport Evidence
Performance Impact
Accessibility Impact
Known Limitations
Deferred / Next Phase
```

Never claim a test, browser check, metric, screenshot comparison, or performance result that was not actually performed.

---

## 16. Prohibited Shortcuts

Do not:

- replace composition with generic cards
- animate every heading
- create “futurism” through HUD clutter
- cover the page with purple gradients or glows
- use glassmorphism as the default surface language
- add decorative particles as the main atmosphere
- scroll-jack
- add a loading screen to hide an overweight page
- convert semantic content into canvas/WebGL
- imply actor attachment, participation, endorsement, or agreement
- remove legal casting disclaimers
- write invented production claims
- sacrifice mobile/accessibility for desktop spectacle
- copy a benchmark site's layout or signature interaction

---

## 17. Definition of Done

A change is done only when:

- the active work-order acceptance criteria are satisfied;
- the visual result strengthens MAVYR's identity;
- architecture remains coherent;
- required browser/viewport checks pass;
- important accessibility behavior remains intact;
- no obvious performance regression was introduced;
- no unrelated scope was changed;
- another competent engineer or Codex session can continue from the documentation without reconstructing intent.
