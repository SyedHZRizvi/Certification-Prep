---
permalink: /34-2D-Digital-Animation/Module-02-Frame-by-Frame/
title: "Module 2: Frame-by-Frame Animation"
---

# 🖊️ Module 2: Frame-by-Frame Animation

## The Flip Book That Started Everything

Before software, before cels, before Disney — there was the flip book. A nineteenth-century inventor discovered that drawing slightly different pictures on successive pages and then flipping them quickly created the illusion of motion. That is still, at its core, what frame-by-frame animation is. Every drawing exists. Every drawing matters. Nothing is interpolated by a machine.

The animators behind *Spider-Man: Into the Spider-Verse* talked publicly about their commitment to a principle they called "breaking the rules." They intentionally drew on twos (12 fps drawings) for Spider-Man's home universe while using different frame rates and smearing techniques for characters from other dimensions. The result felt kinetic, chaotic, and alive in a way that no purely software-tweened animation had ever achieved. They understood that audiences *feel* the difference between a drawing that a human hand made and a curve that a computer interpolated — even if they can't articulate why.

This module teaches you to draw your animation. Every technique here — onion skinning, arcs, in-betweening, smear frames — is a discipline that makes your tweened work better even when you're not drawing frame by frame. Because you'll know what a *good* motion arc feels like.

---

## 🧅 Onion Skinning

Onion skinning is the digital equivalent of the traditional animator's light table. When a sheet of paper is placed on a light table, the animator can see through it to the drawings on the sheets below — the previous frames. Onion skinning shows you a semi-transparent "ghost" of nearby frames so you can judge where your current drawing sits in the sequence.

### Onion Skin Settings in Animate

| Setting | What It Controls |
|---------|-----------------|
| **Range** | How many frames before/after the current frame to display (typically 2–4) |
| **Tint** | Previous frames often show in blue/orange to distinguish them from the current frame |
| **Mode** | Outline only (shows just the stroke paths) or full color (shows fills too) |
| **Always Show** | Keeps onion skins visible during playback (useful for arcs review) |

### Reading Onion Skins

When you look at your onion skin display, you're reading motion. If the ghosts of previous frames are evenly spaced, the motion is constant speed (linear). If they crowd together at the beginning and spread out at the end, the motion is accelerating (ease in). If they spread and then crowd, the motion is decelerating (ease out).

This is the frame-by-frame animator's superpower: you can *see* the timing of your motion as a spatial pattern before you play back a single frame.

> 🎯 **What the exam tests:** Onion skinning shows frames at reduced opacity; the exact frames shown are controlled by the onion skin range markers at the top of the Timeline. Dragging these markers extends or contracts the visible range.

---

## ✏️ The Rough-to-Cleanup Workflow

Professional frame-by-frame animation is not drawn once and finished. It happens in stages:

### Stage 1: Key Poses

Key poses (also called "extremes") are the most important positions in the motion — the beginning pose, the end pose, and any critical in-between moments. You draw these first, loosely, to establish the arc and timing of the motion.

Key poses in a walk cycle: the **contact position** (foot hitting the ground), the **down position** (body at its lowest), the **passing position** (one leg passing the other), and the **up position** (body at its highest).

### Stage 2: Rough In-Betweens

Between the key poses, you add rough in-between drawings. These establish the overall path of motion but are not yet refined. At this stage you're thinking about arcs and spacing, not about line quality.

### Stage 3: Cleanup

Cleanup is the discipline of redrawing your rough in-betweens on a new layer (or after turning off the rough layer) with clean, intentional lines. In Animate, the typical workflow is:

1. Draw roughs on a dedicated "roughs" layer (low opacity or different color)
2. Lock the roughs layer
3. Create a new "cleanup" layer directly above
4. Draw clean lines directly over the roughs
5. Delete or hide the roughs layer when done

### Stage 4: Color

Color is added after cleanup is approved. In Animate this usually means using the Paint Bucket to fill enclosed areas, or importing a colored version from Photoshop or Clip Studio Paint.

---

## 🔄 In-Betweening by Hand

In-betweening (or "tweening" in its hand-drawn sense) is the process of drawing the frames that exist between two key poses. Traditional studios had dedicated "in-betweeners" — junior animators whose job was to fill in the motion between the key poses drawn by senior animators.

### Spacing Charts

A spacing chart is a small diagram drawn in the margin of an exposure sheet (the paper table that tracks which drawing goes on which frame). It shows how far apart successive in-betweens should be placed.

```
Key A  ----  ----  ----  Key B
  1    2    3    4    5    6
```

If the in-betweens are equally spaced (linear), motion feels mechanical. Most natural motion requires:
- **Slow In** (ease in): in-betweens clustered near the starting key pose
- **Slow Out** (ease out): in-betweens clustered near the ending key pose
- **Both**: motion that accelerates and then decelerates (most common for objects responding to gravity)

> 🎯 **What the exam tests:** "Slow In / Slow Out" is one of the 12 Principles of Animation and describes the distribution of in-betweens relative to key poses. It is NOT the same as "ease in" and "ease out" in software — those are the software implementations of the same principle.

### Pose-to-Pose vs. Straight-Ahead

These are the two fundamental approaches to frame-by-frame animation, with very different use cases:

| Method | Workflow | Best For | Risk |
|--------|---------|---------|------|
| **Pose-to-Pose** | Key poses first, fill in-betweens | Acting, dialogue, controlled motion | Can feel mechanical without careful in-betweens |
| **Straight-Ahead** | Frame 1 → Frame 2 → Frame 3... | Effects, fire, water, organic chaos | Hard to control timing; can run long |
| **Hybrid** | Pose-to-pose structure + straight-ahead fills | Complex character action | Requires experience to balance |

Most professional character animation uses **Pose-to-Pose** because it gives the director control over the performance at the key pose level before committing to in-betweens.

---

## 🌀 Arcs in Frame-by-Frame Animation

Living things almost never move in perfectly straight lines. Arms swing in arcs. Heads nod in arcs. Even fast, snappy motion follows an arc — it's just a very tight arc.

### Tracking Arcs

The classical way to track arcs in frame-by-frame animation is to place a physical dot at the tip of whatever is moving in each frame (a tip of a finger, the top of a head, the center of a ball), and then connect those dots. The result should be a smooth curve. If it's jagged or kinked, the arc has a problem.

In Animate, you can enable **Show Motion Paths** to display the path of a moving object across frames. For frame-by-frame animation (as opposed to tweened animation), you can manually check arcs by enabling onion skins and mentally connecting the positions of key body parts across frames.

### Common Arc Mistakes

| Mistake | Description | Fix |
|---------|-------------|-----|
| Straight-line arc | Moving from A to B in a straight path | Add an intermediate drawing that bows off-axis |
| Broken arc | A kink where motion direction suddenly reverses | Find and fix the offending frame; soften the change |
| Flat arc | Motion that stays on a perfectly horizontal plane | Add a subtle vertical component to simulate weight |
| Floating arc | Motion appears to drift without gravity | Add slow-out near the apex; faster near bottom |

---

## 💫 The Smear Frame

The smear frame is one of the most powerful and misunderstood techniques in animation. It is used in fast motion — especially when a body part moves so quickly that the human eye would not be able to track it as a discrete shape. Rather than simply removing the part (making it "snap" to its new position), the animator draws an intentionally distorted, elongated, or multiplied version of the part that spans the space between its starting and ending position.

### Smear Frames in Spider-Verse

The animators on *Spider-Man: Into the Spider-Verse* used smear frames extensively for hand movements, head turns, and punching actions. They pushed these smears further than any mainstream studio had dared before — sometimes drawing six or eight ghost hands trailing off a character's arm, or stretching a head into an abstract shape that reads as "fast rotation" rather than any recognizable anatomy.

The reason it works: the human visual system, when processing fast motion, expects blur or stretch. A smear frame satisfies that expectation in a single drawing.

### Smear Frames in Anime

Japanese animation (anime) studios use smear frames extensively, often called "スメア" (sumea) or "blur frames." Classic examples appear in Demon Slayer (Kimetsu no Yaiba) and Jujutsu Kaisen's fight sequences, where Ufotable's compositing team blends 3D and 2D smear frames seamlessly.

### Smear Frames in Cuphead

Studio MDHR's *Cuphead* (2017) built its entire visual identity around 1930s Fleischer Brothers animation techniques, including aggressive smear frames for any fast motion. Because the game runs in real time, the smear frames are pre-baked into the sprite sheets — each action sequence has hand-drawn smear frames at the 1–2 frame marks.

### Smear Frame Types — Quick Reference

| Type | When to Use | Example |
|------|------------|---------|
| Elongated blur shape | Simple 1-direction fast action | Fist punch, foot kick |
| Multiple limb ghost | Hands, fingers in fast complex motion | Fast hand gesture, piano playing |
| Abstract shape | Extremely fast head turns or spins | 180° head turn in 2 frames |
| Stretch with motion lines | Traditional cartoon fast run | Classic Looney Tunes run start |

### How to Draw a Smear Frame

1. Identify the fast action — typically anything that lasts only 1–3 frames.
2. Draw the starting position and ending position as key poses.
3. On the frame(s) between them, draw the "smear" — which can be:
   - An elongated blur shape connecting start to end
   - A multiplied version of the body part at several positions simultaneously
   - An abstract shape that suggests fast movement without representing anatomy
4. Test: the smear frame should feel invisible during playback (the viewer's brain processes it subconsciously) but its absence should make the motion feel wrong.

> 🚨 **Exam Trap:** Smear frames are *not* a beginner shortcut. They require understanding of the motion's start and end to draw convincingly. A smear frame placed at the wrong position in the sequence will read as a mistake, not a stylistic choice.

---

## 🎬 Frame-by-Frame in Animate: Practical Workflow

### Setting Up Layers

A typical frame-by-frame scene in Animate uses these layers (from top to bottom):

| Layer | Purpose |
|-------|---------|
| Cleanup | Final clean drawings |
| Roughs | Rough layout drawings (hidden before export) |
| Color | Filled color areas (if separate from lines) |
| Background | Static or separately animated background |

### Using the Onion Skin During Drawing

1. Place playhead on the current frame.
2. Toggle Onion Skin on (the icon at the bottom of the Timeline).
3. Draw your current frame with the previous and next frames' ghosts visible.
4. Adjust the range with the onion skin markers if you need to see further back.

### Timing on the Exposure Sheet

Even if you're working digitally, understanding the exposure sheet (X-sheet) helps. An exposure sheet maps:
- Which drawing (by number) appears in which frame
- Which audio is playing in which frame (useful for lip sync setup)
- Which level (layer) each drawing belongs to

For frame-by-frame work, many animators still sketch their timing on paper before touching Animate.

---

## 📊 Frame Counts and Timing Reference

| Action | Typical Frame Range (at 24fps) |
|--------|-------------------------------|
| Very fast blink | 2–3 frames |
| Normal blink | 6–8 frames |
| Head turn (fast) | 4–6 frames |
| Head turn (slow) | 12–16 frames |
| Walk cycle (one complete step) | 12 frames (on twos) |
| Jump anticipation | 4–8 frames |
| Jump to peak | 8–12 frames |
| Ball bounce (impact to peak) | 8–12 frames |
| Snappy arm swing | 3–5 frames |
| Heavy arm swing | 8–12 frames |
| Facial expression change | 4–8 frames |
| Character turn-around (180°) | 8–12 frames |

---

## 🎬 Production Case Study: Arcane & The Owl House

**Arcane** (Fortiche Productions, 2021) represents a landmark in hybrid frame-by-frame and digital animation. Fortiche developed a proprietary workflow combining:
- Traditional frame-by-frame key poses for expressive character moments
- 3D rigs for structural accuracy on complex camera moves
- Hand-painted textures and post-processing effects to unify the look

The result was animation that felt hand-crafted despite heavy digital assistance. The key insight: **frame-by-frame key poses drove the performance** even when computer tools filled in the motion.

**The Owl House** used a slightly different approach: digital cut-out rigs (Adobe Animate) for most scenes, with hand-drawn frame-by-frame overlays for action sequences and emotionally heightened moments. The team would identify key scenes where the rig couldn't capture the required expressiveness and then switch to a fully hand-drawn approach for those beats.

Both shows demonstrate a core industry principle: **knowing when to use frame-by-frame** is as important as knowing how.

---

## 🎯 What the Exam Tests: Module 2 Checklist

1. What does onion skinning display and how do you control its range?
2. What is the difference between Pose-to-Pose and Straight-Ahead approaches?
3. What does "Slow In / Slow Out" describe in terms of in-between spacing?
4. What is a smear frame and when should it be used?
5. Name the four stages of the rough-to-cleanup workflow.
6. What does a broken arc look like in an onion skin display?
7. At 24fps, how many frames does a standard walk step take (on twos)?
8. What layer structure is recommended for frame-by-frame work in Animate?
9. What is the difference between key poses (extremes) and in-betweens?
10. Why does evenly-spaced in-betweening produce mechanical-looking motion?

---

## 🚨 Exam Trap Section

- **Smear frames ≠ mistakes:** An examiner may present a multi-hand smear frame and ask if it's a "continuity error." It is not — it's an intentional technique.
- **"On twos" is a technique, not a bug:** At 12fps drawings at 24fps playback, the motion is intentionally less smooth. This is an artistic choice, not a technical limitation.
- **Straight-ahead is not always better:** Some students assume straight-ahead is more "natural." For character acting scenes, pose-to-pose gives directors more control and is the professional standard.
- **Cleanup ≠ tracing:** Cleanup artists interpret the rough, they don't mechanically trace it. A good cleanup artist understands the animation intent.

---

## 🤔 Socratic Discussion Questions

- What would you do if your onion skins showed a kinked arc but you couldn't identify which frame was causing the problem? What is your diagnostic approach?
- The directors of *Spider-Verse* animated different characters at different frame rates in the same scene. How do you think that production decision affected the audience's perception of each character?
- If you had to explain to a client why smear frames make the animation look *better* even though they look "wrong" as individual frames, what would you say?
- When would you choose Straight-Ahead over Pose-to-Pose? Give three specific scenario types.

---

## 🎞️ Multi-Plane Composition in Frame-by-Frame

Traditional animation used the multi-plane camera — a camera that could photograph layers of artwork at different depths simultaneously, creating a parallax effect as the camera moved. In digital frame-by-frame animation, this is simulated through:

| Technique | How | Software |
|-----------|-----|---------|
| Layer separation | Background, midground, foreground on separate Animate layers | Animate or AE |
| Parallax movement | Different scroll speeds per depth layer | After Effects with camera movement |
| Depth blur | Gaussian blur on background layers to simulate depth of field | After Effects |
| Scaling per depth | Objects appear larger as they approach foreground | Perspective simulation in animation |

Productions like *Wolfwalkers* (Cartoon Saloon, 2020) used extreme multi-plane depth with highly detailed hand-painted layers at different depths, creating a storybook-like visual depth that referenced illuminated manuscript illustrations.

---

## 🔑 Common Frame-by-Frame Mistakes and Fixes

| Mistake | How to Spot It | Fix |
|---------|--------------|-----|
| Floating drawings | Character seems to drift or float off the ground | Add stronger contact with ground; check Down position height |
| Twinning | Both arms/legs doing the same thing at the same time | Offset timing between limbs by 4–6 frames |
| Popping | A drawing suddenly jumps to a different position | Check for missing in-between; add transitional frame |
| Stiff holds | A hold feels frozen/dead, not alive | Add subtle weight shift or breathing animation in the hold |
| Over-drawn lines | Cleanup lines are too uniform in weight | Vary line weight; thin at extremities, thicker at contour points |

---

## 🖼️ Practical Exercise: The Bouncing Ball

The bouncing ball is the "Hello World" of frame-by-frame animation. It tests:

- **Arc** — does the ball follow a parabolic path?
- **Squash** — does the ball flatten on impact?
- **Stretch** — does the ball elongate during the fast downward fall?
- **Slow In / Slow Out** — do the in-betweens cluster at the top (slow out before falling) and crowd before impact (slow in as gravity accelerates it)?
- **Secondary action** — does the ball lose height with each bounce?

A bouncing ball that does all of these correctly is more complex than it looks, which is why animation schools use it as a first assignment.

---

## 📊 The 12 Principles — Frame-by-Frame Relevance

Disney's "12 Principles of Animation" (formalized by Ollie Johnston and Frank Thomas in *The Illusion of Life*) are most purely expressed in frame-by-frame work. Here's how the most exam-relevant principles apply:

| Principle | Frame-by-Frame Application |
|-----------|--------------------------|
| **Squash and Stretch** | Drawn directly into each frame; most powerful at 1 frame before and at impact |
| **Anticipation** | Key pose drawn first; in-betweens establish the wind-up |
| **Staging** | Silhouette clarity; each frame should read as a clear shape |
| **Straight Ahead / Pose-to-Pose** | The two fundamental drawing approaches (this entire module) |
| **Slow In / Slow Out** | Controlled by in-between spacing; not by software |
| **Arcs** | Tracked manually through onion skinning |
| **Secondary Action** | Separately tracked body parts (hair, clothing) on additional layers |
| **Timing** | Controlled entirely by which frame you place each drawing on |
| **Exaggeration** | Pushed intentionally beyond realistic anatomy for visual impact |
| **Solid Drawing** | Three-dimensional feel; weight and volume maintained across frames |
| **Follow Through / Overlapping** | Separate layers for elements that lag behind primary motion |
| **Appeal** | Each pose should be a strong, readable silhouette |

> 🎯 **What the exam tests:** The 12 Principles were developed for hand-drawn frame-by-frame animation. Even though modern production uses software tools, the principles remain the conceptual foundation of all animation quality judgment.

---

## 💼 Industry Context: Frame-by-Frame vs. Cut-Out in the Market

| Technique | Studios Using It | Budget Range | Speed |
|-----------|-----------------|-------------|-------|
| Full frame-by-frame | Cartoon Saloon, high-end features | Very high | Slow |
| Hybrid (key poses FbF + cut-out fills) | Most US TV animation | Medium-high | Moderate |
| Cut-out only | YouTube creators, commercial studios | Low-medium | Fast |
| Pure cut-out with no FbF | Explainer video companies | Low | Fastest |

Frame-by-frame experience makes you a more valuable animator even in cut-out pipelines, because you understand what the software is trying to approximate — and you know when to take control back from it.

---

## 📋 Summary

- Frame-by-frame animation gives you complete control over every drawing; no computer interpolation.
- Onion skinning shows adjacent frames at reduced opacity so you can track motion arcs during drawing.
- The professional workflow is key poses → rough in-betweens → cleanup → color.
- In-betweening by hand requires understanding spacing: even spacing = mechanical; clustered spacing = natural ease.
- All living motion follows arcs; track them with onion skins and fix kinked or broken arcs early.
- Smear frames simulate fast motion through intentional distortion — used in Spider-Verse, anime, Cuphead, and Arcane.
- Pose-to-Pose is the standard for character animation; Straight-Ahead for organic effects.

## ➡️ Next Steps

[Module 3: Tweening & Motion Paths →](../Module-03-Tweening-Motion-Paths/Reading.md)

With frame-by-frame fundamentals in hand, Module 3 shows you the other side: letting Animate interpolate between poses using motion tweens — and the art of customizing easing curves so the result feels just as alive as hand-drawn work.

## 🎬 Software Tools for Frame-by-Frame in 2D Production

While Animate is central to this course, professional frame-by-frame work uses a range of tools depending on the studio:

| Software | Frame-by-Frame Capability | Onion Skin | Typical Pipeline Use |
|----------|--------------------------|------------|---------------------|
| **Adobe Animate** | Good | Yes | TV animation, indie |
| **Toon Boom Harmony** | Excellent | Yes | Major broadcast studios |
| **TVPaint** | Professional-grade | Yes (multiple modes) | Feature-grade hand-drawn |
| **Clip Studio Paint** | Very good | Yes | Indie, manga-style |
| **Procreate (iPad)** | Basic | Yes | Sketching, short clips |
| **OpenToonz** | Professional | Yes | Studio Ghibli (historical use); free |
| **Blender (Grease Pencil)** | Good | Yes | 2D-in-3D indie films |

TVPaint is particularly notable for offering the most analog-feeling frame-by-frame experience: its brush engine and onion skin system are designed around traditional animation paper workflow, making it the tool of choice for animators who trained traditionally.

---

## 📊 Onion Skin Strategies by Production Type

Different animation contexts call for different onion skin configurations:

| Context | Range Setting | Mode | Tint |
|---------|--------------|------|------|
| Rough key pose pass | 2 frames back, 2 forward | Outline only | On |
| In-betweening | 1 frame back, 1 forward | Full color | On |
| Arc checking (review pass) | 4–6 frames | Outline only | On |
| Cleanup | Only previous frame | Full color | Off (to see lines clearly) |
| Smear frame creation | 2 frames back, 2 forward | Full color | On (see both endpoints) |

Experienced animators develop an instinct for when to increase the range (complex arc checking) vs. decrease it (single in-between focus). Toggling onion skins frequently during the drawing process — rather than leaving them always on — prevents visual noise that obscures the current drawing.

---

## 📚 Further Reading

- *The Animator's Survival Kit* — Richard Williams, Chapters 3–7 (timing, spacing, arcs, weight)
- *Cartoon Animation* — Preston Blair (spacing charts, walk cycles, frame-by-frame principles)
- Aaron Blaise YouTube channel — professional Disney animator demonstrating frame-by-frame technique
