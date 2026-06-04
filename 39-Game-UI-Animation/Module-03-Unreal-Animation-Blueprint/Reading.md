---
title: "Module 3: Unreal Animation Blueprint — Blend Spaces, Control Rig & Sequencer"
---

# 🔵 Module 3: Unreal Animation Blueprint

## The Animation Lead Who Rebuilt Valorant's Agent Movement

In 2019, Riot Games Animation Lead Ryan Duffin gave an internal talk that later surfaced as a GDC 2020 presentation: "Building the Animations of Valorant." The central challenge Riot faced was building a competitive tactical shooter where every frame of animation had to serve gameplay clarity rather than cinematic beauty. In a game like Valorant, where players use agent silhouettes at 200+ feet to make split-second decisions — "is that Reyna planting or running?" — animation is a competitive information system, not an aesthetic one.

The Valorant team built their character animation in Unreal Engine 4 using Animation Blueprints. Their Blend Space for agent locomotion had to satisfy two mutually exclusive demands: it needed to look smooth enough that players found the agents appealing, and it needed to be clear enough at distance that the silhouette never ambiguously read a planting animation as a running one. The solution was a tiered Blend Space where fast movement states had exaggerated silhouettes — wider leg spread, stronger directional lean — while idle and slow walk states prioritized smooth blending.

The Coalition's Gears 5, Epic Games' Fortnite, and Riot's Valorant all ship on Unreal Engine Animation Blueprints. Understanding this system is non-negotiable for any serious game animator.

---

## 🏗️ The Animation Blueprint: What It Is

Unreal Engine's **Animation Blueprint** (AnimBP) is a specialized Blueprint that controls how a Skeletal Mesh animates at runtime. Unlike Unity's Animator Controller (which is a data asset with a state machine editor), the Animation Blueprint is a full visual scripting environment combining:

1. **AnimGraph** — the visual state machine and blend node graph; defines *what* plays and *how* clips blend
2. **Event Graph** — standard Blueprint event graph; defines *when* and *what* properties change (code logic that drives AnimGraph parameters)

Every Skeletal Mesh Actor that animates at runtime needs an Animation Blueprint class assigned to its Skeletal Mesh Component.

---

## 🎛️ AnimGraph vs. Event Graph

| | AnimGraph | Event Graph |
|--|----------|------------|
| Purpose | Animation logic (what plays) | Gameplay logic (what parameters are) |
| Works with | Pose nodes, state machines, blend nodes | Standard Blueprint nodes |
| Output | Final pose (applied to skeleton) | Variable values (Speed, Direction, IsAirborne) |
| Executed | Every animation tick (parallel to game thread) | Every game tick (Event Tick, etc.) |
| Access to owner | Via `Try Get Pawn Owner` | Via `GetOwningActor` |

**Pattern:** Event Graph sets variables (Speed, IsGrounded, IsAiming). AnimGraph reads those variables to drive the state machine and blend nodes.

```
Event Graph:
  Event Tick →
    Try Get Pawn Owner → Get Velocity → Vector Length →
    Speed (float variable)

AnimGraph:
  State Machine →
    Idle/Walk/Run state reads Speed variable →
    Blend Space uses Speed to interpolate clips
```

---

## 🗺️ Blend Spaces: Unreal's Locomotion Interpolation

A **Blend Space** (or **Blend Space 1D**) is an Unreal asset that interpolates animation poses across one or two axes.

### Blend Space 1D
Single axis (e.g., Speed from 0 to 600 cm/s):
- Place animation samples at points along the axis (Idle at 0, Walk at 200, Run at 600)
- Unreal interpolates between adjacent samples based on the runtime parameter value
- Equivalent to Unity's 1D Blend Tree

### Blend Space (2D)
Two axes (e.g., Speed and Direction):
- Place animation samples in a 2D grid: forward walk, backward walk, strafe left, strafe right
- Unreal interpolates using the 2D position in the grid
- Equivalent to Unity's 2D Blend Tree

> 🎯 **Exam Tip:** Normalize both axes of a 2D Blend Space to the same scale range. If Speed is 0–600 and Direction is -180 to 180, the interpolation will favor the Direction axis due to the larger range. Normalize both to 0–1 or -1 to 1 before feeding the Blend Space.

### Aim Offset
A special type of Blend Space designed for weapon aiming. The two axes are typically Yaw (left/right) and Pitch (up/down), and the samples are additive poses of the upper body aiming in each direction. It is combined additively with the base locomotion pose.

---

## 🌳 The Locomotion State Machine in AnimGraph

In Unreal's AnimGraph, right-click → Add State Machine. Double-click to enter it. Inside:
- Right-click → Add State → name it (Idle, Walk, Run, Jump, Fall, Land)
- Connect states with transitions (hover over a state, pull the arrow to another state)
- Each state contains a pose node (a clip, a Blend Space, or another nested state machine)

### Locomotion Pattern in Valorant-Style Games

```
[Idle/Walk/Run] ←→ [Jump] → [Fall] → [Land] → [Idle/Walk/Run]
     ↕
[Crouch Idle/Walk]
```

Inside the Idle/Walk/Run state: a Blend Space 1D driven by Speed.
Inside the Crouch state: a separate Blend Space for crouched locomotion.
Transition conditions: `IsFalling`, `Speed > threshold`, `bIsCrouching`.

---

## 🎮 Case Study: Fortnite Locomotion Blend Space

Epic Games published details of Fortnite's animation architecture in Unreal Dev Days. The core locomotion uses a **2D Blend Space** with:
- X axis: Speed (0 to max sprint speed, ~800 cm/s)
- Y axis: Direction (−180° to 180°, derived from movement direction vs. character facing)

The key insight: Fortnite's fast-paced build loop requires that locomotion transitions feel instant. Epic tuned the Blend Space **interpolation speed** (the rate at which the sample position in the Blend Space moves) to be fast — roughly 8–12 units/second — so that a player who changes direction feels immediate feedback. Slower interpolation would feel smooth but muddy; players would perceive it as input lag.

> 🚨 **Trap on the exam:** Blend Space interpolation speed (in the Blend Space editor settings) is NOT the same as the animation transition blend time in the state machine. The interpolation speed controls how quickly the 2D sample position moves; the transition blend controls how long a crossfade between states takes.

---

## 🔧 Control Rig: Procedural Animation in Unreal

**Control Rig** is Unreal Engine's native rigging and procedural animation system introduced in UE4.22 and significantly expanded in UE5. It allows animators and TDs to:
- Build full character rigs inside Unreal without Maya or MotionBuilder
- Write procedural animation logic in a visual graph (similar to a Blueprint)
- Create runtime IK, secondary motion, and deformation systems that run on the animation thread

### Why Control Rig Matters for Production
Before Control Rig, procedural animation in Unreal required C++ or AnimGraph Blueprint nodes that were difficult to iterate on. Control Rig exposes a dedicated rigging graph with FK/IK nodes, constraint nodes, and math operations — similar to Maya's Node Editor but designed for real-time.

The Coalition used Control Rig for Gears 5's environmental interaction system — Kait Diaz's hands and body procedurally adapt when she vaults over walls, crawls under obstacles, or leans around cover. The rig logic to detect the obstacle geometry and solve the body pose runs in real-time at 60fps.

### Control Rig Key Concepts

| Concept | Description |
|---------|-------------|
| Control | A handle (like a Maya control curve) that an animator or runtime system drives |
| Rig Unit | A node in the Control Rig graph that performs one operation (FK, IK, math) |
| FK Chain | Forward kinematics along a bone chain; parent drives children |
| FABRIK | Forward And Backward Reaching IK; Unreal's built-in multi-joint IK solver |
| Full Body IK | UE5's full-body IK solver; solves all limbs simultaneously to reach targets |
| Constraint | Position/rotation/scale relationship between two controls or bones |

---

## 🎬 Sequencer: Cinematic Animation in Unreal

**Sequencer** is Unreal Engine's non-linear animation editor for in-game cinematics. It is equivalent to Unity's Timeline, but significantly more powerful — it can control animation, camera cuts, audio, particle systems, lighting, and Blueprint events in a single unified track-based interface.

### Sequencer vs. Animation Blueprint

| | Sequencer | Animation Blueprint |
|--|----------|---------------------|
| Use case | Scripted cutscenes, cinematics | Real-time interactive gameplay |
| Playback | Linear (scrub-based) | State machine (player-driven) |
| Control | Director controls camera, timing | Game code drives parameters |
| Output | Pre-authored animation track | Runtime pose, every frame |
| Layer control | Full multi-track timeline | Animator layers with blend weights |

### MetaHuman Integration with Sequencer

Epic's **MetaHuman** system provides photorealistic digital humans with facial rigs, body rigs, and pre-made clothing. MetaHumans integrate with Sequencer via the **MetaHuman Animator** (UE5.1+), which:
- Processes performance capture (facial video from an iPhone or Body Track mocap)
- Generates facial animation curves that drive the MetaHuman rig
- Exports to Sequencer or the Animation Blueprint as an animation asset

MetaHuman facial rigs have 265 pose space deformation controls — far more than typical game characters. The real-time deformation runs on the GPU in UE5.

---

## 🎯 Gears 5: The Coalition's Technical Animation Architecture

The Coalition (Microsoft's internal Gears of War studio) gave a GDC 2019 talk on Gears 5's animation architecture. Key points relevant to Animation Blueprint design:

1. **Modular locomotion system**: Separate Blend Spaces for upper and lower body, combined via layering. The lower body drives foot placement; the upper body drives weapon aiming.
2. **Contextual lean system**: Control Rig procedurally leans the spine and shoulders when the character moves around cover, sensing wall proximity via traces.
3. **Full body IK at 60fps**: Even on Xbox One (far less powerful than PC), the full-body IK for environmental interaction ran at 60fps because the IK graph was authored in Control Rig (GPU-compatible) rather than the game thread.
4. **Transition budget**: Every state-to-state transition was tuned to a maximum of 0.15 seconds. Gears 5's cover system required extremely tight transitions; any longer blend felt "floaty" in a game where cover position is tactically critical.

---

## ⚙️ Animation Blueprint: Key Nodes

| Node | Purpose |
|------|---------|
| **State Machine** | Container for states and transitions |
| **Blend Space Player** | Evaluates a Blend Space asset at runtime |
| **Blend Poses by Bool** | Switches between two poses based on a boolean |
| **Layered Blend Per Bone** | Blends two poses layer-by-bone (like Unity's Avatar Mask) |
| **Apply Additive** | Adds an additive pose on top of a base pose |
| **Two Bone IK** | Solves IK for a two-bone chain (arm, leg) |
| **Look At** | Rotates a bone to look at a target |
| **Aim Offset Player** | Evaluates an Aim Offset asset for weapon aiming |
| **Cached Pose** | Caches a pose so it can be referenced in multiple places |
| **Slot** | Marks where Sequencer or Montage animations override the AnimBP |

---

## 🎭 Animation Montages

An **Animation Montage** is an Unreal asset that allows you to:
- Play an animation clip on a specific Slot (overriding the AnimBP at that slot)
- Blend in and out with configurable blend times
- Fire notify events (equivalent to Unity's Animation Events)
- Chain multiple sections of a clip with different loop and jump settings

Montages are used for: attacks, special moves, interaction animations, and any one-shot action that needs to override the base locomotion temporarily.

```cpp
// Play a montage in C++
UAnimInstance* AnimInstance = GetMesh()->GetAnimInstance();
if (AnimInstance && AttackMontage) {
    AnimInstance->Montage_Play(AttackMontage, 1.0f);
}
```

---

## ⚠️ Common Misconceptions

> **Misconception 1: "The AnimGraph is for code and the Event Graph is for animation."**
> Reality: It's the opposite. AnimGraph = animation logic (blend nodes, state machines). Event Graph = code logic (setting variables the AnimGraph reads).

> **Misconception 2: "Blend Spaces replace state machines."**
> Reality: Blend Spaces live *inside* state machine states. A state machine node points to a Blend Space Player for smooth locomotion blending.

> **Misconception 3: "Control Rig is only for cinematics."**
> Reality: Control Rig runs on the animation thread at full game frame rate; it is designed for real-time procedural animation, not just Sequencer work.

> **Misconception 4: "MetaHuman is only for Sequencer cinematics."**
> Reality: MetaHuman can be used for runtime gameplay characters. The MetaHuman system includes both LOD mesh variants for gameplay distances and the full high-fidelity rig for cinematics.

---

## 📊 Summary: Unreal vs. Unity Animation Concepts

| Concept | Unity | Unreal |
|---------|-------|--------|
| State machine editor | Animator window (Animator Controller) | AnimGraph (Animation Blueprint) |
| Blend interpolation | Blend Tree | Blend Space |
| Code logic for animation | Animator C# API | Event Graph (Blueprint) |
| Rigging/procedural | Animation Rigging package | Control Rig |
| Cutscene animation | Timeline | Sequencer |
| One-shot overrides | Override layer / no direct equivalent | Animation Montage |
| Per-bone layer masking | Avatar Mask | Layered Blend Per Bone / Slot |

---

## 🔗 Next Steps

**Next Module:** [Module 4: Spine 2D for Games →](../Module-04-Spine-2D-Games/Reading.md)

We move to 2D: Spine's skeletal animation workflow, mesh deformation, and the runtime integration that powers Hollow Knight, Dead Cells, and Cuphead.

---

## 📚 Further Reading

- 🔗 [Unreal Engine Animation Overview](https://docs.unrealengine.com/5.3/en-US/animation-in-unreal-engine/)
- 🔗 [Unreal Engine Animation Blueprint Guide](https://docs.unrealengine.com/5.3/en-US/animation-blueprints-in-unreal-engine/)
- 🔗 [Unreal Engine Blend Spaces](https://docs.unrealengine.com/5.3/en-US/blend-spaces-in-unreal-engine/)
- 🔗 [Control Rig Documentation](https://docs.unrealengine.com/5.3/en-US/control-rig-in-unreal-engine/)
- 🔗 [Sequencer Overview](https://docs.unrealengine.com/5.3/en-US/cinematics-and-movie-making-in-unreal-engine/)
- 🎬 GDC: "Building the Animations of Valorant" — Ryan Duffin, Riot Games (GDC Vault)
- 🎬 GDC: "Technical Animation in Gears 5" — The Coalition (GDC Vault)
