---
permalink: /36-3D-Animation-Blender/Module-04-Lighting-HDRI/Quiz/
title: "Module 4 Quiz: Lighting & HDRI"
---

# 🧪 Module 4 Quiz: Lighting & HDRI

**24 questions · Allow 30 minutes · No notes.**

---

### Q1.
In a three-point lighting setup, the **Fill light's** primary function is:

A. To create a dramatic shadow on the character's face
B. To rim-light the character from behind
C. **To reduce the contrast in shadow areas while retaining some shadow depth**
D. To simulate bounce light from the floor

---

### Q2.
The **Sun light** in Blender is unique because:

A. It produces circular shadows regardless of its shape
B. **Its position in the viewport is irrelevant; only its rotation matters**
C. It is the only light type that supports HDRI color matching
D. It cannot be used with Cycles, only EEVEE

---

### Q3.
An **Area light** with a large size (e.g., 3m × 3m) compared to a small size (e.g., 0.1m × 0.1m) produces:

A. Brighter, more intense light
B. **Softer, more diffuse shadows**
C. Harder, sharper shadows
D. A longer shadow falloff distance

---

### Q4.
The key-to-fill lighting ratio most appropriate for a **horror/thriller** scene is:

A. 1:1 (equal key and fill)
B. 2:1 (fill at 50% of key)
C. 4:1 (fill at 25% of key)
D. **16:1 or more (fill at 6% or less of key)**

---

### Q5.
HDRI stands for:

A. High Density Render Image
B. **High Dynamic Range Image**
C. Horizontal Dynamic Reflectance Integration
D. High Definition Radiance Illumination

---

### Q6.
What is the best free source for CC0 HDRIs mentioned in this module?

A. Turbosquid
B. Sketchfab
C. **Poly Haven (polyhaven.com)**
D. CGTrader

---

### Q7.
To rotate an HDRI environment texture in Blender's World Shader, you add a:

A. Transform node between Background and World Output
B. Rotate node connected to the HDRI strength
C. **Mapping node (connected to Texture Coordinate) before the Environment Texture node**
D. Vector Math node with a rotation operation

---

### Q8.
The color temperature of **standard daylight (overcast sky)** is approximately:

A. 1,800K
B. 3,200K
C. **6,500K**
D. 10,000K

---

### Q9.
In the *Sprite Fright* production, approximately how many light objects did the average shot contain?

A. 2–3
B. 5–7
C. **12–18**
D. 30–40

---

### Q10.
A **rim light** (also called a back light) in a three-point setup:

A. Fills the shadow side of the character's face
B. Produces the main directional shadow
C. **Separates the character from the background and adds depth to the image**
D. Simulates ambient occlusion in contact shadow areas

---

### Q11.
The color temperature of **candlelight** is approximately:

A. 3,200K
B. 2,700K
C. 5,600K
D. **1,800K**

---

### Q12.
Which Blender light type is described as casting **parallel shadows**, like rays from a very distant source (the sun)?

A. Point
B. **Sun**
C. Spot
D. Area

---

### Q13.
A **Spot light** in Blender is best suited for:

A. Soft studio fill lighting
B. Outdoor daylight simulation
C. **Theatrical spotlights, flashlights, and directional accent lights**
D. Ambient sky fill with HDR color

---

### Q14.
What does the **Strength** parameter on the Background node (World Shader) control?

A. The contrast of the HDRI reflection
B. **The overall intensity/brightness of the environment lighting**
C. The saturation of the HDRI colors
D. The maximum exposure value the HDRI will reach

---

### Q15.
The production quote from the *Sprite Fright* making-of states: "Every light has a ___." Fill in the blank.

A. Color temperature
B. Falloff equation
C. **Reason (motivated by something in the scene)**
D. Physically-based IES profile

---

### Q16.
A **Point light** in Blender emits light:

A. In a defined cone angle
B. In parallel rays with no falloff
C. Only in the direction of its local Z axis
D. **Equally in all directions (omnidirectional)**

---

### Q17.
For a **comedy / family animation** lighting setup, the key-to-fill ratio should be approximately:

A. 16:1
B. 8:1
C. 4:1
D. **2:1 to 3:1**

---

### Q18.
The *Sprite Fright* team set the HDRI strength to what range to avoid overexposure in the forest environment?

A. 0.01–0.05
B. **0.3–0.6**
C. 1.0–2.0
D. 3.0–5.0

---

### Q19.
Which of the following correctly describes the key-to-fill ratio in three-point lighting?

A. The ratio of the key light's color temperature to the fill light's color temperature
B. The ratio of the key light's position angle to the fill light's position angle
C. **The ratio of the key light's intensity to the fill light's intensity**
D. The ratio of shadow softness between key and fill

---

### Q20.
In Blender 4.x, to control the color temperature of a light object (Area, Point, Spot), you can:

A. Set the Kelvin value directly on the light's material
B. Use a ColorRamp node on the light shader
C. **Enable "Use Temperature" on the light and enter a Kelvin value**
D. Connect the light to a Blackbody node in the World shader

---

### Q21.
The HDRI file formats supported by Blender's Environment Texture node are:

A. PNG and JPEG only
B. **HDR (.hdr) and EXR (.exr)**
C. TIFF and BMP
D. MP4 and MOV (video HDRIs)

---

### Q22.
A **motivated light source** in cinematography terminology means:

A. A light that matches the correct Kelvin temperature for the scene's time of day
B. A light that is hidden off-camera using a flag or barn door
C. **A light whose apparent source can be explained by something visible or implied in the scene**
D. A light that is calculated from the scene's physics simulation

---

### Q23.
The *Sprite Fright* rim lights were pushed slightly **cooler** (6,500K) compared to the key lights. This color contrast suggests:

A. The rim light represents a nearby fireplace
B. The rim lights were poorly color-corrected
C. **The rim lights simulate cool sky bounce light from above**
D. Blender's default temperature prevents warm rim lights

---

### Q24.
To properly integrate an HDRI's lighting direction with your scene's manual lights in Cycles, the best practice is:

A. Set the HDRI strength to 0 and use only manual lights
B. Disable all manual lights and rely only on the HDRI
C. Set the HDRI to a uniform grey gradient to avoid directional bias
D. **Rotate the HDRI so its brightest point (sun/window) aligns with your key light's direction**

---

## 🎯 Answer Key (No Cheating!)

```
Q1.  C — Fill light reduces shadow contrast (does not eliminate shadow)
Q2.  B — Sun light position is irrelevant; only rotation matters
Q3.  B — Larger light source = softer, more diffuse shadows
Q4.  D — Horror = 16:1 or more (very high contrast)
Q5.  B — HDRI = High Dynamic Range Image
Q6.  C — Poly Haven (polyhaven.com) — free CC0 HDRIs
Q7.  C — Mapping node (+ Texture Coordinate) before Environment Texture for rotation
Q8.  C — Overcast sky = ~6,500K
Q9.  C — 12–18 lights per average Sprite Fright shot
Q10. C — Rim light separates subject from background, adds depth
Q11. D — Candlelight = ~1,800K
Q12. B — Sun light = parallel rays (directional, infinite)
Q13. C — Spot light = theatrical/flashlight directional accent
Q14. B — Strength on Background node = environment lighting intensity
Q15. C — "Every light has a reason" (motivated source)
Q16. D — Point light = omnidirectional
Q17. D — Comedy/family = 2:1 to 3:1 (low contrast, visible fill)
Q18. B — Sprite Fright HDRI strength = 0.3–0.6
Q19. C — Key-to-fill ratio = intensity ratio of key vs. fill
Q20. C — Enable "Use Temperature" on light → enter Kelvin value
Q21. B — .hdr and .exr are Blender's HDR environment formats
Q22. C — Motivated = light source explained by something in the scene
Q23. C — Cool rim (6,500K) suggests sky bounce light from above
Q24. D — Rotate HDRI so brightest point aligns with key light direction
```
