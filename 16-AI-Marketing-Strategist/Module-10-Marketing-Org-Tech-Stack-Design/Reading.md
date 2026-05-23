# Module 10: Marketing Org & Tech Stack Design 🏗️

> **Why this module matters:** The best measurement architecture in the world produces zero business value if the marketing org is structured wrong, the tools cost more than they return, and the strategist cannot defend the budget in front of the CFO. This module is the org-design and finance counterpart to the technical content of Modules 1–9 — and the bridge to the strategist's career path that follows.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Every preceding module of this course — Module 10 is the org-design synthesis of Modules 1–9 and references each in passing.
> - Basic corporate-finance vocabulary (P&L, EBITDA, ROIC, payback period). High-level only; the [Recommended Readings](#-further-reading-optional) include Reichheld and Grove for depth.
> - The OKR / KPI-tree vocabulary from [Module 1](../Module-01-Strategic-Frameworks-OKRs/Reading.md) — Module 10 wires those KPIs into a 1-page CFO scorecard.
> - The build-vs-buy tension from Modules 2, 5, and 7 — each implies a martech-vendor decision that lands in this module.
> If you have never read a marketing-org RACI or a martech vendor renewal memo, that's covered here from first principles.

---

## 🏢 A Story: How Airbnb Restructured Its Marketing Org and Cut $50M in Wasted Vendor Spend

In 2020, Airbnb famously cut its marketing budget by 90% during the pandemic. What's less famous is what happened next: the team had to figure out, in 14 weeks, *which* marketing investments to bring back. They re-emerged in 2021 with a fundamentally restructured marketing organization that became a model for the industry — and in their 2022 IPO investor day they disclosed that the new structure had reduced annual martech-vendor spend by roughly $50M.

The changes:

1. **Marketing Science** became a distinct VP-level function reporting to the CMO, not buried inside an analytics team. It owned MMM, attribution, and incrementality testing — and could veto any campaign that lacked a measurement plan.
2. **The brand vs performance split was abolished.** Both functions had to use the same measurement infrastructure. The CMO had a single P&L.
3. **A "build vs buy" committee** met quarterly. Every tool above $50K/year was reviewed for replacement, consolidation, or insourcing.
4. **The org adopted a hub-and-spoke model**: a central Marketing Science + Data Engineering team supplied measurement infrastructure to embedded analysts on each marketing function (acquisition, lifecycle, brand).
5. **The CFO was a permanent invited member of monthly marketing reviews** and had direct query rights into the warehouse-level marketing data.

This is the playbook. By the end of this module you'll have a working framework for designing your own version of it.

---

## 🏗️ Designing the Modern Marketing Organization

Three canonical structures, plus a 2024–2026 emerging hybrid:

### Structure 1: Centralized (Traditional)

All marketing functions report through one CMO. Sub-functions: Brand, Performance, Lifecycle, Content, Comms, Analytics.

| Pros | Cons |
|------|------|
| Single budget owner | Slow decisions at scale |
| Easy consistency | Doesn't fit multi-product companies |
| Clear accountability | Concentrated single-point-of-failure |

### Structure 2: Federated (Per Business Unit)

Each business unit (BU) has its own marketing team. The corporate marketing function does brand + standards only.

| Pros | Cons |
|------|------|
| Speed per BU | Tool / vendor proliferation |
| BU-specific expertise | Inconsistent measurement |
| Easy P&L by product | Brand fragmentation |

### Structure 3: Hub-and-Spoke (the 2026 default at scale)

Central "hub" team owns shared infrastructure (data, measurement, brand standards, vendor contracts). "Spoke" teams own execution for specific products / channels / regions.

Example:

```
                CMO
                 │
       ┌─────────┼──────────┐
       │         │          │
      HUB     SPOKE A    SPOKE B
       │       (DTC)     (B2B SaaS)
       ├── Marketing Science     │
       ├── Data Engineering      │
       ├── Brand Standards       │
       ├── Vendor Contracts      │
       └── Creative Studio       │
                                 │
                  Embedded Analyst (reports
                  solid line to spoke,
                  dotted line to Hub
                  Marketing Science)
```

### Structure 4 (emerging 2024+): The AI-Augmented Hybrid

The same hub-and-spoke, but with a dedicated **AI Operations** team in the hub running:
- LLM prompt libraries shared across spokes.
- GenAI creative production pipelines.
- Automated experimentation infrastructure.
- AI guardrails / brand compliance for generative output.

🎯 **Strategist's choice:** Use centralized for <$10M revenue. Hub-and-spoke for $10M-$1B. Federated only for true multi-BU companies (Procter & Gamble, Berkshire-style portfolios). AI-augmented hybrid for any company shipping significant GenAI creative.

---

## 🧩 The RACI Across Marketing-Data-Engineering-Product-Finance

Marketing strategy execution lives at the intersection of five functions. A clear RACI prevents the politics that kill measurement programs.

**RACI** = Responsible · Accountable · Consulted · Informed.

| Activity | Marketing | Data Eng | Product | Finance | Legal/Privacy |
|----------|-----------|----------|---------|---------|---------------|
| MMM design + interpretation | A | R | C | C | I |
| MTA platform selection | A | C | I | C | C |
| GA4 / event taxonomy | A | R | C | I | I |
| CDP selection | A | R | C | C | C |
| Server-side GTM ops | C | R/A | I | I | C |
| Privacy compliance | C | C | C | I | A/R |
| Quarterly budget allocation | A | C | C | C | I |
| Incrementality test design | A | R | C | I | C |
| Vendor contract negotiation | C | I | I | A | C |
| Annual martech audit | C | C | I | A | C |

⚠️ **What most teams get wrong:** Letting Data Eng make platform-selection decisions because "it's a technical purchase". The strategist is *Accountable* for tool selection because the strategist owns the use case.

---

## 🛒 The Martech Stack — From 12,000 Vendors to the 30 You'll Actually Use

Scott Brinker's annual *Marketing Technology Landscape* tracked **~12,000 martech vendors in 2024**. The strategist's job is not to know them all — it's to know the **30–50 categories** and pick within them. Here is the canonical 2026 stack reference.

| Category | Examples | Cost (mid-market range) |
|----------|----------|-------------------------|
| **Web Analytics** | GA4 (free), GA4 360 ($150K+/yr), Adobe Analytics, Heap | $0–$200K/yr |
| **Product Analytics** | Mixpanel, Amplitude, Heap, PostHog | $20K–$200K/yr |
| **CDP** | Segment, mParticle, Tealium, Hightouch (composable) | $50K–$500K/yr |
| **Server-Side Tagging** | Stape.io, GTM-SS, JenTis | $1K–$20K/yr |
| **CMP** | OneTrust, Cookiebot, Didomi, Usercentrics, Iubenda | $5K–$80K/yr |
| **Marketing Mix Modeling** | Robyn (free), Meridian (free), Rockerbox, Measured, Analytic Partners | $0–$500K/yr |
| **MTA** | Northbeam, Rockerbox, Triple Whale, Hyros | $20K–$300K/yr |
| **MMP (Mobile)** | AppsFlyer, Branch, Adjust | $30K–$150K/yr |
| **Reverse ETL** | Hightouch, Census, Polytomic | $20K–$150K/yr |
| **Data Warehouse** | Snowflake, BigQuery, Databricks, Redshift | $30K–$500K/yr |
| **BI Tool** | Looker Studio (free), Looker, Tableau, Mode, Hex | $0–$300K/yr |
| **Email / SMS** | Iterable, Klaviyo, Braze, MoEngage, Customer.io | $20K–$300K/yr |
| **Lifecycle Orchestration** | Braze, Iterable, Bloomreach, Salesforce Marketing Cloud | Often = email tier |
| **CRM** | Salesforce, HubSpot, Microsoft Dynamics | $20K–$1M+/yr |
| **A/B Testing** | Optimizely, AB Tasty, Convert, VWO, GrowthBook (OSS) | $20K–$200K/yr |
| **Personalization** | Dynamic Yield, Bloomreach, BlueShift, Adobe Target | $50K–$500K/yr |
| **GenAI Creative** | Midjourney, DALL-E, Stable Diffusion, Adobe Firefly | $1K–$50K/yr |
| **GenAI Copy** | OpenAI, Anthropic Claude, Google Gemini, Jasper, Copy.ai | $1K–$100K/yr |
| **Customer Support** | Zendesk, Intercom, Front, Gorgias | $30K–$300K/yr |
| **Influencer / Affiliate** | Impact, GRIN, Aspire, CreatorIQ, Awin | $20K–$200K/yr |

For a $20M-revenue DTC brand a typical 2026 stack might look like:

```
Web/Product Analytics      → GA4 free + Heap free + Mixpanel ($30K)
CDP                         → Hightouch composable on BigQuery ($50K)
Server-side tagging         → Stape ($10K)
CMP                         → Cookiebot ($15K)
MMM                         → Robyn or Meridian (free; team-led)
MTA                         → GA4 DDA + Northbeam ($60K)
Email/SMS                   → Klaviyo ($40K)
CRM                         → HubSpot ($30K)
A/B testing                 → Convert ($30K)
Personalization             → Bloomreach Discovery ($80K)
GenAI Creative              → Midjourney + Firefly ($5K)
GenAI Copy                  → Claude + ChatGPT ($10K)
─────────────────────────────────────────────
Total annual                ≈ $360K (1.8% of revenue)
```

---

## 💰 FinOps for Marketing Tools

**FinOps** = financial operations discipline applied to recurring cloud + SaaS spend. By 2026 most large marketing orgs have a "Marketing FinOps" function or shared service.

### Core FinOps disciplines for marketing

| Discipline | Practice |
|------------|----------|
| **Inventory** | Maintain a single source-of-truth list of every active subscription, with owner, renewal date, and last-quarter ROI |
| **Tagging** | Every recurring cost is tagged to a use case, owner, and a contractual minimum term |
| **Showback / Chargeback** | Spread costs back to the spoke that uses the tool |
| **Right-sizing** | Quarterly review of seat / event / MTU tiers to avoid over-paying |
| **Renewal management** | Start vendor renegotiation 90 days before contract end |
| **Build-vs-buy committee** | Quarterly review of >$50K/yr tools for in-house replacement |
| **Forecasting** | Quarterly martech budget against forecast revenue + planned campaigns |

### The "30-30-30-10" rule of thumb for stack spend

A common heuristic for healthy marketing-tech spend distribution:
- **30%** infrastructure (CDP, warehouse, server-side, BI).
- **30%** activation (email/SMS/lifecycle, ad platforms ex-media).
- **30%** measurement (MTA, MMM, product analytics, A/B).
- **10%** experimental (new categories you're piloting).

A stack heavy on activation (>50%) and light on measurement (<10%) is a *capability gap* — you can execute campaigns but can't prove their value.

---

## 🛠️ Build vs Buy — The Strategic Framework

Every >$100K/year tool is a candidate for build-vs-buy review. The framework:

| Question | Buy | Build |
|----------|-----|-------|
| Does it solve a *commoditized* problem? | YES | — |
| Does it solve a *strategic differentiator* problem? | — | YES |
| Do we have the engineering capacity? | NO | YES |
| Is the SaaS vendor's roadmap aligned with ours? | YES | NO |
| Is the data we'd give the vendor a competitive asset? | NO | YES |
| Can we get to break-even on a build in <24 months? | NO | YES |

🎯 **Memorize this.** Most teams buy too much, build too little. The right ratio depends on the stack layer:

| Layer | Buy default | Build candidates |
|-------|-------------|------------------|
| Web/Product analytics | Buy | Rarely |
| CDP | Buy (or composable buy) | Snowplow if engineering-heavy |
| MMM | Buy or open-source | In-house Bayesian for differentiation |
| MTA | Buy initially | In-house Markov / Shapley once mature |
| BI dashboards | Buy for tools; build for content | Always build the content |
| Personalization | Buy | In-house ranking is rare except at scale |

---

## 📊 Presenting to the CFO — The Marketing-Strategist's Quarterly Review

The single highest-leverage skill for senior strategists is **defending the marketing budget in front of the CFO**. The CFO's questions are predictable; your preparation should be too.

### The 5 questions the CFO will ask (every time)

1. **"What did we spend this quarter and what did it return?"** → blended ROAS / CAC + LTV: CAC ratio.
2. **"Which channels are getting bigger and which are getting smaller, and why?"** → MMM channel waterfall + saturation curves.
3. **"How do you know it's incremental?"** → recent incrementality test results.
4. **"Where is the next $X going?"** → MMM budget optimizer + scenario simulation.
5. **"What's the leading indicator that this is working / not working?"** → cohort retention overlay.

🎯 **Have these 5 charts ready, every time.** Memorize their order.

### The 1-Page Marketing Scorecard

A canonical executive deliverable. The 12 metrics every CFO + CEO should see monthly:

| Metric | Q1 actual | Q2 target | Q2 actual | Trend |
|--------|-----------|-----------|-----------|-------|
| New customer count | | | | |
| CAC (blended) | | | | |
| CAC (paid only) | | | | |
| LTV (12-month projected) | | | | |
| LTV:CAC | | | | |
| MMM-attributed incremental revenue | | | | |
| Total marketing spend | | | | |
| Spend / revenue ratio | | | | |
| Month-3 retention (latest cohort) | | | | |
| NRR / GRR | | | | |
| Incrementality-validated channel ROAS (paid search) | | | | |
| Incrementality-validated channel ROAS (paid social) | | | | |

This is the strategist's deliverable. Never let anyone else write it for you.

---

## 🎓 The Marketing Strategist Career Path

The arc that this entire course prepares you for:

| Title | Years | Comp (US 2026, blended) | Owns |
|-------|-------|---------------------------|------|
| Marketing Analyst / Sr. Analyst | 0–3 | $75K–$120K | Reporting + ad-hoc analysis |
| Senior Analyst / Analytics Lead | 3–6 | $110K–$160K | Measurement architecture for one product / channel |
| Marketing Science Manager / Strategist | 5–8 | $140K–$200K | Cross-channel attribution + MMM + reporting cadence |
| Director, Marketing Analytics / Measurement | 8–12 | $180K–$280K | Team of 5–15, vendor strategy, board reporting |
| VP, Growth / Performance Marketing | 12–18 | $280K–$500K | P&L for paid acquisition, hiring directors |
| CMO / CGO | 15+ | $400K–$1M+ | Total marketing P&L, brand + performance |

### What promotes you at each level

| From | To | What you must demonstrate |
|------|----|---------------------------|
| Analyst → Sr Analyst | Sr Analyst → Mgr | Owning a measurement domain end-to-end (e.g., entire MTA + GA4 setup) |
| Mgr → Director | Director → VP | Hiring + developing a team; getting CFO trust; vendor renegotiation wins |
| VP → CMO/CGO | — | P&L authority; cross-functional alignment; board presentation skill |

### Where to invest your learning time at each stage

| Stage | Highest-leverage learning |
|-------|---------------------------|
| Analyst | SQL + GA4 + one programming language (Python preferred) |
| Sr Analyst | Statistics, MMM, attribution math, dbt/data modeling |
| Manager | Communication, exec storytelling, team building, vendor management |
| Director | Org design, FinOps, hiring frameworks, board presentation |
| VP | Strategic finance, M&A, fundraising, executive presence |

⚠️ **The career-killing mistake at any level:** Staying purely technical when promoted into people leadership. Senior marketing strategists are *measured by what their team produces*, not what they personally execute. The transition is the hardest skill in the function.

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Marketing org structure follows industry best practices" | Org structure follows *your* P&L, customers, and channels — not benchmarks |
| "Buying more tools = better stack" | Most over-tooled orgs are underperforming. Consolidate. |
| "Data Engineering should own tool selection" | Marketing owns the use case; DE owns the implementation |
| "FinOps is finance's problem" | FinOps for marketing tools is the *strategist's* problem |
| "CMO is the goal" | Many great strategists prefer the Director / VP layer — more measurement, less politics |
| "Build is always cheaper long-term" | Build amortization windows are 18–24 months; many never get there |
| "The CFO is the enemy" | The CFO is the strategist's *best* internal ally when you bring real numbers |

---

## 🎓 Key Terms To Know

| Term | Definition |
|------|------------|
| **Hub-and-Spoke org** | Central shared services + embedded execution teams |
| **Federated org** | Per-BU marketing teams + thin corporate function |
| **AI-augmented hybrid** | 2024+ hub-and-spoke with an embedded AI Ops team |
| **RACI** | Responsible · Accountable · Consulted · Informed |
| **Martech stack** | The collection of marketing technology tools |
| **FinOps** | Financial-operations discipline for recurring cloud + SaaS spend |
| **Showback / Chargeback** | Cost allocation back to consuming teams |
| **Right-sizing** | Adjusting tier / seat counts to actual usage |
| **Build-vs-buy committee** | Quarterly review of >$50K/yr tools |
| **30-30-30-10 rule** | Infrastructure / Activation / Measurement / Experimental spend split |
| **Marketing Scorecard** | The 1-page executive metric view |
| **CAC** | Customer Acquisition Cost |
| **LTV:CAC** | LTV-to-CAC ratio; >3:1 = sustainable |
| **CMO** | Chief Marketing Officer |
| **CGO** | Chief Growth Officer (modern variant) |
| **MarTech Landscape** | Scott Brinker's annual market map (~12,000 vendors in 2024) |

---

## Discussion — Socratic prompts

1. Airbnb made *Marketing Science* a VP-level function reporting to the CMO, and abolished the brand-vs-performance P&L split. Which of those two moves was the bigger lever, and why? Defend a different org topology that another company (e.g., Procter & Gamble or a B2B SaaS Series-C) should adopt instead.
2. The 30-30-30-10 spend rule (infrastructure / activation / measurement / experimental) is a benchmark, not a law. When is it *correct* to deviate dramatically — for instance, a 60-15-15-10 split? Sketch the business circumstances where each axis dominates.
3. Build-vs-buy committees default to "buy" for non-differentiating layers and "build" for the layer that produces competitive advantage. Which 2026 martech layers are *genuinely* differentiating, and which are commoditized? Defend your boundary.
4. The 1-page CFO scorecard answers five questions. Pick one — for example, "What's the marginal ROAS on the next $1M?" — and design the *full* data lineage required (CDP → MMM → scorecard). What's the implementation cost in headcount + tooling?
5. The strategist career path (Senior Analyst → VP → CMO/CGO) increasingly requires fluency in topics this course covers (MMM, CDP, privacy law). At what *career stage* does each module's content matter most — and which modules can you reasonably outsource to a specialist on your team forever?

---

## ✅ Module 10 Summary

You now know:
- 🏗️ The four canonical marketing org structures and when each fits.
- 🧩 RACI across the five functions that touch marketing data.
- 🛒 The 2026 martech stack landscape with realistic cost ranges.
- 💰 FinOps disciplines for marketing tools and the 30-30-30-10 spend rule.
- 🛠️ Build vs buy framework + per-layer defaults.
- 📊 The 5 CFO questions + the 1-page marketing scorecard.
- 🎓 The strategist's career path through CMO and what promotes you at each step.

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md)
2. ✏️ Take [Quiz.md](./Quiz.md)
3. 📋 Review [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ Move to [Practice Exam 2](../Practice-Exams/Practice-Exam-2.md) and [Final Mock Exam](../Practice-Exams/Final-Mock-Exam.md).

> **Where this leads.**
> - Inside this course: the [Practice Exams](../Practice-Exams/) integrate Modules 1–10 against the strategist-grade pass bar.
> - Cross-course: [Course 17: AI Marketing Entrepreneur](../../17-AI-Marketing-Entrepreneur/README.md) covers the founder / GTM-design counterpart of the org choices here; [Course 18: AI Marketing Capstone Portfolio](../../18-AI-Marketing-Capstone-Portfolio/README.md) integrates the org-design, scorecard, and budget memo into a portfolio artifact.
> - Practice: [Practice Exam 2](../Practice-Exams/Practice-Exam-2.md) (final third) and the [Final Mock Exam](../Practice-Exams/Final-Mock-Exam.md) integrate the cross-module questions where Module 10's org/finance lens is decisive.

---

## 📚 Further Reading (Optional)

- 📖 **"Marketing 5.0" by Kotler, Kartajaya, Setiawan (2021)** — modern marketing org frame.
- 📖 **"The Hard Thing About Hard Things" by Ben Horowitz** — leadership across all the org structures.
- 📖 **"High Output Management" by Andy Grove** — the OG operating-system book.
- 📖 **"Working Backwards" by Bryar & Carr (2021)** — Amazon's PR/FAQ + executive review process.
- 🔗 [Scott Brinker's MarTech Landscape (chiefmartec.com)](https://chiefmartec.com/) — annual vendor map.
- 🔗 [a16z's "How to Hire Your CMO" guide](https://a16z.com/) — strategic perspective.
- 🔗 [Reforge's Marketing Leader content](https://www.reforge.com/) — executive frame.
- 🔗 [The FinOps Foundation](https://www.finops.org/) — vendor-neutral FinOps standards.
- 🔗 [Levels.fyi marketing compensation](https://levels.fyi/) — current US comp data.
- 🔗 [CMO Council research](https://www.cmocouncil.org/) — annual marketing-leader surveys.
