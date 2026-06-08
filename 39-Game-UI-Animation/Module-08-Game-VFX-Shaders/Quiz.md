---
title: "Module 8 Quiz: Game VFX & Shaders"
---

# 🧪 Module 8 Quiz: Game VFX & Shaders

> 24 questions. Answer all before checking the key.

---

### Q1. Unity VFX Graph differs from the legacy Shuriken particle system primarily because:

A. VFX Graph uses CPU simulation; Shuriken uses GPU
B. VFX Graph runs on the GPU via compute shaders; Shuriken is CPU-based
C. VFX Graph does not support looping particles; Shuriken does
D. VFX Graph requires C# scripting; Shuriken uses the Inspector only

---

### Q2. In Unity VFX Graph, the "Initialize" context is responsible for:

A. Spawning new particles at a defined rate or burst count
B. Setting each particle's starting values (position, velocity, color, lifetime)
C. Simulating physics forces (gravity, drag, turbulence) each frame
D. Defining how particles are rendered (billboard, mesh, strip)

---

### Q3. A dissolve shader in Unity Shader Graph uses a noise texture to:

A. Distort the mesh geometry as the object dissolves
B. Create a mask that progressively clips the material based on a Dissolve Amount parameter
C. Generate normal map data for the dissolving surface
D. Animate the UV coordinates of the base color texture

---

### Q4. A Fresnel Effect node in Unity Shader Graph calculates:

A. The refraction of light through transparent materials
B. The dot product of the view direction and surface normal, high at glancing angles (edges)
C. The specular highlight intensity based on light direction and camera angle
D. The ambient occlusion in screen space

---

### Q5. The "Juice It or Lose It" GDC 2012 talk (Jonasson & Purho) demonstrated which core concept?

A. Juice (layered visual/audio feedback) makes games more satisfying without changing core mechanics
B. Complex game mechanics are more important than visual polish for player retention
C. Particle systems are the most important VFX for player feedback
D. Screen shake is the only effective feedback element for action games

---

### Q6. "Hit stop" in game VFX is typically implemented by:

A. Stopping all particle simulations for 2–12 frames
B. Briefly pausing all animated objects (attacker + defender) for 2–12 frames on impact
C. Reducing the game's frame rate to 30fps for the hit frame
D. Adding a delay between the player's input and the character's response

---

### Q7. Supergiant Games' design philosophy for Hades' VFX prioritized:

A. Maximum realism using physically-based particle simulation
B. Readability at small sizes from camera distance, using high contrast and large particle sizes
C. Minimum GPU cost by limiting each ability to 5 particles
D. Cinematic quality over real-time performance

---

### Q8. In Unity's VFX Graph, an "Exposed Property" allows:

A. The VFX asset to be visible in the Project window
B. A C# script to read or write a parameter value in the running VFX Graph at runtime
C. Multiple VFX Graphs to share the same set of simulation parameters
D. The VFX Graph to access scene lighting data directly

---

### Q9. In Unreal's Niagara system, the difference between CPU and GPU simulation is primarily:

A. GPU simulation supports collision; CPU simulation does not
B. CPU simulation can be more easily debugged; GPU simulation can handle far more particles
C. GPU simulation uses Blueprints; CPU simulation uses C++
D. CPU simulation supports events; GPU simulation does not support inter-particle communication

---

### Q10. Niagara "Events" in Unreal Engine are used to:

A. Spawn new Niagara Systems at a fixed interval
B. Allow particles in one emitter to trigger responses in another emitter (e.g., spawn explosion on projectile collision)
C. Connect Niagara animations to the Sequencer timeline
D. Fire Blueprint callbacks when all particles in a System have expired

---

### Q11. Bungie's "first read" design principle for Destiny 2 weapon VFX means:

A. The VFX should play on the first frame of the weapon's fire animation
B. The VFX should communicate the weapon's class/archetype before the player reads damage numbers, through peripheral vision
C. Each weapon's first ability VFX is 3× more elaborate than its base attack VFX
D. VFX are designed to be readable on the first attempt by new players

---

### Q12. For a screen shake effect, Perlin noise decay is preferred over pure random jitter because:

A. Perlin noise is faster to compute than random number generation
B. Perlin noise has spatial coherence, producing directional shake instead of random buzzing
C. Pure random jitter causes frame drops on older hardware
D. Perlin noise supports stereo audio shake; random does not

---

### Q13. Squash and stretch applied to a 3D object on impact would set the scale to approximately:

A. (1.0, 1.0, 1.0) to maintain mass conservation
B. Scale up on the impact axis (e.g., 1.3) and down on the perpendicular axes (e.g., 0.7)
C. Scale down on the impact axis (e.g., 0.7) and up on the perpendicular axes (e.g., 1.3)
D. Random scale between 0.5 and 1.5 on all axes simultaneously

---

### Q14. An outline shader using the "inverted hull" technique works by:

A. Drawing a Fresnel rim glow in a second shader pass
B. Rendering a second pass of the same mesh slightly scaled outward with inverted normals and a flat outline color
C. Sampling the depth buffer to detect silhouette edges and drawing a line
D. Using the stencil buffer to mark interior pixels and drawing only the boundary pixels

---

### Q15. Unity Shader Graph is available natively in which Unity render pipelines?

A. Built-in Render Pipeline only
B. URP and HDRP (not the built-in render pipeline)
C. All three: Built-in, URP, and HDRP
D. HDRP only, URP uses Amplify Shader Editor

---

### Q16. Hades' sword (Stygius) VFX was designed with short, bright flashes specifically because:

A. The sword is the weakest weapon and should have subtle VFX
B. Short bright flashes read as "fast and decisive" the sword's archetype even in peripheral vision at camera distance
C. The sword has a low particle budget to save GPU resources
D. Short flashes were the only Spine-compatible effect at release

---

### Q17. A "hologram shader" using scan lines typically animates the scan line position by:

A. Moving UV coordinates in a direction perpendicular to the hologram surface
B. Driving the scan line position with a sine wave based on world Y position and time
C. Using a scrolling texture atlas with pre-rendered scan line frames
D. Computing screen-space horizontal lines based on the camera's Y position

---

### Q18. In Unity, implementing "hit stop" most cleanly uses:

A. `Time.timeScale = 0` for all objects in the scene (global pause)
B. `Time.timeScale = 0` with a `WaitForSecondsRealtime` coroutine to restore it after the hit stop frames
C. Calling `animator.speed = 0` on all affected animators via a registered list
D. Stopping all particle systems in the scene via `ParticleSystem.Pause()`

---

### Q19. Unity VFX Graph requires which Unity render pipeline?

A. Built-in Render Pipeline
B. URP or HDRP (not built-in)
C. HDRP only
D. Custom SRP only

---

### Q20. When stacking juice elements (screen shake + hit stop + squash/stretch + VFX burst), what is the design goal?

A. Players should be able to identify each element individually to appreciate the craft
B. The combination should feel satisfying as a unit; players consciously register "that felt great" without identifying individual elements
C. Each element should fire at the same frame for maximum simultaneous impact
D. Juice elements should fire in random order to create unpredictable, exciting feedback

---

### Q21. A Niagara "Simulation Stage" is used to:

A. Define the order in which Emitters update within a System
B. Add a custom GPU compute shader pass that runs arbitrary logic on particle data
C. Stage particles into groups for LOD-based culling
D. Pre-simulate particle physics for the first 50 frames before displaying

---

### Q22. For Destiny 2's Fusion Rifle, the charging coil glow effect was driven by:

A. A fixed emissive texture that plays a baked animation
B. An emissive ramp in the shader driven by a charge parameter that increases over time
C. A particle system that adds more particles as charge increases
D. A screen-space post-process effect that brightens pixels near the weapon

---

### Q23. The Turbulence operator in Unity VFX Graph creates:

A. Random velocity applied once at particle spawn
B. A noise-based force field that continuously perturbs particle velocities for organic motion
C. A turbulence LOD that reduces particle count when frame rate drops below 30fps
D. Wind simulation using Navier-Stokes fluid equations on the GPU

---

### Q24. You are building a mobile action game. Your VFX artist created a Unity VFX Graph effect with 50,000 GPU particles for an ability. On iPhone testing, the game drops to 20fps during the effect. The BEST mitigation is:

A. Switch the VFX Graph to CPU simulation
B. Add an LOD system to the VFX Graph that reduces particle count to 5,000–10,000 at mobile quality settings, and replace with a Shuriken effect at the lowest LOD
C. Remove the VFX effect entirely on mobile
D. Reduce the game's target frame rate to 30fps so 20fps during the effect is acceptable

---

## 🎯 Answer Key (No Cheating!)

```
Q1:  B, VFX Graph = GPU compute shaders; Shuriken = CPU-based
Q2:  B, Initialize: sets each particle's starting values
Q3:  B, Noise texture masks material based on Dissolve Amount parameter
Q4:  B, Fresnel = dot(view, normal), high at glancing/edge angles
Q5:  A, Juice makes games more satisfying without changing mechanics
Q6:  B, Hit stop = brief pause of all animations on impact (2–12 frames)
Q7:  B, Readability at camera distance: high contrast, large particles
Q8:  B, Exposed Property = C# can read/write VFX Graph parameters at runtime
Q9:  B, CPU: debuggable; GPU: far more particles (millions+)
Q10: B, Niagara Events: particles in one emitter trigger another (collision → explosion)
Q11: B, First read: VFX communicates weapon archetype before damage numbers
Q12: B, Perlin noise has spatial coherence: directional shake vs. buzzing jitter
Q13: C, Squash on impact axis (0.7), stretch perpendicular (1.3)
Q14: B, Inverted hull: second pass with scaled-out inverted normals + flat color
Q15: B, Shader Graph: URP and HDRP only (not built-in pipeline)
Q16: B, Short bright flash reads as "fast and decisive", the sword's archetype
Q17: B, Scan lines: sine wave based on world Y position + time
Q18: B, timeScale = 0 + WaitForSecondsRealtime coroutine to restore after hit stop
Q19: B, VFX Graph requires URP or HDRP (not built-in RP)
Q20: B, Juice stacking: satisfying as a unit; no element identified individually
Q21: B, Simulation Stage: custom GPU compute shader pass for arbitrary particle logic
Q22: B, Emissive ramp driven by charge parameter value
Q23: B, Turbulence: noise-based force field for continuous organic motion
Q24: B, VFX LOD: reduce particle count at mobile quality + Shuriken fallback at lowest
```
