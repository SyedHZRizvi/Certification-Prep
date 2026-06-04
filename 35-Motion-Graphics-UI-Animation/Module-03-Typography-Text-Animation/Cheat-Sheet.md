---
permalink: /35-Motion-Graphics-UI-Animation/Module-03-Typography-Text-Animation/Cheat-Sheet/
title: "Module 3 Cheat Sheet: Typography & Text Animation"
---

# ⚡ Module 3 Cheat Sheet — Typography & Text Animation

## The Blur > Scale > Opacity Reveal (Setup)

1. Select text layer → Animate > Blur → Set to `30`
2. Animate > Scale → Set to `120%`
3. Animate > Opacity → Set to `0%`
4. Delete extra Range Selectors; keep one shared selector
5. Set Shape: `Ramp Up`, Ease Low: `50%`
6. Keyframe Offset: `-100%` (frame 0) → `100%` (frame 20–24)

---

## Range Selector Properties

| Property | Controls |
|----------|---------|
| Start / End | Which portion of text is affected |
| Offset | Position of the effect window; animate this for reveals |
| Shape | Transition falloff: Square (hard), Ramp Up (soft) |
| Based On | Characters / Words / Lines |
| Ease High / Low | Softness of transition at high/low ends |
| Mode | Add, Subtract, Intersect (for multiple selectors) |

---

## Text Animator Properties

| Property | Use |
|----------|-----|
| Blur | Blur per-character (for soft reveal) |
| Scale | Scale per-character |
| Opacity | Fade per-character |
| Position | Move per-character (drop-in, slide-up) |
| Rotation | Spin per-character |
| Tracking | Letter spacing |
| Baseline Shift | Vertical offset from baseline |
| Character Offset | Cycles through alphabet (scramble effect) |
| Fill Color | Per-character color |

---

## Kinetic Typography Case Studies

| Project | Technique | Duration/char | Mood |
|---------|-----------|--------------|------|
| Stranger Things | Slow blur reveal, red on white | ~40 frames | Dread, weight |
| Apple Keynote | Blur-scale-opacity, per-word | 18–24 frames | Clarity, confidence |
| Sports Lower-Third | Hard geometric wipe | 4–6 frames | Authority, urgency |

---

## Timing Emotion Guide

| Duration | Perceived Emotion |
|----------|------------------|
| 4–6 frames | Power, urgency, authority |
| 10–15 frames | Energy, confidence |
| 18–24 frames | Professional, clear |
| 30–40 frames | Weight, gravitas, dread |
| 60+ frames | Cinematic, meditative |

---

## One-Technique Rule

Choose ONE entrance technique per piece. Vary:
- Speed (fast for emphasis, slow for weight)
- Intensity (full blur vs. subtle)
- Direction (left → right vs. center-out)

---

## Font Licensing for Video

| License Type | Use |
|-------------|-----|
| Desktop | Personal/print use only |
| Web | Website embedding (WOFF/WOFF2) |
| App | Embedding in software applications |
| Broadcast/Video | TV, film, commercial video — required for client work |

> Always check license before using a font in commercial video. Violation is a legal risk to you and your client.

---

## Center-Out Reveal Setup

Two Range Selectors in same Animator:
- Selector 1: Start 50% → 0% (animates left half)
- Selector 2: Start 50% → 100% (animates right half)
- Both Mode: Add
