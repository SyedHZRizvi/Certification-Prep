---
title: "Module 4 Quiz: Spine 2D for Games"
---

# 🧪 Module 4 Quiz: Spine 2D for Games

> 24 questions. Answer all before checking the key.

---

### Q1. What is the primary structural difference between frame-by-frame animation and Spine's skeletal animation?

A. Frame-by-frame uses vector graphics; Spine uses raster images only
B. Frame-by-frame animates by drawing each frame; Spine moves a bone hierarchy that deforms bound images
C. Spine requires a 3D model; frame-by-frame uses 2D images only
D. Frame-by-frame renders faster on GPU; Spine is primarily CPU-based

---

### Q2. In Spine, a "Slot" is best described as:

A. A bone that has no rotation or position influence
B. A draw-order entry on a bone that specifies which attachment is currently visible
C. A subdivision of the texture atlas for mobile optimization
D. A keyframe marker that triggers an event callback

---

### Q3. What is a "Region Attachment" in Spine?

A. A mesh with vertex weights bound to multiple bones
B. A rectangular image attachment from the texture atlas, with no per-vertex deformation
C. A bounding box used for collision and hit detection
D. A path attachment defining a curve that bones follow

---

### Q4. The maximum recommended number of bone influences per vertex for mobile GPU skinning (iOS/Android) in Spine is:

A. 1
B. 2
C. 4
D. 8

---

### Q5. Free-Form Deformation (FFD) in Spine allows:

A. Bones to rotate beyond their natural range of motion
B. Mesh vertices to be moved directly and keyframed without binding them to additional bones
C. Physics-based simulation of cloth and hair
D. Automatic rigging of imported PSD files

---

### Q6. In Spine, an IK constraint's "Mix" value of 0.0 means:

A. The IK target is at full strength and overrides FK completely
B. The bone chain uses pure FK; the IK target has no influence
C. The IK solver is disabled and must be re-enabled manually
D. The constraint applies to only one bone in the chain

---

### Q7. Motion Twin (Dead Cells) kept their enemy bone counts at approximately what range?

A. 50–80 bones
B. 30–50 bones
C. 15–25 bones
D. 5–10 bones

---

### Q8. In Spine-Unity's runtime, which MonoBehaviour component is used for a Spine skeleton that updates and renders each frame?

A. SkeletonGraphic
B. SkeletonMecanim
C. SkeletonAnimation
D. SpineRenderer

---

### Q9. In the Spine-Unity AnimationState API, Track 0 is typically used for what purpose?

A. Storing the skeleton's bind pose for IK solving
B. Playing the base locomotion or idle animation that loops
C. Triggering one-shot events like footsteps
D. Overriding the skin at runtime

---

### Q10. Which Spine feature enables a single skeleton to display completely different character appearances (e.g., different weapon types, outfits) by swapping attachments at runtime?

A. IK constraints
B. Mesh deformation
C. Skins
D. Path constraints

---

### Q11. Spine's texture atlas must have its dimensions set to powers of two (e.g., 512, 1024, 2048) primarily because:

A. The Spine editor cannot export non-power-of-two textures
B. GPU texture compression algorithms (ETC2, ASTC, DXT) require power-of-two dimensions
C. Unity's sprite importer rejects non-power-of-two atlases
D. Non-power-of-two textures cannot be premultiplied in Spine's packer

---

### Q12. What is the purpose of "Premultiply Alpha" in Spine's texture atlas export settings?

A. Doubles the alpha channel bit depth for cleaner transparency
B. Bakes alpha values into the RGB channels to prevent edge fringing/artifacts on transparent regions during blending
C. Reduces the atlas file size by removing the alpha channel entirely
D. Applies a pre-multiplied scaling factor to all attached image sizes

---

### Q13. In Spine, a Bounding Box attachment is primarily used for:

A. Defining the draw order within a slot
B. Hit detection, collision, and trigger areas
C. Constraining IK target positions
D. Defining UV coordinates for mesh deformation

---

### Q14. The "Compress" option in Spine's IK constraint is used to:

A. Reduce the number of bones in the IK chain for performance
B. Allow the bone chain to shorten when the IK target is closer than the chain length
C. Compress the animation keyframe data in the exported JSON file
D. Force the IK constraint to use FK blending instead of full IK

---

### Q15. Team Cherry (Hollow Knight) used Spine's IK constraints primarily for:

A. Procedural facial animation driven by dialogue audio
B. Hand and foot contact placement on surfaces
C. Automated squash-and-stretch based on velocity
D. Cloth simulation for the knight's cloak

---

### Q16. In the Spine-Unity runtime, playing an attack animation on Track 1 while a walk animation plays on Track 0 results in:

A. The walk animation being completely replaced by the attack animation
B. Both animations blending additively, potentially causing distorted poses
C. The attack animation playing on top of or blending with the walk animation based on each track's alpha value and mix settings
D. A runtime error, Spine-Unity supports only one track at a time

---

### Q17. Which Spine attachment type defines a curve along which bones are constrained to move (used for tails, tentacles, snakes)?

A. Region attachment
B. Mesh attachment
C. Point attachment
D. Path attachment

---

### Q18. A Fate/Grand Order servant with 100+ costume variants is implemented in Spine using:

A. 100 separate Spine skeletons, one per costume
B. One skeleton with skin variants, a base skin plus per-costume variant skins swapped at runtime
C. 100 separate texture atlases loaded and unloaded at runtime
D. An animation event that changes the draw order of all slots simultaneously

---

### Q19. What is the recommended maximum texture atlas page size for mobile (iOS/Android) in Spine exports?

A. 256×256
B. 512×512
C. 1024×1024
D. 4096×4096

---

### Q20. A Spine skeleton exported from the editor produces which file types needed by the Spine-Unity runtime?

A. `.spine`, `.png`, `.anim`
B. `.json` (or `.skel`), `.atlas`, `.png`
C. `.fbx`, `.tga`, `.xml`
D. `.sb`, `.atlas2`, `.dds`

---

### Q21. The Spine "Transform Constraint" is used to:

A. Limit a bone's rotation to a maximum angle
B. Link a bone's position, rotation, or scale to another bone with configurable mix values
C. Bake the bone transform into a static region attachment
D. Convert IK target positions into FK keyframes for export

---

### Q22. In Spine's weighted mesh, the "Bind Pose" refers to:

A. The animation pose at frame 0, used as the reference for all animation
B. The arrangement of mesh vertices as they are positioned before any bone transformation is applied
C. The pose stored in the base skin that overrides all variant skins
D. A special keyframe that locks the mesh position to prevent accidental edits

---

### Q23. Motion Twin optimized their Spine runtime by:

A. Using the JavaScript runtime for server-side rendering
B. Using a hand-optimized version of the Spine C runtime with batched draw calls per skeleton
C. Pre-rendering all animations to sprite sheets at export time
D. Reducing the skeleton update rate to 30fps on older hardware

---

### Q24. You are building a mobile game with 50 simultaneous Spine characters on screen. What is the MOST important performance consideration?

A. Reducing the number of animation tracks per skeleton from 3 to 1
B. Using the SkeletonGraphic component instead of SkeletonAnimation for GPU rendering
C. Limiting bone influences per vertex to 2 and batching skeletons that share the same atlas
D. Exporting skeletons as `.skel` binary format instead of `.json` text format

---

## 🎯 Answer Key (No Cheating!)

```
Q1:  B, Spine moves a bone hierarchy; frame-by-frame draws each frame separately
Q2:  B, Slot is a draw-order entry specifying which attachment is visible on a bone
Q3:  B, Region attachment = rectangular image from atlas, no per-vertex deformation
Q4:  B, 2 bone influences per vertex is the mobile GPU skinning recommendation
Q5:  B, FFD moves mesh vertices directly without binding them to additional bones
Q6:  B, Mix = 0.0 means pure FK; IK target has no influence
Q7:  C, Dead Cells used 15–25 bones per enemy (per Motion Twin)
Q8:  C, SkeletonAnimation is the runtime animation component for Spine-Unity
Q9:  B, Track 0 typically holds the base looping animation (walk, idle)
Q10: C, Skins enable attachment swapping for character variants on one skeleton
Q11: B, GPU compression (ETC2, ASTC, DXT) requires power-of-two dimensions
Q12: B, Premultiply alpha bakes alpha into RGB to prevent edge fringing
Q13: B, Bounding Box attachments define hit detection / collision regions
Q14: B, Compress allows the chain to shorten when target is too close
Q15: B, Hollow Knight used IK for hand/foot contact placement on surfaces
Q16: C, Track 1 overlays on Track 0 based on alpha and mix settings
Q17: D, Path attachment defines a curve for bone constraints (tails, tentacles)
Q18: B, Skin variants: one skeleton + per-costume skins swapped at runtime
Q19: C, 1024×1024 is the recommended mobile atlas page size
Q20: B, Spine exports: .json/.skel + .atlas + .png
Q21: B, Transform Constraint links one bone's transform to another with mix values
Q22: B, Bind Pose = mesh vertex positions before any bone transformation
Q23: B, Motion Twin used optimized Spine C runtime with batched draw calls
Q24: C, 2-bone influence limit + atlas batching is the critical mobile optimization
```
