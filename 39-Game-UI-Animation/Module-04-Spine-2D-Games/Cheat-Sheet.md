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

## 🕸️ Mesh Deformation, Performance Cost

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
| Mix = 0.0 | Pure FK |, |
| Mix = 1.0 |, | Pure IK |
| Mix animatable? | | ✅ Yes key between FK and IK |

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
| 1 | Action overlay (attack, interact), clears when done |
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
| FFD is free | No, deformed meshes still cost CPU/GPU skinning |
| IK is always better | FK gives more control over arc and timing; use IK for endpoints |
| 4 influences on mobile | Mobile GPU limit is 2, exceeding it moves to CPU (slow) |
| Spine is indie-only | Hollow Knight, Dead Cells, Fate/Grand Order disprove this |
| JSON in production builds | Use .skel binary, 3–5× smaller, faster load |
| Non-power-of-two atlas | GPU can't compress it, wastes VRAM; always use power-of-two |

---

## 📊 Spine Bone Count Case Studies

| Game | Character | Bone Count | Key Extra Bones | Rationale |
|---|---|---|---|---|
| Hollow Knight | The Knight | 28 | 8 for cloak (3-tier sweep) | Cloak = visual signature; earned its cost |
| Dead Cells | Enemies | 15–25 | Minimal secondary | Crisp silhouette at speed; secondary is procedural |
| Fate/Grand Order | Servants | ~20 (standard) | Standardized archetype | 2MB budget per servant; archetypes enforced |
| Cuphead | Cuphead | N/A (frame-by-frame) |, | Spine used for some effects only |

---

## 🔄 Spine Track System, Quick Reference

| Track | Role | Alpha | Typical Content |
|---|---|---|---|
| 0 | Base animation | 1.0 | idle, walk, run, looping |
| 1 | Action overlay | 0.0–1.0 | attack, interact, one-shot |
| 2+ | Additional overlays | 0.0–1.0 | face expression, gear equip |

```csharp
// One-shot attack on track 1, then clear
TrackEntry e = skeletonAnim.AnimationState.SetAnimation(1, "attack", false);
e.Alpha = 1f;          // full override
e.Complete += _ => skeletonAnim.AnimationState.ClearTrack(1);
```

---

## 📦 Atlas Page Size Budget

| Platform | Max Atlas Page | GPU Compression Format |
|---|---|---|
| iOS | 2048×2048 (target: 1024) | ASTC |
| Android | 2048×2048 (target: 1024) | ETC2 |
| PC / Console | 4096×4096 | DXT (BCn) |
| Web | 2048×2048 | WebP or PNG |

> Always power-of-two. Non-PoT textures cannot be GPU-compressed.

---

## ⚡ Dead Cells Procedural Hybrid Breakdown

| Layer | System | What It Does |
|---|---|---|
| Keyframe | Spine 2D animation | Defines action archetype (attack swing, walk cycle) |
| Procedural squash | Code (root bone scale) | ×1.3 width / ×0.7 height on hit impact |
| Procedural lean | Code (root bone rotate) | Angle proportional to velocity during fast movement |
| Draw call batch | Custom C runtime | Groups enemies sharing same atlas into one GPU call |
