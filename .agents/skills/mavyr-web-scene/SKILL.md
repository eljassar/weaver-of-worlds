---
name: mavyr-web-scene
description: Use when implementing, refactoring, or materially changing a MAVYR website cinematic scene, sticky sequence, portrait sequence, causal visualization, scene transition, or scroll-linked interaction. Do not use for copy-only or trivial CSS edits.
---

# MAVYR Web Scene Workflow

Build one cinematic scene without breaking the site's architecture, pacing, or identity.

## Required Inputs

Read:

1. `/AGENTS.md`
2. `/docs/web/WORK_ORDER.md`
3. `/docs/web/VISION.md`
4. `/docs/web/ARCHITECTURE.md`
5. `/docs/web/QUALITY.md`

Inspect the existing scene and adjacent scene handoffs before editing.

## Step 1 — Write the Scene Contract

Before code, confirm or create:

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

Do not implement custom motion until this is coherent.

## Step 2 — Establish the Static Composition First

Make the scene strong with motion disabled.

Prioritize:

```text
composition
crop
scale
spacing
typography
contrast
imagery
```

Only then add motion.

The static version must already communicate the scene's purpose.

## Step 3 — Choose the Minimum Motion Vocabulary

Use only the existing families:

- Appear
- Withdraw
- Travel
- Transform
- Propagate
- Cut

Use the smallest set that expresses the narrative beat.

Do not add continuous motion because the scene is labeled cinematic.

## Step 4 — Preserve Native Navigation

Never intercept wheel/touch by default.

For sticky/pinned behavior, document:

- why pinning is necessary;
- how much scroll distance it consumes;
- how the user exits;
- mobile alternative;
- reduced-motion alternative.

If the scene feels like work to escape, reduce duration or remove pinning.

## Step 5 — Implement with Narrow Ownership

Prefer:

- semantic HTML source of truth;
- CSS for static composition;
- CSS variables for runtime progress;
- one narrow scene controller only when necessary;
- shared scheduler for continuous updates;
- observer-based activation;
- cached geometry and batched reads/writes.

Do not duplicate names/copy/content into JavaScript configuration.

Do not create a site-wide abstraction for one scene.

## Step 6 — Mobile and Reduced Motion Are Part of Implementation

Do not postpone them.

Mobile should recompute:

- crop
- composition
- density
- sticky duration
- motion amplitude

Reduced motion should replace large motion with:

- static composition
- cuts
- subtle opacity
- hierarchy changes

## Step 7 — Verify Visually

Invoke/use `$mavyr-web-qa` when available.

At minimum inspect:

- desktop primary state
- mobile primary state
- entry/exit when interaction changed
- reduced-motion state when motion changed

Check adjacent scene handoffs so local quality does not damage page rhythm.

## Step 8 — Self-Critique

Before finishing, answer:

1. Could this scene belong to another purple game/AI site?
2. Is the primary visual meaningful MAVYR evidence?
3. Is there one dominant idea?
4. Is any motion decorative rather than semantic?
5. Can the visitor leave naturally?
6. Does mobile feel directed?
7. Is the implementation simpler than the behavior warrants?

Fix material failures before reporting completion.

## Output

Return the completion structure required by `/AGENTS.md`, including actual verification evidence and known limitations.
