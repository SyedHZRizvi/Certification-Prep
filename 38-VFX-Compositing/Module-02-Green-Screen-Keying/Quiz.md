---
title: "Module 2 Quiz: Green Screen Keying"
---

# 🧪 Module 2 Quiz: Green Screen Keying

> 24 questions. Aim for 20/24 before proceeding.

---

### Q1.

Why do digital cameras produce cleaner green screen keys than blue screen keys, all else being equal?

A. Green is a more neutral color and is less likely to cause spill
B. The Bayer color filter array on digital sensors has twice as many green photosites as red or blue
C. Green screen paint is brighter than blue screen paint by industry standard
D. Blue has a shorter wavelength that interferes with the camera's autofocus system

---

### Q2.

In the three-step key workflow, what is the PRIMARY purpose of the rough key (Step 1)?

A. To produce a perfect edge with no spill
B. To clip the matte so foreground is pure white and background is pure black
C. To get the matte approximately correct as a starting point
D. To match the color of the subject to the background

---

### Q3.

When viewing the Screen Matte in Keylight, what do white, black, and gray pixels represent respectively?

A. Background, foreground, transition zone
B. Foreground (opaque), background (transparent), semi-transparent edge/transition
C. Correct key, over-keyed, under-keyed
D. Highlight, midtone, shadow

---

### Q4.

Which Keylight parameter primarily controls how aggressively the key separates the backing color from the foreground?

A. Screen Balance
B. Screen Shrink/Grow
C. Screen Gain
D. Clip Black

---

### Q5.

Why is aggressive use of Clip Black and Clip White in Keylight considered a problem?

A. It increases the file size of the rendered output
B. It can make the composite appear oversaturated
C. It removes the semi-transparent pixel information at edges, producing a hard, jagged, visibly composited edge
D. It reverses the alpha channel

---

### Q6.

A compositor sees a green tinge along the edges of an actor's white shirt in a keyed composite. What is this effect called?

A. Edge contamination
B. Matte choking
C. Color spill
D. Luminance roll-off

---

### Q7.

Which After Effects effect is the current preferred tool for removing green spill from keyed subjects, introduced in AE CC 2014?

A. Keylight Screen Colour Correction only
B. Spill Suppressor
C. Advanced Spill Suppressor
D. Hue/Saturation channel isolation

---

### Q8.

What is the "light wrap" technique designed to simulate?

A. The way a soft box wraps light around a subject in studio
B. The natural scattering of background light around the edge of a foreground subject in a composite
C. A glow effect applied to practical lights in the scene
D. The lens vignette that occurs with wide-angle lenses

---

### Q9.

A difference matte requires which of the following to function correctly?

A. A greenscreen backing and a two-point tracker
B. A clean plate shot from the identical camera position with the same lighting
C. A Keylight instance set to Screen Difference mode
D. A Rotobrush session on the clean background

---

### Q10.

When keying hair against a greenscreen, why is a multi-instance Keylight approach sometimes used?

A. To double the processing speed by splitting the calculation
B. To key the body and hair separately with different Screen Gain/Balance settings, then combine the mattes
C. Because Keylight cannot key hair at all with a single instance
D. To apply light wrap to the hair region independently

---

### Q11.

A transparent wine glass filmed in front of a greenscreen is keyed. What is the correct approach to the glass area in the composite?

A. The glass should be completely opaque white in the matte to prevent any transparency
B. The glass's semi-transparency should be preserved, allowing some of the new background to show through
C. The glass should be removed from the shot and replaced with a CG wine glass
D. The glass area should be treated with a solid garbage matte

---

### Q12.

Which color science reason explains why blue screen is sometimes preferred for nighttime or dark interior scenes?

A. Blue is darker and blends more naturally with black backgrounds
B. The camera needs less light to achieve separation on blue screens
C. Blue backing requires less fill light to achieve even illumination, and blue spill is less visible in dark environments than green spill
D. Night scenes are always shot in log format, which favors blue screen sampling

---

### Q13.

The Keylight parameter "Screen Balance" controls what?

A. The overall brightness of the greenscreen backing
B. The ratio between the two non-key color channels used in the keying calculation
C. The balance between the foreground color correction and the background color correction
D. The mix between the Keylight alpha and the original layer alpha

---

### Q14.

A compositor notices that a keyed subject has motion-blurred edges (a fast-moving hand) that look wrong in the composite. What is the most likely mistake?

A. The compositor used the wrong Screen Colour sample
B. Clip Black/Clip White were applied too aggressively, removing the semi-transparent blur pixels
C. The light wrap was applied with too large a Blur radius
D. The difference matte was used instead of Keylight

---

### Q15.

In what order should the three steps of the professional key be applied?

A. Fine → Refined → Rough
B. Refined → Rough → Fine
C. Rough → Refined → Fine
D. Any order — they are independent operations

---

### Q16.

Why is it important to set the Screen Colour sample from a neutral mid-tone of the greenscreen rather than the brightest hotspot?

A. The brightest areas of the screen are always overexposed and should be ignored
B. Sampling a hotspot biases the keying algorithm toward overexposure values, which may result in a loose key on mid-tones of the backing
C. Keylight does not accept bright colors as valid Screen Colour samples
D. Mid-tones have better chroma accuracy in the Bayer demosaic

---

### Q17.

Which After Effects effect is most appropriate for making the semi-transparent edge pixels of a keyed subject match the color temperature of a warm, golden-hour background?

A. Keylight → Screen Shrink/Grow
B. Keylight → Edge Colour Correction (Foreground Colour Correction)
C. Gaussian Blur
D. Spill Suppressor

---

### Q18.

What does "Screen Pre-Blur" in Keylight do?

A. Blurs the greenscreen footage before the keying calculation, useful for noisy footage but at the cost of fine edge detail
B. Blurs the resulting composite for a defocus effect
C. Pre-blurs the Screen Colour sample to select a range of colors rather than a single color
D. Smooths the alpha channel after the key is calculated

---

### Q19.

A compositor pulls a Keylight key and finds the foreground subject's face is partially transparent (gray in the Screen Matte view). Which action is LEAST likely to help?

A. Adjusting Screen Balance
B. Adjusting Screen Gain
C. Using Clip White to force the face to pure white
D. Sampling a different Screen Colour point in the backing

---

### Q20.

When was Keylight 1.2 originally developed, and by which company?

A. 1998, by Adobe Systems
B. 2004, by The Foundry
C. The 1990s, by The Computer Film Company (now part of Framestore)
D. 2010, by Maxon

---

### Q21.

Which blend mode on a background pre-comp (blurred) is most commonly used to create a light wrap effect?

A. Multiply
B. Overlay
C. Screen or Add
D. Difference

---

### Q22.

A VFX supervisor notes that a keyed plate has "floating blacks" in the background areas. What does this mean for the compositor?

A. The alpha channel is inverted and must be corrected before compositing
B. The dark areas of the background flicker in brightness between frames, making a clean consistent matte difficult to achieve
C. The tracking markers are too dark to use for 3D camera solving
D. The greenscreen is unevenly lit and hotspots are appearing in the matte

---

### Q23.

What is the function of a "garbage matte" in a keying workflow?

A. A secondary Keylight instance applied to difficult edge areas
B. A rough mask drawn around the subject to exclude areas outside the subject from the keying process
C. A technique for removing noise from the greenscreen backing
D. The Screen Matte view when the key produces poor results

---

### Q24.

An actor's outfit is primarily blue. For this shot, which backing would cause the least keying problems?

A. A standard green screen — blue wardrobe can conflict with blue screen but not green screen
B. A blue screen — blue wardrobe matches the backing and simplifies the key
C. A red screen — used specifically for blue wardrobe
D. No backing is needed for blue wardrobe

---

## 🎯 Answers + Explanations

**Q1 — B.** The Bayer sensor array has 2 green photosites for every 1 red and 1 blue. This gives green more spatial resolution and sampling accuracy, producing cleaner separation on green screens.

**Q2 — C.** The rough key establishes the approximate matte. Edge quality and spill are addressed in steps 2 and 3. Trying to perfect the edge in step 1 is counterproductive.

**Q3 — B.** In the Screen Matte view: white = foreground (fully opaque), black = background (fully transparent), gray = semi-transparent transition zone (edges, hair, motion blur).

**Q4 — C.** Screen Gain controls the aggressiveness / sensitivity of the keying algorithm. Higher values key more; lower values key less.

**Q5 — C.** Clip Black and Clip White force pixels to binary 0 or 1 values. This destroys the gray semi-transparent pixels at edges and on motion-blurred subjects, creating a hard, artificial-looking edge.

**Q6 — C.** Color spill (or greenscreen spill) is the contamination of the foreground subject by green light reflected from the backing. It appears as a color tinge on edges.

**Q7 — C.** The Advanced Spill Suppressor (introduced in AE CC 2014) is the preferred tool — it analyzes the background color to inform its desaturation of the spill, producing more naturalistic results than the basic Spill Suppressor.

**Q8 — B.** Light wrap simulates the physical phenomenon where light from a bright background scatters around the edges of a foreground subject, blending them together. It is the primary technique for making a composite look photographic.

**Q9 — B.** A difference matte requires a clean plate from the exact same camera position with the same lighting. If anything moved or changed, the difference calculation fails.

**Q10 — B.** Hair typically requires different Keylight settings (especially Screen Gain and Balance) than the body. Applying two Keylight instances to separate regions of the image, then combining the mattes, gives more precise control.

**Q11 — B.** The glass's semi-transparency is physically accurate and desirable. The new background should show through the glass as it would through a real glass in front of a real background.

**Q12 — C.** Blue backing requires less light for even illumination in dark scenes, and blue spill is generally less objectionable than green spill in dark, nighttime color grades.

**Q13 — B.** Screen Balance adjusts the ratio between the two non-key channels in the color difference keying calculation. Adjusting this can clean an uneven matte by biasing the calculation.

**Q14 — B.** Motion blur creates semi-transparent pixels. Clip Black/Clip White forces these to binary values, destroying the blur. The result is a hard, cut-out edge where the blur was.

**Q15 — C.** Rough → Refined → Fine. Each step builds on the previous. Attempting to fine-tune before the matte is approximately correct wastes time.

**Q16 — B.** The brightest areas of a greenscreen (hotspots) have different chroma characteristics than mid-tones. Sampling a hotspot biases the algorithm and may cause it to miss correctly exposed mid-tone areas of the backing.

**Q17 — B.** Keylight's Edge Colour Correction (and Foreground Colour Correction) specifically targets the color of semi-transparent edge pixels. This is the correct tool to warm or cool the subject's edge to match the background light.

**Q18 — A.** Screen Pre-Blur blurs the image before the keying calculation. This smooths noisy footage and can produce a cleaner matte, but at the cost of fine edge detail (hair, thin strands).

**Q19 — C.** Clip White forces the matte to white and destroys edge detail. It is not the right tool for face transparency — the correct approaches are Screen Balance, Screen Gain, or re-sampling the Screen Colour. Clip White applied to a gray face will "fix" the transparency but destroy edges.

**Q20 — C.** Keylight was developed in the 1990s by The Computer Film Company (CFC), a UK post house that later became part of Framestore. The Foundry acquired the technology.

**Q21 — C.** Screen or Add blend mode is used for light wrap because these modes add the blurred background color to the edge areas of the subject, simulating scattered light.

**Q22 — B.** Floating blacks is a sensor artifact causing the dark areas to fluctuate in brightness between frames. This makes consistent matte generation difficult because the background values shift.

**Q23 — B.** A garbage matte is a rough mask drawn outside the subject to exclude irrelevant areas (lighting rigs, the edge of the greenscreen backing) from the keying calculation. This speeds processing and prevents false keys.

**Q24 — A.** Blue wardrobe conflicts with blue screen — the algorithm cannot distinguish the wardrobe from the backing. Green screen is the correct choice when the subject wears blue.
