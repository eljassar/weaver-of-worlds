# MAVYR Website — Cinematic Transformation Phase Plan

**Status:** Authoritative roadmap  
**Owns:** development sequence and phase gates  
**Does not own:** active task scope; that belongs to `WORK_ORDER.md`

---

# Development Law

Build the transformation as **independently stable evidence-producing phases**.

> **Understand → Direct → Prepare → Build → Verify → Refine → Release**

A phase may contain multiple work orders. Only one work order should normally be active for implementation at a time.

Do not start the next phase until the current phase gate is satisfied or an explicit Director decision accepts the remaining risk.

---

# Phase 0 — Governance & Baseline Lock

## Objective

Create a trustworthy baseline before changing the experience.

## Scope

- install/commit the web foundation documents
- inventory current page structure, assets, CSS, JS, and bespoke scenes
- capture baseline screenshots at required viewports
- record current mobile and reduced-motion behavior
- identify current LCP/priority assets
- record a lab performance baseline where tooling is available
- record current known defects and friction, especially scroll-heavy scenes
- identify duplicated sources of truth

## Exclusions

- redesign
- new art
- visual-system remaster
- major refactor
- new dependencies

## Verification

- site still renders unchanged
- baseline evidence is reproducible
- current limitations are explicit

## Gate

Phase passes when future changes can be compared against a documented, rendered baseline.

---

# Phase 1 — Narrative Edit & Scene Map

## Objective

Lock what the visitor experiences before writing more cinematic code.

## Scope

For every target scene define:

```text
Scene ID
Purpose
Narrative beat
Primary takeaway
Primary visual subject
Copy to preserve / cut / move
Composition thesis
Interaction thesis
Entry / hold / exit
Mobile cut
Reduced-motion cut
Required assets
Acceptance evidence
```

Confirm the target nine-scene sequence or explicitly merge/remove scenes.

## Exclusions

- implementation-heavy animation
- final asset compression pipeline
- CSS architecture refactor

## Quality Requirements

- every scene has one job
- first viewport reads as one poster composition
- Living Consequence is the main proprietary interaction
- no chapter exists only because the current HTML already has it

## Gate

Phase passes when Codex can implement each scene without inventing narrative intent.

---

# Phase 2 — Asset Direction & Delivery Pipeline

## Objective

Ensure the website has the visual evidence required to become cinematic.

## Scope

Create/lock the asset manifest for:

- World Master
- Human Study
- Maramis Codex
- Territory/Map
- Causal Weave
- Identity Mark
- material textures where justified

For each asset define:

```text
master/source
scene owner
desktop crop
mobile crop
aspect ratio
responsive widths
formats
fallback
loading priority
rights/attribution status
```

Convert production delivery variants to suitable formats.

## Exclusions

- decorative filler asset generation
- 3D/WebGL pipeline
- autoplay video system

## Quality Requirements

- imagery is world-specific
- no stretched/upscaled delivery assets
- offscreen assets are not eager-loaded by default
- initial visual priority is explicit

## Gate

Phase passes when every major scene has approved visual evidence or an intentional text-only composition.

---

# Phase 3 — Visual System Remaster

## Objective

Make static screenshots unmistakably MAVYR before adding advanced motion.

## Scope

- dark/obsidian-violet token system
- typography hierarchy
- full-bleed composition primitives
- spacing/rhythm
- hairlines/surfaces
- image treatment
- responsive layout foundations
- hero/threshold static composition
- static scene composition remaster
- split CSS by responsibility if earned

## Exclusions

- complex scroll-linked choreography
- WebGL
- sound
- framework migration

## Quality Requirements

- dark purple aesthetic is clear but disciplined
- Maramis imagery keeps natural material color
- first viewport passes `QUALITY.md`
- default cardification is removed
- mobile has an intentional static composition

## Gate

Phase passes when key desktop/mobile screenshots are visually strong with JavaScript motion disabled.

---

# Phase 4 — Motion Runtime & Interaction Grammar

## Objective

Create one coherent, maintainable motion system before multiplying custom scenes.

## Scope

- shared preference/viewport context
- one RAF scheduler for continuous active work
- scene lifecycle pattern
- shared motion vocabulary
- observer-based activation
- geometry measurement discipline
- resize/re-entry behavior
- reduced-motion mechanics
- migrate existing bespoke scene logic only where necessary

## Exclusions

- implementing every signature scene
- animation-library dependency unless explicitly approved
- wheel interception/smooth-scroll engine

## Quality Requirements

- offscreen work is quiet
- one scene cannot corrupt another
- user input remains immediate
- reduced motion is deliberate
- no duplicate domain data introduced

## Gate

Phase passes when one representative scene proves the runtime contract across desktop/mobile/reduced motion without regression.

---

# Phase 5 — Signature Cinematic Scenes

## Objective

Build the small number of interactions that make the website memorable.

## Recommended priority

1. **Threshold / World entrance**
2. **Living Consequence / Causal Weave**
3. **Maramis / Territory evidence transition**
4. **Human Presence / Casting**
5. **Creator / Exit**

Not every scene needs custom continuous motion.

## Scope

Each scene is implemented from a locked scene contract using `$mavyr-web-scene`.

## Exclusions

- animation for every section
- scroll-jacking
- long pinned sequences without evidence
- new visual language per scene

## Quality Requirements

- every signature scene passes the scene rubric
- Living Consequence remains understandable without animation
- casting no longer behaves like a scroll tax
- mobile and reduced-motion versions are authored cuts

## Gate

Phase passes when signature scenes are memorable, interruptible, maintainable, and verified in a real browser.

---

# Phase 6 — Responsive, Accessibility & Performance Gate

## Objective

Prove that the cinematic system survives real constraints.

## Scope

- viewport matrix audit
- keyboard/focus audit
- reduced-motion audit
- image loading/priorities
- CLS stabilization
- continuous animation profiling
- Core Web Vitals lab checks and available field data
- Firefox/Chromium/WebKit compatibility checks as practical
- failure behavior for missing JS/assets

## Exclusions

- new major scenes
- new art direction
- unrelated copy expansion

## Quality Requirements

Follow `QUALITY.md` without exception.

## Gate

Phase passes when no release blocker remains and performance/accessibility issues are either fixed or explicitly accepted by Director decision.

---

# Phase 7 — Editorial & Interaction Polish

## Objective

Remove everything that still feels generated, inconsistent, overworked, or unfinished.

## Scope

- spacing/crop precision
- typography refinements
- transition handoffs
- navigation behavior
- legal/footer presentation
- hover/focus states
- copy tightening where approved
- micro-motion consistency
- image decoding/reveal polish
- dead-code/obsolete-style cleanup tied to the transformed experience

## Exclusions

- new platform architecture
- new feature categories
- speculative systems

## Quality Requirements

- no generic filler patterns
- no duplicated visual language
- no ornamental animation without purpose
- no obvious mobile afterthoughts

## Gate

Phase passes when the remaining work is release validation, not design invention.

---

# Phase 8 — Release Gate

## Objective

Ship the transformed site confidently.

## Scope

- final real-browser walkthrough
- full link/navigation check
- SEO/social metadata check
- production asset check
- accessibility regression pass
- performance regression pass
- cross-browser sanity pass
- final `/review` or independent diff review
- production deployment
- post-deploy smoke test

## Exclusions

- redesign
- new signature interaction
- framework migration

## Gate

Release only when:

- all required quality evidence exists;
- no critical blocker remains;
- production deployment matches the verified build;
- known limitations are documented.

---

# Work-Order Sizing Rule

A work order should usually be small enough that one Codex session can:

```text
inspect
plan
implement
render
verify
review
report
```

without mixing unrelated concerns.

Good work orders:

- remaster Threshold static composition
- build responsive World Master `<picture>` delivery
- replace casting scroll pacing while preserving visual design
- implement shared scheduler and migrate one scene
- implement reduced-motion cut for Causal Weave

Bad work orders:

- “make the whole website cinematic”
- “refactor CSS, rebuild animations, optimize images, rewrite copy”
- “make it world-class” without acceptance evidence

---

# Phase Completion Report

At a phase boundary, synthesize completed work orders into:

```text
Phase Outcome
Evidence
Architecture Changes
Visual Decisions Locked
Performance / Accessibility Result
Known Limitations
Deferred Work
Director Decisions Needed
Next Phase Entry Conditions
```
