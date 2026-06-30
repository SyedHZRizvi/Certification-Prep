---
permalink: /35-Motion-Graphics-UI-Animation/Module-04-Logo-Brand-Motion/Cheat-Sheet/
title: "Module 4 Cheat Sheet: Logo & Brand Motion"
---

# ⚡ Module 4 Cheat Sheet, Logo & Brand Motion

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


---

## 📌 Quick Reference Summary

| Concept | Key Rule / Value | Why It Matters |
|---|---|---|
| Core tool | See module Reading.md | Foundation of the workflow |
| Common mistake | Check "⚠️ Gotcha" sections | Saves hours of debugging |
| Delivery standard | See platform spec table | Client/employer expectation |
| Career application | Salary range in README | Know your market value |

## ✅ Self-Assessment

Before marking this module complete:
- [ ] Core technique mastered (can do without reference)
- [ ] Understand *why* the technique works, not just how
- [ ] Familiar with at least two real productions that use it
- [ ] Know the common failure mode and how to diagnose it

---

## 🏆 Exam Performance Standards

### Beginner Benchmark
Can identify the technique and explain it in 1 sentence.

### Intermediate Benchmark
Can demonstrate the technique correctly in a controlled exercise.

### Advanced Benchmark
Can apply the technique under production constraints (time pressure, client feedback, iteration cycles) and teach it to a junior.

### Professional Standard
Can make real-time decisions about when NOT to use the technique, knowing when a simpler or faster approach delivers equivalent results.

---

## 🗂️ File Organization Reference

| Asset type | Recommended naming | Storage location |
|---|---|---|
| Project files | `YYYYMMDD_ProjectName_v001` | `/Projects/` |
| Final deliverables | `ProjectName_FINAL_v001` | `/Deliverables/` |
| Reference footage | `ref_topic_source` | `/Reference/` |
| Client feedback | `feedback_date_initials` | `/Admin/` |

---

## ⚡ 60-Second Review

If you can answer these in under 60 seconds, you're ready for the module quiz:

1. What is the primary technique covered in this module called?
2. Which real production demonstrates it most clearly?
3. What's the most common mistake beginners make?
4. What file format or setting is critical to get right?
5. How does this technique change when working at a professional studio vs. solo?
