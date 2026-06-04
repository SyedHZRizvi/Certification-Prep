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
