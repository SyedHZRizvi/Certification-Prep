---
permalink: /35-Motion-Graphics-UI-Animation/Module-08-Social-Media-Animation/Cheat-Sheet/
title: "Module 8 Cheat Sheet: Social Media Animation"
---

# ⚡ Module 8 Cheat Sheet — Social Media Animation

## Platform Specs Quick Reference

| Platform | Dimensions | Ratio | FPS | Max Duration | Sweet Spot |
|----------|-----------|-------|-----|-------------|-----------|
| Instagram Reels | 1080×1920 | 9:16 | 30 | 90s | 15–30s |
| Instagram Stories | 1080×1920 | 9:16 | 30 | 60s | 15s |
| Instagram Feed (video) | 1080×1350 | 4:5 | 30 | — | 15–30s |
| TikTok | 1080×1920 | 9:16 | 24/30 | 10min | 7–30s |
| YouTube Shorts | 1080×1920 | 9:16 | 60 rec. | 60s | 30–60s |
| LinkedIn | 1920×1080 | 16:9 | 30 | 10min | 30–90s |

---

## Export Settings

| Platform | Codec | Container | Bitrate | Audio |
|----------|-------|-----------|---------|-------|
| Instagram / TikTok | H.264 | .mp4 | 3500–8000 kbps | AAC 192kbps |
| YouTube Shorts | H.264 / H.265 | .mp4 | Up to 68Mbps | AAC 192kbps |
| LinkedIn | H.264 | .mp4 | 5000–10000 kbps | AAC 192kbps |

---

## Hook Window (First N Seconds)

| Platform | Hook Window |
|----------|-------------|
| YouTube Shorts | 1.5 seconds |
| Instagram Reels | 2 seconds |
| TikTok | 3 seconds |
| LinkedIn | 3–5 seconds |

---

## Loop Types

| Type | How | Use When |
|------|-----|---------|
| Seamless | Last frame = first frame | Any animation that should loop invisibly |
| Ping-Pong | Forward then backward | Easy: any animation can be ping-ponged |
| Stagger Loop | Elements at different phases | Always something in motion; ambient loops |

---

## Caption Guidelines

| Spec | Value |
|------|-------|
| Minimum text size | 36pt at 1080p |
| Contrast | White text + black outline/background |
| Safe zone | Lower 20–30% of 9:16 frame |
| Max words per line | 3 (for fast reading) |
| Style | Highlight the key word (color, size, bold) |

---

## Mobile-First Workflow

1. Build master in 1080×1920 (9:16)
2. Duplicate → reframe to 1080×1080 (1:1)
3. Duplicate → reframe to 1920×1080 (16:9)
4. NEVER start in landscape and adapt to mobile

---

## Color Shift Prevention

1. Design in sRGB (not Adobe RGB)
2. Avoid over-saturated colors
3. Upload → download re-encoded version → compare
4. Adjust if needed before final publish

---

## Thumbnail A/B Test (YouTube)

- Use YouTube Studio native A/B testing
- Metric: Impression CTR
- What works: Faces > Text > Abstract
- High contrast colors beat neutral
- Question format titles increase curiosity clicks

---

## AE Composition Settings for 9:16

```
Width: 1080 px
Height: 1920 px
Pixel Aspect Ratio: Square Pixels
Frame Rate: 30 (or 24 for cinematic)
Duration: Platform max + 10%
```
