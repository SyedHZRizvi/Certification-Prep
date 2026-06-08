# Module 7 Quiz: Motion Capture 🎬

> **24 questions · Estimated time: 30 minutes**

---

### Q1. Which mocap technology uses reflective markers tracked by infrared cameras?
A. Inertial  
B. Markerless  
C. Optical  
D. Magnetic  

---

### Q2. The primary disadvantage of inertial mocap (IMU-based) is:
A. It requires an expensive camera volume  
B. Drift accumulates over time; no absolute position (only relative)  
C. It cannot capture finger data  
D. It is slower than optical mocap  

---

### Q3. "Retargeting" in mocap cleanup refers to:
A. Re-editing the motion data for a different shot  
B. Scaling and proportion-adjusting motion to fit a character with different proportions  
C. Returning to the mocap volume for additional capture  
D. Applying the same motion data to a different facial rig  

---

### Q4. In MotionBuilder, the "character definition" is:
A. A document describing the character's backstory and personality  
B. The bone mapping system that associates a skeleton to the standard character template  
C. The render settings for the character in playback  
D. The character's color and material settings  

---

### Q5. "Foot locking" in mocap cleanup solves the problem of:
A. Foot penetration through props during combat sequences  
B. Feet sliding, skidding, or floating above the ground plane after retargeting  
C. Foot animation being too stiff and robotic  
D. Contact between character feet and other characters  

---

### Q6. Raw mocap data is:
A. Production-ready and can be used directly without cleanup  
B. The beginning of the work, it must be cleaned, retargeted, and in many cases substantially reanimated  
C. Identical to the final character animation in most productions  
D. Only useful for background characters; hero characters always use keyframe  

---

### Q7. The "contact intent preservation" challenge in retargeting means:
A. Preserving the actor's emotional intention across the retargeting process  
B. Ensuring the retargeted character contacts the ground at approximately the same frames as the actor  
C. Keeping the contact microphone recordings synchronized with the motion data  
D. Preventing retargeting software from changing the character's contact behavior  

---

### Q8. In the Avatar production, the key innovation for actor performance was:
A. Actors wore avatar prosthetics so their motion was already correct for the character  
B. Real-time playback: actors could see their Na'vi characters on monitors while performing  
C. Actors performed in zero-gravity to simulate Na'vi movement  
D. Fully autonomous AI generated the Na'vi performance without actors  

---

### Q9. In War for the Planet of the Apes, the ape quadruped locomotion was:
A. Captured from trained apes using optical mocap  
B. Directly retargeted from actors walking on all fours  
C. Keyframed by Weta animators using actor reference for intent  
D. Generated procedurally without any human reference  

---

### Q10. When would markerless mocap technology be most appropriate?
A. For the highest-quality hero character performance capture  
B. For retroactive reconstruction of motion from existing footage or archival material  
C. For finger-level capture where markers are too small  
D. For outdoor capture where cameras cannot be positioned  

---

### Q11. The MotionBuilder "Plot" operation:
A. Creates the storyboard for the mocap sequence  
B. Bakes the retargeted animation from MotionBuilder's live retargeting to discrete keyframes  
C. Plans the camera positions for the mocap capture session  
D. Generates a quality report on the cleanup data  

---

### Q12. Which scenario is most appropriate for keyframe rather than mocap?
A. A battle with 500 soldiers needing authentic emergent behavior  
B. A realistic human character walking down a corridor  
C. A cartoon character performing broad pantomime with comedic timing  
D. An actor-driven dialogue scene for a realistic humanoid robot  

---

### Q13. Optical mocap typically requires how many markers for a full-body capture (no fingers)?
A. 5–10 markers  
B. 40–55 markers  
C. 200–300 markers  
D. A single tracking device at the hip  

---

### Q14. In MotionBuilder, the "Actor" node contains:
A. The retargeted animation output for the production character  
B. The raw mocap data from the capture session  
C. The render settings for the character  
D. The character's rig and control setup  

---

### Q15. The foot lock IK constraint transition should blend in/out over:
A. 0 frames, instantaneous for clean contact  
B. 2–4 frames to avoid snapping  
C. 10–15 frames for smooth weight transfer  
D. 1 full second (24 frames) for maximum subtlety  

---

### Q16. After applying a foot lock, what must the animator check and potentially adjust?
A. The character's eye direction  
B. The root/hip control to compensate for the changed effective hip position  
C. The material settings on the character's shoes  
D. The camera angle to ensure the foot is visible  

---

### Q17. Superhero physics should NOT use mocap because:
A. Actors cannot wear mocap suits for safety reasons during stunts  
B. Real physics (captured by mocap) doesn't match the visual language of superhero motion  
C. Mocap cannot capture fast movement  
D. Legal rights prevent using actors' motion data for superhero characters  

---

### Q18. The Avatar performance capture volume was how much larger than previous productions?
A. 2× larger  
B. 4× larger  
C. 6× larger  
D. 10× larger  

---

### Q19. In the five-phase mocap cleanup process, which phase follows "skeleton solving"?
A. Marker cleanup  
B. Foot locking  
C. Retargeting  
D. Contact editing  

---

### Q20. The "retargeting paradox" with leg length differences causes:
A. The character to walk sideways instead of forward  
B. The character to appear to walk faster than it's moving (same steps, less ground coverage)  
C. The feet to penetrate the ground during contact frames  
D. The character to lean backward in a resting pose  

---

### Q21. Why does extreme close-up facial emotion work poorly with mocap?
A. Mocap cameras cannot get close enough to capture facial data  
B. Mocap faces rarely capture micro-expression nuance at the precision required for close-up  
C. Close-up shots require a different frame rate than mocap provides  
D. The actor's face cannot be tracked due to makeup requirements  

---

### Q22. Which is NOT a phase of the five-phase mocap cleanup process?
A. Marker cleanup  
B. Skeleton solving  
C. Ambient occlusion baking  
D. Foot locking  

---

### Q23. Andy Serkis's performance as Caesar is described as:
A. Pure keyframe animation, Serkis was only a voice actor  
B. Pure mocap, his data was used unmodified in the final film  
C. Performance capture data that was cleaned, retargeted, and substantially enhanced by keyframe animators  
D. A combination of rotoscoping and traditional animation  

---

### Q24. In MotionBuilder, the "Story tool" allows:
A. Writing character backstories for the animation team  
B. Non-linear timeline editing of mocap clips  
C. Scripting agent behavioral stories for crowd simulation  
D. Exporting final animation to narrative editing software  

---

## 🎯 Answer Key (No Cheating!)

```
Q1.  C, Optical: reflective markers + infrared cameras
Q2.  B, Inertial: drift accumulates; relative position only
Q3.  B, Retargeting: scale/proportion-adjust to different character
Q4.  B, Character definition: bone mapping to standard template
Q5.  B, Foot locking: prevents sliding/floating after retargeting
Q6.  B, Raw mocap: beginning of work; requires full cleanup pipeline
Q7.  B, Contact intent: retargeted character touches ground same frames
Q8.  B, Avatar: real-time Na'vi playback for actors during performance
Q9.  C, War for Apes: ape locomotion keyframed by Weta animators
Q10. B, Markerless: retroactive reconstruction of existing footage
Q11. B, Plot: bakes live retargeting to discrete keyframes
Q12. C, Cartoon pantomime with comedy timing: keyframe
Q13. B, Full body no fingers: 40–55 markers
Q14. B, Actor node: raw mocap data
Q15. B, Foot lock blend: 2–4 frames to avoid snapping
Q16. B, After foot lock: adjust root/hip control
Q17. B, Superhero: real physics doesn't match visual language
Q18. C, Avatar volume: 6× larger than previous productions
Q19. C, After skeleton solving: retargeting
Q20. B, Retargeting paradox: same steps, less ground = appears faster
Q21. B, Close-up mocap: micro-expression nuance rarely captured
Q22. C, Ambient occlusion baking is NOT a mocap cleanup phase
Q23. C, Serkis: mocap + cleanup + significant keyframe enhancement
Q24. B, Story tool: non-linear editing of mocap clips
```
