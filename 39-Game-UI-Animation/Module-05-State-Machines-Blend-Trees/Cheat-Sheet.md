---
title: "Module 5 Cheat Sheet: State Machines & Blend Trees"
---

# 🗒️ Module 5 Cheat Sheet: State Machines & Blend Trees

## 🎯 The 3 Factors of Animation Responsiveness

1. **Transition latency** — How frequently conditions are checked (every frame = most responsive)
2. **Blend duration** — How long the crossfade takes (shorter = snappier)
3. **Interrupt conditions** — Whether a new input can cancel an in-progress blend

---

## 🔀 Unity Interruption Source

| Setting | Who Can Interrupt |
|---------|------------------|
| None | Nobody — blend must complete |
| **Current State** | Transitions from the **source** state |
| Next State | Transitions from the **destination** state |
| Current Then Next | Check current first, then next |

> Dodge / roll → use **Current State** (responsive)
> Heavy attack → use **None** (committed)

---

## ⚡ AnyState Transition Rules

- Use for: Death, Knockdown, Stagger, Dodge (highest priority actions)
- **Danger**: transition loops if trigger condition stays true in target state
- **Fix**: use Trigger parameters (auto-reset) or guard conditions
- **Priority**: top of transition list = highest priority

---

## 🌳 Blend Tree Design

### 1D Speed Blend
```
Speed 0.0 → Idle
Speed 1.5 → Walk
Speed 5.0 → Run
Speed 8.0 → Sprint
```

### 2D Directional Blend
```
Axes: SpeedX (strafe), SpeedY (forward/back)
Clips: Forward, Backward, Strafe_L, Strafe_R + diagonals
Mode: Freeform Directional (for motion capture)
```

**Lerp Speed** (blend position smoothing): 8–12 units/second typical
- Too low → instant snapping (good for fast action)
- Too high → mushy delayed response

---

## 🎭 Layer Types: Override vs. Additive

| | Override | Additive |
|-|----------|---------|
| Clip authored as | Full pose | Delta from reference |
| Effect | Replaces base for masked bones | Adds delta to base |
| Use for | Aiming, attacking | Breathing, lean, emotion |
| Layer weight | On/off control | Effect strength control |

---

## 🏃 Minimum Viable Locomotion FSM

```
Grounded:     Idle → Walk → Run (2D Blend Tree)
Airborne:     Jump Rise → Jump Apex → Jump Fall
Landing:      Soft Landing / Hard Landing (time-based exit)
Coyote Time:  Grace window 0.1–0.15s at ledge before fall state
```

---

## 📐 Tuning Reference

| Parameter | Responsive | Smooth | Heavy/Committed |
|-----------|-----------|--------|-----------------|
| Blend time | 0.05–0.08s | 0.1–0.2s | 0.2–0.4s |
| Lerp speed | 12+ u/s | 8–12 u/s | 4–6 u/s |
| Coyote time | 0.1–0.15s | — | — |
| Hit stop | 2–4 frames | 4–8 frames | 8–16 frames |

---

## 📊 State Machine Patterns

| Pattern | Use Case |
|---------|---------|
| Hub FSM | Most games: central idle/locomotion, branches to actions |
| Hierarchical / Sub-State | Complex combat: sub-machines per weapon/stance |
| Layered | Body + upper body on separate layers |
| Linear FSM | Cutscenes, dialogue sequences |

---

## ⚠️ Common Traps

| Trap | Fix |
|------|-----|
| AnyState loop | Use Trigger (auto-reset) + guard conditions |
| Long blend = smooth | Long blend = laggy — tune per transition priority |
| Additive uses full pose | Author additive clips as deltas from reference pose |
| Freeform 2D for stylized anim | Use Simple Directional if you control exact directions |
| Coyote time not animated | Add edge-peek state; don't snap walk → fall |
