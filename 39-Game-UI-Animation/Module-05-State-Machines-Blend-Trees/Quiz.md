---
title: "Module 5 Quiz: State Machines & Blend Trees"
---

# 🧪 Module 5 Quiz: State Machines & Blend Trees

> 24 questions. Answer all before checking the key.

---

### Q1. What are the three primary factors that determine whether an animation state machine feels "responsive"?

A. Frame rate, polygon count, and texture resolution
B. Transition latency, blend duration, and interrupt conditions
C. Clip duration, keyframe spacing, and bone count
D. Animation type (Humanoid vs Generic), layer count, and parameter count

---

### Q2. In Unity's Animator, when the Interruption Source on a transition is set to "Current State," which transitions can interrupt an in-progress blend?

A. Only AnyState transitions
B. Transitions leaving the destination (next) state
C. Transitions leaving the source (current) state
D. No transitions, the blend must complete

---

### Q3. An AnyState transition that targets state X will cause a transition loop if:

A. State X has Has Exit Time enabled
B. The parameter or condition that triggered the transition remains true while state X is active
C. State X is also the default state in the Animator
D. The blend time for the AnyState transition is set to 0

---

### Q4. Bungie's improvement to Destiny 2's Hunter dodge state machine was primarily:

A. Adding more keyframes to the dodge animation clip
B. Reducing the blend time from 0.25s to 0.07s and checking conditions every frame
C. Switching the dodge from a Trigger to a Bool parameter
D. Moving the dodge to an AnyState transition from a specific-state transition

---

### Q5. In a 2D Blend Tree for directional locomotion, using "Freeform Directional" (vs. "Simple Directional") is recommended primarily for:

A. Games that use only 4-directional movement (no diagonals)
B. Motion capture data where clips are captured at precise directional intervals
C. Mobile games where performance is the primary concern
D. Characters with the Generic rig type

---

### Q6. An additive animation layer clip must be authored as:

A. A full-body pose normalized to the bind pose
B. The delta from a reference pose (not the full pose)
C. A root-relative animation with baked-in position
D. A clip looped exactly once per second

---

### Q7. "Coyote Time" in platformer animation refers to:

A. An animation that plays when the character falls into water
B. The grace window after walking off a ledge during which the player can still jump and the animation should play an edge-peek state rather than immediate fall
C. The blend time between the run and idle animations when the character decelerates
D. An AnyState transition triggered when the character exceeds maximum speed

---

### Q8. For a high-priority action like a dodge roll, the transition interrupt setting should generally be set to:

A. None (let the current blend finish)
B. Next State (allow the destination state to interrupt)
C. Current State (allow the source state's transitions to interrupt and fire the dodge immediately)
D. Any State (highest priority regardless of context)

---

### Q9. A Blend Tree's "blend position lerp speed" (the rate at which the sample position moves) tuned too LOW would result in:

A. Characters with no locomotion smoothing, instant snapping between clips
B. Mushy, sluggish locomotion where speed changes feel delayed
C. Foot sliding because the animation and movement don't match
D. The Blend Tree crashing due to division by zero

---

### Q10. In Unity, how do you prevent an AnyState → Death transition from re-triggering while the death animation is already playing?

A. Set the transition to "Has Exit Time" with exit time = 0.0
B. Use a Trigger parameter (which is consumed on transition, so it can't re-trigger) or add a condition that checks the current state is not already Death
C. Disable the AnyState transition after it fires via C# code
D. Set the Death state as the Default State so AnyState cannot point to it

---

### Q11. The "Locomotion Starter Pack" minimum viable state machine should include which airborne states?

A. Only Jump and Fall
B. Jump Rise, Jump Apex, Jump Fall (and optionally Coyote Time and Landing variants)
C. Airborne (one state) and Grounded (one state)
D. Jump Start, Jump Loop, and Roll Landing only

---

### Q12. What is the typical range for a transition blend time that balances responsiveness and visual smoothness in an action game?

A. 0.5–1.0 seconds
B. 0.25–0.5 seconds
C. 0.05–0.25 seconds
D. Less than 0.01 seconds

---

### Q13. In Unity's Animator, "Sub-State Machines" are used to:

A. Create child Animator Controllers within the main one
B. Group related states together inside a nested state machine for organizational clarity
C. Run multiple state machines in parallel with different update rates
D. Bind specific Animator parameters to only one sub-machine

---

### Q14. Override layer weight = 0.0 in Unity means:

A. The layer's animation fully replaces the base layer
B. The layer has no effect; the base layer's pose is used entirely
C. The layer blends 50/50 with the base layer
D. The layer uses additive blending at zero strength

---

### Q15. A "hard landing" state (for high-fall recovery) should transition to Idle using:

A. A condition-based transition with IsGrounded = true
B. A time-based transition (Has Exit Time) so the full recovery animation plays
C. An AnyState transition so the player can immediately input movement
D. An additive layer that fades in the recovery pose over 0.5 seconds

---

### Q16. In Unreal Engine's AnimGraph, the equivalent of Unity's "Interruption Source" setting is controlled via:

A. State machine Transition Priority
B. Transition's "Blend Logic" setting (standard vs. inertialization)
C. Transition's "Priority Order" in the transition list
D. Global AnimBP settings in the Class Defaults

---

### Q17. A game animator reports that the character's walk-to-run transition feels "mushy." What is the MOST likely single fix?

A. Increase the walk animation's keyframe count
B. Reduce the transition's blend duration from 0.3s to 0.1s
C. Change the run animation's Root Motion setting
D. Add an AnyState transition from Idle to Run

---

### Q18. Which state machine design pattern is BEST suited for a game with complex combat (e.g., multiple weapons, combos, stances)?

A. Linear FSM
B. Single Hub FSM with all states at the same level
C. Hierarchical FSM with sub-state machines per combat context
D. Pushdown Automaton

---

### Q19. In a 1D Blend Tree, animation clips should ideally be captured or authored:

A. At any speed, the Blend Tree normalizes them automatically
B. At the exact speed matching each breakpoint parameter value
C. At the same speed, with scale applied in the Blend Tree settings
D. At 1m/s only, with the Blend Tree multiplier controlling playback speed

---

### Q20. What does "inertialization" blending in Unreal Engine improve over traditional crossfade blending?

A. It reduces blend time to zero
B. It preserves the velocity of the animation at the blend start, producing smoother transitions without motion pops
C. It allows blending of animations from different skeleton types
D. It compresses animation data for faster streaming

---

### Q21. An override layer with an Avatar Mask covering only the upper body will:

A. Play the layer animation for the full body but only on the upper body bones in the Avatar
B. Play the layer animation for the upper body bones while the base layer plays for the rest
C. Disable the base layer entirely when the override layer's weight > 0
D. Apply the override layer additively to the upper body only

---

### Q22. Input buffering in fighting games refers to:

A. Pre-loading animation clips into GPU memory for instant playback
B. Storing player inputs received during an animation's locked window and applying them when the animation reaches an interrupt-valid frame
C. Caching the last N frames of input for rollback netcode in online matches
D. Mapping multiple input devices to the same animation trigger simultaneously

---

### Q23. The "Blend Tree lerp speed" parameter controls:

A. How fast the animation clip plays back
B. How quickly the Blend Tree's sample position moves toward the target position (smoothing the parameter input)
C. The maximum number of clips that can blend simultaneously
D. The crossfade duration when transitioning from a Blend Tree state to any other state

---

### Q24. A character has three layers: Layer 0 (full body locomotion), Layer 1 (upper body override, weight = 1.0), Layer 2 (additive breathing, weight = 0.3). What is the final pose computation order?

A. Layer 2 → Layer 1 → Layer 0
B. Layer 0 → Layer 1 (override upper body) → Layer 2 (add breathing delta to result)
C. All layers computed simultaneously, then averaged by weight
D. Layer 0 and Layer 1 averaged, then Layer 2 added

---

## 🎯 Answer Key (No Cheating!)

```
Q1:  B, Transition latency, blend duration, interrupt conditions
Q2:  C, "Current State" allows transitions leaving the source state to interrupt
Q3:  B, Loop if the trigger condition remains true while in state X
Q4:  B, Reduced blend time 0.25→0.07s + every-frame condition checking
Q5:  B, Freeform Directional for motion capture directional data
Q6:  B, Additive clips are delta from reference pose, not full poses
Q7:  B, Coyote time: grace window after leaving ledge for jump + edge-peek anim
Q8:  C, Current State interrupt lets dodge fire immediately from any source state
Q9:  B, Too-low lerp speed = mushy delayed locomotion response
Q10: B, Trigger parameter is consumed on transition, preventing re-trigger
Q11: B, Jump Rise, Apex, Fall + optional Coyote Time + Landing variants
Q12: C, 0.05–0.25s is the responsive action game blend time range
Q13: B, Sub-State Machines group related states for organizational clarity
Q14: B, Layer weight 0.0 = layer has no effect; base layer controls fully
Q15: B, Has Exit Time so recovery animation plays to completion
Q16: A, Transition Priority controls interrupt order in Unreal state machines
Q17: B, Reduce blend duration (0.3s → 0.1s) to fix mushy transition
Q18: C, Hierarchical FSM with sub-machines for complex combat systems
Q19: B, Clips should match the parameter value at each blend breakpoint
Q20: B, Inertialization preserves animation velocity at blend start → no pops
Q21: B, Override + Avatar Mask: layer plays for masked bones, base plays the rest
Q22: B, Input buffering stores inputs during locked animation for deferred execution
Q23: B, Lerp speed controls how quickly the sample position tracks the parameter
Q24: B, Layer 0 base → Layer 1 overrides upper body → Layer 2 adds breathing delta
```
