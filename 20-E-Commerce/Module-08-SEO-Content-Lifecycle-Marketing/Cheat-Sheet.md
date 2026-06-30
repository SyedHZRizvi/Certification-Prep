# 📋 Module 8 Cheat Sheet: SEO (Search Engine Optimization), Content & Lifecycle Marketing

> Print and tape. Organic is the moat; lifecycle is the engine.

---

## 🔍 Four-Layer SEO Stack (fix top-down)

```
1. Crawlability + Indexability  → Filters, params, dupes, robots.txt
2. On-Page Optimization         → Title, H1, meta, schema, breadcrumb
3. Internal Linking + Site Arch → Authority flow, category hubs
4. Off-Page + E-E-A-T           → Backlinks, brand mentions, reviews
```

🧠 **Most failures are Layer 1.** Polish Layer 2 only after crawl hygiene.

---

## 🏷️ PDP-SEO Checklist (MEMORIZE)

| Element | Spec |
|---------|------|
| `<title>` | 50-60 chars, primary keyword + brand |
| `<meta description>` | 150-160 chars, action-oriented (CTR not ranking) |
| H1 | Exact product name |
| Breadcrumb | With `BreadcrumbList` schema |
| Description | 300+ unique words (no manufacturer-default) |
| Specs table | Long-tail keyword surface |
| Reviews + ratings | With `Review` + `AggregateRating` schema |
| FAQ | With `FAQPage` schema |
| Related products | Internal links (authority flow) |
| `Product` schema (JSON-LD) | name, image, description, offers, brand, sku |

---

## 🧱 Schema.org Product (minimum JSON-LD)

```json
{ "@context": "https://schema.org/", "@type": "Product",
  "name": "...", "image": "...", "sku": "...",
  "brand": { "@type": "Brand", "name": "..." },
  "offers": { "@type": "Offer", "priceCurrency": "USD",
    "price": "...", "availability": "https://schema.org/InStock" },
  "aggregateRating": { "@type": "AggregateRating",
    "ratingValue": "4.6", "reviewCount": "1247" } }
```

🚨 Markup MUST match the page. Price-mismatch = manual penalty.

---

## 🚧 Faceted Navigation Solutions (default: noindex + canonical to parent)

| Solution | When |
|----------|------|
| Robots.txt disallow | Zero crawl budget on filter URLs |
| Meta `noindex` | Crawl-time signal but no SERP (Search Engine Results Page) |
| Canonical to parent | Default; preserves authority |
| Selective indexing | High-volume facets → static indexed URLs |

---

## 📐 E-E-A-T + HCU Timeline · CTR (Click-Through Rate) by Position

```
Dec 2022, "Experience" added (E-A-T → E-E-A-T)
Aug 2022, HCU launch | Sep 2023, expansion | Mar 2024, core integration
```

| Pos | CTR (Ahrefs / Soulo 2023) |
|-----|----------|
| 1 | 27.6% |
| 2-3 | 11-15.8% |
| 4-5 | 6.3-8.4% |
| 6-10 | 2.4-4.9% |

🧠 **AI content not banned. Generic AI-scale content gets demoted.**

---

## 📧 Lifecycle Flow Trigger Map (the Klaviyo Five)

| Flow | Trigger | Cadence | Revenue % |
|------|---------|---------|-----------|
| **Welcome** | Email signup | 4-5 emails / 10 days | 5-8% |
| **Abandoned Cart** | Cart, no checkout 1-24h | 1-2h / 24h / 72h | 10-15% |
| **Abandoned Checkout** | Checkout incomplete | 1h / 24h | 8-12% |
| **Post-Purchase** | Order placed | shipping → review → cross-sell | 6-10% |
| **Win-Back** | No purchase 60-180 days | escalating offer | 5-8% |

**Klaviyo 2024 benchmarks:** abandoned-cart open 41-47% · CTR 6-8% · conversion 2.4-3.1% · revenue/recipient $5.50-$9.20.

---

## 📱 SMS vs Email (Postscript 2024) + TCPA

| Metric | Email | SMS |
|--------|-------|-----|
| Open rate | 30-45% | 90-98% |
| Click rate | 1-3% | 8-15% |
| Revenue/send | $0.05-0.15 | $0.30-0.80 |

🧠 **SMS revenue/recipient = 5-8x email.** TCPA penalty $500-$1,500/message.

**TCPA non-negotiables:** Express written consent (non-pre-checked) · "Reply STOP" · 10DLC registration (US, 2023+) · Quiet hours 9pm-8am local.

---

## 🎁 Loyalty Math (Reichheld, *The Loyalty Effect*, HBS 1996)

```
5% retention lift → 25-95% profit lift
```

| Type | Example | Mechanism |
|------|---------|-----------|
| Points | Sephora Beauty Insider | Points per $1 → redemption |
| Tier | Starbucks Rewards | Spend → status unlocks |
| Subscription | Amazon Prime | Annual fee for benefits |

**Sephora Rouge ($1K spend):** ~7% of members → ~30% of revenue. **Starbucks Rewards:** ~60% of US transactions (Q4 2024).

---

## ✍️ Content Funnel (ToFU → BoFU)

| Stage | Type | Example |
|-------|------|---------|
| ToFU | Educational | "How to choose a kitchen knife" |
| MoFU | Buying guide | "Wüsthof vs Shun: 2026 review" |
| BoFU | Use-case | "Best knife for fileting fish" |

2024 winners over-index on MoFU + BoFU. **Editorial PDP** (REI *Expert Advice*): guides internal-link to 5-20 PDPs, building category authority.

---

## ⚡ Failure Modes

- ❌ Filter URLs indexed → wasted crawl + thin-content penalty
- ❌ Schema mismatches page → manual action
- ❌ Discount on abandoned-cart Email 1 → trains discount-harvesting
- ❌ SMS without TCPA → $500-$1,500/message exposure
- ❌ Pure AI content at scale → HCU demotion
- ❌ Canonical as hard exclusion → Google can ignore; use `noindex`

---

## 🏆 Exam Power Phrases

✅ "Layer 1 hygiene before Layer 2 polish..." · "Noindex + canonical to parent..." · "Schema must match page..." · "E-E-A-T = Experience + Expertise + Authoritativeness + Trustworthiness..." · "5% retention → 25-95% profit (Reichheld 1996)..."

❌ "Canonical is a directive" (hint) · "AI content is banned" (it's not) · "Email 1 should have the biggest discount" (Email 3)

---

## 🗓️ Key Dates

- **1996** Reichheld *The Loyalty Effect* · **2014** Glossier launches
- **Aug 2022** HCU launch · **Dec 2022** "Experience" added
- **Sep 2023** HCU expansion · **2023** US 10DLC enforced
- **Mar 2024**, HCU into core ranking

---

## ✏️ Quick Self-Check

1. Four-layer SEO stack? 2. Schema minimum properties? 3. Filter URLs default treatment? 4. The Klaviyo Five? 5. Abandoned-cart 3-email + discount timing? 6. TCPA compliance reqs? 7. Reichheld 5% → ?% math?

If 7/7 in 90 sec, you own this module. ✅

---

➡️ [Module 9: Analytics, Attribution & Marketplaces](../Module-09-Analytics-Attribution-Marketplaces/Reading.md)
