# Module 6 Quiz: Crowd Simulation 👥

> **24 questions · Estimated time: 30 minutes**

---

### Q1. The primary reason crowd variation is essential in simulation is:
A. Studio executives require a minimum number of unique characters  
B. The human visual system is highly sensitive to pattern repetition in groups  
C. Simulation software cannot produce identical agents  
D. Union regulations require each character to be uniquely designed  

---

### Q2. Which is the minimum viable set of variation dimensions for a crowd to avoid reading as a "clone army"?
A. Geometric variation alone  
B. Texture/look variation alone  
C. Geometric, timing, and motion quality variation at minimum  
D. All five dimensions must always be implemented  

---

### Q3. The "1-in-10 rule" in crowd animation states:
A. Every 10th agent must be a hero character with full keyframe animation  
B. At least 1 in 10 visible agents should be doing something distinctly different  
C. The camera should change angle every 10 agents that pass the frame  
D. No more than 10% of agents can have behavioral simulation active  

---

### Q4. Massive (the crowd simulation software) uses what type of decision-making system for agent behavior?
A. Keyframed behavioral scripts set by animators for each agent  
B. Machine learning trained on real crowd footage  
C. Fuzzy logic networks that process sensory inputs and output behavioral decisions  
D. Random number generators applied to a fixed behavioral script  

---

### Q5. What does "emergent behavior" mean in the context of LOTR crowd simulation?
A. Behaviors scripted by crowd directors that emerge from keyframe animation  
B. Unexpected, authentic behavioral patterns (like orcs routing) that arise from the simulation's logic, not human direction  
C. New agent behaviors that emerge only when the simulation exceeds 10,000 agents  
D. Behavioral responses to editorial cuts  

---

### Q6. In Massive's architecture, the "brain" component is:
A. A pre-rendered motion clip library  
B. A fuzzy logic network of input, fuzzy, logic, and output nodes making behavioral decisions  
C. The central server that coordinates all agent positions  
D. The collision detection system for agent-to-agent interaction  

---

### Q7. Houdini CROWDS is most appropriate for:
A. Large-scale autonomous battle simulation requiring emergent behavior  
B. Pipeline-integrated crowd work with procedural setup and art direction  
C. Stand-alone crowd simulation independent of the main production pipeline  
D. Crowds of fewer than 100 agents — Houdini cannot scale beyond that  

---

### Q8. The "hero crowd" in a hybrid crowd shot consists of:
A. The most historically significant characters in the film  
B. The 20–50 agents closest to camera that must perform specific actions via keyframe  
C. Crowd leaders who are simulated at higher resolution than background agents  
D. Motion-captured crowd extras who replace simulated agents in close-up  

---

### Q9. For a shot requiring 1,000+ autonomous agents with emergent battle behavior, the correct approach is:
A. Keyframe all agents individually  
B. Simulation — keyframe cannot scale to this count with authentic emergent behavior  
C. Use a single motion capture clip applied to all agents simultaneously  
D. Use still images of crowds composited in post-production  

---

### Q10. In Houdini CROWDS, a "clip transition graph" controls:
A. The speed at which the crowd simulation renders  
B. When an agent switches between motion clips (the state machine for motion selection)  
C. The geometric transition between agent character designs  
D. How the crowd transitions between shots in editorial  

---

### Q11. For the Pelennor Fields sequence in *The Return of the King*, approximately how many agents were simulated?
A. 10,000  
B. 50,000  
C. 200,000  
D. 2,000,000  

---

### Q12. Which scenario is most appropriate for keyframe (rather than simulation) crowd work?
A. A battle sequence with 5,000 soldiers where emergent routing is desired  
B. A stadium crowd of 80,000 spectators cheering  
C. 30 hero-adjacent characters who must hit specific marks for the director  
D. A city street crowd of 2,000 pedestrians moving independently  

---

### Q13. "Force fields" in crowd direction are:
A. Magical effects added to crowd shots in post-production  
B. Invisible volumes that apply attraction or repulsion forces to agents during simulation  
C. Physics constraints that prevent agents from overlapping  
D. Render regions that apply special shading to foreground agents  

---

### Q14. The LOTR "running away" story illustrates that:
A. Massive had a bug that needed to be fixed before the film shipped  
B. Simulation can produce emergent, authentic behavior that human directors did not script  
C. Orcs were scripted by the crowd team to flee at 30% health  
D. WETA's animators manually animated the fleeing orcs after the simulation was discarded  

---

### Q15. In Houdini CROWDS, agents are rendered using:
A. Full unique geometry for each agent  
B. Instanced geometry for render performance  
C. 2D sprites composited in post-production  
D. Motion-blurred point clouds  

---

### Q16. "Behavioral parameter tuning" in crowd direction refers to:
A. Directly posing individual agents at specific frames  
B. Adjusting the weights of fuzzy logic outputs (e.g., retreat tendency when health is low)  
C. Changing the color and costume of agents in the crowd  
D. Increasing or decreasing the simulation frame rate  

---

### Q17. Which editorial principle governs crowd simulation production?
A. The simulation drives the edit — editorial is cut after the simulation is final  
B. The edit drives the simulation — the simulation must produce appropriate content at every cut point  
C. Editorial and simulation are developed in parallel with no dependency  
D. The simulation is finalized before any editorial decisions are made  

---

### Q18. Timing variation alone (without geometric variation) can:
A. Never produce the illusion of individual characters — geometry must be unique  
B. Make even geometrically identical characters read as individuals  
C. Only work for crowds of fewer than 100 agents  
D. Replace all other forms of crowd variation  

---

### Q19. In Massive, an "output node" in the agent brain:
A. Processes sensory input from the scene environment  
B. Drives the selection of motion clips from the motion library  
C. Exports simulation data to the render farm  
D. Controls agent death and removal from the simulation  

---

### Q20. The behavioral layer structure in a crowd simulation, from broadest to most specific, is:
A. Individual → Group → Global → Overrides  
B. Global → Group → Individual → Overrides  
C. Overrides → Individual → Group → Global  
D. Group → Individual → Global → Overrides  

---

### Q21. For a crowd shot of a stadium cheering on cue, the recommended approach is:
A. Pure simulation — no keyframe  
B. Pure keyframe — no simulation  
C. A hybrid approach using both simulation and keyframe  
D. Neither — stadium crowds are always plate photography composites  

---

### Q22. The Houdini CROWDS system differs from Massive most fundamentally in:
A. Houdini cannot handle more than 1,000 agents  
B. Massive uses Python scripting; Houdini uses C++  
C. Houdini CROWDS is procedural and pipeline-native; Massive is stand-alone autonomous behavior simulation  
D. Massive is free; Houdini CROWDS requires a paid license  

---

### Q23. "Population seeding" in crowd direction controls:
A. Which motion capture clips are loaded for each agent type  
B. Initial agent distribution in the scene and their starting heading  
C. The rate at which new agents are added to the simulation over time  
D. The randomization seed for agent geometry variation  

---

### Q24. Which component of Massive stores the motion clips that agents select from during simulation?
A. The Agent Brain  
B. The Scene Environment  
C. The Motion Library  
D. The Render Layer  

---

## 🎯 Answer Key (No Cheating!)

```
Q1.  B — Human visual system is sensitive to pattern repetition in groups
Q2.  C — Minimum: geometric + timing + motion quality
Q3.  B — 1-in-10: at least 1 agent does something distinctly different
Q4.  C — Fuzzy logic networks: sensory inputs → behavioral decisions
Q5.  B — Emergent: authentic behavior arising from logic, not direction
Q6.  B — Brain: fuzzy logic network of nodes
Q7.  B — Houdini CROWDS: procedural, pipeline-integrated
Q8.  B — Hero crowd: 20–50 nearest camera; keyframed for specific marks
Q9.  B — 1000+ autonomous agents: simulation required
Q10. B — Clip transition graph: state machine for motion selection
Q11. C — Pelennor Fields: 200,000 agents
Q12. C — Hero-adjacent (30 characters hitting marks): keyframe
Q13. B — Force fields: attraction/repulsion volumes
Q14. B — Emergent authentic behavior; not scripted; kept in final film
Q15. B — Instanced geometry for render performance
Q16. B — Behavioral parameter tuning: adjust fuzzy logic output weights
Q17. B — Edit drives simulation; simulation must serve editorial
Q18. B — Timing variation alone can differentiate even identical geometry
Q19. B — Output node drives motion clip selection
Q20. B — Global → Group → Individual → Overrides
Q21. C — Stadium on cue: hybrid (sim background + keyframe for on-cue response)
Q22. C — Houdini: procedural/pipeline-native; Massive: stand-alone autonomous
Q23. B — Population seeding: initial distribution and heading
Q24. C — Motion Library stores the motion clips
```
