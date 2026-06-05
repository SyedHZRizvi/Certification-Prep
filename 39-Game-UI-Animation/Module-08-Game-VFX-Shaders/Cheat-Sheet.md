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
| VFX Graph on pre-A12 iOS | Silently falls back to CPU — check `SystemInfo.supportsComputeShaders` |
| High overdraw on mobile | Limit particle count; alpha-erosion masks; prefer larger fewer particles |

---

## 📊 Game VFX Node Graph Reference — Shader Effects

| Effect | Required Nodes (Unity Shader Graph) | Key Parameter |
|---|---|---|
| Dissolve | Noise Texture → Step/Smoothstep → Alpha; Edge Emission at threshold | `Dissolve Amount` (0–1 float) |
| Fresnel Outline | Fresnel Effect → Add to Emission | Rim Power (1–5) |
| Inverted Hull Outline | Duplicate mesh pass; Vertex Normal direction; flat Color | Outline Width (px) |
| Hologram | Sin(World Y × freq) → Alpha; Fresnel rim; Time-driven flicker | Scan Line Frequency, Flicker Speed |
| Energy Shield Hit | Radial UV distance from `HitPosition`; time fade from `HitTime` | `HitPosition` (UV), `HitTime` (float) |
| Hit Flash | Lerp(original color, white, `FlashIntensity`) | `FlashIntensity` (0–1, decays over 3–6 frames) |

---

## 🎇 VFX Graph Key Operators

| Operator | Context | Purpose |
|---|---|---|
| Set Velocity Random | Initialize | Random velocity in cone or box |
| Turbulence | Update | Noise-based force field for organic motion |
| Conform to Sphere | Update | Attract particles toward sphere surface |
| Orient: Face Camera | Output | Billboard particles toward camera |
| Sample Texture2D | Any | Drive color, size, or velocity from texture |
| Collision Depth Buffer | Update | Collide with scene geometry (screen-space) |

---

## 🍹 Juice Stacking Implementation Guide (Unity)

```csharp
// Full juice stack on hit — call from game logic when hit lands
IEnumerator JuiceHit(Transform target, Vector3 hitPoint) {
    // Frame 0: Hit stop + white flash
    Time.timeScale = 0f;
    target.GetComponent<Renderer>().material.SetFloat("_FlashIntensity", 1f);
    yield return new WaitForSecondsRealtime(0.1f);  // 6 frames at 60fps
    Time.timeScale = 1f;

    // Frame 2: Squash (start during hit stop)
    target.localScale = new Vector3(1.3f, 0.7f, 1.3f);

    // Frame 3: Screen shake
    StartCoroutine(Shake(0.2f, 8f));

    // Frame 4: VFX burst
    Instantiate(hitParticlesPrefab, hitPoint, Quaternion.identity);

    // Flash decay
    float elapsed = 0f;
    while (elapsed < 0.1f) {  // 6 frames fade
        elapsed += Time.deltaTime;
        target.GetComponent<Renderer>().material
            .SetFloat("_FlashIntensity", Mathf.Lerp(1f, 0f, elapsed / 0.1f));
        yield return null;
    }

    // Squash spring-back
    LeanTween.scale(target.gameObject, Vector3.one, 0.15f).setEaseOutElastic();
}
```

---

## 📊 Dead Cells Hit Feedback — Layer Architecture

| Signal | Frame | Duration | Parameter |
|---|---|---|---|
| White flash | 0 | 1f (standard) / 2f (elite) | Weight = hit target size |
| Squash (hit dir) | 0 | 3–4f, spring 5f | 0.8× perp, 1.2× along hit axis |
| Knockback particles | 0 | 4–8 particles | Velocity = away from attack |
| Hit stagger recoil | 0 (elite only) | 10–20px offset, 4f | Communicates "this enemy has HP" |

---

## 🎨 Hades VFX Color Language

| Color | Message | Example |
|---|---|---|
| Red / Orange | Threat (enemy attack) | Butcher charge windup glow |
| Blue / Purple | Ability (player, Olympian) | Poseidon wave burst |
| Gold / Green | Reward (pickup, heal) | Erebus chest open |
| White + ability color | Damage confirmation (hit landed) | Enemy hit flash + god color bleed |
