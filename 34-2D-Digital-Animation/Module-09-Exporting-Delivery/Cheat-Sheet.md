---
permalink: /34-2D-Digital-Animation/Module-09-Exporting-Delivery/Cheat-Sheet/
title: "Module 9 Cheat Sheet: Exporting & Delivery"
---

# ⚡ Module 9 Cheat Sheet — Exporting & Delivery

---

## Codec Quick Reference

| Format | Container | Alpha | Use When |
|--------|-----------|-------|---------|
| **H.264** | MP4 | No | YouTube, Instagram, TikTok, general web |
| **H.265 (HEVC)** | MP4 | No | 4K streaming; where supported |
| **ProRes 4444** | MOV | Yes | Compositing intermediate, VFX, with alpha |
| **ProRes 422** | MOV | No | Broadcast deliverable, editing intermediate |
| **WebM (VP9)** | WEBM | Yes | Web animation with transparency |
| **GIF** | GIF | Basic (binary) | Legacy only; 256-color limit |
| **PNG Sequence** | PNG | Yes | Frame-accurate compositing deliverable |
| **Lottie JSON** | JSON | N/A | Web/app vector animation via Bodymovin |

---

## H.264 Requires Media Encoder

```
AE Render Queue → does NOT have H.264
Composition → Add to Adobe Media Encoder Queue → H.264 ✓
```

---

## Platform Delivery Specs

| Platform | Format | Aspect | FPS |
|----------|--------|--------|-----|
| YouTube | H.264 MP4 | 16:9 | Native (24/25/30/60) |
| Instagram feed | H.264 MP4 | 1:1 or 4:5 | 30fps |
| TikTok | H.264 MP4 | 9:16 (1080×1920) | 30fps |
| US Broadcast | ProRes 422 | 16:9 | 29.97fps |
| EU Broadcast | ProRes 422 | 16:9 | 25fps |
| Web (with alpha) | WebM VP9 | Any | Match source |
| iOS/Android app | Lottie JSON | Vector | N/A |

---

## Color Space

| Space | Used For | Gamut |
|-------|---------|-------|
| **sRGB** | Web, consumer monitors | Standard |
| **Rec.709** | Broadcast TV, streaming | Same primaries as sRGB; different gamma |
| **DCI-P3** | Cinema, Apple displays | Wider than sRGB |
| **Rec.2020** | HDR TV | Very wide |

> sRGB and Rec.709 share primaries but differ in gamma. A mismatch = washed-out or over-bright output.

---

## Lottie Requirements

- AE composition must use **Shape Layers** (not raster footage)
- Use **Bodymovin** plugin to export
- 3D layers, certain effects, blend modes = NOT supported
- Output: `.json` + assets folder
- Player: LottieFiles player, Lottie for iOS/Android/React

---

## Frame Rate Conversion

| Issue | Result | Best Fix |
|-------|--------|---------|
| 24fps → 30fps | Not whole number; frames duplicated/blended | Render at 30fps from source |
| 25fps → 24fps | 4% slowdown if speed-changed | Re-render at 24fps |
| 12fps → 24fps | Frame duplication | Double each frame (intentional "on twos") |

**Rule: Always render at the target frame rate from the source composition.**

---

## GIF: When to Avoid

- More than 256 colors in the frame → use WebM
- Any audio needed → use MP4
- Any alpha transparency needed → use WebM
- Large dimensions or long duration → use MP4 (GIF files balloon in size)
