---
title: "Module 4 Quiz: Tracking, 2D, 3D & Planar"
---

# 🧪 Module 4 Quiz: Tracking, 2D, 3D & Planar

> 24 questions. Aim for 20/24.

---

### Q1.

A compositor needs to pin a digital tattoo to a performer's forearm. The arm moves left and right but does not rotate or change scale significantly. Which tracking method is most appropriate?

A. Mocha AE planar track
B. AE 3D Camera Tracker
C. One-point 2D track
D. Two-point 2D track

---

### Q2.

Which type of tracking is Mocha AE designed around?

A. Point-feature tracking using high-contrast corners
B. Optical flow planar tracking, tracking the motion of a flat surface plane
C. 3D camera solving using multiple tracked features
D. Facial landmark tracking using machine learning

---

### Q3.

A two-point 2D track in After Effects recovers which properties of motion?

A. Translation only
B. Translation and rotation only
C. Translation, rotation, and scale
D. Full 3D position, rotation, scale, and lens distortion

---

### Q4.

What is the fundamental difference between the After Effects 2D Tracker and Warp Stabilizer?

A. The 2D Tracker is only for one-point tracks; Warp Stabilizer handles two-point tracks
B. The 2D Tracker attaches elements TO camera motion; Warp Stabilizer REMOVES camera motion from footage
C. The 2D Tracker uses optical flow; Warp Stabilizer uses point-feature tracking
D. There is no difference, they both perform the same function

---

### Q5.

Which Warp Stabilizer mode completely locks the camera, simulating a tripod-mounted camera?

A. Smooth Motion
B. Subspace Warp
C. No Motion
D. Position Only

---

### Q6.

For a film production, which matchmove software is the industry standard used by ILM, Weta FX, and Framestore?

A. SynthEyes
B. PFTrack
C. After Effects 3D Camera Tracker
D. 3DEqualizer (3DE)

---

### Q7.

When applying a Corner Pin in After Effects for a screen replacement, which blend mode on the replacement layer helps simulate the glass reflections and screen luminosity?

A. Multiply
B. Difference
C. Screen or Add
D. Overlay

---

### Q8.

In the Mocha AE workflow, what does drawing a spline around the tracked surface define?

A. The mask for rotoscoping the surface
B. The plane whose motion will be analyzed, Mocha tracks the surface texture within this region
C. The tracking marker positions for a 3D solve
D. The corner pin destination points

---

### Q9.

A compositor is tracking a phone screen replacement using AE's built-in 2-point tracker. The phone tilts significantly in 3D space during the shot. The resulting corner pin skews incorrectly. What is the best remedy?

A. Use a 3-point tracker instead
B. Apply additional keyframes manually to correct the skew
C. Switch to Mocha AE's planar tracker, which handles full perspective distortion correctly
D. Apply a 3D Camera Tracker solve to the phone

---

### Q10.

What does a 3D camera solve (matchmove) produce as its primary output?

A. A Z-depth pass that can be used for depth-of-field effects
B. A tracked alpha matte for the foreground subject
C. A 3D camera whose position, rotation, and field of view match the original live-action camera
D. A Null Object at the position of each tracking marker

---

### Q11.

On set, tracking markers are placed in a specific spatial arrangement. Why should markers NOT all be placed on a single flat plane?

A. Coplanar markers can only be tracked with Mocha AE, not 3DEqualizer
B. 3D camera solvers require markers at different depths to distinguish camera rotation from camera translation
C. Flat markers are harder to see on camera
D. The matchmove software requires markers on curved surfaces only

---

### Q12.

In Blender's Motion Tracking workflow, where is the tracking work performed?

A. The 3D Viewport
B. The Movie Clip Editor
C. The Shader Editor
D. The Video Sequence Editor

---

### Q13.

A compositor wants to stabilize handheld footage while keeping some natural camera sway (not a completely locked shot). Which Warp Stabilizer mode achieves this?

A. No Motion
B. Smooth Motion
C. Perspective
D. Position, Scale, Rotation

---

### Q14.

What is the "Analyze Forward" button in AE's Track Motion panel used for?

A. Predicting where the track point will go based on the current trajectory
B. Running the tracker forward through subsequent frames from the current frame
C. Exporting the track data to an external application
D. Applying the track data to the target layer

---

### Q15.

Which on-set data makes a 3D camera solve significantly more accurate?

A. HDR probes of the lighting environment
B. The focal length and lens distortion profile, plus surveyed 3D world-space positions of tracking markers
C. The slate information (scene, take, date)
D. The witness camera footage

---

### Q16.

A planar tracker is most appropriate for which of the following shots?

A. Tracking a flying bird's position to attach a digital element
B. Solving the 3D camera position for a wide landscape shot
C. Replacing the text on a moving billboard that tilts in perspective
D. Stabilizing a helicopter aerial shot

---

### Q17.

In After Effects' 3D Camera Tracker, after solving, you right-click on a cluster of track points and select "Create Camera and Null." What does the Null represent?

A. The center of the camera's field of view
B. The position in 3D space corresponding to the selected track points' location in the real scene
C. The lens distortion correction point
D. The frame anchor for the tracking analysis

---

### Q18.

A compositor attempts to use AE's 2-point tracker on a waving flag to track a logo attachment point. The track drifts and fails repeatedly. What is the fundamental problem?

A. The flag moves too slowly for the tracker to analyze
B. The flag is a non-rigid, deforming surface, 2-point tracking assumes rigid planar motion
C. The flag's colors are too saturated for the tracker's feature detection
D. AE's tracker cannot handle elements that are moving in only 2D

---

### Q19.

Screen replacements in film productions typically require which specific step to look photographic, beyond accurate tracking?

A. Applying a 3D camera solve to the replacement content
B. Adding screen glow, glass reflections, and possibly lens distortion matching to the replacement image
C. Keying the replacement content against a greenscreen
D. Rendering the replacement from Nuke rather than After Effects

---

### Q20.

What is the "AdjustTrack" module in Mocha Pro used for?

A. Automatically fixing drift in tracked data after analysis
B. Manually correcting the tracked surface corner positions on individual frames where the automatic track is inaccurate
C. Adjusting the corner pin coordinates to match a different screen size
D. Syncing the track data to a different frame rate

---

### Q21.

For a broadcast-quality shot (TV commercial, music video) requiring a 3D camera solve, which tool is most appropriate?

A. 3DEqualizer with on-set survey data
B. After Effects' built-in 3D Camera Tracker
C. Silhouette FX roto engine
D. Mocha AE planar tracker

---

### Q22.

Why is a "good tracking feature" typically a high-contrast corner rather than a flat, uniform area?

A. Flat areas are processed at a different color bit depth than corners
B. A corner has unique texture in multiple directions; a flat area's appearance does not change with small translations, making it untrackable
C. AE's tracker cannot process uniform-color regions
D. Corners always appear on tracking markers placed by the VFX supervisor

---

### Q23.

What does the "inner box" (feature region) in AE's Track Motion tracker define?

A. The area of the frame where the tracker searches for the feature in each new frame
B. The specific pixel region that defines the tracking feature, the template the tracker matches against
C. The safe zone within which the tracked element will be composited
D. The motion vector output zone

---

### Q24.

A film compositor receives a 3D camera solve from the matchmove department in 3DEqualizer, exported to Maya. The 3D department renders a CG creature at the solved camera's perspective. How does the compositor use this render in Nuke?

A. The render is keyed against a greenscreen to produce a matte
B. The render arrives as a multi-channel EXR with AOV passes; the compositor assembles these passes onto the plate using the tracked camera's Z-depth data for correct depth integration
C. The render is imported as a flat JPEG and placed on a layer above the plate
D. The compositor re-tracks the creature render in Mocha to match it to the plate

---

## 🎯 Answers + Explanations

**Q1, C.** A one-point track recovers X/Y translation. If the arm doesn't rotate or scale significantly in the frame, this is sufficient for a tattoo pin.

**Q2 B.** Mocha AE is an optical flow planar tracker it tracks the motion of an entire flat surface plane rather than individual high-contrast feature points.

**Q3, C.** A two-point 2D track recovers translation, rotation (from the angle between the two points), and scale (from the distance between the two points).

**Q4, B.** The 2D Tracker attaches digital elements to camera motion (motion addition). Warp Stabilizer applies the inverse of the camera motion to stabilize footage (motion removal).

**Q5, C.** "No Motion" mode locks the camera completely, simulating a tripod. "Smooth Motion" reduces shake while preserving intentional movement.

**Q6, D.** 3DEqualizer (Science-D-Visions) is the industry standard for film matchmoving, used at all major studios. Its sub-pixel accuracy and lens distortion handling are unmatched for film-quality work.

**Q7, C.** Screen or Add blend mode adds the replacement content's luminance to the existing layer, simulating the self-luminous nature of a screen and allowing the glass reflections to show through.

**Q8, B.** The spline in Mocha defines the surface plane to be tracked. Mocha analyzes the texture within the spline boundary to determine the plane's motion.

**Q9, C.** Mocha AE's planar tracker handles full perspective distortion (the tilting phone) correctly. AE's 2-point tracker cannot recover perspective skew.

**Q10, C.** The primary output of a 3D camera solve is a 3D camera that exactly matches the position, rotation, and field of view of the original physical camera. This allows CG elements to be placed correctly in 3D space.

**Q11 B.** Coplanar markers make it mathematically impossible to distinguish camera rotation from camera translation the solver becomes ambiguous. Markers at different depths provide the 3D parallax information that resolves this ambiguity.

**Q12, B.** Blender's tracking workflow is performed in the Movie Clip Editor workspace, which provides the tracking UI, marker placement, and solve controls.

**Q13, B.** "Smooth Motion" reduces camera shake while keeping intentional camera movement. "No Motion" would eliminate all movement, which is too aggressive for this goal.

**Q14, B.** "Analyze Forward" runs the tracker algorithm forward through frames sequentially from the current frame, building the tracked position data for each frame.

**Q15, B.** Focal length, lens distortion profile, and surveyed 3D world-space positions of tracking markers are the data that make a matchmove sub-pixel accurate. Without them, the solver makes educated guesses.

**Q16 C.** A moving billboard that tilts in perspective is a classic planar tracking scenario the billboard surface moves with full perspective distortion that only a planar tracker can handle correctly.

**Q17, B.** The Null placed by the 3D Camera Tracker represents the 3D world position corresponding to the selected track points. Placing a layer at this Null's position puts it at the correct 3D location in the scene.

**Q18 B.** A waving flag is non-rigid it deforms. 2-point tracking assumes the tracked surface is rigid and planar. Tracking a deforming surface requires either roto or a 2D tracker on a small stable region of the flag.

**Q19, B.** Accurate tracking is necessary but not sufficient. Adding screen glow, glass reflections, and lens distortion to the replacement makes it physically convincing. A perfectly tracked but clean digital screen looks wrong on glass.

**Q20, B.** AdjustTrack in Mocha Pro is used to manually correct the corner positions frame-by-frame when the automatic planar solve is inaccurate on specific frames. It is a refinement tool, not an automation tool.

**Q21, B.** AE's built-in 3D Camera Tracker is appropriate for broadcast-quality work (TV commercials, music videos). 3DEqualizer with survey data is for film-quality work where sub-pixel accuracy is required.

**Q22 B.** A flat, uniform area has the same appearance regardless of small X/Y translations the tracker cannot distinguish whether it moved or not. A corner has unique, direction-specific texture that changes predictably with movement.

**Q23 B.** The inner box (feature region) defines the template the specific pixel pattern the tracker will search for in subsequent frames. The outer box (search region) defines where it will look for that pattern.

**Q24, B.** The CG creature renders as a multi-channel EXR with AOV passes. The compositor assembles these passes (beauty, shadow, ambient occlusion, reflection) onto the plate in Nuke, using the tracked camera data and Z-depth pass to correctly integrate the creature at the right depth relative to the plate elements.
