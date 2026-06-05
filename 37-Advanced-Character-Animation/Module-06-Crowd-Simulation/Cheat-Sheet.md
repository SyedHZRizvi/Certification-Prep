# Module 6 Cheat Sheet — Crowd Simulation 👥

## 5 Dimensions of Crowd Variation

| Dimension | What Changes | Implementation |
|-----------|-------------|----------------|
| Geometric | Body proportions, height, weight | Blend shape libraries |
| Texture | Skin tone, clothing, wear | Shader randomization |
| Timing | Phase offset in cycles | Per-agent timing seed |
| Motion quality | Motion clip selection | Library of 5–15 clips/action |
| Behavioral | Individual decisions | Agent brain rules |

**Minimum viable:** Geometric + Timing + Motion quality

**1-in-10 rule:** 1 in every 10 visible agents does something distinctly different.

---

## Massive Architecture

```
AGENT       → Individual entity (position, state, brain)
BRAIN       → Fuzzy logic network: Input → Fuzzy → Logic → Output
MOTION LIB  → Per-agent motion capture clip collection
SCENE       → 3D env for collision avoidance + terrain
RENDER      → Instanced geometry output
```

**Brain node types:**
- Input: proximity sensors, speed, collision
- Fuzzy: converts crisp → fuzzy logic
- Logic: AND/OR/NOT operations
- Output: selects motion clips

---

## Massive vs. Houdini CROWDS

| Feature | Massive | Houdini CROWDS |
|---------|---------|----------------|
| Decision system | Fuzzy logic brain | Procedural VEX networks |
| Integration | Stand-alone | Native pipeline |
| Emergent behavior | Yes | Limited |
| Best for | Large autonomous battles | Art-directed pipeline crowd |

---

## Sim vs. Keyframe Decision

| Use | Approach |
|-----|---------|
| 1000+ agents, emergent behavior | Simulation |
| Hero-adjacent (20–50), specific marks | Keyframe |
| Stadium on cue, transition zones | Hybrid |
| City street, pedestrians | Simulation |
| Character interacts with set piece | Keyframe |

**Hero crowd:** 20–50 agents nearest camera → keyframe.
**Background:** simulated agents.
**Transition:** carefully managed at distance boundary.

---

## Behavioral Layer Hierarchy

```
GLOBAL    → All agents: general direction
GROUP     → Subsets: regiment-level orders
INDIVIDUAL → Per-agent brain decisions
OVERRIDES  → Specific agents locked to positions/frames
```

---

## Crowd Direction Tools

| Tool | Function |
|------|---------|
| Force fields | Attraction/repulsion volumes |
| Scripted overrides | Lock agent position at specific frame |
| Population seeding | Initial distribution and heading |
| Behavioral parameter tuning | Adjust fuzzy logic output weights |

---

## Quick Facts

- Pelennor Fields: **200,000 agents** (largest film crowd, LOTR)
- Helm's Deep: **10,000 agents**
- Edit drives simulation (not the other way around)
- Emergent behavior = authentic behavior not scripted by director
- Houdini terrain following: auto foot placement on irregular terrain
- Instancing: agents share geometry for render performance

---

## Fuzzy Logic Brain: How It Works

```
1. CRISP INPUT:     Sensor reads value (e.g., health = 45%)
2. FUZZIFY:         Membership function → "low health = 0.7, medium = 0.3"
3. FUZZY RULES:     "IF low health AND enemies nearby THEN retreat = 0.8"
4. DEFUZZIFY:       Convert fuzzy output → crisp action probability
5. MOTION CLIP:     Select clip from library weighted by probability

WHY THIS MATTERS: Different agents retreat at different health thresholds
                  → Organic rout pattern, not a crisp "line" behavior
```

---

## Houdini CROWDS Pipeline Reference

| Stage | Key Node / Tool | Output |
|-------|----------------|--------|
| 1. Character setup | `agentprep` | .agent file |
| 2. Clip library | Motion bake | .bclip files |
| 3. Transition graph | State machine | Animation state graph |
| 4. Crowd source | `crowdsource` | Agent population |
| 5. Simulate | `crowdsolver` | Per-frame agent states |
| 6. Terrain adapt | `agentterrainadaptation` | Foot IK on terrain |
| 7. Render | Instance geometry | Final render |

---

## Crowd Direction Tool Reference

| Tool | What It Does | When to Use |
|------|-------------|-------------|
| Force fields | Attract or repel agents via invisible volumes | Routing agents around obstacles; rally points |
| Scripted overrides | Lock specific agent position/state at given frame | Hero-adjacent agents hitting specific marks |
| Population seeding | Control starting distribution and heading | Pre-position agents for shot composition |
| Behavioral parameter tuning | Adjust fuzzy output weights | Change aggression, fear, retreat thresholds |
| Motion library size | More clips = less visible repetition | 50+ clips per agent type for battle sequences |

---

## Editorial-to-Simulation Workflow

```
EDITORIAL DECISION              → SIMULATION REQUIREMENT
Cut at frame 240 (wide→medium)  → Readable action at medium scale by f240
Hold on reaction for 4 seconds  → Sustain behavioral state for 96 frames
Shot extended by 20 frames      → Rerun simulation with longer duration
New cut in same sequence        → Review ALL crowd shots against updated cut

RULE: EVERY simulation pass reviewed against CURRENT editorial cut,
      not the original animatic. Editorial changes during post-production.

TYPICAL ITERATION COUNT: 5–15 passes per sequence in feature film
```

---

## Module 6 Exam Rapid-Fire

| Question | Answer |
|---------|--------|
| 5 dimensions of crowd variation | Geometric, Texture, Timing, Motion quality, Behavioral |
| Minimum viable variation set | Geometric + Timing + Motion quality |
| 1-in-10 rule | 1 in every 10 visible agents does something distinctly different |
| What creates emergent behavior | Fuzzy logic brain decisions — not scripted by director |
| Pelennor Fields agent count | 200,000 |
| What crisp logic vs. fuzzy produces | Crisp = line behavior; Fuzzy = organic rout |
| Edit drives simulation means | Simulation runs against the current editorial cut, not vs. animatic |
| Black Panther chanting innovation | Audio-driven state transitions — audio waveform drives crowd sync |
| Hero crowd boundary | 20–50 agents nearest camera → keyframe; background → simulate |
