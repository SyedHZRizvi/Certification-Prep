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

- **Auto Normalize: ALWAYS ON**, forces all weights to sum to 1.0
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

---

## Automatic Weight Failure Patterns

| Symptom | Cause | Fix |
|---|---|---|
| Vertex doesn't move (blue) | No weight from any bone | Draw brush, weight 1.0 on correct bone |
| Vertex captured by wrong bone | Auto-weight heat map error | Reduce wrong bone; increase correct bone |
| Armpit collapse | UpperArm.L dominates armpit | Redistribute to Chest + Shoulder bones |
| Fingers all move together | Tips captured by one bone | Limit each tip to its phalanx bone group |
| Clothes captured by wrong bone | Garment overlaps wrong bone | Re-run with correct selection only |

---

## X Mirror Weight Painting Requirements

For X Mirror to work during weight painting:
- Bone names must use `.L` / `.R` suffix exactly
- Mesh must be symmetric (use Symmetrize in Edit Mode)
- Enable in Weight Paint header → Options → X Mirror
- Painting `UpperArm.L` automatically updates `UpperArm.R`

---

## Data Transfer Modifier (Weight Copy)

1. Select **target** mesh (high-poly or retopo)
2. Add Modifier → Generate → Data Transfer
3. Source Object: proxy/source mesh
4. Enable Vertex Data → Vertex Groups
5. Apply → vertex groups transfer by surface proximity

Used in *Coffee Run* pipeline: paint on 1,200-poly proxy → transfer to 45,000-poly final.

---

## Vertex Group Operations Reference

| Operation | Where | Effect |
|---|---|---|
| **Clean** | Vertex Groups → Dropdown → Clean | Remove near-zero weights (< threshold) |
| **Limit Total** | Vertex Groups → Dropdown → Limit Total | Max N bone influences per vertex (4 for games) |
| **Sort Alphabetically** | Vertex Groups → Dropdown → Sort | Alphabetical order for easier navigation |
| **Copy Vertex Group** | Edit Mode → Mesh → Vertices | Copy active group to same-named group on other objects |
| **Remove from All** | Edit Mode → Mesh → Vertices | Remove selected verts from all vertex groups |

**Limit Total = required before FBX export to Unity/Unreal (max 4 influences per vertex).**

---

## Quadruped Skinning Notes

- Spine: 5–7 bones; FK primary; more range of motion than biped
- Tail: Spline IK along Bezier curve; control curve control points
- Neck-body junction: 3–4 vertebra transition; abrupt = "snake swallowing" artifact
- Mechanical joints: weight 1.0 hard assignments (no blending); sharp panel separation

---

## Gotcha Quick Reference

| Gotcha | Fix |
|---|---|
| Vertex group name mismatch | Names are case-sensitive: "UpperArm.L" ≠ "upperarm.L" |
| Auto Normalize off | Always enable before any stroke |
| Editing Basis vs. shape key | Select shape key in list first; Pin for clarity |
| Shape keys fighting | Conflicting shapes: use driver to prevent simultaneous activation |
| Asymmetric sculpt breaks X Mirror | Complete weight painting before asymmetric sculpt detail |
