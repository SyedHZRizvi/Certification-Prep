---
permalink: /36-3D-Animation-Blender/Module-10-Short-Project/Cheat-Sheet/
title: "Module 10 Cheat Sheet: Short Film Project"
---

# 🗒️ Module 10 Cheat Sheet: Short Film Project

---

## Production Phase Order

1. **Pre-production** — Concept sheet, storyboard, animatic (VSE)
2. **Modeling** — Quads, edge loops, UV unwrap, scale applied
3. **Materials** — PBR or stylized; no missing materials
4. **Rigging** — Rigify, auto weights, facial shape keys
5. **Skinning** — Weight painting corrections, corrective shape keys
6. **Animation** — Blocking (Constant) → spline polish (Bezier)
7. **Lighting** — Three-point + HDRI per shot
8. **Rendering** — Cycles, PNG sequences, bake physics first
9. **Compositing** — Color grade, Glare, combine passes
10. **Delivery** — H.264 MP4, CRF 18–23, 1920×1080, 24fps

---

## 10-Second Shot Structure (4-Shot Version)

| Shot | Duration | Frames | Content |
|---|---|---|---|
| SH01 | 2s | 1–48 | Wide establishing |
| SH02 | 3s | 49–120 | Character + problem |
| SH03 | 3s | 121–192 | Action |
| SH04 | 2s | 193–240 | Resolution / emotion |

---

## Polygon Budget (Before Subdivision)

| Asset | Polygons |
|---|---|
| Main character | 2,000–4,000 |
| Hero prop | 200–500 |
| Background | 300–800 |
| BG elements | 100–300 each |

---

## Modeling Phase Checklist

- [ ] All meshes: quads only
- [ ] Edge loops at all joints
- [ ] Scale applied (Ctrl+A → Apply Scale)
- [ ] Mirror Modifier applied
- [ ] UV unwrapped
- [ ] Loose geometry removed

---

## Animation Phase Checklist

- [ ] Blocking: Constant interpolation, key poses only
- [ ] Spline: switch to Bezier; check Graph Editor
- [ ] Walk cycle: seamless loop with Cycles modifier
- [ ] Follow-through on all secondary elements
- [ ] 240 frames reviewed in real-time playback

---

## Self-Review Checklist (Before Portfolio Upload)

**Technical:**
- [ ] No Z-fighting (flickering surfaces)
- [ ] No render noise (denoising applied)
- [ ] No shadow acne
- [ ] 24fps consistent, no stutter
- [ ] 1920×1080, H.264 MP4

**Animation:**
- [ ] Ease-in/out on all major poses
- [ ] Character reads against background
- [ ] No rotation pops in Graph Editor

**Story:**
- [ ] Understandable in one watch
- [ ] Emotional beat is felt
- [ ] Runtime 8–12 seconds

---

## Render Settings Summary

| Setting | Value |
|---|---|
| Renderer | Cycles |
| Samples | 256 |
| Denoiser | OptiX (NVIDIA) or OIDN (CPU) |
| Output | PNG sequences (not MP4) |
| Resolution | 1920×1080 |
| Frame rate | 24fps |
| Final encode | H.264, CRF 18–23 |

---

## Open Movie Pipeline Comparison

| Film | Team | Duration | Key Technique |
|---|---|---|---|
| *Coffee Run* (2020) | 2 artists | 2 min | Solo character; proxy-weight pipeline |
| *Charge* (2022) | ~5 artists | 3 min | Hard-surface robot; HDRI-zone lighting |
| *Sprite Fright* (2021) | 14 artists | 13 min | Organic characters; multi-layer render |

For a 10-second solo project, match *Coffee Run* scale: 1 character, 1 set, 4–6 shots.

---

## Material Strategy Decision

| Priority | Approach |
|---|---|
| Fastest (stylized) | Toon BSDF or flat vertex color |
| Moderate (no UVs) | Principled BSDF + procedural Noise textures |
| Best (photo-quality) | Principled BSDF + 2048px texture maps (requires UV unwrap) |

---

## Pre-Render Checklist

- [ ] Renderer: Cycles; GPU Compute enabled in System Preferences
- [ ] Samples: 256 with OptiX or OIDN denoising
- [ ] Output: PNG sequence, absolute path, 1920×1080
- [ ] Frame range: 1–240 (10 seconds at 24fps)
- [ ] All simulations baked
- [ ] No broken texture links (pink materials)
- [ ] Color management: Filmic (not Standard)
- [ ] Statistics checked: RAM usage within GPU VRAM limit

---

## Color Management Reference

| Setting | Value | Effect |
|---|---|---|
| View Transform | Filmic | Tone-mapping; prevents overexposed highlights |
| Look | None | Clean Filmic without additional grade |
| Exposure | 0 | Neutral; adjust in Compositor |
| Gamma | 1.0 | Neutral |

**Never use Standard view transform** — clips bright values to white; looks CG and flat.

---

## Gotcha Quick Reference

| Gotcha | Fix |
|---|---|
| Interpolation change only on one key | A (select all in Dope Sheet) → T to change all |
| Walk cycle character teleports | Cycles modifier → Repeat with Offset (not Repeat) |
| Colors look flat after render | Switch View Transform from Standard to Filmic |
| Render crashes mid-sequence | PNG sequences restart at last frame; MP4 must restart from frame 1 |
