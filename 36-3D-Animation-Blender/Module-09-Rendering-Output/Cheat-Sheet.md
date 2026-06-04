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
