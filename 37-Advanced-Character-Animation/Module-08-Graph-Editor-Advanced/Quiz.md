# Module 8 Quiz: Advanced Graph Editor 📈

> **24 questions · Estimated time: 30 minutes**

---

### Q1. In the graph editor, the Y-axis represents:
A. Time (frames)  
B. The value of the animated channel  
C. The number of keyframes  
D. The weight of the character  

---

### Q2. An S-curve in the graph editor represents:
A. A constant-speed (robotic) motion  
B. A held pose with no movement  
C. A slow-in, fast-middle, slow-out organic motion  
D. A sudden impact with no ease  

---

### Q3. A "stepped" tangent type produces:
A. A smooth S-curve interpolation between keyframes  
B. No interpolation, the value jumps at the keyframe  
C. A linear diagonal line between keyframes  
D. A hold until the next keyframe, then smooth interpolation  

---

### Q4. The "spline switch moment" in the stepped workflow refers to:
A. Switching from Maya to another 3D application  
B. The moment you change from stepped to spline tangents, your clean poses become a "swimming" mess  
C. Switching from blocking to layout on a shot  
D. The moment the supervisor approves your spline version  

---

### Q5. "Swimming poses" occur when:
A. Animation is previewed at 50% playback speed  
B. The spline interpolation generates unexpected in-between positions between your blocked keyframes  
C. Characters are animated near water environments  
D. The curve display mode is set incorrectly in the graph editor preferences  

---

### Q6. Which tangent type should be used at an impact contact frame?
A. Spline (smooth, with potential overshoot)  
B. Linear or flat, the object does not ease into a hard surface  
C. Clamped (smooth, no overshoot)  
D. Stepped, holds the previous value until the impact frame  

---

### Q7. A very short incoming tangent handle at a keyframe means:
A. The value changes slowly as it approaches the keyframe  
B. The value reaches the keyframe value quickly (fast ease-out)  
C. The curve will overshoot past the keyframe  
D. No motion near the keyframe  

---

### Q8. The difference between spline and clamped tangent types is:
A. Spline is for organic motion; clamped is for mechanical motion  
B. Spline can overshoot past the keyframe value; clamped prevents overshoot  
C. Clamped produces a linear interpolation; spline produces a curved interpolation  
D. They are functionally identical and interchangeable  

---

### Q9. An oscillating curve shape in the graph editor indicates:
A. A held pose with no motion  
B. Back-and-forth motion around a center point, follow-through or a wiggle  
C. A fast, mechanical constant-speed motion  
D. A single impactful moment  

---

### Q10. In the three-phase stepped workflow, Phase 2 (Spline rough) involves:
A. Adding detailed secondary motion expressions  
B. Switching to spline and observing what the software generates; fixing major problems  
C. Returning to stepped mode to refine the poses  
D. Adding sound design and editorial feedback  

---

### Q11. An expression offset formula for secondary motion is written as:
A. secondary = primary * delay  
B. secondary = offset(primary, nFrames), secondary equals primary delayed by N frames  
C. secondary = primary + nFrames  
D. secondary = primary - (nFrames * speed)  

---

### Q12. A perfectly flat (horizontal) curve segment indicates:
A. Fast motion, the value is changing rapidly  
B. A held value, no change in the animated channel  
C. The tangent handle is too long  
D. The keyframe is on a fractional frame  

---

### Q13. Why does a "too-flat" ease-out at the end of a motion cause a problem?
A. The character stops before reaching the intended hold pose  
B. The character overshoots the hold pose significantly  
C. The character speeds up at the end of the motion  
D. The graph editor cannot render flat tangents  

---

### Q14. For an ease-in motion (slow start, fast finish), the tangent configuration should be:
A. Short outgoing handle; long incoming handle  
B. Long outgoing handle; short incoming handle  
C. Both handles equal length  
D. Both handles set to linear  

---

### Q15. In Maya's expression editor, which function retrieves the value of an attribute at a specific frame?
A. `getValue()`  
B. `getAttr -t (frame) attribute`  
C. `queryFrame(attribute, frame)`  
D. `frameValue(attribute, -t frame)`  

---

### Q16. Comedy "snap" timing between held poses requires which tangent type at both keys?
A. Spline, for smooth, fast motion  
B. Clamped, for fast motion without overshoot  
C. Flat, for the cartoon snap from one held pose to the next  
D. Linear, for constant-speed motion  

---

### Q17. A "convex" curve (arching upward) represents:
A. An object accelerating linearly  
B. An object that peaks in value then descends, like a ball at the apex of a throw  
C. A held pose with no motion  
D. A character snapping between two extreme poses  

---

### Q18. The most common error when first switching from stepped to spline is:
A. The animation slows down by 50%  
B. All keyframes delete automatically  
C. Swimming poses appear as the spline generates unexpected interpolation paths  
D. The tangent handles disappear from the graph editor  

---

### Q19. In the stepped workflow, blocking in stepped mode allows you to:
A. Evaluate the pose sequence and timing without interpolation confusing the review  
B. Render a preview faster than with spline tangents  
C. Skip the need for spline refinement later  
D. Preview secondary motion without expressions  

---

### Q20. A "spike" curve shape (sharp peak) typically represents:
A. A held pose  
B. A sudden impact or direction change  
C. An S-curve ease-in  
D. An expression-driven secondary motion  

---

### Q21. Why must the derivative (slope) curve be at its steepest at the midpoint of a perfect S-curve?
A. This is a software requirement, not a physical principle  
B. Maximum speed occurs in the middle of organic motion, the object is moving fastest between the ease-in start and ease-out end  
C. The steepest midpoint prevents overshoot at both ends  
D. It is an aesthetic choice, there is no physical principle behind it  

---

### Q22. A damped oscillation expression for clothing settle typically includes:
A. An offset delay formula  
B. A multiplication factor less than 1.0 that reduces the oscillation amplitude each cycle  
C. A linear interpolation to a target position  
D. A random number generator for unpredictable motion  

---

### Q23. Which of the following is NOT a sign that a curve needs attention?
A. A smooth S-curve between two keyframes  
B. A perfectly linear (diagonal) segment in organic motion  
C. A backward overshoot before the motion begins  
D. A very slow ease-out that causes the character to stop before the hold pose  

---

### Q24. The "hold pose drift" problem (a subtle motion during a held pose) is best fixed by:
A. Deleting the hold and replacing it with a freeze on the previous frame  
B. Adding an additional keyframe during the hold section to anchor the value  
C. Changing the tangent type to stepped for the entire shot  
D. Using an expression to lock the value during the hold  

---

## 🎯 Answer Key (No Cheating!)

```
Q1.  B, Y-axis: the animated channel's value
Q2.  C, S-curve: slow-in, fast middle, slow-out (organic)
Q3.  B, Stepped: no interpolation; value jumps at key
Q4.  B, Spline switch: clean steps become swimming mess
Q5.  B, Swimming: spline generates unexpected in-betweens
Q6.  B, Impact frame: linear or flat; objects don't ease into hard surfaces
Q7.  B, Short incoming handle: value reaches key quickly (fast ease-out)
Q8.  B, Spline can overshoot; clamped cannot
Q9.  B, Oscillating: back-and-forth (follow-through or wiggle)
Q10. B, Phase 2: switch to spline; observe; fix major problems
Q11. B, secondary = offset(primary, nFrames)
Q12. B, Flat horizontal: held value, no change
Q13. A, Too-flat ease-out: character stops before reaching hold pose
Q14. B, Ease-in: long outgoing handle, short incoming handle
Q15. B, `getAttr -t (frame) attribute` in Maya
Q16. C, Comedy snap: flat tangents at both keys
Q17. B, Convex: peaks then descends (ball apex)
Q18. C, Most common error: swimming poses appear
Q19. A, Stepped blocking: evaluate poses without interpolation
Q20. B, Spike: sudden impact or direction change
Q21. B, Maximum speed at midpoint is the physical reality of organic motion
Q22. B, Damped oscillation: factor <1.0 reduces amplitude each cycle
Q23. A, Smooth S-curve is correct; no issue
Q24. B, Hold drift: add anchoring keyframe during the hold
```
