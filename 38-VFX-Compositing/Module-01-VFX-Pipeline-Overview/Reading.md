---
title: "Module 1: VFX Pipeline Overview"
---

# 🎬 Module 1: VFX Pipeline Overview

## The Shot That Changed Everything

It's 2018. You're in the ILM render farm in San Francisco. The shot is 47 seconds long — a single unbroken take through the chaos of the Battle of Wakanda in *Avengers: Infinity War*. The directors want the camera to swoop from a ground-level shield bash through fifty CG warriors, over a collapsing force field, and into the face of a crying Scarlett Johansson. The shot involves seven departments, four vendors, and 2,400 frames, every one of which is a composite of plates, CG passes, atmospherics, and hand-painted mattes.

Nobody starts with the software. They start with a **pipeline** — a document that specifies who delivers what to whom, in what format, on what frame range, at what resolution, tagged with what metadata. The compositor is the last person to touch the shot before it leaves the building. But the compositor's success depends entirely on everything the pipeline did before the shot arrived.

This module is about that pipeline. You will not open After Effects yet. You will learn to *think* like a VFX supervisor.

---

## 🏗️ The VFX Production Pipeline: From Idea to Screen

The VFX pipeline has six broad phases. Every major studio — ILM, Weta FX, Framestore, MPC, Dneg — runs some version of this structure, even when they use different software or call departments by different names.

### Phase 1: Development & Bidding

Before a single pixel is rendered, VFX studios receive the script (or at least the relevant sequences) and **bid** on the work. The VFX producer breaks the script into **VFX beat sheets** — lists of every shot likely to require visual effects. Each shot is categorized:

| Complexity Tier | Description | Example |
|-----------------|-------------|---------|
| **Tier 1** | Simple cleanup (wire removal, logo replacement) | Removing a boom mic reflection |
| **Tier 2** | Composite (greenscreen, sky replacement, set extension) | Actress in front of a digital city |
| **Tier 3** | Complex comp (tracked CG, particle FX, multiple elements) | Fighter jet with engine exhaust and heat haze |
| **Tier 4** | Hero shot (creature, digital human, destruction sequence) | 200-foot Thanos army charge |

The bid becomes the VFX budget. On a $200M film, VFX commonly consumes 30–60% of the production budget.

### Phase 2: Pre-Production

**Pre-visualization** (pre-vis) is the pipeline before the pipeline. An animatics team (often 3D, sometimes 2D storyboard) builds low-resolution animated previews of every VFX-heavy sequence. Pre-vis serves three masters:

1. The director — to confirm timing and camera movement before committing expensive crew and location days
2. The cinematographer — to plan lens choice, lighting, and camera rigging for VFX plates
3. The VFX supervisor — to identify what markers, reference frames, HDR probes, and witness cameras are needed on set

> 🎯 **Exam Tip:** Pre-vis is not polish. It is a communication tool. A pre-vis shot that "looks great" but doesn't communicate the intent of the action is a failed pre-vis.

### Phase 3: Principal Photography (Plate Shoot)

This is where the live-action camera rolls. The **VFX supervisor** is on set every day there are VFX shots. Their job is methodical:

**Before the take:**
- Confirm the floor has **tracking markers** (typically high-contrast X-shapes taped or painted to surfaces the CG will interact with)
- Set up the **witness camera** — an additional camera that captures a wide reference of the full set, including areas off-frame
- Shoot an **HDR probe** of the lighting environment (a chrome ball and gray ball photographed in every lighting state used in the scene, so the CG lighting matches the plate)
- Record the **lens data** — focal length, lens distortion profile, focus distance, stop — everything needed for the 3D camera solve

**During the take:**
- Watch the monitor, not the screen. The VFX supervisor is evaluating whether the plate is **usable**, not whether it looks cinematic.
- Flag any plates with **motion blur on tracking markers** (reduces track quality), **floating blacks** (a camera sensor issue that affects keying), or **edge contamination** (wardrobe or props crossing the greenscreen line)

**After the take:**
- **Production data package** is compiled: camera reports, lens data, HDR probes, tracking marker positions in 3D space (measured with a survey instrument), and color-calibrated reference charts shot in every lighting state

> 🚨 **Trap in Production:** A VFX supervisor who doesn't measure tracking marker positions in world space is making the matchmove artist's job 10× harder. Every production measurement that isn't taken on the day is a guess in post.

### Phase 4: Post-Production — The Departments

This is where the course lives. The post VFX pipeline routes shots through departments in roughly this order:

```
[EDITORIAL] → [SCANNING/DPX PREP] → [MATCHMOVE/TRACKING] → [3D ANIMATION & FX] → [LIGHTING/RENDERING] → [COMPOSITING] → [DI/COLOR]
```

Let's map each department:

| Department | What They Do | Primary Tools |
|------------|-------------|---------------|
| **Editorial** | Locks picture edit; exports VFX pulls | Avid, Premiere |
| **Scanning / DPX Prep** | Digitizes film or transcodes camera RAW to working format | ARRIRAW → DPX/EXR |
| **Plate Prep / Matchmove** | Camera tracking, lens undistortion, stabilization | 3DEqualizer, PFTrack, SynthEyes |
| **Digital Matte Painting (DMP)** | 2.5D or 3D painted extensions of sets and environments | Photoshop, Mari, Nuke |
| **3D Modeling & Rigging** | Creature and vehicle geometry; deformation rigs | Maya, ZBrush, Houdini |
| **FX / Simulation** | Fluids, destruction, cloth, crowds | Houdini (dominant), Bifrost, Blender |
| **Lighting & Rendering** | 3D renders in EXR with full AOV (arbitrary output variable) pass breakdown | Arnold, RenderMan, V-Ray |
| **Compositing** | Final integration of all elements into a deliverable | Nuke (dominant), After Effects |
| **DI / Color** | Final color grade, deliverable mastering | DaVinci Resolve, FilmLight Baselight |

### Phase 5: Compositing

The compositor receives from upstream:
1. **Beauty plate** — the live-action footage (usually log-encoded ARRIRAW or DPX)
2. **CG renders** — multi-channel EXR files containing the beauty pass and all AOV passes (diffuse, specular, reflection, shadow, ambient occlusion, Z-depth, etc.)
3. **DMP elements** — painted environment extensions, sky replacements
4. **FX elements** — simulation renders: smoke, fire, dust, water

The compositor's job is to make all of these look like they were photographed together by the same camera under the same light. This requires:
- Matching the **color space** of every element (converting all inputs to a common working space — typically ACES or scene-linear)
- Adding **interactive light** from CG objects onto the live actor (and vice versa)
- Matching the **grain and noise** characteristics of the plate
- Adding **lens artifacts** that tie the composite together: lens flare, chromatic aberration, film grain, vignette, depth-of-field blur

### Phase 6: Delivery & DI

The delivered composite is a **high-bit-depth DPX or EXR sequence**, often at 4K resolution, in a log color space. It goes to the DI (Digital Intermediate) facility where the colorist does the **final grade** — the "look" of the film.

> 🎯 **Exam Tip:** The compositor does a **technical grade** to match the composite to the plate. The colorist does the **creative grade** that gives the film its visual identity. These are different jobs, done by different people, in different software.

---

## 🏢 The VFX Departments in Depth

### 2D Department (Compositing)

The 2D department is where compositors live. In Nuke-centric studios (which is most film studios), compositors work in a **node graph** — a directed acyclic graph of image-processing operations. The 2D department also includes:

- **Roto artists** — tracing subjects frame-by-frame to create alpha mattes for compositors
- **Paint/cleanup artists** — wire removal, blemish cleanup, set cleanup
- **Matte painters (2.5D)** — working in Photoshop and Nuke to build painted environment extensions

### 3D Department

The 3D department covers modeling, rigging, animation, FX simulation, and rendering. The 3D leads produce the render packages (EXR sequences) that the compositor works with. A strong compositor understands what is in each AOV pass and how to reassemble them — this is covered in detail in Module 6 (Nuke).

### Plate Department

The plate department manages all live-action camera footage: ingesting from camera cards, transcoding to the working format (usually DPX or OpenEXR), applying lens undistortion, and archiving originals. They also manage the **data package** from set (lens data, HDR probes, survey data).

### DMP Department (Digital Matte Painting)

DMPs are the painted environments that replace or extend the physical set. Modern DMP is done in 3D — a rough geometry pass is rendered in perspective, then painted over in Photoshop or Mari, then projected back onto geometry for parallax. The classic Framestore DMP for *Gravity* (2013), where entire orbital sequences were built from painted NASA reference, is the canonical example.

---

## 🎬 Case Study 1: Avengers — Infinity War & Endgame

*Avengers: Infinity War* (2018) and *Endgame* (2019) represent the largest single VFX undertaking in cinema history:

- **Infinity War**: 2,900 VFX shots. ILM was primary vendor. Thanos was entirely digital — a digital human project requiring 300+ ILM artists for 18 months.
- **Endgame**: 3,000+ VFX shots across ILM, Weta Digital, Digital Domain, Framestore, and Method Studios.

**Pipeline challenges:**

| Challenge | Solution |
|-----------|---------|
| Thanos needed to interact physically with live actors | ILM used on-set performer Josh Brolin with facial reference markers; his performance drove a digital double with real-time preview on set |
| The "snap" disintegration FX was needed in 75+ shots | ILM built a Houdini simulation pipeline for the dust disintegration that could be reused and adjusted per shot in hours, not weeks |
| The time-heist sequence required multiple versions of the same actors at different ages | Digital Domain's "de-aging" pipeline (used previously on *Captain America: Civil War*) was extended; 2D artists did secondary cleanup in Nuke |
| 30+ VFX vendors needed consistent character look | ILM controlled the "bible" — a set of Nuke scripts and look-dev renders that every vendor used to match Thanos's skin, armor, and lighting |

**What a compositor worked on:**
- Integration of the digital Thanos into live plates (key challenge: interactive light — Thanos's energy glow illuminating real actor faces)
- The "portal" sequence in Endgame — each portal was a separate comp element; the "A" team at ILM spent 14 weeks on the master portal wide shot
- Blending digital stunt doubles into fight choreography

> 🎯 **Industry Insight:** ILM uses Nuke almost exclusively for compositing. The lead compositor on an ILM hero shot may have 400+ nodes in a single Nuke script. Understanding node graph organization (groups, dots, backdrops) is not optional — it's how you survive a production.

---

## 🎬 Case Study 2: The Mandalorian — The LED Volume Stage

*The Mandalorian* (2019–present, Disney+/Lucasfilm) represents the most significant paradigm shift in live-action VFX production since the green screen.

**The technology:** Industrial Light & Magic built a 270° LED video wall — 20 feet tall, 75 feet in diameter — called **The Volume**. Instead of filming against a greenscreen and adding a digital background in post, actors film in front of a photorealistic, parallax-correct background rendered in real time by Unreal Engine.

| Traditional Green Screen | LED Volume |
|--------------------------|-----------|
| Filmed on green; background added in post | Background plays live during photography |
| Reflective surfaces require complex comp work (glass, chrome) | Reflections are real — chrome helmet reflects the Unreal environment |
| Interactive light requires comp simulation | Interactive light is physical — the LED panels light the actors |
| Compositing work: weeks per shot | Compositing work: hours per shot (cleanup only) |
| Director sees final comp weeks after shoot | Director sees the final image on set in real time |

**What VFX artists do on a Volume production:**
- **Environment artists** build and light the Unreal Engine environments
- **Real-time VFX artists** handle interactive FX elements (fire, particles) that run in Unreal Engine
- **Compositors** handle cleanup, sky replacements when the LED ceiling is out-of-frame, and integration of CG characters (the Grogu puppet is a physical prop, but fully digital sequences require integration)

> 🚨 **Industry Trap:** The LED Volume does not eliminate compositing. It shifts compositing work upstream and downstream. Environmental art and real-time FX become pre-production work. Cleanup, CG character integration, and final color become post work. A compositor who understands the Volume pipeline is more hireable in 2025 than one who doesn't.

---

## 🔬 On-Set VFX Supervision: The Practical Checklist

The following checklist is representative of what an on-set VFX supervisor manages. Memorize the categories if not every line item.

### Before Principal Photography Begins

| Task | Why It Matters |
|------|---------------|
| Define tracking marker placement plan | Markers in frame that are out of frame in final comp waste money; markers that aren't on VFX surfaces are useless |
| Select greenscreen type and brand | Chroma key blue vs green depends on talent skin tones and wardrobe; Rosco DigiComp vs painted backing affects spill color |
| Define witness camera placement | The witness camera captures data that can save a shot from being re-shot — it documents the full lighting environment |
| Create HDR probe capture protocol | Probe shots must be bracketed exposures (-4 to +4 stops) in every lighting setup; skipping one setup is an error |
| Agree on data delivery format | The plate department needs to know: raw vs transcoded, frame range padding, file naming convention |

### During Each VFX Shot

| Task | Why It Matters |
|------|---------------|
| Review greenscreen uniformity | Hotspots and dark patches create uneven keys; flag before rolling |
| Check talent wardrobe for green/blue spill risk | Green tie in front of greenscreen = the tie will disappear |
| Confirm lens data is being logged | No lens data = no accurate camera solve in post |
| Shoot color-calibrated chart in each lighting state | The DIT (digital imaging technician) uses this; so does the plate prep department |
| Shoot VFX reference frame at the top of every take | A "VFX marker" (clapper board with "VFX REF" written) ensures the plate department knows which take is a reference clean plate |

---

## 📊 Summary: The VFX Pipeline at a Glance

| Phase | Who Owns It | Key Output |
|-------|-------------|-----------|
| Development & Bidding | VFX Producer | Beat sheet, bid, schedule |
| Pre-Production / Pre-vis | Pre-vis Supervisor | Animatic cuts, on-set guide |
| Principal Photography | VFX Supervisor | Plates, data package, reference |
| Post — Matchmove | Matchmove TD | Tracked cameras, undistorted plates |
| Post — 3D/FX | CG Supervisor | EXR render packages |
| Post — DMP | Matte Painting Supervisor | DMP elements |
| Post — Compositing | Compositing Supervisor | Final comp deliverable |
| DI / Color | Colorist | Finished film color |

---

## 🎯 Next Steps

You now understand the factory. In Module 2, you will enter the compositing department at the most fundamental skill: pulling a key. Green screen keying is the entry point for almost every VFX artist — and the three-step Keylight workflow is the foundation of professional-grade compositing in After Effects.

---

## 📚 Further Reading

- **VES Handbook of Visual Effects, 2nd Edition** — Chapters 1 and 2 (Pipeline and Pre-Production) — the authoritative industry reference
- **Cinefex Magazine** — the *Avengers* and *Mandalorian* issues are exceptionally detailed on pipeline choices
- **"The Art of VFX" blog (artofvfx.com)** — interviews with VFX supervisors on specific film productions
- **Corridor Crew — "VFX Artists React" series** — working ILM/Digital Domain artists breaking down specific shots from major films
