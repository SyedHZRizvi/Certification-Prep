---
title: "Module 4 Cheat Sheet: Tracking — 2D, 3D & Planar"
---

# 🗒️ Module 4 Cheat Sheet: Tracking — 2D, 3D & Planar

## Tracking Method Selection

| Shot Type | Method | Tool |
|-----------|--------|------|
| Pin element, no rotation | 1-point 2D track | AE built-in tracker |
| Screen/sign replacement (flat) | Planar track → Corner Pin | Mocha AE |
| Stabilize handheld footage | Warp Stabilizer | AE built-in effect |
| Attach 3D element to scene | 3D camera solve | AE 3D Camera Tracker |
| Film-quality matchmove | 3D camera solve + survey data | 3DEqualizer |
| Free/indie 3D solve | 3D camera solve | Blender Motion Tracking |

---

## 2D Tracker: Inner vs Outer Box

| Box | Purpose |
|-----|---------|
| Inner (feature region) | The template pixel pattern to search for |
| Outer (search region) | The area of the frame to search in |

---

## Warp Stabilizer Modes

| Mode | Result |
|------|--------|
| Smooth Motion | Reduces shake; keeps intentional movement |
| No Motion | Completely locks camera (tripod simulation) |
| Stabilize, Crop | Crops into frame to compensate |
| Synthesize Edges | Content-aware edge fill (AE 2019+) |

---

## Planar Tracking (Mocha AE) vs Point Tracking

| Feature | Point Tracking | Mocha Planar |
|---------|--------------|--------------|
| Perspective skew | No | Yes |
| Partial occlusion | Fails | Continues |
| Reflective screens | Fails | Works |
| Screen replacement | Limited | Excellent |

---

## 3D Camera Solve: What It Produces

- A 3D **camera** matching original FOV, position, rotation
- **Nulls** at tracked world positions
- Used to: attach 3D elements, build scene geometry

---

## Film Pipeline: On-Set Data for Matchmove

| Data | Purpose |
|------|---------|
| Focal length + lens distortion | Lens undistortion for accurate solve |
| Surveyed marker positions (3D world space) | Absolute scale reference |
| Witness camera | Secondary angle reference |
| HDR probe | IBL for 3D lighting match |

---

## Key Vocabulary

- **Planar tracker** — tracks the motion of a flat surface plane
- **Corner Pin** — maps content to four corner positions (tracks perspective)
- **3D camera solve / matchmove** — recovering original camera from footage
- **3DEqualizer (3DE)** — film industry standard matchmove software
- **Warp Stabilizer** — removes camera motion from footage (inverse tracking)
