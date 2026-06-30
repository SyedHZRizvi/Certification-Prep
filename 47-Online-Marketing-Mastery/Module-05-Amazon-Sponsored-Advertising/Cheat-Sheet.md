# 📋 Module 05 Cheat Sheet: Amazon Sponsored Advertising

> One page. Print it. Review before every campaign setup, client pitch, or exam.

---

## The 4-Campaign Waterfall Structure

| Tier | Match Type | Budget % | Bid Range (UK) | Primary Purpose |
|------|-----------|----------|---------------|----------------|
| 1 — Auto | Auto | 10–15% | £0.25–0.40 | Discover new search terms |
| 2 — Broad Manual | Broad | 20–25% | £0.50–0.70 | Test volume on harvested terms |
| 3 — Phrase Manual | Phrase | 25–30% | £0.70–0.90 | Scale proven converters |
| 4 — Exact Manual | Exact | 35–45% | £0.90–1.40 | Dominate top terms, control spend |

**Promotion thresholds (move term up one tier when):**

- Auto → Broad: 1–2 orders (any ACoS — just testing)
- Broad → Phrase: 3–5 orders + ACoS ≤ break-even
- Phrase → Exact: 8–10 orders + ACoS ≤ target

---

## Core Formulas

```
ACoS            = (Ad Spend ÷ Ad Revenue) × 100
TACoS           = (Ad Spend ÷ Total Revenue) × 100
ROAS            = Ad Revenue ÷ Ad Spend
Break-Even ACoS = Gross Profit Margin %
Target ACoS     = Break-Even ACoS × (1 − desired profit buffer %)
```

**ACoS ↔ ROAS conversion table:**

| ACoS | ROAS |
|------|------|
| 10% | 10x |
| 20% | 5x |
| 25% | 4x |
| 33% | 3x |
| 50% | 2x |
| 100% | 1x |

> ACoS × ROAS = 1 (they are perfect inverses)

---

## Amazon Ad Product Quick Reference

| Product | Targeting Type | Placement | Min Spend | Best Use Case |
|---------|---------------|-----------|-----------|--------------|
| Sponsored Products (SP) | Keywords + ASINs | Search results + PDPs | None | Direct sales, the workhouse |
| Sponsored Brands (SB) | Keywords | Top of search banner | None (brand registry req.) | Brand awareness + NTB acquisition |
| Sponsored Display (SD) | Audiences + Products | Amazon + off-Amazon | None | Retargeting + competitor intercept |
| Amazon DSP | Programmatic audiences | Amazon + 3rd-party sites | $10k–$50k/mo | Full-funnel, video, large brands |

---

## Keyword Match Types on Amazon

| Match Type | Syntax | Triggers On | Does NOT Trigger On |
|------------|--------|-------------|---------------------|
| Broad | `copper bowl` | Any order, synonyms, related | Nothing (very broad) |
| Phrase | `"copper bowl"` | Words in order + additions | Wrong word order |
| Exact | `[copper bowl]` | Exact phrase only | Any additions or re-ordering |
| Negative Exact | `-[word]` | Blocks exact match | — |
| Negative Phrase | `-"phrase"` | Blocks phrase match | — |

---

## Auto Campaign Sub-Types (adjust bids per sub-type)

| Sub-Type | Description | Recommended Bid vs. Base |
|----------|-------------|--------------------------|
| Close match | Directly related searches | 100% (highest) |
| Loose match | Broadly related searches | 60–70% |
| Substitutes | Competitor product pages | 80–90% |
| Complements | Complementary product pages | 50–70% |

---

## Placement Bid Multipliers

| Placement | When to Use Multiplier | Typical Range |
|-----------|----------------------|---------------|
| Top of search (first page) | Always — highest conversion rate | +50% to +100% |
| Product pages (PDPs) | Competitor targeting + defensive | +20% to +50% |
| Rest of search | Baseline — no multiplier needed | 0% |

**Formula:** Effective bid = Base Bid × (1 + Multiplier %)

Example: £0.80 base × (1 + 100%) = £1.60 top-of-search effective bid

---

## Industry Benchmarks (Directional Estimates — 2024)

| Metric | US / Canada | UK | Germany |
|--------|------------|-----|---------|
| Avg SP CPC | $0.75–1.20 | £0.55–0.90 | €0.65–1.00 |
| Avg ACoS (mature category) | 28–35% | 25–32% | 22–30% |
| Avg SP CTR | 0.35–0.45% | 0.30–0.40% | 0.28–0.38% |
| SB Video CTR (vs standard SB) | 2–3x higher | 2–3x higher | 2–3x higher |
| Avg Conversion Rate | 10–15% | 8–13% | 9–14% |

> Source: Industry estimates aggregated from Helium 10, Jungle Scout, Perpetua — treat as directional

---

## Weekly Search Term Harvest Checklist (SPARK)

- **S** — Search Term Report: pull it, filter by minimum spend (e.g., >£5)
- **P** — Placement Report: review top-of-search bid multiplier effectiveness
- **A** — ACoS per keyword: compare each to break-even and target
- **R** — ROAS trend: is overall campaign efficiency improving week-over-week?
- **K** — Keywords to promote: identify terms meeting promotion thresholds

**Negation rules:** Add high-spend (>£10), zero-conversion terms as exact negatives immediately. Review loose-match and complement sub-types weekly for irrelevant terms.

---

## Amazon Attribution — Off-Amazon Traffic Measurement

**What it does:** Tracks clicks from Google Ads, Meta Ads, email, influencer links → Amazon purchase events

**Available in:** US, UK, Germany, France, Italy, Spain, Netherlands (+ select markets)

**GDPR note:** Attribution occurs within Amazon's own ecosystem — no third-party cookies, no separate GDPR consent requirement

**Key metrics:** Clicks → Detail page views → Add to cart → Purchases → Revenue

**Use case:** Prove to CFO that £10,000 Google Ads spend drove £45,000 in Amazon revenue → ROAS = 4.5x

---

## Bidding Strategy Decision Tree

```
New campaign / new keyword?
  → Use "Down only" dynamic bids (safe, reduces waste)

Mature keyword, ACoS well below target?
  → Switch to "Fixed bids" + manually increase bid
  → Or add top-of-search multiplier

Scaling aggressively for rank velocity?
  → "Up and down" dynamic bids (Amazon can increase up to 100% above set bid)
  → Monitor closely — can spike ACoS quickly
```

---

## Brand Defence — Non-Negotiable Campaigns

Every brand with an Amazon presence MUST run:

1. **Exact-match SP campaign on own brand name(s)** — low bid, high return, prevents competitors stealing brand traffic
2. **Product-targeting SP campaign on own ASINs** — prevents competitor SD/SP ads appearing on your own product pages
3. **Sponsored Brands campaign on brand name** — occupies top-of-search banner, reinforces brand

Cost of brand defence: typically very low CPC (£0.05–0.20 for brand name terms). Cost of NOT defending: competitors steal your traffic at your expense.

---

## North America vs. Europe — Key Differences

| Dimension | North America (US/CA) | Europe (UK/DE/FR/etc.) |
|-----------|----------------------|------------------------|
| Marketplace structure | amazon.com (unified US) | Separate per country (.co.uk, .de, .fr) |
| Campaign management | Single marketplace | One campaign set per marketplace |
| Currency/billing | USD (US), CAD (CA) | GBP (UK), EUR (eurozone) |
| Amazon DSP availability | Fully mature | Available UK, DE, FR, ES, IT |
| Sponsored Brands Video | Widely available | Available, some market lag |
| Average CPCs | Generally higher | Generally lower (less competition) |
| GDPR applicability | CCPA (California) | Full GDPR across EU/UK GDPR |
| SD audience retargeting (GDPR) | No GDPR concern | First-party data, walled garden — compliant |

---

## ⚠️ Anti-Patterns

1. **One auto campaign = your whole PPC strategy.** Auto is discovery, not revenue.
2. **Never checking the Search Term Report.** You are paying for irrelevant traffic invisibly.
3. **Optimising ACoS in isolation.** Without TACoS, you cannot see the organic halo effect.
4. **No negative keywords.** Build your negative list from Day 1, not Month 3.
5. **Launching SD before SP is profitable.** Layer complexity only after the foundation works.
6. **Defending your brand name is optional.** It is not — defend it or competitors will poach it.
7. **Using broad match without negatives.** Broad match without negatives is a budget incinerator.

---

## 🏆 Exam Power Phrases

Use these in interviews, exams, or client presentations to signal expertise:

- *"TACoS is the north star metric for Amazon businesses because it captures the organic halo effect of advertising — something ACoS alone cannot show."*
- *"We use a 4-tier waterfall structure: auto campaigns discover terms, broad and phrase test and scale, exact match dominates the top performers with precise bid control."*
- *"Search term harvesting is a weekly ritual, not an occasional task. The Search Term Report is the single most valuable document in Amazon PPC."*
- *"Brand defence campaigns are non-negotiable — low CPC, high return, and without them you're paying Amazon to help competitors steal your traffic."*
- *"Amazon DSP is not Sponsored Display. DSP is programmatic, minimum $10k–50k/month, uses Amazon's first-party audience data off-platform. SD is self-serve, available in Campaign Manager."*
- *"In Europe, Sponsored Display's audience targeting is GDPR-advantaged — it operates within Amazon's first-party walled garden, avoiding the third-party cookie consent requirements that complicate Meta and Google retargeting."*
- *"Placement bid multipliers are your lever for competitive positioning. A 100% top-of-search multiplier can double your effective bid for premium real estate without changing your base bid."*

---

## ✏️ Quick Self-Check

Recite these from memory before any exam or interview:

1. ACoS formula, TACoS formula, and why they differ
2. The four tiers of the campaign waterfall and the bid/budget ratios for each
3. Three keyword match types, with an example search query that would and would not trigger each
4. The four auto campaign targeting sub-types (close, loose, substitutes, complements)
5. One key difference between running Amazon Ads in the US vs. in Germany
