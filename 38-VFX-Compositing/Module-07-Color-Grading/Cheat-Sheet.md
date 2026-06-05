---
title: "Module 7 Cheat Sheet: Color Grading"
---

# 🗒️ Module 7 Cheat Sheet: Color Grading

## Log vs Linear vs Display

| Encoding | Use | Storage | Key Fact |
|----------|-----|---------|---------|
| Scene-linear | Compositing math | 16–32 bit float | Physically accurate |
| Log (LogC, S-Log3) | Camera capture, storage | 10–12 bit | Compresses dynamic range |
| Display-referred (Rec.709) | Final display output | 8–10 bit | Clipped at display gamut |

**RULE: ALL compositing math (Merge/over, Blur, Defocus) must happen in scene-linear.**
**Compositing in Log or display-referred produces: color fringing, wrong blend math, wrong exposure.**

---

## ACES Pipeline Step by Step

```
Camera RAW → IDT → ACES2065-1 → ACEScg (working space)
→ [Compositing + CG rendering in ACEScg]
→ ODT → Display (Rec.709 / P3 / HDR)
```

| Space | Role |
|-------|------|
| ACES2065-1 | Archival master (extremely wide gamut) |
| ACEScg | VFX/comp working space — linear |
| ACEScct | Grading working space — log-encoded |
| IDT | Input Device Transform: camera log → ACES |
| ODT | Output Device Transform: ACES → display |

---

## Color Space Conversion Reference

| Source Space | Target | Transform | Camera |
|-------------|--------|-----------|--------|
| ARRI LogC3 | ACEScg | ARRI LogC3 IDT | ALEXA |
| ARRI LogC4 | ACEScg | ARRI LogC4 IDT | ALEXA 35 |
| RED Log3G10 | ACEScg | RED IDT | KOMODO, EPIC |
| Sony S-Log3 | ACEScg | Sony IDT | VENICE |
| ACEScg | Rec.709 | sRGB ODT | Streaming/broadcast |
| ACEScg | DCI P3 D65 | P3 ODT | Cinema projection |
| ACEScg | HDR10 PQ | HDR10 ODT | HDR streaming |

---

## Three-Way Color Corrector

| Zone | Control | Typical Use |
|------|---------|------------|
| Shadows | Lift | Cool/warm dark areas |
| Midtones | Gamma | Skin tone brightness (most critical zone) |
| Highlights | Gain | Golden hour (warm) / moonlight (cool) |

**Match shadows FIRST, then exposure, then per-channel color balance.**

---

## Scopes Reference

| Scope | Shows | Primary Use |
|-------|-------|------------|
| Parade | R, G, B waveforms side-by-side | Color balance, exposure matching |
| Vectorscope | Hue/saturation circular space | Shot matching, skin tone alignment |
| Histogram | Pixel value distribution | Clipping check, overall exposure |

**Skin-tone line = consistent angle on vectorscope for all human skin tones. Match this for shot continuity.**

---

## 1D vs 3D LUT

| Type | Processes | Captures | Use |
|------|----------|---------|-----|
| 1D LUT | Each channel independently | Per-channel curves only | Technical transforms |
| 3D LUT | RGB triplets together | Cross-channel interactions (warm shadows) | Creative grades |

**Creative grades always require 3D LUTs. 1D LUTs cannot reproduce orange-teal grade interactions.**

---

## LUT Types Reference

| LUT Type | Purpose |
|----------|---------|
| Technical LUT | Color space transform (mathematically precise) |
| Display LUT | Monitor calibration |
| Creative LUT | A "look" — the grade baked into a table |

---

## Shot Matching Workflow

| Step | Action |
|------|--------|
| 1 | Set the hero frame as reference |
| 2 | Use parade scope — not eyes — to compare |
| 3 | Match black levels (Lift/Blackpoint) first |
| 4 | Match overall exposure (Gain/Gamma) |
| 5 | Match per-channel color balance (R, G, B separately) |
| 6 | Secondary: match skin tones on vectorscope skin-tone line |

---

## Delivery Specification Tables

### Broadcast and Streaming

| Format | Color Space | Gamma | Max Luminance | Bit Depth |
|--------|-------------|-------|--------------|----------|
| Broadcast Rec.709 | Rec.709 | BT.1886 (2.4) | 100 nits | 8–10 bit |
| Streaming Rec.709 | Rec.709 | sRGB (~2.2) | 100 nits | 8–10 bit |
| Digital Cinema DCI P3 | DCI P3 | Gamma 2.6 | 48 cd/m² | 12 bit |
| HDR10 (streaming) | Rec.2020 | PQ (SMPTE ST.2084) | Up to 10,000 nits | 10 bit |
| Dolby Vision | Rec.2020 | PQ + Dolby metadata | Up to 10,000 nits | 12 bit |

### Platform Codec Reference

| Platform | Codec | Color Space | HDR |
|----------|-------|-------------|-----|
| Netflix | H.264/H.265/AV1 | Rec.709 / HDR10 / Dolby Vision | Yes |
| Disney+ | H.265 | Rec.709 / HDR10 | Yes |
| Apple TV+ | H.265 | Rec.709 / HDR10 / Dolby Vision | Yes |
| Broadcast TV | MPEG-2 / H.264 | Rec.709 | SDR only (most channels) |

---

## Technical vs Creative Grade

| Grade | Who | Where | Purpose |
|-------|-----|-------|---------|
| Technical | Compositor | On each shot | Match elements to plate; neutral delivery |
| Creative | Colorist | DI facility | Apply director/DP "look" globally |

**Deliver composites in log encoding — no creative look baked in. Let the colorist apply the look.**

---

## Oppenheimer Color Design Quick Reference

| Period | Color Language |
|--------|---------------|
| 1920s–30s Europe | Cold blue-gray; reduced saturation |
| Manhattan Project / NM | Warm amber; boosted orange |
| Trinity flash | Intentional blow-out (film burn-through) |
| 1954 Hearing | High saturation; aggressive contrast |
| Strauss flashbacks | True B&W — shot on B&W IMAX film |

**Trinity explosion = practical pyrotechnics, not CGI. The "fireball" was real fire photographed on IMAX film.**
