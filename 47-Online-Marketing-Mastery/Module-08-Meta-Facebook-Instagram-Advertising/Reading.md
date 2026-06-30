# Module 08: Meta Advertising — Facebook & Instagram Campaigns 📣

> **Why this module matters:** Meta's advertising platform reaches 3.3 billion daily active users across Facebook and Instagram, making it the single most powerful demand-generation engine for DTC (Direct-to-Consumer) brands, B2C (Business-to-Consumer) retailers, and lead-gen businesses alike. Mastering the campaign structure, Pixel, Conversions API, and post-iOS 14 attribution is now a non-negotiable skill for any digital marketer operating in North America or Europe.

> **Prerequisites:** Module 07 (Social Media Strategy) or equivalent experience. Basic understanding of sales funnels, website analytics, and customer segmentation will help significantly.

---

## ☕ A Story: The French Fashion Brand That Found Its Silver Lining in Disaster

It was April 2021. Sophie Renard, Head of Digital at *Maison Lumière* — a Paris-based DTC fashion brand selling €120 linen dresses — stared at her Meta Ads dashboard and felt sick.

Three days ago, Apple had shipped iOS 14.5. Twenty-four hours later, her reported conversions had collapsed by 61%.

The numbers were brutal. Where she had been recording 340 purchases a day from Meta ads, she was now seeing 133. Her cost per acquisition had apparently tripled overnight — from €18 to €54. Her CFO (Chief Financial Officer) was in her inbox asking whether they should pause all Meta spend immediately and redirect to Google Shopping.

Sophie knew something was wrong, but she couldn't explain it *yet*. Her gut told her the dresses hadn't stopped selling. The issue was visibility, not reality.

She had 48 hours to figure it out before the board meeting.

Here is what she discovered, working with her analytics partner in Amsterdam:

**Problem 1: The Pixel was flying blind.** iOS 14.5 had introduced App Tracking Transparency (ATT) — a prompt that let iPhone users opt out of cross-app tracking. In France and the UK, opt-out rates were running above 60%. The Meta Pixel, which fires from the browser, could no longer track those users after they bounced off Instagram and landed on the website. Purchases made by opted-out users simply disappeared from her reporting.

**Problem 2: She had never set up the Conversions API.** The CAPI (sometimes called CAPI or "server-side tracking") fires from the *server*, not the browser, bypassing ATT entirely. Her developer had mentioned it twice. She had deprioritized it both times. That was a €40,000 mistake.

**Problem 3: Attribution window mismatch.** Her campaign had been set to a 28-day click attribution window — the old default. Post-iOS 14, Meta moved everyone to a 7-day click / 1-day view window. Purchases that used to be credited to her ads on day 8–28 were now orphaned.

The *good* news: Sophie pulled her Shopify backend data and found the dresses were still selling. That month, actual revenue was only 4% below the pre-iOS period. The *reported* drop was a measurement illusion.

She rebuilt the stack in 72 hours:
- Installed Conversions API via Shopify's native integration (no developer needed)
- Verified her domain in Meta Business Manager
- Configured Aggregated Event Measurement — prioritizing Purchase, AddToCart, InitiateCheckout, ViewContent as her four events
- Switched attribution to 7-day click / 1-day view to match Meta's model

Within two weeks, reported conversions recovered to 89% of pre-iOS levels. More importantly, she now had a *dual-signal* system: Pixel data plus CAPI data deduplicated by Meta, giving a more accurate picture than she had ever had.

She also found something unexpected: her actual ROAS (Return on Ad Spend) was **higher** than reported pre-iOS. The Pixel had been *over-crediting* Meta with purchases that also appeared in Google Analytics via organic search. The real Meta ROAS was 4.2×, not 3.1× as she had thought.

The lesson: iOS 14.5 didn't kill Meta advertising. It killed *sloppy* Meta advertising. For marketers who rebuilt their measurement stack, it was actually a competitive advantage — because half their competitors paused spend and never came back.

This module teaches you to build it right from the start.

---

## Section 1: The Meta Ads Architecture — Campaign / Ad Set / Ad

Think of Meta Ads Manager like a **Russian nesting doll** (matryoshka) with exactly three layers. Each layer controls a different thing, and confusing them is the most common beginner mistake.

### The Three-Level Structure

| Layer | What You Control | Key Settings |
|-------|-----------------|--------------|
| **Campaign** | The *objective* — what Meta's algorithm optimizes for | Objective (Awareness/Traffic/Engagement/Leads/Sales), Campaign Budget Optimization (CBO) on/off, Advantage Campaign Budget |
| **Ad Set** | The *audience and delivery* — who sees the ad, when, where, and how much you spend | Audience targeting, placements, schedule, budget (if not CBO), bid strategy, optimization event |
| **Ad** | The *creative* — the actual ad users see | Format (image/video/carousel/collection), copy, headline, CTA (Call to Action) button, URL, UTM parameters |

**Memory trick:** Think **C**ampaign = **C**ause (the WHY), **A**d Set = **A**udience (the WHO), **A**d = **A**rt (the WHAT).

### The Six Campaign Objectives (2024 Structure)

Meta restructured objectives in 2022 from the old TOFU/MOFU/BOFU model to six clean objectives aligned with business outcomes:

| Objective | Use When | What Meta Optimizes |
|-----------|----------|---------------------|
| **Awareness** | Brand recall, reach | Impressions, ad recall lift |
| **Traffic** | Drive visitors to website/app | Link clicks, landing page views |
| **Engagement** | Grow followers, video views, messages | Post interactions, video ThruPlays |
| **Leads** | Collect contact info | Lead form submissions, website conversions |
| **App Promotion** | Drive app installs/events | App installs, in-app conversions |
| **Sales** | Drive purchases or catalogue sales | Conversions, ROAS |

> **Exam power phrase:** "The correct objective for an e-commerce store trying to drive online purchases is Sales, not Traffic — Traffic optimizes for clicks, not conversions."

### Campaign Budget Optimization (CBO) vs Ad Set Budget (ABO)

- **CBO (now called Advantage Campaign Budget):** Meta controls budget distribution across ad sets automatically. Better for accounts with proven creatives and clear winning audiences. Less control for testing.
- **ABO:** You set individual budgets per ad set. Better for structured A/B testing and when you want to protect a specific audience from being starved by the algorithm.

**When to use which:**
- Testing phase → ABO (equal budget per variable)
- Scaling phase → CBO (let Meta find the best performers)

---

## Section 2: The Pixel, Conversions API, and Post-iOS 14 Measurement

### The Meta Pixel

The Meta Pixel is a snippet of JavaScript code placed on your website. When someone visits a page, it fires an event to Meta, linking that user's browser to their Meta profile. This is what powers:

- Custom audiences (website visitors)
- Conversion tracking
- Attribution (which ad led to a purchase)
- Retargeting

**Standard Events you must know for the exam:**

| Event Name | Fires When | Typical Use |
|------------|-----------|-------------|
| `ViewContent` | Product/page viewed | TOFU signal |
| `AddToCart` | Item added to cart | MOFU signal |
| `InitiateCheckout` | Checkout started | MOFU/BOFU |
| `Purchase` | Order completed | Primary conversion event |
| `Lead` | Form submitted | Lead gen |
| `CompleteRegistration` | Signup completed | SaaS/Apps |
| `Search` | On-site search used | Intent signal |

### Why the Pixel Alone Is No Longer Enough

After iOS 14.5 (April 2021), Apple's ATT prompt allowed iPhone users to opt out of cross-app tracking. In Europe, opt-out rates run 55–70% (industry estimates). Browser privacy settings (Safari ITP, Firefox ETP) and ad blockers compound this further.

Result: **Browser-based Pixel data alone under-counts conversions by 20–60%** depending on your audience (higher opt-out in Europe, especially Germany and France; lower in North America but still significant).

### The Conversions API (CAPI) — The Fix

The Conversions API sends event data directly from your **server** to Meta, bypassing the browser entirely. It is not affected by ATT, ad blockers, or browser privacy settings.

**CAPI key concepts:**

| Concept | Explanation |
|---------|-------------|
| **Event deduplication** | When both Pixel and CAPI fire, Meta uses an `event_id` parameter to deduplicate — avoiding double-counting |
| **Event match quality (EMQ)** | How well CAPI events match to Meta profiles. Higher EMQ = better attribution. Pass as many customer parameters as possible (email, phone, name, zip code — hashed) |
| **Server-side vs. Pixel** | CAPI fires from your server (Shopify, WooCommerce, GTM Server-Side) rather than the user's browser |

**GDPR (General Data Protection Regulation) note for EU campaigns:** Under GDPR (and the UK GDPR post-Brexit), sending hashed customer data to Meta requires a valid legal basis — typically **consent** via a compliant cookie consent banner. The Conversions API does NOT exempt you from GDPR. If a user has not consented to marketing cookies/tracking, you should not send their data to Meta, even server-side. Meta's EU Data Transfer mechanism is covered by SCCs (Standard Contractual Clauses).

> **Common trap:** "CAPI is GDPR-compliant by default." WRONG. CAPI is a tracking mechanism, not a compliance shortcut. You still need user consent in the EU.

### Aggregated Event Measurement (AEM)

After iOS 14.5, Meta introduced AEM as a solution for tracking conversions from Apple devices within Apple's privacy framework. Key facts:

- Domain must be verified in Meta Business Manager
- Maximum 8 conversion events per domain, ranked by priority
- Only the **highest priority event** that fires gets attributed per user per conversion
- Statistical modeling fills in gaps for opted-out users (Meta uses ML to estimate conversions it cannot directly measure)

**AEM Event Priority (recommended order for e-commerce):**
1. Purchase (highest priority)
2. AddToCart
3. InitiateCheckout
4. ViewContent
5. Lead (if applicable)

---

## Section 3: Audiences — Custom, Lookalike, and Advantage+

### Custom Audiences

Custom audiences let you target people who have already interacted with your brand. There are four main source types:

| Custom Audience Type | Source | EU/GDPR Note |
|---------------------|--------|--------------|
| **Website Visitors** | Meta Pixel events | Requires cookie consent in EU |
| **Customer List** | Upload email/phone (hashed) | Requires consent to marketing communications |
| **Video Viewers** | People who watched your videos on Meta | Consent-free (Meta first-party) |
| **Page/Profile Engagers** | People who engaged with your FB/IG page | Consent-free (Meta first-party) |

**Retention windows:** Website custom audiences can be built on windows from 1–180 days. Standard practice:
- Hot audience: Last 30 days
- Warm audience: 31–90 days
- Cold retargeting: 91–180 days

### Lookalike Audiences

Lookalike audiences let Meta find new users who resemble your custom audience (the "seed" audience).

**How they work:** Meta analyzes the demographic, behavioral, and interest signals of your seed audience, then finds people in your target country/region who share those patterns.

**Lookalike size ranges (UK/EU example):**
- 1% LAL = smallest, most similar (~500K–1M people in UK)
- 5% LAL = broader, more volume
- 10% LAL = largest, least similar

**Exam power phrase:** "A 1% Lookalike Audience based on a Purchase custom audience of at least 1,000 customers is typically the highest-performing cold prospecting audience in Meta Ads."

**Minimum seed audience size:** 100 people (Meta's minimum), but 1,000+ is strongly recommended for quality signal.

### Advantage+ Audience (formerly Broad Targeting)

Meta's AI can now find audiences automatically with minimal targeting constraints. When you use **Advantage+ Audience** (formerly "Detailed Targeting Expansion"), you give Meta a suggested audience and it is free to expand beyond it. For many advertisers, this outperforms narrow interest targeting.

### Advantage+ Shopping Campaigns (ASC)

Launched in 2022 and significantly expanded in 2023–2024, Advantage+ Shopping Campaigns are Meta's fully automated campaign type for e-commerce. Key characteristics:

- **Single-campaign structure:** Combines prospecting and retargeting audiences in one campaign
- **AI-driven creative optimization:** Meta automatically tests and rotates creative assets
- **Simplified setup:** Fewer manual controls — Meta controls audience, placement, bidding
- **Budget allocation:** Meta controls how much goes to existing customers vs. new prospecting

**When to use ASC vs. standard campaigns:**
- ASC: Proven product, proven creative, looking to scale
- Standard campaigns: Testing phase, new product launch, need audience-level control

---

## Section 4: Creative Formats, Fatigue, and A/B Testing

### Ad Formats

| Format | Best Use Case | Specs to Know |
|--------|--------------|---------------|
| **Single Image** | Simple offer, strong visual | 1:1 or 4:5 ratio, 1080×1080 min |
| **Single Video** | Storytelling, demos, UGC (User-Generated Content) | 4:5 for Feed, 9:16 for Stories/Reels |
| **Carousel** | Multiple products, step-by-step, features | 2–10 cards, each 1:1 |
| **Collection** | E-commerce product discovery | Requires catalogue |
| **Reels Ads** | Awareness, younger demographics | 9:16 full-screen, ≤60 sec |
| **Stories Ads** | Impulse-driven, ephemeral offers | 9:16 full-screen |
| **Dynamic Ads** | Automated retargeting from catalogue | Requires Meta catalogue setup |

### Creative Fatigue

Creative fatigue occurs when an audience has seen the same ad so many times that engagement drops and costs rise. Signs:

- Frequency > 3.0 in a 7-day window (industry benchmark)
- CPM (Cost Per Mille) rising week-over-week without audience size change
- CTR (Click-Through Rate) dropping below 0.5%
- Comment section filling with "I keep seeing this"

**Managing fatigue:**
1. Rotate creatives every 2–4 weeks (sooner for small audiences)
2. Use multiple ad variations per ad set (3–5 recommended)
3. Expand audiences to reduce frequency
4. Use DCO (Dynamic Creative Optimization) to auto-rotate
5. Archive, don't delete fatigued ads — preserve social proof (likes/comments)

### A/B Testing in Meta Ads

Meta's built-in A/B test (also called "Experiment") lets you test one variable at a time:

- Creative (image vs. video, different hooks, different CTAs)
- Audience (custom audience vs. lookalike)
- Placement (automatic vs. manual)
- Campaign objective

**Exam note:** For a valid A/B test, only ONE variable should differ between the two ad sets. Meta automatically splits the audience to prevent overlap.

**Minimum test duration:** 7 days (Meta recommendation). Less than 7 days = statistically unreliable.

---

## Section 5: Attribution Windows, Reporting, and GDPR Compliance

### Attribution Windows

| Window | What It Means | When to Use |
|--------|--------------|-------------|
| **1-day click** | Only count conversions within 24h of clicking | Short purchase cycles, impulse buys |
| **7-day click** | Count conversions within 7 days of clicking | Standard e-commerce (recommended) |
| **1-day view** | Count conversions within 24h of just viewing (not clicking) the ad | Brand campaigns, awareness |
| **7-day click + 1-day view** | Meta's current default | Balanced attribution |

**North America vs. Europe context:** US advertisers often use 7-day click as the default. EU advertisers should be aware that longer windows inflate attribution significantly due to multi-touch journeys, and that GDPR restrictions mean fewer tracked users in the first place.

### Key Metrics to Know

| Metric | Formula | Benchmark (Industry estimate) |
|--------|---------|-------------------------------|
| **CPC (Cost Per Click)** | Cost / Clicks | €0.50–€1.50 (EU), $0.50–$2.00 (US) |
| **CPM** | Cost / 1,000 Impressions | €5–€15 (EU), $8–$25 (US) |
| **CTR** | Clicks / Impressions × 100 | 0.5–2% is typical |
| **ROAS** | Revenue / Ad Spend | 2–4× breakeven for most DTC |
| **Frequency** | Impressions / Reach | Keep below 3.0 for cold audiences |

### GDPR Compliance Checklist for EU Meta Campaigns

- Valid cookie consent banner on website (IAB TCF 2.0 or equivalent)
- Privacy Policy updated to disclose Meta Pixel use
- Legitimate interest assessment OR explicit consent for customer list uploads
- Data Processing Agreement (DPA) signed with Meta
- Right to erasure: process requests within 30 days (propagate to Meta custom audiences)
- Standard Contractual Clauses (SCCs) cover EU-US data transfers via Meta
- **Netherlands/Germany:** Higher scrutiny — consider consent mode and server-side CAPI only for consented users

---

## ⚠️ Anti-Patterns to Avoid

1. **Running Traffic objective for e-commerce purchases.** Traffic optimizes for cheap clicks, not buyers. Always use Sales/Conversions if you want purchases. You will get thousands of clicks from users who never intended to buy.

2. **Launching ads without the Pixel AND CAPI installed.** Running campaigns without complete tracking is like driving with your eyes closed. Meta cannot optimize for conversions it cannot see.

3. **Setting a daily budget below $10–$20 per ad set.** Meta's algorithm needs data (50 conversions per week minimum) to exit the "learning phase." Budgets too low keep you permanently in learning, with volatile results.

4. **Using interest targeting as your main targeting strategy in 2025.** Interest targeting has degraded significantly in accuracy since iOS 14. Advantage+ Audience, Custom Audiences, and Lookalikes now outperform interest stacks for most advertisers.

5. **Ignoring creative fatigue until ROAS collapses.** By the time ROAS drops dramatically, the damage is done. Monitor frequency weekly and rotate creatives proactively.

6. **Deleting instead of archiving ad sets.** Deletion loses social proof (likes, shares, comments accumulated on an ad). Archive instead to preserve proof and allow reactivation.

7. **Using the wrong attribution window for your decision-making.** If you optimize using a 1-day click window but your customers typically take 5 days to convert, you will under-bid and under-spend. Match the window to your actual purchase cycle.

---

## 🎯 Key Formulas / Frameworks (Memorize These)

### The C-A-A Rule (Campaign → Ad Set → Ad)
- **C**ampaign: Choose the objective (the *why*)
- **A**d Set: Set the audience and budget (the *who* and *how much*)
- **A**d: Create the creative (the *what*)

### The CAPI Deduplication Formula
When both Pixel and CAPI fire for the same event, Meta uses:
`event_id` + `event_time` + `user_data` to identify duplicates → only one conversion is counted.

### The Learning Phase Rule
**50 conversions per ad set per week** = exit learning phase. Below this, results are unstable.
- If CPM is high and results are volatile → you are likely in perpetual learning
- Solution: Consolidate ad sets, raise budget, or use a higher-funnel optimization event (AddToCart instead of Purchase)

### The Lookalike Sizing Rule
**Seed audience for Lookalike → minimum 1,000 people, ideally 5,000–50,000**
- Too small (<100) = Meta rejects the request
- Too large (>200,000) = the signal gets diluted and lookalike loses quality

### The Frequency Fatigue Formula
`Frequency = Impressions ÷ Reach`
- Frequency >3.0 in 7 days for cold audiences = rotate creatives
- Frequency >5.0 for retargeting audiences = expand audience or pause

### Key Attribution Windows
- **7-day click / 1-day view** = Meta default (use this unless you have a specific reason not to)
- **1-day click** = Flash sales, impulse products (food delivery, event tickets)
- **28-day click** = Pre-iOS 14 (no longer available)

### The AEM Priority Pyramid (Top = Highest Priority)
```
     [Purchase]
   [AddToCart]
 [InitiateCheckout]
    [ViewContent]
      [Lead]
```
Only the highest-firing event per user is attributed under AEM's 8-event cap.

---

## ✅ Self-Check Before the Quiz

Answer these from memory — no looking back:

1. What are the three levels of the Meta Ads Manager structure, and what does each one control?

2. After iOS 14.5, why did many advertisers see a large drop in reported Meta conversions — and what is the technical solution?

3. What is Aggregated Event Measurement, and how many conversion events can you configure per domain?

4. What is the difference between a Custom Audience and a Lookalike Audience? Give one real example of each.

5. A French DTC brand running Meta ads to EU users wants to upload a customer email list. What GDPR requirement must be met before doing this?

➡️ Ready? Take the [Quiz.md](./Quiz.md)
