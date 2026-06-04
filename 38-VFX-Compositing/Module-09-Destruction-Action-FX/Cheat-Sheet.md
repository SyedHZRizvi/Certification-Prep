---
title: "Module 9 Cheat Sheet: Destruction & Action FX"
---

# 🗒️ Module 9 Cheat Sheet: Destruction & Action FX

## The Rule of 7 Explosion Layers

| # | Layer | Blend Mode | Duration |
|---|-------|-----------|---------|
| 1 | Fireball core | Add/Screen | Short (1–20 frames) |
| 2 | Shockwave ring | Screen (subtle distortion) | Very short (0–5 frames) |
| 3 | Smoke column | Screen/Normal | Long (20–300+ frames) |
| 4 | Debris field | Normal | Medium (10–60 frames) |
| 5 | Dust/ground kick-up | Normal | Long (15–120 frames) |
| 6 | Secondary fire | Add/Screen | Medium-long |
| 7 | Ambient light flash | Adjustment Layer | Match fireball brightness |

---

## Explosion Timing Reference

| Frame Range | Active Elements |
|-------------|----------------|
| 0–3 | Fireball core peak + shockwave |
| 3–20 | Fireball billowing, smoke begins |
| 10–60 | Debris maximum scatter |
| 15–120 | Dust cloud rises |
| 20–300 | Smoke column continues |

---

## Muzzle Flash Components

| Element | Duration | Blend |
|---------|---------|-------|
| Flash burst | 1–3 frames | Add |
| Flash light on actor face | 1–3 frames | Adjustment Layer |
| Smoke puff | 3–15 frames | Screen/Normal |
| Ejected casings (optional) | 10–30 frames | Normal |

**Track muzzle with 2D point tracker → Null → parent all flash elements.**

---

## Lens Effect Reference

| Effect | How | Blend |
|--------|-----|-------|
| Lens flare | Optical Flares or built-in; track to light; keyframe opacity for occlusion | Add/Screen |
| Chromatic aberration | Scale R up 100.5%, B down 99.5%; Channel Combiner | Applied to comp |
| Film grain | Single Adjustment Layer at top | Overlay/Soft Light, 10–30% |

**Film grain rule: ONE Adjustment Layer for the entire comp — never per layer.**

---

## Blender → AE Destruction Pipeline

1. Model destruction object
2. Cell Fracture add-on → fragments
3. Rigid body simulation
4. Render multi-pass EXR (diffuse, spec, shadow, Z-depth)
5. Shadow catcher for ground shadow
6. Import into AE/Nuke
7. Color match to plate using HDR probe

---

## Action FX Compositing Order (Top to Bottom)

```
Grain Adjustment Layer (TOP)
Lens Flare
Foreground Smoke/Dust
Debris Field
Secondary Fire
Smoke Column
Shockwave Ring
Fireball Core
Background / Plate
```
