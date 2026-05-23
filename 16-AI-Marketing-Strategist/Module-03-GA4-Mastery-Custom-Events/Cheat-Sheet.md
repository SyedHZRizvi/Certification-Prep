# 📋 Module 3 Cheat Sheet: GA4 Mastery & Custom Events

> One page. Print it. Tape it to your monitor.

---

## 🧱 Data Model

```
EVENT  →  has up to 25  →  PARAMETERS
                  ↓
                  expose as
                  ↓
                  CUSTOM DIMENSIONS (50 free / 125 360)
                  CUSTOM METRICS    (50 free / 125 360)

USER   →  has up to 25  →  USER PROPERTIES
```

### Event categories (4)

| Category | Examples |
|----------|----------|
| Automatically collected | `first_visit`, `session_start`, `user_engagement` |
| Enhanced measurement | `scroll`, `click` (outbound), `file_download`, `video_*`, `view_search_results`, `page_view` |
| Recommended | `purchase`, `add_to_cart`, `sign_up`, `login`, `share` |
| Custom | Anything you name |

---

## 🆚 UA → GA4 in One Glance

| | UA | GA4 |
|---|----|-----|
| Atomic unit | Session | Event |
| BigQuery export | 360-only (paid) | Free for everyone |
| Bounce rate | Headline | Replaced by engagement rate |
| Conversions | Goals (25) | Key Events (50) |
| Identifier | Client ID | User ID + Signals + Device + Modeled |
| App + web | Separate | Unified |
| UA shutdown | 1 Jul 2023 (UA), 1 Jul 2024 (UA 360) | — |

---

## 🎯 Engaged Session — Definition

```
Engaged = >10 sec  OR  has conversion  OR  2+ screen/page views
Engagement rate = engaged sessions / total sessions
```

---

## 🧠 Identifier Priority

```
User ID  >  Google Signals  >  Device ID  >  Modeled
(your ID)   (cross-device,    (cookie)       (ML when
            opted in)                         consent denied)
```

---

## 🔮 Predictive Metrics (3)

| Metric | Window |
|--------|--------|
| Purchase probability | Next 7 days |
| Churn probability | Next 7 days |
| Predicted revenue | Next 28 days |

**Threshold:** 1,000 returning purchasers + 1,000 returning non-purchasers in last 28 days.

---

## 🔬 Explorations (5 + 1)

| Technique | What it does |
|-----------|--------------|
| Free-form | Pivot-style ad-hoc table |
| Funnel | Step-by-step conversion |
| Path | Tree of next/prior events |
| Segment overlap | Venn of 3 audiences |
| User lifetime | Per-user aggregate metrics |
| Cohort (separate) | Acquisition cohort behavior over time |

Free GA4 samples at **10M event** rows; 360 at **1B**.

---

## 🏗️ BigQuery Export

```
project.analytics_NNN.events_YYYYMMDD          -- daily
project.analytics_NNN.events_intraday_YYYYMMDD -- streaming
```

### Parameter extraction pattern

```sql
SELECT value.string_value
FROM UNNEST(event_params)
WHERE key = 'page_location'
```

### Schema cheat — top-level columns to memorize

```
event_date, event_timestamp, event_name
event_params  (ARRAY<STRUCT>)
user_pseudo_id, user_id
user_properties (ARRAY<STRUCT>)
device.*, geo.*, traffic_source.*
ecommerce.*, items (ARRAY<STRUCT>)
```

---

## 💰 Free vs 360 (when 360 pays back)

| Feature | Free | 360 |
|---------|------|-----|
| Sampling in Explorations | 10M | 1B |
| Custom dimensions | 50 | 125 |
| Audiences | 100 | 400 |
| Data retention | 14 mo | 50 mo |
| Cost | $0 | ~$150K+ /yr |

> **Strategist rule:** if you're <50M events/mo, free GA4 + BigQuery is enough.

---

## 🏆 Exam Power Phrases

✅ Often correct:
- "Engaged session = >10s OR conversion OR 2+ views..."
- "Predictive audiences need 1,000+1,000 in 28 days..."
- "Free GA4 includes free BigQuery export..."
- "Use the recommended event name (purchase) not custom..."
- "Standard reports are unsampled in free GA4..."

❌ Often wrong:
- "BigQuery export requires 360..."
- "Bounce rate is GA4's headline engagement metric..."
- "Custom and recommended events are interchangeable..."
- "GA4 is just UA with new colors..."

---

## ⚠️ Anti-Patterns

- ❌ Naming custom events `purchase_complete` (overlaps recommended `purchase`)
- ❌ Forgetting to register parameters as custom dimensions
- ❌ 50 Key Events instead of 3–8
- ❌ Relying on standard reports during incident debugging (use raw BigQuery)
- ❌ Not enabling BigQuery export at property creation time
- ❌ Setting default retention to 2 months (raise to 14)

---

## ✏️ Quick Self-Check

1. Free-tier limits: parameters, custom dimensions, Key Events, retention? ___
2. Three predictive metrics + threshold? ___
3. Identifier priority order? ___
4. UA shutdown date? ___
5. SQL pattern to extract a parameter? ___

---

➡️ [Module 4: Multi-Touch Attribution](../Module-04-Multi-Touch-Attribution/Reading.md)
