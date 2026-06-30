---
permalink: /34-2D-Digital-Animation/Module-04-Character-Rigging-Animate/Cheat-Sheet/
title: "Module 4 Cheat Sheet: Character Rigging in Adobe Animate"
---

# ⚡ Module 4 Cheat Sheet, Character Rigging in Adobe Animate

---

## Symbol Hierarchy (Typical Character)

```
character_root (Graphic)
  └── body (Graphic)
        ├── head (eyes, mouth)
        ├── arm_r_upper → arm_r_lower → hand_r
        ├── arm_l_upper → arm_l_lower → hand_l
        ├── leg_r_upper → leg_r_lower
        └── leg_l_upper → leg_l_lower
```

All body parts = **Graphic** symbols (not Movie Clips, must sync to parent timeline).

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
| Mouth | Center of mouth (consistent across ALL variants) |

---

## FK vs. IK

| | FK | IK |
|-|----|----|
| **Direction** | Parent → Child | End effector → joints solved |
| **Best for** | Arms, tails, hair | Feet planted on ground, reaching hand |
| **In Animate** | Manual symbol rotation | Asset Warp Tool bones |
| **Movement control** | You rotate each joint | You move the endpoint only |

---

## Preston Blair Phoneme Chart, MEMORIZE

| Group | Sounds | Shape |
|-------|--------|-------|
| **AI** | "say," "eye" | Wide open, teeth showing |
| **E** | "eat," "see" | Wide smile, upper teeth |
| **O** | "oh," "go" | Round, pursed |
| **U** | "you," "do" | Small round, lips forward |
| **CDG** | D, G, hard C, S, T, Z | Slightly open, tongue up |
| **FV** | F, V | Upper teeth on lower lip |
| **L** | L | Open, tongue tip to roof |
| **MBP** | M, B, P | Closed or nearly closed |
| **REST** | Silence, exhale | Relaxed, slight opening |
| **WQ** | W, Q | Small round pucker |

**It appears on exams. 10 groups. No exceptions.**

---

## Swap Symbol Workflow

```
1. Select instance on the frame
2. Right-click → Swap Symbol (or Properties → Swap Symbol)
3. Choose replacement from Library dialog
4. Position/scale/rotation preserved
   → Registration points MUST be consistent across all variants
```

---

## Asset Warp vs. Bone Tool

| | Asset Warp Tool (current) | Old Bone Tool (legacy) |
|-|--------------------------|------------------------|
| Works on | Symbols, vector shapes | IK chains between symbols |
| Deformation | Mesh warp (organic) | Joint rotation (rigid) |
| Status | Preferred / current | Legacy |

---

## Cut-Out Shows, Quick Reference

| Show | Technique | Notes |
|------|-----------|-------|
| South Park | 3D software (Maya) | Mimics paper cut-out |
| Hazbin Hotel | Adobe Animate/Flash | Complex rigs; Amazon upgrade to Harmony |
| Archer | Flash/AE | Detailed symbol hierarchies |
| Rick and Morty | Harmony | Upgraded from Flash |
| Gravity Falls | Adobe Animate | Weighted motion, per-property easing |
| Amphibia | Adobe Animate | Disney TVA pipeline |

---

## Layer Order Problem, Solutions

When a character turns, front/back arms must swap Z-order:

| Solution | When to Use |
|----------|------------|
| Pre-drawn turn rig | Scheduled turns; well-planned shots |
| Symbol swap at turn frame | Simple 180° turns |
| Duplicate rig with layers reordered | Complex multi-angle characters |
| Move to After Effects | Most flexible; use parenting + Z-depth |

---

## Key Animate Shortcuts for Rigging

| Action | Windows | Mac |
|--------|---------|-----|
| Convert to Symbol | F8 | F8 |
| Break Apart | Ctrl+B | Cmd+B |
| Enter Symbol Edit | Double-click | Double-click |
| Exit Symbol Edit | Esc | Esc |
| Swap Symbol | Right-click instance | Right-click instance |
| Group | Ctrl+G | Cmd+G |
| Select All on Layer | Ctrl+A | Cmd+A |
| Duplicate Symbol | Library: right-click → Duplicate | Same |

---

## Library Organization for Multi-Character Projects

```
Library/
  ├── hero/
  │     ├── hero_body
  │     ├── hero_head
  │     ├── hero_arm_left_upper
  │     ├── hero_arm_left_lower
  │     ├── hero_mouth_ai
  │     ├── hero_mouth_e
  │     └── ... (all 10 mouth shapes)
  ├── villain/
  │     └── ... (same structure)
  └── backgrounds/
        └── ...
```

Prefix every symbol with character name. Use folders. Delete unused assets before export.
