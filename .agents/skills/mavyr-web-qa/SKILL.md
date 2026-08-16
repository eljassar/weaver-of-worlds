---
name: mavyr-web-qa
description: Use after MAVYR website changes that affect layout, visual style, imagery, motion, sticky behavior, navigation, responsive behavior, or performance. Performs browser-based visual QA and evidence-driven regression checks. Do not use as a substitute for implementation design.
---

# MAVYR Web Visual QA Workflow

Verify rendered behavior against the product and quality contracts.

## Required Inputs

Read:

1. `/AGENTS.md`
2. `/docs/web/WORK_ORDER.md`
3. `/docs/web/QUALITY.md`
4. relevant scene sections from `/docs/web/VISION.md`

Inspect the actual diff before browser testing.

## Step 1 — Determine Verification Level

Choose Level A/B/C/D from `QUALITY.md` based on risk.

Do not under-test motion or loading changes.

## Step 2 — Run the Real Site

Use the repository's existing local-server workflow if one exists.

If the site requires HTTP semantics for modules/assets, serve it locally with the simplest available static server. Do not introduce a production dependency merely for QA.

## Step 3 — Browser Matrix

Unless the work order narrows scope, inspect:

```text
390 × 844
768 × 1024
1440 × 900
1920 × 1080
```

For a signature scene always include mobile and desktop.

Use Playwright/browser computer-use tooling when available.

## Step 4 — Screenshot Evidence

Capture/inspect the states that expose the change:

- entry/before
- primary composition
- interaction midpoint if relevant
- exit/handoff if relevant
- mobile
- reduced motion if relevant

Compare against approved references by composition and hierarchy, not pixel cloning unless a work order explicitly requires parity.

## Step 5 — Visual Defect Sweep

Check:

- horizontal overflow
- clipped copy
- image crop
- unreadable contrast
- overlap/occlusion
- broken sticky boundaries
- header collisions
- legal text
- focus visibility
- accidental cardification
- uncontrolled glow/gradient noise
- dead space created by scroll choreography

## Step 6 — Interaction Sweep

For interactive scenes:

- scroll slowly
- scroll rapidly
- reverse direction
- resize/re-enter
- keyboard through changed controls
- confirm no wheel interception
- confirm scene can be escaped naturally
- confirm offscreen state stops continuous work

## Step 7 — Reduced Motion

Emulate `prefers-reduced-motion: reduce`.

Verify:

- content remains complete;
- no essential state depends on animation;
- large pans/zooms/parallax are removed or substantially reduced;
- layout remains intentional.

## Step 8 — Console / Network

Check for:

- uncaught exceptions
- repeated warnings introduced by the change
- failed assets
- unexpectedly eager offscreen imagery
- duplicate requests/listener effects

For asset/motion-heavy changes, inspect loading priority and performance evidence required by Level D.

## Step 9 — Score Signature Scenes

Use the `QUALITY.md` 16-point scene rubric.

Do not pass a signature scene below threshold.

## Step 10 — Independent Review

When Codex `/review` or equivalent reviewer is available, run a fresh review of the actual diff using criteria:

```text
correctness
regression risk
MAVYR architecture compliance
accessibility
performance
responsive behavior
maintainability
```

Initial review should report findings without changing the tree.

## Output

Return:

```text
Verification Level
Viewports Tested
States Tested
Screenshots / Visual Evidence
Interaction Findings
Accessibility Findings
Console / Network Findings
Performance Findings
Scene Score if applicable
Blocking Defects
Non-Blocking Defects
Pass / Fail
```

Never claim a browser, screenshot, metric, or test you did not actually run.
