---
permalink: /34-2D-Digital-Animation/Module-09-Exporting-Delivery/
title: "Module 9: Exporting & Delivery"
---

# 📦 Module 9: Exporting & Delivery

## The Invisible Problem

An animator spends three weeks on a 30-second sequence. The animation is beautiful. The lip sync is perfect. The walk cycle feels alive. They export it, send it to the client, and the client says: "The colors look washed out. And why is it so blurry?"

This is the invisible problem of delivery. Nothing in the animation changed — but the codec, the color space, and the resolution settings were wrong. The work was perfect. The export was not.

This module is about making sure the export matches the animation. It's not glamorous. It is absolutely essential.

---

## 🎬 Codec Decisions

A codec (coder-decoder) is the algorithm used to compress and decompress video data. Different codecs make different trade-offs between file size, quality, encode speed, and compatibility.

| Codec | Container | Use Case | Notes |
|-------|-----------|---------|-------|
| **H.264** | MP4 | Web delivery, YouTube, Vimeo | Universal compatibility; lossy; excellent compression |
| **H.265 (HEVC)** | MP4 | Streaming; 4K delivery | Better compression than H.264 at same quality; less universal support |
| **ProRes 4444** | MOV | Compositing intermediate, VFX, with alpha | Apple codec; lossless alpha; high quality; large files |
| **ProRes 422** | MOV | Broadcast deliverable, editing intermediate | No alpha; excellent quality; broadcast standard |
| **GIF** | GIF | Web animation, social media | 256 colors; dithered; no audio; loops by default |
| **WebM (VP9)** | WEBM | Web animation with transparency | Alpha support; smaller than GIF for same quality |
| **MP4 (H.264)** | MP4 | Default YouTube, Instagram, TikTok upload format | See H.264 above |
| **PNG Sequence** | PNG | Frame-accurate deliverable with transparency | Uncompressed frames; large storage; ideal for compositing |
| **Lottie JSON** | JSON | Web/app vector animation | After Effects comp exported via Bodymovin plugin; scalable, small |

> 🎯 **Exam tip:** ProRes 4444 is the go-to format when you need transparency (alpha channel) and high quality in a video format. It's not H.264/MP4 compatible but is standard in professional Mac-based post-production.

---

## 🖼️ GIF: Still the Wrong Choice for Most Cases

Despite its prevalence, GIF is technically inferior to alternatives for nearly every use case:

| Limitation | Impact |
|-----------|--------|
| 256 colors maximum | Significant color banding in gradients and photos |
| No audio | Only appropriate for silent animation |
| Lossless per frame but large files | GIF files of animated content are often larger than MP4 at same visual quality |
| No HDR or wide color support | Fundamentally limited for modern content |

**When to still use GIF:** Platform compatibility (some older CMS platforms and email clients support GIF but not video). For everything else, WebM or MP4 with autoplay is better.

---

## 🌐 Lottie JSON

Lottie is an animation format created by Airbnb that represents After Effects animations as JSON data. A Lottie file is:
- Vector-based (renders crisply at any screen size)
- Tiny in file size compared to video (often under 100KB)
- Playable in iOS, Android, React Native, and web via the Lottie player library
- Not suitable for frame-by-frame raster animation (it's vector/path data)

### Creating a Lottie Export

1. Create the animation in After Effects.
2. Use shape layers (not raster footage) — Lottie only supports AE shape data, not video.
3. Install the **Bodymovin** plugin in After Effects (free, from GitHub).
4. Render → Bodymovin → Select composition → Export.
5. The output is a `.json` file plus any required assets.

> 🚨 **Trap on the exam:** Lottie only supports specific After Effects features (Shape Layers, masks, basic effects). Complex effects, 3D layers, and certain blend modes do not export to Lottie correctly. Always test Lottie exports before committing to this format for a project.

---

## 🎞️ Frame Rate Conversion

Converting between frame rates introduces complications:

| Conversion | Issue | Solution |
|------------|-------|---------|
| 24fps → 30fps | 30/24 = 1.25 — not a whole number; frames must be duplicated or blended | Use "blend" mode in Media Encoder; or retime to 29.97fps |
| 30fps → 24fps | Frames dropped; can cause motion artifacts | Requires careful retiming or re-rendering source at 24fps |
| 25fps → 24fps | PAL to cinema; 4% slowdown if done by speed change | 25fps source needs speed adjustment for correct length |
| 12fps → 24fps | Frame duplication; intentional "on twos" preserved | Simply double each frame in Media Encoder output |

**Best practice:** Always render at the target frame rate from the source composition. Frame rate conversion post-export should be a last resort, not a standard workflow.

---

## 🎨 Color Space: sRGB vs. Rec.709

Color space defines the range of colors that a file can represent and how those colors relate to a standard reference.

| Color Space | Where Used | Characteristics |
|-------------|-----------|----------------|
| **sRGB** | Web, computer monitors, consumer displays | Standard internet color space; narrower gamut |
| **Rec.709** | Broadcast television, streaming platforms | HDTV standard; same primaries as sRGB; different transfer function (gamma) |
| **DCI-P3** | Digital cinema, HDR displays, Apple displays | Wider gamut than sRGB; used for cinema delivery |
| **Rec.2020** | HDR television (HDR10, Dolby Vision) | Very wide gamut; used for UHD/HDR mastering |

> 🚨 **Trap on the exam:** sRGB and Rec.709 have the **same color primaries** but different gamma curves. sRGB uses a piecewise gamma (roughly 2.2), while Rec.709 uses a different encoding curve. When video made in an sRGB color space is treated as Rec.709 by a broadcast chain, the result looks brighter or more washed-out than intended. **Always set your After Effects composition color management to match your delivery spec.**

### After Effects Color Management

In After Effects, color management is set via:
- Composition → Composition Settings → Color Settings
- Or via File → Project Settings → Color → Working Color Space

For web delivery: sRGB, 8-bit or 16-bit
For broadcast delivery: Rec.709, 8-bit
For cinema/HDR: DCI-P3 or Rec.2020, 16-bit or 32-bit

---

## ⚙️ Adobe Media Encoder: Batch Processing

Adobe Media Encoder (AME) is a standalone application that handles rendering and encoding. After Effects and Premiere both send jobs to AME for background rendering.

### The Render Queue vs. Media Encoder

| Method | Use When |
|--------|---------|
| AE Render Queue | Single comp export; AE-specific formats (ProRes, PNG sequence) |
| Adobe Media Encoder | Multiple exports; different formats/sizes from same comp; H.264 encoding |

> 🎯 **Exam tip:** H.264/MP4 is not available directly from the AE Render Queue — you must use Adobe Media Encoder for H.264 output. The Render Queue handles formats like QuickTime (ProRes), TIFF sequences, and PNG sequences.

### Setting Up a Batch Export

1. In After Effects: Composition → Add to Adobe Media Encoder Queue.
2. In AME: Each added composition appears as a queue item.
3. Click the format preset field to choose output format (H.264, WebM, etc.).
4. Click the output file path to set destination.
5. Add multiple compositions to the queue; click the green "Start Queue" button.
6. AME renders all queued items while AE remains available for more work.

---

## 📱 Platform-Specific Delivery Specs

| Platform | Format | Resolution | Frame Rate | Notes |
|----------|--------|-----------|-----------|-------|
| YouTube | H.264 MP4 | 1920×1080 or 4K | 24/25/30/60fps | Upload original frame rate; YT re-encodes |
| Instagram (feed) | H.264 MP4 | 1080×1080 (square) or 1080×1350 (portrait) | 30fps | Max 60 seconds for feed |
| TikTok | H.264 MP4 | 1080×1920 (9:16) | 30fps | Max 10 minutes; vertical only |
| Broadcast TV (US) | ProRes 422 | 1920×1080 | 29.97fps (NTSC) | Rec.709 color space |
| Broadcast TV (EU) | ProRes 422 | 1920×1080 | 25fps (PAL) | Rec.709 color space |
| Web (general) | WebM or H.264 | Variable | Match source | Use WebM for alpha transparency |
| App/Web animation | Lottie JSON | Vector (infinite) | N/A — JSON | Must be shape-layer based in AE |

---

## 📋 Summary

- Codec choice depends on delivery: H.264 for web/social; ProRes for broadcast/intermediate; GIF for legacy compatibility only; WebM for web transparency; Lottie for vector web/app animation.
- Lottie requires shape-layer-based AE compositions and the Bodymovin plugin; raster footage does not export.
- Frame rate conversion should be done at source; post-export conversion introduces quality loss.
- sRGB and Rec.709 share primaries but have different gamma; mismatches cause washed-out or over-bright output.
- H.264 must be exported through Adobe Media Encoder (not the AE Render Queue directly).
- Batch export via AME queue allows multiple formats and destinations from a single composition.

## ➡️ Next Steps

[Module 10: Production Pipeline →](../Module-10-Production-Pipeline/Reading.md)

Module 10 steps back from the individual tools to look at the full 2D studio pipeline — how productions move from pre-production through delivery, and which tools belong at which stage.

## 📚 Further Reading

- Adobe Media Encoder User Guide: [helpx.adobe.com/media-encoder/user-guide.html](https://helpx.adobe.com/media-encoder/user-guide.html)
- Lottie documentation: [lottiefiles.com/what-is-lottie](https://lottiefiles.com/what-is-lottie)
- YouTube Creator Academy: Technical specs for uploads
- School of Motion: "After Effects Export Settings" — free article covering all major delivery formats
