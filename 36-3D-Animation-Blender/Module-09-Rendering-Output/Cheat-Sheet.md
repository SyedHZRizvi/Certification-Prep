---
permalink: /36-3D-Animation-Blender/Module-09-Rendering-Output/Cheat-Sheet/
title: "Module 9 Cheat Sheet: Rendering & Output"
---

# 🗒️ Module 9 Cheat Sheet: Rendering & Output

---

## Cycles vs. EEVEE Decision

| Criterion | Choose Cycles | Choose EEVEE |
|---|---|---|
| Light accuracy needed | Yes | No |
| Subsurface scattering | Yes (skin, wax) | Approximated only |
| Stylized / flat shading | No | Yes |
| Fast preview | No | Yes |
| Render speed matters | Willing to wait | Need real-time |

---

## Cycles Sample Count Reference

| Quality | Samples | With Denoising |
|---|---|---|
| Preview | 32–64 | Not needed |
| Good | 128–256 | Yes |
| Production | 512–1024 | Yes |
| Noise-free ref | 4096+ | Optional |

---

## Denoising Options

| Denoiser | Requires | Quality |
|---|---|---|
| OpenImageDenoise (OIDN) | CPU (any) | High |
| OptiX | NVIDIA RTX GPU | Very high + fast |
| NLM | CPU | Moderate |

**Best practice:** Enable Denoising Data passes → use Denoise node in Compositor

---

## Render Passes (Key Ones)

| Pass | Use in Compositing |
|---|---|
| Combined | Full final image |
| Diffuse Color | Re-light in post |
| AO | Multiply for contact shadow |
| Shadow | Adjust shadow intensity |
| Depth (Z) | Depth of field in comp |
| Cryptomatte | Per-object masks |
| Denoising Data | Input to Denoise node |

---

## Output Format Decision

| Situation | Format |
|---|---|
| Production intermediate | EXR MultiLayer |
| Lossless frames | PNG sequence |
| Final delivery | MP4 H.264 (CRF 18–23) |
| Draft/preview | JPEG |
| Never for production | JPEG (lossy) |

**Rule:** NEVER render directly to MP4. Always PNG/EXR sequences first.

---

## Compositor Essential Nodes

| Node | Purpose |
|---|---|
| Render Layers | Input: all render passes |
| Denoise | AI denoising (needs Albedo + Normal) |
| Color Balance | Grade shadows/mids/highlights |
| Glare | Streaks, bloom around bright areas |
| Composite | Output: writes to render path |
| Viewer | Preview any node in Image Editor |

---

## Sprite Fright Render Stats

- Engine: Cycles
- Samples: 64–512 (by layer)
- Denoiser: OptiX
- Resolution: 2048×858 (2K DCI Scope)
- Output: EXR → Compositor → PNG → H.265
- Farm: 500+ CPUs + 50+ NVIDIA RTX GPUs

---

## Full Cycles vs. EEVEE Comparison

| Feature | Cycles | EEVEE |
|---|---|---|
| Rendering method | Path tracing | Rasterization |
| Light accuracy | Physically correct | Approximated |
| Caustics | Yes | No |
| HDRI ambient | Perfect (no setup) | Needs Irradiance Volume |
| Render speed | 10–120s/frame | 0.5–2s/frame |
| GPU backend (NVIDIA) | CUDA / OptiX | OpenGL |
| GPU backend (AMD) | HIP | OpenGL |
| GPU backend (Apple) | Metal | Metal |
| Motion blur | Camera + Object | Camera only |
| Workbench (third engine) | Previz only | Previz only |

---

## Denoising Strategy by Production Type

| Setup | Denoiser | Samples |
|---|---|---|
| NVIDIA GPU (indie) | OptiX | 128–256 |
| AMD GPU (indie) | OIDN | 256–512 |
| CPU only | OIDN | 256–512 |
| Render farm | OIDN via Compositor | 512–1024 |

**Firefly fix:** Enable Clamp Indirect (10) in Render → Light Paths. Do NOT just increase samples.

---

## View Layer Multi-Quality Pipeline

| Layer | Objects | Samples | Purpose |
|---|---|---|---|
| Characters | Hero characters | 512 | High quality foreground |
| Background | Env, props | 64–128 | Fast background pass |
| FX | Particles, sim | 256 | Effects |

Compositor blends all layers. Total render time reduced ~40% vs. single layer at max samples.

---

## Codec Reference for Final Output

| Codec | Blender Setting | Use Case |
|---|---|---|
| H.264 CRF 18 | FFmpeg → H.264 | Web, social, client preview |
| H.265 CRF 20 | FFmpeg → H.265 | Archival, streaming |
| ProRes 4444 | FFmpeg → ProRes | Broadcast color-grade pipeline |

---

## Gotcha Quick Reference

| Gotcha | Fix |
|---|---|
| MP4 render crashes at frame 180 | Always render PNG sequences; encode MP4 after |
| Fireflies (bright pixel speckles) | Clamp Indirect = 10; reduce Emission Strength |
| Colors look flat / CG | Keep Filmic view transform (never use Standard) |
| Render different on farm nodes | Bake all simulations before distributing |
