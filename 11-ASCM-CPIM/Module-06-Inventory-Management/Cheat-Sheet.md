# 📋 Module 6 Cheat Sheet: Inventory Management

> One page. The formulas page of CPIM. Drill these until automatic.

---

## 🎯 The 6 Functions of Inventory

1. **Cycle** (lot-size) — buying in batches
2. **Safety** (buffer) — protect against variability
3. **Anticipation** — built ahead of known spike
4. **Transit** (pipeline) — in motion
5. **Hedge** — against price/exchange
6. **Decoupling** — WIP between stages

---

## 💰 The 4 Inventory Costs

- **Ordering / Setup (S)** — per order/setup
- **Carrying (H)** — per unit per year (often 20–35% of item cost)
- **Stockout** — lost sale, expedite
- **Item** — purchase cost

---

## 📐 EOQ Formula (MEMORIZE)

```
EOQ = √(2 × D × S / H)
```

| Symbol | Meaning |
|--------|---------|
| D | Annual demand (units/yr) |
| S | Order cost ($) |
| H | Holding cost ($/unit/yr) |

**Example.** D=10,000, S=$50, H=$2 → EOQ = √(1,000,000/2) = √500,000 ≈ **707**.

---

## 🏭 EPQ (Production)

```
EPQ = EOQ × √(p / (p − d))
```

Where p = production rate, d = demand rate. Always > EOQ.

---

## 🔁 ROP & Safety Stock

```
ROP = d × LT + SS
SS = z × σ_LT
σ_LT = σ_daily × √LT       (under independence)
```

| Service % | z |
|-----------|---|
| 90% | 1.28 |
| 95% | 1.65 |
| 97.5% | 1.96 |
| 99% | 2.33 |
| 99.86% | 3.0 |

**Example.** d=80/day, LT=7, SS=200 → ROP = **760**.
σ=10/day, LT=9, 95% → SS = 1.65 × (10×3) = **49.5**.

---

## 📊 ABC Classification

| Class | % SKUs | % $ | Cycle Count | SS |
|-------|--------|-----|-------------|-----|
| **A** | 10–20% | 70–80% | Monthly+ | Tight |
| **B** | 20–30% | 15–25% | Quarterly | Moderate |
| **C** | 50–70% | 5–10% | Annually | Loose |

**XYZ:** X = stable, Y = some var, Z = erratic. Combine A×X, A×Z, etc.

---

## 🔢 IRA & Cycle Counting

```
IRA = Items correct / Items counted × 100%
```

A-item target: **95%+** (0% tolerance). C items: 90% acceptable.

---

## 📈 Turnover & Days of Supply

```
Turnover = Annual COGS / Avg Inventory
Days of Supply = 365 / Turnover
```

**Example.** COGS=$30M, Inv=$5M → Turnover = 6, DOS = **61 days**.

---

## 🗄️ Inventory Ownership

| Model | Who Owns | Who Plans |
|-------|----------|-----------|
| Standard | Customer | Customer |
| **VMI** | Customer (usually) | Supplier |
| **Consignment** | Supplier (until use) | Either |

---

## 🏆 Exam Power Phrases

When you see these, often **correct**:

- ✅ "Compute EOQ as starting point, then adjust for discounts"
- ✅ "Increase safety stock to raise service level"
- ✅ "Cycle count A items monthly"
- ✅ "ROP = d × LT + SS"

When you see these, often **wrong**:

- ❌ "EOQ ignores quantity discounts" (true, but you must adjust)
- ❌ "Higher safety stock is always better"
- ❌ "Annual physical inventory replaces cycle counting"
- ❌ "EOQ = √(DH/2S)" (formula inverted)

---

## ⚠️ Anti-Patterns To Recognize

- ❌ Same cycle-count frequency for A and C items
- ❌ Blindly applying EOQ when discounts exist
- ❌ Targeting 100% service (cost rises exponentially)
- ❌ Ignoring inventory record accuracy
- ❌ Setting SS = 0 because "we use JIT"

---

## ✏️ Quick Self-Check

1. EOQ for D=8,000, S=$25, H=$4? → **316**
2. ROP for d=100, LT=5, SS=200? → **700**
3. SS for σ=20, LT=16, 95%? → 1.65×(20×4) = **132**
4. Turnover = 10 → DOS? → **36.5**
5. A-item cycle-count frequency? → **Monthly**

---

➡️ [Module 7: PAC](../Module-07-Production-Activity-Control/Reading.md)
