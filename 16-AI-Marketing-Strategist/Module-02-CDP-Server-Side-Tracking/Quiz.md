# ✏️ Module 2 Quiz: CDPs & Server-Side Tracking

> **Instructions:** 26 questions. No notes. Aim for 22/26 (85%).

---

## Questions

### Q1. The 5 canonical properties of a CDP (per the CDP Institute) include all of the following EXCEPT: *(Remember)*
A. Packaged software
B. Persistent unified database
C. Accessible to other systems
D. Real-time bidding capability

---

### Q2. Which is TRUE about a CDP vs a DMP? *(Understand)*
A. CDPs are third-party-cookie-based; DMPs use first-party
B. CDPs work with PII / first-party data; DMPs traditionally used third-party anonymized data
C. They are interchangeable in 2026
D. DMPs are required for GA4 reporting

---

### Q3. The "composable" or warehouse-native CDP pattern uses: *(Understand)*
A. A standalone CDP database as system of record
B. The data warehouse as system of record + reverse ETL for activation
C. A spreadsheet
D. A DMP

---

### Q4. Which is a vendor of reverse ETL software? *(Remember)*
A. Snowflake
B. Hightouch
C. Meta Pixel
D. Google Analytics

---

### Q5. Apple's Intelligent Tracking Prevention (ITP) first launched in: *(Remember)*
A. 2014
B. 2017
C. 2020
D. 2024

---

### Q6. Apple's App Tracking Transparency (ATT) requires apps to: *(Remember)*
A. Auto-collect IDFA
B. Show a permission prompt before using the IDFA for cross-app tracking
C. Block all cookies
D. Encrypt all data

---

### Q7. Realistic measurement-loss recovery from implementing server-side tagging is roughly: *(Remember)*
A. 5–25%
B. 50–75%
C. 90–100%
D. 100% — server-side replaces all client-side loss

---

### Q8. The free / self-hosted version of server-side GTM runs on: *(Remember)*
A. AWS Lambda
B. Google App Engine / Cloud Run
C. Azure Functions
D. Cloudflare Workers only

---

### Q9. Meta's server-side conversion endpoint is called: *(Remember)*
A. Pixel API
B. Conversions API (CAPI)
C. Server Endpoint
D. Conversion Push

---

### Q10. GA4's server-side ingestion endpoint is called: *(Remember)*
A. Hit Builder
B. Measurement Protocol
C. Tag Server
D. Universal Endpoint

---

### Q11. Deterministic identity resolution matches identifiers via: *(Understand)*
A. ML inference from behavioral signals
B. Known explicit links (login, hashed email match)
C. IP address only
D. Random sampling

---

### Q12. Probabilistic identity resolution is increasingly RESTRICTED in 2026 because: *(Analyze)*
A. It's too expensive
B. Regulators in GDPR / CPRA / state-level laws are treating it as "tracking" requiring consent
C. The accuracy got worse
D. CDPs do not support it

---

### Q13. The four canonical CDP architectural patterns are: *(Remember)*
A. Packaged, Composable, Self-hosted, Embedded-in-marketing-cloud
B. Cloud, On-Prem, Hybrid, SaaS
C. B2B, B2C, B2B2C, D2C
D. Free, Freemium, Paid, Enterprise

---

### Q14. A $20M-revenue DTC brand running a Segment + GTM-SS + BigQuery + Hightouch stack should expect a monthly cost in the range of: *(Apply)*
A. $100–$500
B. $2,600–$9,600
C. $50K–$200K
D. $1M+

---

### Q15. The "third-party cookie" died because: *(Analyze)*
A. Chrome unilaterally banned it in 2022
B. Apple's ITP, Firefox's ETP, mobile ATT, and Privacy Sandbox cumulatively crippled it
C. GDPR specifically banned cookies in 2018
D. Server-side tracking made it obsolete

---

### Q16. Enhanced Conversions for Google Ads works by: *(Understand)*
A. Sending unhashed PII
B. Sending hashed first-party identifiers (email, phone) to improve match rate
C. Inserting a new pixel
D. Bypassing user consent

---

### Q17. A CDP and a Data Warehouse differ in that: *(Analyze)*
A. They are functionally identical
B. CDPs are tuned for marketing activation across destinations; warehouses are tuned for analytical querying and as the long-term system of record
C. Warehouses are real-time; CDPs are batch
D. CDPs only support B2B; warehouses only support B2C

---

### Q18. A team has Snowflake, no data engineer, $20M revenue, and 3 marketing destinations to activate. The MOST appropriate CDP path is: *(Apply)*
A. Build Snowplow from scratch
B. Adobe Real-Time CDP
C. Packaged CDP (Segment or mParticle)
D. No CDP — only use spreadsheets

---

### Q19. Identity-graph models typically store identifiers with: *(Understand)*
A. A confidence score (0.000–1.000) and source attribution
B. Plaintext only
C. No timestamps
D. Hard-deletes after 30 days

---

### Q20. Hashing a user's email before sending to ad platforms: *(Analyze)*
A. Eliminates the need for user consent
B. Provides one-way obfuscation but does NOT replace consent + DPA requirements
C. Improves match rate but reduces privacy
D. Is only required for GDPR users

---

### Q21. Stape.io is BEST described as: *(Remember)*
A. A reverse-ETL tool
B. Managed hosting + power-ups for server-side GTM
C. A data warehouse
D. A DMP

---

### Q22. JenTis is differentiated by: *(Understand)*
A. The cheapest option
B. European GDPR / data-residency focus and stronger consent integration
C. Only working with Meta
D. Being open-source

---

### Q23. The "Stitch Fix CDP" use case is canonical because it shows: *(Apply)*
A. CDPs only work for fashion
B. The activation use case: collect events from many sources → resolve identity → activate audiences back to ad platforms
C. CDPs replace stylists
D. Segment is the only viable CDP

---

### Q24. A team installs server-side GTM and expects all measurement loss from iOS ATT opt-out to recover. They will be: *(Apply)*
A. Correct
B. Wrong — ATT is a consent loss, not a technical loss; server-side cannot recover consent
C. Right but only on Android
D. Right after Meta whitelists their domain

---

### Q25. The most common 2026 reason for a failed CDP rollout is: *(Analyze)*
A. The wrong vendor SDK
B. No clear activation use cases (CDP bought as solution looking for a problem)
C. GDPR violations
D. CPRA fines

---

### Q26. The 4-layer "first-party stack" in 2026 is: *(Remember)*
A. Pixel → GA → Email → Ads
B. Collection → Server-side → Warehouse → Reverse-ETL activation
C. Lead → Nurture → Convert → Retain
D. CRM → CMS → CDP → DMP

---

## 🎯 Answers + Explanations

### Q1: **D. Real-time bidding capability**
The CDP Institute's 5 properties: packaged software, persistent unified DB, accessible to other systems, all sources, all data including identifiable. RTB is a DMP/DSP function.

### Q2: **B. CDPs work with PII / first-party data**
CDPs are designed around named, first-party customer data. DMPs were built around third-party anonymized cookie data (declining sharply in 2024–2026).

### Q3: **B. Warehouse as system of record + reverse ETL**
Composable / warehouse-native CDP = warehouse is the canonical store; tools like Hightouch and Census sync to activation destinations.

### Q4: **B. Hightouch**
Hightouch and Census are the category-defining reverse-ETL vendors. Polytomic and Rudderstack also play here.

### Q5: **B. 2017**
Safari ITP launched in WebKit in 2017 and progressively tightened restrictions over the following years.

### Q6: **B. Show a permission prompt**
iOS 14.5 (April 2021). Opt-in rates settled at 25–35%, which is why ad platforms lost so much iOS attribution signal.

### Q7: **A. 5–25%**
Server-side recovers some technical losses (ad-blocker, cookie expiration) but cannot recover consent-based losses (ATT opt-out, GDPR consent reject).

### Q8: **B. Google App Engine / Cloud Run**
GTM-SS is designed to run on Google App Engine. Stape and others host it on their infrastructure as a managed service.

### Q9: **B. Conversions API (CAPI)**
Meta's server-side conversion endpoint. The corresponding TikTok endpoint is "Events API"; Google's is "Conversion Adjustments" / "Enhanced Conversions" / "Measurement Protocol" depending on the property.

### Q10: **B. Measurement Protocol**
GA4's server-side ingestion endpoint. Universal Analytics had a different (incompatible) Measurement Protocol — GA4's is v2.

### Q11: **B. Known explicit links**
Deterministic = explicit. Probabilistic = inferred. The exam may also describe deterministic as "high confidence" and probabilistic as "modeled."

### Q12: **B. Regulators treating it as tracking requiring consent**
GDPR and emerging US state laws increasingly classify probabilistic ID as "tracking" — requiring opt-in consent that is rarely obtained.

### Q13: **A. Packaged, Composable, Self-hosted, Embedded-in-marketing-cloud**
The four 2026 architectural patterns. Memorize this for vendor-selection questions.

### Q14: **B. $2,600–$9,600/mo**
Per the Reading.md cost table. Enterprise pricing scales to $50K–$200K/mo at Fortune-500 volume.

### Q15: **B. Cumulative pressure from ITP, ETP, ATT, and Privacy Sandbox**
No single event killed it — but by 2026, third-party cookies are functionally dead in Safari/Firefox and unreliable in Chrome under Privacy Sandbox.

### Q16: **B. Sending hashed first-party PII to improve match rate**
Enhanced Conversions in Google Ads (and the equivalent in Meta CAPI) sends SHA-256-hashed emails/phones to recover conversion attribution lost to cookie restrictions.

### Q17: **B. CDPs are tuned for activation; warehouses for analytical querying + system of record**
This is the textbook distinction. The warehouse stays the SoR even when a CDP is installed.

### Q18: **C. Packaged CDP (Segment or mParticle)**
Without a data engineer, the composable pattern is hard to operate. Segment (or mParticle for mobile-first apps) is the default at this scale.

### Q19: **A. Confidence score and source attribution**
Mature identity graphs version every identifier link with a confidence score and source — necessary for forensic debugging and compliance.

### Q20: **B. Hashing does not replace consent + DPA**
A SHA-256 hash is a one-way function but the *identifier* is still personal data under GDPR. Consent and a Data Processing Agreement with the destination are still legally required.

### Q21: **B. Managed hosting + power-ups for server-side GTM**
Stape eliminates the DevOps overhead of self-hosting GTM-SS and adds proprietary "power-ups" (e.g., cookie-renewal modules).

### Q22: **B. European GDPR / data-residency focus**
JenTis competes by being German-hosted and GDPR-first, which matters to EU regulated industries.

### Q23: **B. Collect from many sources → resolve identity → activate audiences back**
This is the textbook CDP use case: cross-channel identity unification + activation.

### Q24: **B. Wrong — ATT is a consent loss**
Server-side cannot recover what the user explicitly opted out of. The fix is consent design + Enhanced Conversions, not more server hardware.

### Q25: **B. No clear activation use cases**
The #1 failure mode for CDP rollouts (per CDP Institute survey 2024): the buyer could not articulate the activation use case during procurement.

### Q26: **B. Collection → Server-side → Warehouse → Reverse-ETL activation**
The canonical 4-layer 2026 first-party stack. Memorize.

---

## 📊 Score Yourself

- 24–26/26 → 🏆 Architecturally fluent. Module 3 next.
- 22–23/26 → ✅ Solid.
- 18–21/26 → ⚠️ Re-read CDP-vs-DMP and the 4 architectural patterns sections.
- <18/26 → 🔁 Re-read the whole module.

---

## 🃏 Add To Your Flashcards

- CDP Institute's 5 properties
- CDP vs DMP vs DXP vs Warehouse
- The 4 CDP architectural patterns + one vendor each
- ITP / ATT / Privacy Sandbox dates
- Server-side recovery range (5–25%)
- CAPI / Measurement Protocol / Enhanced Conversions
- Deterministic vs probabilistic identity
- The 4-layer first-party stack

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 3](../Module-03-GA4-Mastery-Custom-Events/Reading.md)
