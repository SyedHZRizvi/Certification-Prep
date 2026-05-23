# Module 7: Global Logistics & Customs 🌍

> **Why this module matters:** Half the CLTD exam has an international flavor. Get Incoterms 2020 wrong and you're guaranteed 8–12 wrong answers. Get customs vocabulary mixed up and another 5. This module gives you the precise vocabulary and frameworks the exam tests verbatim.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - [Module 1](../Module-01-Logistics-Strategy-Network/Reading.md) facility types (FTZ, bonded warehouse intro)
> - [Module 6](../Module-06-Transportation-Modes/Reading.md) ocean/air/intermodal vocabulary (containers, AWB, BOL)
> - Basic finance: discount rate, NPV, working capital — for valuing duty deferral
>
> Cross-course: [CSCP Module 8 (International Trade & Customs)](../../10-ASCM-CSCP/Module-08-International-Trade-Customs/Reading.md) covers an introductory view of customs and Incoterms. [CPSM Module on Global Sourcing](../../13-ISM-CPSM/) (ISM CPSM track) covers the procurement side of global trade including supplier-side Incoterms negotiation.

---

## 🍕 A Story: The Coffee Importer Who Lost $40,000 in One Email

Diane runs a specialty coffee importer in Boston. She emails her supplier in Ethiopia: "Please ship 5 containers, FOB Addis Ababa." Three months later, the containers arrive at the Port of Boston. Customs holds them. Diane's freight forwarder calls: "These weren't insured for the ocean leg. The supplier handed off at the *port* in Djibouti, not at *origin*. You owe duty, demurrage, and the insurance retroactive."

What went wrong? Diane used **FOB** for a container shipment by ocean. Under Incoterms 2020, FOB is technically valid for ocean — BUT the rules transfer risk when goods are *on board the vessel*, not in the truck to the port. Diane should have used **FCA Addis Ababa** (Free Carrier — risk transfers at origin) or **CIF Boston** (seller arranges and pays for cost, insurance, freight to Boston).

That one wrong Incoterm = $40,000.

This module makes sure you never do that. We'll cover all 11 Incoterms 2020, customs basics, FTAs, FTZs, HS codes, and the documents that move money across borders.

---

## 🌐 Incoterms 2020 — All 11 Rules

> **Citation.** *Incoterms® 2020 — ICC Rules for the Use of Domestic and International Trade Terms* (International Chamber of Commerce, Paris, 2019; effective Jan 1, 2020). The rules are commercial trademarks of the ICC and are reaffirmed every 10 years (next revision projected: Incoterms 2030). The Harmonized System is governed by the *International Convention on the Harmonized Commodity Description and Coding System* (World Customs Organization, Brussels, 1983; updated every 5 years; HS 2022 currently in force). C-TPAT is administered by US Customs and Border Protection (CBP, 2001 under the SAFE Port Act); AEO programs are administered globally under the WCO SAFE Framework of Standards (2005; updated 2018, 2021). USMCA went into force July 1, 2020 (replacing NAFTA 1994).

**Incoterms** = International Commercial Terms, published by the International Chamber of Commerce (ICC). Current version: **Incoterms 2020**, effective January 1, 2020. The 11 rules govern who pays for transport, who carries risk, and where transfer happens.

### The Big Change from 2010 → 2020

- **DAT → DPU** — DAT (Delivered At Terminal) was renamed **DPU (Delivered at Place Unloaded)** to clarify the seller unloads.
- **DDP** insurance language clarified.
- **FCA** now allows BOL with onboard notation when seller is responsible for less than full ocean leg.
- **CIP** now requires "all risk" insurance (Institute Cargo Clauses A), up from minimum (Clauses C). CIF unchanged.

### Two Categories

**Group 1: Any Mode of Transport (7 rules)** — use for containers, multimodal, air
- EXW, FCA, CPT, CIP, DAP, DPU, DDP

**Group 2: Sea and Inland Waterway Only (4 rules)** — use only when goods are *loaded onto a vessel*, not containers
- FAS, FOB, CFR, CIF

🚨 **Trap on the exam:** Using FOB for a containerized shipment is technically wrong under Incoterms 2020. Use FCA instead. This is the #1 most-tested Incoterms trap.

---

## 📋 The Incoterms 2020 Responsibility Matrix

| Rule | Mode | Seller delivers at | Risk transfers at | Cost responsibility (Seller pays) | Insurance |
|------|------|---------------------|-------------------|-----------------------------------|-----------|
| **EXW** Ex Works | Any | Seller's premises | Seller's premises | Minimum — buyer arranges all | Buyer's choice |
| **FCA** Free Carrier | Any | Named place (origin) | Named place (origin) | To named place | Optional |
| **CPT** Carriage Paid To | Any | Named place (destination) | Origin (when handed to carrier) | Freight to destination | Optional |
| **CIP** Carriage & Insurance Paid To | Any | Named place (destination) | Origin (when handed to carrier) | Freight + INSURANCE (Clauses A) | Required (all-risk) |
| **DAP** Delivered At Place | Any | Named place (destination, on transport) | Destination (NOT unloaded) | All to destination | Optional |
| **DPU** Delivered at Place Unloaded | Any | Named place (destination, UNLOADED) | Destination (unloaded) | All + unloading | Optional |
| **DDP** Delivered Duty Paid | Any | Named place (destination, DUTY PAID) | Destination | EVERYTHING including duty | Optional |
| **FAS** Free Alongside Ship | Sea | Alongside vessel at origin port | Alongside vessel | To alongside vessel | Optional |
| **FOB** Free On Board | Sea | On board vessel at origin port | On board vessel | To on-board | Optional |
| **CFR** Cost & Freight | Sea | Named destination port (freight paid) | On board at origin port | Freight to destination port | Optional |
| **CIF** Cost, Insurance & Freight | Sea | Named destination port | On board at origin port | Freight + INSURANCE (Clauses C minimum) | Required (minimum) |

🧠 **Memory hook:**
- **E-terms (EXW):** Buyer does everything
- **F-terms (FCA, FAS, FOB):** Seller delivers Free to carrier; main carriage unpaid by seller
- **C-terms (CPT, CIP, CFR, CIF):** Seller arranges main carriage but risk passes earlier
- **D-terms (DAP, DPU, DDP):** Seller Delivers all the way

### Seller responsibility ladder (lowest → highest)

```
EXW → FCA → FAS → FOB → CFR → CIF → CPT → CIP → DAP → DPU → DDP
←─── Less seller responsibility       More seller responsibility ──→
```

🎯 **Exam tip:** Memorize this ladder. Many exam questions ask "which rule has more/less seller responsibility?"

### Risk vs Cost Split (the most-tested concept)

Under **C-terms** (CPT, CIP, CFR, CIF), the seller *pays* freight to destination but *risk* transfers at origin. This split is unique.

🚨 **Trap on the exam:** "Under CIF, when does risk pass?" → On board the vessel **at origin**. NOT at destination, even though the seller pays freight to destination.

---

## 🚢 Choosing the Right Incoterm

### Common patterns

| Scenario | Best Incoterm |
|----------|---------------|
| US importer wants supplier to handle nothing | EXW |
| US importer wants supplier to load truck, but arrange own freight | FCA |
| Goods in container, US importer arranges ocean freight | FCA |
| Goods on bulk ocean vessel, importer arranges ocean | FOB |
| Seller arranges ocean freight + minimum insurance for bulk shipment | CIF |
| Seller arranges full multimodal + all-risk insurance for container | CIP |
| Seller delivers to importer's DC, importer clears customs | DAP |
| Seller delivers and unloads at importer's facility | DPU |
| Seller delivers door-to-door, pays duty | DDP |

🎯 **Exam pattern:** "An importer wants the lowest landed cost and is willing to arrange freight." → EXW or FCA.

🎯 **Exam pattern:** "An importer wants door-to-door delivery without dealing with customs." → DDP.

---

## 🛂 Customs & Trade Compliance

### Roles in international trade

| Role | What they do |
|------|--------------|
| **Importer of Record (IOR)** | Legally responsible for customs declaration, duties, compliance |
| **Exporter of Record (EOR)** | Legally responsible for export licensing, restrictions, screening |
| **Customs broker** | Files customs paperwork on importer's behalf |
| **Freight forwarder** | Books transport, prepares documents (no goods possession typically) |
| **NVOCC** | Non-Vessel Operating Common Carrier — issues own BL but doesn't own ships |
| **3PL** | Outsourced logistics provider |

### Customs documents (memorize)

| Document | Purpose |
|----------|---------|
| **Commercial invoice** | Price, terms, parties, HS code |
| **Packing list** | Cartons, weights, dimensions |
| **Bill of Lading (BOL/BL)** | Carrier's contract & receipt (ocean) |
| **Airway bill (AWB)** | Air carrier's contract & receipt |
| **Certificate of Origin** | Country of manufacture (for FTAs) |
| **Letter of Credit (LC)** | Bank-backed payment instrument |
| **Insurance certificate** | Proof of insurance |
| **HS / HTS code** | Tariff classification |
| **Import license / permit** | For restricted goods |
| **Customs entry / declaration** | Filed at port of arrival |
| **ATA Carnet** | Temporary import (samples, trade shows) |
| **Phytosanitary cert** | Plants / food |
| **Dangerous goods declaration** | Hazmat |

### HS / HTS Codes

**HS (Harmonized System)** — 6-digit global standard by World Customs Organization. Every country uses these 6 digits.

**HTS (Harmonized Tariff Schedule)** — Country-specific extension. US uses 10 digits.

Structure:
```
Chapter (2 digits) → Heading (4 digits) → Subheading (6 digits) → National extension (8-10 digits)
```

Example: 0901.21 = roasted coffee (HS); US HTS = 0901.21.0030 for retail bags.

🎯 **Exam tip:** HS = 6 digits global; country-specific extensions push to 8-10.

---

## 💰 Duties, Taxes, and Tariffs

### Types of duties

| Type | Calculation |
|------|-------------|
| **Ad valorem** | % of declared value (most common) |
| **Specific** | $ per unit (e.g., $2/kg) |
| **Compound** | Both ad valorem + specific |
| **Anti-dumping duty** | Punitive on goods sold below market |
| **Countervailing duty** | Offsets foreign subsidies |
| **MFN (Most Favored Nation)** | Standard WTO rate |
| **Preferential** | Reduced via FTA (USMCA, EU, CPTPP) |

### Calculating duty

```
Duty = Customs value × Duty rate (%) [for ad valorem]
```

Customs value usually = transaction value (price + freight + insurance to port of importation), adjusted per WTO Valuation Agreement.

### Other border charges

- VAT/GST (often refundable for re-export)
- Excise tax (alcohol, tobacco, fuel)
- Customs processing fees / MPF (US Merchandise Processing Fee)
- Harbor Maintenance Fee (US ocean imports)

---

## 🌐 Free Trade Agreements (testable)

| FTA | Members | Replaces |
|-----|---------|----------|
| **USMCA** | US, Mexico, Canada | NAFTA (since 2020) |
| **EU Single Market** | 27 EU countries | Various |
| **CPTPP** | 11 Pacific Rim (no US) | Trans-Pacific Partnership |
| **RCEP** | 15 Asia-Pacific (includes China) | None |
| **EFTA** | Norway, Iceland, Liechtenstein, Switzerland | None |
| **ASEAN FTA** | 10 SE Asian nations | None |
| **AfCFTA** | African Continental FTA, 54 countries | Various |

### Rules of Origin

Goods qualify for FTA benefits only if they "originate" from a member country. Rules typically:
- Wholly obtained (mined, grown, manufactured entirely within)
- Substantial transformation (tariff shift to a new HS code)
- Regional Value Content (RVC) threshold (e.g., 60% under USMCA)

🚨 **Trap on the exam:** Goods don't automatically qualify for an FTA — they must *originate* per the rules of origin and a *certificate of origin* must be filed.

---

## 🏗️ Free Trade Zones (FTZs) & Bonded Warehouses

### FTZ (US) / Free Zone (other countries)

A designated area where goods are not yet in commerce of the host country.

Benefits:
- **Duty deferral** — pay only when goods enter commerce
- **Duty inversion** — pay lower duty on the *finished product* HS code rather than the *components* (if applicable)
- **Re-export** without ever paying duty
- **Value-added activities** (kitting, labeling, light assembly)

🎯 **Exam tip:** FTZs benefit re-exporters and manufacturers who'd pay higher component-duty than finished-good-duty.

### Bonded warehouse

Similar to FTZ but typically *only storage* (no manufacturing). Duty deferred until goods leave.

### Temporary Importation under Bond (TIB)

Goods imported for a limited time without duty (samples, trade shows, repair).

---

## 💳 International Payment Methods

| Method | Risk to seller | Risk to buyer |
|--------|----------------|---------------|
| **Cash in advance** | None | High |
| **Letter of Credit (LC)** | Low | Low |
| **Documentary Collection (D/A or D/P)** | Medium | Medium |
| **Open account** | High | None |
| **Consignment** | Highest | None |

### Letter of Credit (LC) flow

1. Buyer applies to bank for LC
2. Bank issues LC to seller's bank
3. Seller ships, presents documents
4. Bank pays seller
5. Buyer pays bank

🎯 **Exam tip:** LC payment is triggered by *documents matching* the LC terms — even a typo can delay payment.

---

## 🌍 Global Logistics Risk

### Currency / FX risk

- Spot rates, forward contracts, options, natural hedging
- Major: USD, EUR, JPY, CNY, GBP
- Quote convention: EUR/USD = 1.08 means 1 EUR = 1.08 USD

### Political / geopolitical risk

- Sanctions (OFAC, EU sanctions list)
- Export controls (ITAR, EAR for US)
- Trade wars (US-China tariffs 2018+)
- Strikes (port labor, drayage)
- Conflicts (Red Sea disruption 2024)

### Sanctions screening

Required for almost all international shipments. Tools: Descartes Visual Compliance, Amber Road, OFAC SDN list.

### Supply chain security programs

- **C-TPAT** (US) — Customs-Trade Partnership Against Terrorism
- **AEO** (EU) — Authorized Economic Operator
- **PIP** (Canada) — Partners in Protection
- **STP** (Singapore) — Secure Trade Partnership

All grant *expedited customs treatment* in exchange for security compliance.

---

## 🚢 Global Logistics Service Providers

| Provider | Role |
|----------|------|
| **Freight forwarder** | Books transport, arranges docs, no goods possession |
| **NVOCC** | Non-vessel ocean carrier; issues own BL |
| **Customs broker** | Files customs entry on behalf of importer |
| **3PL** | Operates warehouse + transport, often with broker affiliate |
| **4PL** | Orchestrates other LSPs |
| **Indirect air carrier (IAC)** | Air freight forwarder |

🎯 **Exam tip:** Freight forwarders ≠ customs brokers. Many companies offer both, but they're distinct licenses.

---

## 📜 Case Study — CMA CGM's Acquisition of Bolloré Logistics (2024)

**Situation.** CMA CGM, France's largest container shipping line and the world's #3 carrier by capacity (after MSC and Maersk), watched Maersk's vertical-integration playbook (see Module 1 case) play out from 2016 through 2022. By 2022 CMA CGM had earned over €40B of cumulative profits across the freight super-cycle and CEO Rodolphe Saadé began an aggressive M&A spree to follow Maersk's model. The strategic question: how to acquire the *integrated logistics* layer fastest? Bolloré Logistics — the freight forwarding + customs brokerage + contract logistics arm of the French conglomerate Bolloré Group — was, in 2023, the world's #5 freight forwarder with 14,800 employees across 140+ countries, ~€7B revenue, and deep African + Asian customs broker capability.

**Decision.** In April 2024 CMA CGM closed the acquisition of Bolloré Logistics for €4.65B (announced December 2023, regulatory approvals through Q1 2024). The deal:

- **Combined Bolloré Logistics into CMA CGM Group's CEVA Logistics subsidiary** — CEVA was acquired by CMA CGM in 2019; Bolloré now sits inside CEVA, creating a top-3 freight forwarder globally (behind only Kuehne+Nagel and DSV).
- **Acquired customs brokerage networks** in 50+ countries — most critically Africa, where Bolloré operated terminal concessions and customs services in 16 African countries (a market Maersk and Kuehne+Nagel have minimal presence in).
- **Picked up SDV International Logistics**, Bolloré's air-freight forwarding arm.
- **Integrated trade compliance and AEO certifications** — Bolloré held AEO status in 25+ countries; CMA CGM gained instant *Authorized Economic Operator* recognition across Europe, plus C-TPAT alignment for US imports.
- **Did NOT acquire Bolloré's Africa port concessions** — those were sold separately to MSC (Mediterranean Shipping Company) for €5.7B in late 2022, creating an interesting split: shipping infrastructure to MSC, customs/logistics services to CMA CGM.

**Outcome.** By Q3 2024, CMA CGM Group's Logistics & Services segment (CEVA + Bolloré Logistics combined) reached ~€17B run-rate revenue, ~30% of total group revenue (mirroring the Maersk transformation arc). Critically, CMA CGM's *integrated trade compliance* offering — handle the shipment + customs entry + Incoterms structuring + AEO routing — became a differentiated end-to-end product. Customers like Decathlon (French sporting goods), L'Oréal, and Stellantis (auto group) began consolidating freight + customs contracts with CMA CGM, eliminating the historic split between ocean carrier (CMA CGM), freight forwarder (Kuehne+Nagel or DSV), and customs broker (Bolloré). The full-stack integrated offering reduced shipper customs-clearance time ~30% and lowered freight + brokerage + compliance combined cost by ~12% per shipment based on early customer testimonials.

**Lesson for the exam / for practitioners.** This case bridges Modules 1, 6, and 7:

1. **Customs broker + freight forwarder + ocean carrier as one integrated 4PL.** The CLTD exam tests the distinct roles (IOR, customs broker, freight forwarder, NVOCC) — this case shows what happens when one entity does all three under one contract. The advantage: faster customs clearance, better Incoterms structuring, single accountability.

2. **AEO/C-TPAT as durable strategic moat.** CMA CGM acquired Bolloré's AEO certifications — these take years to earn and demonstrate sustained security compliance. They cannot be quickly replicated. This is a Module 7 + Module 1 intersection: trade-compliance certifications are *strategic assets*, not paperwork.

3. **Africa as the next-frontier logistics market.** Africa's container volumes grew ~7% annually 2018–2024 — faster than any other continent. CMA CGM's Bolloré acquisition gave it ~40% market share of West African contract logistics. The strategic logic mirrors what Maersk did with LF Logistics in Asia.

The CLTD exam may test the customs-broker / freight-forwarder distinction — both can be done by the same entity (CMA CGM proves this), but the *licenses and accountabilities* remain distinct.

**Discussion (Socratic).**
- Q1: When CMA CGM, Maersk, and Kuehne+Nagel all become integrated 4PLs offering ocean + forwarder + customs + warehouse, what is the differentiation strategy left to a smaller, independent freight forwarder? Frame the niche they could occupy.
- Q2: AEO and C-TPAT certifications take 12–24 months to earn. From a strategic logistics lens, are they worth the investment for a mid-size importer, or is the value mostly captured by the broker handling their entries?
- Q3: The Bolloré-to-MSC port concession sale + Bolloré-Logistics-to-CMA CGM acquisition split represents a deliberate carve-up of the Bolloré global empire. From a competition / antitrust perspective, what does this teach about how the next consolidation wave in logistics may proceed?

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "FOB works for any ocean shipment" | FOB is only for goods loaded *on a vessel*; for containers, use FCA |
| "Risk transfers when seller pays freight" | No — under C-terms, seller pays freight but risk transfers at origin |
| "HS code = HTS code" | HS is 6-digit global; HTS is country-specific extension |
| "FTA = automatic preferential duty" | Only with rules-of-origin compliance + certificate of origin |
| "FTZ eliminates duty" | Only defers until goods enter commerce; may *reduce* via duty inversion |
| "DDP is rare" | Common for e-commerce direct-to-consumer (DDP simplifies the customer experience) |

---

## 🚨 Exam Traps

🚨 **Trap 1:** FOB for containers — wrong. Use FCA.

🚨 **Trap 2:** Risk pass under C-terms — at *origin*, not destination.

🚨 **Trap 3:** Confusing DAP (NOT unloaded) with DPU (unloaded by seller).

🚨 **Trap 4:** DDP includes duty — DAP and DPU do NOT.

🚨 **Trap 5:** CIP requires *all-risk* insurance (Clauses A); CIF requires only minimum (Clauses C).

🚨 **Trap 6:** Mixing up DAT (which doesn't exist anymore in Incoterms 2020) with DPU. DAT was renamed DPU.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Incoterms 2020** | ICC's 11 international commerce terms |
| **EXW / FCA / FOB / CIF / DAP / DPU / DDP** | Key Incoterms rules |
| **HS / HTS code** | Harmonized commodity classification |
| **Importer of Record (IOR)** | Legally responsible for customs |
| **Customs broker** | Files customs entry |
| **Freight forwarder** | Books transport, no possession |
| **NVOCC** | Non-Vessel Operating Common Carrier |
| **FTZ** | Free Trade Zone — duty deferral |
| **Bonded warehouse** | Storage with deferred duty |
| **USMCA / CPTPP / RCEP** | Major FTAs |
| **Rules of origin** | Qualifying criteria for FTA preference |
| **LC** | Letter of Credit |
| **C-TPAT / AEO** | Supply-chain security programs |
| **OFAC / SDN** | US sanctions screening |
| **MPF / HMF** | US merchandise / harbor fees |
| **Ad valorem duty** | % of declared value |

---

## ✅ Module 7 Summary

You now know:
- 🌐 All 11 Incoterms 2020 with risk + cost split (especially FOB vs FCA trap)
- 🛂 IOR vs broker vs forwarder vs NVOCC distinctions
- 📋 Core customs documents (commercial invoice, BOL, AWB, certificate of origin, LC)
- 💰 Duty types (ad valorem, specific, anti-dumping, MFN, preferential)
- 🌐 Major FTAs (USMCA, EU, CPTPP, RCEP) and rules of origin
- 🏗️ FTZs, bonded warehouses, TIB
- 💳 International payment methods (LC flow)
- 🌍 FX risk, sanctions, export controls, geopolitical risk
- 🚢 C-TPAT / AEO security programs

**Next steps:**
1. 🎥 [Videos.md](./Videos.md)
2. ✏️ [Quiz.md](./Quiz.md)
3. 📋 [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ [Module 8: Reverse Logistics & Sustainability](../Module-08-Reverse-Logistics-Sustainability/Reading.md)

---

## 🤔 Discussion (Socratic prompts)

1. **DDP vs DAP for e-commerce.** Many cross-border e-commerce platforms (AliExpress, Temu, Shein) sell DDP — the marketplace handles import duty so the consumer never sees it. The 2024 US "de minimis" rule changes (proposed in 2024 to lower the $800 de minimis threshold) directly attack this model. Frame both sides: is the de minimis regime good or bad for US logistics?

2. **Friendshoring vs nearshoring vs reshoring.** Post-2018 US-China trade tensions, multiple strategies have emerged: friendshoring (allied countries), nearshoring (Mexico), reshoring (US). Each carries different Incoterms implications. For a hypothetical $500M US importer of electronics, which mix would you advocate, and why?

3. **FTZ vs bonded warehouse vs direct import.** A $250M apparel importer is deciding between an FTZ (defer + potentially inverse duty), a bonded warehouse (defer only), or direct import (pay at port). Walk through the financial logic — when does each win?

4. **Customs broker make-or-buy.** A growing importer (~5,000 entries/year) currently uses an external broker. They consider hiring an in-house licensed broker. What are the breakeven and risk considerations?

5. **AEO/C-TPAT investment ROI.** Earning C-TPAT certification costs ~$50K–$200K in audit and process work. The benefits (lower exam rates, faster clearance) are real but hard to quantify ahead of time. How would you build the business case to the CFO?

> **Where this leads.**
> - Inside this course: Module 8 layers the sustainability/risk lens onto the global trade decisions made here.
> - Cross-course: [CSCP Module 8](../../10-ASCM-CSCP/Module-08-International-Trade-Customs/Reading.md) is the broader supply-chain view; CPSM modules deepen the supplier negotiation around Incoterms.
> - Practice: Practice Exam 2 has ~25 questions from this module; Final Mock Exam another 25.

---

## 📚 Further Reading (Optional)

- 📖 *Incoterms 2020* — official ICC publication (essential, ~$50)
- 📖 *Global Logistics and Supply Chain Management* by Mangan & Lalwani
- 🔗 [ICC Incoterms 2020 page](https://iccwbo.org/business-solutions/incoterms-rules/) — official summaries
- 🔗 [WCO HS database](http://www.wcoomd.org/) — official 6-digit classification
- 🔗 [US Harmonized Tariff Schedule](https://hts.usitc.gov/) — US HTS lookup
- 🔗 [USMCA full text](https://ustr.gov/trade-agreements/free-trade-agreements/united-states-mexico-canada-agreement) — rules of origin
- 🔗 [US C-TPAT program](https://www.cbp.gov/border-security/ports-entry/cargo-security/c-tpat-customs-trade-partnership-against-terrorism)
