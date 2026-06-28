---
title: "Module 1: VFX Pipeline Overview"
---

# 🎬 Module 1: VFX Pipeline Overview

## The Shot That Changed Everything

It's 2018. You're in the ILM render farm in San Francisco. The shot is 47 seconds long, a single unbroken take through the chaos of the Battle of Wakanda in *Avengers: Infinity War*. The directors want the camera to swoop from a ground-level shield bash through fifty CG warriors, over a collapsing force field, and into the face of a crying Scarlett Johansson. The shot involves seven departments, four vendors, and 2,400 frames, every one of which is a composite of plates, CG passes, atmospherics, and hand-painted mattes.

Nobody starts with the software. They start with a **pipeline**, a document that specifies who delivers what to whom, in what format, on what frame range, at what resolution, tagged with what metadata. The compositor is the last person to touch the shot before it leaves the building. But the compositor's success depends entirely on everything the pipeline did before the shot arrived.

This module is about that pipeline. You will not open After Effects yet. You will learn to *think* like a VFX supervisor.

---

## 🏗️ The VFX Production Pipeline: From Idea to Screen

The VFX pipeline has six broad phases. Every major studio ILM, Weta FX, Framestore, MPC, Dneg runs some version of this structure, even when they use different software or call departments by different names.

### Phase 1: Development & Bidding

Before a single pixel is rendered, VFX studios receive the script (or at least the relevant sequences) and **bid** on the work. The VFX producer breaks the script into **VFX beat sheets**, lists of every shot likely to require visual effects. Each shot is categorized:

| Complexity Tier | Description | Example |
|-----------------|-------------|---------|
| **Tier 1** | Simple cleanup (wire removal, logo replacement) | Removing a boom mic reflection |
| **Tier 2** | Composite (greenscreen, sky replacement, set extension) | Actress in front of a digital city |
| **Tier 3** | Complex comp (tracked CG, particle FX, multiple elements) | Fighter jet with engine exhaust and heat haze |
| **Tier 4** | Hero shot (creature, digital human, destruction sequence) | 200-foot Thanos army charge |

The bid becomes the VFX budget. On a $200M film, VFX commonly consumes 30–60% of the production budget.

### Phase 2: Pre-Production

**Pre-visualization** (pre-vis) is the pipeline before the pipeline. An animatics team (often 3D, sometimes 2D storyboard) builds low-resolution animated previews of every VFX-heavy sequence. Pre-vis serves three masters:

1. The director, to confirm timing and camera movement before committing expensive crew and location days
2. The cinematographer, to plan lens choice, lighting, and camera rigging for VFX plates
3. The VFX supervisor, to identify what markers, reference frames, HDR probes, and witness cameras are needed on set

> 🎯 **What the exam tests:** Pre-vis is not polish. It is a communication tool. A pre-vis shot that "looks great" but doesn't communicate the intent of the action is a failed pre-vis.

### Phase 3: Principal Photography (Plate Shoot)

This is where the live-action camera rolls. The **VFX supervisor** is on set every day there are VFX shots. Their job is methodical:

**Before the take:**
- Confirm the floor has **tracking markers** (typically high-contrast X-shapes taped or painted to surfaces the CG will interact with)
- Set up the **witness camera**, an additional camera that captures a wide reference of the full set, including areas off-frame
- Shoot an **HDR probe** of the lighting environment (a chrome ball and gray ball photographed in every lighting state used in the scene, so the CG lighting matches the plate)
- Record the **lens data** focal length, lens distortion profile, focus distance, stop everything needed for the 3D camera solve

**During the take:**
- Watch the monitor, not the screen. The VFX supervisor is evaluating whether the plate is **usable**, not whether it looks cinematic.
- Flag any plates with **motion blur on tracking markers** (reduces track quality), **floating blacks** (a camera sensor issue that affects keying), or **edge contamination** (wardrobe or props crossing the greenscreen line)

**After the take:**
- **Production data package** is compiled: camera reports, lens data, HDR probes, tracking marker positions in 3D space (measured with a survey instrument), and color-calibrated reference charts shot in every lighting state

> ⚠️ **Rookie mistake:** A VFX supervisor who doesn't measure tracking marker positions in world space is making the matchmove artist's job 10× harder. Every production measurement that isn't taken on the day is a guess in post.

### Phase 4: Post-Production, The Departments

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
| **Digital Matte Painting (DMP (Data Management Platform))** | 2.5D or 3D painted extensions of sets and environments | Photoshop, Mari, Nuke |
| **3D Modeling & Rigging** | Creature and vehicle geometry; deformation rigs | Maya, ZBrush, Houdini |
| **FX / Simulation** | Fluids, destruction, cloth, crowds | Houdini (dominant), Bifrost, Blender |
| **Lighting & Rendering** | 3D renders in EXR with full AOV (arbitrary output variable) pass breakdown | Arnold, RenderMan, V-Ray |
| **Compositing** | Final integration of all elements into a deliverable | Nuke (dominant), After Effects |
| **DI / Color** | Final color grade, deliverable mastering | DaVinci Resolve, FilmLight Baselight |

### Phase 5: Compositing

The compositor receives from upstream:
1. **Beauty plate**, the live-action footage (usually log-encoded ARRIRAW or DPX)
2. **CG renders**, multi-channel EXR files containing the beauty pass and all AOV passes (diffuse, specular, reflection, shadow, ambient occlusion, Z-depth, etc.)
3. **DMP elements**, painted environment extensions, sky replacements
4. **FX elements**, simulation renders: smoke, fire, dust, water

The compositor's job is to make all of these look like they were photographed together by the same camera under the same light. This requires:
- Matching the **color space** of every element (converting all inputs to a common working space, typically ACES or scene-linear)
- Adding **interactive light** from CG objects onto the live actor (and vice versa)
- Matching the **grain and noise** characteristics of the plate
- Adding **lens artifacts** that tie the composite together: lens flare, chromatic aberration, film grain, vignette, depth-of-field blur

### Phase 6: Delivery & DI

The delivered composite is a **high-bit-depth DPX or EXR sequence**, often at 4K resolution, in a log color space. It goes to the DI (Digital Intermediate) facility where the colorist does the **final grade**, the "look" of the film.

> 🎯 **What the exam tests:** The compositor does a **technical grade** to match the composite to the plate. The colorist does the **creative grade** that gives the film its visual identity. These are different jobs, done by different people, in different software.

---

## 🏢 The VFX Departments in Depth

### 2D Department (Compositing)

The 2D department is where compositors live. In Nuke-centric studios (which is most film studios), compositors work in a **node graph**, a directed acyclic graph of image-processing operations. The 2D department also includes:

- **Roto artists**, tracing subjects frame-by-frame to create alpha mattes for compositors
- **Paint/cleanup artists**, wire removal, blemish cleanup, set cleanup
- **Matte painters (2.5D)**, working in Photoshop and Nuke to build painted environment extensions

### 3D Department

The 3D department covers modeling, rigging, animation, FX simulation, and rendering. The 3D leads produce the render packages (EXR sequences) that the compositor works with. A strong compositor understands what is in each AOV pass and how to reassemble them, this is covered in detail in Module 6 (Nuke).

### Plate Department

The plate department manages all live-action camera footage: ingesting from camera cards, transcoding to the working format (usually DPX or OpenEXR), applying lens undistortion, and archiving originals. They also manage the **data package** from set (lens data, HDR probes, survey data).

### DMP Department (Digital Matte Painting)

DMPs are the painted environments that replace or extend the physical set. Modern DMP is done in 3D, a rough geometry pass is rendered in perspective, then painted over in Photoshop or Mari, then projected back onto geometry for parallax. The classic Framestore DMP for *Gravity* (2013), where entire orbital sequences were built from painted NASA reference, is the canonical example.

---

## 🎬 Case Study 1: Avengers, Endgame (2019) Final Battle Pipeline

*Avengers: Endgame* represents the largest single VFX undertaking in cinema history, with 3,000+ VFX shots produced across ILM, Weta Digital, Digital Domain, Framestore, Method Studios, and more than a dozen smaller vendors over 18 months of simultaneous production.

### The Multi-Vendor Challenge

Endgame's final battle sequence alone involved more than 2,500 individual VFX shots. No single studio could handle this volume, the production used a **split-vendor model** in which different studios were responsible for specific characters and sequences, while ILM served as the overall technical supervisor maintaining look consistency.

| Vendor | Primary Responsibility | Key Technical Challenge |
|--------|----------------------|------------------------|
| **ILM** | Thanos, Smart Hulk, portal sequence, overall look supervision | Digital human integration; maintaining look bible across all vendors |
| **Weta Digital** | Dwarf armies, battle crowd simulation, CG environments | 100,000+ simulated CG soldiers in a single frame |
| **Digital Domain** | Iron Man suit, Tony's death sequence | Ultra-high-detail HUD elements; subsurface skin scattering on dying Tony |
| **Framestore** | Black Widow sequences, general battle compositing | Practical stunt performer integration with CG doubles |
| **Method Studios** | Quantum Realm sequences, van sequences | Sub-microscopic scale environment rendering |

### The "Look Bible" System

With 12+ vendors all touching the same characters, Endgame's pipeline team at ILM created a **look bible**, a document package containing:

- Nuke scripts with the exact Grade node settings for each character
- Reference renders in multiple lighting conditions (interior, exterior, overcast, golden hour)
- Approved skin shaders, texture maps, and lighting rigs for CG characters
- Approved matte line treatments for edge blending

Every vendor was required to match their deliverables to the look bible before submission. Shots failing the look bible were returned for revision. This process called **vendor QC** added weeks to the schedule but was essential for visual coherence.

> 🎯 **What the exam tests:** The look bible system is how large productions maintain visual consistency across multiple VFX vendors. A compositor at any vendor studio must match their work to the look bible, not to their own aesthetic judgment.

### The Portal Sequence Technical Breakdown

The final battle's portal sequence where 50+ portals open to deliver the full Avengers roster was ILM's most complex single sequence:

- **Shot count:** 14 weeks for a single wide establishing shot (the "A" plate of all portals opening simultaneously)
- **Each portal:** A separate compositing element with unique lighting, depth, atmosphere, and character integration
- **Compositor's workflow:** Each portal was pre-comped individually, then nested into a master Nuke script; the master script combined 47 separate pre-comps
- **Interactive light:** Every character arriving through a portal cast a unique colored light that had to interact with every adjacent character and environment surface

> ⚠️ **Rookie mistake:** On large multi-vendor shots, compositors sometimes apply their own creative color grading instead of matching the look bible. This creates inconsistency that requires expensive rework. Match the reference, not your personal preference.

---

## 🎬 Case Study 2: The Mandalorian, The LED Volume Stage (StageCraft)

*The Mandalorian* (2019–present, Disney+/Lucasfilm) represents the most significant paradigm shift in live-action VFX production since the green screen.

**The technology:** Industrial Light & Magic built a 270° LED video wall 20 feet tall, 75 feet in diameter called **The Volume**. Instead of filming against a greenscreen and adding a digital background in post, actors film in front of a photorealistic, parallax-correct background rendered in real time by Unreal Engine.

| Traditional Green Screen | LED Volume (StageCraft) |
|--------------------------|-----------|
| Filmed on green; background added in post | Background plays live during photography |
| Reflective surfaces require complex comp work (glass, chrome) | Reflections are real, chrome helmet reflects the Unreal environment |
| Interactive light requires comp simulation | Interactive light is physical, the LED panels light the actors |
| Compositing work: weeks per shot | Compositing work: hours per shot (cleanup only) |
| Director sees final comp weeks after shoot | Director sees the final image on set in real time |
| Requires large greenscreen stage | Volume stage is reconfigurable per episode |

### How StageCraft Eliminates Green Screen Problems

The three most expensive problems in greenscreen production are spill contamination, reflective surfaces, and interactive light. StageCraft eliminates all three:

1. **Spill:** Because there is no greenscreen, there is no spill suppression needed. The actor is simply illuminated by the LED walls.
2. **Reflections:** Din Djarin's Beskar armor reflects the actual Unreal Engine environment in real time. No comp artist needs to paint fake reflections.
3. **Interactive light:** When the Mando holds a flare, the LED wall dims slightly and warms in response. The actor's face is lit by the wall's actual color change.

**What VFX artists do on a Volume production:**
- **Environment artists** build and light the Unreal Engine environments
- **Real-time VFX artists** handle interactive FX elements (fire, particles) that run in Unreal Engine
- **Compositors** handle cleanup, sky replacements when the LED ceiling is out-of-frame, and integration of CG characters (Grogu digital sequences require integration)

> 🎯 **What the exam tests:** The LED Volume does not eliminate compositing. It shifts compositing work upstream and downstream. Environmental art and real-time FX become pre-production work. Cleanup, CG character integration, and final color become post work. A compositor who understands the Volume pipeline is more hireable in 2025 than one who doesn't.

---

## 🎬 Case Study 3: 1917, The One-Shot Film's VFX Challenge

Sam Mendes's *1917* (2019, DNEG) appears to be a single continuous take from beginning to end, two British soldiers running across World War I battlefields in real time. In reality, the film is assembled from dozens of shots, seamlessly stitched together by DNEG's compositing team to appear unbroken.

### The Compositing Invisible Stitch Technique

DNEG's approach to building the seamless one-shot illusion:

| Challenge | Solution |
|-----------|---------|
| Camera can't actually run for 90 minutes without cutting | Cuts hidden in natural transition points (dark tunnel, pan through a crowd, fast camera move) |
| Each "reel" was a separate plate shoot | Digital blending at every cut point, match-move analysis of both plates, then a 15–30 frame crossblend in Nuke |
| Lighting changes between reel setups | Comprehensive HDR probes at every shoot day; DNEG compositors matched all lighting transitions |
| The ruined city of Écoust (now a parking lot) | DMP extensions added entire blocks of destroyed French architecture to the limited standing set |
| Nighttime flare sequence required practical fire | 200 practical fire elements composited into a single continuous sequence with CG foreground fire |

> 🎯 **What the exam tests:** "One-shot" films are not one shot. They are a compositing achievement. Every invisible stitch requires: matching camera moves, matching color, matching grain, and matching atmospheric depth between two separately shot plates.

### What Makes a Digital Stitch Work

A believable invisible stitch in Nuke requires:
1. **Camera solve on both plates**, precise tracking so the geometry of both shots is aligned
2. **Color match**, primary grade adjustment so both plates match in exposure, color temperature, and contrast
3. **Grain unification**, both plates receive a unified grain layer at the top of the comp
4. **Atmospheric match**, haze, mist, and depth-of-field must be consistent at the stitch frame
5. **Motion blur**, the stitch is hidden during a frame with significant camera motion blur, which masks any remaining edge artifacts

> ⚠️ **Rookie mistake:** Compositors new to invisible stitches often color-match the midtones but forget the shadows and highlights. A shadow that is warm in one plate and cool in the next reads as a cut even when motion-blurred.

---

## 🎬 Case Study 3: Everything Everywhere All at Once, Low-Budget Pipeline

*Everything Everywhere All at Once* (2022, A24) earned $69 million against a $14.3 million production budget, and won the Academy Award for Best Picture. Its VFX required creative solutions to achieve multiverse complexity with a fraction of a studio blockbuster's budget.

### The Low-Budget VFX Pipeline

Directors Daniel Kwan and Daniel Scheinert (the Daniels) and VFX supervisor Zak Stoltz built a pipeline around After Effects as the primary compositing tool, rather than Nuke. This was a deliberate cost-driven decision:

| Production Choice | Rationale |
|------------------|----------|
| After Effects primary (not Nuke) | Lower licensing cost; faster iteration for 2D-heavy effects |
| Practical FX first | Hot dog hands, googly eyes were prosthetics, no CG modeling needed |
| Abstract animation over simulation | The bagel void used 2D compositing, not a 3D fluid simulation |
| Color grading as storytelling | Each universe's color palette was distinct and low-cost to differentiate |
| Short-duration FX over sustained simulation | Universe transitions were fast cuts, not 10-second simulation renders |

> 🎯 **What the exam tests:** EEAAO demonstrates that a strong VFX pipeline uses the minimum tool for the required quality. After Effects is appropriate for 2D-heavy, fast-turnaround projects. Nuke is required when pipeline depth, team collaboration, or scene-linear multi-channel EXR workflow is essential. The right tool depends on the project, not prestige.

### The EEAAO Pipeline vs a Marvel Production

| Factor | EEAAO ($14.3M) | Avengers: Endgame ($356M) |
|--------|---------------|--------------------------|
| Primary comp tool | After Effects | Nuke |
| VFX vendors | 1–2 small studios | 12+ major studios |
| Simulation tool | Trapcode Particular | Houdini |
| VFX shots | ~500 | 3,000+ |
| Hero pipeline | AE comp + practical | Full 3D pipeline (Arnold/Houdini/Nuke) |
| Creative approach | Constraints as design choices | Unlimited technical resources |

---

## 🔬 On-Set VFX Supervision: The Practical Checklist

The following checklist is representative of what an on-set VFX supervisor manages. Memorize the categories if not every line item.

### Before Principal Photography Begins

| Task | Why It Matters |
|------|---------------|
| Define tracking marker placement plan | Markers in frame that are out of frame in final comp waste money; markers that aren't on VFX surfaces are useless |
| Select greenscreen type and brand | Chroma key blue vs green depends on talent skin tones and wardrobe; Rosco DigiComp vs painted backing affects spill color |
| Define witness camera placement | The witness camera captures data that can save a shot from being re-shot, it documents the full lighting environment |
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

## 🔬 File Formats in the VFX Pipeline

Understanding which file format is used at each pipeline stage and why is a professional-level skill tested at the exam.

### The Dominant Formats

| Format | Full Name | Bit Depth | Color Space | Primary Use |
|--------|----------|-----------|------------|------------|
| **ARRIRAW** | ARRI RAW | 12–16 bit log | LogC3 / LogC4 | Camera original, sensor data before demosaicing |
| **DPX** | Digital Picture Exchange | 10–16 bit | Log or linear | Traditional scan delivery; VFX plate format |
| **OpenEXR** | Extended Dynamic Range | 16–32 bit float | Linear, ACES, or scene-linear | VFX working format, multi-channel CG renders |
| **ProRes 4444** | Apple ProRes 4444 | 12 bit float | Log or Rec.709 | High-quality intermediate; editorial and comp |
| **H.264/H.265** | AVC / HEVC | 8–10 bit | Rec.709 | Final delivery, streaming, distribution |

### Why OpenEXR Dominates VFX Post-Production

OpenEXR (developed by ILM and open-sourced in 2003) is the universal VFX intermediate format because:
- **Multi-channel support:** A single .exr file can contain 30+ named channels (beauty, diffuse, specular, shadow, depth, normal) in one file
- **Float precision:** 16-bit float (half-float) provides adequate precision; 32-bit float for critical operations
- **Lossless compression:** EXR supports lossless ZIP compression, no quality loss between pipeline stages
- **Wide adoption:** Supported natively in Nuke, Houdini, Arnold, RenderMan, V-Ray, Blender, and DaVinci Resolve

> 🎯 **What the exam tests:** OpenEXR is the VFX pipeline's native format because of multi-channel support (AOV passes), float precision, and lossless compression. DPX is the older format used for film scans and some plate deliveries. H.264 is only for final delivery, never used for intermediate VFX work.

### The GPU vs CPU Rendering Decision

At the rendering stage, studios must choose between CPU and GPU rendering:

| Factor | CPU Rendering (Arnold, RenderMan) | GPU Rendering (Redshift, Octane, Karma XPU) |
|--------|----------------------------------|---------------------------------------------|
| Memory | Large scene geometry possible (terabytes of RAM available) | Limited by VRAM (24–80GB per GPU) |
| Speed | Slower per-core; benefits from many cores | Dramatically faster (10–50× for compatible scenes) |
| Compatibility | Full feature set (all shaders, all AOVs) | Some features not yet GPU-supported |
| Industry adoption | Film standard (ILM, Weta use Arnold/RenderMan) | Growing (Redshift popular in commercial/broadcast) |
| Cost per frame | Higher (large CPU farm) | Lower (GPU farm smaller) |

---

## 🎯 What the Exam Tests, Module 1

1. **Pre-vis purpose:** Pre-vis communicates director intent, it is not a finished product. "Looks great" is not the standard.
2. **On-set data package contents:** tracking markers, HDR probes, witness camera, lens data, color charts, clean plates, know all six.
3. **Technical vs creative grade:** compositor does the technical grade (matching elements); colorist does the creative grade (the "look"). Two different people, two different stages.
4. **Pipeline order:** Editorial → Scanning → Matchmove → 3D/FX → Lighting → Comp → DI. Know this sequence.
5. **Look bible role:** The mechanism by which multi-vendor productions maintain visual consistency across studios. Each vendor must match the look bible.
6. **LED Volume advantages:** eliminates spill, provides real reflections, provides physical interactive light. Does NOT eliminate compositing.
7. **Tier 4 shots:** Digital humans and destruction sequences; the most expensive and complex category.
8. **AOV definition:** Arbitrary Output Variable, named channels within a multi-channel EXR file (diffuse, specular, shadow, depth, etc.).
9. **Clean plate requirement:** Required on every wire/rig shot; the VFX supervisor must ensure it is captured on set.
10. **Witness camera function:** Captures reference data of the full set from an off-axis angle, documenting lighting and environment that cannot be recovered from the primary camera plate.

---

## 📊 Summary: The VFX Pipeline at a Glance

| Phase | Who Owns It | Key Output |
|-------|-------------|-----------|
| Development & Bidding | VFX Producer | Beat sheet, bid, schedule |
| Pre-Production / Pre-vis | Pre-vis Supervisor | Animatic cuts, on-set guide |
| Principal Photography | VFX Supervisor | Plates, data package, reference |
| Post, Matchmove | Matchmove TD | Tracked cameras, undistorted plates |
| Post, 3D/FX | CG Supervisor | EXR render packages |
| Post, DMP | Matte Painting Supervisor | DMP elements |
| Post, Compositing | Compositing Supervisor | Final comp deliverable |
| DI / Color | Colorist | Finished film color |

---

## 🎯 Next Steps

You now understand the factory. In Module 2, you will enter the compositing department at the most fundamental skill: pulling a key. Green screen keying is the entry point for almost every VFX artist, and the three-step Keylight workflow is the foundation of professional-grade compositing in After Effects.

---

## 📊 Full VFX Vocabulary: Module 1

| Term | Definition |
|------|-----------|
| Beat sheet | Shot-by-shot list of all expected VFX in a film, used for bidding |
| Bid | A VFX studio's cost and timeline estimate for a production |
| Pre-vis | Low-resolution animated preview of VFX sequences for director planning |
| VFX pull | Editorial department's extraction of specific frames needing VFX work |
| DPX | Digital Picture Exchange, a film scan format; 10–16 bit log or linear |
| OpenEXR | Industry-standard multi-channel float format for VFX intermediate files |
| ARRIRAW | ARRI's proprietary camera RAW format from ALEXA cameras |
| AOV | Arbitrary Output Variable, a named channel in a multi-channel EXR file |
| IDT | Input Device Transform, converts camera log footage to ACES |
| ODT | Output Device Transform, converts ACES to a target display color space |
| Look bible | Consistency document (Nuke scripts + reference renders) for multi-vendor productions |
| Vendor QC | Quality check ensuring vendor deliverables match the look bible before acceptance |
| Plate | The live-action footage that forms the base of a composite shot |
| Data package | Set of reference data captured on set (HDR probes, lens data, survey, charts) |

---

## 📚 Further Reading

- **VES Handbook of Visual Effects, 2nd Edition** Chapters 1 and 2 (Pipeline and Pre-Production) the authoritative industry reference
- **Cinefex Magazine**, the *Avengers* and *Mandalorian* issues are exceptionally detailed on pipeline choices
- **"The Art of VFX" blog (artofvfx.com)**, interviews with VFX supervisors on specific film productions
- **Corridor Crew "VFX Artists React" series** working ILM/Digital Domain artists breaking down specific shots from major films
