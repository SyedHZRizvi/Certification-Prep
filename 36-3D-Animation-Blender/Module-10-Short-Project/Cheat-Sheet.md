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
