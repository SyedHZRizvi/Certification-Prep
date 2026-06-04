---
permalink: /36-3D-Animation-Blender/Practice-Exams/Practice-Exam-2/
title: "Practice Exam 2: Animation & Production — Modules 6–10"
---

# 🧪 Practice Exam 2: Animation & Production (Modules 6–10)

**30 questions · Allow 45 minutes · No notes. Recommended after Modules 6–10.**

---

### 1.
In Weight Paint mode, enabling **Auto Normalize** ensures that:

A. Brush strokes are smoothed automatically
B. **All bone weight values for any vertex sum to exactly 1.0**
C. Automatic weights are recalculated on every brush stroke
D. The Weight Paint brush follows the mesh normals

---

### 2.
The **Blur** brush tool in Weight Paint mode is used to:

A. **Smooth the weight gradient at the cursor position**
B. Paint the maximum weight (1.0) over all vertices in the brush radius
C. Erase all weights from vertices under the brush
D. Copy weights from one vertex group to another

---

### 3.
A **shape key** in Blender stores:

A. A named pose of the armature
B. A UV layout variation for the mesh
C. **A deformed state of the mesh geometry, blendable with a 0–1 slider value**
D. A material variation for different rendering contexts

---

### 4.
In a bone-driven shape key, the **Driver** system is used to:

A. Apply physics simulation to the shape key's influence
B. Keyframe the shape key value on the timeline
C. Share a shape key between two different armatures
D. **Link the shape key's value to a bone's rotation, so moving the bone triggers the expression**

---

### 5.
What does **Constant (Stepped) interpolation** in the Graph Editor do?

A. Creates a smooth ease-in/ease-out curve
B. Applies a physics-based spring calculation between keyframes
C. **Holds the value at each keyframe until the next keyframe, creating a pose-to-pose jump**
D. Linearly blends between keyframe values

---

### 6.
In the Dope Sheet, pressing **S** with keyframes selected:

A. Saves the file
B. Switches to Stepped interpolation
C. **Scales the timing of the selected keyframes relative to the current frame**
D. Snaps the keyframes to the nearest beat marker

---

### 7.
The **Cycles modifier** in the Graph Editor is applied to F-Curves to:

A. Run the physics simulation loop from the F-Curve data
B. Apply the "Cycle" easing function (elastic bounce)
C. **Repeat the F-Curve pattern infinitely for looping animations**
D. Convert the F-Curve to a cyclic Bezier spline

---

### 8.
In the NLA Editor, **"Push Down"** on an active Action:

A. Moves the action lower in the stack priority
B. Renders the action to a PNG sequence
C. **Converts the active action into an NLA strip on the NLA timeline**
D. Bakes the action's F-Curves to keyframes on the object

---

### 9.
The **Fake User** button (shield icon) on a Blender Action prevents:

A. The action from being used by any other armature
B. The action from being visible in the NLA editor
C. Accidental overwriting of the action
D. **Blender from deleting the action when the file is saved (orphan data cleanup)**

---

### 10.
A **Passive** rigid body object in Blender is:

A. An Active rigid body with reduced mass
B. **A fixed collision obstacle that Active rigid bodies bounce off without moving itself**
C. A soft body that deforms on collision
D. A cloth object constrained to behave as a rigid surface

---

### 11.
The **Pinning vertex group** in a cloth simulation defines:

A. The cloth vertices that self-collide
B. The resolution of the cloth grid's internal spring network
C. **The vertices that do not move — the attachment points that hold the cloth to the character**
D. The mass distribution across the cloth surface

---

### 12.
For a fluid simulation in Blender (Mantaflow), the **Domain** object defines:

A. The fluid emitter (where fluid originates)
B. The obstacle the fluid collides with
C. **The bounding box within which the fluid simulation is calculated**
D. The material that makes the fluid look like water

---

### 13.
Why must physics simulations always be **baked before rendering**?

A. Baked simulations use less GPU memory during render
B. Unbaked simulations don't appear in Cycles, only EEVEE
C. Baked simulations can be viewed in the UV Editor
D. **Unbaked simulations recalculate from frame 1 for each render call, causing incorrect and inconsistent results**

---

### 14.
The **APIC** fluid solver in Blender is preferred over FLIP for:

A. Very large-scale ocean simulations
B. Very slow-moving viscous fluids
C. **Vortex-rich flows with swirling and angular momentum (better rotational behavior)**
D. Fire and smoke simulations

---

### 15.
The Hair Particle System's **Children → Interpolated** mode:

A. Creates physically simulated child strands
B. Exactly follows parent strand paths with a random offset
C. Uses the GPU to simulate child strands in real time
D. **Generates dense child hair strands interpolated between parent strands for a fuller look**

---

### 16.
**Cycles** rendering uses which algorithm?

A. Rasterization (scanline, row-by-row)
B. Shadow mapping
C. **Path tracing (physically accurate light simulation)**
D. Screen-space ambient occlusion

---

### 17.
**EEVEE** is the correct renderer choice when:

A. Physically correct caustics are required
B. Subsurface scattering on skin must be physically accurate
C. The scene requires infinite indirect lighting bounces
D. **The project needs fast renders, real-time feedback, or stylized non-photorealistic shading**

---

### 18.
The **OptiX denoiser** in Blender requires:

A. Intel CPU with AVX2 instruction set
B. AMD GPU with ROCm drivers
C. **NVIDIA RTX GPU (with Tensor Cores)**
D. A cloud render node subscription

---

### 19.
Rendering directly to **MP4** instead of PNG sequences is problematic because:

A. Blender's MP4 encoder has lower quality than PNG
B. MP4 files cannot store 16-bit color depth
C. MP4 doesn't support alpha channels for compositing
D. **If the render crashes, all frames are lost and rendering must restart from frame 1**

---

### 20.
The **Cryptomatte** render pass enables:

A. AI-based denoising of individual render passes
B. Color correction on a per-material basis during rendering
C. **Per-object masks that can be click-selected in the Compositor**
D. Depth-based fog generation in compositing

---

### 21.
For a 10-second short film at 24fps, the total number of frames to render is:

A. 100
B. 120
C. 200
D. **240**

---

### 22.
The industry-standard **blocking-first** animation workflow uses which sequence?

A. Full-detail spline animation → timing adjustments → blocking cleanup
B. **Stepped/Constant interpolation (blocking) → director approval → Bezier/spline polish**
C. Motion capture → cleanup → blocking confirmation
D. Physics simulation → blocking keyframes → NLA editing

---

### 23.
The Blender Foundation short *Coffee Run* (2020) was produced by:

A. A team of 50 artists over 2 years
B. A single artist in 6 months
C. **Approximately 2 artists over 3 months**
D. The full Blender Institute team of 20

---

### 24.
An **animatic** is built using Blender's:

A. Graph Editor with image plane objects
B. NLA Editor with image strip actions
C. Compositor with timed image inputs
D. **Video Sequence Editor (VSE) with storyboard panel images timed to shot duration**

---

### 25.
The *Sprite Fright* production rendered at which resolution and aspect ratio?

A. 1920×1080 (HD, 16:9)
B. 3840×2160 (4K, 16:9)
C. 1280×720 (HD 720p, 16:9)
D. **2048×858 (2K DCI Scope, 2.39:1)**

---

### 26.
In Blender's Compositor, the **Color Balance** node operates on:

A. Only the red channel of the rendered image
B. Hue and saturation separately per channel
C. **Shadows, midtones, and highlights independently (Lift/Gamma/Gain)**
D. The alpha channel for compositing transparency

---

### 27.
The **Glare** node in the Compositor is used to add:

A. Depth of field blur to out-of-focus areas
B. Camera lens distortion
C. Chromatic aberration fringing
D. **Streaks, bloom, or fog glow around bright areas in the render**

---

### 28.
For the short film's final delivery, the recommended H.264 **CRF** value for high quality is:

A. 0 (lossless)
B. 10
C. **18–23**
D. 40–51

---

### 29.
The **follow-through** animation principle describes:

A. The main character pushing through an obstacle
B. The camera following the character throughout the entire shot
C. The NLA strip repeating after the main action strip completes
D. **Secondary parts (hair, clothing, tail) continuing to move after the main body stops**

---

### 30.
The most important single self-review question for a completed animated short is:

A. Is every UV island optimally packed with under 5% waste?
B. Is the polygon count within the recommended production budget?
C. Are all physics simulations fully baked to cache?
D. **Is the emotional beat clear and felt by a viewer who has no context about the production?**

---

## 🎯 Answer Key (No Cheating!)

```
1.   B — Auto Normalize forces all weights to sum to 1.0
2.   A — Blur brush smooths weight gradient
3.   C — Shape key = stored deformed geometry blended by 0–1 slider
4.   D — Driver links shape key value to bone rotation
5.   C — Constant = holds value until next keyframe (stepped)
6.   C — S scales keyframe timing in the Dope Sheet
7.   C — Cycles modifier repeats the F-Curve pattern infinitely
8.   C — Push Down converts active action to NLA strip
9.   D — Fake User prevents orphan data deletion on save
10.  B — Passive = fixed collider, does not move
11.  C — Pinning vertex group = attach points that don't move
12.  C — Domain = bounding box for the simulation
13.  D — Unbaked = recalculates from frame 1 per render call
14.  C — APIC = better angular momentum / vortex-rich flows
15.  D — Children → Interpolated generates dense hair between parents
16.  C — Cycles = path tracing (physically accurate)
17.  D — EEVEE = fast, stylized, real-time quality
18.  C — OptiX requires NVIDIA RTX GPU
19.  D — MP4 crash = restart from frame 1
20.  C — Cryptomatte = click-to-pick per-object masks
21.  D — 10s × 24fps = 240 frames
22.  B — Blocking (stepped) → director approval → spline polish
23.  C — Coffee Run = ~2 artists, ~3 months
24.  D — Animatic built in Blender's VSE
25.  D — Sprite Fright = 2048×858, 2.39:1 aspect ratio
26.  C — Color Balance = lift/gamma/gain (shadows/mids/highlights)
27.  D — Glare = streaks, bloom, fog glow around bright areas
28.  C — CRF 18–23 = high quality H.264
29.  D — Follow-through = secondary parts continue after body stops
30.  D — Emotional beat clarity is the ultimate self-review criterion
```
