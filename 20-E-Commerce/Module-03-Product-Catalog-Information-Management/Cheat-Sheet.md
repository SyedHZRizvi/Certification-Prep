# 📋 Module 3 Cheat Sheet: Product Catalog & PIM

> Print and tape to your monitor. PIM hygiene = the foundation of every other discipline.

---

## 📚 The 5 Adjacent Systems

```
PIM   → Product Information Management (master record)
ERP   → Finance + accounting
PLM   → Product Lifecycle (design → manufacture)
DAM   → Digital Assets (images, video)
CMS   → Marketing content
```

PIM is the GLUE for customer-facing channels.

---

## 🏗️ PIM Vendor Cheat Sheet

| Vendor | Pricing | Best for |
|--------|---------|----------|
| Akeneo Community | Free (GPL) | Startups, eval |
| Akeneo Cloud | $50K-$200K/yr | Mid-market DTC |
| Salsify | $80K-$400K/yr | Brand manufacturers |
| Pimcore | Free OSS + commercial | Custom builds |
| Plytix | $15K-$80K/yr | SMB fast launch |
| inRiver | $100K-$500K/yr | Enterprise multi-channel |

---

## 🆔 GTIN Identifier Family (MEMORIZE)

```
UPC-A    → 12 digits → North American retail
EAN-13   → 13 digits → European retail
EAN-8    → 8 digits  → Small packages
ISBN     → 10/13     → Books (now in GTIN-13)
ITF-14   → 14 digits → Shipping cartons
GTIN-14  → 14 digits → Umbrella standard
```

🧠 **GS1** = the standards body (gs1.org).

---

## 📐 Three-Level Attribute Hierarchy

```
UNIVERSAL          → Brand, model, GTIN
FAMILY-SPECIFIC    → Material, thread count, weave (per Family)
CHANNEL-SPECIFIC   → Amazon bullets, Google product_type
```

---

## 🌳 Akeneo Core Concepts

```
FAMILY        → Shared attribute set
ATTRIBUTE     → Single data point (with type + constraints)
CHANNEL       → Destination (Shopify, Amazon-US, Amazon-UK, Print)
LOCALE        → Language + region (en_US, fr_FR, de_DE)
COMPLETENESS  → % required attributes filled per channel/locale
```

🚨 Family ≠ Category. One Family, many Categories.

---

## 🖼️ Image Specs by Channel

| Channel | Background | Min size | Notes |
|---------|-----------|----------|-------|
| Amazon main | **#FFFFFF pure white** | 500×500 | Strict |
| Amazon variant | Pure white | 500×500 | |
| Google Shopping | Any | 100×100 | |
| Meta Catalog | Any | 500×500 rec | |
| Shopify | Any | n/a | |
| eBay | White preferred | 500×500 | |

🧠 **6-12 images per product minimum** (Baymard 2024).

---

## 🌐 Localization Stack

```
TRANSLATION     → DeepL, Smartling, Lokalise, AI-augmented
CURRENCY        → Per-locale prices (not exchange rates)
UNITS           → Metric vs imperial
DATE/NUMBER     → DD/MM/YYYY vs MM/DD/YYYY; comma vs period
CULTURAL        → Image alternatives, color symbolism
```

---

## 💰 Pricing Strategy Patterns

| Strategy | Catalog Implication |
|----------|---------------------|
| MSRP | One price per SKU |
| Channel-specific | Different per channel |
| MAP enforcement | Floor for resellers |
| Dynamic | Demand/time/segment |
| B2B price lists | Per-customer |
| Geo-pricing | Per-region |

---

## 🧪 PIM Dashboard Metrics

```
Attribute completeness    → > 95% priority attrs
GTIN coverage             → > 95% branded SKUs
Image coverage (≥6)       → > 95%
Title length compliance   → > 95%
Description ≥ 200 words   → > 90%
Category-mapping accuracy → > 95%
Translation completeness  → > 95% per locale
Feed disapproval (Google) → < 5%
Listing suppression (AMZN)→ < 2%
"No result" search rate   → < 1.5%
PDP LCP                   → < 2.5s
```

---

## 🤖 AI in PIM (2026)

| Capability | Tools |
|-----------|-------|
| Auto-PDP descriptions | Salsify ProductXM, Lily AI, Claude |
| Auto-fill from images | Lily AI, Akeneo AI |
| Auto-translate | DeepL Pro, Smartling AI |
| Auto-categorize | Algolia, Salsify Cat-AI |
| Image quality | Bynder Smart Crop |
| Storefront LLM | Shopify Sidekick |

🚨 **EU AI Act 2024:** AI-generated product CLAIMS require transparency.

---

## ⚡ Common PIM Failure Modes

- ❌ Three Google Sheets pretending to be a PIM
- ❌ PIM with no governance / no quality scoring
- ❌ PIM-as-bottleneck on new launches
- ❌ Channel-specific PIM silos
- ❌ No DAM integration (images in Dropbox)
- ❌ No GTIN strategy (private-label)

---

## 🏆 Exam Power Phrases

✅ "Family is attribute set, not taxonomy..."
✅ "GTIN required for branded Google Shopping..."
✅ "Pure white #FFFFFF for Amazon main image..."
✅ "Universal → Family-specific → Channel-specific..."
✅ "Completeness per channel/locale..."

❌ "SKU = GTIN" (wrong)
❌ "Family = Category" (wrong)
❌ "Near-white background works for Amazon" (wrong)

---

## 🛡️ Compliance Anchors

- **GS1 standards** — gs1.org (registration $250-$15,000)
- **Google Product Taxonomy** — 5,400 categories
- **Amazon Brand Registry** — requires registered trademark
- **eBay GTIN requirement** — "Brand New" condition above $25
- **EU AI Act 2024** — PIM-AI transparency on claims

---

## ✏️ Quick Self-Check

1. PIM vs ERP vs PLM vs DAM vs CMS? ___
2. GTIN identifier types? ___
3. Akeneo Family vs Category? ___
4. Amazon main image background rule? ___
5. Top 5 PIM dashboard metrics? ___
6. AI-PIM transparency requirement source? ___

If all 6 answered cleanly in 90 sec, you own this module. ✅

---

➡️ [Module 4: Payments, Tax & Fraud](../Module-04-Payments-Tax-Fraud/Reading.md)
