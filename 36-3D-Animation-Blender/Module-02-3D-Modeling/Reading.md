---
permalink: /36-3D-Animation-Blender/Module-02-3D-Modeling/
title: "Module 2: 3D Modeling for Animation"
---

# 🧱 Module 2: 3D Modeling for Animation

## The Clay and the Wire

Before the Pixar animators could make Woody walk, someone had to build Woody. Before Woody could deform believably when he bent his arm, the geometry beneath his skin had to follow specific rules — rules that were not invented for computers but borrowed from the clay-over-armature technique used in stop-motion and the cel-animation principle of "squash and stretch."

3D modeling for animation is different from 3D modeling for architecture, product visualization, or games in one fundamental way: **the mesh must deform**. Every triangle you place, every edge loop you draw, exists not just to define the shape but to define *how the shape moves*. A character with the wrong topology at the elbow will collapse or pinch when the arm bends. No amount of rigging skill will fix bad topology.

This lesson teaches modeling the way a senior animator at the Blender Institute would teach it: topology first, shape second.

---

## 2.1 What Is Topology and Why Does It Matter for Animation?

**Topology** refers to the arrangement of vertices, edges, and faces that make up a mesh. Good topology means:

- **Quad-dominant geometry** — four-sided faces (quads) deform predictably under subdivision and bone weighting; triangles (tris) and n-gons (5+ sides) create pinching artifacts
- **Edge loops at deformation points** — joints (elbow, knee, shoulder, hip, knuckle, jaw) need concentric rings of edges to provide geometry for smooth bending
- **Even edge spacing** — equally-spaced loops subdivide evenly; uneven spacing creates stretched or compressed texture coordinates

| Face Type | Vertex Count | Deformation Behavior | When to Use |
|---|---|---|---|
| Quad | 4 | Smooth, predictable | All animated surfaces |
| Triangle | 3 | Can pinch on subdivide | Game meshes at silhouette; never at joints |
| N-gon | 5+ | Unpredictable; avoid | Never in animation meshes |

> 🚨 **Trap on the exam:** Triangles are not always bad. Game-ready export meshes are often triangulated. But in the Blender modeling phase before rigging, always work in quads and triangulate only at the end if required by the export target.

---

## 2.2 The Low-Poly Character Base Mesh Workflow

The professional workflow for a character base mesh is a **block-out → refine → detail** pipeline, not a detail-first approach.

### Stage 1: Proportional Block-Out

Begin with a cube or a plane extruded into a rough human silhouette. Do not add detail yet. In Blender:

1. Delete the default cube (**X**)
2. Add a plane (**Shift+A → Mesh → Plane**)
3. Enter Edit Mode (**Tab**)
4. Delete all faces (**A**, **X → Only Faces**)
5. Extrude the remaining vertices upward to form a rough body spine
6. Build outward to form torso, hip, shoulders

**Polygon budget for a production character base mesh (before subdivision):**
- Indie animation: 2,000–6,000 polygons
- Broadcast quality: 6,000–15,000 polygons
- Feature film (practical): 15,000–50,000 polygons (subdivided 2× in final)

### Stage 2: The Mirror Modifier

Characters are symmetrical. The Mirror Modifier duplicates geometry across a chosen axis in real time:

1. In Object Mode, select your mesh
2. Properties → Modifier → Add Modifier → Generate → Mirror
3. Set **Axis** to X (left-right symmetry)
4. Enable **Clipping** to prevent vertices from crossing the mirror plane
5. Enable **Merge** to weld mirrored vertices at the seam

> 🎯 **Workflow tip:** Work on only the left side of the character. The Mirror Modifier reflects it in real time. **Do not apply the modifier until you are ready to do asymmetric detail** (wrinkles, battle scars, etc.).

### Stage 3: Edge Loops at Joints

This is the most important topology skill. Before adding any fine detail, ensure you have proper edge loops at every deformation point:

| Joint | Minimum Loop Count | Reason |
|---|---|---|
| Elbow | 3 concentric loops | Folding requires inside/outside differential |
| Knee | 3 concentric loops | Same as elbow |
| Shoulder | 4–5 loops | Rotates in 3 axes; needs more geometry |
| Hip | 3–4 loops | Combines flex and rotation |
| Wrist | 2 loops | Primarily rotation |
| Knuckle | 2 loops per knuckle | Full finger curl requires 2 loops minimum |
| Jaw | 3 loops (jaw hinge area) | Wide open/close range |
| Eyelid | 2 concentric oval loops | Blink deformation |

Use **Ctrl+R** (loop cut) to add edge loops. The yellow preview line shows where the loop will be cut — scroll the mouse wheel to add multiple loops simultaneously.

---

## 2.3 Subdivision Surface Workflow

The Subdivision Surface modifier (Subsurf) is the cornerstone of production character modeling.

**How it works:** Subsurf takes a low-resolution control cage and mathematically subdivides it to produce a smooth high-resolution mesh. The control cage drives the shape; you add loops to sharpen edges where needed.

| Subsurf Level | Result | Use Case |
|---|---|---|
| 0 | Raw control cage | Topology checking |
| 1 | 4× polygon count, smooth | Blocking and weight painting |
| 2 | 16× polygon count | Animation deformation |
| 3 | 64× polygon count | Final render (Cycles) |

**Key Subsurf settings:**
- **Type → Catmull-Clark:** the standard; produces smooth, rounded forms
- **Type → Simple:** subdivides without smoothing (useful for hard-surface detail)
- **Boundary Smooth:** controls how hard edges remain sharp at the border
- **Quality:** controls subdivide quality in EEVEE viewport

**Creasing edges (sharpen without loops):** Select an edge in Edit Mode → **Shift+E** → drag to set crease value (0=no crease, 1=sharp). Alternatively, add support loops 2–3 rows either side of the edge to sharpen it.

**Topology shortcut — Catmull-Clark rules:**
- 3-pole (3 edges at vertex): appears at the end of a loop; creates curvature pinch; use sparingly
- 4-pole (4 edges): standard; no artifact
- 5-pole (5 edges): appears at the start of a loop; creates slight hardening; acceptable at low curvature areas
- 6-pole+: creates visible artifacts; restructure the mesh

---

## 2.4 Proportional Editing

Proportional Editing (**O** key) makes transforms fall off smoothly over a radius, allowing organic sculpt-like modifications without leaving Edit Mode.

**Use cases:**
- Sculpting a slight belly curve into the torso
- Adjusting the overall shape of a head without changing facial detail
- Rough terrain formation before sculpting

**Falloff types** (right-click the icon in the header, or via the dropdown):

| Falloff Type | Effect |
|---|---|
| Smooth | Gaussian bell curve — most natural |
| Sphere | Smooth falloff stops at radius edge |
| Root | Slower falloff — good for large surfaces |
| Inverse Square | Sharp center, slow edge |
| Sharp | Fast falloff — nearly no influence at edge |
| Linear | Uniform taper |
| Constant | All vertices in radius transform equally |

Scroll the mouse wheel while a transform is active to change the **influence radius**. The circle in the viewport shows the current radius.

---

## 2.5 Case Study: Topology of the *Sprite Fright* Characters

The Blender Institute published the mesh topology for the *Sprite Fright* characters in their production blog. The main character (Ellie, a forest ranger) was built using the following approach:

**Documented topology decisions:**
- **Face topology:** 8–10 edge loops radiating from the nose, with concentric oval loops around the eyes and mouth. This is standard "radial face topology" — it allows the mouth to open, the eyes to blink, and the brow to furrow independently.
- **Limb density:** Approximately 8 edge loops around the circumference of the upper arm, stepping down to 6 at the forearm. This allows a clean, round silhouette at the muscle but saves polygons where detail is less visible.
- **Polygon count:** Ellie's base mesh before subdivision was approximately 4,800 polygons. At subdivision level 2 (for final animation), this produces ~77,000 polygons — within the practical range for Cycles rendering at feature-quality.

**The practical lesson:** 4,800 quads → 77,000 render polygons → believable feature-film character. Start low, subdivide high.

---

## 2.6 Topology Principles: The Rules

| Rule | Why It Matters |
|---|---|
| **Quads everywhere on animated surfaces** | Subdivision and weight painting behave predictably |
| **Edge loops at every joint** | Provides geometry for deformation without artifacts |
| **No T-intersections (T-poles where possible only)** | T-junctions cause shading artifacts |
| **Apply Mirror before asymmetric detail** | Can't have both after merge |
| **Apply Scale before rigging** | Non-unit scale causes bone math errors |
| **Keep face normals consistent (all outward)** | Flip in Edit Mode: Mesh → Normals → Flip |
| **Check topology with Statistics overlay** | Viewport Overlays → Statistics shows polygon count |
| **Even UV seams where stretch is minimal** | Joints and inner surfaces are best UV seam locations |

---

## 2.7 Practical: Building a Character Hand

A hand is the hardest part of a humanoid character. The correct topology approach:

1. **Start with a flat plane for the palm** — 4 columns of quads (for 4 finger attachment points), 3 rows deep
2. **Extrude fingers from the distal row** — select 4 groups of 4 edges, extrude Y → scale slightly for taper
3. **Add 2 loop cuts per knuckle** (**Ctrl+R**, scroll to 2) — the loops must be close to the joint centerline
4. **Curve the fingers slightly in Edit Mode** — proportional editing, smooth falloff, small radius
5. **Thumb:** extruded separately from the palm side-edge, rotated 45° to anatomically correct position

This hand approach is used by Grant Abbitt and CGCookie tutorials — both built their hand tutorials directly from the production topology principles above.

---

## 2.8 Summary

| Concept | Key Point |
|---|---|
| Topology | Quad-dominant; edge loops at all joints |
| Mirror Modifier | Work one side; enable Clipping + Merge |
| Subdivision Surface | Catmull-Clark; level 2 for animation, 3 for final render |
| Loop cuts | Ctrl+R; scroll for multiple; essential at joints |
| Proportional editing | O key; falloff types; scroll to resize radius |
| Polygon budget | 2K–6K indie, 6K–15K broadcast, 15K–50K film (before subsurf) |
| The *Sprite Fright* standard | ~4,800 base quads → 77,000 render polys per character |

---

## 📚 Next Steps

Proceed to [Module 3: Materials, Texturing & Shading](../Module-03-Materials-Texturing-Shading/Reading.md) — once your mesh is topologically clean, it is ready for PBR materials and UV-mapped textures.

---

## 📖 Further Reading

- 📖 **Grant Abbitt — "Learn Low-Poly Character Creation"** (YouTube, see Videos.md)
- 📖 **CGCookie — "Introduction to Rigging in Blender"** (covers the topology requirements for rigging)
- 📖 **Blender Institute — *Sprite Fright* Production Docs** (blender.org/about/projects/)
- 📖 **"Digital Sculpting with Mudbox" (Mastering — Paul Allard)** — topology principles transfer directly to Blender
