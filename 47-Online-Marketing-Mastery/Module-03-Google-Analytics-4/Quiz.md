# ✏️ Module 03 Quiz: Google Analytics 4 — Data-Driven Marketing

> **Instructions:** Answer all 25 questions WITHOUT looking at the reading. Aim for 22/25 minimum. Time yourself — allow 30 minutes.

---

## Questions

### Q1. What is the fundamental difference between Universal Analytics and GA4 in terms of data collection architecture? *(Remember)*

A. GA4 uses an event-based model while UA used a session-hit hierarchy
B. GA4 uses session-based tracking while UA uses event-based tracking
C. GA4 only tracks websites; UA tracked both apps and websites
D. GA4 requires cookies; UA worked without cookies

---

### Q2. In GA4, a pageview is recorded as which type of data structure? *(Remember)*

A. An event
B. A hit
C. A goal
D. A session

---

### Q3. Which of the following is an "automatically collected" event in GA4 that fires without any code changes? *(Remember)*

A. `purchase`
B. `first_visit`
C. `add_to_cart`
D. `sign_up`

---

### Q4. What is an "engaged session" in GA4? *(Remember)*

A. Any session lasting more than 30 seconds
B. A session lasting 10+ seconds, OR with 2+ pageviews, OR with a conversion event
C. A session where the user visits more than one page
D. A session where the user interacts with at least one CTA

---

### Q5. How is GA4's "Bounce Rate" defined? *(Remember)*

A. The percentage of single-page sessions with no interactions
B. Sessions where users left within 5 seconds
C. Sessions where no events were recorded
D. 100% minus the Engagement Rate

---

### Q6. Google renamed "Conversions" to "Key Events" in GA4 in 2024. Which statement correctly explains the relationship between GA4 Key Events and Google Ads Conversions? *(Understand)*

A. They are identical — both drive Smart Bidding automatically once configured
B. Google Ads Conversions are more accurate than GA4 Key Events because they use different tracking pixels
C. Key Events replace Conversions in Google Ads and require no separate setup
D. Key Events in GA4 must be manually imported into Google Ads to become Conversion Actions used for Smart Bidding

---

### Q7. An e-commerce company in the Netherlands builds a GA4 audience of users who added items to their cart but did not purchase. They then target this audience with Google Ads. Under GDPR, what is the critical prerequisite for this to be legally compliant? *(Understand)*

A. The company must register the audience list with the Dutch DPA (Autoriteit Persoonsgegevens)
B. The audience must contain at least 1,000 users to comply with data minimisation principles
C. Users must have provided valid advertising consent via a CMP before the remarketing pixel fires
D. The company must anonymise all user data in GA4 before exporting to Google Ads

---

### Q8. What is the purpose of Consent Mode v2's `ad_user_data` parameter, which was new in v2? *(Understand)*

A. It controls whether Google Analytics can set first-party cookies
B. It replaces `analytics_storage` for users who have opted out of all tracking
C. It controls whether user data (e.g., email for Customer Match) can be sent to Google for ads purposes
D. It enables cross-device tracking without requiring user login

---

### Q9. A marketing team switches their GA4 attribution model from Last Click to Data-Driven. They notice that Organic Search now receives significantly more conversion credit. What does this most likely indicate? *(Understand)*

A. Organic search was incorrectly tagged and the data-driven model fixed the tracking error
B. Data-driven attribution always favours organic search over paid channels
C. The property had duplicate conversion counting that data-driven attribution corrected
D. Organic search was appearing earlier in the conversion path but not getting credit under last-click; data-driven reflects its true contribution

---

### Q10. A GA4 property is set up for a UK-based retailer selling in both the UK and Germany. The analyst notices that conversion value totals look inconsistent. What is the most likely cause? *(Understand)*

A. GA4 only supports one currency per property and is defaulting all values to USD
B. GDPR in Germany prevents GA4 from recording transaction values for German users
C. The BigQuery export is corrupting currency data during the ETL process
D. The `purchase` events are being fired without specifying the `currency` parameter, causing GA4 to use the default property currency for all transactions

---

### Q11. You are building a Funnel Exploration in GA4 to diagnose checkout drop-off for a French e-commerce brand. The steps are: Product View → Add to Cart → Begin Checkout → Purchase. You want to understand which device type is causing the highest drop-off at the "Add to Cart → Begin Checkout" step. Which feature do you use? *(Apply)*

A. Apply a Comparison filter at the property level
B. Add a Breakdown dimension of "Device Category" in the Funnel Exploration
C. Create four separate GA4 properties, one per device type
D. Use the Path Exploration report instead of the Funnel Exploration

---

### Q12. A German B2B software company wants to track when users download their whitepaper PDF as a conversion. The download is triggered by a link click. Using Google's recommended event schema, which event name should they use? *(Apply)*

A. `pdf_download`
B. `file_download`
C. `content_download`
D. `whitepaper_click`

---

### Q13. Your client's GA4 Exploration report displays a "(data sampled)" warning. What is the correct action to get unsampled data? *(Apply)*

A. Export raw event data via the GA4 BigQuery export and run the analysis in SQL
B. Upgrade to a paid GA4 360 account immediately
C. Reduce the date range in the Exploration to less than 7 days to avoid sampling
D. Switch from Funnel Exploration to the standard Engagement → Funnel report

---

### Q14. A Canadian e-commerce brand wants to build a "lapsed customer" audience in GA4 — users who purchased 90-180 days ago but have not purchased in the last 89 days. What GA4 audience feature makes this possible? *(Apply)*

A. Custom audience with sequence conditions and membership duration settings
B. Standard demographic segments
C. Predictive audiences (GA4 ML model)
D. Google Ads Customer Match using uploaded email lists

---

### Q15. You are setting up Consent Mode v2 for a Dutch e-commerce site. A user visits the site and clicks "Reject All" on the CMP. What should happen to the GA4 tag? *(Apply)*

A. The GA4 tag should not fire at all, to ensure full GDPR compliance
B. The GA4 tag fires normally with full cookie-based tracking, as consent is implicit for analytics
C. The GA4 tag fires in a limited "cookieless ping" mode, sending anonymous signals for modelling
D. The GA4 tag fires but strips all event parameters before sending data to Google servers

---

### Q16. An analyst at a London fashion retailer notices that after implementing Consent Mode v2, their GA4 session counts dropped by 35% for EU traffic but conversion numbers in Google Ads remained stable. What is the most accurate explanation? *(Apply)*

A. The CMP is broken and blocking GA4 from firing entirely for consented users
B. Google Ads is using a different tracking pixel that is not subject to consent requirements
C. Consent Mode's modelling is filling conversion gaps in Google Ads even where GA4 measurement is limited by consent decline, while session counts accurately reflect only consented users
D. The 35% drop means the CMP is overcounting consent declines due to a configuration error

---

### Q17. A marketing manager at a Stockholm e-commerce brand reviews their attribution report comparing Data-Driven vs. Last Click. Brand PPC receives 40% less conversion credit under Data-Driven than Last Click. What strategic conclusion should they draw? *(Analyze)*

A. Brand PPC was "stealing" last-click credit from upper-funnel channels (e.g., organic search, display) that actually initiated the purchase journey; Data-Driven more accurately reflects contribution
B. Brand PPC is underperforming and the budget should be doubled to recover lost conversions
C. The Data-Driven model is malfunctioning because Brand PPC should logically get full credit for brand searches
D. Users who click brand PPC ads are less valuable than organic visitors, confirming a weak creative strategy

---

### Q18. A French retailer has set data retention to the default 2 months in GA4. It is now Q4, and the analyst wants to compare this year's Black Friday cohort retention against last year's cohort. What problem do they face, and what is the solution? *(Analyze)*

A. No problem — GA4 retention reports use aggregate data that is stored indefinitely regardless of the data retention setting
B. Cohort analysis in GA4 Explorations is limited to 30-day windows by design; the analyst must use Google Ads data instead
C. BigQuery export automatically extends retention to 5 years; query `events_20231124` to retrieve the prior year's data
D. The prior year's user-level data is gone after 2 months; the analyst should have set retention to 14 months from day one. Going forward, set retention to 14 months immediately.

---

### Q19. Which four consent parameters must be configured in a complete Consent Mode v2 implementation? *(Remember)*

A. `analytics_storage`, `ad_storage`, `functional_storage`, `security_storage`
B. `measurement_consent`, `advertising_consent`, `personalisation_consent`, `data_sharing_consent`
C. `analytics_storage`, `ad_storage`, `ad_user_data`, `ad_personalization`
D. `ga4_consent`, `ads_consent`, `remarketing_consent`, `attribution_consent`

---

### Q20. What is the default data retention period for user-level data in a new GA4 property? *(Remember)*

A. 6 months
B. 26 months
C. 14 months
D. 2 months

---

### Q21. Which GA4 Exploration type is best suited for understanding what actions users take AFTER they abandon their shopping cart? *(Understand)*

A. Funnel Exploration
B. Path Exploration
C. Cohort Exploration
D. Segment Overlap Exploration

---

### Q22. A GA4 property is linked to Google Ads. An analyst creates a GA4 audience of "users who viewed a product but did not purchase in the last 30 days." Where does this audience become available for targeting? *(Remember)*

A. In Google Ads Audience Manager, available for remarketing campaigns
B. Only in GA4's Advertising reports — it cannot be exported to Google Ads
C. Automatically in Google Display Network only; not in Search or Shopping campaigns
D. In Google Ads only after the audience reaches 10,000 users

---

### Q23. A North American DTC brand's GA4 shows desktop conversion rate of 3.2% and mobile conversion rate of 0.9%. An analyst builds a Path Exploration for mobile users who reach the cart but do not purchase. The most common next page they visit is the homepage. What does this pattern most likely indicate? *(Analyze)*

A. Mobile users are less interested in purchasing and prefer browsing
B. The homepage is the most popular page so it naturally appears in all path explorations
C. GA4 Path Exploration always shows the homepage as the terminal node for abandoned sessions
D. The mobile checkout flow has a friction point causing users to restart their session from the homepage — likely a UX or form usability issue

---

### Q24. Why is comparing GA4 bounce rate to a previous Universal Analytics bounce rate invalid for year-over-year reporting? *(Understand)*

A. UA and GA4 use different session timeout thresholds (30 minutes vs. 25 minutes)
B. UA bounce rate was calculated as single-page sessions with no interaction; GA4 bounce rate is 100% minus Engagement Rate, using a completely different definition of an "engaged" session
C. GA4 bounce rate only applies to paid traffic; organic sessions are excluded from the calculation
D. Universal Analytics bounce rate was measured in real-time; GA4 bounce rate is a 24-hour delayed metric

---

### Q25. A Berlin e-commerce brand uses GA4 Funnel Exploration and discovers a 68% drop-off from Cart to Checkout specifically on mobile devices. They fix the mobile checkout form in one sprint. Which GA4 feature would you use in the following weeks to track whether the fix improved the mobile conversion rate compared to the pre-fix period? *(Apply)*

A. Real-Time report filtered by device category
B. The standard Acquisition report filtered by "Mobile" in the device category secondary dimension
C. A Comparison using the "Before Fix" and "After Fix" date ranges with a "Mobile Traffic" segment applied in the Funnel Exploration
D. A new separate GA4 property created specifically for post-fix mobile tracking

---

## 🎯 Answers + Explanations

### Q1: **A. GA4 uses an event-based model while UA used a session-hit hierarchy**
GA4 uses an event-based model where every interaction (including pageviews) is an event. UA used a hierarchy of sessions containing hits of different types (pageview, event, transaction). The paradigm shift is fundamental, not cosmetic.

### Q2: **A. An event**
In GA4, even a pageview is recorded as an event (`page_view`). There are no separate "hit types" — everything is a flat event stream with parameters.

### Q3: **B. `first_visit`**
`first_visit` is automatically collected by GA4 with no code required. `purchase`, `add_to_cart`, and `sign_up` are recommended events that require explicit implementation.

### Q4: **B. A session lasting 10+ seconds, OR with 2+ pageviews, OR with a conversion event**
An engaged session requires at least one of: 10+ seconds with page in focus, 2+ pageviews/screen views, or a conversion (key event). This is more nuanced than UA's single-page bounce definition.

### Q5: **D. 100% minus the Engagement Rate**
GA4 Bounce Rate = 100% − Engagement Rate. It measures "unengaged sessions" — the inverse of the positive Engagement Rate metric. This is definitionally different from UA bounce rate.

### Q6: **D. Key Events in GA4 must be manually imported into Google Ads to become Conversion Actions used for Smart Bidding**
Key Events in GA4 are analytics markers only. To use them for Google Ads Smart Bidding, they must be imported into Google Ads as Conversion Actions. This import is the critical step many marketers miss.

### Q7: **C. Users must have provided valid advertising consent via a CMP before the remarketing pixel fires**
Under GDPR, using behavioural data for personalised advertising requires explicit opt-in consent (Article 6(1)(a)). Without a valid consent signal via CMP and Consent Mode, remarketing to EU users is unlawful regardless of audience size.

### Q8: **C. It controls whether user data (e.g., email for Customer Match) can be sent to Google for ads purposes**
`ad_user_data` (new in v2) specifically controls whether first-party user data (e.g., hashed email for Customer Match, conversion data) can be sent to Google's ad systems. This is separate from `ad_storage`, which controls cookie-level tracking.

### Q9: **D. Organic search was appearing earlier in the conversion path but not getting credit under last-click; data-driven reflects its true contribution**
This pattern is classic "last-click credit theft" by direct/brand channels. Data-driven attribution uses ML to credit touchpoints based on their actual probability contribution to conversion, revealing that organic search was initiating journeys that brand PPC was then closing.

### Q10: **D. The `purchase` events are being fired without specifying the `currency` parameter, causing GA4 to use the default property currency for all transactions**
GA4's `purchase` event requires the `currency` parameter (ISO 4217 code, e.g., "GBP", "EUR"). Without it, GA4 applies the property's default currency to all values, mixing GBP and EUR purchases and making totals meaningless for a multi-currency retailer.

### Q11: **B. Add a Breakdown dimension of "Device Category" in the Funnel Exploration**
Adding a Breakdown dimension in Funnel Exploration segments each step of the funnel by the chosen dimension (e.g., Device Category). This is precisely how the Kontor Mode analyst found the mobile drop-off.

### Q12: **B. `file_download`**
Google's recommended event schema uses `file_download` for document/file download tracking. Using custom names like `pdf_download` bypasses pre-built report integrations and makes cross-property analysis harder.

### Q13: **A. Export raw event data via the GA4 BigQuery export and run the analysis in SQL**
BigQuery export provides 100% unsampled, raw event data. This is the correct solution for high-volume properties where GA4's Exploration reports apply sampling. Reducing the date range is a workaround, not a solution for production analytics.

### Q14: **A. Custom audience with sequence conditions and membership duration settings**
GA4's audience builder supports sequence conditions (e.g., "User completed `purchase` event") combined with membership duration logic and recency conditions. This enables sophisticated lifecycle-stage audiences without external tools.

### Q15: **C. The GA4 tag fires in a limited "cookieless ping" mode, sending anonymous signals for modelling**
With Consent Mode v2 properly configured, a consent-declined user triggers GA4 in a limited "cookieless ping" mode. This sends anonymous, non-cookie-based signals that feed Google's modelling without setting identifiable cookies — legally compliant with GDPR.

### Q16: **C. Consent Mode's modelling is filling conversion gaps in Google Ads even where GA4 measurement is limited by consent decline, while session counts accurately reflect only consented users**
This is expected behaviour. Consent Mode v2 causes a measured reduction in GA4 session counts (only consented users are fully tracked) while Google Ads Conversion Modelling uses the cookieless signals from all users to statistically estimate total conversions. The stability in Google Ads conversion numbers reflects successful modelling.

### Q17: **A. Brand PPC was "stealing" last-click credit from upper-funnel channels (e.g., organic search, display) that actually initiated the purchase journey; Data-Driven more accurately reflects contribution**
When brand PPC loses significant credit in Data-Driven vs. Last Click, it indicates the channel was systematically receiving the final click on journeys that were actually initiated and driven by other channels. The strategic implication is to consider reducing brand PPC budget and reinvesting in the upper-funnel channels receiving more credit.

### Q18: **D. The prior year's user-level data is gone after 2 months; the analyst should have set retention to 14 months from day one. Going forward, set retention to 14 months immediately.**
GA4 user-level data retention (default: 2 months) is a hard cutoff for data stored in GA4. Once expired, it cannot be recovered. The only solution for long-term cohort analysis is: (a) set retention to 14 months on day one, or (b) use BigQuery export, which retains data according to your GCS settings. The analyst in this scenario has no retroactive solution for the prior year.

### Q19: **C. `analytics_storage`, `ad_storage`, `ad_user_data`, `ad_personalization`**
The four Consent Mode v2 parameters are: `analytics_storage` (GA4 cookies), `ad_storage` (Google Ads cookies), `ad_user_data` (user data sent to Google for ads — new in v2), and `ad_personalization` (remarketing/personalisation — new in v2).

### Q20: **D. 2 months**
GA4's default data retention is 2 months. This is a critical "gotcha" for new implementations — many analysts discover this only when they need historical data for cohort analysis. The maximum is 14 months; Google Analytics 360 offers longer periods.

### Q21: **B. Path Exploration**
Path Exploration in GA4 is specifically designed to show what events and pages users visit before or after a given touchpoint. After cart abandonment, Path Exploration reveals whether users went to the homepage, exited, or returned to the product page.

### Q22: **A. In Google Ads Audience Manager, available for remarketing campaigns**
Once a GA4 property is linked to Google Ads and personalised advertising is enabled, GA4 audiences automatically sync to Google Ads Audience Manager and become available for remarketing across all campaign types (Search, Shopping, Display, YouTube, Performance Max).

### Q23: **D. The mobile checkout flow has a friction point causing users to restart their session from the homepage — likely a UX or form usability issue**
When mobile users abandon cart and the next most common destination is the homepage, it signals restart behaviour — users hit a friction point in checkout and reset their session rather than completing or explicitly exiting. This is a strong UX signal, most commonly caused by form usability issues on mobile (small fields, non-mobile keyboards, required fields failing validation).

### Q24: **B. UA bounce rate was calculated as single-page sessions with no interaction; GA4 bounce rate is 100% minus Engagement Rate, using a completely different definition of an "engaged" session**
UA bounce rate = % of sessions with only 1 pageview and no interaction event. GA4 bounce rate = unengaged session rate = 100% minus Engagement Rate. A GA4 user who reads one blog post for 12 minutes is "engaged" (10+ seconds) and does not bounce. The same user "bounced" in UA. The definitions are incompatible; direct comparisons create false trends.

### Q25: **C. A Comparison using the "Before Fix" and "After Fix" date ranges with a "Mobile Traffic" segment applied in the Funnel Exploration**
The correct GA4 tool for pre/post comparison in a Funnel Exploration is to use the Comparison feature with date ranges set to before and after the fix, with a "Mobile Traffic" segment applied. This shows the funnel with the drop-off rate in both periods simultaneously, making the improvement immediately visible.

---

## 📊 Score Yourself

- 23–25/25 → 🏆 GA4 mastery. You can diagnose, attribute, and stay GDPR-compliant. Move to the next module.
- 19–22/25 → ✅ Strong. Review the questions you missed, then move on.
- 14–18/25 → ⚠️ Re-read the sections you missed (especially Consent Mode v2 and attribution). Re-quiz tomorrow.
- <14/25 → 🔁 Re-read the full Reading.md and watch all five Essential videos before retrying.

