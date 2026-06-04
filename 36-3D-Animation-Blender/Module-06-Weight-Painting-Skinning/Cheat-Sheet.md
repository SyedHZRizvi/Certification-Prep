---
permalink: /36-3D-Animation-Blender/Module-06-Weight-Painting-Skinning/Cheat-Sheet/
title: "Module 6 Cheat Sheet: Weight Painting & Skinning"
---

# 🗒️ Module 6 Cheat Sheet: Weight Painting & Skinning

---

## Weight Paint Color Scale

| Color | Weight Value | Meaning |
|---|---|---|
| Deep blue | 0.0 | No influence |
| Cyan | ~0.25 | Low influence |
| Green | ~0.5 | Equal share |
| Yellow | ~0.75 | Strong influence |
| Red | 1.0 | Full influence |

---

## Weight Paint Tools

| Tool | Key | Use |
|---|---|---|
| Draw | 1 | Paint weight values |
| Blur | 2 | Smooth gradient |
| Average | 3 | Average surrounding values |
| Smear | 4 | Drag weight values |
| Gradient | G | Linear/radial gradient |
| Sample | Shift+Click | Pick weight from surface |

---

## Critical Settings

- **Auto Normalize: ALWAYS ON** — forces all weights to sum to 1.0
- **Strength:** 0.1–0.3 for subtle painting; 1.0 for hard override
- **Radius:** scroll wheel to resize brush

---

## Skin Bag Fix Workflow

1. Pose Mode: raise arm to 90° (problem position)
2. Weight Paint: select Chest vertex group → paint 0.3–0.4 on inner armpit
3. Select Shoulder vertex group → paint 0.4–0.5 on outer shoulder/armpit
4. Select UpperArm.L → reduce deep armpit to 0.2–0.3
5. Auto Normalize redistributes remaining weight
6. If still needed: add corrective shape key + driver

---

## Shape Keys Workflow

1. Object Data Props → Shape Keys → + (creates Basis)
2. + again → new shape (e.g., "Smile")
3. Edit Mode → sculpt/move vertices for the expression
4. Exit → slide value 0→1 to blend

**Drive from bone:** Right-click shape key value → Add Driver → set bone rotation channel → map range

---

## Common Facial Shape Keys

| Name | Expression |
|---|---|
| Blink.L / Blink.R | Eye close (independent) |
| Smile | Corner of mouth raises |
| Frown | Corner of mouth lowers |
| Mouth.Open | Jaw drop |
| Brow.Raise.L/R | Brow up |
| Brow.Frown.L/R | Brow inward furrow |

---

## Production Time Budget (per *Sprite Fright*)

| Day | Work |
|---|---|
| Day 1 | Auto weights applied; gross corrections |
| Day 2 | Per-limb testing; armpits, hips, fingers |
| Day 3 | Corrective shape keys + drivers |
| Day 4 (if needed) | Facial range-of-motion verification |
