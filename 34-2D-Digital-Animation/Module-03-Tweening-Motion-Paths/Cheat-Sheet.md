---
permalink: /34-2D-Digital-Animation/Module-03-Tweening-Motion-Paths/Cheat-Sheet/
title: "Module 3 Cheat Sheet: Tweening & Motion Paths"
---

# ⚡ Module 3 Cheat Sheet — Tweening & Motion Paths

---

## Classic vs. Motion Tween

| Feature | Classic Tween | Motion Tween |
|---------|--------------|-------------|
| Requires | 2 keyframes, same layer | Symbol + property keyframes |
| Easing | Simple slider (−100 to 100) | Motion Editor (per-property bezier) |
| Motion path | Guide layer | Auto-generated bezier |
| Legacy support | Yes | No (CC only) |
| Best for | Simple motion | Complex timing control |

---

## Motion Editor Curve Reading

| Curve Shape | Meaning |
|-------------|---------|
| Steep section | Fast movement |
| Flat section | Hold or very slow |
| S-curve | Ease In → Ease Out |
| Straight diagonal | Linear (constant speed) |

---

## Ease Presets — Quick Pick

| Preset | Use For |
|--------|---------|
| **Ease In** | Object starting from rest |
| **Ease Out** | Object decelerating to stop |
| **Ease In-Out** | Most natural character motion |
| **Bounce Out** | Ball, dropped objects |
| **Elastic Out** | Springs, coils, antenna wobble |
| **Back Out** | Logo that overshoots then settles |

---

## Fixing Floaty Tweens

| Problem | Fix |
|---------|-----|
| Linear easing | Add Ease In + Ease Out |
| No holds | Add 4–6 frame hold at key poses |
| No overshoot | Extend tween past destination, return |
| All properties same rate | Edit per-property in Motion Editor |
| No weight | Add slight Scale Y squash at speed peak |

---

## Motion Path Setup

- **Motion Tween:** Auto-generated; edit with Selection Tool
- **Classic Tween:** Requires Motion Guide Layer
- **Orient to Path:** Auto-rotates symbol to face travel direction
- **Fix bad orientation:** Adjust symbol's drawn facing direction relative to registration point

---

## Hold Frame Math

- 1 second at 24fps = 24 frames
- 0.5 second hold = 12 frames
- 0.25 second hold = 6 frames
- 1 second at 30fps = 30 frames

---

## Anticipation via Tween Recipe

```
Frame 1:  Start pose
Frame 6:  Anticipation (move OPPOSITE to main action)
Frame 14: Action end pose
          → Tween 6→14: Ease In (fast snap)
```

---

## Classic Tween Timeline Indicator

- Success: Arrow on **purple** background
- Broken: Dashed line (check for missing symbol or keyframe)
