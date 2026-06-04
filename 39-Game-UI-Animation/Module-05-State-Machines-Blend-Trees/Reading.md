---
title: "Module 5: State Machines & Blend Trees — Designing Responsive Animation Systems"
---

# 🔄 Module 5: State Machines & Blend Trees

## The Playtest That Changed the Design

Bungie ran a playtest of Destiny 2 in early 2017 where the specific metric under the microscope was input-to-animation-response time on the Hunter's dodge ability. The build had a Hunter dodge that blended out of any locomotion state in 0.25 seconds. Playtesters — a mix of seasoned FPS players and internal QA — described the dodge as "sticky," "laggy," and "unresponsive." No one could articulate exactly why; they just felt it.

A Bungie animation engineer reduced the dodge's transition exit condition check frequency from 100ms polling to every-frame polling, and cut the blend time from 0.25 seconds to 0.07 seconds. The next playtest: "The dodge feels great." The underlying animations hadn't changed by a single frame.

The entire improvement was in the state machine design — specifically, the transition interrupt conditions and blend time. This is the invisible craft of real-time animation.

---

## 🧠 What Makes a State Machine Feel Responsive

A state machine's responsiveness is not just about frame rate. It is about three properties:

1. **Transition latency**: how quickly a condition is checked (every frame vs. polled every N ms)
2. **Blend duration**: how long the crossfade between the old state and the new state takes
3. **Interrupt conditions**: whether a player input can cancel an in-progress blend to start a new one

The perception of "laggy animation" almost always traces to one of these three — usually either too-long blend duration or conditions that aren't checked every frame.

---

## 🔁 AnyState Transitions: Power and Risk

**AnyState** (Unity) and **Any State** (Unreal) is a special node that creates transitions that can fire from *any* currently active state. It is used for:

- Emergency states that must always be accessible (Death, Knockdown, Stagger)
- High-priority ability states (roll, dodge, dodge roll)
- Debug states (T-pose reset)

### The Risk: Transition Loops

If your AnyState transition points to a state X, and state X does not properly reset the parameter that triggers the AnyState transition, the character will loop: X triggers → enters X → still triggering → enters X again. Always pair AnyState transitions with parameters that reset (Triggers) or conditions that are false once the state is entered.

### Priority Ordering

Multiple AnyState transitions compete when their conditions are simultaneously true. Unity evaluates them in the order they appear in the Animator window's transition list. **Put the highest-priority states (Death, Knockdown) at the top of the AnyState transition list.**

---

## 🏃 Locomotion Blend Trees: Designing for Feel

### The Standard 1D Locomotion Blend Tree

```
Speed = 0.0    → Idle
Speed = 1.5    → Walk
Speed = 5.0    → Run
Speed = 8.0    → Sprint
```

**Key design decisions:**
- The clips should be captured or authored at speeds that match the breakpoints (capture a run at exactly 5.0 m/s if your Speed parameter is in m/s)
- The **Blend Tree's position interpolation speed** (how fast the sample position moves when Speed changes) controls whether direction changes feel instant or sluggish. Lerp Speed at 8–12 units/second is a common starting point; tune by playtesting.
- Idle → Walk transition should have a fast, snappy feel; Walk → Run can be slightly smoother

### The 2D Locomotion Blend Tree

For games with directional strafing (FPS, TPS, action RPG):

```
Axes: SpeedX (strafe, -1 to 1), SpeedY (forward/backward, -1 to 1)

Clips at:
  ( 0.0,  1.0) → Walk Forward
  ( 0.0, -1.0) → Walk Backward
  (-1.0,  0.0) → Walk Strafe Left
  ( 1.0,  0.0) → Walk Strafe Right
  ( 0.7,  0.7) → Walk Forward-Right diagonal
  ... (+ run variants at magnitude > 0.5)
```

**Critical design decision:** Use a **Freeform Directional** blend space in Unreal or a **Freeform 2D** blend tree in Unity for motion capture data. Use **Simple Directional** for procedural or stylized animation where you have precise control over clip timing.

---

## 🎭 Additive vs. Override Layers: When to Use Each

### Override Layers (Unity Avatar Mask)

Use for: upper body weapon aim, attack animations that completely replace the upper body while locomotion plays below.

**Pattern:** Layer 0 (base) = full body locomotion. Layer 1 (override, upper body mask) = weapon aim blend tree. Layer 2 (override, full body mask) = special ability override.

**Weight:** Set the layer weight to 1.0. Use the weight to fade the entire layer in/out (e.g., weight → 0.0 when weapon is holstered, → 1.0 when drawn).

### Additive Layers

Use for: breathing (add subtle in/out on top of all states), leaning (add a lean pose based on horizontal velocity), head bob (add vertical position offset based on step cycle).

**Critical requirement:** Additive layer clips must be authored as **additive** — they represent the *delta* from the bind pose, not the full pose. In Unity, configure this in the Animation import settings (clip must have its Reference Pose set).

| | Override | Additive |
|-|----------|---------|
| Effect | Replaces masked bones | Adds delta to base |
| Authored as | Full pose | Delta from reference |
| Typical use | Aiming, attacking | Breathing, leaning |
| Layer weight | Controls layer on/off | Controls effect strength |

---

## 🚦 Transition Interrupt Conditions

When a blend is in progress (character is partway between two states), can a new input trigger a new transition?

### Unity: Interruption Source

Set on each transition:
- **None**: the current blend must complete before any new transition fires
- **Current State**: other transitions leaving the *source* state can interrupt
- **Next State**: other transitions leaving the *destination* state can interrupt
- **Current State Then Next State**: checks current state first, then next state
- **Next State Then Current State**: checks next state first, then current state

**Design Rule for Responsive Action Games:** Dodge/roll and attack transitions should use **Current State** interruption so a queued input fires as soon as it is valid, rather than waiting for the previous blend to complete.

**Design Rule for Heavy/Strategic Games:** Override/combo transitions should use **None** or **Next State** so that animations have weight and commitment — the player cannot spam the cancel button.

### The Blend Queue

In highly responsive action games (fighting games, spectacle fighters), inputs that arrive during an animation are **queued** — stored for a short window (typically 0.1–0.25 seconds) and applied when the animation reaches an "interrupt-ok" frame. This is separate from state machine interrupt conditions and is usually implemented in game code, not the animation system.

---

## 🦶 The Locomotion Starter Pack: What Every Game Needs

A minimum viable locomotion state machine for a third-person action game:

```
States:
  Grounded:
    Idle / Walk / Run (2D Blend Tree)
    Fall Start (transition to Airborne on !IsGrounded)
  
  Airborne:
    Jump Rise (upward velocity > 0)
    Jump Apex (upward velocity ~= 0, 0.1s window)
    Jump Fall (upward velocity < 0)
    Coyote Time window (0.1–0.15s after leaving edge, can still jump)
  
  Landing:
    Soft Landing (low fall distance)
    Hard Landing (high fall distance — more recovery frames)
    Roll Landing (player holds roll during landing)

Transitions:
  Idle → Walk:       Speed > 0.1
  Walk → Run:        Speed > 4.5
  Walk/Run → Idle:   Speed < 0.1
  [Any] → Fall Start: !IsGrounded && !WasInAir (with 0.1s coyote grace period)
  Jump Rise → Apex:   VerticalVelocity < 0.5
  Apex → Fall:        VerticalVelocity < -0.5
  [Any Airborne] → Landing: IsGrounded && VerticalVelocity < -2.0
  Landing → Idle/Walk: Exit time
```

> 🎯 **Exam Tip:** "Coyote Time" — the grace period after walking off a ledge where the player can still jump — is not just a movement trick. The animation system must account for it: the character should play the edge-peek animation (leaning forward, feet off-ground) for the coyote window before transitioning to the fall state. Without this, the animation snaps from walking to falling too quickly and the coyote jump feels wrong.

---

## 📊 State Machine Design Patterns

| Pattern | Description | Use Case |
|---------|-------------|---------|
| Linear FSM | States in a line; only forward/backward transitions | Cutscene, dialogue |
| Hub FSM | Central idle/locomotion state with transitions to all actions | Most games |
| Layered FSM | Multiple state machines on separate layers (body + upper body) | Complex characters |
| Hierarchical FSM | Sub-state machines within states | Complex locomotion (grounded → all ground states) |
| Pushdown Automaton | Stack-based FSM; last state returns on pop | Menus, conversation trees |

---

## 📐 Summary: Tuning Parameters Reference

| Parameter | Typical Range | Effect of Too Low | Effect of Too High |
|-----------|--------------|------------------|--------------------|
| Transition blend time | 0.05–0.25s | Snappy but may pop | Smooth but laggy |
| Blend Tree lerp speed | 6–12 u/s | Instant (no smoothing) | Mushy, sluggish |
| Hit stop duration | 2–12 frames | Lacks impact feel | Interrupts game flow |
| Coyote time window | 0.1–0.15s | Misses ledge jumps | Feels floaty |
| AnyState transition priority | Top = highest | — | — |

---

## ⚠️ Common Misconceptions

> **Misconception 1: "Longer blend times = smoother animation."**
> Reality: Long blend times feel smooth but laggy. The sweet spot for a responsive action game is 0.05–0.12 seconds for high-priority transitions (dodge, attack) and 0.15–0.25 seconds for lower-priority ones (idle to walk).

> **Misconception 2: "AnyState transitions are always dangerous."**
> Reality: AnyState is essential for Death, Knockdown, and Stagger states. The danger is transition loops — prevent them with Trigger parameters (which reset) or guards in your condition logic.

> **Misconception 3: "Additive layers work like override layers but milder."**
> Reality: Additive layers require clips authored as deltas (reference pose subtracted). Using a full-pose clip in an additive layer produces garbled, broken poses — not a mild blend.

---

## 🔗 Next Steps

**Next Module:** [Module 6: UI Animation with Figma, GSAP & Framer Motion →](../Module-06-UI-Animation-Figma-GSAP/Reading.md)

We shift from game engines to the web: Figma Smart Animate, GSAP's ScrollTrigger and Timeline, the Flip plugin, and Framer Motion for React.

---

## 📚 Further Reading

- 🔗 [Unity Manual — State Machine Transitions](https://docs.unity3d.com/Manual/class-Transition.html)
- 🔗 [Unity Manual — Blend Trees](https://docs.unity3d.com/Manual/class-BlendTree.html)
- 📄 "Responsive Animation: The Physics of Player Expectations" — Game Developer Magazine (search GDC Vault)
- 📄 Steve Swink, *Game Feel* Chapter 3 — "Making It Feel Real" (input buffering, response latency)
