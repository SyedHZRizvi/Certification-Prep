---
permalink: /36-3D-Animation-Blender/Module-06-Weight-Painting-Skinning/Quiz/
title: "Module 6 Quiz: Weight Painting & Skinning"
---

# 🧪 Module 6 Quiz: Weight Painting & Skinning

**24 questions · Allow 30 minutes · No notes.**

---

### Q1.
In Blender's Weight Paint mode color coding, what does **red** indicate for a vertex?

A. The vertex has no influence from the active bone (weight = 0.0)
B. The vertex has partial influence from the active bone (weight = 0.5)
C. **The vertex has full influence from the active bone (weight = 1.0)**
D. The vertex has a conflicting weight assignment

---

### Q2.
The **Auto Normalize** option in Weight Paint mode ensures that:

A. Brush strokes are automatically smoothed
B. The weight paint view matches the rendered output
C. **All bone weight values for a vertex sum to exactly 1.0**
D. Automatic weights are regenerated after each brush stroke

---

### Q3.
What tool enters **Weight Paint Mode** from Object Mode?

A. Tab
B. Alt+Tab
C. **Ctrl+Tab → Weight Paint**
D. Shift+Tab

---

### Q4.
The **Blur** brush tool in Weight Paint mode:

A. Removes all weights from vertices under the brush
B. Paints the maximum weight (1.0) over all vertices in the brush radius
C. **Smooths the weight gradient at the cursor position**
D. Samples the weight value from clicked vertices

---

### Q5.
Which vertex group weight value represents a vertex that is **equally shared** between two bones?

A. 0.0 for both bones
B. 1.0 for both bones
C. **0.5 for each bone (with Auto Normalize, total = 1.0)**
D. 2.0 total (1.0 per bone, without Auto Normalize)

---

### Q6.
The **skin bag problem** most commonly occurs at:

A. The wrist, when the hand rotates
B. The knees, when the legs cross
C. The fingers, when they curl
D. **The armpit and hip areas, when limbs are raised or spread**

---

### Q7.
To see which bone's weights you are currently painting in Weight Paint mode, you should:

A. Press N and check the Item tab
B. **Check the active vertex group in Object Data Properties → Vertex Groups**
C. Use the Eyedropper tool to sample from the surface
D. Open the Outliner and look for highlighted bones

---

### Q8.
The **Draw** brush in Weight Paint mode, with Blend Mode set to "Subtract," will:

A. Paint at full weight (1.0) wherever you stroke
B. Average weights to the current brush weight value
C. Smooth the weights at the brush position
D. **Reduce (subtract from) the current weight values under the brush**

---

### Q9.
A **shape key** in Blender is best described as:

A. A stored pose of the armature for a specific expression
B. A node group in the Shader Editor
C. **A stored deformed state of the mesh geometry that can be blended with a value**
D. A UV island layout saved for a specific camera angle

---

### Q10.
The "Basis" shape key in a character's shape key list represents:

A. The most extreme (maximum value) expression
B. The shape key with the highest weight value
C. An automatically generated rest pose from the armature
D. **The neutral, rest-pose geometry of the mesh**

---

### Q11.
When multiple shape keys are active simultaneously (e.g., Smile = 0.8 AND Frown = 0.8), the result is:

A. Only the shape key with the higher value is applied
B. The shape keys are blended proportionally based on a normalized total
C. **Both shapes are applied additively, potentially causing unpredictable deformation**
D. Blender automatically prevents conflicting shape keys from activating

---

### Q12.
In a bone-driven shape key setup, the **Driver** system connects:

A. The shape key to the timeline playhead position
B. The shape key to a physics simulation output
C. The shape key to a material parameter for visual feedback
D. **The shape key's value to a bone's rotation value**

---

### Q13.
The recommended **production budget** for weight painting a single humanoid character, per the *Sprite Fright* documentation, is approximately:

A. 30 minutes (automatic weights + quick check)
B. 4–8 hours (one full day)
C. **2–4 days (including corrective shape keys and driver setup)**
D. 1–2 weeks for a principal character

---

### Q14.
Which Weight Paint brush would you use to **even out a jagged weight boundary** between two vertex groups?

A. Draw
B. **Blur (or Average)**
C. Smear
D. Sample Weight

---

### Q15.
What does the **Strength** parameter on a Weight Paint brush control?

A. The maximum weight value the brush can paint
B. The size of the brush in pixels
C. **The intensity/opacity of each brush stroke (0.1 = subtle, 1.0 = instant override)**
D. The number of brush iterations per frame

---

### Q16.
To create a shape key for a **Blink.L** (left eye blink), you should:

A. Rotate the eyelid bone in Pose Mode and use Ctrl+P to store the pose
B. Enter the Armature Properties and add a custom property named "Blink.L"
C. **Add a new shape key, enter Edit Mode for that shape key, and move the left eyelid vertices downward**
D. Use the Cloth simulation to make the eyelid fold closed

---

### Q17.
The **Weight Gradient** tool in Weight Paint mode is useful for:

A. Painting random noise weights for organic-looking deformation
B. **Creating a smooth linear or radial weight transition across a region**
C. Sampling the weight gradient from another mesh
D. Applying a physically-based falloff formula to all vertex groups at once

---

### Q18.
**Automatic Weights** (Ctrl+P → Armature Deform with Automatic Weights) works best for:

A. Complex joint areas like armpits and hips
B. Detailed mechanical rigs with gear-tooth deformation
C. **Simple cylindrical limbs, spine, and head — areas with clear bone-to-surface correspondence**
D. Any character mesh, requiring no further manual correction

---

### Q19.
When a vertex has a total weight sum greater than 1.0 across all vertex groups (Auto Normalize off), the visual result is:

A. The vertex is excluded from the Armature modifier's calculation
B. The vertex is assigned to the bone with the highest individual weight only
C. The vertex renders with a red error indicator in the viewport
D. **The vertex moves more than it should — "double-moving" or distorting beyond expected range**

---

### Q20.
The **Data Transfer modifier** in Blender is relevant to weight painting because it allows:

A. Transferring shape keys from one character to another with matching topology
B. Transferring UV coordinates from a high-poly to a low-poly mesh
C. **Copying weight paint vertex groups from one mesh (body) to another (clothing/accessories)**
D. Exporting weight data to game-engine vertex buffers

---

### Q21.
Which production-level approach prevents the animator from needing to manually adjust shape key sliders during animation?

A. Baking all shape keys into the mesh as separate mesh frames
B. Setting all shape keys to their maximum values before animating
C. Using Geometry Nodes to procedurally generate expressions
D. **Driving shape keys from bone rotation via Blender's Driver system**

---

### Q22.
In the jaw-open shape key driver setup, the bone rotation range is typically mapped as:

A. 0° → 1.0 influence (open), 90° → 0.0 influence (closed)
B. **0° → 0.0 influence (closed), -30° → 1.0 influence (open)**
C. 45° → 0.0 influence (neutral), 90° → 1.0 influence (open)
D. The mapping is always linear from -180° to +180°

---

### Q23.
Which color represents a weight of approximately **0.3–0.5** in Blender's Weight Paint mode?

A. Deep blue
B. Red
C. **Cyan or green**
D. Yellow

---

### Q24.
The **Blink.L** and **Blink.R** shape keys are designed as:

A. A single combined shape key controlling both eyes simultaneously
B. Part of the Basis shape key with a secondary mix value
C. **Independent per-eye shape keys, allowing asymmetric blinks**
D. Bone-deformed expressions that don't require shape keys

---

## 🎯 Answer Key (No Cheating!)

```
Q1.  C — Red = weight 1.0 (full influence)
Q2.  C — Auto Normalize enforces sum-to-1.0 across all vertex groups
Q3.  C — Ctrl+Tab → Weight Paint (or Mode dropdown in header)
Q4.  C — Blur brush smooths the weight gradient
Q5.  C — 0.5 each bone (Auto Normalize keeps total at 1.0)
Q6.  D — Skin bag occurs at armpits and hips
Q7.  B — Active vertex group in Object Data Properties shows current bone
Q8.  D — Subtract blend mode reduces weights under the brush
Q9.  C — Shape key = stored deformed mesh geometry blended by slider value
Q10. D — Basis = neutral rest-pose geometry
Q11. C — Shape keys add additively; conflicting shapes fight each other
Q12. D — Driver links shape key value to bone rotation
Q13. C — Sprite Fright: 2–4 days per character for weight painting + shape keys
Q14. B — Blur/Average smooths jagged weight boundaries
Q15. C — Strength = brush opacity/intensity (0.1=subtle, 1.0=instant)
Q16. C — Add new shape key, enter Edit Mode for that key, move eyelid vertices
Q17. B — Weight Gradient creates smooth linear/radial weight transitions
Q18. C — Auto weights best for simple cylindrical limbs and spine
Q19. D — Weight sum >1.0 = vertex over-moves ("double-moves")
Q20. C — Data Transfer modifier copies vertex groups from body to clothing
Q21. D — Driving shape keys from bone rotation via Driver system
Q22. B — 0° = 0.0 (closed), -30° = 1.0 (open) is the typical jaw mapping
Q23. C — Cyan/green = approximately 0.3–0.5 weight
Q24. C — Independent per-eye shape keys allow asymmetric blinks
```
