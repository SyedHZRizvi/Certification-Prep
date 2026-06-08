# Module 3 Quiz: Facial Animation 😶

> **24 questions · Estimated time: 30 minutes**

---

### Q1. FACS stands for:
A. Fundamental Animation Character System  
B. Facial Action Coding System  
C. Frame-Accurate Character Synthesis  
D. Facial Articulation Control Schema  

---

### Q2. A genuine ("Duchenne") smile requires which Action Unit combination?
A. AU12 only (lip corner puller)  
B. AU6 + AU12 (cheek raiser + lip corner puller)  
C. AU12 + AU25 (lip corner + lips part)  
D. AU6 alone (cheek raiser)  

---

### Q3. Which is the only universally asymmetric facial expression?
A. Sadness  
B. Anger  
C. Contempt  
D. Disgust  

---

### Q4. A micro-expression in character animation typically lasts:
A. Half a second to one second  
B. 1–5 frames at 24fps  
C. Exactly one frame  
D. One full second, long enough to read  

---

### Q5. Saccades are:
A. The smooth, continuous tracking movement of the eye between two points  
B. Rapid, ballistic jumps of the eye between fixation points  
C. The involuntary twitching of the eyelid during a blink  
D. The dilation of the pupil in response to light  

---

### Q6. In the graph editor, saccades should be animated using:
A. Smooth, bezier tangent handles for natural eye flow  
B. Stepped tangents so the eye jumps to the new position instantly  
C. Linear interpolation to simulate accurate physics  
D. Ease-in curves to approach the new position gradually  

---

### Q7. The "dead eye" problem in CG animation is most commonly caused by:
A. Using too dark a color on the iris  
B. No saccades, uniform blink timing, missing lid offset, and no upper lid tracking  
C. Too much specular highlight in the eye shader  
D. Incorrect pivot point placement on the eyeball control  

---

### Q8. In a standard "butterfly" blink (AU45), the upper lid:
A. Moves at the same speed as the lower lid  
B. Does approximately 75% of the work, closing in ~4 frames and opening in 5–6  
C. Does 50% of the work while the lower lid does the other 50%  
D. Stays still while the lower lid closes upward  

---

### Q9. AU1 (Inner Brow Raise) primarily conveys:
A. Anger and determination  
B. Surprise and fear  
C. Concern, worry, and sadness  
D. Happiness and delight  

---

### Q10. Contempt is animated correctly when:
A. Both corners of the mouth pull upward symmetrically  
B. The right corner of the mouth pulls up (AU12R) while the left stays neutral  
C. The brows come together and the mouth presses firmly  
D. The nose wrinkles and one eye squints  

---

### Q11. When a character looks downward, the upper eyelid should:
A. Remain at the same open level  
B. Rise higher to compensate for the changed gaze angle  
C. Droop approximately 30% following the gaze direction  
D. Close completely in a slow blink  

---

### Q12. The key difference between AU1 (inner brow) and AU2 (outer brow) is:
A. AU1 is voluntary; AU2 is involuntary  
B. AU1 = inner/medial portion (concern, sadness); AU2 = outer/lateral (surprise)  
C. AU1 affects the left side; AU2 affects the right side  
D. They are synonymous and describe the same movement  

---

### Q13. Which pair of AUs produces the expression of fear?
A. AU9 + AU15  
B. AU1+2 + AU4 + AU5 + AU20  
C. AU12 + AU6 + AU25  
D. AU4 + AU7 + AU23  

---

### Q14. Cheek settling time after a smile should be approximately:
A. Instantaneous, cheeks snap to position  
B. 2–4 frames of overlapping settle  
C. 12–15 frames, cheeks have very high inertia  
D. One full second to read as weighted  

---

### Q15. In the eye direction system used at Pixar, eyes darting rapidly side-to-side suggests:
A. Genuine memory recall  
B. Constructing a lie  
C. Fear, anxiety, and threat assessment  
D. Deep concentration on an abstract concept  

---

### Q16. A character says "I'm fine" while suppressing sadness. A 2-frame micro-expression of AU15 before the neutral hold would:
A. Make the character appear to have a facial tic disorder  
B. Signal suppressed sadness subconsciously to the audience  
C. Override the neutral expression entirely  
D. Have no perceptible effect on audiences  

---

### Q17. The FACS system was developed by:
A. Pixar Animation Studios for internal rig documentation  
B. Paul Ekman and Wallace Friesen in 1978  
C. Walt Disney Feature Animation in the 1940s  
D. Richard Williams as part of *The Animator's Survival Kit*  

---

### Q18. During a genuine smile, what happens to the eye area from below?
A. Nothing, smile does not affect the eye area  
B. The lower lid rises due to cheek fat pads lifting, narrowing the eye  
C. The eye widens due to excitement  
D. The brow automatically lowers in compensation  

---

### Q19. An "eye offset delay" in facial animation refers to:
A. Delaying the entire eye movement by 4 frames for follow-through  
B. One eye leading the other by 1 frame in movement timing  
C. Offsetting the eye controls from the head control for independent movement  
D. Delaying eye contact with another character for dramatic effect  

---

### Q20. Disgust in FACS is primarily expressed through:
A. AU1 + AU4 (inner brow raise + brow lowerer)  
B. AU9 + AU15 + AU16 (nose wrinkle + upper lip raise)  
C. AU20 + AU5 (lip stretch + upper lid raiser)  
D. AU12R (unilateral lip corner pull)  

---

### Q21. Why should animators not animate a smooth, continuous arc for a natural gaze shift?
A. It is too technically difficult to execute in the graph editor  
B. Real eyes jump in saccades, not smooth arcs; smooth arcs read as mechanical or doll-like  
C. Smooth arcs violate copyright on the BLURT system  
D. It requires too many keyframes and slows down production  

---

### Q22. Finding Nemo's emotional success demonstrates:
A. FACS is irrelevant for non-human characters  
B. FACS logic produces emotional resonance even on anatomically impossible characters  
C. Fish characters are naturally more sympathetic than human characters  
D. Voice acting alone carries emotional weight for non-human characters  

---

### Q23. The "FACS rig audit" process involves:
A. Testing how fast the rig can be exported for review  
B. Firing each control in isolation to identify which AU it maps to and finding gaps  
C. Auditing the financial cost of creating facial animation controls  
D. Having a supervisor audit the animator's facial work in review  

---

### Q24. Which statement about blink timing is correct?
A. All blinks should be exactly 4 frames for consistency  
B. Blinks should be identical to maintain character continuity  
C. Blink duration should vary (3–8 frames) and intervals should be irregular  
D. More blinks means more emotion, animate them as frequently as possible  

---

## 🎯 Answer Key (No Cheating!)

```
Q1.  B, Facial Action Coding System
Q2.  B, AU6+AU12: the Duchenne (genuine) smile
Q3.  C, Contempt is the only asymmetric universal expression
Q4.  B, 1–5 frames at 24fps
Q5.  B, Saccades: rapid ballistic jumps between fixation points
Q6.  B, Stepped tangents for the jump-and-hold of a saccade
Q7.  B, Dead eye: no saccades + uniform blinks + lid issues
Q8.  B, Upper lid does 75%; closes 4f, opens 5-6f
Q9.  C, AU1: concern, worry, sadness (inner brow)
Q10. B, Contempt: AU12 right side only (unilateral)
Q11. C, Upper lid droops ~30% when gaze goes down
Q12. B, AU1=inner/medial (concern); AU2=outer/lateral (surprise)
Q13. B, Fear: AU1+2 + AU4 + AU5 + AU20
Q14. B, 2–4 frames settle for cheeks
Q15. C, Rapid darting = fear, anxiety, threat assessment
Q16. B, 2-frame AU15 flash signals suppressed sadness subconsciously
Q17. B, Ekman and Friesen, 1978
Q18. B, Lower lid rises from cheek fat pads lifting
Q19. B, One eye leads the other by 1 frame
Q20. B, Disgust: AU9+AU15+AU16
Q21. B, Real eyes saccade; smooth arcs read as mechanical
Q22. B, FACS logic works even on anatomically impossible characters
Q23. B, Fire each control, identify AU mapping, find gaps
Q24. C, Vary duration (3–8f) and intervals irregularly
```
