# Module 3: Product Catalog & Information Management 📚

> **Why this module matters:** Every paid-acquisition dollar, every SEO (Search Engine Optimization) ranking, every marketplace listing, every cross-border expansion ultimately depends on one thing, the quality of your product data. Dirty catalog = dead Google Shopping campaigns, suspended Amazon listings, refunded customs orders, and CRO experiments that can never read. This module gives you the PIM discipline.

---

## 🎯 A Real Story: Home Depot's 2.5M-SKU (Stock Keeping Unit) Catalog Overhaul

In 2018, Home Depot had 700,000 SKUs in its e-commerce catalog. Attribute coverage was inconsistent, many products had a length but no width, a brand but no model number, an image but no alt-text. Customer search and category browse were degrading: search queries like "12-inch under-cabinet LED light, dimmable" returned 312 results instead of 17.

The CMO (Chief Marketing Officer) and CIO commissioned a six-year transformation. By 2024, Home Depot had **2.5 million SKUs** in catalog (a 3.6x increase driven by marketplace expansion to Home Depot's seller program), and the catalog ran on a unified PIM (built in-house on a Salsify-like architecture). Attribute coverage rose from 64% complete to 96% complete across the top 100 priority attributes by category. Site search relevance measured by Search-to-PDP click rate improved by 41%.

What did they do? Three things:

1. **Defined the master attribute schema**, every product family got 50-200 required attributes, governed by a central data team.
2. **Built a supplier portal**, 11,000+ suppliers self-served attribute updates through a structured form (matched to the schema).
3. **Automated quality scoring**, every product had a "Catalog Health Score" visible to the merchant team; low-score products got flagged for remediation.

The result: Home Depot's Google Shopping feed disapproval rate dropped from 18% to under 3%, organic Google traffic to product pages grew 84%, and the marketplace seller program was viable at all only because the catalog architecture could handle the variability.

**The lesson:** PIM isn't a tool. PIM is the operating doctrine that makes every other e-commerce investment work. A dirty catalog kills more paid budgets than any other single failure mode.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Platform choices and architecture patterns, covered in [Module 2](../Module-02-Storefront-Platforms-Architecture/Reading.md)
> - The Long Tail framework, covered in [Module 1](../Module-01-E-Commerce-Fundamentals-Business-Models/Reading.md)
> - Database / data-modeling basics (tables, attributes, primary keys), outside this course
> If any of these are shaky, pause and review before continuing.

---

## 📚 What PIM Actually Is

**PIM = Product Information Management.** A central system of record for product data attributes, variants, media, translations, channel-specific overrides that syndicates clean data to storefronts, marketplaces, ads, and print.

PIM sits between three layers:

```
SOURCE OF TRUTH (PIM)
        ↓
    [Channel-specific transformations]
        ↓
DESTINATION CHANNELS:
  → Storefront (Shopify, Adobe Commerce, BigCommerce)
  → Marketplaces (Amazon, Walmart, eBay)
  → Ad platforms (Google Merchant Center, Meta Catalog)
  → Print catalogs / B2B sales materials
  → Customer-service knowledge bases
```

PIM is NOT the same as:

- **ERP** (Enterprise Resource Planning, financial transactions, inventory accounting)
- **PLM** (Product Lifecycle Management, design, manufacturing, retirement)
- **DAM** (Digital Asset Management, images, videos, files)
- **CMS** (Content Management System, marketing content, blog posts)

🧠 **MEMORIZE THIS.** The PIM stack has four adjacent systems: ERP (finance), PLM (manufacturing), DAM (media), CMS (content). The PIM glues them together for customer-facing channels.

---

## 🏗️ The PIM Vendor Landscape (2026)

| Vendor | Pricing | Best for |
|--------|---------|----------|
| **Akeneo Community Edition** | Free (open source) | Startups, evaluation |
| **Akeneo Cloud Edition** | $50K-$200K/yr | Mid-market DTC (Direct-to-Consumer), multi-locale |
| **Salsify** | $80K-$400K/yr | Brand manufacturers, marketplace-heavy |
| **Pimcore** | Free OSS + commercial | Engineering-heavy custom builds |
| **Plytix** | $15K-$80K/yr | SMB, fast launch |
| **inRiver** | $100K-$500K/yr | Enterprise, multi-channel commerce |
| **Informatica MDM Product 360** | $200K+/yr | Enterprise + master data management |
| **Bynder** | $60K-$200K/yr | DAM-first with PIM add-on |
| **Contentserv** | $100K-$400K/yr | European mid-market |
| **Riversand (Syndigo)** | $150K-$500K/yr | Retail-grade enterprise |

🎯 **Exam tip:** Akeneo Community Edition (free, GPL) is the most commonly named PIM on Adobe Commerce certification questions. It's the "default open-source PIM" for the entire Magento ecosystem.

### Akeneo Architecture

Akeneo is open-source (since 2013), French-founded, raised $135M from Summit Partners in 2022. Architecture: Symfony PHP framework, Elasticsearch indexing, MySQL backend, REST + GraphQL APIs.

Core concepts:

- **Family**, a product type with a shared attribute set (e.g., "Bed sheet" has attributes: material, thread count, size, color, certifications).
- **Attribute**, a single data point (e.g., "thread count" with type integer, min 200, max 1200).
- **Channel**, a destination (e.g., "Shopify", "Amazon US", "Amazon UK", "Print catalog FR"). Each channel has its own locale and currency.
- **Locale**, language + region (en_US, fr_FR, de_DE).
- **Category Tree**, separate per channel; the customer-facing taxonomy.
- **Completeness**, the percentage of required attributes filled for a product in a given channel/locale combination.

🚨 **Trap on the exam:** "Family" in Akeneo is NOT the same as "Category." Family = attribute set. Category = customer-facing taxonomy. A product belongs to ONE family but can be in MANY categories.

---

## 📊 Data Modeling, The Attribute Hierarchy

Every product data model has three levels:

| Level | Example for a bed sheet | Used by |
|-------|------------------------|---------|
| **Universal attributes** | Brand, model, GTIN, manufacturer | All channels |
| **Family-specific attributes** | Material, thread count, weave type | All channels for this family |
| **Channel-specific attributes** | Amazon's "bullet_point_1" through "bullet_point_5", Google's "product_type" | One channel |

🧠 **MEMORIZE THIS.** Universal → Family-specific → Channel-specific. The PIM stores all three; the syndication layer transforms family-specific into channel-specific.

---

## 🆔 GTIN, UPC, EAN, ISBN, The Identifier Family

**GTIN = Global Trade Item Number.** The umbrella term for all standardized product identifiers under the GS1 standards body (gs1.org, founded 1977).

| Identifier | Length | Used for |
|------------|--------|----------|
| UPC (UPC-A) | 12 digits | North American retail |
| EAN-13 | 13 digits | European retail |
| EAN-8 | 8 digits | Small packages |
| ISBN | 10 or 13 digits | Books (now subsumed into GTIN-13) |
| ITF-14 | 14 digits | Shipping cartons (case packs) |
| GTIN-14 | 14 digits | The unified umbrella standard |

GTIN matters because:

- **Google Merchant Center** requires GTIN for branded products. Missing GTIN = feed disapproval = no Shopping Ads.
- **Amazon** requires GTIN for the Amazon Catalog (ASINs are derived from GTINs).
- **Walmart Marketplace** requires GTIN.
- **eBay** requires GTIN for "Brand New" condition listings (above $25).
- **Digital Link** (GS1's 2024 standard), embeds GTIN in URLs for AR/IoT use cases.

🎯 **Exam tip:** A product without a GTIN can't run on Google Shopping for branded queries. Adobe Commerce Business Practitioner asks "what's the blocker for Google Shopping?", the answer is usually GTIN or category mapping.

🚨 **Trap on the exam:** "SKU" and "GTIN" are NOT synonyms. SKU = your internal stock-keeping unit (you control). GTIN = the global standard identifier (assigned by GS1, registered by manufacturer). You can have a SKU without a GTIN (private-label) but never run GS1-required channels without a GTIN.

---

## 🌳 Taxonomy and Category Trees

E-commerce taxonomy answers: "where does this product live in the customer-facing browse tree?"

**Three taxonomy patterns:**
1. **Customer-facing taxonomy**, the navigation tree the shopper sees ("Bedroom > Sheets > Linen Sheets"). Should reflect customer language, not internal categorization.
2. **Internal merchandising taxonomy**, how the merchant team organizes inventory ("Linen sheet sets, Q3 2026, US/EU launch").
3. **Industry-standard taxonomy**, Google Product Taxonomy, Amazon Browse Tree, GS1 Global Product Classification. Required for feed compliance.

Mapping between them is the merchandising team's daily job. Akeneo and Salsify both support "channel-specific category trees", meaning each channel can have its own taxonomy.

**Google Product Taxonomy** (taxonomy.google.com) has ~5,400 categories in a tree structure. A bed sheet maps to `Home & Garden > Linens & Bedding > Bedding > Bedding Accessories > Bed Sheets`. The Google `product_type` attribute can use the Google taxonomy ID (preferred) or a free-text string.

🎯 **Exam tip:** Google Shopping Ads Certification asks about feed attributes. The two required category attributes are `google_product_category` (the Google taxonomy) and `product_type` (the merchant's taxonomy). Both should be populated.

---

## 🖼️ DAM, Digital Asset Management

Product images, videos, swatches, lifestyle photography. Live alongside PIM (often in the same vendor or tightly integrated).

**Image requirements by channel (2026):**

| Channel | Min resolution | Max resolution | Format | Background |
|---------|---------------|----------------|--------|------------|
| Google Shopping | 100x100 | 64MP | JPEG, PNG, WebP, GIF | Any |
| Amazon main image | 500x500 | 10000x10000 | JPEG (preferred) | Pure white (#FFFFFF) |
| Amazon variant | 500x500 | 10000x10000 | JPEG | Pure white |
| Meta Catalog | 500x500 (recommended) | 8K | JPEG, PNG | Any |
| Shopify | No min | 4472x4472 max | JPEG, PNG, WebP | Any |
| eBay | 500x500 | 9000x9000 | JPEG | White (preferred) |

**Best practices:**
- 6-12 images per product minimum (Baymard 2024 conversion benchmark).
- First image is on white (pure #FFFFFF for Amazon).
- Lifestyle / context images for emotion.
- Detail / texture shots for tactile categories.
- Scale shot (with a person or hand) for size context.
- Video (15-30 second product showcase), Shopify 2024: video lifts conversion 5-15%.

🧠 **MEMORIZE THIS.** Amazon's main image MUST be on pure white. A 99.9% white isn't acceptable, listings get suppressed. Use a #FFFFFF fill, not a near-white photo.

---

## 🌐 Localization and Translation

Multi-locale catalogs require:

- **Translation**, product titles, descriptions, attribute names, attribute values.
- **Currency**, price per locale (not just a single exchange rate).
- **Units**, metric vs imperial (cm vs inches, kg vs lbs).
- **Date / number formats**, DD/MM/YYYY vs MM/DD/YYYY; comma vs period decimal separator.
- **Cultural adaptation**, image alternatives (e.g., not all skin tones in product photography).

**Translation strategies:**
- Machine translation (DeepL, Google Translate), fast, cheap, ~85% quality.
- Translation Memory (Smartling, Lokalise), improves over time, glossary-driven.
- Human transcreation, for hero copy and PDP descriptions.
- AI-augmented (Claude / GPT), emerging in 2025-2026; faster than human, higher than MT.

🎯 **Exam tip:** A common Adobe Commerce question: "the brand wants to launch in Germany." The answer involves Akeneo's locale support (de_DE), German VAT handling, currency conversion, and EU-specific compliance (CE markings, GDPR consent, IOSS for cross-border).

---

## 💼 Case Study, Home Depot's PIM Rollout (2018-2024)

**Situation.** In 2018, Home Depot's e-commerce catalog had 700,000 SKUs sourced from 8,000+ suppliers. Attribute coverage was inconsistent: many products had a length but no width; many had a brand but no model number; many had unimaginative product titles like "Light Bulb." The site search team measured a 38% search-result drop-off (searcher clicks → bounces) on long-tail queries. Google Shopping feed disapproval was 18%, meaning ~125K SKUs couldn't run paid Shopping ads on Google.

**Decision.** In 2019, Home Depot's CIO Stephen Holmes and SVP of Digital Hector Padilla commissioned a multi-year PIM transformation:

1. **Defined master attribute schema**, every product family got 50-200 required attributes. Created 22 product-family templates.
2. **Built a supplier portal**, 11,000+ suppliers self-served updates through a structured form matched to the schema.
3. **Automated quality scoring**, every product had a "Catalog Health Score" (0-100). Below 70 triggered remediation.
4. **Expanded the catalog through the Home Depot seller program (marketplace)**, opened to 3rd-party sellers in 2020; reached 1.8M total SKUs by 2022, 2.5M by 2024.
5. **Built channel-specific syndication**, feeds to Google Shopping, Meta Catalog, the Amazon-syndication relationship, and internal print/store-pickup channels.

The team grew from 12 catalog FTEs in 2018 to 86 in 2024 (PIM ops, attribute governance, supplier enablement, image QC, translation).

**Outcome.** By 2024:

- Catalog size: 700K → 2.5M SKUs (3.6x).
- Attribute coverage (top-100 priority attributes): 64% → 96%.
- Google Shopping feed disapproval rate: 18% → < 3%.
- Site-search Search-to-PDP click rate: +41%.
- Organic Google traffic to PDP pages: +84%.
- Online sales grew from $7.7B (2018) to $20.6B (2023, per the annual report).

**Lesson for the exam / for practitioners.** PIM is the foundational discipline that lets everything else compound. A brand can't run Google Shopping at scale, sell on Amazon without listing suppression, or expand internationally without a PIM. The certification bodies test this Adobe Commerce, Google Shopping, Amazon Ads all assume PIM hygiene. The exam-answer pattern: when given a "why isn't our Shopping ROAS (Return on Ad Spend) scaling?" question, the answer is often "catalog data quality," not "more bid optimization."

**Discussion (Socratic).**
- Q1: Home Depot built their PIM in-house (Salsify-like architecture). At what brand scale does in-house PIM make sense, and below which scale does it not?
- Q2: Why did the official answer favor "automated supplier portal" over "the merchant team enters all attributes manually"? What's the trade-off?
- Q3: What's the principle that decided which 100 attributes were "priority"? How would you derive your own priority list?

---

## 🏷️ Pricing Strategies and Catalog Implications

Pricing decisions live in the catalog (or in a separate Pricing Service that the catalog references). Common pricing patterns:

| Pricing strategy | Catalog implication |
|------------------|---------------------|
| **MSRP (manufacturer suggested)** | One price per SKU; same across channels |
| **Channel-specific pricing** | Different price on Amazon vs DTC vs Walmart |
| **MAP enforcement** (Minimum Advertised Price) | Brand sets a floor; resellers can't go below |
| **Dynamic pricing** | Price changes by demand, time, customer segment |
| **B2B (Business-to-Business) price lists** | Different price per customer/account |
| **Geo-pricing** | Different price per region (UK vs US) |
| **Currency conversion** | Price stored in each currency, not converted at checkout |

🚨 **Trap on the exam:** Adobe Commerce's "Tier Pricing" feature applies quantity discounts (buy 10+ get 10% off). It's NOT the same as "Customer Group Pricing" (specific accounts get specific prices) or "Catalog Price Rules" (promotional rules). Memorize the three.

---

## 🧪 Catalog Quality Metrics (the Dashboard)

A mature PIM dashboard tracks at minimum:

| Metric | Healthy benchmark |
|--------|-------------------|
| Attribute completeness (per channel) | > 95% on priority attributes |
| GTIN coverage | > 95% on branded SKUs |
| Image coverage (≥ 6 images) | > 95% |
| Title length compliance (60-150 chars) | > 95% |
| Description length (≥ 200 words) | > 90% |
| Category-mapping accuracy (audit sample) | > 95% |
| Translation completeness per locale | > 95% |
| Feed disapproval rate (Google Shopping) | < 5% |
| Listing suppression rate (Amazon) | < 2% |
| Search "no result" rate (on-site) | < 1.5% |
| PDP load time (LCP) | < 2.5s (Core Web Vitals) |

🧠 **MEMORIZE THIS.** The PIM dashboard above is the operator's daily morning view. When something looks off, you start by checking the catalog metrics, most "marketing problems" are catalog problems in disguise.

---

## 🤝 Supplier Onboarding and Governance

For brands that aggregate from many manufacturers (Home Depot, Wayfair, Faire, Macy's marketplace), supplier governance is a function:

1. **Onboarding form**, vendor uploads attribute data in a structured template matched to the family schema.
2. **Validation rules**, automated checks (required fields, format compliance, image specs).
3. **Manual review**, for net-new SKUs or new suppliers.
4. **Approval workflow**, staging → review → publish.
5. **Quality score**, surfaced back to the supplier; suppliers above 90% get expedited approval.
6. **Marketplace seller policies**, Amazon Brand Registry, Walmart trust score, Home Depot's seller scorecard.

🎯 **Exam tip:** Amazon Brand Registry (registered trademarks, brand-protection tools) is required to sell as a 1P brand. The vetting process takes 2-10 days. Without Brand Registry, you can sell as a 3P seller but have no trademark-protection tools.

---

## 🤖 AI in Catalog Operations (2024-2026)

The biggest shift in PIM is AI-augmented attribute generation:

| Capability | Tools (2026) |
|------------|--------------|
| Auto-generate PDP descriptions | Salsify ProductXM, Lily AI, Claude/ChatGPT |
| Auto-fill missing attributes (from images) | Lily AI, Akeneo AI Module |
| Auto-translate (with quality scoring) | DeepL Pro, Smartling AI, Lokalise AI |
| Auto-categorize (assign to Google taxonomy) | Algolia NeuralSearch, Salsify CategorizationAI |
| Image quality scoring + auto-crop | Bynder Smart Crop, Pimcore Studio |
| Multimodal product Q&A | Storefront LLMs (Shopify Sidekick) |

Lily AI (founded 2017, raised $25M Series B in 2022) is a category leader: its model has been trained on 100M+ product attributes and can auto-fill missing fields from product images alone. Customers include Macy's, Wayfair, and Bloomingdale's.

🎯 **Exam tip:** The EU AI Act (2024, phased enforcement 2025-2027) classifies "AI used in catalogs" as low-risk generally, but flags AI-generated product claims as needing disclosure. Don't let an AI claim a product is "FDA-approved" without verification.

---

## ⚡ Common PIM Failure Modes

1. **Three Google Sheets pretending to be a PIM.** Works at < 500 SKUs; fails brutally at scale.
2. **PIM with no governance.** Suppliers upload junk; no quality scoring; data quality decays.
3. **PIM-as-bottleneck.** Catalog team becomes the rate-limit on new product launches, instead of being the unlock.
4. **Channel-specific PIM silos.** Separate systems for Shopify, Amazon, Google, data drifts apart, customer experience breaks.
5. **PIM without DAM integration.** Images live in Dropbox or a shared drive; image quality is inconsistent.
6. **Catalog without GTIN strategy.** Private-label brands skip GTIN registration → can't expand to Google Shopping or Amazon FBA (Fulfillment by Amazon).

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **PIM** | Product Information Management, system of record for product data |
| **PLM** | Product Lifecycle Management, design and manufacturing |
| **DAM** | Digital Asset Management, images, videos, files |
| **GTIN** | Global Trade Item Number, umbrella for UPC, EAN, ISBN |
| **GS1** | Global standards body for product identification |
| **SKU** | Stock Keeping Unit, internal identifier |
| **Family / Product Type** | Akeneo concept, products sharing an attribute set |
| **Completeness** | Percentage of required attributes filled per channel/locale |
| **MAP** | Minimum Advertised Price |
| **MSRP** | Manufacturer Suggested Retail Price |
| **Channel** | A destination (storefront, marketplace, feed) |
| **Locale** | Language + region (en_US, de_DE, fr_FR) |
| **Variant** | An orderable SKU within a product (size, color combinations) |
| **Brand Registry** | Amazon's trademark-based brand-protection program |
| **Google Product Taxonomy** | Google's 5,400-category standard |

---

## ✅ Module 3 Summary

You now know:

- 📚 What PIM is and what it's NOT (ERP, PLM, DAM, CMS)
- 🏗️ The vendor landscape (Akeneo, Salsify, Pimcore, Plytix, inRiver)
- 📊 The three-level attribute hierarchy (universal, family, channel-specific)
- 🆔 GTIN, UPC, EAN, and the GS1 system
- 🌳 Taxonomy patterns (customer-facing, internal, industry-standard)
- 🖼️ DAM image specs by channel
- 🌐 Localization (translation, currency, units, cultural)
- 🏷️ Pricing patterns and Adobe Commerce-specific concepts
- 🧪 Catalog quality metrics dashboard
- 🤝 Supplier onboarding governance
- 🤖 AI in catalog (Lily AI, Salsify ProductXM)
- 💼 Home Depot's 6-year 700K → 2.5M SKU PIM transformation

**Next steps:**
1. 🎥 Videos.md
2. ✏️ Quiz.md
3. 📋 Cheat-Sheet.md
4. ➡️ [Module 4: Payments, Tax & Fraud](../Module-04-Payments-Tax-Fraud/Reading.md)

---

## 💬 Discussion, Socratic prompts

1. A $25M GMV (Gross Merchandise Value) apparel DTC brand argues they don't need a PIM "because we only have 300 SKUs and Shopify's product admin works fine." Build the strongest argument that they're right and the strongest that they're wrong. At what SKU count / channel count does Shopify's native product admin stop being enough?

2. Home Depot built PIM in-house. Wayfair builds in-house. But most $50M-$500M DTC brands buy Akeneo or Salsify. What's the principle that decides build-vs-buy, and what's the most common mistake when brands try to build?

3. Lily AI claims 95%+ accuracy filling missing attributes from product images. The EU AI Act (2024) requires "transparency" in AI-generated content. How would you design a PIM workflow that uses Lily AI's outputs as drafts but maintains human approval for compliance?

4. Amazon requires GTIN. Google Shopping requires GTIN. Walmart requires GTIN. But the GS1 GTIN registration costs $250-$15,000 depending on prefix block size. A small-batch brand (< 100 SKUs) argues this fee is unjustified. When are they right? When are they wrong? What's the workaround if they're wrong about being right?

5. A B2B catalog and a B2C (Business-to-Consumer) catalog appear superficially similar, both have products, attributes, images, prices. But the operational disciplines around them differ. Identify three operational disciplines that work for B2C but break in B2B, and how you'd redesign each.

---

> **Where this leads.**
> - Inside this course: Module 7 returns to catalog when discussing Google Shopping feed quality; Module 9 returns when discussing GA4 e-commerce event configuration that requires clean PIM data; Module 10 returns when expanding to cross-border (locale, currency, IOSS).
> - Cross-course: [10-ASCM-CSCP Module 4](../../10-ASCM-CSCP/Module-04-Supply-Planning-SOP/Reading.md) covers supply-side master-data discipline that complements PIM.
> - Practice: Practice Exam 1 has ~6 questions drawn from this module (GTIN, Akeneo family vs category, image specs, catalog quality metrics).

---

## 📚 Further Reading (Optional)

- 📖 [Akeneo PIM Documentation](https://docs.akeneo.com/), the canonical reference
- 📖 [GS1 Global Standards](https://www.gs1.org/standards), GTIN, GLN, EPCIS
- 📖 [Google Merchant Center Help](https://support.google.com/merchants), feed requirements
- 📖 [Salsify *Product Experience Management Maturity Model*](https://www.salsify.com/) vendor's framework with useful structure
- 📖 [Akeneo PIM Maturity Model](https://www.akeneo.com/resource/pim-maturity-model/), self-assessment tool
- 📖 [Lily AI *Attribute Intelligence for Retail* whitepaper](https://www.lily.ai/) AI-PIM industry research
- 📖 [Google Product Taxonomy](https://www.google.com/basepages/producttype/taxonomy.en-US.txt), the 5,400-category list
