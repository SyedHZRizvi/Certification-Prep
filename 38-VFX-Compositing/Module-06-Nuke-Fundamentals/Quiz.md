---
title: "Module 6 Quiz: Nuke Fundamentals"
---

# 🧪 Module 6 Quiz: Nuke Fundamentals

> 24 questions. Aim for 20/24.

---

### Q1.

What fundamental data structure does Nuke use to represent a compositing workflow?

A. A timeline with layers stacked vertically
B. A directed acyclic graph (DAG) of connected processing nodes
C. A flat list of effects applied sequentially to a single image stream
D. A spreadsheet of parameter values linked to a render engine

---

### Q2.

Which company developed and maintains Nuke?

A. Adobe
B. Maxon
C. The Foundry
D. Autodesk

---

### Q3.

What is the mathematical formula for the "over" compositing operation, where A is composited over B using A's alpha?

A. A + B
B. A × B
C. A + B × (1 − alpha_A)
D. A − B

---

### Q4.

In Nuke's Grade node, which parameter adds a constant offset to all values (affecting shadows, midtones, and highlights equally)?

A. Gain
B. Gamma
C. Offset
D. Lift

---

### Q5.

The Shuffle node in Nuke is used for what primary purpose?

A. Rearranging the order of nodes in the Node Graph
B. Extracting or rerouting specific named channels from a multi-channel EXR into RGB channels
C. Shuffling the frame order of a sequence for random playback
D. Combining multiple Merge operations into a single node

---

### Q6.

Which Merge operation in Nuke would be used to composite a glowing lens flare over a background plate, so the dark areas of the flare become invisible?

A. over
B. multiply
C. plus (Add)
D. from

---

### Q7.

In Nuke's node graph, what is a "Backdrop" node used for?

A. Adding a photographic backdrop plate to the composition
B. Grouping and labeling related sections of the node graph for organization
C. Providing an alternative "B" input to the Merge node
D. Preventing downstream nodes from seeing upstream changes

---

### Q8.

Which Nuke node is equivalent to After Effects' Keylight for chroma keying?

A. Grade node with Blackpoint at 0
B. Keyer node (or Primatte Keyer in NukeX)
C. ColorCorrect node
D. Merge node set to "screen" mode

---

### Q9.

What is the advantage of Nuke's "non-destructive by design" architecture?

A. Nuke automatically saves backups of every change
B. No operation modifies the source image data, all processing is computed at render time from the original sources
C. Nuke prevents artists from making mistakes by locking certain parameters
D. Render results are always identical to the source

---

### Q10.

An AOV pass named "specular" in a multi-channel EXR contains what information?

A. The final beauty render of the CG element
B. The Z-depth values for depth-of-field simulation
C. The specular highlight contribution from lights in the 3D scene
D. The shadow matte showing where the CG element casts shadows

---

### Q11.

In Nuke, pressing "1" on the keyboard while hovering over a node does what?

A. Switches the node to 1-bit depth processing
B. Connects that node to the Viewer's A input, displaying its output
C. Creates a new Read node numbered 1
D. Collapses the node into a Group

---

### Q12.

What does the "Gain" control in Nuke's Grade node do?

A. Adds a constant value to all pixels (equivalent to Lift)
B. Multiplies all pixel values by the specified factor, brightens uniformly without shifting blacks
C. Applies a gamma curve correction to midtones only
D. Increases the contrast by remapping highlights to white

---

### Q13.

A compositor needs to apply a blur to the Red channel only (to simulate chromatic aberration). Which two nodes in Nuke accomplish this?

A. Two Blur nodes with per-channel enable switches
B. Shuffle to extract the Red channel → Blur → Shuffle Copy to reinsert it into the image
C. ColorCorrect followed by Blur
D. A single Blur node with Channel set to R only

---

### Q14.

In the context of a multi-channel EXR file, what does the "depth" (or "Z") pass contain?

A. The grayscale luminance of the image
B. The distance from the camera to each pixel's surface in the 3D scene, used for depth-of-field simulation in comp
C. The transparency (alpha) values for the CG element
D. The surface color without lighting

---

### Q15.

Which of the following is a correct statement about Nuke's Transform node?

A. It operates in log color space by default
B. It can only translate; rotation requires a separate Rotate node
C. It applies 2D transformations (translate, rotate, scale) with a selectable interpolation filter
D. It requires a tracked camera to operate

---

### Q16.

At a major film VFX studio, a compositor opens a Nuke script and sees 400 nodes. Which organizational tool is most important for navigating this script?

A. Rearranging the nodes alphabetically using Sort
B. Labeled Backdrop nodes grouping related sections (keying, CG integration, grading)
C. Exporting the script to After Effects where layers are clearer
D. Using the Timeline view instead of the Node Graph

---

### Q17.

What is a "Gizmo" in Nuke?

A. A debug/testing mode for verifying node connections
B. A custom encapsulated tool (group of nodes packaged into a reusable node) shared across productions
C. The name for Nuke's built-in 3D camera node
D. A render queue manager for multi-machine rendering

---

### Q18.

The Grade node's "Blackpoint" parameter maps a specified input value to black (0) in the output. If Blackpoint is set to 0.05, what happens to pixels with a value of 0.05 in the input?

A. They remain at 0.05 in the output
B. They are mapped to black (0) in the output, the grade lifts everything below 0.05 to 0 and stretches the remaining range
C. They are boosted to 1.0 (white) in the output
D. They are clipped and rendered as pure black regardless of other parameters

---

### Q19.

Nuke Non-Commercial differs from the full Nuke license in what primary way?

A. It cannot read EXR files
B. It cannot process images larger than 1080p
C. It applies a visible watermark to all renders and cannot be used for commercial work
D. It only includes 20% of Nuke's full node set

---

### Q20.

In Nuke's Merge node, which operation corresponds to the mathematical formula: B + A × alpha_A?

A. multiply
B. over
C. from
D. plus

---

### Q21.

What does "Deep Compositing" in Nuke enable that standard compositing cannot achieve?

A. Compositing images at more than 32 bits per channel
B. Handling volumetric renders (fog, fire, clouds) with per-pixel, per-sample depth information, enabling correct integration of volumes with geometry at any depth
C. Compositing more than 100 elements simultaneously
D. Enabling real-time playback of 4K EXR sequences

---

### Q22.

A compositor wants to reduce the specular highlights on a CG element without affecting any other passes. Using AOV pass compositing, which node combination achieves this?

A. Apply a Grade node to the full beauty EXR, reducing the G channel
B. Use a Shuffle node to extract the specular pass → Grade to reduce its intensity → recombine with the remaining passes using a Merge (plus) node
C. Apply a ColorCorrect to the beauty pass and reduce Saturation
D. Use a Blur node on the specular channel to soften the highlights

---

### Q23.

In a professional Nuke pipeline, why are deleted experimental nodes sometimes "disabled" rather than deleted?

A. Deleted nodes in Nuke cannot be recovered, making deletion risky
B. Disabled nodes remain in the script for reference and review without affecting the output, they can be re-enabled if an experiment is revisited
C. Nuke's render engine processes disabled nodes faster
D. Disabling is required before a node can be grouped or moved

---

### Q24.

Which AOV pass would a compositor use to add a color-matched shadow from a CG object onto a live-action plate?

A. The diffuse_direct pass
B. The normal pass
C. The shadow pass (a mask showing where the CG object's shadow falls)
D. The Z-depth pass

---

## 🎯 Answers + Explanations

**Q1 B.** Nuke's core paradigm is the directed acyclic graph (DAG) a network of processing nodes connected by wires. This is what distinguishes it from layer-based tools like After Effects.

**Q2, C.** The Foundry (a UK software company, now owned by private equity) developed Nuke. The Foundry also makes Katana, Mari, and Modo.

**Q3, C.** The "over" operation is: A + B × (1 − alpha_A). Where A's alpha is 1 (opaque), B contributes 0. Where A's alpha is 0 (transparent), B contributes fully. This is the mathematical definition of "A over B." Memorize it.

**Q4, C.** Offset adds a constant value to all pixels regardless of tonal zone. Lift specifically affects shadows. Gain scales values. Gamma adjusts midtones.

**Q5, B.** The Shuffle node routes specific named channels from a multi-channel EXR into the standard RGBA channels that downstream nodes can process. It is the essential tool for working with AOV passes.

**Q6 C.** "Plus" (Add) mode: A + B. In an Add composite, the dark pixels in the flare layer (which have near-zero values) add near-zero to B effectively invisible. Only bright pixels contribute, which is correct for glowing, additive light effects.

**Q7 B.** Backdrop nodes are organizational containers labeled, colored boxes that visually group related sections of the node graph. They don't affect image processing, only organization.

**Q8, B.** The Keyer node (and Primatte Keyer in the higher-end NukeX) is Nuke's chroma keying tool. IBK (Image-Based Keyer) is another option for difficult subjects.

**Q9 B.** Non-destructive compositing means the source data is never modified every node reads from upstream sources and computes its output at render time. This means any parameter can be changed without rebuilding the comp.

**Q10, C.** The specular AOV pass contains only the specular highlight contribution from lights in the 3D scene. Compositors can boost or reduce this independently without affecting the diffuse or reflection passes.

**Q11, B.** In Nuke, hovering over a node and pressing 1 connects that node's output to the Viewer's A input, displaying it in the Viewer. Pressing 2 connects to the B input for A/B comparison.

**Q12, B.** Gain multiplies all pixel values by a factor. Gain 1.0 = no change; Gain 2.0 = double brightness. It brightens without shifting the black point (unlike Lift, which shifts the black point upward).

**Q13, B.** The correct approach: Shuffle to extract the Red channel into its own stream → Blur applied to that stream → Shuffle Copy to reinsert the blurred Red channel into the original image. A single Blur node cannot target one channel independently in standard Nuke.

**Q14 B.** The Z (depth) pass stores the camera-to-surface distance for every pixel. In comp, this is used with a ZDefocus or DepthOfField node to simulate lens depth-of-field near objects sharp, far objects blurred.

**Q15, C.** The Transform node applies 2D transforms (translate, rotate, scale) and includes a filter selection (Cubic, Lanczos, Impulse) that controls the quality of pixel interpolation during the transformation.

**Q16, B.** Labeled Backdrop nodes are the standard organizational tool for large Nuke scripts. They divide the script into legible sections (KEYING, CG INTEGRATION, ATMOSPHERE, GRADING) that any artist can navigate.

**Q17, B.** A Gizmo is a group of Nuke nodes packaged into a reusable, distributable node with its own interface. Studios build library Gizmos for standard operations (light wrap, anamorphic flare, film grain) used across all productions.

**Q18, B.** Setting Blackpoint to 0.05 maps input value 0.05 → output 0. Everything below 0.05 goes to black. The remaining range (0.05 to Whitepoint) is stretched across 0 to 1 in the output. This lifts the visible black level.

**Q19, C.** Nuke Non-Commercial applies a visible watermark to all renders and prohibits commercial use. The full feature set (including most nodes) is available, making it excellent for learning and building a portfolio.

**Q20, B.** The "over" operation formula is A + B × (1 − alpha_A). Where A is fully opaque (alpha = 1), only A contributes (B × 0 = 0 added). Where A is transparent (alpha = 0), only B contributes (B × 1). This creates the "A over B" illusion.

**Q21 B.** Deep Compositing stores per-sample depth information for volumetric renders every sample in a fog or fire volume has its own depth. This allows volumes to correctly intersect geometry at any depth, which standard alpha compositing cannot handle.

**Q22, B.** Extract the specular pass with Shuffle → reduce its intensity with a Grade → add it back to the remaining passes with Merge (plus). This precisely targets only the specular contribution.

**Q23, B.** Disabling nodes leaves them in the graph for reference without affecting the output. A VFX supervisor reviewing the script may want to see experimental approaches, and the artist may need to re-enable them if the primary approach changes.

**Q24 C.** The shadow pass is a mask (often white where the CG shadow falls, black elsewhere). The compositor multiplies this mask over a darkened version of the plate to add the shadow giving the CG element the correct ground shadow on the live-action surface.
