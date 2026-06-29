# 📋 Module 03 Cheat Sheet: Google Analytics 4 — Data-Driven Marketing

> One page. Print it. Review before every campaign and every GA4 certification attempt.

---

## GA4 vs. Universal Analytics — The Must-Know Differences

| Dimension | Universal Analytics (UA) | Google Analytics 4 (GA4) |
|---|---|---|
| Data model | Session → Hit hierarchy | Flat event stream |
| Pageview | Separate hit type | `page_view` event |
| Bounce rate | % single-page sessions | 100% − Engagement Rate |
| Goals / Conversions | Up to 20 goals per view | Key Events (unlimited) |
| BigQuery export | GA360 paid only | Free for all |
| App + Web | Separate properties | Unified |
| IP anonymisation | Optional | On by default |
| Attribution default | Last Click | Data-Driven |
| Data retention | Default 26 months | Default 2 months (max 14) |
| Cross-device | Limited (User ID hack) | Built-in identity framework |

---

## GA4 Event Categories (Hierarchy)

| Tier | Who creates it | Requires code? | Examples |
|---|---|---|---|
| Automatically Collected | Google | No | `page_view`, `first_visit`, `session_start`, `user_engagement` |
| Enhanced Measurement | Toggle in GA4 UI (User Interface) | No | Scroll (90%), outbound clicks, site search, video plays, file downloads |
| Recommended Events | You (Google's schema) | Yes (DataLayer / gtag) | `purchase`, `add_to_cart`, `sign_up`, `login`, `search`, `file_download` |
| Custom Events | You (any name) | Yes | `filter_used`, `chatbot_opened`, `comparison_added` |

> Rule: Always prefer Recommended events over Custom events — they unlock pre-built reports.

---

## Key Event vs. Conversion (The Great Rename)

| Term | Platform | Drives Smart Bidding? |
|---|---|---|
| **Key Event** | GA4 only | No |
| **Conversion Action** | Google Ads only | Yes |
| Import path | GA4 Key Event → Google Ads Conversion Action | Manual import required |

---

## Engaged Session Definition

An engaged session requires at least ONE of:

1. Duration ≥ 10 seconds (page in focus)
2. 2 or more pageviews / screen views
3. Any Key Event fires

```
Engagement Rate = Engaged Sessions / Total Sessions × 100
Bounce Rate (GA4) = 100% − Engagement Rate
```

> ⚠️ GA4 bounce rate ≠ UA bounce rate. Never compare them directly.

---

## Exploration Types — When to Use Each

| Exploration | Use When |
|---|---|
| **Funnel Exploration** | Diagnosing step-by-step drop-off (checkout, signup flow) |
| **Path Exploration** | "What did users do AFTER this event?" or "What led TO this event?" |
| **Cohort Exploration** | Retention analysis by acquisition cohort |
| **Segment Overlap** | Finding audience intersections (Venn diagram) |
| **User Explorer** | Debugging individual pseudonymous user journeys |
| **User Lifetime** | LTV (Lifetime Value) by acquisition channel |
| **Free Form** | Custom pivot tables and scatter plots |

---

## Attribution Models Comparison

| Model | Credit Logic | Best For |
|---|---|---|
| **Data-Driven** (default) | ML distributes across all touchpoints | High volume (1,000+ conversions/mo); most accurate |
| **Last Click** | 100% to final touchpoint | Simple reporting; over-credits closers |
| **First Click** | 100% to first touchpoint | Awareness campaign evaluation |
| **Linear** | Equal to every touchpoint | Full-journey understanding |
| **Time Decay** | More credit to recent | Short sales cycles |
| **Position-Based (U-shaped)** | 40% first / 40% last / 20% middle | B2B (Business-to-Business) demand gen |

> Warning: Last Click over-credits brand PPC (Pay-Per-Click). Use Model Comparison report before cutting any channel.

---

## Consent Mode v2 — The Four Parameters

| Parameter | Controls | New in v2? |
|---|---|---|
| `analytics_storage` | GA4 cookie-based measurement | No |
| `ad_storage` | Google Ads cookie storage | No |
| `ad_user_data` | User data sent to Google for ads (Customer Match, etc.) | **YES** |
| `ad_personalization` | Remarketing and personalised ads | **YES** |

**Consent states:** `'granted'` or `'denied'`

**When `denied`:** Tags fire in cookieless ping mode → feeds Google's conversion modelling

> EU/GDPR (General Data Protection Regulation) Rule: `analytics_storage` and `ad_storage` must default to `'denied'` for EU/EEA users without explicit opt-in. Opt-out rates in Germany/Nordics: 40-60% (industry estimate).

---

## Ecommerce Event Priority

| Priority | Event | Why |
|---|---|---|
| 1 | `purchase` | Revenue, ROAS (Return on Ad Spend), Smart Bidding |
| 2 | `add_to_cart` | Cart abandonment audiences |
| 3 | `begin_checkout` | Checkout funnel entry |
| 4 | `view_item` | Product affinity, path analysis |
| 5 | `remove_from_cart` | Friction signals |
| 6 | `view_item_list` | Category performance |

Required `purchase` parameters: `transaction_id`, `value`, `currency` (ISO 4217), `items[]`

---

## GA4 + Google Ads Linking — What It Unlocks

1. GA4 Key Events → Google Ads Conversion Actions (for Smart Bidding)
2. GA4 Audiences → Google Ads Audience Manager (for remarketing)
3. Google Ads campaign/ad group/keyword data → GA4 Acquisition reports

> Enable "Personalised Advertising" in the link only if you have valid consent from EU users.

---

## BigQuery Export — When to Use It

| Situation | Solution |
|---|---|
| GA4 Exploration shows "(data sampled)" | Export to BigQuery; query raw events |
| Need to JOIN GA4 with CRM (Customer Relationship Management) / ad spend data | BigQuery SQL (Sales Qualified Lead) joins |
| Need data older than 14 months | BigQuery retains per GCS settings |
| Median, percentile, or advanced stats needed | BigQuery SQL |

Setup: **Admin → Property Settings → BigQuery Linking → Enable**
Tables: `events_YYYYMMDD` (daily) or streaming intraday tables

---

## Data Retention Setting (Set This on Day 1)

Default: **2 months** — insufficient for year-over-year cohort analysis.
Set to: **14 months** via Admin → Data Settings → Data Retention.

---

## North America vs. Europe Benchmarks

| Metric | North America (Est.) | Europe / EU (Est.) |
|---|---|---|
| Consent opt-out rate (analytics) | 10-20% | 30-60% (DE/Nordics highest) |
| Average mobile conversion rate (e-comm) | 1.8-2.5% | 1.2-2.0% |
| Avg. engagement rate (e-comm) | 55-65% | 50-60% |
| Attribution model common default | Last Click (legacy) | Data-Driven adoption faster post-GDPR |

> All benchmarks are industry estimates (Contentsquare, Wolfgang Digital 2024 reports). Verify against your own baseline.

---

## ⚠️ Anti-Patterns — What NOT to Do

1. **Mark every event as a Key Event** — pollutes Smart Bidding signals
2. **Compare GA4 bounce rate to UA bounce rate** — incompatible definitions
3. **Default data retention stays at 2 months** — you will lose cohort data
4. **Skip Consent Mode v2 for EU traffic** — GDPR exposure + data blindness on 40-60% of users
5. **Use Last Click attribution for budget decisions** — systematically over-credits brand PPC
6. **Use GA4 Explorations for sampled high-traffic data** — go to BigQuery
7. **Link GA4 to Google Ads without enabling Key Event import** — Smart Bidding gets no signal

---

## 🏆 Exam Power Phrases

- *"GA4 replaces the session-hit hierarchy with a flat event stream, enabling cross-platform measurement and future-proof privacy architecture."*
- *"Consent Mode v2 introduced `ad_user_data` and `ad_personalization` parameters, enabling GDPR-compliant modelled measurement without sacrificing conversion reporting accuracy."*
- *"Data-driven attribution distributes conversion credit across all touchpoints using ML, revealing true channel contribution versus last-click's systematic bias toward bottom-funnel closers."*
- *"GA4 Funnel Exploration supports both open and closed funnels, retroactive analysis, and device/source breakdowns — unlike UA goals which required pre-configuration."*
- *"BigQuery export is free for all GA4 properties and provides 100% unsampled, hit-level data for advanced analysis beyond the GA4 interface."*
- *"An engaged session requires 10+ seconds active, 2+ pageviews, or a conversion event — making GA4 bounce rate fundamentally incompatible with UA bounce rate."*

---

## ✏️ Quick Self-Check (Recite From Memory)

1. Name the four Consent Mode v2 parameters. Which two are new in v2?
2. What is the GA4 formula for Engagement Rate? For Bounce Rate?
3. What is the difference between a GA4 Key Event and a Google Ads Conversion Action?
4. Name three GA4 Exploration types and one use case for each.
5. What does the `currency` parameter in the `purchase` event do, and why does it matter for a multi-market retailer?
