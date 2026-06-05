---
title: "Module 2: Unity Animation System — Animator Controller, Blend Trees & Root Motion"
---

# 🔧 Module 2: Unity Animation System

## The Animator Who Shipped Without Reading the Docs

Riot Games' *League of Legends* team shipped the champion Jinx in October 2013. By that point, Riot had shipped dozens of champions in their custom engine. When the team began building *Teamfight Tactics* (TFT) in 2019, they moved to Unity — a platform none of the animation team had shipped a production title in. The challenge: TFT needed each champion's animation to feel identical to their League counterpart, but in a brand-new real-time 3D engine with a completely different animation architecture.

The Unity Animator Controller that Riot's TFT team built — a state machine for each champion's idle, walk, attack, death, and ability states — is a textbook implementation of Unity's Animator system. In an internal tech talk shared with Riot engineering in 2020, the animation lead described the Humanoid rig system as "the thing we spent two weeks fighting and one afternoon understanding." Once the team understood how Avatar masks and layers worked, they could implement champion-specific abilities as override layers on top of a shared locomotion base state machine — a single locomotion FSM shared by every champion, with ability-specific behavior added per layer.

This is Unity animation: the architecture that lets a small team ship complex characters at scale.

---

## 🏗️ The Animator Controller: Overview

The **Animator Controller** is Unity's core animation system asset. It is a state machine editor that lives in the Animator window (`Window → Animation → Animator`). Every GameObject that needs animation gets an **Animator component**, which references one Animator Controller.

The Animator Controller contains:
- **States**: Each state represents one animation clip or blend tree
- **Transitions**: Directed connections between states, with conditions and settings
- **Parameters**: Variables (float, int, bool, trigger) that conditions read
- **Layers**: Multiple independent state machines stacked; each layer can override or additively blend on top of lower layers
- **Sub-State Machines**: Nested state machines for organizing complex controllers

### Creating an Animator Controller

1. In Project window: `Right-click → Create → Animator Controller`
2. Assign it to a GameObject: select the object, add an Animator component, drag the controller into the Controller field
3. Open it: double-click the asset or select the Animator window

---

## 🎞️ Animation Clips: The Building Blocks

An **animation clip** is a recorded sequence of property values over time — bone rotations, positions, blend shape weights, material properties, or any Unity component property. Clips come from:

| Source | Format | Notes |
|--------|--------|-------|
| Blender | `.blend` or `.fbx` (export) | Bake in Blender, configure in Unity import settings |
| Maya | `.ma` / `.mb` or `.fbx` | Use Unity FBX Exporter or standard Maya export |
| Mixamo | `.fbx` (from browser) | Free rigged and animated characters at mixamo.com |
| Motion capture | `.bvh` or `.fbx` | Requires retargeting to your rig's avatar |
| Unity Timeline | In-engine recorded clip | Good for cutscene and procedural in-engine clips |
| Hand-keyed in Unity | Animation window | Use Window → Animation → Animation to key-frame properties directly |

### FBX Import Settings (Critical)

When importing an `.fbx` with animations into Unity, check the **Rig** tab and **Animation** tab in the Inspector:

**Rig tab:**
- **Animation Type**: `Humanoid` (for biped characters) or `Generic` (for non-biped or custom rigs)
- **Avatar Definition**: Create From This Model or Copy From Other Avatar (for sharing a rig)

**Animation tab:**
- Select each animation clip; set **Loop Time**, **Root Transform Rotation**, **Root Transform Position (Y)**, **Root Transform Position (XZ)**
- These settings determine Root Motion behavior

> 🎯 **Exam Tip:** Setting Root Transform Position (XZ) to "Bake Into Pose" in the import settings effectively converts Root Motion into In-Place animation — the clip plays in place and the root stays at the origin. Set it to "Based On Original" if you want Root Motion to drive the character's world position.

---

## 🦴 Humanoid vs. Generic Rig

| Property | Humanoid | Generic |
|----------|----------|---------|
| Used for | Biped characters (human, humanoid NPCs) | Vehicles, quadrupeds, custom rigs, robots |
| Avatar creation | Unity maps bones to Avatar definition | No avatar; rig is exactly as imported |
| Retargeting | ✅ Yes — clips work across different Humanoid rigs | ❌ No — clips are rig-specific |
| IK support | ✅ Yes — IK Pass in Animator, IK goals in C# | Limited — custom IK scripts needed |
| Mixamo compatibility | ✅ Yes — Mixamo is Humanoid-first | Not directly compatible |
| Performance | Slightly higher (avatar remapping cost) | Slightly lower (direct bone access) |
| Avatar Mask support | ✅ Full upper/lower body masking | Limited |

**When to use Humanoid:**
- Any biped character you want to share animations between (share a Mixamo clip across 5 NPCs with different proportions)
- Any character using Unity's built-in IK (foot IK, look-at IK)

**When to use Generic:**
- Quadrupeds, spiders, vehicles, mechanical rigs
- Any character where bone names don't map cleanly to Unity's Humanoid bone set
- Very performance-critical characters with custom skinning pipelines

---

## 🔀 The Animator Window: Building State Machines

### States
Right-click the Animator window grid → Create State → select Empty or From Selected Clip. Each state has:
- **Motion**: the clip or blend tree it plays
- **Speed**: playback multiplier (1.0 = normal, 0.5 = half speed)
- **Motion Time**: if checked, a float parameter drives playback position directly (useful for manually-scrubbed animations)
- **Mirror**: flips left/right (Humanoid only)

### Transitions
Click a state → right-click → Make Transition → click the target state. Transition settings:
- **Has Exit Time**: if checked, the transition fires automatically when the clip reaches the exit time (fraction of the clip)
- **Exit Time**: fraction of normalized clip length at which the transition fires (0.75 = 75% through the clip)
- **Transition Duration**: seconds for the blend crossfade
- **Transition Offset**: which point in the destination clip to start blending from
- **Conditions**: parameter checks that must pass (Speed > 5.0, IsGrounded = true, Jump trigger)
- **Interruption Source**: None, Current State, Next State, or Both — controls whether a new input can interrupt the current blend

> 🚨 **Trap on the exam:** **Has Exit Time** does NOT mean the clip plays to completion before transitioning. It means the transition fires *automatically* at the exit time fraction even without a condition. If you want a clip to always play to completion before looping or transitioning, set exit time to 1.0 and enable Has Exit Time.

---

## 🌳 Blend Trees: The Locomotion Workhorse

A **Blend Tree** is a state machine node that interpolates between multiple animation clips based on one or two float parameters. It replaces the anti-pattern of "Walk → slow walk → fast walk → run → sprint" with separate transitions.

### 1D Blend Tree
One parameter (e.g., Speed) blends between clips:

```
Speed = 0.0  →  Idle clip
Speed = 2.0  →  Walk clip
Speed = 5.0  →  Run clip  
Speed = 8.0  →  Sprint clip
```
Unity interpolates between adjacent clips based on the Speed value. At Speed = 3.5, you get 50% Walk + 50% Run.

### 2D Blend Tree (Freeform Directional)
Two parameters (e.g., Speed and Direction) blend a 2D grid:

```
             Forward
                |
  Strafe L  ──  0  ──  Strafe R
                |
             Backward
```

Clips: forward walk, backward walk, strafe left, strafe right, diagonal combinations. Unity uses 2D Cartesian or 2D Freeform Directional interpolation.

### Direct Blend Tree
Manually set blend weights for each child clip. Used for additive expressions, facial blending.

> 🎯 **Exam Tip:** The most common 2D blend tree mistake is not normalizing axis ranges. If Speed goes 0–10 and Direction goes -1 to 1, the interpolation will favor the Speed axis. Both axes should be normalized to the same scale (e.g., -1 to 1 using `Mathf.Clamp`) before feeding into the blend tree.

---

## 🏃 Root Motion vs. In-Place Animation

### Root Motion
The root bone's position/rotation in the animation clip drives the character's Transform in world space. Unity extracts this delta per frame and applies it to the character's position.

**Advantages:** Animation and movement are inherently synchronized — foot sliding is impossible if the animation matches the movement speed.
**Disadvantages:** Requires physics/NavMesh integration care; the Animator and the physics/controller must agree on who owns the position.

**Root Motion with a CharacterController:**
Override `OnAnimatorMove()` in a script and apply `animator.rootPosition` and `animator.rootRotation` to the character controller yourself.

### In-Place Animation
Root Transform Position (XZ) is baked into the pose; the root stays at origin. The movement code (CharacterController, Rigidbody, NavMeshAgent) drives the world position independently.

**Advantages:** Easy to control speed from code; no conflict with physics.
**Disadvantages:** Risk of foot sliding if animation speed and code speed don't match; requires matching the animation speed to the code-driven speed.

| | Root Motion | In-Place |
|-|------------|---------|
| Position driven by | Animation clip root bone | Code (CharacterController, NavMesh) |
| Foot sliding risk | Low (animation controls speed) | High (if anim and code speed mismatch) |
| NavMesh compatibility | Requires `OnAnimatorMove()` | Natural — NavMesh drives position |
| Typical use | Action games (precise feel) | RPGs, strategy, open-world NPCs |

---

## 🎭 Animation Layers and Avatar Masks

**Layers** in the Animator Controller are independent state machines that run simultaneously. The bottom layer (Layer 0) is the base. Upper layers either **override** or **additively blend** on top of lower layers.

### Override Layer
Replaces the lower layer's pose for bones specified in the Avatar Mask. Example: Layer 0 = full body locomotion; Layer 1 (override) = upper body aiming; with an Avatar Mask that includes only the upper body bones.

### Additive Layer
Adds the delta of the pose to the lower layer's pose. Used for:
- Leaning (add a lean pose on top of walk/run)
- Breathing (add subtle breathing motion on top of all states)
- Facial emotions on top of full-body animation

### Avatar Mask
An Avatar Mask defines *which bones* a layer affects. Create one: `Assets → Create → Avatar Mask`. In the Humanoid view, click bones to include/exclude. Apply it to a layer in the Layers panel of the Animator window.

> 🎯 **Exam Tip:** You can create an Avatar Mask for a Generic rig using the Transform selection (tick specific bones). The Humanoid body view is only available for Humanoid rigs.

---

## 📣 Animation Events

An **Animation Event** fires a C# method on a component attached to the same GameObject at a specific frame in the clip. Use cases:
- Play a footstep sound
- Activate a weapon hitbox (start attack collision)
- Spawn a particle system
- Trigger a haptic feedback call

### Adding Events in the Animation Window
1. Open the Animation window (`Window → Animation → Animation`)
2. Select the clip
3. Navigate to the frame
4. Click the Event icon (speech bubble) at the top of the timeline → fill in the function name

### Adding Events in the Import Inspector
For FBX clips: Inspector → Animation tab → select the clip → Events section → add events with frame number and function name.

### The Event Callback
```csharp
public class PlayerAnimationEvents : MonoBehaviour {
    [SerializeField] AudioSource footstepAudio;
    
    // Called by Animation Event at footstep frames
    void FootstepLeft() {
        footstepAudio.PlayOneShot(footstepAudio.clip);
    }
    
    // Called by Animation Event when attack swing begins
    void EnableHitbox() {
        weaponHitbox.enabled = true;
    }
}
```

> 🚨 **Trap on the exam:** Animation Events fire on the **main thread**. If your callback does heavy work (file I/O, physics queries, new asset loads), it will stall the frame. Keep callbacks lightweight; dispatch heavy work to coroutines or async methods.

---

## 🎯 Unity Animator C# API

```csharp
// Get reference
Animator anim = GetComponent<Animator>();

// Set parameters
anim.SetFloat("Speed", currentSpeed);
anim.SetBool("IsGrounded", isGrounded);
anim.SetInteger("WeaponIndex", 2);
anim.SetTrigger("Jump");       // fires trigger; auto-resets

// Reset a trigger (if you need to cancel it)
anim.ResetTrigger("Jump");

// Query current state
AnimatorStateInfo stateInfo = anim.GetCurrentAnimatorStateInfo(0); // layer 0
bool isPlayingRun = stateInfo.IsName("Run");
float normalizedTime = stateInfo.normalizedTime; // 0.0 to 1.0 within the clip

// IK (must be called in OnAnimatorIK, after enabling IK Pass on the layer)
void OnAnimatorIK(int layerIndex) {
    anim.SetIKPositionWeight(AvatarIKGoal.LeftFoot, 1f);
    anim.SetIKPosition(AvatarIKGoal.LeftFoot, leftFootTarget.position);
}
```

---

## 🦶 Foot IK: Making Characters Stand on Uneven Ground

Unity's Humanoid rig supports built-in foot IK via the Animator's IK Pass. Enable it: Layers panel → layer → gear icon → enable IK Pass.

Then in a MonoBehaviour attached to the same GameObject:

```csharp
void OnAnimatorIK(int layerIndex) {
    // Left foot
    RaycastHit hit;
    if (Physics.Raycast(leftFootBone.position + Vector3.up, Vector3.down, out hit, 2f, groundLayer)) {
        animator.SetIKPositionWeight(AvatarIKGoal.LeftFoot, 1f);
        animator.SetIKRotationWeight(AvatarIKGoal.LeftFoot, 1f);
        animator.SetIKPosition(AvatarIKGoal.LeftFoot, hit.point + Vector3.up * footOffset);
        animator.SetIKRotation(AvatarIKGoal.LeftFoot, Quaternion.LookRotation(transform.forward, hit.normal));
    }
    // Same for right foot...
}
```

---

## 🎮 Case Study: Riot Games' Teamfight Tactics — Unity Animator at Scale

When Riot Games built Teamfight Tactics (TFT) in 2019, they faced a specific Unity Animator challenge: they needed each champion's animation to match the same champion in League of Legends (which runs on a custom C++ engine), but now implemented in Unity's Animator Controller. Their solution was a **shared locomotion sub-state machine** — a single Animator Controller sub-machine shared across all champions, with champion-specific abilities layered as override layers above it.

The architecture Riot settled on for TFT:
- **Layer 0**: Universal locomotion (Idle, Walk, Run, Death) — same Animator Controller for every champion
- **Layer 1**: Champion ability override — champion-specific ability animations on an upper-body Avatar Mask
- **Layer 2**: Additive facial/expression layer — blend shapes driven by game events

This modular approach let a two-person animation team ship 58 champions in TFT's first season, each feeling distinct, without maintaining 58 separate state machines.

---

## 🎮 Case Study: Hollow Knight — Unity Animator + Spine 2D Hybrid

Team Cherry used Unity's Animator Controller as the **state machine logic layer** for Hollow Knight's boss fights, while the actual animation data lived in Spine 2D's runtime. The Animator Controller's parameters (Speed, IsGrounded, IsAttacking) drove the Spine animation state changes via a bridge script that translated Unity parameters to Spine track animations.

This hybrid approach is common in 2D games: Unity's Animator Controller provides the robust state machine editor and parameter system; Spine's runtime provides the high-quality skeletal animation and mesh deformation. The animator works in Spine; the programmer works in Unity's Animator window; both systems stay in sync via a bridge component.

> ⚠️ **Performance trap:** When using Spine-Unity with Unity's Animator Controller (via SkeletonMecanim), the bridge serializes and deserializes pose data every frame. For characters with high bone counts, this per-frame bridge cost can exceed the direct Spine animation cost. Profile before committing to this hybrid in performance-critical scenarios.

---

## 🎮 Case Study: Dead Cells — Custom Engine, Spine Runtime

Motion Twin's Dead Cells is technically unusual: it uses a **custom game engine** (not Unity or Unreal) with the Spine C runtime integrated directly. This means Dead Cells does not have a Unity Animator Controller — it has a custom state machine implemented in their engine's scripting language.

The lesson for Unity animators: the **conceptual architecture** of game animation — states, transitions, parameters, blend weights — is universal across engines. The tool changes; the underlying state machine design does not. A developer who deeply understands Unity's Animator Controller can transfer that mental model to any engine's animation system in days.

---

## 📊 Unity Animator Controller State Machine Comparison

| Architecture | States | Transitions | Best For | Drawback |
|---|---|---|---|---|
| Flat FSM | All in root state machine | Many direct connections | Simple characters (< 10 states) | Becomes spaghetti above 15 states |
| Hub-and-spoke | Central locomotion hub, actions as branches | N transitions from hub | Most action games | Hub state must handle many AnyState sources |
| Hierarchical (Sub-State Machines) | States nested in sub-machines | Fewer visible connections | Complex locomotion (grounded/airborne/climbing) | Harder to debug (need to enter sub-machine) |
| Layered | Separate state machines per layer | Each layer independent | Characters with independent body parts | Layer count multiplies animator evaluation cost |
| Direct Blend Tree | No transitions — direct weight control | N/A | Facial blending, morph targets | Not suitable for action states |

---

## 🎯 Exam Callouts: What the Test Checks

> 🎯 **What the exam tests 1:** What does "Has Exit Time" do in a Unity transition? It fires the transition automatically when the clip reaches the specified normalized time (default 0.75). It does NOT wait for the clip to finish — it fires at 75% through.

> 🎯 **What the exam tests 2:** What is the difference between a Generic and Humanoid rig? Humanoid supports retargeting (sharing clips across different rigs) and built-in IK (`OnAnimatorIK`). Generic is rig-specific but has lower overhead and is required for non-biped characters.

> 🎯 **What the exam tests 3:** What method must you override to manually apply Root Motion with a CharacterController? `OnAnimatorMove()` — inside it, apply `animator.rootPosition` and `animator.rootRotation` to the controller.

> 🎯 **What the exam tests 4:** A Trigger parameter is set but the character never transitions. What is the most likely cause? The transition's condition is correct, but the **transition order in the Animator** has a higher-priority transition consuming the trigger first, or the trigger resets before the condition is checked.

> 🎯 **What the exam tests 5:** What is the purpose of an Avatar Mask in Unity? It defines which bones a layer's state machine affects. Upper-body Avatar Mask allows Layer 1 (aiming) to control only the upper body while Layer 0 (locomotion) continues controlling the full body.

> 🎯 **What the exam tests 6:** Can Animation Events call methods on scripts on different GameObjects? No — Animation Events call methods on MonoBehaviour components attached to the **same GameObject** as the Animator.

> 🎯 **What the exam tests 7:** What is the "Interruption Source: Current State" setting on a transition? It allows other transitions leaving the current (source) state to interrupt the currently-in-progress blend. Used for responsive dodge/roll actions.

> 🎯 **What the exam tests 8:** What is the correct way to implement foot IK on uneven terrain in Unity? Enable IK Pass on the layer, then implement `OnAnimatorIK(int layerIndex)` in a MonoBehaviour. Use `Physics.Raycast` downward from each foot's position; set `SetIKPositionWeight`, `SetIKPosition`, `SetIKRotationWeight`, `SetIKRotation` for each foot.

> 🎯 **What the exam tests 9:** When should you use Bake Into Pose for Root Transform Position (XZ)? When you want In-Place animation — the clip plays in place and the character controller (NavMeshAgent, CharacterController, Rigidbody) drives world position. Use "Based On Original" if the animation's root motion should drive world position.

> 🎯 **What the exam tests 10:** What is a Direct Blend Tree used for? Manual weight control over each child clip — primarily for facial blend shapes, morph targets, and additive expression blending where you need explicit weight per clip rather than automatic interpolation.

---

## ⚠️ Common Misconceptions

> **Misconception 1: "The Animator Controller IS the animation."**
> Reality: The Animator Controller is the *state machine* that orchestrates clips. The clips are separate assets. The Controller has no animation data itself — it only describes logic.

> **Misconception 2: "Humanoid is always better than Generic."**
> Reality: Humanoid has retargeting cost. For non-biped rigs, Generic is more performant and precise. For vehicles or machines, always use Generic.

> **Misconception 3: "Has Exit Time means the clip finishes before transitioning."**
> Reality: Has Exit Time fires at the *exit time fraction*, which defaults to 0.75 (75% through the clip). Set it to 1.0 if you need the clip to complete.

> **Misconception 4: "Layers always blend additively."**
> Reality: Layers can be Override (replace) or Additive (add delta). Override is the default for character layers; Additive is used for supplementary motion like breathing or leaning.

---

## 📊 Summary Tables

### Blend Tree Types

| Type | Parameters | Use Case |
|------|-----------|---------|
| 1D | 1 float | Speed-based locomotion (idle → walk → run) |
| 2D Simple Directional | 2 floats | 8-directional movement |
| 2D Freeform Directional | 2 floats | Radial blending (motion capture locomotion) |
| 2D Freeform Cartesian | 2 floats | Grid-based blending (strafe + lean) |
| Direct | Manual weights | Facial blend shapes, additive expressions |

### Layer Blend Modes

| Mode | Effect | Use Case |
|------|--------|---------|
| Override | Replaces base layer for masked bones | Upper body aim layer, upper body attack |
| Additive | Adds pose delta on top of base | Breathing, lean, facial emotion |

---

## 🔗 Next Steps

**Next Module:** [Module 3: Unreal Animation Blueprint →](../Module-03-Unreal-Animation-Blueprint/Reading.md)

We move to Unreal Engine's animation system — the Animation Blueprint, Blend Spaces, Control Rig, and the Sequencer for cinematics.

---

## 📚 Further Reading

- 🔗 [Unity Animation Manual — Animator Controller](https://docs.unity3d.com/Manual/class-AnimatorController.html)
- 🔗 [Unity Manual — Blend Trees](https://docs.unity3d.com/Manual/class-BlendTree.html)
- 🔗 [Unity Manual — Root Motion](https://docs.unity3d.com/Manual/RootMotion.html)
- 🔗 [Unity Manual — Avatar Masks](https://docs.unity3d.com/Manual/class-AvatarMask.html)
- 🔗 [Mixamo — Free Rigged Characters and Animations](https://www.mixamo.com)
- 📄 Jason Weimann — Unity Animator Controller tutorials (YouTube: @JasonWeimann)
- 📄 Zigurous — Unity beginner and intermediate animation tutorials (YouTube: @Zigurous)
