# 📋 Module 4 Cheat Sheet: Multi-Touch Attribution

> One page. Print it. Tape it to your monitor.

---

## 🎯 The 6 Models, Memorize

| Model | Rule | Best for |
|-------|------|----------|
| Last-click | 100% to final touch | One-touch DR funnels |
| First-click | 100% to first touch | Brand awareness measurement |
| Linear | Equal split | When you don't know |
| Time-decay | Exponential, more to recent | Recency matters |
| Position-based (U-shaped) | 40/20/40 | First + last matter |
| Data-driven (DDA) | Probabilistic / fractional | Default with enough data |

**W-shaped** (B2B variant): 22.5 / 22.5 / 22.5 / 22.5 to First / Lead / Opp / Last + 10% middle.

---

## 🧮 DDA, 3 Mathematical Approaches

| Approach | Idea | Pros / Cons |
|----------|------|-------------|
| Shapley | Average marginal contribution over all orderings | Fair / computationally expensive |
| Markov | Removal effect on conversion probability | Fast / "memoryless" simplification |
| ML + SHAP | Boosted trees / DNN + SHAP for interpretability | Captures non-linear / needs lots of data |

### Shapley formula (short)

```
φ_i = Σ marginal_contribution_of_i(over_all_permutations) / |N|!
```

### Markov removal effect

```
RE_i = (P_conv_with_i − P_conv_without_i) / P_conv_with_i
```

---

## 🤖 GA4 DDA Threshold

```
400 conversions per conversion type per 30 days
→ otherwise falls back to LAST-CLICK silently
```

---

## 🏪 MTA Vendors (2026)

| Vendor | Sweet spot | Rigor |
|--------|-----------|-------|
| Rockerbox | Enterprise MTA + MMM + Incr | High |
| Northbeam | DTC (Direct-to-Consumer) | Med-high |
| Measured | Enterprise Incr + MMM | High (no MTA) |
| Triple Whale | Shopify DTC | Med |
| Hyros | Info products | Low-med |
| AppsFlyer / Branch / Adjust | Mobile MMP | High (specific) |

---

## ⚖️ MTA's 6 Honest Limits

1. Cannot measure no-click channels (TV, podcast, OOH)
2. Over-credits trackable channels by construction
3. Requires accurate touchpoint data (iOS ATT degrades)
4. Measures correlation, not causation
5. Cannot capture halo effects (TV → search lift)
6. Vendor outputs diverge 20–60% on same data

---

## 🧪 Incrementality Tests

| Type | What | Min |
|------|------|-----|
| Geo holdout | Treat / control by region | ≥20 matched DMAs |
| PSA test | Holdout sees PSA creative | ~$50K |
| Conversion lift (Meta / Google) | Platform-native | $50K typ. |

**Strategist rule:** reserve 5–10% of spend for incrementality tests.

---

## 🔄 The 2026 Triangle

```
                  MTA
              click data
            daily decisions
                  ↓
INCREMENTALITY  ←  MMM
   causal           aggregate
   ground-truth     quarterly
                    holistic
```

**Reconciliation:** MMM is closer to truth for budget allocation; MTA for tactical bid decisions inside a channel; Incrementality validates both.

---

## 🏆 Exam Power Phrases

✅ Often correct:

- "Attribution model is a story we choose to tell..."
- "DDA requires enough data; default falls back to last-click..."
- "Incrementality is the only causal measurement..."
- "MMM sees TV; MTA cannot..."
- "Reserve 5–10% of spend for incrementality..."

❌ Often wrong:

- "Last-click is the most accurate..."
- "DDA proves causation..."
- "All MTA vendors give the same numbers..."
- "We only need MTA..."

---

## ⚠️ Anti-Patterns

- ❌ Buying Triple Whale and calling it "MTA" without reading methodology
- ❌ Comparing vendor MTA outputs as if they're apples-to-apples
- ❌ No incrementality testing budget
- ❌ Last-click as the *primary* model in 2026
- ❌ Treating GA4 DDA as bulletproof under 400 conversions
- ❌ Cannibalizing organic with paid search (and not knowing it)

---

## ✏️ Quick Self-Check

1. The 6 attribution models? ___
2. Shapley vs Markov, 1-sentence difference? ___
3. GA4 DDA threshold? ___
4. 3 incrementality test types? ___
5. The 2026 measurement triangle? ___

---

➡️ [Module 5: Marketing Mix Modeling](../Module-05-Marketing-Mix-Modeling/Reading.md)
