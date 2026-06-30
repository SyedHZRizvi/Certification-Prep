# Module 02: Google Search Ads Mastery 🔍

> **Why this module matters:** Google Search Ads are the closest thing to a money-printing machine that exists in digital marketing — but only if you understand the machinery. The difference between a £3 CPA and a £1.20 CPA is not budget; it is structure, intent-matching, and Quality Score. This module gives you that edge.

> **Prerequisites:** Module 01 (Digital Marketing Fundamentals) — you should know what a conversion is, what a landing page does, and have a mental model of the marketing funnel (TOFU/MOFU/BOFU). You do NOT need an active Google Ads account to learn this material, but having one in practice mode is strongly recommended.

---

## ☕ A Story: The Florist Who Fired Her Own Keywords

In January 2023, Sophie Chen was three months into running Google Ads for BloomBox London — a premium online florist shipping across England and Wales. She had an £8,000/month budget, a beautiful website, and a Google Ads account that was technically spending every penny. The problem? Her cost-per-acquisition had ballooned to £3.04. For bouquets averaging £42, that meant she was giving away 7% of every order just to acquire the customer — before flowers, delivery, or staff. Her accountant was not amused.

Sophie did what most beginners do when ads underperform: she added more keywords. "Birthday flowers." "Anniversary flowers." "Flowers next day delivery." "Cheap flowers UK." "Luxury flowers London." "Send flowers to mum." All dumped into a single ad group called "General Flowers." All triggering the same three ads. All pointing to the same homepage.

Here is what Sophie did not understand: a person searching "cheap flowers UK" and a person searching "luxury flowers London" are not the same person. They have different intent, different price sensitivity, and different tolerance for a £42 price point. Running the same ad to both is like a Michelin-star restaurant running a buy-one-get-one-free promotion — technically possible, but brand-destroying.

Sophie's Google Ads rep (an actual human, which costs Google nothing because the advice usually increases spend) suggested she increase her bids. Sophie, sensibly, did not do that. Instead, she attended a Google Skillshop webinar on campaign structure.

What she learned changed everything.

She rebuilt her account from scratch over a single weekend. Instead of one ad group called "General Flowers," she created five:

1. **Intent: Gifting (Occasion-Based)** — "birthday flowers delivery," "anniversary bouquet next day," "valentines roses send" → Ads emphasizing gift-wrapping and personal messages
2. **Intent: Sympathy/Condolence** — "sympathy flowers," "funeral flowers delivery," "flowers for bereavement" → Ads with softer language, muted color imagery
3. **Intent: Subscription** — "weekly flower delivery subscription," "monthly flower box UK" → Ads emphasizing saving 15% vs. one-off orders
4. **Intent: Last-Minute** — "flowers today London," "same day flower delivery," "flowers delivered in 2 hours" → Ads screaming "Order before 2pm — delivered today"
5. **Intent: Premium/Luxury** — "luxury bouquet London," "designer flowers UK," "best florist online" → Ads using words like "curated," "artisanal," "hand-tied"

She added negative keywords to each group so they would not bleed into each other. "Cheap" went on the negative list for the luxury group. "Funeral" went negative on the gifting group.

She set up separate ad extensions per group. The last-minute group got a countdown clock extension and a callout saying "Order by 2pm." The luxury group got a price extension showing their £65 signature bouquet.

She also switched from broad match to a combination of exact match and phrase match — stopping Google from matching "flowers" to searches like "flower arranging classes near me" (a real search term she found in her search term report, which had been burning £140/month).

Ninety days later:

- CPA: **£1.20** (down from £3.04 — a 60.5% reduction)
- ROAS: **18.4x** (up from 7.1x)
- Click-through rate: **8.2%** (industry average for retail: ~2.5%)
- Quality Score average: **8.2/10** (up from 4.1/10)

The total spend did not decrease. The intelligence behind the spend did. Sophie had not found a magic button. She had learned to speak the language of buyer intent — and Google had rewarded her with lower costs, better placement, and more sales.

This module teaches you exactly what Sophie learned.

---

## Section 1: The Google Ads Account Architecture — Your Four-Level Map

Think of a Google Ads account like a well-organized filing cabinet. If you shove everything into one drawer labeled "My Ads," you will never find anything — and Google's algorithm will not know what to do with it either. The four-level hierarchy is the most important structural concept in this entire course.

### The Four Levels

| Level | What It Controls | Analogy |
|-------|-----------------|---------|
| **Account** | Billing, user access, conversion tracking, linked Google Analytics | The filing cabinet itself |
| **Campaign** | Budget, network (Search/Display/Shopping), location targeting, language, bidding strategy, ad schedule | A drawer in the cabinet |
| **Ad Group** | A set of related keywords + their matching ads, max CPC bid (if manual) | A folder in the drawer |
| **Keyword / Ad** | The specific search terms you bid on; the ad copy shown for those terms | The documents in the folder |

### Why the Structure Matters

The cardinal rule of Google Ads structure: **one theme per ad group**. When a user types a search query, Google looks for the most relevant ad group in your campaign. If your ad group has keywords about "red roses," "sympathy flowers," AND "cheap bouquets," the ad you show is trying to serve three masters simultaneously — and it serves none well.

**The SKAG debate:** For years, "Single Keyword Ad Groups" (SKAGs) were the gold standard — one keyword per ad group, maximum relevance. Since Google's 2021 match type updates (which made broad match smarter) and the shift to Responsive Search Ads, the modern best practice has evolved toward **Single Theme Ad Groups (STAGs)**: 3–7 tightly related keywords that share a single user intent, a single landing page, and a single set of ads.

> **Exam Power Phrase:** "Campaign budget is shared across all ad groups within that campaign. If you want to give different budgets to different product lines, they must be separate campaigns."

### Campaign Settings Checklist

| Setting | Rookie Mistake | Best Practice |
|---------|----------------|---------------|
| Network | Leave "Display Network" checked | UNCHECK it — Search and Display are different products |
| Location | Target "United Kingdom" | Target specific postcode areas OR exclude regions you cannot ship to |
| Language | Leave at English only | Include the user's language, not just the location language |
| Bidding | Default to Maximize Clicks | Start with Manual CPC until you have 30+ conversions/month |
| Ad Rotation | "Optimize" (Google default) | Fine for RSAs; problematic if A/B testing ETAs |
| Start/End Date | No end date set | Set an end date for promotional campaigns |

---

## Section 2: Keyword Match Types — The Targeting Dial

This is the single most misunderstood concept in Google Ads, and getting it wrong is the fastest way to burn budget. Think of match types as a dial that goes from "show my ad to everyone vaguely related" to "show my ad ONLY for this exact phrase, nothing else."

### The Three Match Types (Post-2021)

> Note: Google retired Broad Match Modifier (BMM) in 2021, absorbing its behavior into Phrase Match.

| Match Type | Syntax | What It Matches | Example Keyword | Would Match | Would NOT Match |
|------------|--------|-----------------|-----------------|-------------|-----------------|
| **Broad Match** | `flowers` | Any query Google thinks is related — synonyms, related topics, misspellings, some out-of-field matches | `flowers` | "flower delivery," "bouquets," "roses," "plants for gift," "florist near me" | Almost anything goes |
| **Phrase Match** | `"flower delivery"` | Queries containing this phrase (or close variants) in this order, with other words before or after | `"flower delivery"` | "next day flower delivery," "flower delivery London," "flower delivery same day" | "delivery of flowers," "send flowers" (word order differs) |
| **Exact Match** | `[flower delivery london]` | This exact query (or close variants) with no additional words | `[flower delivery london]` | "flower delivery london," "flowers delivered london," "london flower delivery" | "cheap flower delivery london," "flower delivery near london" |

### The Intent-Precision Tradeoff

```
Broad Match      ←————————————————————→      Exact Match
More reach                                  More precision
More irrelevant                             Less irrelevant
clicks                                      clicks
Cheaper CPC                                 Higher CPC
(usually)                                   (usually)
```

**When to use each:**

- **Exact Match:** Your proven, high-converting keywords. Know them, protect them, bid aggressively.
- **Phrase Match:** Discovery phase. You know the core intent but want to capture variations.
- **Broad Match:** Only use with Smart Bidding (tCPA/tROAS) and a proper negative keyword list. Google's algorithm can find genuine new audiences — but only if it has conversion data to learn from.

### Negative Keywords — The Unsung Hero

Every keyword you bid on needs a negative keyword list to protect it. Common negative categories:

| Category | Example Negative Keywords |
|----------|--------------------------|
| **Wrong intent** | free, DIY, how to, tutorial, recipe |
| **Wrong audience** | jobs, careers, wholesale, bulk |
| **Wrong geography** | [If UK-only]: Australia, Canada, "near me" if you do not do local |
| **Competitor defence** | (Competitor brand names — expensive to bid on unless intentional) |
| **Already have it** | If you sell subscriptions, add "free trial" as negative unless you offer one |

> **The Search Term Report is your treasure map.** Under Campaigns > Insights & Reports > Search Terms, you will find every real query that triggered your ads. Review this weekly. Every irrelevant query you find is money leaving your account. Add it as a negative.

**North American note:** US advertisers should add UK spelling variants as negatives if running US-only campaigns (e.g., "colour," "favourite," "jewellery") and vice versa. Broad match will cross borders.

---

## Section 3: Quality Score — The Number That Controls Your Costs

Quality Score is Google's 1-10 rating of the relevance and quality of your keywords, ads, and landing pages. It is the most important number you cannot directly set, only earn.

### Why Quality Score Is Worth Obsessing Over

Quality Score determines your **Ad Rank** — and Ad Rank determines both your ad position AND how much you actually pay per click. Higher Quality Score = better position at lower cost. This is not a small effect:

| Quality Score | Relative CPC vs. QS 5/10 |
|--------------|--------------------------|
| 10/10 | ~50% lower CPC |
| 8/10 | ~25% lower CPC |
| 6/10 | ~10% lower CPC |
| 5/10 | Baseline |
| 4/10 | ~25% higher CPC |
| 2/10 | ~100% higher CPC |

*Source: WordStream / industry estimates, widely cited as directional benchmarks*

### The Three Components of Quality Score

Quality Score = f(Expected CTR, Ad Relevance, Landing Page Experience)

| Component | Weight (approx.) | What Improves It |
|-----------|-----------------|------------------|
| **Expected CTR** | ~55% | Better ad copy, stronger calls to action, appropriate match types |
| **Ad Relevance** | ~22% | Keyword appears in headline, description line matches search intent |
| **Landing Page Experience** | ~22% | Page speed, mobile-friendliness, keyword on page, low bounce rate |

Each component is rated: Above Average / Average / Below Average. You can see these ratings in Google Ads under the Keywords tab (add the columns).

### The Quality Score Virtuous Cycle

```
Better keywords → Higher QS → Lower CPC → More budget efficiency
     ↑                                              ↓
     └──────── More data → Better bidding ←─────────┘
```

### Common Quality Score Traps

**Trap 1:** Putting highly competitive, expensive keywords into the same ad group as niche keywords. The niche keywords will drag down the group's average Quality Score.

**Trap 2:** Sending all ad groups to the homepage. The homepage rarely matches the specific intent of a keyword. A "same day flower delivery" keyword deserves a landing page that screams "Order before 2pm — delivered today," not a homepage carousel about brand values.

**Trap 3:** Ignoring landing page speed. Google measures page load time. A 5-second load time in mobile is a Quality Score killer. Use Google PageSpeed Insights (free) to diagnose. Particularly relevant in Germany and the Netherlands, where users have high expectations for website performance.

---

## Section 4: The Ad Rank Formula — Why Position is Not Purely About Money

Here is the single most important formula in this module:

```
Ad Rank = Max Bid × Quality Score × Expected Impact of Extensions
```

In practice, it is more nuanced — Google uses a "threshold" system where you must exceed the Ad Rank of the advertiser below you — but this formula captures the essential dynamic.

### What This Means Practically

A competitor bidding £5.00 with a Quality Score of 4/10 has an Ad Rank of 20.
You bidding £3.00 with a Quality Score of 8/10 have an Ad Rank of 24.

**You outrank them and pay less.** This is not theoretical — it is the design of the auction. Google makes more money from relevant ads because users click them more. Everybody wins (except the lazy advertiser paying £5 for QS 4).

### Actual CPC Formula

You do not pay your Max Bid. You pay:

```
Actual CPC = (Ad Rank of advertiser below you ÷ Your Quality Score) + £0.01
```

This means your actual spend is determined by your competitors, not by your max bid — another reason why Quality Score matters enormously.

---

## Section 5: Bidding Strategies — Manual vs. Smart

Choosing the wrong bidding strategy at the wrong stage is like trying to use cruise control before you have left the driveway.

### Bidding Strategy Decision Tree

```
Do you have 30+ conversions/month in this campaign?
├── NO  → Use Manual CPC or Maximize Clicks (with budget cap)
│         Build conversion history first
└── YES → How do you measure success?
          ├── Cost per lead/sale target → tCPA (Target CPA)
          ├── Revenue/profit target → tROAS (Target ROAS)
          ├── Maximize volume within budget → Maximize Conversions
          └── Maximize value within budget → Maximize Conversion Value
```

### Smart Bidding Strategies Compared

| Strategy | What Google Optimizes For | Best For | Watch Out For |
|----------|--------------------------|----------|---------------|
| **Target CPA (tCPA)** | Get as many conversions as possible at your target cost-per-acquisition | Lead gen, subscription sign-ups | Set target too low = Google stops spending; set too high = waste |
| **Target ROAS (tROAS)** | Maximize conversion value at your target return-on-ad-spend | E-commerce with variable order values | Needs accurate revenue values in conversion tracking |
| **Maximize Conversions** | Spend your budget to get the most conversions | Campaigns with clear conversion goals, want to spend full budget | Can spike CPAs if budget is not constrained |
| **Maximize Conversion Value** | Spend budget to maximize total revenue | E-commerce, variable product prices | Same as above — watch the ROAS outcome |
| **Enhanced CPC (eCPC)** | Manual bids + Google adjusts up/down by up to 30% | Transitioning from manual to smart | Semi-deprecated; less used post-2023 |
| **Manual CPC** | You control every bid | Learning phase, specific keyword testing | Labor-intensive; misses micro-moment signals |

### tCPA vs. tROAS: When to Use Which

**tCPA:** You care about the NUMBER of conversions (leads, sign-ups, purchases where all conversions have equal value). Example: A law firm wants enquiry forms at under £50 each.

**tROAS:** You care about the VALUE of conversions (orders of varying sizes). Example: BloomBox wants £15 of revenue for every £1 spent on ads (150% ROAS = breaking even on ads; 1,500% = very profitable).

**tROAS in Europe vs. North America:** European e-commerce benchmarks suggest a healthy tROAS target of 400-600% for established brands. US e-commerce tends to run at 200-400% for growth-phase brands. The difference reflects higher average order values and lower click costs in some European markets. These are industry estimates, not guarantees.

---

## Section 6: Responsive Search Ads — The Swiss Army Knife of Ad Copy

Google retired Expanded Text Ads (ETAs) for new creation in June 2022. Responsive Search Ads (RSAs) are now the only search ad format. Understanding how they work is essential.

### How RSAs Work

You provide:
- Up to **15 headlines** (max 30 characters each)
- Up to **4 descriptions** (max 90 characters each)

Google tests combinations and learns which 3 headlines + 2 descriptions perform best for each query and each user.

### RSA Best Practices

| Do | Why |
|----|-----|
| Include your primary keyword in at least 1 headline | Improves Ad Relevance score |
| Pin Headline 1 to your brand/product name | Ensures brand is always shown |
| Make each headline independently meaningful | Google may show any 3 at once |
| Include a CTA in at least 1 description | "Order by 2pm for same-day delivery" |
| Write headlines at different "angles" | Price, urgency, feature, benefit, social proof |
| Aim for "Excellent" ad strength | Google's indicator of headline/description diversity |

### What NOT to Do with RSAs

Do not write all 15 headlines saying essentially the same thing ("Buy Flowers Online" / "Shop Flowers Online" / "Order Flowers Online"). Google will identify the redundancy and rate your ad strength "Poor." You need conceptual diversity — different messages, not synonym-spinning.

**Exam Power Phrase:** "RSAs are not 'set and forget.' Use asset performance labels (Best, Good, Low) to identify and replace underperforming headlines after 30 days of data."

---

## Section 7: Ad Extensions (Now Called "Assets") — Free Real Estate

Ad extensions (rebranded "Assets" by Google in 2022) expand your ad with additional information. They are free to add and almost always improve performance. Google may or may not show them depending on Ad Rank and auction signals.

### Core Asset Types for Search

| Asset Type | What It Does | Best Use Case |
|------------|-------------|---------------|
| **Sitelinks** | Add up to 4 extra links below ad | Drive to specific pages: "Same Day Delivery," "Subscription Boxes," "Sympathy Flowers," "About Us" |
| **Callouts** | Short non-clickable phrases (max 25 chars) | "Free UK Delivery over £40," "Award-Winning Florist," "Letterbox Flowers" |
| **Structured Snippets** | List values under a header | Header: "Occasions" — Values: Birthdays, Anniversaries, Weddings, Sympathy |
| **Call Asset** | Phone number in ad | Lead gen, local businesses; shows on mobile with tap-to-call |
| **Location Asset** | Shows address | Retail with physical stores; links to Google Maps |
| **Price Asset** | Show specific products/services with prices | E-commerce; effective for premium product positioning |
| **Image Asset** | Visual alongside ad (search partner sites) | Brand differentiation; newer feature |
| **Lead Form Asset** | Capture leads without leaving Google | B2B lead gen; newsletter sign-ups |

> **Europe-Specific Note:** Call assets and location assets are particularly important in Germany and France, where consumers show higher intent to verify business legitimacy before purchasing. German users, in particular, have strong distrust of unfamiliar online brands — showing a physical address and phone number in your ads materially improves CTR in the German market (industry observation, not verified stat).

> **GDPR Note:** Lead form assets collect personal data. Ensure your privacy policy URL is included in the form configuration and that you have a lawful basis for processing. In the EU/EEA, explicit consent (GDPR Article 6(1)(a)) is required unless you can demonstrate legitimate interest — which is harder to argue for marketing data. When in doubt, use consent.

---

## Section 8: Performance Max — The New Kid on the Block

Performance Max (PMax) campaigns were introduced in 2021 and became the default recommendation for most advertisers by 2023. You need to understand what they are and — critically — what they are NOT.

### What PMax Does

Performance Max is a single campaign type that runs across ALL of Google's networks simultaneously:
- Search
- Display
- YouTube
- Gmail
- Discover
- Maps

You provide "asset groups" (images, videos, headlines, descriptions, logos) and Google's AI decides where, when, and to whom to show ads to maximize conversions.

### PMax vs. Standard Search: When to Use Which

| Criterion | Use PMax | Use Standard Search |
|-----------|----------|---------------------|
| Conversion tracking | Must be rock-solid | Recommended but can learn manually |
| Creative assets available | Yes — you have images/video | No — text-only brand |
| Control needed | Low control is acceptable | High control required |
| Brand keyword protection | Must add brand terms as negative keywords in Shared Library | Not applicable |
| Transparency | Lower (less data visibility) | Higher (full search term report) |
| New campaigns | Not recommended as first campaign | Better starting point |

**The honest truth about PMax:** It is powerful but opaque. The search term report is limited. You cannot see which network your budget is going to. Many experienced practitioners keep PMax budget-capped and run standard Search campaigns in parallel to maintain control. For the Google Skillshop exam, you need to know PMax exists and its purpose — but for real-world campaigns, approach with caution until you have strong conversion data.

---

## Section 9: Conversion Tracking — If You Do Not Measure It, You Cannot Optimize It

Without conversion tracking, Smart Bidding is blind. Without Smart Bidding, you are manually managing bids in 2024 the way people ran PPC campaigns in 2006.

### Setting Up Google Ads Conversion Tracking

**Method 1: Google Ads Tag (gtag.js)**
Install the tag on your website. Create a conversion action in Google Ads (e.g., "Purchase," "Lead Form Submit"). Tag fires when the event occurs.

**Method 2: Import from Google Analytics 4**
Link your Google Ads account to GA4. Import GA4 conversion events. Recommended for most businesses — one source of truth.

**Method 3: Offline Conversion Import**
For B2B or complex sales cycles. You import conversion data from your CRM (a lead becomes a sale 30 days later). Google then knows which keywords and ads drove real revenue, not just form fills.

### Conversion Tracking Checklist

- [ ] At least one primary conversion action set (e.g., Purchase, Enquiry)
- [ ] Conversion value assigned (either fixed or dynamic via revenue variable)
- [ ] Attribution model reviewed (Data-Driven Attribution is Google's default and recommended for 2024+)
- [ ] Conversion window set appropriately (30 days for most e-commerce; 90 days for high-consideration purchases)
- [ ] Tag verified as firing correctly (use Tag Assistant Chrome extension)

> **GDPR/Consent Note (Critical for UK, EU, EEA):** Google's EU User Consent Policy requires that you obtain valid consent from EU/EEA users before deploying tracking tags. Implement a Consent Management Platform (CMP) — Google's own Consent Mode v2 is the current standard. Without proper consent mode implementation, your conversion data will be incomplete and your campaign optimization will suffer. This is not optional compliance box-ticking; it directly impacts ad performance.

---

## ⚠️ Anti-Patterns to Avoid

1. **The "Homepage Sinkhole":** Sending all ads to the homepage. Each ad group should have a landing page that directly matches the keyword's intent. A mismatch tanks Quality Score and wastes every click.

2. **"Set It and Forget It" Broad Match:** Running broad match keywords without a negative keyword list is like leaving your wallet open at a bus station. Review your search term report weekly.

3. **Too Many Keywords Per Ad Group:** Cramming 50 keywords into one ad group because "more is better." More keywords = less relevance per keyword = lower Quality Score across the board.

4. **Bidding on Your Own Brand Without Thought:** Your brand terms are cheap and high Quality Score — always bid on them to own the top position and prevent competitors from stealing clicks on your brand name. (Exception: small budgets where brand-keyword traffic is converting organically anyway.)

5. **Ignoring Search Partners:** The "Search Partners" network includes sites like Amazon, YouTube, and thousands of third-party search engines. It can be a source of cheap conversions OR a budget drain. Always segment the data and exclude if CPAs are poor.

6. **Using Exact Match for All Discovery:** If your entire campaign is exact match, you will never discover new converting search terms. Use phrase match in a separate "discovery" ad group to expand your keyword list systematically.

7. **Setting tCPA/tROAS Targets Too Aggressively Too Soon:** Smart bidding needs data. Setting a £0.50 tCPA target on a brand new campaign with zero conversion history is asking Google to fly blind. Start at 3x your current CPA and lower gradually as data accumulates.

---

## 🎯 Key Formulas / Frameworks (Memorize These)

### Ad Rank Formula
```
Ad Rank = Max Bid × Quality Score × Extension Impact
```

### Actual CPC Formula
```
Actual CPC = (Competitor Ad Rank below you ÷ Your Quality Score) + £0.01
```

### Quality Score Components
```
QS = f(Expected CTR ~55% + Ad Relevance ~22% + Landing Page Experience ~22%)
```

### ROAS Formula
```
ROAS = Revenue from Ads ÷ Ad Spend
(e.g., £18,000 revenue ÷ £1,000 spend = 18x or 1,800% ROAS)
```

### CPA Formula
```
CPA = Total Ad Spend ÷ Number of Conversions
(e.g., £1,200 spend ÷ 1,000 conversions = £1.20 CPA)
```

### The STAG Framework (Single Theme Ad Group)
```
1 Theme → 3-7 Tightly Related Keywords → 1-2 RSAs → 1 Landing Page
```

### Match Type Mnemonic: "BPE — Bigger to Smaller"
- **B**road = Broadest reach, least control
- **P**hrase = Protected phrase order
- **E**xact = Exact (or very close) match only

### The Quality Score Virtuous Cycle
```
Tighter Ad Groups → Higher Ad Relevance → Higher QS
→ Lower CPCs → More Budget Efficiency → More Data
→ Smarter Bidding → More Conversions → Even Tighter Optimization
```

---

## ✅ Self-Check Before the Quiz

Answer these from memory before proceeding:

1. **Structure:** Name the four levels of a Google Ads account from top to bottom. What does each level control?

2. **Match Types:** What is the key difference between Phrase Match and Exact Match? Write an example keyword in each syntax.

3. **Quality Score:** What are the three components of Quality Score? Which carries the most weight?

4. **Ad Rank:** If your competitor has a Max Bid of £6 and a QS of 3, and you have a Max Bid of £4 and a QS of 8, who wins the auction and why?

5. **Bidding Strategy:** Why should you NOT use tCPA Smart Bidding on a brand new campaign with no conversion history?

---

➡️ Ready? Take the [Quiz.md](./Quiz.md)
