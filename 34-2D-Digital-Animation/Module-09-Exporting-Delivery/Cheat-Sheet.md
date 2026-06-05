---
permalink: /34-2D-Digital-Animation/Module-09-Exporting-Delivery/Cheat-Sheet/
title: "Module 9 Cheat Sheet: Exporting & Delivery"
---

# ⚡ Module 9 Cheat Sheet — Exporting & Delivery

---

## Codec Quick Reference

| Format | Container | Alpha? | Use When |
|--------|-----------|--------|---------|
| **H.264** | MP4 | No | YouTube, Instagram, TikTok, general web |
| **H.265 (HEVC)** | MP4 | No | 4K streaming; where supported |
| **ProRes 4444** | MOV | Yes | Compositing intermediate, VFX, with alpha |
| **ProRes 422** | MOV | No | Broadcast deliverable, editing intermediate |
| **WebM (VP9)** | WEBM | Yes | Web animation with transparency |
| **GIF** | GIF | Basic (binary) | Legacy only; 256-color limit |
| **PNG Sequence** | PNG | Yes | Frame-accurate compositing deliverable |
| **Lottie JSON** | JSON | N/A | Web/app vector animation via Bodymovin |

---

## H.264 Requires Media Encoder — CRITICAL

```
AE Render Queue → does NOT have H.264/MP4
Composition → Add to Adobe Media Encoder Queue → H.264 ✓

What AE Render Queue CAN export:
  - ProRes (MOV)
  - PNG Sequence
  - TIFF Sequence
  - EXR Sequence
  - Lossless AVI
```

---

## Platform Delivery Specs

| Platform | Format | Aspect | FPS | Notes |
|----------|--------|--------|-----|-------|
| YouTube | H.264 MP4 | 16:9 | Native (24/25/30/60) | YT re-encodes; upload best quality |
| Instagram feed | H.264 MP4 | 1:1 or 4:5 | 30fps | Max 60 sec |
| TikTok | H.264 MP4 | 9:16 (1080×1920) | 30fps | Vertical only |
| US Broadcast | ProRes 422 | 16:9 | 29.97fps | Rec.709 + timecode |
| EU Broadcast | ProRes 422 | 16:9 | 25fps | Rec.709 |
| Web (with alpha) | WebM VP9 | Any | Match source | Transparency required |
| iOS/Android app | Lottie JSON | Vector | N/A | Shape layers only |

---

## Color Space

| Space | Used For | Gamut | Gamma |
|-------|---------|-------|-------|
| **sRGB** | Web, consumer monitors | Standard | ~2.2 piecewise |
| **Rec.709** | Broadcast TV, streaming | Same primaries as sRGB | Different curve |
| **DCI-P3** | Cinema, Apple displays | Wider than sRGB | — |
| **Rec.2020** | HDR TV | Very wide | — |

> sRGB and Rec.709 share primaries but differ in gamma.
> Mismatch = washed-out or over-bright output.

---

## AE Color Management Settings

| Delivery Target | Working Color Space | Bit Depth |
|----------------|---------------------|----------|
| Web / consumer | sRGB | 8-bit or 16-bit |
| US/EU Broadcast | Rec.709 | 8-bit |
| Cinema / premium | DCI-P3 | 16-bit |
| HDR streaming | Rec.2020 | 16-bit or 32-bit |

---

## Lottie Requirements

- AE composition must use **Shape Layers** (not raster footage)
- Use **Bodymovin** plugin to export
- 3D layers, complex effects, certain blend modes = NOT supported
- Text must be outlined or use supported fonts
- Output: `.json` + assets folder
- Player: LottieFiles player, Lottie for iOS/Android/React

---

## Frame Rate Conversion

| Issue | Result | Best Fix |
|-------|--------|---------|
| 24fps → 30fps | Not whole number; frames duplicated/blended | Render at 30fps from source |
| 25fps → 24fps | 4% slowdown if speed-changed | Re-render at 24fps |
| 12fps → 24fps | Frame duplication | Double each frame (intentional "on twos") |
| 29.97 vs. 30fps | Technically different; broadcast = 29.97 | Always use 29.97fps for US broadcast |

**Rule: Always render at the target frame rate from the source composition.**

---

## GIF: When to Avoid

- More than 256 colors → use WebM
- Any audio needed → use MP4
- Alpha transparency needed → use WebM
- Large dimensions or long duration → use MP4 (GIF files balloon in size)
- Modern browser target → use WebM or MP4 with autoplay

---

## Batch Export in Media Encoder

```
1. In AE: Composition → Add to Adobe Media Encoder Queue
2. In AME: queue item appears
3. Click format preset → choose H.264 / ProRes / etc.
4. Click output path → set destination
5. Add more comps as needed
6. Click green Start Queue button
7. AE remains available while AME renders in background
```

---

## Codec Quality vs. File Size

| Codec | Quality | File Size |
|-------|---------|-----------|
| PNG Sequence | Lossless | Largest |
| ProRes 4444 | Excellent | Very large |
| ProRes 422 | Excellent | Large |
| H.265 (HEVC) | Very good | Small |
| H.264 | Good | Small |
| WebM VP9 | Good | Small |
| GIF | Poor (256 color) | Medium |


---

## ✅ Module Sign-Off Checklist

- [ ] Can explain core concept without notes
- [ ] Can name 3 industry examples
- [ ] Know the 2 most common mistakes
- [ ] Understand when to use each technique

**Key formula / ratio / number to memorize:**
See the exam callouts (🎯) in the Reading.md for this module.
