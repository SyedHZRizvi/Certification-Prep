# 📋 Module 10 Cheat Sheet: Cross-Border, B2B & Composable Commerce

> Print and tape. The closing module, and the one with the most regulation-trap questions.

---

## 🌍 Cross-Border Tax Matrix (MEMORIZE)

| Region | Mechanism | Threshold | Who Collects |
|--------|-----------|-----------|--------------|
| US sales tax | Economic nexus, post-*Wayfair* (2018) | $100K-$500K state-dependent | Seller (or marketplace facilitator) |
| US marketplace | Marketplace Facilitator laws (47 states + DC) | N/A | Marketplace (Amazon, eBay) |
| EU OSS | EU-established seller, cross-EU B2C | EU resident | EU seller |
| EU IOSS | Non-EU seller | ≤€150 parcel | Non-EU seller (registered) |
| EU standard | Customs broker / courier | >€150 | Buyer or courier |
| UK VAT | Single registration | £85K | Seller |
| Canada | GST/HST + provincial PST | C$30K | Seller (provincial varies) |

🧠 IOSS = ≤€150 + non-EU. OSS = EU seller cross-EU. US De Minimis = $800.

---

## 🚚 Cross-Border Delivery Models

```
DDU = buyer pays customs on delivery → ~20% abandonment
DDP = seller pre-pays all duty + tax → best CX, needs DDP-capable carrier
Local fulfillment = inventory pre-positioned → becomes domestic e-com
```

---

## 🇪🇺 EU Regulation Cheat Sheet

| Regulation | Effective | Scope | Penalty |
|-----------|-----------|-------|---------|
| GDPR (Reg. 2016/679) | May 25, 2018 | EU data subjects | 4% global rev / €20M |
| DSA (Reg. 2022/2065) | Feb 17, 2024 (VLOPs) | Marketplaces + VLOPs | 6% global rev |
| DMA (Reg. 2022/1925) | March 7, 2024 | Gatekeepers | 10% global rev |
| IOSS (2021 VAT reform) | July 1, 2021 | Non-EU ≤€150 | VAT non-compliance |
| France fast-fashion | 2024 | Ultra-fast-fashion | €5-10/item by 2030 |

**VLOP threshold:** 45M+ EU monthly users.

---

## 🇺🇸 US De Minimis + Marketplace Facilitator

```
De Minimis: $800 threshold (19 USC 1321, Section 321)
  Set $800 in 2016 (up from $200)
  2024-2025 policy restricts Chinese-origin goods
  Shein/Temu ~30% of US De Minimis parcels

Marketplace Facilitator (post-Wayfair 2018):
  47 states + DC
  Amazon, eBay, Etsy, Walmart = collector
  Your own Shopify site = YOU collect (Avalara/TaxJar/Stripe Tax)
```

---

## 💼 B2B vs B2C (MEMORIZE)

| Feature | B2C | B2B |
|---------|-----|-----|
| AOV | $40-$200 | $500-$50K+ |
| Decision-makers | 1 | 3-15 (Gartner CEB, avg ~6.8) |
| Pricing | Public, fixed | Per-account, tiered, negotiated |
| Payment | Card | Net 30/60/90, PO, invoicing |
| Catalog | Public | Buyer-specific (entitlements) |
| Account | Single | Company + multi-user (roles) |
| Sales cycle | Minutes | 30-180 days |
| Return rate | 15-25% | 1-5% |
| Integration | Pixel, GA4 | EDI 850/856/810 + ERP |

---

## 🛒 B2B Platforms

| Platform | Sweet Spot | Strength |
|----------|-----------|----------|
| Adobe Commerce B2B | Enterprise ($200M+) | Deep quoting + ERP |
| Shopify B2B (Plus) | Mid-market $10-200M | Speed, native net terms (GA 2022) |
| BigCommerce B2B Edition | Mid-enterprise | Out-of-box features |
| SAP Commerce Cloud | $1B+ enterprise | SAP-attached |
| Salesforce Commerce B2B | Salesforce CRM shops | CRM-attached |

---

## 📨 EDI Documents (MEMORIZE)

```
850 = Purchase Order
855 = PO Acknowledgment
856 = Advance Ship Notice (ASN)
810 = Invoice
820 = Payment/Remittance
832 = Catalog
```

X12 = US standard. EDIFACT = EU/global.

---

## 🏗️ MACH Decision Tree

```
GMV < $50M    → Suite (Shopify)
$50-200M      → Suite or semi-composable
> $200M       → Composable IF:
                 ├─ Engineering team 15+
                 ├─ Multi-brand / multi-region
                 └─ Frontend velocity = competitive moat
```

Source: Forrester *MACH Adoption Report* 2024.

---

## 🧱 Composable Stack

```
Frontend:  Next.js / Hydrogen / Remix → Vercel/Oxygen/Cloudflare
Commerce:  commercetools | Shopify Storefront API | Adobe Commerce | Vendure
Satellite: Sanity (CMS) · Algolia (search) · Akeneo (PIM) · Stripe (pay)
           OneStock (OMS) · Auth0 (identity) · Avalara (tax)
```

---

## 🔵 Hydrogen + commercetools

- **Hydrogen v2** = React (Remix) framework for Shopify headless; **Oxygen** = edge hosting; adopters Allbirds, Glossier, Ruggable.
- **commercetools** = API-only, headless-only MACH engine ($150K-$2M+/year enterprise; Audi, B&O, Lululemon B2B, Sephora EMEA). 🚨 Brings NO storefront.

---

## 📊 Shein Case Study Numbers

- Founded 2008 (Chris Xu) · 2022 rev **$24B** · Peak valuation **$66B** (Apr 2023)
- 5,000-7,000 new SKUs/day · 5-7 day design-to-ship · 300-unit micro-batch
- ~30% of US De Minimis parcels (with Temu) · Compliance org 50 → 600+ (2022-24)

**Regulatory hits:** DSA Feb 2024 · French fast-fashion law 2024 · US De Minimis restrictions 2024-25 · UK IPO pause 2024.

---

## 🤖 Agentic Commerce (2024-2026 Frontier)

```
AI agents (ChatGPT Operator, Claude Browser Use, Apple Intelligence)
  ↓ discover via Commerce APIs
  ↓ transact via Checkout APIs
MACH wins because it's API-first by design.
Shopify Storefront MCP (2024) = canonical reference.
```

---

## ⚡ Top 7 Failure Modes

1. DDU shipping with no buyer disclosure → 20% abandonment
2. No IOSS for EU ≤€150 → surprise courier fees
3. Selling on Amazon + own site, miscounting tax collector
4. B2B on B2C platform → spreadsheet workarounds
5. Premature composable adoption (<$200M GMV, <10 engineers)
6. Confusing commercetools with Shopify (no storefront)
7. Single-region fulfillment with cross-border arbitrage (Shein 2008-2022)

---

➡️ [Capstone-Project.md](../Capstone-Project.md) · [Practice Exams](../../../Practice-Exams/)
