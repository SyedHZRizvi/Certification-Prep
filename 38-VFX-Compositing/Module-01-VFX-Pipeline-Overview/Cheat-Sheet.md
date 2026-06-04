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

## On-Set VFX Data Package

- **Tracking markers** — high-contrast X-shapes on VFX surfaces
- **HDR probe** — chrome ball + gray ball, bracketed -4 to +4 stops
- **Witness camera** — wide angle, off-axis, captures full set
- **Lens data** — focal length, distortion profile, focus distance
- **Color chart** — shot in each lighting state for plate matching
- **Clean plate** — take without principal actor

---

## Key Departments

| Dept | Receives | Delivers |
|------|----------|---------|
| Editorial | Raw footage | Locked cut + VFX pulls |
| Matchmove | Plates + lens data | Tracked cameras |
| 3D/FX | Tracked cameras | EXR render packages |
| DMP | Tracked cameras | Painted environment elements |
| Comp | All of the above | Final composite EXR |
| DI | Comp deliverables | Graded film master |

---

## Mandalorian LED Volume vs Greenscreen

| Attribute | Greenscreen | LED Volume |
|-----------|-------------|-----------|
| Background | Keyed in post | Plays live on set |
| Reflections | Simulated in comp | Physical/real |
| Interactive light | Comp simulation | Real LED panels |
| Director feedback | Weeks later | Real time on set |
| Comp work remaining | Heavy | Cleanup + CG chars |

---

## Key Vocabulary

- **Pre-vis** — Animatic preview of VFX sequences for planning
- **HDR probe** — Lighting reference for 3D IBL (image-based lighting)
- **AOV** — Arbitrary Output Variable; named channels in multi-channel EXR
- **DI** — Digital Intermediate; facility for final color grade
- **Floating blacks** — Camera sensor artifact; shadow areas fluctuate
- **Clean plate** — Shot without actor; used for cleanup reference
- **Witness camera** — Off-axis reference camera on set

---

## ILM Avengers Key Facts

- *Infinity War*: 2,900 VFX shots; Thanos = 300+ artists / 18 months
- *Endgame*: 3,000+ shots across multiple vendors (ILM, Weta, DD, Framestore)
- ILM uses Nuke for all compositing
- Vendor consistency maintained via "look bible" — shared Nuke scripts + look-dev renders
