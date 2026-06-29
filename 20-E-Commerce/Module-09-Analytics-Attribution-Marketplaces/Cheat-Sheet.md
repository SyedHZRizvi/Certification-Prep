# 📋 Module 9 Cheat Sheet: Analytics, Attribution & Marketplaces

> Print and tape. Measurement is the courage to kill what's not working.

---

## 📊 GA4 (Google Analytics 4) Event Taxonomy (use EXACT names; case-sensitive snake_case)

| Event | When | Required params |
|-------|------|----------------|
| `view_item_list` | Category/search loaded | `items` |
| `select_item` | Product card click | `items` |
| `view_item` | PDP loaded | `items`, `value`, `currency` |
| `add_to_cart` | Add to cart | `items`, `value`, `currency` |
| `view_cart` | Cart page | `items`, `value`, `currency` |
| `begin_checkout` | Checkout started | `items`, `value`, `currency` |
| `add_payment_info` | Payment done | `+ payment_type` |
| `add_shipping_info` | Shipping done | `+ shipping_tier` |
| `purchase` | Transaction complete | `transaction_id`, `items`, `value`, `currency` |
| `refund` | Refund | `transaction_id`, `items`, `value` |

🚨 `Purchase` ≠ `purchase`. Custom names break GA4 e-commerce reports.

---

## 🧱 GA4 Architecture

```
User → Event → Parameters (25/event; 50 custom dimensions; 50 custom metrics)
        ↓
   Daily BigQuery export (free, sandbox tier; NOT backfilled, enable day 1)
```

**Reporting identities:** Blended (2024 default) · Observed · Device-based.

---

## 🎯 Attribution Model Decision Matrix

| Model | Logic | Use when |
|-------|-------|----------|
| Last-click | 100% to last touchpoint | Legacy only |
| First-click | 100% to first | Brand-awareness focus |
| Linear | Equal across | Simple baseline |
| Time-decay | Recent > distant | Short consideration |
| Position-based (U) | 40/20/40 | Balanced first + last |
| **DDA** | ML; GA4 2023 default | Sufficient volume |
| **MMM** | Aggregate econometric | Budget allocation |
| **Incrementality (geo)** | Causal lift | Quarterly ground-truth |

---

## 🔬 MMM Tools (2026)

| Tool | Owner | Notes |
|------|-------|-------|
| **Robyn** | Meta (open-source, Nov 2021) | Ridge regression |
| **Meridian** | Google (2024) | Bayesian; Ads-integrated |
| **LightweightMMM** | Google (originally PayPal 2022) | Bayesian, lightweight |
| **Recast** | Recast.ai | DTC (Direct-to-Consumer)-focused managed |
| **Walmart Connect MMM** | Walmart (2023+) | First-party purchase data |

🧠 **MMM = aggregate econometrics. Privacy-compliant. No per-keyword optimization.**

---

## 🧪 Incrementality Testing

| Pattern | How | Best for |
|---------|-----|---------|
| **Geo-holdout** | Pause channel 5-10% markets, 4-8 weeks | Meta, Google (gold standard) |
| PSA test | Unrelated PSA to control | Display, video |
| Conversion lift | Platform-native | First-party graded (Meta/Google) |
| Switchback | On/off by week/day | Last-resort, high variance |

🚨 Independent geo-holdout is methodologically cleanest. Quarterly cadence.

---

## 🏬 Marketplace Take-Rate Matrix

| Marketplace | Take rate | Notes |
|-------------|-----------|-------|
| **Amazon US** | 30-45% | $50B+ ad revenue 2024 |
| **Walmart Marketplace** | 20-35% | Fastest-growing |
| **Mercado Libre (LATAM)** | 20-30% | $124B GMV (Gross Merchandise Value) 2024 |
| **JD.com / Tmall (China)** | 20-50% | Localization-heavy |
| **Rakuten (Japan)** | 15-30% | Loyalty-driven |
| **Coupang (Korea)** | 20-30% | Rocket Delivery |
| **Flipkart (India)** | 15-25% | Walmart-owned |
| **Shopee / Lazada (SE Asia)** | 15-25% | 6+ markets |

🧠 **Amazon 30-45% means $40 retail nets $22-$28 before COGS (Cost of Goods Sold).**

---

## 💰 Amazon FBA (Fulfillment by Amazon) Fee Quick-Ref (2026)

```
Referral:     8-15% (15% standard)
FBA fulfill:  $3.06-$5.42 small standard
Storage:      $0.78/cu.ft (Jan-Sep) → $2.40 (Q4)  ← 3x Q4 spike
Inbound:      $0.27-$1.66/unit (new 2024-2025)
Long-term:    $6.90/cu.ft after 271 days
```

---

## 🎁 Walmart Connect, Why It Matters

```
2024 ad revenue:    $4B+ (~30% YoY)
Data advantage:     First-party purchase data ~90% US households
Measurement edge:   MMM-as-a-service to top advertisers (2023+)
Vizio acquisition:  Q4 2024, $2.3B → CTV (Connected TV) measurement
```

🧠 **MMM-blended attribution = competitive moat vs Amazon's click-attributed.**

---

## 📈 Modern Measurement Stack

```
Browser:    GA4, Meta Pixel, TikTok Pixel
Server:     CAPI, Events API (Application Programming Interface), GA4 Measurement Protocol
Identity:   User-ID stitching at login + purchase
Analytics:  GA4 + BigQuery (SQL-level)
Attribution: DDA (in-channel) + MMM (cross-channel)
Truth-serum: Quarterly geo-holdout incrementality
Retail media: Walmart Connect MMM, Amazon Marketing Cloud
```

---

## ⚡ Failure Modes

- ❌ GA4 BigQuery export disabled → no row-level history; never backfilled
- ❌ Custom event names (e.g., `Purchase`) → reports break
- ❌ Trusting Meta's conversion lift alone → first-party grading
- ❌ MTA in 2024 → pixel foundation broken, 30-40% under-counted
- ❌ Amazon = DTC retail price → often net-loss on Amazon
- ❌ Exit Amazon without halo modeling → lose DTC organic from branded search

---

## 🏆 Exam Power Phrases

✅ "GA4 = event-driven, parameter-rich, BigQuery-exportable..." · "DDA in-channel + MMM cross-channel + geo-holdout truth-serum..." · "Amazon take rate 30-45% including fees + ads..." · "Walmart Connect's first-party MMM = moat..."

❌ "Last-click is the modern standard" (DDA is) · "Conversion lift = independent incrementality" (first-party graded) · "MTA is the post-iOS-14.5 standard" (MMM is)

---

## 🗓️ Key Dates

- **1960s-70s**, MMM invented (Marion Harper / McCann)
- **2004**, Hau Lee Triple-A Supply Chain (HBR)
- **April 26, 2021**, iOS 14.5 ATT
- **November 2021**, Meta open-sources Robyn
- **July 1, 2023**, Universal Analytics retired
- **2023**, GA4 DDA default · Walmart Connect MMM-as-a-service
- **2024**, Google Meridian · Walmart Connect $4B+ · Vizio acquisition closes

---

## ✏️ Quick Self-Check

1. GA4 fundamental unit + key events? 2. DDA vs MMM vs incrementality, when each? 3. Amazon take-rate + Q4 storage spike? 4. Walmart Connect MMM advantage? 5. Why geo-holdout > platform lift? 6. Why enable BigQuery export day 1? 7. Hau Lee's Triple-A?

If 7/7 in 90 sec, you own this module. ✅

---

➡️ [Module 10: Cross-Border, B2B (Business-to-Business) & Composable Commerce](../Module-10-Cross-Border-B2B-Composable-Commerce/Reading.md)
