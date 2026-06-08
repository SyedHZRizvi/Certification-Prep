---
permalink: /36-3D-Animation-Blender/Module-08-Physics-Simulations/Cheat-Sheet/
title: "Module 8 Cheat Sheet: Physics & Simulations"
---

# 🗒️ Module 8 Cheat Sheet: Physics & Simulations

---

## Rigid Body Quick Reference

| Setting | Value | Effect |
|---|---|---|
| Type: Active |, | Physics-controlled |
| Type: Passive |, | Fixed collider |
| Collision Shape | Convex Hull | Best for solid props |
| Collision Shape | Mesh | Exact but slow |
| Restitution | 0 | No bounce |
| Restitution | 1 | Perfect bounce |

---

## Cloth Setup Checklist

- [ ] Cloth object: Physics → Cloth → enable
- [ ] Choose preset (Cotton, Silk, Leather...)
- [ ] Pin vertex group: select attach vertices → create vertex group → set in Cloth settings
- [ ] Body mesh: Physics → Collision → enable
- [ ] Self Collision: enable for garments
- [ ] Bake the simulation before rendering

---

## Fluid Simulation Objects

| Object Type | Role |
|---|---|
| Domain | Bounding box of simulation |
| Flow | Fluid emitter (sphere, mesh) |
| Effector | Collision obstacle |

**FLIP vs. APIC:**
- FLIP: splashing, high detail
- APIC: swirling, vortex, angular momentum

---

## Cache Baking Rule

> **ALWAYS BAKE BEFORE RENDERING**

Changing any physics parameter → full re-bake required

**Cache locations:**
- Cloth, Rigid Body: `//cache_files/*.bphys`
- Fluid: `//cache_files/*.vdb` (OpenVDB)

---

## Particle Hair Quick Reference

| Setting | Use |
|---|---|
| Type → Hair | Static strands |
| Number | 50K–500K for production fur |
| Children → Interpolated | Dense look from fewer parents |
| Clumping | Fur/wet hair grouping |
| Particle Edit Mode | Ctrl+Tab → comb/cut/smooth |

---

## Simulation Systems Summary

| System | Object Type | Cache Format |
|---|---|---|
| Rigid Body | Any mesh | .bphys |
| Cloth | Quad mesh (clean topo) | .bphys |
| Fluid | Domain/Flow/Effector | .vdb (OpenVDB) |
| Hair | Particle System or Hair Curves | N/A (re-computes) |

---

## Cloth Parameter Ranges

| Fabric Type | Tension | Bending Stiffness | Mass (kg/m²) |
|---|---|---|---|
| Silk / scarf | 5 | 0.05 | 0.1 |
| Cotton T-shirt | 15 | 0.5 | 0.3 |
| Denim / canvas | 40 | 5.0 | 0.5 |
| Leather jacket | 80 | 10.0 | 0.86 |

**Cloth explosion fix:** (1) Cloth starts outside character body; (2) Quality Steps: raise to 15–30; (3) Pin weight near collision zone: reduce to <0.8

---

## Fluid Domain Settings

| Setting | Range | Effect |
|---|---|---|
| Resolution | 32–256 | Detail level; higher = slower |
| Time Scale | 0.1–5.0 | Slow motion / fast-forward |
| Viscosity | 0–∞ | 0=water, high=honey |
| Surface Tension | 0–1 | Droplet cohesion |

**Domain must enclose all fluid movement, size 20–30% larger than needed.**

---

## Render Farm Cache Strategy

1. Bake all simulations on one machine
2. Copy `//cache_files/` to shared network drive
3. Set Blender relative paths to point to shared drive
4. Render nodes read identical pre-baked data → identical frames

**Without baking on a farm:** Each node recalculates from random seed → different frames per machine.

---

## GN vs. Physics Decision

| Effect | Use GN | Use Physics |
|---|---|---|
| Static prop scatter | Yes |, |
| Dynamic falling leaves |, | Yes (Particles) |
| Static water surface | Yes (Noise displacement) |, |
| Animated pouring water |, | Yes (FLIP fluid) |
| Deterministic crowd | Yes (instances) |, |
| Colliding crowd |, | Yes (rigid body) |

**GN = deterministic (same result always); Physics = stochastic (requires baking for reproducibility)**

---

## Soft Body Settings Reference

| Setting | Range | Effect |
|---|---|---|
| Goal → Strength | 0–1 | How strongly vertices return to rest position |
| Goal → Damping | 0–50 | Speed of oscillation settling |
| Edges → Stiffness | 0.1–1 | Resistance to stretching |
| Mass | 0.01–50 | Inertia (heavier = less responsive) |

**Use Soft Body for jiggle on body parts (belly, cheeks). High Goal Strength (0.8+) + moderate Damping (20) = controllable secondary jiggle.**

---

## Dynamic Paint Quick Reference

| Role | Object | Purpose |
|---|---|---|
| Canvas | Ground mesh | Receives the paint / tracks deformation |
| Brush | Foot / wheel | Paints the canvas where it contacts |

Output: Image Sequence (high res) or Vertex Colors (fast, lower res). Always bake.

---

## Gotcha Quick Reference

| Gotcha | Fix |
|---|---|
| Cloth exploding | Start outside body; increase Quality Steps; reduce pin weight near collision |
| Fluid exits domain boundary | Increase domain size 20–30% |
| Simulation different per render node | Always bake before distributed rendering |
| Cloth passes through character | Add Collision modifier to character mesh |
| Dynamic Paint brush non-manifold | Use simplified proxy mesh as brush (capsule / rounded box) |
