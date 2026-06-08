# Module 8 Cheat Sheet: Digital Workflow & Tools 📋

---

## File Naming Convention

```
[PROJECT]_[EP###]_[SH###]_[ELEMENT]_v[###].[ext]

Example:
ANI_EP004_SH012_CharA_body_v003.anim
```

**Rules:**
- Zero-pad numbers: 001, not 1 (sorts correctly beyond 9)
- NEVER name a file "final", use v001, v002, etc.
- Date (optional): YYYYMMDD format only

---

## Codec Quick Reference

| Codec | Use For | NOT For |
|-------|---------|---------|
| H.264 | Web delivery, client review | Production masters |
| H.265/HEVC | High-res web delivery | Universal compatibility |
| ProRes 422 | Editing, broadcast delivery | Transparency |
| ProRes 4444 | VFX masters, alpha channel | Storage efficiency |
| DNxHD/DNxHR | Avid workflows | Non-Avid environments |
| PNG Sequence | Render output (lossless) | Direct delivery |

**Pro workflow:**
1. Render → PNG sequence or ProRes 4444 (lossless)
2. Edit/composite → ProRes 422
3. Deliver → H.264 or H.265

---

## Frame Rates

| Rate | Standard |
|------|---------|
| 24 fps | Film, theatrical animation |
| 25 fps | PAL broadcast (Europe) |
| 30 fps | NTSC broadcast (North America) |
| 60 fps | Gaming |

**Lock frame rate before Frame 1. Changing mid-production = pain.**

---

## Project Settings to Lock Pre-Production

- [ ] Frame rate
- [ ] Resolution (HD = 1920×1080, 4K = 3840×2160)
- [ ] Aspect ratio (16:9, 4:3, 2.39:1, 1:1)
- [ ] Color space (sRGB=web, Rec.709=broadcast, DCI P3=cinema)
- [ ] Render engine

---

## Software Ecosystem Map

| Category | Industry Standard | Free Alternative |
|----------|-----------------|-----------------|
| 3D Animation | Autodesk Maya | Blender |
| 2D Animation | Toon Boom Harmony | Adobe Animate |
| Compositing | After Effects | DaVinci Resolve |
| Storyboarding | Storyboard Pro | Storyboarder |
| Production Tracking | Shotgrid |, |
| Client Review | Frame.io |, |

---

## 3-2-1 Backup Rule

```
3 copies of every file
2 different media types (SSD + cloud; NOT two drives)
1 copy off-site (cloud counts as off-site)

CRITICAL: Test your backups. An untested backup is not a backup.
```

---

## Exam Traps

| Common Error | Correct Fact |
|-------------|-------------|
| H.264 is fine for masters | H.264 loses quality on re-encode; use ProRes or PNG for masters |
| "final" filename is OK | Never use "final"; always use v001, v002 |
| 24fps and 30fps are interchangeable | They are different; conversion creates artifacts |
| PNG sequences are wasteful | PNG sequences are lossless; the correct format for render output |
| ProRes = Apple only | ProRes is widely supported across Mac, Windows, and Linux |
| DNxHD = standard everywhere | DNxHD is Avid-native; less common outside Avid pipelines |


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
