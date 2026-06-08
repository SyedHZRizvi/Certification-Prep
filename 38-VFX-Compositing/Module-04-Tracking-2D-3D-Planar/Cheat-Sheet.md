---
title: "Module 4 Cheat Sheet: Tracking, 2D, 3D & Planar"
---

# 🗒️ Module 4 Cheat Sheet: Tracking, 2D, 3D & Planar

## Tracking Method Selection

| Shot Type | Method | Tool |
|-----------|--------|------|
| Pin element, no rotation | 1-point 2D track | AE built-in tracker |
| Screen/sign replacement (flat surface) | Planar track → Corner Pin | Mocha AE |
| Stabilize handheld footage | Warp Stabilizer | AE built-in effect |
| Attach 3D element to scene (commercial) | 3D camera solve | AE 3D Camera Tracker |
| Film-quality matchmove | 3D camera solve + survey data | 3DEqualizer |
| Free/indie 3D solve | 3D camera solve | Blender Motion Tracking |
| Moving object in 3D space | Object tracking | 3DEqualizer + Maya |

---

## The Tracking Hierarchy

| Level | Technique | Solves For |
|-------|-----------|-----------|
| 1 | 1-point 2D | X/Y translation only |
| 2 | 2-point 2D | Translation + rotation + scale |
| 3 | Planar (Mocha) | Full 2D perspective (skew + foreshortening) |
| 4 | 3D camera solve | Full 3D camera position + FOV + lens |
| 5 | Object tracking | 3D moving object within already-solved scene |

---

## Good Tracking Feature Characteristics

| Quality | Description |
|---------|-------------|
| High contrast | Feature stands out from surroundings |
| Unique texture | Corner or edge, not a uniform pattern |
| Stays visible | Present throughout the full shot |
| Rigid surface | Not on faces, clothing, or deforming materials |
| Not motion-blurred | Sharp features track more reliably |

---

## Tracking Algorithm Comparison

| Algorithm | How It Works | Failure Mode |
|-----------|-------------|-------------|
| Correlation (AE built-in) | Searches for matching texture pattern | Motion blur, low contrast |
| Optical flow / planar (Mocha) | Lucas-Kanade algorithm on surface plane | Feature-poor surfaces (clear glass) |
| Structure from Motion (3DE, SynthEyes) | Recovers 3D camera from 2D feature points | Purely rotational camera (no parallax) |

**Structure from Motion requires translational camera movement (parallax). Rotation-only shots cannot be solved.**

---

## 2D Tracker: Inner vs Outer Box

| Box | Purpose |
|-----|---------|
| Inner (feature region) | The template pixel pattern to search for |
| Outer (search region) | The frame area to search within |

---

## Warp Stabilizer Modes

| Mode | Result |
|------|--------|
| Smooth Motion | Reduces shake; keeps intentional movement |
| No Motion | Completely locks camera (tripod simulation) |
| Stabilize, Crop | Crops into frame to compensate |
| Synthesize Edges | Content-aware edge fill (AE 2019+) |

**Warp Stabilizer = REMOVES camera motion. 2D Tracker = ATTACHES elements to camera motion. Opposite directions.**

---

## Planar Tracking (Mocha AE) vs Point Tracking

| Scenario | Point Tracking | Mocha Planar |
|----------|--------------|--------------|
| Perspective skew | No | Yes |
| Partial occlusion | Fails | Continues tracking |
| Reflective screens | Fails | Works |
| Screen replacement | Limited | Excellent |
| Texture-poor surface | Fails | Fails (both fail) |

---

## 3D Camera Solver Comparison

| Factor | AE 3D Tracker | SynthEyes | 3DEqualizer |
|--------|--------------|----------|------------|
| Cost | AE included | ~$400 | ~$700/yr |
| Accuracy | Broadcast | Film-quality | Industry standard |
| Survey data input | No | Yes | Yes |
| Lens distortion | Basic | Comprehensive | Full anamorphic |
| Export targets | AE native | Maya/Nuke/Blender | Maya/Houdini/Nuke |
| Used at | Broadcast | Indie film | ILM, Weta, Framestore |

---

## Film Pipeline: On-Set Data for Matchmove

| Data Item | Purpose |
|-----------|---------|
| Focal length + distortion profile | Lens undistortion for accurate solve |
| Surveyed marker positions (3D world space) | Absolute scale reference, prevents wrong-scale CG |
| Witness camera plates | Secondary angle reference |
| HDR probe | IBL for 3D lighting match |
| Tracking marker photos | Feature correspondence for 3DE |

---

## Corner Pin Screen Replacement Workflow

| Step | Action |
|------|--------|
| 1 | Track 4 corners with Mocha AE planar tracker |
| 2 | Export tracking data as Corner Pin to AE |
| 3 | Apply Corner Pin effect to replacement layer |
| 4 | Drive 4 corner coordinates from tracking data |
| 5 | Add Screen/Add blend at ~80% for glass simulation |

---

## Key Vocabulary

| Term | Definition |
|------|-----------|
| Planar tracker | Tracks motion of a flat surface plane using optical flow |
| Corner Pin | Maps content to four perspective-driven corner positions |
| 3D camera solve / matchmove | Recovering original 3D camera from 2D footage |
| Structure from Motion (SfM) | 3D reconstruction algorithm requiring parallax |
| 3DEqualizer | Film industry standard matchmove software |
| Parallax | Apparent shift of background vs foreground as camera translates in 3D |


---

## ✅ Module Sign-Off Checklist

- [ ] Can explain core concept without notes
- [ ] Can name 3 industry examples
- [ ] Know the 2 most common mistakes
- [ ] Understand when to use each technique

**Key formula / ratio / number to memorize:**
See the exam callouts (🎯) in the Reading.md for this module.
