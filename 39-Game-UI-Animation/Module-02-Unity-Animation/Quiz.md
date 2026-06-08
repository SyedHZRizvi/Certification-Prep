---
title: "Module 2 Quiz: Unity Animation System"
---

# 🧪 Module 2 Quiz: Unity Animation System

> 24 questions. Answer all before checking the key.

---

### Q1. What is the primary Unity asset that contains the animation state machine, parameters, layers, and transitions?

A. Animation Clip
B. Animator Component
C. Animator Controller
D. Avatar Mask

---

### Q2. In Unity, which animation type should you use for a biped character to enable clip retargeting between different models?

A. Generic
B. Humanoid
C. Legacy
D. Sprite

---

### Q3. A 1D Blend Tree uses which type of parameter to interpolate between clips?

A. Bool
B. Trigger
C. Float
D. Integer

---

### Q4. What is the correct use of "Has Exit Time" in a Unity transition?

A. Forces the transition to wait until the player manually triggers it
B. Automatically fires the transition at the specified normalized exit time fraction, even without conditions
C. Prevents the transition from firing until the clip has played at least once
D. Sets the minimum duration for the transition crossfade

---

### Q5. In the FBX import settings, setting Root Transform Position (XZ) to "Bake Into Pose" results in:

A. Root Motion that drives the character's world position each frame
B. In-Place animation where the root stays at the origin
C. The animation not importing root bone data
D. Automatic IK baking for foot placement

---

### Q6. Which Animator component setting controls how animation updates behave when a character is off-screen?

A. Update Mode
B. Culling Mode
C. Apply Root Motion
D. Speed multiplier

---

### Q7. An Avatar Mask is used to:

A. Hide the character model during loading
B. Define which bones a specific Animator layer affects
C. Lock the avatar to a specific FBX import
D. Blend between two different animation controllers

---

### Q8. Which layer blend mode adds the *delta* of a pose on top of the base layer, rather than replacing it?

A. Override
B. Exclusive
C. Additive
D. Replace

---

### Q9. You want the upper body of your character to play an aiming animation while the lower body plays locomotion. The BEST approach is:

A. Create two separate Animator Controllers and sync them in C#
B. Create a second Animator layer with an Avatar Mask covering only the upper body bones, set to Override
C. Use two separate Animator components on two separate GameObjects
D. Use a 2D Blend Tree with the upper body and lower body as separate parameters

---

### Q10. Animation Events in Unity fire:

A. Once per frame, in the Update() loop
B. At a specific frame within an animation clip, calling a method on a MonoBehaviour on the same GameObject
C. Only when the Animator Controller changes state
D. At regular time intervals defined in the Animator settings

---

### Q11. Which C# method must be overridden to apply Root Motion manually when using a CharacterController with Root Motion enabled?

A. Update()
B. LateUpdate()
C. OnAnimatorMove()
D. FixedUpdate()

---

### Q12. In the Animator C# API, what does `anim.SetTrigger("Jump")` do differently from `anim.SetBool("IsJumping", true)`?

A. SetTrigger fires the transition immediately with no blend; SetBool waits for the next frame
B. SetTrigger is consumed (resets to false) after one transition; SetBool persists until explicitly set to false
C. SetTrigger only works with one-way transitions; SetBool works with bidirectional transitions
D. SetTrigger fires at the end of the current clip; SetBool fires at the start of the next frame

---

### Q13. When using foot IK in Unity, in which callback method must you set IK goals?

A. Update()
B. FixedUpdate()
C. OnAnimatorIK()
D. LateUpdate()

---

### Q14. Mixamo is primarily used for:

A. Building terrain in Unity Editor
B. Providing free rigged characters and animation clips that import as Humanoid rigs
C. Creating particle systems for Unity VFX
D. Writing animation scripts in C# automatically

---

### Q15. A 2D Freeform Directional Blend Tree is most appropriate for:

A. Blending between two speeds (walk and run)
B. 8-directional or radial locomotion blending using motion capture data
C. Facial expression blending with blend shapes
D. Cutscene animation with multiple camera angles

---

### Q16. What happens if you call `anim.SetTrigger("Jump")` but no transition with the Jump condition is currently reachable from the active state?

A. Unity throws an exception and the Animator stops
B. The trigger remains set and will fire on the next valid transition that has a Jump condition
C. Nothing happens; the trigger is discarded
D. The Animator automatically creates a new AnyState transition to the Jump state

---

### Q17. In the context of Unity's Animator, what does "normalizedTime" in AnimatorStateInfo represent?

A. The current playback speed normalized to 60fps
B. The current position within the clip as a fraction from 0.0 (start) to 1.0 (end); values > 1.0 indicate looping
C. The blend weight of the current state versus the previous state during a transition
D. The time in seconds since the Animator Controller was instantiated

---

### Q18. Which import tab in the Unity FBX importer must you configure to set up a Humanoid avatar?

A. Model
B. Rig
C. Animation
D. Materials

---

### Q19. You import a walk animation from Mixamo. The character slides across the floor during playback. The most likely cause is:

A. The animation clip has too many keyframes
B. Root Motion is enabled in the Animator but the clip has Root Transform Position (XZ) set to "Bake Into Pose", or vice versa
C. The Humanoid avatar definition does not match the character
D. The frame rate of the clip does not match the game's target frame rate

---

### Q20. An Animator layer set to "Override" with an Avatar Mask covering only the spine and arm bones will:

A. Play the layer's animation for the entire body and ignore lower layers
B. Play the layer's animation only for the masked bones, while lower layers drive the rest of the body
C. Blend 50/50 between the layer's animation and the base layer for all bones
D. Replace the base layer's animation only during transitions

---

### Q21. Which of the following Animator Controller elements allows a transition to fire from ANY currently active state?

A. Default State
B. Entry Node
C. AnyState
D. Sub-State Machine

---

### Q22. For a non-biped character (such as a spider with 8 legs), which Unity animation type is recommended?

A. Humanoid, with custom bone mapping
B. Generic
C. Sprite (2D)
D. Legacy, for maximum compatibility

---

### Q23. Animation clips imported from FBX files can be configured to loop in Unity by:

A. Setting the animation to "Ping Pong" mode in the Animator Controller
B. Checking "Loop Time" in the Animation import settings for that clip
C. Setting the transition exit time to 0.0
D. Adding a Loop animation event at the last frame of the clip

---

### Q24. What is the purpose of the "Interruption Source" setting on a Unity Animator transition?

A. It specifies which audio source plays during the transition crossfade
B. It determines whether a competing transition can interrupt the current blend (from the current state, next state, or both)
C. It sets the priority order for multiple transitions leaving the same source state
D. It controls whether animation events fire during the transition crossfade

---

## 🎯 Answer Key (No Cheating!)

```
Q1:  C, Animator Controller is the state machine asset
Q2:  B, Humanoid enables retargeting between different biped models
Q3:  C, Float parameters drive 1D Blend Tree interpolation
Q4:  B, Has Exit Time auto-fires the transition at the exit time fraction
Q5:  B, Bake Into Pose converts Root Motion to In-Place animation
Q6:  B, Culling Mode controls off-screen animation update behavior
Q7:  B, Avatar Masks define which bones a layer affects
Q8:  C, Additive blend mode adds pose delta on top of lower layers
Q9:  B, Second layer with upper-body Avatar Mask, Override mode
Q10: B, Animation Events fire at specific clip frames, calling MonoBehaviour methods
Q11: C, OnAnimatorMove() is the override for manual Root Motion application
Q12: B, Triggers are consumed after one transition; bools persist
Q13: C, IK goals must be set inside OnAnimatorIK()
Q14: B, Mixamo provides free rigged characters and Humanoid animation clips
Q15: B, 2D Freeform Directional for 8-directional/radial locomotion
Q16: B, Unconsumed triggers wait for the next valid transition that can use them
Q17: B, normalizedTime is 0.0–1.0 within the clip; >1.0 indicates loop
Q18: B, Rig tab in FBX importer configures Humanoid/Generic/Legacy
Q19: B, Root Motion/bake-into-pose mismatch causes sliding
Q20: B, Override layer plays its animation for masked bones only
Q21: C, AnyState allows transitions from any currently active state
Q22: B, Generic for non-biped/custom rigs
Q23: B, Loop Time checkbox in Animation import settings
Q24: B, Interruption Source controls whether competing transitions can interrupt the current blend
```
