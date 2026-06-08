---
title: "Module 7 Quiz: Color Grading"
---

# 🧪 Module 7 Quiz: Color Grading

> 24 questions. Aim for 20/24.

---

### Q1.

Why must VFX compositing operations (Merge/over, blending, defocus) be performed in scene-linear color space rather than log-encoded footage?

A. Scene-linear files are smaller and render faster
B. Only scene-linear math is physically accurate, log encoding compresses values non-linearly, so blending in log produces incorrect color fringing and exposure errors
C. Log footage cannot be read by After Effects or Nuke
D. Scene-linear files have more bit depth than log files

---

### Q2.

Which of the following best describes the purpose of Log encoding in camera footage?

A. To apply a creative look to the footage on set
B. To reduce the dynamic range of the camera to match display output
C. To compress the scene's full linear tonal range into a smaller code value space efficiently, preserving shadow and highlight detail
D. To convert the footage to ACES color space for delivery

---

### Q3.

ACES stands for what?

A. Automatic Color Enhancement System
B. Academy Color Encoding System
C. Advanced Chroma Encoding Standard
D. ACEScg Encoding Specification

---

### Q4.

Which ACES color space is used as the working space for CG rendering and compositing in a film pipeline?

A. ACES2065-1
B. ACEScct
C. ACEScg
D. Output Transform (ODT)

---

### Q5.

What does a 3D LUT do that a 1D LUT cannot?

A. A 3D LUT applies the same transformation to all three color channels simultaneously
B. A 3D LUT maps RGB triplets (input R, G, B) to output RGB triplets, capturing cross-channel color interactions that 1D LUTs (which process each channel independently) cannot
C. A 3D LUT works in 3D space, applying perspective transforms along with color changes
D. A 3D LUT is faster to compute than a 1D LUT

---

### Q6.

In the three-way color corrector, which control primarily affects shadows?

A. Gain
B. Gamma
C. Lift
D. Offset

---

### Q7.

The vectorscope displays what information about an image?

A. The luminance (brightness) of each color channel in waveform format
B. The distribution of colors (hue and saturation) in a circular color space
C. The frame rate and timecode information of the clip
D. The histogram of pixel values across the full tonal range

---

### Q8.

The "skin-tone line" on a vectorscope refers to what?

A. A skin-colored area that should be placed in the center of the vectorscope
B. A consistent angular position on the vectorscope where human skin tones cluster, regardless of race or ethnicity, used for shot matching
C. The line between the shadow and highlight zones in the three-way corrector
D. The LUT path applied specifically to skin tones in a secondary correction

---

### Q9.

A compositor working on a VFX shot for *Oppenheimer* needs to deliver the final composite. In what color space should the delivery be made to allow the colorist maximum flexibility for the creative grade?

A. In a baked, Rec.709-converted file with the creative look already applied
B. In a log-encoded file (e.g., ARRI LogC or ACEScct) close to the camera's native color space, neutral, with no creative grade baked in
C. In a 3D LUT-baked file that has been converted to HDR
D. In standard 8-bit JPEG format for maximum compatibility

---

### Q10.

In *Oppenheimer*, the 1920s–30s European physics sequences were distinguished by which color palette?

A. Warm amber-gold with crushed blacks
B. High saturation, vivid primary colors
C. Cold, intellectual blue-gray tones with reduced saturation
D. Pure black and white (literal B&W photography)

---

### Q11.

What is the "parade scope" and when would a compositor use it?

A. A scope showing color saturation in a circular format, used for skin tone matching
B. A scope displaying R, G, and B waveforms side by side, used to identify color imbalances and match exposure across shots
C. A real-time preview of how the image will look on a cinema projector
D. A histogram showing the distribution of pixel luminance values

---

### Q12.

A compositor receives a CG render intended for an ACES pipeline but applies a Rec.709 display transform to it instead of the correct ACES output transform. What is the likely result?

A. No visible difference, Rec.709 and ACES output transforms are identical for standard dynamic range
B. The render will appear too dark because Rec.709 applies more gamma
C. The render will be incorrectly color-managed, colors will be shifted, contrast altered, and the image will not match the plate correctly
D. The render will be overexposed because ACES has a wider gamut

---

### Q13.

Which correction type targets a specific color range within an image rather than the entire image?

A. Primary correction
B. Global correction
C. Secondary correction
D. Tonal correction

---

### Q14.

In a professional color workflow, what is a "qualifier" in DaVinci Resolve or similar tools?

A. A LUT that qualifies the image for delivery to a specific display format
B. A color sampling tool that isolates a specific hue/saturation range in the image for secondary correction
C. A node that qualifies whether the image meets technical delivery specifications
D. A rating system for the quality of the grade applied to a shot

---

### Q15.

When matching shots in a sequence, which is the recommended first step?

A. Match the skin tones using the vectorscope
B. Apply the creative LUT to both shots simultaneously
C. Match the black levels (lift/gain for shadows) so the darkness of both shots is consistent
D. Match the saturation using the Hue vs Saturation curve

---

### Q16.

What is the difference between a "technical grade" (done by the compositor) and a "creative grade" (done by the colorist)?

A. The technical grade is done in DaVinci Resolve; the creative grade is done in Nuke
B. The technical grade matches elements to each other for a neutral, accurate composite; the creative grade applies the director/DP's intended look to the full sequence
C. The technical grade applies a creative look; the colorist corrects technical errors
D. There is no difference, both perform the same color correction operations

---

### Q17.

Which film stock was *Oppenheimer* shot on, and where was it processed?

A. Fujifilm Eterna 500T; processed at Technicolor in London
B. Kodak Vision3 500T; processed at Fotokem in Burbank
C. ARRI RAW; processed digitally at Company 3 in New York
D. IMAX digital 65mm; processed at ILM's digital facility

---

### Q18.

The ACES Output Transform (ODT) is used for what purpose?

A. To input camera footage into the ACES pipeline
B. To convert the ACES working space (ACEScg) to a specific display format (Rec.709, P3, HDR10)
C. To apply the creative look to footage before compositing
D. To convert between different log encoding standards

---

### Q19.

A compositor compares two adjacent shots using the vectorscope. Shot A's skin tones cluster slightly more toward the green axis than Shot B's skin tones. Which primary correction would bring them into alignment?

A. Increase the green channel in Shot A
B. Reduce the green channel in Shot A and/or increase the red channel slightly to push skin tones toward the correct skin-tone line angle
C. Desaturate Shot A entirely
D. Apply a creative LUT to Shot B to match Shot A

---

### Q20.

What color space does a CG rendering application (such as Arnold or RenderMan) render into by default for an ACES pipeline?

A. Rec.709 (sRGB)
B. Log (proprietary to the renderer)
C. Scene-linear (ACEScg for an ACES pipeline)
D. Display-referred HDR (PQ/HLG)

---

### Q21.

A "Power Window" in a color grading tool is analogous to what in After Effects?

A. A preset look applied as a LUT
B. A shape mask or roto matte used to isolate a region for secondary correction
C. The Gain wheel in the three-way color corrector
D. A color sampler tool equivalent to the eyedropper

---

### Q22.

Why does the scene-linear working space require 16-bit or 32-bit floating point storage rather than 8-bit integer?

A. 8-bit integers store values in log, which is incompatible with scene-linear
B. Scene-linear represents the full physical range of scene luminance (which can be 0 to hundreds or thousands of units); 8-bit integers (0–255) cannot store this range without severe banding and clipping
C. Nuke and After Effects only accept 32-bit files for color-correct compositing
D. The ACES specification mandates 32-bit storage for all working files

---

### Q23.

The "Hue vs Saturation" secondary correction curve allows what specific adjustment?

A. Shifting a specific hue to a different hue (e.g., green grass to yellow grass)
B. Reducing or increasing the saturation of pixels that fall within a specific hue range (e.g., desaturating only the reds in a scene)
C. Adjusting the contrast within a specific hue range
D. Applying a LUT to a specific hue

---

### Q24.

In *Oppenheimer*, the Trinity test explosion's bright white flash was a deliberate creative decision. Which of the following best describes its VFX design intention?

A. It represented a technical error in the film stock that was preserved for authenticity
B. It was designed to show the audience the experience described by the scientists a light beyond what any camera could capture by intentionally overexposing to pure white
C. The flash was created digitally in post using a Trapcode Particular simulation
D. It was mandated by the MPAA rating board to reduce the violence of the explosion imagery

---

## 🎯 Answers + Explanations

**Q1 B.** Log encoding applies a non-linear curve that compresses values. When you blend two log-encoded images, the math is physically incorrect the resulting blend does not correspond to what mixing two real-world light sources would look like. Scene-linear preserves the physical proportionality of light.

**Q2, C.** Log encoding compresses the wide linear range of scene data into a smaller code value space. This preserves highlight and shadow detail that would be clipped in a standard display-referred encoding, while fitting into practical storage bit depths (10–12 bit).

**Q3, B.** ACES = Academy Color Encoding System. Developed by the Academy of Motion Picture Arts and Sciences to standardize color across the global film and television industry.

**Q4, C.** ACEScg is the linear, wide-gamut working space used for CG rendering (Arnold, RenderMan, V-Ray all render into ACEScg by default in an ACES pipeline) and compositing (Nuke, Katana).

**Q5 B.** A 1D LUT processes each channel independently (the output R depends only on the input R). A 3D LUT maps entire RGB triplets so the output R can depend on input R, G, and B together. This allows cross-channel color interactions (warm shadows that affect all three channels simultaneously).

**Q6, C.** In the three-way corrector: Lift = shadows, Gamma = midtones, Gain = highlights. Lift shifts the shadow/black point.

**Q7, B.** The vectorscope displays the hue and saturation distribution in a circular format. Hue = angle, Saturation = distance from center. Used for color balance verification and shot matching.

**Q8 B.** Human skin tones regardless of ethnicity, cluster along a consistent angular position on the vectorscope (approximately 10:30 on the clock face). This skin-tone line is used to match skin color across shots.

**Q9, B.** A compositor should deliver in log (neutral, close to the camera's original color) without any creative look. The colorist needs the raw compositing output to apply the creative grade globally. A baked look constrains the colorist.

**Q10, C.** The 1920s–30s European physics flashback sequences in *Oppenheimer* used cold, intellectual blue-gray tones with reduced saturation to convey the pre-war era of theoretical physics in Europe.

**Q11, B.** The parade scope displays R, G, and B waveforms side by side. It reveals color imbalances (if the R waveform is higher than G and B in neutral areas, the image has a red cast) and allows precise matching of exposure and color between shots.

**Q12, C.** Applying a Rec.709 display transform to ACEScg content produces incorrect colors. The two spaces have different white points, gamuts, and tone mapping curves. The image will be color-shifted and will not match the plate.

**Q13, C.** Secondary correction targets a specific color range or region. Primary correction affects the entire image globally.

**Q14, B.** A qualifier samples a color range from the image (by hue, saturation, and luminance values) and creates a mask isolating those pixels. The secondary correction is then applied only to those pixels.

**Q15, C.** The recommended first step in shot matching is to match the black levels. If the darkness of the two shots isn't consistent, all subsequent matching steps will be working against an unstable foundation.

**Q16, B.** The technical grade is the compositor's job: matching individual elements to each other for accuracy. The creative grade is the colorist's job at the DI: applying the director and DP's intended look to the finished sequence.

**Q17 B.** *Oppenheimer* was shot on Kodak Vision3 500T 65mm/IMAX film, processed at Fotokem in Burbank the same facility used by Nolan for most of his recent films.

**Q18 B.** The Output Transform (ODT) converts from the ACES working space (ACEScg) to the output display format Rec.709 for broadcast, DCI-P3 for cinema, HDR10 or Dolby Vision for streaming.

**Q19, B.** Reducing the green channel and slightly boosting red in Shot A will move the skin tones toward the correct skin-tone line angle. The vectorscope's skin-tone line is used to verify the correction.

**Q20, C.** CG renderers configured for an ACES pipeline render into ACEScg (scene-linear, wide gamut). This is the correct working space for film compositing.

**Q21 B.** A Power Window in DaVinci Resolve is a shape-based secondary a region mask (similar to AE's shape masks) used to confine a color correction to a specific area of the frame.

**Q22, B.** Scene-linear values represent physical luminance directly. The real-world dynamic range of a scene (from deep shadow to bright sky) spans values from near 0 to hundreds or thousands of scene-referred units. 8-bit integers (0–255) cannot represent this range without severe quantization errors and banding.

**Q23, B.** Hue vs Saturation reduces or increases saturation within a specific hue range. A common use: desaturate only the red in a too-vivid shirt without affecting other colors.

**Q24 B.** Nolan and colorist Natasha Leonnet designed the Trinity flash to blow out to pure white representing the experience of light beyond photographic capture, as described by the Manhattan Project scientists. This was a creative, designed choice, not an accident.
