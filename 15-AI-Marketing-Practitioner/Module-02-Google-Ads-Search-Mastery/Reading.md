# Module 2: Google Ads Search Mastery 🔍

> **Why this module matters:** Search Ads are the highest-intent traffic on the internet. They're also the easiest channel to lose $5,000 on in two weeks. By the end of this module, you can build, launch, and optimize a search campaign that doesn't bleed money.

---

## 🎯 A Real Story: How Wayfair Cracked the Long-Tail in 2017

In 2017, Wayfair's paid search team had a problem. They had 14 million SKUs. They were paying for "couch", and getting clicks that cost $4.20 and converted at 0.3%. Meanwhile their CFO was breathing down their neck on CAC.

Their analyst Niraj Bhargava (publicly cited in [Search Engine Land's 2018 case study](https://searchengineland.com/)) made a bet: what if they stopped bidding on the head terms entirely and went deep on long-tail SKU-level queries? "Mid-century modern sleeper sofa with chaise under $800", that query has 90 monthly searches. CPC of $0.45. Conversion rate of 11.2%.

They restructured the account into **single-keyword ad groups (SKAGs)** for the top 5,000 long-tail queries. CAC dropped 38% in 90 days. Revenue from paid search went up 22%.

The lesson isn't "use SKAGs", Google's Smart Bidding now makes SKAGs less effective. The lesson is: **Google Ads rewards specificity at the query level, not the keyword level.** Every campaign you build for the rest of your life should start with the question: "What's the EXACT thing my customer is typing in at the moment of intent?"

This module teaches you to answer that, then build the campaign around it.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Writing a campaign brief, covered in [Module 1](../Module-01-Campaign-Strategy-Brief-Writing/Reading.md) of this course
> - KPI hierarchy by funnel stage (TOFU/MOFU/BOFU), also Module 1
> - Search-intent and keyword fundamentals, covered in [14-AI-Marketing-Foundations Module 5](../../14-AI-Marketing-Foundations/Module-05-Social-Media-AI-Tools/Reading.md)
> If any of these are shaky, pause and review before continuing.

---

## 🏗️ Google Ads Account Structure, The Anatomy

Before you build anything, get the hierarchy straight. The exam tests this constantly.

```
Manager Account (MCC, Optional)
└── Account
    └── Campaign (budget + bidding + geo + schedule live here)
        └── Ad Group (theme + keywords + audiences)
            └── Keyword
            └── Ad (RSA, Responsive Search Ad)
            └── Extensions (Sitelinks, Callouts, Snippets, etc.)
```

**MEMORIZE the rules:**
- **Budget** is set at the campaign level (NEVER ad group)
- **Bidding strategy** is set at the campaign level
- **Geo + schedule** are set at the campaign level
- **Keywords** sit in ad groups
- **Ads** sit in ad groups
- **Audiences** can be added at campaign OR ad group level (more on this below)

🎯 **Trap on the exam:** "Where do you set the bid for a specific keyword?" If you're using a smart bidding strategy (tCPA, tROAS, Max Conversions), there is NO per-keyword bid, Google decides. Only Manual CPC lets you set keyword-level bids.

---

## 🎯 Keyword Match Types in 2026 (Critical Updates)

Google changed match types significantly between 2021 and 2025. Here's the current state.

| Match Type | Syntax | Matches | 2026 Behavior |
|------------|--------|---------|---------------|
| **Exact match** `[ ]` | `[running shoes]` | Variants with same intent | Includes close variants, synonyms, paraphrases, reordered words |
| **Phrase match** `" "` | `"running shoes"` | Searches that include the meaning | Includes variants where meaning matches, in any order |
| **Broad match** | `running shoes` | Any related search | Now uses Smart Bidding signals heavily; AI-driven |
| **Broad match modifier (BMM)** `+running +shoes` | `+running +shoes` | RETIRED, folded into phrase match in 2021 | DO NOT USE on the exam (will be a trap answer) |

🚨 **MEMORIZE this exam trap:** Broad Match Modifier was retired in 2021. If an answer choice references "BMM" or `+keyword +keyword`, it's wrong.

### The 2026 Match Type Decision Tree

```
START
  │
  ├─ Do you have a clear conversion goal + a smart bidding strategy + > 30 conversions/month?
  │     └─ YES → Use BROAD MATCH with an audience signal. Trust the AI.
  │     └─ NO  → Continue.
  │
  ├─ Are you in a B2B or niche where exact intent matters?
  │     └─ YES → Use EXACT match + tight negatives.
  │     └─ NO  → PHRASE match is the safe middle ground.
```

**The 2026 reality**: Google is aggressively pushing broad match because Smart Bidding works best with broad input. The correct answer on the exam is almost always: *"Broad match WITH an audience signal AND tCPA/tROAS bidding"*, never broad match alone.

---

## 💰 Bidding Strategies, When to Use Each

This is the single most-tested topic on the Google Ads Search Cert. Get the table below into your bones.

| Strategy | What it does | When to use | When NOT to use |
|----------|-------------|-------------|-----------------|
| **Manual CPC** | You set the max CPC per keyword | Brand-new account, want full control, < 30 conv/mo | Once you have conversion data; you'll underperform Smart Bidding |
| **Maximize Clicks** | Get the most clicks within budget | Driving traffic with no clear conversion goal | If you have a CPA target |
| **Maximize Conversions** | Get the most conversions within budget | You have conversion tracking + want to scale | Without conversion tracking |
| **tCPA (Target CPA)** | Hit a target cost per conversion | You know your CPA target + have 30+ conversions/month | < 30 conv/mo (algorithm starves) |
| **tROAS (Target ROAS)** | Hit a target return on ad spend | Ecommerce with revenue values + 50+ conversions/month | If you can't pass dynamic conversion values |
| **Maximize Conversion Value** | Maximize total conversion value (no target) | Ecom that wants to scale revenue, no fixed ROAS target | If protecting margin matters |
| **Target Impression Share** | Show on top of page X% of the time | Brand defense, competitor terms | Performance campaigns |

🎯 **The 30-conversion rule:** Google's Smart Bidding strategies (tCPA, tROAS) need a minimum of **30 conversions in the last 30 days** to work well. Less than that and the algorithm doesn't have enough signal, it'll spend wildly. This is a constant exam question.

🚨 **Trap on the exam:** "A new account with 5 conversions/month wants to use tCPA." → WRONG. Use Max Conversions until you cross the 30-conversion threshold.

---

## 🤖 What Smart Bidding Actually Does (Under the Hood)

Smart Bidding sounds magical. Here's what it's really doing, useful to know for exam questions and for diagnosing why a campaign is misbehaving.

At every auction (every time someone searches), Google's model evaluates **billions of signals** in milliseconds:

| Signal category | Examples |
|-----------------|----------|
| **User signals** | Device, location, language, browser, time of day, day of week |
| **Audience signals** | In-market segments, affinity segments, customer match, remarketing lists |
| **Context signals** | Search query, related queries in session, prior page views |
| **Historical signals** | Past conversion rate for this segment, recent campaign performance |
| **Intent signals** | Query similarity to converting queries, intent strength score |

It produces a **bid prediction**, the bid most likely to win an auction that ALSO meets your tCPA / tROAS target. Then it bids that amount in that specific auction.

⚠️ **Common mistake:** Marketers think Smart Bidding "decides where to show ads." It doesn't, it decides **how much to bid** when an ad COULD show. Showing or not is still governed by your keyword match, audience targeting, and ad relevance.

🧠 **MEMORIZE the 3 prerequisites for Smart Bidding success:**
1. Working conversion tracking (no broken pixels)
2. 30+ conversions in the last 30 days (50+ for tROAS with value)
3. Stable conversion definition (no changing what counts as a conversion mid-campaign)

---

## ✍️ Responsive Search Ads (RSAs), The Only Ad Type That Matters

In 2022, Google retired Expanded Text Ads. RSAs are now the ONLY search ad type. Here's the spec.

| Element | Max characters | Max count | Required |
|---------|----------------|-----------|----------|
| Headlines | 30 each | 15 | Yes (3 minimum) |
| Descriptions | 90 each | 4 | Yes (2 minimum) |
| Final URL |, | 1 per ad | Yes |
| Display Path | 15 each | 2 fields | Optional |

### How RSAs Work

You provide up to 15 headlines and 4 descriptions. Google's machine learning mixes and matches them in real time, picking the 2–3 headlines + 1–2 descriptions most likely to convert for each individual search. You can **pin** specific assets to specific positions if needed (for legal disclaimers, brand mentions, etc.), but Google warns this reduces performance.

### The "Ad Strength" Score

Google rates each RSA from **Poor → Average → Good → Excellent**. Excellent ads get a 9% higher conversion rate on average (per Google's internal data, cited at Google Marketing Live 2024). Hit Excellent by:

- Filling all 15 headline slots
- Filling all 4 description slots
- Varying themes (mix benefit, feature, social proof, urgency, brand)
- Including at least 3 keywords in headlines
- Avoiding repetition

### RSA Writing Framework (Use This)

```
Headlines (15 slots):
  Slots 1-3:  Match search intent ("Buy Mid-Century Sleeper Sofa")
  Slots 4-6:  Unique value prop ("Free Delivery + 30-Day Returns")
  Slots 7-9:  Social proof ("Rated 4.8 by 12,000+ Buyers")
  Slots 10-12: Urgency / offer ("Spring Sale, 20% Off Today")
  Slots 13-15: Brand or differentiator ("Made in Vermont · 100-Yr Warranty")

Descriptions (4 slots):
  Slot 1: Lead benefit + call to action
  Slot 2: Social proof + offer
  Slot 3: Brand story + trust signal
  Slot 4: Urgency + secondary CTA
```

⚠️ **Common mistake:** Writing 15 nearly-identical headlines ("Best Running Shoes 2026", "Top Running Shoes 2026", "Running Shoes for 2026"). Google's algorithm cannot test variation it doesn't have. Make each headline genuinely different.

---

## 🚀 Performance Max for Ecommerce (Brief, Deep Dive in Module 3)

Performance Max (PMax) is Google's all-channels-in-one campaign. It runs across Search, Display, YouTube, Discover, Gmail, and Maps, simultaneously. For ecommerce with a Merchant Center feed, PMax is often the highest-ROI campaign type.

**Quick rule for Module 2 purposes:**
- If you have a product feed + GA4 conversion tracking + 50+ purchases/month → run BOTH a Search campaign AND a PMax campaign with brand exclusions on PMax.
- If you're lead-gen or service-based without a feed → stick with Search until you have data, then test PMax.

Module 3 covers PMax architecture in full.

---

## 🚫 Negative Keywords, The Discipline That Saves Budgets

If there's ONE habit that separates pros from amateurs in Google Ads, it's negative keyword discipline. Here's the protocol.

### The Weekly Negative Keyword Routine (15 min, every Monday)

1. Open the campaign → **Search Terms report** (NOT keywords, search terms = actual queries people typed)
2. Sort by **Cost descending**
3. Look at the top 20 spending queries
4. For each: ask "Was this a valid query for our offer?"
5. If NO → add it to a **shared negative keyword list** (so it applies across campaigns)
6. If YES but converting poorly → consider as a new ad group with tighter ad copy

### The 3 Negative Keyword Levels

| Level | When to use | Example |
|-------|-------------|---------|
| **Ad group level** | Exclude from one specific ad group only | Exclude "free" from "Premium Plan" ad group |
| **Campaign level** | Exclude from one campaign | Exclude "jobs" from a product campaign |
| **Account-wide / Shared list** | Exclude from many campaigns at once | "free", "torrent", "download", competitor names |

### Universal Negative Keyword Starter List

Apply this to almost every new campaign. (You'll find more relevant ones over time.)

```
free          torrent       cracked       pirate
download      gratis        cheap (if not low-cost positioning)
diy           tutorial      how to        wikipedia
youtube       reddit        forum
jobs          career        salary        hiring
review        complaint     scam          fake
```

🎯 **Exam trap:** "A campaign has high CTR but low conversion rate." → Most common cause: irrelevant search queries triggering broad match keywords. Fix = aggressive negative keyword work, not changing bidding.

---

## 💵 The $200/Month Campaign Walkthrough (Hands-On)

This is the worked example. Print this. Build it for a real client.

**Scenario:** A Phoenix-area Pilates studio offering free trial classes. Budget: $200/month. Goal: 25 free-trial signups.

### Step 1, Conversion Tracking First (Day 0)

Before you build the campaign:

1. Set up GA4 if not already
2. Mark "free_trial_signup" as a conversion event in GA4
3. Link GA4 to Google Ads (via Linked Accounts in GA4 Admin)
4. Import the GA4 conversion into Google Ads → Tools → Conversions → Import from GA4
5. Verify the conversion fires by submitting the form yourself in incognito + waiting 24 hours

If you skip this step, NO bidding strategy except Manual CPC will work.

### Step 2, Account Structure

```
Account: Sunday Studio - Pilates Phoenix
└── Campaign 1: Phoenix Free Trial (Search)
    ├── Daily budget: $7
    ├── Bidding: Maximize Conversions (no tCPA yet, not enough data)
    ├── Geo: 10-mile radius around studio + Scottsdale + Tempe (NOT all Arizona)
    ├── Networks: Search Network ONLY (uncheck Display partners)
    ├── Schedule: 6am–10pm (people don't sign up at 3am)
    │
    └── Ad Group: Free Trial - Pilates Class
        ├── Keywords:
        │   "pilates near me"        (phrase)
        │   "pilates class phoenix"  (phrase)
        │   "free pilates trial"     (phrase)
        │   [pilates studio phoenix] (exact)
        │   [pilates classes near me](exact)
        │
        ├── Audience signal:
        │   "Health & Fitness Enthusiasts" (in-market segment)
        │   "Yoga Practitioners" (affinity)
        │   Customer match: past trial bookers (if exists)
        │
        ├── Negatives (from starter list above + these):
        │   "free", "online", "video", "youtube", "instructor jobs"
        │
        └── 1 RSA with 12 headlines, 4 descriptions
```

### Step 3, RSA For This Campaign

```
Headlines:
1. Free Pilates Class in Phoenix
2. Try Pilates, Phoenix Studio
3. New To Pilates? First Class Free
4. Reformer + Mat Pilates Classes
5. Phoenix's Top-Rated Pilates Studio
6. Small Classes · Expert Instructors
7. Book Your Free Trial Today
8. 12-Mat Studio in Scottsdale
9. Beginner-Friendly Pilates Phoenix
10. Try Pilates, No Membership Required
11. {LOCATION(City):Phoenix} Pilates Studio
12. Rated 4.9 by 800+ Members

Descriptions:
1. New to Pilates? Your first class is on us. Expert instructors, small groups, all levels welcome. Book online in 30 seconds.
2. Reformer and mat classes 6am–8pm daily. Free trial covers your first class. Cancel anytime, no contracts.
3. Phoenix's most-loved Pilates studio. 12 reformers, certified instructors, beginner-through-advanced. Try your first class free.
4. Book a free trial in 30 seconds. Walk-in or schedule online. 7 days a week. Free parking. Phoenix's #1 Pilates studio.
```

### Step 4, Sitelinks + Extensions

```
Sitelinks (link to specific pages):
  · Class Schedule
  · Free Trial
  · Pricing
  · Meet The Instructors

Callouts (no-link benefit blurbs):
  · Free Parking
  · No Membership Required
  · 12 Reformers
  · Beginner-Friendly

Structured Snippets (header: Services):
  · Reformer Pilates
  · Mat Pilates
  · Private Sessions
  · Group Classes

Call extension: studio phone number
Location extension: linked to Google Business Profile
```

### Step 5, Daily Routine (15 minutes)

| Day | Action |
|-----|--------|
| Day 1–7 | Don't touch. Smart Bidding needs data. Daily check: spend pacing, no broken links. |
| Day 8 | Pull Search Terms report. Add 10–20 negative keywords. |
| Day 10 | Check Ad Strength on RSA. Add headlines to push it to "Excellent." |
| Day 14 | First optimization: if CPA < $8, increase budget by 20%. If CPA > $15, pause and re-think. |
| Day 21 | Add a second ad group for a different keyword theme (e.g., "Reformer Pilates"). |
| Day 28 | If you have 30+ conversions, switch from Maximize Conversions to **tCPA at $8**. |

### Step 6, Expected Results (Realistic 2026 Benchmarks)

| Metric | Realistic range | Action if outside range |
|--------|----------------|-------------------------|
| CTR | 5–10% | < 5% = improve RSA; > 10% = great |
| Avg CPC | $1.50–$3.50 | > $4 = check Quality Score |
| Conversion rate | 8–15% | < 5% = landing page issue |
| CPA (target) | $5–$10 | > $12 = pause, diagnose |
| Quality Score | 7+ | < 6 = improve landing page + ad relevance |

---

## 🏆 Quality Score, The Most Misunderstood Metric

Quality Score is a 1–10 score Google assigns each keyword. It's based on three components:

| Component | What it measures |
|-----------|------------------|
| **Expected CTR** | How often people are likely to click your ad |
| **Ad Relevance** | How closely your ad matches the keyword's intent |
| **Landing Page Experience** | Page load speed, mobile UX, content relevance |

Each component is rated **Above Average / Average / Below Average**.

🧠 **MEMORIZE the formula** that drives Ad Rank in the auction:
```
Ad Rank = Max CPC bid × Quality Score + Expected impact of extensions
```

This means: **a higher Quality Score lets you bid LESS but still rank above competitors**. A QS 10 ad bidding $2 will beat a QS 5 ad bidding $4.

🎯 **Exam pattern:** "How do you improve Quality Score?" → Three answers must appear: improve CTR (better ads), improve ad relevance (tighter keyword-to-ad matching), improve landing page (speed + content match).

---

## 🚨 Common Mistakes (Don't Be This Marketer)

| Mistake | What it looks like | Fix |
|---------|--------------------|------|
| **Display + Search combined** | Default opt-in to Display network on a Search campaign | Untick "Include Google Display Network" |
| **Broad geo** | Targeting "United States" for a local business | Use radius + city; never "all" |
| **No conversion tracking** | Running Max Conversions without tracking | Set up GA4 + import conversion BEFORE launching |
| **Identical RSAs** | 15 nearly-identical headlines | Vary themes; check Ad Strength = Excellent |
| **Set-and-forget negatives** | Never opening Search Terms report | Weekly 15-min negative routine |
| **Premature tCPA** | Setting tCPA with < 30 conversions/month | Use Max Conversions first, switch at 30+ |
| **Mixing brand + non-brand** | Brand keywords in same campaign as generic | Separate brand campaign, they have very different CPCs |

---

## 🛠️ Google Ads Editor (The Tool You Should Use)

Google Ads Editor is a **free desktop application** that lets you build campaigns offline, bulk-edit, and copy structure across accounts. Pros use it; beginners avoid it. Wrong choice.

**Three things Editor does that the web UI can't (easily):**

1. **Bulk import keywords + ads from a spreadsheet**, upload a CSV of 500 keywords and 50 ads in seconds
2. **Copy a campaign from one account to another**, preserves all settings, ad groups, negatives
3. **Find/replace across campaigns**, change "Free Trial" to "Try Free" in 1000 ads at once

Download from: <https://ads.google.com/intl/en_us/home/tools/ads-editor/>

🎯 The Google Ads Search Certification has 2–3 questions on Editor functionality. Know that it: works offline, syncs both ways with the live account, and is the only way to bulk-edit cleanly.

---

## 📊 Real Case Study: Allbirds' Tight Search Account

Allbirds (the DTC shoe brand) ran a famously tight Google Ads account from 2020–2023. Their structure (publicly discussed by their growth team in a [Modern Retail interview, 2023](https://www.modernretail.co/)):

- **5 campaigns only**: Brand, Generic, Sustainable, Running, Re-targeting
- **30 ad groups total** across all campaigns
- **Each ad group: ONE clear theme** (e.g., "Wool Runners Men's", "Tree Dashers Trail")
- **Brand defense campaign** ran on tROAS = 8 (very profitable; brand traffic converts)
- **Generic campaign** ran on tCPA = $35 (matched their unit economics)
- **All campaigns**: paused Display network, paused Search Partners

What made it work wasn't sophistication, it was **discipline**: clear naming, clear themes, clear KPI per campaign, weekly negative work, weekly RSA refresh.

🎯 The lesson: a tight 5-campaign account outperforms a sprawling 50-campaign account 9 times out of 10.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **CPC** | Cost Per Click, the amount you pay each time someone clicks your ad |
| **CPA** | Cost Per Acquisition, total spend / conversions |
| **ROAS** | Return on Ad Spend, revenue / spend (often expressed as a ratio like 4x) |
| **RSA** | Responsive Search Ad, the only Google search ad format (up to 15 headlines, 4 descriptions) |
| **tCPA** | Target CPA, Smart Bidding strategy that aims for a specific cost per acquisition |
| **tROAS** | Target ROAS, Smart Bidding strategy that aims for a specific return ratio |
| **SKAG** | Single Keyword Ad Group, pre-Smart Bidding tactic, now mostly obsolete |
| **Quality Score** | 1–10 score combining expected CTR, ad relevance, landing page experience |
| **Ad Rank** | What determines auction position: bid × QS + extensions |
| **Search Terms** | Actual queries people typed (vs. "keywords" which are what YOU bid on) |
| **MCC** | My Client Center, Manager Account, used by agencies to manage multiple accounts |
| **Negative keyword** | A query you DON'T want to show for |
| **Audience signal** | A hint to Smart Bidding about who your customer is, added to a campaign or ad group |

---

## ✅ Module 2 Summary

You now know:

- 🏗️ Google Ads account structure (Account → Campaign → Ad Group → Keyword + Ad)
- 🎯 Match types in 2026 (and that BMM is dead)
- 💰 Every bidding strategy and when to use each
- 🤖 What Smart Bidding does under the hood + its 30-conversion prerequisite
- ✍️ How to write an RSA that hits "Excellent" Ad Strength
- 🚫 The weekly negative keyword routine
- 💵 The full $200 campaign walkthrough
- 🏆 Quality Score's 3 components and how to improve each

**Next steps:**
1. 🎥 Watch the videos in `Videos.md`
2. ✏️ Take `Quiz.md`
3. 📋 Review `Cheat-Sheet.md`
4. ➡️ Move to [Module 3: PMax + Display + Video](../Module-03-Google-Ads-PMax-Display-Video/Reading.md)

---

## Discussion, Socratic prompts

Use these to pressure-test your understanding. Each is defensible from multiple angles, argue from the frameworks in this module.

1. Smart Bidding (tCPA/tROAS) requires ~30 conversions in 30 days to stabilize. A bootstrapped founder is doing 8 conversions/month. Build the case for AND against running Manual CPC for the first 90 days vs running tCPA underpowered. Which would you defend at a CFO review?
2. Wayfair's 2017 SKAG strategy was famous; the reading says Smart Bidding now makes SKAGs less effective. Where does the underlying principle of "specificity at the query level" still apply in a Smart Bidding world, and which Google Ads features now do that work for you?
3. The reading says Quality Score is mostly determined by expected CTR, ad relevance, and landing page experience. A marketer claims you can buy your way past a low QS by simply raising bids. Walk through the Ad Rank math and explain where this logic breaks down, and where it has a kernel of truth.
4. "Include Display Network" defaults to ON for new Search campaigns. Argue why Google sets the default this way despite the reading recommending you turn it off. Whose interests does each default serve?
5. An ICP-validated B2B company has only 80 monthly searches for its category. The brief says "run Search." Build the strongest argument for running Search anyway, then the strongest argument for skipping Search entirely. Which channel mix would you actually recommend, and why?

---

> **Where this leads.**
> - Inside this course: Module 3 covers Performance Max (which absorbs Search demand if you're not careful) and YouTube; Module 10 (Capstone) uses Google Search for half of the $200 launch.
> - Cross-course: [14-AI-Marketing-Foundations Module 5](../../14-AI-Marketing-Foundations/Module-05-Social-Media-AI-Tools/Reading.md) provides paid-channel context; [16-AI-Marketing-Strategist](../../16-AI-Marketing-Strategist/) deepens organic search alongside paid.
> - Practice: Practice Exam 1 has ~8 questions from this module (match types, RSA limits, Quality Score, Ad Rank, Smart Bidding thresholds).

---

## 📚 Further Reading (Optional)

- 📖 [Google Ads Search Certification Free Skillshop Course](https://skillshop.exceedlms.com/student/path/18128) the actual cert prep
- 📖 [Google Ads Help Smart Bidding](https://support.google.com/google-ads/answer/7066642) official documentation
- 📖 [Frederick Vallaeys *Unlevel the Playing Field* (book)](https://optmyzr.com/book/) Optmyzr founder; one of the deepest books on Google Ads strategy
- 📖 [Search Engine Land Quality Score guide](https://searchengineland.com/) annually-updated Quality Score deep dive
- 📖 [Surfside PPC YouTube channel](https://www.youtube.com/@SurfsidePPC), the most thorough free Google Ads tutorials on the internet
