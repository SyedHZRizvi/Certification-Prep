---
permalink: /34-2D-Digital-Animation/Module-05-After-Effects-2D/
title: "Module 5: After Effects for 2D Animation"
---

# 🎬 Module 5: After Effects for 2D Animation

## Why Switch from Animate to After Effects?

Adobe Animate is a purpose-built animation tool. After Effects is a compositing and motion graphics tool that has been adopted by character animators because of what it offers that Animate doesn't: robust parenting, expressions, advanced compositing, GPU-accelerated effects, and an ecosystem of professional plugins that extend its capabilities far beyond what any single application could provide natively.

The difference in workflows is a bit like the difference between cooking at home and cooking in a restaurant kitchen. Animate is your home kitchen — efficient, purpose-built, warm, intuitive. After Effects is the restaurant kitchen — more intimidating, more instruments, higher ceiling for output, but you need to learn where everything is.

Most professional 2D animation pipelines use both. Animate (or Toon Boom Harmony) for the drawing and initial animation, then After Effects for compositing, effects, secondary animation, and delivery.

---

## 🖥️ The After Effects Workspace

| Zone | Name | Purpose |
|------|------|---------|
| Center | Composition Viewer | Your canvas — what renders |
| Top-left | Project panel | All imported footage, compositions, and assets |
| Bottom | Timeline | Layers with keyframes and in/out points |
| Right | Properties (Effect Controls) | Settings for selected layer effects |
| Top-right | Info / Audio / Preview panels | Playback and color readouts |

### Key AE Concepts vs. Animate Concepts

| Adobe Animate Term | After Effects Equivalent |
|-------------------|--------------------------|
| Stage | Composition (Comp) |
| Symbol | Pre-composition (Pre-comp) or Layer |
| Library | Project panel |
| Frame | Frame (same concept) |
| Layer | Layer (same concept, different properties) |
| Scene | Composition |
| Tween | Keyframes + easing curves in the Graph Editor |

---

## 📥 Import Workflows

### Importing from Adobe Illustrator

The "Create Shapes from Vector Layers" command is one of the most powerful tools in After Effects for 2D animation. It converts imported Illustrator layers into native AE Shape Layers, which are:

- Resolution-independent (vector-based; they scale without pixelation)
- Fully editable in After Effects
- Compatible with AE's shape animation tools (Trim Paths, Offset Paths, etc.)
- Compatible with expressions and parenting

**Workflow:**
1. Import the Illustrator file via File → Import → File, choosing "Import as: Composition — Retain Layer Sizes."
2. AE creates a composition with one layer per Illustrator layer.
3. Select the Illustrator layers you want to convert.
4. Layer menu → Create → Create Shapes from Vector Layer.
5. The original Illustrator layer is replaced by a native Shape Layer.

> 🎯 **Exam tip:** After "Create Shapes from Vector Layers," the original Illustrator layer (which has the .ai source file icon) is automatically hidden. The new Shape Layer has a "Contents" group containing all the vector paths. You can now animate individual paths, strokes, and fills separately.

### Importing from Adobe Animate

Animate files can be exported as:
- **SWF** — limited compatibility in modern AE versions; less recommended
- **Video file** (QuickTime or H.264) — flattened video; no editable layers
- **Image sequences** (PNG sequence) — best for maintaining frame-by-frame work with transparency
- **Adobe Media Encoder → ProRes with alpha** — high quality with transparency for compositing

For cut-out animation that will be rigged in After Effects, the preferred approach is to **export Illustrator files from Animate** (or design directly in Illustrator) and then import those into After Effects using the "Create Shapes from Vector Layers" workflow above.

---

## 🪡 The Puppet Pin Tool

The Puppet Pin Tool in After Effects applies a deformation mesh to a rasterized layer (bitmap, video, or flattened PNG). Pins are placed at key anchor points on the artwork, and moving a pin deforms the mesh — bending or stretching the image naturally.

### How Puppet Pins Work

| Pin Type | Purpose |
|----------|---------|
| **Deform Pin** | The primary pin type; moving it deforms the mesh |
| **Stiff Pin** | Creates a rigid area that resists deformation |
| **Advanced Pin** | Allows per-pin scale and rotation control |

### Puppet Pin Workflow for Character Animation

1. Import or create the character artwork (PNG or Shape Layer).
2. Select the layer.
3. Choose the Puppet Pin Tool (keyboard shortcut: Cmd+P / Ctrl+P).
4. Click on key body parts to place Deform Pins: head, shoulders, elbows, wrists, hips, knees, feet.
5. AE automatically generates a triangulated mesh over the layer.
6. Keyframe the pins over time to animate the character.

> 🚨 **Trap on the exam:** The Puppet Pin Tool is most effective on a single flattened layer (one merged image of the character). For articulated rigs with separately controllable parts, you need separate layers with parenting or a proper DUIK rig (Module 6). Don't try to rig complex characters with Puppet Pins alone.

---

## 🔗 Parenting for Character Rigs

Parenting in After Effects creates hierarchical relationships between layers — equivalent to the parent-child symbol nesting in Animate, but more flexible because it works across separate layers rather than requiring nesting inside symbols.

### How Parenting Works

In the Timeline, each layer has a "Parent & Link" column (sometimes called the Pick Whip). Dragging the pick whip from a child layer to a parent layer creates the parent-child link.

When a parent layer moves, rotates, or scales, all child layers follow, maintaining their relative transform values.

### Character Rig Parenting Structure

```
[null] character_root  ← top-level null for whole rig
  [layer] body         ← parent: character_root
    [layer] head       ← parent: body
    [layer] arm_r_upper ← parent: body
      [layer] arm_r_lower ← parent: arm_r_upper
        [layer] hand_r ← parent: arm_r_lower
```

Using **Null Objects** as rig controllers is standard professional practice. A Null is an invisible object that holds transform data. You animate the Null, not the visible layer directly — this separates "control" from "artwork."

> 🎯 **Exam tip:** Null Objects in After Effects are invisible at render time. They appear in the Composition viewer as a small square crosshair but are never exported. They are essential tools for rig control and animation management.

---

## 🔧 Create Shapes from Vector Layers

This command deserves a dedicated section because of how much it changes the workflow.

### Before (Illustrator layer in AE)

- Layer is a live link to an external `.ai` file
- Vector data renders correctly but is not directly editable in AE
- Cannot animate individual path points
- Cannot use AE shape modifiers (Trim Paths, etc.)

### After (Shape Layer in AE)

- All vector paths are now native AE data
- Each path, stroke, and fill is independently animatable
- AE modifiers (Trim Paths, Offset Paths, Wiggle Paths, etc.) work on the shapes
- No external dependency — works without the source `.ai` file present

### Typical Use Case

A logo is designed in Illustrator. The logo has several paths. In AE, you use "Create Shapes from Vector Layers" to convert each layer. Then you use Trim Paths to animate the logo drawing itself in — a line that travels along each vector path, revealing the logo as if it were being drawn by hand.

---

## 📐 The Graph Editor — After Effects' Motion Editor Equivalent

After Effects has a Graph Editor analogous to Animate's Motion Editor. It shows easing curves for all animated properties.

| Graph Type | Shows |
|------------|-------|
| **Value Graph** | The absolute value of the property over time |
| **Speed Graph** | The rate of change (velocity) of the property over time |

The Speed Graph is often more intuitive for animation: peaks show fast movement; valleys show slow movement; a flat line at zero shows a hold.

### Easy Ease

In After Effects, applying **Easy Ease** (F9) to a keyframe converts it from a linear keyframe (abrupt velocity change) to a smooth bezier keyframe with automatic handles that create ease in + ease out. This is the AE equivalent of Animate's built-in Ease In-Out preset.

- F9 = Easy Ease (both sides)
- Shift+F9 = Easy Ease In (only eases in to the keyframe)
- Ctrl/Cmd+Shift+F9 = Easy Ease Out (only eases out from the keyframe)

> 🚨 **Trap on the exam:** After applying Easy Ease, AE's default easing handles are often too aggressive — giving a very "robotic" S-curve. Open the Graph Editor and manually adjust the bezier handles to get more nuanced easing. Default Easy Ease is a starting point, not a final answer.

---

## 🧩 Pre-Compositions

Pre-compositions (pre-comps) in After Effects serve the same role as symbols in Animate: they package a set of layers into a reusable, nested composition.

| Use Case | Workflow |
|----------|---------|
| Character body parts | Each body part as a separate pre-comp |
| Walk cycle | Animate inside a pre-comp; use the pre-comp in the main scene |
| Reusable effects | Particle system, glow, etc. in a pre-comp; instance in multiple scenes |
| Complex group manipulation | Group related layers into a pre-comp to apply effects to all at once |

To pre-compose: select layers → Ctrl+Shift+C / Cmd+Shift+C → name the pre-comp.

---

## 📋 Summary

- After Effects is used alongside Animate in professional pipelines for compositing, effects, and more powerful rigging.
- "Create Shapes from Vector Layers" converts Illustrator artwork to native AE Shape Layers with full editability.
- The Puppet Pin Tool deforms a mesh on a flattened layer; best for simple organic deformation, not complex articulated rigs.
- Parenting in AE creates hierarchical layer relationships via the Pick Whip; Null Objects serve as invisible rig controllers.
- The Graph Editor shows easing curves; the Speed Graph is most useful for animation; F9 applies Easy Ease.
- Pre-compositions are AE's equivalent of symbols — reusable nested compositions.

## ➡️ Next Steps

[Module 6: Puppet & Bone Tools — DUIK →](../Module-06-Puppet-Bone-Tools/Reading.md)

Module 6 dives deep into DUIK Bassel and DUIK Angela — the professional IK and rigging plugins for After Effects that are used in commercial production worldwide.

## 📚 Further Reading

- Adobe After Effects User Guide: [helpx.adobe.com/after-effects/user-guide.html](https://helpx.adobe.com/after-effects/user-guide.html)
- School of Motion: "After Effects for Animation" — Beginner and intermediate course content
- Video Copilot: "After Effects Basics" — free beginner tutorial series
- DUIK Documentation: [rxlaboratory.org](https://rxlaboratory.org)
