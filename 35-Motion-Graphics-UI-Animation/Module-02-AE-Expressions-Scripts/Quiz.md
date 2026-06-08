---
permalink: /35-Motion-Graphics-UI-Animation/Module-02-AE-Expressions-Scripts/Quiz/
title: "Module 2 Quiz: AE Expressions & Scripts"
---

# 🧠 Module 2 Quiz, AE Expressions & Scripts

### Q1.
What keyboard shortcut adds an expression to a property in After Effects (on Mac)?

A. Cmd+Click the stopwatch  
B. Option+Click the stopwatch  
C. Shift+Click the stopwatch  
D. Double-Click the property name  

---

### Q2.
The `time` variable in After Effects returns a value in:

A. Frames  
B. Milliseconds  
C. Seconds  
D. Percentage of composition duration  

---

### Q3.
Which expression would make a layer rotate continuously at exactly one full revolution every 6 seconds?

A. `rotation = time * 360`  
B. `rotation = time * 60`  
C. `rotation = time * 6`  
D. `rotation = time / 6 * 360`  

---

### Q4.
The expression `wiggle(3, 50)` applied to a layer's position means:

A. The layer moves 3 pixels off-center, 50 times per second  
B. The layer wiggles randomly with 3 cycles per second and a maximum deviation of 50 units  
C. The layer takes 3 seconds to complete a 50-pixel movement  
D. The layer's wiggle speed increases by 50% every 3 frames  

---

### Q5.
Which `loopOut()` type causes the animation to play forward, then backward, then forward again indefinitely?

A. `loopOut("cycle")`  
B. `loopOut("offset")`  
C. `loopOut("pingpong")`  
D. `loopOut("continue")`  

---

### Q6.
The `valueAtTime(time - 0.2)` expression applied to Layer B's position, while referencing Layer A's position, creates:

A. Layer B moves to where Layer A was 0.2 seconds in the future  
B. Layer B mirrors Layer A's position with a 0.2-second delay  
C. Layer B moves 0.2 pixels below Layer A  
D. Layer B's animation is 20% slower than Layer A  

---

### Q7.
In an After Effects composition, you have 10 identical layers stacked. You want each layer to start its entrance animation 3 frames later than the one above it. Which expression property would you use to calculate each layer's unique delay?

A. `thisLayer.name`  
B. `thisComp.numLayers`  
C. `index`  
D. `time`  

---

### Q8.
Expression Controls are effects applied to:

A. Any layer, including shape and text layers  
B. Only to adjustment layers  
C. Only to null objects  
D. Only to solid layers  

---

### Q9.
What type of Expression Control would you use to allow a single color setting on a Master Controller to drive the fill color of multiple shape layers across a composition?

A. Slider Control  
B. Checkbox Control  
C. Color Control  
D. Angle Control  

---

### Q10.
You write the expression `wiggle(2, 30)` on five different layers' position properties. All five layers wiggle at the same pattern simultaneously. How do you de-sync their wiggle so each is unique?

A. Apply different frequencies to each layer manually  
B. Use `seedRandom(index, true)` before the wiggle call, or pass `time + index * 100` as the time offset  
C. Add a random delay keyframe to each layer  
D. Change the `amplitude` parameter to `index * 30`  

---

### Q11.
Which is the correct syntax for `loopOut()` with the cycle type?

A. `loopOut(cycle)`  
B. `loopOut["cycle"]`  
C. `loopOut("cycle")`  
D. `loop_out("cycle")`  

---

### Q12.
The `ease(time, 0, 2, 0, 100)` expression applied to an opacity property means:

A. The layer eases from opacity 0 to 100 linearly over 2 seconds  
B. The layer's opacity smoothly transitions from 0 to 100 over the first 2 seconds, with easing  
C. The layer pulses opacity at 2 Hz between 0 and 100  
D. The layer begins at opacity 100 and fades to 0 in 2 seconds  

---

### Q13.
What is the difference between an expression and a script in After Effects?

A. Expressions use Python; scripts use JavaScript  
B. Expressions run continuously on every frame while the composition plays; scripts execute once when triggered  
C. Expressions can only be applied to Transform properties; scripts can modify any property  
D. Expressions are for AE only; scripts work across the Adobe suite  

---

### Q14.
You apply `loopOut("offset")` to a layer's Y position that has keyframes from 0px to 100px. After the first loop, what happens?

A. The position returns to 0px and repeats  
B. The position continues drifting, adding 100px with each loop cycle  
C. The position plays backward from 100px to 0px  
D. The position holds at 100px and stops  

---

### Q15.
To convert the `time` variable (in seconds) to the current frame number in a 30fps composition, you would use:

A. `time / 30`  
B. `time * thisComp.frameRate`  
C. `time * 30 / 1000`  
D. `thisComp.currentFrame`  

---

### Q16.
Which of the following expressions creates a smooth infinite Y-position oscillation (bouncing up and down) between -50 and +50 pixels?

A. `wiggle(1, 50)`  
B. `[value[0], Math.sin(time * Math.PI * 2) * 50]`  
C. `loopOut("pingpong")`  
D. `[value[0], time % 50]`  

---

### Q17.
The Ease and Wizz script applies easing as:

A. Modified Graph Editor handles  
B. Expression code added to keyframe properties  
C. A new effect applied to the layer  
D. A custom render plugin  

---

### Q18.
In the expression `thisComp.layer("Layer A").transform.rotation`, what does `thisComp` refer to?

A. The currently selected layer  
B. The composition containing the layer that holds this expression  
C. The root project  
D. The topmost layer in the timeline  

---

### Q19.
You want to build a typewriter-style number counter that counts from 0 to 500 over 3 seconds. Which expression variables would you use?

A. `index`, `time`, `random()`  
B. `time`, `Math.round()`, and value remapping  
C. `wiggle()`, `loopOut()`, and `ease()`  
D. `valueAtTime()` and `thisComp.duration`  

---

### Q20.
When referencing a layer by name in an expression (`thisComp.layer("My Layer")`), what happens when that layer is renamed?

A. Nothing, AE automatically updates the reference  
B. The expression breaks and shows a red error  
C. The expression references the layer directly above instead  
D. The expression defaults to `thisLayer`  

---

### Q21.
What is the correct way to reference a Slider Control named "Speed" on a null layer named "CONTROL" from another layer's expression?

A. `effect("CONTROL")("Speed")`  
B. `thisComp.layer("CONTROL").effect("Speed")("Slider")`  
C. `master.slider["Speed"]`  
D. `getControl("CONTROL", "Speed")`  

---

### Q22.
Which of the following is NOT a valid `loopOut()` type in After Effects?

A. `"cycle"`  
B. `"pingpong"`  
C. `"spiral"`  
D. `"continue"`  

---

### Q23.
The expression `[value[0], value[1] + wiggle(2, 30)[1]]` applied to a layer's position:

A. Wiggles both X and Y independently  
B. Adds a vertical-only wiggle while keeping the horizontal position locked  
C. Wiggles only the X position  
D. Creates a circular motion path  

---

### Q24.
Which scripting language is used for After Effects scripting (`.jsx` files)?

A. Python  
B. Lua  
C. ExtendScript (a superset of ECMAScript 3 / JavaScript)  
D. TypeScript  

---

## 🎯 Answer Key (No Cheating!)

```
Q1:  B, Option+Click (Mac) / Alt+Click (Windows) the stopwatch adds an expression to that property.

Q2:  C, time is always in seconds. A 30fps comp at frame 60 = time of 2.0.

Q3:  D, One full revolution = 360 degrees. In 6 seconds = 60 degrees/second. So rotation = time / 6 * 360, or equivalently time * 60.

Q4:  B, wiggle(frequency, amplitude): 3 cycles per second, max deviation 50 units from current position.

Q5:  C, loopOut("pingpong"): plays forward, then backward, then forward, alternating indefinitely.

Q6:  B, valueAtTime(time - 0.2) samples Layer A's position from 0.2 seconds ago, creating a 0.2-second delayed mirror.

Q7:  C, index. Each layer has a unique index (1, 2, 3…) so multiplying index by the frame delay gives each layer a unique offset.

Q8:  A, Expression Controls can be applied to any layer, though using a dedicated null or control layer is best practice.

Q9:  C, Color Control. It exposes an RGBA color picker that any expression can reference.

Q10: B, seedRandom(index, true) gives each layer a unique noise seed. Alternatively, pass time + index * 100 as wiggle's t parameter to de-sync.

Q11: C, loopOut("cycle") is the correct syntax. The type must be a quoted string.

Q12: B, ease() creates a smooth (ease-in-out) transition from 0 to 100 over the first 2 seconds, then holds at 100.

Q13: B, Expressions execute on every frame during playback. Scripts execute once when run from File > Scripts or the script panel.

Q14: B, loopOut("offset") adds the property delta (100px) on each loop, so the value drifts: 0→100, 100→200, 200→300, etc., infinite drift.

Q15: B, time * thisComp.frameRate. If time = 2s and frameRate = 30, result = 60 (frame number 60).

Q16: B, Math.sin(time * Math.PI * 2) creates one full sine cycle per second, multiplied by 50 gives ±50px oscillation. The [value[0], ...] preserves the X position.

Q17: B, Ease and Wizz works by adding expression code to the keyframe property (e.g., position), which overrides the interpolation with the custom easing function.

Q18: B, thisComp refers to the composition that contains the layer on which the expression is written.

Q19: B, A counter uses time for progress, Math.round() to produce whole numbers, and linear/ease remapping to map time to the value range.

Q20: B, The expression breaks with a red error because the string reference no longer matches any layer name.

Q21: B, The correct syntax is: thisComp.layer("CONTROL").effect("Speed")("Slider"). 

Q22: C, "spiral" is not a valid loopOut type. Valid types: "cycle", "pingpong", "offset", "continue".

Q23: B, wiggle(2, 30)[1] extracts only the Y component of the wiggle vector. Adding it to value[1] (current Y) while keeping value[0] (current X) unchanged = vertical-only wiggle.

Q24: C, ExtendScript is a superset of ECMAScript 3 (the same era as JavaScript). Files use the .jsx extension. Not Python, not TypeScript.
```
