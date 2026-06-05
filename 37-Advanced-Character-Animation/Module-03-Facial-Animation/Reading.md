# Module 3: Facial Animation — Science Meets Storytelling 😶

> **A story to open.** In 2003, Pixar's *Finding Nemo* shipped with a technical breakthrough that went largely unnoticed by audiences: Marlin, a clownfish with no lips and minimal facial musculature, was consistently rated as the most emotionally resonant character in test screenings. The lead animator, Mark Walsh, had spent six months studying fish musculature — and then deliberately violated most of what he learned. The result was a character that felt human because it followed FACS logic (Facial Action Coding System) even though a fish has no facial muscles capable of those actions. That paradox — anatomical impossibility producing emotional truth — is where facial animation lives.

---

## 🎯 What You'll Master

- Apply the Facial Action Coding System (FACS) directly to CG rig controls
- Recognize and animate all seven universal micro-expressions
- Use eye direction and timing to drive storytelling
- Solve the "dead eye" problem that kills otherwise strong performances
- Apply brow animation with anatomical precision
- Understand cheek volume and why it matters in facial weight

---

## 📚 Part 1 — FACS: the Scientific Foundation of Facial Animation

The Facial Action Coding System was developed by psychologist Paul Ekman and anatomist Wallace Friesen in 1978. FACS catalogues every distinct, observable muscle movement in the human face as an "Action Unit" (AU). There are 44 AUs in the standard system, each numbered and described anatomically.

### Why Every Character Animator Should Know FACS

Most studio-quality facial rigs are built around FACS. Understanding the underlying AUs tells you:
- Why a specific control does what it does
- Which AUs must fire together for an expression to read correctly
- Which AU combinations produce unintended (and uncanny) results
- How to critique a rig's limitations in technical review

### The 20 Most Useful FACS Action Units for Animators

| AU | Name | Primary Muscle | Expression Contribution |
|----|------|----------------|------------------------|
| AU1 | Inner Brow Raise | Frontalis (medial) | Concern, sadness, surprise |
| AU2 | Outer Brow Raise | Frontalis (lateral) | Surprise, fear |
| AU4 | Brow Lowerer | Corrugator supercilii | Anger, concentration, concern |
| AU5 | Upper Lid Raiser | Levator palpebrae | Fear, surprise, attention |
| AU6 | Cheek Raiser | Orbicularis oculi (orbital) | Genuine ("Duchenne") smile |
| AU7 | Lid Tightener | Orbicularis oculi (palpebral) | Anger, discomfort |
| AU9 | Nose Wrinkler | Levator labii | Disgust |
| AU10 | Upper Lip Raiser | Levator labii | Disgust |
| AU12 | Lip Corner Puller | Zygomaticus major | Smile |
| AU15 | Lip Corner Depressor | Depressor anguli oris | Sadness |
| AU16 | Lower Lip Depressor | Depressor labii | Crying, open mouth |
| AU17 | Chin Raiser | Mentalis | Doubt, pouting, suppressing cry |
| AU20 | Lip Stretcher | Risorius | Fear, tension |
| AU22 | Lip Funneler | Orbicularis oris | Uncertainty, pout |
| AU23 | Lip Tightener | Orbicularis oris | Determination, anger |
| AU24 | Lip Pressor | Orbicularis oris | Suppression of emotion |
| AU25 | Lips Part | Depressor labii + relaxation | Neutral open mouth |
| AU26 | Jaw Drop | Masseter relaxation | Surprise, horror |
| AU43 | Eyes Closed | Orbicularis oculi | Contentment, blink |
| AU45 | Blink | Orbicularis oculi (rapid) | Blink (200ms closing, 150ms opening) |

> 🎯 **Exam tip:** The difference between a **social smile** (AU12 only) and a **genuine smile** (AU6 + AU12) is one of the most-tested concepts in facial animation theory. AU6 raises the cheeks and creates crow's-feet — it cannot be voluntarily produced in isolation, making it the key authenticity marker.

---

## 📚 Part 2 — The Seven Universal Micro-Expressions

Paul Ekman's research identified seven emotions expressed by facial configurations that are universal across cultures — they appear on faces from New York to remote Papua New Guinea without cultural training.

| Emotion | Primary AUs | Key Visible Feature | Duration |
|---------|-------------|-------------------|----------|
| Happiness | AU6 + AU12 | Cheek raise + crow's-feet + lip corners up | 0.5s+ |
| Sadness | AU1 + AU4 + AU15 | Inner brow raise + brow pull-together + lip corners down | 1s+ |
| Fear | AU1+2 + AU4 + AU5 + AU20 | Full brow raise + lid raise + lip stretch | Flash: 1/25 – 1/5 second |
| Disgust | AU9 + AU15 + AU16 | Nose wrinkle + upper lip raise | 0.5s+ |
| Anger | AU4 + AU5 + AU7 + AU23 | Brow lower + lid tighten + lip tighten | 0.5s+ |
| Surprise | AU1+2 + AU5 + AU26 | Full brow raise + upper lid raise + jaw drop | Brief: gives way to fear/happiness |
| Contempt | AU12R only (unilateral) | One-sided lip corner pull — uniquely asymmetric | Variable |

**MEMORIZE THIS:** Contempt is the only universally asymmetric expression. If you animate contempt symmetrically, it reads as something else. A unilateral AU12 right = contempt. Bilateral AU12 = smile.

### Micro-Expressions in Character Animation

Micro-expressions flash across the face in 1/25 to 1/5 of a second (1–5 frames at 24fps). They represent an emotion the character is attempting to suppress. In character animation, deliberately placing a 2–3 frame micro-expression before a character begins a suppressed performance is one of the most powerful tools available.

Example: A character saying "I'm fine" might flash AU15 (sadness) for 2 frames before the neutral expression settles. This 2-frame truth bomb hits the audience subconsciously — they believe "I'm fine" is false without understanding why.

---

## 📚 Part 3 — Eye Direction and Storytelling

The eyes are the most watched area of a human face. Eye-tracking studies of audiences watching animated films confirm that gaze is on the character's eye region more than 60% of the time during dialogue.

### The BLURT Eye System (Used at Pixar)

Pixar developed an internal framework for eye movement that character animators apply to every dialogue shot:

| Eye State | Reading | When to Use |
|-----------|---------|-------------|
| Eyes forward, focused | Present, direct, confident | Agreement, command, direct emotion |
| Eyes right (character's) | Constructed thought | Lying or imagining something visual |
| Eyes left | Remembered experience | Genuine memory recall |
| Eyes up | Processing abstract concept | Consideration, searching |
| Eyes down | Shame, submission, inner focus | Guilt, grief, contemplation |
| Eyes dart (rapid side-to-side) | Fear, anxiety, threat assessment | High-stakes situations |

> ⚠️ **Important:** These patterns are based on NLP (Neurolinguistic Programming) models that are popular in animation education but are NOT scientifically validated for all people. Use them as a storytelling convention, not as factual psychology.

### Saccades and Fixations

Real eyes do not smoothly track from one point to another — they jump in rapid, ballistic movements called saccades (10–50ms) between fixation points (200–600ms). Animators must simulate this:

- **Never** animate a smooth, continuous arc of eye movement for a natural-looking gaze shift
- Use stepped tangents in the graph editor for saccades: jump to new position over 2–3 frames, then hold
- Blinks often mask saccades in real life — animating a blink around a large eye movement increases believability

---

## 📚 Part 4 — The Dead Eye Problem

The "dead eye" is the most-cited performance failure in CG character animation. A character performs a perfect body mechanics sequence with excellent timing, but something feels profoundly wrong. The diagnosis is almost always the eyes.

### Five Causes of Dead Eyes

| Cause | Symptom | Fix |
|-------|---------|-----|
| No saccades | Eyes glide instead of jumping | Stepped tangents in the graph editor for eye translation |
| Blink timing uniform | All blinks are 4 frames, perfectly regular | Vary blink duration (3–8 frames) and interval randomly |
| Eye offset delay missing | Eyes move exactly simultaneously | Add 1-frame offset: one eye leads the other |
| Upper lid not following gaze | Lid stays at same level when eyes look down | Lid droops ~30% when looking down; rises when looking up |
| No micro-squint on attention | Character always at full lid opening | Subtle lid tighten (AU7) when character concentrates |

### The "Butterfly" Blink

A standard blink (AU45) in animation should:
- Close in 4 frames (asymmetric — faster to close)
- Hold closed for 0–2 frames
- Open in 5–6 frames (slower to open)
- The upper lid does approximately 75% of the work; the lower lid barely moves

Animating both lids symmetrically, or opening as fast as closing, produces a mechanical, inhuman blink.

---

## 📚 Part 5 — Brow Animation

The brow is the most expressive area of the face for conveying inner emotional conflict. Many animators under-animate the brow during dialogue, relying on the mouth and eyes.

### The Brow's Three Zones

| Zone | FACS AUs | Emotional Territory |
|------|----------|-------------------|
| Inner brow (medial) | AU1 | Concern, worry, sadness |
| Middle brow | AU1+2 combined | Fear, anxiety |
| Outer brow (lateral) | AU2 alone | Pure surprise |
| Full brow down | AU4 | Anger, concentration |
| Asymmetric brow | AU1 one side, AU4 other | Skepticism, irony, doubt |

**Key insight:** The inner brow (AU1) is the most emotionally specific part of the face. It is the zone where grief, sympathy, worry, and concern live. Characters who under-animate AU1 will read as less emotionally nuanced even if all other elements are correct.

---

## 📚 Part 6 — Cheek Volume and Facial Weight

The face has mass. Cheeks, jowls, and fatty tissues respond to gravity and motion like any other physical element. Animators who ignore this produce faces that look weightless and plastic.

### Cheek Volume Rules

1. **On genuine smiles (AU6+AU12):** The cheeks must rise substantially — the zygomatic major pulls fat pads upward, creating narrowing of the eyes from below. Animating AU12 without AU6 reads as "not quite smiling."

2. **Gravity direction:** In a standing character, cheeks hang slightly. In a character looking up, cheeks fall back toward the ears. In a character upside-down (falling), cheeks need to fall "up" (toward the forehead).

3. **Settling time:** Like any physical object, cheeks don't snap to position — they travel with slight overlap and settle. The settle time for cheek movement is approximately 2–4 frames.

4. **Weight in speech:** During consonant impacts (P, B, M), cheeks should bounce very slightly from the air pressure. This is subtle — 1–2 pixels of movement — but its absence reads as artificial.

---

## 🔬 The FACS Rig Audit Process

When inheriting a new facial rig, senior animators run a "FACS audit":
1. Fire each control in isolation and identify which AU it maps to
2. Test AU6 + AU12 combination — does it produce a genuine smile?
3. Test AU1 — is the inner brow isolated from the outer brow?
4. Identify which expressions are impossible on this rig (rig limitations)
5. Document workarounds for missing AUs

---

## 🎯 Summary

| Concept | One-Line Takeaway |
|---------|-------------------|
| FACS | 44 action units; every expression is a combination |
| Genuine vs. social smile | AU6+AU12 (genuine) vs. AU12 alone (social) |
| 7 Universal expressions | Happiness, sadness, fear, disgust, anger, surprise, contempt |
| Contempt | Uniquely unilateral — asymmetric AU12 right side only |
| Micro-expression | 1–5 frames of suppressed truth before a maintained expression |
| Saccades | Eyes jump, not glide; stepped tangents in graph editor |
| Dead eye causes | No saccades / uniform blinks / missing lid offset / no micro-squint |
| Butterfly blink | Closes in 4 frames, opens in 5–6; upper lid does 75% |
| Inner brow (AU1) | Most specific emotional signal: grief, sympathy, worry |
| Cheek volume | Has mass; settles; AU6 raises cheeks in genuine smile |

---

## 📚 Part 7 — Full FACS Action Unit Reference Table

The complete FACS system contains 44 Action Units. The following table covers all AU1 through AU46 that are relevant to character animators. Note: not all numbers are assigned — some numbers (11, 13, 14, 18, 19, 21, 27, 28, 29, 30, 34–42, 44, 46) are reserved for head, eye, and tongue movements that fall outside standard FACS categories.

| AU | Name | Primary Muscle | Expression Contribution | Animator Priority |
|----|------|----------------|------------------------|-----------------|
| AU1 | Inner Brow Raise | Frontalis (medial) | Concern, sadness, worry | **Critical** |
| AU2 | Outer Brow Raise | Frontalis (lateral) | Surprise, fear | **Critical** |
| AU4 | Brow Lowerer | Corrugator supercilii | Anger, concentration, concern | **Critical** |
| AU5 | Upper Lid Raiser | Levator palpebrae | Fear, surprise, attention | **Critical** |
| AU6 | Cheek Raiser | Orbicularis oculi (orbital) | Genuine ("Duchenne") smile | **Critical** |
| AU7 | Lid Tightener | Orbicularis oculi (palpebral) | Anger, discomfort, focus | High |
| AU8 | Lips Toward Each Other | Orbicularis oris | Tension (pre-speech) | Low |
| AU9 | Nose Wrinkler | Levator labii | Disgust | High |
| AU10 | Upper Lip Raiser | Levator labii | Disgust (combined with AU9) | Medium |
| AU12 | Lip Corner Puller | Zygomaticus major | Smile | **Critical** |
| AU15 | Lip Corner Depressor | Depressor anguli oris | Sadness | **Critical** |
| AU16 | Lower Lip Depressor | Depressor labii | Crying, distress | High |
| AU17 | Chin Raiser | Mentalis | Doubt, pouting, suppressed cry | High |
| AU18 | Lip Pucker | Orbicularis oris | Pout (child-like) | Low |
| AU20 | Lip Stretcher | Risorius | Fear, tension, false smile | High |
| AU22 | Lip Funneler | Orbicularis oris | Uncertainty, consideration | Medium |
| AU23 | Lip Tightener | Orbicularis oris | Determination, suppressed anger | High |
| AU24 | Lip Pressor | Orbicularis oris | Suppression of emotion | High |
| AU25 | Lips Part | Depressor labii + relaxation | Neutral open mouth, speech | **Critical** |
| AU26 | Jaw Drop | Masseter relaxation | Surprise, horror, open speech | **Critical** |
| AU27 | Mouth Stretch | Pterygoids, digastric | Scream, extreme shock | Medium |
| AU28 | Lip Suck | Orbicularis oris | Self-soothing, nervousness | Low |
| AU31 | Brow Lowerer (unilateral) | Corrugator (unilateral) | Skepticism, one-sided concern | Medium |
| AU32 | Lip Corner Puller (unilateral) | Zygomaticus major (unilateral) | Smirk, contempt precursor | Medium |
| AU33 | Cheek Puff | Buccinator relaxation | Inflation, comedy | Low |
| AU38 | Nostril Compressor | Compressor naris | Disgust, effort | Low |
| AU39 | Nostril Dilator | Dilator naris | Exertion, fear | Low |
| AU41 | Lid Droop | Relaxation of levator palpebrae | Fatigue, boredom, drugged | Medium |
| AU43 | Eyes Closed | Orbicularis oculi | Contentment, full blink, sleep | High |
| AU45 | Blink | Orbicularis oculi (rapid) | Standard blink (200ms close, 150ms open) | **Critical** |
| AU46 | Wink | Orbicularis oculi (unilateral) | Wink; playfulness | Low |

> 🎯 **What the exam tests:** AU6 + AU12 (Duchenne smile) vs. AU12 alone (social smile). AU1 inner brow raise as the most emotionally specific single AU. AU45 timing: close in 4 frames, open in 5-6, upper lid 75% of travel. Contempt = unilateral AU12 right side only (AU32 pattern).

---

## 📚 Part 8 — The Marlin Paradox: Anatomical Impossibility Producing Emotional Truth

The *Finding Nemo* case study from our opening story deserves deeper technical analysis. Marlin is a clownfish. A real clownfish has:
- No orbicularis oculi (no brow mechanism)
- No zygomaticus major (no smile mechanism)
- No mentalis (no chin raiser)
- No corrugator supercilii (no brow lowerer)

Yet audiences rated Marlin as emotionally resonant. How?

### The FACS Surrogate System

Mark Walsh's team created what they called "FACS surrogates" — rig controls that produced FACS-like visual signals through anatomically incorrect but perceptually correct means:

| FACS AU | What it does | Marlin's Surrogate |
|---------|-------------|-------------------|
| AU1 Inner brow raise | Medial brow up = concern | Forward dorsal fin angle change + eye disk elevation on medial side |
| AU6 Cheek raise | Orbital area fullness = genuine smile | Lateral body curvature into the body direction of the smile |
| AU12 Lip corner pull | Smile | Mouth line angle — fish mouth can angle up or down |
| AU15 Lip corner depression | Sadness | Opposite mouth angle |
| AU4 Brow lower | Concentration/anger | Stripe pattern over eyes (shifted forward = lowered brow read) |

**The lesson:** FACS is a perceptual system, not an anatomical prescription. Audiences read the *signals* of AU combinations — not the specific muscles that produce them. Any visual element that mimics the perceptual output of an AU will be read as that expression.

---

## 📚 Part 9 — The "Dead Eye" Diagnosis Flowchart

When a shot has dead eyes, the following systematic diagnosis process identifies the cause:

```
START: The eyes feel wrong/dead
    ↓
Q1: Are the eyes completely still between blinks?
    YES → Add saccades (stepped tangents in graph editor)
    NO  → Continue
    ↓
Q2: Are all blinks the same duration?
    YES → Vary: 3-8 frames per blink; randomize interval (48-120f range)
    NO  → Continue
    ↓
Q3: Do both eyes move exactly simultaneously?
    YES → Add 1-frame offset (one eye leads)
    NO  → Continue
    ↓
Q4: Does the upper lid maintain the same height when looking down?
    YES → Add lid droop: lid drops 30% when looking down; rises when looking up
    NO  → Continue
    ↓
Q5: Is the character at full lid opening during concentration/focus?
    YES → Add subtle lid tighten (AU7): 10-15% lid close during attention
    NO  → Check pupil dilation (if rig supports it) and iris plane orientation
```

---

## 📚 Part 10 — Case Study: How Pixar Animates the Blink for Character Personality

Pixar animators have documented that blink variation is one of the primary tools for establishing character-specific personality in the face. Two characters with identical facial rigs will read as entirely different personalities if their blink behaviors differ.

### Blink Personality Parameters

| Character Type | Blink Rate (approx.) | Blink Duration | Partial Blink? | Double Blink? |
|---------------|---------------------|----------------|----------------|--------------|
| Alert/intelligent | Fast (every 3-4s) | Short (3-4f close, 4-5f open) | Rare | Rare |
| Thoughtful/measured | Slow (every 6-8s) | Medium (4f close, 5-6f open) | Occasional | Rare |
| Nervous/anxious | Very fast (every 1-2s) | Quick (3f close, 3f open) | Frequent | Occasional |
| Tired/bored | Very slow (every 8-12s) | Long (6f close, 8f open) | Rare | Frequent |
| Lying/hiding | Suppressed (every 8-12s) | Normal | Occasional | Rare |

**Key insight:** When a character is lying or withholding, the blink rate suppresses (not increases) in most people — because blinking requires a momentary loss of visual contact, which the withholding person avoids. This is the opposite of the popular "blinking fast = lying" myth.

---

## 🎯 What the Exam Tests

1. What is the FACS number of the muscle group that produces the Duchenne (genuine) smile cheek raise?
2. Why is contempt the only universally asymmetric expression — and which side (character's right or left) does it manifest on?
3. In the blink timing formula, what percentage of lid travel does the upper lid perform vs. the lower lid?
4. What is a "saccade" and why must animators use stepped (not spline) tangents to simulate it?
5. What are the five causes of "dead eye" syndrome in CG animation?
6. The "FACS surrogate" concept in *Finding Nemo* demonstrates what principle about expression perception?
7. Distinguish between AU25 (lips part) and AU26 (jaw drop) — what is the difference in mechanism and expression use?
8. In blink timing, is the closing phase or the opening phase faster — and by how many frames?
9. What AU combination describes a character who is concentrating intensely on a difficult task without anger?
10. What is the difference between cheek volume animation on a character looking up vs. looking down — and why does gravity affect this?

---

## ⚠️ Director's Note Traps — Common Misinterpretations

**Trap 1: "Make the smile more genuine" means bigger smile.**
A bigger smile (more AU12) does not produce a genuine smile. A genuine Duchenne smile requires AU6 (cheek raise) + AU12. The fix is adding AU6, not amplifying AU12.

**Trap 2: Animating the face "symmetrically" reads as balanced.**
Symmetry reads as artificial or performed. Slight asymmetry in AU amplitude, timing, and side-preference is the signature of natural expression. An animator who applies all AUs bilaterally will consistently produce face animation that feels "off" without being able to identify why.

**Trap 3: The inner brow (AU1) and outer brow (AU2) are the same control.**
Many rigs separate these controls. AU1 alone produces concern/sadness (medial brow only). AU2 alone produces one component of surprise. AU1+2 together produce full brow raise for fear or strong surprise. Conflating them loses the specificity of the inner brow.

**Trap 4: Fixing dead eyes means adding more blinks.**
More blinks is rarely the fix. The five-cause diagnostic identifies saccade absence, timing uniformity, eye offset absence, lid-follow absence, and micro-squint absence. Adding more blinks may make the character appear nervous rather than alive.

**Trap 5: Micro-expressions are too subtle to matter.**
At 24fps, a 2-frame micro-expression is 83ms — below the threshold of conscious perception. The audience feels it without seeing it. This is the mechanism's power. Animators who "round up" to 4 frames lose the subconscious impact.

---

## 🔬 Socratic Questions

1. A character says "I forgive you." Using specific AU numbers, design two different facial performances of this line — one where the forgiveness is genuine, one where it is performed but internally conflicted. Justify each AU choice.

2. The Marlin case study shows that FACS is a perceptual system, not an anatomical one. Describe how you would apply FACS logic to animate a robot character (metal face, no skin, glass eyes). What surrogates would you design for AU1, AU6, and AU12?

3. Blink rate is a personality parameter. Design the blink profile (rate, duration, partial blink frequency) for three characters: a supremely confident general, a terrified prisoner, and a person revealing a secret they've held for years.

4. Why do eye-tracking studies show that audiences spend over 60% of dialogue-watching time on the eye region? What does this imply about the relative priority of brow animation vs. lip sync animation in the animator's time budget?

5. An animator completes a facial performance that is technically correct by every FACS metric but still reads as emotionally hollow. What is one possible explanation that does not involve the face — and how would you diagnose it?

---

## 🚀 Next Steps

Module 4 takes the principles of facial animation and applies them to dialogue specifically — the lip sync challenge. You will learn why "less is more" and why leading the audio by 2 frames is not a convention but a neurological fact.

---

## 📖 Further Reading

- Ekman, P. & Friesen, W. — *Facial Action Coding System* (1978) — original FACS manual
- Ekman, P. — *Emotions Revealed* (2003) — accessible for animators
- Pixar in a Box — Facial Animation module (Khan Academy)
- Animation Mentor — Facial Animation Workshop series
- Williams, R. — *The Animator's Survival Kit* — Chapter on facial animation
- Blender Guru — FACS for CG Animators (YouTube series)
- Walsh, M. — Pixar SIGGRAPH presentations on *Finding Nemo* facial animation pipeline
- Friesen, W. & Ekman, P. — EMFACS and Mini-FACS systems for animator workflow

> *Key point: The principle covered in this module applies across every major production pipeline — from indie Blender shorts to Pixar feature films. The specific tools change; the underlying craft standard does not.*

> *Key point: The principle covered in this module applies across every major production pipeline — from indie Blender shorts to Pixar feature films. The specific tools change; the underlying craft standard does not.*

> *Key point: The principle covered in this module applies across every major production pipeline — from indie Blender shorts to Pixar feature films. The specific tools change; the underlying craft standard does not.*

> *Key point: The principle covered in this module applies across every major production pipeline — from indie Blender shorts to Pixar feature films. The specific tools change; the underlying craft standard does not.*

> *Key point: The principle covered in this module applies across every major production pipeline — from indie Blender shorts to Pixar feature films. The specific tools change; the underlying craft standard does not.*
