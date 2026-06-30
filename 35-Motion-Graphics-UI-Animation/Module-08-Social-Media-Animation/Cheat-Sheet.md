---
permalink: /35-Motion-Graphics-UI-Animation/Module-08-Social-Media-Animation/Cheat-Sheet/
title: "Module 8 Cheat Sheet: Social Media Animation"
---

# ⚡ Module 8 Cheat Sheet, Social Media Animation

## Platform Specs Quick Reference

| Platform | Dimensions | Ratio | FPS | Max Duration | Sweet Spot |
|----------|-----------|-------|-----|-------------|-----------|
| Instagram Reels | 1080×1920 | 9:16 | 30 | 90s | 15–30s |
| Instagram Stories | 1080×1920 | 9:16 | 30 | 60s | 15s |
| Instagram Feed (video) | 1080×1350 | 4:5 | 30 |, | 15–30s |
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


---

## 📌 Quick Reference Summary

| Concept | Key Rule / Value | Why It Matters |
|---|---|---|
| Core tool | See module Reading.md | Foundation of the workflow |
| Common mistake | Check "⚠️ Gotcha" sections | Saves hours of debugging |
| Delivery standard | See platform spec table | Client/employer expectation |
| Career application | Salary range in README | Know your market value |

## ✅ Self-Assessment

Before marking this module complete:
- [ ] Core technique mastered (can do without reference)
- [ ] Understand *why* the technique works, not just how
- [ ] Familiar with at least two real productions that use it
- [ ] Know the common failure mode and how to diagnose it

---

## 🏆 Exam Performance Standards

### Beginner Benchmark
Can identify the technique and explain it in 1 sentence.

### Intermediate Benchmark
Can demonstrate the technique correctly in a controlled exercise.

### Advanced Benchmark
Can apply the technique under production constraints (time pressure, client feedback, iteration cycles) and teach it to a junior.

### Professional Standard
Can make real-time decisions about when NOT to use the technique, knowing when a simpler or faster approach delivers equivalent results.

---

## 🗂️ File Organization Reference

| Asset type | Recommended naming | Storage location |
|---|---|---|
| Project files | `YYYYMMDD_ProjectName_v001` | `/Projects/` |
| Final deliverables | `ProjectName_FINAL_v001` | `/Deliverables/` |
| Reference footage | `ref_topic_source` | `/Reference/` |
| Client feedback | `feedback_date_initials` | `/Admin/` |

---

## ⚡ 60-Second Review

If you can answer these in under 60 seconds, you're ready for the module quiz:

1. What is the primary technique covered in this module called?
2. Which real production demonstrates it most clearly?
3. What's the most common mistake beginners make?
4. What file format or setting is critical to get right?
5. How does this technique change when working at a professional studio vs. solo?
