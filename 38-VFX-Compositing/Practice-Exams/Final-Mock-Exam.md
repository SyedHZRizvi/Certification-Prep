---
title: "Final Mock Exam: VFX & Compositing"
---

# 🎬 Final Mock Exam: VFX & Compositing

**65 questions · 90 minutes · Take 1–2 days before portfolio submission**

---

### 1.

The six phases of a VFX production pipeline are (in order):

A. Bid → Photography → Pre-vis → Post → Matchmove → DI
B. Development/Bid → Pre-Production/Pre-vis → Principal Photography → Post (Matchmove/3D/DMP/Comp) → DI/Color → Delivery
C. Pre-vis → Bid → Photography → Comp → Grade → Delivery
D. Photography → Bid → Pre-vis → 3D → Comp → DI

---

### 2.

An HDR probe on set is photographed using:

A. A single exposure at the standard camera ISO
B. Bracketed exposures (typically −4 to +4 stops) in every lighting state used in the scene
C. A dedicated HDR camera with a fish-eye lens mounted to the set wall
D. An infrared sensor calibrated to the dominant color temperature

---

### 3.

The Mandalorian's LED Volume stage was powered by which real-time rendering engine?

A. Unity
B. Unreal Engine
C. CryEngine
D. Godot

---

### 4.

The mathematical formula for the "over" compositing operation is:

A. A × B
B. A + B
C. A + B × (1 − alpha_A)
D. A × B + (1 − alpha_A)

---

### 5.

In Keylight, setting Clip White aggressively on a subject with motion-blurred edges will cause what problem?

A. The subject will become brighter in the composite
B. Semi-transparent motion blur pixels will be forced to fully opaque, creating hard, cut-out edges that look composited
C. Spill suppression will be incorrectly applied to the blur pixels
D. The Screen Matte will invert

---

### 6.

Which Bayer sensor property explains why digital cameras produce cleaner green screen keys than blue screen keys?

A. Green light has a shorter wavelength and is processed faster by the sensor
B. The Bayer array has twice as many green photosites as red or blue, giving green more spatial resolution and sampling accuracy
C. Green screen paint has a higher reflectivity than blue screen paint
D. ARRI cameras apply additional in-camera noise reduction to green channel data

---

### 7.

In After Effects, the Rotobrush 2.0 tool is activated with which keyboard shortcut?

A. R
B. Ctrl+R / Cmd+R
C. Alt+W / Opt+W
D. G (Pen tool shortcut)

---

### 8.

Boris FX acquired which professional rotoscoping application in 2020?

A. Mocha Pro
B. SilhouetteFX
C. Nuke Roto
D. Imagineer Systems Roto

---

### 9.

The "cheat roto stack" uses which Boolean combination of shape layers?

A. All layers set to Add mode, stacked for maximum opacity
B. A base body layer (Add) + addition layers (Add) + subtraction layers (Subtract) for interior negative spaces
C. All layers set to Subtract mode to create a cutout effect
D. Alternating Add and Multiply layers for shadow simulation

---

### 10.

A film matchmove artist uses 3DEqualizer. Which software is 3DEqualizer primarily competing with for the professional matchmove market?

A. After Effects 3D Camera Tracker and Mocha AE
B. SynthEyes and PFTrack
C. Maya and Houdini
D. Silhouette and Boris FX

---

### 11.

Mocha AE uses what core tracking technology?

A. Point-feature tracking at high-contrast corners
B. Optical flow-based planar tracking, analyzing the motion of a flat surface plane
C. Facial landmark tracking using machine learning
D. 3D depth map correlation tracking

---

### 12.

The "inner box" in AE's Track Motion defines:

A. The area of the frame to search for the feature in each new frame
B. The specific pixel template the tracker matches against each frame
C. The target layer to which the motion data will be applied
D. The safe zone boundary for the tracked element

---

### 13.

Trapcode Particular's "Aux System" spawns secondary particles:

A. From the emitter's current position at a fixed interval
B. From the location where primary particles die (triggered on particle death)
C. From the edges of the composition frame
D. Only when Air Turbulence exceeds a threshold value

---

### 14.

Which physics parameter in Trapcode Particular decelerates particles over time, simulating air drag?

A. Wind X/Y/Z
B. Air Turbulence
C. Air Resistance
D. Turbulence Scale

---

### 15.

CC Particle World is built into After Effects and requires no additional purchase. Its primary limitation compared to Trapcode Particular is:

A. CC Particle World cannot create smoke effects
B. CC Particle World lacks advanced physics (no Aux System, no Turbulence Field, no custom sprite support)
C. CC Particle World renders too slowly for professional use
D. CC Particle World cannot be applied to solid layers

---

### 16.

Nuke was developed and is maintained by:

A. Adobe
B. Maxon
C. The Foundry
D. Autodesk

---

### 17.

In Nuke's Grade node, which parameter multiplies all pixel values by a factor (brightening without shifting the black point)?

A. Offset
B. Lift
C. Gain
D. Gamma

---

### 18.

A compositor wants to apply a secondary color correction to only the sky area of a shot. In DaVinci Resolve or a professional workflow, which tool isolates the sky for secondary correction?

A. Primary color corrector
B. A qualifier (color range selector) combined with a power window or shape mask
C. The Gain control in the three-way corrector
D. A 1D LUT applied before the Grade node

---

### 19.

ACES2065-1 is used in the VFX pipeline for which specific purpose?

A. As the compositing working space for CG rendering
B. As the log encoding space for camera capture
C. As the archival master and interchange space, extremely wide gamut, not used for daily compositing
D. As the display-referred output format for cinema projection

---

### 20.

The *Oppenheimer* Trinity test explosion was designed to blow out to pure white. This was a deliberate creative choice to:

A. Mask the inadequate VFX for the explosion sequence
B. Represent a light beyond photographic capture, as described by the Manhattan Project scientists
C. Match the actual historical footage of the Trinity test
D. Avoid the MPAA rating board's rating for explosive content

---

### 21.

In a set extension composite, why must distant elements have reduced sharpness and saturation?

A. Because CG rendering at distance is less detailed
B. To simulate atmospheric perspective, real-world physics where light scatters through air particles at distance, reducing contrast and saturation
C. Because the audience's eyes cannot focus on distant elements
D. Because the digital matte paint has lower resolution at distance

---

### 22.

*1917*'s invisible digital stitches were primarily placed at which types of moments?

A. During dialogue scenes at natural pause points
B. Dark frames, through tunnels, rapid camera movements, or behind moving objects where the stitch is visually undetectable
C. Whenever the main character changed direction
D. Between every scene change, always at the exact middle of the shot

---

### 23.

De-aging VFX (used in *The Irishman*, *Captain America: Civil War*) involves what primary technical workflow?

A. Applying a blur effect and reducing contrast to simulate youth
B. Reference material from the younger actor + ML or manual facial texture transfer + intensive 2D cleanup per frame in Nuke
C. CGI face replacement using a fully digital younger character
D. Using face-swap AI to automatically process all frames without artist involvement

---

### 24.

The "rule of 7 layers" for explosions separates Layer 1 (fireball) from Layer 7 (ambient light) because:

A. Seven is the maximum number of blend modes available in After Effects
B. Each physical component of a real explosion has different timing, scale, and behavior, they must be composited independently to look correct
C. Rendering a single particle system with 7 sub-systems is more efficient than separate layers
D. The VFX supervisor requires seven separate render passes for quality control

---

### 25.

A muzzle flash must be tracked to the weapon's muzzle position throughout the shot. Which tracking technique is most appropriate?

A. 3D camera solve (matchmove)
B. Mocha AE planar track on the weapon surface
C. 2D one-point track on the muzzle position
D. Warp Stabilizer applied to the flash element

---

### 26.

Chromatic aberration is most visible at which location in the frame?

A. The center of the frame at all contrast levels
B. The edges and corners of the frame, particularly at high-contrast edges
C. Only on moving objects within the frame
D. Evenly distributed across the entire frame

---

### 27.

A film grain Adjustment Layer should be placed:

A. Below the background plate layer
B. Above only the VFX element layers, below the plate
C. At the very top of the comp stack, above all elements
D. Between the foreground and background layers

---

### 28.

Blender's shadow catcher material renders:

A. The ambient occlusion of the CG object onto itself
B. Only the shadow cast by the CG object onto an invisible ground plane, as a separate compositing element
C. The full lighting of the CG object including self-shadows
D. The Z-depth pass for the CG element's shadow volume

---

### 29.

Which film won the Academy Award for Best Visual Effects in 2014, largely for Framestore's work on weightlessness and space environments?

A. *Avatar* (2009)
B. *Interstellar* (2014)
C. *Gravity* (2013)
D. *Life of Pi* (2012)

---

### 30.

A professional VFX reel should contain how many shots at most?

A. 2–3
B. 4–8
C. 12–15
D. As many as possible

---

### 31.

IATSE Local 839 is known by what informal name?

A. The Screen Actors Guild
B. The Animation Guild
C. The Compositors Union
D. The VFX Artists Alliance

---

### 32.

The compositor's technical grade differs from the colorist's creative grade in that the compositor:

A. Applies the director's intended color look to the full sequence
B. Matches individual elements to each other for a neutral, accurate composite and delivers without a creative look baked in
C. Works in DaVinci Resolve while the colorist works in Nuke
D. Is responsible for adding the ACES output transform

---

### 33.

The VFX supervisor on *Avengers: Infinity War* required all vendors to maintain consistent Thanos look-development. This was achieved through:

A. Centralizing all Thanos work at ILM's San Francisco facility
B. A shared "look bible" containing Nuke scripts and look-dev renders distributed to all vendors
C. Using the ACES color pipeline which automatically normalized all Thanos renders
D. Real-time renders on the Unreal Engine displayed on set for reference

---

### 34.

In the context of the ACES pipeline, what does "IDT" stand for?

A. Image Depth Transform
B. Input Device Transform, converts camera-specific log footage into the ACES color space
C. Intermediate Display Transform
D. Image Data Template

---

### 35.

Which Nuke node would a compositor use to composite a CG fire element over a background plate using additive blending (bright pixels of fire show, dark pixels become invisible)?

A. Merge node set to "over" operation
B. Merge node set to "plus" (Add) operation
C. Merge node set to "multiply" operation
D. Grade node with high Gain value

---

### 36.

The "Refine Edge" tool within Rotobrush 2.0 is most useful for:

A. Refining the propagation speed of the matte through subsequent frames
B. Preserving fine semi-transparent detail like hair strands, fur, and feathers at the matte edge
C. Refining the mask's overall shape using edge detection
D. Converting the Rotobrush matte into a vector shape for clean-edge output

---

### 37.

A compositor applies a color correction to a CG creature in a scene. The creature has correct color balance but looks too saturated compared to the plate. Which tool makes the most targeted fix?

A. Reduce the Gain in the Grade node across all channels
B. Reduce the Saturation control in the ColorCorrect node applied to the creature
C. Apply a Blur to the specular pass to reduce its vibrancy
D. Reduce the Gamma in the Grade node

---

### 38.

What is the "parade scope" and when is it primarily used?

A. A vectorscope variant showing skin tone distribution, used for talent casting
B. A waveform display showing R, G, and B channels side by side, used for identifying color imbalances and matching exposure between shots
C. A histogram display of the scene's full luminance range
D. A real-time display showing the output's compliance with broadcast delivery specifications

---

### 39.

In Trapcode Particular, what is the purpose of the "Life Random" parameter?

A. Randomizes the frame offset of the simulation for non-repeating effects
B. Adds variation to the lifetime of individual particles so they don't all die at exactly the same frame, avoiding unnatural synchronization
C. Randomly assigns particles to different emitter positions
D. Varies the loop point of animated sprite particles

---

### 40.

The Silhouette FX "Magnetic Spline" tool snaps to:

A. Existing tracking markers placed on set
B. The nearest high-contrast edge as the spline is drawn, using edge detection
C. Rotobrush 2.0-generated mattes from the same shot
D. The nearest existing spline in the roto session for consistent shape sharing

---

### 41.

A compositor receives a multi-channel EXR from a Blender render. To extract the "diffuse_color" pass into standard RGB channels for color correction in Nuke, which node does the compositor use?

A. Read node → direct output
B. Shuffle node (routes diffuse_color.R/G/B into output R/G/B)
C. Grade node applied directly to the EXR
D. Transform node with channel routing

---

### 42.

The "Wipe" display mode in Nuke's Viewer is used for what purpose?

A. Clearing the Viewer buffer to start a new display session
B. Splitting the Viewer between two connected nodes (A and B inputs) for side-by-side comparison
C. Rendering a single frame to disk for review
D. Applying a wipe transition between two clips in the timeline

---

### 43.

In *Life of Pi* (2012), the tiger sequences required what primary VFX technique for isolating the real tiger reference footage?

A. Blue screen keying on location footage
B. 3D camera solve + CG tiger replacement
C. Extensive manual rotoscoping of real tiger footage
D. Motion capture on a stunt performer wearing a tiger suit

---

### 44.

When a sky replacement's new sky is warmer/golden than the original overcast footage, what secondary step is required?

A. Desaturate the new sky to match the original sky's color temperature
B. Apply a warm color correction to the foreground elements to match the ambient light the new sky would cast
C. Re-shoot the foreground elements under golden hour lighting
D. Apply a different sky replacement with a cooler palette

---

### 45.

The practical VFX philosophy applied in *Rogue One: A Star Wars Story* using real miniature explosions with digital starships demonstrates which principle?

A. Practical effects are always less expensive than digital effects
B. Physical elements (real explosions, real smoke) provide photographic authenticity that pure CG cannot fully replicate; digital elements provide scale and specificity
C. ILM is required by Lucasfilm to use at least 50% practical effects in all Star Wars productions
D. Director Gareth Edwards has a personal opposition to digital effects

---

### 46.

A compositor building an explosion composite places the grain Adjustment Layer below the fireball core layer. What problem does this create?

A. No problem, the grain is now hidden behind the fireball
B. The grain applies only to layers below it (the plate, background elements) but not to the VFX elements above it, the composite has mismatched grain across elements
C. The grain Adjustment Layer cannot function below a particle layer
D. The fireball will appear darker due to the grain's Overlay blend mode

---

### 47.

What Blender add-on divides a mesh into destruction fragments using Voronoi cell calculations?

A. Fracture Modifier
B. Sapling Tree Gen
C. Cell Fracture
D. BVTKNodes Physics

---

### 48.

The *Avengers: Endgame* production (2019) used how many total VFX shots?

A. 800
B. 1,500
C. 3,000+
D. 500

---

### 49.

BECTU is the VFX/film industry union equivalent of IATSE in:

A. Canada
B. Australia
C. France
D. The United Kingdom

---

### 50.

In a Nuke compositing workflow, what does a "Gizmo" represent?

A. A test render that is displayed in the Viewer
B. A custom encapsulated tool, a group of nodes packaged into a reusable, distributable node with its own interface
C. Nuke's built-in 3D camera node for camera solve integration
D. The render queue management system

---

### 51.

A 3D LUT maps RGB triplets (input R+G+B together) to output RGB values. A 1D LUT maps each channel independently. Which application specifically requires a 3D LUT?

A. Applying a simple gamma correction to a footage layer
B. Applying a creative color grade (warm shadows, teal highlights) where the output values depend on the interaction of all three channels
C. Converting log footage to display-referred at precise mathematical values
D. Calibrating a monitor's display output

---

### 52.

The Camera Tracking workspace in Blender for free 3D camera solving is found in which editor?

A. The 3D Viewport
B. The Shader Editor
C. The Movie Clip Editor
D. The Video Sequence Editor

---

### 53.

A VFX reel candidate's explosion shot shows excellent layering and timing but the explosion appears to float above the ground without casting a shadow. What single technical fix would most improve the shot?

A. Increase the number of explosion layers from 7 to 10
B. Add a shadow catcher element (from Blender render or hand-painted) that places the explosion's ground shadow on the live-action plate
C. Apply a Gaussian blur to the explosion base to soften the edge between explosion and ground
D. Add a lens flare to the explosion to increase its perceived scale

---

### 54.

Which VFX studio is headquartered in Wellington, New Zealand, and is known for creating digital creatures and environments for Lord of the Rings and Avatar?

A. Framestore
B. MPC
C. Weta FX (formerly Weta Digital)
D. Animal Logic

---

### 55.

A compositor delivers a shot for a film's DI session. The delivery should be in what color space to give the colorist maximum grading flexibility?

A. Rec.709 with the creative look baked in
B. Log-encoded (near the camera's native log encoding, such as ACEScct or ARRI LogC)
C. ACES2065-1 archival format
D. Display P3 for cinema projection

---

### 56.

The "Advanced Spill Suppressor" in After Effects differs from the basic "Spill Suppressor" by:

A. It removes more green than the basic version
B. It analyzes the background color to inform how to desaturate the spill, producing more natural results especially on skin tones
C. It also removes motion blur artifacts from the key edge
D. It applies spill suppression to the entire frame, not just the keyed edge

---

### 57.

A compositor receives a CG render intended for an ACES pipeline but accidentally applies a Rec.709 display transform to it. The composite will be:

A. Slightly darker but otherwise accurate
B. Incorrectly color-managed, colors shifted, contrast altered, the element will not match the plate
C. Brighter because Rec.709 applies less gamma
D. Correct, Rec.709 and ACES transforms are equivalent for standard dynamic range

---

### 58.

Which concept describes the "Omission = Floating" rule for CG integration?

A. If a CG element omits the correct tracked motion, it will appear to float off-screen
B. If a CG element omits shadow integration and interactive light, it will appear to float on top of the plate rather than exist within its world
C. If a CG element is rendered with omitted AOV passes, it will float between layers in the composite
D. If a CG element omits grain matching, it will float visually above the plate's noise floor

---

### 59.

Corridor Crew is a YouTube channel known for:

A. Official ILM making-of videos for Marvel productions
B. Working VFX artists (Jake Roper, Niko Pueringer, Sam Gorski) reviewing and breaking down VFX from major films
C. The Foundry's official Nuke tutorial series
D. Video Copilot's After Effects tutorial archive

---

### 60.

Which VFX studio was the primary vendor for *Avengers: Infinity War*'s Thanos digital human?

A. Digital Domain
B. Weta Digital
C. ILM (Industrial Light & Magic)
D. Framestore

---

### 61.

In a professional VFX reel, a team shot should include what additional information?

A. The names of all other artists on the team
B. A clear statement of exactly what the candidate was personally responsible for on the shot
C. The budget and schedule for the production
D. The VFX supervisor's letter of recommendation

---

### 62.

Nuke's "Deep Compositing" capability handles what type of render that standard compositing cannot?

A. Renders with more than 100 AOV passes
B. Volumetric renders (fog, fire, clouds) with per-pixel, per-sample depth information for correct geometry intersection
C. Renders at resolutions above 8K
D. Real-time interactive renders from game engines

---

### 63.

Which VFX tool is Houdini's primary market position in the professional VFX pipeline?

A. 2D compositing for film and broadcast
B. FX simulation, fluids, destruction, fire/smoke, crowd simulation, and procedural geometry
C. Digital matte painting and environment design
D. Camera tracking and matchmoving

---

### 64.

In *The Dark Knight* (2008), the practical explosions were supplemented by digital elements. What VFX studio provided the primary digital VFX work?

A. ILM
B. Weta Digital
C. Double Negative (DNEG)
D. Framestore

---

### 65.

A compositor finishing their first professional VFX reel asks which single technique, if mastered and demonstrated effectively, would most elevate a mediocre greenscreen composite to a professional quality composite. The correct answer is:

A. More aggressive spill suppression on the edge of the key
B. Light wrap, applying the background's luminance as a scattering effect around the edges of the keyed subject, tying the two elements together photographically
C. Increasing the color contrast of the composite overall
D. Adding film grain to all elements individually

---

## 🎯 Answer Key (No Cheating!)

```
1.  B
2.  B
3.  B
4.  C
5.  B
6.  B
7.  C
8.  B
9.  B
10. B
11. B
12. B
13. B
14. C
15. B
16. C
17. C
18. B
19. C
20. B
21. B
22. B
23. B
24. B
25. C
26. B
27. C
28. B
29. C
30. B
31. B
32. B
33. B
34. B
35. B
36. B
37. B
38. B
39. B
40. B
41. B
42. B
43. C
44. B
45. B
46. B
47. C
48. C
49. D
50. B
51. B
52. C
53. B
54. C
55. B
56. B
57. B
58. B
59. B
60. C
61. B
62. B
63. B
64. C
65. B
```
