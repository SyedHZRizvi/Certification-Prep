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

## 8.2b Cloth Simulation: Parameter Reference

Blender's cloth system exposes many parameters. These ranges reflect real production settings:

| Preset | Tension | Compression | Bending | Mass (kg/m²) | Real Material |
|---|---|---|---|---|---|
| Cotton | 15 | 15 | 0.5 | 0.3 | T-shirt, light fabric |
| Wool | 10 | 10 | 1.0 | 0.4 | Sweater, thick fabric |
| Silk | 5 | 5 | 0.05 | 0.1 | Flowing dress, scarf |
| Leather | 80 | 80 | 10.0 | 0.86 | Jacket, shoe upper |
| Denim | 40 | 40 | 5.0 | 0.5 | Jeans, canvas |
| Rubber | 15 | 15 | 0.5 | 2.0 | Wetsuit, rubber sheet |

**Cloth collision parameters:**

| Parameter | Default | Effect |
|---|---|---|
| **Distance (Self Collision)** | 0.015m | Minimum distance between cloth faces (prevents self-penetration) |
| **Distance (Object Collision)** | 0.015m | Minimum distance from character mesh |
| **Friction (Object)** | 5 | How much the character mesh slows cloth sliding |
| **Impulse Clamping** | 100 | Limits explosive forces at collision boundaries |
| **Quality Steps** | 5 | Higher = more stable but slower; increase if cloth explodes |

> ⚠️ **Gotcha — Cloth Exploding:** Cloth "explosion" (vertices flying off to infinity) is caused by collision mesh overlap or extreme pinning forces. The three most common causes: (1) the cloth mesh and the character mesh start intersecting at frame 0 — move the cloth slightly outward in Edit Mode so it begins outside the character; (2) the Quality Steps are too low — increase to 15–30 for complex folding; (3) the pinning vertex group has weight 1.0 on vertices that are also colliding — reduce pin weight near the collision zone.

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

## 8.3b Fluid Simulation Settings Reference

| Setting | Range | Low Value Effect | High Value Effect |
|---|---|---|---|
| **Resolution** | 32–256+ | Fast but blocky; low detail | Slow but detailed splashing |
| **Time Scale** | 0.1–5.0 | Slow motion | Fast-forward (water falls faster) |
| **Viscosity** | 0.0–∞ | Water-like, free-flowing | Honey, lava — high viscosity |
| **Surface Tension** | 0.0–1.0 | Droplets splash widely | Droplets hold together (mercury-like) |
| **Particle Radius** | 0.1–3.0 | Fine detail, many particles | Coarse appearance, fewer particles |
| **Sampling (CFL)** | 1–4 | Faster, less stable | Slower, more stable for fast flows |

**Gas simulation (smoke/fire) key settings:**

| Setting | Use |
|---|---|
| **Buoyancy Density** | Negative = sinks (cold smoke, CO₂); Positive = rises (hot smoke) |
| **Temperature** | Drives fire color; higher = blue-white flame; lower = orange |
| **Dissolve** | Smoke fades over time (set in frames) |
| **Noise** | Adds turbulence detail to smoke columns |
| **Fire Reaction Speed** | Controls how quickly fuel converts to flame |

> ⚠️ **Gotcha — Fluid Domain Must Enclose the Entire Simulation:** The fluid simulation domain box must be large enough to contain all fluid movement — if a water stream exits the domain boundary, it disappears (clipped at the boundary). Size the domain generously: 20–30% larger than you think you need. Increasing domain size significantly increases memory usage and bake time, so find the minimum practical size.

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

## 8.4b Simulation Performance: Cache Formats and Strategy

| Cache Format | Used By | File Size | Portability |
|---|---|---|---|
| **.bphys** | Rigid Body, Cloth, Particles | Medium | Blender-only |
| **OpenVDB (.vdb)** | Fluid (Mantaflow smoke/liquid) | Large | Industry-standard (Houdini, Nuke, Maya compatible) |
| **MDD / PC2** | Vertex cache (baked animation) | Very large | Maya, Max compatible |
| **Alembic (.abc)** | Full scene animation export | Large | Broadest industry compatibility |

**Render farm strategy for simulations:**
When using distributed rendering (network render farm), the cache must be accessible by all render nodes via a shared network drive. If each node recalculates the simulation independently, results will differ due to floating-point non-determinism. The correct workflow:
1. Bake all simulations on a single machine
2. Copy the `//cache_files/` directory to the shared network drive
3. On render nodes, set the Blender file's relative paths to point to the shared drive
4. Each render node reads the same pre-baked cache — guaranteed identical frames

> 🎯 **What the exam tests:** Baking simulations before rendering on distributed farms is a core certification topic. The exam may specifically ask: "What happens if you render an unbaked fluid simulation across multiple computers?" — the answer is "each machine produces different results because the simulation recalculates from random seed."

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

## 8.5b Geometry Nodes for Animation: Procedural Simulation Alternatives

Blender 4.x's Geometry Nodes can replicate some physics behaviors procedurally — without baking, without cache files, and often faster:

**Geometry Nodes physics alternatives:**

| Physical Behavior | GN Alternative | Advantage |
|---|---|---|
| Rigid body scatter | **Distribute Points on Faces** + **Instance on Points** | No baking; positions driven by noise |
| Cloth draping (static) | **Subdivision + Displacement** | Instant; no solver needed |
| Particle scatter (static) | **Distribute Points + Instance** | Realtime; controllable density |
| Trailing particles (smoke trail) | **Curve to Mesh** + animated offset | Deterministic; reproducible |
| Crowd simulation (simple) | **Instance on Points** + **Rotate Instances** | Thousands of instances at near-zero cost |

**When to use Geometry Nodes instead of physics:**
- The simulation is static (baked to a final shape, not animated) — GN displacement is faster
- The effect doesn't require frame-to-frame continuity — a scatter of leaves doesn't need to "fall"
- Render farm compatibility is required without a shared cache drive

**When physics simulation is still required:**
- Dynamic cloth that reacts to character motion
- Fluid that responds to collision objects
- Rigid bodies that interact with each other via collision

> 🎯 **What the exam tests:** Blender 4.x certification increasingly covers Geometry Nodes as an animation tool — not just a modeling tool. Know that Geometry Nodes parameters can be keyframed (they appear as properties in the modifier stack and can have F-Curves applied via the Drivers system or right-click → Insert Keyframe).

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

## 8.7b Spray Fright's Physics: Documented Simulation Choices

The *Sprite Fright* forest environment contained numerous physics-simulated elements, documented in the production blog:

**Mushroom cluster physics:** The forest floor's mushroom clusters — which featured prominently in multiple shots — used a **rigid body "domino" setup**. Rather than animating each mushroom falling over individually, the TDs used:
1. All mushrooms set as Active rigid bodies
2. A single keyframed sphere (an invisible "trigger ball") animated to roll through the mushroom cluster
3. As the sphere rolled, its rigid body collisions knocked over mushrooms realistically
4. The simulation was baked and then used as a vertex cache (applied to the mushroom mesh via Bake action → Apply as Shape Keys workflow)

This hybrid approach — physics for the "chaos" and baked vertex cache for reproducible render output — is a production standard technique. The randomness of physics is tamed by baking.

**Leaf/debris particle systems:** Falling leaves and ground debris were Geometry Nodes scatters (Blender 3.x) with animation-offset parameters per instance (each leaf's rotation was animated with a different Phase offset on a Noise modifier). This produced the appearance of independently moving leaves without any physics simulation — faster to render and deterministic.

**The lesson from *Sprite Fright*:** The production team explicitly avoided live physics whenever possible, preferring baked caches or Geometry Nodes procedural animation. The reason: unpredictable physics on a render farm = inconsistent frames. Deterministic systems = production reliability.

---

## 8.7c Geometry Nodes vs. Physics: Decision Framework

When to choose Geometry Nodes procedural animation vs. physics simulation:

| Scenario | Use GN | Use Physics | Reason |
|---|---|---|---|
| Static scatter of props on terrain | GN | — | No movement; instantaneous; no baking |
| Falling leaves (must react to wind) | — | Cloth/Particles | Dynamic response to forces needed |
| Falling leaves (pre-animated, deterministic) | GN | — | Noise modifier on GN offset = cheaper |
| Crowd of walking characters | GN (instances) | — | Instance many copies cheaply |
| Crowd of physically colliding characters | — | Physics (rigid body) | Collision requires solver |
| Cloth draping to a final rest pose (static) | GN (displacement) | — | Use noise displacement for static drape |
| Cloth animated over character motion | — | Cloth sim | Dynamic deformation requires solver |
| Water pouring out of a cup | — | Fluid (FLIP) | Free surface dynamics require solver |
| Static water surface with ripples | GN (displacement) | — | Animated noise = water-like without solver |
| Rope hanging between two points | GN (Curve + Catenary) | Cloth or Soft Body | Static rope = GN; swinging = physics |

**The deciding question:** Does the effect require frame-to-frame state continuity (where what happened in frame N affects frame N+1)? If yes → physics. If the result is predictable from parameters alone, without history → Geometry Nodes.

> 🎯 **What the exam tests:** The boundary between physics simulation and procedural Geometry Nodes is an increasingly important conceptual distinction in Blender 4.x certification. Know the word "deterministic" — GN results are deterministic (same inputs always = same output); physics results are not (tiny floating-point variations cause divergence over many frames on different machines).

---

## 8.8 What the Exam Tests: Physics Module

| Topic | Tested Knowledge |
|---|---|
| Rigid body types | Active (physics-driven) vs. Passive (fixed collider) |
| Collision shape priority | Convex Hull for most props; Mesh for thin flat objects |
| Cloth presets | Cotton, Silk, Leather (know approximate stiffness differences) |
| Cloth self-collision | Enable to prevent cloth passing through itself |
| Pinning | Vertex group at weight 1.0 anchors cloth to body |
| Fluid objects | Domain (bounding box), Flow (emitter), Effector (obstacle) |
| FLIP vs. APIC | FLIP = splashing; APIC = swirling, angular momentum |
| Mantaflow | Fluid engine integrated since Blender 2.82 |
| Cache baking | Always bake before rendering; changing params = full re-bake |
| Cache formats | Rigid Body/Cloth = .bphys; Fluid = OpenVDB (.vdb) |
| Render farm caching | Pre-bake on one machine; share cache to all nodes |
| GN as physics alternative | Distribute Points = static scatter; no baking needed |
| Cloth explosion fix | Separate mesh from body; increase Quality Steps; reduce pin weight |
| Fluid domain sizing | 20–30% larger than needed to prevent boundary clipping |

---

## 8.8b Dynamic Paint: Surface Interaction Simulation

**Dynamic Paint** is an underused physics system in Blender that allows objects to "paint" onto surfaces they contact — creating effects like footprints in snow, water spreading across a surface, or tire tracks in mud.

**Dynamic Paint roles:**
- **Canvas:** The surface that receives the paint (the snow, the mud)
- **Brush:** The object that paints onto the canvas (the foot, the tire)

**Setting up dynamic paint footprints:**
1. Select the ground mesh → Physics → Dynamic Paint → Enable → Type: Canvas
2. Output: Image Sequence (bakes per-frame texture) or Vertex Colors (faster, lower resolution)
3. Select the character's foot mesh → Physics → Dynamic Paint → Enable → Type: Brush
4. Brush Source: Proximity (paint in a radius) or Mesh Volume (exact contact)
5. Bake the Dynamic Paint canvas from the Canvas settings
6. The output image sequence can then be used as a texture driving displacement or roughness on the ground material

**Production use cases documented:** *The Mitchells vs. the Machines* equivalent technique (Maya-based but concept identical) was used for the camping scene's mud interaction — characters walking through mud produced trailing footprint impressions via a similar canvas/brush system.

> ⚠️ **Gotcha — Dynamic Paint and Non-Manifold Meshes:** The Dynamic Paint brush requires a watertight (manifold) mesh to function correctly in "Mesh Volume" mode. A mesh with holes, non-manifold edges, or internal geometry will produce unpredictable brush coverage. Use a simplified collision proxy mesh (a clean capsule or rounded box shape) as the brush rather than the detailed character mesh.

---

## 8.9 Soft Body Simulation

**Soft Bodies** are objects that deform under forces while maintaining volume — unlike cloth (which is a surface) or rigid bodies (which don't deform at all). Soft bodies are used for:

- Bouncy balls and jiggly cartoon elements
- Organic blobs and slime
- Secondary jiggle on character body parts (belly, cheeks, breasts)

**Setting up a soft body:**
1. Select the mesh object
2. Physics Properties → Soft Body → Enable
3. Key settings:

| Setting | Range | Effect |
|---|---|---|
| **Goal → Strength** | 0–1 | How strongly vertices return to their original position |
| **Goal → Damping** | 0–50 | How quickly oscillation settles (high = less bouncy) |
| **Edges → Stiffness** | 0.1–1.0 | Resistance to stretching along edges |
| **Edges → Damping** | 0–50 | Damping of edge spring forces |
| **Mass** | 0.01–50 | Heavier objects have more inertia |

> ⚠️ **Gotcha — Soft Body vs. Cloth for Jiggle:** Both Soft Body and Cloth can be used for secondary jiggle, but they have different approaches. Soft Body maintains volume and supports pressure settings (good for balls). Cloth is pure surface — no volume preservation. For character belly jiggle, Soft Body with high Goal strength (0.8–0.9) and moderate Damping (20) is more controllable than cloth.

---

## 📚 Next Steps

Proceed to [Module 9: Rendering & Output](../Module-09-Rendering-Output/Reading.md) — your animated, simulated scene is ready to render.

---

## 📖 Further Reading

- 📖 **Blender Manual — Fluid Simulation (Mantaflow)** (docs.blender.org)
- 📖 **Blender Manual — Cloth** (docs.blender.org)
- 📖 **Blender Manual — Rigid Body** (docs.blender.org)
- 📖 **Sony Pictures Animation — *The Mitchells vs. the Machines* "Art of" book** — simulation approach documented
