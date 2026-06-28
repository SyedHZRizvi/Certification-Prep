---
title: "Module 5: State Machines & Blend Trees, Designing Responsive Animation Systems"
---

# 🔄 Module 5: State Machines & Blend Trees

## The Playtest That Changed the Design

Bungie ran a playtest of Destiny 2 in early 2017 where the specific metric under the microscope was input-to-animation-response time on the Hunter's dodge ability. The build had a Hunter dodge that blended out of any locomotion state in 0.25 seconds. Playtesters a mix of seasoned FPS players and internal QA described the dodge as "sticky," "laggy," and "unresponsive." No one could articulate exactly why; they just felt it.

A Bungie animation engineer reduced the dodge's transition exit condition check frequency from 100ms polling to every-frame polling, and cut the blend time from 0.25 seconds to 0.07 seconds. The next playtest: "The dodge feels great." The underlying animations hadn't changed by a single frame.

The entire improvement was in the state machine design, specifically, the transition interrupt conditions and blend time. This is the invisible craft of real-time animation.

---

## 🧠 What Makes a State Machine Feel Responsive

A state machine's responsiveness is not just about frame rate. It is about three properties:

1. **Transition latency**: how quickly a condition is checked (every frame vs. polled every N ms)
2. **Blend duration**: how long the crossfade between the old state and the new state takes
3. **Interrupt conditions**: whether a player input can cancel an in-progress blend to start a new one

The perception of "laggy animation" almost always traces to one of these three, usually either too-long blend duration or conditions that aren't checked every frame.

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

**Critical requirement:** Additive layer clips must be authored as **additive**, they represent the *delta* from the bind pose, not the full pose. In Unity, configure this in the Animation import settings (clip must have its Reference Pose set).

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

**Design Rule for Heavy/Strategic Games:** Override/combo transitions should use **None** or **Next State** so that animations have weight and commitment, the player cannot spam the cancel button.

### The Blend Queue

In highly responsive action games (fighting games, spectacle fighters), inputs that arrive during an animation are **queued**, stored for a short window (typically 0.1–0.25 seconds) and applied when the animation reaches an "interrupt-ok" frame. This is separate from state machine interrupt conditions and is usually implemented in game code, not the animation system.

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
    Hard Landing (high fall distance, more recovery frames)
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

> 🎯 **Exam Tip:** "Coyote Time" the grace period after walking off a ledge where the player can still jump is not just a movement trick. The animation system must account for it: the character should play the edge-peek animation (leaning forward, feet off-ground) for the coyote window before transitioning to the fall state. Without this, the animation snaps from walking to falling too quickly and the coyote jump feels wrong.

---

## 🎮 Case Study: The Last of Us Part II, Contextual Animation Layer Design

Naughty Dog's TLOU II uses what the studio calls a "contextual layer system", animation layers that activate based on environmental context rather than player input. The system has four primary layers:

1. **Base layer**: standard locomotion (walk, run, crouch)
2. **Aim layer**: weapon aiming overlay, active whenever a weapon is drawn
3. **Context layer**: environment-aware procedural poses (reaching for a wall when near a wall, ducking under an obstacle, adapting hand position to doorframes)
4. **Emotion layer**: additive facial and body expression layer driven by the story state machine

The context layer is where Naughty Dog's animation system diverges most from standard state machine design. Rather than the programmer specifying which animation plays in which context, the context layer uses **environment traces** physics raycasts from the character's hands, head, and body to detect nearby geometry and blend to the appropriate contextual pose.

When Ellie approaches a wall, the context layer detects the wall via traces and begins blending (at 8 units/second) toward the "near-wall" pose, which adjusts hand placement and shoulder rotation. This blend happens continuously based on wall proximity, not on a discrete state transition. The result is that Ellie always looks physically aware of her environment without the animator having to author "near this specific wall" states.

**The design lesson**: not all responsiveness requires discrete state machine states. Continuous parameter-driven blending can handle environmental context more elegantly than discrete states, at the cost of requiring more complex trace/detection code.

---

## 📊 Transition Responsiveness vs. Animation Weight: Design Spectrum

| Game Type | Blend Time | Interrupt Policy | Feel Target |
|---|---|---|---|
| Competitive FPS (Valorant) | 0.0–0.05s | Snap for critical states | Zero perceived lag |
| Action roguelike (Hades) | 0.05–0.10s | Current State for all actions | Snappy, arcadey |
| Action-adventure (DOOM Eternal) | 0.05–0.12s | Current State, momentum preserved | Weighty but responsive |
| RPG / open world (Skyrim) | 0.15–0.25s | Next State for most | Deliberate, less twitchy |
| Survival horror (TLOU) | 0.10–0.20s | None for many actions | Weight communicates danger |
| Fighting game (Street Fighter) | Per-frame input buffer | Input buffered, committed | Frame-perfect |
| Strategy / casual (Stardew Valley) | 0.1–0.3s | N/A, simple states | Not a feel-critical constraint |

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

## 🎮 Case Study: Hades, Enemy Interrupt Animation Budget

Every enemy in Hades has a **designed interrupt budget**, the number of frames between when the enemy "commits" to an attack animation and when that attack can hit the player. This budget is a game feel parameter, not just an animation parameter.

Supergiant's animation lead documented the design process in their GDC 2020 talk: the team playtested each enemy type with varying interrupt budgets and measured player-reported "fairness." Too short: players felt cheated the attack was unreadable. Too long: players felt bored the game was too easy.

The final budgets for selected Hades enemies:
| Enemy | Attack | Interrupt Budget (frames) | Notes |
|---|---|---|---|
| Wretched Butcher | Shield bash | 12 frames | Telegraphed by large body wind-up |
| Inferno Bomb | Explosion | 18 frames | Proximity detection; large AoE |
| Blood-Drunk Thug | Overhead smash | 6 frames | Fast, a "skilled" enemy |
| Skull-Crusher | Charge | 10 frames | Visual telegraph: eyes glow |
| Butterfly (Megaera whip) | Multi-hit | 4 frames per hit | Boss: expects player to pattern-read |

The studio rule: **minimum 4-frame interrupt budget** for any attack. Below 4 frames at 60fps (0.067 seconds), the animation is imperceptible and the attack feels like a hitscan without feedback.

---

## 🎮 Case Study: Destiny 2, Weapon ADS (Aim Down Sights) State Machine

Bungie's Destiny 2 uses one of the most documented FPS weapon state machines in the industry. The weapon animation state machine runs as an **override layer** on top of the character locomotion state machine, using what Bungie's animation team calls a "weapon slot", equivalent to Unreal's Montage Slot.

The ADS (Aim Down Sights) sub-state machine for hand cannons:
```
Idle Hip Fire
  ↓ [ADS trigger]
ADS Raise (0.2s blend-in)
  ↓ [at exit time 0.9]
ADS Idle (loop)
  ↓ [Fire trigger]
ADS Fire (0.1s blend-in, 0.15s duration)
  → [loop back to ADS Idle]
  ↓ [ADS release]
ADS Lower (0.15s)
  → [return to Hip Fire Idle]
```

The key insight: every state in the weapon sub-machine has **different blend durations optimized for feel**. ADS Raise (0.2s) is deliberately long enough to show a smooth raise animation; ADS Fire (0.1s) is short enough that rapid fire feels crisp; ADS Lower (0.15s) is faster than Raise because lowering feels more urgent.

Bungie calls this "asymmetric blend times", the same transition in opposite directions (raise/lower) intentionally has different durations because the player's perceptual experience of each direction is different.

---

## 🎮 Case Study: Fortnite, Build-Mode State Machine Interruption

Epic Games faced a unique state machine challenge in Fortnite: when a player switches between "combat mode" (standard locomotion) and "build mode" (placing structures), the character's animation system must handle interruptions mid-state. A player can be in the middle of a crouch animation (from combat mode) and trigger build mode, the state machine must handle this gracefully.

Epic's solution: a **global mode parameter** (CombatMode / BuildMode) that the locomotion state machine reads, rather than separate state machines per mode. The state machine shares all locomotion states (walk, run, crouch, jump) between modes, with the mode parameter gating which sub-state machine is active for arm/weapon animations. This means combat-to-build transitions happen with the same blend system as any other state transition, there is no special case code.

The lesson: **shared state machine architecture reduces edge cases**. If combat and build mode have separate state machines, transitions between them require custom handling. If they share a state machine with a mode parameter, the standard transition logic handles it.

---

## 📊 Summary: Tuning Parameters Reference

| Parameter | Typical Range | Effect of Too Low | Effect of Too High |
|-----------|--------------|------------------|--------------------|
| Transition blend time | 0.05–0.25s | Snappy but may pop | Smooth but laggy |
| Blend Tree lerp speed | 6–12 u/s | Instant (no smoothing) | Mushy, sluggish |
| Hit stop duration | 2–12 frames | Lacks impact feel | Interrupts game flow |
| Coyote time window | 0.1–0.15s | Misses ledge jumps | Feels floaty |
| AnyState transition priority | Top = highest | | |

---

## 🎯 Exam Callouts: What the Test Checks

> 🎯 **What the exam tests 1:** Playtesting reports that a dodge roll "feels sticky." Without changing the animation, what are the three state machine parameters to check? (1) Transition blend duration reduce it for a snappier feel; (2) Condition polling frequency ensure it's checked every frame; (3) Interruption Source, set to "Current State" so the roll can interrupt any in-progress blend.

> 🎯 **What the exam tests 2:** An AnyState transition triggers a character death animation in a loop. What is the cause and fix? The Death state re-triggers the AnyState condition because the parameter hasn't reset. Fix: use a **Trigger** (auto-reset) instead of a Bool, so once the Death transition fires, the trigger clears and the loop cannot restart.

> 🎯 **What the exam tests 3:** What is the difference between "2D Freeform Directional" and "2D Simple Directional" blend tree modes? Freeform Directional uses radial interpolation, correct for motion capture data where clips were captured from multiple recording angles. Simple Directional uses simpler direct interpolation, best for hand-authored clips with exact directional control.

> 🎯 **What the exam tests 4:** Why should additive layer clips be authored as deltas from a reference pose? Additive layers add the clip's bone values on top of the base layer's values. If the clip is a full pose (not a delta), it adds the full pose values to the base, producing a doubled/broken pose. Only delta-from-reference clips produce correct additive blending.

> 🎯 **What the exam tests 5:** What is "coyote time" in a state machine implementation? A grace period (0.1–0.15s) after the character leaves the ground during which the airborne → jump transition remains available. The animation system must play an "edge-peek" or "late-jump" animation for this window rather than snapping to fall.

> 🎯 **What the exam tests 6:** In Hades, what is the minimum interrupt budget for any enemy attack? 4 frames at 60fps (0.067 seconds). Below this, the attack animation is imperceptible and feels like hitscan, the player has no time to read the telegraph.

> 🎯 **What the exam tests 7:** Destiny 2 uses "asymmetric blend times." What does this mean? The same transition in opposite directions (e.g., ADS Raise vs. ADS Lower) intentionally uses different blend durations because the player's perceptual experience of each direction is different. Raising is deliberate; lowering is urgent.

> 🎯 **What the exam tests 8:** What is the Bungie playtest finding about the Hunter dodge blend time? Reducing the dodge transition blend from 0.25s to 0.07s and checking conditions every frame (instead of polling every 100ms) made the dodge feel "great", identical underlying animation, entirely different feel through state machine tuning.

> 🎯 **What the exam tests 9:** What is a Pushdown Automaton state machine? A stack-based FSM where entering a new state "pushes" onto a stack and exiting "pops" back to the previous state, used for menus and conversation trees where ordered return is needed.

> 🎯 **What the exam tests 10:** When does an input buffer in fighting games activate? When a player inputs a command during an animation's locked frames. The input is stored for 0.1–0.25 seconds and fires as soon as the animation reaches an "interrupt-ok" frame. This is game code, not the state machine's interrupt logic.

---

## ⚠️ Common Misconceptions

> **Misconception 1: "Longer blend times = smoother animation."**
> Reality: Long blend times feel smooth but laggy. The sweet spot for a responsive action game is 0.05–0.12 seconds for high-priority transitions (dodge, attack) and 0.15–0.25 seconds for lower-priority ones (idle to walk).

> **Misconception 2: "AnyState transitions are always dangerous."**
> Reality: AnyState is essential for Death, Knockdown, and Stagger states. The danger is transition loops, prevent them with Trigger parameters (which reset) or guards in your condition logic.

> **Misconception 3: "Additive layers work like override layers but milder."**
> Reality: Additive layers require clips authored as deltas (reference pose subtracted). Using a full-pose clip in an additive layer produces garbled, broken poses, not a mild blend.

---

## 📊 Locomotion System Design Comparison: Five Shipped Games

Understanding how real studios design their locomotion systems provides concrete benchmarks for your own projects.

| Game | Genre | States (Grounded) | States (Air) | States (Combat) | Total Approx States |
|---|---|---|---|---|---|
| Hades | Top-down action | Idle, Walk, Run |, (isometric; no jump) | Attack (×5 weapons), Roll, Dash | ~25 |
| Hollow Knight | 2D platformer | Idle, Walk, Run | Jump, Double-Jump, Fall, Wall-Slide | Nail Attack (4 dirs), Dash, Spell | ~30 |
| Dead Cells | 2D roguelike | Idle, Walk, Run | Jump, Fall | Roll, Attack (2 hits), Parry | ~20 |
| Destiny 2 | FPS | Idle, Walk, Sprint, Crouch | Jump (3 variants), Glide, Dodge | ADS, Fire, Reload, Melee, Ability | ~60 (incl. weapon states) |
| DOOM Eternal | FPS | Idle, Walk, Run, Sprint | Jump, Double-Jump, Dash, Ledge-Grab | Glory Kill, Chainsaw, Sword Blade | ~40 |

**Key insight**: complexity in the locomotion state machine scales with input richness (how many movement abilities the player has) and camera context (first-person needs different state handling than third-person). Hollow Knight has more locomotion states than Dead Cells despite being simpler, because the platformer genre requires more air states.

---

## 📊 Input Buffer Design: When the State Machine Hands Off to Game Code

The state machine handles real-time animation, but the **input buffer** is a game code responsibility that operates in parallel. Understanding the handoff is essential for designing responsive combat systems.

| System | Responsibility | Typical Implementation |
|---|---|---|
| State machine | Which animation plays; transition conditions | Unity Animator Controller / AnimBP |
| Input buffer | Queuing player inputs that arrive during locked animation frames | Game code: ring buffer, 0.1–0.25s window |
| Combo system | Chaining buffered inputs into combo sequences | Game code: reads state machine state + buffer |
| Hit confirmation | Enabling hitbox at specific animation frames | Animation Event → game code |

In fighting games, the input buffer window (0.1–0.25 seconds) is a **design variable** that directly affects how accessible and "tight" the combo system feels. Street Fighter VI's input buffer is more generous than Street Fighter III's, deliberately, to make combos more accessible to new players.

---

## 🔗 Next Steps

**Next Module:** [Module 6: UI (User Interface) Animation with Figma, GSAP & Framer Motion →](../Module-06-UI-Animation-Figma-GSAP/Reading.md)

We shift from game engines to the web: Figma Smart Animate, GSAP's ScrollTrigger and Timeline, the Flip plugin, and Framer Motion for React.

---

## 📊 Summary: State Machine Quality Checklist

Before shipping a locomotion or combat state machine in production, verify these ten criteria:

| Criterion | Check |
|---|---|
| All transitions checked every frame | Transition condition polling is not throttled |
| High-priority transitions use AnyState | Death, Knockdown, Stagger source from AnyState |
| AnyState transitions use Triggers | Not Bools, prevents re-trigger loops |
| Additive clips authored as deltas | Not full poses, prevents broken additive blending |
| Blend times tuned per action priority | Dodge/roll ≤ 0.08s; walk ≥ 0.15s |
| 2D axes normalized | Both axes same scale to prevent interpolation bias |
| Coyote time state exists | Edge-peek state prevents walk→fall snap |
| Root Motion or In-Place, not both | NavMesh + Root Motion conflict verified |
| Layer weights controlled by code | Weapon layer weight = 0 when unequipped |
| Performance profiled | Animation thread cost verified in target frame budget |

---

## 📚 Further Reading

- 🔗 [Unity Manual, State Machine Transitions](https://docs.unity3d.com/Manual/class-Transition.html)
- 🔗 [Unity Manual, Blend Trees](https://docs.unity3d.com/Manual/class-BlendTree.html)
- 📄 "Responsive Animation: The Physics of Player Expectations", Game Developer Magazine (search GDC Vault)
- 📄 Steve Swink, *Game Feel* Chapter 3, "Making It Feel Real" (input buffering, response latency)
- 📄 Jonathan Cooper, *Game Anim* (2021), practitioner's guide to production game animation, covering state machines and blend trees in depth
- 🔗 [Unity Manual State Machine Behaviours](https://docs.unity3d.com/Manual/StateMachineBehaviours.html) StateMachineBehaviour scripts that run on state enter/exit/update for code-side state machine events
- 🔗 [Unreal Engine State Machine Documentation](https://docs.unrealengine.com/5.3/en-US/state-machines-in-unreal-engine/) Unreal's equivalent state machine guide with transition rule examples

> *Key point: The principle covered in this module applies across every major production pipeline, from indie Blender shorts to Pixar feature films. The specific tools change; the underlying craft standard does not.*

> *Key point: The principle covered in this module applies across every major production pipeline, from indie Blender shorts to Pixar feature films. The specific tools change; the underlying craft standard does not.*

> *Key point: The principle covered in this module applies across every major production pipeline, from indie Blender shorts to Pixar feature films. The specific tools change; the underlying craft standard does not.*

> *Key point: The principle covered in this module applies across every major production pipeline, from indie Blender shorts to Pixar feature films. The specific tools change; the underlying craft standard does not.*

> *Key point: The principle covered in this module applies across every major production pipeline, from indie Blender shorts to Pixar feature films. The specific tools change; the underlying craft standard does not.*
