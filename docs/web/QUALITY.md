# MAVYR Website — Quality & Verification Standard

**Status:** Authoritative  
**Owns:** definition of acceptable evidence, visual QA, accessibility checks, responsive checks, performance gates, review gates

---

# 1. Quality Principle

A frontend change is not complete because the code is valid.

It is complete when evidence shows that it:

- works;
- looks intentional;
- remains MAVYR-specific;
- behaves across required viewports;
- preserves accessibility;
- does not introduce an unacceptable performance regression.

> **Render → inspect → compare → interact → measure → refine.**

---

# 2. Verification Levels

Use the smallest level that fully covers the risk.

## Level A — Structural

For copy/metadata/simple semantic changes:

- HTML validity/sanity
- links/targets
- heading order
- no console-breaking syntax introduced

## Level B — Visual

For layout, typography, color, imagery, responsive styling:

- real-browser render
- desktop screenshot
- mobile screenshot
- visual comparison against approved direction
- overflow/occlusion check

## Level C — Interactive

For motion, sticky scenes, navigation, scene controllers:

- Level B plus
- interaction walkthrough
- scroll entry/exit behavior
- keyboard behavior where applicable
- reduced-motion behavior
- resize/re-entry behavior
- console error check

## Level D — Performance-sensitive

For hero assets, image pipelines, continuous motion, major CSS/JS changes:

- Level C plus
- loading/network inspection
- layout-shift inspection
- performance profile or Lighthouse-equivalent lab evidence
- frame/long-task investigation when motion changed

---

# 3. Canonical Viewport Matrix

Unless a work order specifies otherwise, visually inspect at minimum:

```text
Mobile portrait     390 × 844
Tablet / compact    768 × 1024
Desktop             1440 × 900
Wide desktop        1920 × 1080
```

For every signature scene, inspect at least mobile portrait, desktop, and wide desktop.

Add a narrow mobile state around 320–360 px when text, navigation, or legal copy is at risk.

The exact device model is less important than covering meaningful layout classes.

---

# 4. Required Visual States

Capture/check states that expose behavior, not only the page at load.

For a signature scene, evidence should normally cover:

```text
before / entry
primary composed state
interaction or progress midpoint
exit / handoff
mobile state
reduced-motion state
```

Not every work order needs all six screenshots. The work order must name what matters.

---

# 5. First-Viewport Gate

The hero/threshold passes only when:

- MAVYR is a hero-level signal;
- one composition dominates;
- one real visual anchor carries the atmosphere;
- supporting copy is concise;
- metadata does not compete with the poster read;
- text has reliable contrast over all intended crops;
- a hint of continuation exists without visual clutter;
- mobile framing protects both title and visual subject;
- the first viewport cannot plausibly belong to a generic purple tech portfolio.

---

# 6. Visual System Gate

Check:

## Color

- dark violet-black foundation is consistent;
- luminous violet is selective;
- Maramis imagery retains natural material color;
- no accidental one-note purple wash;
- no decorative neon outlines/glow proliferation;
- contrast remains readable.

## Typography

- no more than two primary voices;
- display scale matches scene importance;
- labels remain readable and do not become faux-HUD clutter;
- line length and line height are appropriate;
- no orphaned single words in hero statements when avoidable;
- legal copy remains legible.

## Surfaces

- no default cardification;
- no nested card-on-card structures;
- borders/radii/blur are purposeful;
- section boundaries come from composition, media, rhythm, and hairlines before containers.

## Imagery

- primary visual is meaningful, not decorative filler;
- crop protects subject and negative space;
- no visibly upscaled asset;
- delivery dimensions are appropriate;
- fallback behavior remains coherent.

---

# 7. Scene Quality Rubric

Score 0–2:

| Axis | 0 | 1 | 2 |
|---|---|---|---|
| MAVYR specificity | generic | partially specific | unmistakable |
| Composition | fragmented | competent | directed |
| Visual anchor | weak/absent | supports scene | carries scene |
| Information hierarchy | competing | understandable | immediate |
| Purple discipline | gimmick/flat | coherent | identity-rich |
| Motion | noisy/flat | functional | meaningful |
| Restraint | cluttered | mixed | intentional |
| Mobile direction | broken | adapted | authored |

Signature scenes require:

- **13/16 minimum**;
- score `2` for MAVYR specificity;
- score `2` for composition;
- score `2` for restraint;
- no accessibility blocker.

This rubric is a decision aid, not a substitute for judgment.

---

# 8. Motion Gate

For every custom motion behavior, verify:

- user input remains immediate;
- scroll is not intercepted;
- scene can be exited naturally;
- motion has a named narrative purpose;
- no continuous work runs while offscreen;
- rapid scrolling does not leave broken intermediate state;
- resizing does not corrupt geometry/state;
- repeated entry does not stack listeners or timers;
- transforms do not cause accidental text blur or clipping;
- reduced-motion presentation is coherent.

A pinned sequence must additionally prove that its duration earns the scroll distance.

---

# 9. Casting / Human Presence Gate

The casting scene passes only when:

- each actor is identifiable quickly;
- identity data is sourced canonically from HTML;
- portrait crop remains strong across target viewports;
- transition pacing does not require excessive wheel events;
- visitor can move past the scene naturally;
- legal disclaimer remains present and readable;
- no interaction implies participation/endorsement;
- no portrait is eagerly loaded merely because it appears in the sequence later.

---

# 10. Living Consequence Gate

The signature causal scene passes only when a first-time visitor can understand the idea:

```text
something changes
→ someone detects/learns
→ intention/action changes
→ later reality changes
→ the consequence persists
```

without relying on animation alone.

Motion may add:

- propagation
- focus
- temporal sequencing
- relationship between steps

Motion may not obscure the canonical causal order.

---

# 11. Accessibility Gate

At minimum, verify relevant changes against:

- semantic heading/landmark order
- keyboard reachability
- visible focus
- skip navigation
- meaningful link text
- alt text / decorative-image handling
- text contrast
- zoom/readability
- no essential hover-only content
- reduced motion
- no incoherent DOM/visual order mismatch

For motion-heavy work:

- large pan/zoom/parallax is disabled or substantially reduced when `prefers-reduced-motion: reduce` applies;
- static hierarchy still communicates the scene.

For sticky/fixed layers:

- focused controls/content are not obscured by the header or overlays.

---

# 12. Responsive Gate

At every required viewport check:

- no horizontal overflow;
- no clipped heading or legal text;
- no accidental overlap;
- no fixed layer obscures interaction/content;
- image crop remains intentional;
- sticky scene has safe entry and exit;
- navigation remains reachable;
- touch targets remain usable;
- content order still makes sense;
- scene remains recognizably the same narrative beat.

Do not accept “desktop but smaller” for signature scenes.

---

# 13. Performance Gates

## 13.1 User-centric release targets

Target Core Web Vitals at the 75th percentile:

```text
LCP <= 2.5 s
INP <= 200 ms
CLS <= 0.1
```

Treat these as release targets, not claims about current production data until real field data exists.

## 13.2 Project runtime rules

- target 60 FPS for primary motion on representative desktop hardware;
- sustained motion below roughly 50 FPS requires investigation before release;
- offscreen scenes must not run continuous RAF work;
- avoid long main-thread tasks during scroll/interaction;
- reserve space for media to prevent layout shift;
- only the actual likely hero/LCP asset receives high fetch priority;
- deep-page portraits/images remain lazy by default;
- photographic/painted delivery assets should normally use modern compressed formats rather than multi-megabyte PNGs.

## 13.3 Asset budget procedure

Do not invent arbitrary byte budgets before a baseline exists.

Phase 0 records:

- initial transfer
- HTML/CSS/JS transfer
- image transfer
- current LCP resource
- current lab LCP/CLS/interaction observations

Phase 2 then locks explicit delivery budgets based on the visual plan and baseline.

---

# 14. Browser Console / Network Gate

Before completion of Level C/D work:

- no new uncaught exceptions;
- no repeated warnings caused by the change;
- no 404/failed production assets;
- no duplicate event/listener behavior visible after repeated navigation;
- no unexpectedly eager offscreen media;
- no render-blocking dependency introduced without justification.

---

# 15. Content Integrity Gate

Verify that implementation did not accidentally change product truth.

Never introduce:

- invented release dates
- invented scope
- invented cast attachment
- invented publisher/platform claims
- invented development milestones
- altered legal disclaimers without explicit direction

When design work suggests copy changes, keep them inside the current work order or record them for review.

---

# 16. Visual Reference Protocol

When approved reference images/screenshots exist:

1. keep them in a clearly named non-production reference location or attach them to the Codex task;
2. state what each reference controls: composition, color, type, crop, motion, or mood;
3. do not infer that every visible detail should be copied;
4. render the implementation at matching or comparable viewport sizes;
5. compare side-by-side;
6. fix the largest composition/hierarchy mismatch before micro-polish.

References are guardrails, not cloning targets.

---

# 17. Independent Review Gate

Before a phase is marked complete:

- run a fresh review against the actual diff;
- prioritize correctness, regressions, accessibility, performance, and architectural drift;
- use custom review criteria from this document when `/review` or equivalent tooling is available;
- resolve or explicitly document material findings.

The reviewer should not change code during the initial review pass.

---

# 18. Evidence Package

A completed signature work order should be able to produce:

```text
Diff / files changed
Desktop screenshot(s)
Mobile screenshot(s)
Reduced-motion evidence when relevant
Interaction notes
Console/network status
Performance notes when relevant
Known limitations
```

Do not manufacture evidence. If a tool was unavailable, state that limitation and perform the strongest available fallback check.

---

# 19. Release Blockers

Any of the following blocks completion:

- broken navigation
- hidden essential content without JS
- inaccessible keyboard path for changed controls
- severe overflow/overlap at required viewports
- scroll trap or wheel hijack
- unreadable text over imagery
- missing/incorrect casting disclaimer
- new uncaught runtime errors
- broken production assets
- obvious long-running offscreen animation work
- signature scene scoring below the required rubric threshold
- material performance regression with no accepted rationale

---

# 20. Quality Definition of Done

Quality is proven when the result is:

> **correct → coherent → visually directed → responsive → accessible → performant → reviewable**

A screenshot should be strong. The page in motion should be stronger. The site should remain easy to navigate and maintain after the spectacle is removed.
