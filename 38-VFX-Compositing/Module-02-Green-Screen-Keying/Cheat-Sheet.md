---
title: "Module 2 Cheat Sheet: Green Screen Keying"
---

# 🗒️ Module 2 Cheat Sheet: Green Screen Keying

## Green vs Blue Screen

| Factor | Green | Blue |
|--------|-------|------|
| Digital sensor | More photosites → cleaner key | Fewer photosites |
| Best use | Daylight, most wardrobe | Nighttime, blue-warded scenes |
| Spill visibility | More visible on skin | Less visible in dark scenes |
| Wardrobe conflict | Green clothing | Blue clothing |

---

## Three-Step Key Workflow

| Step | Goal | Key Parameters |
|------|------|----------------|
| Rough | Approximate matte | Screen Colour, Screen Gain |
| Refined | Clean interior & exterior | Screen Balance, Clip Black/White (sparingly), Shrink/Grow |
| Fine | Edge refinement | Edge Colour Correction, Advanced Spill Suppressor, Roto cleanup |

---

## Keylight Parameter Quick Reference

| Parameter | Does |
|-----------|------|
| Screen Colour | The sampled keying color |
| Screen Gain | Aggressiveness of key |
| Screen Balance | Ratio of non-key channels |
| Screen Pre-Blur | Pre-blurs calculation (noisy footage) |
| Screen Shrink/Grow | Erode/expand matte boundary |
| Clip Black | Force background to black (use sparingly) |
| Clip White | Force foreground to white (use sparingly) |
| Screen Softness | Allows semi-transparent transitions |

---

## Spill Suppression Tools

1. **Keylight → Edge Colour Correction** — best for edge pixels
2. **Advanced Spill Suppressor** — best overall; color-aware
3. **Hue/Saturation** — manual channel control
4. **Spill Suppressor** — quick, less accurate

---

## Light Wrap (Essential Technique)

1. Pre-compose background
2. Duplicate pre-comp → Gaussian Blur (large radius)
3. Set blurred copy to **Screen** or **Add** blend mode
4. Mask to edges of subject only
5. Adjust opacity to taste (~30–60%)

---

## Difficult Subject Strategies

| Subject | Strategy |
|---------|---------|
| Hair | Two Keylight instances (body + hair), combine mattes with Minimum |
| Glass/transparent | Preserve matte semi-transparency; let background show through |
| Motion blur | Never use Clip Black/White; use Screen Softness |
| No greenscreen | Difference matte (requires identical clean plate) |

---

## Screen Matte Reading

- **White** = foreground (opaque, alpha = 1)
- **Black** = background (transparent, alpha = 0)
- **Gray** = transition / semi-transparent (protect this!)
