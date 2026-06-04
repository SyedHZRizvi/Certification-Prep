# Module 7: Motion Capture — Performance Technology and the Cleanup Pipeline 🎬

> **A story to open.** In 2009, Andy Serkis walked into a volume — a large empty studio space covered in infrared cameras — wearing a black lycra suit covered in reflective markers. He performed a scene as Caesar, the future leader of the apes, and left. A year later, when the film shipped, critics and audiences debated whether his performance was acting or animation. The answer is both, and the question itself reveals a fundamental misunderstanding of how motion capture works. Mocap does not record a performance. It records motion data that must be cleaned, retargeted, enhanced, and in many cases substantially reanimated by human animators. The data is the beginning of the work, not the end.

---

## 🎯 What You'll Master

- Understand the three major mocap technology types and their tradeoffs
- Map the complete mocap cleanup process: retargeting, foot locking, contact editing
- Navigate the MotionBuilder workflow at a professional level
- Know when NOT to use mocap — and why this is a critical career skill
- Analyze the Avatar and War for the Planet of the Apes VFX pipelines as case studies

---

## 📚 Part 1 — How Motion Capture Works

### The Three Technology Types

| Type | How It Works | Pros | Cons | Best For |
|------|-------------|------|------|---------|
| Optical | Reflective or active LED markers tracked by infrared cameras (12–200 cameras) | Highest spatial accuracy; scalable to large volumes | Markers must be visible to cameras; occlusion problems; no magnetic interference but complex setup | Film/TV: highest quality demands |
| Inertial | IMU (Inertial Measurement Unit) sensors on the body; acceleration + rotation data | Portable; no camera volume required; works outdoors | Drift accumulates over time; no absolute position (relative only); no finger data typically | Game development; previsualization; limited space |
| Markerless | Computer vision analyzes standard video to extract skeleton data (ML-based) | No suit required; retroactive (can mocap existing footage) | Lower accuracy; struggles with occlusions; requires powerful compute | Archival reconstruction; background characters |

### Optical Mocap in Detail

Studio-grade optical mocap (used at ILM, Weta, MPC, Framestore) uses:
- 50–200 infrared cameras arranged around a volume (typically 10m × 10m for body capture)
- Retroreflective markers (small spheres, 5–25mm) attached to a tight-fitting suit at anatomically significant points (joint centers, bony landmarks)
- Tracking software (Vicon Blade, Qualisys, OptiTrack) that triangulates 3D marker positions from multiple camera views in real time

**The marker count** for a full-body capture session (no fingers) is approximately 40–55 markers. With fingers: 80–100 markers. With facial capture: additional 200–350 markers on a head rig.

---

## 📚 Part 2 — The Cleanup Process

Raw mocap data is never production-ready. It is the animator's job (specifically the "mocap cleanup animator") to process it into usable animation.

### The Five Phases of Mocap Cleanup

| Phase | Task | Key Challenge |
|-------|------|-------------|
| 1. Marker cleanup | Fill gaps where markers were occluded; remove noise | Interpolating plausibly across long occlusion gaps |
| 2. Skeleton solving | Convert marker positions to joint rotation data | Ensuring joint orientations match the target rig |
| 3. Retargeting | Scale and proportion-adjust motion to fit a different character | Maintaining contact intent when proportions change drastically |
| 4. Foot locking | Pin feet to the ground plane to eliminate ground-penetration and float | Adjusting IK chain when foot lock conflicts with hip/pelvis data |
| 5. Contact editing | Ensure that hand contacts, prop interactions, and character interactions read correctly at the frame level | The original actor may have touched a prop 2 frames differently than the CG character must |

### Retargeting in Detail

Retargeting is the most artistically demanding phase of mocap cleanup. When human actor motion is applied to a character with different proportions (an ape, a giant, an alien), the limb lengths, joint positions, and center-of-gravity relationships all change.

**The retargeting paradox:** If you retarget an actor's natural walk to a character with shorter legs, the character will take the same number of steps but cover less ground — it will appear to walk faster than it's moving. The cleanup animator must either:
- Adjust stride frequency to match the character's leg length
- Adjust root motion speed to match the stride
- Rebalance the entire contact pattern

> 🎯 **Exam tip:** Contact intent preservation is the core challenge in retargeting — when a human actor touches the ground at frame 12, the retargeted character must also contact the ground at approximately frame 12, even if the foot has moved to a different position due to scale.

---

## 📚 Part 3 — Foot Locking

Foot locking (also called "foot planting") is the process of ensuring that when a character's foot contacts the ground, it stays on the ground — it does not slide, skid, or penetrate.

### Why Raw Mocap Feet Slide

Raw mocap data captures the actor's foot position in 3D space accurately. However, when:
1. The actor wore thick-soled shoes but the character is barefoot (foot height changes)
2. The character has different leg proportions (the hip height affects foot position)
3. The character is walking on different terrain than the actor (uneven vs. flat)
...the retargeted foot will slide along the ground plane.

### The Foot Lock Workflow

1. **Identify contact frames** — where the foot is meant to be stationary
2. **Set IK constraint** — pin the foot IK handle to a world-space position at those frames
3. **Blend in/out** — the constraint transitions on and off over 2–4 frames to avoid snapping
4. **Check hip compensation** — the locked foot changes the hip's effective position; adjust the root control to compensate
5. **Verify with ground contact curves** — ensure no ground penetration and no floating

---

## 📚 Part 4 — MotionBuilder Workflow

Autodesk MotionBuilder is the industry-standard software for mocap processing, retargeting, and editing. Understanding MotionBuilder is non-negotiable for any animator working with mocap data.

### Key MotionBuilder Concepts

| Concept | Description |
|---------|-------------|
| Character definition | Bone mapping system that associates the skeleton to a standard character template |
| Actor | The capture data node; contains raw mocap data |
| Character | The retargeted animation data; the output  |
| Story tool | Timeline-based editing of mocap clips; non-linear editing |
| Control rig | FK/IK rig generated from the character definition; the cleanup interface |
| Plot | The process of baking animation from MotionBuilder's retargeting system to keyframes |

### The MotionBuilder Retargeting Workflow

1. Import skeleton + mocap data
2. Create character definition (bone mapping)
3. Import target character skeleton
4. Create target character definition
5. Set Actor → Character → Target Character retargeting relationship
6. Preview retarget; adjust character extensions for proportion differences
7. Plot the retargeted animation to keyframes
8. Export to Maya/Houdini/Blender for further cleanup

---

## 📚 Part 5 — When NOT to Use Mocap

This is one of the most important professional judgment calls in animation. Mocap is frequently used when it shouldn't be, and the results are uncanny or unsatisfying.

### Situations Where Mocap Fails

| Situation | Why Mocap Fails | Better Approach |
|-----------|----------------|-----------------|
| Stylized cartoon characters | Human motion feels wrong on non-human proportions | Keyframe with exaggerated principles |
| Superhero/fantasy physics | Real physics doesn't match the character's visual language | Keyframe or heavily modified mocap |
| Pure pantomime/comedy | Timing subtleties of great comedy can't be captured at 24fps | Keyframe on 2s with timing refinement |
| Non-human creatures (most cases) | No human reference is valid for a 4-legged creature | Keyframe + creature reference |
| Extreme close-up emotion | Mocap faces rarely capture micro-expression nuance | Keyframe facial + mocap body |
| Slow, symbolic motion | Mocap tends toward natural-speed motion; symbol motion is intentionally non-natural | Keyframe |

> ⚠️ **Career tip:** An animator who reflexively says "we should use mocap" for every character shot is junior in their thinking. The question is never "should we use mocap?" but "what does this character, in this moment, need — and does mocap serve that need?"

---

## 📚 Part 6 — Case Studies

### Case Study 1: Avatar (ILM/Weta, 2009)

*Avatar* used a performance capture volume 6× larger than previous productions — 20 cameras arranged in a 10m × 20m space. The key innovation was real-time playback: actors could see their Na'vi characters moving on monitors while performing, allowing them to adjust their performance for the character's proportions.

**Pipeline:**
- Facial: individual head-mounted camera rigs captured micro-expressions
- Body: standard optical mocap
- Cleanup: significant retargeting to 2.7m Na'vi from 1.8m human actors
- Enhancement: keyframe animators enhanced every shot — none shipped straight from mocap

### Case Study 2: War for the Planet of the Apes (Weta, 2017)

The challenge: apes are primarily quadrupeds; human actors are bipeds. The solution was a combination of:
1. Actors performed scenes biped or on all fours as appropriate
2. Weta's R&D produced a custom retargeting solution that mapped bipedal actor motion to a quadruped ape skeleton
3. Cleanup animators heavily reworked every contact frame for quadruped foot planting
4. Andy Serkis's facial performance was captured and retargeted to Caesar's ape face with significant keyframe enhancement for micro-expressions

**The ape walk:** The quadruped gait was not captured from the actors — it was keyframed by Weta animators using the actors' bipedal reference as intent reference, then re-creating the mechanics as believable ape locomotion.

---

## 🎯 Summary

| Concept | One-Line Takeaway |
|---------|-------------------|
| Optical mocap | Reflective markers + infrared cameras; highest accuracy |
| Inertial mocap | IMU sensors; portable but drifts |
| Markerless | Computer vision on video; lowest accuracy |
| Retargeting | Scale motion to different proportions; preserve contact intent |
| Foot locking | Pin foot to world-space at contact frames |
| MotionBuilder | Industry standard for retargeting and mocap editing |
| When not to mocap | Stylized/cartoon; superhero physics; comedy; creatures; close-up emotion |
| Avatar | 6× larger volume; real-time playback; all shots enhanced by keyframe |
| War for Apes | Bipedal actor → quadruped ape retargeting; keyframe locomotion |

---

## 🚀 Next Steps

Module 8 goes inside the graph editor — the mathematical heart of animation. You will learn to read curves as a language, master tangent handles, and build expression-driven secondary motion systems.

---

## 📖 Further Reading

- Serkis, A. — interviews on performance capture (collected in *The Lord of the Rings* appendices, extended editions)
- Weta Digital — *War for the Planet of the Apes* VFX production notes
- ILM — *Avatar* performance capture technology (SIGGRAPH 2010 presentation)
- Autodesk MotionBuilder documentation (autodesk.com)
- Vicon — "Introduction to Motion Capture" (vicon.com/resources)
- Menache, A. — *Understanding Motion Capture for Computer Animation* (2011, Elsevier)
