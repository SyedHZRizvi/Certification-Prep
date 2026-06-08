---
title: "Module 1 Cheat Sheet: Game vs. Film Animation"
---

# 🗒️ Module 1 Cheat Sheet: Game vs. Film Animation

## ⏱️ The Frame Budget

| Target FPS | ms per frame |
|-----------|-------------|
| 60 fps | **16.67 ms** |
| 30 fps | 33.33 ms |
| 120 fps | 8.33 ms |

**Animation system budget inside 16.67ms:** ~1–3ms (bone skinning, blend weights, IK)

---

## 🔄 Film vs. Game Animation, Core Comparison

| Factor | Film | Game |
|--------|------|------|
| Playback | Linear timeline | State machine (runtime) |
| Duration | Fixed by animator | Interrupted by player input |
| Transition | Edit cut | Weighted blend |
| Frame budget | Unlimited | 16.67ms at 60fps |
| Audience role | Passive viewer | Active controller |
| Failure mode | Visual artifact | Input lag / pop / jitter |

---

## 🔁 State Machine Parameter Types (Unity)

| Type | Use Case | Resets? |
|------|----------|---------|
| **Bool** | Persistent state (IsGrounded, IsAiming) | No, stays until code sets it |
| **Float** | Continuous values (Speed, Direction) | No |
| **Integer** | Discrete values (WeaponIndex) | No |
| **Trigger** | One-shot actions (Jump, Attack, Roll) | **Yes, consumed on transition** |

---

## 🎮 Game Feel Framework (Swink)

1. **Input**, Control scheme + dead zone + button buffer
2. **Response**, Character reacts within the 16ms budget
3. **Context**, Environment confirms the action (screen shake, VFX, sound)

---

## 💥 Hit Stop Reference

| Game | Hit Stop Duration | Notes |
|------|------------------|-------|
| Hades (Supergiant) | 4–8 frames | Exaggerated for top-down readability |
| DOOM Eternal | 2–4 frames | Fast, violent, shorter for pace |
| Street Fighter II | 10–16 frames | Origin of the technique (Capcom, 1991) |

---

## 🗜️ Compression Techniques

| Technique | What It Compresses | Result |
|-----------|-------------------|--------|
| Normal map baking | Surface geometry | Low-poly mesh looks high-res |
| Bone limit (64/128) | Rig complexity | GPU skinning stays on GPU |
| Animation LOD | Bone count at distance | CPU freed for close characters |
| Update rate reduction | Off-screen characters | 15–30fps for distant chars |

---

## ⚠️ Common Traps

- **Root Motion + NavMesh** → they fight each other; disable one or use In-Place animation with code controller
- **Trigger vs Bool** → triggers for one-shots; bools for states
- **0.25s blend everywhere** → wrong; tune per transition (dodge roll needs < 0.05s)
- **Hit stop = bug** → No! It is a deliberate design technique

---

## 📐 Key Vocabulary

| Term | Definition |
|------|-----------|
| State Machine | Graph of animation states connected by condition-driven transitions |
| Blend Tree | Node that blends multiple clips by a parameter (Speed, Direction) |
| Root Motion | Position/rotation driven by the animation clip's root bone |
| AnyState | Unity node that allows transitions from any active state |
| Animation Event | Callback fired at a specific frame within a clip |
| Motion Matching | Database-driven pose selection by velocity (DOOM Eternal, FIFA) |
| Hit Stop | Deliberate brief freeze of attacker + defender on impact |
| Game Feel | Tactile, kinesthetic sensation of controlling a virtual object |
| LOD | Level of Detail, simplified assets at distance |
| IK | Inverse Kinematics, target-driven pose solving |

---

## 📌 Studio Case Studies

| Game | Studio | Key Philosophy | Bone/Animation Detail |
|------|--------|---------------|----------------------|
| Hades | Supergiant Games | Readability, exaggeration, hit stop 4–8f | 2-frame minimum enemy windup; Spine 2D |
| DOOM Eternal | id Software | Momentum, motion matching, interruption | < 2ms animation budget at 60fps; minimal IK |
| Hollow Knight | Team Cherry | Indie budget philosophy, ≤ 30 bones | 28-bone Knight; mesh deform for cloak |
| Dead Cells | Motion Twin | Low bone count for crisp silhouette | 15–25 bones per enemy; custom C runtime |
| Valorant | Riot Games | Competitive fairness; silhouette clarity | 16ms input lag budget; hitbox/visual sync |
| The Last of Us II | Naughty Dog | Seamless cinematic-to-gameplay transitions | Pose matching at transition; 0.1–0.25s blend |

---

## 📊 Platform Performance Budget Reference

| Platform | FPS Target | Frame Budget | Anim Budget | GPU Bone Influences |
|---|---|---|---|---|
| PC (high-end) | 60–120 | 8.33–16.67ms | 1–3ms | 4 |
| PS5 / Xbox Series X | 60–120 | 8.33–16.67ms | 1–2ms | 4 |
| PS4 / Xbox One | 30–60 | 16.67–33.33ms | 2–4ms | 4 |
| Nintendo Switch | 30–60 | 16.67–33.33ms | 2–3ms | 4 |
| iOS (modern) | 60 | 16.67ms | 1–2ms | **2** |
| Android (mid-range) | 60 | 16.67ms | 2–4ms | **2** |
| Web (desktop) | 60 | 16.67ms | N/A | N/A |

> **Mobile rule:** Max **2 bone influences per vertex** on iOS/Android. Exceeding this drops to a slower GPU skinning path.

---

## 🎮 Game Feel, Quantified Parameters

| Parameter | Typical Range | Too Low Effect | Too High Effect |
|-----------|--------------|----------------|-----------------|
| Hit stop duration | 2–12 frames | Lacks impact weight | Interrupts game flow |
| Transition blend time | 0.05–0.25s | Visible pop | Laggy, floaty |
| Coyote time window | 0.1–0.15s | Misses ledge jumps | Feels like floating |
| Enemy windup (Hades min) | 2 frames min | Feels cheap/unfair | Too easy to read |
| Input-to-response latency (Valorant) | < 16ms |, | Competitive disadvantage |

---

## 🔁 Motion Matching vs. State Machine

| | State Machine | Motion Matching |
|--|--------------|----------------|
| How clips play | Pre-scripted transitions | Database: best pose match per frame |
| Input | Parameters trigger transitions | Velocity + direction drive pose selection |
| Used in | Most games | DOOM Eternal, FIFA, Assassin's Creed |
| Complexity | Manageable for small teams | Requires large motion capture database |
| Foot sliding | Possible if clip speed ≠ move speed | Minimal, pose is velocity-matched |

> **Key exam fact:** Motion matching databases typically require 15–60 minutes of recorded motion capture per character type to provide sufficient pose coverage at all velocities and directions.

*Module complete. See Reading.md for full reference.*
