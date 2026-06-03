# Module 4: Payments, Tax & Fraud 💳

> **Why this module matters:** Every order you take goes through three gates — payment, tax, fraud. Get any one of them wrong and the business breaks: failed checkouts kill conversion, missed sales tax filings draw state audits, fraud chargebacks above 1% trigger Visa/Mastercard monitoring programs that can shut down your processing. This module gives you the operating knowledge of Stripe, Adyen, PCI-DSS v4.0, post-Wayfair sales tax, EU VAT MOSS, SCA / 3DS2, and the fraud stack.

---

## 🎯 A Real Story: Stripe's Pandemic-Era Scaling

In March 2020, e-commerce volume globally jumped 30-40% in two weeks. Stripe — Patrick and John Collison's payment processor, founded 2010 — went from processing roughly $250B/year in 2019 to over $1T/year in 2024. That's a 4x volume increase in 4 years, plus a 50x increase in some sectors (telehealth, food delivery, education tech).

The interesting part isn't the volume. It's that Stripe scaled without breaking. They didn't replatform. Their core APIs (`/v1/payment_intents`, `/v1/charges`, `/v1/customers`) remained backward-compatible. Their fraud system (Stripe Radar) continuously improved through machine learning across the network — by 2024, Radar was preventing >$8B/year of fraud across Stripe's customer base.

Three operating principles emerged:

1. **API stability is a moat.** Stripe's commitment to not breaking the API has compounded over 14 years. Developers built businesses on top because Stripe wouldn't pull the rug.
2. **The hard work is in fraud and dispute mechanics, not payment processing.** Charging a card is solved. Knowing whether to charge the card, and what to do when the customer disputes the charge, is where the engineering is.
3. **Compliance scales with volume.** PCI-DSS, SCA in EU, state-by-state sales tax in US (post-Wayfair 2018), GDPR — each of these became a feature for Stripe's customers. Stripe Atlas (incorporation + business banking), Stripe Tax (sales tax compliance), Stripe Issuing (card issuing) all emerged from "we already had to solve this for ourselves."

By 2024, Stripe was valued at $65B in a secondary sale and was the largest privately-held fintech. They were also navigating regulatory tension — Klarna (a BNPL competitor) had been put under UK FCA supervision in 2024, signaling the era of consumer-credit regulation in BNPL.

The lesson: payments is plumbing. The discipline isn't choosing the cheapest processor; it's choosing the processor that won't surprise you when fraud spikes, when SCA kicks in, when sales tax nexus is triggered, or when a chargeback escalates.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - The basic e-commerce flow (cart → checkout → payment → fulfillment) — covered in [Module 1](../Module-01-E-Commerce-Fundamentals-Business-Models/Reading.md)
> - Storefront platform choices — covered in [Module 2](../Module-02-Storefront-Platforms-Architecture/Reading.md)
> - Catalog/pricing basics — covered in [Module 3](../Module-03-Product-Catalog-Information-Management/Reading.md)
> If any of these are shaky, pause and review before continuing.

---

## 💳 The Payment Stack — Who Does What

| Layer | What it does | Example vendors |
|-------|-------------|-----------------|
| **Card issuer** | Issues card to consumer | Chase, Capital One, Amex |
| **Card network** | Routes the transaction | Visa, Mastercard, Amex, Discover |
| **Acquirer / Acquiring bank** | Holds merchant account; settles funds | Worldpay, Adyen, JPMorgan Chase Paymentech |
| **Payment processor / gateway** | Communicates with networks; tokenization | Stripe, Adyen, Braintree, Authorize.Net |
| **Payment service provider (PSP)** | Often combines processor + acquirer + gateway | Stripe, Adyen, PayPal Braintree |
| **Wallets** | Tokenized customer payment methods | Apple Pay, Google Pay, Shop Pay, PayPal, Amazon Pay |
| **BNPL** | Installment payment | Klarna, Affirm, Afterpay, PayPal Pay-in-4 |

🧠 **MEMORIZE THIS.** The order: consumer → wallet/card → network → acquirer → processor → merchant. Money flows back along the reverse path. Most disputes arise between consumer and merchant but are mediated by the issuer.

---

## 🏪 The Major PSPs

### Stripe

Founded 2010 by Patrick & John Collison. Headquartered in San Francisco + Dublin. ~$1T+ annual payment volume by 2024. 50+ countries, 135 currencies.

**Strengths:**
- API quality — the developer-favorite. `payment_intents` API is the standard reference for modern payment flows.
- Fastest implementation (under 30 minutes for Stripe Checkout; days for Custom).
- Free Stripe Atlas (US incorporation + banking + tax setup) for non-US founders.
- Stripe Radar (fraud), Stripe Tax (sales tax), Stripe Connect (marketplace payouts), Stripe Issuing (cards).

**Pricing (2026):** 2.9% + $0.30 per online transaction (US); +0.5% for international cards; +1% for currency conversion. Stripe Tax adds 0.5% per transaction (capped).

### Adyen

Dutch-founded 2006. Public on Euronext Amsterdam (ticker ADYEN). Customers include Uber, Spotify, McDonald's, eBay, Microsoft. Enterprise-skewed.

**Strengths:**
- Single platform for online, in-store (POS), mobile, marketplace.
- Unified data across channels (powerful for omnichannel brands).
- Direct connections to all major networks worldwide (Adyen owns acquiring in many markets).
- RevenueProtect (Adyen's fraud product).

**Pricing:** Customized — typically 0.6% + interchange-pass-through for enterprise. Lower than Stripe for high-volume merchants but minimum monthly commitments.

### PayPal Braintree

PayPal-owned (acquired 2013 for $800M). Strong in marketplaces (Etsy, Airbnb). Vault for stored payment methods.

**Strengths:**
- PayPal wallet integration native.
- Venmo integration (US).
- Vault for tokenization.
- Connect for marketplace payouts.

**Pricing:** 2.59% + $0.49 for online (often slightly higher than Stripe).

### Bolt

Headless checkout specialist (founded 2014). Pivoted in 2022-2023 from one-click checkout (Bolt v1) to checkout-as-a-service. Customers include Forever 21, BarkBox.

### Shopify Payments

Powered by Stripe under the hood (Shopify Plus customers see Stripe's pricing minus Shopify's markup). Built into Shopify. Conversion-rate advantages from Shop Pay integration.

---

## 🛡️ PCI-DSS v4.0 (Mandatory March 2025)

The Payment Card Industry Data Security Standard, version 4.0, replaces v3.2.1. Maintained by the PCI Security Standards Council (a consortium of Visa, Mastercard, Amex, Discover, JCB).

**Twelve core requirements** (memorize the categories):

1. Install and maintain a firewall configuration.
2. Do not use vendor-supplied defaults for passwords.
3. Protect stored cardholder data.
4. Encrypt transmission of cardholder data across public networks.
5. Protect systems against malware.
6. Develop and maintain secure systems.
7. Restrict access to cardholder data by need-to-know.
8. Identify and authenticate access to system components.
9. Restrict physical access to cardholder data.
10. Log and monitor access to all systems.
11. Regularly test security systems and processes.
12. Maintain an information security policy.

**Compliance levels (Merchant):**
- **Level 1** — > 6M Visa/MC transactions/year. Annual on-site audit by QSA (Qualified Security Assessor).
- **Level 2** — 1-6M transactions/year. Annual SAQ + ASV scan.
- **Level 3** — 20K-1M e-commerce transactions/year. SAQ + ASV.
- **Level 4** — < 20K e-commerce transactions/year. SAQ.

**SAQ types (Self-Assessment Questionnaire):**
- **SAQ A** — Card data fully outsourced to PCI-compliant TPSP (third-party service provider). Most Shopify, BigCommerce, Stripe Checkout merchants.
- **SAQ A-EP** — E-commerce with merchant-controlled embedded forms (iframes). Common for Stripe Elements.
- **SAQ D** — All else. Full burden, including most self-hosted setups.

🚨 **Trap on the exam:** PCI-DSS v4.0 added new requirements for **client-side script management** (preventing Magecart-style attacks via JavaScript injection on payment pages). All v4.0 merchants must maintain an inventory of scripts on payment pages, justify each, and detect unauthorized changes. This requirement is mandatory March 2025.

🧠 **MEMORIZE THIS.** PCI-DSS v4.0 became mandatory March 2025. Six new requirements specifically address script management on payment pages (Requirements 6.4.3 and 11.6.1).

---

## 🔐 SCA and 3DS2 (Strong Customer Authentication)

The PSD2 regulation (Payment Services Directive 2, EU, effective September 2019 with enforcement phased through 2021) requires **Strong Customer Authentication** on most card-not-present transactions in the EU/UK. SCA is delivered via the **3-D Secure 2** (3DS2) protocol.

**Two-factor requirement:** SCA requires two of three factors:

- **Knowledge** (something you know — password)
- **Possession** (something you have — phone for OTP)
- **Inherence** (something you are — biometrics)

**Exemptions** (defined in PSD2):

- Low-value transactions (< €30)
- Recurring transactions of fixed amount (subscriptions after first)
- Merchant-initiated transactions (e.g., post-purchase top-up)
- Trusted beneficiary (whitelisted merchants)
- TRA (Transaction Risk Analysis) — issuer/acquirer scores low risk

3DS2 (2018) replaced 3DS1 (2001). 3DS2 supports frictionless authentication for low-risk transactions (issuer makes the call without challenging the consumer). Result: ~75% of EU transactions in 2024 flow frictionlessly through 3DS2 even when SCA technically applies.

🎯 **Exam tip:** PSD3 (PSD2's successor) is currently in proposal stage at the EU Commission (proposed June 2023; expected effective 2026-2027). Expands the scope to cover Open Banking obligations more explicitly. Don't conflate PSD2 (current) with PSD3 (proposed).

---

## 🇺🇸 US Sales Tax — Post-Wayfair (2018)

In June 2018, the US Supreme Court decided *South Dakota v. Wayfair, Inc.*, 138 S. Ct. 2080 (2018), overturning *Quill Corp. v. North Dakota* (1992). The ruling held that states can require remote sellers to collect sales tax based on **economic nexus** — not just physical presence.

**Economic nexus thresholds (typical, vary by state):**
- $100,000 in annual sales into the state, OR
- 200 transactions per year (some states; many states dropped this in 2023-2024)

By 2024, all 45 states with sales tax had adopted economic nexus. Each state has its own:

- Threshold dollar amount and/or transaction count
- Rate (state + local; ~10,000 distinct rates in the US)
- Filing frequency (monthly / quarterly / annually)
- Marketplace facilitator law (states that require marketplaces like Amazon to collect/remit on behalf of 3P sellers)

**Tax automation vendors:**
- **Avalara AvaTax** — largest enterprise vendor; multi-jurisdiction global.
- **TaxJar** (acquired by Stripe in 2021, integrated as Stripe Tax) — DTC-friendly.
- **Vertex** — enterprise.
- **Sovos** — enterprise + Europe.
- **Stripe Tax** — native to Stripe; 0.5% per transaction; handles US + EU + UK + Australia.

🚨 **Trap on the exam:** Marketplace Facilitator Laws (state-level, started 2017-2020) require platforms like Amazon, Etsy, eBay, Walmart Marketplace to collect/remit sales tax on behalf of 3P sellers. As a 3P seller, you don't owe tax on marketplace sales in MFL states — but you DO owe tax on DTC sales of the same products. This trips up brands that go multi-channel.

🧠 **MEMORIZE THIS.** Wayfair (2018) = economic nexus. Threshold typically $100K OR 200 transactions. ~45 states. ~10,000 rates. Marketplace Facilitator Laws shift tax responsibility from 3P seller to marketplace.

---

## 🇪🇺 EU VAT — OSS, IOSS, and Cross-Border Sales

EU VAT (Value-Added Tax) rules changed dramatically on July 1, 2021:

- **OSS** (One Stop Shop) — sellers established in the EU register once and remit VAT across all 27 EU states. Replaced the old MOSS (Mini One Stop Shop) for B2C digital services.
- **IOSS** (Import One Stop Shop) — non-EU sellers shipping low-value goods (≤€150) to EU consumers can register once and remit EU VAT at checkout. Without IOSS, EU customs collects VAT + fees on import, often surprising the customer with delivery charges.
- **The €22 low-value exemption was eliminated.** Pre-2021, imports under €22 were VAT-free; this caused massive AliExpress/Wish abuse. Now every import owes VAT.

**EU VAT rates (2026):**
| Country | Standard rate |
|---------|---------------|
| Hungary | 27% |
| Croatia, Denmark, Sweden | 25% |
| Greece, Finland | 24% |
| Ireland, Italy, Netherlands, Poland | 23% |
| Belgium, France, Spain, Latvia | 21% |
| Germany | 19% |
| Czech Republic | 21% |
| Cyprus | 19% |
| Luxembourg | 17% |
| Malta | 18% |

🎯 **Exam tip:** Adobe Commerce Business Practitioner often asks about cross-border VAT scenarios. The right answer for a non-EU brand shipping to EU consumers: register for IOSS, collect VAT at checkout based on destination country, use DDP (Delivered Duty Paid) shipping to avoid customer surprise charges.

---

## 🌎 Other Major Tax Regimes

| Region | Tax | Key facts |
|--------|-----|----------|
| UK | VAT 20% standard | Post-Brexit; separate from EU; £85K registration threshold for UK businesses |
| Canada | GST 5% federal + provincial PST/HST | Variable provincial rates 0-15% |
| Australia | GST 10% | $75K AUD registration threshold |
| Singapore | GST 9% (2024) | PDPA governs data; tax authority IRAS |
| Japan | Consumption Tax 10% | JCT registration for foreign sellers |
| India | GST 5-28% slabs | E-invoicing mandatory for above ₹5 crore |
| Mexico | IVA 16% | RFC required |
| Brazil | Multiple (ICMS, IPI, PIS, COFINS) | Most complex in the world |

🧠 **MEMORIZE THIS.** EU VAT in Germany = 19%. UK VAT = 20%. Australia GST = 10%. Singapore GST = 9% (2024 increase). These are the top exam-frequency rates.

---

## 🎯 BNPL — Buy Now Pay Later

BNPL exploded 2020-2022 (cheap money), then contracted in 2023-2024 (regulatory tightening, rising interest rates).

| Provider | Founded | Notes (2024-2026) |
|----------|---------|---------------------|
| Klarna | 2005 (Sweden) | $670B GMV processed cumulative; IPO planned 2025; UK FCA brought under supervision 2024 |
| Affirm | 2012 (US) | NASDAQ:AFRM since 2021; partnerships with Amazon, Shopify, Walmart |
| Afterpay | 2014 (Australia) | Acquired by Square (now Block) 2022 for $29B |
| PayPal Pay-in-4 | 2020 | Native to PayPal |
| Sezzle | 2016 | DTC-skewed; merged with WebBank 2022 |

**BNPL economics for merchants:**
- BNPL provider takes 3-6% of transaction (vs 2.9% card processing).
- Merchant gets paid upfront in full; BNPL provider takes credit risk.
- Lift in conversion: typically 20-30% AOV lift, 10-15% conversion-rate lift (BNPL providers' own data).
- Demographics skew younger (Gen Z, Millennials).

🚨 **Trap on the exam:** BNPL is consumer-credit and increasingly regulated. UK FCA brought Klarna under supervision in 2024. Australia regulated BNPL in 2024. US CFPB has been signaling tighter oversight. Don't promote BNPL as "interest-free credit" without disclosure.

---

## 💼 Case Study — Klarna's BNPL Regulatory Reckoning (2024)

**Situation.** Klarna, founded in Stockholm 2005, became the largest BNPL provider globally by 2022 — $670B+ cumulative GMV, 150M+ active consumers, 500K+ merchants. The company was valued at $45.6B in June 2021 (SoftBank Series H), the highest valuation for a European fintech. But 2022-2023 saw a 85% valuation crash (down to $6.7B in July 2022's down round) as interest rates rose, credit losses spiked, and regulators turned attention to consumer-credit risks. By 2024, Klarna was in active dialogue with the UK Financial Conduct Authority (FCA) about consumer-credit regulation.

**Decision.** In June 2024, the UK FCA confirmed that BNPL providers would be brought under UK consumer-credit regulation, requiring:

- Affordability checks on consumers before lending
- Disclosure of credit terms (even for 0% interest products)
- Section 75 protections (consumers can dispute via the lender on goods that don't arrive or aren't as described)
- Complaint-handling obligations

Klarna's response: pre-positioned for the regulation, working with the FCA on disclosure formats, redesigning its UK app to surface "this is credit" messaging, and adding affordability scoring before approval. CEO Sebastian Siemiatkowski publicly supported the FCA framework while pushing back on calls to classify BNPL as "high-cost credit." Klarna filed confidentially for a Nasdaq IPO in late 2024 at a reduced valuation target ($15-$20B range), pending the regulation landing.

**Outcome.** UK FCA regulation became effective for BNPL in 2025. Klarna's UK conversion rate dropped ~6% in the first three months post-implementation (affordability checks add friction). But the company stabilized credit-loss rates and successfully navigated parallel Australian regulation in 2024. The 2024 H1 financials showed return to profitability ($66M net income H1 2024 vs $300M+ losses in 2023).

**Lesson for the exam / for practitioners.** Payments and credit products are regulatory targets. As an e-commerce operator, you should not assume BNPL economics will hold static. Brands that built 20% of their revenue around BNPL "interest-free" framing in 2022 had to reframe in 2024-2025. Adobe Commerce Business Practitioner asks BNPL-regulation questions; the right answer is usually: "BNPL is a payment-method tool, not a marketing claim; treat it as regulated credit, disclose like credit."

**Discussion (Socratic).**
- Q1: Klarna's regulatory exposure was the result of operating as a credit product while marketing as a payment product. Where else in e-commerce does this pattern (marketing as one thing, regulated as another) show up?
- Q2: A $30M DTC brand sees 18% of orders use Klarna. The CFO worries about the regulatory exposure. Build the argument that Klarna should be diversified away from, and the argument that it shouldn't.
- Q3: Adyen, Stripe, and PayPal all offer BNPL via partners. What's the principle that decides whether a brand should integrate BNPL at the PSP layer vs the BNPL-direct layer?

---

## 🛡️ Fraud — Chargebacks, Friendly Fraud, and the Tooling

**Chargeback** — When a cardholder disputes a transaction with their issuer, the issuer reverses funds. The merchant loses:

- The sale (the funds reverse).
- The goods (often already shipped).
- A chargeback fee ($15-$25 per dispute).
- Network monitoring scoring (chargeback rate matters).

**Chargeback ratios to monitor:**
- < 0.5% — Healthy
- 0.5-1.0% — Watch
- 1.0%+ — Visa/Mastercard chargeback monitoring program enrollment
- 1.5%+ — Excessive chargeback program; processor may terminate

**Types of fraud:**
| Type | What it is |
|------|-----------|
| **Card-not-present fraud** | Stolen card used online |
| **Account takeover** | Customer's existing account hijacked |
| **Friendly fraud / chargeback abuse** | Customer claims dispute on legitimate purchase |
| **Triangulation fraud** | Fraudster acts as a fake reseller, fulfills from stolen-card-purchased inventory |
| **Refund fraud** | Customer claims refund for goods received |
| **Loyalty point fraud** | Hacking gift cards, point balances |

**Fraud-prevention vendors:**
- **Stripe Radar** — Native to Stripe; rules + ML; free tier.
- **Signifyd** — Chargeback guarantee (insurance model); takes 0.5-1.5% per transaction in return for indemnifying chargebacks.
- **Kount** (Equifax) — Enterprise rules + device intelligence.
- **NoFraud** — Mid-market; chargeback guarantee model.
- **Riskified** — Enterprise; AI-driven.
- **Bolt Fraud Defense** — Bundled with Bolt checkout.

🎯 **Exam tip:** "Friendly fraud" is the largest growing category (Visa's 2024 data: ~40% of disputes). Signifyd's data on fraud rates by category: travel (lowest, ~0.2%), apparel (mid, ~0.5%), electronics (highest, ~1.5%). Memorize that electronics are highest-fraud.

---

## 📝 Wallets — Apple Pay, Google Pay, Shop Pay, PayPal

Wallets dramatically improve checkout conversion. Baymard 2024 benchmarks show wallet-driven checkout converts 35-45% higher than manual card entry on mobile.

**Wallet adoption (2026):**
- **Apple Pay** — 50%+ of iOS users; ubiquitous in US, UK, EU; mandatory in Japan (per regulation).
- **Google Pay** — Strong in Android; less penetration in US than Apple Pay.
- **Shop Pay** — Shopify-native; 100M+ shoppers; one-click on any Shopify-powered site.
- **PayPal** — 400M+ global users; especially strong in Germany, Australia.
- **Amazon Pay** — 50M+ active users; Buy with Prime integration.

🧠 **MEMORIZE THIS.** Shop Pay is the fastest checkout per Baymard 2024 benchmarks. It works cross-merchant on Shopify-powered sites because Shopify tokenizes the customer once.

---

## 🌐 Multi-Currency and FX

**Multi-currency display vs multi-currency settlement.**
- **Display** — show prices in customer's local currency, settle in your home currency. Conversion happens at checkout via FX rate. Lower setup; FX rate volatility is your risk.
- **Settlement** — bank account in each currency, settle locally, repatriate manually. Better margin; complex setup.

**FX provider options:**
- Stripe/Adyen built-in (1.0-2.0% spread).
- Wise (formerly TransferWise) Business — for repatriation.
- OFX, Convera, Currency Cloud — enterprise.

🚨 **Trap on the exam:** Currency conversion at checkout typically costs 1-2% over the mid-market FX rate. This shows up as "FX fees" line in your P&L. Multi-currency display without multi-currency settlement is a margin tax — fine for early stage, costly at $20M+ in international revenue.

---

## ⚡ Common Payment / Tax / Fraud Failure Modes

1. **Not registering for sales tax in nexus states.** State audits typically arrive 18-36 months after threshold-crossing. Penalties + interest + back-tax can total 40-60% of unremitted liability.
2. **Treating BNPL revenue at face value without regulatory consideration.** BNPL is credit; consumer-credit rules apply.
3. **Single PSP with no failover.** If Stripe has an outage (rare but happens), you lose revenue. Adyen + Stripe with failover routing protects.
4. **No 3DS2 implementation for EU.** Authorization rates drop 30-40% on transactions that should have been frictionless-3DS2.
5. **Self-hosted Magento with PCI-DSS gaps.** PCI-DSS v4.0 script-management requirements (Requirement 6.4.3, 11.6.1) trip up self-hosted setups.
6. **Chargeback ratio creeping above 1%.** By the time Visa enrolls you in CMP (Chargeback Monitoring Program), you're months from termination.
7. **Surprise customs charges at delivery (no IOSS for EU).** Cart abandonment at customs page kills cross-border conversion.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **PSP** | Payment Service Provider |
| **PCI-DSS v4.0** | Payment Card Industry Data Security Standard (mandatory Mar 2025) |
| **SAQ A / A-EP / D** | Self-Assessment Questionnaire levels |
| **SCA** | Strong Customer Authentication (PSD2, EU) |
| **3DS2** | 3-D Secure 2 protocol for SCA |
| **PSD2 / PSD3** | EU Payment Services Directive 2 / 3 |
| **Wayfair (2018)** | US Supreme Court case; economic nexus for sales tax |
| **Economic nexus** | Sales-tax obligation based on revenue / transaction count |
| **MFL** | Marketplace Facilitator Law |
| **OSS / IOSS** | EU VAT One Stop Shop / Import One Stop Shop |
| **VAT** | Value-Added Tax |
| **BNPL** | Buy Now Pay Later |
| **Chargeback** | Cardholder dispute reversing funds |
| **CMP** | Chargeback Monitoring Program (Visa) |
| **Friendly fraud** | Cardholder disputes legitimate purchase |
| **Tokenization** | Replacing card data with a token that has no value if stolen |
| **DDP / DAP** | Delivered Duty Paid / Delivered at Place |

---

## ✅ Module 4 Summary

You now know:

- 💳 The payment stack (issuer, network, acquirer, processor, PSP, wallet)
- 🏪 Major PSPs (Stripe, Adyen, PayPal Braintree, Bolt)
- 🛡️ PCI-DSS v4.0 (mandatory March 2025; new script-management requirements)
- 🔐 SCA / 3DS2 / PSD2 / proposed PSD3
- 🇺🇸 Wayfair (2018) + economic nexus + MFLs
- 🇪🇺 EU VAT OSS / IOSS / country rates
- 🌎 Global tax regimes (UK, AU, SG, JP, IN, MX, BR)
- 🎯 BNPL providers + 2024 regulatory reckoning
- 🛡️ Fraud types and vendors (Stripe Radar, Signifyd, Kount)
- 📝 Wallets (Apple Pay, Google Pay, Shop Pay, PayPal, Amazon Pay)
- 🌐 Multi-currency display vs settlement

**Next steps:**
1. 🎥 Videos.md
2. ✏️ Quiz.md
3. 📋 Cheat-Sheet.md
4. ➡️ [Module 5: Fulfillment, Logistics & Returns](../Module-05-Fulfillment-Logistics-Returns/Reading.md)

---

## 💬 Discussion — Socratic prompts

1. A $40M DTC brand currently uses Shopify Payments (Stripe under the hood). The CFO wants to switch to Adyen "for cost savings." Build the argument FOR switching and the argument AGAINST. What gating metric would you measure?

2. Wayfair (2018) shifted sales-tax responsibility from physical-presence to economic-nexus. But many brands haven't registered in all 45 states. What's the principle that decides when retroactive registration is the right move vs paying penalties later?

3. PCI-DSS v4.0's script-management requirements (6.4.3, 11.6.1) became mandatory March 2025. Most brands haven't audited their payment-page scripts. What's the minimum-viable compliance program for a $20M brand on Shopify Plus?

4. Klarna lost 85% of its valuation 2021-2022 partly because BNPL's economic model didn't survive rising interest rates. As an e-commerce operator with 18% of revenue going through Klarna, what's your hedge?

5. Stripe Radar (free) vs Signifyd ($0.5-1.5% per transaction, chargeback-guaranteed). For a $50M GMV apparel brand with 0.6% chargeback rate, which is the right call, and what changes the answer?

---

> **Where this leads.**
> - Inside this course: Module 5 connects payment-completion to fulfillment (cart abandonment + checkout-to-ship); Module 7 returns to fraud at the paid-acquisition fraud-rate level; Module 10 returns to cross-border tax (IOSS, multi-currency) for international expansion.
> - Cross-course: [09-CompTIA-Security-Plus Module 7](../../09-CompTIA-Security-Plus/Module-07-Endpoint-Mobile-Cloud-Security/Reading.md) covers IAM disciplines that complement PCI-DSS.
> - Practice: Practice Exam 1 has ~6 questions drawn from this module (PCI levels, SCA, Wayfair, EU VAT, chargeback ratios).

---

## 📚 Further Reading (Optional)

- 📖 [Stripe Atlas Guide for Founders](https://stripe.com/atlas) — incorporation + tax + banking
- 📖 [PCI Security Standards Council — *PCI-DSS v4.0*](https://www.pcisecuritystandards.org/document_library) — the standard
- 📖 [EU Commission — VAT One Stop Shop](https://taxation-customs.ec.europa.eu/online-services/online-services-and-databases-customs/vat-one-stop-shop_en)
- 📖 [Wayfair v South Dakota (full opinion)](https://www.supremecourt.gov/opinions/17pdf/17-494_j4el.pdf)
- 📖 [UK FCA — BNPL Regulation Policy Statement (2024)](https://www.fca.org.uk/) — Klarna case
- 📖 [Signifyd 2024 State of Fraud Report](https://www.signifyd.com/resources/) — annual industry benchmarks
- 📖 [Baymard Institute — Checkout Usability Research](https://baymard.com/research) — gold standard
- 📖 [Adobe Commerce — *PSD2 / SCA Implementation Guide*](https://devdocs.magento.com/) — the technical reference
