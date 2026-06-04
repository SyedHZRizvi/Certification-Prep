---
title: "Module 5 Cheat Sheet: Particle Systems in After Effects"
---

# 🗒️ Module 5 Cheat Sheet: Particle Systems in After Effects

## Particle System Components

| Component | Role |
|-----------|------|
| Emitter | Source shape/position where particles are spawned |
| Particles | Individual elements with position, velocity, life, color, size |
| Physics | Forces: gravity, wind, turbulence, air resistance |

---

## Trapcode Particular: Effect-to-Parameter Map

| Effect | Key Parameter Settings |
|--------|----------------------|
| Fire (core) | Particles/sec: 300; Life: 1.0s; Gravity Y: −200; Turbulence: 150; Color: white→orange→red |
| Smoke | Particles/sec: 60; Life: 4s; Gravity Y: −30; Turbulence Scale: 2.0; Size grows over life |
| Dust | Box emitter; Particles/sec: 1000; Life: 10s; Low gravity; High turbulence scale |
| Embers | High Velocity; Gravity Y: +200; Spin: random; Life: 2s; Sprite: bright point |
| Magic | Layer emitter; Glow sprites; Color gradient; Turbulence: medium-small |

---

## Physics Quick Reference (Particular)

| Parameter | Higher Value | Lower Value |
|-----------|-------------|------------|
| Gravity Y (positive) | Falls faster | Floats / rises |
| Air Turbulence | More chaotic | More uniform |
| Turbulence Scale | Large billowing swirls | Small rapid flickering |
| Air Resistance | Decelerates to slow float | Maintains velocity |
| Velocity | Faster emission | Slower, closer to emitter |

---

## Blend Modes for Particles Over Footage

| Particle Type | Blend Mode |
|---------------|-----------|
| Fire / Embers | Add or Screen |
| Smoke (dark) | Normal, low opacity |
| Magic (glowing) | Add or Screen |
| Dust (subtle) | Normal, 30–60% opacity |
| Snow / Rain | Screen or Normal |

---

## CC Particle World vs Trapcode Particular

| Feature | CC Particle World | Particular |
|---------|-----------------|-----------|
| Cost | Free (built-in) | Paid |
| Physics depth | Basic | Advanced |
| Aux system | No | Yes |
| Custom sprites | Limited | Full OBJ / custom |
| Best for | Snow, rain, simple FX | Fire, smoke, hero FX |

---

## Fractal Noise Fire (No Plugins)

1. Fractal Noise → Turbulent Smooth
2. Animate Evolution (4–6 rotations/clip)
3. Animate Offset Turbulence upward (rising flame)
4. Curves → black = transparent, bright = yellow/white
5. Add Glow effect
6. Mask/roto to fire shape

---

## Layered Fire Stack (Bottom to Top)

1. Smoke (farthest back)
2. Outer Flame
3. Core Flame
4. Embers (brightest, on top)
