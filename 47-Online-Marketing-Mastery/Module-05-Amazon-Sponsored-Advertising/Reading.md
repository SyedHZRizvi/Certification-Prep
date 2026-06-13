# Module 05: Amazon Sponsored Advertising 📦

> **Why this module matters:** Amazon is the world's largest product search engine — 74% of US shoppers start product searches directly on Amazon (industry estimate, 2024), bypassing Google entirely. Mastering Amazon's ad stack means capturing buyers at the precise moment of purchase intent, something no other platform can match.

> **Prerequisites:** Module 01 (Digital Marketing Fundamentals), basic understanding of PPC concepts (CPC, impressions, clicks), familiarity with the Amazon Seller Central or Vendor Central interface.

---

## ☕ A Story: The Kitchenware Brand That Cracked the Amazon Code

In January 2023, Sophie Hargreaves was staring at a spreadsheet that made no sense. Her UK kitchenware brand — handmade copper mixing bowls, the kind that cost £45 and make Instagram food photographers weep with joy — was selling £10,000 a month on Amazon. Not bad. But her advertising cost of sale (ACoS) was sitting at 68%. For every £100 in ad-driven sales, she was spending £68 on clicks. Her agency told her this was "normal for the category." Sophie, a former management consultant, did not accept "normal."

She fired the agency and started reading.

Over six weeks, Sophie discovered something that changed everything: she had one campaign. One broad-match auto campaign, bidding on everything from "copper bowl" to "dog food bowl" to — genuinely — "mixing bowl cement." Amazon's auto campaigns are wonderfully dumb. They will gleefully spend your money on traffic that will never convert.

Sophie rebuilt her account using what practitioners call the **4-Campaign Waterfall Structure**:

- **Campaign 1 — Auto (Discovery):** Low bids (£0.30–0.40), 10% of total budget. Pure intelligence-gathering. Let Amazon's algorithm find search terms you'd never think of.
- **Campaign 2 — Broad Manual (Expansion):** Winning search terms harvested from Campaign 1. Medium bids (£0.55–0.65). Test volume.
- **Campaign 3 — Phrase Manual (Scale):** Proven converters from Campaign 2. Higher bids (£0.75–0.85). Build momentum.
- **Campaign 4 — Exact Match (Dominate):** Your top 20–30 money terms. Maximum bids (£1.00–1.30). Zero waste.

The ritual that tied it all together was what Sophie called her **"Sunday Harvest"**: every Sunday morning, coffee in hand, she pulled the Search Term Report from Campaign Manager, sorted by spend descending, and did three things:

1. Negated irrelevant terms in the auto campaign (goodbye, dog food bowl)
2. Promoted high-converting terms up to the next campaign tier
3. Adjusted bids based on ACoS vs. her 30% target

By month three, ACoS had dropped to 34%. By month six — July 2023 — monthly revenue had hit £85,000. The campaigns had essentially become a self-funding flywheel: auto campaigns discovered winners, exact-match campaigns harvested them at scale, and negative keywords continuously pruned the waste.

Sophie's story is not unique. It is, in fact, the standard playbook for any product-based brand on Amazon. The brands that win are not the ones with the biggest budgets — they are the ones who understand the auction mechanics, read the data weekly, and operate their campaigns like a precision instrument rather than a slot machine.

That is what this module teaches you.

---

## Section 1: The Amazon Ad Ecosystem — Four Products, One Funnel

Amazon's advertising stack has four main products. Think of them as layers of a funnel, each playing a different role.

### 1.1 Sponsored Products (SP)

The workhorse. Sponsored Products are keyword- or product-targeted ads that appear in search results and on product detail pages. They are the closest thing to Google's Search ads: you bid on a keyword, your product appears, someone clicks, Amazon charges you.

**Key characteristics:**
- Cost-per-click (CPC) model
- Available to third-party sellers (Seller Central) and vendors (Vendor Central)
- Can target by keyword OR by ASIN/category (product targeting)
- Two campaign types: **Auto** (Amazon chooses targeting) and **Manual** (you choose targeting)
- Ads appear as "Sponsored" label above and within search results, and on competitor PDPs

**UK/Europe note:** Sponsored Products are available across Amazon's European marketplaces (amazon.co.uk, amazon.de, amazon.fr, amazon.es, amazon.it, amazon.nl, amazon.se, amazon.pl). Budgets and bids are set per marketplace — there is no pan-European campaign.

### 1.2 Sponsored Brands (SB)

The brand builder. Sponsored Brands appear as banner-style ads at the top of search results, featuring your brand logo, a custom headline, and 3+ products. Think of it as a digital billboard at the entrance to a shopping aisle.

**Key characteristics:**
- Available only to brand-registered sellers and vendors
- Three formats: Product Collection, Store Spotlight, Video
- **Sponsored Brands Video** is one of the highest-performing formats in Amazon advertising — it autoplays in search results and tends to drive dramatically higher click-through rates than static ads
- Bidding is keyword-based; ads link to a Store page or a custom landing page
- Excellent for new-to-brand customer acquisition

### 1.3 Sponsored Display (SD)

The retargeter. Sponsored Display ads appear on and off Amazon — on competitor product pages, on Amazon's homepage, and across Amazon's display network (third-party websites and apps via the Amazon Publisher Network).

**Key characteristics:**
- Targets audiences, not just keywords: you can retarget shoppers who viewed your product but didn't buy, or target shoppers who viewed competitor products
- Two targeting modes: **Audiences** (behaviour-based) and **Contextual** (product/category-based)
- CPC and CPM (cost per thousand impressions) bidding options
- Lower average CPC than SP, but lower purchase intent
- Particularly powerful for re-engagement: "You looked at this copper bowl 3 days ago. It's still here."

**GDPR / European note:** Sponsored Display's audience targeting relies on Amazon's first-party data (purchase history, browse history). Because this data stays within Amazon's walled garden and users have agreed to Amazon's T&Cs, it does not trigger third-party cookie consent requirements the way Google Display Network retargeting does. This makes SD relatively GDPR-compliant by design — a genuine competitive advantage for European sellers vs. running retargeting on external platforms.

### 1.4 Amazon DSP (Demand-Side Platform)

The programmatic layer. Amazon DSP allows advertisers to buy display and video inventory programmatically, both on Amazon-owned properties AND on third-party sites, using Amazon's unparalleled first-party shopping data.

**Key characteristics:**
- Minimum spend typically $10,000–$50,000/month (managed service) or self-serve via Amazon
- Audience segments based on purchase behaviour: "Shoppers who bought in your category in the last 30 days," "Shoppers who bought a competitor brand," etc.
- Ideal for brands running TV/video campaigns that want to reach Amazon shoppers off-platform
- Available in US, Canada, UK, Germany, France, Spain, Italy, Japan, and select other markets
- Requires a separate DSP account, distinct from Seller/Vendor Central

> **Common Trap:** New advertisers often confuse Sponsored Display with Amazon DSP. They are different products. SD is self-serve, low-minimum, keyword/product-targeted, available in Campaign Manager. DSP is programmatic, high-minimum, audience-driven, and managed via a separate interface. Do not conflate them in an interview.

---

## Section 2: The Auction Engine — How Amazon Decides Who Wins

Understanding Amazon's auction mechanics is the difference between a practitioner and a button-pusher.

### 2.1 The Second-Price Auction (with a twist)

Amazon uses a **modified second-price auction** (also called a Vickrey-style auction). You bid the maximum you're willing to pay per click. The winner pays approximately £0.01 more than the second-highest bid — not their maximum bid.

**Example:**
| Bidder | Max Bid | Actual CPC Paid |
|--------|---------|-----------------|
| You | £1.20 | £0.91 (second-price + £0.01) |
| Competitor A | £0.90 | — |
| Competitor B | £0.70 | — |

In practice, Amazon's auction is more complex — it incorporates **Ad Rank**, which blends bid amount with **predicted CTR** (how likely your ad is to be clicked based on historical data) and **relevancy score**. A lower bid with a highly relevant, high-converting product can beat a higher bid from a poorly optimised listing.

This is crucial: **your listing quality directly affects your ad costs.** Optimising your product title, images, and bullet points is not separate from your advertising strategy — it is part of it.

### 2.2 Match Types on Amazon

Amazon offers three keyword match types for manual campaigns, similar to but not identical to Google Ads:

| Match Type | How it Works | Example Keyword | Would Trigger On |
|------------|-------------|-----------------|-----------------|
| **Broad** | Matches any order of words + related terms | `copper mixing bowl` | "bowl for mixing copper," "copper bowl for baking," "copper coloured salad bowl" |
| **Phrase** | Words must appear in order, additional words allowed before/after | `"copper mixing bowl"` | "buy copper mixing bowl UK," "large copper mixing bowl gift" |
| **Exact** | Only the precise phrase, no additions | `[copper mixing bowl]` | "copper mixing bowl" only |

**Negative keywords** are available at campaign and ad group level, and support phrase and exact match. Negatives are the single most underused lever in Amazon PPC — most beginner accounts bleed money on irrelevant traffic that negative keywords would eliminate in minutes.

### 2.3 Auto Campaign Targeting Subtypes

When you create an auto campaign, Amazon uses four sub-targeting types under the hood:

| Auto Targeting Type | Description |
|--------------------|-------------|
| **Close match** | Search terms closely related to your product |
| **Loose match** | More broadly related search terms |
| **Substitutes** | Ads shown on competitor product pages |
| **Complements** | Ads shown on complementary product pages |

You can view and adjust bids for each of these sub-types in Campaign Manager. Advanced advertisers set different bid levels per sub-type — typically highest for Close match, lowest for Loose match.

---

## Section 3: The Metrics That Matter — ACoS, TACoS, and ROAS

If Amazon PPC had a holy trinity, it would be ACoS, TACoS, and ROAS. Candidates who confuse these in an interview do not get the job.

### 3.1 ACoS — Advertising Cost of Sale

**Formula:** `ACoS = (Ad Spend ÷ Ad Revenue) × 100`

ACoS tells you what percentage of your ad-attributed revenue went back into advertising. A 25% ACoS means you spent £25 to generate £100 in ad-attributed sales.

**What's a "good" ACoS?** It depends entirely on your **break-even ACoS**:

`Break-Even ACoS = Profit Margin % (before advertising)`

If your product has a 40% margin, your break-even ACoS is 40%. Below that — you're profitable. Above that — you're losing money on ads.

**Target ACoS** is typically set below break-even. For a mature product with strong organic rank, a target ACoS of 15–20% is reasonable. For a new product launch where you're deliberately buying sales velocity to climb rankings, an ACoS of 60–80% can be strategically justified.

### 3.2 TACoS — Total Advertising Cost of Sale

**Formula:** `TACoS = (Ad Spend ÷ Total Revenue) × 100`

The most important metric most Amazon sellers ignore. TACoS divides your ad spend by **total** revenue — organic + paid — not just ad-attributed revenue.

**Why TACoS > ACoS for business health assessment:**

Imagine two scenarios:
- Month 1: Ad Spend £5,000. Ad Revenue £15,000. Organic Revenue £5,000. **ACoS = 33%. TACoS = 25%.**
- Month 6: Ad Spend £5,000. Ad Revenue £15,000. Organic Revenue £25,000. **ACoS = 33%. TACoS = 12.5%.**

ACoS is identical. But TACoS tells you that advertising has driven organic growth — your ads are now funding a much larger revenue base. A **declining TACoS over time** is the clearest signal of a healthy Amazon business.

### 3.3 ROAS — Return on Ad Spend

**Formula:** `ROAS = Ad Revenue ÷ Ad Spend`

ROAS is simply ACoS inverted. A 25% ACoS = 4x ROAS. Amazon's Campaign Manager reports ROAS natively.

| ACoS | ROAS Equivalent |
|------|----------------|
| 10% | 10x |
| 20% | 5x |
| 25% | 4x |
| 33% | 3x |
| 50% | 2x |
| 100% | 1x (break-even on revenue, losing on margin) |

### 3.4 Industry Benchmarks (European & North American Markets)

> *These are industry estimates based on aggregated platform data from tools including Helium 10, Jungle Scout, and Perpetua — treat as directional, not definitive.*

| Metric | US/Canada Avg | UK Avg | Germany Avg | Notes |
|--------|--------------|--------|-------------|-------|
| Avg CPC (SP) | $0.75–1.20 | £0.55–0.90 | €0.65–1.00 | Varies wildly by category |
| Avg ACoS | 28–35% | 25–32% | 22–30% | Mature competitive categories |
| Avg CTR (SP) | 0.35–0.45% | 0.30–0.40% | 0.28–0.38% | Higher CTR = better listing quality |
| SB Video CTR | 0.60–1.20% | 0.55–1.00% | 0.50–0.90% | 2–3x standard SB |
| Conversion Rate | 10–15% | 8–13% | 9–14% | Prime vs. non-Prime affects this |

---

## Section 4: Campaign Strategy — The 4-Campaign Waterfall & Search Term Harvesting

### 4.1 The 4-Campaign Waterfall Structure

This is the single most important framework in Amazon PPC. Memorise it.

```
AUTO (Discovery) → BROAD (Expansion) → PHRASE (Scale) → EXACT (Dominate)
     ↓ harvest                ↓ harvest              ↓ harvest
  new terms              winning terms          top performers
```

| Campaign | Match Type | Budget % | Bid Level | Primary Goal |
|----------|-----------|----------|-----------|-------------|
| Auto | Auto | 10–15% | Low (£0.25–0.40) | Discover new search terms |
| Broad Manual | Broad | 20–25% | Medium (£0.50–0.70) | Test volume on harvested terms |
| Phrase Manual | Phrase | 25–30% | Medium-High (£0.70–0.90) | Scale proven converters |
| Exact Manual | Exact | 35–45% | High (£0.90–1.40) | Dominate top terms, control spend |

### 4.2 The Weekly Search Term Harvest Ritual

Step-by-step process (takes 30–45 minutes weekly):

1. **Download the Search Term Report** from Campaign Manager (Reports > Sponsored Products > Search term)
2. **Filter by minimum spend** (e.g., remove terms with <£5 spend — insufficient data)
3. **Sort by ACoS descending** — identify terms spending money but not converting
4. **Negatives:** Add high-spend, zero-conversion terms as exact negatives in the auto campaign
5. **Promotions:** Terms with ACoS < target and 3+ orders → add to broad campaign
6. **Promotions (tier 2):** Terms in broad with ACoS < target and 5+ orders → add to phrase campaign
7. **Promotions (tier 3):** Terms in phrase with ACoS < target and 8+ orders → add to exact campaign
8. **Bid adjustments:** Increase bids 10–15% on exact terms with ACoS well below target; decrease 10% on terms above target

### 4.3 Product Targeting vs. Keyword Targeting

Beyond keywords, Amazon allows you to target specific **ASINs (products)** or **categories**. This is called Product Targeting and is available in both Sponsored Products and Sponsored Brands.

**Use cases:**
- **Offensive targeting:** Target competitor product pages (their buyers are your buyers)
- **Defensive targeting:** Target your own product pages to prevent competitor ads appearing on your listings
- **Category targeting:** Target entire sub-categories for broad awareness

**Brand Defence campaigns** — running exact-match keyword campaigns on your own brand name, and product-targeting campaigns on your own ASINs — are not optional. Competitors will bid on your brand name. If you don't defend it, you pay for traffic that should be free.

---

## Section 5: Advanced Strategies — Dayparting, Bid Optimisation, and Amazon Attribution

### 5.1 Dayparting (Bid-by-Hour Rules)

Amazon Campaign Manager introduced **hourly bid multipliers** (rules-based bidding). This allows you to increase or decrease bids at specific hours or days — the Amazon equivalent of dayparting.

**Typical dayparting strategy:**
- Increase bids 20–30% during peak shopping hours (evenings 6pm–10pm, weekends)
- Decrease bids 30–50% in the early morning (2am–6am) when conversion rates drop
- Use **Campaign Manager's "Adjust bids by placement"** feature to increase bids for top-of-search placements (which convert at 2–3x rest-of-search rates)

### 5.2 Placement Bid Multipliers

Campaign Manager allows you to set **bid multipliers by placement**:

| Placement | Description | Typical Multiplier |
|-----------|-------------|-------------------|
| Top of search (first page) | Most visible, highest conversion | +50% to +100% |
| Rest of search | Lower on results page | 0% (baseline) |
| Product pages | Competitor and own PDPs | +20% to +50% |

Example: If your base bid is £0.80 and you set a 100% top-of-search multiplier, Amazon will bid up to £1.60 for top-of-search placements.

### 5.3 Amazon Attribution (Off-Amazon Traffic)

Amazon Attribution is a free measurement tool that lets you track the impact of **off-Amazon traffic** (Google Ads, Meta Ads, email, influencers) on Amazon sales. It works by generating unique tracking URLs that tie external clicks to Amazon purchase events.

**Why it matters:** A brand running Google Shopping ads or a UK influencer campaign pointing to Amazon can now measure exact ROAS from that external spend — previously a black box.

**European availability:** Amazon Attribution is available in the US, UK, France, Germany, Italy, Spain, Netherlands, and select other EU markets. It is NOT subject to GDPR consent requirements in the same way as third-party pixels because attribution occurs within Amazon's own environment.

**Key metrics tracked:**
- Clicks from off-Amazon source
- Detail page views
- Add to cart
- Purchases
- Revenue

### 5.4 Budget Management Best Practices

- **Never run out of budget before peak hours.** Review budget utilisation daily for the first 2 weeks of any campaign. If a campaign is hitting budget cap by 2pm, it's leaving money on the table.
- **Portfolio budgets:** Use Amazon's Portfolio feature to set a shared budget cap across multiple campaigns — prevents any single campaign from consuming all funds.
- **Bid+ / Dynamic Bids:** Amazon offers three bidding strategies:
  - *Fixed bids* — Amazon uses your exact bid, no adjustment
  - *Dynamic bids — down only* — Amazon reduces bids when conversion unlikely (recommended for beginners)
  - *Dynamic bids — up and down* — Amazon increases bids up to 100% for likely conversions (use with caution — can spike ACoS)

---

## Section 6: Reporting & Optimisation — Reading the Numbers Like a Pro

### 6.1 Key Amazon Advertising Reports

| Report | What It Shows | Frequency |
|--------|--------------|-----------|
| Search Term Report | Actual search queries triggering your ads | Weekly |
| Targeting Report | Performance by keyword/ASIN target | Weekly |
| Placement Report | Performance by ad placement (top-of-search, etc.) | Bi-weekly |
| Campaign Performance Report | High-level campaign metrics | Daily |
| Advertised Product Report | Performance by ASIN | Weekly |

### 6.2 The 9-Box Optimisation Matrix

Classify every keyword in your exact-match campaign:

| | High Impressions | Medium Impressions | Low Impressions |
|---|----------------|-------------------|----------------|
| **Low ACoS** | Increase bid aggressively | Increase bid moderately | Check listing relevancy |
| **Mid ACoS** | Hold bid | Hold or test +10% | Hold bid |
| **High ACoS** | Decrease bid or negative | Decrease bid | Pause or negative |

### 6.3 Common Reporting Traps

- **Attribution window:** Amazon's default attribution window is 14 days for clicks. A sale that occurs 13 days after a click is attributed to that click. This inflates short-term performance metrics.
- **Organic halo:** Ads drive organic sales that aren't captured in ACoS — another reason TACoS is the superior metric.
- **New-to-brand metrics:** Only available for Sponsored Brands. Shows what % of purchases were from customers who hadn't bought from your brand on Amazon in the last 12 months.

---

## ⚠️ Anti-Patterns to Avoid

1. **Running only one auto campaign and calling it "Amazon PPC."** Auto campaigns are for discovery, not for revenue generation at scale. They need to feed a structured manual campaign hierarchy.

2. **Setting it and forgetting it.** Amazon's auction is dynamic. Competitor bids shift. Seasonality changes conversion rates. Campaigns that are not optimised weekly will drift toward inefficiency.

3. **Not using negative keywords.** The most common and most expensive mistake in Amazon PPC. Irrelevant clicks are pure waste. Build your negative keyword list from Day 1.

4. **Optimising for ACoS alone.** A campaign with 8% ACoS that gets 5 clicks a month is not a success. Balance efficiency (ACoS) with volume (spend, orders, impressions). Track TACoS for the full picture.

5. **Bidding on branded terms without defensive campaigns.** If you rank #1 organically for your own brand name but aren't running an exact-match brand campaign, competitors are stealing that traffic — often with a CPC you could have owned for £0.10–0.20.

6. **Over-relying on broad match in manual campaigns.** Broad match in Amazon is genuinely very broad. Without granular negative keywords, broad campaigns bleed budget rapidly.

7. **Launching Sponsored Display before Sponsored Products are optimised.** SD is complementary, not foundational. Fix your SP ACoS and sales velocity first. Then layer on SD retargeting.

---

## 🎯 Key Formulas / Frameworks (Memorise These)

### Core Formulas

```
ACoS  = (Ad Spend ÷ Ad Revenue) × 100
TACoS = (Ad Spend ÷ Total Revenue) × 100
ROAS  = Ad Revenue ÷ Ad Spend
Break-Even ACoS = Gross Profit Margin %
Target ACoS     = Break-Even ACoS × (1 - desired profit buffer)
```

### Conversion Relationships

```
ACoS × ROAS = 1  (they are inverses)
25% ACoS = 4x ROAS
33% ACoS = 3x ROAS
50% ACoS = 2x ROAS
```

### The SPARK Mnemonic (Campaign Optimisation Checklist)

- **S** — Search term harvest (pull report, negate waste)
- **P** — Placement analysis (are top-of-search bids justified?)
- **A** — ACoS vs. target (per keyword, not just campaign average)
- **R** — ROAS trend (week-over-week, is efficiency improving?)
- **K** — Keywords to promote (which terms ready to move up the waterfall?)

### The Waterfall Promotion Rules (Minimum Thresholds)

| Move | Minimum Orders Required | ACoS Condition |
|------|------------------------|----------------|
| Auto → Broad | 1–2 orders | Any ACoS (just testing) |
| Broad → Phrase | 3–5 orders | ACoS ≤ break-even |
| Phrase → Exact | 8–10 orders | ACoS ≤ target |

### Amazon Ad Product Quick Reference

| Product | Targeting | Placement | Best For |
|---------|-----------|-----------|---------|
| Sponsored Products | Keywords + ASINs | Search + PDPs | Direct sales |
| Sponsored Brands | Keywords | Top of search banner | Brand awareness + NTB |
| Sponsored Display | Audiences + Products | Amazon + off-Amazon | Retargeting + awareness |
| Amazon DSP | Audiences (programmatic) | Amazon + third-party | Full-funnel, $10k+ budgets |

---

## ✅ Self-Check Before the Quiz

Before moving on, answer these five questions from memory:

1. What is the formula for TACoS, and why is it more useful than ACoS for assessing business health?
2. Describe the 4-Campaign Waterfall Structure. What is the role of each tier?
3. What are the three keyword match types on Amazon, and how does broad match differ from phrase match?
4. What is the difference between Sponsored Display and Amazon DSP? Name one use case for each.
5. What is break-even ACoS, and how do you calculate your target ACoS from it?

If you can answer all five clearly and concisely, you are ready for the quiz.

➡️ Ready? Take the [Quiz.md](./Quiz.md)
