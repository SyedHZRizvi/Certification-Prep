---
title: "Practice Exam 2: Modules 6–10"
---

# 🧪 Practice Exam 2: Modules 6–10

**30 questions · 60 minutes · Take after completing Modules 6–10**

---

### 1.

In Nuke, what is the fundamental paradigm for organizing image processing operations?

A. A timeline with layers stacked vertically, similar to After Effects
B. A directed acyclic graph (DAG) of connected processing nodes
C. A flat list of effects applied in sequence to a single image stream
D. A spreadsheet of operations linked to a render engine

---

### 2.

The Nuke "Merge" node's "over" operation is mathematically expressed as:

A. A × B
B. A − B
C. A + B × (1 − alpha_A)
D. |A − B|

---

### 3.

Why must compositing operations be performed in scene-linear color space rather than log-encoded footage?

A. Log footage has a lower bit depth than scene-linear and loses quality during compositing
B. Only scene-linear math is physically correct, log encoding is non-linear, causing incorrect blending and color fringing
C. After Effects and Nuke cannot import log-encoded footage directly
D. Scene-linear has wider color gamut than log encoding

---

### 4.

ACES stands for what, and which organization developed it?

A. Advanced Color Enhancement System, developed by Adobe
B. Academy Color Encoding System, developed by the Academy of Motion Picture Arts and Sciences
C. Automatic Chroma Encoding Standard, developed by The Foundry
D. Adaptive Color Export System, developed by ARRI

---

### 5.

In *Oppenheimer* (2023), the cold, intellectual blue-gray color palette used for which sequences was designed by colorist Natasha Leonnet?

A. The Manhattan Project / New Mexico sequences
B. The Trinity test sequences
C. The 1920s–30s European physics flashback sequences
D. The 1954 Senate hearing sequences

---

### 6.

The "skin-tone line" on a vectorscope is used for what purpose in shot matching?

A. Selecting the correct secondary qualifier to isolate skin tones
B. Verifying that human skin tones cluster at the correct consistent angle, used to match skin color accurately between shots
C. Calibrating the monitor's white point for accurate skin tone display
D. Applying the correct LUT for skin tone reproduction

---

### 7.

Which of the following correctly describes the Gareth Edwards practical/digital VFX philosophy, as demonstrated in *Monsters* (2010)?

A. Replace all location footage with CG environments for full creative control
B. Always shoot something real even small-scale real elements and build digital VFX around the photographic reality
C. Use practical effects exclusively and avoid digital VFX for authentic-looking films
D. Shoot actors against greenscreens, then composite them into entirely digital environments

---

### 8.

In wire removal post-production work, which on-set action most significantly reduces the time and effort required in post?

A. Using thin, colored wire that is easier to rotoscope
B. Ensuring a clean plate (set without the wire/rig) is shot for every wire-rigged setup
C. Painting the wire in a chroma key color (green or blue) for keying
D. Recording the wire positions in 3D space using a survey instrument

---

### 9.

The "rule of 7 layers" in an explosion composite ensures that which physical property of real explosions is preserved?

A. The explosion reaches a maximum brightness equal to the sun
B. Different physical components (fireball, shockwave, smoke, debris, dust, secondary fire, ambient light) are independently timed and positioned
C. The explosion affects actors in the scene with simulated force
D. The explosion is rendered at 7 times the normal frame rate for slow-motion effects

---

### 10.

For a muzzle flash composite, the environmental light layer should be keyframed to:

A. Remain constant throughout the shot to maintain consistent illumination
B. Peak in brightness during the flash frame and fade out as the flash dissipates
C. Build slowly over 2–3 seconds before the shot is fired
D. Only appear on the frame after the flash, simulating a reflection

---

### 11.

Film grain should be applied to a VFX composite using which method to maintain physical accuracy?

A. Applied individually to each element layer (plate, CG, particles)
B. As a single Adjustment Layer at the top of the comp, overlaying all elements with unified grain
C. Applied to the background plate only, with no grain on VFX elements
D. Not applied at all, digital compositing should have no grain

---

### 12.

In Nuke, the "Shuffle" node is used for what purpose?

A. Rearranging the order of nodes in the Node Graph for organization
B. Extracting specific named channels (R, G, B, A, or any AOV pass) from a multi-channel EXR into standard RGB channels
C. Randomly reordering frames in a sequence for testing
D. Splitting a single image into multiple output streams

---

### 13.

Which AOV pass from a CG render would a compositor use to add the CG element's ground shadow onto the live-action plate?

A. The diffuse_direct pass
B. The Z-depth pass
C. The shadow pass (a matte showing where the CG shadow falls)
D. The normal pass

---

### 14.

Which type of color correction targets a specific hue range within an image rather than the full image globally?

A. Primary correction
B. Secondary correction
C. Technical correction
D. Global correction

---

### 15.

In a professional VFX pipeline, at what stage does the creative color grade (the "look" of the film) occur?

A. During compositing, applied by the compositor to each finished shot
B. At the Digital Intermediate (DI) facility, by the colorist, after all VFX deliverables are complete
C. During principal photography, applied in-camera via a LUT
D. During plate preparation/scanning, before compositing begins

---

### 16.

Blender's Cell Fracture add-on is used in the destruction VFX workflow for what specific purpose?

A. Calculating where structural stress would cause a real building to collapse
B. Dividing a 3D mesh into Voronoi-cell-defined fragments to simulate natural breakage patterns
C. Rendering the destruction simulation as an EXR sequence
D. Importing real-world destruction footage as a reference mesh

---

### 17.

The *Gravity* (2013) VFX production won the Academy Award for Best Visual Effects. Which studio was the primary VFX vendor?

A. ILM
B. Weta Digital
C. Framestore
D. MPC

---

### 18.

A professional VFX demo reel should be what maximum length?

A. 30 seconds
B. 3–5 minutes
C. 120 seconds
D. 10 minutes

---

### 19.

When a supervisor says a composited CG element is "floating," they mean:

A. The CG element has no gravity simulation and moves through the frame incorrectly
B. The CG element lacks correct shadow integration and interactive light, it appears to sit on top of the plate rather than within its world
C. The tracking on the CG element is drifting from frame to frame
D. The CG element's color is too bright for the plate exposure

---

### 20.

ILM was founded in what year and city?

A. 1977, Los Angeles
B. 1975, San Francisco
C. 1983, New York
D. 1969, Seattle

---

### 21.

The IATSE Local 839 (The Animation Guild) covers which VFX industry workers in the United States?

A. Only traditional cel animators
B. VFX artists, animators, concept artists, and storyboard artists
C. Camera operators and on-set VFX supervisors only
D. All post-production workers, including sound editors and colorists

---

### 22.

A 3D LUT differs from a 1D LUT because:

A. A 3D LUT applies transformations in three-dimensional world space
B. A 3D LUT maps RGB triplets (input R, G, B together) to output RGB triplets, capturing cross-channel color interactions
C. A 3D LUT processes images faster than a 1D LUT
D. A 3D LUT can only be applied at the DI stage

---

### 23.

In Nuke, pressing the "1" key while hovering over a node does what?

A. Creates a new connection from the hovered node to Node 1 in the script
B. Connects the hovered node's output to the Viewer's A input for display
C. Sets the hovered node's priority to 1 in the render queue
D. Collapses the hovered node into a Group

---

### 24.

The Nuke Non-Commercial license differs from the full commercial license primarily by:

A. It cannot process images larger than HD (1920×1080)
B. It applies a visible watermark to rendered output and cannot be used commercially
C. It only includes 50% of Nuke's full node library
D. It is limited to 30-day use before requiring renewal

---

### 25.

The "interactive light" technique in AE for a muzzle flash or explosion is applied using:

A. A Point Light in After Effects 3D space near the VFX element
B. A warm-colored Adjustment Layer with a radial mask near the actors, keyframed to match the effect's brightness over time
C. A Glow effect on the VFX element layer set to project onto the scene
D. This effect can only be achieved in Nuke, not After Effects

---

### 26.

Which of the following correctly describes the career difference between a "Compositor" and a "VFX Artist (FX Artist)"?

A. Compositors work in 3D exclusively; VFX Artists work in 2D only
B. Compositors focus on shot finishing and integration (Nuke, 2D); VFX Artists focus on element creation and simulation (Houdini, Blender)
C. Compositors work at major studios; VFX Artists work freelance only
D. Compositors earn less than VFX Artists at equivalent experience levels

---

### 27.

A set extension that appears visually incorrect because the distant elements are as sharp and saturated as the foreground elements is missing what?

A. The correct frame rate for the extended environment
B. Atmospheric depth, haze, saturation falloff, and reduced contrast that simulate real-world atmospheric perspective
C. The correct 3D camera solve to match the plate
D. The shadow catcher material for the ground plane

---

### 28.

Which color space is used as the working space for 3D CG rendering and compositing in an ACES pipeline?

A. ACES2065-1 (archival wide-gamut space)
B. ACEScct (log-encoded ACES for grading)
C. ACEScg (linear, wide-gamut working space)
D. Rec.709 (display-referred)

---

### 29.

The *1917* (2019) film's "single-take" appearance was achieved using which VFX technique?

A. It was genuinely shot as a single continuous take using a specially designed camera
B. Digital stitching, DNEG composited separately shot scenes together at carefully chosen dark or transitional frames
C. The LED Volume was used to continuously change the environment behind the actor as he walked through the frame
D. Time-lapse photography combined with VFX motion compensation

---

### 30.

A VFX reel candidate applies for a compositor position at a major film studio. Their reel shows excellent work but only demonstrates After Effects proficiency. Why is this a likely rejection point?

A. Major film studios do not use After Effects for any work
B. Major film studios (ILM, Weta, Framestore, MPC, Dneg) use Nuke as their primary compositing application, the candidate must demonstrate Nuke proficiency
C. After Effects reels are technically inferior to Nuke reels regardless of quality
D. The studio's HR database cannot accept After Effects project files for review

---

## 🎯 Answer Key (No Cheating!)

```
1.  B
2.  C
3.  B
4.  B
5.  C
6.  B
7.  B
8.  B
9.  B
10. B
11. B
12. B
13. C
14. B
15. B
16. B
17. C
18. C
19. B
20. B
21. B
22. B
23. B
24. B
25. B
26. B
27. B
28. C
29. B
30. B
```
