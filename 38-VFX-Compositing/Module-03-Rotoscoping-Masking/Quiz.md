---
title: "Module 3 Quiz: Rotoscoping & Masking"
---

# 🧪 Module 3 Quiz: Rotoscoping & Masking

> 24 questions. Aim for 20/24.

---

### Q1.

Which of the following scenarios requires rotoscoping rather than chroma keying?

A. An actor filmed on a greenscreen against a blue wall
B. An actor filmed on a real location with no backing, and no clean plate was shot
C. An actor filmed against a bright window with backlighting
D. An actor filmed against a matte blue screen

---

### Q2.

In Rotobrush 2.0, what do green strokes and red strokes signify?

A. Green strokes mark the background to exclude; red strokes mark the foreground to include
B. Green strokes mark the foreground to include; red strokes mark the background to exclude
C. Green strokes define hard edges; red strokes define soft edges
D. Green strokes mark areas for Refine Edge; red strokes mark areas to freeze

---

### Q3.

What machine learning system powers Rotobrush 2.0 in Adobe After Effects?

A. NVIDIA DLSS
B. Adobe Firefly
C. Adobe Sensei
D. OpenAI CLIP

---

### Q4.

In professional roto technique, what does a "sparse keyframe" approach indicate?

A. Lazy or low-quality roto work
B. That the shape barely moved between keyframes, requiring frequent re-drawing
C. Efficient technique, the shape holds position over many frames without needing to be re-drawn every frame
D. That the artist used Rotobrush 2.0 rather than manual splines

---

### Q5.

What is the "cheat roto stack"?

A. A method of using Rotobrush 2.0 on a greenscreen shot to avoid manual roto
B. A layered set of simple shape masks body, additions, subtractions combined as a Boolean matte instead of one complex spline
C. A technique for hiding roto errors by adding motion blur to the composite
D. An automated script that generates roto from tracking data

---

### Q6.

Which company acquired SilhouetteFX in 2020?

A. Adobe
B. The Foundry
C. Boris FX
D. Maxon

---

### Q7.

In After Effects, which mask mode is used to cut a hole in an existing mask?

A. Add
B. Subtract
C. Intersect
D. Difference

---

### Q8.

What is the key difference between Rotobrush 2.0 and the original Rotobrush (v1.0)?

A. Rotobrush 2.0 uses color selection rather than stroke painting
B. Rotobrush 2.0 uses machine learning to propagate the matte forward in time, learning subject appearance
C. Rotobrush 2.0 can only work on greenscreen footage
D. Rotobrush 2.0 was replaced by the Refine Edge tool

---

### Q9.

When performing color isolation using a mask in After Effects, where should the color effect be applied?

A. Directly on the source footage layer
B. On an Adjustment Layer with the mask applied to it, placed above the footage
C. In the Effect Controls panel under Mask Settings
D. As a Track Matte on the footage layer

---

### Q10.

A roto artist is working on a subject with wispy hair blowing in the wind. Which tool should they use for the hair edges specifically?

A. Standard Bezier spline with hard edge
B. Clip Black within the Rotobrush session
C. Refine Edge within Rotobrush 2.0, painted over the hair strands
D. A difference matte from a clean plate of the hair separately

---

### Q11.

Which of the following is a PRIMARY advantage of Silhouette over After Effects for feature film roto work?

A. Silhouette includes a built-in color grading node
B. Silhouette is free, unlike After Effects which requires a subscription
C. Silhouette is purpose-built for roto with a faster roto engine, better spline management, and direct Nuke export
D. Silhouette automatically tracks all shapes without manual keyframing

---

### Q12.

In After Effects, the "Freeze" button in a Rotobrush session does what?

A. Freezes the playhead at the current frame
B. Bakes the Rotobrush matte calculation into a cached result, allowing normal compositing over it
C. Prevents the matte from propagating beyond the current frame
D. Locks the mask shape to prevent accidental editing

---

### Q13.

A roto artist needs to isolate a running figure against a complex, moving city background. Rotobrush 2.0 keeps including background buildings. What is the best approach?

A. Increase the propagation speed setting in Rotobrush
B. Switch to manual spline animation with the cheat roto stack approach
C. Apply a difference matte using a clean plate of the city
D. Use Keylight with no greenscreen

---

### Q14.

When would a "Luma Matte" track matte be used instead of an "Alpha Matte"?

A. When the matte source layer has a proper alpha channel
B. When the matte is defined by the luminance (brightness) of a layer, for example, a Z-depth pass rendered in grayscale
C. When the footage has no alpha channel of its own
D. When the matte needs to be inverted

---

### Q15.

What does "Mask Feather" control in After Effects?

A. The speed at which the mask animates between keyframes
B. The transparency/opacity of the mask
C. The softness of the mask edge, how gradually it transitions from opaque to transparent
D. The number of control points on the mask spline

---

### Q16.

In the "cheat roto stack," a negative (Subtract) layer is used to:

A. Add detail to the roto at fine edges
B. Cut away interior areas that should be transparent (arm gaps, space between legs)
C. Define the overall body silhouette
D. Add softness/feather to the edge of the primary matte

---

### Q17.

Which keyboard shortcut opens the Mask properties for the selected layer in After Effects?

A. M
B. T
C. P
D. R

---

### Q18.

A roto artist receives a 1,200-frame shot of a person walking through a crowd. The figure needs to be isolated. What is the most efficient professional approach?

A. Rotobrush 2.0 on the full shot if the subject has reasonable contrast against the crowd
B. Manual spline on every frame from 1 to 1,200
C. Difference matte from a crowd shot without the person
D. Apply a garbage matte and key using Keylight

---

### Q19.

What is the "Magnetic Spline" tool in Silhouette FX?

A. A spline that automatically snaps to the nearest tracking marker
B. A spline that uses edge detection to automatically snap to the nearest high-contrast edge as you draw
C. A B-Spline that uses physics simulation to follow object movement
D. A tool that creates roto from optical flow analysis

---

### Q20.

Why might a roto artist use variable (vertex-level) feathering on a mask rather than a uniform feather value?

A. Variable feathering is faster to render
B. To have a hard edge on the solid body areas while maintaining soft, semi-transparent edges on hair and fine detail, all in a single mask shape
C. To match the motion blur on the subject
D. Because uniform feathering is not available in After Effects

---

### Q21.

In which workflow would a roto matte be used as a "patch" over a keyed composite?

A. When the Keylight key is too clean and needs to be softened
B. When a specific region of the Keylight key fails (e.g., the edge of a jacket touching a shadow) and needs to be replaced by a hand-drawn matte for those frames
C. When the roto artist prefers working with alpha channels rather than color-difference mattes
D. When the footage resolution is too high for Keylight to process

---

### Q22.

What does "propagate forward" mean in the context of Rotobrush 2.0?

A. Copying the mask shape to all subsequent frames without any adjustment
B. Rotobrush 2.0's neural network analyzes each successive frame and adjusts the matte to match the subject's new position and appearance
C. Applying the matte to all layers below the source layer
D. Extending the roto session to cover a longer time range

---

### Q23.

Which of the following best describes the roto work done for *Life of Pi*'s tiger sequences?

A. The tiger was CGI from the beginning, no roto was required
B. A trained Bengal tiger was filmed against a bluescreen; Keylight was used for keying
C. Real tiger footage was used for reference only; the final tiger is fully digital with motion-capture data driving the CG
D. Manual roto was required on hundreds of frames of real tiger footage to isolate the animal for compositing reference

---

### Q24.

A compositor wants to add a subtle sky color change behind a city skyline without affecting the buildings. The skyline has complex, irregular edges. What is the best approach?

A. Apply a color effect to the full footage layer
B. Use a garbage matte to roughly isolate the sky
C. Roto the skyline edge and use the resulting matte as a Track Matte on an Adjustment Layer containing the sky color adjustment
D. Use a difference matte with a clean frame of only the sky

---

## 🎯 Answers + Explanations

**Q1, B.** Roto is required when no greenscreen was shot and no clean plate is available. The other scenarios (greenscreen, bluescreen) can use chroma keying.

**Q2, B.** Green strokes = include (foreground subject). Red strokes = exclude (background). This is the standard Rotobrush painting interface.

**Q3, C.** Adobe Sensei is Adobe's machine learning platform. Rotobrush 2.0 uses Sensei's neural network for temporal propagation.

**Q4, C.** Sparse keyframes mean the shape holds its position across many frames. This indicates the artist is working efficiently, not re-drawing unnecessarily. Dense (every-frame) keyframes suggest poor technique or a very difficult shot.

**Q5, B.** The cheat roto stack is a layered set of simple shape masks (body silhouette + additions + subtractions) combined as Boolean operations. This is more manageable than a single complex spline.

**Q6, C.** Boris FX acquired SilhouetteFX in 2020. Silhouette is now sold as part of the Boris FX suite alongside Sapphire and Mocha.

**Q7 B.** Subtract mode cuts a hole in the existing mask coverage used for interior negative areas in the cheat roto stack.

**Q8 B.** Rotobrush 2.0's key advancement over v1.0 is machine learning-powered temporal propagation it learns the subject's appearance and adjusts the matte as the subject moves.

**Q9, B.** Apply the color effect to an Adjustment Layer with the mask, placed above the footage. The effect applies only within the mask boundary without affecting the source footage directly.

**Q10 C.** The Refine Edge tool within Rotobrush 2.0 is specifically designed for fine hair and fur edge detail it analyzes the semi-transparent strands and preserves them.

**Q11, C.** Silhouette's purpose-built roto engine, advanced spline management tools, and direct Nuke export make it the professional feature film choice. It is also purpose-optimized in a way After Effects (a general compositing tool) cannot match for heavy roto workloads.

**Q12, B.** Freeze bakes the Rotobrush calculation into a cached state. This is required before the roto session can be used in the full After Effects composition timeline.

**Q13, B.** When Rotobrush 2.0 consistently fails to separate the subject from a complex background, manual spline animation with the cheat roto stack is the professional fallback.

**Q14, B.** Luma Matte uses the luminance (brightness) of the matte layer to define transparency. This is used when the matte source is a grayscale image (Z-depth pass, painted mask) rather than a proper alpha channel.

**Q15 C.** Mask Feather controls the softness of the mask edge the transition between fully opaque and fully transparent at the mask boundary.

**Q16 B.** Subtract layers in the cheat roto stack cut away interior areas the spaces between an arm and the body, between legs, etc., that should be transparent in the final matte.

**Q17, A.** Pressing M reveals the Mask properties for the selected layer in the After Effects timeline.

**Q18, A.** For a 1,200-frame shot of a walking person (a relatively clear subject), Rotobrush 2.0 with careful propagation review is the most efficient approach. Manual spline on every frame would be used only if Rotobrush fails.

**Q19, B.** The Magnetic Spline in Silhouette uses edge detection to snap the drawn spline to the nearest high-contrast edge automatically, speeding up the initial shape placement.

**Q20 B.** Variable (vertex-level) feathering allows different feather values at different points of the same mask hard on the solid body, soft on the hair area, in a single unified mask shape.

**Q21, B.** A roto patch is applied when a specific region of the chroma key fails for a few frames. Rather than breaking the entire key workflow, the roto artist creates a matte just for the failing region on those frames.

**Q22, B.** Propagate forward means Rotobrush 2.0's neural network analyzes each successive frame and updates the matte to track the subject's movement, rather than simply copying the initial shape.

**Q23, D.** While the hero tiger in *Life of Pi* is CG, real tiger footage was used extensively for reference and some plates required manual roto to isolate the animal for compositing reference work.

**Q24, C.** Rotoscoping the skyline edge and using that matte as a Track Matte on an Adjustment Layer is the clean professional approach. It gives precise control over the complex skyline edge while leaving the buildings unaffected.
