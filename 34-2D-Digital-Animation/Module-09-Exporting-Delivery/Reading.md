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

| Codec | Container | Use Case | Alpha? | Notes |
|-------|-----------|---------|--------|-------|
| **H.264** | MP4 | Web delivery, YouTube, Vimeo | No | Universal compatibility; lossy; excellent compression |
| **H.265 (HEVC)** | MP4 | Streaming; 4K delivery | No | Better compression than H.264 at same quality; less universal support |
| **ProRes 4444** | MOV | Compositing intermediate, VFX, with alpha | Yes | Apple codec; lossless alpha; high quality; large files |
| **ProRes 422** | MOV | Broadcast deliverable, editing intermediate | No | Excellent quality; broadcast standard |
| **GIF** | GIF | Web animation, social media (legacy) | Basic (binary) | 256 colors; dithered; no audio; loops by default |
| **WebM (VP9)** | WEBM | Web animation with transparency | Yes | Alpha support; smaller than GIF for same quality |
| **PNG Sequence** | PNG | Frame-accurate deliverable with transparency | Yes | Uncompressed frames; large storage; ideal for compositing |
| **Lottie JSON** | JSON | Web/app vector animation | N/A | After Effects comp exported via Bodymovin plugin; scalable, small |

> 🎯 **What the exam tests:** ProRes 4444 is the go-to format when you need transparency (alpha channel) and high quality in a video format. It's not H.264/MP4 compatible but is standard in professional Mac-based post-production.

### Codec Comparison: Quality vs. File Size

| Codec | Relative Quality | Relative File Size | Compatibility |
|-------|-----------------|-------------------|--------------|
| PNG Sequence | Highest (lossless) | Largest | Any app that reads PNG |
| ProRes 4444 | Excellent | Very large | Mac-native; Adobe apps |
| ProRes 422 | Excellent | Large | Mac-native; Adobe apps |
| WebM (VP9) | Good | Small | Web browsers; limited desktop |
| H.264 | Good | Small | Universal |
| H.265 (HEVC) | Better than H.264 | Smaller | Newer devices/browsers |
| GIF | Poor (256 colors) | Medium-Large | Email, legacy CMS |

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

### Lottie Supported vs. Unsupported AE Features

| Supported | Not Supported |
|-----------|--------------|
| Shape layers | Raster footage / video |
| Masks and track mattes | 3D layers |
| Basic effects (fill, stroke) | Complex effects (glows, particle systems) |
| Parenting and basic expressions | Certain blend modes |
| Text layers | Custom fonts (must outline) |

> 🚨 **Exam Trap:** Lottie only supports specific After Effects features (Shape Layers, masks, basic effects). Complex effects, 3D layers, and certain blend modes do not export to Lottie correctly. Always test Lottie exports before committing to this format for a project.

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

> 🚨 **Exam Trap:** sRGB and Rec.709 have the **same color primaries** but different gamma curves. sRGB uses a piecewise gamma (roughly 2.2), while Rec.709 uses a different encoding curve. When video made in an sRGB color space is treated as Rec.709 by a broadcast chain, the result looks brighter or more washed-out than intended. **Always set your After Effects composition color management to match your delivery spec.**

### After Effects Color Management

In After Effects, color management is set via:
- Composition → Composition Settings → Color Settings
- Or via File → Project Settings → Color → Working Color Space

| Delivery Target | Working Color Space | Bit Depth |
|----------------|---------------------|----------|
| Web / consumer | sRGB | 8-bit or 16-bit |
| Broadcast (US/EU) | Rec.709 | 8-bit |
| Cinema / premium | DCI-P3 | 16-bit |
| HDR streaming | Rec.2020 | 16-bit or 32-bit |

---

## ⚙️ Adobe Media Encoder: Batch Processing

Adobe Media Encoder (AME) is a standalone application that handles rendering and encoding. After Effects and Premiere both send jobs to AME for background rendering.

### The Render Queue vs. Media Encoder

| Method | Use When |
|--------|---------|
| AE Render Queue | Single comp export; AE-specific formats (ProRes, PNG sequence) |
| Adobe Media Encoder | Multiple exports; different formats/sizes from same comp; H.264 encoding |

> 🎯 **What the exam tests:** H.264/MP4 is not available directly from the AE Render Queue — you must use Adobe Media Encoder for H.264 output. The Render Queue handles formats like QuickTime (ProRes), TIFF sequences, and PNG sequences.

### Setting Up a Batch Export

1. In After Effects: Composition → Add to Adobe Media Encoder Queue.
2. In AME: Each added composition appears as a queue item.
3. Click the format preset field to choose output format (H.264, WebM, etc.).
4. Click the output file path to set destination.
5. Add multiple compositions to the queue; click the green "Start Queue" button.
6. AME renders all queued items while AE remains available for more work.

### Useful AME Export Presets for 2D Animation

| Preset | Format | Best For |
|--------|--------|---------|
| H.264 — Match Source | H.264 MP4 | YouTube, general web |
| YouTube 1080p HD | H.264 MP4 | YouTube upload |
| YouTube 2160p 4K | H.264 MP4 | 4K YouTube |
| Apple ProRes 422 | MOV | Broadcast delivery |
| Apple ProRes 4444 | MOV | Compositing with alpha |
| Animated GIF | GIF | Legacy/email |
| WebM | WEBM | Web with transparency |

---

## 📱 Platform-Specific Delivery Specs

| Platform | Format | Resolution | Frame Rate | Notes |
|----------|--------|-----------|-----------|-------|
| YouTube | H.264 MP4 | 1920×1080 or 4K | 24/25/30/60fps | Upload original frame rate; YT re-encodes |
| Instagram (feed) | H.264 MP4 | 1080×1080 (square) or 1080×1350 (portrait) | 30fps | Max 60 seconds for feed |
| TikTok | H.264 MP4 | 1080×1920 (9:16) | 30fps | Max 10 minutes; vertical only |
| Broadcast TV (US) | ProRes 422 | 1920×1080 | 29.97fps (NTSC) | Rec.709 color space; timecode required |
| Broadcast TV (EU) | ProRes 422 | 1920×1080 | 25fps (PAL) | Rec.709 color space |
| Web (general) | WebM or H.264 | Variable | Match source | Use WebM for alpha transparency |
| App/Web animation | Lottie JSON | Vector (infinite) | N/A — JSON | Must be shape-layer based in AE |
| Cinema DCP | JPEG 2000 in MXF | 2K/4K DCI | 24fps | Requires specialized DCP creation tools |

---

## 🔊 Audio Delivery Specifications

Visual delivery is only half the equation. Audio delivery standards are equally critical for broadcast:

| Delivery Target | Format | Sample Rate | Bit Depth | Loudness Target | Notes |
|----------------|--------|------------|----------|----------------|-------|
| YouTube | AAC or MP3 | 48kHz | 16-bit | −14 LUFS | YouTube normalizes to −14 LUFS |
| US Broadcast | Dolby Digital 5.1 or PCM stereo | 48kHz | 24-bit | −24 LKFS | ATSC A/85 standard |
| EU Broadcast | EBU R128 | 48kHz | 24-bit | −23 LUFS | EBU standard |
| Streaming (Netflix) | 5.1 + Atmos | 48kHz | 24-bit | −27 LKFS | Netflix-specific spec |
| TikTok / Instagram | AAC stereo | 44.1kHz | 16-bit | −14 LUFS | Platform normalizes |

LUFS (Loudness Units Full Scale) is the standard measure of perceived loudness. Audio that is louder than the platform target is automatically turned down; audio that is quieter is left as-is (not boosted). **Delivering at the correct loudness target prevents volume inconsistency with other videos on the platform.**

---

## 🎬 Production Case Study: Netflix & YouTube Delivery

**Netflix Originals (e.g., Arcane):** Netflix delivery requirements for animated content include:
- Master deliverable: ProRes 4444 or DNxHR at 4K (where animated at that resolution)
- Color space: P3-D65 or Rec.2020 for HDR titles
- Audio: 5.1 surround mix plus stereo downmix, 48kHz
- Frame rate: native production frame rate (typically 23.976fps)
- Closed captions and multiple audio language tracks

This level of specification is handled by the post-production supervisor, not the animator — but understanding why these choices exist makes you a better communicator with the delivery pipeline.

**YouTube animation (e.g., independent creators):** The contrast with Netflix is instructive:
- Export H.264 at the highest reasonable bitrate (20–50 Mbps for 1080p)
- Match source frame rate (24fps for cinematic feel, 30fps for standard)
- sRGB color space (consumer monitors)
- Stereo audio, 48kHz, -14 LUFS target loudness
- Upload original; YouTube re-encodes to multiple bitrates automatically

The same content, the same animation quality — entirely different delivery requirements depending on the destination.

---

## 💼 Industry Context: Who Handles Delivery

| Role | Delivery Responsibility |
|------|------------------------|
| Animator | Render from animation software; hand off to compositor |
| Compositor | Final render from AE/Nuke; hand off to post supervisor |
| Post Production Supervisor | Format compliance; platform specs; encoding |
| Delivery Coordinator | Uploads, checksums, platform submission |
| Indie creator | Does everything above solo |

Understanding the full pipeline means you can speak intelligently with every role in it.

---

## 🎯 What the Exam Tests: Module 9 Checklist

1. Which codec supports alpha channel transparency in a video file (ProRes 4444, WebM)?
2. Why can't H.264 be exported directly from the AE Render Queue?
3. What is Lottie JSON and what type of AE layers does it require?
4. What is the difference between sRGB and Rec.709 (same primaries, different gamma)?
5. What frame rate is NTSC broadcast (29.97fps)?
6. What frame rate is PAL broadcast (25fps)?
7. What are the limitations of GIF format?
8. What problem does 24fps → 30fps conversion introduce?
9. What format should you use for web animation that requires transparency (WebM VP9)?
10. What is the AE Render Queue capable of exporting (ProRes, PNG sequences — NOT H.264)?

---

## 🚨 Exam Trap Section

- **H.264 requires Adobe Media Encoder, not the AE Render Queue.** This is the single most tested delivery fact. The AE Render Queue does not offer H.264 as an output format.
- **ProRes 4444 ≠ ProRes 422.** ProRes 4444 has alpha channel support. ProRes 422 does not. For compositing with transparency, you need 4444.
- **sRGB and Rec.709 share primaries but differ in gamma.** A file that looks correct in one color space will look washed out or oversaturated in the other. This causes the "washed-out" client complaint.
- **Lottie does not support raster footage.** Students often assume Lottie can represent any AE animation. Only Shape Layer-based animations export correctly.
- **GIF has only 256 colors.** Any gradient or subtle color in an animation will show visible banding in GIF format.

---

## 🤔 Socratic Discussion Questions

- A client asks you to deliver an animated logo for use in a mobile app. The logo must scale to any device without pixelation and load very fast. What format do you choose and why?
- Your animation was created in After Effects with a Rec.709 working color space, but you need to deliver to YouTube (which expects sRGB). What are your options and what risks exist in each approach?
- GIF is technically inferior to WebM and H.264 for almost every use case, yet it remains widely used in social media and messaging apps. Why do you think this is? What would it take to fully replace GIF?
- A broadcaster asks for ProRes 422 at 29.97fps with Rec.709 color space, but your master animation was created at 24fps in sRGB. Walk through every step you'd take to convert and deliver the correct file.

---

## 📊 Output Resolution Guide

Resolution choice affects file size and quality. These are the standard output resolutions for 2D animation delivery:

| Resolution | Pixels | Use Case | Notes |
|-----------|--------|---------|-------|
| 720p (HD) | 1280×720 | Older web; low-budget YouTube | Acceptable for content-focused channels |
| 1080p (Full HD) | 1920×1080 | Standard YouTube; most TV broadcast | Industry default for most productions |
| 1440p (2K) | 2560×1440 | High-end YouTube; some streaming | Increasing standard for quality channels |
| 4K (UHD) | 3840×2160 | Premium streaming; Netflix | Standard for new Netflix/Disney+ originals |
| 4K (DCI) | 4096×2160 | Cinema delivery | Digital cinema standard |
| 1:1 Square | 1080×1080 | Instagram feed | Native square format |
| 9:16 Vertical | 1080×1920 | TikTok, Instagram Reels | Mobile-first; vertical only |

---

## 🎞️ Animate Export Workflow Reference

Exporting from Animate requires knowing which method to use for which destination:

| Destination | Animate Export Method | Notes |
|------------|----------------------|-------|
| After Effects (for compositing) | File → Export → Export Movie → PNG Sequence | Preserves alpha; imports as image sequence |
| YouTube (direct) | File → Export → Export Video/Media → H.264 | Or use Media Encoder via queue |
| Web animation (HTML) | File → Publish → HTML5 Canvas | Generates .html + .js + assets |
| Broadcast (ProRes) | File → Export → Export Video/Media → ProRes 4444 (via AME) | Requires AME for ProRes output |
| Lottie (app animation) | Export from After Effects via Bodymovin | Must be rebuilt as Shape Layers in AE first |
| GIF | File → Export → Export Animated GIF | Limit: 256 colors; use only for legacy targets |

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

## 🔧 Troubleshooting Export Problems

Common export issues and their solutions:

| Problem | Symptom | Likely Cause | Fix |
|---------|---------|-------------|-----|
| Washed-out colors | Video looks less saturated than in AE | Color space mismatch (sRGB/Rec.709) | Match AE working color space to output target |
| Blurry output | Video softer than expected | Wrong output resolution | Check AME output resolution matches source comp |
| Audio out of sync | Audio drifts over time | Wrong export frame rate | Verify composition fps matches export fps |
| Transparent background rendering black | Alpha not exporting | Wrong codec (H.264 has no alpha) | Switch to ProRes 4444, WebM, or PNG Sequence |
| Lottie not displaying correctly | Shapes missing or wrong in browser | Unsupported AE features | Remove/replace 3D layers, complex effects; retest |
| GIF color banding | Obvious color posterization | GIF 256-color limit | Convert to WebM or H.264; use only if GIF is required |
| Large file size for web | File too big to load quickly | Bitrate too high | Reduce AME output bitrate; target 5–15 Mbps for 1080p web |

These are the issues that appear in real-world deliveries. Identifying them quickly — before a client sees them — is a professional skill that saves projects.

---

## 📚 Further Reading

- Adobe Media Encoder User Guide: [helpx.adobe.com/media-encoder/user-guide.html](https://helpx.adobe.com/media-encoder/user-guide.html)
- Lottie documentation: [lottiefiles.com/what-is-lottie](https://lottiefiles.com/what-is-lottie)
- School of Motion: "After Effects Export Settings" — free article covering all major delivery formats

---

## 📋 Exam Readiness Checklist

Before moving on, verify you can answer each of these without notes:

- [ ] Define the core concept of this module in one sentence
- [ ] Name three real-world productions that demonstrate it
- [ ] Identify the two most common mistakes students make
- [ ] Describe when you would use each major tool/technique covered
- [ ] Explain the trade-offs between the primary approaches discussed
- [ ] State the exam-relevant numbers, ratios, or standards from memory

## 🎯 Five High-Frequency Exam Questions

These patterns appear repeatedly in industry certification and portfolio assessments:

1. **"Why not X?"** — Every technique has a cheaper/faster alternative; know when NOT to use the primary approach.
2. **"What's the production order?"** — Many mistakes happen when steps are applied out of sequence; understand the dependency chain.
3. **"Name a production that did this differently."** — Spider-Verse, Cuphead, Arcane each broke conventions intentionally; knowing *why* shows mastery.
4. **"What file format and settings?"** — Every deliverable context has specific requirements; memorize the key numbers (frame rate, bit depth, codec).
5. **"What's the fastest way to fix [common problem]?"** — Troubleshooting speed is a professional skill; know the diagnostic hierarchy.

## 📚 Canonical Further Reading

**Essential:**
- *The Animator's Survival Kit* — Richard Williams (2001, revised 2012). The most-assigned animation reference in university curricula worldwide. Every principle in this module has a Williams illustration.
- *The Illusion of Life: Disney Animation* — Frank Thomas & Ollie Johnston (1981). The primary source for the 12 Principles. Expensive but irreplaceable.

**Industry-Standard:**
- *Computer Animation: Algorithms and Techniques* — Rick Parent (3rd ed., 2012). The mathematical foundation behind every digital animation system.
- *3D Art Essentials* — Ami Chopine (2011). Bridge between artistic intent and technical execution.

**Online:**
- Animation Career Review salary surveys — updated annually, the most-cited compensation benchmark for animation professionals
- School of Motion blog — free, research-backed articles on the business of motion design and animation

---

*Next module →*

*[Module complete — see README for next steps and related tracks.]*
