---
permalink: /34-2D-Digital-Animation/Module-06-Puppet-Bone-Tools/
title: "Module 6: Puppet & Bone Tools — DUIK Rigging"
---

# 🦿 Module 6: Puppet & Bone Tools — DUIK Rigging

## The Plugin That Changed Everything

Before DUIK Bassel, professional character rigging in After Effects required hundreds of expressions, manual FK/IK setups written from scratch, and days of work to build a single character rig. After DUIK Bassel, the same rig took an afternoon.

DUIK (pronounced "do-ick") was created by Nicolas Lebrun and Duduf and is now maintained by RxLaboratory. It is free, open-source, and used by studios from tiny boutiques to Netflix. The Houdini and Maya crowds who look down on After Effects as a "motion graphics tool" tend to go quiet when they see what a professional DUIK rig can do.

This module builds three things: a DUIK Bassel/Angela IK rig, bendy limbs with deformation, and a Joysticks 'n Sliders facial animation setup. Together, they represent 90% of what professional 2D AE rigs look like.

---

## 🔧 DUIK Bassel vs. DUIK Angela

| Version | Notes |
|---------|-------|
| **DUIK Bassel** (16.x) | The stable, widely-used version; excellent for learning; all major rigs work |
| **DUIK Angela** (17.x) | The current generation; faster workflow, auto-rig improvements, better bone system |

Both versions share the same fundamental concepts. This module uses DUIK Bassel terminology; Angela improvements are noted where relevant.

---

## 🦴 DUIK's Bone System

Unlike the symbol-based parenting approach in Animate, DUIK introduces its own bone system that works with After Effects layers.

### What DUIK Bones Are

DUIK Bones are special null-like objects with:
- A "bone" visual indicator on screen (a small arrow/dot)
- A defined "head" (parent end) and "tail" (child end)
- The ability to link to any layer as a parent

### The DUIK Workflow (Simplified)

1. **Link artwork layers to bones:** Each body part layer (arm, leg, etc.) is linked to a corresponding DUIK bone.
2. **Create IK:** Select the bone chain (upper arm → lower arm → hand) and run DUIK's "IK" command to add an IK solver.
3. **Create controllers:** DUIK auto-generates controller layers (handle icons) for each limb end.
4. **Animate controllers:** Instead of keyframing the artwork layers directly, you move the controllers — DUIK's IK solver updates all the bones automatically.

---

## 🦵 Building an IK Leg Rig

The most common use case for DUIK IK is a character's legs, which need to have the foot planted on the ground while the body moves.

### Step-by-Step Leg Rig

1. Create three shape layers: `upper_leg`, `lower_leg`, `foot`.
2. Position them in the character's leg anatomy.
3. Set pivot anchors at the correct joint positions (hip, knee, ankle).
4. In DUIK, select all three layers and run "Auto-Rig" or manually link bones to each layer.
5. Create an IK chain from hip to foot.
6. DUIK creates a "goal" controller at the foot position.
7. Keyframe the goal controller's position → DUIK solves hip and knee angles automatically.
8. To move the whole character, use the root controller (usually a controller for the entire rig).

> 🎯 **Exam tip:** The "foot" or "end effector" controller is what you animate directly. The intermediate joints (knee) are solved automatically by DUIK's IK. You can add a "knee goal" controller to push the knee in a specific direction.

---

## 🌊 Bendy Limbs with C4D (Connector)

DUIK's bendy limb system (sometimes called "Bezier IK" or using the Connector feature) creates the rubber-hose look popularized by cartoon animation.

### Rubber Hose vs. Straight Limbs

| Style | Description | Examples |
|-------|-------------|----------|
| **Rubber Hose** | Limbs curve and bend like rubber hoses; no elbow or knee break | Classic cartoon characters (Mickey Mouse style) |
| **Straight Limbs** | Two rigid segments join at a defined elbow/knee | Most modern 2D animation (Gravity Falls, Steven Universe) |
| **Bendy / Bezier IK** | Two-segment limb with a slight organic curve along each segment | Hazbin Hotel, some anime-inspired styles |

DUIK's Bezier IK creates a bone that follows a bezier curve, allowing the limb to appear soft and organic while still being controlled by a single end-effector.

### Setting Up Bendy Limbs

1. In DUIK, create a standard IK chain for the limb.
2. Select the limb bones and choose "Bezier IK" (or "Bend" in newer versions).
3. DUIK adds bezier handles to the bone visual on screen.
4. Adjusting these handles curves the limb.
5. The bend amount can be keyframed over time, creating the "squash and stretch" feel of rubber-hose animation.

---

## 🌸 Spring Rigs

Spring rigs add secondary animation — motion that follows the primary motion but with a natural lag and oscillation. Common applications:

| Element | Spring Behavior |
|---------|----------------|
| Ponytail | Follows head motion with a lag and bounce |
| Loose clothing | Trails behind body movement |
| Antenna or ear | Oscillates after head stops |
| Belly on a heavy character | Slight delayed squash when character lands |

DUIK includes a "Wiggle" and "Spring" system for adding this secondary motion procedurally — without keyframes. The Spring controller follows a parent layer but with configurable stiffness and damping.

### Spring Parameters

| Parameter | Effect |
|-----------|--------|
| **Stiffness** | How quickly the spring returns to rest (high = rigid, low = floppy) |
| **Damping** | How quickly oscillation dies out (high = snaps back, low = bounces long) |

---

## 😊 Joysticks 'n Sliders for Facial Animation

Joysticks 'n Sliders (J+S) is a separate plugin (paid, ~$49) that creates a joystick controller that blends between multiple pre-drawn facial positions.

### How Joysticks 'n Sliders Works

Imagine a 2D joystick on screen. When the joystick is in the center, the character faces forward. Push it up — the character looks up. Push it right — the character looks right. Push it upper-right — the character looks up-right (a blend of the two). J+S handles this blending automatically.

### The Five Positions Setup

| Position | Artwork Pose |
|----------|-------------|
| Center | Face forward (neutral) |
| Up | Face up (looking at ceiling) |
| Down | Face down (looking at floor) |
| Left | Face left (3/4 turn left) |
| Right | Face right (3/4 turn right) |

You draw all five face poses and link them to the joystick. J+S interpolates between them automatically as you animate the joystick position.

> 🚨 **Trap on the exam:** Joysticks 'n Sliders creates a controller UI layer in the comp but this layer is invisible at render time. The actual character layers are driven by expressions connected to the joystick's position. You animate the joystick controller, not the character face layers directly.

### Facial Rig Components with J+S

| Component | Approach |
|-----------|---------|
| Head turn | 5-position joystick (forward, up, down, left, right) |
| Mouth | Separate joystick or slider for open/close + smile/frown axes |
| Eyebrow expressions | Slider for raise/lower |
| Eye blink | Slider or direct keyframing |

---

## 🔄 Full DUIK Character Rig Overview

A complete professional DUIK rig typically has these controllers:

| Controller | Controls |
|-----------|---------|
| Root | Entire character position, scale, rotation |
| Hip | Pelvis position; affects legs and spine |
| Spine | Chest position relative to hips |
| Head | Head position and rotation |
| Hand L/R | IK end effectors for both arms |
| Foot L/R | IK end effectors for both legs |
| Knee L/R | Pole vectors; push knee forward or backward |

Animating a character walk cycle with this rig means keyframing only these ~10 controllers — not the 40+ individual bone layers underneath.

---

## 📋 Summary

- DUIK Bassel (16.x) and DUIK Angela (17.x) are free, open-source professional rigging systems for After Effects.
- DUIK Bones link to artwork layers and form IK chains; IK controllers are animated instead of individual bones.
- Bendy limb (Bezier IK) creates the rubber-hose or organic-curve look for cartoon limbs.
- Spring rigs add secondary animation (ponytail, loose clothing, antenna) procedurally without keyframes.
- Joysticks 'n Sliders creates blend-based facial animation from 5 pre-drawn head positions.
- A complete professional rig has ~10 controllers that drive 40+ bone/layer relationships underneath.

## ➡️ Next Steps

[Module 7: Lip Sync & Dialogue →](../Module-07-Lip-Sync-Dialogue/Reading.md)

Module 7 takes the rig built in modules 4–6 and adds the most challenging part: making it speak. Phoneme breakdowns, manual and auto lip sync, and sync to audio in After Effects.

## 📚 Further Reading

- DUIK official documentation: [rxlaboratory.org/tools/duik-angela/](https://rxlaboratory.org/tools/duik-angela/)
- School of Motion: "DUIK Bassel: Complete Character Rigging Tutorial" — free article
- Joysticks 'n Sliders plugin: [aescripts.com](https://aescripts.com)
- After Effects Forum — DUIK tag — active community Q&A
