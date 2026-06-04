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

## 🔄 Film vs. Game Animation — Core Comparison

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
| **Bool** | Persistent state (IsGrounded, IsAiming) | No — stays until code sets it |
| **Float** | Continuous values (Speed, Direction) | No |
| **Integer** | Discrete values (WeaponIndex) | No |
| **Trigger** | One-shot actions (Jump, Attack, Roll) | **Yes — consumed on transition** |

---

## 🎮 Game Feel Framework (Swink)

1. **Input** — Control scheme + dead zone + button buffer
2. **Response** — Character reacts within the 16ms budget
3. **Context** — Environment confirms the action (screen shake, VFX, sound)

---

## 💥 Hit Stop Reference

| Game | Hit Stop Duration | Notes |
|------|------------------|-------|
| Hades (Supergiant) | 4–8 frames | Exaggerated for top-down readability |
| DOOM Eternal | 2–4 frames | Fast, violent — shorter for pace |
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
| LOD | Level of Detail — simplified assets at distance |
| IK | Inverse Kinematics — target-driven pose solving |

---

## 📌 Studio Case Studies

| Game | Studio | Key Philosophy |
|------|--------|---------------|
| Hades | Supergiant Games | Readability, exaggeration, hit stop 4–8f |
| DOOM Eternal | id Software | Momentum, motion matching, interrupt |
| Last of Us II | Naughty Dog | Expressive blend layers, complex FSM |
| Dead Cells | Motion Twin | Spine 2D, fast-feel 2D action |
