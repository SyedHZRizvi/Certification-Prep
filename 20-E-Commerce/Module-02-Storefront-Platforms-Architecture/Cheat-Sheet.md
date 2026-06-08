# 📋 Module 2 Cheat Sheet: Storefront Platforms & Architecture

> Print before any platform decision. The TCO math costs $1M+ to get wrong.

---

## 🏛️ Three Architecture Patterns (MEMORIZE)

```
MONOLITHIC: One platform owns storefront + commerce engine
            (Shopify Basic, Magento Open Source)

HEADLESS:   Decoupled frontend, one commerce engine via API
            (Hydrogen + Shopify, PWA Studio + Adobe Commerce)

COMPOSABLE: Best-of-breed services composed across many vendors
            (commercetools + Algolia + Sanity + Stripe)
```

🧠 **MACH = Microservices · API-first · Cloud-native · Headless**

---

## 🏪 Platform Sweet Spots

| Platform | GMV | TCO Y1 | Best for |
|----------|-----|--------|----------|
| Shopify Plus | $1M-$250M | $40K-$200K | Speed, DTC, opinionated |
| Adobe Commerce | $20M-$500M | $250K-$1.5M | Complex B2B+B2C |
| BigCommerce | $1M-$100M | $30K-$200K | Multi-storefront, no transaction fees |
| Salesforce CC | $100M-$5B | $750K-$5M | Enterprise B2C, Einstein AI |
| Composable (MACH) | $250M-$10B | $1M-$3M | Strategic differentiation |

---

## 🎯 Platform Decision Framework (6 Questions)

```
1. GMV stage?           ($1M / $20M / $250M / $500M+)
2. B2B / B2C / both?
3. Cart/checkout custom logic?
4. International / multi-storefront?
5. In-house engineering capacity?
6. Tech as competitive advantage?
```

---

## 💰 3-Year TCO Comparison (at $50M GMV)

```
Shopify Plus:    $250K-$1.6M
Adobe Commerce:  $950K-$4.95M
Composable:      $1.65M-$6.2M
```

Shopify ≈ 1/3 of Adobe Commerce at this stage.

---

## 🚀 Shopify Stack, Memorize

```
Liquid          → Template language
Online Store 2.0 → 2021; "sections everywhere" + JSON templates
Hydrogen        → React + Remix headless framework (GA 2023)
Oxygen          → Hydrogen hosting on Cloudflare edge
Polaris         → Design system (required for Shopify Apps)
Shop Pay        → +4-12% conversion lift (Baymard 2024 fastest)
Shopify Markets → Multi-region (2021)
Shopify B2B     → B2B module (2023, expanded 2024)
```

---

## 🏗️ Adobe Commerce Stack, Memorize

```
Magento Open Source → Free, GPL-3 (self-hosted)
Adobe Commerce      → Commercial, managed AWS hosting
PWA Studio          → React + Apollo headless framework
Page Builder        → No-code page editor
GraphQL API         → Modern headless API
Magento 2           → Current version line (M1 deprecated June 2020)
```

---

## 🌍 MACH Alliance Vendors (Composable Stack)

| Layer | Vendors |
|-------|---------|
| Commerce engine | commercetools, Elastic Path, Spryker |
| CMS | Contentful, Sanity, Storyblok, Contentstack |
| Search | Algolia, Bloomreach, Constructor |
| Personalization | Bloomreach, Dynamic Yield, Mutiny |
| PIM | Akeneo, Salsify, Plytix |
| Payments | Stripe, Adyen, Mollie |
| Frontend | Vue Storefront, Hydrogen, Next.js Commerce |

---

## 🛡️ PCI-DSS Scope by Platform

| Platform | SAQ Level |
|----------|-----------|
| Shopify Plus | SAQ A (lowest burden) |
| BigCommerce | SAQ A |
| Salesforce CC | SAQ A |
| Adobe Commerce Cloud | SAQ A-EP |
| Magento Open Source (self-hosted) | SAQ D (full burden) |

🧠 PCI-DSS v4.0 mandatory **March 2025**.

---

## 🆚 Salesforce OCAPI vs SCAPI

```
OCAPI = Legacy (Open Commerce API)
SCAPI = New (Shopper API + Customer API), RESTful
```

Salesforce B2C Commerce Architect cert ($400, 65 Q, 105 min) tests this heavily.

---

## ⚡ Common Platform Mistakes

- ❌ Replatform to Adobe Commerce "because we'll scale" at $20M GMV
- ❌ Go composable below $250M GMV
- ❌ Pick Shopify because of one app
- ❌ Self-host Magento on shared infrastructure (PCI nightmare)
- ❌ Ignore multi-storefront need; have to replatform year 2

---

## 🏆 Exam Power Phrases

✅ "Stay on platform, evolve within..." (Allbirds case)
✅ "MACH-aligned best-of-breed..."
✅ "Hydrogen on Oxygen edge..."
✅ "SAQ A reduces PCI burden..."
✅ "Replatforming option-value..."

❌ "Replatform to scale..."
❌ "Composable always wins..."
❌ "Headless = composable..."

---

## 🗓️ Key Dates

- **2006**, Shopify founded; Liquid created
- **2018**, Adobe acquired Magento ($1.68B)
- **2020**, MACH Alliance founded
- **2021**, Online Store 2.0; Adobe Commerce rebrand; Shopify Markets
- **2022**, PCI-DSS v4.0 published; Shopify acquired Remix
- **2023**, Hydrogen GA; Shopify B2B launched
- **March 2025**, PCI-DSS v4.0 mandatory

---

## ✏️ Quick Self-Check

1. Three architecture patterns? ___
2. MACH stands for? ___
3. Shopify Plus GMV sweet spot? ___
4. PCI SAQ levels, A vs A-EP vs D? ___
5. Adobe Commerce headless framework? ___
6. commercetools is what kind of platform? ___

If all 6 answered cleanly in 90 seconds, you own this module. ✅

---

➡️ [Module 3: Product Catalog & PIM](../Module-03-Product-Catalog-Information-Management/Reading.md)
