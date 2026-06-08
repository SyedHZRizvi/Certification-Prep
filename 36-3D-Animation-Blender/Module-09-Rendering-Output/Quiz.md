---
permalink: /36-3D-Animation-Blender/Module-09-Rendering-Output/Quiz/
title: "Module 9 Quiz: Rendering & Output"
---

# 🧪 Module 9 Quiz: Rendering & Output

**24 questions · Allow 30 minutes · No notes.**

---

### Q1.
**Cycles** is best described as a:

A. Rasterization renderer (GPU-optimized approximation)
B. **Path tracing renderer (physically accurate light simulation)**
C. Scanline renderer (row-by-row pixel computation)
D. Ray-cast renderer (one bounce only)

---

### Q2.
**EEVEE** is best used for:

A. Physically correct subsurface scattering on skin
B. Accurate caustics (light refracted through glass)
C. **Stylized animation, previews, and real-time-quality renders**
D. High-sample-count noise-free stills

---

### Q3.
The **OptiX** denoiser in Blender requires:

A. An Intel CPU with AVX2 support
B. An AMD GPU with HIP drivers
C. **An NVIDIA RTX GPU (or compatible card with Tensor cores)**
D. A cloud render subscription

---

### Q4.
Why should production animation never be rendered **directly to MP4**?

A. MP4 doesn't support alpha channels
B. MP4 is too large for animated sequences
C. Blender's VP9 encoder is better
D. **If the render crashes mid-sequence, you lose all progress and must restart from frame 1**

---

### Q5.
The **OpenEXR MultiLayer** output format is valuable because:

A. It applies hardware-accelerated compression to reduce file size
B. It supports animated textures baked into the output
C. **It stores all enabled render passes in a single .exr file per frame for compositing**
D. It automatically encodes a final MP4 alongside the EXR

---

### Q6.
The **Cryptomatte** render pass is used in compositing to:

A. Apply a noise reduction filter to the final image
B. Bake ambient occlusion to the object's UV texture
C. **Generate per-object masks that can be picked with a single click in the Compositor**
D. Output metadata about each rendered object's material

---

### Q7.
At 256 Cycles samples on an RTX 3080, approximately how long does a typical production frame take?

A. Under 0.5 seconds
B. 30–120 seconds
C. 5–15 minutes
D. **5–15 seconds (with denoising at 128–256 samples)**

---

### Q8.
The **Depth (Z)** render pass contains:

A. The Z-axis rotation of each object in the frame
B. A color-coded map of object types (foreground, midground, background)
C. **The per-pixel distance from the camera to the surface (used for depth of field in compositing)**
D. The depth of shadow rays for each pixel

---

### Q9.
Which *Sprite Fright* optimization cut total render time by approximately 40%?

A. Switching from Cycles to EEVEE for background objects
B. Reducing the render resolution from 4K to 2K
C. **Rendering foreground characters at 512 samples and background elements at 64 samples in separate View Layers**
D. Disabling subsurface scattering on secondary characters

---

### Q10.
The **Render Layers node** in Blender's Compositor is used to:

A. Separate the scene into individual render layers for export
B. Load a separate .blend file's render result
C. **Access the render passes from the current scene's View Layer**
D. Import EXR files from an external renderer like Nuke

---

### Q11.
Blender's resolution for *Sprite Fright* was:

A. 1920×1080 (Full HD, 16:9)
B. 3840×2160 (4K UHD)
C. 1280×720 (HD 720p)
D. **2048×858 (2K DCI Scope, 2.39:1 aspect ratio)**

---

### Q12.
The **Color Balance** node in Blender's Compositor operates on:

A. Only the luminance (Y) channel of the image
B. The alpha channel for transparency control
C. **The shadows, midtones, and highlights separately (Lift/Gamma/Gain or ASC CDL)**
D. The hue and saturation values only

---

### Q13.
Which render pass would you use to **darken only the contact shadow areas** between objects in a scene?

A. Shadow Pass (multiply over Combined)
B. Specular Light pass
C. Normal pass
D. **AO (Ambient Occlusion) pass (multiply over Diffuse)**

---

### Q14.
The **Glare** node in Blender's Compositor adds:

A. Anti-aliasing to jagged edges in the render
B. Chromatic aberration to the lens
C. Depth-of-field blur to out-of-focus areas
D. **Light streaks, bloom, or fog glow around bright areas in the image**

---

### Q15.
**OpenImageDenoise (OIDN)** in Blender:

A. Requires an NVIDIA GPU with Tensor Cores
B. Only works with EEVEE renders
C. **Is Intel's AI-based denoiser that runs on the CPU (no specific GPU required)**
D. Reduces noise by averaging neighboring frames

---

### Q16.
The recommended **sample count range** for production Cycles rendering with OptiX denoising is:

A. 32–64 samples (preview quality)
B. **128–512 samples (production quality)**
C. 2048–4096 samples (noise-free reference quality)
D. 10,000+ samples (final print quality)

---

### Q17.
To denoise individual render passes in the Compositor (rather than the combined final), the Denoise node requires:

A. The Depth pass and the AO pass as inputs
B. The Combined pass and the Shadow pass as inputs
C. **The Albedo and Normal denoising data passes as additional inputs**
D. A pre-rendered reference frame as the clean baseline

---

### Q18.
Which output format is **not suitable** as a production intermediate (between rendering and compositing)?

A. OpenEXR (16-bit half)
B. PNG (16-bit)
C. OpenEXR MultiLayer
D. **JPEG (lossy 8-bit)**

---

### Q19.
In Blender's Output Properties, the **Frame Step** setting of 2 means:

A. The renderer advances 2 frames before the next frame is saved
B. **Only every other frame is rendered (every 2nd frame)**
C. The render pauses for 2 seconds between frames
D. The output framerate is doubled

---

### Q20.
Blender's **Flamenco** is:

A. A GPU benchmark tool for Cycles performance
B. A texture baking system for producing Alembic caches
C. **Blender's open-source network render manager for distributing renders across multiple machines**
D. The Blender Cloud service for buying render credits

---

### Q21.
The *Sprite Fright* team's render farm included approximately:

A. 10 CPU cores + 2 GPUs
B. 50 CPU cores + 5 GPUs
C. 200 CPU cores + 20 GPUs
D. **500+ CPU cores + 50+ NVIDIA RTX GPUs**

---

### Q22.
The **Compositing workspace** in Blender's default layout accesses the:

A. Shader Editor (for post-processing materials)
B. Video Sequence Editor
C. Grease Pencil stroke compositor
D. **Node-based Compositor for post-processing rendered images**

---

### Q23.
What is the recommended **CRF (Constant Rate Factor)** value for a high-quality H.264 MP4 export from Blender?

A. 0 (lossless)
B. 10–12 (near-lossless)
C. **18–23 (high quality)**
D. 40–51 (small file, low quality)

---

### Q24.
After compositing a render in Blender's Compositor, the **Composite node** (output node) writes the result to:

A. A new track in the Video Sequence Editor
B. A new image in the Image Editor
C. **The render output path defined in Output Properties**
D. The active material's texture slot

---

## 🎯 Answer Key (No Cheating!)

```
Q1.  B, Cycles = path tracer (physically accurate light simulation)
Q2.  C, EEVEE = stylized animation, previews, real-time quality
Q3.  C, OptiX requires NVIDIA RTX (or compatible Tensor Cores)
Q4.  D, MP4 crash = restart from frame 1; PNG sequences are resumable
Q5.  C, EXR MultiLayer stores all render passes in one file per frame
Q6.  C, Cryptomatte = click-to-pick per-object masks in Compositor
Q7.  D, 128–256 samples + denoising ≈ 5–15 seconds per frame on RTX 3080
Q8.  C, Z/Depth pass = per-pixel camera distance (for DoF in comp)
Q9.  C, Separate View Layers with different sample counts per object group
Q10. C, Render Layers node accesses the current scene's render passes
Q11. D, Sprite Fright = 2048×858 (2K DCI Scope)
Q12. C, Color Balance = lift/gamma/gain (shadows/midtones/highlights)
Q13. D, AO pass multiplied over diffuse darkens contact shadow areas
Q14. D, Glare node = streaks, bloom, fog glow around bright pixels
Q15. C, OIDN = Intel's AI denoiser, CPU-based, no specific GPU needed
Q16. B, 128–512 samples is the production range with OptiX denoising
Q17. C, Denoise node needs Albedo + Normal denoising data passes
Q18. D, JPEG is lossy 8-bit; not suitable as intermediate
Q19. B, Frame Step 2 = render every other frame
Q20. C, Flamenco = Blender's open-source network render manager
Q21. D, Sprite Fright farm: 500+ CPU cores + 50+ NVIDIA RTX GPUs
Q22. D, Compositing workspace = node-based Compositor
Q23. C, CRF 18–23 = high quality H.264 (lower = higher quality/larger file)
Q24. C, Composite node writes to the Output Properties render path
```
