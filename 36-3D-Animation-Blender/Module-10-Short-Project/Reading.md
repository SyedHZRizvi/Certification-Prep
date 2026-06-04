---
permalink: /36-3D-Animation-Blender/Module-10-Short-Project/
title: "Module 10: Short Film Project"
---

# 🎬 Module 10: Short Film Project

## The Only Deliverable That Matters

Every studio, every animation recruiter, every art director who looks at your portfolio will watch the first 5–10 seconds of your reel and decide whether to keep watching. A 10-second animated short — fully modeled, textured, lit, rigged, animated, and rendered — says more about your skills than 1,000 quiz scores.

This module walks you through the end-to-end production of a 10-second animated short using every technique from Modules 1 through 9. It is structured as a production pipeline, not a tutorial — you make the creative decisions, you hit the milestones, you deliver the final MP4.

The Blender Foundation's open movies — *Sprite Fright* (13 minutes), *Charge* (3 minutes), *Coffee Run* (2 minutes) — all began with a concept sheet and ended with a rendered short. The pipeline below is a simplified version of theirs.

---

## 10.1 Phase 1: Pre-Production (Concept and Storyboard)

### Step 1: Concept Sheet

Before opening Blender, write one paragraph that answers:

1. **What happens?** (The plot of 10 seconds — pick one action, one beat)
2. **Who is the character?** (Name, silhouette, personality — one sentence each)
3. **Where does it take place?** (One-sentence setting description)
4. **What is the emotional payoff?** (What does the viewer feel at the end?)

**Example concept (the kind used for indie shorts):**

> *A tiny robot finds a wilted flower. It produces a single drop of water from its chest panel. The flower blooms. The robot looks up at the camera with what might be happiness.*

Simple. Clear. One action, one emotional arc, 10 seconds.

### Step 2: Thumbnail Storyboard

Draw (on paper, on Procreate, or in Blender's Grease Pencil) 5–8 thumbnail panels:
- Panel 1: Establishing shot (where are we?)
- Panel 2: Character introduction (who is here?)
- Panel 3: The problem/action begins
- Panel 4–6: Action unfolds
- Panel 7: Resolution
- Panel 8 (optional): Emotional close-up

Do not spend more than 2 hours on the storyboard. The goal is to plan camera shots and timing, not to create finished art.

### Step 3: Shot List and Animatic

| Shot | Duration | Camera | Notes |
|---|---|---|---|
| Shot 01 | 2s | Wide establishing | Show environment, hint at character |
| Shot 02 | 3s | Mid shot | Character discovers the flower |
| Shot 03 | 3s | Close-up | Robot's action (water drop) |
| Shot 04 | 2s | Wide + Close | Flower blooms, robot's reaction |

10 seconds total. Simple. Every second is planned.

An **animatic** is a timed slideshow of your storyboard panels cut to the planned shot duration in Blender's Video Sequence Editor. It gives you a "paper edit" of your film before a single polygon is modeled.

---

## 10.2 Phase 2: Modeling

Apply the principles from Module 2. For a 10-second short with one character, keep the polygon budget tight:

| Asset | Polygon Budget (base) | Notes |
|---|---|---|
| Main character | 2,000–4,000 | Low-poly + Subdivision level 2 |
| Flower prop | 200–500 | Simple; petals can be planes |
| Ground/environment | 300–800 | Simple terrain; texture does the work |
| Background elements | 100–300 each | Silhouette only; blurred in camera |

**Production rule:** Model only what the camera sees. A prop that is never in a close-up shot needs no fine detail. Work backward from your shot list — if the robot's hand is never in frame, keep it simple.

**Checklist before leaving the modeling phase:**
- [ ] All meshes: quads only, no n-gons
- [ ] Edge loops at all deformation joints
- [ ] Scale applied (Ctrl+A → Apply Scale)
- [ ] Mirror Modifier applied (if symmetrical)
- [ ] UV unwrapped (all objects)
- [ ] Loose geometry removed (Mesh → Clean Up → Delete Loose)

---

## 10.3 Phase 3: Materials and Texturing

Each asset needs at least a base material. For a 10-second short, use a simple workflow:

**Option A: Simple PBR (recommended for beginners):**
- Principled BSDF with Base Color, Roughness, and a subtle Normal map
- Texture resolution: 1024×1024 for background props; 2048×2048 for the main character

**Option B: Stylized/Toon:**
- Toon BSDF or Shader-to-RGB node with Color Ramp for flat shading
- No UV maps needed if using flat vertex colors or procedural textures
- Faster to produce; excellent for indie stylized animation

**Checklist before leaving the materials phase:**
- [ ] All objects have at least one material assigned
- [ ] No missing (pink) material errors
- [ ] Character face material has Subsurface Weight > 0 (if organic/realistic)
- [ ] Material Preview viewport looks correct under HDRI

---

## 10.4 Phase 4: Rigging and Skinning

Apply the principles from Modules 5 and 6. For a simple character:

1. Use Rigify (Human Meta-Rig or simple custom rig)
2. Ctrl+P → Armature Deform with Automatic Weights
3. Test all major joints through full range of motion
4. Correct the 3–5 worst weight painting areas manually
5. Add corrective shape keys if needed (shoulder, armpit)
6. Facial shape keys: at minimum, Blink.L, Blink.R, Smile, Mouth.Open

**Checklist before leaving the rigging phase:**
- [ ] All limbs deform cleanly at 90° rotation
- [ ] No skin bag artifacts at armpits (or corrective shape key applied)
- [ ] Face: basic expressions working via shape keys
- [ ] IK/FK working on at least legs (for foot planting)
- [ ] Armature scale applied

---

## 10.5 Phase 5: Animation

Apply Module 7's blocking-first workflow. For a 10-second short at 24fps = 240 frames:

**Blocking pass (2–4 hours):**
- Set interpolation to Constant (Stepped)
- Key only the essential poses: every 4–8 frames for fast action, every 8–12 for slow
- Judge timing: does the action read? Is the emotional beat clear?

**Spline pass (4–8 hours):**
- Switch to Bezier interpolation
- Open Graph Editor: check all major channels for overshooting, rogue keys
- Add ease-in / ease-out at key beats
- Add secondary motion: hair, loose clothing (if applicable)
- Add follow-through: after the main action, add tail/cloth/prop momentum

**Specifics for a "robot finds a flower" example:**
- Shot 01 (frames 1–48): robot walks into frame — simple walk cycle from Module 7, NLA strip
- Shot 02 (frames 49–120): robot stops, looks down, head tilts (FK head bone, 3 key poses)
- Shot 03 (frames 121–192): arm extends, water drop animation (morphed sphere using shape keys + scale animation)
- Shot 04 (frames 193–240): flower blooms (shape key animation on flower petals), robot tilts head up

**Checklist before leaving animation:**
- [ ] All 240 frames reviewed in playback
- [ ] No popping or unexpected rotation flips in Graph Editor
- [ ] Walk cycle loops seamlessly (if used)
- [ ] Emotional beat is visible and readable to someone seeing it for the first time

---

## 10.6 Phase 6: Lighting

Apply Module 4's three-point setup to each shot, plus the HDRI:

**Setup for a gentle, hopeful mood (robot + flower story):**
- HDRI: outdoor overcast, strength 0.4 (Poly Haven)
- Key: Area light, warm (4,200K), 60cm × 60cm, positioned upper-left of character
- Fill: Area light, cool (6,000K), 50% of key strength, right side
- Rim: Area light, cool (6,500K), 120% of key, behind character pointing toward camera

This creates the "hopeful drama" ratio: approximately 4:1, with cool rim suggesting sky bounce.

**Per-shot adjustment:** Shot 03 (close-up of water drop) may need a small additional light on the drop to make it read. A small Spot or Point light with a warm color positioned above the drop is a classic "product shot" technique.

---

## 10.7 Phase 7: Rendering

Apply Module 9's pipeline:

1. Set Output: PNG sequences, 1920×1080, frame range 1–240
2. Renderer: Cycles, 256 samples, OptiX denoising
3. Enable passes: Combined, AO, Depth (for optional post DoF)
4. Bake any physics simulations first
5. Render: F12 for still test; Ctrl+F12 for animation render
6. Monitor: check first 10 frames live, then let it run

**Estimated render time at 256 samples, OptiX, RTX 3080:**
- 240 frames × 10–20 seconds per frame = 40–80 minutes

**Estimated render time on CPU (no GPU):**
- 240 frames × 3–8 minutes per frame = 12–32 hours

GPU rendering is strongly recommended for this project. If no GPU is available, reduce samples to 128 and accept slightly more noise (denoising still works).

---

## 10.8 Phase 8: Compositing and Delivery

1. Open Blender's Compositor
2. Render Layers node → plug Combined into Color Balance node (slight warm-up in midtones)
3. Add Glare node (Fog Glow, low strength 0.3) for subtle bloom
4. Optional: AO pass multiplied over Diffuse for deeper contact shadows
5. Composite node → output to PNG sequence

**Final encode:**
1. Open Blender's Video Sequence Editor
2. Add → Image/Sequence → select all PNG frames
3. Add audio track if applicable
4. Set Output: MP4, H.264, CRF 18, 1920×1080, 24fps
5. Ctrl+F12 → render the final MP4

---

## 10.9 Self-Review Checklist

Before uploading to your portfolio:

**Technical:**
- [ ] No visible seams, clipping, or Z-fighting (two surfaces at the same depth)
- [ ] No frame-rate issues (consistent 24fps, no stutter from cache errors)
- [ ] No visible render noise (denoising applied)
- [ ] No shadow acne (black spots from shadow map precision)
- [ ] Audio (if present) is synced
- [ ] Delivered at exactly 1920×1080, 24fps, H.264 MP4

**Animation:**
- [ ] Ease-in and ease-out on all major poses
- [ ] Emotional beat is clear in the first watch
- [ ] Character reads against the background (rim light visible)
- [ ] No pops or sudden rotations

**Storytelling:**
- [ ] The story is understandable in one watch
- [ ] The emotional payoff is felt (even briefly)
- [ ] Runtime is close to 10 seconds (8–12 acceptable)

---

## 10.10 Summary

| Phase | Deliverable | Module Reference |
|---|---|---|
| Pre-production | Concept sheet, storyboard, animatic | — |
| Modeling | All assets: quads, UV unwrapped, scale applied | Module 2 |
| Materials | All materials: PBR or stylized, no pink missing | Module 3 |
| Rigging + Skinning | Rigify rig, clean weights, facial shape keys | Modules 5–6 |
| Animation | 240 frames: blocking → spline → polish | Module 7 |
| Lighting | Three-point + HDRI per shot | Module 4 |
| Rendering | Cycles 256s + OptiX, PNG sequences | Module 9 |
| Compositing + Delivery | Color grade, encode, 1920×1080 H.264 MP4 | Module 9 |

---

## 📖 Inspirational Case Studies

- 📖 **Blender Foundation — *Coffee Run* (2020):** A 2-minute short made by 2 artists in 3 months. Simple character, one location, one emotional arc. Watch it on the Blender YouTube channel.
- 📖 **Blender Foundation — *Charge* (2022):** A 3-minute sci-fi short. The production blog is the best documented single-character Blender short.
- 📖 **Blender Foundation — *Wing It!* (2019):** 5-minute comedy short; demonstrates stylized character animation and cloth simulation.
- 📖 **Ian Hubert — "Lazy Tutorials"** (YouTube): Ian Hubert produces photorealistic Blender short films alone, fast. His approach to photorealism with simple geometry and smart camera work is instructive.
