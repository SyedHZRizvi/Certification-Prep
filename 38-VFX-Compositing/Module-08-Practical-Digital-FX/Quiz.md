---
title: "Module 8 Quiz: Practical Digital FX"
---

# 🧪 Module 8 Quiz: Practical Digital FX

> 24 questions. Aim for 20/24.

---

### Q1.

What is the core principle of Gareth Edwards' practical/digital VFX philosophy?

A. Avoid all digital VFX and use only practical effects
B. Always shoot something real, even if small, and build digital elements around the physical photography
C. Build entire environments digitally first, then composite actors into them
D. Use VFX exclusively for hero creatures, never for environments

---

### Q2.

A "digital set extension" (DSX) accomplishes what?

A. Creates an entirely digital set for actors to be composited into
B. Expands a physical set beyond its actual physical boundaries using digital elements
C. Replaces a physical set with a greenscreen for full digital replacement
D. Extends the duration of a scene using additional footage

---

### Q3.

The most effective integration technique for a digital set extension at distance is:

A. Making the extension extremely detailed and sharp to show VFX quality
B. Adding atmospheric haze, saturation falloff, and reduced contrast at distance to simulate depth
C. Using the same color saturation and sharpness as the foreground elements
D. Adding hard shadows from the extension onto the foreground elements

---

### Q4.

What is the fastest and most accurate wire removal workflow when a clean plate is available?

A. Manually painting over the wire area using reference frames from the same shot
B. Tracking or aligning the clean plate to the wire shot, then painting/cloning the clean plate over the wire area
C. Using Content-Aware Fill on the entire frame
D. Applying a heavy Blur effect to soften the wire out of frame

---

### Q5.

When no clean plate was shot for wire removal, which After Effects feature provides an alternative automated solution?

A. Rotobrush 2.0
B. Keylight set to wire color
C. Content-Aware Fill applied to a roto-masked wire region
D. Warp Stabilizer with the wire region excluded

---

### Q6.

The film *1917* (2019, directed by Sam Mendes) appeared to be shot in a single continuous take. What VFX technique made this possible?

A. The film was genuinely shot in a single continuous take without VFX
B. Digital stitching, separately shot scenes were composited together at carefully chosen transition points
C. The LED Volume stage was used to simulate continuous environments
D. Blender simulations were used to fill gaps between shots

---

### Q7.

What is "beauty work" in a VFX context?

A. Adding decorative visual effects (sparkles, glows) to a scene
B. Digital retouching of talent appearances, blemish removal, skin smoothing, under-eye correction, de-aging
C. The final color grade applied by the colorist to make footage look attractive
D. Applying a beauty filter LUT to the entire sequence

---

### Q8.

VFX studio Framestore received the Academy Award for Best Visual Effects for which film that featured predominantly invisible VFX?

A. Avengers: Endgame (2019)
B. The Dark Knight (2008)
C. Gravity (2013)
D. Dunkirk (2017)

---

### Q9.

In a sky replacement composite, the foreground color temperature doesn't match the new sky (the new sky is warm/golden but the foreground looks overcast and cool). What is the most important correction step?

A. Replace the foreground with a completely different plate
B. Apply a warm color correction to the foreground to match the ambient light that the golden sky would cast on the scene
C. Desaturate the sky replacement to match the cool foreground
D. Apply a Gaussian blur to the sky replacement to soften the mismatch

---

### Q10.

Which of the following is the primary "tell" that a set extension was poorly integrated?

A. The extension contains too many buildings
B. The extension is sharper than the foreground with no atmospheric depth falloff
C. The extension has a different frame rate than the plate
D. The extension was built in Blender instead of Maya

---

### Q11.

De-aging VFX (as in *The Irishman* or *Captain America: Civil War*) requires which combination of techniques?

A. Simply applying a blur and reducing contrast to simulate youth
B. Reference scans of the actor at the younger age + machine learning or manual shape/texture transfer + intensive 2D cleanup per frame in Nuke
C. Replacing the actor's face with a younger lookalike's face using face-swap AI
D. Key-framing facial parameters using After Effects puppet pins

---

### Q12.

What VFX technique was used to simulate the weightlessness in *Gravity* (2013)?

A. Real zero-gravity shooting on the ISS
B. Underwater photography with digital cleanup
C. A combination of wire rigs (removed in post), LED lighting rigs, and CG elements integrated by Framestore
D. Slow-motion photography with speed ramping

---

### Q13.

A director wants to shoot a period film in a modern city. Which practical/digital integration approach best follows the Gareth Edwards philosophy?

A. Build the entire period environment in CG and composite actors into a digital world
B. Find real period-appropriate locations and use digital extensions only where necessary
C. Use a greenscreen for all exterior shots and replace the background entirely
D. Use the LED Volume for all exterior shots

---

### Q14.

In the wire removal workflow using a clean plate in Nuke, which node is most commonly used for the frame-by-frame paint/clone work?

A. Grade node with Blackpoint set to wire color
B. Keyer node
C. RotoPaint node (Nuke's paint tool, including clone and smear)
D. Transform node

---

### Q15.

What is a "digital crowd extension"?

A. A technique for extending the duration of a crowd scene
B. Adding CG or multiplied/duplicated crowd elements to filmed extras to populate a scene beyond what was physically available on set
C. Replacing a real crowd with digital characters because the crowd was too expensive to hire
D. A copyright-free stock footage crowd composited into the background

---

### Q16.

Atmospheric haze in a set extension serves what compositional purpose?

A. It adds drama by obscuring the quality of the digital work
B. It simulates the real-world effect of light scattering through air at distance, reducing contrast and saturation, making distant elements appear physically integrated with the plate
C. It improves render performance by reducing visible texture detail
D. It is required by ACES color management standards for set extensions

---

### Q17.

In a sky replacement composite, "light wrap" is applied at the interface between the foreground subject and the new sky. What does this simulate?

A. The way clouds in the sky cast hard shadows on the foreground
B. The physical scattering of sky light around the edges of foreground subjects, integrating them with the new sky illumination
C. The reflection of the sky in windows and reflective surfaces in the scene
D. The vignette that occurs at the edges of wide-angle lenses

---

### Q18.

The *Monsters* (2010) film directed by Gareth Edwards was notable for what VFX achievement?

A. It was the first film to use the LED Volume technology
B. It was entirely produced using practical effects with no digital VFX
C. A small team (primarily Edwards himself) composited feature-film-quality creature effects into real-world location footage using consumer VFX software
D. It pioneered Nuke's deep compositing workflow for creature integration

---

### Q19.

What is the "digital stitch" technique used in *1917* at transition points between separately shot scenes?

A. Using roto mattes to blend two different scenes together over several frames
B. Finding frame moments where both scenes could plausibly match (usually dark areas, motion blur, or transitions through objects) and compositing one into the other seamlessly
C. Applying Warp Stabilizer across the cut to smooth the transition
D. Using the Mandalorian LED Volume to shoot both scenes simultaneously from different angles

---

### Q20.

When does a compositor perform beauty/cleanup work vs when does a dedicated paint artist perform it?

A. There is no distinction, all VFX artists do both
B. A compositor does light cleanup integrated into the comp workflow; a dedicated paint artist handles heavy, shot-wide cleanup work that requires specialized paint expertise
C. Compositors never do cleanup, it is always done by roto artists
D. Paint artists handle all VFX work; compositors only do color grading

---

### Q21.

What fundamental production decision, made by the VFX supervisor on set, reduces wire removal time in post most significantly?

A. Using thinner, invisible wire instead of standard wire
B. Ensuring a clean plate (the set without the wire/rig) is shot for every wire-rigged setup
C. Painting the wires in a color that is easy to key
D. Using a different camera angle that avoids the wire in frame

---

### Q22.

The *Revenant* (2015) used digital breath steam in warm-temperature shooting days. Which After Effects technique most practically replicates this effect?

A. Rotobrush on the actor's mouth area combined with a Trapcode Particular breath steam element
B. A dedicated greenscreen shoot of breath steam, keyed and composited over the footage
C. A fractal noise layer set to Screen blend mode with animated upward offset
D. Either A or B are valid professional approaches; A for tight shots with mouth detail, B for wider integration

---

### Q23.

Which of the following is NOT a typical category of invisible VFX work?

A. Sky replacement on exterior location shots
B. Wire removal from stunt rigging
C. 200-foot digital explosion hero sequence
D. Atmospheric depth enhancement of a distant skyline

---

### Q24.

In *Rogue One: A Star Wars Story*, director Gareth Edwards and ILM used practical explosions (in miniature) combined with digital starships and troops. What compositing principle does this exemplify?

A. It is more economical to use practical miniatures than to build full CG environments
B. Physical elements (real miniature explosions, real smoke, real fire) provide the photographic authenticity that pure CG cannot fully replicate, while digital elements provide scale and specificity
C. ILM required practical elements for legal reasons related to the Star Wars franchise
D. The director preferred practical effects for aesthetic reasons, regardless of visual quality

---

## 🎯 Answers + Explanations

**Q1 B.** Edwards' philosophy: shoot real things (locations, practical elements) and build digital around them. *Monsters* is the purest expression of this shot on real locations in Mexico, with digital creatures added in post.

**Q2, B.** A set extension expands the physical set. The actors and the physical set are real; the digital environment beyond the physical boundaries is the extension.

**Q3 B.** Atmospheric depth haze, saturation falloff, reduced contrast at distance, is the most important integration technique. Real-world atmospherics always reduce contrast and saturation with distance.

**Q4, B.** With a clean plate, the workflow is: track/align the clean plate to the wire shot → paint or clone the clean plate's clean pixels over the wire pixels. This is fast, accurate, and preserves the real background texture.

**Q5, C.** AE's Content-Aware Fill (2019+) can intelligently fill a roto-masked region by analyzing surrounding frame content. It is less precise than a clean plate but automated.

**Q6 B.** *1917* was shot in separate scenes over many days. DNEG composited these scenes together at carefully planned digital transition points dark frames, through tunnels, behind objects, to create the illusion of a single continuous take.

**Q7, B.** Beauty work is digital retouching of talent: blemish removal, skin smoothing, under-eye correction, tattoo removal, de-aging. It is the VFX equivalent of portrait retouching in photography.

**Q8, C.** *Gravity* (2013) won the Oscar for Best Visual Effects. Framestore built over 80% of the film's visual world, making it one of the highest proportions of VFX to total runtime in Oscar history.

**Q9, B.** The foreground must receive a warm color correction to match the ambient light from the golden sky. Mismatched color temperature between sky and foreground is the most common sky replacement error.

**Q10 B.** No atmospheric depth a sharp, high-contrast extension with the same saturation as the foreground, immediately reads as incorrect. Real distance always reduces sharpness, contrast, and saturation.

**Q11, B.** Professional de-aging requires: reference scans (archival footage or directed photography of the younger actor), a machine learning or manual facial texture transfer workflow, and intensive 2D cleanup in Nuke per shot.

**Q12, C.** *Gravity* used wire rigs to position actors (wires removed in post by Framestore), LED lighting rigs for space environment illumination, and CG environmental elements. The weightlessness was a combination of wire performance and Framestore's digital integration.

**Q13, B.** The Edwards philosophy: find real period locations and use digital extensions only where necessary. A real period street corner with a modest digital extension of the skyline is more convincing than a fully digital environment.

**Q14, C.** The RotoPaint node in Nuke is the professional paint and clone tool. It provides frame-by-frame clone stamping from the clean plate onto the wire region.

**Q15, B.** Digital crowd extension: taking the filmed extras and multiplying/duplicating them digitally (or adding CG crowd agents) to fill a larger space than was available on the day.

**Q16 B.** Atmospheric haze simulates the real-world physics of light scattering through air particles at distance. It is not an artistic choice it is a physical reality that compositors must replicate for integration.

**Q17 B.** Light wrap simulates how sky light scatters around the edges of foreground subjects. When a new sky is composited, its light should appear to wrap around the foreground edges this is what ties the two elements together.

**Q18, C.** Edwards (with co-director Jasper James and a very small team) used consumer-grade VFX software (After Effects, Photoshop) to composite feature-quality creature effects into real Mexico City location footage. It proved a professional feature was achievable with minimal resources.

**Q19 B.** The *1917* stitch finds frame moments a character moving through a doorway, a flash of light, a motion-blurred pan, where both separately shot scenes can be seamlessly joined in the composite.

**Q20, B.** This is a practical workflow division. Light cleanup integrated into the compositing workflow is done by the compositor. Heavy, shot-wide cleanup requiring dedicated paint expertise is done by a specialized paint/cleanup artist.

**Q21 B.** The clean plate a take of the set without the wire/rig in frame, is the single most important on-set data for wire removal. Without it, post work takes significantly longer.

**Q22, D.** Both A (Rotobrush + Particular breath steam element) and B (keyed breath steam element) are valid professional approaches. Tighter shots with mouth close-up detail need A for precise integration; wider shots where the steam is less detailed work with B.

**Q23 C.** A 200-foot digital explosion hero sequence is the opposite of invisible it is a spectacle effect. The others (sky replacement, wire removal, atmospheric enhancement) are all invisible effect categories.

**Q24 B.** Physical elements provide photographic authenticity real smoke moves like real smoke, real fire has real light, real explosions have real shockwaves. CG elements provide the scale, specificity, and control that practical cannot. Combining them produces results that are more believable than either alone.
