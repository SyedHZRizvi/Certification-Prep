---
title: "Module 4 Cheat Sheet: Spine 2D for Games"
---

# 🗒️ Module 4 Cheat Sheet: Spine 2D for Games

## 🦴 Attachment Types

| Type | Use |
|------|-----|
| **Region** | Rectangular image, no deformation (fast) |
| **Mesh** | Deformable texture, weighted or FFD |
| **Bounding Box** | Hit detection / collision polygon |
| **Point** | Named position on skeleton (attach point) |
| **Path** | Curve for path constraints (tails, tentacles) |

---

## 🕸️ Mesh Deformation — Performance Cost

| Mode | CPU | GPU | Use For |
|------|-----|-----|---------|
| Region (rigid) | Minimal | Minimal | Simple, flat pieces |
| Mesh FFD (unweighted) | Low | Low | Shape animation without bones |
| Mesh weighted (2 influences) | Medium | Medium | Joint deformation (mobile) |
| Mesh weighted (4 influences) | High | High | PC/console quality deformation |

> Mobile rule: **max 2 bone influences per vertex**

---

## 🔗 IK vs. FK

| | FK | IK |
|--|----|----|
| Control | Bone by bone, root-to-tip | Place target; solver works back |
| Use for | Arms swing, spine curve | Foot/hand contact, reach |
| Mix = 0.0 | Pure FK | — |
| Mix = 1.0 | — | Pure IK |
| Mix animatable? | — | ✅ Yes — key between FK and IK |

---

## 🎨 Skins

- Base skin: all slots defined with default attachments
- Variant skin: only changed slots defined
- Runtime: composite base + variant

```csharp
skeleton.SetSkin("heavy_armor");
skeleton.SetSlotsToSetupPose();
```

---

## 🔧 Spine-Unity: AnimationState Tracks

| Track | Typical Use |
|-------|------------|
| 0 | Base looping animation (idle, walk, run) |
| 1 | Action overlay (attack, interact) — clears when done |
| 2+ | Additional overlays (face expression, etc.) |

```csharp
// Base animation
skeletonAnim.AnimationState.SetAnimation(0, "walk", true);

// One-shot overlay on track 1
TrackEntry e = skeletonAnim.AnimationState
    .SetAnimation(1, "attack", false);
e.Complete += _ => skeletonAnim.AnimationState.ClearTrack(1);
```

---

## 📦 Export / Atlas Settings

| Setting | Recommended |
|---------|-------------|
| Atlas page max | **1024×1024** (mobile) / 2048 (PC) |
| Dimensions | **Power of two** (GPU compression) |
| Premultiply alpha | **On** (prevents edge artifacts) |
| Strip whitespace | On (reduces atlas size) |
| Export format | `.json` (human-readable) or `.skel` (binary, smaller) |

---

## 🔄 IK Constraint Properties

| Property | Effect |
|----------|--------|
| Mix | 0=FK, 1=IK, animatable |
| Bend direction | Which way joint bends (positive/negative) |
| Compress | Allow chain to shorten when target too close |
| Stretch | Allow chain to lengthen when target too far |

---

## 📌 Case Studies

| Game | Bone Count | Key Technique |
|------|-----------|---------------|
| Dead Cells | 15–25 | Low count for crisp silhouette; custom C runtime |
| Hollow Knight | ~30 | IK for hand/foot contact; mesh cloak |
| Fate/Grand Order | ~20 per servant | Mass skin variants (100+ per hero) |

---

## ⚠️ Common Traps

| Trap | Reality |
|------|---------|
| More bones = better | More bones = more cost; Dead Cells is better WITH fewer |
| FFD is free | No — deformed meshes still cost CPU/GPU skinning |
| IK is always better | FK gives more control over arc and timing; use IK for endpoints |
| 4 influences on mobile | Mobile GPU limit is 2 — exceeding it moves to CPU (slow) |
| Spine is indie-only | Hollow Knight, Dead Cells, Fate/Grand Order disprove this |
