---
title: "Module 4: Tracking — 2D, 3D & Planar"
---

# 📍 Module 4: Tracking — 2D, 3D & Planar

## The Problem of the Moving Camera

In 1993, the visual effects team on *Jurassic Park* faced a simple but devastating problem: how do you put a digital dinosaur into footage that was shot with a moving, handheld camera? The background moves. The perspective shifts. The horizon line tilts. Any digital element placed into the frame would immediately feel "bolted" — floating, disconnected from the physical world.

The answer was camera tracking: mathematically recovering the position, rotation, and lens characteristics of the original camera by analyzing the movement of real-world points in the footage. This is tracking's origin story in film. Today, every shot in every film, commercial, and music video where a digital element is attached to live-action footage relies on this mathematics.

---

## 🎯 The Tracking Hierarchy

Tracking is not one technique — it is a family of techniques with increasing complexity and accuracy:

| Level | Technique | Solves For | Primary Tool |
|-------|-----------|-----------|-------------|
| 1 | 1-Point 2D Track | Translation (X/Y position) | AE built-in tracker |
| 2 | 2-Point 2D Track | Translation + Rotation + Scale | AE built-in tracker |
| 3 | Planar Track | Full 2D perspective (skew, foreshortening) | Mocha AE / Pro |
| 4 | 3D Camera Solve | Full 3D camera position + FOV + lens | 3DEqualizer, SynthEyes, AE 3D Camera Tracker, Blender |
| 5 | Object Tracking | Moving 3D object position within 3D space | 3DEqualizer + Maya |

---

## 🔵 2D Tracking in After Effects

### One-Point Track: Translation Only

A one-point track recovers the X/Y translation of a single feature point in the frame. Use it to:
- Attach a label or graphic to a fixed point on a moving object
- Pin an element to a performer's shoulder or forehead

**Workflow:**
1. Select the footage layer → **Animation → Track Motion**
2. The tracker control appears: a **search region** (outer box) and a **feature region** (inner box)
3. Position the track point on a high-contrast, distinctive feature (corner of an object, edge of a marking)
4. Click **Analyze Forward** (right arrow) — the tracker analyzes every frame
5. Review the track: check that the inner box stays on the feature
6. **Apply** to attach the motion data to a Null Object, then parent your element to the Null

**Good tracking features:**
- High contrast with surroundings
- Unique texture (corners, not uniform areas)
- Stays visible throughout the shot
- Not on deforming surfaces (faces, clothing)

### Two-Point Track: Translation, Rotation, and Scale

A two-point track uses two feature points to recover translation, rotation (from the angle between the points), and scale (from the distance between the points).

Use it to:
- Attach a screen replacement to a phone or monitor
- Replace a sign on a building facade
- Create a corner pin for a flat surface replacement

**Workflow:**
1. **Animation → Track Motion** → check **Rotation** and **Scale** in Tracker options
2. Place two track points on two distinctive features of the surface
3. Analyze forward
4. Apply to a Null Object
5. Use the track data to drive **Corner Pin** on the replacement element

> 🚨 **Trap:** Two-point tracking assumes the surface is **planar** and **rigid**. Tracking a waving flag or a curved surface with two-point tracking produces incorrect results. For non-flat surfaces, use a planar tracker or roto.

---

## 🔷 Mocha AE: Planar Tracking

**Mocha AE** (bundled free with After Effects; the professional version is Mocha Pro) is a planar tracking application. Unlike point-based trackers, Mocha tracks the motion of an **entire plane** — a flat surface — using optical flow analysis of texture patterns on that plane.

### Why Planar Tracking Beats Point Tracking

| Scenario | Point Tracker | Planar Tracker (Mocha) |
|----------|--------------|----------------------|
| Screen replacement (phone) | Works on clean screens; fails with reflections | Tracks the screen surface even with reflections |
| Building sign replacement | Fails if sign has minimal texture | Tracks surrounding plane of the building wall |
| Partially obscured surface | Fails when tracking points go off-screen | Continues tracking from visible surface texture |
| Perspective distortion | Two-point only handles 4 DOF | Full perspective/skew handled |

### Mocha AE Workflow

1. Open Mocha via **Animation → Track in Boris FX Mocha** (or via the Mocha AE effect)
2. Draw a **spline** around the surface to be tracked (a TV screen, a storefront, a road sign)
3. The spline defines the plane — include as much texture as possible, but avoid the edges where lighting changes
4. Click **Track Forward** — Mocha analyzes the planar motion
5. Export the tracking data back to After Effects as a **Corner Pin**
6. Apply the Corner Pin to the replacement layer — it now moves in perspective with the tracked surface

### Warp Stabilizer

Warp Stabilizer (built into After Effects as an effect) is a reverse tracker — it tracks the camera's movement and applies the inverse to stabilize the footage. It uses optical flow and planar analysis across the entire frame.

| Mode | Use Case |
|------|---------|
| **Smooth Motion** | Reduces camera shake while preserving intentional movement |
| **No Motion** | Completely locks the camera position (simulates a locked-off camera) |
| **Framing: Stabilize, Crop** | Crops into the frame to compensate; fastest |
| **Framing: Synthesize Edges** | Fills the edges using content-aware fill (AE 2019+) |

> 🎯 **Exam Tip:** Warp Stabilizer and the 2D Tracker both perform tracking, but in opposite directions. The 2D tracker attaches elements TO the camera movement. Warp Stabilizer removes the camera movement from the footage.

---

## 🌐 3D Camera Solve

A 3D camera solve (also called matchmoving) recovers the **full 3D position, rotation, and field of view** of the original camera from a sequence of frames. The result is a 3D camera in After Effects (or Maya, or Blender) that exactly matches the original physical camera's movement.

With a solved 3D camera, you can:
- Place 3D objects (CG creatures, vehicles, buildings) that move correctly in perspective
- Build geometry that matches the real environment (scene reconstruction)
- Attach 2.5D elements that respond to camera movement correctly

### After Effects 3D Camera Tracker

1. Apply the **3D Camera Tracker** effect to the footage layer
2. AE analyzes the footage automatically (can take minutes for complex shots)
3. The analysis produces **3D trackpoints** — dots in 3D space — that correspond to real-world features
4. Select three or more coplanar trackpoints → right-click → **Create Camera and Null** (or Shadow Catcher, etc.)
5. The AE camera now matches the original camera; the Null is at the selected position in 3D space
6. Parent any 3D layer to this Null to place elements in the scene

### 3DEqualizer (3DE) — The Film Industry Standard

For film-quality 3D camera solves, **3DEqualizer** (by Science-D-Visions) is the industry standard, used at ILM, Weta, Framestore, and every major film studio:

- Takes as input: the footage + on-set measurements (tracking marker positions in 3D world space)
- Outputs: a mathematically precise camera solve with sub-pixel accuracy
- Exports to: Maya, Houdini, Nuke — the 3D pipeline
- Also handles: lens distortion undistortion (critical for anamorphic lenses), multi-camera solves, sensor calibration

AE's 3D Camera Tracker is sufficient for broadcast and commercial work. For film pipeline work, 3DEqualizer is expected.

### Blender Camera Solving

Blender's **Motion Tracking workspace** provides a free 3D camera solver:

1. Import footage into the **Movie Clip Editor**
2. Place tracking markers on distinctive features
3. Run **Track Markers** forward
4. In the **Solve** panel, click **Solve Camera Motion**
5. The solve produces a camera in Blender's 3D viewport
6. Export: render 3D elements from the solved camera, composite in AE or Nuke

Blender's solver is adequate for low-to-mid complexity shots and excellent for learning the workflow.

---

## 🔗 Attaching CG Elements to Tracked Footage

Once a 3D camera solve exists, attaching CG elements is a layered process:

### In After Effects (2.5D / Simple 3D)

1. Use AE's 3D Camera Tracker to place a Null at the attachment point
2. Parent the CG element's 2D layer to the Null
3. The element will move in perspective as the camera moves — but it is still a 2D layer, so perspective distortion must be in the element itself

### In a Full 3D Pipeline (Film Workflow)

1. Matchmove artist exports the solved camera to Maya
2. CG elements (creature, vehicle) are animated in Maya relative to the solved camera
3. The 3D render is composited in Nuke against the plate using the tracked camera's spatial data
4. **Z-depth pass** from the render enables realistic depth-of-field matching

---

## 🔧 Corner Pin: Screen Replacement

Screen replacement (replacing a phone screen, TV monitor, or computer display in footage) is one of the most common 2D tracking applications:

1. Track the four corners of the screen using Mocha AE (recommended) or a 2-point track + manual adjustment
2. Apply a **Corner Pin** effect to the replacement content layer
3. Drive the four Corner Pin coordinates from the tracking data
4. Add a **Screen** or **Multiply** blend mode on the replacement to simulate the screen's self-illumination and glass reflections

> 🚨 **Trap:** A replacement screen that doesn't pick up the glare and reflections from the room looks wrong even if the tracking is perfect. A quick tip: use the Add blend mode at ~80% opacity on a Screen texture overlay to simulate the glass's reflective surface.

---

## 📊 Summary: Tracking Technique Selection

| Shot Type | Best Tracking Approach |
|-----------|----------------------|
| Label/logo on moving object (no perspective change) | 1-point 2D track |
| Screen or sign replacement (flat surface) | Mocha AE planar track → Corner Pin |
| Stabilize shaky handheld footage | Warp Stabilizer |
| Attach CG element to real environment | AE 3D Camera Tracker (commercial) or 3DEqualizer (film) |
| High-precision film matchmove | 3DEqualizer + on-set measurements |
| Free/indie 3D camera solve | Blender Motion Tracking |

---

## 🎯 Next Steps

Module 5 moves from tracking (attaching elements to footage) to creating elements from scratch — particle systems. Trapcode Particular's physics simulation engine lets you build fire, smoke, dust, and magical effects with physical accuracy.

---

## 📚 Further Reading

- **Mocha AE User Guide (Boris FX)** — comprehensive official documentation for every Mocha tracking mode
- **"Matchmoving: The Invisible Art of Camera Tracking" — Tim Dobbert** — the definitive book on professional matchmove for film
- **3DEqualizer tutorials (Science-D-Visions website)** — free tutorials for the film industry standard solver
- **Video Copilot "Element 3D and Camera Tracking" tutorials** — practical AE-based 3D tracking workflows
