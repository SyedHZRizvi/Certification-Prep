# Module 3 Cheat Sheet, Facial Animation 😶

## FACS Quick Reference, Top 20 Action Units

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

## 7 Universal Expressions, AU Combos

| Emotion | Key AUs |
|---------|---------|
| Happiness | AU6 + AU12 (+ crow's-feet) |
| Sadness | AU1 + AU4 + AU15 |
| Fear | AU1+2 + AU4 + AU5 + AU20 |
| Disgust | AU9 + AU15 + AU16 |
| Anger | AU4 + AU5 + AU7 + AU23 |
| Surprise | AU1+2 + AU5 + AU26 |
| Contempt | AU12R (right side ONLY, asymmetric) |

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

## Dead Eye, 5 Causes and Fixes

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

AU6 cannot be voluntarily faked in isolation, the key authenticity marker
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

---

## Full AU Priority Reference (Critical → Medium → Low)

| Priority | AUs | Why |
|---------|-----|-----|
| **Critical** | AU1, AU2, AU4, AU5, AU6, AU12, AU15, AU25, AU26, AU45 | Every dialogue/performance shot uses these |
| **High** | AU7, AU9, AU16, AU17, AU20, AU23, AU24, AU43 | Emotional complexity; anger/fear/sadness depth |
| **Medium** | AU10, AU22, AU27, AU31, AU32, AU41 | Nuance and specificity |
| **Low** | AU8, AU18, AU28, AU33, AU38, AU39, AU46 | Specialty use; comedy; extreme emotion |

---

## Dead Eye Diagnostic Flowchart

```
Eyes feel wrong?
  ↓
Are they completely still between blinks?  YES → Add saccades (stepped tangents)
  ↓ NO
Are all blinks the same duration?          YES → Vary 3–8f; randomize intervals
  ↓ NO
Do both eyes move simultaneously?          YES → Add 1-frame offset (one eye leads)
  ↓ NO
Does upper lid stay level on downward gaze? YES → Lid droops 30% looking down
  ↓ NO
Is character at full lid opening always?   YES → Add AU7 micro-squint on concentration
  ↓ NO
Check pupil dilation (if rig supports) + iris plane orientation
```

---

## FACS Surrogate System (For Non-Human Faces)

The perceptual signals of AUs can be mimicked through anatomically incorrect but perceptually correct surrogates:

| FACS AU | Standard Mechanism | Non-Human Surrogate |
|---------|-------------------|-------------------|
| AU1 Inner brow | Medial frontalis | Ear rotation forward + medial eye elevation |
| AU6 Cheek raise | Orbital orbicularis | Lateral body curvature into smile direction |
| AU12 Lip corner | Zygomaticus major | Mouth line angle upward |
| AU15 Lip depression | Depressor anguli | Mouth line angle downward |
| AU4 Brow lower | Corrugator | Stripe / marking pattern shifted forward |

**Principle:** FACS is a perceptual system. Any visual element that mimics the output signal of an AU will be read as that expression, regardless of the anatomy producing it.

---

## Blink Personality Parameters Quick Reference

| Character Type | Rate | Duration | Special |
|---------------|------|----------|---------|
| Alert/intelligent | Every 3–4s | 3–4f close / 4–5f open | Rare partial |
| Thoughtful | Every 6–8s | 4f close / 5–6f open | Occasional partial |
| Nervous/anxious | Every 1–2s | Quick: 3f / 3f | Frequent partial |
| Tired/bored | Every 8–12s | Long: 6f / 8f | Frequent double blink |
| Withholding/lying | Every 8–12s | Normal | Suppressed (not increased) |

---

## Module 3 Exam Rapid-Fire

| Question | Answer |
|---------|--------|
| AU for Duchenne smile cheek raise | AU6 (Cheek Raiser, orbicularis oculi orbital) |
| Contempt: which side | Right side (character's right), uniquely asymmetric |
| Blink: upper vs lower lid travel | Upper lid 75%, lower lid 25% |
| Saccade tangent type | Stepped, eyes jump, never glide |
| Marlin paradox | FACS is perceptual not anatomical, surrogates produce same perception |
| Blink: close or open faster | Close (4f) is faster than open (5–6f) |
| Concentration: which AUs | AU7 (lid tighten) + AU4 (brow lower), without AU23 anger component |
| Lying person's blink rate | Suppressed (slower), not increased |
