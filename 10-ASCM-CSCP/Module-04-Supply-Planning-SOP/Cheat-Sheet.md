# 📋 Module 4 Cheat Sheet: Supply Planning & S&OP (Sales and Operations Planning)

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🗓️ S&OP 5-Step Monthly Cycle (Wallace / Stahl)

```
   1. Data Gathering
   2. Demand Review
   3. Supply Review
   4. Pre-S&OP Reconciliation
   5. Executive S&OP Meeting → ONE plan
```
🧠 **G-D-S-P-E**

---

## 🏗️ Planning Hierarchy

| Plan | Horizon | Grain | Capacity Check |
|------|---------|-------|----------------|
| Strategic | 3–10 yrs | $ revenue | RRP |
| S&OP / Aggregate | 12–24 mo | Family | RRP / RCCP feed |
| MPS | 3–6 mo | SKU (Stock Keeping Unit) | **RCCP** |
| MRP (Material Requirements Planning) | Same as MPS | Component | **CRP** |
| PAC | Days | Work order | I/O Control |

---

## 🚀 S&OP vs IBP

| | S&OP | IBP |
|---|------|-----|
| Scope | Demand + Supply | + Finance + Strategy + NPI |
| Horizon | 12–24 mo | 24–36 mo |
| Maturity | Stage 2–3 | Stage 4–5 |

---

## 🧮 Aggregate Planning Strategies

| Strategy | Description | Best For |
|----------|-------------|----------|
| Chase | Match production to demand | Services, low inventory |
| Level | Constant production | Capital-intensive mfg |
| Hybrid | Mix + overtime + subcontract | Most real firms |

Levers: overtime, hire/fire, subcontract, inventory buildup, backorders, demand shaping.

---

## 📋 MPS & Time Fences

```
   |── Frozen ──|── Slushy ──|── Liquid ───►
   Now         DTF          PTF
   Actual orders  Manual chg  MRP auto-plans
```
- **DTF** (closer), only firm orders count
- **PTF** (further), changes need master scheduler
- **Outside PTF**, system replans freely

---

## 📦 MRP Inputs / Outputs

**Inputs:** MPS · BOM (Bill of Materials) · Inventory records

**Outputs:** Planned order releases · Reschedule notices · PO recommendations

### Lot-sizing rules
| Rule | When |
|------|------|
| L4L | Net req each period, low setup, JIT (Just-In-Time) |
| EOQ (Economic Order Quantity) | Stable demand |
| POQ | Smoothed lumpy |
| FOQ | Pack-size constraint |
| Min-max | Spares / MRO |

---

## 🏭 Capacity Layers

| Layer | Horizon | What |
|-------|---------|------|
| **RRP** | Strategic | Long-term resource sizing |
| **RCCP** | MPS | Key work centers, families |
| **CRP** | MRP | All work centers, by part |
| **I/O** | Shop floor | Daily load vs plan |

---

## 🎯 The Promise Family

| Term | Considers |
|------|-----------|
| ATP | Inventory + uncommitted production |
| CTP | + capacity + materials |
| PTP | + profitability |
| ATD | + logistics delivery |

ATP formula: `On-hand + MPS receipts − committed orders` (per bucket).

---

## ⚠️ Anti-Patterns To Recognize

- ❌ S&OP without executive commitment
- ❌ Skipping pre-S&OP reconciliation
- ❌ DTF and PTF swapped or ignored
- ❌ Running MRP without RCCP
- ❌ Forecasting at SKU instead of family in S&OP
- ❌ Using ATP when you really need CTP (MTO/ATO)
- ❌ Pure chase in capital-intensive mfg

---

## 🏆 Exam Power Phrases

✅ "One plan reconciled across functions..."
✅ "Family-level aggregate plan..."
✅ "Master scheduler intervenes inside DTF..."
✅ "RCCP validates MPS feasibility..."

❌ "Auto-change MPS inside DTF..."
❌ "MRP plans capacity..."
❌ "S&OP at SKU level..."
❌ "ATP includes capacity..."

---

## 🔑 Key Numbers

- 5 S&OP steps
- 12–24 mo S&OP horizon (24–36 for IBP)
- 3 MRP inputs
- 2 time fences (DTF closer, PTF further)
- 3 aggregate planning strategies

---

## ✏️ Quick Self-Check

Cover the answers and recite:

1. 5 S&OP steps in order ___
2. 3 MRP inputs ___
3. RCCP vs CRP ___
4. DTF vs PTF ___
5. Chase vs level ___

---

➡️ [Module 5: Inventory & Capacity](../Module-05-Inventory-Capacity/Reading.md)
