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
- NEVER name a file "final" — use v001, v002, etc.
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
| Production Tracking | Shotgrid | — |
| Client Review | Frame.io | — |

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
