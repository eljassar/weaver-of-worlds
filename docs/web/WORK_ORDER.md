# MAVYR Website — Active Work Order

**Status:** READY  
**Work Order:** `MAVYR-WEB-P0-01`  
**Phase:** 0 — Governance & Baseline Lock  
**Owner:** implementation agent / Codex  
**Change Type:** evidence + documentation; production behavior must remain unchanged

---

# 1. Objective

Establish a reproducible technical and visual baseline of the current MAVYR website before the cinematic transformation begins.

This work order does **not** redesign the site.

---

# 2. Why Now

The current site already contains custom visual behavior. Without a baseline, later Codex sessions cannot reliably prove whether a change improved the experience or introduced regressions.

This work order creates the evidence required for controlled iteration.

---

# 3. Required Reads

Read before acting:

1. `/AGENTS.md`
2. `/docs/web/VISION.md`
3. `/docs/web/ARCHITECTURE.md`
4. `/docs/web/QUALITY.md`
5. `/docs/web/PHASE_PLAN.md` — Phase 0 only

Read `BENCHMARK.md` only if a visual interpretation question appears. Do not redesign from benchmark references during this work order.

---

# 4. Exact Scope

Inspect and record:

## Repository

- current root files
- current CSS files and sizes
- current JS files and sizes
- current image assets and sizes/formats
- current deployment model

## Page structure

- semantic section order
- navigation anchors
- major content scenes
- current legal/casting disclaimers

## Runtime behavior

- reveal system
- navigation update behavior
- casting scroll behavior
- creator cinematic behavior
- reduced-motion behavior
- observer/scheduler/listener structure

## Visual baseline

Capture/inspect the current site at:

```text
390 × 844
768 × 1024
1440 × 900
1920 × 1080
```

At minimum capture:

- Threshold/hero
- Living Consequence
- Maramis/Territory
- Casting representative state
- Creator/exit

## Performance/loading baseline

Where tooling permits, record:

- current LCP candidate/resource
- total transferred bytes on first load
- HTML/CSS/JS transfer
- image transfer
- layout-shift observations
- console errors/warnings
- failed requests
- eager/high-priority images

If field Core Web Vitals data is unavailable, explicitly say so. Do not present lab measurements as field data.

---

# 5. Allowed Changes

Allowed:

- foundation documentation
- baseline/evidence documentation
- screenshot/evidence files in a non-production reference location
- a tiny deterministic verification helper only if required and it does not alter production behavior

---

# 6. Do Not Touch

Do not intentionally change:

- production layout
- typography
- colors
- animations
- casting pacing
- production copy
- image crops
- asset loading behavior
- framework/dependencies

If a critical defect blocks baseline capture, document it rather than silently fixing it.

---

# 7. Deliverables

Create a baseline record, recommended path:

```text
docs/web/BASELINE.md
```

It should contain:

```text
Repository Snapshot
Page / Scene Inventory
Runtime Inventory
Asset Inventory Summary
Visual Baseline Matrix
Performance / Loading Baseline
Accessibility / Reduced-Motion Baseline
Known Defects / Friction
Sources of Truth / Duplication Risks
Entry Conditions for Phase 1
```

Store screenshots in a non-production reference path if the environment supports persistent image artifacts, for example:

```text
docs/web/reference/baseline/
```

Do not load these screenshots on the production page.

---

# 8. Verification

Use `$mavyr-web-qa` if available.

Verify:

- production output is visually unchanged by this work order;
- no production asset/path was accidentally modified;
- evidence corresponds to the actual current site;
- metrics are labeled by source/tool and are not invented;
- screenshots identify viewport size/state;
- all known limitations are explicit.

---

# 9. Acceptance Criteria

This work order is complete only when:

- the current site can be compared against future work without relying on memory;
- the major custom runtime behaviors are identified;
- asset-loading risks are recorded;
- the current casting scroll friction is documented with evidence rather than immediately redesigned;
- desktop/mobile/reduced-motion baseline states are known;
- no production redesign occurred.

---

# 10. Completion Report

Return exactly these sections:

```text
Work Order
Outcome
Files Changed
Baseline Evidence Created
Repository / Runtime Findings
Visual Findings
Performance / Loading Findings
Accessibility Findings
Known Limitations
Phase 1 Entry Conditions
```

---

# 11. Next Work Order

After acceptance, create a new `WORK_ORDER.md` for Phase 1 rather than appending implementation scope here.

Recommended next objective:

> **Lock the final narrative scene map and scene contracts before visual-system implementation.**
