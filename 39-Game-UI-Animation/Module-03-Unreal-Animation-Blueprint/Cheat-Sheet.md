---
title: "Module 3 Cheat Sheet: Unreal Animation Blueprint"
---

# 🗒️ Module 3 Cheat Sheet: Unreal Animation Blueprint

## 🧱 AnimBP Dual-Graph Architecture

| Graph | Purpose | What Goes Here |
|-------|---------|---------------|
| **Event Graph** | Code logic | Set Speed, IsGrounded, IsAiming from pawn each tick |
| **AnimGraph** | Animation logic | State machines, Blend Spaces, IK nodes, output pose |

---

## 🔁 Unreal vs. Unity Concept Map

| Unity | Unreal Equivalent |
|-------|------------------|
| Animator Controller | Animation Blueprint |
| Blend Tree (1D) | Blend Space 1D |
| Blend Tree (2D) | Blend Space (2D) |
| Avatar Mask + Layer | Layered Blend Per Bone |
| Override layer | Montage + Slot |
| Additive layer | Apply Additive node |
| Animation Event | Animation Notify |
| Timeline | Sequencer |
| Animation Rigging package | Control Rig |
| AnyState transition | Any State in state machine |

---

## 🗺️ Blend Space Types

| Type | Axes | Use Case |
|------|------|---------|
| **Blend Space 1D** | 1 float | Speed-based locomotion |
| **Blend Space** | 2 floats | Directional locomotion (Speed × Direction) |
| **Aim Offset** | Yaw × Pitch (additive) | Weapon aiming overlay |

> Normalize both 2D axes to the same range to avoid interpolation bias.

---

## 🎭 Key AnimGraph Nodes

| Node | Purpose |
|------|---------|
| Blend Space Player | Evaluates a Blend Space at runtime |
| Layered Blend Per Bone | Blend two poses per-bone (upper/lower body) |
| Apply Additive | Add additive pose on top of base |
| Two Bone IK | IK for arm or leg chains |
| Look At | Bone rotates toward world-space target |
| Cached Pose | Reuse a computed pose in multiple branches |
| Slot | Override point for Montages / Sequencer |
| State Machine | Container for states and transitions |

---

## ⚔️ Animation Montage

- **Use for:** One-shot attacks, interactions, ability animations
- **Slot:** Where the Montage overrides the AnimBP (e.g., "DefaultSlot")
- **Blend In/Out:** Configurable per-montage in seconds
- **Notifies:** Fire game events at specific frames (hitbox on, VFX, sound)

```cpp
AnimInstance->Montage_Play(AttackMontage, 1.0f);   // play
AnimInstance->Montage_Stop(0.2f, AttackMontage);   // blend out over 0.2s
```

---

## 🔧 Control Rig Key Concepts

| Term | Description |
|------|-------------|
| Control | Handle (like a Maya curve) driven by animator or runtime |
| Rig Unit | Node in the rig graph (FK, IK, math, constraint) |
| FABRIK | Multi-joint IK solver (arms, legs, spine) |
| Full Body IK | UE5 simultaneous multi-limb IK solver |
| Constraint | Position/rotation link between controls or bones |

---

## 🎬 Sequencer vs AnimBP

| | Sequencer | Animation Blueprint |
|--|----------|---------------------|
| Use case | Scripted cutscenes | Interactive gameplay |
| Playback | Linear (scrubbed) | State machine (player-driven) |
| Control | Director/level events | Game code / Blueprint |

---

## 📌 Case Study Reference

| Game | Studio | Key Technique |
|------|--------|--------------|
| Valorant | Riot Games | Blend Spaces tuned for silhouette clarity at distance |
| Fortnite | Epic Games | Fast Blend Space interpolation for instant-feel locomotion |
| Gears 5 | The Coalition | Control Rig cover IK + 0.15s max transition budget |
| MetaHuman | Epic Games | 265 facial controls, performance capture via MetaHuman Animator |

---

## ⚠️ Common Traps

| Trap | Reality |
|------|---------|
| AnimGraph for code | Wrong — AnimGraph is animation logic; Event Graph is code |
| Blend Space replaces state machine | No — Blend Space lives inside a state machine state |
| Control Rig = Sequencer only | No — Control Rig is real-time, runs on animation thread |
| Montage = new state machine state | No — Montage is a Slot override, not a state |
| Aim Offset = camera aim | No — Aim Offset is an additive pose overlay for weapon aiming |
| Blend Space axes unequal range | Normalise both axes — unequal ranges bias interpolation toward the wider axis |

---

## 📊 Game Engine Animation Feature Comparison

| Feature | Unity | Unreal Engine | Godot 4 |
|---|---|---|---|
| State machine editor | Animator window | AnimGraph (AnimBP) | AnimationTree (built-in) |
| Blend interpolation | Blend Tree (1D, 2D, Direct) | Blend Space 1D / 2D | BlendSpace2D node |
| Procedural/IK | Animation Rigging package | Control Rig | SkeletonModificationStack |
| Cinematic timeline | Timeline | Sequencer | AnimationPlayer + Path |
| One-shot overrides | Override layer | Montage + Slot | AnimationNode one-shot |
| Per-bone masking | Avatar Mask | Layered Blend Per Bone | Bone filter on track |
| Performance capture | Third-party (LiveLink) | LiveLink / MetaHuman Animator | Third-party |
| GPU skinning | Yes (URP/HDRP) | Yes (Nanite-compatible) | Yes (GLES3 / Vulkan) |
| Motion matching | Third-party packages | Native (UE5.4+) | Third-party |
| 2D skeletal animation | Spine-Unity package | Spine-Unreal plugin | Native AnimationPlayer |

---

## 🎮 Valorant Competitive Animation Specs

| Parameter | Value | Reason |
|---|---|---|
| Blend Space interpolation (Reyna) | ~12 u/s | Aggressive duelist feel |
| Blend Space interpolation (Sage) | ~8 u/s | Methodical support feel |
| Ability animation → Montage | Slot-based | Agent walks + casts simultaneously |
| Plant/defuse transition | 0.0s (snap) | Visual must sync to game state exactly |

---

## ⚙️ Unreal AnimBP Shortcuts

| Action | Method |
|---|---|
| Get character speed | `Try Get Pawn Owner → GetVelocity → VectorLength` |
| Set state variable | `Event Tick → calculate → set variable` |
| Read variable in AnimGraph | Variable nodes (same as Blueprint variable access) |
| Add state machine | AnimGraph → right-click → Add State Machine |
| Add Blend Space to state | Double-click state → drag Blend Space asset in |
| Enable IK on foot | Add Two Bone IK node; set end bone + IK Bone + effector |
| Add Montage slot | Output Pose → Slot node → (rest of graph) |
