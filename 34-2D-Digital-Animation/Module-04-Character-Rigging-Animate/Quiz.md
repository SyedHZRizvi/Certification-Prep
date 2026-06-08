---
permalink: /34-2D-Digital-Animation/Module-04-Character-Rigging-Animate/Quiz/
title: "Module 4 Quiz: Character Rigging in Adobe Animate"
---

# 🧠 Module 4 Quiz, Character Rigging in Adobe Animate

---

### Q1. In a symbol-based character rig, why is the registration point's location critical?

A. It determines which layer the symbol is exported to
B. It defines the pivot/rotation center of the symbol; for body parts, it should be at the joint position
C. It controls the symbol's audio sync behavior
D. It sets the default color effect applied to all instances

---

### Q2. In the parent-child hierarchy of a character rig, if the body symbol (parent) is moved, what happens to the arm symbol (child nested inside the body)?

A. The arm remains stationary; only the body moves
B. The arm moves along with the body, maintaining its relative position
C. The arm is duplicated to maintain its original position
D. The arm's tween properties are reset

---

### Q3. The Preston Blair phoneme set is used for what purpose?

A. Defining the key poses of a walk cycle
B. Mapping mouth shapes to groups of speech sounds for lip sync
C. Setting easing presets for dialogue scenes
D. Organizing the Library structure for multi-character projects

---

### Q4. Which phoneme group in the Preston Blair set corresponds to the M, B, and P sounds?

A. AI (wide open)
B. O (round pursed)
C. MBP (closed or nearly closed)
D. FV (upper teeth on lower lip)

---

### Q5. What is the Swap Symbol dialog in Adobe Animate used for in character animation?

A. Replacing the entire character rig with a different character
B. Replacing one symbol instance with a different symbol from the Library on a specific frame, while preserving position and transform
C. Converting a symbol from Graphic type to Movie Clip type
D. Exporting a symbol directly from the Library to a separate file

---

### Q6. Forward Kinematics (FK) in character animation means:

A. The end effector position is specified and the system solves joint angles automatically
B. Each joint in the chain is rotated independently from parent to child
C. The character's forward motion is tracked along a motion path
D. Kinematics are calculated from the ground up using physics simulation

---

### Q7. Which 2D animated series is primarily animated using a cut-out rig technique?

A. Spirited Away
B. South Park
C. Akira
D. Princess Mononoke

---

### Q8. An animator has built a character rig with the upper arm's registration point at the center of the arm's bounding box instead of at the shoulder joint. What will happen when the upper arm is rotated?

A. The arm will rotate correctly around the shoulder joint
B. The arm will rotate around its center, appearing to float away from the shoulder
C. The arm will automatically snap to the correct shoulder position
D. The rotation will be applied to the parent body symbol instead

---

### Q9. The FV phoneme in the Preston Blair chart is characterized by:

A. A wide open mouth with teeth visible
B. Upper front teeth resting on the lower lip
C. A round, forward-pursed lip shape
D. The mouth being fully closed

---

### Q10. When using symbol swap for mouth shapes, why is it essential that all mouth shape symbols share the same registration point position?

A. Different registration points cause audio desynchronization
B. If registration points differ, the swapped mouth will appear in the wrong position relative to the face
C. Consistent registration points are required for audio stream sync to work
D. The Swap Symbol dialog only works if all symbols have identical registration points

---

### Q11. Which type of kinematics is most appropriate for a character's leg that must stay planted on the ground while the hips move?

A. Forward Kinematics (FK)
B. Inverse Kinematics (IK)
C. Rotational Kinematics (RK)
D. Procedural Kinematics (PK)

---

### Q12. In the cut-out animation workflow, at what stage are registration points set for each body part symbol?

A. During export, automatically calculated by Animate
B. During the import process when assets are brought into the Library
C. When building the symbol hierarchy and assembling the character
D. After all animation keyframes have been set

---

### Q13. Which of the following productions is an example of Adobe Animate/Flash-style cut-out rigging taken to a high expressive level with complex facial animation?

A. Spirited Away (Studio Ghibli)
B. Hazbin Hotel (Vivienne Medrano)
C. My Neighbor Totoro (Studio Ghibli)
D. Akira (Katsuhiro Otomo)

---

### Q14. The "layer order problem" in cut-out animation arises when:

A. Too many layers are used and the file becomes too large
B. A character turns and front/back limbs need to swap their Z-order (which layer is in front)
C. The Audio Stream sync loses its position in complex multi-layer scenes
D. Symbol swap operations conflict across multiple layers simultaneously

---

### Q15. What is the primary difference between the Asset Warp Tool (current) and the older Bone Tool in Adobe Animate?

A. The Asset Warp Tool creates deformation bones that warp artwork directly; the old Bone Tool created IK chains between separate symbols
B. The Asset Warp Tool is only available in ActionScript 3 documents; the Bone Tool works in all document types
C. The Asset Warp Tool requires external plugins; the Bone Tool is built into Animate
D. The Asset Warp Tool only works with bitmaps; the Bone Tool works with vectors

---

### Q16. A character's head needs to show five different expressions across a scene. Which is the most efficient cut-out approach in Animate?

A. Draw all five expressions on the same keyframe and toggle layer visibility
B. Create five separate Graphic symbols for the head (one per expression) and swap them frame by frame
C. Tween the head's opacity from 100% to 0% between expressions
D. Use a separate document for each expression and import them separately

---

### Q17. In the Preston Blair phoneme set, which group is used during moments of silence or exhale?

A. O (round pursed)
B. REST (relaxed, slight opening)
C. MBP (closed)
D. E (wide smile)

---

### Q18. The "U" phoneme group in the Preston Blair chart describes:

A. A mouth shape used for "you," "do," "blue", small round, lips pushed forward
B. A wide open mouth used for emphatic "uhh" sounds
C. The mouth position for the "under" vowel sound only
D. An unassigned placeholder used when no phoneme applies

---

### Q19. An animator is building a rig for a character that waves goodbye. Which approach correctly uses IK for the arm?

A. Rotating the shoulder, then elbow, then wrist each on separate keyframes (FK)
B. Moving the hand (end effector) to each wave position and letting IK solve the elbow and shoulder angles
C. Drawing each arm position as a separate symbol and swapping frame by frame
D. Applying a Motion Tween to the hand layer independently of the arm layers

---

### Q20. In which context would a "pre-drawn turn rig" be used in cut-out animation?

A. When the character needs to rotate on a motion path
B. When the character turns from facing front to facing sideways, requiring a complete change in body art and layer order
C. When the animator needs to rotate the entire rig's scale without affecting registration points
D. When Audio Stream sync needs to be reestablished after a scene cut

---

### Q21. Consistent registration points across all variants of a body part (neutral, happy, angry, etc.) are essential because:

A. Animate's IK system requires all variants to have the same geometry
B. Symbol swap preserves position and transform; inconsistent registration points cause misalignment after swapping
C. The Library panel sorts symbols alphabetically based on registration point coordinates
D. Tweens between symbol variants require identical geometry to interpolate correctly

---

### Q22. Which of the following would NOT be a good use case for the Symbol Swap technique?

A. Switching between mouth shapes for lip sync
B. Swapping between hand gestures (open palm, fist, pointing)
C. Replacing the background art between scenes
D. Switching between open and closed eye positions for a blink

---

### Q23. In the cut-out animation hierarchy, the "character_root" symbol is significant because:

A. It contains the audio layer for the character's dialogue
B. Moving it repositions the entire assembled character on the Stage
C. It is the only symbol type that can contain nested Movie Clips
D. It defines the frame rate for all nested child symbols

---

### Q24. The phoneme group "CDG" in the Preston Blair chart corresponds to:

A. A mouth fully closed, lips pressed together
B. A slightly open mouth where the tongue position rises toward the roof of the mouth
C. A wide open mouth used for all consonant sounds
D. A round pursed shape used for voiced consonants only

---

## 🎯 Answers + Explanations

```
Q1.  B, Registration point = pivot center; body parts rotate correctly only when it's at the joint.
Q2.  B, Parent motion cascades to all children; child maintains relative position to parent.
Q3.  B, Preston Blair's phoneme set maps mouth shapes to speech sound groups for lip sync.
Q4.  C, MBP = closed or nearly closed mouth; correct for M, B, P bilabial sounds.
Q5.  B, Swap Symbol replaces a frame's symbol instance while preserving transform properties.
Q6.  B, FK = rotate each joint independently from parent down the chain.
Q7.  B, South Park is the most famous 2D cut-out production (originally physical paper, then 3D mimicking that look).
Q8.  B, Wrong registration point at bounding-box center causes rotation around the wrong pivot.
Q9.  B, FV = upper front teeth resting on lower lip, as when pronouncing "f" or "v."
Q10. B, Different registration points cause spatial misalignment after symbol swap.
Q11. B, IK is ideal for planted feet: specify where the foot is, IK solves hip/knee/ankle.
Q12. C, Registration points are set when assembling the hierarchy and placing symbols.
Q13. B, Hazbin Hotel uses complex Flash/Animate-style cut-out rigs with expressive facial animation.
Q14. B, The layer order problem is the Z-order swap needed when a character turns in 3D space.
Q15. A, Asset Warp deforms artwork; old Bone Tool created IK chains between separate symbols.
Q16. B, Five Graphic symbols swapped frame by frame is the standard cut-out expression workflow.
Q17. B, REST = relaxed mouth for silence, exhale, or held breath.
Q18. A, U phoneme = small round, lips pushed forward, as in "you," "do," "blue."
Q19. B, IK moves end effector; the system solves upstream joint angles automatically.
Q20. B, Pre-drawn turn rigs are used when a character turns and layer order must change.
Q21. B, Swap preserves transform; different registration points = mouth in wrong position.
Q22. C, Background swaps are better handled by layer visibility or scene changes, not symbol swap.
Q23. B, The root symbol is the container for the full rig; moving it moves the whole character.
Q24. B, CDG = slightly open, tongue near roof, for sounds like D, hard G, or the C in "cat."
```
