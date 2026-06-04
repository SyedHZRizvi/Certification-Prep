---
permalink: /36-3D-Animation-Blender/Module-09-Rendering-Output/
title: "Module 9: Rendering & Output"
---

# 🎬 Module 9: Rendering & Output

## The Final Translation

Every model, material, rig, animation, and simulation in a Blender project is invisible until the render. The renderer is the final translator — it takes the mathematical description of a 3D scene and produces a 2D image that a human can watch on screen. That translation is expensive. A single frame of a Pixar feature film might take 16–100+ CPU hours to render on a farm of thousands of machines. A 10-second Blender indie short at 1920×1080 24fps takes 240 frames — and each frame might take 30 seconds on an RTX 3080 (2 hours total) or 4 minutes on a CPU (16 hours total).

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

> 🚨 **Trap:** Always render to **PNG sequences or EXR sequences** — never directly to MP4 for production work. If the render crashes on frame 180 of 240, PNG sequences let you resume from frame 180. MP4 must render from the beginning.

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

## 9.6 Case Study: Rendering in *Sprite Fright*

The Blender Institute's *Sprite Fright* (2021) used Cycles exclusively for final renders. Key production data:

- **Render engine:** Cycles
- **Sample count:** 256–512 samples per frame for interior shots; 128 samples for exterior shots (higher natural light, less noise amplification)
- **Denoising:** OptiX (NVIDIA RTX cards on the render farm)
- **Render farm:** 500+ CPU cores + 50+ NVIDIA RTX GPUs on Blender's cloud render service
- **Per-frame time:** 2–8 minutes average per frame on the GPU farm (vs. 15–30 minutes on CPU)
- **Output:** EXR MultiLayer → Composited in Blender's Compositor → PNG sequences → final H.265 encode
- **Resolution:** 2048×858 (2K DCI scope aspect ratio, 2.39:1)

**Key insight from production:** The team used **View Layer-level** optimization — different objects in different view layers with their own render settings. Background elements (trees, rocks) rendered at lower sample counts (64 samples) than foreground characters (512 samples). Composite blended them together. This "multi-pass, multi-sample" approach cut total render time by approximately 40%.

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

## 📚 Next Steps

Proceed to [Module 10: Short Film Project](../Module-10-Short-Project/Reading.md) — now render your own complete short.

---

## 📖 Further Reading

- 📖 **Blender Manual — Cycles Render Engine** (docs.blender.org)
- 📖 **Blender Manual — EEVEE** (docs.blender.org)
- 📖 **Blender Institute — *Sprite Fright* Technical Production Blog** (blender.org/about/projects/)
- 📖 **Intel Open Image Denoise documentation** (openimagedenoise.github.io)
