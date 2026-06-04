---
permalink: /36-3D-Animation-Blender/Module-04-Lighting-HDRI/
title: "Module 4: Lighting & HDRI"
---

# 💡 Module 4: Lighting & HDRI

## The Invisible Art

Roger Deakins — the Academy Award-winning cinematographer of *Blade Runner 2049*, *1917*, and *No Country for Old Men* — has said that the best lighting is lighting the audience doesn't consciously notice. They feel the mood, the time of day, the emotional weight of the scene. They do not see the lighting. In 3D animation, this principle is even more challenging: every photon is synthetic, and every source of light is a deliberate choice.

The Blender Foundation's lighting team for *Sprite Fright* (2021) spent weeks on per-shot lighting — even for shots that lasted less than two seconds on screen. The production blog documents that the average *Sprite Fright* shot had 12 to 18 distinct light objects, plus an HDRI environment. This module teaches you to think like a cinematographer.

---

## 4.1 Three-Point Lighting: The Foundation

Three-point lighting is the oldest structured lighting scheme in cinema and photography. It divides the light in a scene into three functional roles:

| Light | Role | Typical Intensity | Typical Position |
|---|---|---|---|
| **Key light** | Primary light source; defines main shadows | 100% (reference) | 30–45° to the side, slightly above eye level |
| **Fill light** | Reduces shadow contrast; shows detail in shadow areas | 25–50% of key | Opposite side from key, same height |
| **Rim / Back light** | Separates subject from background; creates depth | 75–150% of key | Behind subject, pointing toward camera |

**In Blender:** Use an Area light for the key (soft, directional, studio-like), a second Area light at lower intensity for the fill, and a Spot or Area light behind the subject pointing forward for the rim.

> 🎯 **Exam tip:** The ratio of key-to-fill determines the mood. A 2:1 ratio (fill at 50%) gives a natural, even look (comedy, daytime). A 8:1 or 16:1 ratio (fill at 12–6%) gives a dramatic, high-contrast look (noir, thriller, horror). *Sprite Fright* used a ratio of approximately 3:1 to 4:1 for its friendly-but-forest-creepy aesthetic.

---

## 4.2 Blender's Light Types

| Light Type | Shape | Shadow | Best Use |
|---|---|---|---|
| **Point** | Omni-directional sphere | Spherical falloff | Practical lights, candles, small fill |
| **Sun** | Parallel directional | Infinite, parallel shadows | Outdoor sunlight; no position matters, only rotation |
| **Spot** | Cone | Circular, defined edge | Theatrical spotlights, flashlights, car headlights |
| **Area** | Rectangle or disk | Soft, realistic soft box | Studio key/fill lights; the most versatile for character animation |

**Area light settings that matter:**

- **Shape:** Rectangle or Disk; Rectangle gives a studio softbox feel; Disk matches a circular window
- **Size:** Larger = softer, more diffuse shadows. Smaller = harder, more directional shadows
- **Spread:** Controls how wide the light cone is (0° = laser; 180° = hemisphere)

> 🚨 **Trap:** The **Sun light** in Blender ignores its position in the scene. Only its rotation matters. Moving a Sun light up or down in the viewport has zero effect on the render — only rotating it changes the angle of the shadows.

---

## 4.3 HDRI Environment Lighting

A **High Dynamic Range Image (HDRI)** is a 360° panoramic photograph with a wide range of exposure values — bright for the sky, dark for the ground, very bright for sun and windows. Using an HDRI as the environment map gives your scene ambient lighting that matches a real-world location with correct color, directionality, and luminosity.

**Setting up HDRI in Blender:**
1. Properties Panel → World Properties → Surface → Use Nodes
2. Add a Background node (already there by default)
3. In the Shader Editor (set to World), add: **Environment Texture** node
4. Click Open and select your HDRI file (.hdr or .exr)
5. Connect: Environment Texture → Color → Background → Color input
6. The **Strength** slider on the Background node controls overall intensity

**Recommended free HDRI sources:**
- **Poly Haven (polyhaven.com):** CC0 HDRIs from studios (outdoor, indoor, urban). Formats: .hdr and .exr up to 16K resolution.
- **HDRI Haven (included in Poly Haven):** Same site, same license.
- **Blender's built-in HDRI add-ons:** A small selection ships with Blender in Preferences → Add-ons.

**HDRI rotation:** Add a **Mapping** node connected to a **Texture Coordinate** node (set to Generated) before the Environment Texture to rotate the HDRI. Rotation.Z controls the heading — align the HDRI sun with your key light for consistent shadow direction.

> 🎯 **Exam tip:** HDRI lighting is the fastest way to achieve photorealistic ambient lighting in Cycles. It provides consistent multi-directional fill from the real-world photo. In EEVEE, HDRI works with Probe volumes — less accurate than Cycles but fast for previews.

---

## 4.4 Color Temperature and Shadow Softness

**Color temperature** (measured in Kelvin) describes the warmth or coolness of a light source:

| Temperature | Color | Example |
|---|---|---|
| 1,800K | Very warm orange | Candlelight |
| 2,700K | Warm yellow | Incandescent bulb |
| 3,200K | Warm white | Tungsten studio light |
| 5,600K | Neutral white | Daylight, camera flash |
| 6,500K | Cool blue-white | Overcast sky |
| 10,000K | Deep blue | Clear blue sky |

In Blender, set color temperature on Area/Point/Spot lights by:
- Checking the **Use Temperature** checkbox (Blender 4.x adds this)
- Or manually converting: warm (yellow-orange), neutral (white), cool (light blue)

**Shadow softness** is controlled by the light source size relative to the subject:
- Small light source (Spot at 0.1m) → hard shadows (theater dramatic)
- Large light source (Area at 2m) → soft shadows (overcast day, studio)

---

## 4.5 Lighting for Mood: Three Genres

### Horror / Thriller
- **Key-to-fill ratio:** 16:1 or more
- **Key direction:** Extreme angle (under-face, hard side)
- **Color:** Deep blue or sickly green HDRI + orange practical lights
- **Shadows:** Hard, deliberate, falling across the face
- **Blender setup:** Small Spot key light, minimal fill, cool World HDRI

### Comedy / Family Animation
- **Key-to-fill ratio:** 2:1 to 3:1
- **Key direction:** Front-quarter, 30° above eye level
- **Color:** Warm (3,200K–5,600K), high ambient HDRI
- **Shadows:** Soft, shallow — the subject is fully lit and readable
- **Blender setup:** Large Area key, large Area fill, warm outdoor HDRI from Poly Haven

### Drama / Character Film
- **Key-to-fill ratio:** 4:1 to 6:1
- **Key direction:** Classic 3/4 key position
- **Color:** Natural — color contrast between key and fill (warm key, cool fill)
- **Shadows:** Medium-soft; enough shadow to give form without losing detail
- **Blender setup:** Rectangle Area key (simulate window light), small ambient fill, HDRI at low strength

---

## 4.6 Case Study: *Sprite Fright* Lighting Approach

The Blender Institute published their *Sprite Fright* lighting documentation. Key findings:

- **Shot count:** 147 shots, each individually lit
- **Average lights per shot:** 12–18 objects
- **Primary technique:** HDRI for ambient fill + manual key/rim lights per character
- **HDRI choice:** Forest/overcast sky at low strength (0.3–0.6) to avoid overexposure in the dense forest environment
- **Per-character rims:** Each character had their own rim light placed behind them, even in group shots — the animators noted this is the single most important technique for keeping stylized characters readable against complex backgrounds
- **Color temperature:** Key lights were set to 4,000K–5,000K (naturalistic daylight); rim lights were pushed slightly cooler (6,500K) to suggest sky bounce

**Production quote from the *Sprite Fright* making-of:** "We treated every shot like we would treat a live-action set. Every light has a *reason*. There's always something in the scene — a gap in the trees, a phone screen, a mushroom with bioluminescence — that justifies where the light comes from."

---

## 4.7 Summary

| Concept | Key Point |
|---|---|
| Three-point lighting | Key + Fill + Rim; ratio controls mood |
| Light types | Point (omni), Sun (directional), Spot (cone), Area (softbox) |
| Sun light quirk | Position irrelevant; only rotation matters |
| HDRI | 360° HDR panorama for ambient lighting; free at Poly Haven |
| Color temperature | Warm (orange) = candlelight; cool (blue) = sky/overcast |
| Shadow softness | Large light = soft; small light = hard |
| Horror | 16:1 ratio, hard shadows; Comedy: 2:1, soft fill |

---

## 📚 Next Steps

Proceed to [Module 5: Rigging & Armatures](../Module-05-Rigging-Armatures/Reading.md) — your lit, textured character now needs a skeleton.

---

## 📖 Further Reading

- 📖 **Blender Guru — "Lighting Tutorial"** (YouTube, see Videos.md)
- 📖 **Poly Haven (polyhaven.com)** — free CC0 HDRIs, textures, models
- 📖 **Blender Institute — *Sprite Fright* Lighting Blog** (blender.org/about/projects/)
- 📖 **Blain, John P. (2023). *The Complete Guide to Blender Graphics.* CRC Press** — lighting chapter
