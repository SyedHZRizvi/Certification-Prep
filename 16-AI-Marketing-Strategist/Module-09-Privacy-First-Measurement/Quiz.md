# ✏️ Module 9 Quiz: Privacy-First Measurement

> **Instructions:** 28 questions. No notes. Aim for 24/28 (86%).

---

## Questions

### Q1. The Sephora $1.2M California settlement (2022) was for violating which law? *(Remember)*
A. GDPR
B. CCPA (sharing data with vendors without honoring the GPC signal)
C. COPPA
D. HIPAA

---

### Q2. Consent Mode v2 has how many consent parameters? *(Remember)*
A. 2
B. 4 (ad_storage, ad_user_data, ad_personalization, analytics_storage)
C. 6
D. 8

---

### Q3. The MAIN difference between Basic and Advanced Consent Mode is: *(Understand)*
A. Cost
B. In Advanced, tags still fire (with no cookies + anonymized pings) when consent is denied → Google models the lost conversions
C. Basic is only for EU
D. Advanced requires GA4 360

---

### Q4. Realistic recovery of lost measurement from Advanced Consent Mode is: *(Remember)*
A. 100%
B. 20–80% (varies by consent rate + volume)
C. Always 50%
D. None

---

### Q5. Meta's Conversions API (CAPI) is BEST described as: *(Remember)*
A. A client-side pixel
B. A server-side conversion endpoint that complements / replaces the client Pixel
C. An ad network
D. A CDP

---

### Q6. In CAPI, the `em` field is: *(Remember)*
A. The user's email in plaintext
B. SHA-256-hashed lowercase email for Enhanced Matching
C. Encrypted email
D. Random ID

---

### Q7. When running Pixel + CAPI in parallel, deduplication uses: *(Apply)*
A. event_id + event_name + event_time (and fbc/fbp)
B. Only event_name
C. Random sampling
D. Server timestamp only

---

### Q8. Realistic conversion recovery from adding CAPI alongside Pixel is approximately: *(Remember)*
A. 0–5%
B. 15–30% within 6 weeks
C. 90%
D. None

---

### Q9. Google's Enhanced Conversions for Web sends: *(Understand)*
A. Plaintext PII
B. SHA-256-hashed first-party identifiers (email, phone) alongside conversion events
C. Cookies only
D. Random IDs

---

### Q10. Enhanced Conversions for Leads is used for: *(Understand)*
A. Pre-conversion lead-gen tracking
B. Uploading hashed lead identifiers back to Google Ads after a CRM-stage conversion
C. Display ads
D. Email open tracking

---

### Q11. Apple's SKAdNetwork (SKAN) postback contains: *(Understand)*
A. The user's IDFA
B. A noisy, aggregated, delayed conversion-value signal that cannot identify individual users
C. The user's full purchase history
D. Real-time conversion data

---

### Q12. SKAN's conversion value is encoded in: *(Remember)*
A. 1 bit (0/1)
B. 6 bits (0–63 = 64 possible states)
C. 12 bits
D. 32 bits

---

### Q13. The strategist's job in SKAN is to design: *(Create)*
A. The hashing algorithm
B. The conversion-value bin mapping (e.g., 6–8 LTV bins)
C. The Apple App Store listing
D. The campaign budget

---

### Q14. AdAttributionKit is: *(Remember)*
A. Apple's 2024+ expansion of SKAdNetwork
B. A Meta product
C. A Google product
D. An open-source library

---

### Q15. Chrome's Privacy Sandbox **Topics API** does: *(Understand)*
A. Reads user emails
B. Assigns 3 weekly topics from a ~470-topic taxonomy based on browsing history; sites can call `document.browsingTopics()`
C. Stores all browsing in plaintext
D. Replaces Google Analytics

---

### Q16. The Privacy Sandbox **Protected Audience API** (formerly FLEDGE) handles: *(Understand)*
A. Email marketing
B. Browser-side remarketing / look-alike via on-device auction without identifying users
C. Search ads
D. TV ads

---

### Q17. The Privacy Sandbox **Attribution Reporting API** provides: *(Understand)*
A. Direct user-level attribution
B. Browser-native, noisy, aggregate conversion attribution sent to aggregation servers
C. Real-time bidding
D. Form analytics

---

### Q18. **CHIPS** (Cookies Having Independent Partitioned State) is: *(Remember)*
A. A new ad format
B. A mechanism for partitioned cookies that preserves some 3p-cookie functionality per-site
C. A Snowflake feature
D. A CDP feature

---

### Q19. A **Data Clean Room** is: *(Understand)*
A. A physically secure server
B. A privacy-preserving environment where multiple parties can run queries on combined data without seeing each other's raw data
C. A type of CDP
D. A type of MMM

---

### Q20. AWS Clean Rooms, Google Ads Data Hub, Snowflake Clean Room, and Meta Audience Insights are all: *(Remember)*
A. CDPs
B. Data clean room platforms
C. MMM tools
D. CMPs

---

### Q21. Differential privacy adds: *(Understand)*
A. Encryption
B. Calibrated noise to query results, controlled by ε, to prevent identification of individual records
C. Random data
D. Audit logs

---

### Q22. A lower ε in differential privacy means: *(Apply)*
A. Less privacy, more utility
B. Stronger privacy, more noise added (less utility)
C. No effect
D. More users in the dataset

---

### Q23. GDPR applies to: *(Understand)*
A. EU-located companies only
B. Anyone processing personal data of EU residents, regardless of company location
C. Government data only
D. US Federal data

---

### Q24. The Global Privacy Control (GPC) signal is: *(Remember)*
A. A browser-level "do not sell" signal that must be honored under CCPA / CPRA
B. A Google ad format
C. A Meta product
D. Optional under CCPA

---

### Q25. Hashing a user's email before sending it to an ad platform: *(Analyze)*
A. Removes all GDPR obligations
B. Provides one-way obfuscation but the hash is still personal data under GDPR; consent + DPA still required
C. Means the user can be re-identified
D. Eliminates the need for a CMP

---

### Q26. The strategist's MOST important takeaway from the Sephora case is: *(Analyze)*
A. Don't use pixels
B. Honor browser-level privacy signals and review every third-party tag for legal classification under CCPA
C. Use only first-party data
D. Avoid California

---

### Q27. A 2026 marketing measurement program WITHOUT a privacy-first architecture exposes the company to: *(Analyze)*
A. Slightly higher costs
B. Regulatory liability (fines), revenue risk from measurement loss, and reputation risk
C. Better measurement
D. Improved ROAS

---

### Q28. The four privacy regulations driving 90% of 2026 marketing strategy decisions are: *(Remember)*
A. SOX, PCI, GLBA, FERPA
B. GDPR, CCPA/CPRA, MHMDA (health-adjacent), COPPA (kids)
C. ISO, NIST, CIS, COBIT
D. HIPAA only

---

## 🎯 Answers + Explanations

### Q1: **B. CCPA**
The Sephora settlement was the highest-profile CCPA enforcement action of 2022. The specific failure: not honoring browser-level GPC + sharing data with vendors that constituted "sale" under CCPA's definition.

### Q2: **B. 4**
ad_storage, ad_user_data, ad_personalization, analytics_storage. Memorize all four.

### Q3: **B. Advanced fires tags with anonymized pings + modeling**
Basic mode loses 100% of denied-consent measurement. Advanced uses anonymized pings + ML to recover *modeled conversions*.

### Q4: **B. 20–80%**
Varies heavily by consent rate, conversion volume, and channel mix. Mid-EU consent rates with strong conversion data → ~40–60% recovery typical.

### Q5: **B. Server-side complement / replacement to Pixel**
CAPI sends events from your server, not the user's browser. Eliminates ad-blocker, ITP cookie-cap, and 3p-cookie-loss issues.

### Q6: **B. SHA-256-hashed lowercase email**
Standard Enhanced Matching parameter. Lowercase + trim + SHA-256, then send.

### Q7: **A. event_id + event_name + event_time (and fbc/fbp)**
Both Pixel and CAPI events for the same conversion must share an `event_id`. Meta's Event Quality Score reports dedup health.

### Q8: **B. 15–30% in 6 weeks**
Typical recovery from adding CAPI. Higher (30–50%) for brands with heavy Safari + ad-blocker user base.

### Q9: **B. SHA-256-hashed first-party identifiers**
Google's Enhanced Conversions sends email, phone (and optionally address) hashed for match.

### Q10: **B. Upload hashed lead IDs after CRM-stage conversion**
The B2B variant. The lead is captured on-site, qualified in CRM, then matched back to the original ad click via hashed lead ID.

### Q11: **B. Noisy, aggregated, delayed conversion value**
SKAN postbacks are randomized in timing and aggregated by Apple — cannot identify individual users.

### Q12: **B. 6 bits (0–63)**
The 6-bit conversion value is the *entire* signal you control. Design it carefully.

### Q13: **B. Conversion-value bin mapping**
The strategist's only lever. Standard practice: 6–8 LTV bins encoded into the 64 states.

### Q14: **A. Apple's 2024+ expansion of SKAdNetwork**
Introduced at WWDC 2024 with more granular cross-app + re-engagement attribution.

### Q15: **B. 3 weekly topics from a 470-item taxonomy**
The browser provides up to 3 topics; rotation is weekly; no sensitive categories.

### Q16: **B. Browser-side on-device auction**
FLEDGE / Protected Audience runs the auction in the browser; only the winning creative is rendered. No user identity exits the browser.

### Q17: **B. Browser-native noisy aggregate conversion attribution**
Browser-side attribution with differential-privacy-style noise. Sent to a registered aggregation server.

### Q18: **B. Partitioned cookies preserving per-site functionality**
CHIPS lets a third-party cookie work on one parent site without being usable for cross-site tracking.

### Q19: **B. Privacy-preserving multi-party query environment**
Multiple parties run queries on combined data; raw data never leaves any party. Used for brand × publisher / brand × walled garden analyses.

### Q20: **B. Data clean room platforms**
All four are clean-room offerings. AWS, Google (ADH), Snowflake, Meta — plus InfoSum, Habu (LiveRamp), LiveRamp Safe Haven.

### Q21: **B. Calibrated noise controlled by ε**
The mathematical privacy guarantee. Used in Apple's SKAN, Google's Attribution Reporting, most clean rooms.

### Q22: **B. Stronger privacy, more noise**
ε is the privacy budget. Small ε = strong privacy, less utility. The trade-off must be designed for each application.

### Q23: **B. Anyone processing EU residents' data**
GDPR has extraterritorial scope. A US-only company processing EU residents' data is in scope.

### Q24: **A. Browser-level signal that must be honored under CCPA / CPRA**
Honoring GPC is required under CCPA / CPRA. This was the specific Sephora failure.

### Q25: **B. Hash is still personal data under GDPR**
Hashing is one-way obfuscation but the hash *links to* an identifiable person. Consent + DPA + data-minimization principles still apply.

### Q26: **B. Honor browser signals + classify every third-party tag**
The compliance hygiene that prevents the next Sephora-style settlement.

### Q27: **B. Regulatory liability + measurement risk + reputation**
Three risks. The strategist must be able to defend the program against any of the three.

### Q28: **B. GDPR, CCPA/CPRA, MHMDA, COPPA**
The 2026 short list. State-by-state US laws (Virginia, Colorado, Connecticut, etc.) are derivatives of CCPA.

---

## 📊 Score Yourself

- 26–28/28 → 🏆 Privacy-first fluency.
- 24–25/28 → ✅ Solid.
- 20–23/28 → ⚠️ Re-read the Consent Mode + CAPI + SKAN sections.
- <20/28 → 🔁 Re-read the module.

---

## 🃏 Add To Your Flashcards

- 4 Consent Mode v2 parameters
- Basic vs Advanced Consent Mode
- CAPI dedup keys
- Enhanced Conversions hash recipe
- SKAN conversion value bits (6)
- AdAttributionKit (Apple 2024+)
- 7 Privacy Sandbox APIs
- CHIPS purpose
- Data clean room definition
- ε in differential privacy
- GPC signal under CCPA
- 4 dominant 2026 privacy regulations

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 10](../Module-10-Marketing-Org-Tech-Stack-Design/Reading.md)
