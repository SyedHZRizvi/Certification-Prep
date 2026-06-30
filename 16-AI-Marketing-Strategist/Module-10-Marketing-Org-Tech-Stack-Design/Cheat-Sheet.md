# 📋 Module 10 Cheat Sheet: Marketing Org & Tech Stack Design

> One page. Print it. Tape it to your monitor.

---

## 🏗️ 4 Org Structures

| Structure | When |
|-----------|------|
| Centralized | <$10M revenue |
| Hub-and-Spoke | $10M–$1B (the 2026 default) |
| Federated per-BU | True multi-BU portfolios |
| AI-Augmented Hybrid | Hub-spoke + AI Ops team for GenAI |

---

## 🧩 RACI

```
R - Responsible (does the work)
A - Accountable (ultimately answerable)
C - Consulted (gives input)
I - Informed (kept aware)
```

### Marketing's typical RACI role per activity

| Activity | Marketing | Data Eng | Product | Finance | Privacy |
|----------|-----------|----------|---------|---------|---------|
| MMM | A | R | C | C | I |
| GA4 setup | A | R | C | I | I |
| CDP selection | A | R | C | C | C |
| sGTM ops | C | R/A | I | I | C |
| Vendor contract | C | I | I | A | C |
| Privacy compliance | C | C | C | I | A/R |

---

## 🛒 Stack, Top Categories + Vendors (2026)

| Category | Vendors |
|----------|---------|
| Web Analytics | GA4 (free / 360), Adobe Analytics |
| Product Analytics | Mixpanel, Amplitude, Heap, PostHog |
| CDP | Segment, mParticle, Hightouch (composable) |
| Server-side GTM | Stape, GTM-SS, JenTis |
| CMP | OneTrust, Cookiebot, Didomi, Usercentrics |
| MMM | Robyn (free), Meridian (free), Rockerbox, Measured |
| MTA | Northbeam, Rockerbox, Triple Whale |
| MMP (mobile) | AppsFlyer, Branch, Adjust |
| Reverse ETL | Hightouch, Census, Polytomic |
| Warehouse | Snowflake, BigQuery, Databricks |
| Email/SMS | Klaviyo, Iterable, Braze, Customer.io |
| A/B Testing | Optimizely, Convert, VWO, GrowthBook |
| Personalization | Dynamic Yield, Bloomreach, BlueShift |

> Brinker's MarTech Landscape: **~12,000 vendors** in 2024.

---

## 💰 30-30-30-10 Spend Rule

```
30%  Infrastructure (CDP, warehouse, sGTM, BI)
30%  Activation (email/lifecycle, ad tooling)
30%  Measurement (MTA, MMM, product analytics, A/B)
10%  Experimental (new categories)
```

Red flag: >50% activation + <10% measurement.

---

## 🛠️ Build vs Buy

| Buy when | Build when |
|----------|------------|
| Commoditized | Strategic differentiator |
| No eng capacity | Eng capacity available |
| Vendor roadmap aligns | Data is competitive asset |
| Break-even >24 mo | Break-even <24 mo |

---

## 📊 5 Questions The CFO Will Always Ask

1. What did we spend and what did it return?
2. Which channels are growing/shrinking and why?
3. How do you know it's incremental?
4. Where is the next $X going?
5. What's the leading indicator?

### The 12-metric 1-page scorecard

- New customer count
- CAC (blended + paid-only)
- LTV (12-mo projected)
- LTV:CAC
- MMM-attributed incremental revenue
- Total spend + spend/revenue ratio
- Month-3 retention (latest cohort)
- NRR + GRR
- Incrementality-validated paid-search ROAS
- Incrementality-validated paid-social ROAS

---

## 🎓 Strategist Career Ladder (US 2026)

| Title | Years | Comp (blended) |
|-------|-------|----------------|
| Analyst / Sr Analyst | 0–3 | $75K–$120K |
| Analytics Lead | 3–6 | $110K–$160K |
| Marketing Science Manager | 5–8 | $140K–$200K |
| Director, Marketing Analytics | 8–12 | $180K–$280K |
| VP Growth / Performance | 12–18 | $280K–$500K |
| CMO / CGO | 15+ | $400K–$1M+ |

---

## 🏆 Exam Power Phrases

✅ Often correct:

- "Hub-and-spoke is the 2026 default..."
- "Marketing is Accountable for tool selection..."
- "Build only when strategic differentiator + eng capacity..."
- "Lead the CFO meeting with spend-and-return..."
- "30-30-30-10 spend rule..."

❌ Often wrong:

- "Data engineering owns vendor selection..."
- "Build is always cheaper long-term..."
- "More tools = better stack..."
- "FinOps is finance's problem..."

---

## ⚠️ Anti-Patterns

- ❌ 50+ tools without consolidation review
- ❌ Letting DE pick the CDP because "it's technical"
- ❌ Building a custom CDP when Segment fits
- ❌ Activation-heavy / measurement-light stack
- ❌ No build-vs-buy committee
- ❌ Annual vendor reviews instead of quarterly
- ❌ Avoiding the CFO
- ❌ Staying technical past the manager → director transition

---

## ✏️ Quick Self-Check

1. 4 org structures + which is 2026 default? ___
2. RACI? ___
3. 30-30-30-10 split? ___
4. 5 CFO questions? ___
5. LTV:CAC bar? ___

---

➡️ [Practice Exam 2](../Practice-Exams/Practice-Exam-2.md), then [Final Mock Exam](../Practice-Exams/Final-Mock-Exam.md).
