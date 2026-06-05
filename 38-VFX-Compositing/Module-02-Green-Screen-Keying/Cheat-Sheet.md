---
title: "Module 2 Cheat Sheet: Green Screen Keying"
---

# 🗒️ Module 2 Cheat Sheet: Green Screen Keying

## Green vs Blue Screen

| Factor | Green | Blue |
|--------|-------|------|
| Digital sensor | More green photosites (2×) → cleaner key | Fewer photosites |
| Best use | Daylight, most wardrobe | Nighttime, blue-wardrobed scenes |
| Spill visibility | More visible on skin | Less visible in dark scenes |
| Wardrobe conflict | Green clothing | Blue clothing |
| Skin tone | Good for most | Better for fair skin |

**Reason for green default: Bayer sensor has 2× green photosites vs red or blue.**

---

## Three-Step Key Workflow

| Step | Goal | Key Parameters |
|------|------|----------------|
| Rough | Approximate matte | Screen Colour, Screen Gain |
| Refined | Clean interior & exterior | Screen Balance, Clip Black/White (sparingly), Shrink/Grow |
| Fine | Edge refinement | Edge Colour Correction, Advanced Spill Suppressor, Roto cleanup |

---

## Keylight Parameter Quick Reference

| Parameter | Does | When to Adjust |
|-----------|------|----------------|
| Screen Colour | The sampled keying color | First — always |
| Screen Gain | Aggressiveness of key | Background not going black |
| Screen Balance | Ratio of non-key channels | Uneven gray in background |
| Screen Pre-Blur | Pre-blurs matte calculation | Noisy footage |
| Screen Shrink/Grow | Erode/expand matte boundary | Spill or edge loss |
| Clip Black | Force background → pure black | Use sparingly |
| Clip White | Force foreground → pure white | Use sparingly |
| Screen Softness | Allows semi-transparent transitions | Motion blur subjects |

**CRITICAL: Clip Black/White destroy semi-transparent edge pixels. Use only sparingly on clear-cut areas.**

---

## Keyer Comparison Matrix

| Feature | Keylight 1.2 | Primatte Keyer | Rotobrush 2.0 |
|---------|-------------|----------------|---------------|
| Algorithm | Color difference | 3D color space sampling | Neural network (ML) |
| Best for | Even green/blue screens | Uneven/dirty screens | Non-green backgrounds |
| Hair | Good | Excellent | Excellent |
| Spill | Built-in (Edge CC) | Built-in sliders | N/A |
| Speed | Fast | Moderate | Slower |
| Avoid when | Screen very uneven | Screen very even | Fast motion + complex bg |

---

## Spill Suppression Tools — Ranked

| Priority | Tool | Best For |
|----------|------|---------|
| 1st | Keylight → Edge Colour Correction | Semi-transparent edge pixels |
| 2nd | Advanced Spill Suppressor | Overall spill; color-aware |
| 3rd | Hue/Saturation on edge region | Manual full control |
| 4th | Basic Spill Suppressor | Quick mild fix |

---

## Difficult Subject Strategies

| Subject | Strategy |
|---------|---------|
| Hair | Two Keylight instances (body + hair); combine mattes with Minimum |
| Glass/transparent | Preserve matte semi-transparency; let background show through |
| Motion blur | Never use Clip Black/White; use Screen Softness |
| No greenscreen | Difference matte (requires identical clean plate) |
| Uneven screen | Primatte Keyer or multiple Keylight instances per zone |

---

## Light Wrap Technique (Essential)

| Step | Action |
|------|--------|
| 1 | Pre-compose the background plate |
| 2 | Duplicate pre-comp → Apply large Gaussian Blur |
| 3 | Set blurred copy to Screen or Add blend mode |
| 4 | Mask/Track Matte to apply only at subject edges |
| 5 | Adjust opacity ~30–60% to taste |

**Light wrap = the single most important technique for photographic compositing.**

---

## Screen Matte Reading

| Matte Value | Meaning | Action |
|-------------|---------|--------|
| White (1.0) | Foreground — fully opaque | Correct |
| Black (0.0) | Background — fully transparent | Correct |
| Gray (0.1–0.9) | Semi-transparent transition zone | PROTECT — do not clip |

**Gray pixels at edges are the photographic quality of the key. Clip them → hard, jagged edges.**

---

## Difference Matte Requirements

| Requirement | Consequence if Violated |
|-------------|------------------------|
| Clean plate from identical camera position | Different position = unusable matte |
| Identical lighting state | Lighting change = false difference values |
| Background completely static | Any background movement = matte artifacts |
| Camera completely locked off | Camera wobble = entire frame as difference |

---

## EEAAO Low-Budget Keying Strategies

| Problem | Solution |
|---------|---------|
| Uneven screen lighting | Multiple Keylight instances per zone + combine |
| Hotspot/shadow zones | Luminance matte to isolate zones before keying |
| Curved screen edges | Garbage mattes to eliminate non-keyed edges |

---

## Exam Quick-Hits

- **Over operation formula:** `A + B × (1 − alpha_A)` — memorize this
- **Binary matte:** Only 0 or 1 alpha values — produces hard jagged edges
- **Two Keylight minimum for hair:** Body key + hair key, combined with Minimum
- **Advanced Spill Suppressor advantage:** Analyzes background to inform desaturation; not a simple green-channel reduction


---

## ✅ Module Sign-Off Checklist

- [ ] Can explain core concept without notes
- [ ] Can name 3 industry examples
- [ ] Know the 2 most common mistakes
- [ ] Understand when to use each technique

**Key formula / ratio / number to memorize:**
See the exam callouts (🎯) in the Reading.md for this module.
*—*
