---
title: "Module 3 Quiz: Unreal Animation Blueprint"
---

# 🧪 Module 3 Quiz: Unreal Animation Blueprint

> 24 questions. Answer all before checking the key.

---

### Q1. In Unreal's Animation Blueprint, which graph contains the animation logic (pose nodes, blend nodes, state machines)?

A. Event Graph
B. AnimGraph
C. Construction Script
D. Blueprint Interface

---

### Q2. In the Animation Blueprint architecture, where should you set variables like Speed and IsGrounded that the AnimGraph reads?

A. AnimGraph, directly in the state machine transitions
B. Event Graph, reading values from the owning pawn each tick
C. The Skeletal Mesh Component's tick function
D. The Sequencer track for that character

---

### Q3. What is a Blend Space in Unreal Engine?

A. A texture atlas that stores multiple animation keyframes for GPU sampling
B. An asset that interpolates between multiple animation poses based on one or two parameter axes
C. The physical space within which animations can be authored in the editor
D. A performance profiling region that measures animation CPU cost

---

### Q4. A 2D Blend Space in Unreal with Speed (0–600) and Direction (−180 to 180) axes has a normalization problem. What is the BEST fix?

A. Multiply all Speed values by 0.33 so both axes are approximately the same scale
B. Normalize both axes to the same range (e.g., 0–1 or −1 to 1) before sampling the Blend Space
C. Use two separate 1D Blend Spaces and combine them with a Blend Poses by Bool node
D. Set the Blend Space to "Clamp" mode so values over 1.0 are ignored

---

### Q5. Which Unreal Engine asset is equivalent to Unity's "one-shot animation override" (playing an attack animation that overrides locomotion temporarily)?

A. Blend Space
B. Aim Offset
C. Animation Montage
D. Sequencer Level Sequence

---

### Q6. In Valorant's animation system (per Riot Games GDC 2020), what was the primary criterion that drove animation design decisions?

A. Maximum visual realism to attract players
B. Competitive clarity — silhouette readability at distance
C. Lowest possible bone count for mobile optimization
D. Cinematic quality matching animated films

---

### Q7. What is the purpose of an Aim Offset in Unreal Engine?

A. A Blend Space that additively blends weapon aiming poses (Yaw × Pitch) on top of base locomotion
B. A camera component that aims at the player's cursor position
C. A Control Rig node that rotates the spine toward a look-at target
D. A Sequencer track that animates a camera rig along a spline path

---

### Q8. The Layered Blend Per Bone node in Unreal's AnimGraph is equivalent to which Unity feature?

A. Blend Tree
B. Avatar Mask with a layer
C. Animation Event
D. Root Motion

---

### Q9. In The Coalition's Gears 5 animation system, what drove the decision to implement environmental interaction IK in Control Rig rather than the game thread?

A. Control Rig is easier to author than C++
B. Control Rig runs on the animation thread and is GPU-compatible, enabling 60fps even on Xbox One
C. The game thread was reserved for physics and AI calculations
D. Control Rig automatically generates LOD meshes for distant characters

---

### Q10. An Animation Montage's Slot is used to:

A. Define which bones the montage affects via a bone mask
B. Mark a position in the AnimGraph where Montage (or Sequencer) animations can override the base pose
C. Store multiple animation clips that the montage cycles through randomly
D. Set the layer priority for the montage relative to other montages

---

### Q11. Which C++ call plays a Montage on a Skeletal Mesh at runtime?

A. `AnimInstance->Montage_Jump(AttackMontage)`
B. `SkeletalMesh->PlayAnimation(AttackMontage, false)`
C. `AnimInstance->Montage_Play(AttackMontage, 1.0f)`
D. `GetMesh()->SetAnimation(AttackMontage)`

---

### Q12. Sequencer in Unreal Engine is BEST compared to which Unity feature?

A. Animator Controller
B. Animation Rigging package
C. Timeline
D. Blend Tree

---

### Q13. MetaHuman characters in Unreal Engine 5 have approximately how many facial pose space deformation controls?

A. 32
B. 64
C. 128
D. 265

---

### Q14. In Unreal's AnimGraph, a Cached Pose node is used to:

A. Cache the last frame's pose to reduce CPU cost during fast motion
B. Store a computed pose so it can be referenced in multiple places in the graph without re-evaluating it
C. Pre-bake a pose for a Sequencer cinematic
D. Lock the pose so the Event Graph cannot override it for one tick

---

### Q15. Fortnite's Blend Space interpolation speed (the rate at which the sample position moves) is tuned to be fast (8–12 units/second). Why?

A. To reduce CPU cost by updating the Blend Space less frequently
B. To make directional changes feel immediate so players don't perceive input lag
C. To match the game's 120fps competitive mode update rate
D. To prevent the Blend Space from exceeding its parameter axis bounds

---

### Q16. What is the FABRIK solver used for in Unreal Engine Control Rig?

A. A technique that bakes physics simulations into animation curves
B. A multi-joint Forward And Backward Reaching IK solver for chains like arms and legs
C. A file compression algorithm for Unreal animation assets
D. A GPU compute shader for skeletal mesh skinning

---

### Q17. In Gears 5's animation system, what was the maximum transition blend time tuned to for cover system responsiveness?

A. 0.5 seconds
B. 0.3 seconds
C. 0.15 seconds
D. 0.05 seconds

---

### Q18. An Animation Blueprint's Event Graph reads the owning pawn's velocity to set a Speed variable. This variable is then read by the AnimGraph's Blend Space. Which event should you use to update Speed each frame?

A. Begin Play
B. Event Tick
C. On Animation Initialized
D. On Component Activated

---

### Q19. The Apply Additive node in Unreal's AnimGraph is used to:

A. Replace a base pose entirely with an additive animation
B. Add an additive pose on top of a base pose, blending at a specified alpha
C. Add two animation clips end-to-end for a sequence
D. Apply a Control Rig result additively over a Montage

---

### Q20. Which of the following correctly describes the difference between a Blend Space and a state machine in Unreal's AnimGraph?

A. Blend Spaces are for cutscenes; state machines are for gameplay
B. Blend Spaces interpolate continuously between poses by parameter value; state machines switch between discrete states based on conditions
C. State machines can only have two states; Blend Spaces support unlimited states
D. Blend Spaces run on the main thread; state machines run on the animation worker thread

---

### Q21. An Animation Notify (in Unreal) is equivalent to which Unity feature?

A. Animator Controller state
B. Animation Event
C. Avatar Mask
D. Blend Tree clip

---

### Q22. The Look At node in Unreal's AnimGraph rotates a bone to:

A. Face toward the player's camera
B. Point toward a specified world-space target position
C. Always align with the world Y axis (up direction)
D. Match the orientation of another bone in the skeleton

---

### Q23. You are setting up Unreal animation for an NPC that needs to play a specific grab animation when it interacts with a door. The grab animation should blend in over 0.2 seconds and blend out over 0.15 seconds when the interaction ends. The BEST tool for this is:

A. A new state in the main state machine with transitions set to 0.2s and 0.15s
B. An Animation Montage with configured blend in/out times, triggered by a Montage_Play call
C. A Sequencer Level Sequence with camera cuts at each blend point
D. A Control Rig with a FABRIK solver targeting the door handle

---

### Q24. In Unreal Engine, which system allows a photorealistic digital human face to be animated from video capture (e.g., iPhone footage)?

A. Control Rig + FABRIK
B. Sequencer + Aim Offset
C. MetaHuman Animator (UE5.1+)
D. Blend Space 2D with Yaw and Pitch axes

---

## 🎯 Answer Key (No Cheating!)

```
Q1:  B — AnimGraph contains animation logic (pose nodes, state machines, blend nodes)
Q2:  B — Event Graph sets variables by reading the owning pawn each tick
Q3:  B — Blend Space interpolates between poses based on parameter axes
Q4:  B — Normalize both axes to the same range to prevent interpolation bias
Q5:  C — Animation Montage for one-shot animation overrides
Q6:  B — Valorant's primary criterion was competitive clarity / silhouette readability
Q7:  A — Aim Offset is a Blend Space of additive aiming poses (Yaw × Pitch)
Q8:  B — Layered Blend Per Bone ≈ Unity's Avatar Mask with a layer
Q9:  B — Control Rig runs on animation thread / GPU-compatible → 60fps on Xbox One
Q10: B — Slot marks the AnimGraph point where Montages/Sequencer override the base pose
Q11: C — AnimInstance->Montage_Play(AttackMontage, 1.0f)
Q12: C — Sequencer ≈ Unity Timeline (linear track-based editor)
Q13: D — MetaHuman has ~265 facial pose space deformation controls
Q14: B — Cached Pose stores a computed pose for reuse in multiple graph branches
Q15: B — Fast interpolation makes direction changes feel immediate, no input lag
Q16: B — FABRIK = Forward And Backward Reaching IK; multi-joint IK solver
Q17: C — 0.15 seconds max transition blend time in Gears 5's cover system
Q18: B — Event Tick fires each game tick, correct for per-frame variable updates
Q19: B — Apply Additive adds an additive pose on top of a base pose
Q20: B — Blend Spaces interpolate continuously; state machines switch discretely
Q21: B — Animation Notify ≈ Unity's Animation Event
Q22: B — Look At rotates a bone toward a specified world-space target
Q23: B — Animation Montage with configured blend in/out times
Q24: C — MetaHuman Animator (UE5.1+) processes video capture into facial animation
```
