# MAVYR Website — Architecture Decisions

Use this folder only for **expensive-to-reverse technical decisions**.

Do not create an ADR for normal scene styling, copy changes, or ordinary refactors.

Create one when considering decisions such as:

- framework migration
- production animation library
- WebGL / Three.js introduction
- build-system introduction
- deployment-platform change
- major content/state ownership change

Filename:

```text
ADR-0001-short-decision-name.md
```

Template:

```markdown
# ADR-0001 — Decision Name

**Status:** Proposed | Accepted | Superseded
**Date:** YYYY-MM-DD

## Context

## Options Considered

## Decision

## Why

## Consequences

## Revisit Trigger
```

An accepted ADR may refine `ARCHITECTURE.md`; it may not override `VISION.md`.
