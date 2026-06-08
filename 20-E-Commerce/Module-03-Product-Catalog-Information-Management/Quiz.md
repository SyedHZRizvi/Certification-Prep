# ✏️ Module 3 Quiz: Product Catalog & PIM

> **Instructions:** Answer all 24 questions. Aim for 20/24 minimum.

---

## Questions

### Q1. PIM stands for: *(Remember)*
A. Product Inventory Management
B. Product Information Management
C. Pricing & Inventory Module
D. Premium Item Marketplace

---

### Q2. GTIN is the umbrella term for: *(Remember)*
A. UPC, EAN, ISBN, ITF-14
B. SKU and ASIN
C. Brand and Model
D. Stock-keeping units

---

### Q3. GS1 is: *(Remember)*
A. A Google product feed format
B. The global non-profit standards body for product identification
C. A PIM vendor
D. An Amazon program

---

### Q4. In Akeneo, a "Family" is: *(Understand)*
A. The customer-facing taxonomy
B. A shared attribute set across products of the same type
C. A pricing rule
D. A merchant team

---

### Q5. Google Merchant Center requires GTIN for: *(Apply)*
A. All products
B. Branded products
C. Private-label only
D. No products

---

### Q6. Amazon's main image must have: *(Remember)*
A. Any background
B. A near-white background
C. A pure white background (#FFFFFF)
D. Black background

---

### Q7. Akeneo Community Edition is: *(Remember)*
A. Free (GPL open source)
B. $50K/year
C. SaaS-only
D. Enterprise-only

---

### Q8. The PIM is NOT the same as: *(Understand)*
A. ERP, PLM, DAM, CMS
B. ERP only
C. The merchant team
D. The marketing team

---

### Q9. A product without GTIN can't run on: *(Apply)*
A. Branded Google Shopping campaigns
B. Email marketing
C. SEO
D. Direct mail

---

### Q10. MAP enforcement means: *(Remember)*
A. Maximum Advertised Price
B. Minimum Advertised Price, brand sets a floor for resellers
C. Most Aggressive Pricing
D. Market Average Pricing

---

### Q11. The three-level attribute hierarchy is: *(Understand)*
A. Brand, Model, SKU
B. Universal → Family-specific → Channel-specific
C. Required, Optional, Hidden
D. Price, Description, Image

---

### Q12. Akeneo's "Completeness" metric measures: *(Remember)*
A. Total product count
B. Percentage of required attributes filled per channel/locale
C. Sales conversion
D. Profit margin

---

### Q13. Home Depot's catalog grew from 700K to 2.5M SKUs because: *(Analyze)*
A. They acquired competitors
B. They opened a third-party marketplace seller program supported by a unified PIM
C. They expanded categories
D. They added stores

---

### Q14. Google Product Taxonomy has approximately: *(Remember)*
A. 500 categories
B. 5,400 categories
C. 100,000 categories
D. Unlimited

---

### Q15. eBay requires GTIN for "Brand New" condition listings above: *(Remember)*
A. $5
B. $25
C. $100
D. No requirement

---

### Q16. Adobe Commerce's "Tier Pricing" feature applies: *(Understand)*
A. Customer-specific prices
B. Quantity discounts (buy 10+ get 10% off)
C. Geo-pricing
D. Time-based pricing

---

### Q17. Lily AI specializes in: *(Remember)*
A. PIM hosting
B. AI-powered product-attribute enrichment from images
C. PIM consulting
D. Print catalogs

---

### Q18. The EU AI Act (2024) classifies PIM-AI generally as: *(Apply)*
A. High-risk (banned)
B. Low-risk with transparency requirements on AI-generated product claims
C. Unregulated
D. Excluded

---

### Q19. Amazon Brand Registry requires: *(Remember)*
A. A registered trademark
B. $5,000 fee
C. 10,000 SKUs
D. US incorporation

---

### Q20. The healthy benchmark for Google Shopping feed disapproval rate is: *(Apply)*
A. < 5%
B. < 25%
C. < 50%
D. Any rate is fine

---

### Q21. Translation Memory tools improve translation quality by: *(Understand)*
A. Translating faster
B. Building glossaries that improve over time across reused phrases
C. Skipping translation
D. Reducing word count

---

### Q22. A B2B catalog differs from a B2C catalog most fundamentally in: *(Evaluate)*
A. Image quality
B. Account-specific pricing, tax handling, and quote-to-cash workflows
C. Color options
D. Page layout only

---

### Q23. Salsify is best positioned for: *(Apply)*
A. Tiny merchants (< 100 SKUs)
B. Brand manufacturers with heavy marketplace presence
C. Restaurants
D. Real estate

---

### Q24. The single biggest PIM failure mode in $10M-$50M DTC brands is: *(Evaluate)*
A. Too many vendors
B. Three Google Sheets pretending to be a PIM (works at 500 SKUs, fails at scale)
C. Too many languages
D. Too many images

---

## 🎯 Answers + Explanations

### Q1: **B. Product Information Management**

### Q2: **A. UPC, EAN, ISBN, ITF-14**
GTIN is the GS1 umbrella term covering all standardized product identifiers.

### Q3: **B. The global non-profit standards body for product identification**
GS1 (gs1.org, founded 1977) maintains GTIN, GLN, EPCIS, and the barcode standards used in retail worldwide.

### Q4: **B. A shared attribute set across products of the same type**
Akeneo's Family = attribute set (e.g., "Bed Sheet" family has thread count, material, weave). Different from Category (taxonomy).

### Q5: **B. Branded products**
Google Merchant Center requires GTIN for products with a brand. Private-label products use MPN + brand combinations.

### Q6: **C. A pure white background (#FFFFFF)**
Amazon's main-image policy is strict. Near-white isn't acceptable; listings get suppressed.

### Q7: **A. Free (GPL open source)**
Akeneo Community Edition is GPL-licensed and free. Cloud Edition is the paid SaaS.

### Q8: **A. ERP, PLM, DAM, CMS**
PIM is adjacent to but distinct from all four. ERP = finance, PLM = manufacturing, DAM = media, CMS = content.

### Q9: **A. Branded Google Shopping campaigns**
Without GTIN, branded queries fail feed approval. Search ads still work, but Shopping doesn't.

### Q10: **B. Minimum Advertised Price, brand sets a floor for resellers**
Common in branded distribution; brands enforce MAP to prevent resellers from price-warring.

### Q11: **B. Universal → Family-specific → Channel-specific**
The three-level hierarchy. Universal applies to all products; family applies to all products in a family; channel-specific is per destination.

### Q12: **B. Percentage of required attributes filled per channel/locale**
Akeneo's core quality metric. A product can be 100% complete in en_US but 60% in de_DE if German translations are missing.

### Q13: **B. They opened a third-party marketplace seller program supported by a unified PIM**
Home Depot's marketplace expansion required the catalog architecture to scale. PIM was the enabler.

### Q14: **B. 5,400 categories**
Google's product taxonomy has approximately 5,400 categories in a tree structure.

### Q15: **B. $25**
eBay's GTIN requirement for "Brand New" listings above $25.

### Q16: **B. Quantity discounts (buy 10+ get 10% off)**
Tier Pricing is quantity-based. Customer Group Pricing is account-specific. Catalog Price Rules are promotional.

### Q17: **B. AI-powered product-attribute enrichment from images**
Lily AI's model has been trained on 100M+ product attributes; auto-fills missing attributes from images.

### Q18: **B. Low-risk with transparency requirements on AI-generated product claims**
PIM-AI is generally low-risk under the EU AI Act, but AI-generated product claims (especially health/safety) require disclosure.

### Q19: **A. A registered trademark**
Brand Registry requires a registered trademark. Vetting takes 2-10 days.

### Q20: **A. < 5%**
A healthy Google Shopping operation runs at < 5% feed disapproval. Home Depot's case went from 18% → < 3%.

### Q21: **B. Building glossaries that improve over time across reused phrases**
Translation Memory tools (Smartling, Lokalise) cache previously-translated segments and reuse them, building per-customer glossaries.

### Q22: **B. Account-specific pricing, tax handling, and quote-to-cash workflows**
B2B requires negotiated price lists per customer, tax-exclusive pricing, custom catalogs, and quote/approval workflows.

### Q23: **B. Brand manufacturers with heavy marketplace presence**
Salsify is positioned for brand-side (manufacturer) PIM with marketplace and retailer-syndication strengths.

### Q24: **B. Three Google Sheets pretending to be a PIM**
Works at < 500 SKUs; collapses at scale. The #1 cause of catalog failure at growth-stage DTC brands.

---

## 📊 Score Yourself

- 23-24/24 → 🏆 Mastered
- 20-22/24 → ✅ Solid
- 16-19/24 → ⚠️ Re-read weak parts
- <16/24 → 🔁 Re-read entire Reading.md

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 4](../Module-04-Payments-Tax-Fraud/Reading.md)
