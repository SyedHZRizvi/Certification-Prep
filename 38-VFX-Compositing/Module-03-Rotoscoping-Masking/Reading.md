---
title: "Module 3: Rotoscoping & Masking"
---

# ✂️ Module 3: Rotoscoping & Masking

## The Invisible Craft

When *Life of Pi* (2012, VFX by Rhythm & Hues) needed to composite a live tiger with Richard Parker, the digital team faced a problem no key could solve: the Bengal tiger in the reference footage was real, moving, furry, and not in front of a greenscreen. Every shot required manual rotoscoping — frame-by-frame isolation of the animal's silhouette traced by a human artist. Rhythm & Hues built a team of roto artists who collectively traced hundreds of thousands of frames over 18 months. The studio's VFX supervisor, Bill Westenhofer, accepted the Academy Award knowing that 500 roto artists had made it possible.

Rotoscoping is the art of patience. It is also, increasingly, the art of knowing when to use the automated tools (Rotobrush 2.0) and when to sit down with a Wacom tablet and trace. This module teaches both.

---

## 📐 Roto Principles

Rotoscoping is the process of creating an alpha matte for a moving subject frame by frame, without a greenscreen or tracking reference. The result is identical to a keyed matte — an alpha channel that isolates the subject — but the path to that result is entirely hand-drawn.

### Why Roto Is Needed

| Situation | Roto Solution |
|-----------|--------------|
| No greenscreen shot | Manual roto of every frame |
| Key fails on complex edges | Roto patch over the failing key region |
| Isolate a specific body part | Limb-level roto for selective color grading |
| Foreground passes in front of background elements | Layered roto for depth ordering |
| Legacy footage (old film, archival) | Roto is the only option |
| Color isolation (change sky color behind building edges) | Mask-based color isolation |

### The Roto Artist's Hierarchy of Effort

Professional roto artists are trained to use the **minimum effort to achieve the required quality**. This hierarchy drives efficiency:

1. **Tracking + shape** — if the object moves in a simple way (translation, rotation, scale), set one shape and use the tracker to drive it
2. **Procedural shapes** — ellipses and rectangles require fewer control points than splines; use them for limbs where possible
3. **Rotobrush 2.0** — for subjects on moderate-complexity backgrounds
4. **Manual spline animation** — frame-by-frame; only when the above fail

> 🎯 **Exam Tip:** Professional roto work is evaluated by the density of keyframes. Sparse keyframes (shape holds for many frames) = good roto technique. Dense keyframes (re-drawn every frame) = amateur technique that is also harder to correct later.

---

## 🤖 Rotobrush 2.0 in After Effects

Rotobrush 2.0 (introduced in AE 2020, powered by Adobe Sensei machine learning) is a semi-automated roto tool. Unlike the original Rotobrush, version 2.0 uses a neural network to propagate the matte forward through time, learning how the subject moves.

### Rotobrush 2.0 Workflow

1. **Double-click** the footage layer to open it in the Layer panel
2. Select the **Rotobrush tool** (Alt+W on Windows, Opt+W on Mac)
3. **Paint a stroke** over the foreground subject (green strokes include, red strokes exclude)
4. After the first frame is defined, Rotobrush 2.0 **propagates forward** automatically, analyzing motion and appearance changes
5. **Review every 5–10 frames** — correct any errors by painting additional include/exclude strokes
6. **Freeze** the calculation when satisfied — this bakes the matte and allows normal compositing

### Rotobrush 2.0 Strengths and Limitations

| Strength | Limitation |
|----------|-----------|
| Extremely fast for clean subjects on simple backgrounds | Fails on subjects that overlap background elements of similar color |
| Preserves fine edge detail (hair, fur) better than v1.0 | Motion blur on the subject edge requires manual refinement |
| Propagates forward automatically | Cannot propagate backward — must restart from earlier frames |
| Better at translucent subjects than traditional keying | Still requires review every few frames |

### The Refine Edge Tool Within Rotobrush

After the base Rotobrush matte is established, the **Refine Edge** feature processes fine detail at the edge:

1. Paint over fine-detail edges (hair strands, fur, feathers) with the Refine Edge tool
2. After Effects analyzes these pixels and preserves the semi-transparent detail
3. This is similar to Keylight's edge softness — it protects the gray transition pixels that make edges look photographic

---

## ✍️ Manual Mask Animation

When Rotobrush 2.0 fails (complex backgrounds, fast motion, low contrast between subject and background), manual mask animation is the fallback. This is the original rotoscoping technique, unchanged in principle since the 1910s.

### Setting Up Manual Roto in After Effects

1. Select the footage layer; press **M** to open mask properties, or use the Pen tool to draw the first mask
2. Set the mask to **Subtract** mode initially (to see the footage while drawing)
3. Draw a spline around the subject at the first key frame
4. Enable **Mask Path** keyframing (stopwatch icon)
5. Move to the next keyframe frame (typically 8–12 frames for slow movement, 2–4 for fast)
6. Adjust control points to match the new subject position
7. Repeat through the shot

### Mask Feathering

Masks can have a **Mask Feather** value that softens the edge. The challenge:

- Hard edge (0 feather) = clean but may appear cut-out
- Soft edge (8–20px feather) = natural-looking but may reveal semi-transparency where there should be solid coverage
- Variable feather (AE's vertex-level feathering) = the professional approach — hard on solid body areas, soft on hair/edge areas

### The "Cheat Roto Stack"

Professional roto artists use a layered approach to build complex mattes efficiently:

| Layer | Shape | Purpose |
|-------|-------|---------|
| Layer 1 (base) | Body silhouette | Primary solid coverage |
| Layer 2 (+) | Head and hair addition | Expands coverage over hair |
| Layer 3 (−) | Interior negative | Cuts out arm gaps, leg gaps |
| Layer 4 (+) | Hand additions | Fine control over hands |
| Layer 5 (−) | Fine negatives | Hair gaps, between fingers |

Each layer is independently animated, and the matte is the Boolean result of all layers combined. This is more efficient than animating a single complex spline with 100+ control points.

---

## 🔬 Silhouette for Professional Roto

**SilhouetteFX** (acquired by Boris FX in 2020) is the industry-standard standalone application for professional rotoscoping. It is used by Framestore, MPC, Dneg, and most feature film vendors for roto work that exceeds what AE can handle.

### Why Silhouette vs AE

| Feature | After Effects | Silhouette |
|---------|--------------|-----------|
| Render speed for roto | Slow (CPU bound) | Optimized roto engine |
| Multi-layer spline management | Difficult at scale | Purpose-built for deep spline stacks |
| Roto node in pipeline | Rendered back into AE | Outputs to Nuke node graph directly |
| Motion blur handling | Limited | Dedicated motion blur refine tools |
| Team collaboration | Single artist | Multi-artist / shot collaboration |
| Bezier control | Standard AE | Extended B-Spline and Catmull-Rom options |

For a film roto artist, Silhouette proficiency is equivalent to Photoshop proficiency for a retoucher — it is the expected professional tool. For broadcast and commercial work, AE's Rotobrush 2.0 is often sufficient.

### Silhouette's Core Workflow

1. Import the footage through **Silhouette's node-based session**
2. Create a **Roto node** on the footage
3. Use **spline tools** (B-Spline, Bezier, or Magnetic Spline) to draw the initial shape
4. **Feather** and **opacity** control per spline segment
5. Animate keyframes using Silhouette's dedicated **Motion Path** curves
6. Export the alpha as an EXR sequence or directly to Nuke

---

## 🎨 Masking for Color Isolation

Masks and roto mattes are not only for compositing (foreground/background separation). They are equally powerful as tools for **selective color grading**:

### Common Color Isolation Uses

| Task | Mask Type |
|------|-----------|
| Darken a sky behind a building | Shape mask on sky area |
| Change the color of a car | Tracked shape mask on the car |
| Isolate skin tones for beauty work | Keylight key on skin color, used as a luma matte |
| Vignette with shape masking | Ellipse mask in Subtract mode, feathered |
| Selective focus simulation | Z-depth pass from 3D render as luma matte |

The workflow in After Effects:

1. Create an Adjustment Layer above the footage
2. Draw a mask on the Adjustment Layer
3. Apply color effects (Curves, Lumetri, Vibrance) to the Adjustment Layer
4. The effect applies only within the mask boundary
5. Set appropriate Mask Feather for soft transitions

---

## 📊 Summary: Roto Tool Selection Guide

| Situation | Best Tool |
|-----------|----------|
| Clean subject on simple background | Rotobrush 2.0 |
| Fine hair/fur detail | Rotobrush 2.0 + Refine Edge |
| Fast movement, complex background | Manual spline animation |
| Feature film, large team | Silhouette |
| Color isolation, stationary subject | Shape mask + feather |
| Key patch (fix failing Keylight edge) | Combined Keylight + Roto matte |
| Archival footage | Manual spline (only option) |

---

## 🎯 Next Steps

Module 4 covers tracking — the technology that allows you to attach a digital element to moving footage, so that when the camera pans, the digital element moves with it. Tracking is the bridge between the 2D world (keying, roto) and the 3D world (camera solves, CG integration).

---

## 📚 Further Reading

- **"The Art and Science of Digital Compositing" — Ron Brinkmann** — Chapter 5 (Rotoscoping); written by a Nuke developer; technically rigorous
- **Boris FX Silhouette documentation** — official tutorials for every tool and workflow
- **Corridor Crew: "VFX Artists React" series** — often discusses when roto is used vs keying on specific shots
- **After Effects Help: Rotobrush and Refine Edge tool** — Adobe's own documentation is excellent for AE-specific parameter behavior
