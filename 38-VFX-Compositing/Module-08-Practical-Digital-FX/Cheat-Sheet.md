---
title: "Module 8 Cheat Sheet: Practical Digital FX"
---

# 🗒️ Module 8 Cheat Sheet: Practical Digital FX

## The Gareth Edwards Principle

> Always shoot something real, even if small, and build the digital around the physical.

**More real-world elements → More photographic final composite.**

---

## Invisible VFX Categories

| Category | Example | Tool |
|----------|---------|------|
| Set extension | Expand a city exterior | DMP + Nuke / 3D render |
| Sky replacement | Wrong/overcast sky | Roto/key + replacement plate |
| Wire removal | Stunt rigging | Clean plate + RotoPaint / Silhouette |
| Beauty/cleanup | Blemish removal, de-aging | Nuke RotoPaint |
| Digital crowd extension | Add extras to crowd | CG crowd sim + comp |
| Atmospheric enhancement | Add depth haze | Fog element / blur at distance |
| Invisible stitch | *1917*-style single take | Track + Nuke dissolve |
| De-aging | Younger appearance | ML pipeline + 2D roto integration |

---

## Set Extension Integration Checklist

| Step | Action |
|------|--------|
| 1 | Match key light direction to plate shadows |
| 2 | Add atmospheric depth: haze, reduced contrast at distance |
| 3 | Reduce saturation and sharpness for distant elements |
| 4 | Add motion: wind-driven trees, bird sprites, subtle parallax |
| 5 | Feather mask edge + color match at boundary |
| 6 | Apply sky light wrap at extension/plate boundary |

**The #1 invisible VFX error: a too-sharp background extension. Distance = blur + haze + reduced contrast.**

---

## Set Extension "Tells" and Fixes

| Problem | Cause | Fix |
|---------|-------|-----|
| Extension too sharp | No atmospheric falloff | Gaussian blur + haze at distance |
| Lighting mismatch | Wrong key light direction | Match sun/key direction from plate shadows |
| Extension has no motion | CG/DMP perfectly still | Add wind trees, bird sprites, parallax |
| Visible edge at boundary | Hard mask + color mismatch | Feather mask + color match + atmospheric integration |

---

## 1917 Invisible Stitch: 5-Point Match Checklist

| Element | What to Match |
|---------|--------------|
| Camera geometry | 3D solve both plates; sub-pixel alignment |
| Color | Primary grade: exposure, color temp, contrast |
| Grain | Single unified grain layer over the joined composite |
| Atmospheric depth | Haze and depth-fog matched at the stitch frame |
| Motion blur | Stitch hidden at peak motion-blur frames |

---

## Wire Removal Methods

| Method | When | Speed |
|--------|------|-------|
| Clean plate + RotoPaint/clone | Clean plate available | Fast |
| Content-Aware Fill (AE 2019+) | No clean plate, simple background | Medium |
| Silhouette Patch/Clone | No clean plate, complex background | Medium |
| Manual paint per frame | No clean plate, most complex | Slow |

**Best prevention: always shoot clean plates on set for every rig/wire shot.**

---

## De-Aging Pipeline (FLUX System — ILM)

| Step | Action |
|------|--------|
| 1 | Reference scan of actor at younger age (photogrammetry) |
| 2 | On-set clean plate capture — no motion capture equipment |
| 3 | FLUX tracks performance from clean plate (no markers) |
| 4 | CG de-aged face rendered in Arnold with full skin shaders |
| 5 | Per-frame roto of face region with soft feather at skin boundary |
| 6 | CG face blended with real plate using roto-masked region |
| 7 | Grooming system adds age-appropriate hair density |

**Key principle: actor's real performance is retained. Only appearance is modified.**

---

## Sky Replacement Workflow

| Step | Action |
|------|--------|
| 1 | Key or roto the sky area |
| 2 | Place replacement sky below foreground |
| 3 | Color match sky to ambient light of the scene |
| 4 | Apply warm/cool correction to foreground to match new sky |
| 5 | Apply light wrap at sky/foreground boundary |
| 6 | Match grain and noise between sky and plate |

---

## Invisible VFX: Notable Productions

| Film | Effect | Studio |
|------|--------|-------|
| *Gravity* (2013) | All weightlessness, helmet reflections, Earth atmosphere | Framestore |
| *1917* (2019) | Seamless single-take stitches | DNEG |
| *The Revenant* (2015) | Digital breath steam; background extensions | Rising Sun |
| *Mad Max: Fury Road* (2015) | Cloud replacement; digital crowd | Iloura / Method |
| *The Batman* (2022) | Gotham extension over Glasgow; atmospheric depth | DNEG/Framestore |
| *The Irishman* (2019) | Full de-aging: De Niro, Pacino, Pesci | ILM/Technicolor |
| *Oppenheimer* (2023) | Trinity environment extensions | DNEG |

---

## Beauty/Cleanup Work Reference

| Task | Technique |
|------|----------|
| Blemish/pore reduction | Clone/paint in Nuke RotoPaint |
| Under-eye shadows | Masked Grade brightening |
| Hair stray cleanup | Paint + clone per frame |
| Tattoo removal | Paint/clone from adjacent skin |
| Breath steam | Trapcode Particular (cold atmosphere FX) |
| Wire removal | Clean plate + RotoPaint or Silhouette |

---

## Exam Quick-Hits

- **Atmospheric sharpness rule:** Sharpness, saturation, and contrast all decrease with distance. A sharp background extension fails.
- **FLUX de-aging:** No motion capture — tracked from clean plate. Performance retained, appearance modified.
- **1917 stitch:** Not one shot — dozens of shots joined invisibly. 5-point match required for each stitch.
- **Clean plate priority:** The single most impactful on-set decision for wire removal speed.


---

## ✅ Module Sign-Off Checklist

- [ ] Can explain core concept without notes
- [ ] Can name 3 industry examples
- [ ] Know the 2 most common mistakes
- [ ] Understand when to use each technique

**Key formula / ratio / number to memorize:**
See the exam callouts (🎯) in the Reading.md for this module.
