---
title: "Module 7: Color Grading"
---

# 🎨 Module 7: Color Grading

## The Color of History

*Oppenheimer* (2023, Universal Pictures / directed by Christopher Nolan) was shot on IMAX film 70mm, hand-loaded, processed at Fotokem in Burbank. The color of the film is not a digital construct. It is physics: the specific spectral response of Kodak Vision3 500T film stock, the chemical development process, the photochemical printing. But the final color the audience sees was designed meticulously, over weeks of DI sessions at FotoKem, by colorist Natasha Leonnet.

The warm, amber-gold of Trinity. The cold, blue-white of the theoretical physics flashbacks in the 1920s. The saturated, high-contrast intensity of the bomb's flash. None of that is accidental. All of it was graded.

Color grading is the last creative act in post-production. Done well, it makes every element of the composite look like it was photographed together under the same light, in the same world.

---

## 🔬 Color Science Foundations

### Log vs Linear Encoding

Camera sensors capture light linearly double the photons, double the signal. But the human visual system is logarithmic we perceive equal ratios of brightness as equal perceptual steps.

| Encoding | What It Does | Dynamic Range | Storage |
|----------|-------------|---------------|---------|
| **Linear** | Direct representation of captured photon counts | Full scene-linear; all math is physically correct | Very large (16–32 bit float needed) |
| **Log (Logarithmic)** | Compresses the tonal range into a smaller code value space using a log curve | Preserves shadow and highlight detail | Efficient (10–12 bit practical) |
| **Display-referred (Rec.709, sRGB)** | Optimized for a specific display; detail outside the display range is clipped | Limited; what you see is what you get | 8–10 bit |

**The VFX workflow:** Cameras shoot in Log (ARRI LogC3/C4, RED Log3G10, Sony S-Log3). This is the "flat-looking" footage you see from professional cameras. Log footage must be converted to **scene-linear** before any image math (compositing, keying, color operations) is performed, because only scene-linear math is physically correct.

> 🎯 **What the exam tests:** All compositing math (Merge/over operations, blending, defocus) must be done in **scene-linear** color space. Performing compositing operations in Log or gamma-encoded footage produces incorrect results, color fringing, incorrect blending at edges, wrong exposure math.

---

## 🔬 ACES: Academy Color Encoding System, Step by Step

ACES is the color management standard developed by the Academy of Motion Picture Arts and Sciences. It is used on virtually every major Hollywood film production and increasingly in high-end streaming.

| ACES Space | Description | Usage |
|------------|-------------|-------|
| **ACES2065-1** | The archival master space; extremely wide gamut (covers all real colors + beyond) | Archival storage; interchange |
| **ACEScg** | Working color space for CG rendering and compositing; linear; wide gamut | Nuke compositing; 3D rendering |
| **ACEScct** | Log-encoded ACES for color grading tools | DaVinci Resolve grading |
| **Output Transform** | Converts ACEScg → display (Rec.709 or P3 or HDR) | Final output for cinema/streaming |

### The ACES Workflow Step by Step

```
Step 1: Camera RAW → Input Transform (IDT)
        [ARRI ALEXA plates → ACES2065-1 via ARRI IDT]

Step 2: ACES2065-1 → ACEScg (working space)
        [All compositing and CG rendering happens in ACEScg]

Step 3: ACEScg [Nuke compositing / Houdini rendering]
        [Every Merge, Grade, Blur operates in ACEScg linear]

Step 4: Compositor delivers ACEScg EXR to DI facility

Step 5: DI: ACEScg → ACEScct (for grading tools)
        [Colorist grades in ACEScct in DaVinci Resolve]

Step 6: Output Transform (ODT): ACEScg → Display
        [Rec.709 for streaming/broadcast, P3 for cinema, HDR10 for HDR]
```

> 🎯 **What the exam tests:** The IDT (Input Device Transform) converts camera-specific log footage into the ACES interchange space. The ODT (Output Device Transform) converts the graded master to the delivery color space. These are different transforms for different purposes.

> ⚠️ **Rookie mistake:** A CG render in linear sRGB looks different from the same render in ACEScg, the gamut and tone mapping differ. If a VFX studio's renders are in ACEScg but the compositor applies a Rec.709 display transform, the output will be incorrectly color-managed. Always confirm the color pipeline before beginning work.

---

## 📊 Color Space Conversion Table

Compositors regularly need to convert between color spaces. This table covers the most common conversions in production:

| Source Space | Target Space | Transform | When Used |
|-------------|-------------|-----------|----------|
| ARRI LogC3 | ACEScg linear | ARRI LogC3 IDT | ALEXA plates into ACES pipeline |
| ARRI LogC4 | ACEScg linear | ARRI LogC4 IDT | ALEXA 35 plates (2022+) |
| RED Log3G10 | ACEScg linear | RED IDT | RED KOMODO / EPIC plates |
| Sony S-Log3 | ACEScg linear | Sony IDT | Sony VENICE plates |
| ACEScg linear | Rec.709 | sRGB ODT | Streaming/broadcast delivery |
| ACEScg linear | DCI P3 D65 | P3 ODT | Cinema digital projection |
| ACEScg linear | HDR10 (PQ) | HDR10 ODT | HDR streaming delivery |
| Rec.709 (gamma) | Scene-linear | Gamma decode | Bringing old footage into a linear pipeline |
| Any log | Linear (approx) | Cineon/DPX log-to-lin curve | Legacy film scan conversion |

---

## 🎨 LUTs (Look-Up Tables)

A LUT is a pre-computed table that maps one set of color values to another. LUTs are used for:

| LUT Type | Purpose |
|----------|---------|
| **Technical LUT** | Color space transform (e.g., Log to Linear, Log to Rec.709), mathematically precise |
| **Display LUT** | Monitor calibration, maps linear to the display's actual response |
| **Creative LUT** | A "look", the color grade baked into a LUT for rapid application |

**3D LUT vs 1D LUT:**
- A **1D LUT** maps each channel independently (R→R, G→G, B→B), sufficient for simple gamma curves
- A **3D LUT** maps RGB triplets to output RGB triplets, captures cross-channel color interactions (the warm shadows, teal highlights that 1D cannot reproduce)

Professional DI facilities use 3D LUTs for all creative grading. Technical pipeline transforms can use 1D LUTs for efficiency when only per-channel operations are needed.

---

## 🎨 Primary vs Secondary Correction

### Primary Color Correction

Primary correction adjusts the image globally, all pixels are affected equally.

**The three-way color corrector** (available in DaVinci Resolve, Lumetri Color in AE, and Nuke's ColorCorrect) has three tonal zones:

| Zone | Controls | Typical Adjustment |
|------|----------|-------------------|
| **Shadows (Lift)** | Shifts the color of dark areas | Cool shadows (blue/teal) or warm shadows (amber) |
| **Midtones (Gamma)** | Shifts midrange tones | The skin tone zone, most critical for faces |
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
| **Power Window** | Shape-based secondary, apply grading only within a masked region |
| **Masks on Color Wheels** | In Lumetri: color range selector |

---

## 🎬 Case Study: Oppenheimer, Nolan's Minimal CGI Philosophy

Christopher Nolan is the most prominent director working in 2023–2024 who actively argues against reliance on digital VFX. *Oppenheimer* (2023) is his most committed expression of this philosophy.

### What Nolan Did Practically

| Effect | Practical Approach |
|--------|------------------|
| Trinity Test nuclear explosion | Practical miniature explosions, burning gasoline, pyrotechnics, no nuclear simulation in CG |
| The bomb flash (blinding white) | Overexposed film deliberately, IMAX film stock burned into pure white |
| Gadget assembly (the bomb itself) | Practical practical prop, built by prop department |
| 1945 New Mexico landscape | Shot on location in New Mexico, minimal digital set extension |
| Quantum mechanics visualization | Abstract practical elements, colored dyes in water, microscopic photography |
| Crowd at Trinity | Real extras plus minimal digital crowd extension for wide shots |

> 🎯 **What the exam tests:** Nolan's Trinity explosion used practical fire, magnesium powder, and burning gasoline, not CGI. The "fireball" was a miniature photographed on IMAX film. Understanding that practical effects still produce superior photorealism to CG in many scenarios is a key concept in VFX philosophy.

### The Color Design of Oppenheimer

Nolan and colorist Natasha Leonnet designed a three-period color language:

| Period | Color Language | Technique |
|--------|---------------|-----------|
| **1920s–30s European physics** | Cold, intellectual: blue-gray, desaturated, high contrast | Extended tonal contrast, reduced saturation in midtones |
| **Manhattan Project / New Mexico** | Amber, dust, heat: warm shadows, golden highlights | Warm lift in shadows, boosted orange/red tones |
| **Trinity Test + bomb flash** | Extreme overexposure transitioning to pure white | Blow-out highlights; the film stock's actual chemical burn-in |
| **1954 Hearing (color sequences)** | High saturation, aggressive contrast | Increased vibrance, crushed blacks |
| **Black-and-white flashbacks (Strauss)** | Literal B&W shot on B&W IMAX film, not digitally desaturated | Orthographic-feel; high contrast B&W print |

> 🎯 **What the exam tests:** The Trinity test explosion's "blind white flash" was a deliberate creative decision to show the audience what the scientists described, a light beyond what any camera could capture. This is VFX color grading as storytelling: the grade communicates an idea, not just a look.

---

## 👤 Matching Shots in a Sequence

The most common color grading task for a compositor is **shot matching**, making adjacent shots in a sequence look like they were photographed under the same conditions:

### Shot Matching Workflow

1. **Set a hero frame**, pick the best-looking shot in the sequence as the reference
2. **Compare scopes, not eyes**, use the parade scope and vectorscope to compare the hero frame and the target frame objectively
3. **Match the blacks first**, lift/gain the shadows to match the same black level
4. **Match the exposure**, use the gain/gamma to match overall brightness
5. **Match the color balance**, per-channel gain adjustments to neutralize color casts
6. **Secondary: match skin tones**, skin should sit at the same position on the skin-tone line of the vectorscope

The **vectorscope** is essential for shot matching: it shows the distribution of color in circular space. Skin tones of all human races cluster along the "skin-tone line", a consistent angle on the vectorscope. If two shots' skin tones are at different positions on the vectorscope, the shots won't cut together convincingly.

---

## 📊 Delivery Specification Tables

Compositors must know the delivery requirements for different distribution channels:

### Broadcast Delivery Specifications

| Specification | Broadcast (Rec.709) | Streaming (Rec.709) | Digital Cinema (DCI P3) |
|--------------|---------------------|---------------------|------------------------|
| Color space | Rec.709 | Rec.709 | DCI P3 |
| Gamma | 2.4 (BT.1886) | sRGB (~2.2) | Gamma 2.6 |
| Max luminance | 100 nits | 100 nits | 48 cd/m² |
| White point | D65 | D65 | DCI white |
| Bit depth | 8–10 bit | 8 bit (H.264) to 10 bit (H.265) | 12 bit (JPEG2000) |
| Max legal levels | 16–235 (8-bit) | 0–255 | 0–4095 |
| Safe action area | 90% of frame | No broadcast safe requirement | No broadcast safe requirement |

### Streaming Platform Codec Reference

| Platform | Video Codec | Max Bitrate | Color Space | HDR Support |
|----------|-------------|------------|-------------|-------------|
| Netflix | H.264/H.265/AV1 | Up to 100 Mbps (master) | Rec.709 / HDR10 / Dolby Vision | Yes |
| Disney+ | H.265 | Up to 40 Mbps | Rec.709 / HDR10 | Yes |
| Apple TV+ | H.265 (HEVC) | Up to 40 Mbps | Rec.709 / HDR10 / Dolby Vision | Yes |
| Amazon Prime | H.265 | Up to 25 Mbps | Rec.709 / HDR10 | Yes |
| YouTube (4K) | VP9 / AV1 | Variable | Rec.709 / HDR10 | Yes |

> 🎯 **What the exam tests:** Delivery specs are part of the compositor's job, not just the DI facility's. Understanding that Netflix accepts HDR10 and Dolby Vision, while standard broadcast requires Rec.709 at 100 nits max, affects every color decision in the composite.

---

## 🔧 The "Look" vs the Technical Grade

A compositor does a **technical grade**: adjusting each element to match the plate's exposure, contrast, and color temperature. This is correction, bringing elements to a neutral, accurate starting point.

The colorist does a **creative grade**: applying the director and DP's intended "look", the warmth, the contrast, the saturation, the mood. This happens in the DI facility on the entire sequence, not on individual elements.

> ⚠️ **Rookie mistake:** A compositor who applies a heavy creative look to their composite before delivery is making the colorist's job harder. Deliver composites in a neutral, log-encoded state (close to the camera's original color) so the colorist can apply the look globally.

---

## 🎯 What the Exam Tests, Module 7

1. **Scene-linear requirement:** All compositing math must be in scene-linear. Log or gamma-encoded compositing produces color fringing, wrong blending, and incorrect exposure math.
2. **ACES workflow stages:** Camera RAW → IDT → ACES2065-1 → ACEScg (compositing) → ODT → Display. Know the sequence and the abbreviations.
3. **IDT vs ODT:** IDT = Input Device Transform (camera log → ACES). ODT = Output Device Transform (ACES → display). Different transforms, different directions.
4. **1D vs 3D LUT capability:** 1D LUT = per-channel only. 3D LUT = captures cross-channel interactions (warm shadows, teal highlights). 3D LUTs are required for creative grades.
5. **Primary vs secondary correction:** Primary = global (all pixels). Secondary = targeted (specific hue or masked region). Qualifiers, Power Windows, and Hue vs Saturation are secondary tools.
6. **Vectorscope skin-tone line:** All human skin tones cluster at a consistent angle on the vectorscope. Shot-to-shot skin tone matching uses the vectorscope, not visual judgment.
7. **Technical vs creative grade:** Compositor does the technical grade (match elements to plate). Colorist does the creative grade (the "look"). Different people, different stage, different software.
8. **Oppenheimer practical effects:** Trinity explosion was practical pyrotechnics, not CGI. The bomb flash was over-exposed film stock. Understanding practical-first philosophy is testable.
9. **Log encoding purpose:** Compresses dynamic range for storage efficiency. "Flat-looking" footage is correctly exposed, the log curve must be converted to linear for compositing.
10. **Parade scope reading:** R, G, B channels as separate waveforms. Balanced channels = neutral image. Unequal channels = color cast. Black levels at 0, white at 700–800 mV for broadcast.

---

## 🔬 HDR Color Grading: What Changes in HDR

High Dynamic Range (HDR) delivery has become increasingly common as streaming platforms support HDR10 and Dolby Vision. Understanding how HDR changes the compositor's workflow is an exam-level topic.

### SDR vs HDR: Key Differences

| Factor | SDR (Rec.709) | HDR10 | Dolby Vision |
|--------|-------------|-------|-------------|
| Peak luminance | 100 nits | Up to 10,000 nits | Up to 10,000 nits |
| Color gamut | Rec.709 | Rec.2020 | Rec.2020 |
| Transfer function | Gamma 2.4 | PQ (SMPTE ST.2084) | PQ + Dolby metadata |
| Bit depth | 8–10 bit | 10 bit | 12 bit |
| White point | D65 | D65 | D65 |

### Impact on Compositing for HDR

When delivering to HDR:
1. **Compositing still done in ACEScg linear**, the working space does not change
2. **Output transform changes**, ODT targets HDR10 or Dolby Vision instead of Rec.709
3. **Highlight detail is preserved longer**, the PQ curve captures more sky and practical fire detail
4. **Spill on bright areas**, green spill is more visible on HDR displays; spill suppression must be more thorough
5. **Interactive light range**, an explosion can now be graded brighter than 100 nits, matching its real physical brightness

> 🎯 **What the exam tests:** The ACEScg working space is identical for SDR and HDR productions. What changes is the ODT (Output Device Transform), the conversion from ACEScg to the delivery standard. Compositors deliver log EXR to the DI regardless of SDR or HDR target.

---

## 📊 Summary: Color Science Quick Reference

| Term | Definition |
|------|-----------|
| Log encoding | Logarithmic compression of scene-linear data for efficient storage |
| Scene-linear | Physically accurate, proportional-to-photons encoding |
| ACES | Academy Color Encoding System, the film industry color management standard |
| ACEScg | Linear ACES working space for compositing and CG rendering |
| LUT | Look-Up Table, pre-computed color transform |
| Primary correction | Global adjustment (all pixels affected) |
| Secondary correction | Targeted adjustment (specific hue or region) |
| Technical grade | Matching elements to each other, the compositor's grade |
| Creative grade | Applying the "look", the colorist's grade at the DI |
| Vectorscope | Circular display of color distribution; skin-tone line for shot matching |
| Parade scope | Waveform display of R, G, B channels separately |
| IDT | Input Device Transform, converts camera log to ACES |
| ODT | Output Device Transform, converts ACES to display color space |

---

## 📊 Color Pipeline Quick Reference: Who Does What

Confusion between the compositor's grade and the colorist's grade is one of the most common sources of miscommunication in post-production:

| Stage | Who | Tool | Purpose | When |
|-------|-----|------|---------|------|
| Plate prep | DIT / Plate Dept | ARRIRAW SDK | Transcode log footage to working format | On set / Day 1 post |
| VFX technical grade | Compositor | Nuke Grade nodes | Match elements to plate; neutral delivery | During compositing |
| Conform / EDL | Editor / Online | Avid / Resolve | Assemble comps with offline cut | Post-VFX picture lock |
| Creative grade | Colorist | DaVinci Resolve | Apply the film's look globally | DI facility |
| QC | Deliverable team | Resolve + scopes | Verify specs met | Before delivery |

**The compositor must never bake a creative look into the composite delivery. Deliver neutral log.**

---

## 🎯 Next Steps

Module 8 covers the "invisible" category of VFX, practical digital FX integration, set extensions, sky replacement, and cleanup work. This is where the best VFX artists work: creating effects so seamlessly real that audiences never know they're there.

---

## 📊 Full Color Grading Vocabulary Reference

| Term | Definition |
|------|-----------|
| Scene-linear | Color encoding proportional to physical photon count, required for compositing math |
| Log encoding | Logarithmic compression of scene-linear data; camera-native format |
| Display-referred | Color encoding optimized for a specific display (Rec.709, sRGB) |
| ACES | Academy Color Encoding System, Hollywood film color management standard |
| ACES2065-1 | The archival ACES interchange space; extremely wide gamut |
| ACEScg | Linear ACES working space for VFX compositing and CG rendering |
| ACEScct | Log-encoded ACES for use in color grading tools (DaVinci Resolve) |
| IDT | Input Device Transform, converts camera log footage into ACES |
| ODT | Output Device Transform, converts ACES to the target display standard |
| LUT | Look-Up Table, a pre-computed color transform |
| 1D LUT | Per-channel LUT, cannot capture cross-channel interactions |
| 3D LUT | RGB-triplet LUT, captures all cross-channel color interactions |
| Primary correction | Global color/exposure adjustment affecting all pixels equally |
| Secondary correction | Targeted adjustment, specific hue, region, or qualifier |
| Qualifier | A tool that isolates a specific color in the image for secondary correction |
| Power Window | A shape-based secondary, applies correction only within a masked region |
| Parade scope | Side-by-side R, G, B waveform display, used for color balance and exposure matching |
| Vectorscope | Circular hue/saturation display, skin-tone line is key reference |
| Skin-tone line | Consistent angle on vectorscope for all human skin tones |
| Technical grade | Compositor's grade, matching elements to each other; neutral |
| Creative grade | Colorist's grade, applying the director/DP's intended look |
| DI | Digital Intermediate, facility and process for final color grading |
| Film emulation LUT | A 3D LUT simulating the look of a specific film stock |

---

## 📊 Color Correction Decision Tree

When approaching any composite that requires color grading, use this decision tree:

```
Is footage log-encoded?
  └─ Yes → Apply IDT / OCIOColorSpace to convert to scene-linear FIRST
  └─ No (already linear) → Proceed

Is CG render in correct color space?
  └─ Yes (ACEScg) → Grade directly
  └─ No (wrong space) → Apply colorspace conversion node before grading

Are all elements matching each other?
  └─ No → Start with shadows (Lift/Blackpoint)
           → Then match exposure (Gain/Gamma)
           → Then match color balance (per-channel R/G/B)
           → Then match secondary (skin tone on vectorscope)
  └─ Yes → Proceed to light wrap and grain

Does the composite need interactive light from a CG element?
  └─ Yes → Add Adjustment Layer with color-matched Curves + masked radial near affected surfaces
  └─ No → Proceed to final output

Is the deliverable for broadcast?
  └─ Yes → Ensure blacks ≥ 16 (8-bit legal), whites ≤ 235 (8-bit legal)
            → Apply Rec.709 output transform
  └─ Cinema → Apply P3 D65 ODT
  └─ VFX delivery → Deliver in log (ACEScct or LogC3); no creative look baked in
```

---

## 📚 Further Reading

- **"Color and Light: A Guide for the Realist Painter" James Gurney** not VFX-specific, but the best book on understanding how light and color actually work
- **"Color Science for Motion Picture" Alexis Van Hurkman** the definitive digital grading reference
- **ACES Central (acescentral.com)**, all ACES specification documents, pipeline guides, and forum discussions
- **Cullen Kelly's YouTube channel**, broadcast colorist; detailed, technically rigorous color science tutorials
- **Mixing Light (mixinglight.com)**, professional colorist community; tutorials on DaVinci Resolve grading and color science

