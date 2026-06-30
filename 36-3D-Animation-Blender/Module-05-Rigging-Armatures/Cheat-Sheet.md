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

---

## Bone Constraint Reference

| Constraint | Use Case |
|---|---|
| Inverse Kinematics | Foot/hand planting; chain solver |
| Copy Rotation | Eye tracking, secondary follow |
| Limit Rotation | Prevent hyperextension |
| Track To | Eye aim, camera tracking |
| Stretch To | Stretchy IK limbs |
| Child Of | Character holding a prop |
| Spline IK | Tails, tentacles, hair chains |
| Floor | Foot not clipping through ground |

---

## NLA Editor Key Terms

| Term | Definition |
|---|---|
| Action | Named set of F-Curves (one performance) |
| Strip | Instance of an Action on the NLA timeline |
| Push Down | Commit action to NLA, free action slot |
| Tweak Mode | Edit strip's keyframes in Action Editor |
| Blend In / Out | Frame fade at strip start/end |
| Extrapolation | Behavior beyond strip bounds |

**NLA Blend Types:** Replace (override lower) → Combine (additive, most useful) → Add → Subtract → Multiply

---

## Rigging Method Comparison

| Method | Setup Time | Best For |
|---|---|---|
| Manual FK bones | Fast | Props, cameras |
| Manual IK chains | Medium | Small characters |
| Rigify | 30–60 min | All humanoids |
| Spline IK | 30 min | Tails, snakes, hair |
| Shape key only | Variable | Facial morphs |

---

## Python API for Armatures

| Expression | Result |
|---|---|
| `rig.pose.bones["UpperArm.L"]` | Pose bone access (animated state) |
| `rig.data.bones["UpperArm.L"]` | Edit bone access (rest pose geometry) |
| `bpy.ops.pose.rot_clear()` | Clear all rotation on selected pose bones |
| `pbone.rotation_mode = 'QUATERNION'` | Switch to quaternion rotation (no gimbal lock) |

---

## Face Rigging Region Assignment

| Face Region | Control Type |
|---|---|
| Jaw | Bone (jaw bone) |
| Eyelid blink | Shape key (driven by bone) |
| Brow raise/lower | Bone + shape key for detail |
| Lip corners | Shape key only |
| Nostril flare | Shape key only |
| Cheek puff | Shape key only |

---

## Gotcha Quick Reference

| Gotcha | Fix |
|---|---|
| IK/FK popping on switch | Use Rigify Snap IK→FK before switching |
| Rigify rig wrong scale | Apply Scale on both mesh and Meta-Rig before Generate |
| Bone roll incorrect | Edit Mode → Ctrl+N → Recalculate Roll |
| Pole angle wrong | Test in T-pose; adjust Pole Angle on IK constraint |
| Applying Armature modifier mid-animation | Never apply it during animation; only for game export |
