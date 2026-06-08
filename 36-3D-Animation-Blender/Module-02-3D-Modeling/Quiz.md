---
permalink: /36-3D-Animation-Blender/Module-02-3D-Modeling/Quiz/
title: "Module 2 Quiz: 3D Modeling for Animation"
---

# 🧪 Module 2 Quiz: 3D Modeling for Animation

**24 questions · Allow 30 minutes · No notes.**

---

### Q1.
Which face type is preferred for all animated surfaces in Blender character meshes?

A. Triangles (tris)
B. N-gons (5+ sides)
C. **Quads (four-sided faces)**
D. Pentagons

---

### Q2.
What keyboard shortcut adds a **loop cut** in Edit Mode?

A. L
B. Ctrl+L
C. **Ctrl+R**
D. Alt+R

---

### Q3.
The Mirror Modifier **Clipping** option does which of the following?

A. Removes triangles at the mirror seam
B. Applies the modifier automatically
C. **Prevents vertices from crossing the mirror axis**
D. Creates a separate object on the mirrored side

---

### Q4.
In Catmull-Clark Subdivision Surface, adding more edge loops closer to an edge has what effect?

A. Reduces polygon count in the final mesh
B. Smooths the subdivision more aggressively
C. **Sharpens the edge in the subdivided result**
D. Converts the edge to a crease value of 1

---

### Q5.
A character mesh has pinching artifacts at the elbow when the arm is bent 90°. The most likely cause is:

A. Too many edge loops at the elbow
B. N-gons at the elbow area
C. **Too few edge loops at the elbow (insufficient deformation geometry)**
D. The wrong subdivision type (should use Simple, not Catmull-Clark)

---

### Q6.
What does **Proportional Editing** (O key) do in Edit Mode?

A. Makes all transforms relative to the object origin
B. Locks the transform to a proportional scale of the viewport
C. **Applies transforms with a smooth falloff over a radius of influence**
D. Constrains the transform to maintain aspect ratio

---

### Q7.
The *Sprite Fright* character Ellie had approximately how many polygons in her base mesh (before subdivision)?

A. 500
B. 20,000
C. **4,800**
D. 77,000

---

### Q8.
To select an **edge ring** in Edit Mode (edges running perpendicular to a loop), you use:

A. Alt+Click
B. Ctrl+Click
C. **Ctrl+Alt+Click**
D. Shift+Alt+Click

---

### Q9.
Which shortcut adds a **crease** to selected edges to sharpen them under Subdivision Surface?

A. Ctrl+E
B. **Shift+E**
C. Alt+E
D. Ctrl+Shift+E

---

### Q10.
What is the recommended Subdivision Surface level for **final render** in Cycles at feature-film quality?

A. 0
B. 1
C. 2
D. **3**

---

### Q11.
The Mirror Modifier **Merge** option does which of the following?

A. Converts the mirror to an Edit Mode duplicate
B. **Welds mirrored vertices at the seam into single vertices**
C. Merges all objects in the scene into one mesh
D. Enables real-time preview only at render time

---

### Q12.
Which of the following is the correct production workflow order for a character base mesh?

A. Detail → Block-out → Subdivision
B. Subdivision → Block-out → Topology cleanup
C. **Block-out → Topology refinement (edge loops) → Subdivision Surface**
D. Sculpt → Retopology → Block-out

---

### Q13.
A vertex with 5 edges meeting at it (a "5-pole") creates:

A. A major artifact; always restructure
B. Guaranteed triangulation on export
C. **Slight hardening in low-curvature areas; generally acceptable**
D. A T-intersection artifact

---

### Q14.
Before rigging a character, the most critical transform to apply is:

A. Location (to move origin to 0,0,0)
B. **Scale (Ctrl+A → Apply Scale)**
C. Rotation (to align to world axes)
D. All transforms including dimensions

---

### Q15.
Which tool in Edit Mode creates new geometry by cutting through faces along a drawn path?

A. Ctrl+R (Loop Cut)
B. E (Extrude)
C. Ctrl+B (Bevel)
D. **K (Knife)**

---

### Q16.
At what subdivision level does a 2,000-polygon base mesh reach approximately 32,000 polygons?

A. Level 1 (×4 = 8,000)
B. **Level 2 (×16 = 32,000)**
C. Level 3 (×64 = 128,000)
D. Level 4 (×256 = 512,000)

---

### Q17.
The **Statistics overlay** in Blender's viewport is useful for:

A. Monitoring GPU memory usage during render
B. Checking UV seam placement
C. **Viewing the current polygon, vertex, and edge count of the scene**
D. Displaying bone count for rigging purposes

---

### Q18.
You want to build the body of a humanoid character and only work on the right side while automatically mirroring to the left. What is the correct setup?

A. Duplicate the mesh, scale X by -1, merge at center
B. **Add a Mirror Modifier with X axis, Clipping enabled, and Merge enabled**
C. Use Edit Mode symmetry from the Mesh menu
D. Model both sides manually then use Ctrl+M to merge

---

### Q19.
Which of the following is the correct minimum edge loop count at the **shoulder joint**?

A. 1 loop
B. 2 loops
C. 3 loops
D. **4–5 loops (shoulder rotates in 3 axes)**

---

### Q20.
"Topology" in the context of 3D animation modeling refers to:

A. The UV unwrapping layout of the mesh
B. The material slot arrangement of the mesh
C. **The arrangement of vertices, edges, and faces that define the mesh structure**
D. The LOD (Level of Detail) hierarchy of the mesh

---

### Q21.
The **Proportional Editing** radius is controlled during a transform by:

A. Holding Alt and dragging
B. Pressing R to resize
C. Typing a value in the header
D. **Scrolling the mouse wheel**

---

### Q22.
Which statement about n-gons in animation meshes is correct?

A. N-gons are preferred over quads because they reduce polygon count
B. N-gons work correctly with Subdivision Surface if they are planar
C. **N-gons produce unpredictable subdivision results and should be avoided in animated character meshes**
D. N-gons are only a problem on import to game engines, not for Blender rendering

---

### Q23.
What does **Ctrl+J** do in Object Mode?

A. Adds a Joint (bone) to selected objects
B. **Joins (merges) all selected objects into one mesh**
C. Creates a linked duplicate of the selected object
D. Opens the Join options dialog

---

### Q24.
The concentric oval rings of edges around the **eye socket** in face topology serve primarily to:

A. Create a sharp edge for the eyelid crease
B. Allow normal map detail to be baked
C. **Provide geometry for the blink deformation (eyelid open/close)**
D. Define the UV seam for eye texture painting

---

## 🎯 Answer Key (No Cheating!)

```
Q1.  C, Quads are required for predictable deformation in animation meshes
Q2.  C, Ctrl+R is the Loop Cut shortcut
Q3.  C, Clipping prevents vertices from crossing the mirror axis
Q4.  C, Close loops sharpen the edge (the control-cage effect)
Q5.  C, Pinching = too few loops; the joint lacks geometry to deform smoothly
Q6.  C, Proportional Editing applies a radius-based falloff to transforms
Q7.  C, ~4,800 polygons was Ellie's documented base mesh count
Q8.  C, Ctrl+Alt+Click selects an edge ring (perpendicular to loop)
Q9.  B, Shift+E sets crease value on selected edges
Q10. D, Level 3 is used for final Cycles renders at feature quality
Q11. B, Merge welds mirrored vertices at the seam
Q12. C, Block-out → topology refinement → subdivision is the correct order
Q13. C, 5-poles cause slight hardening; acceptable away from high-curvature areas
Q14. B, Scale must be applied before rigging (Ctrl+A → Apply Scale)
Q15. D, K is the Knife tool for freehand cuts
Q16. B, Level 2 = ×16 = 2,000 × 16 = 32,000 polygons
Q17. C, Statistics overlay shows polygon/vertex/edge count
Q18. B, Mirror Modifier with X axis, Clipping, and Merge is the correct setup
Q19. D, Shoulder needs 4–5 loops (most complex joint, 3-axis rotation)
Q20. C, Topology = arrangement of vertices, edges, faces
Q21. D, Scroll wheel resizes the Proportional Editing radius during transform
Q22. C, N-gons produce unpredictable results; avoid in animated meshes
Q23. B, Ctrl+J joins selected objects into one mesh
Q24. C, Oval rings provide eyelid blink deformation geometry
```
