---
title: "Module 7 Cheat Sheet: Color Grading"
---

# 🗒️ Module 7 Cheat Sheet: Color Grading

## Log vs Linear vs Display

| Encoding | Use | Storage |
|----------|-----|---------|
| Scene-linear | Compositing math | 16–32 bit float |
| Log (LogC, S-Log3) | Camera capture, efficient storage | 10–12 bit |
| Display-referred (Rec.709) | Final display output | 8–10 bit |

**Rule: ALL compositing math must happen in scene-linear.**

---

## ACES Pipeline

```
Camera → IDT → ACES2065-1 → ACEScg (working) → [Comp + Render] → ODT → Display
```

| Space | Role |
|-------|------|
| ACES2065-1 | Archival master |
| ACEScg | VFX/comp working space (linear) |
| ACEScct | Grading working space (log) |
| ODT | Output Transform → Rec.709/P3/HDR |

---

## Three-Way Color Corrector

| Zone | Control | Typical Use |
|------|---------|------------|
| Shadows | Lift | Cool/warm dark areas |
| Midtones | Gamma | Skin tone brightness |
| Highlights | Gain | Golden hour / moonlight |

---

## Scopes Reference

| Scope | Shows | Used For |
|-------|-------|---------|
| Parade | R, G, B waveforms side-by-side | Color balance, exposure matching |
| Vectorscope | Hue/saturation in circular space | Shot matching, skin tone alignment |
| Histogram | Pixel value distribution | Clipping check, overall exposure |

**Skin-tone line** = consistent angle on vectorscope (all races). Match this line to match shots.

---

## 1D vs 3D LUT

| Type | Processes | Captures |
|------|----------|---------|
| 1D LUT | Each channel independently | Per-channel curves |
| 3D LUT | RGB triplets together | Cross-channel color (warm shadows) |

---

## Shot Matching Workflow

1. Set hero frame
2. Match black levels (lift) first
3. Match overall exposure (gain/gamma)
4. Match color balance (per-channel)
5. Secondary: match skin tones on vectorscope

---

## Technical vs Creative Grade

| Grade | Who | Purpose |
|-------|-----|---------|
| Technical | Compositor | Match elements to each other; neutral delivery |
| Creative | Colorist (DI) | Apply director/DP's "look" globally |

**Deliver composites in log, no creative look baked in.**

---

## Oppenheimer Color Periods

| Period | Color | Notes |
|--------|-------|-------|
| 1920s–30s Europe | Cold blue-gray | Reduced saturation |
| Manhattan Project/NM | Warm amber | Warm lift, orange boost |
| Trinity flash | Blow-out white | Intentional film burn-through |
| 1954 Hearing | High saturation | Aggressive contrast |
| Strauss flashbacks | True B&W | Shot on B&W IMAX film |
