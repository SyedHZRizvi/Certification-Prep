# ✏️ Module 1 Quiz: Logistics Strategy & Network Design

> **Instructions:** Answer all 25 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 20/25 minimum.
> Each question is tagged with its **Bloom's taxonomy level** so you can self-diagnose: are you weak on *recall* (definitions), *analyze* (compare/contrast), or *apply/create* (design scenarios)?

---

## Questions

### Q1. A retailer with one DC in Memphis is considering adding three regional DCs. As DCs are added, which cost MOST clearly rises? *(Apply)*
A. Outbound transportation cost
B. Inventory carrying cost
C. Customer service-level penalty
D. Stockout cost

---

### Q2. Center-of-gravity siting weights candidate locations by: *(Remember)*
A. Labor cost
B. Demand volume
C. Real-estate price
D. Road quality

---

### Q3. A logistics consultant proposes a "greenfield" analysis. This means: *(Understand)*
A. Using existing facilities only
B. A clean-slate, math-optimal site assuming no constraints
C. A site in an agricultural zone
D. A LEED-certified facility

---

### Q4. Which network type holds inventory for the LEAST time? *(Understand)*
A. Distribution center
B. Plant warehouse
C. Cross-dock
D. Forward stocking location

---

### Q5. A 4PL is BEST described as: *(Understand)*
A. An asset-based trucking carrier
B. A warehouse-only outsourced provider
C. A lead logistics provider that orchestrates other LSPs, typically asset-light
D. An e-commerce platform with warehouses

---

### Q6. Hub-and-spoke networks are PREFERRED when: *(Apply)*
A. Customers demand fastest possible delivery
B. Shipments are large, direct, and predictable
C. You need to consolidate many small shipments
D. There is only one origin and one destination

---

### Q7. A retailer ships from one DC in Seattle to all 50 US states. Customers in Florida complain about 5-day transit. The MOST LIKELY strategic fix is: *(Apply)*
A. Buy faster trucks
B. Add regional DCs closer to demand clusters
C. Switch carriers
D. Add safety stock in Seattle

---

### Q8. Logistics strategy should be aligned PRIMARILY with: *(Understand)*
A. The CFO's quarterly cost targets
B. The corporate business strategy and brand promise
C. The IT roadmap
D. Industry benchmarks

---

### Q9. Using the center-of-gravity method, if demand at point A is 4,000 units at coordinate (10,20) and point B is 1,000 units at (50,60), the centroid X is closest to: *(Apply)*
A. 18
B. 22
C. 30
D. 40

---

### Q10. A facility that defers customs duty until goods leave is called a(n): *(Remember)*
A. Distribution center
B. Cross-dock
C. Free Trade Zone (FTZ)
D. Plant warehouse

---

### Q11. Which is a TACTICAL, not strategic, logistics decision? *(Analyze)*
A. Number and location of DCs
B. Choice of 3PL vs in-house warehouse
C. Today's dispatch schedule for outbound trucks
D. Make-or-buy of fleet over 5 years

---

### Q12. The "square-root rule" tells us: *(Understand)*
A. Inventory roughly scales with the square root of the number of stocking locations — so doubling DCs raises total safety stock by ~41%
B. Transportation distance scales with the square root of demand
C. Warehouse rent scales with square root of square footage
D. EOQ scales with the square root of holding cost

---

### Q13. A 3PL differs from a 4PL primarily in that the 3PL: *(Understand)*
A. Holds physical assets (warehouses, trucks) and operates them
B. Only handles international freight
C. Is regulated, while 4PLs are not
D. Always costs more

---

### Q14. Customer segmentation in logistics MOST commonly groups by: *(Remember)*
A. Alphabetical order
B. Velocity, value tier, geography, or channel
C. Time of order placement
D. Payment method

---

### Q15. A company shifts production from China to Mexico to be closer to the US market. This is called: *(Remember)*
A. Reshoring
B. Offshoring
C. Nearshoring
D. Friendshoring

---

### Q16. Which factor would shift a center-of-gravity result MOST significantly? *(Analyze)*
A. Labor cost differences across candidate sites
B. The number of holidays in the year
C. The carrier's logo color
D. The brand of WMS software

---

### Q17. The "total logistics cost" includes ALL of the following EXCEPT: *(Analyze)*
A. Transportation
B. Warehouse operations
C. Inventory carrying cost
D. Cost of capital for the manufacturing plant
E. Customer service loss

---

### Q18. Walmart famously uses cross-docking to: *(Apply)*
A. Hold more safety stock
B. Eliminate storage time and accelerate replenishment
C. Reduce employee headcount
D. Avoid using DCs entirely

---

### Q19. A pharma firm needs cold-chain handling for a single SKU shipped from one plant to one hospital chain. Best network model: *(Apply)*
A. Hub-and-spoke
B. Multi-echelon
C. Direct shipment
D. Cross-dock

---

### Q20. A logistics strategy is considered STRATEGIC when: *(Understand)*
A. It is decided this week
B. It is long-term, capital-intensive, hard to reverse
C. It changes daily
D. It only involves the warehouse team

---

### Q21. A coffee company with one Seattle DC pays $14 to air-ship to Atlanta. The CFO asks why outbound costs are high. After Maersk-style integrator analysis, the BEST strategic answer is: *(Evaluate)*
A. "Switch to a cheaper air carrier"
B. "Add an Eastern DC so most outbound is ground freight"
C. "Negotiate fuel surcharges"
D. "Reduce shipment sizes"

---

### Q22. Adding DCs reduces outbound transportation but INCREASES which two costs? *(Analyze)*
A. Customer satisfaction and revenue
B. Inventory carrying cost and facility cost
C. Tariffs and duties
D. Software licensing and HR cost

---

### Q23. An automotive supplier locates a small parts depot 3 miles from the OEM assembly plant. This depot is BEST described as a: *(Apply)*
A. Forward stocking location
B. Bonded warehouse
C. Cross-dock
D. Hub

---

### Q24. The MOST appropriate use of center-of-gravity is: *(Evaluate)*
A. As the final location decision
B. As an initial baseline that is refined with factor-rating and MILP
C. To estimate freight rates
D. To pick warehouse software

---

### Q25. A new Director of Logistics is asked by the board to propose a "future-state" network design for a $1.2B specialty-foods distributor. Propose the FIRST three frameworks she should apply, in order. *(Create)*
A. Carrier rate auction → Forecast accuracy review → KPI dashboard
B. Business-strategy alignment review → Center-of-gravity baseline → MILP refinement with factor-rating
C. WMS upgrade → Driver hiring plan → 3PL RFP
D. Hub-and-spoke design → Cross-dock specification → Returns center build

---

## 🎯 Answers + Explanations

### Q1: **B. Inventory carrying cost**
The square-root rule: safety stock scales with √(N). Outbound transport actually *falls* with more DCs. Service level *improves*. Inventory carrying is the biggest cost that rises with more nodes.

### Q2: **B. Demand volume**
Center-of-gravity weights coordinates by demand (or shipment volume). Labor, rent, road quality are added in *factor-rating*, not COG.

### Q3: **B. Clean-slate, math-optimal site**
Greenfield assumes no existing constraints. Brownfield uses existing facilities. Don't confuse with environmental usage.

### Q4: **C. Cross-dock**
A cross-dock deliberately holds inventory for hours, not days. The whole point is throughput, not storage.

### Q5: **C. Lead logistics provider, orchestrates other LSPs**
4PL = orchestrator, typically asset-light. 3PL operates physical assets.

### Q6: **C. Consolidate many small shipments**
Hub-and-spoke aggregates LTL/parcel volume to fill outbound legs. Slower per-shipment, but lower total cost.

### Q7: **B. Add regional DCs closer to demand**
The strategic fix to slow Florida transit is *network design*. Faster trucks/carriers/safety stock are tactical patches.

### Q8: **B. Corporate business strategy and brand promise**
Logistics cascades from business → SC → logistics. CFO cost targets and IT roadmaps inform but don't drive.

### Q9: **A. 18**
X = (4000·10 + 1000·50)/(5000) = (40,000 + 50,000)/5,000 = **18**. The big demand pulls the centroid toward A.

### Q10: **C. Free Trade Zone (FTZ)**
FTZ defers duty until goods leave for US commerce. (Bonded warehouses are similar but typically focused on storage, not transformation.)

### Q11: **C. Today's dispatch schedule**
Strategic = long-cycle, capital-intensive, hard to reverse. A dispatch schedule is operational/tactical.

### Q12: **A. Inventory scales ~√(N)**
The square-root rule: total safety stock across N stocking locations ≈ √(N) × single-location safety stock. So 2 DCs hold √2 ≈ 1.41× the safety stock of 1 DC.

### Q13: **A. Holds and operates physical assets**
3PL = asset-based logistics. 4PL = orchestration / asset-light. Both can be international; pricing varies.

### Q14: **B. Velocity, value, geography, or channel**
Modern logistics segments customers/SKUs by behavior, not alphabetically or by payment.

### Q15: **C. Nearshoring**
China → Mexico = nearshoring (geographic proximity). Reshoring = back to home country. Friendshoring = to allied countries.

### Q16: **A. Labor cost differences**
Center-of-gravity is geographic only; you then layer factor-rating for labor, taxes, infrastructure. Labor variation can move the final site significantly.

### Q17: **D. Cost of capital for manufacturing**
Total logistics cost (TLC) covers transport, warehouse ops, inventory carrying, and service-loss / lost-sales. Manufacturing capital is *not* a logistics cost — it's a production cost.

### Q18: **B. Eliminate storage time and accelerate replenishment**
Walmart's cross-docks pioneered low-inventory, high-velocity retail replenishment.

### Q19: **C. Direct shipment**
One origin, one destination, sensitive cargo — direct shipment minimizes handling and time-out-of-control.

### Q20: **B. Long-term, capital-intensive, hard to reverse**
Strategic horizon is 3–10 years and involves big sunk costs.

### Q21: **B. Add an Eastern DC**
Switching carriers or fuel surcharges are tactical. The structural fix is putting inventory closer to demand.

### Q22: **B. Inventory carrying cost and facility cost**
Both scale with the number of stocking nodes. Outbound transport drops; inbound, inventory, and facility costs rise.

### Q23: **A. Forward stocking location**
Small depot near a key customer (often OEM/JIT supplier). Holds limited inventory close to demand point.

### Q24: **B. Initial baseline refined with other methods**
COG ignores roads, labor, taxes. Always combine with factor-rating and MILP for production-ready answers.

### Q25: **B. Business-strategy alignment → COG baseline → MILP refinement with factor-rating**
The cascade in this module: logistics strategy flows from business strategy (alignment first), then a COG baseline gives you the mathematically optimal centroid, then you refine with MILP optimization layered with factor-rating (labor, taxes, infrastructure). The other options jump straight to tactics without the strategic anchor — anti-pattern.

---

## 📊 Score Yourself

- 23–25/25 → 🏆 You've mastered Module 1.
- 20–22/25 → ✅ Solid. Review wrong answers, then move on.
- 16–19/25 → ⚠️ Re-read network types + 3PL/4PL sections.
- <16/25 → 🔁 Restart the module. Don't skip — this is foundational.

---

## 🃏 Add To Your Flashcards

- Center-of-gravity formula
- Square-root rule (√N safety stock)
- Greenfield vs Brownfield
- 1PL → 5PL definitions
- Hub-and-spoke vs point-to-point
- Cross-dock vs DC
- Total logistics cost components

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 2: Capacity & Demand for Logistics](../Module-02-Capacity-Demand-Logistics/Reading.md)
