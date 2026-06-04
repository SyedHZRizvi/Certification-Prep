---
permalink: /34-2D-Digital-Animation/Module-04-Character-Rigging-Animate/
title: "Module 4: Character Rigging in Adobe Animate"
---

# 🦴 Module 4: Character Rigging in Adobe Animate

## The Puppet Behind the Curtain

Every puppet show has a puppet behind the curtain. The audience never sees the armature, the strings, or the mechanisms — they see the character. In cut-out animation, the "puppet behind the curtain" is a symbol hierarchy: a set of nested graphics connected at joints, designed so that moving one part pulls the others in natural-looking ways.

The show *Hazbin Hotel* — which went from an independent YouTube pilot to an Amazon Prime series — is animated primarily with cut-out rigs built in tools very similar to what Animate offers. The characters look drawn and expressive, but underneath each scene is a rigging system: body parts connected to each other through a hierarchy, with IK solving the leg positioning and a library of pre-drawn mouth shapes for lip sync. This module builds that system from the ground up.

---

## 🏗️ Symbol-Based Rigging: The Hierarchy

A character rig in Adobe Animate is a nested symbol hierarchy. The key concept is **parent-child relationships**: when a parent symbol moves, all child symbols inside it move with it.

### A Typical Character Hierarchy

```
character_root (Graphic)
  └── body (Graphic)
        ├── head (Graphic)
        │     ├── eye_left (Graphic)
        │     ├── eye_right (Graphic)
        │     └── mouth_neutral (Graphic)
        ├── arm_left_upper (Graphic)
        │     └── arm_left_lower (Graphic)
        │           └── hand_left (Graphic)
        ├── arm_right_upper (Graphic)
        │     └── arm_right_lower (Graphic)
        │           └── hand_right (Graphic)
        ├── leg_left_upper (Graphic)
        │     └── leg_left_lower (Graphic)
        └── leg_right_upper (Graphic)
              └── leg_right_lower (Graphic)
```

The root symbol's position controls the entire character's position on Stage. The body symbol contains all limbs. Each limb is a chain of nested symbols.

> 🎯 **Exam tip:** Registration points are critical in a symbol hierarchy. Each body part symbol's registration point should be at the joint where it connects to its parent (e.g., the upper arm's registration point is at the shoulder; the lower arm's registration point is at the elbow).

---

## ⚙️ Animate's Bone Tools

Adobe Animate introduced the **Asset Warp Tool** (formerly called the Bone Tool) for applying skeletal rigging directly to symbols or vector shapes without building a manual symbol hierarchy.

### The Asset Warp Tool

The Asset Warp Tool creates deformation bones inside a symbol. These bones deform the artwork along with them when moved. This approach is faster to set up than a manual hierarchy but offers less granular control over individual limb swapping.

> 🚨 **Trap on the exam:** The Asset Warp Tool was introduced to replace the older "Bone Tool" that created IK chains between separate symbols. The Bone Tool still exists in some versions, but the Asset Warp Tool is the current preferred method for bone-based deformation. Know the difference.

---

## 🔗 Forward Kinematics vs. Inverse Kinematics

| Concept | Definition | Use Case |
|---------|-----------|---------|
| **Forward Kinematics (FK)** | Rotating each joint independently from parent to child | Arms, tails, hair — things that flow from a root |
| **Inverse Kinematics (IK)** | Moving the end effector; the system solves joint angles automatically | Legs planted on ground, reaching hand |

### FK in Practice

FK is how symbol-hierarchy rigs work by default. You rotate the upper arm, then the lower arm, then the hand — each rotation cascades down the chain. It's intuitive but requires more keyframes to make a leg bend naturally as the foot stays planted.

### IK in Animate

Animate's IK is implemented through the Asset Warp Tool's bone system. When bones are set up, you can move the end of the chain (the hand or foot) and Animate solves the angles of the intermediate joints.

Dedicated IK plugins and external tools (like DUIK in After Effects, covered in Module 6) provide more sophisticated IK solving. For complex character animation, most professionals use After Effects + DUIK rather than Animate's native bone tools for IK.

---

## 💬 Lip Sync Asset Preparation

A lip sync rig in Animate requires preparing a mouth set — a collection of mouth shapes corresponding to different phoneme groups.

### The Preston Blair Phoneme Set

Preston Blair's phoneme set (from his book *Cartoon Animation*) is the industry standard for cartoon lip sync:

| Phoneme Group | Example Sounds | Mouth Shape |
|---------------|---------------|-------------|
| **AI** | "say," "eye," "I" | Wide open, teeth visible |
| **E** | "eat," "see," "he" | Wide smile, upper teeth |
| **O** | "oh," "go," "low" | Round, pursed |
| **U** | "you," "do," "blue" | Small round, lips forward |
| **CDG** | hard C, D, G | Slightly open, tongue up |
| **FV** | F, V sounds | Upper teeth on lower lip |
| **L** | L sound | Open, tongue tip to roof |
| **MBP** | M, B, P | Closed or nearly closed |
| **REST** | Silence, exhale | Relaxed, slight opening |
| **WQ** | W, Q | Small round pucker |

**MEMORIZE THIS.** The Preston Blair set appears in multiple exam questions.

### Setting Up Mouth Shapes in Animate

Each mouth shape should be:
1. Drawn as a separate Graphic symbol in the Library (e.g., `hero_mouth_ai`, `hero_mouth_mbp`)
2. Placed on the mouth layer within the head symbol
3. Swapped frame-by-frame using the "Swap Symbol" dialog (right-click instance → Swap Symbol) to match audio phoneme timing

The swap-symbol workflow is the standard approach for cut-out lip sync in Animate.

---

## ✂️ The Cut-Out Animation Workflow

Cut-out animation originated in physical paper puppetry: characters were literally cut from paper, jointed with brass fasteners, and photographed frame by frame. Digital cut-out animation preserves this logic but executes it in software.

### Production Examples

| Show | Cut-Out Approach | Notable Details |
|------|-----------------|----------------|
| **South Park** | 3D software (Maya) mimicking paper cut-out style | Very limited movement, deliberate stylization |
| **Hazbin Hotel** | Flash/Animate-style cut-out with expressive rigs | Complex facial rigs, multiple expressions per character |
| **Archer** | Flash-based cut-out (later After Effects) | Detailed symbol hierarchies per character |
| **Rick and Morty** | Hybrid: hand-drawn + digital cut-out for secondary characters | Scene-dependent technique choice |

### Cut-Out Workflow Steps

1. **Character design** — design the character as flat, separated body parts that can be assembled
2. **Art assets** — draw each body part as a separate vector or bitmap (Illustrator, Photoshop, or directly in Animate)
3. **Import and organize** — import all parts into Animate's Library; organize into character folders
4. **Build hierarchy** — assemble the character by nesting symbols; set registration points at joints
5. **Rig testing** — animate a simple test (arm wave, head turn) to verify the rig works as expected
6. **Lip sync prep** — add mouth shapes to the mouth layer; prepare swap-symbol chart
7. **Scene animation** — animate the actual scene using the rig

---

## 🔄 Swapping Symbols for Animation Flexibility

One of the most powerful features of symbol-based rigs is **symbol swapping** — replacing one symbol instance on a specific frame with a different symbol, while keeping the same position and transform properties.

Use cases:
- **Mouth shapes:** swap from neutral to open to smile frame by frame
- **Eye blinks:** swap from open eye to half-closed to closed
- **Hand shapes:** swap from relaxed fist to open palm to pointing finger
- **Alternate poses:** swap the entire upper body to a pre-drawn extreme pose for fast action

To swap a symbol: select the instance → Properties panel → Swap Symbol button → choose the replacement symbol from the Library.

> 🎯 **Exam tip:** Swapping symbols preserves the instance's position, scale, and rotation. This means if your alternate mouth shape is not drawn with the same registration point and size as the original, it will appear misaligned after the swap. **Consistent registration points across all variants of a body part are essential.**

---

## 📦 Organizing a Rig for Production

### Layer Naming Convention

| Layer Name | Content |
|-----------|---------|
| `hero — head` | Head group (contains eyes, mouth sublayers) |
| `hero — arm_r` | Right arm (upper + lower + hand nested) |
| `hero — arm_l` | Left arm (upper + lower + hand nested) |
| `hero — body` | Torso |
| `hero — leg_r` | Right leg chain |
| `hero — leg_l` | Left leg chain |
| `hero — shadow` | Character shadow (non-animated or simple tween) |

### The Layer Order Problem

In cut-out animation, layer order matters because it controls depth. An arm that passes behind the body must be on a layer below the body layer. This means your rig needs separate layers for:
- The arm that's "in front" (usually the arm closer to camera)
- The arm that's "behind" (further from camera)

Characters that turn create a "layer swap" problem where the front and back arms need to switch Z-order mid-animation. Solutions:
- Pre-draw both arm positions and swap on the turn frame
- Use a separate "turn" rig with all layers reordered
- Use After Effects (covered in Module 5 and 6) where you have more control

---

## 📋 Summary

- Symbol-based rigs use parent-child hierarchies; moving a parent moves all children.
- Registration points must be at the joint position (pivot point) for each body part.
- FK rotates parent to child (natural for arms, tails); IK moves the end effector and solves backwards (natural for planted legs).
- Animate's Asset Warp Tool creates bone-based deformation; the older Bone Tool created IK chains between symbols.
- Lip sync uses the Preston Blair phoneme set; mouth shapes are swapped frame by frame via the Swap Symbol dialog.
- Cut-out animation is used in South Park, Hazbin Hotel, Archer, and Rick and Morty.
- Symbol swapping preserves position and transform; consistent registration points across variants are essential.

## ➡️ Next Steps

[Module 5: After Effects for 2D →](../Module-05-After-Effects-2D/Reading.md)

Module 5 moves from Animate to After Effects — a more powerful environment for character rigging, compositing, and effects. You'll learn to import your Animate and Illustrator assets into AE, apply the Puppet Pin Tool, and use the "Create Shapes from Vector Layers" command.

## 📚 Further Reading

- *Cartoon Animation* — Preston Blair (the phoneme chart and mouth shapes are in Chapter 5)
- Adobe Animate User Guide: Asset Warp Tool
- School of Motion: "Character Rigging in Adobe Animate" — free article
- Adam Duff LUCIDPIXUL YouTube: cut-out rigging tutorials
