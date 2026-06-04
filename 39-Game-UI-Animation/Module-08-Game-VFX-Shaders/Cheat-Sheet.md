---
title: "Module 8 Cheat Sheet: Game VFX & Shaders"
---

# 🗒️ Module 8 Cheat Sheet: Game VFX & Shaders

## ✨ VFX System Comparison

| System | Engine | CPU/GPU | Max Particles | Pipeline |
|--------|--------|---------|--------------|---------|
| Shuriken | Unity | CPU | ~50K | All |
| **VFX Graph** | Unity | **GPU** | **1M+** | URP / HDRP only |
| Cascade | Unreal | CPU | ~50K | Legacy UE4 |
| **Niagara** | Unreal | CPU or **GPU** | **1M+** | UE4.16+ |

---

## 🎇 Unity VFX Graph Context Flow

```
Spawn → Initialize → Update → Output Particle
```

| Context | Does |
|---------|------|
| Spawn | How many particles, at what rate |
| Initialize | Starting values (position, velocity, color, lifetime) |
| Update | Per-frame forces (gravity, drag, turbulence, collision) |
| Output | Render type (billboard, mesh, strip, line) |

---

## 🎨 Shader Graph Stylized Effects

| Effect | Key Nodes | Parameter |
|--------|-----------|-----------|
| **Dissolve** | Noise Texture → Step/Smoothstep → Alpha + Edge Emission | `Dissolve Amount` (0–1) |
| **Outline (Fresnel)** | `Fresnel Effect` → Emission | Rim power (2–5) |
| **Outline (Inverted Hull)** | Second pass, scale out, invert normals | Outline Width |
| **Hologram** | Sine wave on World Y → Alpha, Fresnel rim, time-based flicker | Scan line spacing |
| **Energy Shield** | Radial distance from hit UV → pulse fade | `HitTime`, `HitPosition` |

---

## 🍹 Juice Elements Reference

| Element | Duration | Parameters |
|---------|----------|-----------|
| **Screen Shake** | 0.1–0.3s | Amplitude: 5–15px, decay over duration |
| **Hit Stop** | 2–12 frames | `Time.timeScale = 0` + `WaitForSecondsRealtime` |
| **Squash (impact)** | 2–4 frames | Scale impact axis ×0.7, perp ×1.3 |
| **Stretch (release)** | 2–4 frames | Spring back to (1,1,1) with `setEaseOutElastic` |
| **Flash** | 1–3 frames on, 3–6 fade | Emission intensity → 0 |

### Juice Stack Timing (60fps)
```
Frame 0:  Hit stop (6f) + White flash
Frame 2:  Enemy squash
Frame 3:  Screen shake begins
Frame 4:  VFX burst at contact
Frame 6:  Hit stop ends
Frame 8:  Squash spring back
Frame 12: Shake decays to 0
Frame 15: Flash fades out
```

---

## ⚡ Screen Shake (Unity)

```csharp
IEnumerator Shake(float duration, float magnitude) {
    Vector3 origin = cameraTransform.localPosition;
    float elapsed = 0f;
    while (elapsed < duration) {
        float x = Random.Range(-1f, 1f) * magnitude;
        float y = Random.Range(-1f, 1f) * magnitude;
        cameraTransform.localPosition = new Vector3(x, y, origin.z);
        elapsed += Time.deltaTime;
        magnitude = Mathf.Lerp(magnitude, 0, elapsed / duration);
        yield return null;
    }
    cameraTransform.localPosition = origin;
}
```

---

## 📌 Case Studies

| Game | Studio | Key VFX Technique |
|------|--------|------------------|
| Hades | Supergiant | High contrast, large particles for camera-distance readability |
| Destiny 2 | Bungie | Weapon-archetype VFX (first read, peripheral vision) |
| Dead Cells | Motion Twin | Crisp 2D hit flash + squash on enemy |

---

## ⚠️ Common Traps

| Trap | Fix |
|------|-----|
| VFX Graph + built-in RP | VFX Graph requires URP or HDRP |
| More particles = better | Fewer, larger, high-contrast particles read better at distance |
| Random shake = good shake | Use Perlin noise decay for coherent directional shake |
| Hit stop = bug | Hit stop is intentional impact feedback (2–12 frames) |
| will-change in shaders | will-change is CSS; in shaders use `discard` for alpha cutout |
| Dissolve uses geometry | Dissolve uses noise texture alpha clip — no mesh change |
