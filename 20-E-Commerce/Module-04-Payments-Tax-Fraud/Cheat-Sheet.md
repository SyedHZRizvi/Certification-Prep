# 📋 Module 4 Cheat Sheet: Payments, Tax & Fraud

> Print and review before every payment / tax / fraud decision.

---

## 💳 The Payment Stack (MEMORIZE)

```
Consumer
  ↓
Wallet / Card (Apple Pay, Shop Pay, Visa, MC)
  ↓
Network (Visa, Mastercard, Amex)
  ↓
Acquirer (Worldpay, Adyen, Chase)
  ↓
Processor / Gateway (Stripe, Adyen, Braintree)
  ↓
Merchant
```

---

## 🏪 PSP Comparison

| PSP | Pricing (US online) | Best for |
|-----|---------------------|----------|
| Stripe | 2.9% + $0.30 | Default. Best API. |
| Adyen | 0.6% + interchange | Enterprise omnichannel |
| PayPal Braintree | 2.59% + $0.49 | Marketplace + PayPal wallet |
| Shopify Payments | Stripe under hood | Shopify merchants |

---

## 🛡️ PCI-DSS v4.0 Cheat Sheet

```
Effective: March 2022 published
Mandatory: March 2025

Levels (by Visa/MC volume/yr):
1: > 6M transactions   → QSA on-site audit
2: 1M-6M               → SAQ + ASV scan
3: 20K-1M (e-com)      → SAQ + ASV scan
4: < 20K               → SAQ

SAQ Types:
A   = Outsourced (Shopify, Stripe Checkout)
A-EP = Embedded forms (Stripe Elements)
D   = Full burden (self-hosted)

NEW in v4.0: Script management (Req 6.4.3, 11.6.1)
```

---

## 🔐 SCA / 3DS2 / PSD2

```
SCA  = Strong Customer Authentication (PSD2 mandate)
3DS2 = Protocol delivering SCA
PSD2 = EU directive (effective 2019)
PSD3 = Proposed (2023; expected 2026-27)

Two-Factor Requirements (any 2 of 3):
- Knowledge (password)
- Possession (phone/OTP)
- Inherence (biometric)

Exemptions:
- < €30 transactions
- Recurring fixed-amount
- Merchant-initiated
- Trusted beneficiary
- TRA (Transaction Risk Analysis)
```

🧠 **~75% of EU transactions** flow frictionlessly through 3DS2.

---

## 🇺🇸 US Sales Tax — Post-Wayfair (2018)

```
Wayfair v. South Dakota (2018) = economic nexus
Threshold: typically $100K OR 200 transactions/year/state
45 states with sales tax now adopt economic nexus

~10,000 distinct rates (state + local)
Tax vendors: Avalara, TaxJar (Stripe), Vertex, Sovos

MFL = Marketplace Facilitator Law
- Amazon/Walmart/Etsy collect/remit on behalf of 3P sellers
- BUT you still owe tax on DTC sales of same products
```

---

## 🇪🇺 EU VAT Cheat Sheet

```
OSS  = One Stop Shop (EU sellers register once for all 27)
IOSS = Import One Stop Shop (non-EU → EU, ≤€150)

Standard rates:
- Hungary 27% (highest)
- Sweden, Denmark, Croatia 25%
- Germany 19%
- UK 20% (post-Brexit, separate)

Eliminated July 2021: €22 low-value exemption
```

---

## 🌎 Global Tax Quick-Reference

| Region | Tax | Rate |
|--------|-----|------|
| US | Sales tax | Variable, post-Wayfair |
| EU | VAT | 17-27% |
| UK | VAT | 20% |
| Canada | GST + PST/HST | 5% + provincial |
| Australia | GST | 10% |
| Singapore | GST | 9% (2024) |
| Japan | Consumption | 10% |
| India | GST | 5-28% slabs |

---

## 🎯 BNPL Vendors (2026)

| Provider | Notes |
|----------|-------|
| Klarna | UK FCA supervision 2024; IPO planned 2025 |
| Affirm | NASDAQ since 2021; Amazon/Shopify partners |
| Afterpay | Block-owned (acquired 2022, $29B) |
| PayPal Pay-in-4 | Native to PayPal |
| Sezzle | DTC-skewed |

**Merchant cost: 3-6%** · **AOV lift: 20-30%** · **Conv lift: 10-15%**

---

## 🛡️ Fraud Cheat Sheet

```
Chargeback ratios:
< 0.5% — Healthy
0.5-1.0% — Watch
1.0%+ — Visa CMP enrollment
1.5%+ — Excessive CMP; processor termination risk

Types:
- Card-not-present (stolen card)
- Account takeover (account hijack)
- Friendly fraud (customer disputes legit purchase) — 40% of all
- Triangulation (fake reseller)
- Refund fraud
- Loyalty point fraud

Vendors:
- Stripe Radar (free, native, ML)
- Signifyd (0.5-1.5%, chargeback guarantee)
- Kount (Equifax, enterprise)
- NoFraud (mid-market, guarantee)
- Riskified (enterprise AI)

Fraud rates by category:
Travel ~0.2%  Apparel ~0.5%  Electronics ~1.5%
```

---

## 📝 Wallets Cheat Sheet

| Wallet | Notes |
|--------|-------|
| Shop Pay | Fastest checkout (Baymard 2024); cross-merchant on Shopify |
| Apple Pay | 50%+ iOS users; mandatory in Japan |
| Google Pay | Strong Android |
| PayPal | 400M+ global; especially DE, AU |
| Amazon Pay | 50M+; Buy with Prime |

**Wallet checkout = +35-45% conversion on mobile** vs manual card entry.

---

## 🏆 Exam Power Phrases

✅ "Economic nexus post-Wayfair..." (2018)
✅ "IOSS registration for EU cross-border..."
✅ "PCI-DSS v4.0 script management..." (Req 6.4.3, 11.6.1)
✅ "3DS2 frictionless flow..."
✅ "SAQ A reduces PCI burden..."

❌ "Physical presence still required for tax" (wrong post-Wayfair)
❌ "BNPL is unregulated credit" (wrong post-2024)

---

## 🗓️ Key Dates

- **2010** — Stripe founded
- **2018** — Adobe acquired Magento ($1.68B); Wayfair decided
- **2019** — PSD2 SCA effective (EU)
- **July 2021** — EU IOSS / OSS launched; €22 exemption eliminated
- **2022** — PCI-DSS v4.0 published; Klarna 85% valuation crash
- **2024** — UK FCA BNPL regulation announced
- **March 2025** — PCI-DSS v4.0 mandatory

---

## ✏️ Quick Self-Check

1. PCI SAQ types A / A-EP / D? ___
2. SCA exemption examples? ___
3. Wayfair (2018) ruling in one sentence? ___
4. IOSS threshold and use case? ___
5. Chargeback ratio thresholds? ___
6. Klarna 2024 regulatory event? ___

If all 6 answered cleanly in 90 sec, you own this module. ✅

---

➡️ [Module 5: Fulfillment, Logistics & Returns](../Module-05-Fulfillment-Logistics-Returns/Reading.md)
