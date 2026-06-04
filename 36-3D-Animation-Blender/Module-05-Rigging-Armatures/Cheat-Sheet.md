---
permalink: /36-3D-Animation-Blender/Module-05-Rigging-Armatures/Cheat-Sheet/
title: "Module 5 Cheat Sheet: Rigging & Armatures"
---

# 🗒️ Module 5 Cheat Sheet: Rigging & Armatures

---

## Bone Basics

| Term | Meaning |
|---|---|
| Head | Proximal end (closer to root/parent) |
| Tail | Distal end (further from root) |
| Roll | Rotation around bone's Y (length) axis |
| Parent | The bone this one follows |

**Naming:** `.L` and `.R` suffixes (e.g., `UpperArm.L`, `UpperArm.R`)

---

## Armature Edit Mode Shortcuts

| Shortcut | Action |
|---|---|
| E | Extrude bone from tail |
| Ctrl+R | Rotate bone roll |
| Ctrl+N | Recalculate bone roll |
| Ctrl+P → Keep Offset | Set parent relationship |
| Alt+P | Clear parent |
| Symmetrize | Mesh → Symmetrize (mirrors .L to .R) |

---

## IK vs. FK Comparison

| | IK | FK |
|---|---|---|
| Control | Move end effector | Rotate each bone |
| Best for | Foot planting, reaching | Free arms, tails, follow-through |
| Chain Length | Set on IK constraint | Infinite (no constraint needed) |
| Blender setup | IK Constraint on tip bone | Default (no constraint) |

---

## IK Setup Steps

1. Pose Mode → select tip bone (e.g., lower leg)
2. Bone Properties → Add Constraint → Inverse Kinematics
3. Target: Armature · Bone: IK target control bone
4. Chain Length: 2 (for arm/leg)
5. Create pole target → set Pole Target + Pole Angle on constraint

---

## Rigify Workflow

1. Enable: Preferences → Add-ons → Rigging: Rigify
2. Add meta-rig: Shift+A → Armature → Human (Meta-Rig)
3. Edit mode: scale meta-rig to character proportions
4. Armature Properties → Rigify → Generate Rig
5. Parent mesh to rig: mesh → Shift+select rig → Ctrl+P → Armature Deform with Auto Weights

---

## Rigify Bone Types

| Type | Code | Visibility | Role |
|---|---|---|---|
| Control | CTRL | Visible | Animator interface |
| Deform | DEF | Hidden | Mesh deformation |
| Mechanism | MCH | Hidden | Intermediate calculation |
| Original | ORG | Hidden | Source meta-rig reference |

---

## Common Deformation Problems + Fixes

| Problem | Fix |
|---|---|
| Skin bag (armpit collapse) | Corrective shape key + driver |
| Candy wrapper twist (forearm) | Corrective shape key + driver |
| Knee/elbow snapping | Add pole target, adjust Pole Angle |
| Wrong bend direction | Fix bone roll (Ctrl+N) |
| Non-unit scale on rig | Apply scale (Ctrl+A → Scale) before rigging |

---

## Bone Collections (Blender 4.x)

- Replace Bone Layers from Blender 3.x and earlier
- Toggle visibility per collection from Armature Properties
- Rigify uses: DEF, ORG, MCH, and named CTRL collections
- Create custom collections: Armature Properties → Bone Collections → "+"
