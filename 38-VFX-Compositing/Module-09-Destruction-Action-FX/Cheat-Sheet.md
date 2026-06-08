---
title: "Module 9 Cheat Sheet: Destruction & Action FX"
---

# 🗒️ Module 9 Cheat Sheet: Destruction & Action FX

## The Rule of 7 Explosion Layers

| # | Layer | Physics | Blend Mode | Duration |
|---|-------|---------|-----------|---------|
| 1 | Fireball core | Initial incandescent gas | Add/Screen | Short (1–20 frames) |
| 2 | Shockwave ring | Pressure wave distortion | Screen (subtle) | Very short (0–5 frames) |
| 3 | Smoke column | Rising combustion smoke | Screen/Normal | Long (20–300+ frames) |
| 4 | Debris field | Physical objects thrown | Normal (with alpha) | Medium (10–60 frames) |
| 5 | Dust/ground kick-up | Secondary ground cloud | Normal/Screen | Long (15–120 frames) |
| 6 | Secondary fire | Post-blast fires | Add/Screen | Medium-long |
| 7 | Ambient light flash | Explosion illuminates surroundings | Adjustment Layer | Match fireball brightness |

**Each layer is a SEPARATE particle system/comp element. Not one combined Particular instance.**
**Debris reaches max height AFTER the fireball peaks. Independent timing = separated layers.**

---

## Explosion Timing Reference

| Frame Range | Active Elements |
|-------------|----------------|
| 0–3 | Fireball core peak + shockwave |
| 3–20 | Fireball billowing; smoke begins |
| 10–60 | Debris maximum scatter |
| 15–120 | Dust cloud rises and spreads |
| 20–300 | Smoke column continues rising |

---

## Destruction FX Tool Comparison

| Tool | Scale | Physics | Cost | Industry Use |
|------|-------|---------|------|-------------|
| Trapcode Particular | Small-medium (dust, embers) | Particle | $199/yr | Broadcast, commercial |
| Blender Cell Fracture | Medium-large (rigid collapse) | Rigid body | Free | Indie film, learning |
| Houdini FLIP | Hero (fluids, pyro) | Full fluid sim | $269/yr | ILM, Weta, Framestore |
| Houdini Rigid Body | Hero (destruction) | Full rigid sim | $269/yr | ILM, Weta, Framestore |
| AE CC Particle World | Small (sparks, ash) | Basic | Free (AE) | Broadcast, motion graphics |

---

## Muzzle Flash Components

| Element | Duration | Blend Mode | Critical Detail |
|---------|---------|-----------|----------------|
| Flash burst | 1–3 frames | Add | White/yellow light burst |
| Flash element | 1–3 frames | Add/Screen | Radial irregular light burst |
| Light on actor/environment | 1–3 frames | Adjustment Layer | MOST COMMONLY MISSED |
| Smoke puff | 3–15 frames | Screen/Normal | Small Particular emitter |
| Ejected casings (optional) | 10–30 frames | Normal | Tight shots only |

**Workflow: Track muzzle → 2D point track → Null → parent all flash pre-comp elements to Null.**

---

## Lens Effect Reference

| Effect | Method | Blend Mode | Key Detail |
|--------|--------|-----------|-----------|
| Lens flare | Optical Flares or built-in; track to light source | Add/Screen | Keyframe opacity to zero when occluded |
| Chromatic aberration | Scale R up 100.5%; B down 99.5%; Channel Combiner | Applied | More pronounced at frame corners |
| Film grain | Single Adjustment Layer at top of comp | Overlay/Soft Light 10–30% | ONE layer for entire comp, never per element |

---

## Film Grain Rule

**Apply film grain as ONE Adjustment Layer at the top of the comp stack.**
- Per-element grain = non-correlated noise = immediately looks wrong
- Single grain layer = unified noise = photographic result

---

## Blender → AE Destruction Pipeline

| Step | Action |
|------|--------|
| 1 | Model destruction object in Blender |
| 2 | Cell Fracture add-on → Voronoi fragments |
| 3 | Assign fragments as Active rigid bodies; ground as Passive |
| 4 | Apply impulse force; run simulation |
| 5 | Render multi-pass EXR: diffuse, spec, shadow, AO, Z-depth |
| 6 | Shadow catcher material for ground shadow element |
| 7 | Import EXR into AE/Nuke; color match to plate via HDR probe |

**Scale: 1 Blender unit = 1 meter. Match real-world object scale or CG will be wrong size.**

---

## Interactive Light Workflow

| Step | Action |
|------|--------|
| 1 | Identify the fireball frame range (max brightness period) |
| 2 | Add Adjustment Layer over the plate |
| 3 | Draw radial mask near the illuminated actor/surface |
| 4 | Apply Curves boost matching the explosion's warm color |
| 5 | Keyframe the opacity to track the fireball's brightness over time |

**The absence of interactive light is the most common action FX error.**
**A 100-foot fireball would illuminate everything within 200 feet.**

---

## Action FX Compositing Order (Top to Bottom)

```
Grain Adjustment Layer     ← TOP
Lens Flare
Chromatic Aberration
Foreground Smoke/Dust
Debris Field
Secondary Fire
Smoke Column
Shockwave Ring
Fireball Core
Background Extension / Sky
Live-Action Plate          ← BOTTOM
```

---

## ILM Endgame Explosion Tiers

| Tier | Type | Approach | Timeline |
|------|------|---------|---------|
| A (Hero) | Ship destruction, gauntlet blast | Full Houdini sim + Nuke comp | 14+ weeks |
| B (Mid) | Vehicle/building destruction | Houdini pyro + Particular + Nuke | 4–8 weeks |
| C (Background) | Battle atmosphere, distant FX | Trapcode Particular + library elements | 1–3 weeks |
| D (Weapon FX) | Muzzle flashes, impacts | AE from library elements | 2–5 days |

---

## Exam Quick-Hits

- **7 layers minimum** for a convincing explosion, any fewer and the effect reads as thin
- **Shockwave ring:** Nearly invisible, Screen blend, radial distortion only. Its absence makes FX look fake.
- **Grain = one layer:** Never apply grain per element. Single Adjustment Layer at top of stack.
- **Muzzle flash light on environment:** The environmental flash is the most commonly missed component.
- **Blender scale:** 1 unit = 1 meter. Wrong scale = wrong-sized CG in plate.


---

## ✅ Module Sign-Off Checklist

- [ ] Can explain core concept without notes
- [ ] Can name 3 industry examples
- [ ] Know the 2 most common mistakes
- [ ] Understand when to use each technique

**Key formula / ratio / number to memorize:**
See the exam callouts (🎯) in the Reading.md for this module.
