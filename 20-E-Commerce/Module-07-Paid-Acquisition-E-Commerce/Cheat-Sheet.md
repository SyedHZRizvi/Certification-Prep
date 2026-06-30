# 📋 Module 7 Cheat Sheet: Paid Acquisition for E-Commerce

> Print and tape. Paid is where the P&L lives or dies.

---

## 🛒 Google Performance Max (PMax), Day-Zero Settings (MEMORIZE)

```
1. Brand Exclusions          → MOST IMPORTANT day-zero setting
2. Final URL Expansion       → OFF initially
3. Customer Acquisition Goal → Optimize for new customers
4. Audience Signals          → HINTS only (not hard targets)
5. Asset Groups              → 3+ themed clusters
6. Negative keywords         → branded query exclusions
```

🧠 PMax serves on: **Search + Display + YouTube + Discover + Gmail + Maps**

---

## 🔄 Post-iOS 14.5 Measurement Stack

```
Browser:    GA4 (gtag.js), Meta Pixel, TikTok Pixel
   +
Server-side: GA4 Measurement Protocol, Meta CAPI, TikTok Events API
   +
Tag mgmt:   Google Tag Manager (client + server containers)
   +
CDP-style:  Triple Whale, Northbeam, Lifesight
   +
MMM:        Recast, Meta Robyn (open-source), Bain MMM
   +
Incrementality: Geo-holdouts (5-10% market, 4 weeks)
```

**iOS 14.5 ATT, April 26, 2021** | **Opt-out: 70-75%** | **Meta 2022 impact: $10B**

---

## 📱 Meta Advantage+ Shopping (ASC) Cheat Sheet

| Setting | Effect |
|---------|--------|
| ECB cap @ 20% | 80% prospecting (new customers) |
| ECB cap @ 50% | Balanced |
| ECB cap @ 70% | Retention-heavy |
| Audience exclusions | Limited; DABA |

**Setup essentials:**
1. Verify domain in Business Manager
2. Rank top 8 conversion events (AEM)
3. Implement CAPI alongside Pixel
4. Event deduplication via event_id
5. Set ECB cap by stage

---

## 🛍️ Amazon Ads Cheat Sheet

| Campaign Type | What it does |
|---------------|-------------|
| Sponsored Products | Keyword/ASIN-targeted CPC |
| Sponsored Brands | Banner + logo + carousel |
| Sponsored Display | Audience-targeted, on/off Amazon |

**Targeting types (SP):**
- Automatic → Manual keyword harvest
- Manual Keyword (Broad / Phrase / Exact)
- Manual ASIN (competitor conquesting)
- Category (broader)

**Metrics:**
- **ACoS** = Ad Spend / Ad Revenue (target 25-35%)
- **TACoS** = Ad Spend / Total Revenue (the honest measure)

---

## 🎯 TikTok Shop + Spark Ads

```
TikTok Shop launched US: September 2023
Winning 2024 playbook:
  - Brand partners with 10-50 creators
  - Creators make 15-60 sec product videos
  - Spark Ads boost organic post (inherits social proof)
  - Brand pays 5-20% commission + Spark Ad spend
  - Spark Ads outperform brand-created ~2x
```

🧠 **Spark inherits social proof.** Don't use brand-created creative on TikTok.

---

## 🛠️ AI Creative Pipeline

| Stage | Tool |
|-------|------|
| Concept | Claude / GPT |
| Image | Midjourney v7, Flux, Firefly |
| Video | Runway Gen-4, Pika 2.0, HeyGen |
| Voice | ElevenLabs |
| Captions | Captions.ai / Mira |
| Orchestrate | Make.com, n8n |

**Cost:** $0.50-$5/ad (vs $200-$2K human)
**Stack monthly:** ~$180-$300

🚨 **EU AI Act 2024:** AI-synthetic-likeness disclosure required.

---

## 📊 ROAS Math (MEMORIZE)

```
ROAS  = Ad Revenue / Ad Spend
tROAS = Bidding target

CM ROAS = (Ad Revenue × CM%) / Ad Spend

Example:
  $4 revenue × 35% CM = $1.40 contribution
  $0.40 profit per $1 ad spend
```

🧠 **Blended ROAS lies; CM ROAS doesn't.**

---

## 🆔 Google Merchant Center Feed (Required)

```
id, title, description, link, image_link,
availability, price, condition, brand, 
gtin (branded), google_product_category
```

Healthy feed disapproval rate: **< 5%**.

---

## ⚡ Failure Modes

- ❌ No CAPI = 30-40% conversion signal lost
- ❌ No brand exclusions = 20-40% CAC inflation via cannibalization
- ❌ Blended ROAS reported without CM = false profit
- ❌ ACoS measured, TACoS ignored = Amazon Ads cannibalizes organic
- ❌ TikTok without creator strategy = half the CVR
- ❌ Pinterest ignored = missing high-intent shopping
- ❌ Domain unverified + no AEM ranking = Meta tracks wrong event

---

## 🏆 Exam Power Phrases

✅ "Brand Exclusions day-zero..." (PMax)
✅ "CAPI + Pixel with event deduplication..."
✅ "ECB cap forces prospecting..."
✅ "TACoS = honest measure..."
✅ "Spark Ads inherit social proof..."

❌ "Pixel only post-iOS-14.5" (wrong)
❌ "PMax day-zero = increase budget" (wrong)
❌ "ACoS is the whole story" (wrong)

---

## 🗓️ Key Dates

- **April 26, 2021**, iOS 14.5 ATT
- **Late 2021**, PMax launched
- **July 2022**, Smart Shopping deprecated
- **Late 2022**, ASC launched
- **September 2023**, TikTok Shop US launch
- **2023**, Temu $1.7B Meta+Google spend
- **2024**, EU AI Act passed (disclosure required)

---

## ✏️ Quick Self-Check

1. PMax day-zero settings? ___
2. CAPI + AEM purpose? ___
3. ECB cap interpretation at 20% vs 70%? ___
4. ACoS vs TACoS? ___
5. Spark Ads inheritance principle? ___
6. CM-ROAS formula? ___

If all 6 cleanly in 90 sec, you own this module. ✅

---

➡️ [Module 8: SEO, Content & Lifecycle Marketing](../Module-08-SEO-Content-Lifecycle-Marketing/Reading.md)
