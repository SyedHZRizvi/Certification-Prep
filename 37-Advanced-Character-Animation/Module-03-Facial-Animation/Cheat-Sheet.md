# Module 3 Cheat Sheet — Facial Animation 😶

## FACS Quick Reference — Top 20 Action Units

| AU | Name | Expression |
|----|------|-----------|
| AU1 | Inner Brow Raise | Concern, sadness, worry |
| AU2 | Outer Brow Raise | Surprise |
| AU4 | Brow Lowerer | Anger, concentration |
| AU5 | Upper Lid Raiser | Fear, surprise |
| AU6 | Cheek Raiser | Genuine smile component |
| AU7 | Lid Tightener | Anger, discomfort |
| AU9 | Nose Wrinkler | Disgust |
| AU12 | Lip Corner Puller | Smile |
| AU12R | Unilateral Lip Pull | **CONTEMPT only** |
| AU15 | Lip Corner Depressor | Sadness |
| AU17 | Chin Raiser | Doubt, suppressing cry |
| AU20 | Lip Stretcher | Fear |
| AU23 | Lip Tightener | Determination, anger |
| AU24 | Lip Pressor | Suppressing emotion |
| AU26 | Jaw Drop | Surprise, horror |
| AU45 | Blink | Standard blink |

---

## 7 Universal Expressions — AU Combos

| Emotion | Key AUs |
|---------|---------|
| Happiness | AU6 + AU12 (+ crow's-feet) |
| Sadness | AU1 + AU4 + AU15 |
| Fear | AU1+2 + AU4 + AU5 + AU20 |
| Disgust | AU9 + AU15 + AU16 |
| Anger | AU4 + AU5 + AU7 + AU23 |
| Surprise | AU1+2 + AU5 + AU26 |
| Contempt | AU12R (right side ONLY — asymmetric) |

---

## Butterfly Blink (AU45) Timing

```
CLOSING:  4 frames  (fast)
HOLD:     0-2 frames
OPENING:  5-6 frames (slower)
Upper lid = 75% of movement
Lower lid = 25% of movement
```

---

## Dead Eye — 5 Causes and Fixes

| Cause | Fix |
|-------|-----|
| No saccades | Stepped tangents in graph editor; jump not glide |
| Uniform blink timing | Vary duration (3–8f) and intervals randomly |
| No eye offset | One eye leads other by 1 frame |
| Lid not following gaze | Lid droops 30% on downward gaze |
| No micro-squint | Subtle AU7 when character concentrates |

---

## Eye Direction Quick Guide

| Direction | Reading (conventional) |
|-----------|----------------------|
| Forward, focused | Present, direct, confident |
| Eyes right | Constructed/imagined |
| Eyes left | Genuine memory |
| Eyes up | Abstract processing |
| Eyes down | Shame, inner focus |
| Rapid dart | Fear, anxiety |

---

## Genuine vs. Social Smile

```
Social smile:   AU12 alone (mouth only)
Genuine smile:  AU6 + AU12 (cheeks rise; crow's-feet; eye narrows from below)

AU6 cannot be voluntarily faked in isolation — the key authenticity marker
```

---

## Cheek Volume Rules

- Genuine smile → cheeks rise (AU6), narrowing eyes from below
- Character looking up → cheeks fall back toward ears
- Character falling → cheeks appear to fall upward
- Settling time: 2–4 frames after position change
- P, B, M consonants → micro-bounce in cheeks (1–2 pixels)

---

## Micro-Expression Formula

```
Frame 1-3:   Flash of suppressed emotion (AU combo)
Frame 4+:    Maintained surface expression
Audience:    Subconsciously reads suppression as "they're lying/hiding"
Duration:    1-5 frames at 24fps
```
