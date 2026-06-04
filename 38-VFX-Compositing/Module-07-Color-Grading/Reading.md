---
title: "Module 7: Color Grading"
---

# 🎨 Module 7: Color Grading

## The Color of History

*Oppenheimer* (2023, Universal Pictures / directed by Christopher Nolan) was shot on IMAX film — 70mm, hand-loaded, processed at Fotokem in Burbank. The color of the film is not a digital construct. It is physics: the specific spectral response of Kodak Vision3 500T film stock, the chemical development process, the photochemical printing. But the final color the audience sees was designed — meticulously, over weeks of DI sessions at FotoKem — by colorist Natasha Leonnet.

The warm, amber-gold of Trinity. The cold, blue-white of the theoretical physics flashbacks in the 1920s. The saturated, high-contrast intensity of the bomb's flash. None of that is accidental. All of it was graded.

Color grading is the last creative act in post-production. Done well, it makes every element of the composite look like it was photographed together under the same light, in the same world.

---

## 🔬 Color Science Foundations

### Log vs Linear Encoding

Camera sensors capture light linearly — double the photons, double the signal. But the human visual system is logarithmic — we perceive equal ratios of brightness as equal perceptual steps.

| Encoding | What It Does | Dynamic Range | Storage |
|----------|-------------|---------------|---------|
| **Linear** | Direct representation of captured photon counts | Full scene-linear; all math is physically correct | Very large (16–32 bit float needed) |
| **Log (Logarithmic)** | Compresses the tonal range into a smaller code value space using a log curve | Preserves shadow and highlight detail | Efficient (10–12 bit practical) |
| **Display-referred (Rec.709, sRGB)** | Optimized for a specific display; detail outside the display range is clipped | Limited; what you see is what you get | 8–10 bit |

**The VFX workflow:** Cameras shoot in Log (ARRI LogC3/C4, RED Log3G10, Sony S-Log3). This is the "flat-looking" footage you see from professional cameras. Log footage must be converted to **scene-linear** before any image math (compositing, keying, color operations) is performed, because only scene-linear math is physically correct.

> 🎯 **Exam Tip:** All compositing math (Merge/over operations, blending, defocus) must be done in **scene-linear** color space. Performing compositing operations in Log or gamma-encoded footage produces incorrect results — color fringing, incorrect blending at edges, wrong exposure math.

### ACES: Academy Color Encoding System

ACES is the color management standard developed by the Academy of Motion Picture Arts and Sciences. It is used on virtually every major Hollywood film production and increasingly in high-end streaming.

| ACES Space | Description | Usage |
|------------|-------------|-------|
| **ACES2065-1** | The archival master space; extremely wide gamut (covers all real colors + beyond) | Archival storage; interchange |
| **ACEScg** | Working color space for CG rendering and compositing; linear; wide gamut | Nuke compositing; 3D rendering |
| **ACEScct** | Log-encoded ACES for color grading tools | DaVinci Resolve grading |
| **Output Transform** | Converts ACEScg → display (Rec.709 or P3 or HDR) | Final output for cinema/streaming |

**The ACES pipeline:**
```
Camera RAW → Input Transform (IDT) → ACES2065-1 → ACEScg (working space)
→ [Compositing + CG rendering] → Output Transform (ODT) → Display (Rec.709/P3/HDR)
```

> 🚨 **Trap:** A CG render in linear sRGB looks different from the same render in ACEScg — the gamut and tone mapping differ. If a VFX studio's renders are in ACEScg but the compositor applies a Rec.709 display transform, the output will be incorrectly color-managed. Always confirm the color pipeline before beginning work.

### LUTs (Look-Up Tables)

A LUT is a pre-computed table that maps one set of color values to another. LUTs are used for:

| LUT Type | Purpose |
|----------|---------|
| **Technical LUT** | Color space transform (e.g., Log to Linear, Log to Rec.709) — mathematically precise |
| **Display LUT** | Monitor calibration — maps linear to the display's actual response |
| **Creative LUT** | A "look" — the color grade baked into a LUT for rapid application |

**3D LUT vs 1D LUT:**
- A **1D LUT** maps each channel independently (R→R, G→G, B→B) — sufficient for simple gamma curves
- A **3D LUT** maps RGB triplets to output RGB triplets — captures cross-channel color interactions (the warm shadows, teal highlights that 1D cannot reproduce)

Professional DI facilities use 3D LUTs for all creative grading. Technical pipeline transforms can use 1D LUTs for efficiency when only per-channel operations are needed.

---

## 🎨 Primary vs Secondary Correction

### Primary Color Correction

Primary correction adjusts the image globally — all pixels are affected equally.

**The three-way color corrector** (available in DaVinci Resolve, Lumetri Color in AE, and Nuke's ColorCorrect) has three tonal zones:

| Zone | Controls | Typical Adjustment |
|------|----------|-------------------|
| **Shadows (Lift)** | Shifts the color of dark areas | Cool shadows (blue/teal) or warm shadows (amber) |
| **Midtones (Gamma)** | Shifts midrange tones | The skin tone zone — most critical for faces |
| **Highlights (Gain)** | Shifts bright areas | Warm highlights (golden hour) or cool highlights (moonlight) |

**Reading a parade scope:**
The parade scope displays the red, green, and blue channels as separate waveforms. A well-exposed plate has:
- Black levels at 0 (or slightly above, depending on log encoding)
- White levels at 700–800 mV (for broadcast, staying below 100%)
- Color channels balanced (equal RGB values in neutral/gray areas)

### Secondary Color Correction

Secondary correction targets a specific color range or region of the frame.

| Secondary Tool | Technique |
|---------------|----------|
| **Hue vs Saturation** | Reduce the saturation of specific hues (e.g., desaturate yellow to fix a highlight) |
| **Hue vs Hue** | Shift specific hues (e.g., turn a slightly off-green grass into a richer green) |
| **Qualifier** | Sample a color in the image and isolate it for secondary correction (e.g., select the sky blue and darken just the sky) |
| **Power Window** | Shape-based secondary — apply grading only within a masked region |
| **Masks on Color Wheels** | In Lumetri: color range selector |

---

## 👤 Matching Shots in a Sequence

The most common color grading task for a compositor is **shot matching** — making adjacent shots in a sequence look like they were photographed under the same conditions:

### Shot Matching Workflow

1. **Set a hero frame** — pick the best-looking shot in the sequence as the reference
2. **Compare scopes, not eyes** — use the parade scope and vectorscope to compare the hero frame and the target frame objectively
3. **Match the blacks first** — lift/gain the shadows to match the same black level
4. **Match the exposure** — use the gain/gamma to match overall brightness
5. **Match the color balance** — per-channel gain adjustments to neutralize color casts
6. **Secondary: match skin tones** — skin should sit at the same position on the skin-tone line of the vectorscope

The **vectorscope** is essential for shot matching: it shows the distribution of color in circular space. Skin tones of all human races cluster along the "skin-tone line" — a consistent angle on the vectorscope. If two shots' skin tones are at different positions on the vectorscope, the shots won't cut together convincingly.

---

## 🎬 Case Study: Oppenheimer's Color Design

Nolan and colorist Natasha Leonnet designed a three-period color language for *Oppenheimer*:

| Period | Color Language | Technique |
|--------|---------------|-----------|
| **1920s–30s European physics** | Cold, intellectual: blue-gray, desaturated, high contrast | Extended tonal contrast, reduced saturation in midtones |
| **Manhattan Project / New Mexico** | Amber, dust, heat: warm shadows, golden highlights | Warm lift in shadows, boosted orange/red tones |
| **Trinity Test + bomb flash** | Extreme overexposure transitioning to pure white | Blow-out highlights; the film stock's actual chemical burn-in |
| **1954 Hearing (color sequences)** | High saturation, aggressive contrast | Increased vibrance, crushed blacks |
| **Black-and-white flashbacks (Strauss)** | Literal B&W shot on B&W IMAX film — not digitally desaturated | Orthographic-feel; high contrast B&W print |

> 🎯 **Industry Insight:** The Trinity test explosion's "blind white flash" was a deliberate creative decision to show the audience what the scientists described — a light beyond what any camera could capture. It is one of the most effectively designed VFX color moments in recent cinema: not because of complexity, but because it is exactly right.

---

## 🔧 The "Look" vs the Technical Grade

A compositor does a **technical grade**: adjusting each element to match the plate's exposure, contrast, and color temperature. This is correction — bringing elements to a neutral, accurate starting point.

The colorist does a **creative grade**: applying the director and DP's intended "look" — the warmth, the contrast, the saturation, the mood. This happens in the DI facility on the entire sequence, not on individual elements.

> 🚨 **Trap:** A compositor who applies a heavy creative look to their composite before delivery is making the colorist's job harder. Deliver composites in a neutral, log-encoded state (close to the camera's original color) so the colorist can apply the look globally.

---

## 📊 Summary: Color Science Quick Reference

| Term | Definition |
|------|-----------|
| Log encoding | Logarithmic compression of scene-linear data for efficient storage |
| Scene-linear | Physically accurate, proportional-to-photons encoding |
| ACES | Academy Color Encoding System — the film industry color management standard |
| ACEScg | Linear ACES working space for compositing and CG rendering |
| LUT | Look-Up Table — pre-computed color transform |
| Primary correction | Global adjustment (all pixels affected) |
| Secondary correction | Targeted adjustment (specific hue or region) |
| Technical grade | Matching elements to each other — the compositor's grade |
| Creative grade | Applying the "look" — the colorist's grade at the DI |
| Vectorscope | Circular display of color distribution; skin-tone line for shot matching |
| Parade scope | Waveform display of R, G, B channels separately |

---

## 🎯 Next Steps

Module 8 covers the "invisible" category of VFX — practical digital FX integration, set extensions, sky replacement, and cleanup work. This is where the best VFX artists work: creating effects so seamlessly real that audiences never know they're there.

---

## 📚 Further Reading

- **"Color and Light: A Guide for the Realist Painter" — James Gurney** — not VFX-specific, but the best book on understanding how light and color actually work
- **"Color Science for Motion Picture" — Alexis Van Hurkman** — the definitive digital grading reference
- **ACES Central (acescentral.com)** — all ACES specification documents, pipeline guides, and forum discussions
- **Cullen Kelly's YouTube channel** — broadcast colorist; detailed, technically rigorous color science tutorials
- **Mixing Light (mixinglight.com)** — professional colorist community; tutorials on DaVinci Resolve grading and color science
