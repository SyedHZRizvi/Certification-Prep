# ✏️ Module 3 Quiz: GA4 Mastery & Custom Events

> **Instructions:** 28 questions. No notes. Aim for 24/28 (86%). This is the cert-prep module — be ruthless on yourself.

---

## Questions

### Q1. In GA4, the atomic unit of data is: *(Remember)*
A. A session
B. A pageview
C. An event
D. A user

---

### Q2. Universal Analytics stopped collecting data on: *(Remember)*
A. December 31 2020
B. July 1 2023
C. January 1 2024
D. July 1 2024

---

### Q3. Which of the following is NOT one of GA4's four event categories? *(Remember)*
A. Automatically collected
B. Enhanced measurement
C. Funnel events
D. Recommended events

---

### Q4. Enhanced Measurement automatically captures all EXCEPT: *(Remember)*
A. Scroll
B. Outbound click
C. File download
D. Form submit

---

### Q5. The maximum number of parameters per event in GA4 is: *(Remember)*
A. 10
B. 25
C. 50
D. 100

---

### Q6. The free GA4 tier supports how many custom dimensions? *(Remember)*
A. 10
B. 25
C. 50
D. 100

---

### Q7. The maximum number of Key Events (formerly Conversions) per property is: *(Remember)*
A. 5
B. 30
C. 50
D. Unlimited

---

### Q8. "Engagement rate" in GA4 replaces: *(Understand)*
A. Bounce rate
B. Session duration
C. Conversion rate
D. Click-through rate

---

### Q9. An "engaged session" is defined as a session that: *(Understand)*
A. Lasts >5 seconds
B. Has at least one event
C. Lasts >10 seconds, OR has a conversion, OR has 2+ screen/page views
D. Includes a purchase

---

### Q10. GA4's identifier priority order is: *(Remember)*
A. Device ID → User ID → Modeled
B. User ID → Google Signals → Device ID → Modeled
C. Modeled → Device ID → Google Signals → User ID
D. Random

---

### Q11. Predictive metrics in GA4 require a minimum of: *(Remember)*
A. 100 + 100 returning users in 28 days
B. 1,000 + 1,000 returning purchasers / non-purchasers in 28 days
C. 10,000 + 10,000 in 90 days
D. No threshold

---

### Q12. The three predictive metrics built into GA4 are: *(Remember)*
A. Visit probability, click probability, scroll probability
B. Purchase probability, churn probability, predicted revenue
C. CTR, CVR, ROAS
D. RFM, LTV, CAC

---

### Q13. A "Free-form Exploration" in GA4 is BEST described as: *(Understand)*
A. A drag-and-drop table builder analogous to Excel pivot tables
B. A funnel tool
C. A predefined report
D. The home screen

---

### Q14. The "closed funnel" option in GA4 Funnel Exploration means: *(Understand)*
A. Users can complete steps in any order
B. Users must complete steps in exact sequence with no intervening events
C. The funnel is private to the user
D. The funnel runs only once

---

### Q15. The GA4 → BigQuery export costs: *(Remember)*
A. Free for both free GA4 and 360
B. Free for 360 only
C. Free for free GA4 only
D. $1,000/month flat fee

---

### Q16. The GA4 BigQuery daily export table is named: *(Remember)*
A. `ga_sessions_YYYYMMDD`
B. `events_YYYYMMDD`
C. `analytics_data`
D. `hits`

---

### Q17. `event_params` in the GA4 BigQuery schema is stored as: *(Understand)*
A. A flat string column
B. An ARRAY<STRUCT> with key + value (string/int/float/double)
C. A JSON blob
D. Separate columns per parameter

---

### Q18. To extract the `page_location` parameter in BigQuery SQL, you'd write: *(Apply)*
A. `event_params.page_location`
B. `SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'page_location'`
C. `JSON_EXTRACT(event_params, '$.page_location')`
D. `params['page_location']`

---

### Q19. Free GA4 retains event-level data for: *(Remember)*
A. 2 months
B. 14 months (default; can be raised to 14 in settings)
C. 50 months
D. Forever

---

### Q20. GA4 360 raises Exploration sampling from 10M to: *(Remember)*
A. 100M
B. 1B
C. No sampling at all
D. Same as free

---

### Q21. Custom event names should NOT overlap with recommended event names because: *(Analyze)*
A. Google bans them
B. Custom names that overlap with recommended ones break the standard e-commerce reports
C. They cost more
D. They are case-sensitive

---

### Q22. To send a server-side event to GA4 you would use: *(Apply)*
A. The Pixel
B. Measurement Protocol v2
C. Conversion API
D. Adwords API

---

### Q23. Looker Studio (formerly Data Studio) can connect to GA4 via: *(Understand)*
A. Only the BigQuery connector
B. Only the GA4 connector
C. Both — GA4 connector (with API limits) AND BigQuery connector (no sampling)
D. CSV upload only

---

### Q24. A team has 50M events/month and relies heavily on Explorations. The 360 upgrade is justified PRIMARILY because: *(Apply)*
A. It removes the GA4 logo
B. The Explorations sampling threshold rises from 10M to 1B
C. It includes a CDP
D. It removes the 25-parameter limit

---

### Q25. The 2024 rename of "Conversions" was to: *(Remember)*
A. Goals
B. Key Events
C. Macro Events
D. Targets

---

### Q26. Which of the following will WAKE UP Google Signals data in your reports? *(Apply)*
A. Adding the GA4 tag
B. Toggling Google Signals on in Admin AND obtaining user consent
C. Buying GA4 360
D. Adding a User ID

---

### Q27. A `user_pseudo_id` in BigQuery represents: *(Understand)*
A. Your custom User ID
B. GA4's anonymous device/cookie identifier
C. The Google account ID
D. The IP address

---

### Q28. The Airbnb Q4 2023 search-page bug story illustrates that: *(Analyze)*
A. Standard GA4 reports always surface issues
B. Raw event-level data in BigQuery, with device/browser/path slicing, can find bugs that aggregated reports miss
C. GA4 is unreliable
D. UA was better

---

## 🎯 Answers + Explanations

### Q1: **C. An event**
GA4 is event-first. Sessions and users are derived from events; the inverse of UA's model.

### Q2: **B. July 1 2023**
UA stopped collecting data; UA 360 stopped July 1 2024. The UI was sunset shortly after.

### Q3: **C. Funnel events**
The four categories are Automatically collected, Enhanced measurement, Recommended, and Custom. "Funnel events" is not a category.

### Q4: **D. Form submit**
Enhanced Measurement captures scroll, outbound click, file download, video, site search, and page_view. Form submit is technically a beta event that requires opt-in and is unreliable.

### Q5: **B. 25**
25 parameters per event is the documented limit; exceeding silently drops parameters.

### Q6: **C. 50**
Free GA4: 50 custom dimensions + 50 custom metrics + 25 user properties. 360 doubles to ~125.

### Q7: **C. 50**
Raised from 30 to 50 in 2024. Used to be the most-missed exam question — current number is 50.

### Q8: **A. Bounce rate**
Bounce rate was deprecated in GA4 (it returned as an optional metric later, but the headline replacement is engagement rate).

### Q9: **C. >10s OR conversion OR 2+ screen/page views**
This is the precise definition. Memorize.

### Q10: **B. User ID → Google Signals → Device ID → Modeled**
Highest-quality identifier wins. Modeled data only when the higher ones are unavailable.

### Q11: **B. 1,000 + 1,000 returning users in 28 days**
The volume threshold. Below this, GA4 disables the predictive metric silently.

### Q12: **B. Purchase probability, churn probability, predicted revenue**
The three predictive metrics. Each can power an audience for activation to Google Ads.

### Q13: **A. Drag-and-drop pivot-table style**
Free-form is the most flexible Exploration — analogous to Excel pivot tables / Tableau worksheets.

### Q14: **B. Exact sequence with no intervening events**
Closed funnel = strict order. Open funnel = users can detour through other events.

### Q15: **A. Free for both**
The free BigQuery export was once a 360-only feature; it's been free for all properties since 2020.

### Q16: **B. `events_YYYYMMDD`**
And `events_intraday_YYYYMMDD` for streaming. The full path is `project.analytics_NNN.events_YYYYMMDD`.

### Q17: **B. ARRAY<STRUCT> with key + value (string/int/float/double)**
The nested structure that requires UNNEST() to query.

### Q18: **B. `SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'page_location'`**
The canonical pattern. Memorize.

### Q19: **B. 14 months default**
Default 2 months, can be raised to 14 in Admin → Data Settings → Data Retention. (360 has 50 months.)

### Q20: **B. 1B**
The biggest GA4-360 sampling jump. For >50M events/month with heavy Explorations use, this can justify the price.

### Q21: **B. Standard e-commerce reports break**
The standard reports query specific recommended event names. Custom `purchase_complete` instead of `purchase` makes you invisible to standard reporting.

### Q22: **B. Measurement Protocol v2**
GA4's server-side ingestion endpoint. UA had a v1, incompatible with GA4.

### Q23: **C. Both — GA4 connector and BigQuery connector**
GA4 connector for quick dashboards; BigQuery connector for no-sampling production dashboards.

### Q24: **B. Sampling threshold rises 10M → 1B**
For heavy-Exploration teams above 50M events/month this is often the deciding factor.

### Q25: **B. Key Events**
"Conversion events" were renamed "Key Events" in 2024. Same concept, different label.

### Q26: **B. Toggling Google Signals on AND obtaining user consent**
Google Signals only activates with both ad-personalization signal AND Google Signals enabled in admin.

### Q27: **B. GA4's anonymous device/cookie identifier**
`user_pseudo_id` = the cookie/device ID. `user_id` = your login-based ID (separate column).

### Q28: **B. Raw event-level data with fine slicing finds bugs aggregated reports miss**
The canonical reason senior strategists insist on BigQuery export from day one.

---

## 📊 Score Yourself

- 26–28/28 → 🏆 GA4-Certification-ready.
- 24–25/28 → ✅ Solid. Note misses.
- 20–23/28 → ⚠️ Re-read the data-model + BigQuery sections.
- <20/28 → 🔁 Re-read the module.

---

## 🃏 Add To Your Flashcards

- GA4 vs UA — data model difference
- 4 event types
- 25/50/50/50/25 limits (params/CD/CM/KeyEvents/UP)
- Engaged session definition
- Identifier priority order
- 3 predictive metrics + 1,000+1,000 threshold
- 5 Exploration techniques
- BigQuery `event_params` UNNEST pattern
- 14-month default retention
- Measurement Protocol v2

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 4](../Module-04-Multi-Touch-Attribution/Reading.md)
