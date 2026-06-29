---
permalink: /34-2D-Digital-Animation/Module-06-Puppet-Bone-Tools/Cheat-Sheet/
title: "Module 6 Cheat Sheet: Puppet & Bone Tools, DUIK Rigging"
---

# ⚡ Module 6 Cheat Sheet Puppet & Bone Tools DUIK Rigging

---

## DUIK Versions

| Version | Status |
|---------|--------|
| **DUIK Bassel** (16.x) | Stable, widely-used, all major rigs work |
| **DUIK Angela** (17.x) | Current; faster auto-rig, walk cycle generator |
| Both | Free, open-source, from RxLaboratory |

---

## DUIK IK Setup (Leg Example)

```
1. Create layers: upper_leg, lower_leg, foot
2. Set anchor points at joints (hip, knee, ankle)
3. DUIK: Link bones to layers
4. DUIK: Create IK chain (hip → knee → foot)
5. AE generates: foot goal controller + knee pole vector
6. Animate: Move foot goal controller only
7. DUIK solves: hip and knee angles automatically
   → Never keyframe bone layers directly
```

---

## DUIK Controllers (Full Body Rig)

| Controller | Function |
|-----------|---------|
| Root | Entire character position/scale/rotation |
| Hip | Pelvis; connects spine and legs |
| Spine | Chest relative to hips |
| Head | Head position and rotation |
| Hand L / Hand R | IK arm end effectors |
| Foot L / Foot R | IK leg end effectors |
| Knee L / Knee R | Pole vectors for knee direction |

~10 controllers drive 40+ bone relationships.

---

## Spring Rig Parameters

| Parameter | Low Value | High Value |
|-----------|-----------|-----------|
| **Stiffness** | Floppy, slow return | Rigid, fast return |
| **Damping** | Bounces long | Snaps back quickly |

**Common spring uses:** Ponytail, loose clothing, antenna, belly, ears, cape.
**Key fact:** Spring rigs need NO keyframes, procedural only.

---

## Limb Style Comparison

| Style | Appearance | Example Shows |
|-------|-----------|--------------|
| Rubber Hose | Continuous curve, no joint break | Classic cartoons, Mickey Mouse |
| Straight Segment | Rigid, defined elbow/knee | Gravity Falls, Steven Universe |
| Bezier IK (DUIK) | Slight organic curve throughout | Hazbin Hotel, modern 2D commercial |

---

## Joysticks 'n Sliders (J+S), Setup

```
Five positions to draw:
  ● Center (forward)
  ↑ Up
  ↓ Down
  ← Left
  → Right

J+S blends all positions as joystick moves.
```

**Key fact:** The joystick controller UI (User Interface) is invisible at render time. Animate only the controller.

---

## Pole Vector (Knee Direction) Fix

If knee bends wrong direction:
1. Select the pole vector / knee goal controller
2. Move it to the correct side of the leg
3. Lock it in place before animating the foot goal

---

## DUIK Key Commands

| Action | DUIK Panel |
|--------|-----------|
| Create bone | Bones panel → Add Bone |
| Link to layer | Select bone + layer → Link |
| IK chain | Select chain → IK |
| Spring | Select layer → Automations → Spring |
| Auto-Rig | Select all bones → Auto-Rig |
| Walk cycle | Automations → Walk Cycle (Angela only) |

---

## J+S vs. Manual Face Layer Swaps

| Method | When to Use | Pros | Cons |
|--------|------------|------|------|
| Joysticks 'n Sliders | Broad head turns and directional looks | Smooth interpolation; fast to animate | Requires ~$49 plugin |
| Manual swap (visibility) | Extreme expressions, mouth shapes | Free; total control | More keyframes |
| Symbol swap (in Animate) | Cut-out lip sync | Per-frame control | Only in Animate |

---

## IK vs. FK Quick Reference

| | IK | FK |
|-|----|-----|
| What you animate | End effector (hand/foot) | Each joint in chain |
| Joint solving | Automatic | Manual |
| Best for | Planted feet, reaching | Arms, tails, hair |
| In DUIK | Goal controller | Rotate bone controllers |


---

## ✅ Module Sign-Off Checklist

- [ ] Can explain core concept without notes
- [ ] Can name 3 industry examples
- [ ] Know the 2 most common mistakes
- [ ] Understand when to use each technique

**Key formula / ratio / number to memorize:**
See the exam callouts (🎯) in the Reading.md for this module.

---

## Expressions Quick Reference

| Expression | What It Does |
|-----------|-------------|
| `loopOut("cycle")` | Loops keyframes indefinitely (walk cycles) |
| `wiggle(freq, amp)` | Adds random procedural jitter |
| `linear(t, t1, t2, v1, v2)` | Maps value ranges (joystick to layer) |
| `value + [offset_x, offset_y]` | Adds constant offset to position |

Apply to: Time Remap property for walk cycle loop (enable via right-click → Time → Enable Time Remapping).

---

## Numbers to Memorize

| Value | Meaning |
|-------|---------|
| ~10 | Controllers in a full-body DUIK rig |
| 40+ | Bone/layer relationships those controllers drive |
| ~$49 | Cost of Joysticks 'n Sliders plugin |
| Free | Cost of DUIK (both Bassel and Angela) |
| 5 | Head positions needed for J+S joystick setup |
