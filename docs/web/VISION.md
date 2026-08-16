# MAVYR Website — Experience Vision & Visual Doctrine

**Status:** Authoritative  
**Owns:** experience, art direction, visual identity, narrative sequence, interaction character  
**Does not own:** implementation mechanics or phase scheduling

---

# 1. Product Vision

The MAVYR website is a **controlled aperture into Maramis**.

It is not primarily a brochure, wiki, investor deck, portfolio, or effects showcase. It is an authored public encounter with MAVYR's identity:

- a small but persistent world
- living people
- causal consequence
- culturally specific material reality
- cinematic embodied presence
- premium handcrafted direction

The site should make a visitor understand the project with less explanation because the composition itself carries meaning.

---

# 2. Experience Thesis

> **Dark. Violet. Material. Intelligent. Human. Causal.**

The website should feel like:

> **cinematic world dossier × archaeological field study × elegant future editorial system × living causality**

The future-facing quality must come from precision, typography, spacing, light, sequencing, and motion—not cyberpunk decoration.

---

# 3. Visual Thesis

Canonical sentence:

> **Obsidian-violet editorial cinema: near-black architectural space, controlled violet causality light, natural Maramis materiality, monumental typography, sparse technical notation, and a few precise motions that make consequence feel alive.**

A screenshot should feel recognizably MAVYR even before the visitor reads a paragraph.

---

# 4. Desired Character

The site is:

- **dark-mode first**
- **purple-led** but not purple-monochrome
- cinematic but immediately navigable
- minimal but not empty
- futuristic but not techno-HUD
- elegant but not luxury-brand generic
- editorial but not magazine-flat
- atmospheric but not illegible
- world-specific rather than abstract
- intimate rather than bombastic
- technically precise without looking like software documentation

Core adjectives:

> **Weighted. Intimate. Grounded. Ancient-future. Precise. Quietly strange.**

---

# 5. Emotional Progression

The page should edit itself like a short cinematic sequence:

```text
Intrigue
  ↓
Identity
  ↓
World specificity
  ↓
Understanding
  ↓
Consequence
  ↓
Human presence
  ↓
Production credibility
  ↓
Quiet exit
```

The visitor should not encounter nine sections with equal visual weight. Rhythm requires contrast between spectacle, evidence, silence, information, and human presence.

---

# 6. Dark / Purple Aesthetic Contract

Purple is a **canonical website identity**, not merely an accent. It must nevertheless remain disciplined enough that MAVYR does not become a generic violet technology brand.

## 6.1 Layer model

### Layer A — Obsidian substrate

The dominant environmental field:

- near-black
- plum-black
- violet-black
- deep charcoal

This creates cinematic darkness and negative space.

### Layer B — Violet depth

Low-to-medium chroma violet/plum creates depth between planes:

- panel separation
- atmosphere
- image veils
- subtle gradients
- active navigation states

It should often be perceived before it is consciously noticed.

### Layer C — Causal light

Luminous iris/ultraviolet is reserved for:

- consequence propagation
- interactive focus
- active state
- one deliberate visual seam
- selected identity moments

Do not use luminous violet as continuous decoration.

### Layer D — Maramis material counterpoint

World evidence keeps its own material color:

- earth
- sand
- bronze
- ash
- weathered stone
- worn black
- muted cloth
- smoke
- firelight
- moonlight

This counterpoint is essential. It prevents the purple identity layer from swallowing the world.

## 6.2 Approximate visual balance

Treat these as composition guidance, not pixel-measured quotas:

```text
60–75%  obsidian / near-black foundation
15–25%  low-chroma plum / violet depth
 5–10%  luminous violet emphasis
variable  natural Maramis material inside primary imagery
```

If everything glows, nothing carries meaning.

## 6.3 Canonical starting tokens

These are the default design-direction targets. Implementation may tune exact values only with visual evidence and adequate contrast.

```css
--void-1000: #050307;
--void-950:  #08050d;
--obsidian:  #0d0912;
--plum-900:  #160d20;
--plum-800:  #21122f;
--violet-700:#4e2d78;
--violet-600:#6540a8;
--iris-500:  #7c5cff;
--iris-300:  #b7a6ff;
--moon-100:  #f1edf5;
--ash-300:   #aaa3b2;
--ash-500:   #817a89;
--bronze-500:#9b7650;
```

The bronze token is a counterpoint, not a second UI accent system.

## 6.4 Glow budget

- Prefer reflected light, soft atmospheric bleed, and contrast before outer glow.
- A viewport should normally have **one dominant luminous focus**, not many.
- Avoid neon borders around ordinary elements.
- Never use glow to compensate for weak hierarchy.

---

# 7. Surface & Shape Doctrine

The site should feel architectural, not card-based.

Prefer:

- full-width planes
- edge-to-edge imagery
- hairlines
- ruled fields
- large negative space
- flush editorial columns
- image masks/crops
- controlled inset information
- hard or very small radii

Avoid:

- floating rounded cards
- nested panels
- pill clusters
- glass tiles
- dashboard grids
- detached badges
- large soft shadows

A border, surface, radius, or blur must explain hierarchy or interaction. If removing it does not reduce clarity, remove it.

---

# 8. Typography Doctrine

Typography carries much of the premium quality.

Use no more than **two primary type voices**.

## 8.1 Display voice

Purpose:

- MAVYR identity
- scene headlines
- major statements
- human names

Character:

- editorial
- literary
- monumental
- slightly ancient without becoming historical cosplay

A refined serif is preferred unless a future custom face proves better.

## 8.2 Interface / notation voice

Purpose:

- navigation
- indices
- metadata
- system labels
- captions
- technical notation

Character:

- neutral grotesk or disciplined sans
- crisp
- restrained
- legible at small sizes

Futurism should come from spacing, hierarchy, and notation—not a stereotypical sci-fi font.

## 8.3 Type hierarchy

```text
Brand / Display XL
Scene title
Editorial statement
Body / lede
Notation / label
Caption / legal
```

Do not use hero-scale typography inside compact information regions.

---

# 9. Composition Doctrine

## 9.1 First viewport = poster

The first viewport must read as one composition.

It should prioritize:

1. MAVYR
2. one dominant world visual or immersive visual plane
3. one concise project promise
4. minimal navigational affordance

Project metadata belongs below or at the edge of the opening experience unless it materially improves the composition.

## 9.2 One job per scene

Each scene should have:

- one purpose
- one dominant visual idea
- one primary takeaway

Secondary information must not compete with the scene's central idea.

## 9.3 Visual hierarchy before decoration

Use this order when solving a scene:

```text
composition
→ crop
→ scale
→ spacing
→ typography
→ contrast
→ imagery
→ motion
→ effects
```

Do not reverse it.

---

# 10. Master Visual Families

## 10.1 World Master

A cinematic environmental artwork/shot that can support:

- hero
- section transition
- social preview
- parallax-separated layers when available

Preferred characteristics:

- ultrawide read
- quiet sky/negative space
- settlement or human-made evidence at useful scale
- foreground anchor
- material atmosphere
- no baked-in UI
- no strong artificial purple grading in the master itself

The website may introduce subtle violet atmosphere around or across the image; the source world should retain material credibility.

## 10.2 Human Study

Portrait system for casting and creator presence.

Characteristics:

- editorial rather than celebrity publicity
- identity preserved
- controlled directional light
- deep shadows
- 4:5 master where practical
- negative space
- no fantasy cosplay treatment
- no excessive beautification

## 10.3 Maramis Codex

Technical/archaeological drawing family:

> archaeological field drawing × architect's study × Maramis manuscript × intelligent observation

Subjects include:

- settlement plan
- architectural elevation
- ruin section
- territory route map
- weapon/tool/relic
- material object
- botanical/animal study
- cultural detail
- metaphysical diagram

These drawings create world specificity without requiring dozens of rendered scenes.

## 10.4 Territory / Map

A geographic/systemic visual that communicates:

```text
Settlement ↔ Routes / Wilderness ↔ Ruin / Deep Destination
```

It should feel like understanding a lived territory, not selecting levels from a game map.

## 10.5 Causal Weave

The proprietary system graphic for Living Consequence.

It must be readable without animation and become more expressive with motion.

The canonical sequence is:

```text
World State
→ Detection
→ Knowledge
→ Intention
→ Action
→ Effect
→ New Reality
→ Persistence
```

This is the website's strongest candidate for a signature interaction because it explains what differentiates MAVYR.

---

# 11. Scene Architecture

The target narrative is nine scenes. Their final implementation may merge or shorten content when evidence supports it.

## Scene 00 — Threshold

**Purpose:** establish MAVYR immediately.  
**Visual:** dominant World Master / environmental plane.  
**Text:** MAVYR + concise premise.  
**Motion:** restrained environmental depth, title entrance, one invitation to continue.  
**Rule:** the visitor should feel the world before reading project metadata.

## Scene 01 — Thesis

**Purpose:** state the core promise.  
**Primary line:** “What happens becomes part of what happens next.”  
**Visual behavior:** near-still, using contrast after the hero rather than competing spectacle.

## Scene 02 — Living Consequence

**Purpose:** prove the thesis.  
**Visual:** Causal Weave and/or material world evidence.  
**Signature motion:** Propagate.  
**Rule:** this is the primary proprietary interaction, not a decorative network animation.

## Scene 03 — Maramis

**Purpose:** establish cultural/material specificity.  
**Visual:** World Master fragments + Maramis Codex.  
**Rule:** show evidence rather than adding explanatory paragraphs.

## Scene 04 — Territory

**Purpose:** communicate “one place, known deeply.”  
**Visual:** territory study/map.  
**Interaction:** selective focus or route reveal; no map-app UI.

## Scene 05 — Craft

**Purpose:** establish production taste and constraints.  
**Visual:** material/codex/process evidence.  
**Rule:** do not become a feature grid.

## Scene 06 — Human Presence

**Purpose:** introduce performance/casting interests with dignity.  
**Visual:** Human Study portraits.  
**Rule:** each person must be legible quickly; the visitor must be able to continue without excessive wheel effort. Legal disclaimer remains clear.

## Scene 07 — Development

**Purpose:** communicate credibility through evidence before expansion.  
**Visual:** quiet progression/timeline or proof structure.  
**Rule:** minimal, factual, no invented production claims.

## Scene 08 — Creator / Exit

**Purpose:** end on authorship and human intention.  
**Visual:** creator Human Study.  
**Motion:** quiet reveal/withdrawal.  
**Rule:** leave the visitor with a person and a project, not a corporate footer.

---

# 12. Cinematic Grammar

The site uses cinematic principles translated to web behavior:

### Establishing shot
Large world image, quiet spatial read.

### Close-up
Portrait, object, or codex fragment with concentrated detail.

### Cut
Fast compositional change that punctuates a chapter.

### Dissolve
Subtle visual continuity between related ideas.

### Rack focus
Hierarchy changes between foreground/background—not literal blur by default.

### Tracking
Controlled relative movement that changes viewpoint.

### Match cut
A shape, line, or concept continues into the next scene.

### Hold
Intentional stillness after motion.

Do not emulate film literally when native web behavior communicates the same idea more clearly.

---

# 13. Motion Doctrine

Motion exists to create presence, hierarchy, causal meaning, and continuity.

Use a small number of memorable motions rather than constant activity.

Canonical families:

- Appear
- Withdraw
- Travel
- Transform
- Propagate
- Cut

Guidelines:

- response motion: immediate and short
- scene reveal: controlled, usually sub-second to roughly one second
- causal propagation: may be longer when the sequence itself carries meaning
- no essential information should require waiting for an animation to finish
- typing/clicking/scrolling/navigation must remain immediately responsive
- pause/stillness is part of the motion system

Avoid:

- animation on every heading
- scroll-linked zoom as a default
- endless floating
- decorative noise
- forced snapping
- scroll-jacking
- transitions that replay excessively on back-scroll

---

# 14. Interaction Doctrine

The page should feel responsive but not gamified.

Good interaction:

- reveals additional meaning
- changes viewpoint
- makes causality legible
- improves navigation
- gives subtle physical feedback

Bad interaction:

- requires hunting for hotspots
- hides basic content
- turns reading into a puzzle
- traps scroll
- exists only to demonstrate code skill

Native scrolling remains the default navigation model.

---

# 15. Image & Media Doctrine

Primary imagery should show the world, people, objects, or system evidence—not merely abstract atmosphere.

Rules:

- full-bleed or compositionally dominant visual anchors are preferred for major scenes
- crop intentionally per viewport
- protect faces, key silhouettes, and text-safe negative space
- never use a low-quality stretched source
- do not hide weak assets behind heavy blur or darkness
- video is optional and must earn its cost; image-led cinema is the default

---

# 16. Mobile Vision

Mobile is a directed alternate edit.

Preserve:

- scene order
- project identity
- core thesis
- causal proof
- world specificity
- human presence

Adapt:

- crop
- typography scale
- negative space
- pinned duration
- motion amplitude
- number of simultaneous layers
- information density

Do not simply shrink desktop absolute positions.

---

# 17. Reduced-Motion Vision

Reduced motion must still feel premium.

Replace motion with:

- strong cuts
- opacity changes
- static layering
- typographic hierarchy
- composition changes

Remove or substantially reduce:

- parallax
- large pans
- large zooms
- continuous scroll-driven transforms
- long spatial travel

The content and sequence remain fully understandable.

---

# 18. Anti-References

The final site must not resemble:

- generic purple-black AI startup
- neon cyberpunk HUD
- luxury perfume microsite with unrelated typography
- Awwwards experiment that makes navigation difficult
- gamer landing page filled with cards and feature icons
- fullscreen particle demo
- cinematic site that hides loading problems behind an intro screen
- portfolio where every section uses the same fade-up animation

A useful test:

> If the MAVYR name and copy were removed, would the page still contain world, material, causal, and human evidence specific enough to suggest this project?

If not, the design is too generic.

---

# 19. Visual Acceptance Rubric

Score each major scene from 0–2 on each axis:

| Axis | 0 | 1 | 2 |
|---|---|---|---|
| MAVYR identity | generic | partially specific | unmistakable |
| Composition | fragmented | competent | directed |
| World evidence | absent | secondary | integral |
| Purple discipline | gimmick/absent | acceptable | controlled identity |
| Typography | generic | coherent | authored |
| Motion | noisy/flat | functional | meaningful |
| Restraint | cluttered | mixed | intentional |
| Mobile cut | broken | adapted | specifically directed |

A signature scene should not ship below **13/16**, and must score `2` for MAVYR identity, composition, and restraint.

---

# 20. Success Standard

The transformation succeeds when:

- the first viewport reads as MAVYR, not a template;
- dark violet is unmistakably part of the website identity without contaminating Maramis into neon purple fantasy;
- the world carries more visual weight than interface decoration;
- Living Consequence becomes visually understandable and memorable;
- only a few scenes use signature motion, but those motions matter;
- casting/human presence feels cinematic without becoming a scroll tax;
- desktop, mobile, and reduced-motion versions each feel intentionally directed;
- the design is elegant enough to feel premium and strange enough to belong only to MAVYR.
