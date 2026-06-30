# 📋 Module 08 Cheat Sheet: Meta Advertising — Facebook & Instagram Campaigns

> One page. Print it. Review before every campaign launch and every exam.

---

## 1. Campaign Structure — The C-A-A Rule

| Level | Controls | Key Settings |
|-------|----------|--------------|
| **Campaign** | *The WHY* — objective | Objective, CBO on/off |
| **Ad Set** | *The WHO* — audience + budget | Targeting, placements, budget, bid, schedule |
| **Ad** | *The WHAT* — creative | Format, copy, image/video, CTA (Call to Action), URL |

**Memory:** C = Cause (why) · A = Audience (who) · A = Art (what)

---

## 2. Campaign Objectives — Quick Reference

| Objective | Optimizes For | Use When |
|-----------|--------------|----------|
| Awareness | Impressions, ad recall | Brand launch, reach goals |
| Traffic | Link clicks, LPVs | Blog posts, top-funnel |
| Engagement | Reactions, video views | Community building |
| Leads | Form fills, lead events | B2B (Business-to-Business), lead gen |
| App Promotion | Installs, in-app events | Mobile apps |
| **Sales** | **Conversions, ROAS (Return on Ad Spend)** | **E-commerce (use this)** |

> **Trap:** Never use Traffic to drive purchases — it optimizes for clickers, not buyers.

---

## 3. Pixel Events — Must Memorize

| Event | Fires When | Funnel Stage |
|-------|-----------|--------------|
| `ViewContent` | Product page viewed | TOFU |
| `AddToCart` | Item in cart | MOFU |
| `InitiateCheckout` | Checkout started | MOFU/BOFU |
| **`Purchase`** | **Order complete** | **BOFU (primary)** |
| `Lead` | Form submitted | BOFU (lead gen) |
| `CompleteRegistration` | Account created | BOFU (SaaS) |

---

## 4. Pixel vs. Conversions API — Side by Side

| Feature | Meta Pixel | Conversions API (CAPI) |
|---------|------------|------------------------|
| Fires from | User's browser | Advertiser's server |
| Blocked by ATT? | YES | NO |
| Blocked by ad blockers? | YES | NO |
| GDPR (General Data Protection Regulation) applies? | YES | YES |
| Deduplication needed? | N/A | YES — via `event_id` |
| EU opt-out impact | High (55–70% signal loss) | Minimal |

**Gold standard:** Use BOTH Pixel + CAPI simultaneously, with `event_id` deduplication.

---

## 5. iOS 14.5 + Aggregated Event Measurement (AEM) Quick Facts

- Apple ATT (April 2021) = users can opt out of cross-app tracking
- EU opt-out rate: 55–70% (industry estimate)
- Fix: Install CAPI + verify domain + configure AEM
- **AEM cap: 8 events per domain, ranked by priority**
- Only the highest-priority event that fires per user is attributed
- Statistical modeling fills gaps for opted-out users

**AEM Priority Order (e-commerce):**
```
1. Purchase          ← highest priority
2. AddToCart
3. InitiateCheckout
4. ViewContent
5. Lead              ← lower priority
```

---

## 6. Audience Types — Quick Reference

| Type | Source | Cold/Warm/Hot |
|------|--------|---------------|
| **Website Custom Audience** | Pixel events | Warm/Hot |
| **Customer List** | Email/phone upload | Hot |
| **Video Viewers** | Meta video views | Warm |
| **Page Engagers** | FB/IG page engagement | Warm |
| **Lookalike 1%** | Based on seed audience | Cold |
| **Lookalike 5–10%** | Broader LAL | Cold |
| **Advantage+ Audience** | Meta AI targeting | Cold |

**Lookalike rules:**
- Minimum seed: 100 people (recommended: 1,000–50,000)
- 1% = most similar, smallest; 10% = broadest, largest
- Best seed = Purchase custom audience of 1,000+ buyers

---

## 7. Advantage+ Shopping Campaigns (ASC) — Key Facts

| Feature | Detail |
|---------|--------|
| What it is | Fully AI-automated campaign combining prospecting + retargeting |
| Best for | Proven products, scaling phase, catalogue-based retailers |
| Not best for | Testing phase, new product launches, tight audience controls |
| Budget control | Meta controls split between new vs. existing customers |
| Creative | Provide multiple assets; Meta tests and optimizes automatically |

**vs. Standard campaigns:** Standard = more control for testing. ASC = less control, more AI leverage for scaling.

---

## 8. Creative Formats Reference

| Format | Ratio | Best Placement | Use For |
|--------|-------|---------------|---------|
| Single Image | 1:1 or 4:5 | Feed | Simple offers, product shots |
| Single Video | 4:5 (Feed), 9:16 (Reels) | Feed, Reels | Storytelling, demos |
| Carousel | 1:1 per card | Feed | Multiple products, steps |
| Stories | 9:16 | Stories | Impulse, flash offers |
| Reels Ad | 9:16 | Reels | Awareness, younger audience |
| Collection | 1:1 hero + catalogue | Feed (mobile) | E-commerce discovery |
| Dynamic/DPA | Auto | Feed | Retargeting from catalogue |

---

## 9. Key Metrics and Benchmarks

| Metric | Formula | Typical Range |
|--------|---------|---------------|
| CPC (Cost Per Click) | Cost ÷ Clicks | €0.50–€1.50 (EU) / $0.50–$2.00 (US) |
| CPM (Cost Per Mille) | Cost ÷ (Impressions/1000) | €5–€15 (EU) / $8–$25 (US) |
| CTR (Click-Through Rate) | Clicks ÷ Impressions × 100 | 0.5–2.0% |
| ROAS | Revenue ÷ Ad Spend | 2–4× breakeven (varies by margin) |
| Frequency | Impressions ÷ Reach | Keep <3.0 (cold), <5.0 (retargeting) |

**Learning phase:** Requires 50 conversions per ad set per week to exit.

---

## 10. Attribution Windows — Decision Guide

| Window | Use Case |
|--------|---------|
| **7-day click / 1-day view** | Meta default — recommended for most campaigns |
| 1-day click | Flash sales, impulse purchases (food, events) |
| 7-day click only | Advertisers who distrust view-through attribution |
| ~~28-day click~~ | Pre-iOS 14 only — no longer available |

**North America vs. Europe:** EU GDPR-restricted audiences = fewer tracked users = attribution gaps more pronounced → CAPI becomes even more critical in the EU.

---

## 11. A/B Testing Rules

- Test **ONE variable at a time** (creative OR audience OR placement)
- Use Meta's built-in **Experiment tool** for mutual audience exclusion
- Minimum duration: **7 days**
- Declare a winner only with statistical significance
- Test creative first (biggest impact), then audience, then placement

---

## 12. Creative Fatigue Warning Signs + Fixes

| Warning Sign | Threshold | Action |
|-------------|-----------|--------|
| High frequency | >3.0 (7-day, cold) | Rotate creatives |
| Falling CTR | Below 0.5% | Refresh copy + hook |
| Rising CPM | Week-over-week increase | Expand audience |
| Negative comments | "I keep seeing this" | Pause/replace |

**Never delete fatigued ads** — archive them to preserve social proof (likes/comments).

---

## 13. GDPR Compliance Checklist for EU Meta Campaigns

- [ ] Cookie consent banner (IAB TCF 2.0 compliant)
- [ ] Privacy policy discloses Meta Pixel + CAPI use
- [ ] Customer list upload: valid consent to marketing obtained
- [ ] Data Processing Agreement signed with Meta
- [ ] Standard Contractual Clauses (SCCs) cover EU-US data transfer
- [ ] Right to erasure requests processed within 30 days
- [ ] Germany/Netherlands: heightened scrutiny — prioritize consent-based tracking only

> **Key principle:** CAPI does NOT bypass GDPR. Server-side tracking of personal data still requires legal basis and DPA.

---

## 14. North America vs. Europe — Key Differences

| Factor | North America (US/CA) | Europe (EU/UK) |
|--------|----------------------|----------------|
| ATT opt-out rate | ~40–50% | ~55–70% |
| GDPR applies | No (US state laws vary) | Yes — strict |
| Cookie consent required | Generally no | Yes — pre-ticked = illegal |
| CPMs | $8–$25 | €5–€15 |
| Customer list upload | No consent law federally | Requires explicit consent |
| Data transfer rules | US domestic | EU-US SCCs required |

---

## ⚠️ Anti-Patterns (What NOT to Do)

1. Using **Traffic** objective for e-commerce purchases — optimizes for clicks, not buyers
2. Launching campaigns without **both Pixel AND CAPI** installed
3. Setting ad set budgets **below $10–$20/day** — stays in perpetual learning phase
4. Relying on **interest targeting** as primary strategy post-iOS 14
5. **Deleting** fatigued ads instead of archiving (destroys social proof)
6. Ignoring **frequency** until ROAS collapses — monitor weekly
7. Uploading customer lists in EU without **verifying consent** status

---

## 🏆 Exam Power Phrases

- "The Meta Pixel fires from the browser; the Conversions API fires from the server — together they provide a deduplicated, privacy-resilient measurement solution."
- "Aggregated Event Measurement limits advertisers to 8 prioritized events per domain, with only the highest-priority event per user attributed under Apple's ATT framework."
- "A 1% Lookalike Audience based on a high-quality Purchase custom audience of 1,000+ buyers is typically the highest-performing cold prospecting audience."
- "CBO distributes budget across ad sets automatically; ABO gives per-ad-set control — use ABO for testing, CBO for scaling."
- "In the EU, both the Pixel and CAPI require valid legal basis under GDPR — server-side tracking is not a GDPR exemption."
- "Creative fatigue occurs when frequency exceeds 3.0 in 7 days for cold audiences — the fix is creative rotation, not campaign pausing."
- "The learning phase requires 50 conversions per ad set per week — below this, consolidate ad sets or raise the optimization event up the funnel."

---

## ✏️ Quick Self-Check (Recite from Memory)

1. Name the three campaign levels and what each controls.
2. Why is the Sales objective better than Traffic for driving purchases?
3. What problem does the Conversions API solve that the Pixel cannot?
4. What is the maximum number of events you can configure under AEM, and how are they used?
5. What GDPR step is required before uploading a customer email list to Meta in the EU?
