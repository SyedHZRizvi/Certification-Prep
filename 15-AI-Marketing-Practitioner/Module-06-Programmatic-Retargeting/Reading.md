# Module 6: Programmatic + Retargeting 🎯

> **Why this module matters:** Once you've launched on Google + Meta + TikTok + LinkedIn, the next frontier is programmatic — reaching users across the open web with precision. And retargeting is where 60% of your conversions actually come from. This module connects both.

---

## 🎯 A Real Story: How Casper Mastered Cart-Abandoner Retargeting

Casper Mattress launched in 2014. By 2017 they were doing $250M in revenue, but their CFO had a problem: cart abandonment rates were ~75% (industry norm). That's $750 of intent walking away for every $1,000 of cart adds.

Their growth team built what became the textbook DTC retargeting playbook (publicly discussed by their VP of Marketing at Shopify Reunite 2018 and reanalyzed by [Common Thread Collective in 2022](https://commonthreadco.com/)):

1. **3-stage retargeting funnel**:

   - Stage 1 (day 1–3 after cart abandon): Display banner on AdRoll showing the EXACT product abandoned, with a $50 discount code
   - Stage 2 (day 4–7): Meta Reels ad with a customer testimonial
   - Stage 3 (day 8–14): Email with the same $50 code, expiring tonight

2. **Frequency capping**: Each user saw retargeting ads max 3x per day, 12x per week
3. **CDP-fed audiences**: Their customer data platform (Segment → Klaviyo → Meta + AdRoll) pushed real-time updates so a buyer was excluded from retargeting within minutes
4. **Result**: Recovered $4.2M in 2018 from cart-abandon retargeting alone. ROI of the program: 18:1.

The lesson isn't that retargeting works — everyone knows that. The lesson is **discipline** — sequencing creative across days, capping frequency, excluding converted users, and connecting your CDP so the audiences update in real time. Most marketers get the audience right and the sequencing/capping wrong, then wonder why their CAC drifts.

This module teaches you to build it right.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Funnel-stage targeting and audience-signal vs hard-targeting — covered in [Module 3](../Module-03-Google-Ads-PMax-Display-Video/Reading.md)
> - Meta Custom Audiences and attribution windows (post-iOS 14.5) — covered in [Module 4](../Module-04-Meta-Ads-Mastery-FB-IG/Reading.md)
> - LinkedIn Matched Audiences (the B2B equivalent) — covered in [Module 5](../Module-05-TikTok-LinkedIn-Ads-B2B/Reading.md)
> If any of these are shaky, pause and review before continuing.

---

## 🌐 What "Programmatic" Actually Means

Programmatic advertising is the automated buying and selling of ad inventory through real-time auctions. Every time a webpage loads, an auction happens in ~50 milliseconds: dozens of buyers bid for the right to show YOU an ad on that page. The highest bidder wins. That's programmatic.

The infrastructure has 4 main players:

```
ADVERTISER → DSP (Demand-Side Platform) → AD EXCHANGE → SSP (Supply-Side Platform) → PUBLISHER

Example:
  You (advertiser) want to buy a banner on CNN.com.
  Your DSP (e.g., The Trade Desk) decides what to bid.
  The bid goes to an ad exchange (e.g., Google AdX, OpenX).
  CNN's SSP (e.g., Magnite) accepts highest bid.
  Your ad shows on CNN.com.
  Time elapsed: ~50ms.
```

---

## 🛠️ The 4 DSPs You Need to Know

| DSP | Owned by | Best for |
|-----|----------|----------|
| **DV360 (Display & Video 360)** | Google | Enterprise + agencies; deep integration with Google ecosystem |
| **The Trade Desk (TTD)** | Independent | Largest independent; CTV-strong; agency favorite |
| **AdRoll** | NextRoll | SMB + DTC; easy retargeting setup |
| **Criteo** | Independent | Dynamic product retargeting (DTC ecom specialty) |

### Brief Notes on Each

**DV360**: Google's enterprise programmatic. Minimum spend typically ~$2,000/mo. Integrates with Google Ads, GA4, Campaign Manager 360. Use when you're already on the Google Marketing Platform.

**The Trade Desk**: The independent giant. Strong on Connected TV (CTV) — programmatic Hulu, Disney+, Roku inventory. Used by most large agencies. Minimum spend varies by IO (insertion order).

**AdRoll**: SMB-friendly. The classic "first programmatic platform a DTC brand tries." Decent for retargeting. Self-serve. Starts at ~$300/mo.

**Criteo**: Dynamic product ads expert. If you have an ecom catalog, Criteo will show users the exact product they viewed, cropped from your catalog, on the open web. Strong specifically for retargeting.

🎯 **Exam tip:** "Which platform is best for retargeting a DTC ecom store with a Shopify catalog?" → Likely Criteo (or PMax via Google) for the DSP-level question. Multiple right answers depending on scale.

---

## 🤝 Header Bidding 101 (Brief)

Header bidding is a publisher-side mechanism that asks ALL buyers to bid simultaneously BEFORE the publisher's ad server runs. Why this matters to you:

- **Pre-2018**: Google's DFP gave Google AdX an unfair bid advantage (it bid first, others bid last)
- **Header bidding (2018+)**: Every buyer bids at once; the publisher picks the highest. Fairer auction.
- **What it means for advertisers**: more inventory available to your DSP, often at lower CPMs

You don't configure header bidding as an advertiser — publishers do. But knowing it exists explains why some publisher inventory only became biddable on certain DSPs after ~2018.

---

## 🔄 Retargeting Strategy — The Discipline

### Define Retargeting Audiences By Behavior

| Audience | Definition | Recommended treatment |
|----------|-----------|----------------------|
| **All visitors** | Anyone who visited your site (last 30-180 days) | Soft branding ads; broad awareness |
| **Product viewers** | Viewed a product page but didn't add to cart | Show the same product + benefit messaging |
| **Add-to-cart** | Added to cart but didn't checkout | Show product + social proof + reassurance ("Free returns") |
| **Cart abandoners** | Started checkout but dropped off | Show product + DISCOUNT/INCENTIVE |
| **Past purchasers** | Bought before | Show NEW products + cross-sell |
| **Customer Match (high LTV)** | Top 20% of customers by revenue | Use as lookalike seed; light retention ads |
| **VIP loyalty** | High frequency + high recency customers | Exclusive offers + early-access ads |

### The 3-Stage Funnel Pattern (Casper-style)

```
Day 1-3:   Aggressive — product image + offer
Day 4-7:   Social proof — testimonial creative
Day 8-14:  Final push — urgency + scarcity
Day 15+:   Exclude from retargeting (likely won't convert)
```

### Frequency Capping (Critical)

Without caps, retargeting becomes harassment:

| Cap level | Recommended |
|-----------|-------------|
| Per user / per day | 3 impressions max |
| Per user / per week | 12 impressions max |
| Per user / per campaign | 24 impressions max |

🚨 **Common mistake:** No frequency cap = same user sees ad 30+ times/week. They start to associate your brand with annoyance. Set caps in EVERY retargeting campaign, on every platform.

---

## 🏭 CDP-Fed Retargeting (The 2026 Standard)

A **Customer Data Platform (CDP)** is a database that unifies customer data from your website, app, CRM, email, and POS — then pushes audiences to ad platforms in real time. This solves a critical problem: lag.

### The Lag Problem

Without a CDP:

- Customer purchases → 24 hours later → audience syncs to Meta
- In the 24-hour gap, you spend $30 retargeting a converted customer

With a CDP:

- Customer purchases → 30 seconds later → customer is excluded from all retargeting audiences across Meta, Google, TikTok, AdRoll
- Zero waste

### Popular CDPs

| CDP | Use case |
|-----|----------|
| **Segment (Twilio)** | The OG; developer-friendly; powers most VC-backed startups |
| **mParticle** | Enterprise; especially for mobile apps |
| **Treasure Data** | Enterprise; strong for large brands |
| **RudderStack** | Open source; Segment alternative |
| **Klaviyo** | Email-first but works as a lightweight CDP for DTC ecom |
| **Customer.io** | Marketer-friendly; lightweight CDP + automation |

### CDP-to-Ad-Platform Flow

```
Your website / app / CRM
       ↓ (events)
     CDP (Segment, etc.)
       ↓ (synced audiences in real time)
   Meta · Google · TikTok · AdRoll · Criteo
```

🎯 **Exam pattern:** "How do you exclude converted customers from retargeting in near-real-time?" → Answer: connect a CDP to your ad platforms for live audience sync.

---

## 📊 Attribution Windows — Reality vs. Reporting

An attribution window is the time period after an ad interaction during which a conversion is credited to that ad.

### The 4 Common Windows

| Window | Means |
|--------|-------|
| **7-day click** | Conversion within 7 days of clicking the ad is credited |
| **1-day view** | Conversion within 1 day of VIEWING the ad (without clicking) is credited |
| **7-day click + 1-day view** | Both above counted (current Meta default) |
| **28-day click + 1-day view** | The pre-iOS-14 standard |
| **View-through only** | Conversion within X days of viewing — overcredits |
| **Last-click** | The LAST ad clicked gets all credit |
| **Linear** | All ads in path get equal credit |
| **Data-driven** | ML model distributes credit |
| **Position-based (40/20/40)** | First touch + last touch get 40%, middle gets 20% |

### What To Use When

| Scenario | Best window |
|----------|-------------|
| DTC ecom on Meta | 7-day click + 1-day view (Meta default) |
| B2B SaaS with long sales cycle | 90-day click + 1-day view (LinkedIn) |
| YouTube brand campaign | 28-day click + view-through (longer for brand) |
| GA4 default | Data-driven (Google's ML model) |

### The 30-Touchpoint Reality

In 2026, the average DTC customer touches 25-30 brand interactions before buying (per [Wynter's 2024 buyer research](https://wynter.com/)). Single-touch attribution (last-click) credits one and ignores 29. This is why **MMM (Marketing Mix Modeling)** and **incrementality testing** are now standard for serious brands.

---

## 🛡️ Brand Safety & Invalid Traffic (IVT)

Programmatic's dirty secret: a lot of impressions go to fraud, bots, or sketchy sites.

### Definitions

| Term | Meaning |
|------|---------|
| **Brand Safety** | Ensuring ads don't appear next to harmful content (hate speech, violence, fake news) |
| **Brand Suitability** | More nuanced than safety — picking placements aligned with brand values |
| **Invalid Traffic (IVT)** | Bots + fraud + non-human traffic |
| **GIVT (General IVT)** | Common bots, easily detected |
| **SIVT (Sophisticated IVT)** | Advanced bots, click farms, hijacked clicks |
| **MFA (Made-For-Advertising)** | Low-quality sites built just to harvest ad spend |
| **CTV Fraud** | Especially bad on cheap CTV inventory — fake households, bot streaming |

### Tools to Protect Yourself

| Tool | Purpose |
|------|---------|
| **DoubleVerify** | Industry-standard verification — fraud, viewability, brand safety |
| **IAS (Integral Ad Science)** | Same category as DoubleVerify; both used by enterprise |
| **HUMAN (formerly White Ops)** | Bot detection specialist |
| **MOAT (Oracle)** | Attention metrics + viewability |

For SMB / DTC: you probably won't pay for these. But:

- Always use **block lists** in your DSPs (exclude known MFA sites)
- Use **inclusion lists** for premium sites (CNN, Wikipedia, NYT, etc.)
- Monitor **viewability** (% of ads visible for 1+ second per IAB standard)

### Block List Starter Set

In any DSP, block these categories minimum:

```
- Made-For-Advertising sites
- Adult content
- Hate speech / harmful content
- Sites with > 70% ad density
- Sites with viewability < 30%
- Geographic mismatches (e.g., non-US sites for US-targeted campaigns)
```

🚨 **Common mistake:** Trusting "open web" inventory blindly. ~20% of open-web display spend goes to MFA sites or fraud per [ANA's 2024 industry study](https://www.ana.net/). Always layer block lists.

---

## 📦 Retargeting Walkthrough — A Real Setup

**Scenario:** DTC apparel store, $1,500/month retargeting budget, mix of Meta + AdRoll.

### Audience Architecture

```
On your website (via Pixel + Insight Tag + AdRoll pixel):
  
  AUDIENCE A: All visitors (last 30 days)        — $300/mo
  AUDIENCE B: Product viewers (last 14 days)      — $400/mo
  AUDIENCE C: Add-to-Cart (last 14 days)          — $400/mo
  AUDIENCE D: Cart Abandoners (last 30 days)      — $400/mo
  EXCLUDE: Past purchasers (last 60 days)
```

### Creative By Audience

| Audience | Creative |
|----------|----------|
| A (visitors) | Brand-builder video, no discount |
| B (product viewers) | Same product viewed + benefit ("Free returns") |
| C (ATC) | Same product + social proof ("12K 5-star reviews") |
| D (cart abandoners) | DYNAMIC product ad + 15% off code (most aggressive) |

### Platform Split

```
Meta (Reels + Feed + Stories):  60% of budget
  → Audiences A, B, C, D
  → Frequency cap: 3/day, 12/week

AdRoll (Display banners across open web): 30% of budget
  → Audiences B, C, D only (display is mid/bottom funnel)
  → Frequency cap: 2/day, 8/week

Google Ads Display + PMax retargeting: 10% of budget
  → All audiences
  → Auto frequency capping
```

### Daily Monitoring (5 min)

```
☐ Spend on track for monthly budget?
☐ Frequency on any audience >5x in a day? → Pause, refresh creative
☐ Past purchasers being retargeted? → Check CDP sync; fix exclusion
☐ Any creative below 0.5% CTR? → Replace
```

---

## 📺 Connected TV (CTV) — The 2026 Frontier

Connected TV (Hulu, Disney+, Roku, Peacock with ads) is the fastest-growing programmatic channel. Per [Magna Global's 2025 forecast](https://www.magnaglobal.com/), CTV ad spend will pass linear TV by 2027.

### Why It Matters

- **Premium inventory**: real streaming services (not random websites)
- **Targeting**: same data as digital programmatic (your customer match, lookalikes)
- **Format**: 15-30 second non-skippable video on the big screen
- **Cost**: CPMs $25-$60 (premium but reaches valuable audiences)
- **Best DSPs**: The Trade Desk dominates CTV; DV360 strong; AdRoll has CTV inventory

### When to Use CTV

- You have brand-level budget ($50K+/qtr realistic minimum)
- You want premium awareness reach
- You have video creative ready
- You can wait 90+ days to see impact (CTV converts on long windows)

For SMB / DTC under $10K/mo total budget: skip CTV. Stick to Meta + Google + TikTok.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **DSP** | Demand-Side Platform — where advertisers buy programmatic inventory |
| **SSP** | Supply-Side Platform — where publishers sell their inventory |
| **Ad Exchange** | The marketplace connecting DSPs and SSPs (e.g., Google AdX) |
| **DV360** | Google's enterprise programmatic DSP |
| **TTD** | The Trade Desk — largest independent DSP |
| **AdRoll** | SMB-friendly retargeting platform |
| **Criteo** | DTC-focused dynamic product retargeting DSP |
| **CDP** | Customer Data Platform — unifies customer data and syncs to ad platforms |
| **Segment** | Most common CDP, owned by Twilio |
| **Frequency Cap** | Limit on times one user sees an ad |
| **Attribution Window** | Time period after ad interaction during which a conversion is credited |
| **MMM** | Marketing Mix Modeling — statistical model attributing sales to channels |
| **Incrementality Test** | A/B test that measures TRUE causal impact of a channel |
| **IVT** | Invalid Traffic — bots and fraud |
| **MFA** | Made-For-Advertising — low-quality sites built just to harvest ad spend |
| **DoubleVerify / IAS** | Industry-standard ad verification tools |
| **CTV** | Connected TV — programmatic streaming inventory (Hulu, Disney+, etc.) |
| **Header Bidding** | Publisher mechanism for fair simultaneous bidding |

---

## ⚠️ Common Mistakes

| Mistake | Why it hurts | Fix |
|---------|--------------|-----|
| **No frequency cap** | Brand association becomes "annoyance" | Always set caps (3/day, 12/week) |
| **No exclusion of past purchasers** | Burning budget on already-converted | CDP sync OR manual list update |
| **Same creative across funnel stages** | Cart abandoner gets the same ad as cold prospect | Stage-appropriate creative |
| **Trusting open-web inventory** | 20% goes to MFA / fraud | Block lists + inclusion lists |
| **Last-click attribution** | Credits 1 of 30 touchpoints | Use data-driven attribution or MMM |
| **CTV without budget** | $25 CPMs need scale | Skip CTV under $10K/mo |
| **No CDP for DTC** | 24-hour audience lag = wasted spend | Klaviyo at minimum |

---

## 🎓 Real Case Study: Criteo's "Dynamic Retargeting" Edge

Criteo's business model is built on one feature: **dynamic creative**. Instead of you uploading 20 banners, you upload your product catalog. Criteo's algorithm then creates personalized banners showing the EXACT product each user viewed — cropped from your catalog imagery, with their abandoned cart price.

ASOS, the fashion ecom giant, publicly shared at IAB Engage 2023 that Criteo's dynamic retargeting drove 38% of their retargeting conversions. They specifically credited Criteo's ability to show a UK user who viewed a £45 dress in size M the exact same dress + size + price on every site they visit afterward.

The lesson: in retargeting, **specificity wins**. A generic "Come back to our store" banner converts at 0.2%. A dynamic "Your size M dress in green is still in stock at £45" converts at 4-8%.

---

## ✅ Module 6 Summary

You now know:

- 🌐 What programmatic means (DSP → Exchange → SSP)
- 🛠️ The 4 main DSPs (DV360, TTD, AdRoll, Criteo) and when to use each
- 🔄 Retargeting audience taxonomy (visitors → ATC → cart abandoners → buyers)
- 🏭 CDP-fed retargeting and why it solves the lag problem
- 📊 Attribution windows and how they bias your data
- 🛡️ Brand safety, IVT, MFA — and how to block junk inventory
- 📦 A complete retargeting setup walkthrough
- 📺 When CTV is right (and when it's not)

**Next steps:**
1. 🎥 Watch the videos in `Videos.md`
2. ✏️ Take `Quiz.md`
3. 📋 Review `Cheat-Sheet.md`
4. ➡️ Move to [Module 7: CRO, Landing Pages & Personalization](../Module-07-CRO-Landing-Pages-Personalization/Reading.md)

---

## Discussion — Socratic prompts

Each prompt forces a real trade-off — argue from the frameworks in this module.

1. ANA's 2024 study estimated ~20% of open-web display spend hits Made-For-Advertising sites. A growth lead argues this is acceptable "system loss" if the remaining 80% performs. Build the case for both (a) accepting MFA leakage and chasing scale, and (b) hard-blocking via inclusion lists and accepting smaller reach. Where does the answer flip?
2. Casper's 3-stage retargeting funnel runs 14 days, then excludes users from retargeting. A team argues for extending it to 30 days because "we haven't lost them yet." Walk through the brand-perception and ROI math — when does length stop helping?
3. Last-click attribution still gets >60% of marketers' default reports despite the reading calling it broken. Defend the case that last-click is STILL the right model for some campaigns. When is it actually defensible, and when is it lazy?
4. CDPs add $1K-10K/month in subscription cost. For a DTC brand at $80K/month revenue, build the case for and against adopting a CDP this year vs waiting. What's the breakeven trigger?
5. Criteo's dynamic retargeting drove 38% of ASOS's retargeting conversions by showing the EXACT product abandoned. Argue when this creative specificity is creepy enough to harm brand trust — and what guardrails (frequency, decay, exclusions) prevent it.

---

> **Where this leads.**
> - Inside this course: Module 7 covers the landing pages that retargeting traffic lands on; Module 9 wires CDP audiences into HubSpot / Klaviyo automations for retargeting + email co-orchestration.
> - Cross-course: [14-AI-Marketing-Foundations Module 9](../../14-AI-Marketing-Foundations/Module-09-Analytics-Attribution/Reading.md) deepens attribution theory; [17-AI-Performance-Marketer](../../17-AI-Performance-Marketer/) covers MMM + incrementality testing.
> - Practice: Practice Exam 2 has ~12 questions from this module (DSPs, CDP, attribution windows, MFA, frequency caps, retargeting sequencing).

---

## 📚 Further Reading (Optional)

- 📖 [IAB Tech Lab — programmatic standards](https://iabtechlab.com/)
- 📖 [The Trade Desk Education Hub](https://www.thetradedesk.com/us/resource-desk) — free programmatic 101
- 📖 [Criteo Performance Marketer's Playbook](https://www.criteo.com/insights/)
- 📖 [ANA — Programmatic Media Supply Chain Transparency Study (2024)](https://www.ana.net/) — the report that exposed 20% MFA waste
- 📖 [Wynter buyer-research blog](https://wynter.com/blog) — buyer journey data
- 📖 [Common Thread Collective — Casper retargeting case study](https://commonthreadco.com/)
