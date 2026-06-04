---
permalink: /35-Motion-Graphics-UI-Animation/Module-04-Logo-Brand-Motion/Reading/
title: "Module 4: Logo & Brand Motion"
---

# 🏷️ Module 4: Logo & Brand Motion

## The 30-Second Problem

In 1997, Nike paid a design firm $35 to design its Swoosh logo. By 2024, that mark was worth an estimated $26 billion. But for most of the 20th century, the Swoosh just sat there — static, flat, silent. When Nike finally built motion guidelines for their brand, they discovered what every brand discovers: a logo that works perfectly in print often needs to be completely rethought for motion. The Swoosh's problem is that it's just a line. How do you animate a line and make it feel worth $26 billion?

This module is about solving exactly that problem — for Nike, Netflix, Google, and every client logo you'll ever animate.

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

**Nike Application:** The Swoosh draws from left to right, the tail appearing last — following the natural direction of a brush stroke. The timing uses ease-in, accelerating as the stroke "gains momentum."

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

**Google Application:** Google's animated logo morphs from a circle of dots to the "G" mark and back — the geometric purity of the starting form makes the transformation feel like it was always there.

### Technique 3: The 3D Flip

The logo appears to flip in 3D space — most commonly a Y-axis rotation revealing the mark.

**How It Works in After Effects:**
1. Enable 3D on the logo layer
2. Create a camera (Add Camera → One-Node Camera)
3. Keyframe Y Rotation from 90° to 0° (the logo flips from edge-on to full face)
4. Optional: add depth using the Z-axis position and camera DOF

**Best For:**
- Bold, simple marks with strong negative space
- Corporate and financial brands
- Business card-style brand presentations

**Netflix Application:** The Netflix "N" ident uses a variation — layers of the N peel back in Z-space, creating depth before snapping to the flat 2D mark.

---

## 🎨 Brand Systems in Motion

A brand system in motion means that every animated element — not just the logo — follows a consistent motion vocabulary. This is different from "making things move." It's defining the rules.

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
1. **Logo clearspace in motion** — how much space around the logo must remain free during animation
2. **Minimum screen time** — the logo should never appear for less than X frames
3. **Safe zones** — where the animated logo can and cannot appear over moving backgrounds
4. **Approved transitions** — which of your three techniques is approved for each context (social vs broadcast vs digital)
5. **Prohibited motions** — what the logo can never do (flip upside down, go to 0% opacity, overlap text, etc.)

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
4. Paste Path (Ctrl+V) — this creates a keyframe matching shape A's form
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

## 📺 Broadcast Package Design

A broadcast package is a coordinated set of motion graphics assets for a television show, network, or event — including:
- **Open/Ident:** The main brand animation (15–60 seconds)
- **Bumpers:** Short transitions in/out of commercial breaks (3–5 seconds)
- **Lower-Thirds:** Name plates and information graphics (5–10 second hold)
- **Full-Screen Graphics:** Score bugs, maps, timeline graphics
- **Endboards:** Channel identity at end of segment

### The Grid System

All broadcast graphics exist on a 16:9 grid (1920×1080 or 3840×2160 for 4K) with **safe zones:**
- **Action Safe:** 93.75% of width/height — elements should not extend beyond this
- **Title Safe:** 80% of width/height — text should stay inside this region
- Modern broadcast (streaming) relaxes these rules, but they're still used as guidelines

### The Broadcast Color Space

Broadcast video uses BT.709 (HD) or BT.2020 (HDR) color spaces. Consumer screens use sRGB. If you design in sRGB and deliver for broadcast without converting, colors can appear crushed or oversaturated.

> 🎯 **Exam Tip:** After Effects compositions should be set to **Rec. 709** color profile for broadcast delivery. Levels must stay within **broadcast legal** ranges: luminance between 16–235 (not 0–255 full range) for SD/HD broadcast.

---

## 🏢 Case Studies: Nike, Netflix, Google

### Nike — The Swoosh in Motion

- **Primary technique:** Draw-on with custom path trim timing
- **Speed:** Fast — 12–18 frames for full reveal
- **Easing:** Ease-in acceleration mimics brush momentum
- **Color behavior:** Black first, white on dark background — never gray or gradient in motion
- **Sound:** A sharp, impactful whoosh paired with a percussive hit

**What makes it work:** The Swoosh draws in the direction of its natural stroke. It gains speed toward the end (ease-in) as if the brush pressure increased. It feels like athletic momentum.

### Netflix — The N Reveal

- **Primary technique:** 3D Z-axis layer reveal
- **Speed:** Slow — approximately 90 frames at 24fps (3.75 seconds) with a score
- **Easing:** Custom spring — the final snap to 2D has a subtle deceleration
- **Sound:** The Netflix "tudum" sound is now one of the most recognized brand sounds in history — added to the motion in 2019
- **The "N" design:** Composed of four strips that pull apart in Z-space, revealing depth before collapsing to flat

**What makes it work:** The reveal creates anticipation — you see complexity before the simplicity of the final mark. The "tudum" is precisely timed to the final snap, creating a satisfying climax.

### Google — The Motion Language

- **Primary technique:** Color cycling, morphing between the G, dots, and text
- **Speed:** Medium — 500ms–1s per state change
- **The Four Colors:** Always in Google's canonical order (blue, red, yellow, green)
- **Voice assistant integration:** The Google Assistant orb uses those same four colors in a swirling motion that responds to audio input
- **Rule:** The four colors always move together, never as isolated elements

**What makes it work:** The color order is so consistent that the motion itself teaches the brand. Users learn to associate the color sequence with "Google responding."

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

## 📚 Further Reading

- *Logo Design Love* — David Airey (New Riders) — logo principles before motion
- *Designing Brand Identity* — Alina Wheeler (Wiley)
- [Netflix Design Blog — The N](https://netflixtechblog.com)
- [Google Design — Motion Principles](https://design.google/library/motion-design-principles/)
- [School of Motion — Logo Animation Tutorial](https://www.youtube.com/results?search_query=school+of+motion+logo+animation+after+effects)
