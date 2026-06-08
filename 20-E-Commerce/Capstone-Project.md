# Capstone Project, E-Commerce

> **Format:** Self-directed; 12-18 weeks; ~80-110 hours of work
> **Deliverables:** 7 artifacts + a board-grade executive readout
> **Scoring:** Use the rubric below to self-grade or peer-review with an e-commerce director or operator-investor

---

## Brief

You have just been hired as **Director of E-Commerce at Hearthwood & Co.**, a $90M Series-B home-goods DTC brand selling premium textiles, ceramics, and small-batch lighting. Hearthwood operates a Shopify Plus storefront, a 1,800-door specialty wholesale program, and an emerging Amazon FBA presence (~$11M GMV, eroding margins). The CEO/co-founder is also the CMO. Hearthwood spends **~$1.4M/month** on paid acquisition (Google + Meta + Amazon Ads + TikTok), $360K/month on agency/freelance retainers, and runs a 14-person in-house team across product, ops, and marketing. **Annual GMV last fiscal year: $90M. Annual contribution margin: 38%.** The Series B investors have given the CEO a 12-month mandate:

> "Grow from $90M to $160M GMV in 12 months 78% growth while protecting at least 38% contribution margin. We want to see a platform decision, a clean catalog, an honest paid-acquisition restructure, a marketplace expansion that doesn't cannibalize DTC, and a credible internationalization plan. You have an $18M total budget for the year across media, hiring, and tooling. Board reviews quarterly. Bring the numbers."

**The situation you've walked into.** The Shopify Plus theme is heavily customized (no longer upgradeable without a $400K replatform); Adobe Commerce was evaluated but never decided. The catalog has 4,200 SKUs across textiles, ceramics, and lighting, but variants are inconsistent, GTINs are missing on ~31% of products, and the team uses three Google Sheets as a de-facto PIM. Google Shopping feed disapprovals are at 22%. Paid spend by channel: Google PMax 41%, Meta ASC 29%, Amazon Ads 18%, TikTok Shop 8%, Pinterest 4%. Last-click attribution shows Google blended ROAS at 4.8 and Meta at 3.1, but the CFO suspects Google is over-credited 20-30% due to brand cannibalization. Email is on Klaviyo with 6 flows, all 11+ months stale. The fulfillment network is one Pennsylvania 3PL (ShipBob) plus Amazon FBA; East Coast next-day rates are good, West Coast is 4-7 days. The team has never sold internationally and the CEO has been pitched on Global-e, Zonos, and ESW with no decision. The board has six expansion-market hypotheses (UK, Germany, France, Canada, Australia, Japan); you must pick 1-2 to test in months 6-12.

You have 12 months. The board reviews quarterly: Day 90, Day 180, Day 270, Day 360.

---

## Deliverables (7 artifacts)

### 1. Platform Replatform Assessment (Modules 1, 2, 3, 10)

Write a **6-8 page platform-decision memo** that the board can act on. It must include:

- **Current state diagnosis**, what's actually broken in the customized Shopify Plus theme (concrete file/section list), what the Adobe Commerce evaluation said, what the headless option (Shopify Hydrogen) would unlock
- **Three options analyzed**
  1. **Stay on Shopify Plus, "de-custom"**, 4-6 month theme refactor onto Online Store 2.0 + Hydrogen migration path for selected pages (PDP, Collection)
  2. **Replatform to Adobe Commerce 2.4**, 9-12 month, $1.2-2.0M project, deep B2B catalog flexibility but engineering-heavy
  3. **Replatform to commercetools + Vue Storefront (composable)**, 12-18 months, $1.8-3.0M, MACH-aligned, best for international + B2B but bleeding-edge
- **For each option:** total cost of ownership (3-year), time-to-launch, risk register, the named vendors/agencies, and the migration data-mapping table at the catalog and customer level
- **Recommendation**, pick one, defend it against the other two, name the 3-month milestone, the 9-month milestone, and the rollback trigger
- **PCI-DSS v4.0 + Consent Mode v2 + IOSS implications** for each platform option

**Format:** Markdown or Google Doc, 2,500-4,000 words. Cite the Allbirds 2022-2024 replatform journey and Glossier's 2023 Hydrogen migration as comparables. Cite the MACH Alliance 2024 composable-commerce report.

### 2. PIM Rollout + Catalog Cleanup Plan (Modules 3, 9, 10)

Hearthwood's 4,200-SKU catalog is the single biggest constraint on growth across DTC, marketplaces, and international. Design:

- **PIM vendor selection**, Akeneo Community (free) vs Akeneo Enterprise vs Salsify vs Pimcore vs Plytix; one-page comparison; recommendation with TCO
- **Attribute schema**, the master attribute set for the three product families (textiles, ceramics, lighting), the channel-specific mapping (Shopify, Amazon, Google Merchant Center, Walmart, Faire), the locale-specific overrides for 6 candidate markets
- **GTIN remediation plan**, the 31% missing-GTIN backlog, the GS1 registration path, the 90-day completion timeline
- **Taxonomy redesign**, the customer-facing collection tree, the merchant-facing internal taxonomy, the mapping between them
- **Data governance**, who owns each attribute, the change-control process, the QA checklist, the weekly catalog-health KPI dashboard (feed disapprovals, missing-attribute %, image-coverage %, translation completeness)
- **Implementation roadmap**, 8-week build → 16-week migration → ongoing operations; staffing and freelancer-hours budget

**Format:** 1-page vendor comparison + 1-page attribute schema spreadsheet + 3-page roadmap narrative.

### 3. Paid Acquisition Restructure: Google + Meta + Amazon + TikTok (Modules 7, 9)

The current $1.4M/month paid spend needs to be re-architected against contribution margin (not blended ROAS). Design:

- **Per-channel architecture**
  - **Google:** Brand Search isolation, Non-Brand Search, Performance Max with Customer Acquisition goals + brand exclusions, Shopping with manual feed control for the top 200 SKUs by margin, YouTube TrueView for new-customer acquisition
  - **Meta:** ASC for the top 500 SKUs, manual ASC+ for testing, retention campaigns for past purchasers (with ECB cap = 30% to force prospecting), DABA exclusions
  - **Amazon:** Sponsored Products (search-defense + competitor conquesting), Sponsored Brands (brand store traffic), Sponsored Display (off-Amazon retargeting); ACoS targets per category
  - **TikTok Shop:** Spark Ads with creator-led UGC, Smart Performance campaigns, daily budget caps; the testing-budget envelope
  - **Pinterest:** under-budget; recommend retention or kill
- **Contribution-margin reconciliation**, for each channel, the blended ROAS target translated to contribution-margin ROAS; the methodology to allocate fixed costs (the 14-person team, the $360K agency retainers)
- **Geo-holdout incrementality plan**, 5-10% US holdout for 4 weeks each for Meta and Google; the regression-discontinuity methodology
- **AI-creative pipeline**, how Claude/ChatGPT + Midjourney + Runway + ElevenLabs feed an AI-augmented creative-rotation cadence
- **The 14-day kill criteria**, for every new campaign

**Format:** Spreadsheet (channel × budget × bidding × target × kill criteria) + 4-page strategy narrative.

### 4. CRO + Lifecycle Program (Modules 6, 8)

Design the on-site and lifecycle program that compounds paid-acquisition spend:

- **CRO 12-month test roadmap**, 50+ tests across PDP, Collection, Cart, Checkout, Homepage, Search-result page; for each test the hypothesis, the expected lift band, the required sample size (use the Kohavi/Tang/Xu sequential framework), the design freelancer-hours budget
- **Site speed + Core Web Vitals plan**, current LCP, INP, CLS; the 12-week remediation backlog; the Cloudflare or Bunny CDN evaluation; the Hydrogen migration overlap
- **Klaviyo flow redesign**, all 7 foundational flows (Welcome, Abandoned Cart, Browse Abandonment, Post-Purchase, Win-Back, Birthday, Replenishment), each with the multi-channel layer (email + SMS via Klaviyo SMS or Postscript)
- **UGC + reviews program**, Yotpo or Okendo selection, the post-purchase touchpoint cadence, the AI prompt that pulls high-quality review content for ad-variant repurposing
- **Loyalty + subscription**, should Hearthwood launch a loyalty program? A subscription tier for the 23% of customers who order ceramics monthly? The financial model for each.
- **Personalization layer**, Mutiny vs Dynamic Yield vs Klaviyo Native; the 3 first-time-vs-returning-visitor experiments

**Format:** 1-page test calendar + 1-page flow architecture diagram + 3-page narrative.

### 5. Marketplace Expansion Strategy (Modules 5, 9)

Hearthwood does ~$11M on Amazon (eroding margin) and zero on Walmart, Etsy, Faire, or TikTok Shop. Design:

- **Amazon FBA optimization**, the FBA-vs-FBM decision tree per SKU based on size/weight + margin; the Buy with Prime DTC integration (announced for Shopify in 2024); the brand registry + brand store optimization
- **Walmart Marketplace launch**, the application process, the catalog-mapping task, the WFS (Walmart Fulfillment Services) vs seller-fulfilled decision, the 90-day launch plan
- **Faire B2B marketplace**, should Hearthwood use Faire to reach the 1,800 specialty retailers it currently sells wholesale to direct? Faire's 25%-rebate-on-first-order economics and lock-in
- **TikTok Shop scale-up**, moving from "channel test" to a $30K/month creator-led commerce program
- **Cannibalization analysis**, for each marketplace, the methodology to measure whether marketplace sales are net-new or just stealing from DTC; the customer-overlap audit using order email matches

**Format:** 1-page channel-by-channel financial model + 4-page strategy narrative.

### 6. International Expansion: Pick 2 Markets (Module 10)

The board has 6 candidate markets (UK, Germany, France, Canada, Australia, Japan). Pick 2. Defend.

- **For each candidate market:** market sizing (Statista, Euromonitor), competitive landscape, regulatory burden (UK post-Brexit, EU GDPR + DSA + EU AI Act 2024, AU Consumer Law, JP labeling), payment-method localization (Klarna in DE/SE, Bancontact in BE, JCB in JP), language/locale requirements
- **For the 2 picks:** the launch architecture, DDP shipping via Global-e or Zonos or in-house? Cross-border fulfillment via 3PL like Whistl (UK) or DHL (DE)? IOSS registration? Multi-currency on Shopify Markets vs separate domains?
- **18-month financial model**, for each market, year-1 revenue projection, contribution-margin walk, the breakeven month
- **Risk register**, currency volatility, tariff exposure (especially US-to-EU and EU-to-UK), local-tax audit risk

**Format:** 1-page market scoring matrix + 4-page narrative on the 2 picks + spreadsheet financial model.

### 7. 18-Month Financial Model + Board Readout (All Modules)

Tie everything together:

- **Master P&L model**, monthly revenue by channel (DTC, Amazon, Walmart, international, wholesale), monthly variable costs (COGS, fulfillment, payment processing, paid media, lifecycle tooling), monthly fixed costs (team, agencies, platform, PIM, CRO tools); the path from $90M → $160M
- **Contribution-margin walk**, quarter-by-quarter, channel-by-channel, the path from 38% to 38%+ defended
- **Working-capital impact**, inventory days, AR days, AP days; the cash-conversion cycle implications of the marketplace + international expansion
- **Quarterly board readout deck**, 4 slide sets (Day 90, 180, 270, 360); each deck 8-12 slides; the framework: "what's working / what's not / what we're changing / what we need from the board"
- **Risk register**, top 10 risks across platform, supply chain, paid media, regulatory; the mitigation owner for each

**Format:** Spreadsheet master model + a 1-page executive summary + 12 board slides (markdown or Google Slides).

---

## Rubric (scored out of 100)

| Criterion | Points | Excellent (90-100%) | Acceptable (70-89%) | Below bar (<70%) |
|-----------|--------|---------------------|---------------------|------------------|
| **Platform replatform assessment** | 14 | Three options analyzed with full 3-year TCO + risk register + rollback trigger; cites named comparables (Allbirds, Glossier) | Most elements present, TCO thin | Generic "stay vs go" without TCO or risk register |
| **PIM rollout + catalog cleanup** | 14 | Vendor selected with TCO + full attribute schema + GTIN remediation + data governance | Vendor named, schema thin | Vendor named without schema or governance |
| **Paid acquisition restructure** | 16 | Per-channel architecture + contribution-margin reconciliation + incrementality plan + AI-creative pipeline + kill criteria | Most elements present, incrementality weak | Architecture without contribution-margin tie-back |
| **CRO + lifecycle** | 14 | 50+ test roadmap + flow redesign + UGC + loyalty model + personalization | Most elements present, sample-size math missing | Tests listed without prioritization or sample-size math |
| **Marketplace expansion** | 12 | 4 marketplaces analyzed + cannibalization audit + Buy with Prime decision | Most elements present, cannibalization thin | Single marketplace addressed |
| **International expansion** | 12 | 6 markets scored + 2 picked + 18-month financial model + IOSS/DDP/multi-currency plan | Most elements present, financial model thin | Markets discussed without picks or financial model |
| **18-month financial model + board readout** | 12 | Master P&L + contribution-margin walk + working capital + 4 quarterly board decks + risk register | Most elements present, board decks abbreviated | Single dashboard without operational rhythm |
| **Overall integration** | 6 | All deliverables interlocked; GMV math defensible end-to-end | Most interlock, GMV math thin | Deliverables stand alone |

**Pass mark:** 75/100 overall, with no individual criterion below 50%.

---

## Suggested Timeline (16 weeks)

- **Weeks 1-2:** Deliverable 1 (Platform assessment). The platform decision shapes everything else; do not skip.
- **Weeks 3-4:** Deliverable 2 (PIM + catalog) kickoff in parallel with Deliverable 3 (Paid restructure) Week 1 audit.
- **Weeks 5-6:** Deliverable 3 (Paid restructure) full architecture + Deliverable 4 (CRO + lifecycle) test calendar.
- **Weeks 7-8:** Deliverable 4 deeper work (Klaviyo flow redesign + UGC + loyalty model). First wave of CRO tests ships in a parallel mock environment.
- **Weeks 9-10:** Deliverable 5 (Marketplace expansion), Amazon, Walmart, Faire, TikTok Shop.
- **Weeks 11-12:** Deliverable 6 (International), market scoring + 2 picks + financial model.
- **Weeks 13-14:** Deliverable 7 (Master P&L + board readout), integrate everything into a single 18-month model.
- **Week 15:** Mock board readout to a peer or mentor. Get feedback. Iterate.
- **Week 16:** Final pass + the self-grading rubric.

If you have only 8-12 weeks (compressed mode): combine Weeks 5-6 with 7-8 and combine 11-12 with 13-14. Do not skip Deliverable 1 (platform) or Deliverable 7 (master financial model).

---

## What "submission" looks like

This is a portfolio you build for yourself. Save as:
```
/E-Commerce-Capstone-Hearthwood/
   01-platform-replatform-assessment.pdf
   02-pim-rollout-plan.xlsx + 02-pim-attribute-schema.xlsx
   03-paid-acquisition-restructure.xlsx + 03-paid-strategy-narrative.pdf
   04-cro-lifecycle-program.xlsx + 04-cro-narrative.pdf
   05-marketplace-expansion.pdf + 05-marketplace-financial-model.xlsx
   06-international-expansion.pdf + 06-intl-financial-model.xlsx
   07-master-pnl-model.xlsx + 07-quarterly-board-decks.pdf
   README.md  (1-page executive summary + self-score + the GMV math)
```

Self-grading: complete the rubric above honestly. If you're below 75, identify the 2-3 weakest deliverables and redo them. Peer review (an e-commerce director or operator-investor) is even better.

---

## Optional Stretch Goals

If you want to push beyond pass:

1. **Build the actual PIM.** Spin up a free Akeneo Community Edition instance, ingest a CSV of 100 sample SKUs across the 3 product families, configure the attribute schema, and document the connector setup to Shopify and Google Merchant Center.
2. **Build the geo-holdout test.** Design a Meta holdout in 6% of US zip codes for 28 days with a regression-discontinuity analysis plan. Reference Kohavi/Tang/Xu Chapter 14 on geo experiments.
3. **Build a sample composable storefront.** Use commercetools' free tier + Algolia free tier + Sanity free tier + a Hydrogen frontend on Vercel; ship 10 PDP pages and document the architecture diagram.
4. **Wire the master P&L to live data.** Use Triple Whale or Northbeam's free trial + Shopify API + Klaviyo API to build a live dashboard reflecting at least 3 months of historical Hearthwood-shaped data.
5. **Stress-test the international model.** Run two scenarios: a 15% USD-EUR move and a 25% tariff scenario; rebuild the year-1 model for both and document the contribution-margin impact.

---

## Why this Capstone Matters

Director-of-E-Commerce hiring loops in 2026 test exactly this: can you stand in front of a $90M-$200M brand's board, defend a $18M plan, and own a 12-month GMV target without hand-waving the unit economics. If you can defend each of these 7 deliverables to a peer or a board-grade audience, you will pass Adobe Commerce Business Practitioner, Google Shopping Ads, Amazon Ads Foundations, and Meta Blueprint Commerce comfortably, and more importantly, you'll be ready for the Director role this capstone simulates.

The bar Wharton's Peter Fader applies to the field: *every customer is not equal; every dollar should not be allocated equally; every decision should be defended in CLV-to-CAC terms.* Carry that into the capstone and you'll cross the bar.

Good luck. The numbers move when you move them. 🛒
