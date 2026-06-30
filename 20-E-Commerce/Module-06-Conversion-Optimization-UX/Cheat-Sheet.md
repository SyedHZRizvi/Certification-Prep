# 📋 Module 6 Cheat Sheet: Conversion Optimization & UX

> Print and tape. CVR is the multiplier that decides whether paid spend pays back.

---

## 📊 DTC (Direct-to-Consumer) CVR Benchmarks (2026)

| Category | Median | Top quartile |
|----------|--------|--------------|
| Beauty | 2.5-3.5% | 5-7% |
| Apparel (mid) | 1.8-2.8% | 4-6% |
| Apparel (premium) | 1.0-2.0% | 3-4% |
| Furniture | 0.4-0.8% | 1.2-2.0% |
| Wellness | 2.0-3.5% | 5-8% |
| Electronics | 1.5-2.5% | 3-5% |
| Subscription | 3.5-5.5% | 8-12% |

🧠 **Top quartile = 3-5x median.** Driven by CRO discipline.

---

## 🧪 Kohavi/Tang/Xu Seven Principles

```
1. Controlled experiment (random assignment, not pre-post)
2. Sample size calculated BEFORE launch
3. 80% power + p < 0.05
4. Check SRM (sample-ratio mismatch) before reading
5. NEVER peek
6. Track guardrail metrics
7. Mind novelty + primacy effects (run ≥ 2-3 cycles)
```

🚨 **P < 0.05 ≠ "95% chance variant is better"**, it means "< 5% probability of this data if no real effect."

---

## 📐 Sample Size Formula

```
n per variant ≈ 16 × p(1-p) / δ²

Example: baseline 2.5% CVR, target 10% relative lift
n = 16 × 0.025 × 0.975 / (0.0025)² ≈ 62,400/variant
```

---

## ⚡ Core Web Vitals (2026)

```
LCP  ≤ 2.5 seconds  (Largest Contentful Paint)
INP  ≤ 200 ms       (replaced FID March 12, 2024)
CLS  ≤ 0.1          (Cumulative Layout Shift)
```

**Walmart 2012:** every 1 second = +2% CVR.

---

## 🛒 The Six Pages

| Page | CVR contribution | Top tests |
|------|------------------|-----------|
| Homepage | 0.5-1.5% | Hero, social proof |
| Collection | 1-2% | Filter UX, sort, scroll |
| PDP | 2-5% | Images, reviews, sticky ATC |
| Cart | 35-55% c2c | Free-ship bar, upsells |
| Checkout | 65-80% | Express wallets, guest |
| Search | 1-3% | Autocomplete, no-result |

---

## 🏷️ The PDP 10 (MEMORIZE)

```
1. 6-12 product images
2. Image zoom
3. Product video (15-30s)
4. Clear price + currency
5. Stock status
6. Trust signals (reviews ★, badges)
7. Description ≥ 200 words
8. Specs table
9. Customer reviews + UGC photos
10. Sticky ATC on mobile
```

---

## 🚪 Checkout, Baymard 2024

```
Abandonment reasons:
49%, Unexpected shipping cost
24%, Required account creation
22%, Don't trust the site with card
17%, Too long / complicated

Best practices:
- Email entry FIRST (no account required)
- Address autocomplete (Google Maps / Loqate)
- Express wallets ABOVE form fill
- Guest checkout ALWAYS
```

---

## 🔍 Site Search Vendors

| Vendor | Best for |
|--------|----------|
| Algolia | Industry leader; NeuralSearch (AI) since 2023 |
| Constructor | DTC-focused AI ranking |
| Searchspring | Mid-market |
| Klevu | Shopify-focused AI |
| Native (Shopify/Magento) | Free, basic, < $5M |

🧠 **No-result rate target: < 1.5%**

---

## 🤖 Personalization Vendors

| Vendor | Best for |
|--------|----------|
| Mutiny | B2B (Business-to-Business) / SaaS landing pages |
| Dynamic Yield | Enterprise |
| Optimizely Personalization | CMS-integrated |
| Bloomreach | Content + commerce |
| Klaviyo Web/Push | DTC, predicted-CLV signals |
| Shopify Audiences | First-party Shopify |

**Honest lift: 3-8%**

---

## 🛍️ Reviews, Yotpo 2024 CVR Lift

```
0-9 reviews:    1.5x baseline
10-99 reviews:  2.0x baseline
100+ reviews:   2.8x baseline
```

Collection cadence: D7 ask → D14 re-prompt → D21 cease.

---

## 🎯 Heatmaps + Qualitative

| Tool | Cost | Notes |
|------|------|-------|
| Microsoft Clarity | Free, unlimited | Heatmaps + replays |
| Hotjar | $39-399/mo | Polished UX |
| FullStory | Enterprise | Session intelligence |
| UsabilityHub | Free + paid | 5-second tests |

---

## ⚡ Failure Modes

- ❌ Running tests without pre-registered hypothesis
- ❌ Peeking mid-flight
- ❌ Under-powered tests (10K visitors for 3% lifts)
- ❌ No guardrail metrics (variant kills speed; goes unnoticed)
- ❌ Personalization without segmentation hygiene
- ❌ Ignoring site speed for the 1% CRO wins
- ❌ Reviews not collected systematically

---

## 🏆 Exam Power Phrases

✅ "Pre-registered hypothesis + MDE..."
✅ "SRM check before reading..."
✅ "20% negative-result rate = honest math..."
✅ "LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1..."
✅ "6-12 images + zoom + sticky ATC..."

❌ "P < 0.05 means 95% probability..." (wrong)
❌ "Required account checkout..." (wrong)
❌ "Single-shipping-cost-test fixes everything..." (wrong)

---

## 🗓️ Key Dates

- **2010**, Saleh & Shukairy *Conversion Optimization* published
- **2020**, Kohavi/Tang/Xu textbook published (Cambridge UP)
- **2024 March 12**, INP replaced FID as Core Web Vital
- **2023**, Algolia NeuralSearch GA
- **2024**, Yotpo + Klaviyo benchmark refreshes

---

## ✏️ Quick Self-Check

1. The 7 Kohavi principles? ___
2. Sample-size formula? ___
3. Core Web Vital thresholds (LCP, INP, CLS)? ___
4. PDP 10 elements? ___
5. Top 3 cart-abandonment reasons (Baymard 2024)? ___
6. Reviews CVR lift at 100+ count? ___

If all 6 cleanly in 90 sec, you own this module. ✅

---

➡️ [Module 7: Paid Acquisition for E-Commerce](../Module-07-Paid-Acquisition-E-Commerce/Reading.md)
