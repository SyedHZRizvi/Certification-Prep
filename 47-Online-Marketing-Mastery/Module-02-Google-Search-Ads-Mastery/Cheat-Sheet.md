# 📋 Module 02 Cheat Sheet: Google Search Ads Mastery

> One page. Print it. Review before every campaign and before every exam.

---

## 1. Account Hierarchy (4 Levels)

| Level | Controls | Key Rule |
|-------|----------|----------|
| **Account** | Billing, users, conversion tracking, linked GA4 | One account per business |
| **Campaign** | Budget, network, location, language, bidding strategy, ad schedule | One budget = one campaign |
| **Ad Group** | Keyword set + matching ads + (if manual) CPC bid | One THEME per ad group |
| **Keyword / Ad** | Specific search terms bid on; copy shown to users | Keyword in Headline 1 |

**STAG Rule:** 1 Theme → 3–7 Keywords → 1–2 RSAs → 1 Landing Page

---

## 2. Keyword Match Types (Post-2021)

| Type | Syntax | Reach | Control | Example Matches |
|------|--------|-------|---------|-----------------|
| **Broad** | `flowers` | Widest | Lowest | "bouquets," "plants," "florist near me" |
| **Phrase** | `"flower delivery"` | Medium | Medium | "next day flower delivery," "flower delivery London" |
| **Exact** | `[flower delivery london]` | Narrowest | Highest | "flower delivery london," "london flower delivery" |

**BMM is dead** (retired August 2021) — its behavior merged into Phrase Match.

**Mnemonic:** BPE — Bigger to Smaller (Broad > Phrase > Exact)

---

## 3. Quality Score (1–10)

```
QS = f(Expected CTR ~55%  +  Ad Relevance ~22%  +  Landing Page Experience ~22%)
```

| QS | Relative CPC Impact |
|----|---------------------|
| 10/10 | ~50% cheaper than QS 5 |
| 8/10 | ~25% cheaper than QS 5 |
| 5/10 | Baseline |
| 3/10 | ~50% more expensive than QS 5 |
| 1/10 | Up to 400% more expensive |

**To improve QS:** Tighter ad groups → keyword in Headline 1 → intent-matched landing page → fast mobile load time

---

## 4. Key Formulas

### Ad Rank
```
Ad Rank = Max Bid × Quality Score × Extension Impact
```

### Actual CPC (What You Actually Pay)
```
Actual CPC = (Competitor Ad Rank below you ÷ Your Quality Score) + £0.01
```

### ROAS
```
ROAS = Revenue from Ads ÷ Ad Spend
(e.g., £18,000 ÷ £1,000 = 18x = 1,800%)
```

### CPA
```
CPA = Total Ad Spend ÷ Number of Conversions
(e.g., £1,200 ÷ 1,000 = £1.20)
```

---

## 5. Bidding Strategy Decision Tree

```
Conversion history in this campaign?
├── < 30 conv/month → Manual CPC or Maximize Clicks
└── ≥ 30 conv/month → Smart Bidding:
    ├── Fixed-value conversions (leads) → Target CPA (tCPA)
    ├── Variable-value conversions (e-commerce) → Target ROAS (tROAS)
    ├── Maximize volume within budget → Maximize Conversions
    └── Maximize revenue within budget → Maximize Conversion Value
```

| Strategy | Best For | Watch Out |
|----------|----------|-----------|
| **Manual CPC** | New campaigns, learning phase | Labor-intensive |
| **tCPA** | Lead gen, SaaS, fixed-value conversions | Set target too low = Google throttles spend |
| **tROAS** | E-commerce, variable order values | Needs revenue values in conversion tracking |
| **Maximize Conversions** | Full budget utilization | CPA can spike |
| **Maximize Conv. Value** | Revenue maximization | ROAS can drop |

---

## 6. Responsive Search Ads (RSAs)

| Component | Limit | Key Rule |
|-----------|-------|----------|
| Headlines | Up to 15 (max 30 chars each) | Write conceptually diverse — not synonym-spinning |
| Descriptions | Up to 4 (max 90 chars each) | Include CTA in at least one |
| Shown at once | 3 headlines + 2 descriptions | Make each headline independently meaningful |

**Pin sparingly.** Pinning all positions defeats the point of AI testing.

**Ad Strength target:** "Good" or "Excellent" — aim for diverse angles: Price / Urgency / Feature / Benefit / Social Proof / CTA

---

## 7. Ad Assets (Extensions) Reference

| Asset | Clickable? | Best Use |
|-------|-----------|----------|
| **Sitelinks** | Yes | Drive to specific pages (4 links shown) |
| **Callouts** | No | Short phrases: "Free Delivery," "Award-Winning" |
| **Structured Snippets** | No | List values under a header: Occasions: Birthdays, Weddings |
| **Call** | Yes (tap-to-call) | Phone-first B2C/local businesses |
| **Location** | Yes (maps) | Physical stores; builds trust in DE/FR markets |
| **Price** | Yes | E-commerce; show specific products + prices |
| **Lead Form** | In-ad form | B2B lead gen; newsletter sign-up |
| **Image** | Yes | Brand differentiation (search partner sites) |

---

## 8. Performance Max vs. Standard Search

| Factor | Performance Max | Standard Search |
|--------|----------------|-----------------|
| Networks | All (Search, Display, YT, Gmail, Maps) | Search only |
| Control | Low | High |
| Transparency | Limited search term data | Full search term report |
| Conversion req. | Strong data needed | Can start manually |
| Use when | Strong conversion history, creative assets available | New campaigns, brand protection, control needed |

**PMax tip:** Always add brand keywords as negatives in Shared Library to prevent PMax from cannibalising branded search campaigns.

---

## 9. North America vs. Europe Benchmarks

*Industry estimates — vary by sector and campaign maturity*

| Metric | US/Canada | UK | Germany/France/NL |
|--------|-----------|----|--------------------|
| Avg Search CTR (retail) | 2.5–4% | 2.5–4% | 2–3.5% |
| Avg CPC (retail) | $1.20–$2.50 | £0.80–£1.80 | €0.70–€1.60 |
| Healthy ROAS target | 200–400% (growth) | 400–600% (established) | 350–550% |
| Mobile share of clicks | ~65% | ~68% | ~58–62% |

**Germany-specific:** Phone number and address in ads materially improves CTR — German consumers verify before buying. Use Call and Location assets.

**UK/EU GDPR:** Consent Mode v2 required for conversion tracking on EU/EEA visitors. Non-compliance = incomplete data + potential ICO/DPA action.

---

## 10. Negative Keyword Categories (Add These First)

| Category | Example Terms |
|----------|---------------|
| Wrong intent | free, DIY, how to, tutorial, recipe, learn, course |
| Wrong audience | wholesale, bulk, trade, B2B (if B2C), jobs, careers |
| Competitor brand | (add if not deliberately targeting competitors) |
| Wrong product | (e.g., for a florist: artificial, silk, plastic, fake) |
| Wrong geography | Country names if geo-targeting is specific |

**Search Term Report frequency:** Weekly minimum. Every irrelevant query is a negative keyword waiting to be added.

---

## ⚠️ Anti-Patterns (What NOT to Do)

1. **Homepage Sinkhole** — Sending all ads to the homepage. Every ad group needs its own relevant landing page.
2. **Broad Match Without Negatives** — Running broad match with no negative list is burning money. Always pair with weekly search term report review.
3. **Overcrowded Ad Groups** — 50+ keywords in one ad group. Kill relevance. Keep it at 3–7 tightly themed keywords.
4. **Smart Bidding Too Early** — tCPA/tROAS on campaigns with < 30 conversions/month. Build data first with Manual CPC.
5. **Ignoring Extensions** — Extensions are free. Not using them leaves Ad Rank points on the table.
6. **Display Network Left On** — Unchecking "Display Network" is one of the first things to do on every Search campaign. Search and Display audiences behave completely differently.
7. **No Conversion Tracking** — Running any Smart Bidding strategy without verified, accurate conversion tracking. Garbage in, garbage out.

---

## 🏆 Exam Power Phrases

Say these in any Google Ads exam, interview, or client presentation:

- *"Quality Score is not set — it is earned through relevance at every layer: keyword, ad copy, and landing page."*
- *"Ad Rank determines position AND price. A higher Quality Score means you can outrank competitors while paying less per click."*
- *"Smart Bidding is not magic — it requires a learning period of at least 1–2 weeks and a minimum of 30 conversions per month to work effectively."*
- *"The Search Term Report is the most valuable and most underused report in any Google Ads account."*
- *"Performance Max trades control for scale. Use it when you have strong conversion data, creative assets, and can accept reduced transparency."*
- *"Broad match without a negative keyword list is not a targeting strategy — it is an invitation for Google to spend your budget however it likes."*
- *"RSA ad strength of 'Excellent' does not mean the ad will perform well — it means the headlines are diverse. Performance data is what matters."*

---

## ✏️ Quick Self-Check (Recite From Memory)

1. Name the 4 levels of the Google Ads hierarchy and what each controls.
2. State the Ad Rank formula and explain what it means for an advertiser with lower bids but higher Quality Score.
3. Name the 3 components of Quality Score and their approximate weights.
4. When should you use tCPA vs. tROAS? Give a one-sentence rule for each.
5. What does "Search Lost IS (Budget)" mean, and what action does it call for?
