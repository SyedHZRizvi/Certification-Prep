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

> 🎯 **Exam tip:** Onion skinning shows frames at reduced opacity; the exact frames shown are controlled by the onion skin range markers at the top of the Timeline. Dragging these markers extends or contracts the visible range.

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

> 🎯 **Exam tip:** "Slow In / Slow Out" is one of the 12 Principles of Animation and describes the distribution of in-betweens relative to key poses. It is NOT the same as "ease in" and "ease out" in software — those are the software implementations of the same principle.

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

---

## 💫 The Smear Frame

The smear frame is one of the most powerful and misunderstood techniques in animation. It is used in fast motion — especially when a body part moves so quickly that the human eye would not be able to track it as a discrete shape. Rather than simply removing the part (making it "snap" to its new position), the animator draws an intentionally distorted, elongated, or multiplied version of the part that spans the space between its starting and ending position.

### Smear Frames in Spider-Verse

The animators on *Spider-Man: Into the Spider-Verse* used smear frames extensively for hand movements, head turns, and punching actions. They pushed these smears further than any mainstream studio had dared before — sometimes drawing six or eight ghost hands trailing off a character's arm, or stretching a head into an abstract shape that reads as "fast rotation" rather than any recognizable anatomy.

The reason it works: the human visual system, when processing fast motion, expects blur or stretch. A smear frame satisfies that expectation in a single drawing.

### Smear Frames in Anime

Japanese animation (anime) studios use smear frames extensively, often called "スメア" (sumea) or "blur frames." Classic examples appear in Demon Slayer (Kimetsu no Yaiba) and Jujutsu Kaisen's fight sequences, where Ufotable's compositing team blends 3D and 2D smear frames seamlessly.

### How to Draw a Smear Frame

1. Identify the fast action — typically anything that lasts only 1–3 frames.
2. Draw the starting position and ending position as key poses.
3. On the frame(s) between them, draw the "smear" — which can be:
   - An elongated blur shape connecting start to end
   - A multiplied version of the body part at several positions simultaneously
   - An abstract shape that suggests fast movement without representing anatomy
4. Test: the smear frame should feel invisible during playback (the viewer's brain processes it subconsciously) but its absence should make the motion feel wrong.

> 🚨 **Trap on the exam:** Smear frames are *not* a beginner shortcut. They require understanding of the motion's start and end to draw convincingly. A smear frame placed at the wrong position in the sequence will read as a mistake, not a stylistic choice.

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

## 📋 Summary

- Frame-by-frame animation gives you complete control over every drawing; no computer interpolation.
- Onion skinning shows adjacent frames at reduced opacity so you can track motion arcs during drawing.
- The professional workflow is key poses → rough in-betweens → cleanup → color.
- In-betweening by hand requires understanding spacing: even spacing = mechanical; clustered spacing = natural ease.
- All living motion follows arcs; track them with onion skins and fix kinked or broken arcs early.
- Smear frames simulate fast motion through intentional distortion — used in Spider-Verse, anime, and Cuphead.

## ➡️ Next Steps

[Module 3: Tweening & Motion Paths →](../Module-03-Tweening-Motion-Paths/Reading.md)

With frame-by-frame fundamentals in hand, Module 3 shows you the other side: letting Animate interpolate between poses using motion tweens — and the art of customizing easing curves so the result feels just as alive as hand-drawn work.

## 📚 Further Reading

- *The Animator's Survival Kit* — Richard Williams, Chapters 3–7 (timing, spacing, arcs, weight)
- *Cartoon Animation* — Preston Blair (spacing charts, walk cycles, frame-by-frame principles)
- Corridor Crew YouTube: "Animators React to Smear Frames" — free, excellent breakdown
- Aaron Blaise YouTube channel — professional Disney animator demonstrating frame-by-frame technique
