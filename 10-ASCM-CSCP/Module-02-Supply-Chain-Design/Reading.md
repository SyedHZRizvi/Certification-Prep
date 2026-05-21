# Module 2: Supply Chain Design 🏗️

> **Why this module matters:** Domain 2 of the CSCP is "Supply Chain Design" — about 20% of your exam. Strategy in Module 1 said *what* you compete on; this module says *how the network is shaped to deliver it*. Get this wrong, and every operational decision later compounds the mistake.

---

## 🏭 A Story: The Pretzel Factory That Bought a Wheat Field

Sami runs **Knot Right Pretzels**, a 14-year-old snack company that supplies grocery chains in 9 states. In 2017 a competitor opened up across the river with prices 12% lower. Panic. Sami's first instinct was to negotiate harder with his flour supplier. Margin barely moved.

His ops VP walked in with a different question: *"What if we owned the flour?"* They studied it for six months. The wheat fields were $3.2M, the milling line $1.8M, plus working capital. **Make-or-buy** analysis said yes — vertical integration upstream would pay back in 4.2 years and lock in supply. They bought the field.

A year later a different problem hit: customers in Texas were getting pretzels that arrived 4 days slower than the Midwest stores, with twice the breakage. The fix wasn't a price cut. It was **network design** — adding a regional DC in Dallas. Modeled it, simulated lane costs, ran a center-of-gravity calculation on store locations. The Dallas DC saved $1.1M/year and cut Texas breakage by 60%.

Same product. Two completely different design decisions — *vertical integration* and *network design*. Both belong in this module. Both are tested.

---

## 🧠 Why Network Design Is a Strategic Decision

Every supply chain has structural choices that lock in for years:

- **How many facilities? Where?**
- **What does each one do?** (factory, DC, crossdock, retail, returns center)
- **Make-or-buy** each step?
- **How many suppliers?** Single, dual, multiple? Local or global?
- **How segmented** is the chain? Same flow for everything, or different lanes for different products?

A factory built in Vietnam this year is still there in 2034. Switching costs are enormous. This is why design decisions earn so much exam weight.

---

## 🌐 Configurations & Logistics Models

| Configuration | Description | Strength | Weakness |
|---------------|-------------|----------|----------|
| **Centralized** | One big DC serving a region | Inventory pooling, scale | Long shipments to far customers |
| **Decentralized** | Many small regional DCs | Faster customer service | More inventory, more overhead |
| **Hub-and-spoke** | Central hub connects regional spokes | Efficient consolidation | Hub bottleneck risk |
| **Direct ship / drop-ship** | Factory → customer, no DC | No inventory at retailer | Higher freight cost per unit |
| **Cross-docking** | Receive + immediately ship, no storage | Speed, low inventory | Tight timing coordination |
| **Milk run** | One truck visits multiple suppliers/customers in a loop | Fills empty miles | Routing complexity |

```
   Centralized                 Decentralized              Hub-and-spoke
   ┌──┐                        ┌──┐  ┌──┐                  ┌──┐
   │DC│ → → → customers        │DC│  │DC│                  │DC│ ◄── hub
   └──┘                        └──┘  └──┘                  ┌┴┐┌┴┐┌┴┐
                                                           │S││S││S│ spokes
                                                           └─┘└─┘└─┘
```

### Inventory pooling — the math hint

When you consolidate inventory across N locations, safety stock scales with **√N** rather than N (because demand variance pools). Cut from 10 DCs to 5 and safety stock drops by √2 ≈ 30% even though throughput is the same.

🎯 **Exam tip:** "Square-root law of inventory" — fewer locations means dramatically less safety stock at the cost of longer lanes. Trade-off question.

---

## 🌎 Facility Location Decisions

Choosing where to put a facility involves three layers:

### 1. Strategic factors (long-term, hard to reverse)

| Factor | Example consideration |
|--------|------------------------|
| Market proximity | Close to demand → fast delivery |
| Labor cost & skill | Vietnam vs Germany |
| Infrastructure | Ports, rail, highway, power, broadband |
| Taxes & incentives | Free trade zones, state grants |
| Currency stability | FX risk, hyperinflation countries |
| Political risk | Sanctions, trade tensions |
| Cluster effects | Auto cluster around Detroit/Stuttgart/Yokohama |
| Sustainability | Renewable grid, water access |

### 2. Tactical methods (quantitative)

| Method | What It Does | When To Use |
|--------|--------------|-------------|
| **Factor-rating** | Weight & score each candidate site | Multi-criteria, qualitative-heavy |
| **Load-distance / center-of-gravity** | Find geometric center minimizing weighted distance | Single-DC, demand-weighted |
| **Break-even analysis** | Compare fixed + variable costs across sites | Manufacturing facility cost driven |
| **Transportation LP** | Linear program to minimize lane costs | Multi-DC network |
| **Network optimization software** | Coupa LLamasoft, AIMMS, etc. | Real-world large networks |

### Center-of-gravity formula (you may see this on the exam)

```
   X = Σ(dᵢ · xᵢ) / Σ(dᵢ)
   Y = Σ(dᵢ · yᵢ) / Σ(dᵢ)
```

where `dᵢ` = demand at point i, `(xᵢ, yᵢ)` = its coordinates. Result: optimal X,Y of a single new facility minimizing weighted distance.

> 🚨 **Trap on the exam:** Center-of-gravity assumes a *single* facility, *straight-line* distances, and *equal* freight rates per mile per pound. Real life uses transport LP instead. The CSCP will phrase questions to favor the right method for the right situation.

---

## 🔨 The Make-or-Buy Decision

The cornerstone strategic question. The exam will give you a scenario and ask which way to lean.

### Total Cost of Ownership comparison

| Cost Type | Make | Buy |
|-----------|------|-----|
| Capital investment | Plant, equipment | None upfront |
| Direct labor | In-house | Embedded in price |
| Overhead | Allocated to product | None |
| Material | Negotiated | Embedded in price |
| Coordination | Internal | Procurement + management |
| Risk | Operational, capacity | Supplier, quality, geopolitical |
| Knowledge / IP | Retained | Risk of leakage |
| Flexibility | Bound to your capacity | Switch suppliers |
| Volume sensitivity | High fixed cost | Variable cost scales |

### When to MAKE (vertically integrate)
- The activity is **core competency** or differentiating
- IP must be protected
- Quality must be precisely controlled
- Adequate scale and capital available
- Markets for the input are uncompetitive or unreliable

### When to BUY (outsource)
- The activity is **non-core / commodity**
- Suppliers have superior scale or expertise
- Demand is variable and you want flexibility
- Capital is constrained
- Speed-to-market matters more than control

🧠 **Memory hook:** Core + critical → make. Commodity + flexible → buy.

---

## 🪜 Vertical Integration

| Direction | Definition | Example |
|-----------|------------|---------|
| **Backward / upstream** | Acquiring or operating supplier activities | Sami buying the wheat field; Tesla operating lithium mines |
| **Forward / downstream** | Acquiring or operating customer activities | Apple opening retail stores; Nike DTC |
| **Horizontal** | Acquiring a competitor at the same stage | Marriott buying Starwood |

**Trade-off:** integration captures more margin but reduces flexibility and ties up capital. Modern firms (Nike, Apple) selectively integrate where it's strategic.

---

## 📦 Outsourcing vs. Offshoring vs. Nearshoring vs. Reshoring

The exam frequently bundles these as a confused multiple-choice. Memorize:

| Term | Move What? | Move Where? |
|------|-----------|-------------|
| **Outsourcing** | Activity to an external firm | Could be domestic or foreign |
| **Offshoring** | Activity to a foreign country | May be in-house or outsourced |
| **Nearshoring** | Activity from far-shore back to a nearer country | E.g. China → Mexico for US market |
| **Reshoring** | Activity back to the home country | Mexico → US, China → US |
| **Insourcing** | Bringing an outsourced activity back in-house | Typically reshoring + insourcing |

🎯 **Exam tip:** Offshoring and outsourcing are independent decisions. You can outsource without offshoring (US-to-US contractor), or offshore without outsourcing (build your own factory abroad).

---

## 🛒 Supplier Base Decisions: How Many? How Close?

| Strategy | Pros | Cons |
|----------|------|------|
| **Single-source** | Deep relationship, volume leverage, simpler | One disruption = total stoppage |
| **Dual-source** | Backup capacity, competitive tension | Coordination overhead |
| **Multi-source** | Maximum resilience, price competition | High admin cost, less leverage |
| **Sole source** (no choice) | N/A — you're stuck | Highest risk |

> 🚨 **Trap on the exam:** "Single source" and "sole source" are NOT the same. Single source = you *chose* one supplier from many available. Sole source = only one exists in the market.

---

## 🎯 Supplier / Customer Segmentation

Not all suppliers — or customers — deserve the same treatment.

### Pareto / ABC for customers (and suppliers)

| Class | Volume Share | Treatment |
|-------|-------------:|-----------|
| A | ~80% of revenue or spend | Strategic relationship, custom service |
| B | ~15% | Standard SLAs, scheduled reviews |
| C | ~5% | Self-service, transactional |

### Kraljic supplier matrix (preview — covered deeply in Module 6)

|                              | Low supply risk | High supply risk |
|------------------------------|-----------------|-------------------|
| **Low profit impact**        | Routine         | Bottleneck        |
| **High profit impact**       | Leverage        | Strategic         |

The Kraljic matrix is THE most-tested supplier framework. Strategic + bottleneck items justify single deep relationships; routine + leverage items work with multi-source competitive bidding.

---

## ⛓️ Network Layers in a Real SC

```
   Tier-2 suppliers → Tier-1 suppliers → Manufacturer → DCs → Retailers → Customers
                                                                                 ↑
                                                          Reverse channel (returns)
```

The exam expects you to think beyond Tier-1. Apple manages Tier-3 cobalt mines because that's where modern slavery and ESG risk lives. **Supply chain visibility** = the ability to see through tiers.

---

## 🌀 Service Supply Chains vs. Goods Supply Chains

The CSCP increasingly tests **service SCM**. Differences:

| Dimension | Goods SC | Service SC |
|-----------|----------|------------|
| Tangibility | Physical product | Mostly intangible |
| Inventory | Stored | Cannot be stored (capacity-based) |
| Customer contact | Low (at retail) | High (during service delivery) |
| Quality measurement | Specifications | Perception, SLAs |
| Examples | Manufacturing, retail | Healthcare, consulting, banking, hospitality |

Service SC design focuses on **capacity management**, **demand smoothing**, and **service quality** (SERVQUAL: tangibles, reliability, responsiveness, assurance, empathy).

---

## 💰 Network Design Trade-offs (the classic curve)

```
Cost
  ▲
  │      Total cost
  │    ╱
  │   ╱  Inventory + facilities
  │  ╱_____
  │ ╱      ╲___ Transport
  │╱           ╲___
  └──────────────────► Number of facilities
  Few                                  Many
```

- More facilities → ↑ inventory, ↑ facility cost, ↓ outbound transport
- Fewer facilities → ↑ outbound transport, ↓ inventory (pooling), ↓ facility cost
- Sweet spot is where total cost bottoms out

🎯 **Exam tip:** This trade-off curve appears in classic exam questions. Number of DCs is rarely "as many as possible."

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Make is always cheaper long-term" | Only if you have core competency, scale, and capital |
| "Single source is risky" | True only if no backup — single-source with proven supplier can outperform multi-source |
| "More DCs = better service" | Up to a point; beyond it, inventory dominates and cost climbs |
| "Vertical integration = full control" | Also = full capital lock-up, exposure to demand shocks |
| "Outsourcing = offshoring" | Not the same; either can happen without the other |
| "Reshoring means lower cost" | Often higher cost but better resilience and cycle time |

---

## 🚨 Exam Traps

1. **Single source vs sole source** — single = chosen; sole = only option.
2. **Center-of-gravity assumptions** — straight-line distance, uniform rate, single facility.
3. **Outsourcing core competency** — usually wrong answer; you'd keep core, outsource non-core.
4. **"Add more DCs to improve service"** — true up to the trade-off curve sweet spot, false beyond.
5. **Vertical integration as cure-all** — increases asset intensity and reduces agility.
6. **Service SC treated like goods SC** — services can't be inventoried; capacity is the buffer.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Network design** | The strategic configuration of facilities, lanes, and flows |
| **Centralized vs decentralized** | Few vs many DCs / facilities |
| **Cross-docking** | Receive + ship same day, no storage |
| **Center-of-gravity** | Weighted-coordinate method for single-facility location |
| **Factor-rating** | Multi-criteria scoring method for site selection |
| **Make-or-buy** | Decision to produce internally or purchase |
| **Vertical integration** | Owning upstream or downstream activities |
| **Outsourcing** | Using an external firm for an activity |
| **Offshoring** | Moving activity to a foreign country |
| **Nearshoring / Reshoring** | Moving back to a closer / home country |
| **Single source** | Chosen one of many possible suppliers |
| **Sole source** | Only one supplier exists in the market |
| **Square-root law** | Safety stock pools as √N when consolidating locations |
| **Kraljic matrix** | Supplier portfolio framework (risk × impact) |
| **Service SC** | Supply chain for intangible offerings; capacity-managed |

---

## ✅ Module 2 Summary

You now know:
- 🏭 How configurations (centralized, decentralized, hub-spoke, crossdock) trade off cost and service
- 🌎 Facility-location methods (factor-rating, center-of-gravity, break-even, LP)
- 🔨 The make-or-buy decision and total cost of ownership logic
- 🪜 Vertical integration (backward, forward, horizontal) and its trade-offs
- 📦 Outsourcing vs offshoring vs nearshoring vs reshoring (don't confuse them!)
- 🛒 Supplier base decisions: single, dual, multi, sole source
- 🎯 Customer + supplier segmentation (ABC, Kraljic preview)
- 💰 The total-cost trade-off curve with respect to facility count

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md)
2. ✏️ Take [Quiz.md](./Quiz.md)
3. 📋 Review [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ Move to [Module 3: Demand & Forecasting](../Module-03-Demand-Forecasting/Reading.md)

---

## 📚 Further Reading (Optional)

- 📖 Chopra & Meindl, *Supply Chain Management: Strategy, Planning, and Operation* — chapters 4–6
- 📖 Kraljic, *"Purchasing Must Become Supply Management"* — HBR 1983 (foundational)
- 📖 ASCM CSCP Learning System — Module 2 vocabulary mirrors APICS dictionary verbatim
- 📖 Simchi-Levi, *Operations Rules* — network design case studies
- 📖 "The Box" by Marc Levinson — fascinating history of containerization and how it reshaped network design
