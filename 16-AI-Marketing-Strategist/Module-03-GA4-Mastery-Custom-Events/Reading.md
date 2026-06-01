# Module 3: GA4 Mastery & Custom Events 📊

> **Why this module matters:** Google Analytics 4 is the *one* analytics certification almost every senior marketer is expected to hold by 2026. It is also the platform that 70%+ of the world's measured web sessions flow through. If you cannot build a GA4 property from scratch — events, parameters, audiences, Explorations, BigQuery export, raw-event SQL — you are not yet at strategist level.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - The event-based tracking model and what an "event" + "parameter" pair represents — covered in [Module 2: CDPs & Server-Side Tracking](../Module-02-CDP-Server-Side-Tracking/Reading.md).
> - Basic SQL `SELECT`, `WHERE`, `GROUP BY`, `JOIN` — assumed background, refresher in [Course 14 Module 8](../../14-AI-Marketing-Foundations/Module-08-Analytics-Measurement-Basics/Reading.md).
> - The OKR / KPI vocabulary from [Module 1](../Module-01-Strategic-Frameworks-OKRs/Reading.md) — you'll wire GA4 events directly to those KRs.
> If you've never run a SQL query against a warehouse, do a one-hour BigQuery sandbox tutorial before continuing — this module's debugging section assumes hands-on familiarity.

---

## 📷 A Story: How Airbnb Found a $200M Bug in 24 Hours With Raw GA4 Data

October 2023. Airbnb is preparing for the holiday booking season — the single most important revenue window of the year. The team rolls out a redesigned search page on October 12. By the morning of October 13, the daily booking count is down 8% versus the prior week. Out of an annual run-rate of roughly $9.9B in revenue, an 8% Q4 dip is roughly $200M in lost bookings if the bleeding continues.

The analytics team opens GA4 in the browser. The standard reports show… nothing wrong. Sessions are up (a redesign launch boost). Conversion rate is down 6% — within the band of "could be noise." Bounce rate is similar. The aggregated reports do not pinpoint the cause.

This is where the GA4 → BigQuery export saves the day. An analyst writes a SQL query against the raw event-level table. They group by *device category × browser × URL path × hour* and look at conversion-rate deltas pre- and post-launch. Within 90 minutes they find it: on Safari 16 + iPhone 12-mini specifically, the new search page's date picker is hidden behind a banner. Booking attempts on that combination dropped from 4.1% to 0.2%.

A 4-hour hotfix later, the bug is patched. Q4 revenue lands on plan. The total downside, had they relied only on GA4's standard reports, was estimated at ~$190M.

**The lesson:** Standard GA4 reports tell you *something happened*. Raw GA4 + BigQuery tells you *what happened to whom*. Every senior marketing analyst, every measurement strategist, must own both.

This is the module where you learn both.

---

## 🌅 GA4 vs Universal Analytics — Why GA4 Is Different

Universal Analytics (UA), the previous version of Google Analytics, stopped collecting data on **July 1, 2023**. By July 2024 the UA interface was sunset entirely. GA4 is not "UA v2" — it is a fundamentally different data model.

| Dimension | Universal Analytics | GA4 |
|-----------|---------------------|-----|
| Data model | Sessions + pageviews + events | **Events only** (everything is an event) |
| Identity | Client ID (cookie-based) | User ID + Google Signals + Device ID + Modeled ID |
| Sampling | Standard reports unsampled; custom > 500K sessions sampled | Standard reports unsampled; Explorations sampled in free tier |
| BigQuery export | Paid (360) only | Free for all properties |
| Cross-device | Limited | Built in (when Google Signals enabled) |
| Bounce rate | Standard metric | Replaced by "Engagement rate" |
| Goals | Manual setup | Conversion events (now called "Key Events") |
| Engagement metric | Time on site | Engaged sessions (>10 sec, conversion, or 2+ pages) |
| App + web | Separate properties | Unified data stream |

🎯 **MEMORIZE THIS.** In GA4, *everything is an event*. A pageview is an event. A scroll is an event. A purchase is an event. The conceptual unit is the **event with parameters**, not the session.

---

## 🧱 The GA4 Data Model — Events, Parameters, User Properties

### Events

An **event** is an action taken on your site or app. Every event has a name and (optionally) parameters.

GA4 categorizes events into four types:

| Type | Examples | Notes |
|------|----------|-------|
| **Automatically collected** | `first_visit`, `session_start`, `user_engagement` | Always on — you cannot disable them |
| **Enhanced measurement** | `scroll`, `click` (outbound), `file_download`, `video_start`, `video_progress`, `video_complete`, `view_search_results`, `page_view` | Toggle in stream settings |
| **Recommended events** | `purchase`, `add_to_cart`, `sign_up`, `login`, `share`, `tutorial_begin`, `level_up` (gaming) | Use the official names — they unlock standard reports |
| **Custom events** | Anything you define: `cta_clicked`, `survey_completed`, `quote_requested` | You name + send these yourself |

⚠️ **What most teams get wrong:** Naming a custom event `purchase_complete` when GA4 already has a `purchase` recommended event. Custom names that overlap with recommended names break the e-commerce reports. **Always use the recommended event names when one applies.**

### Parameters

A **parameter** is a key-value attribute attached to an event. Up to **25 parameters per event**. Parameters can be:

- **Standard / recommended** — automatically understood by GA4 (e.g., `currency`, `value`, `items`).
- **Custom** — anything you define (`subscription_plan`, `product_category`, `user_tier`).

For custom parameters to appear in reports, you must **register them as custom dimensions** (for text) or **custom metrics** (for numeric). Free GA4 properties support **50 custom dimensions + 50 custom metrics**.

### User properties

A **user property** is an attribute about the *user* (not an event). Examples: `subscription_status = 'paid'`, `loyalty_tier = 'gold'`. Free GA4: **25 user properties**.

### Identifiers GA4 uses (in priority order)

1. **User ID** — your own login-based identifier (best).
2. **Google Signals** — Google's cross-device data when users opt in.
3. **Device ID** — first-party cookie.
4. **Modeled data** — ML-inferred when consent is denied (only if Consent Mode is configured).

---

## 🎯 Conversion Events (now "Key Events")

In 2024, GA4 renamed "Conversions" to **Key Events**. Same concept: events flagged as business-critical. Key Events:

- Appear prominently in standard reports.
- Are the basis for Conversion-bid optimization in Google Ads (after import).
- Can be marked as "ad-only conversions" (count for Ads only) or "all reporting conversions."

⚠️ **Trap on the exam:** The maximum number of conversion events per property used to be 30; it's been raised to **50** in current GA4 (2025–2026). The exam *will* test the current number.

### Marking events as conversions

```
Admin → Property → Events → Mark as conversion (toggle ON)
   OR
Admin → Property → Conversions → New conversion event → name it
```

A best-practice GA4 setup has **3–8 Key Events**, not 50. Each represents a distinct customer-value milestone:

| Funnel stage | Key Event example |
|--------------|-------------------|
| Acquisition | `lead_form_submitted`, `sign_up` |
| Activation | `first_session_engaged`, `tutorial_complete` |
| Engagement | `feature_used`, `content_consumed` |
| Conversion | `purchase`, `subscription_started` |
| Retention | `repeat_purchase`, `account_renewal` |

---

## 👥 Audiences — The Powerhouse Feature

GA4 audiences are *dynamic* — recomputed continuously based on user behavior. They serve three purposes:

1. **Reporting** — segment any report by audience.
2. **Activation** — sync audiences to Google Ads, Display & Video 360, Search Ads 360, and (via integrations) other platforms.
3. **Triggers** — fire an event when a user joins an audience (useful for personalization).

### Audience-builder dimensions

You can build audiences from:
- Event-based conditions (e.g., "completed `add_to_cart` ≥ 3 times in 30 days").
- User-property conditions (e.g., `loyalty_tier = 'gold'`).
- Demographic and device conditions.
- Predictive metrics (see next section).
- Sequence conditions ("did A then B within 7 days").

### Predictive audiences

GA4 has three built-in **predictive metrics** powered by Google's machine learning:

| Metric | Definition | Min data required |
|--------|------------|-------------------|
| **Purchase probability** | Probability a user will purchase in next 7 days | 1,000 returning purchasers + 1,000 returning non-purchasers in last 28 days |
| **Churn probability** | Probability an active user will NOT return in next 7 days | Same threshold |
| **Predicted revenue** | Expected revenue from a user in next 28 days | Same threshold |

These metrics let you build audiences like "Top 10% by predicted revenue" and sync them to Google Ads as bid-modifier targets. This is essentially a no-code propensity model and is one of the highest-ROI features in GA4.

⚠️ **What most teams get wrong:** They don't meet the volume thresholds because their conversion data is too thin — and they don't realize the predictive features have been silently disabled. Always check **Admin → Predictions** for eligibility.

---

## 🔬 Explorations — Going Beyond Standard Reports

The **Explorations** workspace is GA4's analyst-grade ad-hoc reporting tool. Five techniques to know cold:

### 1. Free-form Exploration

The Excel-of-GA4. Drag dimensions and metrics into rows, columns, and values. Build pivot tables, heat maps, scatter plots. **80% of strategist work happens here.**

### 2. Funnel Exploration

Visualize step-by-step conversion of users through a defined sequence of events. Supports **open funnel** (steps can have intervening events) or **closed funnel** (steps must be in exact order with no others between).

### 3. Path Exploration

Tree-graph of what users did *before* or *after* a specific event. The forward path from `add_to_cart` shows where users go next; the backward path from `purchase` shows the path that led to conversion.

### 4. Segment Overlap

Three audiences overlaid in a Venn diagram. Useful for finding the overlap between (for example) "newsletter subscribers" and "purchasers" and "mobile users."

### 5. User Lifetime

Aggregate metrics per user across all sessions ever recorded. Foundation for LTV-style analysis inside GA4.

### Cohort Exploration

A separate technique: cohorts of users sharing an acquisition date, and how their behavior evolves over the following days/weeks. Covered in depth in [Module 8](../Module-08-Audience-Intelligence-Cohorts/Reading.md).

⚠️ **Sampling caveat:** Free GA4 Explorations sample when query result rows exceed **10 million**. GA4 360 raises this to 1 billion. For unsampled deep analysis at high volume, use BigQuery export (next section).

---

## 🏗️ BigQuery Export — Where Strategists Actually Live

The **GA4 → BigQuery export is free** for all properties (paid in UA). This is the single most underused feature in GA4. Three reasons you must use it:

1. **No sampling.** Every event row is available.
2. **SQL-level access.** Join GA4 data to your CRM, your warehouse, your MMM inputs.
3. **Custom modeling.** You cannot build a Markov-chain attribution model in the GA4 UI. You can in SQL.

### Setting up the export

```
GA4 Admin → Property → BigQuery Links → Link
  → Choose GCP project
  → Choose dataset location
  → Frequency: Daily (free) and / or Streaming (~$0.05 per GB ingested,
                                                  free monthly tier)
  → Data streams: include all
  → Include advertising identifiers: YES if you have Consent Mode
```

Once linked, GA4 writes daily tables to your BigQuery project:

```
project_id.analytics_NNNNNNNNN.events_YYYYMMDD       -- daily table
project_id.analytics_NNNNNNNNN.events_intraday_YYYYMMDD  -- if streaming
```

### The GA4 BigQuery event-level schema

Each row is one event. Key columns:

| Column | Type | Description |
|--------|------|-------------|
| `event_date` | STRING | YYYYMMDD |
| `event_timestamp` | INT64 | Microseconds since UNIX epoch |
| `event_name` | STRING | The event name (e.g., `page_view`, `purchase`) |
| `event_params` | ARRAY<STRUCT> | Repeated: each param has `key` and `value` (string/int/double/float) |
| `event_value_in_usd` | FLOAT64 | If a value param exists, normalized to USD |
| `user_pseudo_id` | STRING | GA4's anonymous ID (cookie / app instance) |
| `user_id` | STRING | Your custom User ID (if set) |
| `user_properties` | ARRAY<STRUCT> | Repeated, like event_params |
| `device.category`, `device.operating_system`, etc. | NESTED | Device info |
| `geo.country`, `geo.city`, etc. | NESTED | Geo info |
| `traffic_source.source`, `.medium`, `.name` | NESTED | First-touch attribution |
| `collected_traffic_source` | NESTED | Per-event attribution (added 2023) |
| `ecommerce.transaction_id`, `.purchase_revenue` etc. | NESTED | E-commerce data |
| `items` | ARRAY<STRUCT> | Repeated: product-level e-commerce data |

### Worked example — the Airbnb-style debug query

```sql
-- "What broke after the redesign launched on 2023-10-12?"
WITH device_path_conversion AS (
  SELECT
    PARSE_DATE('%Y%m%d', event_date) AS dt,
    device.category,
    device.operating_system,
    device.browser,
    (SELECT value.string_value FROM UNNEST(event_params)
     WHERE key = 'page_location') AS page_location,
    COUNT(DISTINCT CASE WHEN event_name = 'page_view'
                        THEN user_pseudo_id END) AS unique_viewers,
    COUNT(DISTINCT CASE WHEN event_name = 'purchase'
                        THEN user_pseudo_id END) AS unique_purchasers
  FROM `myproject.analytics_NNNN.events_*`
  WHERE _TABLE_SUFFIX BETWEEN '20231005' AND '20231015'
  GROUP BY 1, 2, 3, 4, 5
)
SELECT
  dt,
  category,
  operating_system,
  browser,
  page_location,
  unique_viewers,
  unique_purchasers,
  SAFE_DIVIDE(unique_purchasers, unique_viewers) AS conversion_rate
FROM device_path_conversion
WHERE unique_viewers >= 100  -- statistical floor
ORDER BY dt DESC, conversion_rate ASC
LIMIT 50;
```

### Worked example — building a custom funnel in SQL

```sql
-- Cart → Checkout → Purchase, 7-day window
WITH user_events AS (
  SELECT
    user_pseudo_id,
    event_name,
    event_timestamp,
    DATETIME(TIMESTAMP_MICROS(event_timestamp), 'UTC') AS event_dt
  FROM `myproject.analytics_NNNN.events_*`
  WHERE _TABLE_SUFFIX BETWEEN '20240901' AND '20240930'
    AND event_name IN ('add_to_cart','begin_checkout','purchase')
),
user_first_events AS (
  SELECT
    user_pseudo_id,
    MIN(CASE WHEN event_name = 'add_to_cart' THEN event_dt END) AS first_atc,
    MIN(CASE WHEN event_name = 'begin_checkout' THEN event_dt END) AS first_bc,
    MIN(CASE WHEN event_name = 'purchase' THEN event_dt END) AS first_p
  FROM user_events
  GROUP BY 1
)
SELECT
  COUNT(*) AS users_with_atc,
  COUNTIF(first_bc > first_atc
          AND DATETIME_DIFF(first_bc, first_atc, DAY) <= 7) AS reached_checkout,
  COUNTIF(first_p > first_bc
          AND DATETIME_DIFF(first_p, first_bc, DAY) <= 7) AS reached_purchase
FROM user_first_events
WHERE first_atc IS NOT NULL;
```

This query gives you a true 7-day funnel — something the standard GA4 funnel exploration can also do, but in BigQuery you can run it across years of data with no sampling.

---

## 💰 GA4 360 vs Free GA4

Most readers will use the **free** tier. The paid GA4 360 differs:

| Feature | Free GA4 | GA4 360 |
|---------|----------|---------|
| Cost | $0 | ~$150K+/year (varies by negotiation) |
| Data freshness in UI | Up to 48 hours | Up to 4 hours |
| Sampling in Explorations | 10M event sampling | 1B event sampling |
| Custom dimensions | 50 | 125 |
| Custom metrics | 50 | 125 |
| Audiences | 100 | 400 |
| Conversion events | 50 | 50 |
| Data retention | 14 months (event-level) | 50 months |
| BigQuery streaming export | Limited monthly free tier | Higher allowance |
| Roll-up properties | No | Yes |
| Dedicated support / SLA | No | Yes |

🎯 **Strategist's rule:** If you do >50M events/month and your team relies on Explorations, the 360 sampling jump (10M → 1B) may justify the price. Otherwise, free GA4 + BigQuery export gives you 95% of the value.

---

## 🔗 GA4 → Looker Studio Integration

**Looker Studio** (formerly Google Data Studio) is the free BI layer on top of GA4. It has two connectors:

1. **GA4 connector** — direct API to your GA4 property. Fast for standard reports but bound by API limits (and sampling for high cardinality).
2. **BigQuery connector** — connect to your raw export. No sampling. Full SQL.

For executive dashboards, use BigQuery + a curated SQL view. For self-serve analyst dashboards, the GA4 connector is fine.

```sql
-- A clean "Daily Marketing Dashboard" view for Looker Studio
CREATE OR REPLACE VIEW myproject.marts.daily_marketing AS
SELECT
  PARSE_DATE('%Y%m%d', event_date) AS dt,
  traffic_source.source AS source,
  traffic_source.medium AS medium,
  COUNT(DISTINCT user_pseudo_id) AS users,
  COUNT(DISTINCT CASE WHEN event_name = 'session_start'
                       THEN CONCAT(user_pseudo_id, '|',
                              (SELECT value.int_value FROM UNNEST(event_params)
                               WHERE key='ga_session_id')) END) AS sessions,
  COUNTIF(event_name = 'purchase') AS purchases,
  SUM(event_value_in_usd) AS revenue_usd
FROM `myproject.analytics_NNNN.events_*`
WHERE _TABLE_SUFFIX BETWEEN
       FORMAT_DATE('%Y%m%d', DATE_SUB(CURRENT_DATE(), INTERVAL 90 DAY))
   AND FORMAT_DATE('%Y%m%d', DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY))
GROUP BY 1, 2, 3;
```

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "GA4 is just UA with a new UI" | Different data model entirely (event-based, not session-based) |
| "Bounce rate is the headline metric" | It was deprecated in GA4; engagement rate replaced it |
| "Conversions and Key Events are different" | They're the same thing — Google renamed Conversions → Key Events in 2024 |
| "Free GA4 doesn't allow BigQuery export" | False — it does, and you should use it |
| "We can register infinite custom dimensions" | 50 in free GA4 (125 in 360) |
| "Predictive audiences work for everyone" | Volume thresholds: 1,000 + 1,000 in 28 days |
| "Standard reports show sampled data" | Free GA4 standard reports are unsampled. Explorations sample at 10M. |
| "User ID overrides everything" | Priority order: User ID > Google Signals > Device ID > Modeled |
| "Engagement rate = 1 − bounce rate" | Not exactly. Engaged sessions require >10s, conversion, or 2+ screens. |

---

## 🎓 Key Terms To Know

| Term | Definition |
|------|------------|
| **Event** | Any action on the site/app; the atomic unit of GA4 |
| **Parameter** | A key-value attribute attached to an event (25 max per event) |
| **User property** | An attribute about the user, not the event (25 max in free) |
| **Custom dimension / metric** | A registered parameter or user property exposed in reports (50/50 in free) |
| **Key Event** | The 2024 rename for "Conversion event" (50 max) |
| **Enhanced measurement** | Automatic capture of scroll, outbound click, file download, video, site search, page_view |
| **Recommended events** | Google-defined event names (purchase, add_to_cart, sign_up, login, etc.) |
| **Engaged session** | Session ≥10s OR with a conversion OR with 2+ screen/page views |
| **Engagement rate** | Engaged sessions / total sessions (replacement for bounce rate) |
| **User pseudo ID** | GA4's anonymous device/cookie ID |
| **User ID** | Your custom login-based ID |
| **Google Signals** | Cross-device + demographics data when users have opted in |
| **Predictive metrics** | Purchase probability, churn probability, predicted revenue |
| **Exploration** | GA4's ad-hoc analysis workspace (free-form, funnel, path, segment overlap, lifetime, cohort) |
| **BigQuery export** | Free raw event-level data export to GCP BigQuery |
| **Measurement Protocol v2** | The HTTP endpoint for server-side event ingestion to GA4 |

---

## 💼 Case Study — eBay's GA4 + BigQuery Analytics Platform (2023)

**Situation.** Universal Analytics (UA) stopped collecting data on **July 1, 2023**, and the UA reporting interface itself was scheduled for sunset in July 2024. eBay — a marketplace with hundreds of millions of monthly active users, ~190 million buyers, and a complex multi-region property portfolio (eBay.com, eBay.de, eBay.co.uk, eBay.com.au and dozens of country sites) — faced a deadline-driven migration problem that most teams under-prepared for: years of UA-trained dashboards, alerts, attribution rules, and bid-optimization integrations all had to be reproduced on GA4's *event-only* data model before the UA cutoff. eBay also had a strategic need to consolidate measurement across web + Android app + iOS app + email — exactly the kind of cross-stream unification GA4 was designed for and UA was not.

**Decision.** eBay's analytics leadership (publicly profiled at the 2023 Google Cloud Next conference) chose a **GA4 + BigQuery + Looker** architecture rather than rebuilding within the GA4 UI alone. Specifically: (1) every GA4 property was linked to BigQuery via the *free* daily-export feature plus streaming export for time-sensitive events; (2) all executive dashboards were rebuilt in Looker on top of curated BigQuery views, with the GA4 UI used only for ad-hoc analyst work and Explorations; (3) custom dimensions and Key Events were standardized via a *single global event taxonomy* enforced through a centralized server-side GTM container; (4) Key Events were ruthlessly cut to fewer than a dozen per region — under GA4's 50-event cap — with everything else relegated to non-conversion custom events for diagnostic use. The migration ran in parallel with UA from late 2022 through July 2023.

**Outcome.** Google Cloud published eBay's migration as a customer-reference case study in 2023; the eBay analytics team disclosed that the BigQuery-first model gave them **no sampling on any standard executive report**, dashboard rebuilds completed roughly 30% faster than the original UA timeline, and the unified event taxonomy enabled cross-region analyses (e.g., "compare conversion-rate decay of new mobile users across eBay.com and eBay.de") that were genuinely impossible on the UA stack. The most important quantitative result: post-migration, the analytics team's average time-to-answer for a senior-leadership ad-hoc question dropped from "next-business-day" on UA to **under 15 minutes on BigQuery** — a ~95% reduction that fundamentally changed how the marketing org operated.

**Lesson for the exam / for practitioners.** eBay is the canonical 2023 reference for the principle this module's strategist rule encodes: *free GA4 + BigQuery export gives you 95% of GA4 360's value at 0% of the cost.* The migration also illustrates the *event-taxonomy discipline* the module emphasizes — eBay's pre-migration UA implementation had drifted into hundreds of event names with overlapping semantics; the post-migration GA4 implementation collapsed those into a single global taxonomy of ~30 recommended-event-aligned names with ruthless Key Event prioritization. On the exam, recognize: when a case describes a large enterprise migrating from UA with sampling-sensitive reports, the right architecture is GA4 + BigQuery + a BI tool, not GA4 360 alone.

**Discussion (Socratic).**
- Q1: eBay's migration succeeded in part because the team cut hundreds of legacy UA events down to a few dozen GA4 events in a single sweep. The CMO at a smaller company sees that case and wants to do the same cut. What's the test you'd apply, event-by-event, before deciding which to keep — and what's the most predictable downstream cost of an over-aggressive cut?
- Q2: The official answer here is to rebuild dashboards on BigQuery rather than inside GA4. Why does BigQuery + Looker win over GA4-native dashboards for an enterprise at eBay's scale, and at what *smaller* scale does the trade-off reverse — i.e., when is "use GA4 UI dashboards directly" actually the right call?
- Q3: eBay's implicit trade-off is that BigQuery + Looker requires SQL + data-engineering capability the GA4 UI does not. For a marketing-org structure where SQL fluency is uneven, what's the operating model that protects the BigQuery investment without creating a permanent "the data team is the bottleneck" problem?

---

## Discussion — Socratic prompts

1. GA4's hard cap of 50 Key Events per property forces ruthless prioritization. A client comes to you with 38 Key Events already configured, most of them low-volume micro-conversions. What heuristic would you apply to *cut* the list back to 12–15 — and how would you defend the cuts to the team that set up the original 38?
2. The GA4 → BigQuery export is free for both the standard and 360 tiers, but the SQL skills to actually use it are scarce on most marketing teams. When is it strategically *correct* to skip the BigQuery export entirely and accept the analytics ceiling of the GA4 UI? When is it negligent to skip it?
3. GA4's data-driven attribution (DDA) requires 400 conversions per type / 30 days. A scrappy B2B SaaS with 25 demo-requests / week will never hit that threshold. What's the *least bad* substitute and how would you communicate the methodology's limits to a board that asks "which channel drove this quarter's pipeline?"
4. Google's 2024 rename of "Conversions" to "Key Events" looks cosmetic but has real downstream effects on dashboards, alerts, and team vocabulary. How should an analytics leader manage this kind of platform-driven taxonomy churn over a 5-year horizon — when GA4 itself, like UA before it, will eventually be superseded?
5. The Airbnb case in the opening story relied on raw event-level SQL to find a $200M bug. Could a smaller team without a dedicated analyst have caught the same issue using only standard GA4 reports + Looker Studio? What does this case tell you about the *fixed costs* of a privacy-first analytics function and where the ROI threshold lies?

---

## ✅ Module 3 Summary

You now know:
- 🌅 Why GA4 is different from UA (event-only model).
- 🧱 The full data model: events × parameters × user properties × custom dimensions.
- 🎯 Key Events (formerly Conversions) and how to design 3–8 of them well.
- 👥 Audiences, predictive metrics, and activation to Google Ads.
- 🔬 The five Explorations techniques.
- 🏗️ BigQuery export, the GA4 event schema, and how to write debugging + funnel SQL.
- 💰 Free GA4 vs 360 trade-offs and when 360 actually pays back.

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md)
2. ✏️ Take [Quiz.md](./Quiz.md)
3. 📋 Review [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ Move to [Module 4: Multi-Touch Attribution](../Module-04-Multi-Touch-Attribution/Reading.md)
5. 🎓 **High-leverage move:** spin up a free GA4 property + a free BigQuery sandbox and run one of the queries above against your own data. Theoretical knowledge of GA4 does not pass the Google Analytics 4 Certification — hands-on practice does.

> **Where this leads.**
> - Inside this course: [Module 4](../Module-04-Multi-Touch-Attribution/Reading.md) builds DDA on top of the GA4 events you defined here; [Module 8](../Module-08-Audience-Intelligence-Cohorts/Reading.md) uses GA4's raw export to construct cohort triangles; [Module 9](../Module-09-Privacy-First-Measurement/Reading.md) layers Consent Mode v2 and Enhanced Conversions over your GA4 implementation.
> - Cross-course: [Course 18: AI Digital Marketing Capstone Portfolio](../../18-AI-Marketing-Capstone-Portfolio/README.md) expects a working GA4 + BigQuery sandbox as a portfolio artifact.
> - Practice: [Practice Exam 1](../Practice-Exams/Practice-Exam-1.md) (questions 5–9 and 35–36) directly tests GA4 model knowledge; the [Final Mock Exam](../Practice-Exams/Final-Mock-Exam.md) tests SQL against the GA4 event schema.

---

## 📚 Further Reading (Optional)

- 📖 **Google's official GA4 Skillshop courses** — free, the basis of the GA4 Certification.
- 📖 **"Learning Google Analytics" by Mark Edmondson** (O'Reilly, 2024) — the canonical book.
- 🔗 [GA4 BigQuery export schema reference (Google official)](https://support.google.com/analytics/answer/7029846)
- 🔗 [Charles Farina's GA4 blog](https://charlesfarina.com/) — practitioner-level GA4 deep-dives.
- 🔗 [Simo Ahava's GA4 + GTM guides](https://www.simoahava.com/tag/google-analytics-4/)
- 🔗 [Lakehouse-style GA4 data modeling — dbt + GA4 sample project](https://github.com/dbt-labs/google_analytics)
- 🔗 [Google's Analytics Certification page in Skillshop](https://skillshop.exceedlms.com/student/path/2938)
