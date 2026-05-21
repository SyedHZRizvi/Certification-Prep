# Module 7: Global Logistics & Customs 🌍

> **Why this module matters:** Half the CLTD exam has an international flavor. Get Incoterms 2020 wrong and you're guaranteed 8–12 wrong answers. Get customs vocabulary mixed up and another 5. This module gives you the precise vocabulary and frameworks the exam tests verbatim.

---

## 🍕 A Story: The Coffee Importer Who Lost $40,000 in One Email

Diane runs a specialty coffee importer in Boston. She emails her supplier in Ethiopia: "Please ship 5 containers, FOB Addis Ababa." Three months later, the containers arrive at the Port of Boston. Customs holds them. Diane's freight forwarder calls: "These weren't insured for the ocean leg. The supplier handed off at the *port* in Djibouti, not at *origin*. You owe duty, demurrage, and the insurance retroactive."

What went wrong? Diane used **FOB** for a container shipment by ocean. Under Incoterms 2020, FOB is technically valid for ocean — BUT the rules transfer risk when goods are *on board the vessel*, not in the truck to the port. Diane should have used **FCA Addis Ababa** (Free Carrier — risk transfers at origin) or **CIF Boston** (seller arranges and pays for cost, insurance, freight to Boston).

That one wrong Incoterm = $40,000.

This module makes sure you never do that. We'll cover all 11 Incoterms 2020, customs basics, FTAs, FTZs, HS codes, and the documents that move money across borders.

---

## 🌐 Incoterms 2020 — All 11 Rules

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

## 📚 Further Reading (Optional)

- 📖 *Incoterms 2020* — official ICC publication (essential, ~$50)
- 📖 *Global Logistics and Supply Chain Management* by Mangan & Lalwani
- 🔗 [ICC Incoterms 2020 page](https://iccwbo.org/business-solutions/incoterms-rules/) — official summaries
- 🔗 [WCO HS database](http://www.wcoomd.org/) — official 6-digit classification
- 🔗 [US Harmonized Tariff Schedule](https://hts.usitc.gov/) — US HTS lookup
- 🔗 [USMCA full text](https://ustr.gov/trade-agreements/free-trade-agreements/united-states-mexico-canada-agreement) — rules of origin
- 🔗 [US C-TPAT program](https://www.cbp.gov/border-security/ports-entry/cargo-security/c-tpat-customs-trade-partnership-against-terrorism)
