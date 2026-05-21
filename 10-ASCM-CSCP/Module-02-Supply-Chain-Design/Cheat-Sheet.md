# 📋 Module 2 Cheat Sheet: Supply Chain Design

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🏭 Network Configurations

| Config | Best For | Trade-Off |
|--------|----------|-----------|
| Centralized | Pooling, scale | Long outbound legs |
| Decentralized | Fast local service | More inventory |
| Hub-and-spoke | Consolidation | Hub bottleneck |
| Cross-dock | Speed, no storage | Tight coordination |
| Milk run | Fill empty miles | Routing complexity |
| Drop-ship | No retailer inventory | High per-unit freight |

---

## 🌎 Facility Location Tools

| Method | Use When |
|--------|----------|
| Factor-rating | Qualitative + quantitative criteria, weighted |
| Center-of-gravity | Single new facility, demand-weighted location |
| Break-even | Cost-only comparison of fixed + variable |
| Transport LP | Multi-DC, multi-lane optimization |

### Center-of-Gravity formula
```
   X = Σ(dᵢ·xᵢ)/Σdᵢ       Y = Σ(dᵢ·yᵢ)/Σdᵢ
```
Assumptions: straight-line distance, uniform freight rate, single facility.

### Break-even between two sites
```
   FC₁ + VC₁·Q = FC₂ + VC₂·Q
   Q* = (FC₁ − FC₂) / (VC₂ − VC₁)
```

---

## 🔨 Make-or-Buy Quick Guide

| MAKE if… | BUY if… |
|----------|---------|
| Core competency | Non-core / commodity |
| Strategic IP | Suppliers have superior scale |
| Quality must be tight | Demand variable, want flexibility |
| Capital available | Capital constrained |
| Volume justifies fixed cost | Speed-to-market matters |

---

## 🪜 Integration Types

| Type | Direction | Example |
|------|-----------|---------|
| Backward | Upstream supplier | Tesla buys lithium mines |
| Forward | Downstream customer | Apple stores |
| Horizontal | Same-stage competitor | Marriott + Starwood |

---

## 🌍 Outsourcing vs Offshoring vs Nearshoring vs Reshoring

| Term | What Moves | Where |
|------|-----------|-------|
| Outsourcing | Activity to external firm | Anywhere |
| Offshoring | Activity to foreign country | In-house or outsourced |
| Nearshoring | From far-shore to closer country | E.g. China → Mexico |
| Reshoring | Back to home country | Mexico → US |
| Insourcing | Back in-house | Often pairs with reshoring |

---

## 🛒 Supplier Base Strategy

| Strategy | Pros | Cons |
|----------|------|------|
| Single source | Deep relationship, leverage | Total stoppage risk |
| Dual source | Redundancy, competition | Coordination cost |
| Multi source | Max resilience, low leverage | Admin overhead |
| Sole source | No choice | Highest risk |

🔥 **Single ≠ Sole.** Single = chose one. Sole = only one exists.

---

## 🎯 Kraljic Matrix (Preview)

|                    | Low risk      | High risk    |
|--------------------|---------------|--------------|
| **Low impact**     | Routine       | Bottleneck   |
| **High impact**    | Leverage      | Strategic    |

---

## 📐 Square-Root Law

Safety stock pools as **√N** when consolidating from N to fewer DCs.
10 DCs → 5 DCs: cuts safety stock ≈ √(5/10) ≈ 30%.

---

## 💰 U-Shaped Total-Cost Curve

```
Cost  ▲    ╲          ╱  Total = Inventory + Facility + Transport
      │     ╲        ╱
      │      ╲______╱     ← optimum
      └──────────────────► # facilities
```
- Inventory + facility cost ↑ with N
- Transport cost ↓ with N
- Minimum sum = optimal network size

---

## ⚠️ Anti-Patterns To Recognize

- ❌ Outsource your **core** competency
- ❌ Treat "single source" and "sole source" as synonyms
- ❌ Add DCs without checking the cost curve
- ❌ Centralize for fast urban delivery
- ❌ Vertically integrate without scale or capital
- ❌ Apply goods-SC thinking to service-SC capacity problems

---

## 🏆 Exam Power Phrases

✅ "Align facility footprint with strategic priority..."
✅ "Use factor-rating for multi-criteria selection..."
✅ "Outsource non-core activities to specialists..."
✅ "Cross-dock high-velocity SKUs..."

❌ "Add facilities until service is perfect..."
❌ "Single-source everything to maximize leverage..."
❌ "Vertically integrate to lower cost..."
❌ "Use center-of-gravity for multi-facility design..."

---

## ✏️ Quick Self-Check

Cover the answers and recite:
1. Two assumptions of center-of-gravity ___
2. Define nearshoring vs reshoring ___
3. Square-root law's effect on safety stock ___
4. When to MAKE vs BUY ___
5. Single source vs sole source ___

---

➡️ [Module 3: Demand & Forecasting](../Module-03-Demand-Forecasting/Reading.md)
