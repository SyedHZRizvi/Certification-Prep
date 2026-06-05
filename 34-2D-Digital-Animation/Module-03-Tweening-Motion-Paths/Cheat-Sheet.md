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
| Motion path | Guide layer (separate) | Auto-generated bezier (editable) |
| Legacy support | Yes | No (CC only) |
| Timeline color | Purple span | Blue/teal span |
| Best for | Simple motion, legacy projects | Complex timing control |
| Shape morphing | Shape Tween (3rd type) | N/A |

---

## Classic Tween Ease Slider — MEMORIZE DIRECTION

```
Positive (+100) = Ease OUT = Starts fast → slows to end
Negative (−100) = Ease IN  = Starts slow → speeds to end
Zero (0)        = Linear   = Constant speed
```

> 🚨 This is counterintuitive — positive = OUT, not IN. Frequently tested.

---

## Motion Editor Curve Reading

| Curve Shape | Meaning |
|-------------|---------|
| Steep section | Fast movement in that property |
| Flat section | Hold or very slow |
| S-curve | Ease In → Ease Out |
| Straight diagonal | Linear (constant speed) |
| Flat at start, steep in middle | Ease In (slow start, fast end) |

---

## Ease Presets — Quick Pick

| Preset | Use For | Avoid For |
|--------|---------|-----------|
| **Ease In** | Object starting from rest | Casual organic motion |
| **Ease Out** | Object decelerating to stop | Fast snappy action |
| **Ease In-Out** | Most natural character motion | Dead-snappy action |
| **Sine In-Out** | Gentle, organic character | Rigid mechanical objects |
| **Bounce Out** | Ball, dropped objects, impacts | Human arm motion |
| **Elastic Out** | Springs, coils, antenna | Primary body movement |
| **Back Out** | Logo that overshoots then settles | Character body arcs |

---

## Fixing Floaty Tweens

| Problem | Fix |
|---------|-----|
| Linear easing | Add Ease In + Ease Out |
| No holds | Add 4–6 frame hold at key poses |
| No overshoot | Extend tween past destination, return |
| All properties same rate | Edit per-property in Motion Editor |
| No weight | Add slight Scale Y squash at speed peak |
| Arrives and instantly leaves | Add 2-frame minimum hold at every key pose |

---

## Motion Path Setup

- **Motion Tween:** Auto-generated; edit with Selection Tool by dragging segments
- **Classic Tween:** Requires Motion Guide Layer (never exported)
- **Orient to Path:** Auto-rotates symbol to face travel direction
- **Fix bad orientation:** Adjust symbol's drawn facing direction relative to registration point

---

## Hold Frame Duration Guide

| Hold Duration | Frames (24fps) | Use |
|---------------|---------------|-----|
| Beat/accent | 2–4 | Subconscious register before motion |
| Short | 6–8 | Pose read; brief rest |
| Medium | 12–18 | Emotional beat; dialogue pause |
| Long | 24+ | Comedic pause; dramatic stare |

---

## Anticipation via Tween Recipe

```
Frame 1:  Start pose
Frame 6:  Anticipation (move OPPOSITE to main action)
Frame 14: Action end pose
          → Tween 6→14: Ease In (fast snap)
```

---

## Classic Tween Timeline Indicators

| Appearance | Meaning |
|------------|---------|
| Arrow on purple background | Working Classic Tween |
| Dashed line | Broken Classic Tween (check: missing symbol or keyframe) |
| Arrow on blue background | Motion Tween |
| Green background | Shape Tween |

---

## Key Animate Shortcuts for Tweening

| Action | Windows | Mac |
|--------|---------|-----|
| Create Classic Tween | Right-click frame → Create Classic Tween | Same |
| Create Motion Tween | Right-click frame → Create Motion Tween | Same |
| Open Motion Editor | Alt+Shift+F9 | Opt+Shift+F9 |
| Insert keyframe | F6 | F6 |
| Insert frame | F5 | F5 |
| Remove frame | Shift+F5 | Shift+F5 |
| Play/stop | Enter | Return |


---

## ✅ Module Sign-Off Checklist

- [ ] Can explain core concept without notes
- [ ] Can name 3 industry examples
- [ ] Know the 2 most common mistakes
- [ ] Understand when to use each technique

**Key formula / ratio / number to memorize:**
See the exam callouts (🎯) in the Reading.md for this module.

---

## Shape Tween Quick Reference

| Feature | Value |
|---------|-------|
| What it tweens | Raw vector shapes (not symbols or groups) |
| Timeline color | Green span |
| Control tool | Shape Hints (circular letter markers) |
| Break apart shortcut | Ctrl+B / Cmd+B (to access raw vector) |

> 🚨 **Trap:** Must Break Apart (Ctrl+B) a symbol before applying Shape Tween.

---

## Numbers to Memorize

| Value | Meaning |
|-------|---------|
| −100 | Classic Tween ease = Ease In (slow start) |
| +100 | Classic Tween ease = Ease Out (fast start) |
| F9 | Easy Ease (AE) |
| 0 | Linear easing = constant speed = mechanical |
| 2–4 frames | Minimum hold at key poses for audience read |
