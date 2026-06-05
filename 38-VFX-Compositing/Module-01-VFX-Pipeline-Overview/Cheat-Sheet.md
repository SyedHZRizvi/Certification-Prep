---
title: "Module 1 Cheat Sheet: VFX Pipeline Overview"
---

# 🗒️ Module 1 Cheat Sheet: VFX Pipeline Overview

## The 6 Pipeline Phases

| Phase | Owner | Key Output |
|-------|-------|-----------|
| Development & Bidding | VFX Producer | Beat sheet, bid |
| Pre-Production / Pre-vis | Pre-vis Supervisor | Animatic cuts |
| Principal Photography | VFX Supervisor | Plates + data package |
| Post — Matchmove | Matchmove TD | Tracked cameras |
| Post — 3D/DMP/FX | CG Supervisor | EXR render packages |
| Post — Compositing | Comp Supervisor | Final composite |
| DI / Color | Colorist | Finished film |

---

## VFX Complexity Tiers

| Tier | Description | Example |
|------|-------------|---------|
| 1 | Simple cleanup | Wire removal, logo replacement |
| 2 | Composite | Greenscreen, sky replacement |
| 3 | Complex comp | Tracked CG + particles |
| 4 | Hero shot | Digital human, destruction |

---

## Department Data Flow

| Dept | Receives | Delivers |
|------|----------|---------|
| Editorial | Raw footage | Locked cut + VFX pulls |
| Matchmove | Plates + lens data | Tracked cameras |
| 3D/FX | Tracked cameras | EXR render packages |
| DMP | Tracked cameras | Painted environment elements |
| Comp | All of the above | Final composite EXR |
| DI | Comp deliverables | Graded film master |

---

## On-Set VFX Data Package (All 6 Items)

| Item | What It Is | Why Critical |
|------|-----------|-------------|
| Tracking markers | High-contrast X-shapes on VFX surfaces | Camera solve, CG placement |
| HDR probe | Chrome + gray ball, −4 to +4 stops | 3D IBL (image-based lighting) |
| Witness camera | Wide off-axis reference camera | Documents full lighting environment |
| Lens data | Focal length, distortion profile, focus | 3D camera solve accuracy |
| Color chart | Shot in every lighting state | Plate color matching in post |
| Clean plate | Take without actor | Wire removal, paint reference |

---

## Mandalorian LED Volume (StageCraft) vs Greenscreen

| Attribute | Greenscreen | LED Volume |
|-----------|-------------|-----------|
| Background | Keyed in post | Plays live on set |
| Reflections | Simulated in comp | Physical/real |
| Interactive light | Comp simulation | Real LED panels |
| Director feedback | Weeks later | Real time on set |
| Comp work remaining | Heavy | Cleanup + CG chars |
| Problems eliminated | None of 3 | All 3 (spill, reflections, interactive light) |

---

## Multi-Vendor Pipeline: Look Bible System

| Element | Purpose |
|---------|---------|
| Nuke script presets | Grade node settings per character per vendor |
| Reference renders | Approved look in multiple lighting conditions |
| Skin shaders / textures | Character appearance consistency |
| Matte line treatments | Edge blending standards |
| Vendor QC process | Shots failing look bible returned for revision |

---

## 1917 Invisible Stitch: 5-Point Match Checklist

1. **Camera geometry** — 3D solve both plates to sub-pixel alignment
2. **Color** — primary grade: exposure, color temp, contrast
3. **Grain** — single unified grain layer over the joined composite
4. **Atmospheric depth** — haze and depth-fog matched across the stitch frame
5. **Motion blur** — stitch hidden at peak motion-blur frames

**Missing any one of these five makes the stitch visible.**

---

## Avengers: Endgame — Vendor Breakdown

| Vendor | Responsibility |
|--------|--------------|
| ILM | Thanos, Smart Hulk, portal sequence, look supervision |
| Weta Digital | Army simulation, crowd (100,000+ soldiers per frame) |
| Digital Domain | Iron Man suit, Tony death sequence |
| Framestore | Black Widow, general battle compositing |
| Method Studios | Quantum Realm, van sequences |

---

## Key Vocabulary

| Term | Definition |
|------|-----------|
| Pre-vis | Animatic preview for VFX planning |
| HDR probe | Lighting reference for 3D IBL |
| AOV | Arbitrary Output Variable — named channel in multi-EXR |
| DI | Digital Intermediate — final color grade facility |
| Floating blacks | Camera sensor artifact — shadow fluctuation |
| Clean plate | Shot without actor; paint/cleanup reference |
| Witness camera | Off-axis reference camera |
| Look bible | Per-vendor consistency document for multi-studio productions |
| Vendor QC | Quality check ensuring deliverables match the look bible |

---

## Exam: Technical vs Creative Grade

| Grade | Who Does It | Where | Purpose |
|-------|------------|-------|---------|
| Technical | Compositor | On the shot | Match elements to plate |
| Creative | Colorist | DI facility | Apply the film's "look" |

**Compositor delivers neutral log-encoded composites. Colorist applies the look globally.**

---

## ILM Avengers Key Facts

- *Infinity War*: 2,900 VFX shots; Thanos = 300+ artists / 18 months
- *Endgame*: 3,000+ shots across multiple vendors
- ILM uses Nuke exclusively for compositing
- Look bible maintained by ILM; all vendors must match
- Portal sequence A-shot: 14 weeks for one wide shot


---

## ✅ Module Sign-Off Checklist

- [ ] Can explain core concept without notes
- [ ] Can name 3 industry examples
- [ ] Know the 2 most common mistakes
- [ ] Understand when to use each technique

**Key formula / ratio / number to memorize:**
See the exam callouts (🎯) in the Reading.md for this module.
