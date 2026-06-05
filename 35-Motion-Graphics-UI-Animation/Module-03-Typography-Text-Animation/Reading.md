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

## 🎯 What the Exam Tests: Typography & Text Animation

> 🎯 **Exam Callout 1:** The Range Selector Offset animated from -100% to 100% with Shape set to **Ramp Up** is the canonical text reveal. The exam will test which direction the reveal goes — -100% to 100% sweeps left to right.

> 🎯 **Exam Callout 2:** "Based on" in the Range Selector controls whether animation applies per **character**, per **word**, or per **line**. Know all three modes — the exam tests each one in scenario questions.

> 🎯 **Exam Callout 3:** The Stranger Things title sequence uses **ITC Benguiat**, a serif typeface designed by Ed Benguiat in 1977. The exam may test the font name in a "which typeface communicates a 1980s mass-market paperback feel" question.

> 🎯 **Exam Callout 4:** Font licensing: a standard **Desktop License** covers print and personal use. A **Broadcast License** (or **Video License**) is required for fonts used in video distributed commercially. The exam will test whether a "standard font purchase" covers broadcast video — the answer is almost always no.

> 🎯 **Exam Callout 5:** Variable fonts allow animation between font **weights** in After Effects CC 2021 and later. They require a variable font file (`.ttf` or `.otf` with variation axes). The exam tests: what file format enables weight animation in AE?

> 🎯 **Exam Callout 6:** In kinetic typography, the most common structural mistake is using **more than one entrance technique** in a single piece. The rule: one technique, varied speed and intensity.

> 🎯 **Exam Callout 7:** The Apple keynote text animation standard: **per-word** reveals (not per-character), 18–24 frames at 24fps, with a 4–6 frame stagger between words. These numbers may appear directly in exam questions.

---

## ⚠️ Common Traps: Typography

**Trap 1 — Range Selector vs. Wiggly Selector:** The Range Selector applies animation in a defined sequential sweep. The Wiggly Selector applies animation randomly across characters. Students frequently use a Range Selector when they want randomized character animation — the result is always a sequential wipe instead of the intended scatter effect.

**Trap 2 — Tracking in Text Animators:** Tracking (letter spacing) in the Text Animator property is measured in **1/1000 of an em**, not in pixels. A tracking value of 100 in the animator equals 0.1em. This matters when matching text spacing to a style guide.

**Trap 3 — Animate > Opacity vs. Layer Opacity:** Text Animator Opacity affects individual characters. Layer Opacity affects the entire text layer at once. Students often add Layer Opacity keyframes when they actually need per-character fades — the result loses all the character-by-character staging.

**Trap 4 — Font Preview Size:** Fonts look different at display size vs. body size. Always set your comp zoom to 100% and preview at actual delivery size before finalizing font choices for motion. A font that reads beautifully at 200% zoom may look weak at 1080p actual size.

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

## 📺 Extended Case Study: Netflix Stranger Things

The Stranger Things title sequence (2016) is the most-studied kinetic typography piece of the 2010s. Understanding exactly why it works unlocks principles you can apply to any project.

**The Technical Anatomy:**

The sequence opens on a white field. ITC Benguiat type appears in deep crimson — bleeding from the center outward. Each letter emerges slowly over approximately 40 frames at 24fps (1.67 seconds per word grouping). The sequence builds across 12 seconds total before the final lockup.

**The Three Technical Decisions That Made It:**

1. **White background instead of black:** The standard expectation for horror is black. White creates unease through inversion — the brain recognizes "this is wrong" before it can articulate why.

2. **Bleed rather than reveal:** The letters don't wipe or fade. They bleed — the edges are not clean, referencing the imprecision of analog printing. In AE terms: a Roughen Edges effect on a mask, combined with a slow Offset reveal.

3. **The synthesizer sync:** Each letter cluster's arrival was synchronized to a transient in Kyle Dixon and Michael Stein's synthesizer score. The visual and audio grammar matched perfectly — both analog, both slightly unstable.

**What It Teaches You:**
- Timing at 40 frames per word feel heavy and ominous; the same technique at 12 frames would feel energetic and modern
- Counterintuitive choices (white background, bleeding, slowness) create emotional dissonance that registers as "interesting"
- Sound is not an afterthought — it was composed alongside the title animation, not added afterward

**The Replication Exercise (for your portfolio):**
1. Set comp to 1920×1080, 24fps
2. Import a heavy serif font (ITC Benguiat, or Playfair Display as a free substitute)
3. Set background to pure white (#FFFFFF)
4. Color text to #8B0000 (dark crimson)
5. Use Text Animator with Roughen Edges effect on the text layer mask
6. Animate Offset on Range Selector from -100% to 100% over 40 frames per word
7. Add a dark, minimal synthesizer track and sync letter arrivals to transients

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

## 🔡 Advanced Text Animator Techniques

### The Wiggly Selector

The Wiggly Selector is the Text Animator's tool for randomized, organic character animation — in contrast to the Range Selector's sequential sweep.

**Key Parameters:**

| Parameter | Effect |
|-----------|--------|
| **Max Amount** | Maximum offset in property units |
| **Min Amount** | Minimum offset (allows negative values) |
| **Wiggles/Second** | How fast the randomization changes |
| **Correlation** | 100% = all characters behave identically; 0% = each character fully independent |
| **Temporal Phase** | Time offset; use per-layer to de-sync identical text layers |
| **Spatial Phase** | Spatial offset for 2D properties |

**Use Case — Ambient Organic Text:**
```
Text Layer → Animate > Position
Add Wiggly Selector
Set Wiggles/Second: 0.5 (slow drift)
Set Max Amount: 10px, Min Amount: -10px
Set Correlation: 20% (mostly independent characters)
```
Result: Text characters drift gently and independently — organic, ambient, never repetitive.

### Combining Range and Wiggly Selectors

The most powerful text animator configurations use both selectors together:
1. **Range Selector** sweeps a reveal across the text (0% → 100%)
2. **Wiggly Selector** adds random variation within the revealed zone

This creates reveals that feel organic rather than mechanical — the characters arrive in roughly the right order but with natural variation in their exact timing.

### Expression-Driven Text: The Character Offset Trick

The Character Offset animator property shifts characters through the alphabet. Animated from 20 → 0, each character "scrambles" through 20 alphabet positions before landing on the correct letter.

**Cipher Reveal Setup:**
1. Animate > Character Offset → set to 20
2. Animate Offset (Range Selector) from -100% to 100% over 30 frames
3. Simultaneously keyframe Character Offset from 20 → 0

Result: Characters appear to "decode" from scrambled to correct, reading left to right.

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

## 🔤 Typography Decision Guide for Motion

| Font Category | Best Motion Contexts | AE Special Considerations |
|---------------|---------------------|--------------------------|
| **Display serif** (ITC Benguiat, Playfair) | Drama, editorial, brand films | Weight may be too fine for fast motion; test at delivery size |
| **Condensed sans** (Bebas Neue, Barlow) | Sports, news, high-energy | Excellent for hard wipes; legible at high speed |
| **Geometric sans** (Futura, Montserrat) | Corporate, tech, clean brand | Works at all speeds; good for blur-scale-opacity |
| **Script / handwritten** | Warm, personal, creative brands | Per-character animation with Anchor Point stagger |
| **Monospace** (Courier, IBM Plex Mono) | Tech, code, cipher aesthetics | Character Offset trick works beautifully |
| **Variable fonts** | Weight blooms, expressive transitions | AE CC 2021+ required; test weight axis limits |

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

## 📊 Kinetic Typography Technique Comparison Table

| Technique | AE Mechanism | Timing | Context | Energy Level |
|-----------|-------------|--------|---------|--------------|
| Blur-Scale-Opacity | Text Animator, 3 properties, Ramp Up | 18–24f per word | Product, keynote, editorial | Low-Medium |
| Hard Wipe | Solid/shape wipe over text | 4–6f per element | Sports, news, high-energy | High |
| Slow Reveal (Bleeding) | Range Selector + Roughen Edges mask | 40f per word | Horror, drama, tension | Very Low |
| Character Scramble | Character Offset animator | 15–20f | Tech, data, cipher aesthetic | Medium |
| Kinetic Float | Position Y + Opacity | 12–16f stagger | Ambient, editorial, documentary | Low |
| Scale Burst | Scale 0→110%→100% | 8–12f | Headlines, alerts, CTAs | High |
| Slide-In | Position X + Opacity | 8–14f per word | Social, casual, energetic | Medium-High |
| Typewriter | Character-by-character reveal | 2–4f per character | Code, terminal, retro | Medium |

---

## 🎬 Case Study: Apple Keynote Motion — Technical Depth

Apple keynotes use a motion system so consistent that designers can identify Apple slide templates by their animation timing alone. The system is governed by five rules:

**Rule 1 — Product Before Copy:** Every product photograph or 3D render enters and settles before any text begins to move. The delay between product-settled and text-start is exactly 4–6 frames (167–250ms at 24fps).

**Rule 2 — Per-Word, Not Per-Character:** Apple uses per-word reveals for body copy. Per-character reveals would be too slow for the volume of text on a typical keynote slide. The audience's reading speed matches the reveal speed only at per-word pacing with 4–6 frame staggering.

**Rule 3 — One Direction:** All text on any given slide enters from the same direction (subtle downward drift from above, approximately 15–20px). Mixed directions within a slide never occur in Apple keynote design.

**Rule 4 — Blur First, Then Scale:** The text begins blurred and slightly large (120%), then de-blurs and scales to 100% as it arrives. This blur-then-scale (not scale-then-blur) sequence is specific to Apple's system and is why their text feels like it's "arriving from a distance."

**Rule 5 — No Exit Animations:** In Apple keynote slides, elements do not animate out. The slide simply cuts to the next. Exit animations waste time and distract from the product narrative.

**Why This Matters for Your Work:** This level of systematic thinking — five rules applied to every slide across a two-hour presentation — is what separates motion design from motion decoration. When you build a client presentation, define your 3–5 rules upfront and apply them without exception.

---

## 🗣️ Socratic Discussion Questions

1. The Stranger Things sequence uses a white background for a horror title. The Apple keynote uses a dark background for product reveals. Both choices are deliberate and effective. What is the principle that governs background choice in kinetic typography — and how do you articulate it to a client who says "just make it look cool"?

2. The "one technique per piece" rule is widely taught. But a 3-minute documentary segment might contain an energetic opening, a calm informational middle, and a dramatic closing. How do you apply technique consistency across a piece with intentionally varying emotional sections?

3. Font licensing is the most common legal mistake motion designers make. If a client provides a font in their brand guidelines document, does that constitute permission to use it in a commercial video? What questions should you ask before proceeding?

4. Variable font animation is available in AE CC 2021+. But most motion designers still animate weight through multiple separate text layers (one at Regular, one at Bold). What are the tradeoffs between the variable font approach and the multi-layer approach?

5. Sports graphics use fast, linear entrances — completely against the ease-out rule for entrance animations. The reason is genre expectation, not physics. How do you identify when a genre expectation overrides a physical principle?

---

## 📚 Further Reading

- *Typographie* — Emil Ruder (niggli Verlag, 1967) — the foundational text on typography and white space; every motion designer who works with type should read chapters on rhythm and contrast
- *Stop Stealing Sheep & Find Out How Type Works* — Erik Spiekermann & E.M. Ginger (Adobe Press, 3rd ed. 2013) — the most readable introduction to typography; covers optical sizing, weight, and spacing
- *The Anatomy of Type: A Graphic Guide to 100 Typefaces* — Stephen Coles (Harper Design, 2012) — the most useful reference for identifying and choosing typefaces for motion work
- *CSS Animation Pocket Guide* — Val Head (A Book Apart, 2015) — specifically addresses text animation in the web context, including the interplay between CSS animations and variable fonts
- [School of Motion — Kinetic Typography Tutorial](https://www.youtube.com/results?search_query=school+of+motion+kinetic+typography+after+effects) — the most-used free tutorial on AE text animators
- [AE Text Animator Documentation](https://helpx.adobe.com/after-effects/using/animating-text.html) — Adobe's full reference for all Range Selector properties
- [Adobe Fonts Licensing Guide](https://fonts.adobe.com/fonts/licensing) — read before using any font in a client deliverable
