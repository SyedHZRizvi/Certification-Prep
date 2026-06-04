---
permalink: /36-3D-Animation-Blender/Module-06-Weight-Painting-Skinning/
title: "Module 6: Weight Painting & Skinning"
---

# 🖌️ Module 6: Weight Painting & Skinning

## The Map Between Bone and Skin

When a real arm bends, thousands of muscle fibers, fat layers, and skin cells deform in concert — the bicep bulges, the inner elbow compresses, the outer elbow stretches. No computer program can simulate all of this from first principles in real time. Instead, character technical directors approximate it with a system called **skinning**: assigning each vertex in the mesh a weight that determines how strongly each bone pulls it.

A weight of 1.0 on a vertex for "UpperArm.L" means that vertex moves exactly as the upper arm bone moves. A weight of 0.5 each for "UpperArm.L" and "LowerArm.L" means the vertex is shared equally — it sits at the elbow joint, following the average of both bones. This blending is what creates the smooth deformation of a living character.

Weight painting is the process of assigning these weights interactively, using a paint brush directly on the surface of the mesh.

---

## 6.1 Vertex Groups and Automatic Weights

**Vertex groups** in Blender are named sets of vertices with associated weights (0.0 to 1.0). When you use the Armature modifier, it reads vertex groups whose names match bone names to determine deformation.

**Automatic weights** (Ctrl+P → Armature Deform with Automatic Weights) is Blender's built-in algorithm for generating initial vertex groups. It performs a heat-diffusion calculation from each bone outward through the mesh, assigning higher weights to nearby vertices.

**Quality of automatic weights:**
- **Works well:** simple cylindrical limbs, spine, neck, head
- **Often needs manual correction:** armpits, hips (pelvis/hip overlap), fingers, jaw
- **Always needs correction:** complex mechanical rigs, accessories, clothing

> 🎯 **Exam tip:** After applying automatic weights, always check the deformation by rotating each major bone 90° in Pose Mode and looking for: (1) vertices that don't move (stuck, weight = 0), (2) vertices that move too much (fully captured by the wrong bone), and (3) "skin bag" collapse at armpits/hips.

---

## 6.2 Weight Paint Mode

To enter Weight Paint Mode:
1. Select the mesh in Object Mode
2. Ctrl+Tab → Weight Paint (or header dropdown)
3. The mesh turns blue (weight 0) / green (weight 0.5) / red (weight 1.0) on the active vertex group

**Color coding:**
| Color | Weight Value | Meaning |
|---|---|---|
| Deep blue | 0.0 | No influence from this bone |
| Cyan/green | 0.3–0.5 | Partial influence |
| Yellow | 0.7 | Strong influence |
| Red | 1.0 | Full influence |

**To see which bone's weights you're painting:**
- With the mesh in Weight Paint mode, the active vertex group in Object Data Properties → Vertex Groups is the one being painted
- Or: in Pose Mode + Weight Paint Mode (overlay mode), click a bone to select its vertex group

---

## 6.3 Weight Paint Tools

| Tool | Shortcut | Function |
|---|---|---|
| **Draw** | 1 | Paint weights at the cursor |
| **Blur** | 2 | Smooth weight gradient at cursor |
| **Average** | 3 | Averages surrounding weights |
| **Smear** | 4 | Drags weight values |
| **Gradient** | G | Linear or radial gradient |
| **Sample Weight** | Shift+Click | Pick weight value from surface |

**Weight Paint brush settings (in the N-Panel or header):**
- **Weight:** The value to paint (0.0–1.0); with Draw brush this is what you paint
- **Radius:** Brush size in pixels; scroll wheel to resize
- **Strength:** Opacity/pressure of the brush stroke (0.1 = subtle; 1.0 = instant override)
- **Blend mode:** Mix, Add, Subtract, Multiply
- **Auto Normalize:** Ensures all bone weights at a vertex sum to 1.0 — critical to enable

> 🚨 **Trap:** **Always enable Auto Normalize** (found in the Weight Paint header → Options → Auto Normalize). Without it, a vertex can have total weights summing to 2.0 or more, causing the mesh to "double-move" or distort. Auto Normalize enforces the physical constraint that all influences must sum to exactly 1.0.

---

## 6.4 The Skin Bag Problem and How to Fix It

The "skin bag" is the most common weight painting failure. When the arm is raised, the armpit geometry — which is shared between the shoulder, upper arm, and chest bones — collapses into a messy, deflated shape.

**Root cause:** The armpit vertices are not correctly distributed between the surrounding bones. Automatic weights often give them too much influence to the upper arm bone (which pulls them away from the body when the arm raises).

**Solution: Manual weight painting + corrective shape key**

**Step 1: Manual Weight Painting**
1. In Pose Mode, raise the arm to 90° (the problem position)
2. Lock pose, enter Weight Paint mode on the mesh
3. Select the Chest bone's vertex group
4. Paint weight 0.3–0.4 onto the inner armpit area
5. Select the Shoulder bone's vertex group
6. Paint weight 0.4–0.5 onto the outer shoulder armpit area
7. Reduce UpperArm.L vertex group weights in the deepest armpit area to 0.2–0.3
8. Check Auto Normalize is on — the weights redistribute
9. Exit and test in Pose Mode

**Step 2: Corrective Shape Key (if still needed)**
- Add shape key in the problem position (Module 5, section 5.7)
- This handles the remaining 10–20% of collapse that weight painting cannot fix

---

## 6.5 Shape Keys for Facial Expressions

**Shape keys** (also called "blend shapes" or "morph targets") are stored deformed states of the mesh that can be blended with a slider value (0.0–1.0).

**Creating facial shape keys:**
1. Object Data Properties → Shape Keys → "+" to add "Basis" (the neutral face)
2. "+" again → adds a new shape key (e.g., "Smile")
3. Enter Edit Mode — you are now editing the "Smile" shape, not the Basis
4. Move/sculpt vertices to create the smile expression
5. Exit Edit Mode — the shape key is stored
6. Slide the value (0–1) to blend from neutral to smile

**Common facial shape keys for production characters:**

| Shape Key Name | Expression |
|---|---|
| Blink.L / Blink.R | Eyelid close (left/right independently) |
| Smile | Corner of mouth raises |
| Frown | Corner of mouth lowers |
| Mouth.Open | Jaw drop |
| Brow.Raise.L / Brow.Raise.R | Brow up |
| Brow.Frown.L / Brow.Frown.R | Brow furrows inward |
| Puff.Cheeks | Air blown in cheeks |

> 🎯 **Exam tip:** Shape keys are **additive** in their default mix mode. If both Smile (value 0.8) and Frown (value 0.8) are active simultaneously, they fight each other and the result is unpredictable. Design shape keys to be independent or use a shape key driver that prevents conflicting shapes from activating at the same time.

---

## 6.6 Driving Shape Keys from Bones

In production rigs, shape keys are driven by bone rotation — moving the jaw bone down automatically triggers the Mouth.Open shape key, so the animator only controls the jaw bone, not the shape key slider directly.

**Setting up a bone-driven shape key:**
1. In Object Data Properties → Shape Keys, right-click the shape key value → Add Driver
2. In the Driver Editor or the F-curve driver that opens:
   - Type: Averaged Value or Rotational Difference
   - Object: your armature
   - Bone: the jaw bone
   - Channel: Rotation Y (or whichever axis opens the jaw)
3. Map the input range (e.g., 0° → 0 influence, -30° → 1 influence)
4. Test: rotate the jaw bone → the mouth opens

This is the standard technique used in *Sprite Fright* and virtually all production character rigs — the animator sees only intuitive bone controls, not a list of sliders.

---

## 6.7 Case Study: Weight Painting Quality in Production

The *Sprite Fright* making-of documentation notes that the technical directors spent approximately **2–4 days per character** on weight painting and corrective shape keys, even after using automatic weights as a base. The breakdown:

- **Day 1:** Automatic weights applied; gross corrections made (major stuck vertices, obvious wrong-bone assignments)
- **Day 2:** Per-limb testing and manual painting — all limbs rotated through full range of motion; armpits, hips, knuckles corrected
- **Day 3 (if needed):** Corrective shape keys for shoulder, armpit, and hip; drivers set up
- **Day 4 (if needed):** Facial shape keys verified through full dialogue performance range

The lesson: weight painting is not a one-click step. Budget time for it. A 4-day weight painting schedule for a humanoid character is normal and necessary at any production quality level.

---

## 6.8 Summary

| Concept | Key Point |
|---|---|
| Vertex groups | Named sets of vertices + weights; match bone names for Armature modifier |
| Automatic weights | Good starting point; always needs correction at joints |
| Weight Paint mode | Ctrl+Tab to enter; blue=0, green=0.5, red=1.0 |
| Auto Normalize | Always enable; forces all weights to sum to 1.0 |
| Skin bag fix | Manual weight redistribution + corrective shape key |
| Shape keys | Stored mesh deformations blended by slider value |
| Driven shape keys | Bone rotation → driver → shape key value; cleaner animator UX |

---

## 📚 Next Steps

Proceed to [Module 7: Keyframe Animation & Graph Editor](../Module-07-Keyframe-Graph-Editor/Reading.md) — your rigged, weighted character is ready to animate.

---

## 📖 Further Reading

- 📖 **Blender Manual — Weight Paint Mode** (docs.blender.org)
- 📖 **Blender Manual — Shape Keys** (docs.blender.org)
- 📖 **CGCookie — "Character Skinning in Blender"** (YouTube, see Videos.md)
- 📖 **Derakhshani, Dariush. *Introducing Character Animation with Blender.* Sybex** — chapter 9 (weight painting)
