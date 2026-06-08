# Module 7 Cheat Sheet, Motion Capture 🎬

## Three Mocap Technology Types

| Type | Method | Pros | Cons | Best For |
|------|--------|------|------|---------|
| Optical | Reflective markers + IR cameras | Highest accuracy | Occlusion; large setup | Film/TV hero shots |
| Inertial | IMU sensors on body | Portable; no volume | Drift; relative position | Games; previz |
| Markerless | Computer vision on video | No suit; retroactive | Lowest accuracy | Archival; background |

**Optical marker count:**
- Full body (no fingers): 40–55 markers
- With fingers: 80–100 markers
- With facial rig: 200–350 additional

---

## 5-Phase Mocap Cleanup Process

```
1. MARKER CLEANUP    Fill occluded gaps; remove noise
2. SKELETON SOLVING  Convert marker pos → joint rotations
3. RETARGETING       Scale to different proportions; preserve contact intent
4. FOOT LOCKING      Pin feet to world-space at contact frames
5. CONTACT EDITING   Fix hand contacts, props, character interactions
```

---

## Retargeting, The Core Challenge

**Retargeting paradox:** Different leg length → same steps, less ground → appears faster.

**Fixes:**
- Adjust stride frequency to match leg length
- Adjust root motion speed to match stride  
- Rebalance contact pattern

**Contact intent:** Retargeted character must contact ground at same frames as actor.

---

## Foot Lock Workflow

```
1. Identify contact frames (foot meant to be stationary)
2. Set IK constraint (pin foot to world-space)
3. Blend in/out (2–4 frames, no snapping)
4. Check hip/root compensation
5. Verify with ground contact curves (no penetration, no float)
```

---

## MotionBuilder Key Concepts

| Term | Definition |
|------|-----------|
| Character definition | Bone mapping to standard template |
| Actor | Raw mocap data node |
| Character | Retargeted animation output |
| Story tool | Non-linear mocap clip editing |
| Control rig | FK/IK interface for cleanup |
| Plot | Bakes live retarget → keyframes |

---

## When NOT to Use Mocap

| Situation | Why | Use Instead |
|-----------|-----|-------------|
| Stylized cartoon | Human motion wrong on non-human proportions | Keyframe |
| Superhero physics | Real physics ≠ visual language | Keyframe |
| Comedy pantomime | Timing subtleties | Keyframe on 2s |
| Non-human creatures | No valid human reference | Keyframe + creature ref |
| Close-up emotion | Micro-expression nuance lost | Keyframe facial |
| Symbolic slow motion | Non-natural timing required | Keyframe |

---

## Case Study Quick-Reference

| Film | Technology | Key Innovation |
|------|-----------|----------------|
| Avatar (2009) | Optical + facial cam | 6× volume; real-time Na'vi playback |
| War for Apes (2017) | Optical + retarget | Biped → quadruped retarget; gait keyframed |

**Raw mocap is always the BEGINNING, not the end. Every hero shot is enhanced by keyframe animators.**

---

## Mocap Cleanup Checklist (Production Grade)

### Phase 1: Raw Data
```
[ ] All markers identified and labeled correctly
[ ] Occlusion gaps located and flagged
[ ] Noise spikes above 2mm identified
[ ] Performer body metrics recorded
```

### Phase 2: Retargeting
```
[ ] Character definition bone mapping verified
[ ] T-pose binding clean (no rotational offsets)
[ ] Contact intent documented: [frame] → [foot] → [contact type]
[ ] Proportion scaling applied: leg, arm, spine
[ ] Foot type conversion verified (plantigrade/digitigrade)
```

### Phase 3: Cleanup
```
[ ] Occlusion gaps filled with plausible interpolation
[ ] Noise spikes removed
[ ] Foot lock at all contact frames
[ ] No ground penetration in any frame
[ ] No foot float during contact holds
[ ] Hip compensation verified after foot lock
```

### Phase 4: Enhancement
```
[ ] Anticipation duration adjusted to CHARACTER mass (not actor)
[ ] Settle duration adjusted to character mass
[ ] Keyframe enhancement: emotional performance (especially face)
[ ] Creature bible behavioral vocabulary verified
```

---

## Proportion Scale Reference

| Character Type | Leg Length vs. Human | Stride Adjustment |
|---------------|---------------------|-----------------|
| Child (8–10 yr) | 0.6× | Increase frequency 1.4×; reduce speed 0.7× |
| Tall (2.0m) | 1.1× | Decrease frequency 0.9×; increase speed 1.1× |
| Hobbit/Dwarf | 0.5× | Increase frequency 1.7×; reduce speed 0.6× |
| Giant (5m) | 3× | Decrease frequency 0.4×; increase speed 2.5× |

**The retargeting paradox:** Different leg length + same stride count = character glides. Fix: adjust frequency OR root motion speed OR both.

---

## Mocap Decision Matrix

| Question | YES → | NO → |
|---------|------|------|
| Human proportions? | Mocap likely viable | Significant retargeting required |
| Real-world physics? | Mocap likely viable | Keyframe or heavily modified mocap |
| Close-up emotional? | Keyframe face + mocap body | Mocap may suffice |
| Comedy timing? | Keyframe only | Continue |
| Superhuman speed? | Keyframe or simulated | Continue |

---

## Module 7 Exam Rapid-Fire

| Question | Answer |
|---------|--------|
| Optical mocap markers: body (no fingers) | 40–55 markers |
| Optical markers with fingers | 80–100 markers |
| Facial capture markers | 200–350 additional |
| Inertial mocap primary limitation | Drift accumulates over time; relative position only |
| 5 cleanup phases in order | Marker cleanup → Skeleton solve → Retargeting → Foot lock → Contact editing |
| Contact intent in retargeting | Actor contacts ground at f12 → character must also contact at ~f12 |
| MotionBuilder "Plot" operation | Bakes live retargeting to keyframes for export |
| Avatar volume innovation | 6× larger than previous; real-time Na'vi character playback |
| War for Apes quadruped walk | Keyframed by animators, not retargeted from bipedal actor |
| Markerless mocap use case | Crowd background characters; previz; NOT hero shots |
