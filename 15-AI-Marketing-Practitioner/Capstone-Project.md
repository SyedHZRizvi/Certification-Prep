# Capstone Project — AI Digital Marketing Practitioner

> **Format:** Self-directed; 6-12 weeks; ~50-70 hours of work
> **Deliverables:** 6 artifacts + a blended scorecard
> **Scoring:** Use the rubric below to self-grade or peer-review with a performance-marketing colleague

---

## Brief

You have just been hired as **Senior Performance Marketer at Tidewater & Co.**, a $20M DTC e-commerce brand selling premium home-fragrance products (candles, diffusers, room sprays) headquartered in Brooklyn. Tidewater sells direct via their Shopify Plus store and via a 1,200-door retail wholesale program. The CMO is also the COO. The brand spends **~$540K/month** across Google + Meta + TikTok + a small influencer program. Six months ago, CAC was $42 against a $96 AOV — healthy. **This quarter, CAC has climbed to $58, AOV is flat, and contribution margin has eroded from 38% to 24%.** The CEO has handed you a clear mandate:

> "90 days. Bring blended CAC down to $44 — a 25% reduction — without dropping revenue. Use AI-augmented Google Ads, Meta Ads, and creative production. I'll give you the budget and the freedom; bring me the numbers."

**The situation you've walked into.** The Google Ads account is one $180K/month Performance Max campaign with no asset-group structure and 96% spend on Smart Shopping legacy ad groups. Meta Ads is running 14 Advantage+ Shopping Campaigns from the previous agency with no creative-rotation discipline — three of them have served the same Reels creative for 11 weeks. TikTok Ads is a $40K/month Spark Ads program managed by a 23-year-old contractor who is "vibes-driven." Email is on Klaviyo with 4 flows (Welcome, Abandoned Cart, Browse Abandonment, Post-Purchase) that haven't been touched in 9 months. Landing pages are theme-default Shopify product pages with no above-the-fold CRO. GA4 is set up, but attribution is fully last-click. The previous agency was just terminated; you have a $200/hour freelance bench you can pull from, but no in-house creative team.

You have 90 days. The board reviews on Day 91.

---

## Deliverables (6 artifacts)

### 1. Full-Funnel Attribution Audit (Modules 4, 7, 9)

Write a **3-5 page attribution audit** of Tidewater's current setup. It must include:
- **Current state** — what data is being captured where (GA4, Meta Pixel + CAPI status, TikTok Pixel, Klaviyo, Triple Whale if installed); identify every gap
- **Last-click vs data-driven attribution comparison** — pull the last 90 days from GA4 in both models, quantify the per-channel revenue delta
- **Incrementality hypothesis list** — for the top 5 channels, write a 1-paragraph hypothesis on incremental vs cannibalized revenue (e.g., "We believe branded Search is 70% cannibalized by organic; testable via a geo-holdout in Week 4")
- **iOS 14.5 + Consent Mode v2 readiness** — what's wired, what's not, and the 30-day fix plan
- **One contrarian view** — Northbeam, Triple Whale, Hyros, and Rockerbox all sell different "post-iOS attribution truth" — argue which one Tidewater should pilot in days 60-90 and why

**Format:** Markdown or Google Doc, 1,500-2,500 words. Cite Avinash Kaushik's *Web Analytics 2.0* (2009) chapter on multi-touch attribution at minimum.

### 2. Google Ads Restructure — PMax + Search Hybrid (Modules 2, 3)

The current $180K/month Google Ads program is structurally broken. Design the new architecture:
- **Campaign architecture** — which campaigns split out of the single PMax (Brand Search, Non-Brand Search, Shopping with manual feed control, PMax for new-customer acquisition only, YouTube)
- **For each new campaign**: budget allocation (must sum to $180K), bidding strategy with justification, target ROAS or target CPA, asset-group structure (for PMax), keyword themes
- **New-customer-acquisition exclusion logic** — how you'll use Customer Acquisition goals + audience exclusions to push PMax toward prospecting only
- **Brand-exclusion list** — branded queries you'll exclude from PMax to prevent cannibalization
- **The 14-day kill criteria** — at what point does each new campaign get killed or scaled
- **AI-creative variant strategy** — how Pencil / AdCreative.ai / Meta Advantage+ Creative + Claude/ChatGPT will feed asset rotation

**Format:** Spreadsheet (campaign × budget × bidding × target × kill criteria) + 2-page narrative.

### 3. Meta Ads Creative-Rotation Strategy with AI Variants (Modules 4, 8)

The Meta program's biggest single failure is creative fatigue. Design:
- **Creative testing matrix** — 5 hook archetypes × 3 visual styles × 2 offer angles = 30 variants per testing cycle
- **AI-generated variant pipeline** — exact stack: Claude + Midjourney v7 + Runway Gen-4 + ElevenLabs + Captions.ai (or similar) with a Make.com orchestration. Document the prompt templates.
- **DCT (Dynamic Creative Testing) discipline** — testing budget ($30K of the $200K Meta budget reserved for testing), promotion-to-evergreen criteria (3-day CTR > 1.8% AND 7-day ROAS > 1.5x at $5K spend)
- **Creative-fatigue early-warning system** — frequency thresholds, CTR-decay thresholds, the weekly creative-refresh cadence
- **UGC + creator-led variant integration** — how you'll source, license, and edit UGC from your top customers; the prompt for AI-generated voiceover variants
- **Advantage+ Shopping vs manual ASC+ decision** — which products go to Advantage+ Shopping Campaigns vs traditional ASC with manual targeting

**Format:** 1-page testing-matrix template + 3-page strategy narrative + a 1-page prompt template for the AI variant pipeline.

### 4. Conversion-Rate Optimization Roadmap (Module 7)

The Shopify product pages are theme-default. Design a 90-day CRO program:
- **Top 5 pages by traffic** with current CVR baseline (assume PDP: 2.1%, Cart: 38%, Checkout: 71%, Collection: 1.2%, Homepage: 0.9%)
- **For each page**: the 3 highest-leverage A/B tests, the hypothesis, the expected lift band, the required sample size (use Optimizely's or VWO's sample-size calculator), the design freelancer-hours budget
- **Heatmap + session-recording program** — Hotjar or Microsoft Clarity (free) setup, the 5 specific user-flow questions you'll answer
- **AI-personalization layer** — how Mutiny / Dynamic Yield / Optimizely will personalize first-time-visitor vs returning-visitor experiences
- **PDP-to-PDP cross-sell logic** — how you'll personalize the "frequently bought together" section using Klaviyo predictive analytics or a similar recsys

**Format:** 1-page test calendar (12 weeks × 2 tests/week) + 3-page narrative on test prioritization.

### 5. Email Retention Strategy (Module 9)

Tidewater's Klaviyo flows are 9 months stale. Design:
- **Welcome flow redesign** — 7-email sequence with AI-generated subject-line variants (3 per email), predictive send time enabled, dynamic content blocks
- **Abandoned cart and browse abandonment redesign** — multi-channel (email + SMS via Klaviyo SMS or Postscript) with the 4 timing tests
- **Win-back flow** (new) — for customers who haven't purchased in 90+ days; targeting the ~12K customers in this cohort
- **Post-purchase + review-request + UGC-request flow** — design the touchpoint cadence and the AI prompt that pulls high-quality review content for ad variant repurposing
- **Segmentation strategy** — 8 RFM-style segments + the predictive CLV segment (Klaviyo's built-in predictive analytics)
- **The "5-email overlap test"** — the rule you'll use to prevent customers from getting more than 5 emails in any 14-day window

**Format:** 1-page flow architecture diagram + 3-page narrative + a 1-page subject-line A/B test backlog.

### 6. Blended Scorecard + Weekly Experiment Cadence (Modules 1, 9, 10)

Design the **operational rhythm** that runs the 90 days:
- **Daily metrics dashboard** (Looker Studio mockup): blended CAC, blended ROAS, day-over-day delta, anomalies. 5 metrics maximum.
- **Weekly experiment scorecard** — for every active test (Google + Meta + TikTok + CRO + Email), a row showing hypothesis, budget, current vs target, decision (continue / kill / scale)
- **The "weekly war room" agenda** — 60-minute meeting, Monday 10am, agenda with timeboxes. Who attends, who decides what.
- **Bi-weekly executive readout template** — 1 slide per channel, the metrics, the next-2-week plan, the one risk
- **AI-assisted reporting pipeline** — how Claude or ChatGPT will be wired into the dashboard via API (the Make.com or n8n scenario, the prompt template, the human-review checkpoint)

**Format:** 1-page dashboard wireframe + 1-page weekly scorecard template + 2-page rhythm narrative.

---

## Rubric (scored out of 100)

| Criterion | Points | Excellent (90-100%) | Acceptable (70-89%) | Below bar (<70%) |
|-----------|--------|---------------------|---------------------|------------------|
| **Attribution audit** | 16 | All elements + incrementality hypotheses + iOS 14.5 fix plan + vendor recommendation with rationale | Most elements present, last-click vs DDA delta thin | Generic recap without quantified per-channel revenue deltas |
| **Google Ads restructure** | 18 | Full architecture, budget allocation, bidding rationale, kill criteria, brand-exclusion logic, AI-creative pipeline | Most elements present, kill criteria weak | Architecture without kill criteria or budget allocation that doesn't sum |
| **Meta creative-rotation** | 18 | 5×3×2 matrix + AI variant pipeline + DCT discipline + fatigue early-warning + UGC integration | Most elements present, AI pipeline shallow | No fatigue warning system or no AI variant pipeline |
| **CRO roadmap** | 14 | 5 pages × 3 tests + sample-size math + personalization layer + heatmap program | Most elements present, sample-size math missing | Top 5 pages without sample-size justification or no test prioritization |
| **Email retention** | 14 | All 4 flows redesigned + segmentation + overlap test + AI subject-line backlog | Most flows redesigned, overlap rule missing | Single-flow redesign or no segmentation framework |
| **Blended scorecard** | 14 | Dashboard + weekly scorecard + war-room agenda + exec readout template + AI reporting pipeline | Most elements present, AI reporting weak | Single dashboard without operational rhythm |
| **Overall integration** | 6 | All deliverables interlocked, blended CAC math defensible end-to-end | Most deliverables interlocked, blended-CAC math thin | Deliverables stand alone without integration |

**Pass mark:** 75/100 overall, with no individual criterion below 50%.

---

## Suggested Timeline (12 weeks)

- **Week 1:** Deliverable 1 (Attribution audit). Get the diagnosis right before prescribing anything.
- **Week 2:** Deliverable 2 (Google Ads restructure) launches. Audit-day → restructure-day in 7 days.
- **Week 3:** Deliverable 3 (Meta creative pipeline) and Deliverable 5 (Email flows) begin. Both touch the AI tool stack hard — Week 3 is the "AI integration week".
- **Weeks 4-5:** First two waves of CRO tests (Deliverable 4) ship. First Meta creative-fatigue cycle hits its 2-week assessment.
- **Week 6:** Mid-flight review. Blended CAC should already be trending down by Day 42 if Google + Meta restructures are working.
- **Weeks 7-9:** Optimization sprint. Kill 2-3 worst-performing tests per channel. Double-down on the 2-3 winners.
- **Weeks 10-11:** The incrementality holdout test (from Deliverable 1) runs.
- **Week 12:** Board readout. Update Deliverable 6 with the 90-day actuals vs the $44 CAC target. Self-grade the rubric.

If you have only 6 weeks (compressed mode): combine Weeks 4-5 with 7-9 and skip the formal incrementality holdout (defer to a Q2 follow-up). Do not skip Deliverable 1 (the audit) — every subsequent deliverable depends on it.

---

## What "submission" looks like

This is a portfolio you build for yourself. Save as:
```
/AIMarketing-Practitioner-Capstone-Tidewater/
   01-attribution-audit.pdf
   02-google-ads-restructure.xlsx
   03-meta-creative-strategy.pdf
   04-cro-roadmap.xlsx
   05-email-retention-strategy.pdf
   06-blended-scorecard.xlsx
   README.md  (1-page summary of approach + self-score + blended CAC delta)
```

Self-grading: complete the rubric above honestly. If you're below 75, identify the 2-3 weakest deliverables and redo them. Peer review (a performance-marketing colleague or a paid-media community) is even better.

---

## Optional Stretch Goals

If you want to push beyond pass:
1. **Geo-holdout incrementality test.** Design a proper geo-holdout (5-10% of US market held out from Meta for 4 weeks) and document the regression-discontinuity methodology you'd use to measure incremental revenue. Reference Kohavi, Tang & Xu — *Trustworthy Online Controlled Experiments* (Cambridge, 2020).
2. **AI-generated creative at scale.** Ship 50 actual ad creatives (text + image + 15-second video) through the AI pipeline and document the cost-per-creative comparison vs human production.
3. **CLV-based ad-bidding integration.** Wire Klaviyo predictive CLV into the Google + Meta bidding signals via the value-rules feature. Document the lift hypothesis.
4. **Make.com workflow library.** Build and screenshot 8 production Make.com scenarios you'd run for Tidewater (review aggregation, weekly creative briefs, daily anomaly alerts, etc.).
5. **AI-personalized PDP.** Wire Mutiny or Dynamic Yield to personalize the top-1 PDP variant for the top 3 paid-traffic sources, and document the lift hypothesis with sample-size math.

---

## Why this Capstone Matters

Practitioner-level performance marketing is judged on one thing: the numbers move. This capstone forces you to integrate every paid-media + CRO + email + measurement module into a single $1.8M-quarterly-budget transformation that an actual CMO would actually run. If you can defend each deliverable to a peer or a paid-media director, you will pass Google Ads Search, Display, Video, Measurement, Meta MBP, and TikTok Ads Manager Beginner exams comfortably — and more importantly, you'll be ready for the Senior Performance Marketer role this capstone simulates.

Good luck. The numbers move when you move them. 💪
