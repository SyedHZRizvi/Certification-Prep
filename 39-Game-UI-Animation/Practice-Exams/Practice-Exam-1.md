---
title: "Practice Exam 1: Game & UI Animation (Modules 1–4)"
---

# 🧪 Practice Exam 1: Game & UI Animation

**Scope:** Modules 1–4 (Game vs. Film, Unity Animation, Unreal Animation Blueprint, Spine 2D)
**Length:** 30 questions · 45 minutes
**When to take:** After completing Modules 1–4

---

### 1. At 60 frames per second, the animation system has approximately how many milliseconds per frame?

A. 8 ms
B. 16 ms
C. 33 ms
D. 100 ms

---

### 2. Which Unity parameter type is automatically consumed (reset) after triggering one transition?

A. Bool
B. Float
C. Trigger
D. Integer

---

### 3. Root Motion in Unity refers to animation that:

A. Plays from the root bone of the hierarchy but does not move the character in world space
B. Drives the character's world-space position and rotation from the animation clip's root bone
C. Forces the camera to follow the root bone of the character
D. Prevents the character from rotating during locomotion

---

### 4. Unity's Humanoid rig type enables which capability that Generic does not?

A. IK on foot bones
B. Retargeting animation clips to different biped models
C. More than 64 bones per skeleton
D. Procedural animation via the Animation Rigging package

---

### 5. In Unity's Animator, "Has Exit Time" enabled on a transition means:

A. The transition will only fire if the player holds the input for the exit time duration
B. The transition fires automatically at the specified normalized clip time fraction, even without a condition
C. The clip must reach 100% completion before any transition can fire
D. The exit time defines the maximum duration for the crossfade blend

---

### 6. Which Unreal Engine graph contains the animation logic (pose nodes, state machines, blend nodes)?

A. Event Graph
B. Construction Script
C. AnimGraph
D. Blueprint Interface

---

### 7. A Blend Space 1D in Unreal Engine is functionally equivalent to which Unity feature?

A. Avatar Mask
B. Animation Event
C. 2D Blend Tree
D. 1D Blend Tree

---

### 8. The Valorant animation team (Riot Games, GDC 2020) designed their Blend Spaces primarily around:

A. Cinematic realism for marketing materials
B. Competitive clarity, silhouette readability for players at distance
C. Minimum GPU cost for low-end PC players
D. Cinematic-quality character performance matching film animation

---

### 9. An Animation Montage in Unreal Engine is BEST used for:

A. Driving the base locomotion state machine
B. One-shot action overrides (attack, interact, ability) that temporarily override the base AnimBP via a Slot
C. Blending between directional locomotion clips
D. Storing the skeleton's bind pose for Control Rig solving

---

### 10. Control Rig in Unreal Engine runs on which thread?

A. Main game thread (same as Blueprint logic)
B. Render thread
C. Animation worker thread (parallel to game thread)
D. Audio thread

---

### 11. Spine 2D's skeletal animation stores animation as:

A. Individual image files for each pose
B. Keyframes on a bone hierarchy, interpolated at runtime
C. Pre-baked vertex data for every frame in the clip
D. A sequence of sprite atlas UV coordinates

---

### 12. In Spine, a "Slot" defines:

A. A physical joint in the skeleton for IK solving
B. The draw order and which attachment is currently visible on a bone
C. A UV region in the texture atlas
D. A physics constraint between two bones

---

### 13. The maximum recommended bone influences per vertex for mobile GPU skinning in Spine is:

A. 1
B. 2
C. 4
D. 8

---

### 14. In the Spine-Unity runtime, Track 0 in the AnimationState is typically used for:

A. One-shot action overlays
B. The base looping animation (idle, walk, run)
C. Skin switching logic
D. Physics constraint simulation

---

### 15. Spine skins allow:

A. Per-vertex color overrides without changing the texture atlas
B. Swapping attachments on a single skeleton for character variant customization
C. Changing the bone hierarchy at runtime for different characters
D. Pre-baking IK solutions into the animation curves

---

### 16. The Supergiant Games Hades animation system used which combination of tools?

A. Unreal Engine + DragonBones
B. Unity + Spine 2D
C. Godot + Aseprite
D. GameMaker + Adobe Animate

---

### 17. In Unity's Animator window, an "AnyState" transition allows:

A. Blending between all active states simultaneously
B. A transition that can fire from any currently active state
C. A state that plays at random based on probability weights
D. A global parameter that overrides all other parameters

---

### 18. An additive layer in Unity's Animator requires the clip to be authored as:

A. A full-pose clip normalized to the character's rest pose
B. The delta from a reference pose, not the full pose
C. A clip with only root bone keyframes
D. A clip captured from motion capture at real-world speed

---

### 19. In Unreal Engine, the "Layered Blend Per Bone" node is equivalent to which Unity feature?

A. Avatar Mask + Layer
B. Animation Event
C. Root Motion
D. Blend Tree 1D

---

### 20. A Spine Free-Form Deformation (FFD) allows:

A. Bones to exceed their normal rotation limits
B. Mesh vertices to be keyframed directly without binding to additional bones
C. Real-time physics simulation of clothing
D. Automatic rigging based on image silhouette

---

### 21. Dead Cells (Motion Twin) achieved crisp, readable animation with:

A. High bone counts (80+) with detailed secondary motion
B. Low bone counts (~15–25) and deliberate mesh squash/stretch, optimized C runtime
C. Pre-baked sprite sheets at 60fps
D. Motion capture data retargeted to the 2D skeleton

---

### 22. In Unity's Animator, which node allows transitions from any currently active state, and is most appropriate for the Death state?

A. Entry node
B. Default State (orange)
C. Exit node
D. AnyState node

---

### 23. In Unreal's AnimGraph, the Event Graph's primary role is:

A. Defining which animation clips play in each state
B. Computing and updating parameter values (Speed, IsGrounded) by reading from the owning pawn each tick
C. Controlling camera cuts and Sequencer track timing
D. Running Control Rig solve passes on the skeleton

---

### 24. Spine's texture atlas must use power-of-two dimensions primarily because:

A. The Spine editor cannot render non-power-of-two previews
B. GPU texture compression formats (ETC2, ASTC, DXT) require power-of-two dimensions
C. Unity's SkeletonAnimation component rejects non-power-of-two atlases
D. Non-power-of-two atlases cannot be premultiplied during export

---

### 25. The Unreal Niagara system's key advantage over the legacy Cascade system is:

A. Cascade uses GPU simulation; Niagara is CPU-only
B. Niagara supports arbitrary attributes and a full node graph; Cascade uses fixed modules
C. Cascade supports Niagara Events; Niagara does not
D. Niagara has lower GPU cost than Cascade for the same particle count

---

### 26. Unity's Avatar Mask defines:

A. Which bones' data is imported from the FBX file
B. The set of bones that a specific Animator layer can affect
C. The retargeting mapping between two Humanoid avatars
D. The bone influence weights for skinned mesh rendering

---

### 27. In Spine, an IK Constraint's "Bend Direction" setting controls:

A. Whether the constraint uses 2D or 3D solving
B. Which way the middle joint (knee, elbow) bends during IK solving
C. The maximum angle the IK solver can rotate a bone per frame
D. Whether the IK constraint blends with FK using the Mix value

---

### 28. For an NPC in a Unity game that needs to navigate via NavMesh and play walking animation, which Root Motion approach is recommended?

A. Root Motion enabled; use OnAnimatorMove() to apply root position to the NavMeshAgent
B. In-Place animation (Bake Into Pose); let the NavMeshAgent control position
C. Root Motion enabled with the NavMeshAgent disabled
D. Generic rig with no animation controller; position driven by NavMesh alone

---

### 29. Hollow Knight (Team Cherry) used Spine IK constraints primarily for:

A. Cloth simulation for the Knight's cloak
B. Procedural facial animation driven by audio
C. Hand and foot contact placement on surfaces
D. Automatic squash/stretch based on velocity

---

### 30. In Unreal's Animation Blueprint, the "Cached Pose" node is used to:

A. Reuse a computed pose in multiple branches of the graph without re-evaluating it
B. Cache the last frame's pose to interpolate between frames
C. Store a pose for use in a Sequencer cinematic
D. Bake a pose to a static frame for performance LOD

---

## 🎯 Answer Key (No Cheating!)

```
1.  B — 1000ms ÷ 60fps ≈ 16.67ms
2.  C — Trigger is consumed (reset) after one transition
3.  B — Root Motion drives world position/rotation from animation clip
4.  B — Humanoid enables retargeting between different biped models
5.  B — Has Exit Time auto-fires transition at the normalized clip time fraction
6.  C — AnimGraph contains animation logic (state machines, pose nodes)
7.  D — Blend Space 1D = Unity 1D Blend Tree
8.  B — Valorant: silhouette readability at competitive viewing distances
9.  B — Montage = one-shot Slot-override for attacks, abilities, interactions
10. C — Control Rig runs on the animation worker thread (parallel, GPU-compatible)
11. B — Spine stores keyframes on a bone hierarchy, interpolated at runtime
12. B — Slot = draw order + active attachment on a bone
13. B — 2 bone influences per vertex = mobile GPU skinning limit
14. B — Track 0 = base looping animation
15. B — Skins enable attachment swapping for character customization
16. B — Hades: Unity + Spine 2D (Supergiant GDC 2020)
17. B — AnyState: transition fires from any currently active state
18. B — Additive clips are deltas from reference pose, not full poses
19. A — Layered Blend Per Bone ≈ Unity Avatar Mask + Layer
20. B — FFD: mesh vertices keyframed directly without additional bones
21. B — Dead Cells: low bone count (~15–25) + optimized C runtime
22. D — AnyState node for high-priority transitions like Death
23. B — Event Graph computes parameters (Speed, IsGrounded) from owning pawn
24. B — Power-of-two required for GPU texture compression
25. B — Niagara: arbitrary attributes + full node graph vs. Cascade fixed modules
26. B — Avatar Mask: defines which bones a layer can affect
27. B — Bend Direction: which way the middle joint bends
28. B — In-Place animation + NavMeshAgent controlling position is the clean approach
29. C — Hollow Knight: IK for hand/foot contact placement
30. A — Cached Pose: reuse computed pose in multiple graph branches
```
