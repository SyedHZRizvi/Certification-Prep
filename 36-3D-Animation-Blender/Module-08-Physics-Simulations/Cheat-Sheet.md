---
permalink: /36-3D-Animation-Blender/Module-08-Physics-Simulations/Cheat-Sheet/
title: "Module 8 Cheat Sheet: Physics & Simulations"
---

# 🗒️ Module 8 Cheat Sheet: Physics & Simulations

---

## Rigid Body Quick Reference

| Setting | Value | Effect |
|---|---|---|
| Type: Active | — | Physics-controlled |
| Type: Passive | — | Fixed collider |
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
