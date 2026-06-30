---
title: "Module 1 Quiz: Game vs. Film Animation"
---

# 🧪 Module 1 Quiz: Game vs. Film Animation

> 24 questions. Answer all before checking the key at the bottom.

---

### Q1. At 60 frames per second, how many milliseconds does each frame have to complete?

A. 8.33ms
B. 16.67ms
C. 33.33ms
D. 100ms

---

### Q2. What is the primary architectural difference between film animation and game animation?

A. Film animation uses more keyframes per second than game animation
B. Game animation uses a state machine; film animation uses a linear timeline
C. Film animation is rendered in real-time; game animation is pre-rendered
D. Game animation uses higher polygon counts to achieve better quality

---

### Q3. In Unity, which parameter type is consumed on use and automatically resets after triggering a transition?

A. Float
B. Integer
C. Bool
D. Trigger

---

### Q4. What is "hit stop" in game animation?

A. The animation that plays when a character is killed
B. A brief pause of both attacker and defender animations on a significant impact, used to communicate weight
C. The frame where a hitbox first overlaps with a target
D. The technique of stopping animation updates when a character leaves the camera frustum

---

### Q5. Which studio and game is most associated with the "momentum preservation" animation philosophy where player input can interrupt animations mid-frame?

A. Supergiant Games / Hades
B. id Software / DOOM Eternal
C. Naughty Dog / The Last of Us Part II
D. CD Projekt Red / Cyberpunk 2077

---

### Q6. Normal map baking in games is primarily used to:

A. Reduce animation keyframe count
B. Simulate surface detail on a low-polygon mesh without additional geometry
C. Compress audio files associated with animation events
D. Pre-calculate physics simulations for cloth and hair

---

### Q7. Which of the following is NOT one of Steve Swink's three components of game feel?

A. Input
B. Response
C. Graphics fidelity
D. Context

---

### Q8. In Unity's Animator, which parameter type should you use for a persistent state like "IsGrounded"?

A. Trigger
B. Float
C. Bool
D. Integer

---

### Q9. What does "Root Motion" refer to in game animation?

A. The animation applied to the root bone that drives the character's world-space position and rotation
B. The first animation that plays when a character spawns
C. The animation for a character's feet touching the ground
D. A physics-based locomotion system that replaces keyframe animation

---

### Q10. Supergiant Games' Hades used which runtime engine and 2D animation tool?

A. Unreal Engine + DragonBones
B. Unity + Spine 2D
C. Godot + Aseprite
D. GameMaker Studio + Flash

---

### Q11. What is the typical bone count limit for GPU skinning on iOS platforms?

A. 32 bones
B. 64 bones
C. 128 bones
D. 256 bones

---

### Q12. How long was hit stop tuned to in Hades, according to Supergiant's GDC 2020 talk?

A. 1–2 frames
B. 4–8 frames
C. 12–16 frames
D. 24–30 frames

---

### Q13. In a game animation state machine, what does "AnyState" allow?

A. An animation that blends all other animations simultaneously
B. A transition that can trigger from any current state, regardless of which state is active
C. A state that plays at random based on probability weights
D. A global pose override layer applied on top of all states

---

### Q14. Which of the following is a Level of Detail (LOD) technique specifically applied to animation (not geometry)?

A. Normal map baking
B. Physically-based rendering
C. Disabling finger and face bones when the character is far from the camera
D. Baking ambient occlusion into vertex colors

---

### Q15. The term "game feel" was popularized primarily by which resource?

A. "The Animator's Survival Kit" by Richard Williams
B. "Game Feel" by Steve Swink (2008)
C. The GDC Animation Summit 2015 keynote
D. Unity's official documentation on the Animator Controller

---

### Q16. In the context of real-time animation, what does "jitter" mean?

A. A deliberate vibration effect applied to cameras during explosions
B. Unintended small oscillations in a character's position or pose, typically caused by floating-point precision errors or conflicting animation layers
C. The noise pattern added to particle systems for organic movement
D. A compression artifact in baked normal maps at low texture resolution

---

### Q17. Which technique do games like Ubisoft's For Honor and the EA SPORTS FIFA titles use instead of traditional clip-based state machines?

A. Procedural animation via inverse kinematics only
B. Motion matching, selecting the best pose from a database based on current velocity
C. Ragdoll physics for all movement states
D. Pre-baked sprite sheet animation at 24fps

---

### Q18. An animation event in Unity is:

A. A C# event that fires when the Animator Controller changes state
B. A callback triggered at a specific frame within an animation clip, used for footsteps, hitbox activation, or sound cues
C. A network message broadcast when a multiplayer animation synchronizes
D. A Unity Analytics event logged when a player completes an animation sequence

---

### Q19. What is the primary consequence of placing animation update logic in a slow callback attached to an animation event?

A. The animation clip will skip the frame where the event fires
B. The entire frame stalls, potentially exceeding the 16ms budget and causing a dropped frame
C. The animator controller transitions to an error state
D. The character model becomes invisible for one frame

---

### Q20. In Hades vs. DOOM Eternal, which game uses a philosophy of readability and exaggeration appropriate for a top-down camera?

A. DOOM Eternal
B. Both use the same philosophy
C. Hades
D. Neither, both use realistic proportions

---

### Q21. What does "interruptibility" mean in the context of game animation state machines?

A. The ability for the server to pause client-side animations in multiplayer games
B. The design property that allows a transition to be cancelled mid-blend by a higher-priority input
C. A Unity feature that pauses animation on tab-out or window minimize
D. The maximum number of active blend weights in a Blend Tree

---

### Q22. Which of the following performance scenarios would most likely cause an animation LOD system to reduce bone count?

A. The character is in the player's field of view at close range
B. The character is visible but far from the camera
C. The character is in a cinematic cutscene
D. The character is executing a combo attack with animation events

---

### Q23. A game designer reports that the player's dodge roll "feels unresponsive." As the animator, what is the FIRST parameter you would examine in the state machine?

A. The idle animation's loop point
B. The dodge roll clip's keyframe spacing
C. The transition exit time and blend duration from other states into the dodge roll
D. The character's polygon count

---

### Q24. Film animation at 24fps and game animation at 60fps use the same principles of timing and spacing. What is the most important practical difference for a game animator working on a character's walk cycle?

A. The walk cycle must loop perfectly without visual pops when transitioning from or to any other state in the FSM
B. The walk cycle must use fewer keyframes than a film walk cycle
C. The walk cycle must be hand-drawn rather than computer-generated
D. The walk cycle must match the same timing as real-world human walking (1.5 steps/second)

---

## 🎯 Answer Key (No Cheating!)

```
Q1:  B, 1000ms ÷ 60fps = 16.67ms per frame
Q2:  B, State machine (runtime-driven) vs linear timeline (film)
Q3:  D, Trigger parameters are consumed on use and auto-reset
Q4:  B, Deliberate pause of animations on impact to communicate weight
Q5:  B, id Software's DOOM Eternal; momentum preservation is their philosophy
Q6:  B, Normal maps simulate surface detail on low-poly meshes
Q7:  C, Swink's three: Input, Response, Context. Graphics fidelity is not one.
Q8:  C, Bool for persistent states; trigger for one-shot actions
Q9:  A, Root Motion drives world-space position/rotation from the animation clip
Q10: B, Unity + Spine 2D (documented in Supergiant's GDC 2020 talk)
Q11: B, iOS GPU skinning limit is typically 64 bones
Q12: B, 4–8 frames of hit stop in Hades (Supergiant GDC 2020)
Q13: B, AnyState transition fires from any active state
Q14: C, Disabling distant-character bones is an animation-specific LOD technique
Q15: B, "Game Feel" by Steve Swink (2008) is the primary reference
Q16: B, Jitter is unintended oscillation in position/pose
Q17: B, Motion matching (database pose selection by velocity)
Q18: B, Animation events fire at specific clip frames for game callbacks
Q19: B, Slow callbacks stall the frame, risking budget overrun
Q20: C, Hades uses readability/exaggeration for its top-down camera
Q21: B, Interruptibility: transitions can be cancelled by higher-priority inputs
Q22: B, LOD reduces bone count for distant characters
Q23: C, Transition exit time and blend duration are the first suspects
Q24: A, The walk cycle must loop seamlessly from any FSM state transition
```
