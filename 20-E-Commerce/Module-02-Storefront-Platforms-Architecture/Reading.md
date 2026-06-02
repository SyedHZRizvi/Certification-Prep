# Module 2: Storefront Platforms & Architecture 🏗️

> **Why this module matters:** Picking the wrong platform is the single most expensive mistake in e-commerce. A wrong call costs $200K-$2M and 9-18 months. By the end of this module, you'll be able to walk a CTO through Shopify vs Adobe Commerce vs BigCommerce vs Salesforce vs headless / composable — and defend a recommendation with TCO math.

---

## 🎯 A Real Story: Tobi Lütke's Snowdevil Pivot

In 2004, a 24-year-old programmer named Tobi Lütke opened an online store called Snowdevil to sell snowboards from his garage in Ottawa. He hated the e-commerce software he had to use (Yahoo! Stores, Miva Merchant, OsCommerce — clunky, slow, ugly). So he wrote his own.

A year later, the snowboards weren't selling. The software was. Tobi pivoted, renamed it Shopify, opened it to other merchants, and by 2010 had thousands of customers. In 2015 Shopify IPO'd. By 2024 it powered ~5M stores, processed >$200B GMV, and was the second-largest US retailer after Amazon by GMV.

That pivot — from a single failing snowboard business to a platform — is the central tension every operator faces when picking a stack. Tobi shipped a tool he needed; the platform happened later. **Buy the tool that fits your stage, not the tool that fits your fantasy.** A $2M brand that picks Adobe Commerce because "we'll need it at $100M" will spend a year fighting their stack instead of growing.

This module gives you the decision framework. Five major platform families (Shopify, Adobe Commerce, BigCommerce, Salesforce Commerce Cloud, composable/MACH), the three architecture patterns (monolithic, headless, composable), and the trade-offs that decide where a $10M, $50M, or $250M brand should live.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - The unit-economics language (AOV, CAC, CLV, contribution margin) — covered in [Module 1](../Module-01-E-Commerce-Fundamentals-Business-Models/Reading.md)
> - Basic web architecture (frontend, backend, database, API) — outside this course; see MDN's Web Fundamentals
> - The seven business models — covered in [Module 1](../Module-01-E-Commerce-Fundamentals-Business-Models/Reading.md)
> If any of these are shaky, pause and review before continuing.

---

## 🏛️ The Three Architecture Patterns

E-commerce platforms differ on a single axis: how tightly the storefront (presentation) and the commerce engine (cart, catalog, checkout) are bound together.

### 1. Monolithic

One platform owns everything: storefront templates, catalog, cart, checkout, admin. Shopify (until Hydrogen), Magento Open Source, BigCommerce all started as monoliths.

**Pros.** Fast to launch (1-4 weeks). Single vendor relationship. Themes are pre-built. Updates are vendor-managed. Best for $0-$50M GMV.

**Cons.** Constrained design flexibility. Performance ceiling. Locked into one frontend (Liquid for Shopify, PHTML for Magento).

### 2. Headless

Decouple the frontend from the commerce engine via APIs. Use any frontend framework (React, Vue, Svelte) and call commerce APIs (Shopify Storefront API, Adobe Commerce GraphQL, BigCommerce Storefront API).

**Pros.** Unlimited frontend flexibility. Better performance (server-side rendering, edge caching). Future-proof against frontend frameworks changing.

**Cons.** Engineering-heavy (2-6 engineers needed). 3-9 month implementation. $200K-$1.5M cost. Best for $50M-$500M GMV.

### 3. Composable Commerce (MACH)

Best-of-breed services composed via APIs: commercetools or Elastic Path for cart/checkout, Algolia for search, Contentful or Sanity for CMS, Stripe for payments, Vue Storefront or Hydrogen for frontend.

**Pros.** Each component is best-in-class. Replace any service without touching others. Vendor-lock-in spread across multiple.

**Cons.** Architecture complexity. 6-18 month implementation. $500K-$3M cost. Operationally demanding. Best for $250M+ GMV or strategic enterprise differentiation.

**MACH stands for:** Microservices, API-first, Cloud-native, Headless. Defined by the **MACH Alliance** (machalliance.org, founded 2020).

🧠 **MEMORIZE THIS.** MACH = Microservices, API-first, Cloud-native, Headless. Adobe Commerce Business Practitioner asks about MACH in 2-3 questions.

---

## 🏪 The Five Major Platform Families

| Platform | GMV sweet spot | Typical TCO (Year 1) | Best for |
|----------|---------------|----------------------|----------|
| **Shopify Plus** | $1M-$250M | $40K-$200K | Speed, DTC, opinionated stack |
| **Adobe Commerce** | $20M-$500M | $250K-$1.5M | Complex B2B+B2C, deep customization |
| **BigCommerce** | $1M-$100M | $30K-$200K | Multi-storefront, multi-channel, no transaction fees |
| **Salesforce B2C Commerce Cloud** | $100M-$5B+ | $750K-$5M | Enterprise B2C, Einstein AI, Marketing Cloud integration |
| **Composable (commercetools + Algolia + Sanity)** | $250M-$10B+ | $1M-$3M | Strategic differentiation, omnichannel, B2B+B2C unified |

### Shopify Plus

Shopify Plus (the enterprise tier) costs $2,300-$25,000/month based on GMV. Includes Shop Pay (the fastest checkout on the internet by Baymard 2024 benchmark), Shopify Audiences (first-party retargeting), Launchpad (event automation), Flow (workflow automation), B2B (since 2023), Hydrogen (React framework, GA 2023), Oxygen (Hydrogen hosting).

**Strengths:**
- Fastest time-to-launch (a basic Plus store ships in 2-4 weeks).
- Best app ecosystem (~8,000 Plus-compatible apps).
- Shop Pay checkout converts 4-12% higher than industry baseline (Shopify 2024 commerce trends).
- Polaris design system gives merchants a consistent admin UX.

**Weaknesses:**
- Liquid templating language is showing its age (Shopify is migrating to React/Hydrogen).
- B2B is newer than Adobe Commerce's; sophisticated price-list logic may require custom apps.
- Multi-storefront across regions requires "Shopify Markets" (added 2021) — works but not as flexible as Adobe Commerce's multi-store.

🎯 **Exam tip:** Shopify Theme Developer certification + Shopify Plus certification both test on Liquid + Online Store 2.0 + Polaris. Memorize that Polaris is the design system and Liquid is the template language.

### Adobe Commerce (formerly Magento)

Adobe acquired Magento for $1.68B in 2018. Today there are two flavors:

- **Magento Open Source** (free, self-hosted, GPL-3 license) — the descendant of the original Magento.
- **Adobe Commerce** (commercial, includes managed hosting, B2B module, advanced features) — typical license $40K-$200K/year + hosting.

**Architecture:** PHP-based, MySQL-backed, modular. The PWA Studio (since 2018) provides a headless option with a React frontend.

**Strengths:**
- Deepest B2B feature set (price lists, quotes, approval workflows, company accounts).
- Multi-store / multi-website with shared catalog (one admin manages many storefronts in many regions).
- Massive customization flexibility.
- ~250,000 active Magento Open Source stores worldwide (BuiltWith 2024).

**Weaknesses:**
- Engineering-heavy. A typical Adobe Commerce build needs 4-8 engineers + a 6-12 month timeline.
- Hosting cost is significant ($3K-$30K/month for AWS-hosted).
- Magento 2 upgrade path from Magento 1 (deprecated June 2020) was painful.

🚨 **Trap on the exam:** "Magento" and "Adobe Commerce" are both correct names. The free version is "Magento Open Source"; the paid version is "Adobe Commerce." Adobe rebranded in 2021. Don't confuse the two — Adobe Commerce includes the managed hosting on Adobe-managed AWS infrastructure.

### BigCommerce

Public-company (BIGC on NASDAQ since 2020). Sweet spot: mid-market merchants who want native multi-storefront and multi-channel feeds without Adobe Commerce engineering complexity.

**Strengths:**
- No transaction fees (Shopify Plus charges 0.15-0.5% on top of payments).
- Native channel integrations (Amazon, eBay, Walmart, Google, Meta).
- Multi-storefront out of the box.
- B2B Edition (since 2022).

**Weaknesses:**
- Smaller app ecosystem than Shopify.
- Brand recognition is lower; harder to hire BigCommerce-certified developers.
- Stagnant adoption growth relative to Shopify.

### Salesforce B2C Commerce Cloud (formerly Demandware)

Enterprise-scale (Sephora, Adidas, L'Oréal, Nestlé, Puma). Started as Demandware (founded 1998, IPO 2012, acquired by Salesforce 2016 for $2.8B).

**Strengths:**
- Deep Salesforce ecosystem (Marketing Cloud, Service Cloud, Data Cloud — first-party data unified).
- Einstein AI personalization built in.
- Scales to billion-GMV brands.
- OCAPI (Open Commerce API) and SCAPI (newer, RESTful) for headless implementations.

**Weaknesses:**
- License cost: $500K-$5M+/year.
- Implementation cost: 6-18 months, $1-5M.
- Complexity overshoots most mid-market needs.

🎯 **Exam tip:** Salesforce B2C Commerce Cloud Architect certification ($400, 65 Q / 105 min, ~65% pass) tests OCAPI vs SCAPI heavily. SCAPI (Shopper Commerce API + Customer Commerce API) is the newer RESTful interface; OCAPI is the legacy.

### Composable Commerce (commercetools, Elastic Path, Spryker)

The MACH Alliance vendors. commercetools (Munich-based, founded 2006) is the most-adopted; raised $140M Series C in 2021 at $1.9B valuation; powers Audi, Sephora, Lego, Express.

**Architecture:** Stateless APIs. Each commerce capability is a separate service. Compose with Algolia (search), Stripe (payments), Contentful or Sanity (CMS), Frontastic or Vue Storefront or Hydrogen (frontend), Bloomreach (personalization), Adyen (payments).

**Strengths:**
- Best-of-breed across the stack.
- Replace any component without touching others.
- Highest performance ceiling.

**Weaknesses:**
- Architectural complexity. Need a team that can think in microservices.
- Vendor-management overhead (8-15 vendors to coordinate).
- Highest cost (license fees plus integration engineering).

🚨 **Trap on the exam:** "Headless" and "composable" are NOT synonyms. Headless = decoupled frontend from one commerce engine. Composable = best-of-breed services composed across many engines. You can be headless without being composable (Shopify Hydrogen is headless but uses Shopify's monolithic commerce engine).

---

## 💼 Case Study — Allbirds' Shopify-to-Replatform Journey (2022-2024)

**Situation.** Allbirds IPO'd in November 2021 at $15/share, $4B valuation. By mid-2022 the stock had dropped to ~$2, market cap < $300M. The board mandated a turnaround. The DTC tech stack — built on Shopify Plus with a heavily customized theme — was identified as a 12-month bottleneck: PDP performance was poor (LCP > 4 seconds on mobile), the international expansion required engineering work the team didn't have, and the B2B wholesale arm was outgrowing what the Shopify B2B module supported in 2022.

**Decision.** Allbirds did NOT replatform off Shopify. Instead, in 2023-2024 they ran a parallel-track migration:

- Refactored the customized theme onto Shopify's "Online Store 2.0" (sections-everywhere model) — got upgradeability back.
- Migrated PDP and Collection pages to Hydrogen (React/Remix on Shopify's commerce engine).
- Adopted Shopify Markets for multi-region pricing and tax.
- Stayed on the Shopify B2B module for wholesale (Shopify shipped substantial 2024 B2B updates that closed key gaps).

**Outcome.** PDP LCP improved from 4.1s to 1.9s (Lighthouse 2024 audits). Conversion rate lifted ~9%. International order share grew from 14% to 22% of GMV. Total replatform spend: ~$1.4M vs the $3-4M an Adobe Commerce migration was quoted at.

**Lesson for the exam / for practitioners.** Replatforming is almost never the right answer. The cost of a Shopify-to-Adobe-Commerce or Shopify-to-Salesforce migration is rarely justified by the gains. The right move is usually to *evolve within the platform* — Online Store 2.0 → Hydrogen → Markets → B2B. The exception is when the platform's commerce engine itself can't support the business model (e.g., subscription with complex bundling, B2B with custom pricing logic, multi-tenant marketplace operator) — then replatforming is required. Adobe Commerce Business Practitioner asks "should this company replatform?" questions; the right answer is usually NO with a specific evolution plan, unless the requirement is genuinely engine-level.

**Discussion (Socratic).**
- Q1: Allbirds chose to stay on Shopify and refactor. At what point would the Adobe Commerce option have been correct? What capability would Allbirds need that Shopify couldn't provide?
- Q2: Why did the official answer favor Hydrogen over a pure React frontend on Shopify Storefront API? What does Hydrogen add that a custom React app would have to rebuild?
- Q3: Glossier made a different call in 2023 — they went all-in on Hydrogen for the primary storefront. What's the trade-off Glossier accepted that Allbirds rejected?

---

## 🎯 The Platform Decision Framework — 6 Questions

When you walk a board through a platform choice, ask in order:

1. **What's the GMV stage?** $0-$5M → Shopify (basic). $5M-$50M → Shopify Plus. $20M-$500M → Adobe Commerce or BigCommerce. $250M+ → composable. $500M+ → Salesforce.
2. **B2B, B2C, or both?** B2C-only → Shopify. B2B-only → Adobe Commerce B2B or BigCommerce B2B. Both → Adobe Commerce B2B+B2C or composable.
3. **How custom is the cart/checkout logic?** Standard → Shopify. Highly custom (subscription bundles, multi-line discounts, quote-to-cash) → Adobe Commerce or composable.
4. **International / multi-storefront complexity?** Single-region → Shopify. 2-5 regions → Shopify Markets or BigCommerce. 5+ regions with separate catalogs → Adobe Commerce or composable.
5. **In-house engineering capacity?** < 2 engineers → Shopify (low-engineering). 2-6 engineers → Shopify + Hydrogen or Adobe Commerce. 6+ engineers → composable.
6. **Strategic differentiation through tech?** Tech is commodity → Shopify. Tech is competitive advantage → composable.

🎯 **Exam tip:** Adobe Commerce Business Practitioner often gives scenarios with conflicting answers across these questions. The "right" answer is usually the platform that solves the MOST CONSTRAINING requirement — usually B2B complexity or multi-storefront.

---

## ⚡ Total Cost of Ownership — Year 1 vs 3-Year

The biggest mistake in platform decisions: comparing year-1 license cost. The right comparison is **3-year TCO** including license, hosting, engineering build, app stack, agency support, and replatform option-value.

| Cost line | Shopify Plus (3yr) | Adobe Commerce (3yr) | Composable (3yr) |
|-----------|-------------------|----------------------|------------------|
| License / hosting | $90K-$900K | $300K-$1.8M | $200K-$1.5M |
| Initial build | $40K-$200K | $300K-$1.5M | $800K-$2.5M |
| App stack (10-20 apps) | $30K-$90K | $50K-$150K | $50K-$200K |
| Engineering / agency ongoing | $90K-$450K | $300K-$1.5M | $600K-$2M |
| Replatform option value | $0 (in-platform) | $0 | $0 |
| **3-year TCO** | **$250K-$1.6M** | **$950K-$4.95M** | **$1.65M-$6.2M** |

🧠 **MEMORIZE THIS.** Shopify Plus 3-year TCO is typically 1/3 to 1/2 of Adobe Commerce 3-year TCO for equivalent functionality at the $20M-$80M GMV stage. Adobe Commerce becomes more cost-effective at $100M+ with complex B2B/multi-storefront needs.

---

## 🚦 Shopify Hydrogen, BigCommerce Stencil, and the Headless Spectrum

If you decide to go headless on a Shopify or BigCommerce monolith, the choices are:

| Frontend framework | Backend platform | Notes |
|--------------------|------------------|-------|
| Shopify Hydrogen (React + Remix) | Shopify | GA Jan 2023; hosted on Oxygen |
| Next.js Commerce | Any (BigCommerce template) | Vercel-curated reference |
| Vue Storefront 2 | Any (commercetools, Adobe Commerce, Shopify, Magento) | Open source |
| Frontastic (commercetools) | commercetools | Acquired by commercetools 2021 |
| Builder.io | Any | Visual headless CMS |

Hydrogen is the path of least resistance for Shopify merchants going headless — it's officially supported, integrates with Shopify's Storefront API natively, and Oxygen hosting is on Cloudflare's edge (Shopify chose Cloudflare for compute in 2022).

🎯 **Exam tip:** Hydrogen replaced Shopify's earlier "Hydrogen + Oxygen Beta" (2021) and became GA in 2023. It's built on Remix (acquired by Shopify, late 2022). Adobe Commerce's equivalent is PWA Studio (React/Apollo on the GraphQL API).

---

## 🌍 The MACH Alliance and Composable Commerce

Founded 2020 by commercetools, Contentstack, EPAM, Valtech. Now 100+ members. The MACH Alliance certifies vendors who meet Microservices-API-Cloud-Headless principles. The 2024 MACH Alliance research report estimates 50%+ of new enterprise commerce projects in 2024-2026 are MACH-aligned.

Key vendors:

- **Commerce engine:** commercetools, Elastic Path, Spryker, Vue Storefront
- **CMS:** Contentful, Sanity, Storyblok, Contentstack
- **Search:** Algolia, Bloomreach, Constructor, Searchspring
- **Personalization:** Bloomreach, Dynamic Yield, Mutiny
- **PIM:** Akeneo, Salsify, Plytix
- **Payments:** Stripe, Adyen, Mollie
- **OMS/Order management:** Fluent Commerce, Aptos, Manhattan Active Omni

🚨 **Trap on the exam:** "Composable" implies "best-of-breed across vendors." A single-vendor stack (e.g., Adobe Commerce + Adobe Experience Platform + Adobe Target) is NOT composable, even if it's API-first. Composable specifically means multi-vendor.

---

## 🔧 The Shopify Polaris Design System

Polaris (polaris.shopify.com) is Shopify's design system covering component library, content guidelines, accessibility, and merchant-facing UX patterns. Required for Shopify App Store apps. Used by Shopify itself.

Key principles:

- Be opinionated (Shopify is famously opinionated)
- Build for craft (high-quality components, not many components)
- Make the merchant successful (every component decision is justified by merchant value)
- Be inclusive (WCAG 2.1 AA baseline)

🎯 **Exam tip:** Shopify Theme Developer certification asks Polaris questions. Memorize: Polaris is the design system, Liquid is the template language, Online Store 2.0 (2021) introduced "sections everywhere" and JSON templates. Themes built before Online Store 2.0 are "vintage themes" and can't use the sections-everywhere model.

---

## 🛡️ Security, Compliance, and Platform Choice

Every platform decision has security implications. The PCI-DSS v4.0 standard (mandatory March 2025) and ISO/IEC 27001:2022 are the baselines.

| Platform | PCI scope on you | ISO 27001 default |
|----------|------------------|--------------------|
| Shopify Plus | Minimal (SAQ A) — Shopify handles cardholder data | Yes (Shopify certified) |
| Adobe Commerce Cloud | SAQ A-EP — Adobe-managed infrastructure | Yes (Adobe certified) |
| Magento Open Source (self-hosted) | SAQ D — full PCI burden on you | Your responsibility |
| BigCommerce | SAQ A | Yes |
| Salesforce B2C Commerce Cloud | SAQ A — Salesforce handles | Yes |
| Composable | Depends on payment processor | Depends |

🧠 **MEMORIZE THIS.** SAQ levels: A = lowest burden (e-commerce, redirect to processor). A-EP = e-commerce with merchant-controlled embedded forms (iframes). D = full PCI compliance burden. Shopify and BigCommerce are SAQ A; self-hosted Magento is SAQ D.

---

## ⚡ Common Failure Modes in Platform Decisions

1. **Replatforming a $20M brand to Adobe Commerce "because we'll scale."** $1M-$2M spent before reaching the scale the platform was chosen for. By the time scale arrives, requirements have changed.
2. **Going composable too early.** Below $250M GMV the engineering overhead exceeds the marginal benefit.
3. **Picking Shopify because of an app, not the platform.** App ecosystems shift; the platform's core capability matters more.
4. **Self-hosting Magento Open Source on shared infrastructure.** PCI-DSS Level 1 requirements collapse on shared hosting; managed hosting is mandatory.
5. **Ignoring the multi-storefront question early.** Brands that launch single-region on Shopify Plus, then need 5 regions with localized catalogs in year 2, often replatform — that's a $1M tax that could have been avoided with BigCommerce or Adobe Commerce day-1.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Monolithic** | Single platform owns storefront + commerce engine |
| **Headless** | Decoupled frontend, single commerce engine via API |
| **Composable / MACH** | Best-of-breed services composed via APIs |
| **MACH** | Microservices, API-first, Cloud-native, Headless |
| **Shopify Plus** | Enterprise Shopify tier ($2.3K-$25K/mo) |
| **Liquid** | Shopify's template language |
| **Hydrogen** | Shopify's React/Remix headless framework (GA 2023) |
| **Oxygen** | Shopify's Hydrogen hosting (Cloudflare edge) |
| **Online Store 2.0** | Shopify's 2021 "sections everywhere" theme architecture |
| **Polaris** | Shopify's design system |
| **Magento Open Source** | Free GPL version (descendant of original Magento) |
| **Adobe Commerce** | Adobe's commercial Magento offering |
| **PWA Studio** | Adobe Commerce's React/Apollo headless framework |
| **Salesforce B2C Commerce Cloud** | Enterprise platform (formerly Demandware) |
| **OCAPI / SCAPI** | Salesforce Commerce's legacy / new APIs |
| **commercetools** | The leading composable-commerce engine (MACH Alliance founder) |
| **SAQ A / A-EP / D** | PCI-DSS Self-Assessment Questionnaire levels |

---

## ✅ Module 2 Summary

You now know:

- 🏛️ The three architecture patterns (monolithic, headless, composable)
- 🏪 The five major platform families (Shopify, Adobe Commerce, BigCommerce, Salesforce, composable)
- 🎯 The 6-question platform decision framework
- ⚡ 3-year TCO comparison by stage
- 🚦 Headless options (Hydrogen, PWA Studio, Vue Storefront, Next.js Commerce)
- 🌍 The MACH Alliance and composable ecosystem
- 🔧 Shopify Polaris design system
- 🛡️ Platform choice's PCI / ISO 27001 implications
- 💼 Allbirds' Shopify-to-Hydrogen replatform case

**Next steps:**
1. 🎥 Watch the videos in `Videos.md`
2. ✏️ Take `Quiz.md`
3. 📋 Review `Cheat-Sheet.md`
4. ➡️ Move to [Module 3: Product Catalog & PIM](../Module-03-Product-Catalog-Information-Management/Reading.md)

---

## 💬 Discussion — Socratic prompts

1. A $35M GMV DTC brand on Shopify Plus is hitting a custom-checkout requirement that Shopify's Checkout Extensibility (2023+) can't quite meet. The CTO proposes a 12-month Adobe Commerce replatform at $1.4M. Build the strongest argument FOR replatforming and the strongest AGAINST. What metric would you commit to before the board agrees?

2. The MACH Alliance argues composable commerce is the future. But Shopify Plus's "monolithic" stack with Hydrogen + Oxygen now ships features faster than most composable stacks. At what kind of company does the MACH thesis still dominate, and where has it been disproven?

3. A B2B-only brand selling industrial supplies ($60M annual revenue) is choosing between Adobe Commerce B2B and BigCommerce B2B Edition. What's the principle that decides this, and which question on the platform decision framework is the load-bearing one?

4. Allbirds chose to stay on Shopify and migrate to Hydrogen. Glossier chose Hydrogen as their primary frontend in 2023. Why might the same technology be a refactor for one company and a re-platform for another?

5. The 3-year TCO of composable commerce can exceed $6M. At what stage of business does that investment pay back, and what specific capabilities would justify it that Adobe Commerce + a custom React frontend can't replicate?

---

> **Where this leads.**
> - Inside this course: Module 3 builds on the platform choice with PIM strategy; Module 9 returns to platform choice when discussing analytics integrations; Module 10 returns when discussing composable commerce for B2B and cross-border.
> - Cross-course: [04-AWS-Solutions-Architect-Associate Module 9](../../04-AWS-Solutions-Architect-Associate/Module-09-Cost-Optimization-Well-Architected/Reading.md) covers cloud architecture cost discipline that maps to platform TCO.
> - Practice: Practice Exam 1 has ~6 questions drawn from this module (architecture patterns, platform sweet spots, MACH definition).

---

## 📚 Further Reading (Optional)

- 📖 [Shopify — *State of Commerce 2024*](https://www.shopify.com/research) — annual benchmark report
- 📖 [Adobe Commerce Developer Documentation](https://developer.adobe.com/commerce) — the canonical reference
- 📖 [MACH Alliance — *State of MACH 2024*](https://machalliance.org/insights) — composable commerce industry research
- 📖 [Forrester Wave — *Digital Commerce Platforms* (Sucharita Kodali, 2024)](https://www.forrester.com/) — most-cited analyst report on platforms
- 📖 [BigCommerce — *Headless Commerce Architecture Guide*](https://www.bigcommerce.com/articles/headless-commerce/) — headless 101
- 📖 [Shopify Polaris Design System](https://polaris.shopify.com/) — design system reference
- 📖 [PCI Security Standards Council — *PCI-DSS v4.0*](https://www.pcisecuritystandards.org/) — the security standard
