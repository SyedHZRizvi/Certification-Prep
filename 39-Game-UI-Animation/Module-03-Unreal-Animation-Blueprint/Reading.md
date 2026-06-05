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

## 🎮 Case Study: Valorant — Agent Ability Animation Design

Riot's GDC 2020 presentation "Building the Animations of Valorant" by Ryan Duffin covers the specific Animation Blueprint design decisions that make Valorant's agent animations work in a competitive context. Three critical decisions:

**1. Ability animations are Montages, not state machine states.** Every agent ability animation plays via a Montage on a specific Slot, leaving the locomotion state machine fully active beneath it. A Sage healing a teammate does not "stop walking" in the animation system — the locomotion Blend Space continues on Layer 0, and the healing Montage overrides the upper body on Layer 1. This means healing can happen while walking without any transition logic.

**2. Blend Space interpolation speed is tuned per-agent.** Reyna, designed as an aggressive duelist, has a Blend Space interpolation speed of ~12 units/second — faster than most other agents. Sage, designed as a methodical support, runs at ~8 units/second. The difference is subtle (milliseconds of lag in direction changes) but playtesting showed that players felt Reyna was more "aggressive" with the higher interpolation speed.

**3. Zero-frame transitions for competitive-critical states.** Agent states like "planting the spike" and "defusing the spike" have a 0.0-second transition from all locomotion states. Any blend duration here would mean the visual state and game state are desynchronized — visually planting at 0.2s but logically already planting at 0.0s. The animation system snaps immediately.

---

## 🎮 Case Study: DOOM Eternal — Animation Budget Tiers at id Software

id Software's approach to animation budgeting for DOOM Eternal is notable for its **tiered budget system** — different animation systems have different hard ceilings based on their per-frame impact.

| Animation System | Budget (ms) | Notes |
|---|---|---|
| Doom Slayer locomotion + IK | < 2ms | Critical path; no IK for non-foot bones |
| Demon AI + animation | < 1ms per active demon | ~8–12 demons visible at once; total < 12ms |
| Demon death animations | Not real-time budgeted | Glory kills are scripted sequences; can "cheat" timing |
| Environment animation | < 0.5ms | Terrain, doors, traps |
| UI animation | < 0.2ms | Health, armor, ammo bars |

The total animation budget for DOOM Eternal at 60fps is approximately **15ms** (leaving 1.67ms for render pipeline overhead). id achieves this through aggressive LOD on distant demons (disable non-essential bone updates at > 20 meters), animation update rate reduction for off-screen entities, and pre-baked secondary motion on all demon models.

> ⚠️ **Performance trap:** DOOM Eternal's enemy kill animation design deliberately sidesteps real-time animation constraints. Glory kill sequences are pre-authored Sequencer-equivalent cutlets that temporarily disable the game's AI and physics simulation — during the 1.5–2 second kill sequence, the game is essentially paused for all entities except the Doom Slayer and the target demon. This is how they achieve cinematic-quality kill animations without an animation budget.

---

## 🎮 Case Study: The Last of Us — Naughty Dog's Unreal-Adjacent Architecture

While The Last of Us runs on Naughty Dog's proprietary ICE engine (not Unreal), the animation architecture maps almost directly onto Unreal's Animation Blueprint model. Naughty Dog engineers who have worked on both systems (including Jonathan Cooper, who later documented Naughty Dog's animation approach in "Game Anim") describe the architecture as:

- **Event Graph equivalent**: a "behavior tree" that reads game state and writes animation parameters each tick
- **AnimGraph equivalent**: a "pose graph" that reads parameters and blends clips into the final skeleton pose
- **Sequencer equivalent**: the "cutscene system" that plays authored camera + character animation sequences for story moments

The key Naughty Dog innovation used in TLOU: **pose matching** at cinematic-to-gameplay transitions. When the game hands control back to the player after a cutscene, rather than snapping to the nearest locomotion pose, the system:
1. Snapshots the final cutscene pose (all bone positions/rotations)
2. Feeds that pose as a "virtual start" into the locomotion state machine
3. Blends from that snapshot over 0.1–0.25s into the correct locomotion pose

The player never perceives the transition. This technique is now replicated in Unreal Engine via the "Linked Anim Layer" and "Pose Snapshot" nodes introduced in UE4.25+.

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

## 🎯 Exam Callouts: What the Test Checks

> 🎯 **What the exam tests 1:** What is the purpose of the Event Graph in an Unreal Animation Blueprint? It runs game logic (reading pawn velocity, setting Speed/IsGrounded/IsAiming) that provides values the AnimGraph reads. Code logic belongs in Event Graph; animation node logic belongs in AnimGraph.

> 🎯 **What the exam tests 2:** How does a Blend Space differ from a Unity Blend Tree? They are conceptually equivalent but differ in implementation: Unreal's Blend Space is a standalone asset placed inside a state machine state via a "Blend Space Player" node. Unity's Blend Tree is embedded directly as a state machine node.

> 🎯 **What the exam tests 3:** What is an Aim Offset? A special type of Blend Space where the samples are additive poses of the character's upper body aiming in different yaw/pitch directions. It is combined additively with the base locomotion pose. Its axes are Yaw (left/right) and Pitch (up/down).

> 🎯 **What the exam tests 4:** In Valorant, why are agent abilities implemented as Montages rather than state machine states? Because Montage + Slot allows an ability animation to override only the relevant body part (e.g., upper body on Layer 1) while the locomotion state machine continues running on Layer 0. The agent can walk and cast simultaneously without special transition logic.

> 🎯 **What the exam tests 5:** What does "Blend Space interpolation speed" control in Unreal? It controls how quickly the 2D sample position moves inside the Blend Space when the parameter values change. It is NOT the same as animation transition blend duration. Fast interpolation = instant-feeling direction changes. Slow interpolation = gradual, smooth direction changes.

> 🎯 **What the exam tests 6:** What is Control Rig and where does it run? Control Rig is Unreal Engine's native procedural animation and rigging system. It runs on the **animation thread** at full game frame rate — not the game thread. It is designed for real-time procedural IK, secondary motion, and environmental interaction.

> 🎯 **What the exam tests 7:** What is FABRIK in Unreal's Control Rig? FABRIK (Forward And Backward Reaching Inverse Kinematics) is Unreal's built-in multi-joint IK solver. It handles chains of arbitrary length (arms, legs, spine) by iterating forward then backward through the chain until the end effector reaches the target.

> 🎯 **What the exam tests 8:** What is a Slot node in an Animation Blueprint's AnimGraph? A Slot marks a position in the AnimGraph where Montages or Sequencer animations can override the pose from the state machine below. The Animation Blueprint must have a Slot node for Montages to work.

> 🎯 **What the exam tests 9:** What is the Gears 5 transition budget and why was it chosen? The Coalition tuned all locomotion transitions to a maximum of 0.15 seconds in Gears 5's cover-based system. Longer blends felt "floaty" when the player was moving between cover positions, where precise positioning is tactically critical.

> 🎯 **What the exam tests 10:** How many facial controls does a MetaHuman rig have and what drives them? MetaHuman facial rigs have 265 pose space deformation controls. They can be driven by the MetaHuman Animator (which processes performance capture from an iPhone or mocap body suit) or authored manually in Sequencer.

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

## 📊 Unreal vs. Unity vs. Godot — Full Animation Feature Comparison

Understanding how animation concepts map across the three major game engines is essential for any animator or technical artist who will move between projects and studios.

| Concept | Unity | Unreal Engine 5 | Godot 4 |
|---|---|---|---|
| State machine editor | Animator window (Animator Controller) | AnimGraph inside Animation Blueprint | AnimationTree with StateMachine node |
| Blend interpolation | Blend Tree (embedded in state) | Blend Space (standalone asset) | BlendSpace2D node |
| Code logic for anim params | Animator C# API (SetFloat, SetBool) | Event Graph (Blueprint, every tick) | Script sets AnimationTree parameters |
| Rigging / procedural | Animation Rigging package | Control Rig (built-in, real-time) | SkeletonModificationStack |
| Cinematic timeline | Timeline (asset + Director) | Sequencer (track-based, full-featured) | AnimationPlayer + Camera rigs |
| One-shot override | Override layer (Avatar Mask) | Montage + Slot node | One-shot node in AnimationTree |
| Per-bone masking | Avatar Mask | Layered Blend Per Bone | Bone track filter |
| Performance capture | Third-party (LiveLink plugins) | LiveLink (built-in) / MetaHuman Animator | Third-party only |
| GPU skinning | Yes (URP/HDRP) | Yes (Nanite compatible) | Yes (GLES3 / Vulkan) |
| Motion matching | Third-party (Kinematica archive) | Native (UE5.4+ Motion Matching node) | Third-party |
| 2D skeletal support | Spine-Unity package | Spine-Unreal plugin / Paper2D | Native AnimationPlayer (SpineGodot) |
| Physics-driven secondary | Physics-based Animation Rigging | Control Rig physics | Jiggle modifier in SkeletonModifier |
| IK solver built-in | `OnAnimatorIK()` (Humanoid only) | Two Bone IK node / Full Body IK (UE5) | SkeletonIK node |
| Open-source | No | No | Yes (MIT) |

---

## 📊 Animation Blueprint Performance: What Costs What

Understanding where the Unreal Animation Blueprint spends time helps architects design efficient animation systems.

| AnimBP Operation | Approximate Cost (per character) | Notes |
|---|---|---|
| State machine evaluation | 0.05–0.2ms | Scales with number of active states and transitions |
| Blend Space evaluation | 0.1–0.3ms | 2D more expensive than 1D |
| Layered Blend Per Bone | 0.2–0.5ms | Scales with bone count in mask |
| Two Bone IK | 0.1–0.2ms | Per IK chain |
| Full Body IK (UE5) | 0.5–1.5ms | Full multi-limb simultaneous solve |
| Control Rig (simple) | 0.2–0.5ms | Depends on graph complexity |
| Control Rig (complex) | 1–3ms | Environment interaction, full-body rig |
| Aim Offset | 0.1–0.2ms | Additive; relatively cheap |
| Cached Pose (reuse) | Near zero | Cache once, reference many times — use aggressively |
| Montage (active) | +0.1ms | Overhead during Montage playback |

> 🎯 **Exam Callout:** The Cached Pose node is one of the most underused optimization tools in the Animation Blueprint. If the same computed pose (e.g., the locomotion Blend Space result) is referenced in multiple branches of the AnimGraph, wrapping it in a Cached Pose avoids computing it twice. On characters with complex AnimBPs, this can reduce animation thread cost by 20–30%.

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

## 📊 Montage vs. Override Layer vs. Blend Space: When to Use Which

A common confusion in Unreal animation design is choosing between three ways to play a "secondary" animation on top of the base locomotion.

| Mechanism | How It Works | When to Use | Limitation |
|---|---|---|---|
| **Blend Space inside state** | Animation samples interpolated by parameters | Locomotion (idle/walk/run/sprint) | Not designed for one-shots |
| **Layered Blend Per Bone** | Two poses blended bone-by-bone via mask | Permanent upper-body override (aiming) | Requires a specific bone mask; always active while layer has weight |
| **Montage + Slot** | Clip plays on a Slot, overriding AnimBP at that point | One-shot actions (attacks, abilities, interact) | Cannot easily blend two Montages simultaneously on same Slot |
| **State Machine State with Transition** | Discrete state for a specific action | Committed actions that change full locomotion (roll, dive) | Player is "locked" for transition duration |

> 🎯 **Exam Callout:** Valorant uses Montage + Slot for abilities (one-shot, can be interrupted), Layered Blend Per Bone for weapon aiming (permanent during weapon draw), and a full state machine state for planting/defusing (action locks the player's position and the animation is not interruptible).

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

*[Module complete — see README for next steps and related tracks.]*

> *Key point: The principle covered in this module applies across every major production pipeline — from indie Blender shorts to Pixar feature films. The specific tools change; the underlying craft standard does not.*

> *Key point: The principle covered in this module applies across every major production pipeline — from indie Blender shorts to Pixar feature films. The specific tools change; the underlying craft standard does not.*
