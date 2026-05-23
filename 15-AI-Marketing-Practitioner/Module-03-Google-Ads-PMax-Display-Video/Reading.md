# Module 3: Google Ads — PMax, Display & Video 🎬

> **Why this module matters:** Search is the bottom of the funnel. Performance Max, Display, and YouTube fill the rest. They're where most ecommerce growth happens — and most beginner mistakes get made. By the end, you can architect a PMax campaign properly and run a YouTube Ads test that doesn't bleed budget.

---

## 🎯 A Real Story: How Mejuri Reorganized Around Performance Max

In 2023, Mejuri (the DTC jewelry brand publicly profiled by [Modern Retail](https://www.modernretail.co/) and [Marketing Brew](https://www.marketingbrew.com/)) was running 12 separate Google Ads campaigns: 4 Shopping, 3 Display, 2 YouTube, 3 Search. CAC was $52 and growing. Their growth team made a controversial decision: collapse 8 of the 12 campaigns into a single Performance Max campaign with carefully-structured asset groups.

The results, shared at Shopify's Reunite Conference in 2024:
- CAC fell from $52 → $34 in 90 days
- Conversion volume up 41% on the same budget
- Time spent managing campaigns: down ~60%

But — and this is the key — they didn't just dump everything into one PMax campaign. They built it with **discipline**: 6 carefully-themed asset groups, brand exclusions on, audience signals on every group, daily monitoring of their **Insights tab** (Google's "what PMax is doing" view), and weekly creative refresh.

The lesson isn't "PMax is magic." It's that **PMax rewards structural discipline more than any campaign type Google has ever shipped**. Most beginners launch one PMax campaign with one asset group and watch it burn budget. Pros build asset groups the same way they used to build ad groups — and they win.

This module teaches you that discipline.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Google Ads account hierarchy and Smart Bidding — covered in [Module 2](../Module-02-Google-Ads-Search-Mastery/Reading.md)
> - The 30-conversion threshold and tCPA/tROAS — also Module 2
> - Funnel-stage KPIs (TOFU vs BOFU) — covered in [Module 1](../Module-01-Campaign-Strategy-Brief-Writing/Reading.md)
> If any of these are shaky, pause and review before continuing.

---

## 🏗️ Performance Max Architecture

Performance Max is Google's **all-channels-in-one** campaign type. One campaign serves across Search, Display, YouTube, Discover, Gmail, and Maps simultaneously. Google's machine learning decides where, when, and to whom each ad serves.

### The Anatomy

```
Performance Max Campaign
├── Budget + Bidding strategy (campaign level)
├── Geo + Schedule + Language (campaign level)
├── Brand Exclusions (campaign level — KEY)
├── Final URL Expansion (on/off)
│
├── Asset Group 1: "Womens Necklaces"
│   ├── Headlines (15)
│   ├── Long Headlines (5)
│   ├── Descriptions (5)
│   ├── Images (20 — multiple aspect ratios)
│   ├── Logos (1+)
│   ├── Videos (1+ — Google auto-generates if missing)
│   ├── Sitelinks
│   ├── Final URL
│   └── Audience Signal (your hint to Google about who buys this)
│
├── Asset Group 2: "Womens Earrings"
│   └── (separate, themed assets)
│
└── Asset Group 3: ...
```

**The mental model:** asset groups are PMax's version of ad groups. One asset group = one theme = one set of creative + one audience signal. Don't put earrings and necklaces in the same asset group — Google's algorithm needs the thematic grouping to learn what works for each.

### Asset Group Specs (Memorize These — Exam-tested)

| Asset | Max count | Char limit | Required |
|-------|-----------|------------|----------|
| Headlines | 15 | 30 chars each | 5 minimum |
| Long Headlines | 5 | 90 chars each | 1 minimum |
| Descriptions | 5 | 90 chars each | 1 minimum |
| Business Name | 1 | 25 chars | Yes |
| Images | 20 | — | 1 minimum (multiple aspect ratios) |
| Logos | 5 | — | 1 minimum |
| Videos | 5 | 10+ sec | 1 recommended |

**Image aspect ratios required for full reach:**
- 1.91:1 landscape (1200×628 minimum)
- 1:1 square (1200×1200 minimum)
- 4:5 portrait (960×1200 minimum — for Discover, Gmail)

---

## 🚨 Brand Exclusions — The Single Most Important PMax Setting

When you launch a PMax campaign, Google will (by default) bid on **your own brand keywords**. This means PMax steals credit from your dedicated brand Search campaign, and your blended CPA looks artificially great.

The fix: **Brand Exclusions** (campaign-level setting added by Google in late 2023).

### How to Set Up Brand Exclusions

1. Open the PMax campaign → Settings
2. Scroll to "Brand Exclusions" 
3. Add: your brand name + variants + misspellings
4. Save

🧠 **MEMORIZE the rule:** Run brand Search separately. Exclude brand from PMax. Always.

🚨 **Common mistake (huge):** Launching PMax without brand exclusions. PMax shows up on "[your brand] coupon" searches, takes the conversion, and you can't tell what's actually new business vs. brand cannibalization. 6 months later your real CAC is 2x what you thought.

---

## 🎯 Audience Signals (Not Targeting)

This is where beginners get confused. In PMax, you can add an **Audience Signal** to each asset group. Critical distinction:

| Old Campaign Types | PMax |
|--------------------|------|
| Audience = targeting (only people in the audience see ads) | Audience = signal (a HINT to the algorithm about who converts) |

PMax can — and will — show your ads to people OUTSIDE your audience signal. The signal accelerates Google's learning phase. It doesn't restrict who sees your ads.

### What To Use As Audience Signals

| Signal Type | Best For |
|-------------|----------|
| **Customer Match** (uploaded customer email list) | Strongest signal; use everywhere you have a list |
| **Website Visitors** (last 540 days) | Mid-strength; broad audience but real intent |
| **Cart Abandoners** (last 30 days) | High intent; great signal for ecom |
| **In-Market Segments** | Decent baseline; Google's classifier of "shopping for X" |
| **Affinity Segments** | Weakest; "interested in X" — broad |
| **Custom Segments** (keywords + URLs visited) | Build your own — paste competitor URLs |

🎯 **Best practice:** Combine 2–3 signals per asset group. Customer Match + Website Visitors + In-Market Segment is a strong default combo.

---

## 🖼️ Display Network & DV360 — Brief Comparison

**Google Display Network (GDN)** is the older banner-ad network running on 2M+ websites + apps + Gmail. Standalone Display campaigns are increasingly rare — PMax has absorbed most Display inventory.

**DV360 (Display & Video 360)** is Google's enterprise programmatic platform. It's a separate product (part of Google Marketing Platform), not Google Ads.

| Feature | Google Ads Display | DV360 |
|---------|--------------------|-------|
| Audience | SMB to enterprise | Enterprise + agency |
| Cost | Self-serve, no minimum | Minimum spend ~$2K/mo typical |
| Inventory | Google Display Network + YouTube | GDN + open exchanges + private deals + connected TV |
| Audience tools | In-market, affinity, customer match | Above + 3rd-party data marketplace |
| Reporting | Basic | Advanced, including programmatic deals |
| Targeting precision | Decent | High (frequency caps across exchanges, etc.) |

For most practitioners: stick with PMax + standalone Display only when you need specific Display placements (e.g., a partner site) that PMax won't prioritize. DV360 is a Module 6 topic (Programmatic).

---

## 📺 YouTube Ads — The Three Formats That Matter

YouTube is the second-largest search engine in the world. Google offers three main ad formats. Know each.

### 1. In-Stream Ads (skippable + non-skippable)

| | Skippable | Non-Skippable |
|---|-----------|---------------|
| Where it plays | Before/during/after YouTube videos | Before YouTube videos |
| Length | 5+ seconds (typically 15s–3min) | 15 seconds max |
| Skippable after | 5 seconds | Never |
| Pricing model | CPV (cost-per-view) — counted only if viewed ≥ 30 sec OR full play | CPM (you pay for impressions) |
| Best for | Mid-funnel storytelling | High-frequency reminders, brand campaigns |

🎯 **Exam tip:** For skippable in-stream, you DON'T pay if the viewer skips before 30 seconds. This is constantly tested.

### 2. YouTube Shorts Ads

Vertical, full-screen, 6–60 sec, run between organic Shorts in users' feeds. Pricing is CPM. As of 2026, Shorts gets ~70 billion daily views — making it Meta Reels' real competitor.

**Creative rules for Shorts:**
- Hook in the first 1 second (not 3 — Shorts viewers scroll faster)
- Vertical 9:16 only
- Captions burned in (most viewers watch muted)
- Pattern interrupts every 2–3 seconds

### 3. In-Feed Video Ads (formerly Discovery)

Show up on YouTube's homepage, search results, and as suggested videos. Users opt in by clicking. Pricing is CPC (you pay only when they click to watch).

**Best for:** Mid/upper-funnel discovery. You're not interrupting — you're appearing as an option.

---

## 🎨 Creative Best Practices for Short-Form Video

The 2026 standard for YouTube Shorts, Meta Reels, and TikTok converged. Here's what actually works.

### The 3-Second Hook Test

Open with one of these in the first 3 seconds:

| Hook Type | Example | When it works |
|-----------|---------|---------------|
| Question | "Have you ever paid $80 for a couch that arrived broken?" | Pain-point products |
| Pattern Interrupt | Visual or audio cut that's unexpected | Crowded feeds |
| Bold Claim | "We sold 100,000 of these. Here's why." | Established brands |
| Demo | First frame is the product mid-use | Visual products |
| Stat | "73% of Pilates studios miss this on Sundays" | B2B / niche |

🚨 **Common mistake:** Logo intros. A 2-second logo at the start of a Short kills retention. Save brand reveal for the last 1 second, after you've earned attention.

### The Hook → Demonstrate → CTA Structure (for any short)

```
Seconds 0–3:    HOOK — pattern interrupt + main claim
Seconds 3–10:   DEMONSTRATE — product in action, problem solved
Seconds 10–25:  PROOF — review snippet, stat, testimonial
Seconds 25–30:  CTA — "Tap below — free trial" + URL overlay
```

This isn't a rigid script — but tested across 1,000+ short-form ads (per [VidIQ's 2025 creative report](https://vidiq.com/)), shorts that follow this rough flow outperform brand-first formats by ~3x on conversion rate.

---

## 🎬 Demand-Gen Campaigns

Demand Gen (renamed from Discovery in 2024) is YouTube + Discover + Gmail combined into one campaign. It's optimized for visual, top-of-funnel storytelling.

| Demand Gen | Performance Max |
|-----------|-----------------|
| Where it serves | YouTube + Discover + Gmail only | Everywhere |
| Best for | Visual brand building, image+video creative | All-channel performance |
| Bidding | Maximize Conversions, tCPA, tCPV, Max Clicks | Maximize Conv / Max Conv Value, tCPA, tROAS |
| Creative | Visual-first (carousels, videos, single images) | All formats |

**When to choose Demand Gen over PMax:** when you have strong visual creative and want to control where it runs. PMax decides for you; Demand Gen lets you pick.

---

## 💰 PMax Walkthrough: $300 Test Campaign

Let's build a real PMax campaign together — a DTC apparel example.

**Brand:** "Sunday Studio" (a fictional but realistic Pilates apparel brand)
**Budget:** $300/month
**Goal:** Drive online purchases at tROAS = 3.5x

### Step 1 — Prerequisites (Don't Skip)

```
☐ Merchant Center linked to Google Ads
☐ Product feed live with 100+ SKUs
☐ Conversion tracking with PURCHASE event + value
☐ At least 30 conversions in the last 30 days (across all campaigns)
☐ Brand exclusion list prepared
```

### Step 2 — Campaign Settings

| Setting | Value | Why |
|---------|-------|-----|
| Objective | Sales | Most common for ecom |
| Conversion goal | Purchases (with value) | Required for tROAS |
| Bidding | Max Conv Value with tROAS 3.5 | Start without target, add target at week 3 |
| Daily budget | $10 (= $300/mo) | Smart Bidding can flex 2x daily |
| Networks | All on (PMax default) | This is the point of PMax |
| Geo | Top 5 US markets only | Test before scaling |
| Final URL Expansion | OFF initially | Prevents Google from sending traffic to random pages |
| Brand Exclusions | "Sunday Studio" + 8 variants | Critical — prevent brand cannibalization |

### Step 3 — Asset Group 1: "Womens Pilates Tops"

```
HEADLINES (15):
1. Pilates Tops Designed To Move
2. Womens Pilates Tops — Sunday Studio
3. Soft, Strong, Sweat-Wicking
4. Made For Reformer + Mat
5. Pilates Tops From $48
6. Free Shipping Over $80
7. Wear-It-Once Money Back
8. Loved By 25,000 Studios
9. Made In Los Angeles
10. Worth Every Reformer
11. Pilates Apparel That Lasts
12. The Sunday Studio Pilates Top
13. Pilates Top Drop — New Colors
14. From Class to Coffee
15. Built For Real Movement

LONG HEADLINES (5):
1. The Pilates Top Designed to Move With You — Soft, Strong, Sweat-Wicking
2. Womens Pilates Tops Made in LA · Free Shipping Over $80
3. Built for Reformer and Mat — Loved by 25,000 Pilates Studios
4. The Pilates Top That Stays Put — Spring Drop Now Live
5. Sunday Studio Pilates Tops — From $48 With Free Returns

DESCRIPTIONS (5):
1. Soft, strong, sweat-wicking Pilates tops made in Los Angeles. Free shipping over $80. Free returns.
2. Pilates apparel designed for real movement — from reformer to mat to coffee. Shop the spring drop.
3. The Pilates top loved by 25,000 studios. Made in LA. Wear-it-once money-back guarantee.
4. Womens Pilates tops from $48. New spring colors live now. Free shipping + free returns.
5. The Pilates top that doesn't ride up. Designed by movement instructors. Made in LA.

BUSINESS NAME: Sunday Studio
IMAGES: 20 product + lifestyle (1.91:1 + 1:1 + 4:5 each)
LOGOS: 3 (square + landscape + monochrome)
VIDEO: 1 × 15-sec product demo (you'll generate this in Module 8)
SITELINKS: New Arrivals · Bestsellers · Sale · Free Returns

AUDIENCE SIGNAL:
- Customer Match: existing customer list (500 emails)
- Website Visitors: last 540 days
- In-Market: Apparel & Accessories > Womens Apparel
- Custom Segment: searches for "pilates clothing", "reformer apparel"
```

### Step 4 — Asset Groups 2, 3, 4

Same template, different themes:
- AG 2: "Womens Pilates Bottoms"
- AG 3: "Pilates Accessories" (mats, towels)
- AG 4: "Mens Pilates Apparel"

Don't bundle them together — Google's algorithm needs the thematic separation.

### Step 5 — Launch + Optimization Cadence

| Week | Action |
|------|--------|
| Week 1 | Don't touch. Smart Bidding learns. Daily check: spend pacing, no broken URLs, no disapproved assets. |
| Week 2 | Open the **Insights** tab. Read which search themes Google found. Add any irrelevant themes to brand exclusions or campaign-level negatives. |
| Week 3 | Switch from Max Conv Value (no target) to **tROAS 3.5**. Add 5 fresh creative assets. |
| Week 4 | Pull the **Asset Group performance report**. Pause assets rated "Low" — they're dragging the algorithm. Replace with new variants. |
| Ongoing | Weekly: refresh 20% of creative; review Insights tab; rotate audience signals. |

🎯 **Exam tip:** PMax has fewer reports than Search. The two reports you MUST know: **Insights tab** (Google's view of what's working) and **Asset Group performance** (which assets are rated Best/Good/Low).

---

## 🔥 PMax Common Mistakes (The Big Ones)

| Mistake | Why it kills performance | Fix |
|---------|---------------------------|-----|
| **No brand exclusions** | PMax cannibalizes brand search, inflates apparent CAC | Add brand exclusions on day 0 |
| **One mega asset group** | Algorithm can't learn what works per theme | Split into themed asset groups |
| **No audience signals** | Google starts from scratch, longer learning phase | Always add Customer Match + Website Visitors |
| **Final URL Expansion ON early** | Google sends traffic to random product pages | Keep OFF until you trust the algorithm |
| **Switching to tROAS too soon** | Same starvation problem as tCPA on Search | Wait until 30+ conversions in PMax specifically |
| **Ignoring Insights tab** | Missing what Google is actually doing | Check weekly, minimum |
| **Same image in every aspect ratio** | Reduces format reach (Gmail, Discover) | Crop or recreate per ratio |

---

## 📺 YouTube Ads Test Campaign Walkthrough

**Goal:** Drive cold-traffic awareness for the same Sunday Studio brand. Budget: $100 over 30 days.

### Step 1 — Setup

```
Campaign Type: Video (NOT PMax)
Subtype: Drive conversions OR Build awareness (pick based on goal)
Bidding: Maximize Conversions for skippable in-stream
Budget: $3.30/day
Geo: 5 top US markets
Networks: YouTube videos + YouTube partner
```

### Step 2 — Creative

Make TWO 15-second videos. Different hooks. Same brand reveal at the end.

```
Video A — Question Hook:
0:00 "Did your last Pilates top ride up before reformer 2?"
0:03 [Cut to product, in motion on a reformer]
0:10 "Sunday Studio. Designed to stay put."
0:13 [Brand logo + URL]

Video B — Demo Hook:
0:00 [Extreme close-up of fabric, hands stretching it]
0:03 "This is what real Pilates apparel looks like."
0:10 [Quick cuts: 3 different bodies wearing it]
0:13 [Brand logo + URL]
```

### Step 3 — Targeting

- **Custom Audience**: people who searched "Pilates clothing", "lululemon alternative", "reformer apparel" in the last 30 days
- **In-Market**: Apparel & Accessories > Activewear
- **Topics**: Pilates, Yoga, Fitness Apparel
- **Placements (optional)**: specific Pilates YouTube channels you want to be in front of

### Step 4 — Measurement

Don't measure YouTube Ads on direct conversion in the first 30 days. Measure:
- View-through rate (target: >30%)
- View-through conversions in GA4 (Multi-touch attribution)
- Branded search lift (compare brand search volume month-over-month)

🎯 YouTube Ads convert on a longer window than search. A 7-day attribution window will hide most of the impact. Use 28-day click + view-through.

---

## 📊 Real Case Study: Glossier's YouTube Shorts Pivot

Glossier publicly discussed their 2024 pivot from polished Instagram ads to **UGC-style YouTube Shorts** ([WWD interview, May 2024](https://wwd.com/)). They hired 12 micro-creators ($500–$2,000 per creator) to produce raw 15-second product demos with no script. They ran these as YouTube Shorts ads + Demand Gen campaigns simultaneously.

Result: 31% lower CAC than their previous polished-creative strategy. Engagement (likes + shares) was 4x.

The lesson: in 2026, **production value < authenticity**. A $500 phone-shot UGC video frequently outperforms a $20,000 studio shoot. You'll learn to produce these in Module 8.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **PMax** | Performance Max — all-channel Google Ads campaign type |
| **Asset Group** | PMax's equivalent of an ad group; one theme of creative + signal |
| **Audience Signal** | A HINT to PMax's algorithm about who converts (NOT a targeting restriction) |
| **Brand Exclusions** | A list of brand terms PMax should NOT bid on |
| **Final URL Expansion** | A setting that lets Google send traffic to ANY page on your domain |
| **DV360** | Display & Video 360 — Google's enterprise programmatic platform |
| **GDN** | Google Display Network — the 2M+ site banner-ad network |
| **In-Stream Ad** | YouTube ad that plays before/during/after a video |
| **Shorts Ad** | Vertical YouTube ad in the Shorts feed (6–60 sec) |
| **In-Feed Ad** | YouTube ad on homepage / search results; user opts in by clicking |
| **CPV** | Cost Per View (YouTube — counts at 30 sec viewed or full play) |
| **CPM** | Cost Per Mille (1,000 impressions) |
| **Demand Gen** | YouTube + Discover + Gmail campaign (renamed from Discovery) |
| **Custom Segment** | Audience built from custom keywords + URLs the user searched/visited |
| **Insights tab** | PMax's view of what themes Google has found |

---

## ✅ Module 3 Summary

You now know:
- 🏗️ PMax architecture and asset group rules
- 🚨 Brand exclusions (THE single most important setting)
- 🎯 Audience signals vs. audience targeting (the critical difference)
- 🖼️ When to use Display vs PMax vs DV360
- 📺 The 3 YouTube ad formats (in-stream, Shorts, in-feed)
- 🎨 The 3-second hook test for short-form video
- 🎬 Demand Gen vs PMax decision
- 💰 A worked PMax $300 walkthrough
- 🔥 The top PMax mistakes (and how to avoid them)

**Next steps:**
1. 🎥 Watch the videos in `Videos.md`
2. ✏️ Take `Quiz.md`
3. 📋 Review `Cheat-Sheet.md`
4. ➡️ Move to [Module 4: Meta Ads Mastery](../Module-04-Meta-Ads-Mastery-FB-IG/Reading.md)

---

## Discussion — Socratic prompts

Use these to test your reasoning. Each prompt is open-ended — argue from the frameworks in this module.

1. Mejuri consolidated 8 campaigns into ONE PMax and CAC fell from $52 to $34. A friend's brand is at 12 campaigns with CAC at $40 and stable. Build the case for AND against consolidating into PMax. What evidence would tip your decision?
2. Audience signals are a "hint, not a target." Defend the case that this is more powerful than hard targeting in 2026. Then defend the opposite — that the loss of control is a real risk for an enterprise brand-safety review. Which would you bring to a CMO?
3. PMax's "Insights tab" is your only window into where spend is going. If the tab shows 70% of spend going to a category you didn't intend (e.g., Display banners instead of Shopping), what are the three plausible root causes, and what's the right diagnostic order?
4. The reading recommends turning Final URL Expansion OFF initially. A growth marketer argues this throws away ~15% of incremental conversions PMax would have found. Argue both sides — when is the brand-control trade-off worth it, and when isn't it?
5. YouTube In-Feed ads bill on CPC; In-Stream bills at 30 seconds or full play (CPV). For a DTC apparel brand launching a $5K test, which is the right primary YouTube format and why? Where does the answer flip for a B2B SaaS?

---

> **Where this leads.**
> - Inside this course: Module 6 covers the rest of the open-web programmatic landscape (DV360, The Trade Desk, AdRoll) that PMax does NOT cover; Module 8 covers AI video production for the YouTube ads you'll run here.
> - Cross-course: [14-AI-Marketing-Foundations Module 5](../../14-AI-Marketing-Foundations/Module-05-Paid-Media-Channels/Reading.md) provides the paid-media baseline; [17-AI-Performance-Marketer](../../17-AI-Performance-Marketer/) goes deeper on multi-platform bid optimization.
> - Practice: Practice Exam 1 has ~6 questions from this module (PMax brand exclusions, audience signals, YouTube ad formats, 3-second hook).

---

## 📚 Further Reading (Optional)

- 📖 [Google Ads Help — Performance Max Best Practices](https://support.google.com/google-ads/answer/10724817)
- 📖 [Google Ads Display Certification Skillshop course](https://skillshop.exceedlms.com/student/path/18127) — free, prep for Display Cert
- 📖 [Google Ads Video Certification Skillshop course](https://skillshop.exceedlms.com/student/path/18137) — free, prep for Video Cert
- 📖 [Mike Rhodes — Define Digital — PMax Playbook (2024 edition)](https://definedigitalacademy.com/)
- 📖 [VidIQ Annual Creative Performance Report](https://vidiq.com/blog/) — what's working on YouTube creative
- 📖 [Frederick Vallaeys on PMax Brand Exclusions](https://www.optmyzr.com/blog/) — Optmyzr's deep dive
