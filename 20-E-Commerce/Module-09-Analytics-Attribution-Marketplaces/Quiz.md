# ✏️ Module 9 Quiz: Analytics, Attribution & Marketplaces

> **Instructions:** Answer all 26 questions. Aim for 22/26 minimum.

---

### Q1. The GA4 fundamental unit is: *(Remember)*
A. Session
B. Event (with parameters)
C. Pageview
D. Visitor

---

### Q2. The recommended GA4 event name for a completed transaction is: *(Remember)*
A. `Purchase`
B. `purchase`
C. `BuyComplete`
D. `transaction`

---

### Q3. A `purchase` event in GA4 must include which required parameters? *(Apply)*
A. Just `transaction_id`
B. `transaction_id`, `items`, `value`, `currency`
C. Just `value`
D. Just `items`

---

### Q4. GA4 BigQuery export is: *(Remember)*
A. Paid-only
B. Free for the sandbox tier; row-level event data; historical data is NOT backfilled
C. Available only for Google Ads users
D. Universal Analytics only

---

### Q5. Custom dimensions in GA4 must be: *(Apply)*
A. Registered in Admin → Custom definitions before reports populate
B. Sent as parameters only
C. Created via JavaScript
D. Approved by Google

---

### Q6. GA4's default attribution model since 2023 is: *(Remember)*
A. Last-click
B. Data-Driven Attribution (DDA)
C. First-click
D. Linear

---

### Q7. The bias of last-click attribution: *(Understand)*
A. Over-credits awareness channels
B. Under-credits brand-building / upper-funnel channels
C. None
D. Random

---

### Q8. Multi-Touch Attribution (MTA) is in decline because: *(Understand)*
A. It's too expensive
B. iOS 14.5 ATT (Apr 2021) + Chrome cookie deprecation removed the deterministic pixel-tracking foundation
C. Brands stopped using paid media
D. It was banned by the FTC

---

### Q9. Marketing Mix Modeling (MMM) is fundamentally: *(Understand)*
A. Individual-level pixel tracking
B. Aggregate-level econometric regression of spend vs revenue
C. A cookie-based system
D. A subset of GA4

---

### Q10. Meta's open-source MMM library is called: *(Remember)*
A. Robyn (released November 2021)
B. Meridian
C. LightweightMMM
D. Recast

---

### Q11. Google's 2024-released Bayesian MMM is called: *(Remember)*
A. Robyn
B. Meridian
C. LightweightMMM
D. Adobe Analytics MMM

---

### Q12. Geo-holdout incrementality test pattern: *(Apply)*
A. Run ads in 100% of markets
B. Pause channel in 5-10% of US markets for 4-8 weeks; measure lift vs control
C. Survey users
D. Use only platform conversion lift

---

### Q13. A "conversion lift study" run by Meta on Meta inventory measures: *(Evaluate)*
A. Independent incrementality
B. Meta's incremental contribution as Meta defines the baseline — first-party graded
C. Cross-channel attribution
D. MMM coefficients

---

### Q14. Amazon's typical take rate (all fees + ads) is: *(Remember)*
A. 5-10% of GMV
B. 30-45% of GMV
C. 75% of GMV
D. 0%

---

### Q15. FBA storage fees increase sharply in: *(Remember)*
A. January
B. October-December (Q4 holiday surge)
C. Summer
D. Never change

---

### Q16. The "race to zero" on Amazon refers to: *(Understand)*
A. Free shipping
B. Buy Box + ranking algorithm + private-label competition compressing margins in commoditized categories
C. Affiliate commissions
D. Sponsored ads going free

---

### Q17. Walmart Marketplace's referral fees vs Amazon: *(Remember)*
A. Higher
B. Slightly lower (5-15% range; vs Amazon 8-15% with 15% standard)
C. Identical
D. There are no fees

---

### Q18. Walmart Connect's 2024 ad revenue: *(Remember)*
A. $4B+ (per Q4 2024 disclosures)
B. $50B
C. $100M
D. $0

---

### Q19. Walmart's measurement advantage vs Amazon Ads: *(Analyze)*
A. None
B. First-party purchase data on ~90% of US households + MMM-as-a-service offering, vs Amazon's click-attributed within-Amazon model
C. Lower CPCs
D. Better creative tools

---

### Q20. Mercado Libre's 2024 GMV across LATAM: *(Remember)*
A. $5B
B. $124B (Brazil + Mexico + Argentina dominant)
C. $1T
D. $50M

---

### Q21. Coupang's defining service in Korea: *(Remember)*
A. Crypto trading
B. "Rocket Delivery" same-day fulfillment
C. Video streaming
D. Banking

---

### Q22. Hau Lee's Triple-A Supply Chain framework (HBR 2004) is: *(Remember)*
A. Agility, Adaptability, Alignment
B. Audit, Approve, Authorize
C. Amazon, Apple, Adobe
D. ABC analysis

---

### Q23. A brand reports 4.5x ROAS on Amazon and 1.2x MMM incrementality on Amazon. Reconcile: *(Analyze)*
A. They must be wrong
B. ROAS measures attributed click-through revenue; MMM measures causal lift above baseline organic — both can be true simultaneously
C. The MMM is the only valid measure
D. ROAS is the only valid measure

---

### Q24. A CFO argues that GA4's DDA (4.2x ROAS) and Meta Ads' last-click (8.5x ROAS) for the same campaign mean Meta is over-reporting. Best response: *(Evaluate)*
A. Meta is lying
B. Both are valid within their model assumptions; the gap reflects upper-funnel discounting in DDA vs last-click crediting in Meta — independent incrementality testing settles it
C. Just trust Meta
D. Just trust GA4

---

### Q25. The single most important reason to enable GA4 BigQuery export on day 1: *(Apply)*
A. It's cheaper than Universal Analytics
B. Historical event data is NOT backfilled — only forward-looking data is captured
C. Faster reports in the UI
D. Free Google support

---

### Q26. A $40M DTC brand at 60% DTC margin and 12% Amazon margin considers exiting Amazon entirely. Critical second-order effect both sides usually miss: *(Create)*
A. Customers Google brand names; Amazon brand presence drives Google branded search → DTC traffic; exiting Amazon often reduces DTC organic
B. Amazon will sue
C. Walmart will retaliate
D. There is no second-order effect

---

## 🎯 Answers + Explanations

### Q1: **B. Event (with parameters)**
GA4 is event-driven. Universal Analytics was session-driven.

### Q2: **B. `purchase` (lowercase snake_case)**
GA4 e-commerce reports populate ONLY on the exact recommended event names.

### Q3: **B. `transaction_id`, `items`, `value`, `currency`**

### Q4: **B. Free for sandbox tier; row-level; not backfilled**
Enable day 1 — historical data is lost otherwise.

### Q5: **A. Registered in Admin → Custom definitions**

### Q6: **B. Data-Driven Attribution (DDA)**
Google made DDA default in 2023, replacing last-click.

### Q7: **B. Under-credits brand-building / upper-funnel**

### Q8: **B. iOS 14.5 ATT + Chrome cookie deprecation removed the deterministic foundation**
MTA's pixel-tracking is now ~30-40% degraded.

### Q9: **B. Aggregate-level econometric regression**
No individual user tracking. Privacy-compliant.

### Q10: **A. Robyn (November 2021)**

### Q11: **B. Meridian (2024)**
Bayesian; integrates with Google Ads and Analytics.

### Q12: **B. 5-10% of US markets for 4-8 weeks; measure lift vs control**

### Q13: **B. First-party graded — Meta defines its own baseline**
Independent geo-holdout is methodologically cleaner.

### Q14: **B. 30-45% of GMV**
Referral + FBA + storage + inbound + advertising + returns.

### Q15: **B. October-December (Q4 surge)**
$0.78/cu.ft → $2.40/cu.ft in Q4.

### Q16: **B. Buy Box + ranking + private label compressing margins**

### Q17: **B. Slightly lower (5-15%)**

### Q18: **A. $4B+ (per Q4 2024)**
~30% YoY growth from ~$3B in 2023.

### Q19: **B. First-party purchase data on ~90% of US households + MMM-as-a-service**

### Q20: **B. $124B (2024 LATAM)**

### Q21: **B. "Rocket Delivery" same-day**

### Q22: **A. Agility, Adaptability, Alignment**
Hau Lee, *HBR*, October 2004.

### Q23: **B. Both can be true simultaneously**
ROAS = attributed clicks; MMM = causal incremental lift. Different questions.

### Q24: **B. Both valid within their assumptions; independent incrementality testing settles it**

### Q25: **B. Historical event data is NOT backfilled**

### Q26: **A. Amazon presence drives Google branded search → DTC traffic; exiting Amazon often reduces DTC organic**
The cross-channel halo is the most-missed second-order effect.

---

## 📊 Score Yourself

- 24-26/26 → 🏆 Mastered
- 22-23/26 → ✅ Solid
- 17-21/26 → ⚠️ Re-read weak parts
- <17/26 → 🔁 Re-read entire Reading.md

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 10](../Module-10-Cross-Border-B2B-Composable-Commerce/Reading.md)
