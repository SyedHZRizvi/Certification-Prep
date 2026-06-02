# 🧪 Practice Exam 2 — E-Commerce

> **Conditions:** Set a 70-minute timer. 45 questions. Treat it like the real thing.
> **Pass mark:** 36/45 (80%)
> Take this AFTER finishing Modules 1-8.

---

## 📝 Questions

### 1. A DTC apparel brand spends $24 to acquire a customer. Expected purchases over 24 months = 3.2 orders at $68 AOV with 38% contribution margin. The CLV/CAC ratio is approximately:

A. 1.5:1
B. 8.1:1
C. 0.5:1
D. 3.4:1 (CLV ≈ 3.2 × $68 × 38% = $82.66; $82.66 / $24 ≈ 3.4)

---

### 2. Shopify Plus's 2024 enterprise checkout customization is implemented via:

A. checkout.liquid (still supported indefinitely)
B. Checkout Extensibility (checkout.liquid deprecated June 2024 for new customers)
C. Theme customization only
D. A WordPress plugin

---

### 3. A brand on Adobe Commerce sees Lighthouse mobile LCP of 4.8 seconds. The MOST impactful fix is typically:

A. Image CDN + WebP / AVIF conversion + lazy-load below-fold
B. Switching to PHP 8.2
C. Increasing server CPU
D. Switching color scheme

---

### 4. A US brand selling to Germany at €120/order plans to ship via DDU. The likely customer-experience outcome:

A. ~20% of orders abandoned at the customs/delivery step when buyer is asked to pay duty/VAT
B. Cheaper for the buyer
C. Faster delivery than DDP
D. Identical to domestic CX

---

### 5. The same brand wants to ship DDP. Which is true?

A. The buyer still pays duty on delivery
B. DDP eliminates VAT entirely
C. The seller pre-pays duty + VAT; the courier presents no surprise fees at delivery
D. DDP is illegal in the EU

---

### 6. A B2B distributor wants company-account ordering with 3 buyer roles, RFQ, and Net 60 terms. The fastest-to-launch enterprise option is:

A. Shopify Basic
B. WooCommerce
C. Shopify B2B (on Shopify Plus, GA June 2022)
D. Squarespace

---

### 7. A Walmart supplier must be EDI-capable. EDI 856 is:

A. Purchase Order
B. Invoice
C. Catalog
D. Advance Ship Notice (ASN)

---

### 8. A $40M GMV DTC brand with 3 engineers is debating commercetools. The most accurate recommendation:

A. Stay on Shopify (or similar suite) — composable typically wins above ~$200M GMV with 15+ engineers (Forrester *MACH Adoption Report* 2024)
B. Adopt commercetools immediately for future-proofing
C. Build from scratch in Rust
D. Switch to SAP Hybris

---

### 9. A brand sees ~30% of Meta-attributed conversions on iOS missing from Meta but appearing in GA4 and Shopify. The most likely cause:

A. Server overload
B. Shopify checkout error
C. The brand has Pixel only, no CAPI; post-iOS 14.5 ATT, Pixel loses ~30-40% of iOS signal
D. Currency conversion issue

---

### 10. The right remediation for the issue in Q9:

A. Implement Meta CAPI + event deduplication via event_id + verify domain in Business Manager + rank top 8 AEM events
B. Increase Meta ad spend
C. Switch to Google Ads
D. Reduce iOS targeting

---

### 11. Klaviyo's "Browse Abandonment" flow typically converts at what click-to-purchase rate, compared to blast email's ~0.1%?

A. 50%+
B. 90%
C. 1-3% (well above blast email)
D. 0%

---

### 12. A brand sees 12% returns on $100 AOV apparel with $8 reverse logistics cost. The blended return cost per order is:

A. $0
B. $100
C. ~$1 (12% × $8 ≈ $0.96)
D. $8 always

---

### 13. A US brand selling on Amazon AND its own Shopify site. Sales tax responsibility:

A. The brand collects tax for both channels
B. No tax owed
C. Amazon collects+remits for Amazon orders (marketplace facilitator); the brand collects for Shopify orders where economic nexus is met
D. Customers pay separately

---

### 14. Reichheld's NPS question uses a scale of:

A. 1-5
B. 1-10
C. 0-10 (Reichheld, *The Ultimate Question*, 2003 HBR / 2006 book)
D. 0-100

---

### 15. A brand sees 78% mobile traffic, 22% desktop. Mobile CR 1.4% vs desktop 3.2%. The first investigative move:

A. Run a Lighthouse audit on mobile; fix LCP, INP, CLS; A/B test mobile PDP simplification
B. Reduce mobile spend
C. Switch to desktop-only
D. Ignore

---

### 16. The 2020 Google Core Web Vitals replaced FID (First Input Delay) with INP (Interaction to Next Paint) in:

A. 2021
B. 2026
C. March 2024
D. Never; FID is still used

---

### 17. A brand running Performance Max sees branded keywords being cannibalized by PMax. The fix:

A. Increase PMax budget
B. Disable PMax
C. Change ad copy
D. Add Brand Exclusions (the day-zero PMax setting)

---

### 18. ASC's ECB cap at 80% means:

A. Cap total ASC daily spend
B. Force ~80% spend on existing customers (retention-heavy)
C. Force ~20% on existing customers (prospecting-heavy)
D. Refund existing customers

---

### 19. TikTok Spark Ads' competitive advantage versus brand-created TikTok ads:

A. Higher production quality
B. Inherits the social proof + engagement of the original organic creator post
C. Lower CPC always
D. Better targeting

---

### 20. A brand sees 18% checkout abandonment after the shipping-fee step. The most likely fix:

A. Free shipping threshold (e.g., $50+) tested via A/B
B. Reduce traffic
C. Add more steps
D. Increase prices

---

### 21. A US-based brand shipping to the EU at ≤€150 should:

A. Ship DDU and let buyers handle VAT
B. Open an EU subsidiary day one
C. Register for IOSS in one EU member state, collect VAT at checkout, ship DDP
D. Block EU orders

---

### 22. A $150M GMV brand with 8 engineers debating commercetools vs Shopify Plus. The most balanced advice:

A. Stay on Shopify Plus and only consider commercetools when GMV crosses ~$200M AND engineering capacity reaches ~15+ (per Forrester 2024)
B. Move to commercetools immediately
C. Build a custom platform
D. Stay on legacy Magento 1

---

### 23. Amazon TACoS (Total ACoS) is defined as:

A. Ad Spend / Total Amazon revenue (including organic) — the honest measure
B. Ad Spend / Ad Revenue (ad-only)
C. Profit / Revenue
D. Clicks / Impressions

---

### 24. A brand wants to test if its Meta ads are *incrementally* driving sales. The right approach is:

A. Trust last-click attribution
B. Run a survey
C. Look at total revenue
D. Conversion lift study (geo-holdout): hold spend in 5-10% of markets for 4 weeks, measure delta vs. matched-market baseline

---

### 25. GA4's default attribution model (2024 onwards) is:

A. Last-click
B. Data-Driven Attribution (DDA) for properties with sufficient signal; legacy non-DDA paths last-click
C. First-click
D. Time-decay

---

### 26. A B2B brand at $30M revenue with 5,000 customer accounts and per-account negotiated pricing should:

A. Stay on Shopify Basic
B. Use WooCommerce
C. Move to a B2B-capable platform (Shopify B2B, Adobe Commerce B2B, BigCommerce B2B Edition)
D. Use Squarespace

---

### 27. A US brand expanding to Canada needs to register for which tax:

A. EU VAT
B. UK VAT
C. None
D. Canadian GST/HST (federal) plus provincial PST where applicable

---

### 28. The *South Dakota v. Wayfair* Supreme Court decision (2018) overturned which prior doctrine?

A. *Citizens United*
B. *Quill Corp. v. North Dakota* (1992) — the physical-nexus standard
C. *Roe v. Wade*
D. *Brown v. Board*

---

### 29. Bezos's 1997 shareholder letter (Amazon) emphasized:

A. Quarterly profit
B. Long-term thinking; obsess over customers; willingness to invest behind it
C. Cost reduction only
D. Stock price

---

### 30. A brand has 27% Apple Pay adoption at checkout. Apple Pay's typical CR (conversion rate) lift vs guest checkout:

A. ~20-40% higher CR on mobile (Stripe / Adyen reports 2023-2024)
B. 0%
C. -50%
D. +500%

---

### 31. The first step a brand should take when designing a returns experience:

A. Charge for all returns
B. Block returns
C. Hide the return link
D. Decide return policy (free/paid, window) + reverse-logistics partner (Loop, Happy Returns) + condition policy

---

### 32. A brand sees 22% lift in 90-day repeat from a Klaviyo abandoned-cart flow. The principle this illustrates:

A. Trigger-based behavioral flows convert orders of magnitude better than blast email (Reichheld + lifecycle literature)
B. Email is dead
C. SMS is required
D. Discounting is the only lever

---

### 33. A brand running Meta ads sees ROAS of 4.2x with 28% contribution margin. The contribution-margin ROAS is:

A. 4.2x
B. 28x
C. ~1.18x (4.2 × 28% ≈ 1.18; ~$0.18 profit per $1 ad spend after CM)
D. 0.28x

---

### 34. The MOST important PMax day-zero setting to prevent branded-search cannibalization:

A. Daily budget
B. Final URL Expansion ON
C. Brand Exclusions
D. Geo targeting

---

### 35. A brand sees mobile CR at 1.1% and desktop CR at 2.9%. A useful first hypothesis:

A. Mobile users are inherently lower-quality
B. Block mobile traffic
C. Raise mobile bids
D. Mobile UX/speed sub-optimal — investigate Lighthouse mobile, PDP layout, payment-method UX (Apple Pay, Shop Pay)

---

### 36. Klaviyo competes most directly with:

A. Google Analytics
B. Salesforce Marketing Cloud (Marketing Cloud Engagement) for e-commerce lifecycle
C. Shopify
D. Meta

---

### 37. The 8-event AEM (Aggregated Event Measurement) limit means a Meta advertiser must:

A. Choose any 100 events
B. Send unlimited events
C. Disable Pixel
D. Rank top 8 conversion events per verified domain in priority order; only the priority event is tracked for opted-out users

---

### 38. The EU Digital Services Act (DSA, Regulation 2022/2065) applied to VLOPs starting:

A. May 25, 2018
B. December 31, 2026
C. February 17, 2024
D. Not yet

---

### 39. AliExpress was the first VLOP marketplace formally investigated under the DSA. The principle this teaches an exam-taker:

A. The EU only enforces against US companies
B. Marketplaces are immune from EU regulation
C. DSA applies only to social media
D. Marketplace operators face higher regulatory scrutiny than pure-play retailers because of third-party-seller risks

---

### 40. A brand sees 6.2% chargeback rate (Visa CB-to-sales ratio). The exam-level interpretation:

A. Normal
B. Catastrophically high (Visa Excessive Chargeback Program triggers at 0.9-1.0%); immediate fraud-tool review (Signifyd, Riskified, Stripe Radar) and acquirer review needed
C. Acceptable
D. Below industry average

---

### 41. The post-Reichheld lifecycle principle "reduce friction in the first 90 days" is supported by which observation?

A. Repeat probability rises sharply with each completed order; the 1st-to-2nd-order conversion is the highest-leverage lifecycle moment (Bain *Customer Loyalty* research; Klaviyo benchmarks 2023-2024)
B. New customers are easier to convert
C. Discounts always work
D. Email frequency must be daily

---

### 42. A brand's 90-day repeat rate is 18%. The single most actionable improvement lever:

A. Reduce shipping
B. Trigger-based behavioral lifecycle (Browse Abandon, Cart Abandon, Post-Purchase, Win-Back) and incentivize the 2nd order specifically
C. Increase ad spend
D. Discount everyone

---

### 43. A US-based brand selling on Amazon US AND Amazon EU sees Amazon EU charges 15% commission vs Amazon US 8-15% by category. The implication:

A. Amazon EU is more profitable for the seller
B. The brand should leave Amazon EU
C. EU economics differ; the brand must model each marketplace independently (commissions, fulfillment, VAT, ad rates)
D. Commissions are universal

---

### 44. The principle behind Bezos's "Day 1" memo (Amazon shareholder letters, 1997-2017):

A. Move slowly
B. Maintain startup speed and customer obsession even at $1T scale; "Day 2 is stasis, then decline"
C. Cost discipline
D. Quarterly returns

---

### 45. The Kohavi/Tang/Xu (*Trustworthy Online Controlled Experiments*, 2020, Cambridge) standard for A/B-test sample size:

A. 100 visitors
B. 10 visitors
C. As few as possible
D. Pre-determined sample size based on baseline CR, MDE (Minimum Detectable Effect), alpha 5%, power 80%; typically 5-10K+ visitors per variant for small lifts

---

## 🎯 Answer Key (No Cheating!)

```
1.  D    11. C    21. C    31. D    41. A
2.  B    12. C    22. A    32. A    42. B
3.  A    13. C    23. A    33. C    43. C
4.  A    14. C    24. D    34. C    44. B
5.  C    15. A    25. B    35. D    45. D
6.  C    16. C    26. C    36. B
7.  D    17. D    27. D    37. D
8.  A    18. B    28. B    38. C
9.  C    19. B    29. B    39. D
10. A    20. A    30. A    40. B
```

---

## 🎯 Detailed answer rationales

**Q1. Answer: D**
- **Why D is correct.** CLV ≈ orders × AOV × CM = 3.2 × $68 × 0.38 = $82.66. CLV/CAC = $82.66 / $24 ≈ 3.4:1. That clears the 3:1 healthy threshold (Fader & Hardie, *Customer Centricity*, 2012).
- **Why the others are wrong.** A under-counts repeat purchases; B uses revenue without margin; C is negative-margin nonsense.
- **Exam-takeaway.** Always reduce CLV by contribution margin — revenue-only CLV overstates by 2-3x.

**Q2. Answer: B**
- **Why B is correct.** Shopify deprecated checkout.liquid for new customers in June 2024; Checkout Extensibility (React-based app-blocks framework) is now the path.
- **Why the others are wrong.** A misses the deprecation; C/D are wrong layers entirely.
- **Exam-takeaway.** Checkout Extensibility is the 2024-2026 Plus-only enterprise customization.

**Q3. Answer: A**
- **Why A is correct.** LCP (Largest Contentful Paint) is overwhelmingly hero-image / above-the-fold rendering. Image CDN + WebP/AVIF + lazy-load below-fold typically moves LCP from 4-5s to 1.5-2.5s.
- **Why the others are wrong.** B helps server-render time but not LCP directly; C is brute-force; D is unrelated.
- **Exam-takeaway.** LCP fix #1 = image optimization; LCP fix #2 = critical-CSS / above-fold render path.

**Q4. Answer: A**
- **Why A is correct.** DDU shipments cause the courier to collect duty/VAT on delivery; ~20% of buyers refuse, leading to abandoned packages.
- **Why the others are wrong.** B/C/D ignore the documented DDU abandonment dynamic.
- **Exam-takeaway.** DDU = surprise fees = ~20% abandonment. Default to DDP for any meaningful cross-border volume.

**Q5. Answer: C**
- **Why C is correct.** DDP (Delivered Duty Paid, Incoterms) means the seller is responsible for duty + tax through to the buyer's door. The buyer sees no surprise fees.
- **Why the others are wrong.** A describes DDU (the opposite); B is wrong (VAT still applies, just pre-paid); D is invented.
- **Exam-takeaway.** DDP = best buyer CX; requires DHL Express / FedEx International Priority or a customs broker.

**Q6. Answer: C**
- **Why C is correct.** Shopify B2B on Shopify Plus (GA June 2022) is the fastest-to-launch enterprise B2B option supporting company accounts, role-based buyers, net terms, and PO checkout.
- **Why the others are wrong.** A/D are SMB B2C tools; B requires heavy custom plugin work.
- **Exam-takeaway.** Shopify B2B for mid-market speed; Adobe Commerce B2B for enterprise depth.

**Q7. Answer: D**
- **Why D is correct.** EDI 856 = Advance Ship Notice (ASN). X12 standard.
- **Why the others are wrong.** PO = 850; Invoice = 810; Catalog = 832.
- **Exam-takeaway.** Memorize 850 / 855 / 856 / 810 — the four most-tested EDI numbers.

**Q8. Answer: A**
- **Why A is correct.** Forrester *MACH Adoption Report* 2024 puts the composable crossover at ~$200M GMV with ~15+ engineers. A $40M brand with 3 engineers will spend 18 months wiring vendors and never ship.
- **Why the others are wrong.** B is premature composable adoption; C is reinventing the wheel; D is enterprise-only legacy.
- **Exam-takeaway.** Composable below threshold = a documented failure mode.

**Q9. Answer: C**
- **Why C is correct.** iOS 14.5 ATT (April 26, 2021) caused ~70-75% of iOS users to opt out of cross-app tracking; Pixel-only setups lose ~30-40% of iOS signal. Server-side conversions still register in GA4/Shopify because those measure their own infrastructure.
- **Why the others are wrong.** A/B/D would affect all channels uniformly (or are irrelevant), not just Meta.
- **Exam-takeaway.** Diagnose pattern: Meta short, others full → ATT/Pixel gap.

**Q10. Answer: A**
- **Why A is correct.** The recovery stack is CAPI + event_id deduplication + domain verification + AEM 8-event ranking. All four are required.
- **Why the others are wrong.** B/D treat symptoms; C avoids the problem.
- **Exam-takeaway.** CAPI alone is insufficient; you also need dedup, domain verification, and AEM ranking.

**Q11. Answer: C**
- **Why C is correct.** Klaviyo benchmarks 2023-2024 show Browse Abandon flows convert at 1-3% click-to-purchase vs ~0.1% for blast email. Trigger-based behavioral flows are 10-30x better.
- **Why the others are wrong.** A/B exaggerate; D ignores the data.
- **Exam-takeaway.** Triggered > blast by an order of magnitude. Lifecycle is where compounding happens.

**Q12. Answer: C**
- **Why C is correct.** Blended reverse-logistics cost = return rate × reverse cost. 12% × $8 = $0.96 ≈ $1/order. (Full RLC includes restocking, refurb, and inventory mark-down, but the floor is this calc.)
- **Why the others are wrong.** A ignores returns; B equates per-order to total order value; D ignores the rate weighting.
- **Exam-takeaway.** Blended return cost = rate × per-return cost. Build into unit economics.

**Q13. Answer: C**
- **Why C is correct.** Post-*Wayfair* (2018) marketplace facilitator laws (47 states + DC) put Amazon, eBay, Etsy, Walmart Marketplace on the hook for marketplace orders. The brand still collects for its own site where it has economic nexus.
- **Why the others are wrong.** A double-collects; B ignores 2018+ law; D is invented.
- **Exam-takeaway.** Channel matters: marketplace = facilitator collects; own-site = you collect.

**Q14. Answer: C**
- **Why C is correct.** Reichheld's NPS uses a 0-10 scale (Promoters 9-10, Passives 7-8, Detractors 0-6).
- **Why the others are wrong.** A is CSAT-style 1-5; B/D are misremembered scales.
- **Exam-takeaway.** 0-10 + Promoter (9-10) − Detractor (0-6) = NPS.

**Q15. Answer: A**
- **Why A is correct.** Mobile-vs-desktop CR gaps of 1.4% / 3.2% are usually UX or speed issues. Lighthouse audit + INP/LCP fixes + PDP simplification + Apple Pay / Shop Pay enablement are the high-leverage moves.
- **Why the others are wrong.** B treats the symptom; C ignores 78% of traffic; D is operational malpractice.
- **Exam-takeaway.** Mobile CR < desktop CR = a UX/speed problem, not a "mobile users are different" excuse.

**Q16. Answer: C**
- **Why C is correct.** Google replaced FID with INP (Interaction to Next Paint) as a Core Web Vital in **March 2024**.
- **Why the others are wrong.** A/B are wrong years; D ignores the switch.
- **Exam-takeaway.** INP > FID since March 2024; INP target <200ms (good), 200-500ms (improvement needed), >500ms (poor).

**Q17. Answer: D**
- **Why D is correct.** Brand Exclusions are the PMax day-zero setting that prevents PMax from bidding on your branded queries.
- **Why the others are wrong.** A doubles down; B over-corrects; C is unrelated to bidding.
- **Exam-takeaway.** Brand Exclusions = the most-tested PMax setting on every paid-acquisition certification.

**Q18. Answer: B**
- **Why B is correct.** ECB (Existing Customer Budget) cap at 80% means up to 80% of ASC spend can go to existing customers — retention-heavy.
- **Why the others are wrong.** A confuses with total daily-budget; C inverts the percentage; D is invented.
- **Exam-takeaway.** Low ECB cap = prospecting; high ECB cap = retention.

**Q19. Answer: B**
- **Why B is correct.** Spark Ads boost an organic creator post that already has likes/comments/views — inheriting the social proof. Brand-only TikTok creative converts ~50% worse on like-for-like spend per CTC benchmarks 2023-2024.
- **Why the others are wrong.** A/C/D don't match how Spark Ads work in practice.
- **Exam-takeaway.** Spark Ads' moat = inherited engagement, not production quality.

**Q20. Answer: A**
- **Why A is correct.** Shipping cost is the #1 cart-abandonment driver (Baymard Institute 2023: 48% of abandoners cite "high extra costs"). Free-shipping threshold A/B tests usually lift CR 8-18%.
- **Why the others are wrong.** B/C/D actively harm CR.
- **Exam-takeaway.** Shipping friction is the dominant checkout-abandonment cause; threshold is the lever.

**Q21. Answer: C**
- **Why C is correct.** IOSS handles VAT cleanly at checkout for parcels ≤€150. Single EU member-state registration, monthly returns.
- **Why the others are wrong.** A is the DDU abandonment trap; B is over-engineered at low volume; D ignores revenue.
- **Exam-takeaway.** IOSS = €150 threshold + non-EU seller. The default for cross-border SMB-to-EU.

**Q22. Answer: A**
- **Why A is correct.** Forrester 2024 puts the crossover at ~$200M GMV + 15+ engineers. A $150M / 8-engineer brand is below threshold; premature composable adoption is a known failure pattern.
- **Why the others are wrong.** B is premature; C is reinventing; D is regressive.
- **Exam-takeaway.** Wait until *both* GMV and engineering threshold cross.

**Q23. Answer: A**
- **Why A is correct.** TACoS = Ad Spend / Total Amazon revenue (including organic). It's the honest measure because Amazon Ads partly cannibalize organic.
- **Why the others are wrong.** B is ACoS (ads-only); C/D are unrelated.
- **Exam-takeaway.** ACoS = ads-only; TACoS = total Amazon revenue.

**Q24. Answer: D**
- **Why D is correct.** Geo-holdout incrementality testing is the rigorous methodology — match similar markets, hold spend in some, measure delta. Standard in Recast, Meta Robyn, Bain MMM workflows.
- **Why the others are wrong.** A trusts attribution that is structurally broken post-ATT; B/C are weak signal.
- **Exam-takeaway.** Incrementality > attribution for measuring true impact of paid channels.

**Q25. Answer: B**
- **Why B is correct.** GA4's default attribution is Data-Driven Attribution (DDA) where signal supports it; otherwise paid/organic paths last-click. Google made DDA the default in late 2023.
- **Why the others are wrong.** A/C/D are legacy GA3 models.
- **Exam-takeaway.** GA4 default = DDA; underlying ML for path-level credit assignment.

**Q26. Answer: C**
- **Why C is correct.** A $30M B2B brand with 5,000 accounts and negotiated pricing needs company accounts, per-account catalogs, RFQ, and Net 30/60 — Shopify B2B, Adobe Commerce B2B, or BigCommerce B2B Edition fit.
- **Why the others are wrong.** A/B/D are B2C SMB platforms that lack B2B primitives.
- **Exam-takeaway.** B2B on a B2C platform = sales reps building spreadsheet workarounds.

**Q27. Answer: D**
- **Why D is correct.** Canada has federal GST/HST + provincial PST (BC, SK, MB, QC each have provincial variants). Threshold: C$30K small-supplier exemption then mandatory registration.
- **Why the others are wrong.** A is EU; B is UK; C ignores Canadian tax law.
- **Exam-takeaway.** Canada = federal + provincial layered tax — provincially nuanced compliance.

**Q28. Answer: B**
- **Why B is correct.** *South Dakota v. Wayfair* (2018) overturned *Quill Corp. v. North Dakota* (1992)'s physical-nexus standard, replacing it with economic-nexus.
- **Why the others are wrong.** A/C/D are unrelated constitutional cases.
- **Exam-takeaway.** *Quill* (1992) → *Wayfair* (2018): physical nexus → economic nexus.

**Q29. Answer: B**
- **Why B is correct.** Bezos's 1997 shareholder letter laid out long-term thinking, customer obsession, and willingness to invest behind both — repeated every year as an appendix. Foundational e-commerce CEO doctrine.
- **Why the others are wrong.** A/C/D contradict the letter's explicit emphasis.
- **Exam-takeaway.** Bezos 1997 = customer obsession + long-term + invest behind it. The most-cited shareholder letter in business history.

**Q30. Answer: A**
- **Why A is correct.** Stripe (2023) and Adyen (2024) reports document Apple Pay / Google Pay / Shop Pay lifting mobile CR by 20-40% vs guest checkout (cut form-fill friction).
- **Why the others are wrong.** B/C/D contradict the data.
- **Exam-takeaway.** Express checkout (Apple Pay / Shop Pay / Link) is the single highest-leverage mobile-CR lever.

**Q31. Answer: D**
- **Why D is correct.** Designing returns starts with policy (free/paid + window) + reverse-logistics partner + condition policy (resaleable / refurbished / donate / landfill).
- **Why the others are wrong.** A/B/C ignore the customer-experience layer entirely.
- **Exam-takeaway.** Returns are a designed system, not an afterthought; Loop, Happy Returns, Narvar are leading partners.

**Q32. Answer: A**
- **Why A is correct.** Trigger-based behavioral flows compound on user intent; blast email loses 95%+ of value when sent untriggered. Reichheld's loyalty research + Klaviyo's 2023-2024 benchmarks both confirm.
- **Why the others are wrong.** B/C/D oversimplify.
- **Exam-takeaway.** Trigger-based > blast by orders of magnitude.

**Q33. Answer: C**
- **Why C is correct.** Contribution-Margin ROAS = Ad Revenue × CM / Ad Spend = 4.2 × 0.28 = 1.176x. So $1 ad spend returns $1.18 contribution; net $0.18 profit before fixed.
- **Why the others are wrong.** A is blended ROAS (misleading at low CM); B/D are multiplication errors.
- **Exam-takeaway.** Always reduce blended ROAS by contribution margin before declaring profitability.

**Q34. Answer: C**
- **Why C is correct.** Brand Exclusions stop PMax from cannibalizing branded queries — the day-zero PMax setting.
- **Why the others are wrong.** A/D are necessary but not the protective setting; B does the opposite (enables URL drift).
- **Exam-takeaway.** Brand Exclusions = the single most-tested PMax answer.

**Q35. Answer: D**
- **Why D is correct.** A 2.7x CR gap (1.1% vs 2.9%) is almost always speed/UX/payment-method differences. Lighthouse audit + payment-method enable is high-leverage.
- **Why the others are wrong.** A is a "mobile users are bad" excuse with no diagnostic value; B/C are operational malpractice.
- **Exam-takeaway.** Diagnose, don't excuse, mobile CR gaps.

**Q36. Answer: B**
- **Why B is correct.** Klaviyo competes most directly with Salesforce Marketing Cloud Engagement for e-commerce lifecycle (and with Iterable, Bloomreach, Emarsys at the high end).
- **Why the others are wrong.** A/C/D are adjacent categories.
- **Exam-takeaway.** Klaviyo = SFMC for e-commerce-native lifecycle.

**Q37. Answer: D**
- **Why D is correct.** AEM (Aggregated Event Measurement) limits each verified domain to 8 ranked conversion events. For ATT-opted-out users, only the priority event registers.
- **Why the others are wrong.** A/B ignore the cap; C breaks measurement entirely.
- **Exam-takeaway.** Rank Purchase #1, ATC #2, Initiate Checkout #3, then leads/views — priority matters.

**Q38. Answer: C**
- **Why C is correct.** DSA applied to VLOPs from February 17, 2024 (Regulation 2022/2065).
- **Why the others are wrong.** A is GDPR; B/D ignore the timeline.
- **Exam-takeaway.** Feb 17, 2024 = DSA-for-VLOPs effective date.

**Q39. Answer: D**
- **Why D is correct.** AliExpress (March 2024 DSA proceeding) teaches that marketplaces face higher regulatory scrutiny because they intermediate third-party sellers — the principle behind §4 of the DSA.
- **Why the others are wrong.** A/B/C ignore the marketplace-specific liability mechanism.
- **Exam-takeaway.** Marketplace = higher regulatory load than pure-play retailer.

**Q40. Answer: B**
- **Why B is correct.** Visa's Excessive Chargeback Program kicks in at 0.9-1.0% CB ratio. 6.2% is catastrophic — immediate fraud-tool review (Signifyd, Riskified, Stripe Radar) and acquirer relationship review needed.
- **Why the others are wrong.** A/C/D normalize a number that would put the brand into chargeback-program penalties within weeks.
- **Exam-takeaway.** Visa CB-to-sales threshold = 0.9-1.0%. Above = penalty zone.

**Q41. Answer: A**
- **Why A is correct.** Repeat probability rises sharply with each completed order — the 2nd order is the largest jump (Bain *Customer Loyalty* research; Klaviyo 2024 benchmarks confirm same shape).
- **Why the others are wrong.** B/C/D oversimplify.
- **Exam-takeaway.** 1st → 2nd order is the highest-leverage lifecycle moment. Design for it.

**Q42. Answer: B**
- **Why B is correct.** Trigger-based behavioral lifecycle (Browse Abandon, Cart Abandon, Post-Purchase, Win-Back) + a 2nd-order incentive is the highest-leverage move on 90-day repeat.
- **Why the others are wrong.** A/C/D treat the wrong layer (acquisition / pricing / promotion).
- **Exam-takeaway.** Retention is built in lifecycle, not in shipping policy.

**Q43. Answer: C**
- **Why C is correct.** Each marketplace has its own commission, fulfillment fees (FBA vs. self-fulfilled), VAT/duty, and ad rates. The brand must model each independently.
- **Why the others are wrong.** A/B/D generalize a fundamentally market-specific economics question.
- **Exam-takeaway.** Marketplace P&L modeling = per-marketplace, never blended.

**Q44. Answer: B**
- **Why B is correct.** Bezos's 2016 letter codified "Day 2 is stasis, followed by irrelevance, followed by excruciating, painful decline, followed by death" — the discipline of maintaining startup-speed and customer-obsession at scale.
- **Why the others are wrong.** A/C/D contradict the explicit thesis.
- **Exam-takeaway.** "Day 1" = Bezos's anti-stasis discipline; the cultural antidote to large-company decay.

**Q45. Answer: D**
- **Why D is correct.** Kohavi/Tang/Xu (*Trustworthy Online Controlled Experiments*, 2020, Cambridge) — pre-compute sample size from baseline CR + MDE + α=0.05 + power=0.80. Small CR lifts (1-3%) typically need 10K-50K per variant.
- **Why the others are wrong.** A/B/C are exam-popular but statistically illiterate.
- **Exam-takeaway.** Always pre-compute. Don't peek; don't stop early; pre-register your sample size.

---

## 📊 Scoring

| Score | Verdict |
|-------|---------|
| 41-45 | 🏆 Crushing it. Move to Final Mock Exam. |
| 36-40 | ✅ Solid. Review wrong answers. |
| 27-35 | ⚠️ Re-read Modules 5-8 weak spots. Re-test in 5 days. |
| < 27  | 🔁 Restart from Module 1. |

---

## 🔍 Review Process

For EACH wrong answer:

1. Identify which Module covered it (1-10)
2. Re-read that module's Reading.md AND Cheat-Sheet.md
3. Add to your flashcard deck
4. Re-test the question after 5 days

---
