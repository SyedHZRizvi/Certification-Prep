---
permalink: /36-3D-Animation-Blender/Module-07-Keyframe-Graph-Editor/Quiz/
title: "Module 7 Quiz: Keyframe Animation & Graph Editor"
---

# 🧪 Module 7 Quiz: Keyframe Animation & Graph Editor

**24 questions · Allow 30 minutes · No notes.**

---

### Q1.
The keyboard shortcut to **insert a keyframe** in the 3D Viewport is:

A. K
B. **I**
C. Ctrl+K
D. Shift+I

---

### Q2.
In the Dope Sheet, pressing **S** on selected keyframes:

A. Saves the file
B. Sets the keyframe to stepped interpolation
C. **Scales the timing of the selected keyframes (stretches or compresses spacing)**
D. Snaps keyframes to the nearest whole frame

---

### Q3.
An F-Curve with **flat horizontal handles** at a keyframe indicates:

A. The curve uses Constant interpolation and jumps to the next value
B. The value is locked and cannot change at that frame
C. The curve is corrupted and needs to be deleted
D. **The animated value decelerates to a stop at that keyframe (ease in or ease out)**

---

### Q4.
**Constant (Stepped) interpolation** is best suited for:

A. Smooth organic character animation
B. Simulating the spring-like motion of bouncing balls
C. **Blocking passes where you want to see poses without inbetween blur**
D. Machine animation that requires perfectly smooth acceleration

---

### Q5.
The **Cycles modifier** in the Graph Editor is used to:

A. Render each frame multiple times to reduce noise
B. Apply physics simulation to F-Curves
C. **Extend an F-Curve infinitely by repeating its pattern (looping animation)**
D. Cycle through all available interpolation modes automatically

---

### Q6.
In the NLA Editor, **"Push Down"** converts an active Action into:

A. A driver on the armature
B. A rendered image sequence
C. A shape key animation strip
D. **An NLA strip on the NLA timeline**

---

### Q7.
The **Fake User** button (shield icon) on an Action is important because:

A. It prevents the action from being exported to game engines
B. It locks the action from being modified accidentally
C. **It prevents Blender from deleting unused actions when the file is saved and closed**
D. It makes the action visible in the NLA editor

---

### Q8.
**Auto Keying** in Blender:

A. Automatically generates keyframes based on physics simulation
B. Inserts keyframes on every frame during playback
C. Copies keyframe values from one object to another
D. **Automatically inserts keyframes when you move/rotate/scale while the timeline is active**

---

### Q9.
In the Graph Editor, the **horizontal axis** represents:

A. The property value
B. The bone's rotation angle
C. **Time (frame number)**
D. The keyframe's interpolation weight

---

### Q10.
Which Bezier handle type creates a **symmetrical, smooth tangent** on both sides of a keyframe?

A. Free
B. **Aligned**
C. Vector
D. Auto Clamped

---

### Q11.
The *Charge* (2022) open movie's gallop animation used a cycle of:

A. 24 frames (1 second at 24fps)
B. 48 frames (2 seconds)
C. **12 frames (0.5 seconds per stride at 24fps)**
D. 6 frames (very fast trot)

---

### Q12.
To **delete selected keyframes** in the Dope Sheet, you press:

A. Backspace
B. Ctrl+D
C. **X or Delete**
D. Alt+K

---

### Q13.
The industry-standard animation workflow documented in the *Charge* production is:

A. Full spline animation from the first pass → then timing adjusted
B. Physics simulation first → keyframe cleanup after
C. **Stepped/Constant blocking first (director approval) → convert to Bezier/Spline → polish**
D. Mocap capture → manual cleanup → pose library correction

---

### Q14.
An **Action** in Blender is:

A. A render layer that contains motion blur passes
B. A constraint that triggers when a bone reaches a specific rotation value
C. **A named collection of F-Curves representing one complete animation performance**
D. A physics cache file stored with the .blend

---

### Q15.
In the NLA Editor, the **Repeat** value on an NLA strip:

A. Sets how many frames the action plays before reversing
B. Blends the strip with the action below it
C. **Loops the strip a specified number of times end-to-end**
D. Offsets the action start frame by the repeat count

---

### Q16.
Which interpolation mode creates an **instant jump** at the keyframe, with no inbetween values?

A. Bezier
B. Linear
C. Bounce
D. **Constant**

---

### Q17.
The Graph Editor shortcut **T** (with keyframes selected) opens:

A. The Timeline playback controls
B. The Transform options for the keyframe position
C. **The Interpolation Mode menu**
D. The Track menu for connecting keyframes to bones

---

### Q18.
For a walk cycle to loop **seamlessly** at 24fps with a cycle length of 24 frames, the keyframes should be:

A. Frame 1 and Frame 24 with identical poses
B. Frame 1 and Frame 23 with identical poses
C. **Frame 1 and Frame 25 with identical poses (the extra frame bridges the loop)**
D. Frame 0 and Frame 24 with identical poses

---

### Q19.
The **Action Editor** is a context of which editor?

A. The Graph Editor
B. The Timeline
C. The NLA Editor
D. **The Dope Sheet**

---

### Q20.
In an animation's F-Curve, an **overshoot** is visible as:

A. A flat plateau where the curve stays at the same value for many frames
B. A perfectly linear slope between two keyframes
C. **The curve going beyond the target value before settling back (like a spring that goes too far)**
D. A keyframe with no handles (Vector interpolation)

---

### Q21.
Richard Williams' book *The Animator's Survival Kit* primarily teaches:

A. How to use Blender's Graph Editor for 3D animation
B. Digital compositing for finished animations
C. Motion capture cleanup in Blender
D. **The principles of timing, spacing, weight, and acting for drawn and 3D animation**

---

### Q22.
In Blender's Dope Sheet, to **duplicate selected keyframes**, you press:

A. Ctrl+D
B. Alt+D
C. **Shift+D**
D. D

---

### Q23.
Which is the most common incorrect Graph Editor behavior beginners produce with **Auto handles**?

A. All curves become perfectly linear
B. Constant/stepped animation instead of smooth
C. Cycles modifier stops working
D. **Overshooting — the Auto handle algorithm creates curves that go beyond the target value**

---

### Q24.
The **Cycles modifier** "Repeat with Offset" mode, compared to plain "Repeat," additionally:

A. Randomizes the start frame of each cycle
B. Mirrors every other cycle for a ping-pong effect
C. **Offsets the value at the end of each cycle by the cycle's total change, enabling continuous motion like running forward**
D. Reduces the amplitude of each successive cycle

---

## 🎯 Answer Key (No Cheating!)

```
Q1.  B — I key inserts keyframes in the 3D viewport
Q2.  C — S scales keyframe timing in the Dope Sheet
Q3.  D — Flat handles = ease in/out; value decelerates at that keyframe
Q4.  C — Constant/Stepped = blocking pass (no inbetween blur)
Q5.  C — Cycles modifier repeats F-Curve pattern infinitely
Q6.  D — Push Down converts active Action to an NLA strip
Q7.  C — Fake User prevents orphan data deletion on save
Q8.  D — Auto Keying inserts keyframes on any transform change
Q9.  C — Horizontal axis in Graph Editor = time (frame number)
Q10. B — Aligned handle type = symmetrical, smooth tangent
Q11. C — Charge gallop = 12-frame cycle (0.5s at 24fps)
Q12. C — X or Delete removes keyframes in the Dope Sheet
Q13. C — Blocking (stepped) → director approval → spline polish
Q14. C — Action = named collection of F-Curves for one performance
Q15. C — Repeat loops the NLA strip end-to-end N times
Q16. D — Constant = instant jump at keyframe
Q17. C — T opens Interpolation Mode menu in Graph Editor
Q18. C — Frame 1 and Frame 25 identical (25 total = 24 played, 1 bridge)
Q19. D — Action Editor is a context of the Dope Sheet
Q20. C — Overshoot = curve goes beyond target value before settling
Q21. D — Animator's Survival Kit covers timing, weight, acting principles
Q22. C — Shift+D duplicates selected keyframes
Q23. D — Auto handles often cause overshoot on large value jumps
Q24. C — Repeat with Offset offsets value by cycle total (enables forward locomotion)
```
