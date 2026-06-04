---
permalink: /36-3D-Animation-Blender/Module-03-Materials-Texturing-Shading/Quiz/
title: "Module 3 Quiz: Materials, Texturing & Shading"
---

# 🧪 Module 3 Quiz: Materials, Texturing & Shading

**24 questions · Allow 30 minutes · No notes.**

---

### Q1.
The **Principled BSDF** shader implements which industry rendering standard?

A. Phong/Blinn-Phong shading model
B. **Physically Based Rendering (PBR) — Disney/Metallic-Roughness**
C. Oren-Nayar diffuse model
D. Ward anisotropic shading

---

### Q2.
A material with **Metallic = 0.5** in the Principled BSDF is:

A. A physically correct representation of semi-metallic alloys
B. Correct for brushed aluminum
C. **Not physically based; Metallic should be 0 (dielectric) or 1 (metal)**
D. Equivalent to chrome with 50% reflectivity

---

### Q3.
To import a **Normal Map** texture from Substance Painter correctly, the Image Texture node's Color Space must be set to:

A. sRGB
B. Linear
C. **Non-Color**
D. Filmic

---

### Q4.
What does the **Roughness** parameter control in the Principled BSDF?

A. The opacity of the material
B. The amount of subsurface light scattering
C. The overall brightness of the material
D. **The micro-surface texture — how tight or broad the specular highlight is**

---

### Q5.
In UV unwrapping, a **seam** is:

A. A ridge where two mesh faces join
B. **An edge marked as a boundary where the UV map is cut open**
C. A texture discontinuity visible in the final render
D. A loop cut added to improve UV island resolution

---

### Q6.
The best place to put UV seams for a humanoid character model is:

A. Along the nose bridge, down the center of the face
B. Along the outside of the arms and legs
C. **Under the arms, inside the legs, behind the ears — areas rarely visible**
D. At every edge loop, to maximize UV resolution

---

### Q7.
Which Shader Editor shortcut **previews a node's output** directly in the viewport?

A. Shift+Click
B. Alt+Click
C. **Ctrl+Shift+Click**
D. Ctrl+Alt+Click

---

### Q8.
The **Mapping** node in the Shader Editor is primarily used to:

A. Define the UV island layout for the mesh
B. **Offset, scale, and rotate the texture coordinates on the surface**
C. Convert between color spaces
D. Map vertex colors to material parameters

---

### Q9.
What is the **Index of Refraction (IOR)** for glass in the Principled BSDF?

A. 1.0 (same as air)
B. 1.33 (water)
C. **1.45–1.5 (glass)**
D. 2.42 (diamond)

---

### Q10.
The **Subsurface Weight** parameter in the Principled BSDF is essential for:

A. Controlling how transparent the material is
B. Adding a secondary specular highlight
C. **Simulating light that penetrates and scatters beneath the surface (e.g., skin)**
D. Blending between two different BSDF shaders

---

### Q11.
Quixel Megascans assets are available for use in Blender productions under:

A. A paid per-project license
B. A royalty-bearing commercial license
C. A Creative Commons Non-Commercial license
D. **A free CC0/Fab license (free for all uses)**

---

### Q12.
The Sony Pictures Animation film that used a hybrid toon-shading approach (2D drawn look over 3D geometry) discussed in this module is:

A. Into the Spider-Verse
B. Surf's Up 2
C. **The Mitchells vs. the Machines (2021)**
D. Spider-Man: Across the Spider-Verse

---

### Q13.
In the Blender **Shader to RGB** node, what does it convert?

A. A texture image to a solid RGB value
B. The viewport color to the rendered color
C. **A shader's light interaction to a flat color value, enabling toon/stylized effects**
D. HDR color values to standard 8-bit RGB

---

### Q14.
When building a skin material, the **Subsurface Radius** RGB values represent:

A. The color of the subsurface layer
B. The total light energy scattered below the surface
C. **The per-channel (R/G/B) depth of light penetration into the skin**
D. The IOR of the subcutaneous fat layer

---

### Q15.
What is the keyboard shortcut to **add a node** in the Shader Editor?

A. Ctrl+A
B. N
C. **Shift+A**
D. Tab

---

### Q16.
A **Color Ramp** node is most commonly used to:

A. Convert an image texture from sRGB to Linear
B. **Remap a gradient input (like roughness or noise) into a custom value range**
C. Blend two textures based on a mask
D. Convert a metallic map to a specular map

---

### Q17.
Which texture coordinate input should you use when texture seams from UV mapping are visible and you want a seamless procedural alternative?

A. UV
B. Camera
C. Window
D. **Object (for box-projected/triplanar mapping)**

---

### Q18.
The **Freestyle** rendering system in Blender is primarily used for:

A. Fast EEVEE preview rendering
B. Physically based hair simulation
C. **Rendering stylized outline/edge lines over 3D geometry**
D. Real-time viewport anti-aliasing

---

### Q19.
The **"Smart UV Project"** unwrapping method is best suited for:

A. Complex organic character models
B. Models with many overlapping faces
C. **Hard-surface props and architectural elements**
D. Symmetrical meshes with exact UV placement requirements

---

### Q20.
In Blender's Texture Paint mode, the **Clone** brush:

A. Duplicates the entire mesh texture to a new UV island
B. Paints a solid color sampled from the color picker
C. **Paints by sampling from another area of the texture**
D. Creates a stamped copy of a brush stencil

---

### Q21.
The **Normal Map** node (not the image texture node) must be inserted between the Image Texture node and the Principled BSDF when:

A. The texture is an AO (ambient occlusion) map
B. The texture is a roughness map
C. The texture is a metallic map
D. **The texture is a normal map (to convert color data to a surface normal vector)**

---

### Q22.
Blender uses which PBR workflow by default for its Principled BSDF?

A. Specular/Glossiness
B. Diffuse/Specular
C. **Metallic/Roughness**
D. Oren-Nayar/Cook-Torrance

---

### Q23.
The resolution of a production character texture map should be:

A. 512×512 (small, fast to render)
B. 1024×1024 (adequate for close-up shots)
C. **4096×4096 for feature animation; 2048×2048 for broadcast/indie**
D. 8192×8192 regardless of pipeline

---

### Q24.
Which of the following correctly describes the relationship between the **Coat Weight** parameter and physical surfaces?

A. It controls the amount of translucency in glass materials
B. It adds a metallic sheen to non-metallic materials
C. It simulates the subsurface scatter distance of painted surfaces
D. **It adds a thin dielectric clearcoat layer over the base material (car paint, lacquered wood)**

---

## 🎯 Answer Key (No Cheating!)

```
Q1.  B — Principled BSDF = Disney PBR / Metallic-Roughness standard
Q2.  C — Metallic must be 0 or 1; 0.5 has no physical basis
Q3.  C — Normal map image must be Non-Color to avoid color-space remapping
Q4.  D — Roughness = micro-surface texture; controls specular highlight tightness
Q5.  B — A seam is a UV boundary edge cut
Q6.  C — Seams go where they won't be seen: under arms, inside legs, behind ears
Q7.  C — Ctrl+Shift+Click previews node output in viewport
Q8.  B — Mapping node offsets/scales/rotates texture coordinates
Q9.  C — Glass IOR = 1.45–1.5 (commonly 1.45 in Blender default)
Q10. C — Subsurface Weight controls sub-surface light scattering (skin, wax)
Q11. D — Quixel Megascans on Fab.com = CC0, free for all uses
Q12. C — The Mitchells vs. the Machines (2021) used hybrid toon shading
Q13. C — Shader to RGB converts light interaction to a flat color for toon effects
Q14. C — Subsurface Radius = per-channel (R/G/B) penetration depth
Q15. C — Shift+A adds nodes in all Blender node editors
Q16. B — Color Ramp remaps gradient inputs to custom value ranges
Q17. D — Object coordinates give seamless triplanar/box-projected texture
Q18. C — Freestyle renders stylized outline/edge lines over 3D scenes
Q19. C — Smart UV Project works best for hard-surface/architectural models
Q20. C — Clone brush samples from another area of the texture
Q21. D — Normal Map node converts color data to surface normals
Q22. C — Blender Principled BSDF = Metallic/Roughness workflow
Q23. C — 4096×4096 for feature animation; 2048×2048 for indie/broadcast
Q24. D — Coat Weight simulates a clearcoat layer (car paint, lacquer)
```
