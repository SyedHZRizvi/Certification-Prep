---
permalink: /36-3D-Animation-Blender/Module-02-3D-Modeling/Cheat-Sheet/
title: "Module 2 Cheat Sheet: 3D Modeling for Animation"
---

# 🗒️ Module 2 Cheat Sheet: 3D Modeling for Animation

---

## Topology Rules (Memorize)

| Rule | Why |
|---|---|
| Quads only on animated surfaces | Predictable deformation + subdivision |
| Edge loops at every joint | Provides geometry for bending |
| No n-gons | Unpredictable subdivision artifacts |
| Even edge spacing | Clean UV maps + smooth subdivide |
| Apply scale before rigging | Bone math requires unit scale |
| Normals pointing outward | Check with Viewport Overlays → Face Orientation |

---

## Minimum Edge Loop Count per Joint

| Joint | Minimum Loops |
|---|---|
| Elbow / Knee | 3 concentric |
| Shoulder / Hip | 4–5 concentric |
| Wrist / Ankle | 2 concentric |
| Knuckle (finger) | 2 per knuckle |
| Jaw hinge | 3 in jaw area |
| Eyelid | 2 oval rings |

---

## Subdivision Surface Levels

| Level | Polygon Multiplier | Use |
|---|---|---|
| 0 | ×1 | Topology check |
| 1 | ×4 | Blocking + weight paint |
| 2 | ×16 | Animation deformation |
| 3 | ×64 | Final Cycles render |

---

## Essential Edit Mode Shortcuts

| Shortcut | Action |
|---|---|
| Ctrl+R | Loop cut |
| Scroll (during Ctrl+R) | Number of cuts |
| K | Knife |
| E | Extrude |
| I | Inset |
| Ctrl+B | Bevel |
| Shift+E | Set crease (sharpens under subsurf) |
| Alt+Click | Select edge loop |
| Ctrl+Alt+Click | Select edge ring |
| O | Toggle Proportional Editing |
| Scroll (during transform + O) | Resize proportional radius |
| P | Separate to new object |
| Ctrl+J | Join objects (Object Mode) |

---

## Mirror Modifier Setup

1. Add Modifier → Generate → Mirror
2. Set Axis: X (left-right)
3. Enable: Clipping (prevents crossing)
4. Enable: Merge (welds seam vertices)
5. Only apply Mirror when ready for asymmetric detail

---

## Polygon Budget Reference

| Pipeline | Base Mesh (pre-subsurf) | Render Polys (subsurf 2–3) |
|---|---|---|
| Indie animation | 2K–6K | 32K–384K |
| Broadcast | 6K–15K | 96K–960K |
| Feature film | 15K–50K | 240K–3.2M |

*Sprite Fright* reference: **4,800 base → ~77,000 at subsurf 2**

---

## Face Count Vocabulary

| Term | Meaning |
|---|---|
| Vert (vertex) | A point in 3D space |
| Edge | Line connecting two vertices |
| Face (quad) | Four vertices forming a polygon |
| Tri | Three-vertex face |
| N-gon | Five or more vertex face |
| Pole | Vertex where more or fewer than 4 edges meet |
| Loop | Continuous ring or row of edges |
