---
permalink: /34-2D-Digital-Animation/Module-06-Puppet-Bone-Tools/
title: "Module 6: Puppet & Bone Tools, DUIK Rigging"
---

# 🦿 Module 6: Puppet & Bone Tools, DUIK Rigging

> 📌 **Supplementary module.** Like Module 5, this is After Effects craft and is **not** on the Adobe Certified Professional in Animate exam. DUIK, Joysticks 'n Sliders, and AE expressions are portfolio-builders, not exam objectives. Skip Modules 5–6 if you are studying purely for the certification; keep them if you want the full working-animator toolkit.

## The Plugin That Changed Everything

Before DUIK Bassel, professional character rigging in After Effects required hundreds of expressions, manual FK/IK setups written from scratch, and days of work to build a single character rig. After DUIK Bassel, the same rig took an afternoon.

DUIK (pronounced "do-ick") was created by Nicolas Lebrun and Duduf and is now maintained by RxLaboratory. It is free, open-source, and used by studios from tiny boutiques to Netflix. The Houdini and Maya crowds who look down on After Effects as a "motion graphics tool" tend to go quiet when they see what a professional DUIK rig can do.

This module builds three things: a DUIK Bassel/Angela IK rig, bendy limbs with deformation, and a Joysticks 'n Sliders facial animation setup. Together, they represent 90% of what professional 2D AE rigs look like.

---

## 🔧 DUIK Bassel vs. DUIK Angela

| Version | Notes |
|---------|-------|
| **DUIK Bassel** (16.x) | The stable, widely-used version; excellent for learning; all major rigs work |
| **DUIK Angela** (17.x) | The current generation; faster workflow, auto-rig improvements, better bone system |

Both versions share the same fundamental concepts. This module uses DUIK Bassel terminology; Angela improvements are noted where relevant.

### What's New in DUIK Angela

| Feature | DUIK Angela (17.x) Improvement |
|---------|-------------------------------|
| Auto-Rig | Recognizes bone chains automatically; faster setup |
| Bone System | Improved visual feedback; bones have head/tail indicators |
| UI | Reorganized panels; fewer clicks for common operations |
| Walk Cycle | Built-in procedural walk cycle generator |
| Performance | Faster expression evaluation; smoother real-time preview |

---

## 🦴 DUIK's Bone System

Unlike the symbol-based parenting approach in Animate, DUIK introduces its own bone system that works with After Effects layers.

### What DUIK Bones Are

DUIK Bones are special null-like objects with:
- A "bone" visual indicator on screen (a small arrow/dot)
- A defined "head" (parent end) and "tail" (child end)
- The ability to link to any layer as a parent

### The DUIK Workflow (Simplified)

1. **Link artwork layers to bones:** Each body part layer (arm, leg, etc.) is linked to a corresponding DUIK bone.
2. **Create IK:** Select the bone chain (upper arm → lower arm → hand) and run DUIK's "IK" command to add an IK solver.
3. **Create controllers:** DUIK auto-generates controller layers (handle icons) for each limb end.
4. **Animate controllers:** Instead of keyframing the artwork layers directly, you move the controllers, DUIK's IK solver updates all the bones automatically.

---

## 🦵 Building an IK Leg Rig

The most common use case for DUIK IK is a character's legs, which need to have the foot planted on the ground while the body moves.

### Step-by-Step Leg Rig

1. Create three shape layers: `upper_leg`, `lower_leg`, `foot`.
2. Position them in the character's leg anatomy.
3. Set pivot anchors at the correct joint positions (hip, knee, ankle).
4. In DUIK, select all three layers and run "Auto-Rig" or manually link bones to each layer.
5. Create an IK chain from hip to foot.
6. DUIK creates a "goal" controller at the foot position.
7. Keyframe the goal controller's position → DUIK solves hip and knee angles automatically.
8. To move the whole character, use the root controller (usually a controller for the entire rig).

> 🎯 **Worth knowing (supplementary, not on the ACP Animate exam):** The "foot" or "end effector" controller is what you animate directly. The intermediate joints (knee) are solved automatically by DUIK's IK. You can add a "knee goal" controller to push the knee in a specific direction.

### Pole Vectors (Knee Direction Fix)

When an IK leg bends the wrong way (knee pointing backward):
1. Select the pole vector / knee goal controller
2. Move it to the correct side of the leg (in front of the knee)
3. Lock its position before animating the foot goal

The pole vector defines the plane in which the knee bends, it does not have to be keyframed unless the knee direction needs to change mid-animation.

---

## 🌊 Bendy Limbs with C4D (Connector)

DUIK's bendy limb system (sometimes called "Bezier IK" or using the Connector feature) creates the rubber-hose look popularized by cartoon animation.

### Rubber Hose vs. Straight Limbs

| Style | Description | Examples |
|-------|-------------|----------|
| **Rubber Hose** | Limbs curve and bend like rubber hoses; no elbow or knee break | Classic cartoon characters (Mickey Mouse style) |
| **Straight Limbs** | Two rigid segments join at a defined elbow/knee | Most modern 2D animation (Gravity Falls, Steven Universe) |
| **Bendy / Bezier IK** | Two-segment limb with a slight organic curve along each segment | Hazbin Hotel, some anime-inspired styles |

DUIK's Bezier IK creates a bone that follows a bezier curve, allowing the limb to appear soft and organic while still being controlled by a single end-effector.

### Setting Up Bendy Limbs

1. In DUIK, create a standard IK chain for the limb.
2. Select the limb bones and choose "Bezier IK" (or "Bend" in newer versions).
3. DUIK adds bezier handles to the bone visual on screen.
4. Adjusting these handles curves the limb.
5. The bend amount can be keyframed over time, creating the "squash and stretch" feel of rubber-hose animation.

---

## 🌸 Spring Rigs

Spring rigs add secondary animation, motion that follows the primary motion but with a natural lag and oscillation. Common applications:

| Element | Spring Behavior |
|---------|----------------|
| Ponytail | Follows head motion with a lag and bounce |
| Loose clothing | Trails behind body movement |
| Antenna or ear | Oscillates after head stops |
| Belly on a heavy character | Slight delayed squash when character lands |
| Cape or scarf | Trails with multiple spring layers at different stiffness |

DUIK includes a "Wiggle" and "Spring" system for adding this secondary motion procedurally, without keyframes. The Spring controller follows a parent layer but with configurable stiffness and damping.

### Spring Parameters

| Parameter | Effect |
|-----------|--------|
| **Stiffness** | How quickly the spring returns to rest (high = rigid, low = floppy) |
| **Damping** | How quickly oscillation dies out (high = snaps back, low = bounces long) |

> 🎯 **Worth knowing (supplementary, not on the ACP Animate exam):** Spring rigs generate secondary animation **procedurally**, no keyframes needed. The spring follows a parent layer's motion with configurable delay and oscillation. This is distinct from manually keyframing follow-through on secondary elements.

---

## 😊 Joysticks 'n Sliders for Facial Animation

Joysticks 'n Sliders (J+S) is a separate plugin (paid, ~$49) that creates a joystick controller that blends between multiple pre-drawn facial positions.

### How Joysticks 'n Sliders Works

Imagine a 2D joystick on screen. When the joystick is in the center, the character faces forward. Push it up the character looks up. Push it right the character looks right. Push it upper-right, the character looks up-right (a blend of the two). J+S handles this blending automatically.

### The Five Positions Setup

| Position | Artwork Pose |
|----------|-------------|
| Center | Face forward (neutral) |
| Up | Face up (looking at ceiling) |
| Down | Face down (looking at floor) |
| Left | Face left (3/4 turn left) |
| Right | Face right (3/4 turn right) |

You draw all five face poses and link them to the joystick. J+S interpolates between them automatically as you animate the joystick position.

> 🚨 **Common Pitfall:** Joysticks 'n Sliders creates a controller UI layer in the comp but this layer is invisible at render time. The actual character layers are driven by expressions connected to the joystick's position. You animate the joystick controller, not the character face layers directly.

### Facial Rig Components with J+S

| Component | Approach |
|-----------|---------|
| Head turn | 5-position joystick (forward, up, down, left, right) |
| Mouth | Separate joystick or slider for open/close + smile/frown axes |
| Eyebrow expressions | Slider for raise/lower |
| Eye blink | Slider or direct keyframing |

---

## 🔄 Full DUIK Character Rig Overview

A complete professional DUIK rig typically has these controllers:

| Controller | Controls |
|-----------|---------|
| Root | Entire character position, scale, rotation |
| Hip | Pelvis position; affects legs and spine |
| Spine | Chest position relative to hips |
| Head | Head position and rotation |
| Hand L/R | IK end effectors for both arms |
| Foot L/R | IK end effectors for both legs |
| Knee L/R | Pole vectors; push knee forward or backward |

Animating a character walk cycle with this rig means keyframing only these ~10 controllers, not the 40+ individual bone layers underneath.

---

## 🎬 Production Case Study: Hazbin Hotel & Netflix Originals

**Hazbin Hotel** (Amazon Prime, 2024): The upgrade from the Flash-based pilot to the Amazon series involved switching to Toon Boom Harmony for the main body animation, but After Effects + DUIK remained central to the pipeline for:
- Facial animation using joystick-based controllers for head turns
- Secondary motion on costume elements (tails, flowing fabric)
- Compositing of all elements into final shots

**Arcane** (Netflix/Fortiche, 2021): While Arcane used a proprietary pipeline, the principles behind DUIK rigs were present throughout. Fortiche's custom rigging system operated on similar IK/FK controller principles, with spring-based secondary animation on hair, clothing, and accessories. The accessibility of DUIK democratizes what was once proprietary studio technology.

**Independent YouTube animators** using DUIK: Creators like GingerPale, TheOdd1sOut's production team, and Jaiden Animations have all used After Effects with some form of DUIK-adjacent rigging for their YouTube channels. The tool has made high-quality character animation economically viable for solo creators.

---

## 💼 Industry Context: DUIK in the Real World

| Studio Type | DUIK Usage | Notes |
|------------|-----------|-------|
| TV commercial studios | Heavy use | Fast character turnarounds; DUIK speeds up rigging |
| YouTube animation | Common | Solo creator standard for quality rigs |
| Netflix originals (smaller) | Some use | Proprietary tools preferred at scale |
| Explainer video companies | Heavy use | Motion Bro + DUIK combinations |
| Game cinematics | Occasional | When 2D cutscenes use AE pipeline |

DUIK is one of the most frequently listed plugin requirements in After Effects character animation job postings.

---

## 🎯 Skills Checklist (Supplementary — Not on the ACP Animate Exam)

1. What is the difference between DUIK Bassel and DUIK Angela?
2. What is a DUIK bone and how does it differ from After Effects parenting?
3. What is the end effector in an IK chain and what do you animate?
4. What is a pole vector and what does it control?
5. What is Bezier IK and when would you use it?
6. What is the difference between Stiffness and Damping in a spring rig?
7. How does Joysticks 'n Sliders interpolate between face positions?
8. The J+S joystick controller layer, is it visible in the final render?
9. How many controllers does a typical full-body DUIK rig have?
10. What type of secondary motion do spring rigs add (procedural, without keyframes)?

---

## 🚨 Common Pitfalls (Supplementary)

- **DUIK is free:** Students sometimes assume professional rigging tools are expensive. DUIK is free and open-source. Joysticks 'n Sliders is a paid companion tool (~$49), not part of DUIK.
- **You animate controllers, not bones:** A common beginner mistake is to keyframe the bone layers directly. Always keyframe the controller layers that DUIK creates, the bones update automatically.
- **Pole vector ≠ IK goal:** The pole vector only controls the direction the knee bends. The IK goal controls the foot/hand position. These are separate controllers.
- **Spring rigs need no keyframes:** Students sometimes add keyframes to spring-rigged layers manually. This is unnecessary and can fight the spring calculation.
- **J+S controller is invisible at render:** The joystick UI layer exists only for the animator's interaction. It renders as a transparent, empty layer.

---

## 🤔 Socratic Discussion Questions

- A character is sitting in a chair, then stands up. The feet need to stay planted while the body rises. Which part of the rig does this (IK legs) and how would you set up the transition from seated to standing in a DUIK rig?
- Spring rigs generate secondary animation without keyframes. What are the risks of relying too heavily on procedural secondary motion? When would you choose to hand-keyframe secondary animation instead?
- Joysticks 'n Sliders blends between five pre-drawn face positions. What happens when a character makes an extreme face that doesn't correspond to any of the five? How do professional animators handle this?
- DUIK is free. Why do you think studios that can afford proprietary rigging software still use DUIK? What does this tell us about the relationship between cost and quality in animation tools?

---

## 📊 Plugin Ecosystem for AE Character Animation

DUIK is the centerpiece, but a professional 2D AE rig often uses several additional tools:

| Plugin / Script | Price | Purpose |
|----------------|-------|---------|
| **DUIK Angela** | Free | IK/FK rigging, bones, spring automation |
| **Joysticks 'n Sliders** | ~$49 | Facial blend / head-turn controller |
| **RubberHose 2** | ~$45 | Rubber-hose limb style rigging (alternative to DUIK) |
| **Motion Bro** | ~$15/mo | Preset management for AE animations |
| **Animation Composer** | Free/Paid tiers | Motion preset library |
| **GifGun** | ~$20 | Direct GIF export from AE (no Media Encoder) |
| **Flow** | ~$25 | Improved easing UI; curve management |

> 🎯 **Worth knowing (supplementary, not on the ACP Animate exam):** DUIK and Joysticks 'n Sliders are the primary tools to know. Know what DUIK does (IK/FK/Spring) vs. what J+S does (facial blend controllers). They are complementary, not competing.

---

## 🔄 DUIK vs. RubberHose, Style Choice

| | DUIK Bezier IK | RubberHose 2 |
|-|---------------|-------------|
| Limb style | Flexible (straight, bendy, or rubber-hose) | Dedicated rubber-hose style |
| Setup time | More involved | Faster for rubber-hose look |
| IK solving | Full IK system | Simplified IK for hose connections |
| Price | Free | ~$45 |
| Best for | Full production rigs, any style | Projects targeting classic cartoon style |

The choice between DUIK and RubberHose is a style choice, not a quality choice. Many productions use both: DUIK for body rigs, RubberHose for stylized limb elements.

---

## 📐 Expressions in Character Animation

DUIK's power comes partly from AE **expressions**, short snippets of JavaScript that create dynamic links between layer properties. Understanding the most common expressions used in character rigs demystifies what DUIK creates behind the scenes:

| Expression Use Case | What It Does | Example |
|--------------------|-------------|---------|
| **Parenting via expression** | Links one property to another | `thisComp.layer("bone_hip").transform.position` |
| **loopOut()** | Makes keyframes loop indefinitely | Walk cycle loop without extending the timeline |
| **wiggle()** | Adds random procedural motion | Secondary jiggle on loose elements |
| **linear() / ease()** | Value mapping between ranges | Converts joystick position to layer opacity |
| **value + [0, 0]** | Adds a constant offset to a parented value | Fine-tuning bone placement after parenting |

> 🎯 **Worth knowing (supplementary, not on the ACP Animate exam):** The `loopOut()` expression is the most useful in production, it causes a composition's keyframes to loop indefinitely. Applied to a walk cycle pre-comp's Time Remapping property, it creates an infinite loop without duplicating keyframes.

---

## 🔑 Time Remapping for Walk Cycle Loops

Time Remapping is an AE layer property that lets you remap the playback of a pre-composition or video layer. For walk cycles:

1. Right-click the walk cycle pre-comp layer → Time → Enable Time Remapping.
2. AE creates two keyframes: at 0:00 (value = 0:00) and at the last frame (value = duration).
3. Add the `loopOut("cycle")` expression to the Time Remap property.
4. The walk cycle now loops indefinitely.
5. You can then use Time Remap keyframes to slow down, speed up, or pause the walk cycle at specific moments.

This technique is standard in all professional character animation pipelines that use After Effects.

---

## 📋 Summary

- DUIK Bassel (16.x) and DUIK Angela (17.x) are free, open-source professional rigging systems for After Effects.
- DUIK Bones link to artwork layers and form IK chains; IK controllers are animated instead of individual bones.
- Bendy limb (Bezier IK) creates the rubber-hose or organic-curve look for cartoon limbs.
- Spring rigs add secondary animation (ponytail, loose clothing, antenna) procedurally without keyframes.
- Joysticks 'n Sliders creates blend-based facial animation from 5 pre-drawn head positions.
- A complete professional rig has ~10 controllers that drive 40+ bone/layer relationships underneath.

## ➡️ Next Steps

[Module 7: Lip Sync & Dialogue →](../Module-07-Lip-Sync-Dialogue/Reading.md)

Module 7 takes the rig built in modules 4–6 and adds the most challenging part: making it speak. Phoneme breakdowns, manual and auto lip sync, and sync to audio in After Effects.

## 📐 Walk Cycle Generator in DUIK Angela

DUIK Angela includes a procedural walk cycle generator, one of its most powerful automation features:

1. **Set up the character rig** with all controllers (root, hips, feet, arms, head).
2. In DUIK, select the root and all limb controllers → **Automations → Walk Cycle**.
3. DUIK applies procedural walk cycle expressions to all selected controllers.
4. Set walk parameters: **cycle duration** (frames), **walk speed**, **arm swing**, **body bounce**.
5. The character now walks procedurally, no keyframes needed.
6. To customize: adjust the Walk Cycle effect settings in the Effect Controls panel.
7. To animate the character walking across the stage: add a position keyframe to the root controller.

### Walk Cycle Parameters

| Parameter | Effect |
|-----------|--------|
| **Cycle Duration** | How many frames per complete step |
| **Walk Speed** | How fast the root moves forward |
| **Body Bounce** | Vertical up/down oscillation amplitude |
| **Arm Swing** | Amount of arm counter-swing |
| **Step Height** | How high the feet lift |

> 🎯 **Worth knowing (supplementary, not on the ACP Animate exam):** The DUIK walk cycle generator is procedural, it uses expressions to drive motion. You can still override individual keyframes on top of the procedural base, allowing customization while retaining the automatic cycle foundation.

---

## 🔑 DUIK Angela Auto-Rig: Step by Step

DUIK Angela's Auto-Rig feature is the fastest way to build a complete character rig from scratch. Here is the full workflow:

1. **Prepare artwork:** All body part layers named and positioned correctly in the AE comp.
2. **Create structure:** In DUIK's Structure panel, define the skeleton. DUIK creates named null objects representing each bone.
3. **Link layers to structure:** Use DUIK's "Link art layers to rig" command to connect each artwork layer to its corresponding bone.
4. **Auto-Rig:** Select all structure layers → click "Auto-Rig." DUIK creates: controllers, IK solvers, FK/IK switches, and pole vectors automatically.
5. **Name controllers:** Rename DUIK's auto-generated controller names for clarity (e.g., "CTRL_foot_R" instead of "C_Arm_01").
6. **Test the rig:** Move each controller; verify that the expected layers follow. Check that IK solving is correct on both leg and arm chains.
7. **Add spring automation:** Select secondary elements (hair, clothing) → Automations → Spring. Configure stiffness and damping.
8. **Lock rig layers:** Lock all bone and structure layers to prevent accidental selection during animation.

**Result:** A complete character rig that can be animated by moving only the ~10 controller layers.

---

## 📚 Further Reading

- DUIK official documentation: [rxlaboratory.org/tools/duik-angela/](https://rxlaboratory.org/tools/duik-angela/)
- School of Motion: "DUIK Bassel: Complete Character Rigging Tutorial", free article
- Joysticks 'n Sliders plugin: [aescripts.com](https://aescripts.com)

---

## 📋 Skills Readiness Checklist

Before moving on, verify you can answer each of these without notes:

- [ ] Define the core concept of this module in one sentence
- [ ] Name three real-world productions that demonstrate it
- [ ] Identify the two most common mistakes students make
- [ ] Describe when you would use each major tool/technique covered
- [ ] Explain the trade-offs between the primary approaches discussed
- [ ] State the key numbers, ratios, or standards from memory

## 🎯 Five Things Worth Knowing

These patterns appear repeatedly in industry certification and portfolio assessments:

1. **"Why not X?"**, Every technique has a cheaper/faster alternative; know when NOT to use the primary approach.
2. **"What's the production order?"**, Many mistakes happen when steps are applied out of sequence; understand the dependency chain.
3. **"Name a production that did this differently."**, Spider-Verse, Cuphead, Arcane each broke conventions intentionally; knowing *why* shows mastery.
4. **"What file format and settings?"**, Every deliverable context has specific requirements; memorize the key numbers (frame rate, bit depth, codec).
5. **"What's the fastest way to fix [common problem]?"**, Troubleshooting speed is a professional skill; know the diagnostic hierarchy.

## 📚 Canonical Further Reading

**Essential:**
- *The Animator's Survival Kit*, Richard Williams (2001, revised 2012). The most-assigned animation reference in university curricula worldwide. Every principle in this module has a Williams illustration.
- *The Illusion of Life: Disney Animation*, Frank Thomas & Ollie Johnston (1981). The primary source for the 12 Principles. Expensive but irreplaceable.

**Industry-Standard:**
- *Computer Animation: Algorithms and Techniques*, Rick Parent (3rd ed., 2012). The mathematical foundation behind every digital animation system.
- *3D Art Essentials*, Ami Chopine (2011). Bridge between artistic intent and technical execution.

**Online:**
- Animation Career Review salary surveys, updated annually, the most-cited compensation benchmark for animation professionals
- School of Motion blog, free, research-backed articles on the business of motion design and animation

---

*Next module →*
