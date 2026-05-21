# Module 4: Master Scheduling & MRP 🗓️

> **Why this module matters:** MPS and MRP are the *engines* of manufacturing planning. Roughly 20–25% of CPIM exam questions live in this module. If you can hand-compute an MRP table and read a time-fence policy, you'll bank a lot of points. If you can't, you'll lose them by the dozen.

---

## 🍕 A Story: The Bicycle Shop That Ran Out of Pedals

**Velo Frères**, a Belgian bicycle assembly plant, builds 6 finished bike models. Each model uses different combinations of frames, wheels, gears, brakes, chains, pedals, and saddles. About 250 unique components in total.

Until 2019, the planning was done in Excel. The buyer ordered roughly twice the average monthly usage of each part. Stockouts were "rare but painful." When a stockout *did* happen, the assembly line stopped — sometimes for days waiting on an obscure $1.20 pedal.

In 2020 they implemented MRP. The MPS at the finished-good level said: "Build 1,200 Model-A bikes the week of June 7." MRP exploded that through the Bill of Materials: 1,200 frames, 2,400 wheels, 1,200 chains, 2,400 pedals, etc. Then it offset each requirement by the supplier lead time: chains arrive in 2 weeks, frames in 6 weeks, pedals in 1 week. The system generated a planned order for *each component*, in *each week*, to arrive *just in time*.

Stockouts dropped 94%. Inventory dropped 38%. The owner cried.

**That's MRP.** A mechanical, dependent-demand calculation that turns a finished-good schedule into thousands of component plans, *automatically*.

---

## 🎯 The Two Layers: MPS vs MRP

| | Master Production Schedule (MPS) | Material Requirements Planning (MRP) |
|---|----------------------------------|--------------------------------------|
| **Plans for** | Finished goods (end items) | Components and raw materials |
| **Demand type** | Independent (customer/forecast) | Dependent (BOM-derived) |
| **Output** | What to build and when | What to buy/make and when |
| **Time bucket** | Weekly typically | Daily or weekly |
| **Driven by** | S&OP, customer orders, forecast | MPS + BOMs + inventory + lead times |
| **Owner** | Master Scheduler | Planner / Buyer-Planner |

🎯 **Critical CPIM concept:** **Independent demand** comes from outside the plant (customers, forecasts). **Dependent demand** is *calculated* from the BOM of items that use it. Pedals are dependent on the bike MPS. Bikes are independent — driven by customer/forecast.

🚨 **Trap on the exam:** A *spare part* sold to a customer is *independent demand* even if it's a component. The same physical part used inside a finished good = dependent. Many shops have both — handled via "service parts MPS" alongside the regular MPS.

---

## 🗓️ The Master Production Schedule (MPS)

The MPS is the *anchor* of execution. It states:

> "Build N units of finished good X in week Y."

The MPS reconciles three inputs:
1. **Customer orders** (already booked)
2. **Forecast** (what we think we'll sell)
3. **S&OP family plan** (the agreed total)

The standard MPS record looks like:

| Week | 1 | 2 | 3 | 4 | 5 | 6 |
|------|---|---|---|---|---|---|
| Forecast | 100 | 100 | 100 | 100 | 100 | 100 |
| Customer orders | 90 | 80 | 60 | 30 | 10 | 0 |
| Projected available balance (start: 50) | 60 | 60 | 60 | 60 | 60 | 60 |
| MPS (production) | 100 | 100 | 100 | 100 | 100 | 100 |
| **Available-to-promise (ATP)** | 10 | 20 | 40 | 70 | 90 | 100 |

---

## 🟢 Available-to-Promise (ATP)

**Available-to-Promise** = the uncommitted portion of the MPS that the sales rep can promise to a new customer.

**Discrete ATP (period-by-period):**
```
ATP_period = MPS_period − sum of customer orders before next MPS
```

**Worked example.** MPS in week 3 = 100 units. Customer orders against that MPS receipt: 60 units (committed by existing orders). ATP for week 3 = 100 − 60 = **40 units** the salesperson can sell to a new customer.

🎯 **Exam pattern:** "A customer asks if you can ship 50 units in week 4. ATP for week 4 = 30. What do you do?" → Offer 30 in week 4, push the rest to week 5 (where more ATP exists) — OR coordinate with the master scheduler to expedite/replan.

---

## 🚧 MPS Time Fences

Time fences divide the MPS horizon into zones with different change rules.

| Fence | Position | Who Can Change | Why |
|-------|----------|----------------|-----|
| **Demand Time Fence (DTF)** | Near term, e.g., weeks 1–2 | No changes without senior management OK; forecast is *ignored* — only actual orders count | Material and capacity committed; change is costly |
| **Planning Time Fence (PTF)** | Mid-term, e.g., through cumulative lead time | Master Scheduler can change with approval | Some flexibility, but trade-offs |
| **Beyond PTF** | Long-term | System can replan freely | No commitments yet |

🧠 **Mnemonic:** **DTF < PTF** in *time* (DTF is closer). DTF is "frozen." PTF is "slushy." Beyond PTF is "liquid."

🚨 **Classic exam trap:** Inside the DTF, the forecast is *ignored* — only firm customer orders drive the projected available balance. Many candidates miss this.

---

## 🌳 Bill of Materials (BOM)

A **BOM** lists all components, sub-assemblies, and raw materials needed to make one unit of a parent item, plus the *quantity per parent*.

Example BOM for "Bicycle Model A":

```
Bicycle Model A (level 0)
├── Frame Assembly (1)             [Level 1]
│   ├── Frame Tube Set (1)         [Level 2]
│   └── Welded Joints (4)          [Level 2]
├── Wheel Assembly (2)             [Level 1]
│   ├── Rim (1)                    [Level 2]
│   ├── Spokes (32)                [Level 2]
│   └── Tire (1)                   [Level 2]
├── Drivetrain (1)                 [Level 1]
│   ├── Chain (1)                  [Level 2]
│   ├── Cassette (1)               [Level 2]
│   └── Crank Set (1)              [Level 2]
├── Pedals (2)                     [Level 1]
└── Saddle (1)                     [Level 1]
```

### BOM Levels & Low-Level Coding

Each item gets a **low-level code** equal to the *lowest* level at which it appears anywhere in the BOM structure.

**Why it matters:** the MRP system processes items in low-level-code order. A "frame tube set" appearing at Level 2 in Bike A *and* at Level 3 in Bike B gets coded at Level 3 — so MRP nets requirements from *both* parents before issuing planned orders.

🎯 **Exam pattern:** "Why is low-level coding used in MRP?" → To ensure all dependent demand for an item across multiple parents is fully netted before its planned orders are computed.

---

## ⚙️ The MRP Logic: Gross-to-Net Calculation

🔥 **MEMORIZE this process.** It is the single most-tested calculation on CPIM.

For each component, in low-level-code order, MRP computes:

| Row | What It Is |
|-----|-----------|
| Gross requirements | What's needed (from parents' planned order releases) |
| Scheduled receipts | Orders already placed, en route |
| Projected on hand | Running inventory after each period |
| Net requirements | Gross − on-hand − scheduled receipts |
| Planned order receipts | When the order must arrive |
| Planned order releases | When the order must be released (= receipt − lead time) |

### Worked Example — MRP Calculation

**Item:** Pedal
**Lead time:** 1 week
**Lot size:** lot-for-lot (L4L)
**On-hand at start of week 1:** 500

Parent demand (from Bike A MPS): 1,200 bikes per week × 2 pedals per bike = 2,400 pedals per week.

| Week | 1 | 2 | 3 | 4 |
|------|---|---|---|---|
| Gross requirements | 2,400 | 2,400 | 2,400 | 2,400 |
| Scheduled receipts | 2,000 | 0 | 0 | 0 |
| Projected on hand (start 500) | 100 | -2,300 | -4,700 | -7,100 |
| Net requirements | 0 | 2,300 | 2,400 | 2,400 |
| Planned order receipts | 0 | 2,300 | 2,400 | 2,400 |
| Planned order releases (LT=1) | 2,300 | 2,400 | 2,400 | — |

Reading this:
- Week 1: 500 on-hand + 2,000 receipt = 2,500. Net 2,400 demand. End on-hand = 100.
- Week 2: 100 on-hand, need 2,400. Net = 2,300. Plan an order to *arrive* in week 2; release it in week 1 (LT = 1).
- Week 3: Net 2,400, plan receipt week 3, release week 2.
- And so on.

🎯 **Exam pattern:** Given a parent schedule, BOM, lead time, and starting inventory, compute the planned order release for a component in a specific week. Practice this until you can do it in 90 seconds.

---

## 📦 Lot-Sizing Rules

| Rule | What It Does | Use Case |
|------|-------------|---------|
| **Lot-for-Lot (L4L)** | Order exactly the net requirement each period | Low setup cost, JIT |
| **Economic Order Quantity (EOQ)** | Order EOQ each time (Module 6 formula) | Stable demand, high setup |
| **Period Order Quantity (POQ)** | Order to cover N periods at a time | Trade-off LT/setup vs holding |
| **Fixed Order Quantity (FOQ)** | Always order a fixed Q (e.g., truckload) | Supplier-imposed minimum |
| **Min/Max** | Order up to Max when at Min | Distribution / replenishment |

🎯 **Exam pattern:** "Supplier requires a minimum order of 5,000 units; demand averages 1,200/week with high setup cost." → Use FOQ or POQ, not L4L.

---

## 🔁 MRP Inputs and Outputs

| Inputs | Outputs |
|--------|---------|
| MPS (planned independent demand) | Planned order receipts |
| BOMs | Planned order releases |
| Inventory records (on-hand, allocated, scheduled receipts) | Action messages: release, reschedule in, reschedule out, cancel |
| Lead times | Pegging info (where demand came from) |
| Lot-sizing rules |  |
| Safety stock |  |

**Action messages** are MRP's nudges to humans:
- **Release** — "Release this planned order now."
- **Reschedule in** — "Pull this scheduled receipt earlier."
- **Reschedule out** — "Push this scheduled receipt later."
- **Cancel** — "Cancel this open order."

---

## 🧠 ATP vs CTP

| Concept | Meaning |
|---------|---------|
| **ATP (Available-to-Promise)** | Uncommitted MPS = what we *can* promise on existing schedule |
| **CTP (Capable-to-Promise)** | What we can promise *if* we reschedule capacity and materials |
| **PTP (Profitable-to-Promise)** | What we can promise that is also financially attractive |

CTP is more sophisticated and used in ATO/ETO environments where each customer order may require its own capacity check.

---

## 🚨 Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "MPS and MRP are the same thing" | No — MPS = finished good; MRP = components |
| "MRP is a forecast" | No — MRP is a *calculation* of dependent demand from MPS + BOM |
| "Lead time is constant in MRP" | Standard MRP treats it as fixed; APS/finite scheduling treats it variably |
| "Inside the DTF, forecast still drives PAB" | No — only firm orders count inside the DTF |
| "ATP and CTP are interchangeable" | ATP = current schedule only; CTP = if we replan |
| "Every component needs its own low-level code" | Yes — but the code is the *deepest* level where it appears |
| "MRP guarantees on-time delivery" | Only if data is clean: BOMs accurate, inventory records correct, lead times realistic |

---

## 🎯 Exam Traps Specific to Module 4

1. **Demand Time Fence — forecast is ignored.** Inside DTF, projected available balance uses ONLY firm customer orders, not forecast.
2. **PTF > DTF in time.** Planning Time Fence is *further out* than Demand Time Fence. Many candidates flip this.
3. **MPS unit ≠ MRP unit.** MPS plans in finished-good units (bikes). MRP plans in components (pedals, frames).
4. **"Dependent demand should be forecast."** No — dependent demand is *calculated* from the BOM. Forecasting it is the classic pre-MRP error.
5. **ATP computed wrong.** ATP = MPS receipt minus sum of orders booked *before next MPS receipt*. Not just "MPS minus all orders."
6. **Lot-sizing trade-offs.** L4L minimizes inventory but maximizes setup cost. EOQ does the opposite.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|-----------|
| **MPS** | Plan for finished goods (independent demand) |
| **MRP** | Plan for components (dependent demand) |
| **Independent demand** | Demand from outside the plant |
| **Dependent demand** | Calculated from parent BOM |
| **ATP** | Available-to-Promise (uncommitted MPS) |
| **CTP** | Capable-to-Promise (if we replan) |
| **DTF** | Demand Time Fence (near-term frozen zone) |
| **PTF** | Planning Time Fence (mid-term slushy zone) |
| **BOM** | Bill of Materials |
| **Low-level code** | Deepest level an item appears in any BOM |
| **Gross requirements** | Total need from all parents |
| **Net requirements** | Gross minus on-hand minus scheduled receipts |
| **Planned order receipt** | When the order must arrive |
| **Planned order release** | When the order must be released (receipt − LT) |
| **L4L** | Lot-for-Lot lot-sizing |
| **POQ** | Period Order Quantity |
| **FOQ** | Fixed Order Quantity |
| **Action messages** | MRP nudges: release, reschedule in/out, cancel |
| **Pegging** | Traceability: which parent demand triggered this component's plan |

---

## ✅ Module 4 Summary

You now know:
- 🗓️ MPS plans finished goods; MRP plans components
- 🟢 How to compute ATP and what it means to "promise" a customer
- 🚧 Time fences: DTF (frozen) vs PTF (slushy) — and what each rule means
- 🌳 BOM structure + low-level coding + why MRP needs it
- ⚙️ The MRP gross-to-net calculation with a worked example
- 📦 Lot-sizing rules: L4L, EOQ, POQ, FOQ, Min/Max
- 🧠 ATP vs CTP vs PTP
- 🚨 The four classic traps: forecast-inside-DTF, PTF/DTF order, dependent-demand-as-forecast, ATP math

**Next steps:**
1. 🎥 Watch the videos in `Videos.md` — especially the MRP table walkthrough
2. ✏️ Take `Quiz.md` — has 7 calculation questions; do them on paper
3. 📋 Master `Cheat-Sheet.md`
4. ➡️ Take [Practice Exam 1](../Practice-Exams/Practice-Exam-1.md) after this module
5. ➡️ Move to [Module 5: Capacity Planning](../Module-05-Capacity-Planning/Reading.md)

---

## 📚 Further Reading (Optional)

- 📖 *Manufacturing Planning and Control for Supply Chain Management* — Jacobs et al., Chapters 3-6 (the canonical MPS/MRP source)
- 📖 *Orlicky's Material Requirements Planning* — Plossl & Orlicky (the founding text of MRP)
- 📖 *Master Scheduling: A Practical Guide* — John Proud
- 📖 ASCM Dictionary entries: MPS, MRP, ATP, CTP, time fence, BOM, low-level code, lot-for-lot, pegging
- 📖 *DDMRP — Demand Driven MRP* — Smith & Smith (modern variant — exam awareness only)
