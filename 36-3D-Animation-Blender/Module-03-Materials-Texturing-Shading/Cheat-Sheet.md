---
permalink: /36-3D-Animation-Blender/Module-03-Materials-Texturing-Shading/Cheat-Sheet/
title: "Module 3 Cheat Sheet: Materials, Texturing & Shading"
---

# 🗒️ Module 3 Cheat Sheet: Materials, Texturing & Shading

---

## Principled BSDF Key Parameters

| Parameter | Physical Meaning | Common Values |
|---|---|---|
| Base Color | Diffuse albedo | RGB color |
| Metallic | Conductor (1) vs. dielectric (0) | 0 or 1 only |
| Roughness | Micro-surface texture | 0=mirror, 1=chalk |
| IOR | Index of Refraction | Glass 1.45, Water 1.33, Plastic 1.5 |
| Subsurface Weight | Sub-surface scatter strength | 0.2–0.8 for skin |
| Subsurface Radius | Per-channel scatter depth | R=1.0, G=0.2, B=0.1 for skin |
| Sheen | Micro-fiber retroreflection | Velvet, fabric |
| Coat Weight | Clearcoat layer | Car paint, lacquer |
| Emission | Additive glow | Screens, neon, LED |

---

## Shader Editor Shortcuts

| Shortcut | Action |
|---|---|
| Shift+A | Add node |
| Ctrl+X | Delete + reconnect |
| Ctrl+Shift+Click | Preview node in viewport |
| M | Mute/bypass node |
| Ctrl+G | Group selected nodes |
| F | Connect nearest sockets |

---

## Essential Node Chain (PBR Character)

```
Texture Coordinate → Mapping → Image Texture (Base Color) ──────────────┐
                                                                         ↓
                             Image Texture (Roughness, Non-Color) ──→ Principled BSDF → Material Output
                                                                         ↑
                             Image Texture (Metallic, Non-Color) ────────┤
                                                                         ↑
                             Image Texture (Normal, Non-Color) → Normal Map ┘
```

---

## UV Unwrapping Workflow

1. Mark seams: Edit Mode → Ctrl+E → Mark Seam
2. Select all (A) → U → Unwrap
3. Check: UV Editor checkerboard pattern (distortion = stretched squares)
4. Pack: U → Pack Islands
5. Export for Substance Painter or paint in Blender

**Best seam locations:** Under arms · inside legs · behind ears · under chin

---

## Texture Map Color Spaces

| Map | Color Space in Image Texture Node |
|---|---|
| Base Color / Albedo | sRGB |
| Metallic | Non-Color |
| Roughness | Non-Color |
| Normal | Non-Color |
| AO | Non-Color |
| Emissive | sRGB |

---

## Substance Painter Export for Blender

Export preset: **Blender (Metallic/Roughness)**
Normal map convention: **OpenGL** (not DirectX)
Maps exported: BaseColor, Metallic, Roughness, Normal, Emissive, AO

---

## Texture Resolution Reference

| Pipeline | Base Color | Normal / Roughness |
|---|---|---|
| Indie short | 2048×2048 | 2048×2048 |
| Broadcast | 4096×4096 | 2048×2048 |
| Feature animation | 4096×4096 | 4096×4096 |

---

## PBR Parameter Ranges by Material

| Material | Metallic | Roughness | IOR | Sub-Weight |
|---|---|---|---|---|
| Polished chrome | 1.0 | 0.02–0.05 |, | 0 |
| Brushed aluminum | 1.0 | 0.3–0.5 |, | 0 |
| Matte plastic | 0 | 0.7–0.9 | 1.45 | 0 |
| Glossy plastic | 0 | 0.05–0.2 | 1.45 | 0 |
| Glass | 0 | 0.0 | 1.45–1.52 | 0 |
| Water | 0 | 0.0 | 1.33 | 0 |
| Human skin | 0 | 0.4–0.6 | 1.4 | 0.1–0.4 |
| Car paint | 0 | 0.3–0.5 | 1.5 | 0 |
| Wood (raw) | 0 | 0.7–0.9 | 1.5 | 0 |

---

## Node Connection Rules

| From | To | Valid? |
|---|---|---|
| BSDF output | Material Output → Surface | Yes |
| Color output | BSDF input (e.g., Base Color) | Yes |
| Float output | Numeric BSDF input (e.g., Roughness) | Yes |
| BSDF output | Base Color socket | No, type mismatch |
| Color output | Material Output → Surface | No, need shader first |

---

## Shader to RGB: Toon Shading Recipe

```
Diffuse BSDF → Shader to RGB → Color Ramp → Emission → Material Output
                                (set to Constant interpolation)
```
This creates flat cel-shaded bands, no Principled BSDF needed.

---

## EEVEE Blend Mode Reference

| Blend Mode | Visual Effect | When to Use |
|---|---|---|
| Opaque | Fully solid; no transparency | Default for all solid surfaces |
| Alpha Clip | Hard-edge cutout (binary) | Foliage, fences, alpha decals |
| Alpha Blend | Smooth transparency | Glass, water, ghosts |
| Alpha Hashed | Dithered transparency (noisy but accurate) | When Alpha Blend has sorting artifacts |

**Alpha Blend vs. Alpha Hashed:** Alpha Blend has sorting artifacts when transparent objects overlap. Alpha Hashed avoids sorting but adds noise (requires higher samples or temporal accumulation).

---

## Gotcha Quick Reference

| Gotcha | Fix |
|---|---|
| Roughness/Metallic maps washed out | Set Image Texture Color Space to Non-Color |
| Metallic = 0.5 looks wrong | Use only 0 or 1; 0.5 has no physical basis |
| UV seam visible in render | Move seam to hidden area; lower angle = less visible |
| BlenderKit asset needs license | Check per-asset license in BlenderKit panel before commercial use |
| EEVEE glass shows solid gray | Set Blend Mode: Alpha Blend; enable Screen Space Refraction |
