# Module 1: E-Commerce Fundamentals & Business Models 🛒

> **Why this module matters:** Every e-commerce decision you'll make for the next twelve months platform choice, paid budget, fulfillment network, marketplace strategy only makes sense once you can answer one question: what is the unit-economics model of this business, and at what stage is it? This module fixes the language. By the end, you'll be able to read a Shopify P&L the way a Wharton MBA reads a 10-K.

---

## 🎯 A Real Story: How Bezos's 1997 Letter Still Runs Amazon

It's October 1997. Amazon has just IPO'd at $18 a share, market cap $438M. The company sold $147.8M of books that year and lost $27.6M doing it. Jeff Bezos, age 33, sits down to write his first annual letter to shareholders. He calls it "It's All About the Long Term." The letter is 1,489 words. It will be re-printed in every Amazon annual letter for the next twenty-five years.

The 1997 letter codifies six principles: obsess over customers, take bold investment bets, prioritize cash flow over GAAP, hire and retain the best, measure operating excellence relentlessly, and most famously **operate as a Day 1 company**, never Day 2. Day 2, Bezos warned, "is stasis. Followed by irrelevance. Followed by excruciating, painful decline. Followed by death. And that is why it is always Day 1."

Twenty-seven years later, Amazon is a $1.7 trillion company that sells $570B of goods through its own retail plus another $400B through third-party sellers. The 1997 letter is taped to the wall of the Day 1 building in Seattle. Every Director-of-something at Amazon can recite the six principles. Every press release at Amazon starts as a "PR/FAQ", a "working backwards" artifact, written before any product exists, that asks: if we shipped this, what would the customer-facing announcement say?

That's the bar. It isn't about the books-vs-everything-store pivot. It's about an operating principle written in 1997 still shaping a $1.7T company's quarterly reviews in 2026. **The brief is the company.** If you can write that kind of operating doctrine for your own business in 2,000 words, you've already done more strategic work than most $50M DTC brands ever do.

This module gives you the language, DTC, marketplace, B2B, hybrid; AOV, CAC, CLV, contribution margin, payback period; long-tail vs head; the Fader customer-centricity frame; the Bezos Day-1 doctrine. By the end, you'll have written the first draft of your own business-model canvas.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Basic financial vocabulary (revenue, cost, margin), covered in [02-PMP Module 3](../../02-PMP/Module-03-Process-Domain/Reading.md)
> - Basic marketing vocabulary (audience, channel, conversion), covered in [14-AI-Marketing-Foundations Module 1](../../14-AI-Marketing-Foundations/Module-01-Digital-Marketing-Landscape-2026/Reading.md)
> - The customer journey concept (awareness / consideration / conversion / retention), covered in [14-AI-Marketing-Foundations Module 2](../../14-AI-Marketing-Foundations/Module-02-AI-Fundamentals-for-Marketers/Reading.md)
> If any of these are shaky, pause and review before continuing.

---

## 📦 What "E-Commerce" Actually Means in 2026

E-commerce is the discipline of selling goods and services online. That sounds simple. But the field splits into **seven distinct business models**, each with its own unit economics, its own platform stack, its own go-to-market playbook, and its own cert ladder.

| Model | Definition | Examples (2024-2026) | Primary platform |
|-------|-----------|---------------------|------------------|
| **DTC (Direct-to-Consumer)** | Brand sells directly via its own digital storefront | Allbirds, Glossier, Warby Parker, Liquid Death | Shopify Plus, Adobe Commerce |
| **Marketplace seller** | Brand sells via 3rd-party platforms; platform owns customer | Anker on Amazon, Etsy crafters | Amazon Seller Central, Walmart Marketplace |
| **Marketplace operator** | You ARE the platform; you take a fee | Amazon, Etsy, eBay, Faire, Whatnot | Mirakl, Yo!Kart, Sharetribe |
| **B2B / wholesale** | Business sells to other businesses | Procter & Gamble's e-B2B portal | Adobe Commerce B2B, BigCommerce B2B, Faire |
| **B2B2C / D2R / hybrid** | Brand sells DTC + wholesale + marketplaces simultaneously | Olipop, Magic Spoon | Shopify Plus + Faire + Amazon |
| **Subscription / replenishment** | Recurring billing for consumable or curated SKUs | Dollar Shave Club, BarkBox, Athletic Greens | Recharge, Skio, Bold Subscriptions |
| **Social commerce / live commerce** | In-app shopping inside social platforms | TikTok Shop, Instagram Shopping, Whatnot | TikTok Shop, Meta Shops, Shopify Collabs |

🚨 **Trap on the exam:** "E-commerce" in the certification questions usually means DTC + marketplace seller + B2B. Social commerce and live commerce are subsets, not separate models. Don't pick "social commerce" when the question is asking about the overall model classification.

🧠 **MEMORIZE THIS.** The seven models above. Business-model classification is a commonly tested topic on the Adobe Commerce Business Practitioner exam.

---

## 💰 The Five Unit-Economics Metrics That Run Every Conversation

If you walk into a board meeting and can't talk fluently in these five metrics, you will not survive. Every paid-acquisition decision, every replatforming decision, every marketplace decision routes through them.

### 1. AOV, Average Order Value

```
AOV = Total Revenue / Total Orders
```

That's it. The denominator is *orders*, not customers, a customer can place multiple orders. AOV ranges typically:

| Category | AOV range (2026, US) |
|----------|----------------------|
| Beauty / Skincare | $35-$65 |
| Apparel (mid-market) | $80-$140 |
| Apparel (premium) | $150-$400 |
| Home goods (small) | $50-$120 |
| Home furniture | $400-$2,000 |
| Wellness supplements | $40-$120 |
| Consumer electronics | $80-$600 |
| Luxury jewelry | $400-$3,500 |

🎯 **Exam tip:** AOV is the lever every CRO test influences. A 12% AOV lift from a "frequently bought together" widget can fund a 20% paid-acquisition budget increase. Memorize the AOV ranges, Adobe Commerce questions reference them.

### 2. CAC, Customer Acquisition Cost

```
CAC = Total Customer Acquisition Spend / Number of New Customers Acquired
```

Two flavors:

- **Marketing CAC**: paid-media spend only divided by new customers. Easy to calculate from ad-platform exports.
- **Blended CAC** (or "Fully Loaded CAC"): all customer-acquisition costs media, agency fees, salaries of the acquisition team, tooling divided by new customers. The CFO version. The one Series B+ boards use.

The Common Thread Collective 2024 ECD Quarterly reports DTC blended CAC ranges from $38 (beauty) to $312 (mattress/furniture). Categories with high consideration cycles have high CAC.

⚠️ **Common mistake:** Operators report marketing CAC to the board and the board thinks it's blended. When the CFO walks the numbers back, the actual CAC is 35-60% higher than reported. Trust collapses. Always specify which CAC.

### 3. Contribution Margin, The Number That Decides Whether Paid Acquisition Pays Back

```
Contribution Margin % = (Revenue - Variable Costs) / Revenue
Variable Costs = COGS + Pick/Pack + Shipping + Payment Processing + Returns Cost
```

**This is the most important number in DTC.** It's the dollar amount per order that pays for everything else, marketing, salaries, rent, software, debt service. If contribution margin is 38% and CAC equals 38% of AOV, you break even on order 1. If contribution margin is 22%, you can't afford CAC > 22% of AOV without burning cash.

Typical DTC contribution margins by category:

| Category | CM% range |
|----------|-----------|
| Beauty / Skincare | 60-75% |
| Apparel (vertical, in-house manufactured) | 55-70% |
| Apparel (wholesale brands sold DTC) | 35-50% |
| Wellness supplements | 65-80% |
| Home goods | 35-55% |
| Furniture (with freight) | 20-35% |
| Consumer electronics (resold) | 12-25% |

Furniture is brutal because freight + returns can eat 25-40% of revenue. Beauty is forgiving because product is small, light, and rarely returned.

### 4. CLV, Customer Lifetime Value (Fader 2012)

```
Simple CLV = AOV × Purchase Frequency × Customer Lifespan × Gross Margin %
Probabilistic CLV (Fader) = BG/NBD (Beta-Geometric / Negative Binomial Distribution) Model
```

The simple formula is taught in MBA programs. Peter Fader's BG/NBD model published in his 2005 *Marketing Science* paper with Bruce Hardie and Ka Lok Lee is what Klaviyo's "Predicted CLV" feature actually runs under the hood. Fader's *Customer Centricity* (2012, Wharton Digital Press) argues the central principle that informs every paid-acquisition decision: **CLV is a property of customer segments, not of customers in aggregate.** The top 20% of customers generate 80% of CLV; allocate paid spend accordingly.

🧠 **MEMORIZE THIS.** Fader's customer-centricity principle: invest in the heavy half. Bid higher to acquire customers who look like your high-CLV cohort. Bid lower (or zero) for customers who look like your low-CLV cohort. Klaviyo's "Predicted CLV" is the operational tool.

### 5. Payback Period, The Cash-Flow Reality Check

```
Payback Period (months) = CAC / (AOV × Contribution Margin %)
```

If a customer buys once, contribution-margin-per-order pays back CAC over how many orders? Two orders? Ten? Healthy DTC payback windows:

| Business model | Healthy payback |
|----------------|-----------------|
| Subscription (monthly billing) | 1-3 months |
| Consumable replenishment (beauty, supplements) | 3-8 months |
| Apparel (repeat seasonal) | 6-12 months |
| Furniture / large appliance | 12-24 months |
| One-time-purchase categories (mattress) | The first order must pay back |

Boards lose patience with payback > 18 months unless gross margin is exceptional.

---

## 📐 The CLV:CAC Ratio, The One Ratio The Board Actually Cares About

```
CLV:CAC = Customer Lifetime Value / Customer Acquisition Cost
```

Industry conventions:

- **3:1**, Healthy DTC. The Wharton/Fader benchmark for sustainable growth.
- **5:1+**, Under-investing in growth. You should be spending more on acquisition.
- **1:1 to 2:1**, Surviving, not thriving. Risk of running out of cash.
- **< 1:1**, Losing money on each customer. Burn-rate dependent on growth velocity.

🎯 **Exam tip:** The Adobe Commerce Business Practitioner exam commonly asks about CLV:CAC. Memorize that 3:1 is healthy and 5:1+ indicates under-investment. Sequoia's 2022 "Adapting to Endure" memo renewed industry focus on this kind of capital-efficiency framing.

---

## 📊 The Bezos 1997 Letter: Six Principles That Still Run Amazon

Bezos's first shareholder letter (1997, [aboutamazon.com](https://aboutamazon.com/news/company-news/2018-letter-to-shareholders)) codified six operating principles. These are not historical artifacts; they are still recited in Amazon's L7+ promotion bars and they shape how Amazon's 1.5M employees make decisions.

| Principle | What it means | How you apply it in 2026 |
|-----------|--------------|--------------------------|
| Customer obsession | Start with the customer and work backwards | "Working Backwards" PR/FAQ writing before product builds (Bryar/Carr 2021) |
| Long-term thinking | Optimize for cash flow, not quarterly earnings | Build a 3-year plan; don't shrink budgets to hit a quarter |
| Day 1 always | Resist Day 2 stasis | Audit your meeting structure quarterly; kill the bureaucracy |
| Hire and retain the best | The bar for hiring keeps rising | Use "Bar Raisers"; never accept "well, OK" hires |
| Operational excellence | Measure rigorously, fix root causes | Andon Cord; the 5 Whys; weekly business reviews |
| Take big bets, with discipline | Fail in proportion to the size of the company | Type-1 (one-way door, slow) vs Type-2 (two-way door, fast) decisions |

🧠 **MEMORIZE THIS.** Type-1 vs Type-2 decisions (Bezos 2015 Letter). Type-1 = irreversible (replatforming from Shopify to Adobe Commerce, hiring a CEO). Type-2 = reversible (testing a TikTok creative; launching a Shopify dev store). Amazon teaches: make Type-2 decisions in days, Type-1 in weeks-to-months. Most companies invert this.

---

## 💼 Case Study, Amazon's 1997 IPO + the Bezos 1997 Shareholder Letter

**Situation.** In May 1997, Amazon.com IPO'd on NASDAQ at $18/share, valuing the company at $438M. The company sold $147.8M of books in fiscal 1997, recorded a $27.6M operating loss, employed 614 people, and had under $1.6M in cash at the end of Q3 1997 before raising more via a junk-bond offering. The dot-com critics (Barron's most famously) predicted Amazon would be bankrupt within 24 months. Investors were nervous. The board wanted Bezos to signal sustainability.

**Decision.** Bezos wrote a 1,489-word letter that did the opposite of what investors wanted. He explicitly told them not to expect short-term profitability. He committed to "long-term market leadership" over "short-term profitability or short-term Wall Street reactions." He told them Amazon would "make bold rather than timid investment decisions." He told them quarterly results would be "lumpy." He told them that most provocatively Amazon would "spend wisely and maintain our lean culture" but would not optimize for GAAP earnings if it conflicted with cash flow and customer experience.

The letter was filed with the 10-K every year afterward. Six core principles emerged: customer obsession, long-term thinking, Day 1 always, hire the best, operational excellence, take bold bets.

**Outcome.** Amazon's stock fell to under $6 in 2001 during the dot-com crash. Amazon did not turn a meaningful annual profit until 2003 six years after the IPO. By 2026, Amazon trades at ~$200/share (after a 20-for-1 split in 2022, so ~$4,000 pre-split equivalent), market cap $1.7T, $570B retail GMV plus $400B third-party seller GMV. The 1997 letter is reprinted in every annual report. AWS invented in 2006 alone generates more annual revenue than the entire 1997 Amazon. The "Day 1" doctrine is taped to walls in every Amazon office. Bryar and Carr's *Working Backwards* (St. Martin's, 2021) written by ex-Amazon executives, codified the operating mechanisms.

**Lesson for the exam / for practitioners.** A business model is an *operating doctrine*, not a P&L. The numbers follow the doctrine. Bezos understood that the cost of optimizing for the next quarter was the option value of being a 25-year company. Operators who can't articulate their long-term doctrine cannot make the Type-1 decisions that compound over a decade. Every certification body Adobe, Salesforce, Wharton Online tests this principle in some form: when given a multi-year strategic trade-off, the right answer is almost always the one that preserves long-term optionality, even at the cost of short-term margin.

---

## 🆚 DTC vs Marketplace vs B2B, The Honest Trade-Offs

A heavily tested framework on the Adobe Commerce Business Practitioner exam:

| Dimension | DTC | Marketplace Seller | B2B / Wholesale |
|-----------|-----|--------------------|-----------------| 
| Owns customer relationship? | Yes (first-party data) | No (platform owns) | Yes (negotiated relationship) |
| Owns pricing? | Yes | Partially (Buy Box pressure) | Yes (price-list per customer) |
| Margin per order | High (35-65%) | Medium (15-30% net of platform fees) | High (40-60%) but smaller volumes |
| Volume potential | Slow ramp | Fast scale (existing demand) | Slow ramp; account-based |
| Marketing spend | Heavy (CAC = 25-40% of LTV) | Mostly platform ads (~10-15%) | Sales-led; longer cycles |
| Conversion rate | 1.5-3.5% | 8-15% on Amazon | Higher (intent-driven) |
| Best for | Brand-building, repeat purchase | Cash-flow + brand discovery | High AOV, low SKU count |

🚨 **Trap on the exam:** Adobe Commerce questions often present "should this company go DTC or marketplace?" scenarios. The right answer is usually *both*, with the qualifier that **the brand's North Star metric should be DTC GMV growth + marketplace as a discovery/cash-flow channel**, not marketplace as the primary destination. Brands that go marketplace-first lose the customer data, lose pricing power, and become commodity sellers.

---

## 📈 The Long Tail, Anderson 2006, Brynjolfsson 2003

Chris Anderson's 2004 *Wired* article "The Long Tail" (expanded into the 2006 book *The Long Tail: Why the Future of Business is Selling Less of More*, Hyperion) is the empirical observation that online retailers can profitably serve niche demand that physical retail can't, because shelf space is effectively unlimited.

The academic predecessor: Brynjolfsson, Hu & Smith's 2003 *Management Science* paper "Consumer Surplus in the Digital Economy" quantified the long tail at Amazon's books business, the long tail (titles ranked > 100,000) generated $731M-$1.03B of consumer surplus in 2000, an amount larger than the surplus from the top hits.

The exam-relevant takeaways:

1. **Aggregate demand for niche SKUs can exceed demand from top SKUs** when shelf space cost is zero (digital).
2. **Discovery is the bottleneck**, not inventory. Whoever has the best search, recommendation, and SEO wins.
3. **Long-tail strategies require PIM discipline.** You can't merchandise 50,000 SKUs without clean attribute data.

🧠 **MEMORIZE THIS.** Long tail = niche demand aggregation; sources are Anderson 2006 and Brynjolfsson 2003. Adobe Commerce + Magento documentation references the long tail in catalog-management discussions because Magento's strength is large, faceted-search-driven catalogs.

---

## 🌐 The Bell Geography Framework, Why Physical Location Still Matters

David R. Bell's *Location is (Still) Everything* (New Harvest, 2014) is the Wharton work that explains why digital commerce success still tracks to geography. Bell's GEM framework:

- **G, Geography:** Where does the customer live? Density of competing physical stores, proximity to fulfillment.
- **E, Environment:** Climate, regulation, cultural norms (e.g., Diapers.com's massive success in suburban dense-population markets where stores were inconvenient).
- **M, Mobility:** How often does the customer leave home? Higher mobility = lower e-commerce conversion.

Bell's research showed that Diapers.com's adoption rate was 2-3x higher in suburbs with diapers-difficult shopping conditions (poor store access, parking scarcity) than in urban centers with easy access, and that the data could be predicted from neighborhood-level retail-environment scores.

🎯 **Exam tip:** Bell's GEM framework is on the Wharton Online specialization syllabus and appears in the Tier 4 expert-level questions. The headline: e-commerce isn't a uniform geography; it's a patchwork of micro-conditions.

---

## 🎯 The Jobs-to-Be-Done Framework (Christensen 2016)

Clayton Christensen, Taddy Hall, Karen Dillon, and David Duncan's *Competing Against Luck* (HarperBusiness, 2016) repackages the "Jobs to Be Done" framework Christensen had introduced over the prior decade (notably his 2005 HBR article "Marketing Malpractice").

Core argument: **Customers don't buy products; they hire products to do a job in their lives.** When a customer buys a milkshake at McDonald's at 8am, they're hiring the milkshake to do the job of "make a boring commute interesting." The job determines what features matter. If you mis-identify the job, you mis-build the product.

For e-commerce, the JTBD framework reshapes how you write PDP copy, design search-intent strategy, and pick which SKUs to merchandise on category pages. It's the framework underneath everything Allbirds did right in 2017-2020.

🚨 **Trap on the exam:** Adobe Commerce questions about category-page design often pit "feature-grid layout" vs "job-organized layout." The right answer is almost always the job-organized layout for high-consideration purchases.

---

## 🧱 Choosing Your Business Model, The Decision Framework

For a new e-commerce business, ask in this order:

1. **What's the AOV?** < $25 → marketplace-first (you need volume). $25-$150 → DTC viable. $150+ → DTC and B2B both viable.
2. **What's the gross margin?** < 30% → marketplace-first (you can't afford DTC CAC). 30-50% → DTC viable with disciplined CAC. 50%+ → DTC is the default.
3. **What's the purchase frequency?** Monthly → subscription model viable. Quarterly → DTC with strong lifecycle. Annual+ → marketplace-first (you can't build retention).
4. **What's the catalog size?** < 50 SKUs → DTC easy. 50-5,000 SKUs → DTC + marketplace. 5,000+ SKUs → B2B portal or marketplace operator.
5. **Who pays first, customer or business?** B2C only → DTC. B2B → wholesale portal. Both → B2B2C hybrid.

🧠 **MEMORIZE THIS.** The five questions above map directly onto the kind of scenario questions commerce certification exams use. Train yourself to ask them in this order.

---

## ⚡ The 7 Most Common Failure Modes in E-Commerce Business Models

1. **Race-to-zero on Amazon.** Brands that go Amazon-first lose pricing power within 18 months because Buy Box competition is brutal.
2. **DTC with < 30% gross margin.** Can't afford the CAC. Categories like consumer electronics resale almost always die DTC.
3. **B2B portal without account-tiered pricing.** Wholesale customers expect price lists; not having them kills enterprise.
4. **Subscription without churn modeling.** Recurly's 2024 benchmarks: DTC sub-businesses with > 8% monthly churn typically don't reach $10M ARR.
5. **Furniture DTC with bad freight model.** ~$200-$400 freight per order can erase 25%+ of contribution margin if not priced correctly.
6. **Multi-marketplace without OMS.** Sellers who run Shopify + Amazon + Walmart + Etsy + eBay without an order-management system have inventory disasters within 6 months.
7. **No first-party data strategy.** Brands that rely 100% on third-party platforms have no defensible position when iOS, ATT, Privacy Sandbox, or Amazon policy changes.

---

## 🗺️ A Concrete Worked Example: Liquid Death's Unit Economics

Liquid Death is a useful reference because their model is documented in interviews and the brand is unusual enough to remember.

- **Founded 2017** by Mike Cessario. 
- **2024 valuation:** $1.4B (Series F lead by Live Nation).
- **2024 revenue:** ~$268M (publicly disclosed in pitch).
- **AOV** (Amazon + retail blended): ~$24 (a 12-pack of cans).
- **Contribution margin:** ~52% (CPG-mountain-water economics, cheap product, expensive can + brand).
- **Channel mix:** ~25% DTC via shop.liquiddeath.com; ~30% Amazon FBA; ~45% retail (7-Eleven, Whole Foods, Target).
- **Marketing CAC** (estimated): ~$8-$14 per DTC customer (heavily branded YouTube + Meta + TikTok creator-led).
- **Payback period:** ~3-4 months on the DTC channel (3-4 reorders).
- **CLV:CAC** (estimated): ~6:1 on DTC (over-invested in DTC because retail margin is thinner).

The teachable observation: Liquid Death didn't try to be a marketplace seller first. They built brand on DTC + content (the "death-by-extreme-canned-water" identity), proved unit economics, then expanded into retail with proof-of-demand. The order DTC first, then retail gave them pricing power and brand equity that a marketplace-first launch would never have produced.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **DTC** | Direct-to-Consumer; brand sells via its own digital storefront |
| **AOV** | Average Order Value = Revenue / Orders |
| **CAC** | Customer Acquisition Cost; marketing or blended |
| **CLV / LTV** | Customer Lifetime Value; Fader 2012 framework |
| **Contribution Margin** | Revenue minus variable costs (COGS + fulfillment + processing + returns) |
| **Payback Period** | CAC / (AOV × Contribution Margin); months to recover CAC |
| **GMV** | Gross Merchandise Value; total order value before refunds |
| **Long Tail** | Anderson 2006; aggregate niche demand exceeds head demand online |
| **JTBD** | Jobs to Be Done; Christensen 2016 framework |
| **Day 1** | Bezos 1997 doctrine; perpetual startup operating principle |
| **Type-1 / Type-2 decisions** | Bezos 2015; irreversible vs reversible |
| **GEM framework** | Bell 2014; Geography + Environment + Mobility |
| **Customer centricity** | Fader 2012; allocate by CLV segment, not aggregate |
| **B2B2C** | Brand sells to consumers and businesses simultaneously |

---

## ✅ Module 1 Summary

You now know:

- 🛒 The seven e-commerce business models
- 💰 The five unit-economics metrics (AOV, CAC, CLV, contribution margin, payback period)
- 📐 The CLV:CAC ratio benchmark (3:1 healthy, 5:1+ under-investing)
- 📊 The Bezos six-principle 1997 doctrine + Type-1/Type-2 decisions
- 🆚 DTC vs marketplace vs B2B trade-offs
- 📈 The Long Tail (Anderson 2006, Brynjolfsson 2003)
- 🌐 Bell's GEM geography framework
- 🎯 Christensen's Jobs-to-Be-Done framework
- 🧱 The 5-question business-model decision framework
- ⚡ The 7 most common failure modes

**Next steps:**
1. 🎥 Watch the videos in `Videos.md`
2. ✏️ Take `Quiz.md`
3. 📋 Review `Cheat-Sheet.md`
4. ➡️ Move to [Module 2: Storefront Platforms & Architecture](../Module-02-Storefront-Platforms-Architecture/Reading.md)

---

## 💬 Discussion, Socratic prompts

Use these to test your own thinking. None has a single right answer, defend your choice with the frameworks in this module.

1. A $4M Series-A DTC apparel brand has 32% contribution margin, 18-month customer payback, and 2.1x CLV:CAC. The CEO wants to spend $1M of the Series A on a TikTok-Shop creator-led blitz, expecting Tier-2 distribution to lift LTV via brand discovery. Build the strongest argument FOR and the strongest argument AGAINST. Which would you defend in a board meeting, and what gating numbers would you commit to?

2. Re-read Bezos's 1997 letter. The doctrine says "operate as Day 1." But at a $250M-GMV DTC brand with 110 employees, "Day 1" can mean micro-management, decision-paralysis, and burned-out operators. Where does the doctrine become an anti-pattern, and what's the principle that should replace it at scale?

3. Fader's *Customer Centricity* (2012) tells you to allocate by CLV segment. Anderson's *Long Tail* (2006) tells you to monetize niche demand from the bottom 80%. These appear to conflict, bid up for top 20% (Fader) or merchandise the bottom 80% (Anderson). When does each principle dominate, and how would you communicate the trade-off to a junior marketer?

4. A B2B portal manager argues that e-commerce best practices from DTC don't apply because B2B is "relationship-driven" and "negotiated." But Procter & Gamble's 2020-2024 e-B2B transformation explicitly imported DTC patterns (self-serve catalog, search-first navigation, first-party data). What's the principle they correctly imported, and where does B2B-as-DTC genuinely fail?

5. Christensen's JTBD framework says "customers hire products to do a job." But Amazon's recommendation engine optimizes for similar-product patterns ("customers who bought X also bought Y"). The two frames produce different category pages. When you sit down to design a category page in Adobe Commerce, which frame should dominate, and what's the cost of getting it wrong?

---

> **Where this leads.**
> - Inside this course: Module 2 makes you choose a platform (Shopify vs Adobe Commerce vs headless) using the unit economics you defined here. Module 7 reuses CAC + contribution margin as the paid-acquisition success criteria. Module 9 uses CLV as the attribution-truth-test.
> - Cross-course: [15-AI-Marketing-Practitioner Module 1](../../15-AI-Marketing-Practitioner/Module-01-Campaign-Strategy-Brief-Writing/Reading.md) deepens campaign-brief writing for e-commerce; [16-AI-Marketing-Strategist Module 3](../../16-AI-Marketing-Strategist/Module-03-GA4-Mastery-Custom-Events/Reading.md) goes deeper on CLV modeling with Klaviyo predictive CLV.
> - Practice: Practice Exam 1 has ~8 questions drawn from this module (business-model classification, the 5 unit-economics metrics, CLV:CAC benchmark, Bezos principles, Long Tail).

---

## 📚 Further Reading (Optional)

- 📖 [Fader, Peter *Customer Centricity* (Wharton Digital Press, 2012, 2nd ed. 2020)](https://wdp.wharton.upenn.edu/book/customer-centricity/) the foundational text
- 📖 [Bezos 1997 Shareholder Letter](https://aboutamazon.com/news/company-news/2018-letter-to-shareholders), re-read every quarter
- 📖 [Bryar, Colin & Carr, Bill *Working Backwards* (St. Martin's, 2021)](https://www.workingbackwards.com/) the operating-mechanisms book
- 📖 [Bell, David R. *Location is (Still) Everything* (New Harvest, 2014)](https://www.davidrbell.com/location-is-still-everything) the geography-still-matters book
- 📖 [Anderson, Chris *The Long Tail* (Hyperion, 2006)](https://www.thelongtail.com/) the niche-demand book
- 📖 [Christensen et al. *Competing Against Luck* (HarperBusiness, 2016)](https://hbr.org/product/competing-against-luck-the-story-of-innovation-and-customer-choice/) the JTBD book
- 📖 [Brynjolfsson, Hu & Smith "Consumer Surplus in the Digital Economy" (Management Science, 2003)](https://pubsonline.informs.org/doi/abs/10.1287/mnsc.49.11.1580.20580) the academic Long Tail paper
- 📖 [Common Thread Collective *The ECD Quarterly Report*](https://commonthreadco.com/blogs/coachs-corner) benchmark data
- 📖 [Wharton Online Digital Marketing & E-Commerce Specialization](https://online.wharton.upenn.edu/specializations/digital-marketing-e-commerce-specialization/) Fader + Bell on Coursera
