# 📋 Module 1 Cheat Sheet: Logistics Strategy & Network Design

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🎯 The 5 Strategic Logistics Decisions

```
1. Network design  (how many DCs, where, what role)
2. Mode strategy   (truck/rail/ocean/air mix)
3. Make-or-buy     (in-house vs 3PL/4PL)
4. Service segmentation (one size vs tiered)
5. Technology stack (WMS/TMS/OMS/Control Tower)
```

Strategic = long-term, capital-intensive, hard to reverse.

---

## 🏢 Number of DCs, Total Cost Curve

| Cost | As DCs increase |
|------|-----------------|
| Outbound transport | ⬇️ Falls |
| Inventory carrying | ⬆️ Rises (√N rule) |
| Facility / fixed cost | ⬆️ Rises |
| Inbound transport | ⬆️ Rises |
| Service level | ⬆️ Improves |

🧠 **MEMORIZE:** Adding DCs trades transport for inventory + facility.

---

## 🧮 Center-of-Gravity Formula

```
X = Σ(Vi · xi) / Σ(Vi)
Y = Σ(Vi · yi) / Σ(Vi)
```
Weights = demand volume Vi. Ignores roads, labor, taxes. Use as *starting point* only.

**Square-root rule:** Total safety stock across N stocking locations ≈ √N × single-location SS.

---

## 🕸️ Network Types (KNOW ALL FIVE)

| Type | Pattern | Best for |
|------|---------|----------|
| Direct | Plant → Customer | High-volume, single-SKU |
| Milk-run | Plant → multi-stop | Multiple small customers |
| Hub-and-spoke | Plant → Hub → Spoke DCs | Parcel, LTL, consolidation |
| Cross-dock | Inbound → sort → outbound | Fast-movers, retail replenishment |
| Multi-echelon | Plant → Master DC → Regional → Local | Wide geography, mixed velocities |

---

## 🏭 Facility Roles

| Facility | Inventory? |
|----------|-----------|
| Plant warehouse | Yes (FG/WIP) |
| DC | Yes |
| Cross-dock | No (transient) |
| Hub / Sort center | No (transient) |
| Fulfillment center | Yes (e-com) |
| Forward stocking location | Yes (small, near customer) |
| Bonded warehouse | Yes (customs-controlled) |
| Free Trade Zone | Yes (duty-deferred) |

---

## 🤝 1PL → 5PL Quick Reference

| Tier | Role |
|------|------|
| 1PL | Shipper handles own logistics |
| 2PL | Asset carrier (truck/rail/ocean) |
| 3PL | Outsourced warehouse + transport + value-add |
| 4PL | Lead logistics provider, orchestrates other LSPs |
| 5PL | 4PL + e-com + data analytics |

🧠 **3PL operates assets. 4PL orchestrates.**

---

## 🏆 Exam Power Phrases

Usually CORRECT:

- ✅ "Align logistics with business strategy"
- ✅ "Trade off transport vs inventory + facility"
- ✅ "Use center-of-gravity as a starting point"
- ✅ "Segment customers by velocity/value"
- ✅ "Hub-and-spoke for consolidation"

Usually WRONG:

- ❌ "Adding DCs always reduces total cost"
- ❌ "3PL is always cheaper"
- ❌ "Center-of-gravity gives the final answer"
- ❌ "Cross-dock is a warehouse"
- ❌ "One service level fits all customers"

---

## ⚠️ Anti-Patterns To Recognize

- ❌ One-DC-for-the-whole-country with diverse customer base
- ❌ Symmetric service to all customer tiers
- ❌ Outsourcing the *differentiating* part of your value chain
- ❌ Network designed once, never revisited

---

## ✏️ Quick Self-Check

Cover the answers and recite:

1. What is the square-root rule? ___
2. Greenfield vs Brownfield? ___
3. 3PL vs 4PL? ___
4. When is hub-and-spoke better than point-to-point? ___
5. Three things center-of-gravity ignores? ___

---

➡️ [Module 2: Capacity & Demand for Logistics](../Module-02-Capacity-Demand-Logistics/Reading.md)
