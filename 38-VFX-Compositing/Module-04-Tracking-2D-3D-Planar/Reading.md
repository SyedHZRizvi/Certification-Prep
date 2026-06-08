---
title: "Module 4: Tracking, 2D, 3D & Planar"
---

# 📍 Module 4: Tracking, 2D, 3D & Planar

## The Problem of the Moving Camera

In 1993, the visual effects team on *Jurassic Park* faced a simple but devastating problem: how do you put a digital dinosaur into footage that was shot with a moving, handheld camera? The background moves. The perspective shifts. The horizon line tilts. Any digital element placed into the frame would immediately feel "bolted", floating, disconnected from the physical world.

The answer was camera tracking: mathematically recovering the position, rotation, and lens characteristics of the original camera by analyzing the movement of real-world points in the footage. This is tracking's origin story in film. Today, every shot in every film, commercial, and music video where a digital element is attached to live-action footage relies on this mathematics.

---

## 🎯 The Tracking Hierarchy

Tracking is not one technique, it is a family of techniques with increasing complexity and accuracy:

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
4. Click **Analyze Forward** (right arrow), the tracker analyzes every frame
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

> ⚠️ **Rookie mistake:** Two-point tracking assumes the surface is **planar** and **rigid**. Tracking a waving flag or a curved surface with two-point tracking produces incorrect results. For non-flat surfaces, use a planar tracker or roto.

---

## 📊 Tracking Algorithm Comparison

Understanding how tracking algorithms work and why each fails is an exam-level topic:

| Algorithm | How It Works | Best Scene | Failure Mode |
|-----------|-------------|-----------|-------------|
| **Correlation** (AE built-in) | Compares feature region texture across frames; finds best match by correlation score | Distinct texture, consistent lighting | Motion blur, low contrast, similar-texture features |
| **Optical Flow** (Mocha planar) | Models the motion of a coherent plane of pixels using the Lucas-Kanade algorithm | Any textured surface | Feature-poor surfaces (clear glass, uniform walls) |
| **Structure from Motion** (3DE, SynthEyes) | Recovers 3D camera from multiple 2D feature tracks; solves camera matrix mathematically | Feature-rich scenes with clear parallax | Purely 2D camera moves (no parallax = unsolvable) |
| **Machine Learning** (AE Warp Stabilizer optical flow) | Neural network estimates motion fields across the frame | Uniform motion, short clips | Complex motion, overlapping objects |

> 🎯 **What the exam tests:** Structure from Motion requires parallax, the camera must translate (move in 3D space) for the 3D solve to work. A shot where the camera only rotates (pans/tilts) cannot be solved with SfM because there is no parallax to establish 3D depth.

---

## 🔷 Mocha AE: Planar Tracking

**Mocha AE** (bundled free with After Effects; the professional version is Mocha Pro) is a planar tracking application. Unlike point-based trackers, Mocha tracks the motion of an **entire plane** a flat surface using optical flow analysis of texture patterns on that plane.

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
3. The spline defines the plane, include as much texture as possible, but avoid the edges where lighting changes
4. Click **Track Forward**, Mocha analyzes the planar motion
5. Export the tracking data back to After Effects as a **Corner Pin**
6. Apply the Corner Pin to the replacement layer, it now moves in perspective with the tracked surface

### Warp Stabilizer

Warp Stabilizer (built into After Effects as an effect) is a reverse tracker, it tracks the camera's movement and applies the inverse to stabilize the footage. It uses optical flow and planar analysis across the entire frame.

| Mode | Use Case |
|------|---------|
| **Smooth Motion** | Reduces camera shake while preserving intentional movement |
| **No Motion** | Completely locks the camera position (simulates a locked-off camera) |
| **Framing: Stabilize, Crop** | Crops into the frame to compensate; fastest |
| **Framing: Synthesize Edges** | Fills the edges using content-aware fill (AE 2019+) |

> 🎯 **What the exam tests:** Warp Stabilizer and the 2D Tracker both perform tracking, but in opposite directions. The 2D tracker attaches elements TO the camera movement. Warp Stabilizer removes the camera movement from the footage.

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
3. The analysis produces **3D trackpoints** dots in 3D space that correspond to real-world features
4. Select three or more coplanar trackpoints → right-click → **Create Camera and Null** (or Shadow Catcher, etc.)
5. The AE camera now matches the original camera; the Null is at the selected position in 3D space
6. Parent any 3D layer to this Null to place elements in the scene

### 3DEqualizer (3DE), The Film Industry Standard

For film-quality 3D camera solves, **3DEqualizer** (by Science-D-Visions) is the industry standard, used at ILM, Weta, Framestore, and every major film studio:

- Takes as input: the footage + on-set measurements (tracking marker positions in 3D world space)
- Outputs: a mathematically precise camera solve with sub-pixel accuracy
- Exports to: Maya, Houdini, Nuke, the 3D pipeline
- Also handles: lens distortion undistortion (critical for anamorphic lenses), multi-camera solves, sensor calibration

AE's 3D Camera Tracker is sufficient for broadcast and commercial work. For film pipeline work, 3DEqualizer is expected.

### Solver Comparison: Which Tool for Which Job

| Factor | AE 3D Camera Tracker | SynthEyes | 3DEqualizer |
|--------|---------------------|----------|------------|
| Cost | Included with AE | ~$400 one-time | ~$700/year |
| Accuracy | Good for broadcast | Film-quality | Film-industry standard |
| Lens distortion | Basic | Comprehensive | Full anamorphic + spherical |
| On-set survey data input | No | Yes | Yes (primary use case) |
| Export targets | AE native | Maya, Nuke, Blender, C4D | Maya, Houdini, Nuke |
| Learning curve | Low | Medium | High |
| Used at | Broadcast, commercial | Indie film, mid-tier | ILM, Weta, Framestore, MPC |

---

## 🎬 Case Study: Jurassic World, Tracking CG Dinosaurs to Live Plates

The modern Jurassic franchise uses *Jurassic Park*'s original insight that tracking must be precise to create believable creature integration with updated tools that were not available in 1993.

### The Jurassic World Pipeline

For creature shots in *Jurassic World: Dominion* (2022, ILM and Territory Studio), the matchmove workflow was:

1. **On set:** Tracking markers placed on every surface the dinosaur would touch or shadow, the ground, vehicle hoods, actor costumes when practical
2. **3DEqualizer solve:** The TD (Technical Director) built a precise camera solve using both the visual feature points and the physical survey data (measured marker positions from set)
3. **Scene geometry reconstruction:** 3DE generated a point cloud of the environment; the 3D department used this to build collision geometry for creature foot-plants
4. **Creature animation:** ILM animators worked in Maya against the solved camera, blocking creature movement so that foot contacts, shadow directions, and scale all matched the plate
5. **Compositing:** Nuke compositors matched the dinosaur renders to the plate using interactive light, depth-of-field matching from the Z-pass, and contact shadows on the tracked ground plane

> 🎯 **What the exam tests:** The reason on-set survey data (measured marker positions in world space) is critical for creature shots is that without it, the 3D solve produces a camera that may be mathematically consistent but at the wrong scale. A Velociraptor rendered at 6 feet tall against a 3D solve that thinks the camera is 3 feet from the ground will appear too large or too small in the plate.

---

## 🔗 Attaching CG Elements to Tracked Footage

Once a 3D camera solve exists, attaching CG elements is a layered process:

### In After Effects (2.5D / Simple 3D)

1. Use AE's 3D Camera Tracker to place a Null at the attachment point
2. Parent the CG element's 2D layer to the Null
3. The element will move in perspective as the camera moves, but it is still a 2D layer, so perspective distortion must be in the element itself

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

> ⚠️ **Rookie mistake:** A replacement screen that doesn't pick up the glare and reflections from the room looks wrong even if the tracking is perfect. Use the Add blend mode at ~80% opacity on a Screen texture overlay to simulate the glass's reflective surface.

---

## 🔬 When Tracking Fails: Diagnosis and Recovery

Professional tracking rarely succeeds perfectly on the first pass. Understanding why a track fails and how to recover is a critical skill:

### Common Track Failure Modes

| Failure Symptom | Most Likely Cause | Recovery |
|-----------------|------------------|---------|
| Track drifts off feature | Feature texture changes (lighting, motion blur) | Relocate track point to a more stable feature; use manual keyframes where drift occurs |
| Track jumps on specific frames | Motion blur or object passes in front of feature | Manually key the track point position on affected frames |
| 3D solve produces too many track errors | Insufficient feature points, or too-short track duration | Add more manual tracking points; extend track coverage |
| 3D solve gives wrong scale | No survey data; only visual features used | Input on-set measured marker positions as world-space constraints |
| Planar track loses track | Surface texture changes (specular shift, object passing in front) | Draw smaller tracking region; avoid specular hotspots |
| Warp Stabilizer over-smooths | Smooth Motion settings too aggressive | Reduce Smoothness percentage; switch to Stabilize Only if needed |

### Manual Track Correction

When automated tracking fails on specific frames:
1. Identify the failing frame range (track data shows sudden position jump)
2. Delete keyframes for the failing range
3. Manually key the feature position at the first and last frame of the range
4. Let AE or Mocha interpolate between the correct manual keyframes
5. Refine if the interpolation path doesn't match the actual motion

> 🎯 **What the exam tests:** A track that "mostly works" with a few bad frames is corrected by manual keyframing at the correct feature position, not by re-tracking the entire shot. Isolated track failures require targeted correction, not a full restart.

---

## 🔬 Full Tracking Vocabulary Reference

| Term | Definition |
|------|-----------|
| Track point | A pixel region the tracker analyzes to recover motion data |
| Feature region | The inner tracking box, the template pixel pattern |
| Search region | The outer tracking box, the area searched each frame |
| Matchmove | The process of recovering a 3D camera from 2D footage |
| Parallax | Apparent relative motion between near and far objects as camera translates |
| Corner Pin | A 4-corner perspective transform driven by tracking data |
| Structure from Motion | Algorithm recovering 3D camera from 2D motion via parallax |
| Survey data | Physically measured real-world positions of tracking markers on set |
| Lens undistortion | Removing optical distortion from footage before tracking |
| Solve residual | The average pixel error of a 3D camera solve, lower = more accurate |
| World space | 3D coordinate system of the real environment |

---

## 🎬 Screen Replacement at Scale: Production Workflow

Screen replacement replacing phone, computer, and monitor screens in live-action footage is one of the most common tracking tasks in episodic and feature production.

### The Production Workflow for Screen Replacement at Scale

For a feature film with 50+ screen replacement shots, the pipeline must be standardized:

1. **On set:** The prop screen shows a neutral gray card or a placeholder graphic. The brightness of the placeholder matches the intended final screen brightness.
2. **Mocha Pro tracking:** Every screen is tracked with Mocha Pro's planar tracker. The data is exported as AE Corner Pin coordinates.
3. **Screen template delivery:** The art department delivers final screen graphics as 1920×1080 or 4K video files.
4. **Composite:** Each screen receives the Corner Pin track, the replacement graphic, and a Screen blend at ~70–85% opacity to simulate screen glow and glass overlay.
5. **Reflection layer:** A low-opacity blurred environment reflection at 5–15% Screen blend simulates the physical glass.

> 🎯 **What the exam tests:** The Screen blend mode on a screen replacement simulates the screen's self-emission of light through the glass. The reflection pass simulates physical glass. A screen replacement without these two elements looks pasted-on regardless of tracking accuracy.

### Screen Replacement Blend Mode Decision

| Blend Mode | Result | When to Use |
|-----------|--------|------------|
| Normal | Full replacement, no glass simulation | Prop screen has no glass or bezel |
| Screen | Additive blend; simulates self-illuminating screen | Most phone/tablet/monitor replacements |
| Multiply | Darkens; simulates a projected display | Projected screen on a wall |
| Add | Very bright blend | Neon signage, LED display in outdoor scenes |

---

## 🎯 What the Exam Tests, Module 4

1. **Structure from Motion requires parallax:** A purely rotational camera move cannot be solved with SfM because no parallax is generated, 3D depth cannot be established.
2. **Mocha vs AE point tracker:** Mocha uses planar optical flow, it tracks the entire surface plane, not individual points. It continues tracking when points go off-screen.
3. **Warp Stabilizer direction:** Warp Stabilizer removes camera motion. The 2D tracker attaches elements TO camera motion. Opposite applications of the same tracking math.
4. **3DEqualizer's input data:** Takes both visual feature points AND physical on-set survey measurements (marker positions in 3D world space) to achieve sub-pixel accuracy.
5. **Why survey data matters:** Without real-world scale from survey data, a camera solve may be mathematically consistent but at wrong scale, CG elements will be the wrong size.
6. **Two-point tracking limitation:** Assumes a planar, rigid surface. Fails on curved or deforming surfaces (flags, faces, cloth).
7. **Good tracking features:** High contrast, unique texture (corners/edges), stays visible throughout shot, not on deforming surfaces.
8. **Corner pin four-point requirement:** Screen replacement requires tracking all four corners of the screen. Two-point tracking does not capture perspective skew.
9. **Object tracking:** After camera solve, object tracking recovers the 3D position of a moving object within the scene, used for creature foot-plants, vehicle attachment, actor eyeline matching.
10. **AE 3D tracker output:** Creates AE native camera + Null objects at selected world-space positions. Elements parented to Nulls follow 3D camera perspective correctly.

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
| Creature on-set integration | 3DEqualizer + survey data + Maya animation |

---

## 🎯 Next Steps

Module 5 moves from tracking (attaching elements to footage) to creating elements from scratch, particle systems. Trapcode Particular's physics simulation engine lets you build fire, smoke, dust, and magical effects with physical accuracy.

---

## 📊 Tracking Quick-Reference: What Each Tool Solves

| Need | Degrees of Freedom Solved | Tool |
|------|--------------------------|------|
| Pin a logo to a wall (no camera move) | X/Y translation | AE 1-point track |
| Replace a sign, match rotation as it turns | Translation + rotation + scale | AE 2-point track |
| Replace a phone screen with perspective shift | Full 2D perspective (4 DOF) | Mocha AE planar track → Corner Pin |
| Stabilize shaky handheld documentary footage | Remove all camera shake | AE Warp Stabilizer |
| Add a CG car to a driving plate (broadcast) | Full 3D camera + world position | AE 3D Camera Tracker |
| Add a CG creature to a driving plate (film) | Full 3D camera + sub-pixel accuracy + survey scale | 3DEqualizer |
| Add moving CG creature that runs in scene | Moving 3D object + camera | 3DEqualizer object tracking + Maya |

---

## 📊 On-Set Tracking Marker Best Practices

| Practice | Why |
|---------|-----|
| Use high-contrast markers (black X on white) | Maximum contrast = reliable visual feature for tracking |
| Place markers every 1–2 meters in VFX area | More markers = more feature points = more stable 3D solve |
| Photograph markers with measurement tape | On-set position measurements enable absolute scale in 3DE |
| Avoid placing markers on deforming surfaces | Deforming surfaces (cloth, faces) produce tracking data that cannot inform a rigid solve |
| Keep markers within the final VFX frame | Out-of-frame markers cannot be tracked but their measured positions can still constrain the solve |
| Record which takes are VFX plates in camera report | Plate department needs to know which takes are used for VFX |

---

## 📊 Full Tracking Vocabulary Reference

| Term | Definition |
|------|-----------|
| Track point | The pixel region the tracker analyzes each frame to recover motion |
| Feature region | Inner tracking box, the template pixel pattern |
| Search region | Outer tracking box, the area searched each frame |
| Optical flow | Motion estimation algorithm that computes per-pixel velocity across a frame |
| Planar tracking | Tracking the motion of a flat surface using optical flow on the entire plane |
| Matchmove | Recovering a 3D camera from 2D footage; synonym for camera solve |
| Parallax | Apparent relative shift between near and far objects as camera translates |
| Corner Pin | A 4-corner perspective transform; the output of planar tracking |
| Structure from Motion | Algorithm recovering 3D camera from multiple 2D views using parallax |
| Survey data | Real-world measured positions of tracking markers; provides absolute scale |
| Lens undistortion | Removing optical barrel/pincushion distortion before tracking |
| Solve residual | Average pixel error across all track points in a 3D camera solve |
| World space | The 3D coordinate system of the real physical environment |
| Object tracking | Tracking a specific moving object within an already-solved 3D scene |
| SfM | Structure from Motion, requires translational (not just rotational) camera movement |

---

## 📚 Further Reading

- **Mocha AE User Guide (Boris FX)**, comprehensive official documentation for every Mocha tracking mode
- **"Matchmoving: The Invisible Art of Camera Tracking" Tim Dobbert** the definitive book on professional matchmove for film
- **3DEqualizer tutorials (Science-D-Visions website)**, free tutorials for the film industry standard solver
- **Video Copilot "Element 3D and Camera Tracking" tutorials**, practical AE-based 3D tracking workflows
