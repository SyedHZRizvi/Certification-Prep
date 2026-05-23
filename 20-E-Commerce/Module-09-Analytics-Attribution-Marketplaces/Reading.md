# Module 9: Analytics, Attribution & Marketplaces 📊

> **Why this module matters:** Modules 1-8 taught you how to *operate* an e-commerce business. This module teaches you how to *measure* it honestly — and then how to choose where to sell. Bad analytics produce false confidence; good analytics produce the courage to kill what's not working. The brands that survive 2024-2026 are the ones whose finance team and marketing team agree on a single number. That number is the product of GA4 + attribution + MMM + incrementality testing — and a smart channel-mix decision across DTC, Amazon, Walmart Connect, and the international marketplaces. This module is the measurement and channel-strategy capstone.

---

## 🎯 A Real Story: Walmart Connect's MMM Pivot (2023–2024)

In April 2021, Apple shipped iOS 14.5 with App Tracking Transparency. Multi-Touch Attribution (MTA), the dominant measurement model for the previous decade, broke. Pixel-based conversion tracking became unreliable. Every brand running paid media on Meta, Google, and TikTok lost 30-40% of conversion signal overnight (Module 7 covered the playbook response: CAPI, AEM, Events API, server-side measurement).

But the deeper consequence was structural. Multi-touch attribution as a category — Visual IQ, Convertro, Neustar MarketShare — was already declining; ATT accelerated the decline into terminal. By 2023, the smart-money analytics conversation had shifted entirely to **Marketing Mix Modeling (MMM)** and **incrementality testing**. MMM, the technique pioneered by P&G econometricians in the 1980s and Anheuser-Busch in the 1990s, was suddenly the modern measurement standard. Meta open-sourced its MMM library (Robyn) in November 2021. Google released Meridian (Bayesian MMM) in 2024. PayPal's open-source LightweightMMM landed in 2022.

Walmart spotted the opening. Walmart's retail media network, Walmart Connect, had been growing aggressively since its 2021 rebrand (formerly Walmart Media Group). The pitch to advertisers: "We have first-party purchase data on 90% of US households. Our MMM models close the iOS 14.5 measurement gap that Meta and Google can't." In 2023, Walmart Connect launched MMM-as-a-service for its largest advertisers. By 2024, Walmart Connect had reached $4B+ in annual ad revenue (up ~30% YoY), and the MMM-blended attribution model became a competitive moat against Amazon Ads (which was still primarily click-attributed within the Amazon ecosystem).

The 2024 industry trajectory:
- **Retail media networks** (Walmart Connect, Amazon Ads, Target Roundel, Kroger Precision, Instacart) crossed $50B in US ad spend per eMarketer.
- **Walmart Connect** was the #3 US digital ad platform after Google and Meta — and the fastest-growing.
- **MMM-as-a-service** became standard at every major retail media network.

The lesson is two-fold:
1. **Privacy-first measurement isn't just defensive.** Walmart turned a measurement crisis into a $4B competitive offering. The brands that adopt MMM are not just covering for broken pixels — they're learning the *real* incrementality of each channel.
2. **Marketplaces are no longer just sales channels — they're measurement infrastructures.** Selling on Walmart isn't just about GMV; it's about getting access to Walmart Connect's MMM-blended measurement layer.

This module gives you the operating knowledge to measure honestly in the post-ATT world, and to choose the right marketplace mix.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Paid acquisition channels + post-iOS-14.5 measurement basics — covered in [Module 7](../Module-07-Paid-Acquisition-E-Commerce/Reading.md)
> - SEO + lifecycle as organic compounders — covered in [Module 8](../Module-08-SEO-Content-Lifecycle-Marketing/Reading.md)
> - Catalog hygiene for marketplace feeds — covered in [Module 3](../Module-03-Product-Catalog-Information-Management/Reading.md)
> - Cross-course: [16-AI-Marketing-Strategist Module 4 — Multi-Touch Attribution](../../16-AI-Marketing-Strategist/Module-04-Multi-Touch-Attribution/Reading.md) and [Module 5 — Marketing Mix Modeling](../../16-AI-Marketing-Strategist/Module-05-Marketing-Mix-Modeling/Reading.md) go deeper on the math.
> - Cross-course: [16-AI-Marketing-Strategist Module 3 — GA4 Mastery](../../16-AI-Marketing-Strategist/Module-03-GA4-Mastery-Custom-Events/Reading.md) extends the GA4 event taxonomy below.
> If any of these are shaky, pause and review before continuing.

---

## 📈 GA4 — The Event-Driven Analytics Standard

Universal Analytics (the previous Google analytics platform) was retired July 1, 2023. GA4 became the universal default. The conceptual shift is fundamental: GA4 is **event-driven**, not session-driven.

### The GA4 Data Model

In Universal Analytics, the unit was the *session* (a 30-minute window of user activity). Hits within the session aggregated into pageviews, events, e-commerce transactions, etc.

In GA4, the unit is the **event**. *Every interaction is an event.* Pageview is an event (`page_view`). Adding to cart is an event (`add_to_cart`). Logging in is an event (`login`). Each event can carry **parameters** (up to 25 custom + automatic).

```
Event: purchase
Parameters:
  - transaction_id: "T-9941"
  - value: 127.50
  - currency: "USD"
  - items: [ {item_id, item_name, price, quantity}, ... ]
  - coupon: "WELCOME10"
```

🧠 **MEMORIZE THIS.** GA4 model: User → Event → Parameters. NOT Session → Hit. The session concept still exists (`session_id` parameter), but it's not the fundamental unit.

### The E-Commerce Event Taxonomy (recommended events)

GA4 ships with a recommended e-commerce event schema. **These names must be used exactly** for GA4 reports to populate:

| Event | When to fire | Required params |
|-------|-------------|----------------|
| `view_item_list` | Category / search results loaded | `items` array |
| `select_item` | Click on a product card | `items` array |
| `view_item` | PDP loaded | `items`, `value`, `currency` |
| `add_to_cart` | Add to cart | `items`, `value`, `currency` |
| `view_cart` | Cart page loaded | `items`, `value`, `currency` |
| `remove_from_cart` | Remove from cart | `items` |
| `begin_checkout` | Checkout started | `items`, `value`, `currency` |
| `add_payment_info` | Payment step completed | `items`, `value`, `currency`, `payment_type` |
| `add_shipping_info` | Shipping step completed | `items`, `value`, `currency`, `shipping_tier` |
| `purchase` | Transaction completed | `transaction_id`, `items`, `value`, `currency` |
| `refund` | Refund processed | `transaction_id`, `items`, `value`, `currency` |

🚨 **Trap on the exam:** Custom event names (e.g., `Purchase` or `BuyComplete`) break the GA4 e-commerce reports. Use the exact lowercase snake_case names from the spec.

### Custom Dimensions + Custom Metrics

Beyond the recommended events, you can register up to **50 custom dimensions** (user/event scope) and **50 custom metrics** in GA4. Common e-commerce ones:

| Custom Dimension | Scope | Example |
|------------------|-------|---------|
| `customer_segment` | User | `vip`, `repeat`, `new` |
| `subscription_status` | User | `active`, `paused`, `cancelled` |
| `product_category_l1` | Event | `Apparel` |
| `product_brand_owned` | Event | `private_label`, `licensed`, `wholesale` |
| `attribution_channel` | Event | `paid_search`, `paid_social`, `organic` |

🎯 **Exam tip:** Custom dimensions in GA4 are registered in the *Admin → Custom definitions* panel before they can be reported. Sending the parameter alone is not enough — it must be registered.

### BigQuery Export — The Power-User Path

GA4's standout feature vs Universal Analytics is **free daily BigQuery export** (sandbox tier; paid tier for streaming). Every event becomes a row in a BigQuery table. This unlocks:

- SQL-level analysis (vs the GA4 UI's limitations)
- Joining GA4 events with first-party data (orders, customers, inventory)
- Custom attribution models in SQL or Python (data-driven attribution at row level)
- Powering MMM and predictive LTV models

🧠 **MEMORIZE THIS.** GA4 BigQuery export = free for sandbox tier; the *only* way to do row-level analysis. Always enable on day 1 — the historical data isn't backfilled retroactively.

### GA4 Reporting Identities

GA4 supports four identity-stitching modes in the Admin → Reporting identity settings:

| Mode | Behavior |
|------|----------|
| **Blended** (default 2024) | User-ID first, then device-id (Google signals), then modeled |
| **Observed** | User-ID + device-id, no modeling |
| **Device-based** | Device-id only (legacy UA-like) |
| **By measurement** (older default) | Various — being phased out |

For e-commerce: send `user_id` (your customer ID, hashed) on login and purchase to stitch cross-device journeys.

---

## 🎯 Attribution Models — From Last-Click to Data-Driven

Attribution is the discipline of assigning credit for a conversion across the touchpoints that preceded it. The historical taxonomy:

| Model | Logic | Bias |
|-------|-------|------|
| **Last-click** | 100% credit to the last touchpoint | Under-credits brand-building channels |
| **First-click** | 100% credit to the first touchpoint | Under-credits closer channels |
| **Linear** | Equal credit across all touchpoints | Penalizes effective channels |
| **Time-decay** | More credit to recent touchpoints (exponential) | Still under-credits awareness |
| **Position-based (U-shaped)** | 40% first, 40% last, 20% middle | Arbitrary weights |
| **Data-driven (DDA)** | Algorithmic, based on path-to-conversion patterns | Black-box; needs sufficient volume |

### GA4's Data-Driven Attribution (DDA)

GA4 made DDA the *default* attribution model in 2023, replacing last-click (which Google deprecated in 2023 for Google Ads). DDA uses machine learning to assign fractional credit based on:
- Position in the path (first, middle, last)
- Channel type (paid, organic, email, direct)
- Conversion-path patterns observed across millions of users

🚨 **Trap on the exam:** DDA in GA4 ≠ DDA in Google Ads. They use the same name but different model implementations. The GA4 number and the Google Ads number rarely match exactly. The reconciliation is itself a marketing-ops job.

### Multi-Touch Attribution (MTA) — Why It's in Decline

MTA was the post-2010 industry standard: pixel-based, deterministic, cross-channel. Tools like Visual IQ, Convertro, Neustar MarketShare promised "credit assignment across Google + Meta + TikTok + email + organic."

iOS 14.5 / ATT broke MTA's pixel-tracking foundation. By 2024:
- Visual IQ (acquired by Nielsen) → effectively wound down
- Convertro (acquired by AOL) → effectively defunct
- Neustar MarketShare (acquired by TransUnion) → shifted toward MMM
- Adobe Analytics Attribution → still functional but heavily MMM-augmented

🧠 **MEMORIZE THIS.** MTA worked when third-party cookies + IDFA were universal. Post-iOS-14.5 (April 2021) + Chrome cookie deprecation (rolling out 2024-2025), MTA's deterministic foundations are gone. The industry shift: **MMM + Incrementality + DDA-blended**.

### Marketing Mix Modeling (MMM) — The Modern Standard

MMM is econometric regression that models marketing impact at the aggregate level (no individual user tracking). It was invented in the 1960s-70s by Marion Harper at McCann Erickson and operationalized in CPG by P&G's marketing analytics group in the 1980s. The classic input/output:

```
Output: Daily/weekly revenue (the dependent variable)

Inputs (independent variables):
- Paid media spend by channel (Google, Meta, TikTok, Amazon, Walmart...)
- Organic search volume
- Email send volume
- Discount depth
- Seasonality (week-of-year, holiday flag)
- Macro factors (CPI, unemployment, weather for some categories)
- Competitor spend (where measurable)
```

Modern MMM tooling (2024-2026):
| Tool | Owner | Strength |
|------|-------|----------|
| **Robyn** | Meta (open-source, 2021) | Free, transparent, ridge-regression based |
| **Meridian** | Google (2024) | Bayesian; integrates with Google Ads + Analytics |
| **LightweightMMM** | PayPal (open-source, 2022) | Bayesian; lightweight |
| **Recast** | Recast.ai (commercial, 2023+) | DTC-focused, managed service |
| **Bain MMM / Analytics Partners** | Consulting | Enterprise; managed |
| **Walmart Connect MMM** | Walmart (2023+) | Retail-media-tied |

🎯 **Exam tip:** MMM is *aggregate*-level — no individual user attribution. That's its strength (privacy-compliant) and its weakness (can't optimize per-keyword).

### Incrementality Testing — The Truth Serum

Incrementality testing measures the *causal* lift of a channel by holding out a market or audience and observing the difference. The three patterns:

| Pattern | How | Best for |
|---------|-----|----------|
| **Geo-holdout** | Pause channel in 5-10% of US markets for 4-8 weeks | Channels with geo-targeting (Meta, Google) |
| **PSA tests** | Show non-related Public Service Announcements to control group | Display, video (where geo isn't precise) |
| **Conversion lift studies** | Platform-native (Meta, Google offer this) | Closed-system platforms |
| **Switchback** | Turn channel on/off alternately by week or day | Last-resort; high variance |

Geo-holdout is the gold standard. Meta and Google offer first-party conversion lift studies, but they grade their own homework. The 2024 industry consensus: run independent geo-holdouts at least quarterly per major channel.

🚨 **Trap on the exam:** "Conversion lift study" run by Meta on Meta inventory measures Meta's incremental contribution — but only against the baseline Meta itself defines. Independent geo-holdout is the only methodologically clean answer.

---

## 🏬 Marketplace Strategy — Where to Sell

A 2024 mid-sized DTC brand typically sells across 3-7 channels:
- DTC site (Shopify, WooCommerce, BigCommerce)
- Amazon (US + occasionally EU)
- Walmart Marketplace (US)
- Target Plus (invite-only)
- TikTok Shop (US, since Sept 2023)
- Instagram + Facebook Shops (declining)
- International marketplaces (Mercado Libre LATAM, JD.com China, Coupang Korea, Rakuten Japan)

The channel-mix choice is one of the highest-stakes decisions in DTC strategy.

### Amazon — The Default + The Trap

Amazon's US e-commerce market share is roughly 38% (eMarketer 2024 estimate). For most product categories, Amazon is the largest single search engine for purchase intent. Approximately 60% of US online product searches start on Amazon (Search Engine Land surveys).

**The FBA economics (2026 fee structure):**

| Cost | Typical rate |
|------|-------------|
| Referral fee | 8-15% of sale price (15% standard; varies by category) |
| FBA fulfillment fee | $3.06-$5.42 small standard; up to $150+ for oversize |
| FBA storage fee | $0.78/cu.ft. (Jan-Sep) → $2.40/cu.ft. (Oct-Dec) |
| Inbound placement fee | New 2024-2025; $0.27-$1.66/unit |
| Long-term storage | $6.90/cu.ft after 271 days |
| Returns processing | $1-$3 per return |

Net Amazon take rate: **typically 30-45% of GMV** when all fees + advertising are included. A brand selling at $40 retail nets $22-$28 after Amazon fees + FBA + advertising — before COGS.

🧠 **MEMORIZE THIS.** Amazon take rate is roughly 30-45% of GMV including fees + ads. Plan unit economics accordingly. A brand at 20% contribution margin DTC may be at -5% on Amazon.

### The "Race to Zero" on Amazon

Amazon's marketplace structure incentivizes commodity competition. Three forces:
1. **Buy Box algorithm** rewards lowest price (within a tight band) + fastest shipping (FBA bias).
2. **Search ranking** ties to conversion velocity — discounting drives velocity drives ranking.
3. **Private-label competition** — Amazon Basics, Solimo, Amazon Essentials launched 100+ brands that compete directly with marketplace sellers.

Result: in commoditized categories (USB cables, kitchen tools, supplements), margins compress to single digits. The 2024 *Marketplace Pulse* analysis showed median Amazon-only brand contribution margin at 6-12% — far below DTC's typical 25-40%.

### Walmart Marketplace — The Strategic Alternative

Walmart Marketplace launched 2009, opened to third-party sellers in 2016, and grew aggressively 2020-2024. By 2024:
- ~180,000 active sellers
- 5-15% referral fees (slightly lower than Amazon)
- WFS (Walmart Fulfillment Services) — Walmart's FBA equivalent
- Walmart Connect ad platform — the MMM-blended retail media network covered above
- More curated than Amazon — invite + approval process

The 2024 winning play: be one of the relatively few brands on Walmart Marketplace (vs the 9M+ Amazon sellers), enjoy higher organic visibility, layer Walmart Connect retail media for additional reach.

### International Marketplaces — The Globalization Playbook

| Region | Dominant marketplace | Take rate | Notes |
|--------|---------------------|-----------|-------|
| US | Amazon, Walmart, Target+ | 30-45% | Saturated; high competition |
| EU | Amazon EU, Zalando (fashion), Otto (Germany) | 25-40% | VAT + GPSR compliance |
| LATAM | **Mercado Libre** | 20-30% | $124B 2023 GMV; Brazil/Mexico/Argentina |
| China | **JD.com**, Tmall (Alibaba), Pinduoduo | 20-50% | Tier-1 priority + payment integration |
| Japan | **Rakuten**, Amazon Japan | 15-30% | Rakuten Ichiba ecosystem |
| Korea | **Coupang** | 20-30% | "Rocket Delivery" same-day |
| India | Flipkart (Walmart-owned), Amazon India | 15-25% | Localization heavy |
| SE Asia | Shopee, Lazada (Alibaba) | 15-25% | Lazada in 6 markets |

🎯 **Exam tip:** Mercado Libre's 2024 annual report disclosed $124B GMV across LATAM, ~13% YoY growth, dominant in Brazil + Mexico + Argentina. For LATAM-focused DTC, MELI is to Amazon-US as Coupang is to Amazon-Japan: the local default.

### Brand-vs-Marketplace Tension — The Strategic Question

Every DTC brand eventually faces: how much marketplace, how much DTC?

| Strategic posture | Logic | Risk |
|-------------------|-------|------|
| **Marketplace-first** | Maximize GMV; let Amazon do the customer acquisition | Amazon owns customer data; race-to-zero pressure |
| **DTC-first** | Own customer + data + margin | Slower growth; pay full CAC |
| **Hybrid (60/40)** | Both channels; DTC for new/premium, marketplace for replenishment | Channel conflict; pricing complexity |
| **Marketplace-exclusive** | All-in on Amazon | Single-platform risk |
| **DTC-only** | No marketplace presence | Smaller addressable market |

The 2024 consensus for sub-$50M DTC brands: 60-70% DTC, 20-30% Amazon, 5-10% Walmart/other. Above $100M: shift toward 40-50% marketplace as scale demands.

🚨 **Trap on the exam:** "Amazon should match DTC pricing exactly." FALSE. Amazon's variable fees + ad costs + return rates differ from DTC; matching DTC retail price often nets a *loss* on Amazon. Build a separate Amazon-channel P&L.

### Hau Lee's Triple-A Supply Chain (HBR, 2004) — Still Relevant for Marketplaces

Hau Lee's framework (Lee, "The Triple-A Supply Chain," *Harvard Business Review*, October 2004) is the canonical marketplace-fulfillment reference: **Agility, Adaptability, Alignment**. For e-commerce in 2026:
- **Agility** — Quickly responding to short-term demand changes (a TikTok product going viral, a competitor stockout)
- **Adaptability** — Adjusting supply networks over time (shifting from China to Vietnam during the 2018-2024 tariff cycles)
- **Alignment** — Aligning incentives between brand, marketplace, and 3PL (Walmart Connect's MMM data-sharing is a 2024 example of alignment innovation)

---

## 💼 Case Study — Walmart Connect's MMM Pivot (2023–2024)

**Situation.** In April 2021, Apple's App Tracking Transparency framework went live with iOS 14.5. Multi-Touch Attribution — the dominant marketing measurement model for the previous decade — broke. By 2022-2023, every brand running paid media on Meta, Google, and TikTok had lost 30-40% of conversion signal. The industry response was a shift toward Marketing Mix Modeling, but MMM had historically been a slow, expensive consulting engagement (Bain, Analytic Partners) accessible only to enterprise marketers. Smaller DTC brands had no good answer.

Meanwhile, Walmart's retail media network — Walmart Connect (rebranded from Walmart Media Group in January 2021) — was growing aggressively. Walmart had a unique asset: first-party purchase data on ~90% of US households via the combination of in-store transactions, Walmart.com orders, and Walmart Marketplace data. Amazon Ads had similar data inside Amazon, but Amazon's measurement was largely click-attributed and confined to the Amazon ecosystem. Walmart could potentially offer something Amazon couldn't: cross-channel, MMM-blended measurement across Walmart-store + Walmart.com + Walmart Marketplace + sponsored ads.

**Decision.** In 2023, Walmart Connect made three strategic moves:
1. **Built internal MMM capability at scale.** Walmart Connect's data science team built proprietary MMM models on top of the Walmart data lake. Initially deployed for internal use — measuring the incrementality of Walmart Connect's own ad spend.
2. **Launched MMM-as-a-service for top advertisers.** In Q3 2023, Walmart Connect began offering MMM measurement to its top-tier advertisers (~200 brands). The pitch: "We model the incrementality of *all your ad spend* — not just on Walmart — using our first-party purchase data as the ground truth."
3. **Integrated MMM with self-serve ad buying.** By early 2024, Walmart Connect's self-serve platform exposed MMM-derived optimization recommendations directly in the advertiser dashboard.

Concurrently, Walmart expanded the retail media inventory: in-store digital screens, Walmart+ membership ads, connected TV (Vizio acquisition closed Q4 2024 at $2.3B), and onsite Walmart.com sponsored placements.

**Outcome.** Walmart Connect reached approximately $4B in annual ad revenue in 2024 (per Walmart Q4 2024 earnings; up ~30% YoY from ~$3B in 2023). It became the #3 US digital ad platform after Google and Meta (per eMarketer 2024 retail media estimates) and the fastest-growing ad business at scale.

The downstream effects:
- Amazon Ads ($50B+ in 2024) remained #1 in retail media by revenue, but Walmart was closing the rate-gap.
- Other retail media networks copied the playbook: Target Roundel, Kroger Precision Marketing, Instacart Ads all expanded MMM offerings in 2024.
- The category — US retail media networks — crossed $50B in ad spend per eMarketer 2024, up from ~$35B in 2022.
- Vizio acquisition gave Walmart Connect access to CTV measurement at scale, closing the offline/online attribution gap.

Mid-market DTC brands that had previously been priced out of MMM consulting could now access MMM-grade measurement bundled with Walmart Connect ad spend. The competitive dynamic flipped: by 2024, *not selling on Walmart* meant *not getting Walmart's MMM measurement* — a measurement gap that Amazon (still click-attributed) couldn't close.

**Lesson for the exam / for practitioners.** Privacy-first measurement is a competitive offering, not just a defensive position. Walmart turned the post-ATT measurement crisis into a $4B-revenue advantage. The takeaway for practitioners: choose marketplaces not just on GMV upside but on *measurement infrastructure*. Walmart Connect's MMM-blended data is a structural advantage that Amazon's click-attributed dashboards can't match. The exam tests this aggressively — questions on MMM vs MTA, retail media network economics, and post-ATT measurement strategy are 4-6 questions across most certifications.

**Discussion (Socratic).**
- Q1: Walmart's MMM advantage rests on first-party purchase data covering ~90% of US households. Amazon's measurement is similarly strong inside Amazon — but Amazon doesn't have offline retail data the way Walmart does. Is Walmart's offline-online data advantage *durable* or will Amazon close it via Whole Foods, Amazon Fresh, and Amazon Go?
- Q2: MMM is aggregate-level. It can't tell you which keyword in Google Ads is driving incrementality. How would you combine MMM (for budget allocation) with DDA (for in-channel optimization), and what's the principle for when each model wins?
- Q3: Walmart Connect offers MMM-as-a-service bundled with Walmart ad spend. The MMM model measures *all* of your spend, not just Walmart's — including Amazon's. As an advertiser, what's the conflict of interest, and what's the methodological check you'd impose?

---

## 💬 Discussion — Socratic prompts

1. A DTC brand uses GA4's data-driven attribution and Meta Ads' last-click attribution. Meta reports 4.2x ROAS; GA4 reports 2.8x for the same campaign. Which is "right," and how would you defend either number in a CFO review?

2. Geo-holdout incrementality tests cost 5-10% of channel revenue over the test window. A 4-week Meta geo-holdout might cost $200K-$500K. At what brand revenue does the test pay for itself, and what's the lookback-period principle for re-running it?

3. An MMM model says Amazon Ads has 1.2x incrementality (i.e., for every $1 spent, total revenue rises $1.20 above baseline). The brand's Amazon dashboard says 4.5x ROAS. Reconcile the two numbers from first principles. What's the difference in what they're measuring?

4. A brand earns 60% margin on DTC and 12% margin on Amazon. Strategic CFO says "stop selling on Amazon; concentrate on DTC." Build the strongest case for AND against, then identify the second-order effect both sides usually miss.

5. Mercado Libre's 2024 LATAM GMV was $124B. A US DTC brand at $30M revenue is considering LATAM expansion. Map the three biggest unknowns and the order of operations to de-risk them.

---

> **Where this leads.**
> - Inside this course: Module 10 covers cross-border, B2B, and composable commerce — the platform and operating choices for global + complex catalogs.
> - Cross-course: [16-AI-Marketing-Strategist Module 4 — Multi-Touch Attribution](../../16-AI-Marketing-Strategist/Module-04-Multi-Touch-Attribution/Reading.md) goes deeper on MTA math; [16-AI-Marketing-Strategist Module 5 — MMM](../../16-AI-Marketing-Strategist/Module-05-Marketing-Mix-Modeling/Reading.md) covers the econometrics; [16-AI-Marketing-Strategist Module 3](../../16-AI-Marketing-Strategist/Module-03-GA4-Mastery-Custom-Events/Reading.md) extends GA4 events.
> - Practice: Practice Exam 2 has ~10 questions drawn from this module (GA4 events, attribution models, MMM vs MTA, marketplace economics, retail media networks).

---

## 📚 Further Reading (Optional)

- 📖 [GA4 official documentation — recommended events](https://support.google.com/analytics/answer/9267735) — the canonical e-commerce event spec
- 📖 [GA4 BigQuery export setup](https://support.google.com/analytics/answer/9358801) — power-user data layer
- 📖 Ron Kohavi, Diane Tang & Ya Xu, *Trustworthy Online Controlled Experiments: A Practical Guide to A/B Testing* (Cambridge University Press, 2020) — the canonical experimentation text
- 📖 [Meta Robyn (open-source MMM)](https://facebookexperimental.github.io/Robyn/) — ridge-regression MMM framework
- 📖 [Google Meridian (Bayesian MMM)](https://developers.google.com/meridian) — 2024 release; Google Ads integrated
- 📖 [PayPal LightweightMMM](https://github.com/google/lightweight_mmm) — Bayesian MMM (originally PayPal, now Google-maintained)
- 📖 [Apple App Tracking Transparency framework](https://developer.apple.com/documentation/apptrackingtransparency) — April 2021 launch
- 📖 [eMarketer retail media report 2024](https://www.emarketer.com/) — $50B+ category breakdown
- 📖 [Walmart Q4 2024 earnings disclosures](https://corporate.walmart.com/news/business/quarterly-results) — Connect revenue line
- 📖 Hau Lee, "The Triple-A Supply Chain," *Harvard Business Review* (October 2004) — agility, adaptability, alignment framework
- 📖 [Mercado Libre 2024 annual report](https://investor.mercadolibre.com) — LATAM marketplace economics
- 📖 [Marketplace Pulse — Amazon analyses](https://www.marketplacepulse.com) — independent Amazon ecosystem reporting
