---
title: "Module 5 Cheat Sheet: Particle Systems in After Effects"
---

# 🗒️ Module 5 Cheat Sheet: Particle Systems in After Effects

## Particle System Components

| Component | Role |
|-----------|------|
| Emitter | Source shape/position where particles are spawned |
| Particles | Individual elements: position, velocity, life, color, size |
| Physics | Forces: gravity, wind, turbulence, air resistance |

**Every particle system — in every tool — is built on these three components.**

---

## Trapcode Particular: Effect-to-Parameter Map

| Effect | Key Parameter Settings |
|--------|----------------------|
| Fire (core) | Particles/sec: 300; Life: 1.0s; Gravity Y: −200; Turbulence: 150; Color: white→orange→red |
| Outer flame | Duplicate core; increase Spread; reduce Particles/sec; cooler colors |
| Smoke | Particles/sec: 60; Life: 4s; Gravity Y: −30; Turbulence Scale: 2.0; Size grows over life |
| Dust | Box emitter; Particles/sec: 1000; Life: 10s; Low gravity; High turbulence scale |
| Embers | High Velocity; Gravity Y: +200; Air Resistance: 0.3; Life: 2s; Sprite: bright point |
| Magic | Layer emitter; Glow sprites; Color gradient; Turbulence: medium-small scale |

---

## Particle Physics Parameter Ranges

| Effect | Gravity Y | Air Turbulence | Turbulence Scale | Particles/sec |
|--------|-----------|----------------|-----------------|--------------|
| Fire core | −200 to −350 | 100–200 | 0.5–1.0 | 200–400 |
| Fire smoke | −20 to −50 | 50–100 | 1.5–2.5 | 50–100 |
| Dust cloud | −5 to −20 | 150–300 | 3.0–6.0 | 500–2000 |
| Rain | 350–500 | 0–30 | — | 1000–3000 |
| Snow | 30–80 | 10–50 | 2.0–4.0 | 200–600 |
| Embers | 150–250 | 30–80 | 0.8–1.5 | 20–60 |
| Magic sparks | −10 to 10 | 80–150 | 0.3–0.8 | 50–200 |

---

## Physics Quick Reference

| Parameter | Higher Value | Lower Value |
|-----------|-------------|------------|
| Gravity Y (positive) | Falls faster | Floats / rises |
| Air Turbulence | More chaotic motion | More uniform paths |
| Turbulence Scale | Large billowing swirls | Small rapid flickering |
| Air Resistance | Decelerates to slow float | Maintains velocity |
| Velocity | Faster initial speed | Slower, clusters near emitter |

**Fire uses negative Gravity Y (flames rise). Debris uses positive Gravity Y (falls).**

---

## Blend Modes for Particles Over Footage

| Particle Type | Blend Mode |
|---------------|-----------|
| Fire / Embers | Add or Screen |
| Smoke (dark) | Normal, low opacity |
| Magic (glowing) | Add or Screen |
| Dust (subtle) | Normal, 30–60% opacity |
| Snow / Rain | Screen or Normal |
| Ground kick-up | Normal, Screen |

---

## CC Particle World vs Trapcode Particular

| Feature | CC Particle World | Trapcode Particular |
|---------|-----------------|-------------------|
| Cost | Free (built-in) | Paid (Red Giant/Maxon) |
| Physics depth | Basic (gravity, velocity) | Advanced (turbulence field, air resistance) |
| Aux system | No | Yes (secondary emitters from dead particles) |
| Custom sprites | Limited | Full OBJ / custom textures |
| Best for | Snow, ash, bokeh, rain | Fire, smoke, magic, hero FX |
| GPU accelerated | No | Yes (recent versions) |

---

## Layered Fire Stack (Bottom to Top in Comp)

| Comp Layer Position | Element | Blend Mode |
|---------------------|---------|-----------|
| 1 (bottom) | Smoke | Screen / Normal |
| 2 | Outer flame | Add |
| 3 | Core flame | Add |
| 4 (top) | Embers | Add |

**Fire is always at minimum 3 layers. Single-layer "fire" looks flat.**

---

## Fractal Noise Fire (No Plugins) — Step Reference

| Step | Setting |
|------|---------|
| Fractal Type | Turbulent Smooth |
| Complexity | 4–6 |
| Contrast | 150–200 |
| Scale | 80–150 |
| Evolution | Animate 4–6 rotations over clip duration |
| Offset Turbulence | Animate upward (decreasing Y) for rising motion |
| Curves | Black = transparent; midtone = orange; bright = yellow/white |
| Add | Glow effect for luminous quality |

---

## Aux System Use Cases

| Scenario | Aux System Role |
|----------|----------------|
| Sparks from dying embers | Aux System spawns sparks when parent ember dies |
| Smoke from dying fire particles | Aux System spawns smoke puffs at fire particle death |
| Debris spawning dust clouds | Aux System spawns dust when debris particle dies |
| Magical burst with trailing particles | Aux System spawns trailing sparkles from each primary particle |

---

## Mad Max Dust Matching Protocol

| Element | Source | How to Match |
|---------|--------|-------------|
| Dust color | Sample from practical plate element | Color-sample the real dust, apply as Birth Color |
| Dust opacity | Reference footage | Match Opacity over Life curve to practical footage |
| Dust scale | Match practical visible particles | Turbulence Scale + particle size tuning |

**Always sample color from the practical reference — never invent a digital particle color from memory.**

---

## Effect-to-Tool Summary

| Effect | Tool | Key Parameter |
|--------|------|--------------|
| Fire (hero) | Trapcode Particular | 3+ layers; negative Gravity Y |
| Smoke | Trapcode Particular | Low gravity; large turbulence scale |
| Dust | Trapcode Particular | Box emitter; long life; high count |
| Simple snow | CC Particle World | Faded Sphere; low birth rate; long life |
| Fire (no plugins) | Fractal Noise + Curves | Animated evolution; color remap |
| Bokeh lights | CC Particle World | Lens particle type; birth/death colors |


---

## ✅ Module Sign-Off Checklist

- [ ] Can explain core concept without notes
- [ ] Can name 3 industry examples
- [ ] Know the 2 most common mistakes
- [ ] Understand when to use each technique

**Key formula / ratio / number to memorize:**
See the exam callouts (🎯) in the Reading.md for this module.
