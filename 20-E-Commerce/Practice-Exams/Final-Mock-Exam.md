# 🧪 Final Mock Exam — E-Commerce

> **Conditions:** Set a 60-minute timer. 60 questions. Treat it like the real thing (matches Adobe Commerce Business Practitioner blueprint difficulty).
> **Pass mark:** 45/60 (75%)
> Take this AFTER finishing all 10 modules AND your Capstone (or the day before any real cert).

---

## 📝 Questions

### 1. A DTC brand reports blended ROAS of 3.6x. Contribution margin is 24%. The contribution-margin ROAS — and what that says about profitability — is:

A. 3.6x — clearly profitable
B. 24x — clearly profitable
C. 0.24x — break-even
D. 0.86x — ad spend is structurally unprofitable before fixed costs (3.6 × 0.24 = 0.86 < 1)

---

### 2. A US-based brand at $80M annual revenue plans to enter the EU at €4M projected revenue in year one (mostly orders ≤€150). The cleanest VAT compliance path:

A. Ignore VAT until the EU files a complaint
B. Open a German subsidiary and register for VAT individually in all 27 EU member states
C. Register for IOSS in one EU member state, collect VAT at checkout via Stripe Tax / Avalara, ship DDP
D. Block EU traffic at checkout

---

### 3. The same brand also plans to use Amazon EU marketplaces. Who collects EU VAT on Amazon-channel orders?

A. The brand
B. Amazon (marketplace facilitator under EU's 2021 VAT reform)
C. No one
D. The customer's bank

---

### 4. A B2B brand on Shopify Basic at $15M revenue with 250 named accounts and per-account negotiated pricing is hitting workflow limits (no Net 30, no PO checkout, no role-based buyers). The right move is:

A. Stay on Shopify Basic with custom apps
B. Migrate to WordPress
C. Build a custom CRM-driven order portal
D. Upgrade to Shopify Plus and activate Shopify B2B (GA June 2022) — company accounts + net terms + price lists native

---

### 5. An enterprise B2B brand on Adobe Commerce uses RFQ workflow. The buyer requests a quote on 500 units of SKU-X. The sales rep configures price, the buyer accepts, and the order ships. The corresponding EDI document the supplier sends WITH THE SHIPMENT is:

A. EDI 856 (Advance Ship Notice — ASN)
B. EDI 850 (PO)
C. EDI 810 (Invoice)
D. EDI 832 (Catalog)

---

### 6. The brand later invoices that order. The EDI document is:

A. EDI 850
B. EDI 856
C. EDI 832
D. EDI 810 (Invoice)

---

### 7. A $90M GMV brand with 5 engineers is evaluating commercetools. The most likely outcome of adopting commercetools at this scale:

A. Smooth 8-week launch
B. Immediate cost savings
C. Faster product velocity
D. 18-month integration project with multiple vendors; the brand likely under-delivers on storefront and re-platforms back to a suite within 24 months

---

### 8. A $300M GMV brand with 25 engineers operating in 6 countries and 4 brands is evaluating composable vs Shopify Plus. The Forrester-supported recommendation:

A. Stay on Shopify Plus
B. Move to WooCommerce
C. Composable (commercetools / Adobe Commerce / Salesforce Commerce Cloud) is the empirically-supported choice at this scale with this engineering capacity (Forrester *MACH Adoption Report* 2024)
D. Move to BigCommerce Basic

---

### 9. The MACH Alliance was founded in 2020 by:

A. commercetools, Contentstack, EPAM, Valtech
B. Amazon, Google, Meta, Microsoft
C. Salesforce, Adobe, Shopify, BigCommerce
D. Stripe, Klarna, Affirm, PayPal

---

### 10. Shopify Hydrogen v2 is built on which JavaScript framework?

A. Vue
B. Angular
C. Svelte
D. Remix (post-2022 rebuild from React-only)

---

### 11. Shopify's edge-hosting product paired with Hydrogen is called:

A. Oxygen
B. Helium
C. Nitrogen
D. Carbon

---

### 12. A brand on Adobe Commerce sees Lighthouse mobile LCP at 4.6s, INP 580ms, CLS 0.18. The single highest-leverage Core Web Vitals improvement target is typically:

A. LCP (Largest Contentful Paint, image optimization)
B. INP (Interaction to Next Paint, JS execution)
C. CLS (Cumulative Layout Shift)
D. TTFB

---

### 13. INP replaced FID as a Core Web Vital in:

A. 2021
B. 2023
C. March 2024
D. Never; FID is still the standard

---

### 14. A brand's GA4 reports 100,000 sessions, 3,200 purchases, $384,000 revenue. The session-level conversion rate is:

A. 3.2%
B. $3.84
C. 38.4%
D. 0.32%

---

### 15. The same brand has 65% mobile traffic, 35% desktop. Mobile CR is 1.8% vs desktop 4.5%. The single most-cited mobile-fix lever:

A. Reduce mobile ad spend
B. Switch to desktop-only checkout
C. Enable Apple Pay / Shop Pay / Google Pay; Lighthouse fix LCP/INP; simplify PDP
D. Cut mobile catalog

---

### 16. A brand on Shopify Plus is on the Checkout Extensibility path post checkout.liquid deprecation. checkout.liquid was deprecated for new customers in:

A. 2019
B. 2026 (not yet)
C. Never
D. June 2024

---

### 17. Klaviyo's typical CR (click-to-purchase) on Browse Abandonment is:

A. ~0.05%
B. 1-3% (10-30x typical blast email)
C. 25%
D. 80%

---

### 18. A brand's 90-day repeat rate is 22%. The CLV / CAC ratio is 2.1x. The 1st diagnostic question for the lifecycle team:

A. Is acquisition spend too high?
B. Is COGS too high?
C. Are lifecycle flows (Browse Abandon, Cart Abandon, Post-Purchase, Win-Back) implemented + tuned?
D. Is the brand discounting?

---

### 19. The "Bezos 1997 shareholder letter" emphasized:

A. Customer obsession, long-term thinking, willingness to invest behind both
B. Quarterly profit maximization
C. Cost-cutting only
D. Stock-price defense

---

### 20. Bezos's "Day 1" memo argues:

A. Stay big, slow, and stable
B. Quarterly cost discipline
C. Layoffs are healthy
D. Day 2 is stasis followed by irrelevance, decline, and death — maintain startup speed and customer-obsession at scale

---

### 21. Reichheld's NPS uses a scale of:

A. 1-5
B. 1-10
C. 0-10
D. 0-100

---

### 22. NPS = % Promoters (9-10) − % Detractors (0-6). A 100 respondent survey with 60 Promoters, 25 Passives, 15 Detractors gives an NPS of:

A. 45 (60% − 15% = 45)
B. 60
C. 15
D. 0

---

### 23. A brand sees 8.5% chargeback ratio. Visa's Excessive Chargeback Program triggers at ~0.9-1.0%. The first remediation step:

A. Ignore — chargebacks are normal
B. Increase prices
C. Immediate fraud-tool review (Signifyd, Riskified, Stripe Radar), 3DS2 enforcement, acquirer relationship review
D. Switch payment processors only

---

### 24. PCI-DSS v4.0 took effect with phased requirements from March 2024 through:

A. March 2025
B. 2030
C. Never
D. 2026

---

### 25. SCA (Strong Customer Authentication) is mandated by:

A. PCI-DSS
B. GDPR
C. CCPA
D. EU PSD2 (SCA enforced from September 14, 2019)

---

### 26. A brand at $50M revenue runs Meta + Google. Meta-attributed ROAS is 3.8x on iOS with Pixel only. Same campaign with CAPI + AEM + event_id dedup would likely report:

A. Identical ROAS
B. ROAS ~30-40% higher (signal recovery — same true purchases now attributed)
C. ROAS 2x higher
D. ROAS lower

---

### 27. ASC (Meta Advantage+ Shopping) launched in:

A. 2018
B. 2026 (not yet)
C. 2010
D. Late 2022

---

### 28. ECB cap at 30% in ASC means:

A. 70% spend on existing, 30% on new
B. 70% on new, 30% on existing (prospecting-leaning)
C. Total cap of 30% of budget
D. Refund 30%

---

### 29. Google Performance Max replaced which deprecated campaign type?

A. Search
B. Display
C. Smart Shopping (deprecated July 2022)
D. Local

---

### 30. The MOST important PMax day-zero setting:

A. Daily budget
B. Final URL Expansion ON
C. Brand Exclusions
D. Geo targeting

---

### 31. A brand sees PMax cannibalizing branded search. The fix is:

A. Disable PMax
B. Increase PMax budget
C. Add Brand Exclusions
D. Change ad copy

---

### 32. A PMax "audience signal" is:

A. Hard targeting
B. Required to launch
C. Permanent restriction
D. A hint to the algorithm; PMax can serve outside the signal

---

### 33. Amazon Sponsored Products' four targeting types are:

A. Automatic, Manual Keyword, Manual ASIN, Category
B. Auto only
C. Manual Keyword only
D. Display only

---

### 34. ACoS = Ad Spend / Ad Revenue. TACoS = Ad Spend / Total Revenue. The "honest" measure of Amazon Ads return is:

A. ACoS
B. TACoS (because Amazon Ads partly cannibalize organic)
C. CPC
D. Impressions

---

### 35. TikTok Shop launched in the US in:

A. 2018
B. June 2021
C. September 2023
D. 2026

---

### 36. TikTok Spark Ads inherit:

A. Nothing
B. Lower CPC always
C. Better targeting
D. The social proof + engagement of the original organic creator post

---

### 37. A US-based brand selling Chinese-origin apparel via the US De Minimis exemption (Section 321, $800 threshold) faces 2024-2025 policy risk because:

A. The threshold was raised to $5,000
B. Biden/Trump-era executive orders restricted De Minimis on Chinese-origin goods
C. Section 321 was repealed entirely
D. The risk doesn't exist

---

### 38. Shein's peak private valuation (April 2023, ahead of expected IPO) was approximately:

A. $5B
B. $20B
C. $66B
D. $500B

---

### 39. The EU Digital Services Act (DSA) applied to Very Large Online Platforms (VLOPs) from:

A. May 25, 2018
B. February 17, 2024
C. December 2026
D. Not yet effective

---

### 40. A VLOP under the DSA is a platform with monthly EU users of:

A. 1M+
B. 10M+
C. 45M+
D. 100M+

---

### 41. AliExpress was the first VLOP marketplace formally investigated under the DSA in March 2024. The principle this teaches:

A. The EU enforces only against US firms
B. Marketplaces are exempt
C. DSA applies only to social media
D. Marketplace operators face higher regulatory scrutiny because of third-party seller risks

---

### 42. South Dakota v. Wayfair (2018) overturned:

A. *Citizens United*
B. *Roe v. Wade*
C. *Quill Corp. v. North Dakota* (1992)'s physical-nexus rule
D. *Brown v. Board*

---

### 43. Post-Wayfair, US states require sellers to collect sales tax based on:

A. Physical nexus only
B. Economic nexus (state-specific revenue or transaction thresholds, typically $100K-$500K or 100-200 transactions)
C. Federal threshold
D. No threshold

---

### 44. Under US marketplace facilitator laws (2019-2021 wave), Amazon collects and remits sales tax on behalf of:

A. Only Amazon's own retail
B. Only EU sellers
C. No one
D. Third-party sellers using Amazon marketplace

---

### 45. A US-based brand sells on Amazon AND its own Shopify site. The correct tax handling:

A. Brand collects for both
B. Amazon collects+remits for Amazon orders; the brand collects for Shopify orders where economic nexus is met
C. No tax owed
D. Buyer pays separately

---

### 46. The CLV formula in simplest form (per Fader/Hardie/Bell, *Customer Centricity*, 2012, Wharton):

A. AOV × Frequency × Lifespan × Margin %
B. Revenue ÷ Customers
C. Profit ÷ Year
D. CAC ÷ 12

---

### 47. A brand with $42 CAC, $68 AOV, 2.8 orders/customer, 35% CM has revenue-based CLV (orders × AOV) and CLV/CAC of (≈):

A. CLV ≈ $190.40, ratio 4.5
B. CLV ≈ $42, ratio 1.0
C. CLV ≈ $66.66, ratio 1.59
D. CLV ≈ $300, ratio 7.1

---

### 48. A brand sees mobile CR 1.1%, desktop CR 3.0%. The first diagnostic move:

A. Block mobile
B. Lighthouse audit mobile; enable Apple Pay / Shop Pay; simplify mobile PDP; A/B test
C. Raise mobile bids
D. Lower mobile prices

---

### 49. A returns policy decision matrix should always include:

A. Window + free/paid + condition policy + reverse-logistics partner
B. Only the window
C. Only the partner
D. Free-only with no condition policy

---

### 50. A brand sees 30% return rate on apparel with $9 reverse logistics. Blended return cost per order is:

A. ~$2.70 (30% × $9)
B. $0
C. $9 always
D. $27

---

### 51. A brand's Klaviyo Cart Abandon flow drove 27% of recovered revenue last quarter. The Reichheld + lifecycle-marketing principle this confirms:

A. Email is dead
B. SMS is required
C. Discounting is the only lever
D. Trigger-based behavioral flows convert orders of magnitude better than blast email

---

### 52. Kohavi/Tang/Xu (*Trustworthy Online Controlled Experiments*, 2020, Cambridge) recommend pre-computing sample size based on:

A. The minimum number of users you can afford
B. Baseline CR, MDE, α=0.05, power=0.80
C. 100 users always
D. Stop testing when "you see a winner"

---

### 53. A brand's A/B test sees 1.4% lift in CR at p=0.04 with 8,000 visitors per variant. The test:

A. Is statistically significant if sample size was pre-determined to detect ~1% MDE at α=0.05 / power 0.80 — but treat 1% lifts with caution and consider replication
B. Definitely real
C. Definitely noise
D. Cannot be evaluated

---

### 54. A Shopify Plus brand wants to localize for EU + UK + Canada with 4 languages. The Shopify-native option is:

A. Build separate sites manually
B. Shopify Markets (multi-currency, multi-language, multi-domain native since 2022)
C. WordPress translation plugin
D. None — Shopify doesn't support localization

---

### 55. The Shein case study (2008-2024) ultimately illustrates which principle?

A. Cross-border arbitrage on a single regulatory loophole is structurally fragile
B. Compliance is optional for D2C
C. Marketplaces are immune from regulation
D. Vertical integration always wins

---

### 56. AI agents (ChatGPT Operator, Claude Browser Use, Apple Intelligence) discovering products and transacting on consumers' behalf favor which storefront architecture?

A. Monolithic suite
B. Single-page HTML
C. PDF catalogs
D. API-first / MACH (because agents need structured Commerce APIs)

---

### 57. A US brand at $4M revenue is on Shopify Basic. The exam-recommended platform decision is:

A. Migrate to commercetools for future-proofing
B. Stay on Shopify (suite wins below ~$200M GMV without engineering capacity)
C. Build custom in Rust
D. Move to Salesforce Commerce Cloud

---

### 58. The blended-ROAS-vs-contribution-margin-ROAS framing applies because:

A. They're identical
B. Blended ROAS overstates profitability when CM is below 35-40%; contribution-margin ROAS shows true per-dollar return
C. Contribution margin is irrelevant
D. ROAS measures cost only

---

### 59. The principle behind "the certification body tests on compliance-by-design" is:

A. Always launch and fix later
B. Architect cross-border, B2B, and composable initiatives with regulatory + operational redundancy from day one (IOSS pre-registered, multi-region fulfillment optionality, MACH-or-suite decision matched to scale)
C. Cost is the only constraint
D. Ignore regulators

---

### 60. The single highest-leverage architectural decision for a $300M GMV multi-brand cross-border DTC group entering 2026 is:

A. Picking one Shopify Plus instance for all brands
B. Build everything from scratch
C. Outsource to a single SI vendor with no architectural rigor
D. Composable commerce backend (commercetools or Adobe Commerce) + headless frontends per brand (Hydrogen/Next.js) + shared satellite services (Sanity CMS, Algolia search, Akeneo PIM, Stripe/Adyen payments) + IOSS + DSA compliance baked in

---

## 🎯 Answer Key (No Cheating!)

```
1.  D    11. A    21. C    31. C    41. D    51. D
2.  C    12. A    22. A    32. D    42. C    52. B
3.  B    13. C    23. C    33. A    43. B    53. A
4.  D    14. A    24. A    34. B    44. D    54. B
5.  A    15. C    25. D    35. C    45. B    55. A
6.  D    16. D    26. B    36. D    46. A    56. D
7.  D    17. B    27. D    37. B    47. A    57. B
8.  C    18. C    28. B    38. C    48. B    58. B
9.  A    19. A    29. C    39. B    49. A    59. B
10. D    20. D    30. C    40. C    50. A    60. D
```

---

## 🎯 Detailed answer rationales

**Q1. Answer: D**
- **Why D is correct.** Contribution-Margin ROAS = Blended ROAS × CM = 3.6 × 0.24 = 0.864x. Below 1.0x means each $1 of ad spend returns < $1 of contribution dollars — structurally unprofitable before fixed costs.
- **Why the others are wrong.** A confuses blended ROAS with profitability; B/C are arithmetic errors.
- **Exam-takeaway.** A 3.6x blended ROAS at 24% CM is bleeding cash. Always do the CM math.

**Q2. Answer: C**
- **Why C is correct.** IOSS (Import One-Stop Shop) is the prescribed EU mechanism for non-EU sellers shipping parcels ≤€150 — single member-state registration, collect VAT at checkout, monthly returns.
- **Why the others are wrong.** A is non-compliance; B is over-engineered (you'd need many in-country registrations only if not on OSS/IOSS); D forfeits revenue.
- **Exam-takeaway.** IOSS is the default cross-border EU compliance posture for non-EU SMB-to-mid-market sellers.

**Q3. Answer: B**
- **Why B is correct.** EU's 2021 VAT reform made marketplaces (Amazon, eBay, Etsy) deemed-suppliers for B2C imports ≤€150 — Amazon collects/remits VAT on those orders.
- **Why the others are wrong.** A double-collects; C/D ignore the post-2021 EU VAT regime.
- **Exam-takeaway.** EU marketplace facilitator logic mirrors US post-*Wayfair*: the marketplace collects.

**Q4. Answer: D**
- **Why D is correct.** Shopify Plus + native Shopify B2B (GA June 2022) provides company accounts, multi-buyer roles, net terms, PO checkout, price lists per account.
- **Why the others are wrong.** A is platform-stretching with apps; B/C are migration overhead with no advantage at this scale.
- **Exam-takeaway.** Shopify B2B on Plus = the fastest-to-launch enterprise B2B option in 2024-2026.

**Q5. Answer: A**
- **Why A is correct.** EDI 856 = Advance Ship Notice (ASN) — sent when the shipment is dispatched. X12 standard.
- **Why the others are wrong.** 850 = PO (precedes shipment); 810 = Invoice (follows shipment); 832 = Catalog (unrelated).
- **Exam-takeaway.** ASN = 856. Memorize.

**Q6. Answer: D**
- **Why D is correct.** EDI 810 = Invoice. Sent after shipment to bill the buyer.
- **Why the others are wrong.** 850 = PO; 856 = ASN; 832 = Catalog.
- **Exam-takeaway.** Invoice = 810. Memorize alongside 850/856.

**Q7. Answer: D**
- **Why D is correct.** Forrester *MACH Adoption Report* 2024: composable below ~$200M GMV with <15 engineers is the documented failure mode — 18-month integration projects, missed launches, replatform back to suite.
- **Why the others are wrong.** A/B/C are the marketing pitch ignored by the empirical data.
- **Exam-takeaway.** Composable readiness = GMV × engineering capacity. Both must clear the threshold.

**Q8. Answer: C**
- **Why C is correct.** $300M GMV + 25 engineers + multi-brand multi-region is exactly the Forrester-defined sweet spot for composable. Best-of-breed per capability beats one-size-fits-all suite at this complexity.
- **Why the others are wrong.** A/B/D would impose suite-level constraints on a complexity profile that needs composable.
- **Exam-takeaway.** $200M + 15 engineers + multi-brand/region = composable optimal.

**Q9. Answer: A**
- **Why A is correct.** MACH Alliance founded 2020 by commercetools, Contentstack, EPAM, Valtech.
- **Why the others are wrong.** B is hyperscaler list; C is commerce-platform list (some MACH-aligned but not founders); D is fintech.
- **Exam-takeaway.** commercetools led the founding; the others co-signed.

**Q10. Answer: D**
- **Why D is correct.** Shopify acquired Remix in 2022 and rebuilt Hydrogen on Remix in Q4 2022. Hydrogen v2 is the current production version.
- **Why the others are wrong.** A/B/C are unrelated frameworks.
- **Exam-takeaway.** Hydrogen v2 = Remix-based. v1 was React-only.

**Q11. Answer: A**
- **Why A is correct.** Oxygen = Shopify's edge-deployed hosting product paired with Hydrogen.
- **Why the others are wrong.** B/C/D are invented.
- **Exam-takeaway.** Hydrogen (framework) + Oxygen (hosting) — both Shopify products.

**Q12. Answer: A**
- **Why A is correct.** LCP at 4.6s is far above the "Poor" threshold (4.0s). Image optimization typically yields the largest single improvement. INP and CLS matter but image-fix is highest-leverage first.
- **Why the others are wrong.** B (INP at 580ms) and C (CLS at 0.18) are bad but secondary fixes; D is unrelated.
- **Exam-takeaway.** Prioritize Core Web Vitals fixes by severity vs. baseline and by lift-to-effort ratio. Image fix is usually #1.

**Q13. Answer: C**
- **Why C is correct.** INP replaced FID as a Core Web Vital in **March 2024**.
- **Why the others are wrong.** A/B are pre-cutover; D ignores the change.
- **Exam-takeaway.** March 2024 = INP becomes a Core Web Vital. FID retired.

**Q14. Answer: A**
- **Why A is correct.** CR = Purchases / Sessions = 3,200 / 100,000 = 3.2%.
- **Why the others are wrong.** B is AOV ($120 actually, since $384K/3,200 ≈ $120); C/D are decimal-place errors.
- **Exam-takeaway.** Session CR is the most-tested e-commerce KPI denominator. Always know yours.

**Q15. Answer: C**
- **Why C is correct.** Express checkouts (Apple Pay / Shop Pay / Google Pay) + Core Web Vitals fixes + PDP simplification are the highest-leverage mobile-CR levers. Stripe / Adyen 2023-2024 report 20-40% CR lift from express checkout.
- **Why the others are wrong.** A/B/D harm CR or shed traffic.
- **Exam-takeaway.** Don't excuse mobile CR gaps — diagnose UX/speed/payment-method UX.

**Q16. Answer: D**
- **Why D is correct.** Shopify deprecated checkout.liquid for new customers in June 2024 (existing customers grandfathered to 2025); Checkout Extensibility is the path forward.
- **Why the others are wrong.** A/B/C miss the actual deprecation date.
- **Exam-takeaway.** Plus customers on checkout.liquid must migrate to Checkout Extensibility — the 2024-2026 Shopify Plus replatform.

**Q17. Answer: B**
- **Why B is correct.** Klaviyo 2023-2024 benchmarks show Browse Abandon flows convert at 1-3% click-to-purchase, ~10-30x typical blast email.
- **Why the others are wrong.** A is closer to blast; C/D exaggerate.
- **Exam-takeaway.** Triggered behavior > blast.

**Q18. Answer: C**
- **Why C is correct.** With low repeat and CLV/CAC at 2.1x, the first place to look is lifecycle infrastructure. Without trigger-based flows, the brand is leaving 30-60% of post-purchase revenue uncaptured.
- **Why the others are wrong.** A/B/D are operational levers but lifecycle is the dominant retention driver.
- **Exam-takeaway.** Low repeat + sub-3x CLV/CAC = lifecycle is the diagnostic priority.

**Q19. Answer: A**
- **Why A is correct.** Bezos's 1997 letter codified customer-obsession + long-term-thinking + invest-behind-both — repeated as appendix in every annual letter through 2017.
- **Why the others are wrong.** B/C/D contradict the letter's stated philosophy.
- **Exam-takeaway.** Bezos 1997 = canonical e-commerce CEO doctrine.

**Q20. Answer: D**
- **Why D is correct.** Bezos's 2016 "Day 1" letter: "Day 2 is stasis. Followed by irrelevance. Followed by excruciating, painful decline. Followed by death."
- **Why the others are wrong.** A/B/C contradict the explicit thesis.
- **Exam-takeaway.** Day 1 = anti-stasis discipline at any scale.

**Q21. Answer: C**
- **Why C is correct.** Reichheld's NPS scale is 0-10. Promoters 9-10; Passives 7-8; Detractors 0-6.
- **Why the others are wrong.** A is CSAT; B is misremembered; D is unrealistic.
- **Exam-takeaway.** 0-10 scale; net = % Promoter − % Detractor.

**Q22. Answer: A**
- **Why A is correct.** NPS = % Promoters − % Detractors = 60% − 15% = 45.
- **Why the others are wrong.** B is just the Promoter %; C is the Detractor %; D is wrong arithmetic.
- **Exam-takeaway.** Passives don't count. Only Promoters − Detractors.

**Q23. Answer: C**
- **Why C is correct.** Visa places brands above ~0.9-1.0% CB ratio in their Excessive Chargeback Program with financial penalties and program-elevation risk. Fraud-tool review + 3DS2 + acquirer review is the immediate response.
- **Why the others are wrong.** A is willful negligence; B doesn't address the root; D treats a symptom.
- **Exam-takeaway.** Chargeback ratio above 1% = emergency.

**Q24. Answer: A**
- **Why A is correct.** PCI-DSS v4.0 became mandatory on March 31, 2024 (replacing v3.2.1) with new future-dated requirements becoming mandatory March 31, 2025.
- **Why the others are wrong.** B/C/D are wrong timelines.
- **Exam-takeaway.** v4.0 timeline is March 2024 effective; March 2025 future-dated requirements.

**Q25. Answer: D**
- **Why D is correct.** EU PSD2 (Payment Services Directive 2, 2018) mandated SCA — enforcement from September 14, 2019 with phased step-ups through 2021.
- **Why the others are wrong.** A is card data; B is privacy; C is California privacy.
- **Exam-takeaway.** SCA = PSD2 + 3DS2.

**Q26. Answer: B**
- **Why B is correct.** Post-ATT iOS Pixel-only loses ~30-40% of conversion signal vs. the true rate. CAPI + AEM + dedup recovers most of that gap — ROAS reads ~30-40% higher (same true purchases, just attributed).
- **Why the others are wrong.** A/C/D miss the recovery magnitude.
- **Exam-takeaway.** CAPI recovery = 30-40% reported ROAS lift (signal restoration).

**Q27. Answer: D**
- **Why D is correct.** Meta launched ASC (Advantage+ Shopping Campaigns) in late 2022; became dominant retail campaign type by 2024.
- **Why the others are wrong.** A predates the product; B/C miss the launch entirely.
- **Exam-takeaway.** ASC launched late 2022; dominant by 2024.

**Q28. Answer: B**
- **Why B is correct.** ECB cap at 30% means at most 30% of ASC spend can go to existing customers; 70% on new — prospecting-leaning.
- **Why the others are wrong.** A inverts; C/D misread the setting.
- **Exam-takeaway.** Low ECB cap = prospecting; high ECB cap = retention.

**Q29. Answer: C**
- **Why C is correct.** PMax replaced Smart Shopping in 2022; Smart Shopping was deprecated July 2022.
- **Why the others are wrong.** A/B/D are still active campaign types.
- **Exam-takeaway.** Smart Shopping = dead. PMax = successor.

**Q30. Answer: C**
- **Why C is correct.** Brand Exclusions are the PMax day-zero setting that prevents PMax from cannibalizing your own branded queries.
- **Why the others are wrong.** A/D are necessary but not protective against cannibalization; B is the opposite (Final URL Expansion ON is the trap-default).
- **Exam-takeaway.** Brand Exclusions = the most-tested PMax answer.

**Q31. Answer: C**
- **Why C is correct.** Add Brand Exclusions — the protective day-zero setting that prevents PMax bidding on branded queries.
- **Why the others are wrong.** A/B don't address the root cause; D is unrelated.
- **Exam-takeaway.** Brand cannibalization fix = Brand Exclusions.

**Q32. Answer: D**
- **Why D is correct.** PMax audience signals are HINTS — the algorithm can serve outside the signal if it finds higher-converting users.
- **Why the others are wrong.** A confuses with old Display custom audiences; B/C misrepresent the setting.
- **Exam-takeaway.** Signals = hints, not hard targeting.

**Q33. Answer: A**
- **Why A is correct.** Amazon Sponsored Products has four targeting types: Automatic, Manual Keyword (broad/phrase/exact), Manual ASIN (conquesting), Category.
- **Why the others are wrong.** B/C/D are incomplete.
- **Exam-takeaway.** Memorize the four targeting types.

**Q34. Answer: B**
- **Why B is correct.** TACoS (Total ACoS) divides ad spend by total Amazon revenue (including organic). It's the honest measure because Amazon Ads partly cannibalize organic.
- **Why the others are wrong.** A is ads-only; C/D are unrelated metrics.
- **Exam-takeaway.** TACoS > ACoS for brand-level decisioning.

**Q35. Answer: C**
- **Why C is correct.** TikTok Shop launched in the US in September 2023.
- **Why the others are wrong.** A predates the product; B is a different milestone; D ignores the launch.
- **Exam-takeaway.** September 2023 = US TikTok Shop GA.

**Q36. Answer: D**
- **Why D is correct.** Spark Ads boost an organic creator post that already has likes/comments/views — inheriting that social proof. Differentiates them from in-feed brand ads.
- **Why the others are wrong.** A/B/C don't capture the mechanism.
- **Exam-takeaway.** Spark Ads = inherited social proof.

**Q37. Answer: B**
- **Why B is correct.** Biden 2024 → Trump-era 2025 executive orders restricted Section 321 (De Minimis) on Chinese-origin goods, targeting Shein/Temu specifically.
- **Why the others are wrong.** A is fictional; C ignores the policy direction; D denies a real, observable risk.
- **Exam-takeaway.** De Minimis policy 2024-2025 = Chinese-origin restrictions.

**Q38. Answer: C**
- **Why C is correct.** Shein's peak private valuation was $66B in April 2023, ahead of an expected IPO.
- **Why the others are wrong.** A/B undercount; D is absurd.
- **Exam-takeaway.** $66B = Shein peak. Memorize for the case study.

**Q39. Answer: B**
- **Why B is correct.** DSA applied to VLOPs from February 17, 2024 (Regulation 2022/2065).
- **Why the others are wrong.** A is GDPR; C/D miss the effective date.
- **Exam-takeaway.** Feb 17, 2024 = DSA-for-VLOPs.

**Q40. Answer: C**
- **Why C is correct.** VLOP threshold = 45M+ EU monthly users.
- **Why the others are wrong.** A/B undercount; D overshoots.
- **Exam-takeaway.** 45M = VLOP threshold.

**Q41. Answer: D**
- **Why D is correct.** AliExpress (March 2024 DSA proceeding) showed marketplaces face higher regulatory load because of third-party seller risk channels (counterfeit, illegal-content, etc.).
- **Why the others are wrong.** A/B/C contradict the case.
- **Exam-takeaway.** Marketplaces = higher regulatory load than pure-play retailers.

**Q42. Answer: C**
- **Why C is correct.** *Wayfair* (2018) overturned *Quill Corp. v. North Dakota* (1992) physical-nexus rule.
- **Why the others are wrong.** A/B/D are unrelated constitutional cases.
- **Exam-takeaway.** *Quill* (1992) → *Wayfair* (2018): physical → economic nexus.

**Q43. Answer: B**
- **Why B is correct.** Post-*Wayfair*, 47 states + DC have economic-nexus thresholds (typically $100K-$500K revenue or 100-200 transactions).
- **Why the others are wrong.** A is pre-2018; C is fictional; D ignores all law.
- **Exam-takeaway.** Economic nexus by state. Each state's threshold differs.

**Q44. Answer: D**
- **Why D is correct.** Marketplace facilitator laws (2019-2021) put marketplaces on the hook to collect+remit for third-party sellers on the platform.
- **Why the others are wrong.** A is the inverse; B is invented; C ignores the law.
- **Exam-takeaway.** Marketplace = collector; own-site = you collect.

**Q45. Answer: B**
- **Why B is correct.** Channel-specific tax handling: Amazon for Amazon orders; brand for Shopify orders where economic nexus is met.
- **Why the others are wrong.** A double-collects; C/D ignore tax law.
- **Exam-takeaway.** Match collector to channel.

**Q46. Answer: A**
- **Why A is correct.** Simplest CLV = AOV × Frequency × Lifespan × Margin %. Fader/Hardie/Bell (*Customer Centricity*, 2012, Wharton) teach probabilistic models on top of this baseline.
- **Why the others are wrong.** B is revenue-per-customer (not CLV); C is profit; D is unrelated.
- **Exam-takeaway.** Four factors.

**Q47. Answer: A**
- **Why A is correct.** Revenue-based CLV = Orders × AOV = 2.8 × $68 = $190.40. Ratio = $190.40 / $42 ≈ 4.5. The question specifies revenue-based CLV (some blueprints use contribution-based, which would give $66.66 — distractor C).
- **Why the others are wrong.** B undercounts to single-order; C is the contribution-based CLV (a real number but not the revenue-based one the question asks for); D overshoots wildly.
- **Exam-takeaway.** Read carefully whether CLV is revenue-based or contribution-based; both definitions exist on exams.

**Q48. Answer: B**
- **Why B is correct.** Lighthouse audit + express checkout (Apple Pay / Shop Pay) + PDP simplification + A/B test is the standard high-leverage diagnostic.
- **Why the others are wrong.** A/C/D are operational malpractice.
- **Exam-takeaway.** Diagnose, don't excuse, mobile CR gaps.

**Q49. Answer: A**
- **Why A is correct.** A returns policy must specify window + free/paid + condition policy + reverse-logistics partner. Any missing dimension causes operational ambiguity.
- **Why the others are wrong.** B/C/D leave critical dimensions undefined.
- **Exam-takeaway.** Returns are designed systems, not afterthoughts.

**Q50. Answer: A**
- **Why A is correct.** Blended reverse cost = return rate × per-return cost = 30% × $9 = $2.70/order.
- **Why the others are wrong.** B/C/D ignore the rate weighting.
- **Exam-takeaway.** Always blended-weight return costs into unit economics.

**Q51. Answer: D**
- **Why D is correct.** Trigger-based behavioral flows convert orders of magnitude better than blast email (Reichheld + Klaviyo / lifecycle-marketing literature 2023-2024).
- **Why the others are wrong.** A/B/C oversimplify.
- **Exam-takeaway.** Triggered > blast.

**Q52. Answer: B**
- **Why B is correct.** Kohavi/Tang/Xu (*Trustworthy Online Controlled Experiments*, 2020, Cambridge) prescribe pre-computing N from baseline CR, MDE, α=0.05, power=0.80 — the only rigorous approach.
- **Why the others are wrong.** A/C/D are common pitfalls that lead to false-positive A/B "winners."
- **Exam-takeaway.** Pre-compute, don't peek, don't stop early.

**Q53. Answer: A**
- **Why A is correct.** If pre-determined for ~1% MDE at α=0.05 / power 0.80, p=0.04 is statistically significant — but 1% lifts are small and should be replicated before betting the roadmap on them.
- **Why the others are wrong.** B over-states confidence (small lifts often regress on replication); C dismisses the result; D ignores standard methodology.
- **Exam-takeaway.** Small lifts at small samples = significant but fragile. Replicate.

**Q54. Answer: B**
- **Why B is correct.** Shopify Markets (launched 2022) is native multi-currency + multi-language + multi-domain support inside one Shopify Plus instance.
- **Why the others are wrong.** A is over-engineered; C is a different platform; D ignores the product.
- **Exam-takeaway.** Shopify Markets = the native localization layer.

**Q55. Answer: A**
- **Why A is correct.** Shein's $66B build collapsed under DSA, US De Minimis policy, French fast-fashion law, UK IPO pause — proving the principle that cross-border arbitrage on a single regulatory loophole is structurally fragile.
- **Why the others are wrong.** B/C/D contradict the case.
- **Exam-takeaway.** Compliance-by-design > arbitrage-by-loophole.

**Q56. Answer: D**
- **Why D is correct.** AI agents (ChatGPT Operator, Claude Browser Use, Apple Intelligence) need structured Commerce APIs (PDP, catalog, inventory, checkout). MACH / composable architectures are API-first by design.
- **Why the others are wrong.** A/B/C lack the API surface agents consume.
- **Exam-takeaway.** Agentic commerce favors API-first architectures.

**Q57. Answer: B**
- **Why B is correct.** Suite wins below ~$200M GMV without engineering capacity (Forrester 2024). A $4M brand on commercetools is a documented failure mode.
- **Why the others are wrong.** A/C/D over-engineer wildly.
- **Exam-takeaway.** Match platform to scale + engineering capacity.

**Q58. Answer: B**
- **Why B is correct.** Blended ROAS overstates profitability when CM < ~35-40%. CM-ROAS shows the true return per ad dollar.
- **Why the others are wrong.** A/C/D ignore the math.
- **Exam-takeaway.** Always do the CM math before declaring victory.

**Q59. Answer: B**
- **Why B is correct.** Compliance-by-design = architect cross-border / B2B / composable initiatives with regulatory + operational redundancy from day one. The certification body explicitly tests this principle (per recent Adobe Commerce Business Practitioner blueprints).
- **Why the others are wrong.** A/C/D are anti-patterns.
- **Exam-takeaway.** Build with compliance + redundancy from day one.

**Q60. Answer: D**
- **Why D is correct.** At $300M GMV multi-brand cross-border the right architecture is composable backend + per-brand headless frontends + shared satellite services + IOSS + DSA compliance baked in. Reflects Forrester + MACH best practice 2024-2026.
- **Why the others are wrong.** A under-architects; B reinvents wheels; C outsources judgment.
- **Exam-takeaway.** Composable + headless + compliance-baked = the 2025-2026 reference architecture for global mid-to-large DTC groups.

---

## 📊 Scoring

| Score | Verdict |
|-------|---------|
| 54-60 | 🏆 Exam-ready. You can sit Adobe Commerce Business Practitioner this week. |
| 45-53 | ✅ Passing range. Review weak Modules and retry in 1 week. |
| 36-44 | ⚠️ Below pass mark. Re-read weakest 3 Modules + this exam's wrong answers; retest. |
| < 36  | 🔁 Re-read every Module Reading + Cheat-Sheet before attempting the real exam. |

---

## 🔍 Review Process

For EACH wrong answer:

1. Identify which Module covered it (1-10)
2. Re-read that module's Reading.md AND Cheat-Sheet.md
3. Add to your flashcard deck
4. Re-test the question after 7 days
5. If you miss the same topic twice → schedule a focused review session before booking the real exam

---
