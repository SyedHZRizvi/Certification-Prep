---
permalink: /36-3D-Animation-Blender/Module-08-Physics-Simulations/Quiz/
title: "Module 8 Quiz: Physics & Simulations"
---

# 🧪 Module 8 Quiz: Physics & Simulations

**24 questions · Allow 30 minutes · No notes.**

---

### Q1.
A **Passive** rigid body object in Blender:

A. Falls and collides under physics like any other object
B. Is invisible to the rigid body simulation
C. **Acts as a fixed collider that other Active objects bounce off, but does not move itself**
D. Is a cloth object constrained to behave rigidly

---

### Q2.
The **Restitution** (Bounciness) setting on a rigid body, when set to 0, means:

A. Maximum bouncing, completely elastic collision
B. The object ignores gravity
C. **No bounce at all, all kinetic energy absorbed on collision**
D. The object passes through colliders without interaction

---

### Q3.
For most solid props in a rigid body simulation, the best **Collision Shape** is:

A. Mesh (exact)
B. Box
C. Sphere
D. **Convex Hull**

---

### Q4.
The most critical production rule for all physics simulations before rendering is:

A. Enable Self-Collision on all cloth objects
B. Set the Domain resolution to the maximum value
C. Use only APIC fluid, never FLIP
D. **Bake the simulation to cache before rendering**

---

### Q5.
In Blender's cloth simulation, the **Pinning** vertex group specifies:

A. The cloth geometry that collides with other objects
B. The resolution of the cloth's internal spring grid
C. The mass distribution across the cloth surface
D. **The vertices that do not move in the simulation (attach points)**

---

### Q6.
Cloth simulation instability (explosions, spikes) is most commonly caused by:

A. Using the Silk preset instead of Cotton
B. Enabling Self-Collision on thin meshes
C. Setting the Domain resolution too high
D. **Poor mesh quality, n-gons, extremely long thin quads, or non-manifold geometry**

---

### Q7.
For a fluid simulation in Blender (Mantaflow), the three required object types are:

A. Emitter, Receptor, Container
B. Source, Drain, Floor
C. **Domain, Flow, Effector**
D. Emitter, Collider, Volume

---

### Q8.
The **APIC** (Affine Particle-in-Cell) fluid solver, compared to FLIP, is better for:

A. High-volume water splashing
B. Slow-moving viscous fluids like honey
C. **Vortex-rich flows with swirling motion (better angular momentum conservation)**
D. Gas/smoke simulations

---

### Q9.
The **Domain** object in a fluid simulation defines:

A. The material that the fluid renders with
B. The object that emits the fluid
C. **The 3D bounding box within which the fluid simulation is calculated**
D. The collision obstacle the fluid hits

---

### Q10.
The fluid simulation cache format used by Blender's Mantaflow for volume data is:

A. .bphys
B. .mdd
C. .abc (Alembic)
D. **OpenVDB (.vdb)**

---

### Q11.
In a Particle System for hair, **Children → Interpolated** mode:

A. Generates child particles from a physics-based spring system
B. Creates secondary particles that follow the path of parent particles exactly
C. **Generates additional child hair strands interpolated between parent hairs for a smoother, denser look**
D. Subdivides each parent hair strand into multiple segments

---

### Q12.
The **Particle Edit Mode** in Blender allows you to:

A. Change the particle collision shape
B. Set particle physics parameters per individual strand
C. Bake the particle simulation to keyframes
D. **Comb, cut, smooth, and shape hair strands interactively**

---

### Q13.
Which simulation system in Blender uses **Mantaflow**?

A. Rigid body
B. Cloth
C. **Fluid (liquid and gas/smoke)**
D. Particle hair

---

### Q14.
The **Time Scale** setting in a fluid domain at a value less than 1.0 creates:

A. A faster-moving fluid
B. A more viscous fluid
C. **Slow-motion fluid behavior**
D. A lower-resolution simulation

---

### Q15.
In *The Mitchells vs. the Machines*, the cloth simulation for the tarp was baked to a **vertex cache**. In Blender terms, this is equivalent to:

A. Exporting the mesh to Alembic format
B. **Baking the cloth simulation to a .bphys cache file before rendering**
C. Converting the cloth to shape keys
D. Rendering the cloth with EEVEE instead of Cycles

---

### Q16.
A rigid body with a **Mass** of 100kg compared to one with 1kg will:

A. Fall faster under gravity
B. Bounce more (higher restitution)
C. **Resist forces and collisions more, appearing heavier and slower to accelerate**
D. Require more rigid body solver iterations per frame

---

### Q17.
The **Collision modifier** (Physics Properties → Collision) must be added to:

A. The cloth object itself
B. **The body mesh that the cloth should not pass through**
C. The fluid domain to prevent fluid passing through floors
D. Every object in the scene when any simulation is running

---

### Q18.
Blender 4.0 introduced a new hair system that replaces particle hair for new projects. It uses:

A. The physics soft body solver for strand simulation
B. Grease Pencil strands with physics modifiers
C. **Hair Curves objects with Geometry Nodes-based grooming**
D. An NLA strip-based system for hair animation

---

### Q19.
What happens if you render an animation without baking a cloth simulation, and your renderer renders Frame 47 before Frame 46?

A. Nothing, Blender renders frames in sequential order always
B. Frame 47 shows the cloth in the Frame 46 position (off by one)
C. **The simulation recalculates from frame 1 for each frame, causing incorrect and inconsistent results**
D. The cloth simulation is skipped and the mesh renders in its rest pose

---

### Q20.
The **Viscosity** setting in a Mantaflow fluid domain at a very high value simulates:

A. Very fast, splashy water
B. Surface tension (tiny water droplets)
C. Turbulent ocean waves
D. **Slow-moving, thick fluids like honey or lava**

---

### Q21.
In the Blender rigid body simulation, **Friction** controls:

A. How much the object bounces on collision
B. The maximum rotation speed of the object
C. **How much the surface slows objects sliding across it**
D. The air resistance applied to the rigid body

---

### Q22.
The Sony animation feature that used cloth simulation for camping gear tarp and rigid body for robot debris, referenced as a case study in this module, is:

A. Spider-Man: Into the Spider-Verse
B. **The Mitchells vs. the Machines (2021)**
C. Spider-Man: Across the Spider-Verse
D. Puss in Boots: The Last Wish

---

### Q23.
After baking a simulation, if you change the **Mass** setting on a rigid body object, you must:

A. Only re-bake from the first changed frame forward
B. Update the cache file path and the simulation updates automatically
C. Enable the "Incremental Bake" option and re-bake only the affected frames
D. **Re-bake the entire simulation from the beginning (changing physics parameters invalidates the cache)**

---

### Q24.
The **Self Collision** option in cloth simulation prevents:

A. The cloth from moving outside the fluid domain
B. The cloth from interacting with other cloth objects in the scene
C. **The cloth from passing through itself (intersecting its own geometry)**
D. The cloth from being influenced by gravity

---

## 🎯 Answer Key (No Cheating!)

```
Q1.  C, Passive = fixed collider, does not move
Q2.  C, Restitution 0 = no bounce (all energy absorbed)
Q3.  D, Convex Hull is best for most solid props
Q4.  D, Always bake before rendering
Q5.  D, Pinning vertex group = vertices that don't move (attach points)
Q6.  D, Bad mesh topology causes cloth explosion/instability
Q7.  C, Domain, Flow, Effector are the three required types
Q8.  C, APIC better for swirling/vortex-rich flows
Q9.  C, Domain = bounding box for the simulation
Q10. D, Mantaflow uses OpenVDB (.vdb) for volume cache
Q11. C, Children → Interpolated generates dense child hairs between parents
Q12. D, Particle Edit Mode = comb, cut, smooth hair
Q13. C, Mantaflow handles fluid (liquid + gas/smoke)
Q14. C, Time Scale < 1.0 = slow motion fluid
Q15. B, Vertex cache = baking cloth to .bphys for stable render
Q16. C, Higher mass = more resistance to forces; heavier feel
Q17. B, Collision modifier goes on the body mesh (the obstacle)
Q18. C, Blender 4.0 = Hair Curves + Geometry Nodes grooming
Q19. C, Unbaked sim recalculates from frame 1 each render call
Q20. D, High viscosity = thick fluid (honey, lava)
Q21. C, Friction = surface resistance to sliding
Q22. B, The Mitchells vs. the Machines (2021)
Q23. D, Changing physics params invalidates cache; full re-bake required
Q24. C, Self Collision prevents cloth from passing through itself
```
