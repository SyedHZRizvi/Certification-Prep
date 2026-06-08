---
permalink: /36-3D-Animation-Blender/Module-05-Rigging-Armatures/Quiz/
title: "Module 5 Quiz: Rigging & Armatures"
---

# 🧪 Module 5 Quiz: Rigging & Armatures

**24 questions · Allow 30 minutes · No notes.**

---

### Q1.
In Blender 4.x, **Bone Collections** replace which older rigging feature?

A. Bone groups
B. Bone constraints
C. **Bone layers**
D. Bone drivers

---

### Q2.
What does the **bone roll** value control?

A. The length of the bone
B. The weight influence radius of the bone
C. The direction the bone bends in IK chains
D. **The orientation of the bone's local X and Z axes around its length (Y) axis**

---

### Q3.
The correct bone naming convention for Rigify symmetry is:

A. _left and _right suffixes
B. L_ and R_ prefixes
C. **`.L` and `.R` suffixes (e.g., `UpperArm.L`, `UpperArm.R`)**
D. Any consistent naming; Rigify adapts automatically

---

### Q4.
In **IK (Inverse Kinematics)**, the animator:

A. Rotates each bone in the chain from root to tip
B. Adjusts each bone's roll value to achieve the pose
C. **Moves the end effector (hand/foot control) and the chain solves automatically**
D. Sets keyframes on each bone individually

---

### Q5.
What is the primary purpose of a **pole target** in an IK rig?

A. To limit the maximum rotation angle of a joint
B. To copy the rotation from a control bone to the IK chain
C. **To define which direction the elbow or knee bends**
D. To create the pivot point for the IK chain's root

---

### Q6.
The shortcut to **extrude a new connected bone** from a bone's tail in Edit Mode is:

A. Ctrl+E
B. Shift+D
C. **E (same as extrude in mesh modeling)**
D. Ctrl+Shift+A

---

### Q7.
A bone's **Head** is:

A. The tip (distal) end of the bone, furthest from the root
B. The name displayed in the Outliner
C. **The proximal end of the bone, closest to the parent (root)**
D. The bone that all other bones in the rig are parented to

---

### Q8.
**Rigify** is:

A. A paid third-party rigging add-on for Blender
B. A Python script for exporting rigs to game engines
C. Blender's constraint system for IK chains
D. **Blender's built-in automatic rig generation add-on**

---

### Q9.
The **Armature modifier** is applied to:

A. The armature object itself
B. **The mesh object that the armature should deform**
C. Both the armature and the mesh objects
D. A helper empty that links the two

---

### Q10.
Which shortcut connects a mesh to an armature with **Automatic Weights** in one step?

A. Select mesh → Ctrl+M → Automatic Weights
B. Select armature → Ctrl+A → Apply Armature
C. **Select mesh → Shift+select armature → Ctrl+P → Armature Deform with Automatic Weights**
D. Select armature → Shift+select mesh → Ctrl+P → With Empty Groups

---

### Q11.
What is the **"skin bag" problem** in rigging?

A. The mesh subdivides incorrectly when the Subdivision modifier is above the Armature modifier
B. The character's skin material becomes transparent at joint intersections
C. **The armpit or hip area collapses into a messy, deflated shape when the limb is raised**
D. Automatic weights assign skin texture instead of vertex groups

---

### Q12.
In the **IK constraint**, the **Chain Length** setting of 2 means:

A. Only 2 bones in the entire armature are IK-controlled
B. The IK solver uses 2 iterations per frame
C. **The IK chain covers the 2 bones above the constrained bone (e.g., lower leg + upper leg)**
D. The pole target is positioned 2 bone-lengths from the tip

---

### Q13.
In Rigify, **DEF bones** are:

A. The custom-shaped control handles animators manipulate directly
B. The hidden source bones from the meta-rig
C. Mechanism/helper bones for intermediate calculations
D. **Deform bones that actually drive the mesh deformation**

---

### Q14.
**FK (Forward Kinematics)** is generally preferred for:

A. Foot-planting (keeping the foot on the ground when the body moves)
B. Reaching for a specific point in space
C. **Arms or tails in free space where the animator wants control over arcs and follow-through**
D. Mechanical systems where exact end-effector position is required

---

### Q15.
The Rigify **Generate Rig** button is found in:

A. Edit Menu → Rigging → Generate
B. Pose Mode → Header → Generate
C. Preferences → Add-ons → Rigify → Generate
D. **Armature Properties → Rigify Buttons → Generate Rig**

---

### Q16.
A corrective shape key is **driven** by:

A. A physics simulation that detects joint angle
B. A Python script running every frame
C. The mesh's subdivision level
D. **A bone's rotation value via Blender's driver system**

---

### Q17.
The **Pole Angle** setting on an IK constraint is adjusted to:

A. Set how far the pole target is from the limb
B. Control the IK chain's bending speed
C. Lock the rotation to specific angle increments
D. **Correct the orientation of the elbow/knee's bending direction relative to the pole target**

---

### Q18.
In Blender Pose Mode, **Ctrl+N** on selected bones:

A. Opens the Bone Collections panel
B. Creates a new bone from the selection
C. **Recalculates (corrects) the bone roll to a chosen axis direction**
D. Normalizes the bone length to 1 unit

---

### Q19.
Which Rigify bone type is **visible to and manipulated by animators** during production?

A. DEF (Deform)
B. ORG (Original)
C. MCH (Mechanism)
D. **CTRL (Control)**

---

### Q20.
**Alt+P** in Armature Edit Mode:

A. Extrudes a new bone from the selection
B. Opens the parent settings panel
C. **Clears the parent relationship from selected bones**
D. Applies the armature modifier to the mesh

---

### Q21.
The *Sprite Fright* production used Rigify as a starting point for character rigs and added:

A. External Python scripts to handle the IK/FK blending
B. A custom retargeting system for motion capture data
C. **Custom facial controls on top of the Rigify base rig**
D. A completely manual rig with no Rigify involvement

---

### Q22.
What is the **Armature modifier** equivalent shortcut path using parent?

A. Select armature → Ctrl+P → Object
B. **Select mesh → Shift+select armature → Ctrl+P → Armature Deform**
C. Select mesh → Ctrl+A → Armature Apply
D. Select armature → Add Modifier → Mesh

---

### Q23.
In a production pipeline, Rigify rigs are generally **not recommended** for:

A. Blender-native character animation
B. Sprite Fright-style stylized shorts
C. Indie short films with simple characters
D. **Direct export to game engines (too many bones; a custom stripped rig is better)**

---

### Q24.
The **candy wrapper twist** problem occurs when:

A. The forearm bones have incorrect weights at the wrist
B. The IK chain has an incorrect chain length
C. **The forearm rotates along its length axis and the skin twists like a wrapped candy**
D. Subdivision Surface is applied before the Armature modifier in the stack

---

## 🎯 Answer Key (No Cheating!)

```
Q1.  C, Bone Collections replace Bone Layers in Blender 4.x
Q2.  D, Bone roll = rotation of local X/Z axes around the bone's Y (length) axis
Q3.  C, .L and .R suffixes (UpperArm.L, UpperArm.R)
Q4.  C, IK: move the end effector; chain solves automatically
Q5.  C, Pole target defines elbow/knee bending direction
Q6.  C, E extrudes a new connected bone from the tail
Q7.  C, Head = proximal end (closest to parent/root)
Q8.  D, Rigify is Blender's built-in automatic rig generator
Q9.  B, Armature modifier is applied on the mesh object
Q10. C, Mesh → Shift+select armature → Ctrl+P → Armature Deform with Auto Weights
Q11. C, Skin bag = armpit/hip collapses when limb is raised
Q12. C, Chain Length 2 = 2 bones above the constrained bone in the chain
Q13. D, DEF bones deform the mesh
Q14. C, FK preferred for free-space arms/tails where arc control matters
Q15. D, Armature Properties → Rigify Buttons → Generate Rig
Q16. D, Corrective shape keys driven by bone rotation via Blender drivers
Q17. D, Pole Angle corrects the elbow/knee orientation relative to the pole
Q18. C, Ctrl+N recalculates bone roll
Q19. D, CTRL bones are the animator-facing controls
Q20. C, Alt+P clears parent (in Edit Mode on bones)
Q21. C, Sprite Fright added custom facial controls on top of Rigify
Q22. B, Select mesh → Shift+select armature → Ctrl+P → Armature Deform
Q23. D, Rigify rigs are too heavy for direct game-engine export
Q24. C, Candy wrapper twist = forearm twist artifact on length rotation
```
