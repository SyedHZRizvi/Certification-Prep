---
title: "Module 2: Green Screen Keying"
---

# 🟢 Module 2: Green Screen Keying

## The Scene That Almost Wasn't

The rooftop fight scene in *Captain America: The Winter Soldier* (2014) was shot on a Cleveland parking garage roof. The sky had to go — wrong color, wrong drama. Two hundred and thirty-seven people appear in that sequence on what was, in reality, a patch of gravel the size of a basketball court. The horizon line was a greenscreen. The Helicarriers were digital. Every actor's silhouette against that "sky" was extracted by a Framestore compositor who had to pull a clean key through hair, through motion blur, through the reflective surface of a SHIELD agent's sunglasses.

The key is the foundation. If the key is bad, the composite is bad. No amount of color grading or lens flares can save a composite with a crumbling edge or a translucent face.

---

## 🎨 Why Chroma Keying Works

Color keying (chroma keying) extracts a matte from footage by selecting a target color range and making those pixels transparent. The principle is simple: if the pixel's hue is close enough to "green," set its alpha to 0.

The practical challenge: what does "close enough" mean for a pixel in the shadow of an actor's chin, or for a pixel in a strand of red hair that reflects the green backing? This is why professional keying is a multi-step process, not a single slider.

### Green vs Blue Screen

| Factor | Green Screen | Blue Screen |
|--------|-------------|------------|
| Luminance | Brighter; less light needed | Requires more light to match green |
| Digital cameras | Best separation on Bayer sensors (more green photosites) | Better for nighttime/dark scenes |
| Wardrobe conflict | Can't use green clothing or foliage props | Can't use blue clothing or night sky |
| Skin tone | Good separation for most skin tones | Better for fair skin, worse for darker skin tones |
| Spill color | Green spill is more visible | Blue spill is less visible on most skin |
| Industry default | Broadcast and most film work | Underwater, night, blue wardrobe shots |

> 🎯 **Exam Tip:** The reason digital cameras favor green screens is physical: the Bayer color filter array on a digital sensor has twice as many green photosites as red or blue. Green has more sampling, so green screens produce cleaner keys.

---

## 🔑 The Three-Step Key: The Professional Workflow

The "Keylight" plugin in After Effects — originally developed by The Computer Film Company, now owned by The Foundry — is the industry standard for AE keying. Keylight uses a **color difference** algorithm rather than a simple hue-selection algorithm, which produces significantly better results in difficult areas.

The three-step key is the workflow used by professional AE compositors at broadcast studios including Framestore (broadcast division) and studios like Pixomondo:

### Step 1: The Rough Key

The rough key's job is to get the matte close. You are **not** trying to perfect the edge at this stage.

1. Apply **Keylight 1.2** to the footage layer
2. Set **Screen Colour** by clicking on a neutral mid-tone of the green backing (avoid the brightest and darkest areas)
3. Set **Screen Gain** to ~100 (Keylight's default)
4. Switch the **View** dropdown to **Screen Matte** to see the matte directly
5. Observe: foreground subject should be white (opaque), background should be black (transparent)

At this stage, the matte will have gray (semi-transparent) areas where you don't want them — in the subject — and may have some spill contamination. That is fine. This is just the starting point.

### Step 2: The Refined Key

The refined key cleans the interior of the matte (solid white in the foreground) and the exterior (solid black in the background).

1. Adjust **Screen Shrink/Grow** — grow the matte inward to bite into the spill zone; shrink outward to prevent edge loss
2. Adjust **Screen Balance** — controls the ratio between the two non-key channels (red and blue); can dramatically clean an uneven matte
3. Use **Clip Black** to force near-black values in the background to pure black
4. Use **Clip White** to force near-white values in the foreground to pure white
5. **Do not** use Clip Black/White aggressively — they erode the semi-transparent edge information needed for hair and motion blur

> 🚨 **Trap:** Cranking Clip Black and Clip White to produce a clean matte on coarse subjects destroys the semi-transparent pixel information that makes edges look photographic. A "binary matte" (only 0 or 1 values, no gray) will produce a hard, jagged edge that clearly looks composited. Protect your edge grays.

### Step 3: The Fine Key

The fine key refines the edge using secondary tools:

1. **Alpha Refine Matte** effects (Remove Color Matting, Matte Cleaner, Simple Choker) handle the pixel-level edge
2. **Keylight's Edge Colour Correction** — adjusts the color of semi-transparent pixels in the transition zone (critical for hair lit by greenscreen)
3. A secondary Keylight instance (with a different Screen Colour sample) can be applied to a duplicate layer and the mattes combined with a **Set Matte** or **Minimax** approach for difficult areas
4. **Roto cleanup** on specific frames where the key fails completely (module 3)

---

## 💚 Spill Suppression

Green spill is the contamination of the foreground subject by reflected green light from the backing. Spill appears as a green tinge on the edges of hair, white clothing, and skin.

### Keylight's Screen Shrink/Grow and Screen Pre-Blur

- **Screen Pre-Blur**: blurs the keying matte calculation before edge detection — useful for noisy footage but softens fine edge detail
- **Screen Shrink/Grow**: erodes or expands the keying boundary — the primary tool for pushing the key line in (to exclude spill) or out (to recover edge detail)

### After Effects Spill Suppression Tools

| Tool | Behavior | Best For |
|------|----------|---------|
| **Keylight → Screen Colour Correction** | Removes green from semi-transparent edge pixels | Primary spill fix within Keylight |
| **Spill Suppressor effect** | Simple green-channel reduction | Quick fix for mild spill |
| **Advanced Spill Suppressor** | Sophisticated color-aware desaturation of the key color | Better results on skin tones and hair |
| **Hue/Saturation** on Edge | Manually desaturate the green channel in the edge region | Full manual control |

The **Advanced Spill Suppressor** (introduced in AE CC 2014) is the current preferred tool: it analyzes the background color and uses that to inform how to desaturate the spill, rather than blindly reducing the green channel uniformly.

---

## 🔬 Difference Mattes

When no greenscreen was used — a common reality for VFX supervision on low-budget productions — a difference matte can extract a foreground subject from a background, provided:

1. A **clean plate** (background without the subject) was shot from exactly the same camera position
2. The camera did not move between the subject shot and the clean plate
3. The background did not move (no trees, no people, no shadows changing)

**Workflow:**
1. Stack the subject shot and clean plate
2. Apply the **Difference** blending mode (or AE's Channel Combiner / Shift Channels approach)
3. Areas where the images differ (where the subject is) produce non-zero values
4. These values are used as a luminance matte after levels adjustment and blur

Difference mattes are fragile — any camera wobble or lighting change between the plates breaks them. They are a last resort, not a primary tool.

> 🎯 **Exam Tip:** Difference mattes are used when there is no greenscreen. They require a clean plate from the identical camera position and lighting state. They fail if anything in the background changed between plates.

---

## 🎭 Color Grading to Match Plate to Background

Pulling a clean key is only half the job. The second half is making the keyed subject look like it belongs in the new background. This requires:

### 1. Color Matching

The subject (shot under studio lighting) must match the color temperature, gamma, and saturation of the background plate (which may have been shot outdoors, on location, or CG-rendered).

Steps:
1. Add an **Adjustment Layer** above the keyed subject in After Effects
2. Apply **Curves** (not Levels — Curves gives per-channel control)
3. Match the **shadows, midtones, and highlights** separately on each RGB channel
4. Use the **Color Range** selector in Lumetri Color (AE 2022+) for secondary correction on specific colors (e.g., skin tones specifically)

### 2. Edge Color Correction

The transition zone at the edge of the key must match the background it's composited against. In Keylight, **Foreground Colour Correction** and **Edge Colour Correction** can tint this zone:

- If the background has a warm golden light, the edge pixels on a hair strand should pick up that warm color
- The **Light Wrap** effect (or a manual technique using a Glow from a pre-comp of the background) simulates background light wrapping around the foreground subject's edge

### 3. Light Wrap

Light wrap is the single most important technique for making a composite look photographic. It simulates the way light from a bright background scatters around the edge of a foreground subject:

1. Pre-compose the background plate
2. Apply a large **Gaussian Blur** to the pre-comp copy
3. Set the blurred copy to **Screen** or **Add** blend mode
4. Mask or use a Track Matte to apply this only at the edges of the keyed subject

This creates the illusion that the background light is scattering into the edges of the subject — the subtle effect that separates a "pasted-on" look from a photographic composite.

---

## 🚧 Working With Difficult Keys

### Hair and Fine Detail

Hair is the most difficult keying subject because individual strands are semi-transparent, have specular highlights, and may be backlit by the greenscreen. The professional workflow:

1. Do the main body key with standard Keylight
2. Create a second Keylight instance targeting specifically the hair region (use a loose hand-drawn mask to isolate)
3. Use **Screen Gain** and **Screen Balance** to recover the semi-transparent hair strands
4. Combine the two keys using a **Minimum** operation (takes the most transparent pixel from each matte) to build the final matte

### Glass and Transparent Objects

A wine glass or crystal vase in front of a greenscreen requires special handling because the object is semi-transparent and shows the background through it:

1. Key the shot normally — the glass will be mostly transparent in the matte
2. Use a **Hold-Out Matte** (a hand-painted matte for the glass object) to protect its shape
3. The glass's transparency allows some of the new background to show through — this is correct and desirable
4. Add the background's refracted color to the glass area using a composite of the background plate at reduced opacity, shaped by the glass matte

### Motion Blur

Motion blur is the nemesis of hard-edge keying. A hand in motion against a greenscreen creates a row of pixels that are part green, part skin-tone. These pixels have an inherent semi-transparency that must be preserved:

- Never use **Clip Black / Clip White** on motion blurred subjects
- Use Keylight's **Screen Softness** to allow semi-transparent pixels in the matte
- A secondary matte from AE's **Rotobrush 2.0** can hold out the body shape while Keylight handles the blur transition

---

## 📊 Summary: Keylight Parameters Quick Reference

| Parameter | Function | When to Adjust |
|-----------|----------|---------------|
| Screen Colour | The keying sample color | Always — set first |
| Screen Gain | Sensitivity/aggressiveness of the key | When matte is not reading background as black |
| Screen Balance | Ratio of non-key channels | When matte has uneven gray in background |
| Screen Pre-Blur | Pre-blurs keying calculation | Noisy footage |
| Screen Shrink/Grow | Erodes/expands matte boundary | When spill is visible or edge is lost |
| Clip Black | Forces near-black to black | Background cleanup (use sparingly) |
| Clip White | Forces near-white to white | Foreground cleanup (use sparingly) |
| Screen Softness | Allows soft/blurry transitions | Motion blur preservation |

---

## 🎯 Next Steps

Module 3 covers rotoscoping — the technique you reach for when no greenscreen was shot and no clean plate is available. Roto is the complement to keying: where keying is semi-automated, roto is manual. Together, keying and roto cover every situation a compositor encounters when separating subject from background.

---

## 📚 Further Reading

- **"Digital Compositing for Film and Video" — Steve Wright** — Chapter 4 covers chroma keying theory at professional depth
- **Keylight User Guide (The Foundry)** — The authoritative technical reference for every Keylight parameter
- **Video Copilot — "Greenscreen Workflow" tutorials by Andrew Kramer** — practical AE-based workflow demonstrations
- **Surfaced Studio — "The Perfect Key"** — step-by-step tutorial series on the three-step workflow
