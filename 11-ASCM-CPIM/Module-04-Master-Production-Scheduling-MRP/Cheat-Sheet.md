# 📋 Module 4 Cheat Sheet: Master Scheduling & MRP (Material Requirements Planning)

> One page. This is the biggest exam-weight module. Master the math.

---

## 🗓️ MPS vs MRP

| | MPS | MRP |
|---|-----|-----|
| Plans | Finished goods | Components / raw materials |
| Demand | Independent | Dependent (calculated) |
| Time bucket | Weekly | Daily/weekly |
| Driven by | S&OP (Sales and Operations Planning) + orders + forecast | MPS + BOM (Bill of Materials) + inventory + LT |

---

## 🟢 Available-to-Promise

```
ATP_period = MPS_period − (orders booked before next MPS receipt)
```

**Example.** MPS w4 = 200, orders against w4 = 130. ATP w4 = **70**.

---

## 🚧 Time Fences

```
Today ────► DTF ────► PTF ────► Free zone
        (frozen)  (slushy)   (liquid)
```

| Fence | Rule |
|-------|------|
| **DTF** (closer) | Forecast IGNORED, only firm orders. Senior mgmt approval to change. |
| **PTF** (further out) | Master Scheduler can change with approval. |
| **Beyond PTF** | System replans freely. |

🚨 **DTF < PTF in time. Inside DTF, forecast is OUT.**

---

## ⚙️ MRP Gross-to-Net (THE Formula)

```
Net Requirement = Gross − On-hand − Scheduled Receipts
Planned Order Release Date = Receipt Date − Lead Time
```

**Quick worked row (pedal, LT=1):**

| Week | 1 | 2 | 3 |
|------|---|---|---|
| Gross Req | 2,400 | 2,400 | 2,400 |
| Sched Rcpt | 2,000 | 0 | 0 |
| On hand (start 500) | 100 | -2,300 | -4,700 |
| Net Req | 0 | 2,300 | 2,400 |
| Planned Rcpt | 0 | 2,300 | 2,400 |
| Planned Release | 2,300 | 2,400 |, |

---

## 📦 5 Lot-Sizing Rules

| Rule | Order Qty | Use Case |
|------|-----------|----------|
| **L4L** | = net req | Low setup, JIT (Just-In-Time) |
| **EOQ (Economic Order Quantity)** | √(2DS/H) | Stable demand, high setup |
| **POQ** | Cover N periods | Trade-off |
| **FOQ** | Fixed Q | Supplier minimum |
| **Min/Max** | Up to Max when at Min | DRP (Distribution Requirements Planning) |

---

## 🧠 ATP vs CTP vs PTP

| | Considers |
|---|-----------|
| **ATP** | Existing MPS as-is |
| **CTP** | What if we replan capacity + materials? |
| **PTP** | Of those promises, which is profitable? |

---

## 📬 4 MRP Action Messages

- **Release**, release this planned order now
- **Reschedule in**, pull open order earlier
- **Reschedule out**, push open order later
- **Cancel**, cancel open order

---

## 🌳 BOM & Low-Level Coding

- BOM = parent-child list with qty-per
- Low-level code = *deepest* level item appears anywhere
- MRP processes items in low-level-code order → all parent demands netted

---

## 🏆 Exam Power Phrases

When you see these, often **correct**:

- ✅ "Calculate dependent demand from BOM"
- ✅ "Inside DTF, only firm orders drive PAB"
- ✅ "Plan order release = receipt − LT"
- ✅ "ATP = MPS minus orders before next MPS"

When you see these, often **wrong**:

- ❌ "Forecast dependent demand directly"
- ❌ "DTF is further out than PTF"
- ❌ "Inside DTF, weighted forecast + orders"
- ❌ "MPS plans components"

---

## ⚠️ Anti-Patterns To Recognize

- ❌ Forecasting dependent demand (use MRP!)
- ❌ Frequent changes inside the DTF
- ❌ Using L4L when supplier has minimums
- ❌ Ignoring action messages
- ❌ MPS unsynchronized with S&OP family plan

---

## ✏️ Quick Self-Check

1. ATP if MPS=300, orders=180? → **120**
2. Net req if Gross=500, on-hand=200, sched rcpt=100? → **200**
3. Release date if receipt=week 7, LT=3? → **week 4**
4. Inside DTF, what drives PAB? → **Firm orders only**
5. Which is further out, DTF or PTF? → **PTF**

---

➡️ [Practice Exam 1](../Practice-Exams/Practice-Exam-1.md), take it now! Then [Module 5: Capacity Planning](../Module-05-Capacity-Planning/Reading.md)
