---
permalink: /34-2D-Digital-Animation/Module-06-Puppet-Bone-Tools/Quiz/
title: "Module 6 Quiz: Puppet & Bone Tools, DUIK Rigging"
---

# 🧠 Module 6 Quiz Puppet & Bone Tools DUIK Rigging

---

### Q1. DUIK is best described as:

A. Adobe's built-in bone tool for After Effects
B. A free, open-source character rigging plugin for After Effects created by RxLaboratory
C. A paid plugin exclusive to the Cinema 4D renderer in After Effects
D. A script that converts Animate symbol rigs to After Effects layers

---

### Q2. What is the relationship between DUIK Bassel and DUIK Angela?

A. DUIK Bassel is the current version; Angela was an older abandoned version
B. DUIK Bassel (16.x) is the widely-used stable version; DUIK Angela (17.x) is the current generation with workflow improvements
C. They are completely separate products made by different companies for different animation styles
D. DUIK Angela requires a paid license; Bassel is the free version

---

### Q3. In a DUIK IK leg rig, what does the "end effector" or "goal" controller represent?

A. The hip joint at the top of the leg chain
B. The knee pole vector that guides knee direction
C. The foot position that you directly animate; the system solves hip and knee angles automatically
D. The root controller that controls the entire character

---

### Q4. What is the purpose of a "knee goal" or "pole vector" controller in a DUIK IK leg rig?

A. To set the absolute position of the knee
B. To push the knee in a specific direction, preventing it from bending the wrong way
C. To lock the foot to the ground plane automatically
D. To control the length of the upper and lower leg segments

---

### Q5. Joysticks 'n Sliders creates a facial animation system where:

A. A joystick controller position blends between multiple pre-drawn face positions
B. The character's face is automatically generated using AI based on audio
C. Sliders control the timing of lip sync events
D. The joystick directly moves individual bone layers frame by frame

---

### Q6. In a standard Joysticks 'n Sliders 5-position setup, which positions are the five?

A. Front, Back, Left, Right, Center
B. Center, Up, Down, Left, Right
C. Open, Closed, Smile, Frown, Neutral
D. Front, 3/4 left, 3/4 right, Profile left, Profile right

---

### Q7. What is a "spring rig" in DUIK used for?

A. To create bouncing ball physics simulations
B. To add procedural secondary animation (lag and oscillation) to elements like ponytails and loose clothing
C. To automatically create walk cycle keyframes
D. To add spring-like ease presets to all keyframes simultaneously

---

### Q8. The "stiffness" parameter in a DUIK spring rig controls:

A. How quickly the animation reaches its final position
B. How quickly the spring element returns to rest after being displaced
C. The maximum displacement distance before the spring breaks
D. The frame rate at which spring calculations are evaluated

---

### Q9. Which animation style uses limbs that curve continuously like rubber hoses, with no defined elbow or knee break?

A. Cut-out straight-limb animation
B. Rubber hose / bendy limb style
C. Rotoscope animation
D. Stop-motion puppet style

---

### Q10. When using DUIK to animate a walk cycle with an IK rig, which layers does the animator directly keyframe?

A. All individual bone layers (hip, knee, ankle, etc.) for precise control
B. Only the end effector controllers (hands and feet) plus the root controller
C. Only the root controller, DUIK auto-generates all limb motion
D. The shape layers that contain the visible artwork

---

### Q11. What does DUIK "Bezier IK" create for a limb?

A. A straight two-segment limb with a defined joint at the elbow/knee
B. A limb that follows a bezier curve, appearing organically curved throughout its length
C. A limb that automatically squashes and stretches based on speed
D. An expression-driven IK system that doesn't require any controllers

---

### Q12. In Joysticks 'n Sliders, how does the plugin create the blend between different face positions?

A. It tweens between layers using standard AE keyframes
B. It uses expressions that evaluate the joystick controller's position to blend face artwork layers
C. It uses Adobe's built-in morph tool to interpolate between face shapes
D. It creates a new face drawing for every joystick position using procedural generation

---

### Q13. The "damping" parameter in a DUIK spring rig controls:

A. How much the spring element is offset from its parent's position
B. How quickly the spring oscillation dies out after being triggered
C. The direction in which the spring element can move
D. The rendering priority of the spring element in the composition

---

### Q14. A professional DUIK character rig typically uses how many animator-facing controllers?

A. One controller per bone (40+ for a full body rig)
B. Approximately 10 controllers for the whole character
C. Exactly 4 controllers (head, body, left limbs, right limbs)
D. No controllers, DUIK uses only timeline keyframes

---

### Q15. DUIK Angela introduced which improvement over DUIK Bassel?

A. DUIK Angela added spring rigs for the first time
B. DUIK Angela introduced an improved auto-rig workflow that automates bone assignment
C. DUIK Angela moved from free to a paid subscription model
D. DUIK Angela removed support for Bezier IK to simplify the toolset

---

### Q16. Which of the following elements is BEST suited for a spring rig in DUIK?

A. A character's main hand position during a handshake
B. A character's ponytail as they walk and turn their head
C. The camera shake during an explosion
D. The character's facial expression between dialogue lines

---

### Q17. The DUIK root controller typically controls:

A. Only the character's head rotation
B. Only the character's foot positions
C. The entire character's position, scale, and rotation on the Stage
D. The animation speed for all IK chains simultaneously

---

### Q18. Why is Joysticks 'n Sliders considered superior to a simple swap-symbol approach for head turns?

A. J+S doesn't require any pre-drawn artwork; it generates faces procedurally
B. J+S automatically generates smooth, blended in-between positions as the joystick moves through intermediate angles
C. J+S is built into After Effects natively; swap-symbol requires an external plugin
D. J+S allows the use of higher frame rates than swap-symbol techniques

---

### Q19. Which animation style best describes what DUIK Bezier IK is designed to create?

A. Rigid, mechanical robotics
B. Stop-motion puppet-like motion
C. Organic, slightly curved limbs (between rubber hose and rigid segment styles)
D. Hand-drawn rotoscope-accurate motion

---

### Q20. When setting up a Joysticks 'n Sliders 5-position rig, what does the animator draw?

A. Only the front-facing pose; J+S generates the other positions automatically
B. All five face positions as separate artwork (center, up, down, left, right)
C. A morph target between the two extremes; J+S interpolates the midpoints
D. A skeleton that J+S deforms into each position

---

### Q21. A DUIK spring rig has been applied to a character's antenna. The animator increases the "damping" value. What effect will this have?

A. The antenna will move faster in response to head motion
B. The antenna's oscillation will die out more quickly after the head stops moving
C. The antenna will have a larger displacement range
D. The antenna will have a slower initial response to head motion

---

### Q22. In DUIK, after creating an IK chain for an arm, what should the animator do to add an elbow direction controller?

A. Manually place a null object at the elbow and parent it to the upper arm
B. Use DUIK's Pole Vector or knee goal option when creating the IK chain
C. Add a motion guide layer to the arm layers
D. Enable Orient to Path on the lower arm layer

---

### Q23. Which plugin or tool is used for facial animation through blended joystick positions, as covered in this module?

A. DUIK's built-in face rig system
B. Joysticks 'n Sliders (J+S) by Mike Overbeck
C. Adobe Character Animator's puppet tool
D. After Effects' built-in Puppet Pin Tool in facial mode

---

### Q24. An animator notices that after setting up a DUIK IK leg, the knee bends the wrong direction when the foot controller is moved. What is the most likely fix?

A. Reverse the bone hierarchy (swap upper and lower leg)
B. Adjust the pole vector / knee goal controller position to the correct side of the leg
C. Delete the IK and use FK rotation instead
D. Change the composition frame rate to match the IK calculation rate

---

## 🎯 Answers + Explanations

```
Q1.  B, DUIK is a free, open-source rigging plugin for After Effects made by RxLaboratory.
Q2.  B, Bassel is the established stable version; Angela (17.x) is the current generation with improvements.
Q3.  C, The foot goal controller is what you animate; IK solves hip and knee from that position.
Q4.  B, The pole vector/knee goal pushes the knee to avoid wrong-direction bending.
Q5.  A, J+S joystick position blends between pre-drawn face artwork positions.
Q6.  B, Standard J+S 5-position: Center, Up, Down, Left, Right.
Q7.  B, Spring rigs add procedural lag and oscillation for secondary animation without keyframes.
Q8.  B, Stiffness controls how quickly the spring returns to rest position.
Q9.  B, Rubber hose / bendy limb style curves continuously; no rigid joint break.
Q10. B, Only end effector controllers (hands, feet) + root are directly keyframed.
Q11. B, Bezier IK creates a continuously curved limb following a bezier path.
Q12. B, J+S expressions evaluate joystick position and blend face layer properties accordingly.
Q13. B, Damping controls how quickly oscillation dies out after displacement.
Q14. B, Approximately 10 controllers for hands, feet, hips, spine, head, and root.
Q15. B, Angela's main improvement was a faster auto-rig workflow with smarter bone assignment.
Q16. B, Ponytail following head turn is the classic spring rig use case.
Q17. C, The root controller moves/scales/rotates the entire rig as a unit.
Q18. B, J+S automatically interpolates between pre-drawn poses as the joystick moves.
Q19. C, Bezier IK is for organic, slightly curved limbs; not fully rubber hose, not rigid.
Q20. B, The animator draws all five face positions; J+S handles the blending.
Q21. B, Higher damping = oscillation dies out faster = spring settles more quickly.
Q22. B, DUIK's Pole Vector or knee goal is the correct tool for controlling elbow/knee direction.
Q23. B, Joysticks 'n Sliders (J+S) by Mike Overbeck is the facial joystick plugin.
Q24. B, Move the pole vector / knee goal controller to the correct side to fix knee flip.
```
