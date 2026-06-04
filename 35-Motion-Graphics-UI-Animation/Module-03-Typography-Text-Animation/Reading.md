---
permalink: /35-Motion-Graphics-UI-Animation/Module-03-Typography-Text-Animation/Reading/
title: "Module 3: Typography & Text Animation"
---

# ✍️ Module 3: Typography & Text Animation

## The Title Sequence That Changed Everything

In 2016, the design studio Imaginary Forces (who did the original Se7en titles) and independent designer Kyle Cooper's student-era work all informed what happened in Netflix's Stranger Things. The show's title sequence — blocky ITC Benguiat type bleeding in from white — triggered an aesthetic movement. Every motion designer in the world suddenly started studying 1980s title design. Why did it work? Not nostalgia alone — it worked because it applied timing and spacing with absolute discipline. Each letter arrived at a pace that matched the synthesizer score. The sequence breathed.

Typography in motion isn't decoration. It's rhythm made visible.

---

## 🔬 After Effects Text Animator System

The Text Animator is AE's most powerful and underutilized native tool. It allows you to animate text properties (position, scale, opacity, rotation, blur, color, tracking, baseline shift) **per-character, per-word, or per-line** — without any expressions.

### Adding a Text Animator
1. Select the text layer
2. Click the **Animate** button on the right side of the text layer in the timeline
3. Choose a property (e.g., "Opacity")
4. A **Range Selector** is automatically added

### Range Selectors

The Range Selector defines which characters the animator affects and how. Properties:

| Property | Controls |
|----------|---------|
| **Start** | Beginning of affected range |
| **End** | End of affected range |
| **Offset** | Shifts the window across the text |
| **Shape** | The falloff curve (Square, Ramp Up, Ramp Down, Round, Smooth) |
| **Ease High / Low** | How much the affected/unaffected transition eases |
| **Mode** | How multiple selectors interact (Add, Subtract, Intersect, etc.) |

**Animating the Range:** Keyframe the `Offset` property from -100% to 100% to sweep an effect across the text. This is the core mechanism of every text reveal.

---

## 🔤 The Blur > Scale > Opacity Text Reveal

This is the most widely used text animation technique in professional motion graphics. It appears in corporate films, app onboarding, editorial content, and product launches. You've seen it on every Apple keynote slide.

### The Setup

1. Create a text layer
2. **Animate > Blur** → Set Blur to `30`
3. **Animate > Scale** → Set Scale to `120%` (or `80%` for incoming from large)
4. **Animate > Opacity** → Set Opacity to `0%`

Now you have three animators. Collapse them into **one Range Selector**:
- Delete the extra selectors from animators 2 and 3
- Apply all three properties to the single remaining Range Selector

5. Keyframe **Offset** from `-100%` at frame 0 to `100%` at frame 20
6. Set Range Selector **Shape** to `Ramp Up`
7. Set **Ease Low** to `50%`

Result: characters fade in, scale down from 120%, and de-blur — sequentially from left to right, with a soft overlap.

### Variations

| Variation | Change |
|-----------|--------|
| Right-to-Left | Offset from 100% to -100% |
| Center-Out | Two selectors — one from 50% to 0%, one from 50% to 100% |
| Per-Word | Set Range Selector Based on: Words |
| Character Scramble | Add Rotation animator; animate Offset with randomize order checked |
| Staggered Drop-In | Add Position Y (offset characters drop from above, then snap to position) |

> 🎯 **Exam Tip:** The Range Selector Offset animated from left to right (-100% → 100%) with Shape: Ramp Up is the single most-tested text animation pattern. Know it cold.

---

## 📺 Kinetic Typography — Case Studies

### Case Study 1: The Stranger Things Intro

**Technique:** Single-word reveals with slow ease-in
**Key Decisions:**
- Font: ITC Benguiat — chosen because it bleeds when printed on cheap newsprint (mass-market paperback aesthetic)
- Color: Blood red from white, not black to white
- Timing: Each word takes ~40 frames at 24fps (~1.7 seconds) — far slower than what most designers would choose
- Sound sync: Each letter arrival subtly synced to synthesizer transient
- The "slowness" is intentional — it creates dread

**What to Learn:** Timing can communicate emotion. The same font, same technique, but at 12 frames would feel sharp and energetic. At 40 frames it feels heavy and ominous.

### Case Study 2: Apple Keynote Slides

**Technique:** Blur-scale-opacity reveal, per-word
**Key Decisions:**
- Font: SF Pro (their system font) — no decorative choices distract from the content
- Duration: Each word reveal takes 18–24 frames at 24fps (750ms–1s)
- Stagger between words: 4–6 frames
- Maximum on-screen: 6–8 words before a new slide
- Motion direction: All text enters from the same direction (slight downward drift from above)

**What to Learn:** When every presentation uses the same motion vocabulary, the audience stops seeing the animation and focuses on the content. Consistency is a feature.

### Case Study 3: Sports Graphics Lower-Thirds

**Technique:** Hard wipe with no easing; cut-on-beat
**Key Decisions:**
- Font: Heavy condensed sans-serif (Impact, Bebas Neue, custom)
- Duration: 4–6 frames per character reveal (extremely fast)
- Color: High contrast — white on dark, team color on white
- Entry: Hard geometric wipe, not soft fade
- Sound: Whoosh SFX synced to wipe start

**What to Learn:** In high-energy sports contexts, linear and fast reads as "authoritative." Soft easing reads as "corporate." Context determines the right motion vocabulary.

---

## 🔠 The Text Animator Properties

| Property | Unit | Effect |
|----------|------|--------|
| Anchor Point | Pixels | Changes rotation/scale origin per character |
| Position | Pixels | Moves characters in X, Y, or Z |
| Scale | % | Scales individual characters |
| Skew | Degrees | Skews characters |
| Rotation | Degrees | Rotates characters |
| Opacity | % | Fades characters |
| Blur | Pixels | Blurs individual characters |
| Fill Color | RGB | Changes per-character color |
| Stroke Color | RGB | Changes per-character stroke |
| Tracking | EM | Adjusts spacing between characters |
| Baseline Shift | Pixels | Raises/lowers characters on baseline |
| Character Offset | Integer | Cycles characters through the alphabet |

---

## 🎞️ Kinetic Typography Design Principles

### Principle 1: The Rhythm-Typography Match

The timing of text animation should match the rhythm of the sound it accompanies. If you're animating a quote from a speech, sync each word reveal to when it was spoken. If you're animating to music, sync reveals to the beat subdivisions.

**Practical Rule:** Export your audio to AE. Convert to RAM preview with audio. Use Ctrl+click on the timeline to place time markers on beats. Keyframe your text reveals to those markers.

### Principle 2: Hierarchy Through Motion

Don't treat all text equally. In a kinetic piece:
- **Headline text:** Enters first, with the most prominent animation
- **Supporting text:** Enters second, with a subdued variation of the same technique
- **Fine print / credits:** Enters last, fades rather than wipes

### Principle 3: One Technique Per Piece

The most common kinetic typography mistake: using 4 different entrance techniques in a 30-second piece because each one seemed interesting. Pick one technique and vary its speed and intensity instead.

### Principle 4: Negative Space

The moments when nothing is moving are as important as the moments when things are. A text reveal that ends and then holds for 0.5 seconds before the next one enters gives the viewer time to read and process. No hold = cognitive overload.

---

## 🛠️ Working with Fonts in Motion

### Variable Fonts

Variable fonts contain a full range of weights and widths within a single file. In AE (CS 2021+), you can animate between font weights using a single variable font — the weight itself becomes an animatable property.

**Used in motion design for:** Weight "blooms" where text appears normal weight, then expands to ultra-bold, then returns to normal.

### Optical Sizing

Some text reads beautifully at headline size but poorly at body size (and vice versa). Always test your fonts at their intended final size — not zoomed in.

### Font Licensing for Motion

> 🚨 **Trap on the Exam:** Most font licenses cover print and web use but NOT broadcast or commercial video production. If you use a font in a client video, you need a **Desktop License** at minimum and often a **Broadcast License** for distribution. Failing to license fonts correctly is the most common legal mistake motion designers make.

---

## 📋 Summary

| Concept | Key Takeaway |
|---------|-------------|
| Text Animator | Per-character animation using Range Selectors |
| Range Selector | Controls which characters are affected and when |
| Offset | The property to keyframe for left-to-right reveals |
| Blur-Scale-Opacity | The canonical text reveal technique |
| Stranger Things | Timing communicates emotion; slow = dread |
| Apple Keynote | Consistency = invisibility; viewers see content, not animation |
| Sports Graphics | Fast + linear = authority in high-energy contexts |
| Rhythm Match | Sync text reveals to audio beats or speech |
| Font Licensing | Desktop license is not enough for broadcast video |

---

## 🔗 Next Steps

[Module 4: Logo & Brand Motion →](../Module-04-Logo-Brand-Motion/Reading.md)

---

## 📚 Further Reading

- *Typographie* — Emil Ruder (niggli Verlag) — foundational text on type and white space
- *Stop Stealing Sheep & Find Out How Type Works* — Spiekermann & Ginger
- [School of Motion — Kinetic Typography Tutorial](https://www.youtube.com/results?search_query=school+of+motion+kinetic+typography+after+effects)
- [AE Text Animator Documentation](https://helpx.adobe.com/after-effects/using/animating-text.html)
- [Adobe Fonts Licensing Guide](https://fonts.adobe.com/fonts/licensing)
