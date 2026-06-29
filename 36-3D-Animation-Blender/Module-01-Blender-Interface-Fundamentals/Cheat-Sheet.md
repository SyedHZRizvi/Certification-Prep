---
permalink: /36-3D-Animation-Blender/Module-01-Blender-Interface-Fundamentals/Cheat-Sheet/
title: "Module 1 Cheat Sheet: Blender Interface & Fundamentals"
---

# 🗒️ Module 1 Cheat Sheet: Blender Interface & Fundamentals

---

## Viewport Navigation

| Action | Shortcut |
|---|---|
| Orbit | MMB drag |
| Pan | Shift+MMB drag |
| Zoom | Scroll wheel |
| Frame selected | Numpad . |
| Frame all | Home |
| Camera view | Numpad 0 |
| Perspective/Ortho toggle | Numpad 5 |
| Front / Side / Top | Numpad 1 / 3 / 7 |
| Opposite view | Ctrl + Numpad 1/3/7 |
| Emulate numpad (laptop) | Preferences → Input → Emulate Numpad |

---

## Viewport Shading Modes (Z Pie)

| Mode | Use |
|---|---|
| Wireframe | See-through; check edge flow |
| Solid | Fast modeling preview |
| Material Preview | HDRI-lit material feedback |
| Rendered | Live GPU render (EEVEE or Cycles) |

**Alt+Z** = toggle X-ray (see through mesh)

---

## Mode Switching

| Shortcut | Mode |
|---|---|
| Tab | Toggle Object ↔ Edit Mode |
| Ctrl+Tab | Mode pie menu |
| 1/2/3 (in Edit Mode) | Vertex / Edge / Face select |

---

## Object Mode Essentials

| Shortcut | Action |
|---|---|
| G / R / S | Grab / Rotate / Scale |
| + X / Y / Z | Constrain to world axis |
| + X,X / Y,Y / Z,Z | Constrain to local axis |
| + Shift+X/Y/Z | Constrain to plane (exclude axis) |
| Ctrl+A | Apply transforms |
| Shift+D | Duplicate |
| Alt+D | Linked duplicate (instance) |
| Ctrl+J | Join selected objects |
| M | Move to collection |
| H / Alt+H | Hide / show selected |
| A | Select all |
| Alt+A | Deselect all |

---

## Edit Mode Essentials

| Shortcut | Action |
|---|---|
| Ctrl+R | Loop cut |
| K | Knife |
| E | Extrude |
| I | Inset |
| Ctrl+B | Bevel |
| Alt+Click | Select edge loop |
| Ctrl+Alt+Click | Select edge ring |
| P | Separate to new object |
| F | Fill face |

---

## Universal Shortcuts

| Shortcut | Action |
|---|---|
| Ctrl+Z / Ctrl+Shift+Z | Undo / Redo |
| Ctrl+S | Save |
| F3 | Search any operator |
| Ctrl+Spacebar | Maximize active editor |
| F11 | Show last render |
| N | Toggle N-Panel sidebar |

---

## Coordinate System Quick Reference

| Axis | Direction | Color |
|---|---|---|
| X | Right | Red |
| Y | Forward (into scene) | Green |
| Z | Up | Blue |

**Blender uses right-handed, Z-up coordinates** (different from Unity Y-up).

---

## Properties Panel Categories (Top to Bottom Icons)

| Icon | Category | Key Use |
|---|---|---|
| Camera | Render | Engine, resolution, samples |
| Printer | Output | File format, frame range, path |
| Camera layers | View Layer | Render passes |
| Triangle | Scene | Frame rate, gravity |
| Sky | World | Background, HDRI |
| Orange square | Object | Transform, relations |
| Wrench | Modifier | Subdivision, mirror, armature |
| Particle | Particles | Hair, emission |
| Droplet | Physics | Cloth, fluid, rigid body |
| Bone chain | Object Constraint | IK targets, tracking |
| Triangle mesh | Object Data | Shape keys, vertex groups |
| Sphere (material) | Material | Material slots |
| Bone | Bone | Bone-level rigging (armature only) |

---

## Outliner Icons

| Icon | Meaning |
|---|---|
| Eye | Viewport visibility |
| Camera | Render visibility |
| Arrow cursor | Selectable |
| Filter dropdown | Filter by type/name |

---

## First-Launch Preferences Checklist

- [ ] Select with Left Click (Input → Select With)
- [ ] Spacebar = Play (Input → Spacebar Action)
- [ ] Enable GPU in Cycles Render Devices (System)
- [ ] Set resolution scale for your display (Interface)
- [ ] Emulate numpad if on laptop (Input)
- [ ] Set render output path (File Paths)

---

## Python API (Application Programming Interface) Quick Reference

| Expression | Returns / Does |
|---|---|
| `bpy.context.active_object` | Active object |
| `bpy.context.selected_objects` | All selected objects (list) |
| `bpy.data.objects["Cube"]` | Object by name |
| `bpy.ops.object.delete()` | Delete selected |

---

## Key Workspaces

**Layout** Object Mode · **Modeling** Edit Mode · **Shading** Shader Editor · **Animation** Dope Sheet + Graph Editor · **Geometry Nodes** GN editor · **Scripting** Python console

---

## Gotcha Quick Reference

| Gotcha | Fix |
|---|---|
| No numpad on laptop | Preferences → Input → Emulate Numpad |
| Gimbal lock on bone rotation | Switch Rotation Mode to Quaternion |
| Geometry Nodes applied = irreversible | Keep an un-applied version |
| Sun light won't move scene | Sun position irrelevant; rotate only |
