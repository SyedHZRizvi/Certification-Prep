---
permalink: /34-2D-Digital-Animation/Module-04-Character-Rigging-Animate/Cheat-Sheet/
title: "Module 4 Cheat Sheet: Character Rigging in Adobe Animate"
---

# ⚡ Module 4 Cheat Sheet — Character Rigging in Adobe Animate

---

## Symbol Hierarchy (Typical Character)

```
character_root
  └── body
        ├── head (eyes, mouth)
        ├── arm_r_upper → arm_r_lower → hand_r
        ├── arm_l_upper → arm_l_lower → hand_l
        ├── leg_r_upper → leg_r_lower
        └── leg_l_upper → leg_l_lower
```

---

## Registration Point Rule

| Body Part | Registration Point Location |
|-----------|-----------------------------|
| Upper arm | Shoulder joint |
| Lower arm | Elbow joint |
| Hand | Wrist joint |
| Upper leg | Hip joint |
| Lower leg | Knee joint |
| Head | Base of neck |
| Eye | Center of eye |
| Mouth | Center of mouth (consistent across all variants) |

---

## FK vs. IK

| | FK | IK |
|-|----|----|
| **How it works** | Rotate each joint parent → child | Move end effector; system solves joints |
| **Best for** | Arms, tails, hair | Feet planted on ground, reaching hand |
| **In Animate** | Manual symbol rotation | Asset Warp Tool bones |

---

## Preston Blair Phoneme Chart

| Group | Sounds | Shape |
|-------|--------|-------|
| **AI** | "say," "eye" | Wide open, teeth showing |
| **E** | "eat," "see" | Wide smile, upper teeth |
| **O** | "oh," "go" | Round, pursed |
| **U** | "you," "do" | Small round, lips forward |
| **CDG** | D, G, hard C | Slightly open, tongue up |
| **FV** | F, V | Upper teeth on lower lip |
| **L** | L | Open, tongue tip to roof |
| **MBP** | M, B, P | Closed or nearly closed |
| **REST** | Silence, exhale | Relaxed, slight opening |
| **WQ** | W, Q | Small round pucker |

**MEMORIZE THIS. It appears on exams.**

---

## Swap Symbol Workflow

1. Select instance on frame
2. Properties panel → Swap Symbol button (or right-click → Swap Symbol)
3. Choose replacement from Library dialog
4. Position is preserved — registration points must be consistent across all variants

---

## Cut-Out Shows — Quick Reference

| Show | Technique Notes |
|------|----------------|
| South Park | 3D software mimicking paper cut-out |
| Hazbin Hotel | Animate-style with complex facial rigs |
| Archer | Flash/Animate; detailed symbol hierarchies |
| Rick and Morty | Hybrid: hand-drawn + cut-out for secondary chars |

---

## Asset Warp vs. Bone Tool

| | Asset Warp Tool (current) | Old Bone Tool |
|-|--------------------------|--------------|
| Works on | Symbols with internal bones | IK chains between separate symbols |
| Status | Current preferred method | Legacy |
