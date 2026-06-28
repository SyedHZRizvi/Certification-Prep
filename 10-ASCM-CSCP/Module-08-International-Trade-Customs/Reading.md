# Module 8: International Trade & Customs 🌐

> **Why this module matters:** The CSCP is deliberately *global*. Expect 8–12 questions on **Incoterms 2020 (all 11)**, customs documentation, letters of credit, tariffs, currency risk, and free trade zones. This is a vocabulary-rich module; mnemonic everything.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - [Logistics modes and DC/3PL (Third-Party Logistics) vocabulary](../Module-07-Logistics-Distribution-Warehousing/Reading.md), Module 7
> - [Sourcing contracts and SLA (Service Level Agreement) basics](../Module-06-Sourcing-Supplier-Management/Reading.md), Module 6
> - General awareness of import/export concepts (tariffs, duties, customs)
> - Basic finance fluency: exchange rates, hedging conceptually
> Most students find this module the densest in pure vocabulary; build flashcards aggressively.

---

## ⛴️ A Story: The Coffee Importer That Lost $40K on One Container

Lara runs **Brewline Trading**, a US importer of single-origin coffee from Ethiopia. In 2022 she negotiated her first big container with a new supplier 20 metric tons of green beans and signed under **EXW Addis Ababa** because it gave her the lowest invoice price. She'd never used EXW before.

Two months later: $40,000 in unexpected costs. EXW means the buyer takes responsibility from the seller's factory door. Lara had to arrange and pay for inland Ethiopian trucking, port handling, export customs clearance in Ethiopia (in Amharic, with brokers she didn't know), ocean freight, insurance, US customs, and inland US trucking. Each step had a markup. The supplier waved goodbye at the gate.

She redid the next deal under **FCA (Free Carrier), Port of Djibouti**. Same coffee, transparent transfer at the port, supplier handled export clearance, Lara handled ocean + import. The total landed cost dropped 14%, and she could plan with no nasty surprises.

**Incoterms are not just legal jargon.** They allocate cost, risk, and effort between buyer and seller at every step of an international move. Knowing them is the price of doing global business, and the exam tests them cold.

---

## 📜 Incoterms 2020, The Headline Framework

Incoterms (International Commercial Terms) are published by the **International Chamber of Commerce (ICC)** (Paris, founded 1919) and updated roughly every decade. The current version is **Incoterms 2020** (ICC Publication 723E, effective 1 January 2020), replaced Incoterms 2010 (ICC Publication 715E). The Incoterms 2020 drafting group was chaired by Charles Debattista (University of Southampton).

### Two key changes from 2010:

1. **DAT → DPU** (Delivered at Terminal renamed Delivered at Place Unloaded, broader location flexibility)
2. **FCA** can now accompany an onboard Bill of Lading endorsement

### Total: **11 Incoterms**, grouped two ways

**By number of modes:**

| Group | Modes | Terms |
|-------|-------|-------|
| **Any mode of transport** (7) | Air, road, rail, multimodal, sea | EXW, FCA, CPT, CIP, DAP, DPU, DDP |
| **Sea & inland waterway only** (4) | Ocean / river | FAS, FOB, CFR, CIF |

🧠 **Memory hook:** "Any mode" = 7 terms. "Sea only" = 4 terms with the letters **F** or **C** indicating sea-specific cost & risk transitions.

---

## 🧠 The 11 Incoterms (memorize every one)

### Any-mode terms (7)

| Term | Stands For | Risk Transfers When | Buyer Pays For | Seller Pays For |
|------|-----------|---------------------|----------------|----------------|
| **EXW** | Ex Works | At seller's premises (named place) | Everything from seller's door | Make goods available |
| **FCA** | Free Carrier | When goods handed to carrier (named place) | Main freight onward + import | Export clearance + delivery to carrier |
| **CPT** | Carriage Paid To | When goods handed to first carrier | Insurance + after destination | Carriage to named destination (export cleared) |
| **CIP** | Carriage AND Insurance Paid To | When goods handed to first carrier | Beyond destination | Carriage + insurance (Institute Cargo Clause A) to destination |
| **DAP** | Delivered at Place | When goods placed at buyer's disposal at named destination, ready for unloading | Unloading + import clearance | Everything to destination (incl. inland) |
| **DPU** | Delivered at Place Unloaded | When goods are unloaded at named place | Import clearance | Everything including unloading at destination |
| **DDP** | Delivered Duty Paid | When goods placed at buyer's disposal cleared for import | Nothing (essentially) | EVERYTHING, including import duties |

### Sea & inland waterway only (4)

| Term | Stands For | Risk Transfers When | Notes |
|------|-----------|---------------------|-------|
| **FAS** | Free Alongside Ship | When goods placed alongside vessel at port | Buyer arranges loading + main freight |
| **FOB** | Free On Board | When goods loaded on board vessel at port | Risk passes when goods cross the ship's rail (legacy concept; now defined as "on board") |
| **CFR** | Cost and Freight | When goods loaded on board | Seller pays freight to destination port; risk passes at loading |
| **CIF** | Cost, Insurance and Freight | When goods loaded on board | Like CFR + minimum insurance (Institute Cargo Clause C) |

### Visual: who bears cost & risk

```
   SELLER                                           BUYER
   pays/risk                                        pays/risk
   ───────────────────────────────────────────────────►
   EXW    →            (all on buyer)
   FCA    [    seller-side    | buyer-side          ]
   FAS    [          carrier-alongside              ]
   FOB    [          ship's deck                    ]
   CFR/CPT[ cost to dest port | risk passes earlier ]
   CIF/CIP[ + insurance                              ]
   DAP    [        almost everything                ]
   DPU    [          incl. unloading                ]
   DDP    [   everything incl. import duties        ]
```

🎯 **Exam tip:** Watch for cases where **cost** and **risk** transfer at different points (CFR, CIF, CPT, CIP), the seller pays freight, but risk passes at origin.

---

## 🚨 Incoterms Exam Traps

1. **CFR vs CIF**, CIF adds insurance (minimum Clause C); CFR doesn't.
2. **CIP vs CIF**, CIP is for any mode; CIF is ocean only. CIP requires Institute Cargo Clause **A** (better than CIF's Clause C).
3. **DAT renamed** to DPU in 2020, same idea, broader location.
4. **EXW vs FCA**, EXW seller does nothing; FCA seller does export clearance.
5. **DDP vs DAP**, DDP includes import duties; DAP doesn't.
6. **FOB used for containers**, Outdated; ICC advises FCA for containerized shipments (because risk should pass at the carrier, not the ship's rail).
7. **Risk vs cost transfer**, They're not always the same point.

---

## 🏛️ Customs Fundamentals

### Tariffs and Duties

| Term | Definition |
|------|------------|
| **Tariff** | Tax on imported (or sometimes exported) goods |
| **Duty** | The actual tax amount |
| **Ad valorem** | % of declared value (most common) |
| **Specific** | Fixed amount per unit (e.g., $0.20/kg) |
| **Compound** | Mix of both |
| **MFN tariff** | Standard rate WTO members give each other |
| **Preferential tariff** | Reduced under an FTA |
| **Anti-dumping duty** | Extra duty when import priced below fair value |
| **Countervailing duty** | Offsets foreign subsidies |

### HS Codes (Harmonized System)

The HS is a standardized 6-digit (often extended to 10-digit national) classification used by virtually every country.

```
   Chapter (2)  Heading (4)  Subheading (6)  Country extension (8–10)
   ▼            ▼            ▼               ▼
   85           8517         8517.13         8517.13.0000
```

- 0901 = Coffee
- 8703 = Motor cars
- 6109 = T-shirts

🎯 **Exam tip:** HS classification determines the duty rate. Misclassification = fines or seizure.

---

## 🌍 Free Trade Agreements (FTAs)

FTAs reduce or eliminate tariffs between member countries.

| FTA | Members | Notes |
|-----|---------|-------|
| **USMCA** | US, Mexico, Canada | Replaced NAFTA in 2020 |
| **EU Single Market** | 27 EU states | Plus EEA add-ons |
| **CPTPP** | 11 Asia-Pacific | Pacific economic bloc |
| **RCEP** | 15 Asia-Pacific incl. China | World's largest by GDP |
| **MERCOSUR** | South America | Argentina, Brazil, Uruguay, Paraguay |
| **AfCFTA** | 54 African countries | Largest by member count |
| **ASEAN AFTA** | Southeast Asia 10 countries | |

**Rules of Origin (ROO)** determine which goods qualify for FTA preference (e.g., a car must have ≥75% USMCA-region content to qualify).

---

## 🛂 Customs Documentation Stack

| Document | Purpose |
|----------|---------|
| **Commercial Invoice** | Sales document used by customs to assess duty |
| **Packing List** | Itemized contents per box / pallet |
| **Bill of Lading (B/L) / AWB** | Freight contract + receipt |
| **Certificate of Origin** | Country of manufacture (for tariff classification + FTAs) |
| **Customs Entry / SAD** | Import declaration (US: CBP Form 7501; EU: SAD) |
| **Import / Export License** | Required for controlled goods (e.g., dual-use technology) |
| **Insurance Certificate** | Proof of marine / air cargo insurance |
| **Letter of Credit (LC)** | Bank payment guarantee (covered below) |
| **ATA Carnet** | Temporary admission passport for trade samples, exhibits |
| **C-TPAT / AEO (Answer Engine Optimization) certification** | Trusted-trader programs speed clearance |

### ATA Carnet
Officially "Admission Temporaire / Temporary Admission." Allows duty-free temporary import of goods (trade show samples, professional equipment) into 80+ countries for up to 1 year. Saves enormous customs time and bond posting.

---

## 💳 Letters of Credit (LCs)

A Letter of Credit is a **bank's guarantee** that a buyer's payment will reach the seller on time and in full, provided the seller meets the LC terms.

### Why exporters love LCs
- Reduces buyer credit risk (the bank, not the buyer, owes you)
- Common for first-time relationships, high-value, or risky markets

### LC parties

| Party | Role |
|-------|------|
| **Applicant** | Buyer / importer |
| **Beneficiary** | Seller / exporter |
| **Issuing bank** | Buyer's bank that issues the LC |
| **Advising bank** | Seller's bank that authenticates and notifies seller |
| **Confirming bank** | (Optional) adds its own guarantee on top |
| **Negotiating bank** | Examines documents and pays seller |

### Common LC types

| Type | Use |
|------|-----|
| **Sight LC** | Pays on presentation of documents |
| **Usance / time LC** | Pays at a future date (e.g., 90 days after sight) |
| **Irrevocable LC** | Cannot be modified without all parties' consent (now default) |
| **Revolving LC** | Auto-renews for repeated shipments |
| **Standby LC** | Acts as a guarantee of last resort |
| **Back-to-back LC** | Two LCs linked (used by intermediaries) |

### UCP 600
The **Uniform Customs and Practice for Documentary Credits (UCP 600)** is the ICC ruleset governing LCs. Banks examine documents against UCP 600, small discrepancies can void payment ("discrepant LC").

---

## 💱 Currency / FX Risk Management

### Types of FX exposure

| Type | Description |
|------|-------------|
| **Transaction exposure** | A specific receivable / payable in foreign currency |
| **Translation exposure** | Financial statement consolidation across currencies |
| **Economic / operating exposure** | Long-term competitive position |

### Hedging instruments

| Instrument | What It Does |
|-----------|--------------|
| **Forward contract** | Lock today's rate for a future date |
| **Futures contract** | Standardized, exchange-traded forward |
| **Currency option** | Right (not obligation) to exchange at strike rate |
| **Currency swap** | Exchange principal + interest in two currencies |
| **Natural hedge** | Invoice in currency matching cost base |
| **Multi-currency invoicing** | Spread risk across customers |

🎯 **Exam tip:** "Hedge transaction exposure with a forward" is the default exam-correct answer for a known-date, known-amount foreign payable.

---

## 🏗️ Free Trade Zones (FTZs) & Special Economic Zones

| Term | Definition |
|------|------------|
| **FTZ / FEZ** | A designated area where goods can be imported, stored, processed without immediate duty |
| **Bonded warehouse** | Customs-supervised storage with duty deferred until release |
| **Maquiladora** | Mexican manufacturing under preferential program |
| **EPZ (Export Processing Zone)** | Zone for export-oriented manufacturing |
| **Inverted tariff** | When components have higher duty than finished goods; FTZ can flip duty class |

US FTZs alone process > $700B/yr of merchandise. Apple, GE, Caterpillar, Toyota all use FTZs to defer or reduce duty.

---

## 📜 Trade Compliance

Trade compliance covers:

- **Classification**, correct HS code
- **Valuation**, proper transaction value (per WTO rules)
- **Origin**, country of origin and FTA qualification
- **Restricted parties screening**, OFAC SDN list, EU sanctions
- **Export controls**, ITAR (defense), EAR (dual-use), dual-use end-use certifications
- **Anti-bribery**, FCPA (US), UK Bribery Act
- **Customs valuation methods** (WTO order):

  1. Transaction value (most common)
  2. Identical goods
  3. Similar goods
  4. Deductive value
  5. Computed value
  6. Fallback

### Trusted-Trader Programs

| Program | Country |
|---------|---------|
| **C-TPAT** | US Customs (CBP) |
| **AEO** (Authorized Economic Operator) | EU + global mutual recognition |
| **PIP** (Partners in Protection) | Canada |
| **STP-Plus** | Singapore |

These programs grant faster clearance + reduced inspections in exchange for documented security practices.

---

## 📊 Case Study, Apple's iPhone India + Vietnam Diversification (2022-2025)

**Situation.** For ~15 years (2007-2022), Apple manufactured >95% of iPhones at Foxconn's "iPhone City" complex in Zhengzhou, Henan, China, at peak employing 350,000 workers and producing half of the world's iPhones from one campus. By 2022, geopolitical reality was breaking this concentration: US-China trade tensions intensified under both the Trump (2017-2020) and Biden (2020-2024) administrations with new tariffs and export controls; COVID-19 lockdowns in Zhengzhou (October-November 2022) cost Apple an estimated **$1 billion per week** in lost iPhone Pro production at peak Q4 holiday demand; the November 2022 worker unrest at Zhengzhou (caught on viral video) accelerated investor pressure. Tim Cook publicly committed to "increasing the resiliency of our supply chain."

**Decision.** Apple committed 2022-2025 to a multi-axis diversification strategy: (1) **India**: contracts to Tata Electronics (acquired Wistron's India ops in 2023) + Foxconn India + Pegatron India for iPhone assembly. Production target: ~25% of iPhones from India by 2027 (per Bloomberg / TF International Securities analysis). India's Production Linked Incentive (PLI) scheme provided 4-6% subsidies on incremental production. (2) **Vietnam**: AirPods (already there since 2020), MacBook + iPad shifting to Vietnamese assembly via Luxshare and Foxconn Vietnam. (3) **Critical**: the supply chain chips (TSMC Taiwan), camera modules (Sony Japan), displays (Samsung Korea + LG) was preserved; only final assembly diversified initially. Apple navigated **Incoterms** strategically: most India-assembly contracts used **FCA (Free Carrier) at the named port of departure** rather than EXW, so Apple's logistics partners (DHL, Expeditors) handled India export clearance and onward shipping. Apple invoiced into Apple Operations International (Ireland) under DDP terms into the US, a complex multi-leg arrangement that minimized customs friction.

**Outcome.** By Q4 2024: ~14% of iPhones were assembled outside China (India + Vietnam combined), up from ~5% in 2022. India production reached 25 million iPhones/year (~12% of global volume). Apple's India revenue hit ~$8B in FY2024 with manufacturing creating ~150,000 jobs. The Zhengzhou plant remained the largest single site but no longer indispensable. When the 2025 US tariff regime under Trump-2 added 145% China tariffs (initially), Apple's diversified position allowed continued sales without immediate price-pass-through. Counter-argument: cost per iPhone rose ~8-10% on India-assembled units due to higher logistics + smaller economies of scale; Apple absorbed margin to maintain US retail price competitiveness. The case study appears in MIT Sloan and HBS curricula 2024-2025 as the canonical "geopolitical supply chain diversification" play.

**Lesson for the exam / for practitioners.** This is the modern Hau Lee "agile" supply chain in action Apple maintains responsive consumer-electronics fundamentals (Module 1) AND adds risk-hedging geographic diversification. International trade compliance was central: **Incoterms 2020** terms selected to allocate customs work, **HS code classification** carefully managed to optimize FTA preferential tariffs (India is part of ASEAN dialogue partner agreements; Vietnam is CPTPP member), and **rules-of-origin engineering** ensured iPhones met the country-of-origin tests required for various FTAs. On the exam: international trade competence is not just compliance it's strategic positioning. Apple's "FCA + DDP multi-leg" pattern is a worked example of how big firms structure cross-border deals.

**Discussion (Socratic).**
- Q1: A mid-cap firm wants to copy Apple's diversification but lacks Apple's scale leverage to negotiate FCA terms. What 3 structural changes to their contracts would help them reduce China dependence without falling into the "EXW everything" trap that hurt Lara at Brewline (the module's opening story)?
- Q2: India's PLI subsidy expires 2027. What's the case for committing to India production *anyway*, and what's the case for retreating to China when subsidies end?
- Q3: Apple's India ramp coincided with US-China trade war escalation. To what extent would Apple have diversified *without* the geopolitical pressure, purely on COVID + Zhengzhou unrest grounds? Construct the counterfactual.

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Incoterms cover title transfer" | NO, Incoterms cover **cost, risk, and tasks**, not title. Title is in the sales contract |
| "FOB applies to air cargo" | NO, FOB is sea/inland water only; use FCA for air/container |
| "CFR includes insurance" | NO, CIF includes insurance; CFR does not |
| "DDP is best for buyers" | Often yes for buyers, but sellers face high regulatory exposure |
| "Tariff = duty" | Tariff is the rate; duty is the amount paid |
| "All LCs are the same" | Sight, usance, revolving, standby, back-to-back are different instruments |
| "Free trade zones eliminate all duties" | They defer duties; if goods enter the domestic market, duty applies |

---

## 🚨 Exam Traps

1. **DAT/DPU rename**, 2020 changed DAT to DPU.
2. **EXW = seller does nothing**, Including no export clearance. Painful for buyers.
3. **DDP = seller does everything**, Including import duties. Painful for sellers.
4. **CIF vs CIP insurance**, CIF uses Clause C (basic); CIP uses Clause A (broad).
5. **HS code level**, 6 digits is global; countries extend to 10 for national tariff lines.
6. **LC rules**, Banks pay against *documents*, not against goods condition.
7. **UCP 600** governs LCs; **Incoterms 2020** governs shipment terms.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Incoterms 2020** | ICC rules allocating cost/risk/tasks between buyer and seller |
| **11 Incoterms** | EXW, FCA, CPT, CIP, DAP, DPU, DDP, FAS, FOB, CFR, CIF |
| **HS code** | Global 6-digit goods classification |
| **MFN tariff** | Standard WTO rate between members |
| **Rules of Origin** | Determine FTA eligibility |
| **Bill of Lading** | Freight contract + receipt |
| **Letter of Credit** | Bank payment guarantee |
| **UCP 600** | ICC rules governing LCs |
| **ATA Carnet** | Temporary admission passport |
| **Free Trade Zone** | Duty-deferred designated area |
| **C-TPAT / AEO** | Trusted-trader programs |
| **Forward contract** | FX hedge, lock rate for future date |
| **Anti-dumping duty** | Extra duty when import is priced below fair value |
| **Inverted tariff** | Components dutied higher than finished goods |
| **Maquiladora** | Mexican manufacturing program |

---

## ✅ Module 8 Summary

You now know:

- 📜 All 11 Incoterms 2020 and their groupings
- 🏛️ Tariffs, duties, HS codes
- 🌍 FTAs and rules of origin
- 🛂 Customs documentation stack
- 💳 Letters of credit (parties, types, UCP 600)
- 💱 FX exposure types and hedging instruments
- 🏗️ Free trade zones and bonded warehouses
- 📜 Trade compliance: classification, valuation, origin, screening, controls

**Next steps:**
1. 🎥 [Videos.md](./Videos.md)
2. ✏️ [Quiz.md](./Quiz.md)
3. 📋 [Cheat-Sheet.md](./Cheat-Sheet.md), includes printable Incoterms table
4. ➡️ [Module 9: Sustainability, Risk & CSR](../Module-09-Sustainability-Risk-CSR/Reading.md)

---

> **Where this leads.**
> - Inside this course: Module 9 takes geopolitical and trade-compliance risk into the formal SCRM framework (ISO 31000); Module 10 connects international trade efficiency to continuous-improvement KPIs (Key Performance Indicators).
> - Cross-course: `12-ASCM-CLTD` Module 8 covers logistics-side international trade in more operational depth; `13-ISM-CPSM` Module 4 takes international sourcing strategy deeper.
> - Practice: Practice Exam 2 has ~12 Incoterms questions; Final Mock has 11-13 questions in this domain.

---

## 💬 Discussion, Socratic prompts

1. **DDP looks generous; defend the seller.** A US importer always demands DDP terms ("seller handles everything including duty"). A Chinese supplier hates DDP, they don't know US tariff regimes. Construct the cost analysis where the Chinese supplier should ACCEPT DDP anyway, and where they should refuse.
2. **The 2025 tariff cliff.** The US-China tariff regime changed sharply in 2025. Construct the argument: should a US importer accelerate India / Vietnam orders during the 145% Trump-2 tariff peak, or wait for negotiated reductions? What's the financial breakeven?
3. **FTZ vs bonded warehouse.** Both defer duty. When does an FTZ beat a bonded warehouse, and when does it lose? Cite the inverted-tariff scenario.
4. **The LC discrepancy game.** Banks reject ~50% of first-presentation LCs for "discrepancies." A small exporter takes 30-60 day payment delays as a result. Defend the proposition that LCs are no longer worth the cost for sub-$500K transactions, and identify when LCs still earn their keep.
5. **Natural vs financial hedge.** A US importer with €100M annual euro payables can either buy €100M forward contracts every year OR open a European subsidiary that generates €60M revenue (partial natural hedge). Walk through the strategic trade-off, when does the operational hedge win the financial one?

---

## 📚 Further Reading (Optional)

- 📖 ICC, *Incoterms 2020*, ICC Publication 723E, 2019 (the authoritative reference; available at iccwbo.org)
- 📖 ICC, *UCP 600* Uniform Customs and Practice for Documentary Credits ICC Publication 600, 2007
- 📖 World Customs Organization (WCO) HS Nomenclature, current 2022 edition (revised every 5 years)
- 📖 ASCM CSCP Learning System Module 8
- 📖 US CBP (cbp.gov) official US customs guidance; EU TARIC database eur-lex.europa.eu
- 📖 World Trade Organization, *World Trade Report* (annual), global trade trends with 2024 issue covering nearshoring
- 📰 Peterson Institute for International Economics (piie.com), current US trade policy analysis
- 📰 *Journal of International Business Studies* (Academy of International Business), academic FDI/trade research
