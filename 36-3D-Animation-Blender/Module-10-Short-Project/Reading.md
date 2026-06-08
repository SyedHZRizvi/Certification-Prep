---
permalink: /36-3D-Animation-Blender/Module-10-Short-Project/
title: "Module 10: Short Film Project"
---

# 🎬 Module 10: Short Film Project

## The Only Deliverable That Matters

Every studio, every animation recruiter, every art director who looks at your portfolio will watch the first 5–10 seconds of your reel and decide whether to keep watching. A 10-second animated short fully modeled, textured, lit, rigged, animated, and rendered says more about your skills than 1,000 quiz scores.

This module walks you through the end-to-end production of a 10-second animated short using every technique from Modules 1 through 9. It is structured as a production pipeline, not a tutorial, you make the creative decisions, you hit the milestones, you deliver the final MP4.

The Blender Foundation's open movies *Sprite Fright* (13 minutes), *Charge* (3 minutes), *Coffee Run* (2 minutes) all began with a concept sheet and ended with a rendered short. The pipeline below is a simplified version of theirs.

---

## 10.0b Case Study Benchmarks: Open Movie Production Pipelines

Before building your own pipeline, study how the Blender Foundation structures theirs. The three most relevant open movies for a 10-second project:

| Film | Year | Team Size | Duration | Production Time | Key Pipeline Choice |
|---|---|---|---|---|---|
| *Coffee Run* | 2020 | 2 artists | 2 min | 3 months | Stylized character + single interior set |
| *Charge* | 2022 | ~5 artists | 3 min | ~8 months | Hard-surface robot + exterior environment |
| *Sprite Fright* | 2021 | 14 artists | 13 min | 12 months | Multiple organic characters + complex forest |

**Scaling down to your 10-second project:**

| Resource | Coffee Run (scaled) | Your Project Target |
|---|---|---|
| Characters | 1 main | 1 (2 maximum) |
| Environments | 1 set | 1 set |
| Shot count | 3–5 shots | 4–6 shots |
| Modeling time | 1–2 weeks | 1–2 weeks |
| Rigging time | 3–5 days | 2–4 days |
| Animation time | 1–2 weeks | 1–2 weeks |
| Render time | 2–5 hours (GPU) | 1–3 hours (GPU) |

**Ian Hubert's *Dynamo Dream* approach for solo creators:** Hubert's series demonstrates that photorealistic short films can be produced solo by using environment photographs as texture projections, minimal geometry for props, and compositing tricks to imply complexity that doesn't exist in 3D. For your 10-second project: choose one hero asset (the main character) to build with full detail; use photographic textures for everything else.

---

## 10.1 Phase 1: Pre-Production (Concept and Storyboard)

### Step 1: Concept Sheet

Before opening Blender, write one paragraph that answers:

1. **What happens?** (The plot of 10 seconds, pick one action, one beat)
2. **Who is the character?** (Name, silhouette, personality, one sentence each)
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

**Production rule:** Model only what the camera sees. A prop that is never in a close-up shot needs no fine detail. Work backward from your shot list, if the robot's hand is never in frame, keep it simple.

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

## 10.3b Stylized vs. Photorealistic: Material Strategy Comparison

| Approach | Node Complexity | UV Required | Render Time | Best For |
|---|---|---|---|---|
| **Flat vertex color** | Minimal (RGB input) | No | Very fast | Stylized, game-art aesthetic |
| **Toon BSDF** | Low (1 shader node) | Optional | Fast (EEVEE) | Cel-shaded / anime look |
| **Principled BSDF (procedural)** | Medium (Noise+ColorRamp) | No | Medium | Natural materials without external textures |
| **Principled BSDF (texture-mapped)** | Medium (Image Texture nodes) | Yes | Medium | Photorealistic characters |
| **Substance Painter export** | Low (just Image Texture per channel) | Yes (baked) | Medium-high | Professional-quality photorealism |
| **Camera-projected photo** | Low (Image Texture, Object coords) | No (uses projection) | Fast | Environment backgrounds, quick photorealism |

**Recommendation for a 10-second project:**
- Main character: Principled BSDF with 2048×2048 painted textures (or Substance Painter)
- Environment: Procedural materials (Noise + ColorRamp), no UV mapping needed
- Background props: Flat vertex color or single-color Principled BSDF with slight roughness variation

> 🎯 **What the exam tests:** The certification includes a practical component, building a complete short scene. Knowing which material approach matches which project goal is directly tested. Flat vertex color = fastest, but limited visual quality. Principled BSDF + texture maps = best quality, requires UV unwrapping. Toon BSDF = stylized look, works with or without UV maps.

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
- Shot 01 (frames 1–48): robot walks into frame, simple walk cycle from Module 7, NLA strip
- Shot 02 (frames 49–120): robot stops, looks down, head tilts (FK head bone, 3 key poses)
- Shot 03 (frames 121–192): arm extends, water drop animation (morphed sphere using shape keys + scale animation)
- Shot 04 (frames 193–240): flower blooms (shape key animation on flower petals), robot tilts head up

**Checklist before leaving animation:**
- [ ] All 240 frames reviewed in playback
- [ ] No popping or unexpected rotation flips in Graph Editor
- [ ] Walk cycle loops seamlessly (if used)
- [ ] Emotional beat is visible and readable to someone seeing it for the first time

---

## 10.5b The Blocking-First Workflow: Detailed Breakdown

The blocking-first workflow (from *Charge* and *Sprite Fright*) broken down into specific Blender operations:

**Stage 1: Stepped blocking (Constant interpolation)**
1. Timeline → set to first frame
2. Pose Mode on rig → press **I → LocRotScale** to key starting pose
3. Go to frame 8 (or wherever the next key pose is)
4. Move/rotate control bones to next pose
5. **I → LocRotScale** to key all bones
6. Repeat for all key poses through 240 frames
7. In Dope Sheet, select all keyframes → **T → Constant** to make all interpolation stepped

**Stage 2: Director review**
- Press **Space** to play the animation in Stepped mode, this is your "animatic" in 3D
- Does the story read? Can you tell what the character is doing in the first 2 seconds?
- Are the key poses strong enough on their own (readable as still images)?
- Adjust timing: slide keyframes in Dope Sheet to fix pacing

**Stage 3: Spline polish (Bezier interpolation)**
1. Dope Sheet → select all → **T → Bezier** (switch from Stepped to Spline)
2. Play: review all inbetween motion, look for overshooting and unnatural paths
3. Graph Editor: select individual channels, adjust handle positions
4. Add ease-in at anticipation frames; ease-out at follow-through frames
5. Viewport review: does the character trace smooth arcs? (enable Onion Skinning in the viewport header)

> ⚠️ **Gotcha, Switching Interpolation on Selected vs. All Keyframes:** When pressing **T** in the Dope Sheet, the interpolation change applies only to **selected** keyframes. If you want to change all keyframes in a character, press **A** first to select all, then **T**. Many beginners only change the visible/active keyframe and wonder why other parts of the animation remain in the wrong mode.

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

## 10.7b Render Settings: Complete Checklist

Before starting a full animation render, verify these settings in order:

**Render Properties:**
- [ ] Render engine: Cycles (for quality) or EEVEE (for speed)
- [ ] Samples: 256 (with OptiX denoising) or 512 (without denoising)
- [ ] Device: GPU Compute (not CPU), check System preferences first
- [ ] Denoiser: OptiX (NVIDIA) or OpenImageDenoise (CPU/AMD)
- [ ] Temporal denoising: enabled if rendering static-camera shots

**Output Properties:**
- [ ] Resolution: 1920×1080 (HD) or 2048×858 (2K DCI scope if cinematic)
- [ ] Frame rate: 24 fps (film standard) or 30 fps (web/social)
- [ ] Frame range: 1 to 240 (for 10 seconds at 24fps)
- [ ] File format: PNG (for sequence), NOT MP4 directly
- [ ] Output path: absolute path to a dedicated folder (not relative)
- [ ] Color management: Filmic (Blender default since 2.79); not Standard

**View Layer:**
- [ ] All desired render passes enabled (AO, Depth, Cryptomatte if needed)
- [ ] Correct objects visible in this layer (check collection visibility)

**Scene:**
- [ ] All simulations baked (Rigid Body, Cloth, Fluid)
- [ ] All file paths relative and accessible (no broken texture links)
- [ ] Memory usage checked, Render → Statistics (enable in Viewport Overlays)

> ⚠️ **Gotcha Filmic vs. Standard Color Management:** Blender's default **Filmic** view transform compresses very bright and very dark values, preventing overexposed highlights and improving overall color balance similar to film negative exposure response. The older **Standard** transform clips bright values to pure white, which looks CG and flat. Always keep Filmic enabled. If you're delivering to a display that requires sRGB, set the **Look** to "None" while keeping View Transform as Filmic, this gives Filmic tone-mapping without an additional look correction.

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

## 10.10 What the Exam Tests: Short Project Module

The Blender Foundation's certification capstone assessment evaluates whether candidates can plan and execute a complete production pipeline. Key tested skills:

| Topic | Tested Knowledge |
|---|---|
| Pre-production pipeline | Concept → storyboard → animatic → production; no shortcuts |
| Polygon budget discipline | Model only what the camera sees; background props = 100–300 polys |
| Material strategy | Match material complexity to project scope; know when PBR vs. stylized is appropriate |
| Blocking workflow | Constant interpolation first; Bezier only after timing approved |
| Walk cycle structure | Frame 1 = contact; Frame 12 = opposite contact; Frame 25 = loop bridge |
| Lighting per shot | Three-point setup + HDRI; per-character rim light in all shots |
| Render settings | PNG sequences (not MP4); 256 samples; OptiX or OIDN denoising |
| Bake before render | All simulations baked; no unbaked sims on render nodes |
| Compositing essentials | Color Balance (subtle); Glare (Fog Glow, 0.3 strength); AO multiply |
| Final encode | H.264 CRF 18–23; 1920×1080; 24fps; from PNG sequence via VSE |
| Color management | Filmic view transform; not Standard |
| Self-review criteria | No Z-fighting; no render noise; no rotation pops; story readable in one watch |

---

## 10.11 Summary

| Phase | Deliverable | Module Reference |
|---|---|---|
| Pre-production | Concept sheet, storyboard, animatic |, |
| Modeling | All assets: quads, UV unwrapped, scale applied | Module 2 |
| Materials | All materials: PBR or stylized, no pink missing | Module 3 |
| Rigging + Skinning | Rigify rig, clean weights, facial shape keys | Modules 5–6 |
| Animation | 240 frames: blocking → spline → polish | Module 7 |
| Lighting | Three-point + HDRI per shot | Module 4 |
| Rendering | Cycles 256s + OptiX, PNG sequences | Module 9 |
| Compositing + Delivery | Color grade, encode, 1920×1080 H.264 MP4 | Module 9 |

> ⚠️ **Gotcha, Render Directly to MP4:** The most common student mistake on the final project is rendering directly to MP4 video. If the render crashes at frame 180 of 240, the partial MP4 is unrecoverable and the entire render must restart from frame 1. PNG sequences make frame 180 crashes recoverable. Always: render PNG → encode MP4 afterward in the VSE.

---

## 📖 Inspirational Case Studies

- 📖 **Blender Foundation, *Coffee Run* (2020):** A 2-minute short made by 2 artists in 3 months. Simple character, one location, one emotional arc. Watch it on the Blender YouTube channel.
- 📖 **Blender Foundation, *Charge* (2022):** A 3-minute sci-fi short. The production blog is the best documented single-character Blender short.
- 📖 **Blender Foundation, *Wing It!* (2019):** 5-minute comedy short; demonstrates stylized character animation and cloth simulation.
- 📖 **Ian Hubert, "Lazy Tutorials"** (YouTube): Ian Hubert produces photorealistic Blender short films alone, fast. His approach to photorealism with simple geometry and smart camera work is instructive.

*[Module complete, see README for next steps and related tracks.]*

> *Key point: The principle covered in this module applies across every major production pipeline, from indie Blender shorts to Pixar feature films. The specific tools change; the underlying craft standard does not.*
