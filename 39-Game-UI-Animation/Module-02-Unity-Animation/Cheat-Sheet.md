---
title: "Module 2 Cheat Sheet: Unity Animation System"
---

# 🗒️ Module 2 Cheat Sheet: Unity Animation System

## 🦴 Rig Types

| Type | Use For | Retarget? | IK? |
|------|---------|-----------|-----|
| **Humanoid** | Biped characters | ✅ Yes | ✅ Yes |
| **Generic** | Quads, vehicles, custom | ❌ No | Custom scripts |
| Legacy | Old Unity projects | ❌ No | ❌ No |

---

## 🔁 State Machine Parameter Types

| Type | Use Case | Auto-Resets? |
|------|----------|-------------|
| **Float** | Speed, Direction | No |
| **Int** | WeaponIndex, AttackType | No |
| **Bool** | IsGrounded, IsAiming | No, set manually |
| **Trigger** | Jump, Attack, Roll | **Yes, consumed** |

> Key rule: Use **Trigger** for one-shot actions, **Bool** for persistent states.

---

## 🌳 Blend Tree Types

| Type | Params | Use Case |
|------|--------|---------|
| 1D | 1 float | Idle → Walk → Run by Speed |
| 2D Simple Directional | 2 floats | 4/8-directional movement |
| 2D Freeform Directional | 2 floats | Motion-capture radial blending |
| 2D Freeform Cartesian | 2 floats | Grid-based (strafe + lean) |
| Direct | Manual weights | Facial blend shapes |

---

## 🏃 Root Motion vs. In-Place

| | Root Motion | In-Place |
|-|------------|---------|
| Position driven by | Animation clip | Code (CC, NavMesh) |
| Foot slide risk | Low | High (if speed mismatch) |
| NavMesh | Needs `OnAnimatorMove()` | Natural |
| Use for | Action games, precise feel | RPG/NPC/open world |

**Bake Into Pose** in FBX import = In-Place (root stays at origin)

---

## 🎭 Layer Blend Modes

| Mode | Effect | Typical Use |
|------|--------|------------|
| **Override** | Replaces base for masked bones | Upper body aim/attack |
| **Additive** | Adds pose delta to base | Breathing, lean, emotion |

---

## ⚙️ Key Transition Settings

| Setting | Purpose |
|---------|---------|
| **Has Exit Time** | Auto-fires transition at exit time fraction |
| **Exit Time** | Fraction of clip (0.75 = 75% through), NOT seconds |
| **Transition Duration** | Crossfade blend time in seconds |
| **Transition Offset** | Start point in destination clip |
| **Interruption Source** | Whether competing transitions can interrupt |

---

## 📐 Key C# API

```csharp
anim.SetFloat("Speed", speed);
anim.SetBool("IsGrounded", true);
anim.SetTrigger("Jump");           // auto-resets
anim.ResetTrigger("Jump");         // cancel unsent trigger

AnimatorStateInfo si = anim.GetCurrentAnimatorStateInfo(0);
si.IsName("Run");                  // check state name
si.normalizedTime;                 // 0.0–1.0 in clip

// Root Motion manual apply:
void OnAnimatorMove() {
    controller.Move(anim.rootPosition - transform.position);
}

// Foot IK:
void OnAnimatorIK(int layer) {
    anim.SetIKPositionWeight(AvatarIKGoal.LeftFoot, 1f);
    anim.SetIKPosition(AvatarIKGoal.LeftFoot, targetPos);
}
```

---

## 📣 Animation Events, Quick Facts

- Fire at specific **frames** within a clip
- Call methods on **MonoBehaviour** components on the **same GameObject**
- Run on the **main thread**, keep callbacks lightweight
- Add via: Animation window → Events row, or FBX import Inspector → Animation → Events

---

## ⚠️ Common Traps

| Trap | Reality |
|------|---------|
| Has Exit Time = plays to completion | No, fires at exit time fraction (default 0.75) |
| Triggers stay set | No, consumed after one valid transition |
| Humanoid always better | No, Generic has less overhead for custom rigs |
| Additive vs Override confusion | Additive ADDS delta; Override REPLACES |
| IK in Update() | Wrong, must be in OnAnimatorIK() |
| Root Motion + NavMesh | Fight each other; use OnAnimatorMove() or In-Place |

---

## 📌 Key Nodes in Animator

| Node | Purpose |
|------|---------|
| **Entry** | Default starting state |
| **Any State** | Source of transitions that can fire from any state |
| **Exit** | Exits a Sub-State Machine back to parent |
| **Default state** (orange) | First state that plays on Animator Enable |

---

## 📊 Animator Controller Architecture Comparison

| Architecture | States | Best For | Drawback |
|---|---|---|---|
| Flat FSM | All in root | Simple chars (< 10 states) | Spaghetti above 15 states |
| Hub-and-spoke | Central hub → action branches | Most action games | Hub must handle many AnyState sources |
| Hierarchical | Sub-State Machines nested | Complex locomotion (Grounded/Airborne) | Harder to debug |
| Layered | Independent per-layer FSMs | Independent body-part control | Multiplies evaluation cost |

---

## 🏃 FBX Import Rig Settings Quick Reference

| Setting | Option | When to Use |
|---|---|---|
| Animation Type | Humanoid | Biped characters; retargeting needed |
| Animation Type | Generic | Quads, vehicles, custom rigs |
| Root Transform Pos (XZ) | Bake Into Pose | In-Place animation; code drives position |
| Root Transform Pos (XZ) | Based On Original | Root Motion drives world position |
| Loop Time | On | Looping clips (idle, walk, run) |
| Loop Time | Off | One-shot clips (jump, attack, die) |

---

## ⚡ Animator C# API, Full Reference

```csharp
// Set parameters
anim.SetFloat("Speed", speed);           // continuous value
anim.SetBool("IsGrounded", isGrounded);  // persistent state
anim.SetInteger("WeaponIndex", 2);       // discrete value
anim.SetTrigger("Jump");                 // one-shot, auto-resets
anim.ResetTrigger("Jump");              // cancel before consumed

// Query state
AnimatorStateInfo si = anim.GetCurrentAnimatorStateInfo(0);
si.IsName("Run");          // check active state by name
si.IsTag("Locomotion");    // check state tag
si.normalizedTime;         // 0.0–1.0 in current clip
si.length;                 // clip length in seconds
anim.IsInTransition(0);   // true if currently blending

// Layer weight
anim.SetLayerWeight(1, 1f);  // set layer 1 to full weight

// Root Motion override
void OnAnimatorMove() {
    controller.Move(anim.rootPosition - transform.position);
    transform.rotation = anim.rootRotation;
}

// Foot IK
void OnAnimatorIK(int layer) {
    anim.SetIKPositionWeight(AvatarIKGoal.LeftFoot, 1f);
    anim.SetIKPosition(AvatarIKGoal.LeftFoot, leftFootTarget);
    anim.SetIKRotationWeight(AvatarIKGoal.LeftFoot, 1f);
    anim.SetIKRotation(AvatarIKGoal.LeftFoot, leftFootRotation);
    anim.SetLookAtPosition(headLookTarget);
    anim.SetLookAtWeight(1f);
}
```

---

## 🎮 Transition Settings Decision Guide

| Action Type | Has Exit Time | Transition Duration | Interruption Source |
|---|---|---|---|
| Idle → Walk | No | 0.15–0.20s | Current State |
| Walk → Run | No | 0.10–0.15s | Current State |
| Any → Dodge | No | 0.04–0.07s | Current State |
| Attack (committed) | Yes (0.9) | 0.05s | None |
| Any → Death | No | 0.10s | None (death is terminal) |
| Jump Start → Loop | Yes (0.8) | 0.10s | None |
| Land → Idle | Yes (1.0) | 0.15s | Current State |
