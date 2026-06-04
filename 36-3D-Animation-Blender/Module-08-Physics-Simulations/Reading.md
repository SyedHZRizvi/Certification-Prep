---
permalink: /36-3D-Animation-Blender/Module-08-Physics-Simulations/
title: "Module 8: Physics & Simulations"
---

# ⚗️ Module 8: Physics & Simulations

## When the Computer Does the Heavy Lifting

In *The Mitchells vs. the Machines* (2021), Sony's animation team used cloth simulation for the Mitchells' camping gear, rigid body dynamics for the robot army's metallic debris, and fluid simulation for the climactic water-tower sequence. Producing those effects by hand — keyframing each polygon of a flowing tarp, each tumbling robot arm — would have been technically impossible in the production timeline. Physics simulation exists precisely to do the work that defies manual keying.

Blender's simulation systems — Rigid Body, Cloth, Fluid (FLIP/APIC), Soft Body, and Particle Systems — are each governed by a physics engine that runs numerically, solving differential equations per frame. Understanding what these solvers do well (and where they need help from baking and caching) is what separates a production-capable 3D generalist from a student still fighting simulation glitches on render day.

---

## 8.1 Rigid Body Simulations

**Rigid bodies** are objects that collide and react to gravity without deforming. They are the correct tool for props: a table being smashed, dominoes falling, shattered glass, a character falling on their back.

**Setting up a rigid body:**
1. Select the object in Object Mode
2. Properties → Physics → Rigid Body
3. Set **Type:**
   - **Active:** The object is governed by physics (falls, collides, bounces)
   - **Passive:** The object is a fixed collider (floor, walls, static props) — it affects Active objects but doesn't move itself

**Key rigid body settings:**

| Setting | What It Controls |
|---|---|
| **Mass** | Heavier objects resist forces more; light objects bounce more |
| **Friction** | How much the surface slows sliding objects |
| **Restitution (Bounciness)** | 0 = no bounce; 1 = perfectly elastic |
| **Collision Shape** | Convex Hull, Mesh (slow), Box, Sphere, Capsule — match to object shape |
| **Sensitivity → Margin** | Collision detection threshold; reduce for thin objects |

> 🎯 **Exam tip:** The **Collision Shape** is the most performance-critical setting. "Mesh" is exact but slow. "Convex Hull" approximates the convex envelope (correct for solid objects). "Box/Sphere/Capsule" are fast approximations. In production, use Convex Hull for most props; Mesh only for flat sheets or flat floors.

---

## 8.2 Cloth Simulation

**Cloth simulation** is the physics solver for flexible fabric — capes, hair ties, curtains, flags, and any costume element. It works by applying spring forces between vertices, simulating the behavior of woven fiber.

**Setting up cloth:**
1. Select the mesh (the cloth object)
2. Physics Properties → Cloth
3. Key settings:

| Setting | Meaning |
|---|---|
| **Preset** | Cotton, Silk, Leather, Rubber, etc. — pre-tuned parameters |
| **Stiffness → Tension** | Resistance to stretching along threads |
| **Stiffness → Compression** | Resistance to folding |
| **Bending → Stiffness** | Resistance to bending; high = stiff canvas, low = loose silk |
| **Mass** | Heavier cloth falls faster, sags more |
| **Pinning** | Vertex group whose vertices don't move (attach cloth to body) |

**Cloth collision:**
- Enable **Self Collision** to prevent the cloth from passing through itself
- Add a **Collision modifier** to the body mesh (the character's skin) so cloth doesn't pass through the character
- Cloth and collision meshes must be in the same Blender scene; no cross-file collision

> 🚨 **Trap:** Cloth simulation is extremely sensitive to mesh quality. N-gons, very long thin quads, and non-manifold edges all cause instability — the cloth will explode or spike. Always use a clean quad grid for cloth meshes.

---

## 8.3 Fluid Simulation (FLIP and APIC)

Blender's fluid system uses **Mantaflow** (integrated since Blender 2.82) with two fluid algorithms:

| Method | Algorithm | Best For |
|---|---|---|
| **FLIP** (Fluid Implicit Particle) | Particle-based volume tracking | High-detail splashing, complex free-surface |
| **APIC** (Affine Particle-in-Cell) | Improved angular momentum | Vortex-rich flows, swirling water |

**Setting up a fluid simulation:**
1. Create a **Domain** object (the box that contains the simulation)
2. Set the Domain type to Liquid (or Gas for smoke/fire)
3. Add **Flow** objects (the fluid source — a sphere, a mesh emitter)
4. Add **Effector** objects (collision obstacles the fluid hits)
5. Bake the simulation from the Domain settings

**Key domain settings:**

| Setting | Meaning |
|---|---|
| **Resolution** | Simulation grid resolution; higher = more detail, slower |
| **Time Scale** | Slow motion (<1) or fast-forward (>1) |
| **Viscosity** | 0 = water; higher = honey/lava |
| **Surface Tension** | Liquid surface cohesion |
| **Gravity** | Direction and strength (can point sideways for zero-G effects) |

---

## 8.4 The Cache System

> 🚨 **Critical production rule:** **Always bake your simulations before rendering.** An unbaked simulation recalculates from scratch on every frame during rendering — if the renderer renders frame 47 before frame 46 (during distributed rendering), the simulation will be different. Baking pre-calculates every frame and writes it to disk.

**Baking workflow:**
1. Set your frame range (Start/End in the Timeline)
2. Physics Properties → (for each sim object) → Cache → Bake
3. Wait for the bake to complete (visible in the bottom status bar)
4. The simulation cache is stored in the `//cache_files/` subdirectory
5. Render your animation — the renderer reads the pre-baked data

**Cache formats:**
- **Rigid Body:** MDD or PC2 format, or Blender's internal `.bphys`
- **Cloth:** `.bphys` binary format
- **Fluid (Mantaflow):** OpenVDB (.vdb) format — excellent for Compositing in Nuke or Blender's Compositor

**Cache invalidation:** Changing any physics parameter (mass, friction, resolution) after baking requires re-baking from scratch. Partial re-bakes starting from a specific frame are possible but may introduce discontinuities.

---

## 8.5 Particle Systems for Hair and Fur

Blender's **Particle System** can generate hair strands, grass, or scattered objects (stones, leaves) over a surface.

**Hair Particle System settings:**

| Setting | Meaning |
|---|---|
| **Type → Hair** | Static strand generation (not dynamic particles) |
| **Number** | Total hair count (50,000–500,000 for production fur) |
| **Length** | Strand length in Blender units |
| **Children → Interpolated** | Generate child hairs between parent hairs (smoother look with fewer parents) |
| **Clumping** | Group strands into bunches (fur, wet hair) |
| **Roughness** | Add randomness to strand shape |

**Editing hair in Particle Edit Mode:**
- **Ctrl+Tab → Particle Edit Mode** on the mesh with the particle system
- Tools: Comb (steer direction), Add (fill sparse areas), Cut (trim length), Smooth, Puff (raise from surface)

**Blender 4.x Hair:**
Blender 4.0 introduced the new **Hair curves** object type (Geometry Nodes-based), replacing the older particle hair workflow for new projects. Both systems coexist in 4.x. The new system supports curve-based grooming tools directly in Object Mode.

---

## 8.6 Case Study: *The Mitchells vs. the Machines* Simulation Pipeline

Sony Pictures Animation's *The Mitchells vs. the Machines* was made primarily in Maya, but the simulation approach maps directly to Blender equivalents:

**Cloth for camping gear:**
- The tarp over the Mitchells' car used a Marvelous Designer simulation (equivalent to Blender cloth) with pinning at the four corners
- The simulation was baked to a vertex cache (Blender equivalent: .bphys cache) and rendered as a static deformed mesh
- This avoided the simulation re-running during rendering — exactly the production reason to always bake

**Rigid body for robot debris:**
- Each robot component had a simplified rigid body collision shape (Convex Hull equivalent)
- The animation team manually keyframed the "trigger" that started the physics — robots hit by the family car at precisely scripted timing
- This hybrid approach (keyframe to trigger point, then physics after) is standard in production

**The lesson:** Even Hollywood productions use cached, baked simulations. "Simulating on render" is a student mistake. Bake everything.

---

## 8.7 Summary

| System | Use Case | Key Setting |
|---|---|---|
| Rigid Body | Props, debris, falling objects | Collision Shape (Convex Hull for most); Mass; Restitution |
| Cloth | Fabric, capes, flags | Preset; Pinning vertex group; Collision modifier on body |
| Fluid (FLIP/APIC) | Water, smoke, fire | Domain resolution; Time Scale; Viscosity |
| Particles (Hair) | Fur, grass, scatter | Number; Children → Interpolated; Particle Edit Mode |
| Cache | ALL simulations | Always bake before rendering |

---

## 📚 Next Steps

Proceed to [Module 9: Rendering & Output](../Module-09-Rendering-Output/Reading.md) — your animated, simulated scene is ready to render.

---

## 📖 Further Reading

- 📖 **Blender Manual — Fluid Simulation (Mantaflow)** (docs.blender.org)
- 📖 **Blender Manual — Cloth** (docs.blender.org)
- 📖 **Blender Manual — Rigid Body** (docs.blender.org)
- 📖 **Sony Pictures Animation — *The Mitchells vs. the Machines* "Art of" book** — simulation approach documented
