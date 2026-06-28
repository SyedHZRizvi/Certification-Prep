---
permalink: /35-Motion-Graphics-UI (User Interface)-Animation/Module-04-Logo-Brand-Motion/Reading/
title: "Module 4: Logo & Brand Motion"
---

# 🏷️ Module 4: Logo & Brand Motion

## The 30-Second Problem

In 1997, Nike paid a design firm $35 to design its Swoosh logo. By 2024, that mark was worth an estimated $26 billion. But for most of the 20th century, the Swoosh just sat there, static, flat, silent. When Nike finally built motion guidelines for their brand, they discovered what every brand discovers: a logo that works perfectly in print often needs to be completely rethought for motion. The Swoosh's problem is that it's just a line. How do you animate a line and make it feel worth $26 billion?

This module is about solving exactly that problem, for Nike, Netflix, Google, and every client logo you'll ever animate.

---

## 🔬 Three Fundamental Logo Reveal Techniques

### Technique 1: The Draw-On

The draw-on simulates the logo being "written" or "drawn" in real-time, tracing along its paths.

**How It Works in After Effects:**
1. Import or build the logo as shape layers (not raster)
2. Apply `Layer > Layer Styles` → Or use shape layer path trim
3. On each shape layer: **Contents > Shape > Trim Paths**
4. Set Start = 0%, End = 0%
5. Animate End from 0% to 100% over the reveal duration
6. Stagger each path's animation for complexity

**Best For:**
- Script/handwritten-style logos
- Logos with clear path direction (arrows, cursive letterforms)
- Brand films and intros where time is available (1–3 seconds)

**Nike Application:** The Swoosh draws from left to right, the tail appearing last, following the natural direction of a brush stroke. The timing uses ease-in, accelerating as the stroke "gains momentum."

### Technique 2: The Morph

Shape morphing transforms one form into another over time. In After Effects, this uses shape layer paths with matching point counts.

**How It Works:**
1. Build the starting shape (e.g., a circle) as a shape layer
2. Duplicate the path
3. On a new keyframe, edit the path to match the logo form
4. AE interpolates between the two path states

**Advanced Method:** Use Duik Ángela or Shape Morphing plugins for complex path morphs with more than one shape.

**Best For:**
- Abstract marks that derive from geometric primitives
- Brand "reveal" stories (the brand mark is hidden in a simple shape)
- Social media loops and stings

**Google Application:** Google's animated logo morphs from a circle of dots to the "G" mark and back, the geometric purity of the starting form makes the transformation feel like it was always there.

### Technique 3: The 3D Flip

The logo appears to flip in 3D space, most commonly a Y-axis rotation revealing the mark.

**How It Works in After Effects:**
1. Enable 3D on the logo layer
2. Create a camera (Add Camera → One-Node Camera)
3. Keyframe Y Rotation from 90° to 0° (the logo flips from edge-on to full face)
4. Optional: add depth using the Z-axis position and camera DOF

**Best For:**
- Bold, simple marks with strong negative space
- Corporate and financial brands
- Business card-style brand presentations

**Netflix Application:** The Netflix "N" ident uses a variation, layers of the N peel back in Z-space, creating depth before snapping to the flat 2D mark.

---

## 🎯 What the Exam Tests: Logo & Brand Motion

> 🎯 **Exam Callout 1:** The **Trim Paths** effect in AE is what powers draw-on animations. Trim Paths Start and End define what portion of the path is drawn. Animate End from 0% to 100% to draw the path forward. The exam tests: which AE property creates a draw-on effect? Answer: Trim Paths End.

> 🎯 **Exam Callout 2:** For a shape morph to work without twisting, both shapes must have **the same number of anchor points**, and corresponding points must be in logically aligned positions. The exam may ask: what causes a morph to twist? Answer: mismatched or misaligned anchor points.

> 🎯 **Exam Callout 3:** The Netflix "tudum" brand sound was officially added to the Netflix logo animation in **2019**. The exam may test the year or ask which company's brand sound is created by a single two-syllable musical hit at the moment of logo reveal.

> 🎯 **Exam Callout 4:** Broadcast color space for HD delivery is **Rec. 709** (BT.709). Broadcast legal luminance is **16–235** (not 0–255 full range). The exam tests: what is the broadcast-legal luminance range for HD video? Answer: 16–235.

> 🎯 **Exam Callout 5:** The **Action Safe zone** is 93.75% of the composition. The **Title Safe zone** is 80%. Text must stay inside Title Safe. The exam tests: what percentage of the frame is the Title Safe zone? Answer: 80%.

> 🎯 **Exam Callout 6:** Logo clearspace in motion means the minimum space around the logo that must remain free of other elements **during animation**, not just when static. A logo that animates close to the frame edge may briefly violate clearspace even if the final position is correct.

> 🎯 **Exam Callout 7:** The **one-node camera** in AE does not allow vertical horizon tilt (no "tilt" axis), it only supports pan and zoom. A **two-node camera** uses a Point of Interest and supports full 3D rotation. For logo 3D flips, a one-node camera is typically sufficient.

---

## ⚠️ Common Traps: Brand Motion

**Trap 1, Draw-On Direction:** The draw-on begins at the **Start** anchor point of the path. If the client expects the draw-on to follow the natural stroke direction (e.g., Nike Swoosh drawn left to right), the path must be drawn in that direction in AE's path tool. Drawing the path in the wrong direction and then reversing it with Trim Paths Start creates unexpected results.

**Trap 2, 3D Enable on Shape Layers:** Enabling 3D on a shape layer allows Y-axis rotation, but complex shape layers with multiple sub-shapes can render incorrectly in 3D mode (intersections may behave unexpectedly). For 3D logo flips, convert shape layers to pre-comps and enable 3D on the pre-comp layer.

**Trap 3, Color Profile in Broadcast Delivery:** Designing in sRGB and delivering to a broadcast pipeline without converting to Rec. 709 causes visible color shifts. The fix: set the AE project's Color Settings to Rec. 709 before building the comp, not at export time.

**Trap 4 Audio-Visual Sync for Brand Sounds:** The Netflix "tudum" and Intel chime are synchronized to the **visual climax** of the logo reveal not the beginning or middle. Students who add a brand SFX at frame 0 miss the purpose: the sound should arrive at the moment the logo reaches its final, settled state.

---

## 🎨 Brand Systems in Motion

A brand system in motion means that every animated element not just the logo follows a consistent motion vocabulary. This is different from "making things move." It's defining the rules.

### Motion Vocabulary Components

| Component | Examples |
|-----------|---------|
| **Easing signature** | Does the brand use spring? Ease-in-out? Custom bezier? |
| **Speed signature** | Fast and punchy (Red Bull) or slow and deliberate (Rolex)? |
| **Direction logic** | Does content always enter from bottom? From left? |
| **Color-in-motion** | Do brand colors appear in a fixed order? |
| **Sound pairing** | Does motion have a sonic signature (Intel bong, T-Mobile jingle)? |
| **Shape behavior** | Do brand shapes scale, rotate, or morph as their first motion? |

### Building a Brand Motion Guide

For every client logo project, document:
1. **Logo clearspace in motion**, how much space around the logo must remain free during animation
2. **Minimum screen time**, the logo should never appear for less than X frames
3. **Safe zones**, where the animated logo can and cannot appear over moving backgrounds
4. **Approved transitions**, which of your three techniques is approved for each context (social vs broadcast vs digital)
5. **Prohibited motions**, what the logo can never do (flip upside down, go to 0% opacity, overlap text, etc.)

---

## 🔷 Morph Transitions with Shape Layers

Beyond logo morphs, shape morphing is one of the most versatile techniques in motion graphics. The rule: shape layers must have the **same number of anchor points** to morph cleanly.

### The Point Matching Problem

When AE interpolates between two paths with the same point count, it tries to map Point 1 on shape A to Point 1 on shape B, Point 2 to Point 2, etc. If the points aren't logically matched, the morph twists.

**Fix:** Use the Pen tool to duplicate points and position them strategically so that each point on Shape A maps to a logically corresponding point on Shape B.

### Shape Layer Morph Workflow

1. Create Shape A as a closed path
2. Copy the path
3. Advance to the morph keyframe
4. Paste Path (Ctrl+V), this creates a keyframe matching shape A's form
5. Modify the path to Shape B
6. The morph interpolates

### Adding Overshoot

```javascript
// On the Path keyframe, add Elastic expression:
// (Using Ease and Wizz "elastic out" expression applied via script)
// Or manually: add a "poke-through" keyframe where the shape overshoots 
// slightly at the 80% mark before settling to final form
```

---

## 🔶 Advanced Shape Morphing: Complex Workflows

Beyond simple two-shape morphs, professional motion designers handle multi-state morphs, a shape that passes through 3, 4, or more distinct forms over the course of an animation.

### The Multi-State Morph Workflow

1. **Create Shape A** as a closed path (e.g., a square with 8 anchor points)
2. **Add Path keyframe at 0s**, this records Shape A
3. **Advance to 1s**, modify the path to Shape B (e.g., a rounded rectangle)
4. **Advance to 2s**, modify the path to Shape C (e.g., the logo mark)
5. AE interpolates between all three states

**The Point Count Constraint:** All states must have the same anchor point count. If Shape A has 8 points, Shapes B and C must also have 8 points. Add "invisible" points (two points placed on top of each other) to match counts.

### Morph Smoothing with Roving Keyframes

Standard morph keyframes often create uneven velocity, the morph moves faster in some sections and slower in others. Fix: right-click on path keyframes → **Rove Across Time**. This redistributes velocity evenly across the morph.

### The Shape Morph Plugin Option

For complex morphs (10+ points, organic forms), the **DUIK Ángela** plugin provides path morphing with automatic point matching. It analyzes both paths and attempts to match corresponding points algorithmically, significantly reducing the manual point-matching work.

---

## 📺 Broadcast Package Design

A broadcast package is a coordinated set of motion graphics assets for a television show, network, or event, including:
- **Open/Ident:** The main brand animation (15–60 seconds)
- **Bumpers:** Short transitions in/out of commercial breaks (3–5 seconds)
- **Lower-Thirds:** Name plates and information graphics (5–10 second hold)
- **Full-Screen Graphics:** Score bugs, maps, timeline graphics
- **Endboards:** Channel identity at end of segment

### The Grid System

All broadcast graphics exist on a 16:9 grid (1920×1080 or 3840×2160 for 4K) with **safe zones:**
- **Action Safe:** 93.75% of width/height, elements should not extend beyond this
- **Title Safe:** 80% of width/height, text should stay inside this region
- Modern broadcast (streaming) relaxes these rules, but they're still used as guidelines

### The Broadcast Color Space

Broadcast video uses BT.709 (HD) or BT.2020 (HDR) color spaces. Consumer screens use sRGB. If you design in sRGB and deliver for broadcast without converting, colors can appear crushed or oversaturated.

> 🎯 **Exam Tip:** After Effects compositions should be set to **Rec. 709** color profile for broadcast delivery. Levels must stay within **broadcast legal** ranges: luminance between 16–235 (not 0–255 full range) for SD/HD broadcast.

---

## 🎨 Brand Sound Pairing for Logo Animation

Every major brand animation now has a sonic signature. Sound is the missing dimension in many logo reveals. Here are the principles for pairing sound with visual logo motion:

### The Hit Point Rule
The sound's most prominent moment (its attack transient) should hit within ±2 frames of the logo's most prominent visual moment (its final snap to position or peak of exaggeration). Off by more than 2 frames = perceptibly out of sync.

### Sound-to-Technique Mapping

| Logo Technique | Appropriate SFX Category | Duration |
|---------------|--------------------------|---------|
| Draw-on | Soft whoosh (low → high) | Match draw duration |
| Morph | Transformation sound (texture shift) | Match morph duration |
| 3D Flip | Mechanical swipe + impact hit | 12–18f impact |
| Scale burst | Sharp impact + resonance | 4–6f attack |
| Opacity fade | Soft chime or no SFX | N/A |

### The Sonic Personality Framework

Before choosing a sound, define the brand's sonic personality:
- **Authoritative:** Low-frequency hits, minimal sustain, no reverberation
- **Playful:** Higher-frequency pops, spring sounds, slight reverb
- **Luxurious:** Long sustain, warm reverb, orchestral elements
- **Technical/Innovative:** Synthesized sounds, no organic instrument qualities
- **Friendly:** Soft chimes, slightly rounded attacks, medium reverb

> 🎯 **Exam Callout 8 (Logo):** The choice between a soft whoosh and a hard impact for a logo reveal is a brand personality decision, not a technical one. The exam may present a scenario where you must select the appropriate SFX for a given brand, match the sound's perceptual qualities to the brand adjectives.

---

## 🏢 Case Studies: Nike, Netflix, Google

### Nike, The Swoosh in Motion

- **Primary technique:** Draw-on with custom path trim timing
- **Speed:** Fast, 12–18 frames for full reveal
- **Easing:** Ease-in acceleration mimics brush momentum
- **Color behavior:** Black first, white on dark background, never gray or gradient in motion
- **Sound:** A sharp, impactful whoosh paired with a percussive hit

**What makes it work:** The Swoosh draws in the direction of its natural stroke. It gains speed toward the end (ease-in) as if the brush pressure increased. It feels like athletic momentum.

### Netflix, The N Reveal

- **Primary technique:** 3D Z-axis layer reveal
- **Speed:** Slow, approximately 90 frames at 24fps (3.75 seconds) with a score
- **Easing:** Custom spring, the final snap to 2D has a subtle deceleration
- **Sound:** The Netflix "tudum" sound is now one of the most recognized brand sounds in history, added to the motion in 2019
- **The "N" design:** Composed of four strips that pull apart in Z-space, revealing depth before collapsing to flat

**What makes it work:** The reveal creates anticipation, you see complexity before the simplicity of the final mark. The "tudum" is precisely timed to the final snap, creating a satisfying climax.

### Google, The Motion Language

- **Primary technique:** Color cycling, morphing between the G, dots, and text
- **Speed:** Medium, 500ms–1s per state change
- **The Four Colors:** Always in Google's canonical order (blue, red, yellow, green)
- **Voice assistant integration:** The Google Assistant orb uses those same four colors in a swirling motion that responds to audio input
- **Rule:** The four colors always move together, never as isolated elements

**What makes it work:** The color order is so consistent that the motion itself teaches the brand. Users learn to associate the color sequence with "Google responding."

---

## 🔧 Exporting Logo Animations for Multiple Contexts

A professional logo animation rarely ships as a single file. Clients typically need:

| Deliverable | Format | Specs | Use Case |
|------------|--------|-------|---------|
| Website hero | Lottie JSON | Shape layers only, no effects | Web page header |
| Email signature | Animated GIF | Max 500KB; 256 colors | Email clients |
| Social media | MP4, H.264 | 1080×1080 or 1080×1920, 30fps | Instagram, LinkedIn |
| Broadcast | ProRes 4444 | 1920×1080, Rec. 709 | TV broadcast |
| Presentation | MP4 or GIF | PowerPoint/Keynote compatible | Slide decks |
| Print-adjacent | Static frame (PNG) | Transparent background, 300dpi | The "approved rest state" |

**The "Approved Rest State":** Every logo animation should have an approved final frame, the position the logo rests in after the animation completes. This frame is the logo's "static" version. For all print and static digital use, the client uses this specific frame, not an arbitrary still.

**The Delivery Folder Structure:**
```
ClientName-LogoAnimation/
  01_Broadcast/
    logo-reveal-1920x1080-h264.mp4
    logo-reveal-1920x1080-prores4444.mov
  02_Web/
    logo-reveal-animation.json  (Lottie)
    logo-reveal-512x512.mp4     (fallback)
  03_Social/
    logo-reveal-1080x1080.mp4
    logo-reveal-1080x1920.mp4
  04_Presentation/
    logo-reveal-1920x1080.gif
  05_Static/
    logo-reststate-transparent.png
  06_Source/
    logo-reveal.aep             (AE project)
```

---

## 📋 Summary

| Technique | Best For | Key Setup |
|-----------|----------|-----------|
| Draw-On | Handwritten marks, paths | Trim Paths, offset Start/End keyframes |
| Morph | Geometric transformations | Same point count, path keyframing |
| 3D Flip | Bold flat marks | Enable 3D, Y-rotation 90° → 0° |

| Brand | Technique | Speed | Easing |
|-------|-----------|-------|--------|
| Nike | Draw-on | Fast (12–18f) | Ease-in |
| Netflix | 3D layers | Slow (90f) | Spring snap |
| Google | Morph/color | Medium (500ms) | Ease-in-out |

---

## 🔗 Next Steps

[Module 5: Infographic & Data Viz →](../Module-05-Infographic-Data-Viz/Reading.md)

---

## 🎬 Case Study: The Netflix Intro, Full Technical Analysis

The Netflix "N" reveal is one of the most technically ambitious logo animations in streaming media. Here is the full breakdown:

**Phase 1, The Layers Separate (0–1.5s):**
The "N" shape is composed of four layered strips in Z-space (the depth axis). At the start of the animation, these strips pull apart each moving to a different Z-position. The effect is that the flat 2D mark seems to have depth like it was always a three-dimensional object that we're seeing for the first time.

**Phase 2, The Reveal (1.5–3.0s):**
The strips rotate slowly in X-axis space, catching light differently as they turn. The color transitions from deep red through cinematic light values, creating the impression that the N is metallic or filmic rather than flat digital.

**Phase 3, The Collapse (3.0–3.5s):**
All four strips slam back together to Z=0, collapsing the 3D illusion back into the flat mark. This is where the "tudum" sound hits, precisely at the moment of collapse, not before.

**Phase 4, Hold (3.5–4.75s):**
The mark holds for 1.25 seconds. This is an extraordinarily long hold for a 4-second brand ident. The reasoning: the "tudum" continues to resonate, and the viewer's brain needs time to process the identity claim ("This is Netflix content"). The hold is not dead time, it is intentional perceptual space.

**The Sound Design:**
The "tudum" was engineered by Lon Bender, a two-time Oscar-winning sound designer. It is a single sound composed of a high-frequency attack (the "tu") and a low-frequency resonance (the "dum"). The high frequency registers consciously; the low frequency registers subliminally. This is why the sound feels larger than it sounds in isolation.

**The Lesson:**
Breakdowns like this are how motion designers develop taste. Study the work you admire at the technical level: which frame does the sound hit? How many pixels does the squash overshoot? What is the exact easing curve on the collapse? When you can answer these questions about the work you admire, you can apply the same thinking to your own.

---

## 📊 Logo Reveal Technique Selection Guide

| Logo Characteristic | Recommended Technique | Timing Range | Easing |
|--------------------|-----------------------|--------------|--------|
| Handwritten / script letterforms | Draw-on | 12–24f | Ease-In |
| Geometric / abstract mark | Morph | 16–30f | Ease-In-Out |
| Bold, flat, simple mark | 3D Flip | 20–36f | Spring |
| Multi-element wordmark | Staggered draw-on | 8–14f per element | Ease-Out |
| Icon + wordmark | Icon first, wordmark follows | 12f + 8f stagger | Ease-Out |
| Detailed, complex mark | Opacity reveal (no structural animation) | 18–24f | Ease-In-Out |

---

## 🗣️ Socratic Discussion Questions

1. Nike's Swoosh animates using ease-in, accelerating toward the end of the stroke. This communicates athletic momentum. What would ease-out communicate for the same animation? Which brand contexts might prefer ease-out for a draw-on logo reveal?

2. The Netflix "tudum" is now one of the most recognized brand sounds in history. But Netflix tested many versions before settling on it. What principles from Module 9 (Sound Design) govern how you would evaluate five candidate brand sounds against a logo animation?

3. A client gives you a brand identity with a very complex, multi-path logo that was designed for print. It has 47 separate anchor points. How do you approach building a draw-on animation for this logo without it looking chaotic?

4. The Google logo uses four specific colors always in the same order (blue, red, yellow, green). If a client asked you to animate their logo in brand colors but didn't have a canonical color order, how would you establish one, and how would you explain to the client why order matters in motion?

5. Brand motion guides document what a logo can and cannot do. But clients often want "something different" for a special campaign. How do you evaluate whether a one-time departure from the brand motion guide is acceptable vs damaging to brand consistency?

---

## 📚 Further Reading

- *Logo Design Love* David Airey (New Riders, 2nd ed. 2015) logo principles and mark design before motion; essential context for understanding what you're animating
- *Designing Brand Identity* Alina Wheeler (Wiley, 5th ed. 2017) the most comprehensive brand systems book; the motion chapter has grown with each edition
- *The Illusion of Life: Disney Animation* Frank Thomas & Ollie Johnston (Disney Editions, 1981) pp. 47–68 cover the physics principles behind character animation that directly apply to logo reveals
- [Netflix Design Blog](https://netflixtechblog.com), includes the technical documentation of the "N" ident and the reasoning behind it
- [Google Design Motion Principles](https://design.google/library/motion-design-principles/) Google's published motion spec, including the four-color animation rules
- [School of Motion Logo Animation Tutorial](https://www.youtube.com/results?search_query=school+of+motion+logo+animation+after+effects) the most-used free tutorial for all three logo reveal techniques
