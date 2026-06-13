# 📋 Module 04 Cheat Sheet: Google My Business & Local Marketing

> One page. Print it. Review before every campaign, audit, or local SEO pitch.

---

## The RDP Framework — Google's 3 Local Ranking Pillars

| Pillar | What It Means | You Control? | Top Levers |
|--------|--------------|-------------|-----------|
| **R**elevance | Profile matches search intent | YES | Primary category, secondary categories, services, description keywords |
| **D**istance | Physical proximity to searcher | MOSTLY NO | Service area settings, city-specific landing pages |
| **P**rominence | How well-known/trusted the business is | YES | Reviews, citations, website authority, backlinks, engagement |

> **Mnemonic:** "R-D-P = Relevance buys you entry, Distance sets the table, Prominence wins the race."

---

## GBP Optimization Priority Stack

### Tier 1 — Foundation (Do First, Non-Negotiable)
- [ ] Claim + verify the listing
- [ ] Set correct **primary category** (most specific accurate description)
- [ ] Standardize **NAP** (Name/Address/Phone) 100% identical everywhere
- [ ] Complete business hours (including holiday hours)
- [ ] Add website URL (location-specific page, not just homepage)

### Tier 2 — Content Optimization
- [ ] Business description: 750 chars, city + primary service in first 250
- [ ] Services/Products menu: every offering with description
- [ ] Select all relevant Attributes
- [ ] Add up to 10 secondary categories

### Tier 3 — Ongoing Signals (Weekly/Monthly)
- [ ] Google Posts: 1-2 per week minimum
- [ ] Photos: Monthly additions, target 100+
- [ ] Review responses: 100% of reviews, within 48 hrs
- [ ] Q&A: Seed questions, monitor for outside answers
- [ ] Messaging: Respond within 24 hrs

---

## NAP Consistency Rule

> **Every character counts.** "123 Main St" ≠ "123 Main Street" ≠ "123 Main St." in Google's cross-reference engine.

**Standardize ONCE, use everywhere:**
- Business Name: Exact legal DBA name, no keyword stuffing
- Address: Choose one format (abbreviations OR full words) and never deviate
- Phone: Include country code for multinational businesses

**Audit tools:** BrightLocal, Moz Local, Semrush Listing Management

---

## Review Management Benchmarks

| Metric | Minimum | Competitive | Dominant |
|--------|---------|-------------|---------|
| Total reviews | 10+ | 50+ | 100+ |
| Average rating | 4.0+ | 4.5+ | 4.7+ |
| New reviews/month | 1-2 | 4-6 | 8+ |
| Response rate | 50% | 80% | 100% |
| Response time | 72 hrs | 48 hrs | 24 hrs |

### ACCA Negative Review Response Formula
**A**cknowledge → **C**onfirm (no admission) → **C**ontact (offline resolution) → **A**ct (follow-up if resolved)

### Top Review Acquisition Channels
| Channel | Conversion Rate |
|---------|---------------|
| Post-appointment SMS (4 hrs after) | 18–25% |
| Automated email follow-up | 5–10% |
| QR code at point of sale | 3–7% |
| Staff verbal ask | 1–3% |

**One-tap review link format:**
`https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID`

---

## Photo Benchmarks

| Level | Count | Minimum Types |
|-------|-------|--------------|
| Minimum viable | 10 | Logo, exterior, interior |
| Competitive | 50+ | + Team, products/services, work examples |
| Dominant | 100+ | + Regular monthly additions, videos |

> Businesses with 100+ photos receive ~520% more calls than average *(industry estimate)*.

**GDPR Note (EU markets):** Obtain written consent before publishing identifiable photos of employees or customers. Applies in France (CNIL), Germany (BDSG), Netherlands (AVG), and all EU states.

---

## Google Posts Quick Reference

| Type | Lifespan | Best Use | CTA Options |
|------|---------|---------|------------|
| What's New | 7 days | General updates, blog promos | Learn more, Call, Visit |
| Event | Until event | Workshops, open days | Register, Learn more |
| Offer | Until expiry | Promotions, discounts | Get offer, Call |
| Product | Indefinite | Specific product highlights | Order online, Get offer |

> Post minimum once per week. A live post at all times = freshness signal.

---

## Local Services Ads (LSA) — Market Availability

| Market | Status | Badge Name | Cost Model |
|--------|--------|-----------|-----------|
| United States | Full (70+ categories) | Google Guaranteed | Per qualified lead |
| Canada | Available | Google Guaranteed | Per qualified lead |
| United Kingdom | Available | Google Screened (professionals) | Per qualified lead |
| Germany | Limited categories | Google Guaranteed | Per qualified lead |
| France | Limited rollout | Google Guaranteed | Per qualified lead |
| Netherlands/Nordics | Partial | Varies | Per qualified lead |

**LSA vs GBP vs Search Ads:**

| Channel | Cost | Speed | Best For |
|---------|------|-------|---------|
| GBP Organic | Free | Slow (3-6 months) | Long-term foundation |
| Local Services Ads | Per lead | Fast | Service businesses needing leads now |
| Google Search Ads | Per click | Fast | Competitive markets, e-commerce |

---

## Citation Priority by Market

### North America
| Platform | Priority | Notes |
|---------|---------|-------|
| Google Business Profile | Essential | Foundation |
| Yelp | High | Critical in US |
| Facebook Business Page | High | Citation + social proof |
| Apple Maps (Business Connect) | High | iOS users |
| Bing Places | Medium | Often ignored, easy win |
| BBB (Better Business Bureau) | Medium | US/Canada trust signal |
| Foursquare | Medium | Powers 100s of aggregators |

### Europe
| Platform | Market | Priority |
|---------|--------|---------|
| Yell.com | UK | High |
| PagesJaunes | France | High |
| Gelbe Seiten | Germany | High |
| Trustpilot | EU-wide | High (reviews + citation) |
| Tripadvisor | All markets | High (hospitality) |
| Cylex | EU 20 countries | Medium |

### Citation Building Phases
- **Phase 1:** Core platforms (GBP + 4-5 top directories per market)
- **Phase 2:** Industry verticals (Healthgrades, Avvo, TripAdvisor, Checkatrade UK)
- **Phase 3:** Data aggregators (Foursquare/Factual → triggers downstream auto-distribution)

---

## Local Schema Markup — Minimum Required Fields

```json
{
  "@context": "https://schema.org",
  "@type": "[Specific type matching GBP primary category]",
  "name": "[Exact business name]",
  "address": { "@type": "PostalAddress", "streetAddress": "...", "addressLocality": "...",
    "addressRegion": "...", "postalCode": "...", "addressCountry": "..." },
  "telephone": "[+country code format]",
  "openingHours": ["Mo-Fr 09:00-17:00"],
  "url": "[Location-specific URL]",
  "geo": { "@type": "GeoCoordinates", "latitude": 0.0, "longitude": 0.0 }
}
```

> Schema does NOT directly rank you — it confirms your NAP to Google and enables rich results (star ratings, hours in SERPs).

---

## Multi-Location Management Rules

- Each location = unique GBP listing
- Each listing links to a unique location-specific landing page (`/city-name`)
- Unique phone number per location (tracking numbers OK, but consistent per location)
- Never reuse photos across locations
- Use Business Profile Manager for 5+ locations
- Same primary category across all same-type locations

---

## Local Keyword Structure Formula

```
[Service] + [City/Neighbourhood] + [Qualifier]
```

Examples:
- "emergency plumber east London 24 hour"
- "Zahnarzt München Schwabing" (German: dentist Munich Schwabing)
- "best Italian restaurant Shoreditch"
- "dentiste urgence Lyon dimanche" (French: emergency dentist Lyon Sunday)

> You do NOT need "near me" in your GBP content — Google handles implicit location detection.

---

## ⚠️ Anti-Patterns (What NOT to Do)

1. **Keyword-stuff the business name field** — Suspension trigger. Use exact legal DBA name only.
2. **List a virtual office/mailbox as your GBP address** — Policy violation. Use service-area setting instead.
3. **Buy fake reviews** — Google ML detects these. Consequences: removal, suspension, and (in UK/EU) potential legal violation under consumer protection law.
4. **Ignore negative reviews** — Unanswered negatives suppress prominence score and destroy conversion.
5. **Use one phone number for multiple locations** — Triggers duplicate content flags across the listing set.
6. **Set-and-forget your GBP** — No activity in 90+ days = reduced prominence. GBP is a channel, not a checkbox.
7. **Skip the Q&A section** — Anyone can post misleading answers. Seed questions weekly and monitor.
8. **Use the same photos for all locations** — Google detects duplicate content across profiles.

---

## 🏆 Exam Power Phrases

Use these in interviews, exams, and client presentations to demonstrate expertise:

- *"Google's local pack algorithm weighs three factors — relevance, distance, and prominence — and prominence is the only one that compounds over time through review acquisition and citation building."*

- *"NAP consistency is a trust signal, not a ranking signal in isolation. Google cross-references 40+ data sources; even minor formatting differences introduce friction in that verification process."*

- *"Review velocity matters as much as review volume. A business with 200 stale reviews will lose local pack ground to a competitor with 50 reviews and 8 new ones per month."*

- *"For service-area businesses, the correct GBP setup is to hide the address and define a service radius — not to use a fake storefront or shared office address, which is a suspension trigger."*

- *"Local Services Ads operate on a per-lead model, not per-click, which fundamentally changes the ROI calculation — you only pay for calls and messages from qualified in-market customers."*

- *"In the EU, Google Business Profile optimization does not operate in isolation from GDPR — photo consent, review solicitation practices, and data aggregator submissions all touch personal data obligations."*

- *"Schema markup is not a direct ranking factor, but it functions as a machine-readable version of your GBP data — reducing ambiguity and improving your eligibility for rich results."*

---

## ✏️ Quick Self-Check (Recite From Memory)

1. What does RDP stand for, and which pillar can you influence most through off-site activity?

2. Name the five Tier 1 (non-negotiable) GBP optimization steps in order.

3. What is the target review response time, and what is the ACCA formula?

4. Name one priority local directory for each of these markets: UK, France, Germany.

5. What is the key difference between how Local Services Ads charge versus Google Search Ads?
