---
permalink: /36-3D-Animation-Blender/Module-04-Lighting-HDRI/Cheat-Sheet/
title: "Module 4 Cheat Sheet: Lighting & HDRI"
---

# 🗒️ Module 4 Cheat Sheet: Lighting & HDRI

---

## Three-Point Lighting Setup

| Light | Role | Intensity | Position |
|---|---|---|---|
| Key | Primary source, main shadows | 100% | 30–45° side, slightly above eye |
| Fill | Reduce shadow contrast | 25–50% of key | Opposite side from key |
| Rim / Back | Separate subject from BG | 75–150% of key | Behind subject, toward camera |

**Key-to-fill ratio by mood:**
- Comedy/family: 2:1 to 3:1 (fill at 33–50%)
- Drama: 4:1 to 6:1 (fill at 16–25%)
- Thriller/horror: 16:1+ (fill at 6% or less)

---

## Blender Light Types

| Type | Shadows | Best For |
|---|---|---|
| Point | Spherical falloff | Candles, small practicals |
| Sun | Parallel (infinite) | Outdoor sunlight, rotation only, not position |
| Spot | Cone, defined edge | Flashlights, stage spotlights |
| Area | Soft, realistic | Studio key/fill, most versatile |

---

## HDRI Setup Steps

1. World Properties → Surface → Use Nodes
2. Shader Editor (World context) → Add Environment Texture node
3. Open .hdr or .exr file
4. Connect: Environment Texture → Background → World Output
5. Add Mapping + Texture Coordinate (Generated) before Env Texture for rotation
6. Adjust Strength on Background node (0.3–0.6 for subtle fill)

**Free HDRIs (CC0):** polyhaven.com

---

## Color Temperature Reference

| Kelvin | Color | Source |
|---|---|---|
| 1,800K | Deep orange | Candlelight |
| 2,700K | Warm yellow | Incandescent |
| 3,200K | Warm white | Tungsten studio |
| 5,600K | Neutral | Camera flash / noon sun |
| 6,500K | Cool white | Overcast sky |
| 10,000K | Deep blue | Clear blue sky |

---

## Shadow Softness Rule

- **Large area light** → soft, diffuse shadows (overcast feel)
- **Small area light / spot** → hard, sharp shadows (theatrical feel)
- Size setting on Area light is in meters, match to real-world equivalent

---

## Genre Lighting Quick Reference

| Genre | Ratio | Color | Shadow |
|---|---|---|---|
| Horror | 16:1+ | Cool/sickly HDRI | Hard, deliberate |
| Comedy | 2:1–3:1 | Warm, sunny HDRI | Soft, minimal |
| Drama | 4:1–6:1 | Warm key / cool fill | Medium-soft |

---

## Sprite Fright Lighting Stats

- 147 shots, each individually lit
- 12–18 light objects per shot average
- HDRI strength: 0.3–0.6 (forest environment)
- Per-character rim lights in all group shots
- Key: 4,000K–5,000K | Rim: 6,500K (sky bounce)

---

## Cycles vs. EEVEE Lighting Capability Matrix

| Feature | Cycles | EEVEE |
|---|---|---|
| Global illumination | Physically accurate | Irradiance Volume (baked) |
| Caustics (glass/water) | Yes | No |
| Accurate soft shadows | Yes | Shadow maps only |
| HDRI ambient | Perfect | Needs baked probe |
| Bloom / glow | Compositor Glare | Native post-effect |
| Light Linking (4.1+) | Yes | Yes |
| Volume scatter | Full volumetric | Screen-space only |

---

## Volume Lighting Setup

1. Shift+A → Mesh → Cube → resize to fill scene
2. Add material → Shader Editor → Volume Scatter node → connect to Volume socket
3. Density: 0.01–0.05 (subtle haze) / 0.1+ (thick fog)
4. Scatter Color: slight warm for sunset, cool blue for overcast

---

## Lighting Shortcuts

| Shortcut | Action |
|---|---|
| Shift+A → Light | Add any light type |
| G → Z | Move light vertically |
| R → X | Rotate Sun light elevation |
| H | Hide selected light |
| M | Move to collection |

---

## Light Type Selection Table

| Question | Light Type |
|---|---|
| Outdoor sun? | Sun (rotation only) |
| Candle or small practical? | Point |
| Theatrical spotlight? | Spot |
| Studio softbox / window? | Area (Rectangle) |
| Environment ambient? | HDRI (World) |
| Glowing emissive object? | Emission material (not a light) |
| Only affects selected objects? | Any + Light Linking (4.1+) |

---

## IES Profiles Quick Note

IES (.ies) files describe real-world light distributions. Load via: Object Data → Light Nodes → IES Texture node → Open .ies file. Use for architectural photorealism; not needed for stylized animation.

---

## Gotcha Quick Reference

| Gotcha | Fix |
|---|---|
| Sun position doesn't change shadows | Sun uses rotation only, R → X to tilt |
| HDRI doesn't light interior (EEVEE) | Add Irradiance Volume probe + bake irradiance |
| Rim light too strong / washes out | Reduce to 75–120% of key; move further behind subject |
| Fireflies in Cycles | Enable Clamp Indirect (10); reduce Emission Strength |
| Light affects wrong objects | Use Light Linking (Object Properties → Light Linking) |
