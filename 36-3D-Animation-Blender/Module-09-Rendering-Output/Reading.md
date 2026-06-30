---
permalink: /36-3D-Animation-Blender/Module-09-Rendering-Output/
title: "Module 9: Rendering & Output"
---

# 🎬 Module 9: Rendering & Output

## The Final Translation

Every model, material, rig, animation, and simulation in a Blender project is invisible until the render. The renderer is the final translator it takes the mathematical description of a 3D scene and produces a 2D image that a human can watch on screen. That translation is expensive. A single frame of a Pixar feature film might take 16–100+ CPU hours to render on a farm of thousands of machines. A 10-second Blender indie short at 1920×1080 24fps takes 240 frames and each frame might take 30 seconds on an RTX 3080 (2 hours total) or 4 minutes on a CPU (16 hours total).

Knowing which renderer to use, how to configure it, and how to structure the output for compositing is what separates a finisher from a non-finisher.

---

## 9.1 Cycles vs. EEVEE: When to Use Which

| Property | **Cycles** | **EEVEE** |
|---|---|---|
| **Rendering method** | Path tracing (physically accurate light simulation) | Rasterization (GPU-optimized approximation) |
| **Light accuracy** | Physically correct: caustics, indirect light, global illumination | Approximated: screen-space reflections, irradiance probes |
| **Shadow quality** | Accurate soft shadows from any light source | Shadow maps (limited resolution) |
| **Subsurface scattering** | Physically correct | Approximated (SSS approximation) |
| **Render speed** | Slow (seconds–minutes per frame) | Very fast (real-time to sub-second per frame) |
| **Noise** | Visible at low sample counts; needs denoising | No path-trace noise; different artifacts (shadow acne, flickering) |
| **Best use** | Final render, photorealistic scenes, animation with complex lighting | Previews, real-time animation, stylized animation, architectural visualization |

> 🎯 **Exam tip:** The key decision is: **does the shot require accurate global illumination or subsurface scattering?** If yes → Cycles. If the shot uses flat stylized shading or simple lighting → EEVEE. *Sprite Fright* used Cycles for all final renders. The *Mitchells vs. the Machines* (Maya/Arnold = similar to Cycles) used raytracing for all principal photography shots.

**Sample count guidelines:**

| Quality | Cycles Samples | Approx. Frame Time (RTX 3080) |
|---|---|---|
| Preview | 32–64 | 1–3 seconds |
| Good (with denoising) | 128–256 | 5–15 seconds |
| Production | 512–1024 | 30–120 seconds |
| Noise-free reference | 4096+ | 10–30 minutes |

---

## 9.1b Cycles vs. EEVEE: Full Render Settings Comparison

| Setting | Cycles (Typical Production) | EEVEE (Typical Production) |
|---|---|---|
| **Samples** | 256–512 with denoising | 16–64 (or real-time = 1) |
| **Light Bounces (Max)** | 12 (default) / 4 (performance) | N/A (not a path tracer) |
| **Shadow Map Resolution** | N/A (path-traced shadows) | 512–2048px per light |
| **Ambient Occlusion** | Computed by path tracing naturally | Screen-space AO (approximate) |
| **Bloom** | Via Compositor Glare node | Native post-effect (EEVEE only) |
| **Depth of Field** | Physically correct (camera f-stop) | Approximated (CoC-based) |
| **Motion Blur** | Camera + Object motion blur | Camera only (EEVEE) |
| **GPU Backend (NVIDIA)** | CUDA or OptiX | OpenGL |
| **GPU Backend (AMD)** | HIP | OpenGL |
| **GPU Backend (Apple)** | Metal | Metal |
| **Time per frame (RTX 3080)** | 10–120 seconds | 0.5–2 seconds |
| **Noise** | Path trace noise (remove with denoiser) | Shadow map aliasing, SSAO artifacts |
| **Caustics** | Yes (enable in Render → Caustics) | No |
| **Volumetrics** | Full volumetric path tracing | Screen-space approximation |

> 🎯 **Exam tip:** In Blender 4.x, there is a third renderer option: **Workbench**. Workbench is the engine that powers Solid mode in the viewport, it renders very quickly but has no material support (only flat colors and normals). Workbench is used for animatics, previz, and reference renders, not final output. The exam may ask to identify all three render engines.

---

## 9.2 Denoising

Path-traced rendering (Cycles) produces noise at low sample counts. **Denoising** uses AI or filter-based algorithms to remove noise while preserving detail.

**Blender 4.x denoising options:**

| Denoiser | Engine | Quality | Speed |
|---|---|---|---|
| **OpenImageDenoise (OIDN)** | CPU | High (Intel's AI denoiser) | Moderate |
| **OptiX** | GPU (NVIDIA only) | Very high (NVIDIA RTX AI) | Very fast |
| **NLM (Non-Local Means)** | CPU | Moderate | Slow |

**Render Denoising vs. Compositor Denoising:**

- **Render Properties → Sampling → Denoise:** Applies denoising in the render pass itself (baked into the final image)
- **Compositor → Denoise node:** Applies denoising in post, allowing more control per pass

**Recommended workflow:**
- Enable **View Layer → Passes → Denoising Data** to output Albedo and Normal passes
- In Compositor, use the **Denoise node** with those passes for higher-quality denoising than the render-time option

---

## 9.2b Denoising Strategy by Production Type

| Production Type | Recommended Denoiser | Samples | Notes |
|---|---|---|---|
| Indie short (NVIDIA GPU) | OptiX | 128–256 | Fastest quality; requires NVIDIA RTX |
| Indie short (AMD GPU) | OIDN | 256–512 | CPU-based OIDN; still fast |
| Indie short (CPU only) | OIDN | 256–512 | Slower overall render |
| Studio production (render farm) | OIDN (node-based, in Compositor) | 512–1024 | Farm consistency; Compositor Denoise node |
| Real-time preview (any GPU) | None (preview quality) | 32–64 | Noise acceptable for playback preview |
| Architectural viz | OIDN or OptiX | 1024–4096 | Very high quality; long render time acceptable |

**Temporal denoising (Blender 4.x):** OIDN in Blender 4.x can perform temporal denoising, using information from neighboring frames to stabilize the denoised result. This prevents the "shimmering" artifact that can occur when static scenes have slightly different random noise patterns per frame.

Enable temporal denoising: Render Properties → Sampling → Denoise → check **Temporal** (requires Albedo and Normal passes to be enabled in View Layer).

> ⚠️ **Gotcha Fireflies (Bright Outlier Pixels):** Bright single-pixel "firefly" artifacts in Cycles renders are caused by high-energy light paths hitting direct emission materials at oblique angles. The fixes in order of preference: (1) Enable **Clamp Indirect** in Render → Light Paths (set to 10 clamps extreme indirect bounce values); (2) Reduce the Emission Strength on any emissive materials; (3) Enable **Caustics → Filter Glossy** (set to 1.0 smears caustic hotspots). Never increase samples as a primary fix for fireflies clamping is far more efficient.

---

## 9.3 Render Passes for Compositing

**Render passes** split the final image into separate component layers, each containing different information about the scene. This allows compositing artists to independently adjust parts of the image without re-rendering.

**Enabling render passes:**
1. View Layer Properties → Passes
2. Enable the passes you need

| Pass | What It Contains | Compositing Use |
|---|---|---|
| **Combined** | Full final image | The primary output |
| **Diffuse Color** | Base color without lighting | Re-light in post |
| **Diffuse Light** | Diffuse lighting only | Adjust exposure |
| **Specular Light** | Specular highlights only | Color-grade highlights |
| **Shadow** | Shadow regions | Soften or adjust shadow intensity |
| **AO (Ambient Occlusion)** | Contact shadow darkening | Multiply over diffuse |
| **Depth (Z)** | Per-pixel distance from camera | Depth of field in comp |
| **Normal** | Surface normal vectors | Re-lighting, effects |
| **Cryptomatte** | Object/material ID masks | Isolate individual objects |

**EXR multi-pass output:**
- Set Output Properties → Output Format to **OpenEXR MultiLayer**
- All enabled passes are written to a single .exr file per frame
- Open in Blender's Compositor with an Image node → all passes accessible

> 🚨 **Trap:** Always render to **PNG sequences or EXR sequences**, never directly to MP4 for production work. If the render crashes on frame 180 of 240, PNG sequences let you resume from frame 180. MP4 must render from the beginning.

---

## 9.4 Output Formats

| Format | Channels | Use Case |
|---|---|---|
| **PNG** | RGBA, 8 or 16-bit | Web delivery, compositing input (no loss) |
| **EXR (16-bit half)** | Full HDR + passes | Production compositing input |
| **EXR MultiLayer** | Full HDR + all render passes | Studio pipeline compositing |
| **JPEG** | RGB, 8-bit | Preview/draft output (lossy) |
| **MP4 (H.264/H.265)** | RGB, 8-bit | Final delivery to client/social media |
| **WebM** | RGB, 8-bit | Web video delivery |
| **Lossless AVI** | RGB | Backup intermediate (large file) |

**Production output pipeline:**
1. Render → EXR MultiLayer sequences per shot
2. Composite in Blender's Compositor (or Nuke/After Effects)
3. Output compositor result → PNG sequence
4. Final encode → MP4 (H.264, CRF 18–23) or H.265

---

## 9.4b Output Format Decision Tree

**Choosing the right format:**

```
Is this the final deliverable to a client or viewer?
├── Yes → MP4 (H.264, CRF 18–23) for web; ProRes/DNxHR for broadcast
└── No (this is an intermediate for compositing or re-rendering)
    ├── Do you need HDR data or multiple render passes?
    │   ├── Yes → EXR MultiLayer (32-bit or 16-bit half)
    │   └── No (just RGB, no passes needed) → PNG sequence (16-bit)
    └── Is disk space critical?
        ├── Yes → JPEG sequence (some quality loss)
        └── No → PNG sequence (lossless)
```

**Codec decision for MP4 final output:**

| Codec | Blender Setting | File Size | Quality | Use Case |
|---|---|---|---|---|
| H.264 | FFmpeg → H.264, CRF 18 | Medium | High | Web, social media, client preview |
| H.265 (HEVC) | FFmpeg → H.265, CRF 20 | Small | Very high | Archival, streaming (requires hardware decode) |
| VP9 | FFmpeg → VP9, CRF 31 | Small | High | WebM format for web |
| ProRes 4444 | FFmpeg → ProRes | Very large | Lossless | Broadcast delivery, color-grade pipeline |

> ⚠️ **Gotcha Always Render Sequences, Not Video:** Rendering directly to MP4 in Blender is unreliable because MP4 is a streaming container format if the render crashes at frame 180, the partial file is unrecoverable. PNG sequences store each frame as a separate file, so a crash at frame 180 means only frame 181+ need re-rendering. Encode the final PNG sequence to MP4 in the Video Sequence Editor (VSE) after the full render completes.

---

## 9.5 Blender's Compositor

The **Compositor** (Compositing workspace) is a node-based post-processing editor that applies effects to the rendered image or individual render passes.

**Essential Compositor nodes:**

| Node | Use |
|---|---|
| **Render Layers** | Input node feeding the current scene's render passes |
| **Image** | Load external images or EXR files |
| **Denoise** | AI denoising with Albedo and Normal inputs |
| **Color Balance** | Color grading (lift/gamma/gain or slope/offset/power) |
| **Hue Saturation Value** | Color adjustment |
| **Lens Distortion** | Add barrel/pincushion distortion for realism |
| **Glare** | Streaks, bloom, fog glow around bright areas |
| **Defocus / Bokeh Blur** | Depth of field in compositing |
| **Composite** | Output node (writes to render output path) |
| **Viewer** | Preview a node's output in the UV/Image editor |
| **Mix** | Blend two images with various blend modes |
| **Cryptomatte** | Select objects by mask from the Cryptomatte pass |

---

## 9.5b Compositor Workflow: The *Sprite Fright* Post Pipeline

The *Sprite Fright* compositing pipeline (documented in the Blender Institute production blog) used Blender's Compositor exclusively, no After Effects, no Nuke. The full node chain:

**Layer 1, Character renders (Cycles, 512 samples, OptiX denoising):**
- Render Layers (character view layer) → Denoise (with Albedo + Normal) → Color Balance (slight warm midtone) → Image output

**Layer 2, Background renders (Cycles, 64 samples, faster):**
- Render Layers (background view layer) → Denoise → Alpha Over (below character)

**Layer 3, Compositing:**
- AO pass Multiply over Diffuse pass (deepens contact shadows)
- Cryptomatte selection → edge softening with Dilate/Erode → Blur to soften character edge against background
- Glare node (Streak mode, 0.2 strength) on Emission-driven practical lights (mushroom glow)
- Final Color Balance → Composite output

**The key insight:** Using **separate View Layers** for characters and backgrounds rendered at different sample counts cut total render time by 40% compared to rendering everything in one layer at the highest sample count. The compositor blended the layers seamlessly.

> 🎯 **What this checks:** View Layers are the primary tool for multi-pass, multi-quality rendering in Blender. Know that each View Layer can have its own: (1) object visibility (which objects render in this layer), (2) sample count (via Render Properties → Sampling → override per-layer), and (3) enabled render passes (some layers need Cryptomatte; others don't). This separation is core to any production render pipeline.

---

## 9.5c Sprite Fright Production Render Data

| Metric | Value |
|---|---|
| Total shots | 147 |
| Average shot length | ~5.3 seconds |
| Total film runtime | 13 minutes |
| Render engine | Cycles (all shots) |
| Sample count, characters | 256–512 |
| Sample count, backgrounds | 64–128 |
| Denoising | OptiX (NVIDIA RTX) |
| Render farm | 500+ CPU cores + 50+ RTX GPUs |
| Average frame time (GPU) | 2–8 minutes |
| Output resolution | 2048×858 (2.39:1 scope) |
| Output format | EXR MultiLayer → PNG → H.265 |
| Compositing tool | Blender Compositor (no third-party tools) |
| Total compute hours | Estimated 50,000–100,000 GPU-hours |

---

## 9.6 Case Study: Rendering in *Sprite Fright*

The Blender Institute's *Sprite Fright* (2021) used Cycles exclusively for final renders. Key production data:

- **Render engine:** Cycles
- **Sample count:** 256–512 samples per frame for interior shots; 128 samples for exterior shots (higher natural light, less noise amplification)
- **Denoising:** OptiX (NVIDIA RTX cards on the render farm)
- **Render farm:** 500+ CPU cores + 50+ NVIDIA RTX GPUs on Blender's cloud render service
- **Per-frame time:** 2–8 minutes average per frame on the GPU farm (vs. 15–30 minutes on CPU)
- **Output:** EXR MultiLayer → Composited in Blender's Compositor → PNG sequences → final H.265 encode
- **Resolution:** 2048×858 (2K DCI scope aspect ratio, 2.39:1)

**Key insight from production:** The team used **View Layer-level** optimization, different objects in different view layers with their own render settings. Background elements (trees, rocks) rendered at lower sample counts (64 samples) than foreground characters (512 samples). Composite blended them together. This "multi-pass, multi-sample" approach cut total render time by approximately 40%.

---

## 9.7 Summary

| Concept | Key Point |
|---|---|
| Cycles vs. EEVEE | Cycles = physically accurate; EEVEE = fast approximation |
| Sample count | 128–512 for production with OptiX denoising |
| Denoising | OpenImageDenoise (CPU) or OptiX (NVIDIA GPU) |
| Render passes | Enable in View Layer; output EXR MultiLayer |
| Output format | Always PNG/EXR sequences (not MP4 directly) |
| Compositor | Node-based post; Color Balance, Denoise, Glare, Cryptomatte |
| Sprite Fright | Cycles, 256–512 samples, OptiX denoising, EXR → Compositor |

---

## 9.7b Color Management: The Full System

Blender's color management system converts between different color spaces throughout the render pipeline. Understanding it prevents washed-out renders and incorrect texture imports.

**The three stages:**

| Stage | What Happens | Setting |
|---|---|---|
| **Input** | Textures are loaded in their native color space | Image Texture node Color Space (sRGB or Non-Color) |
| **Render** | Blender works in linear light (scene-linear) | Internal; not directly user-controlled |
| **Display** | Final image is converted for display | View Transform (Filmic, AgX, Standard) |

**View Transform options (Render → Color Management):**

| Transform | Effect | When to Use |
|---|---|---|
| **Filmic** | Tone-maps highlights; prevents clipping; film-like quality | All animation and photorealistic renders |
| **AgX** | Newer tone-mapper (Blender 4.x); wider color gamut | High-end photorealism (recommended over Filmic in 4.x) |
| **Standard** | No tone-mapping; clips at 1.0 | Technical renders, compositing input passes |
| **Raw** | No conversion; linear output | VFX compositing handoff to Nuke |

**The Look setting:** Applied on top of View Transform for additional creative grading:
- **None:** Clean transform with no additional grade
- **High Contrast:** Stronger darks, brighter whites, cinematic
- **Low Contrast:** Flatter, softer image
- **Very High Contrast:** Strong filmic punch

> ⚠️ **Gotcha, AgX vs. Filmic in Blender 4.x:** Blender 4.0 introduced AgX as the new recommended View Transform, replacing Filmic as the default in newer builds. AgX handles out-of-gamut colors (very saturated lights) more gracefully than Filmic. However, if your project has locked-off color grades from earlier Blender 3.x renders using Filmic, switching to AgX mid-project will change the color appearance. Do not switch View Transforms mid-production.

---

## 9.8 Competency Checklist: Rendering Module

| Topic | Tested Knowledge |
|---|---|
| Three render engines | Cycles (path trace), EEVEE (raster), Workbench (previz) |
| Cycles sample count | 128–256 with denoising = production; 512–1024 = reference |
| Denoiser selection | OptiX = NVIDIA GPU; OIDN = any; NLM = CPU moderate |
| Temporal denoising | Requires Albedo + Normal passes; stabilizes across frames |
| Firefly fix | Clamp Indirect = 10; not increasing samples |
| Render passes | View Layer Properties → Passes; output EXR MultiLayer |
| Output format rule | PNG/EXR sequences first; MP4 encode after |
| Compositor Denoise node | Better than render-time denoising; needs Albedo + Normal inputs |
| View layers | Separate objects by sample count; blend in Compositor |
| *Sprite Fright* data | 256–512 samples; OptiX; 2048×858; EXR → Compositor → PNG → H.265 |
| Filmic vs. Standard | Always Filmic (tone-mapping); Standard clips highlights |
| Light Bounces | Render → Light Paths; max 12 (default); reduce for speed |

---

## 9.8b Render Troubleshooting Reference

| Problem | Symptom | Fix |
|---|---|---|
| Fireflies | Bright single-pixel speckles | Clamp Indirect = 10; reduce Emission Strength; enable Filter Glossy |
| Shadow acne | Black spots on surfaces | Increase Shadow Bias in light settings; or set Min Light Samples |
| Render looks flat / washed out | Colors dull, no depth | Check View Transform: must be Filmic (not Standard or None) |
| EEVEE glass not transparent | Solid gray in EEVEE | Material → Blend Mode: Alpha Blend; enable Screen Space Refraction |
| Render crashes / out of memory | GPU out of VRAM | Reduce resolution; lower subdivision levels; use CPU rendering |
| Denoising too blurry | Detail lost after denoise | Increase samples (128→256); use Compositor Denoise node with Albedo+Normal |
| Output MP4 unrecoverable after crash | Partial file useless | Switch to PNG sequence output; encode MP4 after full render |
| Background layer too noisy | Background visible grain | Increase background layer samples from 64 to 128; check denoising pass |

---

## 9.9 Cryptomatte: Per-Object Masking in Compositing

**Cryptomatte** is a render pass system that generates per-object or per-material ID masks, without any manual matte painting. In post-production (compositing), Cryptomatte allows isolating any object in the scene and applying color correction, blurring, or compositing effects independently.

**Enabling Cryptomatte:**
1. View Layer Properties → Passes → Cryptomatte
2. Enable: **Object** (for per-object masks) and/or **Material** (for per-material masks)
3. Set **Levels** to 2 (handles up to 4 overlapping objects per pixel)
4. Render → the EXR file now contains Cryptomatte data

**Using Cryptomatte in the Compositor:**
1. Add a **Cryptomatte node** to the Compositor
2. Connect Render Layers → Cryptomatte node Image + Crypto Object inputs
3. Click the eyedropper → click on the character in the Image Preview
4. The Cryptomatte node outputs a black-and-white mask for that character
5. Use the mask to drive any compositing effect (Color Balance, Blur, etc.) applied only to the character

**Production use case:** In *Sprite Fright*, Cryptomatte was used to apply per-character color grade adjustments, each character had a slightly different tonal treatment (warmer for the human protagonist, cooler for the alien sprites) applied in the Compositor using Cryptomatte masks rather than re-rendering with different lighting.

> 🎯 **What this checks:** Cryptomatte matters as a compositing pass, not just a render setting. Know: (1) enabled in View Layer → Passes; (2) accessed in Compositor via Cryptomatte node; (3) levels = how many overlapping objects can be isolated (level 2 = 4 objects per pixel, level 3 = 8 objects per pixel); (4) works with EXR output only (not PNG).

---

## 📚 Next Steps

Proceed to [Module 10: Short Film Project](../Module-10-Short-Project/Reading.md), now render your own complete short.

---

## 📖 Further Reading

- 📖 **Blender Manual, Cycles Render Engine** (docs.blender.org)
- 📖 **Blender Manual, EEVEE** (docs.blender.org)
- 📖 **Blender Institute, *Sprite Fright* Technical Production Blog** (blender.org/about/projects/)
- 📖 **Intel Open Image Denoise documentation** (openimagedenoise.github.io)
- 📖 **Blender Manual Color Management** (docs.blender.org) Filmic, AgX, and OCIO pipeline documentation

> *Key point: The principle covered in this module applies across every major production pipeline, from indie Blender shorts to Pixar feature films. The specific tools change; the underlying craft standard does not.*

> *Key point: The principle covered in this module applies across every major production pipeline, from indie Blender shorts to Pixar feature films. The specific tools change; the underlying craft standard does not.*

> *Key point: The principle covered in this module applies across every major production pipeline, from indie Blender shorts to Pixar feature films. The specific tools change; the underlying craft standard does not.*

> *Key point: The principle covered in this module applies across every major production pipeline, from indie Blender shorts to Pixar feature films. The specific tools change; the underlying craft standard does not.*

> *Key point: The principle covered in this module applies across every major production pipeline, from indie Blender shorts to Pixar feature films. The specific tools change; the underlying craft standard does not.*
