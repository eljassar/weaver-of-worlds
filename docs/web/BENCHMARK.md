# MAVYR Website — Benchmark & Reference Principles

**Status:** Reference evidence  
**Owns:** comparative lessons and anti-copy constraints  
**Does not own:** product truth, architecture, or active-task scope

---

# 1. Benchmark Method

Benchmarks are used to answer:

- what makes a cinematic site feel authored rather than generated?
- how do premium sites balance imagery, typography, motion, and navigation?
- what interaction patterns are worth borrowing as principles?
- what failure modes should MAVYR avoid?
- how should Codex be instructed and verified for high-quality frontend work?

Do not copy a benchmark's layout, color system, signature animation, or technology stack.

Evaluate references through:

```text
Identity
Composition
World / subject evidence
Narrative pacing
Motion purpose
Interaction clarity
Restraint
Responsive direction
Performance discipline
Maintainability
```

---

# 2. Creative Reference Set

## 2.1 Firewatch

### Relevant strength

Art-led atmosphere can carry identity with relatively simple web mechanics.

### MAVYR lesson

Use strong world imagery, depth, cropping, and controlled layered motion before adding interface complexity.

### Do not copy

- illustration style
- color palette
- literal parallax composition

---

## 2.2 Clair Obscur: Expedition 33

### Relevant strength

World, character, typography, and media are presented as one coherent identity.

### MAVYR lesson

Characters and world evidence should feel part of the same visual system rather than separate website modules.

### Do not copy

- ornament
- typography
- fantasy motifs
- page structure

---

## 2.3 Alan Wake 2

### Relevant strength

Cinematic media framing and strong thematic presentation create immediate tone before explanatory content.

### MAVYR lesson

Lead with atmosphere and identity, then reveal information. Treat media as a primary composition plane rather than decoration beside copy.

### Do not copy

- horror language
- glitch effects
- visual branding

---

## 2.4 Lusion / high-end interactive studio work

### Relevant strength

Motion quality comes from integration between design, rendering, and interaction—not from the quantity of animations.

### MAVYR lesson

A few engineered signature moments can establish a premium ceiling for the whole site.

### Do not copy

- technology for technology's sake
- WebGL simply because it is impressive
- agency-demo interaction density

---

## 2.5 Immersive editorial / storytelling work

### Relevant strength

Narrative pacing can be shaped through scale, whitespace, image handoffs, sticky composition, and controlled scene transitions.

### MAVYR lesson

Cinema can be achieved with normal web primitives when the edit is strong.

### Do not copy

- excessive pinning
- scroll traps
- unreadable experimental navigation

---

# 3. Cross-Benchmark Conclusions

## 3.1 Identity precedes effects

The strongest experiences have a clear subject, visual language, and composition before motion is added.

For MAVYR, the subject is not “purple futurism.” It is:

- Maramis
- people
- material life
- living consequence
- handcrafted production

## 3.2 Real visual anchors matter

A gradient or particle field is atmosphere, not evidence.

Major scenes should use the world, people, map/codex, objects, or causal system as the primary visual idea.

## 3.3 Cinema is selective

Continuous novelty reduces contrast. Signature moments should be surrounded by calmer passages.

## 3.4 Scroll must remain legible

The visitor should understand where they are and be able to continue naturally. Sticky/pinned behavior must earn its duration.

## 3.5 Mobile needs re-editing

High-quality mobile design preserves the narrative idea while changing crop, density, timing, and composition.

## 3.6 Performance changes aesthetics

Late-loading visual anchors, stutter, layout shifts, and slow interaction make premium art direction feel cheap.

---

# 4. Codex / AI-Engineering Benchmark

The web foundation should also be benchmarked against current Codex operating capabilities, not only other websites.

## 4.1 Durable instructions should stay lean

`AGENTS.md` is automatically read by Codex and should contain durable project-wide rules rather than every workflow detail.

**MAVYR decision:** keep root `AGENTS.md` high-signal; move specialized workflows into skills and active scope into `WORK_ORDER.md`.

## 4.2 Skills are better for repeatable specialized workflows

Repo-scoped skills provide task-specific instructions without forcing their entire content into every run.

**MAVYR decision:** use two focused skills initially:

```text
mavyr-web-scene
mavyr-web-qa
```

Do not create a large skill library before recurring needs exist.

## 4.3 Visual frontend work requires rendered verification

Current Codex/frontend guidance emphasizes screenshots, real-browser inspection, visual references, and viewport testing.

**MAVYR decision:** source review alone cannot complete visual work. `QUALITY.md` and `$mavyr-web-qa` define the evidence loop.

## 4.4 Visual references should control attributes, not become cloning instructions

Codex performs better when the design system, imagery treatment, layout constraints, and narrative are specified up front.

**MAVYR decision:** references must identify what they govern:

```text
composition
palette
crop
material
motion
hierarchy
```

## 4.5 Subagents are useful for independent audits

Parallel read-heavy work can improve exploration, test analysis, accessibility review, and performance review while keeping the main thread focused.

**MAVYR decision:** allow subagents for independent analysis; keep write ownership centralized for each scene.

## 4.6 Independent code review belongs in the completion loop

A fresh diff review can find regressions the implementation agent missed.

**MAVYR decision:** phase gates include an independent review pass with MAVYR-specific criteria.

---

# 5. MAVYR Competitive Position

The target is not “most animated game website.”

The target is:

> **A premium cinematic project site whose world, visual system, and interaction explain MAVYR's design thesis with unusual coherence.**

Competitive advantages should come from:

1. **world specificity** — Maramis feels materially authored;
2. **living consequence** — the signature interaction communicates a real game principle;
3. **human presence** — portraits/performance are presented with restraint;
4. **editorial intelligence** — minimal text, high information density, strong hierarchy;
5. **technical restraint** — sophisticated experience without unnecessary framework weight.

---

# 6. Theme Benchmark Decision

MAVYR intentionally chooses dark mode and purple. Generic AI guidance often warns against habitual dark-purple generated interfaces; that warning is useful here as an anti-pattern check, not a reason to abandon the brand direction.

The correct distinction is:

```text
BAD
purple because generated sites often use purple
purple gradients + glow + glass + cards + particles

GOOD
purple because it is explicitly MAVYR's interface/causal identity
obsidian substrate + controlled violet depth + selective causal light
contrasted by natural Maramis material imagery
```

The brand decision is therefore:

> **Keep the dark-purple aesthetic. Make its use more disciplined, material, cinematic, and project-specific than the generic pattern.**

---

# 7. Benchmark Quality Bar

Before accepting a major scene, ask:

### Identity
Could this belong to another game/AI/portfolio site after changing the logo?

### Composition
Does the viewport have one dominant idea?

### World
Is there real MAVYR/Maramis evidence or only effects?

### Purple
Does violet create identity and hierarchy, or merely tint everything?

### Motion
Can every meaningful animation explain why it moves?

### Pacing
Can the visitor continue naturally without excessive input?

### Restraint
Would removing any decorative element make the scene stronger?

### Mobile
Is the smaller-screen version a deliberate edit?

### Performance
Does the scene still feel premium on ordinary hardware/network conditions?

### Maintainability
Can another Codex session understand ownership and change the scene safely?

---

# 8. External Research Basis

Review periodically because tooling and frontend guidance evolve.

Primary AI/Codex references used for this foundation:

- OpenAI — Custom instructions with `AGENTS.md`
- OpenAI — Build skills
- OpenAI — Subagents
- OpenAI — Code review
- OpenAI — Designing delightful frontends with GPT-5.4
- OpenAI — Frontend prompt instructions

Creative references are principle sources only; they do not outrank `VISION.md`.
