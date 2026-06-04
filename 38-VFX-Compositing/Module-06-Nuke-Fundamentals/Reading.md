---
title: "Module 6: Nuke Fundamentals"
---

# 🔲 Module 6: Nuke Fundamentals

## Why Every Film Is Made in Nuke

It is 2009. James Cameron's *Avatar* is in the compositing phase at Weta Digital. The composite for a single hero shot — a Na'vi warrior in full contact with a bioluminescent forest environment — contains 847 layers of CG passes, atmosphere, depth-of-field simulation, lens effects, and interactive light. The lead compositor opens his Nuke script. He does not see 847 layers stacked in a timeline. He sees a directed graph — nodes connected by wires — that reads like a circuit diagram of the shot's image-processing logic.

After Effects works in time. Nuke works in space. This is the paradigm shift that made Nuke the standard for every major film studio, streaming platform, and high-end commercial house on the planet.

---

## 🔀 The Node Graph Paradigm vs Layer-Based Compositing

### Layer-Based Compositing (After Effects Model)

In After Effects, images are stacked in a **timeline** as layers. To combine two images, you place one layer above the other and set the blend mode. To apply a color correction that affects everything below, you add an Adjustment Layer. The model is:

```
Layer N (top)
Layer N-1
Layer N-2
...
Layer 1 (bottom — usually the background)
```

This is intuitive for simple composites. For complex shots with dozens of elements, it becomes a management problem:

- **Non-destructive editing is limited** — applying an effect modifies the layer's appearance "in-place" without a visible record of what was done
- **Complex operations require pre-composing** — to apply a transformation after a color correction, you must pre-comp, losing transparency to the stack below
- **Reuse is difficult** — a color node applied to Layer 5 cannot be shared with Layer 12 without duplication

### Node-Based Compositing (Nuke Model)

In Nuke, every operation is a **node** — a box with one or more inputs and one output. Nodes are connected with wires that carry image streams. The result is a **Directed Acyclic Graph (DAG)** — a network of operations.

```
[Read: Plate] → [Keyer] → [Grade] → [Merge] ← [Read: CG Beauty]
                                                       ↑
                                                [Grade (CG)]
```

Key advantages:
- **Every operation is visible** in the graph — the processing history is the graph itself
- **Non-destructive by design** — no operation modifies the source data; all transforms are computed from source at render time
- **Reuse via Expressions and Gizmos** — a Grade node's parameters can drive another Grade node via expression linking
- **Unlimited complexity** — a 400-node Nuke script is navigable and logical; a 400-layer AE project is not

---

## 🔑 Nuke's Core Nodes

### Read Node

The starting point of every Nuke script. Reads image files from disk.

- **file**: path to the image sequence (supports `%04d` frame number notation)
- **format**: the working image format (e.g., 4096×2304, 16-bit float)
- **colorspace**: the color space of the input (log, linear, ACES — critical for color correctness)

### Merge Node

The fundamental compositing operation. Merges two image streams (A and B) using a mathematical operation.

| Merge Operation | Effect | Use Case |
|-----------------|--------|----------|
| **over** | A over B using A's alpha | Standard compositing (default) |
| **plus** (Add) | A + B | Additive blend (fire, glow, lens flares) |
| **multiply** | A × B | Shadows, darkening |
| **screen** | A + B − (A × B) | Brightening without clipping |
| **from** | B − A | Subtraction |
| **difference** | |A − B| | Difference matte generation |

> 🎯 **Exam Tip:** The **over** operation is `A + B × (1 − alpha_A)`. This is the mathematical foundation of compositing — alpha defines how much of B shows through where A is transparent. **MEMORIZE THIS.**

### Grade Node

Nuke's primary color correction node. Works in scene-linear color space.

| Control | Function |
|---------|----------|
| **Blackpoint** | Maps this input value to black (0) in output |
| **Whitepoint** | Maps this input value to white (1) in output |
| **Lift** | Adds offset to shadows |
| **Gain** | Multiplies (scales) the image |
| **Multiply** | Per-channel multiply |
| **Offset** | Adds a constant to all values |
| **Gamma** | Gamma correction (midtone brightness) |
| **Reverse** | Reverses the grade for ungrading operations |

The Grade node is used for **primary color correction**: matching the exposure, contrast, and color balance of different elements before the final creative grade.

### ColorCorrect Node

A more structured color correction node with independent Shadow/Midtone/Highlight controls:

- Operates on shadows, midtones, and highlights independently
- Saturation, Contrast, Gamma per tonal zone
- More intuitive for colorists than Grade's raw gain/offset controls

### Keyer Node

Nuke's primary chroma keying node. Similar to Keylight but expressed as a node:

- **Screen Colour**: the key color sampled from the green or blue screen
- **Despill**: built-in spill suppression
- **Screen Matte**: controls for eroding/dilating the matte
- Outputs: RGBA composite or raw matte (alpha only)

### Blur Node

Applies a Gaussian blur to the image.

- **Size**: blur radius in pixels
- Can be applied per-channel for chromatic aberration simulation (different blur radius on R vs G vs B channels)

### Transform Node

Applies 2D transformations:

- **Translate**: X/Y offset
- **Rotate**: rotation angle
- **Scale**: uniform or non-uniform scale
- **Center**: the pivot point for rotation and scale
- **Filter**: interpolation method (Cubic is high-quality; Impulse is nearest-neighbor)

### ColorCorrect and Curves Nodes

The Curves node in Nuke provides per-channel curve control (R, G, B, Alpha, and Master). The interface is similar to Photoshop's Curves — control points define the input-to-output mapping for each channel.

---

## 📺 The Viewer

The Viewer in Nuke is the primary display for the image output. Key features:

- **Connect any node** to the Viewer by pressing 1 (A input), 2 (B input), etc. on the keyboard
- **Display buffer**: the Viewer shows the full-float result — toggle LUT to see how the image will look in the deliverable color space
- **RGBA channels**: view individual R, G, B, A channels separately
- **Gain and Gamma**: temporary Viewer controls to brighten/darken the display for checking shadow detail (does not affect the render)
- **Wipes**: split the Viewer between two connected nodes for A/B comparison

---

## 📂 Reading Multi-Channel EXR

Multi-channel EXR files contain all AOV passes in a single file. In Nuke:

1. The **Read node** reads the EXR and exposes all channels
2. Use the **Shuffle** node to extract specific channels into an RGB image:
   - `Shuffle in1=diffuse.R, in2=diffuse.G, in3=diffuse.B` → extracts the diffuse pass
3. Use **Merge** operations to recombine passes for the final composite

**Typical AOV passes from a film CG render:**

| Pass Name | Contents | Usage in Comp |
|-----------|----------|--------------|
| beauty | Full final render | Starting point; can be overridden by individual passes |
| diffuse_direct | Direct (lit) diffuse color | Recolor the CG without losing lighting |
| diffuse_indirect | Indirect (bounced) diffuse | Adjust ambient light contribution |
| specular | Specular highlights | Boost/reduce specularity independently |
| reflection | Ray-traced reflections | Remove/replace reflections |
| shadow | Shadow mask (0 = lit, 1 = shadowed) | Control shadow intensity |
| depth (Z) | Distance from camera per pixel | Depth-of-field simulation |
| normal | Surface normal direction | Relighting |

---

## 🔑 Why Nuke Dominates Film VFX

| Factor | After Effects | Nuke |
|--------|--------------|------|
| Scene-linear workflow | Limited (via OpenColorIO) | Native; designed for it |
| Multi-channel EXR | Can read; limited channel routing | Native; Shuffle node handles any channel |
| Node graph | Not available | Core paradigm |
| Python scripting | Limited ExtendScript | Full Python API; production pipeline automation |
| Deep compositing | Not available | Deep image compositing for volumetric renders |
| 3D compositing space | Basic | Full 3D scene reconstruction + camera |
| Collaborative workflow | Not designed for team use | Used by teams of 50+ artists simultaneously |
| GPU rendering | Some effects | Full GPU acceleration |
| Industry adoption | Broadcast / commercial | Film / high-end streaming (ILM, Weta, Framestore, MPC, Dneg) |

> 🚨 **Industry Trap:** The Foundry offers a **Nuke Non-Commercial** license — free for learning. This gives access to the full Nuke toolset with a watermark on renders. Every serious VFX student should download Nuke Non-Commercial immediately and practice in it alongside After Effects work. Employers at film studios expect Nuke fluency.

---

## 🔧 Organizing a Nuke Script: Production Standards

A well-organized Nuke script at a professional studio follows standards that allow multiple artists to work in the same script:

| Convention | Standard |
|------------|---------|
| **Backdrops** | Labeled backdrop nodes group related sections (e.g., "KEYING," "CG INTEGRATION," "GRADING") |
| **Dots** | Dot nodes route wires for readability without changing operations |
| **Groups** | Complex multi-node operations are encapsulated into a Group (like a function) |
| **Gizmos** | Custom encapsulated tools shared across productions (e.g., a studio's standard light-wrap Gizmo) |
| **Naming** | Read nodes named after the element they carry (e.g., `Read_plate_hero`, `Read_CG_beast_beauty`) |
| **Disabled nodes** | Experimental nodes left in the script are disabled (not deleted) during review |

---

## 📊 Summary: Key Nuke Nodes

| Node | Purpose |
|------|---------|
| Read | Load image sequences from disk |
| Write | Render image sequences to disk |
| Merge | Composite two images (over, plus, multiply, screen, etc.) |
| Grade | Primary color correction (blackpoint, whitepoint, gamma, gain) |
| ColorCorrect | Shadow/midtone/highlight color correction |
| Blur | Gaussian blur |
| Keyer | Chroma keying with despill |
| Transform | 2D translate/rotate/scale |
| Shuffle | Extract or reroute specific channels from EXR |
| Curves | Per-channel curve color correction |
| Viewer | Preview node output in the display |

---

## 🎯 Next Steps

Module 7 covers color grading — the science and art of the final color pass. You will learn ACES, log vs linear, LUTs, and shot matching, anchored in the Oppenheimer case study. Color grading is the layer of craft that unifies all of the individual elements you've built in Modules 2–6 into a coherent, finished image.

---

## 📚 Further Reading

- **The Foundry Nuke User Guide** — official documentation; free at learn.foundry.com/nuke
- **"The VES Handbook of Visual Effects" — Chapter 4: Compositing** — professional pipeline context for Nuke workflows
- **"Digital Compositing for Film and Video" — Steve Wright** — the mathematical foundations behind Nuke's Merge operations
- **NukeX tutorials by The Foundry (YouTube)** — official tutorial series covering every major node and workflow
- **nukepedia.com** — community resource for Nuke gizmos, scripts, and tutorials
