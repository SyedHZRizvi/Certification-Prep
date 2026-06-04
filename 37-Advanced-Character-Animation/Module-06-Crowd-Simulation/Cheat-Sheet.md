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
