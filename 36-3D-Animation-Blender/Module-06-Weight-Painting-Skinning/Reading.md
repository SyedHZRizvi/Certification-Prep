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

## 6.2b Weight Map Visualization and Debugging

After applying automatic weights, systematic debugging prevents animation problems before they occur. The correct workflow:

1. **Enter Pose Mode on the armature** (Tab or Ctrl+Tab with armature selected)
2. **Shift+click the mesh** to enter Weight Paint mode while the armature is in Pose Mode — this allows simultaneous posing and painting
3. Rotate each bone 90° in Pose Mode: **R → X → 90** for the shoulder, **R → Z → 90** for the spine
4. Look for: blue vertices that don't move (missing weight), red vertices captured by wrong bone
5. In the Object Data Properties → Vertex Groups, select each group one at a time to inspect the heat map

**Common automatic weight failures and their fixes:**

| Problem | Symptom | Fix |
|---|---|---|
| Vertices stuck (blue when rotated) | Body part doesn't move | Add weight to correct bone's vertex group; Draw brush, weight 1.0 |
| Wrong bone capture | Chest vertices move with arm bone | Reduce arm bone weight; increase chest bone weight; Auto Normalize re-balances |
| Armpit collapse | Skin bag when arm raises | See section 6.4 — manual weight redistribution |
| Finger tips wrong | All fingers move when one bends | Limit each fingertip vertex to only its top phalanx bone |
| Clothes following wrong bones | Shirt collar moves with the hat bone | Re-run Ctrl+P with just collar + spine selected |

> ⚠️ **Gotcha — Vertex Groups Must Match Bone Names Exactly:** The Armature modifier links vertex groups to bones by matching names character-by-character, including case. A vertex group named "upperarm.L" will NOT be captured by a bone named "UpperArm.L" — case mismatch = no deformation. If a bone has correct weight-painted vertices but the mesh still doesn't move, check the name match between the vertex group (Object Data → Vertex Groups) and the bone (Pose Mode → Bone Properties).

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

## 6.3b Weight Paint Brush Reference

| Brush | Shortcut | Behavior | Best Use |
|---|---|---|---|
| **Draw** | 1 | Paints weight at set value | Primary painting for clear assignments |
| **Draw** with Subtract | 1 + Ctrl | Reduces weight at cursor | Remove influence from wrong bone |
| **Blur** | 2 | Smooths weight gradient | Blend sharp weight boundaries |
| **Average** | 3 | Averages weights of vertices within radius | Smooth uneven transitions |
| **Smear** | 4 | Drags weight values across surface | Redistribute weight along surface |
| **Gradient** | G | Linear or radial gradient | Forearm twist falloff, hip blend |
| **Sample Weight** | Shift+Click | Picks value at cursor | Match weight from known-good area |

**N-Panel brush options in Weight Paint mode:**

| Option | Where | Effect |
|---|---|---|
| **Weight** | N-Panel → Tool | The value you paint (0.0–1.0) |
| **Radius** | Header or N-Panel | Brush size; scroll to resize |
| **Strength** | Header | Opacity (0.1 = gradual, 1.0 = instant override) |
| **Auto Normalize** | Header → Options | Forces all bone weights at vertex to sum to 1.0 |
| **Multi-Paint** | Header → Options | Paint multiple selected vertex groups simultaneously |
| **X Mirror** | Header → Options | Mirrors paint to the opposite .L/.R vertex group |

> 🎯 **What the exam tests:** The **X Mirror** option in Weight Paint mode requires that bones follow the `.L` / `.R` naming convention exactly. When X Mirror is on, painting the `UpperArm.L` vertex group automatically paints the `UpperArm.R` group on the opposite side of the mesh. This only works if the mesh is symmetric (use Mirror Modifier or Symmetrize before weight painting).

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

## 6.5b Shape Key Types and Use Cases

| Shape Key Type | How Created | Animation Method |
|---|---|---|
| **Basis** | First shape key added; always at index 0 | Always stays at 1.0 (can't animate the Basis) |
| **Facial expression** | Sculpt/move vertices in Edit Mode on new key | Slider 0–1 driven manually or by bone |
| **Corrective** | Sculpt the "fix" while the problem pose is active | Driven by bone rotation via Driver |
| **Relative** | Blended relative to Basis (default) | Slider 0–1 |
| **Absolute** | Evaluated at a specific frame on the timeline | Evaluation Time property keyframed |
| **Pinning** | Hold selected shape key visible while editing others | Viewport-only; not an animation type |

**Shape key blend modes:**
- The default **Relative** shape keys add their deformation on top of the Basis
- Multiple active shape keys combine: if Smile is at 0.5 and Mouth.Open is at 0.5, both are half-active simultaneously
- **Shape Key Pin:** With Pin enabled in the Shape Keys panel, the viewport shows only that one shape key's deformation — useful for sculpting corrections

> ⚠️ **Gotcha — Editing the Basis vs. Editing a Shape Key:** If you enter Edit Mode on a mesh that has shape keys and move vertices, you are editing the **Basis** shape key (and all other shape keys move with it proportionally). If you select a specific shape key in the list and then enter Edit Mode, you are editing that specific shape key's deformation. The confusion: Edit Mode always shows all vertices in their current blended state. Use the Pin button to isolate a specific shape for editing clarity.

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

## 6.6b Coffee Run (2020) — Two-Artist Skinning Pipeline

The Blender Foundation's *Coffee Run* (2020) was produced by just two artists (Dedouze and Julien Kaspar) in three months. Their documented weight painting approach for the single stylized female character:

**Approach:**
- Automatic weights were applied with a simplified "proxy mesh" rather than the final mesh — a low-poly cage approximately matching the body shape
- The proxy mesh weights were baked, then transferred to the final mesh using Blender's **Data Transfer modifier** (Object → Data Transfer → Vertex Data → Vertex Groups)
- This "bake low, transfer high" method avoids the performance overhead of running Automatic Weights on a high-polygon mesh

**Data Transfer modifier for weight copying:**
1. Select the high-poly target mesh
2. Add Modifier → Generate → Data Transfer
3. Set Source Object to the proxy mesh
4. Enable Vertex Data → Vertex Groups
5. Apply the modifier — vertex groups from the proxy are mapped onto the high-poly mesh by surface position

**The lesson:** For production with tight timelines, weight painting proxy meshes and transferring to final meshes is faster and more reliable than painting directly on the high-resolution character. The *Coffee Run* team painted on a 1,200-polygon proxy and transferred to a 45,000-polygon final mesh.

> 🎯 **What the exam tests:** The **Data Transfer modifier** maps data (vertex groups, normals, UV maps, vertex colors) from one mesh to another based on surface proximity. This is the correct tool for retopology workflows where you've painted weights on a sculpt and need to transfer them to a clean retopology mesh.

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

## 6.7b Skinning for Non-Humanoid Characters

The principles of weight painting apply universally, but non-humanoid characters (animals, robots, stylized creatures) have specific patterns:

**Quadruped skinning (four-legged animals):**
- The **spine** of a quadruped has far more range of motion (up-down flex) than a biped — use 5–7 spine bones with FK control
- **Shoulder/hip sockets** on quadrupeds rotate primarily in the sagittal plane (forward/backward) rather than outward like biped arms — the IK foot planting constraint is especially important since all four feet plant simultaneously
- **Tail:** Use Spline IK along a Bezier curve; the tail automatically follows the curve shape; animators control the curve control points rather than individual tail bones
- **Head/neck weight:** The neck bone weight should transition smoothly from the chest over 3–4 vertebra bones; abrupt transitions create "snake swallowing" artifacts at the neck-body junction

**Robot/mechanical skinning:**
- Mechanical characters typically use **hard weight assignments** (each vertex fully owned by one bone, weight = 1.0, no blending)
- This gives crisp panel separation without organic blending
- The tradeoff: no smooth deformation at joints — but mechanical characters should not deform organically at joints
- **Exception:** Chest pistons and flexible conduit mesh pieces need weight blending between the two endpoint bones to simulate realistic stretching as the robot moves

**Cloth and accessory weight painting:**
- Accessories (hats, backpacks, bags) parented to a bone use **full weight = 1.0** to the attachment bone
- Cloth items (cape, scarf) use a gradient: **1.0 at attachment point** (the shoulder/neck), **0.0 at the free end** (the hem of the cape)
- This gradient allows the attachment point to follow the character rigidly while the free end drapes naturally under physics

---

## 6.7c Symmetrize and Topology Mirroring

Before starting weight painting, the mesh must be confirmed symmetric at the topology level (not just visually). Blender's **Symmetrize** operation (Edit Mode → Mesh → Symmetrize) copies topology from one side to the other, but it also resets the vertex positions to be exactly mirrored. This is destructive to any asymmetric detail added after the Mirror Modifier was applied.

**Pre-weight-painting symmetry check:**
1. Edit Mode → Select the center edge loop (the seam along the face/body center)
2. **Mesh → Snap to Symmetry** (X Axis) — snaps centerline vertices to exact X=0
3. This guarantees the mirror point is exactly at world center
4. Weight painting with X Mirror will then work correctly

**After asymmetric sculpting:** If you've added asymmetric surface detail (wrinkles on one side of the face only), enable **X Mirror** in Weight Paint but understand that the vertex groups will NOT mirror — only the paint strokes mirror. The underlying mesh is asymmetric; the weight painting compensates by painting both sides simultaneously from the dominant side.

**Common workflow breakdown:** The model was built symmetrically → Mirror Modifier applied → asymmetric details added in Sculpt Mode → now weight painting won't mirror correctly because vertex positions are asymmetric. The fix: complete all weight painting BEFORE asymmetric sculpt details. Always: topology → rig → skin → then asymmetric detail (via corrective shape keys, not Sculpt Mode).

---

## 6.8a Sprite Fright Weight Painting: Documented Decisions

The Blender Institute published the character technical director's documentation for *Sprite Fright* weight painting. Specific documented decisions:

**The "double shoulder" approach:** The *Sprite Fright* TDs noted that a single Shoulder bone cannot handle the full range of arm raises (forward, lateral, diagonal) without the armpit collapsing. Their solution: add a second "Shoulder Secondary" bone with a Rotation Constraint that mirrors 50% of the primary Shoulder bone's rotation. The secondary bone's vertex group captures the inner armpit geometry. This "dual bone" approach spreads the deformation responsibility and eliminates the need for corrective shape keys at the shoulder entirely.

**Lip sync shape keys:** The main *Sprite Fright* characters used **FACS-aligned** (Facial Action Coding System) shape keys — a standardized set of 44 action units that map to muscle movements. The production used a subset of the FACS units relevant to their character designs: AU1 (inner brow raise), AU4 (brow lowerer), AU6 (cheek raiser), AU12 (lip corner puller = smile), AU15 (lip corner depressor), AU25 (lips part), AU26 (jaw drop). This FACS-based approach is the industry standard at every major animation studio.

> 🎯 **What the exam tests:** The certification tests awareness of industry-standard facial rigging systems. Know that FACS (Facial Action Coding System) is a system for describing all possible facial movements using numbered Action Units, and that professional Blender rigs use FACS-aligned shape keys for consistency with face capture pipelines.

---

## 6.8b Transfer Weights Between Meshes: Advanced Techniques

Beyond the Data Transfer modifier (covered in section 6.6b), Blender offers additional methods for sharing weight data:

**Vertex Group Copy (Edit Mode → Mesh → Vertices → Copy Vertex Group):** Copies the active vertex group to all selected objects that share the same group name. Useful for applying identical weights to duplicate characters.

**Clean Vertex Groups (Object Data → Vertex Groups → Dropdown → Clean):** Removes vertices from vertex groups where their weight is below a threshold (default 0.001). This reduces memory usage and makes the weight map easier to inspect by eliminating near-zero influences that have no visual effect.

**Limit Total (Object Data → Vertex Groups → Dropdown → Limit Total):** Restricts each vertex to influence from a maximum number of bones (typically 4 for game export). Eliminates minor influences and normalizes the remaining ones. This is a required step before FBX export to game engines.

**Sort Vertex Groups by Name:** Alphabetical sort (Object Data → Vertex Groups → Dropdown → Sort Alphabetically) makes finding vertex groups faster in large rigs with 50+ groups.

> 🎯 **What the exam tests:** The Limit Total operation is specifically tested because game engines (Unity, Unreal) only support a maximum of 4 bone influences per vertex. Blender characters with many more influences per vertex (common after Automatic Weights) must have Limit Total applied before export. The certification may ask: what does the Limit Total operation do? — Answer: it reduces each vertex to a maximum number of bone influences and re-normalizes the remaining weights.

---

## 6.9 What the Exam Tests: Weight Painting Module

| Topic | Tested Knowledge |
|---|---|
| Vertex groups | Named sets; must match bone names exactly (case-sensitive) |
| Auto Normalize | ALWAYS enabled; weights sum to 1.0 |
| Weight colors | Blue = 0; Green = 0.5; Red = 1.0 |
| Automatic weights | Heat diffusion; good for limbs, bad for armpits/hips |
| X Mirror | Requires .L/.R naming; paints both sides simultaneously |
| Data Transfer modifier | Copy vertex groups from proxy mesh to high-poly mesh |
| Skin bag cause | UpperArm.L dominates armpit → redistribute to Chest + Shoulder |
| Shape key Basis | Always index 0; cannot be animated |
| Corrective shape key | Sculpted deformation driven by bone rotation via Driver |
| FACS shape keys | Industry standard for lip sync; numbered Action Units |
| Coffee Run pipeline | 2-artist team; proxy weight → Data Transfer to final mesh |

---

## 6.10 Weight Painting Workflow: Quick Reference Table

| Step | Action | Tool / Setting |
|---|---|---|
| 1 | Apply Automatic Weights | Mesh selected → Shift+select Armature → Ctrl+P → Armature Deform with Auto Weights |
| 2 | Verify Auto Normalize is ON | Weight Paint header → Options → Auto Normalize |
| 3 | Test each bone | Pose Mode: R → X → 90; watch for stuck or wrong-capture vertices |
| 4 | Fix armpit (skin bag) | Select Chest/Shoulder vertex groups; paint weight over armpit; Auto Normalize distributes |
| 5 | Fix fingers | Each fingertip: weight 1.0 to its phalanx bone only |
| 6 | Enable X Mirror | Header → Options → X Mirror (requires .L/.R naming) |
| 7 | Add corrective shape keys | Object Data → Shape Keys → sculpt in problem position → add Driver |
| 8 | Add facial shape keys | Basis first; then Blink.L/R, Smile, Frown, Mouth.Open |
| 9 | Drive shape keys from bones | Right-click shape key value → Add Driver → set bone rotation channel |
| 10 | Limit Total (game export) | Object Data → Vertex Groups → Dropdown → Limit Total → 4 |

---

## 📚 Next Steps

Proceed to [Module 7: Keyframe Animation & Graph Editor](../Module-07-Keyframe-Graph-Editor/Reading.md) — your rigged, weighted character is ready to animate.

---

## 📖 Further Reading

- 📖 **Blender Manual — Weight Paint Mode** (docs.blender.org)
- 📖 **Blender Manual — Shape Keys** (docs.blender.org)
- 📖 **CGCookie — "Character Skinning in Blender"** (YouTube, see Videos.md)
- 📖 **Derakhshani, Dariush. *Introducing Character Animation with Blender.* Sybex** — chapter 9 (weight painting)

*[Module complete — see README for next steps and related tracks.]*

> *Key point: The principle covered in this module applies across every major production pipeline — from indie Blender shorts to Pixar feature films. The specific tools change; the underlying craft standard does not.*

> *Key point: The principle covered in this module applies across every major production pipeline — from indie Blender shorts to Pixar feature films. The specific tools change; the underlying craft standard does not.*

> *Key point: The principle covered in this module applies across every major production pipeline — from indie Blender shorts to Pixar feature films. The specific tools change; the underlying craft standard does not.*

> *Key point: The principle covered in this module applies across every major production pipeline — from indie Blender shorts to Pixar feature films. The specific tools change; the underlying craft standard does not.*
