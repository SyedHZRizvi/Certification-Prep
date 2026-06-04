# Module 7 Cheat Sheet — Motion Capture 🎬

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

## Retargeting — The Core Challenge

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
3. Blend in/out (2–4 frames — no snapping)
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
