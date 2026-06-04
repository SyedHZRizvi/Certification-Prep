---
title: "Module 8: Game VFX & Shaders — Unity VFX Graph, Unreal Niagara & the Art of Juice"
---

# ✨ Module 8: Game VFX & Shaders — Unity VFX Graph, Unreal Niagara & the Art of Juice

## How Supergiant Games Makes Every Ability Feel Different

In *Hades*, every ability has a distinct visual signature. Zag's sword feels different from the spear. The dash feels different from the attack. The death boon feels completely different from the kill. This is not an accident — it is systematic design.

In their GDC 2020 talk, Supergiant's VFX artist Chloe Wen described a system where each weapon's VFX was built around a single "golden path" of communicating its archetype. The sword is fast and decisive — short, bright flashes. The shield is slow and defensive — wide, arc-shaped barriers. The bow is precise and long-range — thin, directional streaks. The flaming whip is chaotic — wide, overlapping orange particles with a trailing smoke effect.

Each of these VFX was built using a combination of Unity's Shuriken particle system (older), custom shader graphs, and procedural screen effects. The result is a game where you can tell, in peripheral vision, which weapon you're using from the VFX alone.

This module teaches you the tools to build at that level: Unity VFX Graph, Unreal Niagara, shader graphs for stylized effects, and the design philosophy of "juice" — the cocktail of screen shake, hit stop, squash/stretch, and VFX that makes interactions feel satisfying.

---

## 🎇 Unity VFX Graph

Unity's **VFX Graph** (Visual Effect Graph) is a node-based particle system introduced in Unity 2018.3 that runs on the GPU via compute shaders. It is dramatically more powerful than the legacy **Shuriken** particle system and supports millions of particles in real-time.

### VFX Graph vs. Shuriken

| | Shuriken | VFX Graph |
|--|---------|-----------|
| Computation | CPU-based | GPU-based (compute shader) |
| Max particles | ~50,000 practical | 1M+ |
| Visual scripting | No — Inspector only | Yes — node graph |
| Custom logic | Limited to modules | Full GPU shader logic |
| HDRP/URP support | All pipelines | HDRP + URP (not built-in RP) |
| Use for | Simple particles, legacy | Complex, high-count, stylized |

### VFX Graph Architecture

A VFX Graph is made of **Contexts** (vertically stacked) and **Operators/Blocks**:

| Context | Purpose |
|---------|---------|
| **Spawn** | How many particles, at what rate (constant, burst, custom) |
| **Initialize** | Starting values (position, velocity, lifetime, color) |
| **Update** | Per-frame simulation (gravity, drag, forces, collision) |
| **Output** | How particles are rendered (billboard, mesh, strip) |

The graph runs entirely on the GPU. No C# code touches particle simulation — you connect math nodes in the graph.

### Key VFX Graph Operators

| Operator | Purpose |
|----------|---------|
| Set Velocity Random | Random velocity in a cone or box |
| Turbulence | Noise-based force field for organic motion |
| Conform to Sphere | Attract particles toward a sphere surface |
| Orient: Face Camera | Billboard particles toward the camera |
| Sample Texture2D | Use a texture to drive color, size, or velocity |
| Collision Depth Buffer | Collide with scene geometry using depth buffer |

---

## 🔥 Unity Shader Graph: Stylized Effects

Unity's **Shader Graph** is a node-based shader editor that compiles to HLSL for URP and HDRP. It enables artists to create custom shaders without writing code.

### Key Stylized Shader Techniques

#### Dissolve Effect
A dissolve shader uses a **noise texture** as a mask:
- Sample a noise texture (Voronoi, Simple Noise, or Gradient Noise node)
- Compare the noise value against a `Dissolve Amount` parameter (0.0 = solid, 1.0 = fully dissolved)
- Use a step or smoothstep to create a hard or soft edge
- Add an **emission** color at the edge for a burn/energy rim effect

```
Noise Texture → Sample → Compare with Dissolve Amount
→ Step (hard edge) or Smoothstep (soft edge)
→ Alpha output of the shader
+ Edge Color (emission at threshold boundary)
```

#### Outline/Toon Shader
Two common approaches:
1. **Fresnel term**: dot product of view direction and surface normal; edges glow where near-perpendicular to camera. Node: `Fresnel Effect`
2. **Inverted hull**: a second pass renders the mesh slightly scaled outward (inverted normals) with a flat outline color

#### Hologram Shader
- **Scan lines**: multiply the final color by a sine wave based on world Y position
- **Rim light**: Fresnel Effect node at the edges
- **Flicker**: multiply color by a time-driven random value
- **Transparency**: alpha cutout or blend based on scan line value

#### Energy Shield (Hit Flash)
- On hit: set a `HitTime` parameter to current time
- In shader: compute `elapsed = _Time - HitTime`; use this to drive a pulse from the impact UV point outward
- Fade out as `elapsed` increases; remove when elapsed > shield duration

---

## ⚡ Unreal Niagara System

Unreal Engine's **Niagara** VFX system (UE4.16+, production-ready in UE4.20) is the modern replacement for the legacy Cascade particle system.

### Niagara vs. Cascade

| | Cascade | Niagara |
|--|---------|---------|
| Computation | CPU | CPU or GPU (selectable) |
| Visual scripting | Limited modules | Full HLSL-like node graph |
| Data channels | Fixed (position, velocity, color) | Arbitrary attributes (add your own) |
| Inter-system communication | None | Niagara Events + Data Interfaces |
| LOD | Basic | Advanced with distance/significance |

### Niagara Architecture

| Component | Purpose |
|-----------|---------|
| **System** | The top-level container; one System per VFX |
| **Emitter** | One particle emitter within the System; multiple emitters per System |
| **Module** | A node graph node that modifies particle attributes |
| **Simulation Stage** | Custom compute shader pass (GPU only) |
| **Data Interface** | Bridge to external data (skeletal mesh, scene textures, audio) |

### Niagara Events

**Niagara Events** allow particles to communicate between emitters — or to spawn new emitters on collision events:
- A projectile particle can fire a "death event" when it collides
- A second emitter listens for death events and spawns an explosion burst at the collision point

---

## 🎨 Case Study: Hades Ability VFX (Supergiant Games)

Supergiant's GDC 2020 session revealed key design choices for Hades' VFX:

| Weapon | VFX Archetype | Key Technique |
|--------|--------------|---------------|
| Sword (Stygius) | Fast, decisive, bright | Short bright flash, 2–3 frames, hit stop 6f |
| Spear (Varatha) | Long-range, lethal | Trailing streak, directional |
| Shield (Aegis) | Defensive, arc-shaped | Wide arc burst, slower build |
| Bow (Coronacht) | Precise, long-range | Thin directional streak, no spread |
| Whip (Malphon) | Chaotic, overlapping | Wide orange particles, smoke trail |

All VFX were designed to **read at small sizes** — the game's camera is far from the character. This drove the choice of **high contrast, saturated colors** and **large individual particle sizes** (few large particles rather than many small ones).

---

## 🎮 Case Study: Destiny 2 Weapon VFX (Bungie)

Destiny 2's weapon VFX — presented in Bungie's GDC sessions — are a masterclass in communicating weapon class through particle design:

| Weapon Class | VFX Signature | Shader Technique |
|---|---|---|
| Hand Cannon | Round muzzle flash, smoke ring | Sprite atlas with alpha-eroded edges |
| Pulse Rifle | Three-burst synchronized flash | Timed emitter bursts |
| Fusion Rifle | Charging coil glow → release | Emissive ramp driven by charge parameter |
| Sword | Trailing energy streak | GPU trail strip with velocity-based width |
| Super (e.g., Golden Gun) | Full-screen rim light + particles | Screen-space post-process + world particles |

The key design principle: **a weapon's VFX should tell you what the weapon IS before you read the damage numbers**. Bungie calls this the "first read" — the VFX you can parse in peripheral vision.

---

## 🍹 The Art of Juice

"Juice" is the design industry term for the collection of layered visual and audio feedback effects that make interactions feel satisfying. The term was popularized by Martin Jonasson and Petri Purho at GDC 2012 ("Juice It or Lose It — A Talk by Two Indie Developers").

### The Four Core Juice Elements

| Element | Description | Common Parameters |
|---------|-------------|-------------------|
| **Screen Shake** | Camera translation/rotation on impact | Duration: 0.1–0.3s, Amplitude: 5–15px |
| **Hit Stop** | Brief freeze of animations on impact | Duration: 2–12 frames at 60fps |
| **Squash & Stretch** | Compress/elongate on impact and release | Scale X/Y: 0.7–1.3× for 2–4 frames |
| **Flash** | Brief white/colored full-mesh flash on hit | Duration: 1–3 frames, then fade 3–6f |

### Implementing Screen Shake in Unity

```csharp
using UnityEngine;
using System.Collections;

public class CameraShake : MonoBehaviour {
    [SerializeField] Transform cameraTransform;
    
    public IEnumerator Shake(float duration, float magnitude) {
        Vector3 originalPos = cameraTransform.localPosition;
        float elapsed = 0f;
        
        while (elapsed < duration) {
            float x = Random.Range(-1f, 1f) * magnitude;
            float y = Random.Range(-1f, 1f) * magnitude;
            cameraTransform.localPosition = new Vector3(x, y, originalPos.z);
            
            elapsed += Time.deltaTime;
            magnitude = Mathf.Lerp(magnitude, 0, elapsed / duration);  // decay
            yield return null;
        }
        
        cameraTransform.localPosition = originalPos;
    }
}
```

### Squash & Stretch in Real-Time

For 3D objects:
```csharp
// On impact: squash (compress on impact axis, expand perpendicularly)
transform.localScale = new Vector3(1.3f, 0.7f, 1.3f);

// Use LeanTween or DOTween to spring back to (1, 1, 1) over 0.15s
LeanTween.scale(gameObject, Vector3.one, 0.15f).setEaseOutElastic();
```

For 2D Spine characters: animate a Bone Scale keyframe in Spine with the squash/stretch values.

### The Juice Stacking Principle

Individual juice elements are perceptible but mild. When stacked simultaneously, they compound:

```
Player hits enemy →
  Frame 0:  Hit stop (6 frames freeze) + White flash on enemy
  Frame 2:  Enemy squash (X 1.2, Y 0.8)
  Frame 3:  Screen shake begins (0.2s, 8px amplitude)
  Frame 4:  VFX burst at contact point
  Frame 6:  Hit stop ends → all animations resume
  Frame 8:  Squash spring back to (1,1)
  Frame 12: Shake decays to 0
  Frame 15: Flash fades completely
```

The player consciously registers "that hit felt great" without being able to identify any individual element. This is the goal.

---

## ⚠️ Common Misconceptions

> **Misconception 1: "More particles = better VFX."**
> Reality: Fewer, larger, well-choreographed particles often read better than dense particle clouds, especially from camera distance. Hades uses relatively few particles per ability; each is large and high-contrast.

> **Misconception 2: "Screen shake is just random camera jitter."**
> Reality: The best screen shake uses **perlin noise or spring decay** rather than pure random. Pure random produces "buzzing" shake; noise-based shake has the directional coherence of real impact.

> **Misconception 3: "Shader graphs replace C++ shaders in production."**
> Reality: Shader Graph generates HLSL code that compiles to native shaders. It IS the real shader in production. The output is not slower than hand-written HLSL (it often compiles identically).

> **Misconception 4: "VFX Graph requires C# to operate."**
> Reality: The simulation runs entirely on the GPU. You expose properties (Dissolve Amount, Hit Position) as Exposed Properties that C# can set, but the simulation logic itself is the GPU graph.

---

## 📊 Summary: VFX System Comparison

| Tool | Engine | Computation | Max Particles | Best For |
|------|--------|-------------|--------------|---------|
| Unity Shuriken | Unity | CPU | ~50K | Legacy, simple effects |
| Unity VFX Graph | Unity | GPU | 1M+ | Complex stylized VFX |
| Unreal Cascade | Unreal | CPU | ~50K | Legacy UE4 projects |
| Unreal Niagara | Unreal | CPU or GPU | 1M+ | Modern UE4/UE5 VFX |

---

## 🔗 Course Complete

You've completed all 8 modules of the Game & UI Animation track. Next steps:

1. Build your **portfolio**: a locomotion state machine in Unity or Unreal + a Spine 2D character animation + a GSAP ScrollTrigger marketing page + at least one stylized VFX shader
2. Take the **[Final Mock Exam](../../Practice-Exams/Final-Mock-Exam.md)** — score 80%+ before applying to studios
3. Apply to: game studios (Unity/Spine/VFX roles), UI motion designer roles (GSAP/Framer Motion), or technical artist positions (shaders/VFX)

---

## 📚 Further Reading

- 🔗 [Unity VFX Graph Documentation](https://docs.unity3d.com/Packages/com.unity.visualeffectgraph@12.0/manual/index.html)
- 🔗 [Unity Shader Graph Documentation](https://docs.unity3d.com/Packages/com.unity.shadergraph@12.0/manual/index.html)
- 🔗 [Unreal Niagara Documentation](https://docs.unrealengine.com/5.3/en-US/creating-visual-effects-in-niagara-for-unreal-engine/)
- 🎬 GDC 2012: "Juice It or Lose It" — Martin Jonasson and Petri Purho (foundational talk on game feel/juice)
- 🎬 GDC 2020: "VFX in Hades" — Chloe Wen, Supergiant Games
- 🎬 GDC: Destiny 2 VFX talks — Bungie (search GDC Vault for "Destiny weapons VFX")
