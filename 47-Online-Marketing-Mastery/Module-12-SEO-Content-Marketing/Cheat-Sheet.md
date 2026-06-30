# Module 12 Cheat Sheet: SEO (Search Engine Optimization) & Content Marketing

**Quick Reference Card | Semrush SEO · HubSpot SEO · Ahrefs Academy**

---

## 1. The Three Pillars of SEO

| Pillar | What It Does | Key Actions |
|--------|-------------|-------------|
| Technical SEO | Enables crawling & indexation | Fix CWV, XML sitemap, robots.txt, canonical tags |
| On-Page SEO | Signals relevance to crawlers | Title tags, H1-H6, meta desc, internal links, alt text |
| Off-Page SEO | Builds authority & trust | Backlinks, digital PR, brand mentions, E-E-A-T |

---

## 2. Search Intent Taxonomy

| Intent Type | User Goal | Example Query | Content Type |
|-------------|-----------|---------------|--------------|
| Informational | Learn something | "how does SEO work" | Blog post, guide, explainer |
| Navigational | Find a specific site | "Ahrefs login" | Brand page (don't target unless you ARE the brand) |
| Commercial Investigation | Compare options | "best SEO tools for agencies" | Comparison, listicle, review |
| Transactional | Buy / sign up | "Semrush Pro plan pricing" | Landing page, product page |

---

## 3. Keyword Research Quick Reference

**Core Metrics to Evaluate:**
- **Search Volume** — monthly average searches (use 3-month rolling average)
- **Keyword Difficulty (KD)** — Ahrefs: domain-based 0-100; Semrush: page-based 0-100
- **CPC (Cost Per Click)** — proxy for commercial value (higher CPC = more buyer intent)
- **SERP (Search Engine Results Page) Features** — does the SERP show AI Overview, Featured Snippet, PAA? Reduces organic CTR (Click-Through Rate)

**Target KD by Domain Rating:**
- DR 0-20 → target KD ≤ 20
- DR 21-40 → target KD ≤ 35
- DR 41-60 → target KD ≤ 55
- DR 61-80 → target KD ≤ 70
- DR 81+ → can compete for any KD

**Tools Comparison (2025):**
- Ahrefs Keywords Explorer — best for keyword difficulty, SERP analysis, content gap
- Semrush Keyword Magic Tool — best for keyword variations, question keywords, full-suite
- Google Keyword Planner — best for volume validation, free with Google Ads account

---

## 4. On-Page SEO Checklist

**Title Tag:**
- [ ] Under 60 characters
- [ ] Primary keyword near the front
- [ ] Compelling and human-readable
- [ ] Unique across all pages on site

**Meta Description:**
- [ ] 120-155 characters
- [ ] Includes primary keyword (Google bolds it)
- [ ] Clear benefit or differentiated angle
- [ ] Soft call to action

**Headings:**
- [ ] One H1 per page, matches topic of page
- [ ] H2s for main sections
- [ ] H3s for subsections within H2s
- [ ] No heading used purely for visual styling

**Content:**
- [ ] Primary keyword in first 100 words
- [ ] Related/semantic keywords naturally throughout
- [ ] At least 3-8 internal links with descriptive anchor text
- [ ] Images: compressed, WebP format, with keyword-relevant alt text and file names

---

## 5. Core Web Vitals — At a Glance

| Metric | Measures | Good | Needs Improvement | Poor |
|--------|---------|------|-------------------|------|
| LCP (Largest Contentful Paint) | Main content load speed | ≤ 2.5s | 2.5s – 4.0s | > 4.0s |
| INP (Interaction to Next Paint) | Overall interactivity | ≤ 200ms | 200ms – 500ms | > 500ms |
| CLS (Cumulative Layout Shift) | Visual stability | ≤ 0.1 | 0.1 – 0.25 | > 0.25 |

**Common LCP Fixes:** Optimize hero image (WebP, preload), use CDN, reduce TTFB, defer non-critical JS
**Common INP Fixes:** Reduce JS bundle size, break up long tasks, remove heavy third-party scripts
**Common CLS Fixes:** Set explicit width/height on images, avoid late-loading ads, use `font-display: swap`

**Field Data Tool:** Google Search Console → Core Web Vitals report (uses real CrUX data)
**Lab Data Tool:** PageSpeed Insights, Lighthouse, GTmetrix

---

## 6. Technical SEO Quick Reference

**robots.txt:**
- Location: `yourdomain.com/robots.txt`
- Blocks crawlers (does NOT remove pages from index if linked externally)
- Use `Disallow: /folder/` to block; `Allow: /specific-page/` to override
- Do NOT accidentally block CSS/JS files — breaks rendering

**XML Sitemap:**
- Should include: all canonical, indexable URLs
- Should exclude: noindex pages, paginated pages, URL parameters, duplicate content
- Submit at: Google Search Console → Sitemaps

**Canonical Tags:**
- Use on: duplicate URLs, paginated pages, syndicated content, HTTP/HTTPS or www/non-www variants
- Format: `<link rel="canonical" href="https://example.com/preferred-url/" />`
- Self-referencing canonicals on every page are best practice

**noindex:**
- Use on: thank-you pages, admin areas, search results pages, duplicate filter URLs
- Format: `<meta name="robots" content="noindex, follow">` or `<meta name="robots" content="noindex, nofollow">`

---

## 7. Structured Data (Schema Markup) Quick Reference

| Schema Type | Use Case | Rich Result |
|------------|---------|-------------|
| FAQ | Product/service pages with Q&A | Accordion in SERP |
| HowTo | Tutorial/process content | Step-by-step in SERP |
| Article | Blog posts, news | Google News / Top Stories |
| Product | E-commerce pages | Price, availability, ratings in SERP |
| Organization | Company homepage | Knowledge Panel |
| BreadcrumbList | Site hierarchy | Breadcrumb trail in SERP URL |
| Review | Product / service reviews | Star ratings in SERP |

**Implementation:** Always use JSON-LD format in `<script type="application/ld+json">` tag
**Validation:** Google Rich Results Test → `search.google.com/test/rich-results`

---

## 8. Content Cluster Architecture

```
PILLAR PAGE (3,000-5,000 words)
"Complete Guide to [Topic]"
         │
    ┌────┴────┐
    │         │
Cluster 1  Cluster 2  ... Cluster N
(1,200-2,500 words each)

Rules:
→ Every cluster page links BACK to pillar
→ Pillar links TO every cluster page
→ Cluster pages can interlink where relevant
→ All use consistent anchor text to the pillar
```

**Benefits:** Topical authority signal, broader keyword coverage, better internal PageRank flow, reader journey optimization

---

## 9. E-E-A-T Quick Reference

| Signal | How to Demonstrate |
|--------|-------------------|
| Experience | Author bios with personal case studies, "I tested this" sections, original data |
| Expertise | Author credentials, industry certifications, publication in respected journals |
| Authoritativeness | Backlinks from industry publications, brand mentions, awards, speaker profiles |
| Trustworthiness | HTTPS, accurate contact info, clear privacy policy, GDPR (General Data Protection Regulation) compliance, factual accuracy |

**Most critical for:** Health, finance, legal, safety (YMYL) content
**European note:** GDPR-compliant cookie consent and privacy policy are Trustworthiness signals

---

## 10. Link Building Strategies

| Strategy | Effort | Link Quality | Best For |
|----------|--------|-------------|---------|
| Digital PR / original research | High | Very high (editorial) | Established brands with research capability |
| Guest posting | Medium | High (if publication is credible) | Thought leaders, niche expertise |
| Broken link building | Medium | Medium-High | Systematic, scalable outreach |
| HARO / Connectively | Low-Medium | High (major press) | Expert commentary, fast PR coverage |
| Resource page outreach | Medium | Medium | Directories, "best tools" lists |

**What NOT to do:** PBN links, bulk link purchases, keyword-stuffed anchor text, irrelevant directories — all risk manual penalties

**Link Quality Checklist:**
- [ ] Domain Rating (Ahrefs) / Authority Score (Semrush) > 30 preferred
- [ ] Topically relevant to your industry
- [ ] Real organic traffic to linking domain
- [ ] Editorial placement (in body content, not footer/sidebar)
- [ ] Follow link (not nofollow for authority-building purposes)

---

## 11. International SEO — hreflang Reference

**When to use:** Any site with content targeting multiple languages or countries

**Core format:**
```html
<link rel="alternate" hreflang="en-us" href="https://example.com/en-us/page/" />
<link rel="alternate" hreflang="en-gb" href="https://example.com/en-gb/page/" />
<link rel="alternate" hreflang="de"    href="https://example.com/de/page/" />
<link rel="alternate" hreflang="fr"    href="https://example.com/fr/page/" />
<link rel="alternate" hreflang="nl"    href="https://example.com/nl/page/" />
<link rel="alternate" hreflang="x-default" href="https://example.com/page/" />
```

**Language codes (ISO 639-1):**
- de = German | fr = French | nl = Dutch | sv = Swedish | da = Danish | no = Norwegian

**Country codes (ISO 3166-1):**
- US = United States | GB = United Kingdom | DE = Germany | FR = France | NL = Netherlands | SE = Sweden

**URL Structure Options:**
- ccTLD: `example.de` — strongest signal, hardest to maintain
- Subdirectory: `example.com/de/` — recommended for most businesses
- Subdomain: `de.example.com` — acceptable but weaker than subdirectory

**Key implementation rules:**
- Every language version must include ALL hreflang tags (reciprocal annotation)
- Include `x-default` on every page
- Use absolute URLs (not relative)
- Can also implement via XML sitemap or HTTP headers

---

## 12. AI Overviews — Impact and Strategy

**When AI Overviews appear:** Broad informational queries; early-funnel research questions
**CTR impact:** 15-35% reduction for positions 1-3 on affected queries (BrightEdge, 2024)

**Content types LESS affected by AI Overviews:**
- Commercial investigation ("best X for Y")
- Transactional ("X pricing," "X free trial")
- Original research and proprietary data
- Opinionated expert content
- Local and niche specific queries

**How to get cited IN AI Overviews:**
- Use structured data (FAQ, HowTo)
- Clear, direct answers to specific questions
- High E-E-A-T signals
- Concise, well-sourced statements

---

## 13. Content Calendar Essentials

**Weekly cadence (starter):**
- 1 cluster page (1,500-2,500 words, target specific keyword)
- 1 linkable asset (original data, tool, visual)

**Content brief must include:**
1. Target keyword + secondary keywords
2. Search intent classification
3. Funnel stage (Awareness / Consideration / Decision)
4. Content type (pillar / cluster / asset)
5. Target word count
6. Top 3 SERP competitors to analyze
7. Distribution plan (3 channels minimum)
8. Success metric (rankings, leads, links)

**90-Day Review Rule:** Every published piece gets reviewed at 90 days post-publish. If ranking position < 20 for primary keyword, diagnose: content quality? Technical issue? Link deficit? Update or consolidate accordingly.

---

## 14. Measuring Organic ROI (Return on Investment)

**Leading Indicators (months 1-6):**
- Keyword ranking improvements for target terms
- Organic impression growth (Google Search Console)
- Crawl health score improvement (Screaming Frog / Semrush Site Audit)

**Quality Indicators (ongoing):**
- Organic CTR vs. industry benchmarks
- Scroll depth and time on page (GA4)
- Pages per session from organic channel

**Revenue Indicators (months 6-18):**
- Organic-sourced leads / trials / purchases (GA4 attribution)
- Cost per organic lead vs. paid CPL
- Revenue attributed to organic (requires GA4 → CRM data connection)

**ROI Formula:**
```
Organic ROI = (Organic Revenue - SEO Investment) ÷ SEO Investment × 100
```

**Realistic benchmarks:**
- Month 6: 15-30% organic traffic increase for new program
- Month 12: 40-80% organic traffic increase, first revenue attribution emerging
- Year 2-3: compounding returns as topical authority matures

---

## 15. Certification Exam Tips

**Semrush SEO Certification:**
- Know the Semrush toolset: Keyword Magic Tool, Site Audit, Position Tracking, Backlink Analytics
- Understand the difference between keyword difficulty and competitive density
- Be able to interpret Semrush site audit severity levels (Errors > Warnings > Notices)

**HubSpot SEO Certification:**
- Content cluster and pillar page methodology is heavily tested
- Know why topical authority matters more than targeting isolated keywords
- Understand the connection between SEO and the buyer's journey

**Ahrefs Academy:**
- Know all major Ahrefs metrics: DR, UR, Traffic Value, Organic Keywords, Referring Domains
- Understand how to use Site Explorer for competitor research and backlink prospecting
- Content Explorer workflows for finding linkable asset opportunities

---

## 16. Key Numbers to Memorize

| Fact | Number | Source |
|------|--------|--------|
| Global daily Google searches | ~8.5 billion | Google (2024) |
| Mobile share of Google searches | ~63% | StatCounter (2025) |
| US online experiences starting with search | 68% | BrightEdge (2024) |
| German internet users starting with search | 73% | Statista (2025) |
| Good LCP threshold | ≤ 2.5 seconds | Google (2024) |
| Good INP threshold | ≤ 200 ms | Google (2024) |
| Good CLS threshold | ≤ 0.1 | Google (2024) |
| Title tag max characters | ~60 characters | Google guidelines |
| Meta description max characters | ~155 characters | Google guidelines |
| Ahrefs keyword database | 29 billion keywords | Ahrefs (2025) |
| Semrush keyword database | 25 billion keywords | Semrush (2025) |

---

*Module 12 | Course 47: Online Marketing Mastery | Certifications aligned: Semrush SEO · HubSpot SEO · Ahrefs Academy*
