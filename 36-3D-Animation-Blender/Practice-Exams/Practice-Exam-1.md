---
permalink: /36-3D-Animation-Blender/Practice-Exams/Practice-Exam-1/
title: "Practice Exam 1: Blender Fundamentals, Modules 1–5"
---

# 🧪 Practice Exam 1: Blender Fundamentals (Modules 1–5)

**30 questions · Allow 45 minutes · No notes. Recommended after Modules 1–5.**

---

### 1.
What does pressing **Ctrl+Spacebar** do in the 3D Viewport?

A. Opens the Search operator menu
B. **Maximizes the active editor to fill the screen**
C. Saves the file
D. Adds a new object

---

### 2.
In Blender's coordinate system, the **Y axis** points:

A. Up
B. Right
C. **Forward (depth into the scene)**
D. Toward the camera

---

### 3.
The **Outliner** in Blender is primarily used for:

A. Editing vertex weights on a mesh
B. Setting keyframes on bones
C. Adjusting render sample counts
D. **Managing the scene hierarchy: objects, collections, and visibility**

---

### 4.
An object in Blender with a **non-unit scale** (e.g., Scale X = 2.5) will cause problems when:

A. Adding a Subdivision Surface modifier
B. Setting keyframes on its material
C. **Rigging with an armature (bone math requires unit scale)**
D. Changing its material's roughness value

---

### 5.
Which keyboard shortcut selects an **edge ring** (edges perpendicular to a loop) in Edit Mode?

A. Alt+Click
B. Shift+Click
C. Ctrl+Click
D. **Ctrl+Alt+Click**

---

### 6.
A character mesh has a "pinching" artifact at the elbow when the arm bends. The most likely cause is:

A. The Armature modifier is above the Subdivision Surface modifier in the stack
B. The mirror modifier is not applied
C. **Insufficient edge loops at the elbow joint**
D. The mesh has non-manifold edges at the elbow

---

### 7.
The **Subdivision Surface modifier** at level 2 multiplies the polygon count by:

A. 4
B. 8
C. **16**
D. 64

---

### 8.
In the Principled BSDF, setting **Metallic = 0.6** is:

A. Correct for brushed aluminum
B. Correct for tarnished silver
C. **Not physically correct; Metallic should be 0 (dielectric) or 1 (conductor)**
D. The default value for most surfaces

---

### 9.
To import a **Normal Map** texture from Substance Painter correctly, the Image Texture node must be set to which Color Space?

A. sRGB
B. Linear
C. Filmic
D. **Non-Color**

---

### 10.
UV seams should be placed:

A. Along the nose bridge and center face for the most accurate UV layout
B. On every edge loop to maximize UV resolution
C. Only at non-deforming areas (hard surfaces, props, never characters)
D. **At areas least visible to the camera: under arms, inside legs, behind ears**

---

### 11.
The **Material Preview** viewport shading mode in Blender:

A. Runs a full Cycles render in real time
B. Shows the mesh with only vertex colors, no textures
C. **Shows materials with an HDRI-based preview without requiring a full render**
D. Is only available when EEVEE is the active renderer

---

### 12.
The correct order of operations when building a character is:

A. Rig → Model → Texture → Weight paint
B. Weight paint → Rig → Model → Texture
C. **Model → Texture → Rig → Weight paint**
D. Rig → Weight paint → Model → Texture

---

### 13.
In Blender 4.x, **Bone Collections** replace:

A. Vertex groups
B. Pose libraries
C. Bone constraints
D. **Bone Layers**

---

### 14.
The **Armature modifier** is applied to:

A. The armature object
B. Both the armature and the mesh
C. **The mesh object that the armature deforms**
D. A helper Empty object linked between armature and mesh

---

### 15.
The shortcut to **extrude a new connected bone** from a bone's tail in Armature Edit Mode is:

A. Ctrl+E
B. Shift+D
C. **E**
D. Ctrl+Shift+A

---

### 16.
A pole target in an IK rig is necessary to:

A. Prevent the IK chain from exceeding its chain length
B. Set the maximum rotation angle for the knee joint
C. **Define which direction the elbow or knee bends**
D. Link the IK chain to the FK chain for IK/FK switching

---

### 17.
The **HDRI environment texture** in Blender's World Shader is set up by:

A. Attaching a Point light to the World Properties → Strength
B. Enabling HDRI in Render Properties → Indirect Lighting
C. **Adding an Environment Texture node in the World Shader Editor and loading a .hdr or .exr file**
D. Importing an HDRI via File → Import → HDRI

---

### 18.
In three-point lighting, the **Key-to-Fill ratio of 16:1** is typically associated with which genre?

A. Comedy
B. Children's animation
C. Documentary
D. **Horror / Thriller**

---

### 19.
The *Sprite Fright* open movie had an average of how many light objects per shot?

A. 2–3
B. 5–7
C. **12–18**
D. 30–40

---

### 20.
In Rigify, which bone type is visible to and manipulated by the animator?

A. DEF (Deform)
B. ORG (Original)
C. MCH (Mechanism)
D. **CTRL (Control)**

---

### 21.
The **"skin bag" problem** is a weight-painting issue where:

A. The mesh texture shows skin-colored artifacts at joint seams
B. **The armpit or hip area collapses into a deflated, messy shape when a limb is raised**
C. The Subdivision Surface creates an artifact at the armpit area
D. Cloth simulation passes through the character's skin

---

### 22.
To symmetrize bones from the left side to the right side in Armature Edit Mode, Blender uses:

A. Mirror modifier applied to the armature
B. Ctrl+M → Mirror → X Axis
C. **Mesh → Symmetrize (after ensuring .L/.R naming convention)**
D. Edit → Duplicate and scale X by -1

---

### 23.
Which shortcut corrects bone rolls in Armature Edit Mode?

A. Ctrl+R
B. Shift+E
C. **Ctrl+N (Recalculate Roll)**
D. Ctrl+Alt+R

---

### 24.
The **Proportional Editing** falloff radius is resized during a transform by:

A. Pressing R while holding Ctrl
B. Typing a value in the header field
C. Holding Alt and dragging
D. **Scrolling the mouse wheel**

---

### 25.
A **corrective shape key** is primarily used to:

A. Create facial expressions for dialogue
B. Drive the IK chain's pole target
C. **Fix deformation artifacts at joints (skin bag, candy wrapper twist) by sculpting a compensating pose**
D. Blend between two different rig poses automatically

---

### 26.
The Blender Foundation open movie that is most referenced as a production-pipeline benchmark, released in 2021, is:

A. Coffee Run
B. Charge
C. Wing It!
D. **Sprite Fright**

---

### 27.
The **Shader Editor** in Blender is accessed from:

A. Properties Panel → Material → Edit Nodes
B. **The Shading workspace (or by switching any editor to Shader Editor type)**
C. Edit Mode → Material → Node Graph
D. Render Properties → Node Graph

---

### 28.
Which modifier is used to **automatically mirror geometry** across an axis during character modeling?

A. Array
B. Solidify
C. Bevel
D. **Mirror**

---

### 29.
In **IK (Inverse Kinematics)**, the Chain Length setting of 2 means:

A. The solver uses 2 iterations to converge
B. The pole target is positioned 2 bone lengths away
C. **The IK chain covers 2 bones above the constrained tip (e.g., lower leg + upper leg)**
D. The IK constraint is applied to 2 separate bones simultaneously

---

### 30.
Before adding the Armature modifier (or using Ctrl+P for auto-weights), the most important step is:

A. Applying the Mirror Modifier
B. UV unwrapping the character
C. Adding materials to all mesh objects
D. **Applying scale (Ctrl+A → Apply Scale) on the mesh**

---

## 🎯 Answer Key (No Cheating!)

```
1.   B — Ctrl+Spacebar maximizes the active editor
2.   C — Y axis = forward (into the scene)
3.   D — Outliner = scene hierarchy management
4.   C — Non-unit scale causes armature bone math errors
5.   D — Ctrl+Alt+Click selects edge ring
6.   C — Pinching at elbow = too few edge loops
7.   C — Subsurf level 2 = ×16 polygon multiplier
8.   C — Metallic must be 0 or 1; 0.6 is not physically valid
9.   D — Normal maps must be Non-Color in Image Texture node
10.  D — Seams at hidden areas (under arms, inside legs, behind ears)
11.  C — Material Preview = HDRI-based shader preview without full render
12.  C — Model → Texture → Rig → Weight paint
13.  D — Bone Collections replace Bone Layers in Blender 4.x
14.  C — Armature modifier on the mesh object
15.  C — E extrudes a new connected bone from the tail
16.  C — Pole target defines elbow/knee bending direction
17.  C — Environment Texture node in World Shader with .hdr/.exr file
18.  D — 16:1 ratio = horror/thriller (extreme contrast)
19.  C — Sprite Fright averaged 12–18 lights per shot
20.  D — CTRL bones are the animator-facing controls
21.  B — Skin bag = armpit/hip collapses when limb is raised
22.  C — Mesh → Symmetrize (with .L/.R naming)
23.  C — Ctrl+N recalculates bone roll
24.  D — Scroll wheel resizes Proportional Editing radius during transform
25.  C — Corrective shape keys fix joint deformation artifacts
26.  D — Sprite Fright (2021) is the benchmark open movie
27.  B — Shading workspace or any editor set to Shader Editor type
28.  D — Mirror modifier for automatic symmetry
29.  C — Chain Length 2 = 2 bones above the tip in the chain
30.  D — Apply scale before rigging
```
