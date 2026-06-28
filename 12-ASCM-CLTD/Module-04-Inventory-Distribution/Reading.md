# Module 4: Inventory & Distribution 📊

> **Why this module matters:** Inventory is *the* lever between cost and service. Hold too much, you bleed working capital. Hold too little, you lose sales. In a multi-DC network, the math gets harder fast, and DRP (Distribution Requirements Planning) is the framework ASCM uses to make sense of it.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - [Module 1](../Module-01-Logistics-Strategy-Network/Reading.md) network design, DRP plans the inventory inside that network
> - [Module 2](../Module-02-Capacity-Demand-Logistics/Reading.md) forecasting and ABC classification
> - [Module 3](../Module-03-Order-Management-Fulfillment/Reading.md) ATP/CTP mechanics
> - Basic statistics: standard deviation, z-scores at common service levels (95% = 1.65, 99% = 2.33)
>
> Cross-course: [CSCP Module 5 (Inventory & Capacity)](../../10-ASCM-CSCP/Module-05-Inventory-Capacity/Reading.md) gives a broader supply-chain view of inventory math. [CPIM Module 4 (MPS/MRP (Material Requirements Planning))](../../11-ASCM-CPIM/Module-04-Master-Production-Scheduling-MRP/Reading.md) goes deeper on MRP (the production cousin of DRP). [CPIM Module 6 (Inventory Management)](../../11-ASCM-CPIM/Module-06-Inventory-Management/Reading.md) develops the single-location inventory math (EOQ (Economic Order Quantity), ROP) you'll see referenced here.

---

## 🍕 A Story: The Bicycle Shop That Solved a National Network

Ali runs distribution for a national bicycle chain. They have a master DC in Chicago and 30 regional DCs across the US. Every store orders weekly. Every regional DC replenishes from Chicago. Every Chicago order eventually hits the factory in Vietnam, 5 weeks of ocean time away.

For years, each location ordered independently. Stockouts in Boston, gluts in Phoenix. The CFO (Chief Financial Officer) asked: "Why are we shipping bikes from Phoenix to Boston twice a week?"

Ali implemented **DRP**. The system started at the *demand point*, each store. Aggregated to the regional DC. Then to the master DC. Then to the factory. With **time-phased planning**: when you need stock at the store on July 15, you need it at the regional DC on July 8 (transit lead time), at the master DC on July 1, and ordered from the factory on May 25.

Six months later: stockouts down 70%, inventory down 25%, and Phoenix → Boston ghost shipments eliminated.

**That's DRP.** Pull demand signals up the network with proper lead-time offsets. This module covers DRP and the inventory math that surrounds it.

---

## 🎯 What is Distribution Requirements Planning (DRP)?

> **Citation.** DRP was formalized in Martin, André J., *Distribution Resource Planning: The Gateway to True Quick Response and Continuous Replenishment* (Oliver Wight, 1990; 3rd ed. John Wiley & Sons, 1995) André Martin is widely credited with extending Joe Orlicky's MRP framework (Orlicky, *Material Requirements Planning*, McGraw-Hill, 1975) into distribution networks. The Bullwhip Effect was first formalized in Lee, Hau L., Padmanabhan, V. & Whang, Seungjin, "Information Distortion in a Supply Chain: The Bullwhip Effect," *Management Science* 43 (April 1997) and Lee et al., "The Bullwhip Effect in Supply Chains," *Sloan Management Review* (Spring 1997). The original demand-amplification phenomenon was identified much earlier in Forrester, Jay W., "Industrial Dynamics A Major Breakthrough for Decision Makers," *Harvard Business Review* (July–August 1958), Forrester's seminal HBR article is still required reading at MIT Sloan.

DRP is a *time-phased* planning method that explodes demand from end-customers up through the distribution network DC by DC, week by week using:

- **Lead times** between echelons
- **Order policies** (lot sizes, min/max)
- **On-hand inventory** at each location
- **Scheduled receipts** in transit

It mirrors MRP, but for *distribution* networks, not BOMs.

### DRP vs MRP

| | MRP | DRP |
|---|-----|-----|
| Drives off | Master Production Schedule | Forecast + customer orders at DCs |
| Explodes via | Bill of Materials (BOM) | Distribution network (DC tiers) |
| Output | Component requirements / POs | DC replenishment / inter-DC transfers |
| Domain | Inside the plant | Outside the plant (network) |
| Period | Daily–weekly | Weekly–monthly |

🚨 **Trap on the exam:** DRP is often confused with MRP. They share *time-phased* mechanics but operate in different domains.

---

## 📋 The DRP Record (You will see this on the exam)

Every DC in DRP has a record like this:

| Week | 1 | 2 | 3 | 4 | 5 | 6 |
|------|---|---|---|---|---|---|
| Gross Requirements | 50 | 50 | 60 | 70 | 80 | 80 |
| Scheduled Receipts | 200 | | | | | |
| Projected On-Hand | 150 | 100 | 40 | -30 | -110 | -190 |
| Net Requirements | | | | 30 | 80 | 80 |
| Planned Order Receipts | | | | 200 | | 200 |
| Planned Order Releases (lead-time = 2 wks) | | 200 | | 200 | | |

**Read the record:**
- Gross requirements = forecasted demand at this DC.
- Scheduled receipts = already-in-transit replenishments.
- Projected on-hand = running balance after each week.
- When projected on-hand goes negative, we need a *planned order receipt*.
- Planned order release is offset earlier by the lead time.

🎯 **Exam tip:** Practice reading these grids. CLTD asks you to fill in a missing cell.

### Time-phased planning logic

```
Demand at store      (Week 5)
  ↓  Outbound transit lead time (e.g., 2 days)
Need at regional DC  (Week 5, slightly earlier)
  ↓  Inter-DC transit lead time (e.g., 5 days)
Need at master DC    (Week 4)
  ↓  Factory production + ocean transit (5–7 weeks)
Order to factory     (Week -2 or earlier)
```

---

## 📦 Multi-Echelon Inventory Optimization (MEIO)

DRP plans each DC independently. **Multi-Echelon** thinks of the entire network as one optimization problem.

| Method | Logic |
|--------|-------|
| **Single-echelon (silo)** | Each DC sets safety stock based on its own demand variability and lead time |
| **Multi-echelon (MEIO)** | Math model that considers cross-echelon coverage; upstream stock can substitute for downstream stock |

MEIO benefits:

- Lower total network inventory (often 10–30% reduction)
- Better service consistency across DCs
- Less "ghost" inter-DC transfers

🎯 **Exam tip:** Single-echelon over-provisions. Multi-echelon optimizes the whole.

---

## ⏱️ Inventory Position & Lead Time

**Inventory Position** is the metric DRP and reorder-point systems use:

```
Inventory Position = On-Hand + On-Order − Backorders
```

Compare *inventory position* (not just on-hand) to reorder point. Otherwise you'll re-order while inbound is in transit.

### Lead time components

| Component | What |
|-----------|------|
| Order processing | Time from order entry to release |
| Manufacturing | Production lead time |
| Inter-DC transit | Master DC → Regional DC |
| Outbound transit | DC → customer |
| Receiving / putaway | At each DC |
| Customs / inspection | International only |

Total lead time = Σ of all these. Variability in any one component drives safety stock.

---

## 🛡️ Safety Stock for Multi-Location Networks

In Module 5 of CSCP we covered single-location safety stock. CLTD layers in multi-location math.

### Single-location safety stock

```
SS = Z × σ × √L
```
where:

- Z = service-level z-score (90% = 1.28, 95% = 1.65, 99% = 2.33)
- σ = standard deviation of demand per period
- L = lead time in periods

### Multi-location: the Square-Root Rule

If you have N stocking locations with the same demand pattern, total network safety stock ≈ √N × single-location SS.

**Example:** 1 DC with SS=1,000 → 4 DCs with similar demand → ≈ √4 × 1,000 = **2,000 total** (not 4,000). Centralization saves inventory; decentralization costs inventory.

🎯 **Exam tip:** "Square-root rule" is the testable shortcut. The actual math is more nuanced (correlation between DCs matters), but the rule of thumb is enough.

### Service level vs safety stock, exponential cost

| Service Level | Z-score | Safety Stock (relative) |
|---------------|---------|--------------------------|
| 90% | 1.28 | 1.00× |
| 95% | 1.65 | 1.29× |
| 98% | 2.05 | 1.60× |
| 99% | 2.33 | 1.82× |
| 99.9% | 3.09 | 2.42× |

Going from 95% to 99.9% nearly doubles safety stock. 🚨 **Trap:** Don't promise service levels customers don't really need.

---

## 🔄 Push vs Pull Replenishment

| Push | Pull |
|------|------|
| Central planning decides who gets what | Each downstream node pulls based on actual consumption |
| Best for promotions, new launches, allocation of scarcity | Best for stable, predictable demand |
| Risk: forces inventory onto nodes that don't need it | Risk: bullwhip from local over-reaction |

**Examples:**
- Push: Movie studio pre-positions DVDs at retailers before release (you can't pull what doesn't exist yet)
- Pull: Walmart store reorders detergent based on POS sell-through

### Bullwhip Effect

When demand signals are amplified up the chain, you get the **bullwhip effect**:

- 5% demand variance at the retail level can become 30% at the manufacturer
- Causes: batched orders, promotions, price shifts, hedging
- Cure: shared POS data (CPFR (Collaborative Planning, Forecasting, and Replenishment)), smaller batches, daily replenishment

🎯 **Exam tip:** Bullwhip is *amplification of demand variability* upstream. Cure is *information sharing*.

---

## 🪄 Postponement (Delayed Differentiation)

> **Citation.** Postponement as a strategic concept originates in Alderson, Wroe, *Marketing Behavior and Executive Action* (Richard D. Irwin, 1957) and was formalized in Bucklin, Louis P., "Postponement, Speculation and the Structure of Distribution Channels," *Journal of Marketing Research* 2 (Feb 1965). The classic HP printer postponement case is Lee, Hau L., Billington, Corey & Carter, Brent, "Hewlett-Packard Gains Control of Inventory and Service through Design for Localization," *Interfaces* 23 (July–August 1993). The Benetton dyed-sweater case is documented in Heskett, James L. & Signorelli, Sergio, "Benetton (A)," HBS Case 9-685-014 (Harvard Business School, 1984; rev. 1989).

A high-yield exam topic.

**Definition:** Delay the final configuration of a product until customer demand is known.

| Postponement type | Example |
|-------------------|---------|
| **Form postponement** | HP printers shipped to Europe in generic box; power cord + manual added regionally |
| **Place postponement** | Hold inventory at a central hub; deploy only on order |
| **Time postponement** | Defer production until the order arrives (build-to-order) |
| **Pull postponement** | Make finished goods only when consumed at retail |
| **Logistical postponement** | Mix combinations of standard parts at a postponement center |
| **Manufacturing postponement** | Final assembly held until the customer order |

Benefits:

- Forecast at the *aggregate* level (less error)
- Lower total safety stock
- Faster response to actual demand mix

Costs:

- Slower per-order fulfillment
- Need flexible, quick assembly capability at the postponement point

🎯 **Classic exam case:** Benetton, knit sweaters in undyed yarn, dye to actual color demand. Reduces obsolescence dramatically.

---

## 📊 Inventory Classification

Beyond ABC (we covered in Module 2), CLTD tests:

### ABC analysis (Pareto)
- A: ~20% of SKUs, ~80% of value
- B: ~30% of SKUs, ~15% of value
- C: ~50% of SKUs, ~5% of value

### XYZ (variability)
- X: stable demand
- Y: moderately variable
- Z: highly variable

### Combined ABC-XYZ matrix

| | A | B | C |
|---|---|---|---|
| X | Tight management, JIT (Just-In-Time) | Standard cycle | Min reorder |
| Y | Forecasting + safety stock | Standard | Min reorder |
| Z | Make-to-order or kit | Buffer or kit | Discontinue/drop ship |

### FSN (Fast / Slow / Non-moving)
- F: high movement
- S: slow movement
- N: no movement in 90+ days → candidate for discontinuation or write-off

### VED (Vital / Essential / Desirable), typically for spares
- V: vital (downtime cost massive)
- E: essential
- D: desirable

🎯 **Exam tip:** Inventory classification drives policy. A-X items need JIT-style attention; C-Z items may not deserve any stock.

---

## 🔁 Cycle Counting in Distribution

In multi-DC networks, full annual physical counts disrupt operations. **Cycle counting** rotates daily/weekly partial counts.

| Method | How |
|--------|-----|
| **ABC-based cycle count** | A-items counted monthly, B quarterly, C annually |
| **Random sample** | Random bins each day, statistical confidence |
| **Geographic** | Count one zone per day |
| **Opportunity-based** | Count when bin reaches zero (free verification) |
| **Control group** | Repeated count on the same items to test process |

KPI (Key Performance Indicator): **Inventory Record Accuracy (IRA)** = bins within tolerance / total bins counted. Target 95–99% for high-quality DCs.

---

## 📅 Reorder Policies

| Policy | Logic |
|--------|-------|
| **Reorder Point (ROP)** | Trigger when inventory ≤ ROP; order fixed Q |
| **Min/Max** | Trigger when ≤ Min; order up to Max |
| **Periodic Review (P-system)** | Review every T periods; order up to target level |
| **Continuous Review (Q-system)** | Continuously monitor; reorder fixed Q when ≤ ROP |
| **Base stock** | Reorder each unit consumed (1-for-1) |

**ROP formula:**
```
ROP = (Demand during lead time) + Safety Stock
    = (d × L) + (Z × σ × √L)
```

---

## 📜 Case Study, Walmart Hi-Vis Tracking and the Third-Party Returns Network (2022–2024)

**Situation.** By 2022, Walmart faced a mounting reverse-logistics cost problem: customer returns to Walmart and Walmart.com had grown to ~$25B in retail value annually (≈4% of total revenue), with the cost of processing each return averaging ~$15–$25 depending on category. Customer returns are the *inverse* of Module 4's forward DRP: instead of pushing inventory from DC to store, returns pull damaged/used inventory from store back through DCs to disposition. The inventory-position math gets ugly fast: a returned blender from Tampa is technically "on-hand" somewhere but in what condition, in which DC, sellable as what disposition? Walmart's accounting was, internally, calling this category "shrink and unknown loss" a ~$3B annual mystery.

**Decision.** Walmart announced its "Hi-Vis" (high-visibility) inventory tracking initiative in 2022, the goal: real-time visibility of every unit in the network including reverse flows. Key implementation steps through 2024:

- **RFID (Radio Frequency Identification) at item level** for apparel, home, electronics (mandate for suppliers extended in 2022–2023; previously Walmart had been the slow adopter relative to Macy's and Lululemon).
- **Returns disposition mobile apps** in stores, associates scan returns and the system instantly recommends a disposition: restock-to-shelf, ship-to-return-center, or destroy.
- **Third-party reverse logistics partner network** (2024), Walmart partnered with **goTRG** (formerly The Recon Group) and **Optoro** for third-party returns processing of items that don't go back to Walmart shelves. These partners refurbish, repackage, or liquidate at higher recovery values than Walmart could in-house.
- **Returns-via-FedEx integration**, Walmart became one of the largest users of FedEx's "Return Anywhere" service (drop-off at FedEx Office without box or label).
- **Walmart Marketplace returns offload**, third-party Marketplace sellers handle their own returns via Walmart's Returns Service Provider (RSP) program, with Walmart taking 4–10% transaction fees and not handling the physical reverse flow.

**Outcome.** By Q4 2024, Walmart reported reverse-logistics cost per unit had dropped ~22% from 2022 baseline. Recovery value (% of original retail value captured through disposition) rose from ~38% in 2022 to ~46% in 2024. Critically, *inventory accuracy* (IRA) at the store level rose from ~93% (2022) to ~97% (2024), Hi-Vis essentially eliminated the "where is this returned unit?" mystery. Walmart's overall inventory turn improved 0.4 turns/yr (huge at Walmart scale), and the company began *selling* its returns disposition platform to other retailers in late 2024 (a 4PL (Fourth-Party Logistics)-style move).

**Lesson for the exam / for practitioners.** This case ties together three Module 4 concepts:

1. **Inventory position math fails without accurate data.** If a returned unit is mis-tracked, inventory position = OH + OO − BO is wrong, which means ROP fires at wrong times, which means safety stock multiplies. Hi-Vis is, technically, an *IRA project* feeding the inventory math.
2. **Multi-echelon (MEIO) only works with visibility.** A multi-echelon optimizer needs accurate inventory at every node. Pre-Hi-Vis, MEIO would have over-provisioned because ~7% of units were mis-located.
3. **Returns are a reverse-DRP problem.** The same time-phased planning logic applies in reverse, and many companies don't connect the dots.

The CLTD exam tests this in scenarios like: "A retailer with poor inventory accuracy at the store level wants to implement MEIO. What is the first step?" Answer: *fix IRA first*. MEIO cannot fix a data problem.

**Discussion (Socratic).**
- Q1: Walmart's $25B annual returns is roughly the *entire revenue* of a Fortune-200 company. From a strategic logistics perspective, is the right move to invest in reducing returns (lower return rate) or in optimizing the reverse-logistics network (higher recovery on the same return rate)? Frame the tradeoff.
- Q2: Walmart's deal with goTRG and Optoro effectively outsources part of its reverse-logistics value chain, a "4PL for returns." Is this consistent with Walmart's historical "in-source everything that matters" stance, or a strategic shift? Argue what changed.
- Q3: RFID adoption took Walmart 20+ years to mandate at scale (the first announcement was 2003). What does that lag tell you about how strategy and technology actually diffuse in supply chains?

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "DRP and MRP are the same" | DRP for distribution; MRP for BOM/production |
| "Central inventory is always cheaper" | Central reduces inventory but raises outbound transport |
| "Higher service is better" | Past 95–98%, cost rises faster than revenue gained |
| "Postponement adds complexity for no benefit" | It cuts forecast error and inventory dramatically |
| "Cycle counting and annual count are the same" | Cycle counting is *continuous*; annual count is a *disruption* |

---

## 🚨 Exam Traps

🚨 **Trap 1:** Confusing inventory **position** (on-hand + on-order − backorders) with on-hand. Reorder based on position.

🚨 **Trap 2:** Forgetting the **square-root rule** for multi-location safety stock.

🚨 **Trap 3:** Confusing **bullwhip** (variability amplification) with **stockout** (shortage). Distinct concepts.

🚨 **Trap 4:** Push vs Pull is *not* always one-or-the-other. Hybrid push-pull boundaries exist (e.g., push to DC, pull from DC to store).

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **DRP** | Distribution Requirements Planning, time-phased echelon replenishment |
| **Inventory Position** | On-hand + on-order − backorders |
| **Square-Root Rule** | Multi-location SS ≈ √N × single-loc SS |
| **MEIO** | Multi-Echelon Inventory Optimization |
| **Bullwhip Effect** | Upstream amplification of demand variability |
| **Postponement** | Defer final config to last possible step |
| **ROP** | Reorder Point = (d × L) + SS |
| **ABC / XYZ / FSN / VED** | SKU (Stock Keeping Unit) classification systems |
| **IRA** | Inventory Record Accuracy |
| **Cycle Counting** | Continuous rotating partial counts |
| **CPFR** | Collaborative Planning, Forecasting, and Replenishment |

---

## ✅ Module 4 Summary

You now know:

- 📋 The DRP record and how to read/fill one
- ⏱️ Inventory position vs on-hand
- 🛡️ Safety stock math, square-root rule, service-level cost curve
- 🔄 Push vs pull, bullwhip cause and cure
- 🪄 Postponement types and benefits
- 📊 ABC/XYZ/FSN/VED classification
- 🔁 Cycle counting methods and IRA target
- 📅 Reorder policies (ROP, Min/Max, P-system, Q-system, base stock)

**Next steps:**
1. 🎥 [Videos.md](./Videos.md)
2. ✏️ [Quiz.md](./Quiz.md)
3. 📋 [Cheat-Sheet.md](./Cheat-Sheet.md)
4. 🧪 After Module 4 → [Practice Exam 1](../Practice-Exams/Practice-Exam-1.md)
5. ➡️ Then [Module 5: Warehouse Operations](../Module-05-Warehouse-Operations/Reading.md)

---

## 🤔 Discussion (Socratic prompts)

1. **MEIO ROI (Return on Investment) proof.** A consulting firm pitches MEIO for $1.4M implementation cost, promising 18% network-inventory reduction. Your CFO wants proof before committing. What data would you gather over 6 months to validate (or refute) the consultant's projection?

2. **Centralization vs decentralization debate.** A regional building-materials distributor is considering centralizing inventory at 3 super-DCs vs the current 11 regional DCs. The square-root rule predicts ~40% safety-stock reduction. But shipping distances grow, so transport costs rise. Build the framework for the decision, what *non-cost* factors matter most?

3. **Postponement at Apple.** Apple iPhones are assembled in different colors and storage sizes at the factory in China (no postponement). Should they postpone country-specific configurations regionally? Frame the trade-off, what does the math say, and what about Apple's brand strategy?

4. **The 99.9% service-level moral question.** A medical device distributor's main customer (hospital chain) demands 99.9% service level on emergency-room SKUs. Safety stock is ~2.4× a 95% level. The CFO calls this "ridiculous." How would you reframe the conversation to satisfy both, what alternative solutions exist beyond just raising safety stock?

5. **DRP vs Distributed-AI replenishment.** Several modern systems (Relex, ToolsGroup, o9) replace DRP-style time-phased planning with continuous ML-based replenishment that updates by SKU/store every few hours. Is DRP becoming obsolete? Argue both sides.

> **Where this leads.**
> - Inside this course: Module 5 implements the inventory decisions inside the four walls of the warehouse; Module 6 covers the transport that DRP triggers; Module 8 covers returns flow that *reverses* DRP.
> - Cross-course: [CSCP Module 5 (Inventory & Capacity)](../../10-ASCM-CSCP/Module-05-Inventory-Capacity/Reading.md); [CPIM Module 6 (Inventory Management)](../../11-ASCM-CPIM/Module-06-Inventory-Management/Reading.md).
> - Practice: Practice Exam 1 has ~15 questions from this module; Final Mock Exam has another 15.

---

## 📚 Further Reading (Optional)

- 📖 *Distribution Requirements Planning* by André Martin, the original DRP textbook
- 📖 *Inventory Management Explained* by David Piasecki
- 🔗 [CSCMP CPFR Guidelines](https://cscmp.org/), collaborative replenishment
- 🔗 [ASCM DRP overview](https://www.ascm.org/)
- 🔗 [APICS Dictionary](https://www.ascm.org/), definitions for ROP, ABC, MEIO
