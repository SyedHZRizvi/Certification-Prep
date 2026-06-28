---
title: "Module 6: Nuke Fundamentals"
---

# 🔲 Module 6: Nuke Fundamentals

## Why Every Film Is Made in Nuke

It is 2009. James Cameron's *Avatar* is in the compositing phase at Weta Digital. The composite for a single hero shot a Na'vi warrior in full contact with a bioluminescent forest environment contains 847 layers of CG passes, atmosphere, depth-of-field simulation, lens effects, and interactive light. The lead compositor opens his Nuke script. He does not see 847 layers stacked in a timeline. He sees a directed graph nodes connected by wires that reads like a circuit diagram of the shot's image-processing logic.

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
Layer 1 (bottom, usually the background)
```

This is intuitive for simple composites. For complex shots with dozens of elements, it becomes a management problem:

- **Non-destructive editing is limited**, applying an effect modifies the layer's appearance "in-place" without a visible record of what was done
- **Complex operations require pre-composing**, to apply a transformation after a color correction, you must pre-comp, losing transparency to the stack below
- **Reuse is difficult**, a color node applied to Layer 5 cannot be shared with Layer 12 without duplication

### Node-Based Compositing (Nuke Model)

In Nuke, every operation is a **node** a box with one or more inputs and one output. Nodes are connected with wires that carry image streams. The result is a **Directed Acyclic Graph (DAG)** a network of operations.

```
[Read: Plate] → [Keyer] → [Grade] → [Merge] ← [Read: CG Beauty]
                                                       ↑
                                                [Grade (CG)]
```

Key advantages:
- **Every operation is visible** in the graph, the processing history is the graph itself
- **Non-destructive by design**, no operation modifies the source data; all transforms are computed from source at render time
- **Reuse via Expressions and Gizmos**, a Grade node's parameters can drive another Grade node via expression linking
- **Unlimited complexity**, a 400-node Nuke script is navigable and logical; a 400-layer AE project is not

---

## 🔑 Nuke's Core Nodes

### Read Node

The starting point of every Nuke script. Reads image files from disk.

- **file**: path to the image sequence (supports `%04d` frame number notation)
- **format**: the working image format (e.g., 4096×2304, 16-bit float)
- **colorspace**: the color space of the input (log, linear, ACES, critical for color correctness)

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

> 🎯 **What the exam tests:** The **over** operation is `A + B × (1 − alpha_A)`. This is the mathematical foundation of compositing, alpha defines how much of B shows through where A is transparent. **MEMORIZE THIS.**

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

The Curves node in Nuke provides per-channel curve control (R, G, B, Alpha, and Master). The interface is similar to Photoshop's Curves, control points define the input-to-output mapping for each channel.

---

## 📺 The Viewer

The Viewer in Nuke is the primary display for the image output. Key features:

- **Connect any node** to the Viewer by pressing 1 (A input), 2 (B input), etc. on the keyboard
- **Display buffer**: the Viewer shows the full-float result, toggle LUT to see how the image will look in the deliverable color space
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

## 🎬 Case Study: Avatar, Nuke at Scale in a 400-Node Script

The *Avatar* production at Weta Digital established the practices that define professional Nuke organization today. With hero shots containing hundreds of CG elements, a disorganized Nuke script was functionally unusable. Weta's compositing department developed organizational conventions that are now industry standard:

### The Weta Script Organization Model

| Section | Color-Coded Backdrop | Contents |
|---------|---------------------|---------|
| INPUTS | Blue | All Read nodes, plate, CG beauty, all AOV passes, DMP (Data Management Platform) elements |
| PREP | Yellow | Plate undistortion, color space conversions, lens distortion removal |
| KEYING | Orange | All keyer nodes, holdout mattes, roto nodes |
| CG INTEGRATION | Green | Shuffle nodes for AOV extraction, Grade nodes for CG matching, Merge-over operations |
| ATMOSPHERICS | Purple | Haze, depth-fog, Z-depth-based blur, atmospheric elements |
| GRADING | Red | Final technical color grade, matching composite to plate |
| OUTPUT | White | Write nodes, deliverable transforms |

> 🎯 **What the exam tests:** In professional Nuke scripts, backdrops organize sections by color; Dot nodes route wires without operations; Groups encapsulate complex multi-node operations into single boxes; Gizmos are reusable custom tools shared across productions.

### Node Tree Optimization for Large Shots

A 400-node Nuke script without optimization renders slowly and is hard to navigate. Weta's and ILM's compositing supervisors enforce optimization rules:

| Problem | Symptom | Fix |
|---------|---------|-----|
| Redundant Grade nodes | Three Grades in series where one would do | Merge Grade parameters into a single node |
| Un-cached heavy operations | Blur/defocus recalculating every frame | Enable caching on expensive nodes |
| Unnecessary high-res processing | Full-res ops on elements that will be small in frame | Process at 1/2 res, then scale up for output |
| Long wire chains without labels | Impossible to trace what channel flows where | Insert Dot nodes with text labels at branch points |
| Untrimmed Read nodes | Read node loads entire multi-channel EXR even if only one pass is needed | Shuffle immediately after Read; route only needed channels |

---

## 🖥️ GPU vs CPU Compositing: Performance Trade-offs

Modern Nuke versions (13+) support GPU acceleration for select operations. Understanding the performance model is an exam-level topic:

| Operation | GPU Accelerated | CPU Only | Notes |
|-----------|----------------|---------|-------|
| Blur (Gaussian) | Yes | Fallback | GPU substantially faster at large radii |
| Merge | Yes | Fallback | GPU benefits most at 4K+ resolution |
| Grade / ColorCorrect | Yes | Fallback | Simple math, GPU bandwidth advantage |
| Deep compositing | No | Yes | Deep image processing is CPU-bound |
| Keyer (Keylight equivalent) | Yes | Fallback | |
| Z-depth defocus (ZDefocus) | Yes | Fallback | High GPU VRAM requirement |
| Python scripting / automation | No | Yes | Python runs on CPU only |
| Roto/RotoPaint | No | Yes | Bezier spline math is CPU-bound |

> 🎯 **What the exam tests:** GPU acceleration in Nuke is not universal, deep compositing and roto are CPU-bound regardless of GPU. A render farm running Nuke without GPU acceleration is still fully functional for complex pipeline work; GPU acceleration primarily benefits final-output rendering speed, not script development.

> ⚠️ **Rookie mistake:** Assuming Nuke GPU mode makes the entire comp faster. GPU acceleration only applies to specific nodes. A script bottlenecked on a CPU-bound operation (heavy roto, deep comp, Python) will not benefit from GPU acceleration.

---

## 🔬 Nuke's 3D Compositing Environment

Unlike After Effects, which treats 3D as a 2.5D simulation, Nuke contains a full 3D compositing environment. This allows:

- **3D camera integration:** Import a tracked camera from 3DEqualizer or Maya; render CG elements from the exact camera and composite in true 3D perspective
- **Scene reconstruction:** Create a point cloud of the environment from tracked features; build collision planes for CG elements
- **Card geometry:** Project DMP paintings onto 3D cards that receive correct parallax as the camera moves
- **Deep compositing:** Process EXR files with per-pixel depth information for correct handling of overlapping volumetric renders

### When to Use Nuke's 3D Compositor

| Use Case | 3D Compositor Advantage |
|----------|------------------------|
| CG element at exact camera position | Import camera directly from 3DE; no second-guess on perspective |
| DMP with camera movement | Project painted texture onto 3D cards; automatic parallax |
| Multiple CG elements at different depths | Depth compositing with correct overlap using Z-depth |
| Shadow catcher integration | Place a 3D ground plane at the real-world position to receive CG shadows |

> 🎯 **What the exam tests:** Nuke's 3D environment is not a replacement for Maya or Houdini 3D animation, it is a 3D compositing layer. It allows correct camera-perspective placement of 2D elements (DMP, matte paintings) and correct integration of CG renders using imported 3D cameras.

---

## 🔑 Why Nuke Dominates Film VFX

| Factor | After Effects | Nuke |
|--------|--------------|------|
| Scene-linear workflow | Limited (via OpenColorIO) | Native; designed for it |
| Multi-channel EXR | Can read; limited channel routing | Native; Shuffle node handles any channel |
| Node graph | Not available | Core paradigm |
| Python scripting | Limited ExtendScript | Full Python API (Application Programming Interface); production pipeline automation |
| Deep compositing | Not available | Deep image compositing for volumetric renders |
| 3D compositing space | Basic | Full 3D scene reconstruction + camera |
| Collaborative workflow | Not designed for team use | Used by teams of 50+ artists simultaneously |
| GPU rendering | Some effects | Full GPU acceleration |
| Industry adoption | Broadcast / commercial | Film / high-end streaming (ILM, Weta, Framestore, MPC, Dneg) |

> ⚠️ **Industry Trap:** The Foundry offers a **Nuke Non-Commercial** license, free for learning. This gives access to the full Nuke toolset with a watermark on renders. Every serious VFX student should download Nuke Non-Commercial immediately and practice in it alongside After Effects work. Employers at film studios expect Nuke fluency.

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

## 🎯 What the Exam Tests, Module 6

1. **Over operation formula:** `A + B × (1 − alpha_A)`. Alpha defines how much of B shows through where A is transparent.
2. **Shuffle node purpose:** Extracts specific named channels from a multi-channel EXR into an RGB image. Required for AOV pass workflow.
3. **Grade vs ColorCorrect:** Grade = raw gain/offset/gamma controls; ColorCorrect = shadow/midtone/highlight tonal zones. ColorCorrect is more intuitive for colorists.
4. **Nuke vs AE for film:** Nuke is the film standard because of native scene-linear workflow, multi-channel EXR handling, node graph, Python API, deep compositing, and team collaboration.
5. **GPU acceleration scope:** Blur, Merge, Grade, Keyer are GPU-accelerated. Deep compositing and Roto/RotoPaint are CPU-only. Python is CPU-only.
6. **Backdrop purpose:** Organizational color-coded sections in Nuke scripts. Not a compositing operation, purely for navigation and team communication.
7. **Gizmo definition:** A reusable, encapsulated Nuke tool package shared across productions. Studios build standard Gizmos for light wrap, lens flare, etc.
8. **Read node colorspace parameter:** Critical, must match the actual encoding of the input file. Wrong colorspace setting causes all downstream color operations to be incorrect.
9. **Viewer gain/gamma:** Temporary display-only adjustments for checking shadow detail in the Viewer. Do NOT affect the render output.
10. **Deep compositing:** Available in Nuke; not in After Effects. Used for volumetric renders where multiple CG elements have overlapping depth values (clouds, fog, subsurface-scattering materials).

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

Module 7 covers color grading, the science and art of the final color pass. You will learn ACES, log vs linear, LUTs, and shot matching, anchored in the Oppenheimer case study. Color grading is the layer of craft that unifies all of the individual elements you've built in Modules 2–6 into a coherent, finished image.

---

## 📊 Full Nuke Vocabulary Reference

| Term | Definition |
|------|-----------|
| DAG | Directed Acyclic Graph, the mathematical model for Nuke's node graph |
| Node | A single image-processing operation with one or more inputs and one output |
| Wire | The connection between nodes carrying an image stream |
| Backdrop | Non-processing node used to label and color-code sections of the graph |
| Dot | A wire routing node that carries an image stream without processing it |
| Group | A container encapsulating multiple nodes into a single box |
| Gizmo | A reusable custom tool package; a Group with a locked interface |
| AOV | Arbitrary Output Variable, a named channel in a multi-channel EXR |
| Shuffle | A node that extracts and reroutes specific channels from an EXR stream |
| Pre-multiply | RGB channels multiplied by alpha, standard for EXR from renderers |
| Half-float | 16-bit floating point precision, standard for EXR intermediate files |
| Full-float | 32-bit floating point, used for critical calculations (deep comp, relighting) |
| Scene-linear | Color encoding where values are proportional to physical light, required for all compositing math |
| Deep compositing | Compositing using per-pixel depth information for correct volumetric rendering |
| Viewer LUT | Display transform applied only in the Viewer, does NOT affect the render |
| Expression linking | Driving one node's parameter by the value of another node's parameter |
| Python API | Nuke's full Python scripting interface for automation and pipeline tools |
| Write node | Renders the upstream node graph to image sequences on disk |

---

## 📊 Nuke Workflow Quick Reference: From Raw Plate to Deliverable

The following represents the standard node structure for a typical film composite in Nuke, a concise map of how a real production script is organized:

```
[Read: ARRIRAW plate]
        ↓
[OCIOColorSpace: LogC3 → ACEScg linear]
        ↓
[LensDistortion: undistort]
        ↓
[Keyer: greenscreen pull]  [Read: CG beauty EXR]
        ↓                         ↓
[Grade: plate match]        [Shuffle: extract diffuse/spec/shadow AOVs]
        ↓                         ↓
        └────── Merge (over) ──────┘
                       ↓
               [Grade: technical match]
                       ↓
               [Read: DMP element] ──── Merge (over, behind plate)
                       ↓
               [Read: FX particle EXR] ── Merge (plus, foreground smoke)
                       ↓
               [LensFlare: tracked to sun]
                       ↓
               [AddGrain: match to plate grain]
                       ↓
               [OCIOColorSpace: ACEScg → Log]
                       ↓
               [Write: deliverable EXR sequence]
```

This graph represents approximately 25–40 nodes for a moderately complex shot. A hero shot at ILM may have 400+ nodes following the same structural logic at greater depth.

---

## 📚 Further Reading

- **The Foundry Nuke User Guide**, official documentation; free at learn.foundry.com/nuke
- **"The VES Handbook of Visual Effects" Chapter 4: Compositing** professional pipeline context for Nuke workflows
- **"Digital Compositing for Film and Video" Steve Wright** the mathematical foundations behind Nuke's Merge operations
- **NukeX tutorials by The Foundry**, official tutorial series covering every major node and workflow
- **nukepedia.com**, community resource for Nuke gizmos, scripts, and tutorials


