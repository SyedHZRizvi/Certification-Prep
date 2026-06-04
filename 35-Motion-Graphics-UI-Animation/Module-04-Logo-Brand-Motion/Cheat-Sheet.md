---
permalink: /35-Motion-Graphics-UI-Animation/Module-04-Logo-Brand-Motion/Cheat-Sheet/
title: "Module 4 Cheat Sheet: Logo & Brand Motion"
---

# ⚡ Module 4 Cheat Sheet — Logo & Brand Motion

## Three Logo Reveal Techniques

| Technique | AE Tool | Point Count | Best For |
|-----------|---------|-------------|---------|
| Draw-On | Trim Paths (End 0%→100%) | N/A | Stroke paths, handwritten marks |
| Morph | Path Keyframes | Must match | Geometric transforms |
| 3D Flip | 3D Layer + Camera | N/A | Bold flat marks |

---

## Draw-On Setup
1. Import vector → Layer > Create > Create Shapes from Vector Layer
2. Open shape layer → Contents > [Shape] > Add > Trim Paths
3. Keyframe End: `0%` (start) → `100%` (reveal complete)
4. Add Offset keyframe if paths should stagger
5. Easing: Ease-In for momentum effect

---

## Morph Setup
1. Create Shape A as closed path
2. Copy path value at frame 0 as keyframe
3. Advance to morph frame; edit path to Shape B
4. Critical: same number of anchor points on both shapes
5. Add overshoot keyframe at 80% point for spring feel

---

## 3D Flip Setup
1. Enable 3D on logo layer (3D cube icon)
2. Add > Camera (One-Node Camera)
3. Keyframe Y Rotation: `90°` → `0°`
4. Use Ease-Out for deceleration into final position

---

## Brand Motion Vocabulary Components

| Component | What to Define |
|-----------|----------------|
| Easing signature | Spring? Ease-in-out? Custom bezier? |
| Speed signature | Fast (15–18f) or slow (60–90f)? |
| Direction logic | Entry direction (left/bottom/center) |
| Color-in-motion | Color appearance order |
| Sound pairing | Sonic signature (whoosh, hit, bong) |
| Prohibited motions | Upside-down, mirror, <50% opacity, etc. |

---

## Broadcast Safe Zones

| Zone | Percentage | Purpose |
|------|-----------|---------|
| Title Safe | 80% | Keep text and logos inside |
| Action Safe | 93.75% | Moving elements stay inside |
| Full Bleed | 100% | Backgrounds can fill this |

---

## Broadcast Color

- **Color Space:** Rec. 709 (HD) / BT.2020 (HDR)
- **Luminance Range:** 16–235 (not 0–255)
- **Set in AE:** Composition Settings → Color Management → Rec. 709

---

## Case Study Quick Reference

| Brand | Technique | Duration | Easing | Sound |
|-------|-----------|----------|--------|-------|
| Nike | Draw-On | 12–18f | Ease-In | Whoosh + hit |
| Netflix | 3D Z-layers | 90f (3.75s) | Spring snap | "tudum" |
| Google | Morph + Color | 500ms | Ease-in-out | Subtle chime |

---

## Delivery Format for Animated Logos

| Format | Use Case |
|--------|---------|
| MOV + Alpha (ProRes 4444) | Broadcast, compositing over any bg |
| MP4 H.264 | Social media, web embedding |
| GIF | Email, simple web (but avoid for quality) |
| Lottie JSON | Web/mobile with interactivity |
| WebM + Alpha | Web with transparency |
