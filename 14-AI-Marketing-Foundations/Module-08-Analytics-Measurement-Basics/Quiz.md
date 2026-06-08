# ✏️ Module 8 Quiz: Analytics & Measurement Basics

> **Instructions:** Answer all 24 questions WITHOUT looking at the reading. Aim for 20/24.

---

## Questions

### Q1. Universal Analytics (UA) was sunset on: *(Remember)*
A. January 1, 2022
B. July 1, 2023
C. January 1, 2024
D. It's still active in 2026

---

### Q2. In GA4, the core unit of measurement is: *(Remember)*
A. The pageview
B. The session
C. The event
D. The user

---

### Q3. Which is NOT one of the 5 standard UTM parameters? *(Remember)*
A. utm_source
B. utm_medium
C. utm_campaign
D. utm_priority

---

### Q4. Looker Studio was previously known as: *(Remember)*
A. Google Sites
B. Google Data Studio
C. Google Tag Manager
D. Google Charts

---

### Q5. GA4's DEFAULT attribution model since 2023 is: *(Remember)*
A. Last-click
B. First-click
C. Linear
D. Data-driven attribution (DDA)

---

### Q6. Which is TRUE about GA4's bounce rate? *(Understand)*
A. It's identical to UA's bounce rate
B. It's defined as 1 minus engagement rate
C. It's no longer reported in GA4
D. It only applies to mobile sessions

---

### Q7. An "engaged session" in GA4 is one that: *(Understand)*
A. Lasted ≥ 10 seconds, OR had ≥ 2 page views, OR had a conversion
B. Had at least 100 page views
C. Came from organic search only
D. Lasted at least 30 minutes

---

### Q8. Consent Mode v2 became mandatory for ad personalization in the EU in: *(Remember)*
A. March 2022
B. March 2024
C. December 2025
D. It is not mandatory

---

### Q9. Meta's server-side conversion-tracking API is called: *(Remember)*
A. Enhanced Conversions
B. Conversions API (CAPI)
C. Events API
D. Server-side Connect

---

### Q10. Google's open-source MMM library is called: *(Remember)*
A. Robyn
B. Meridian
C. LookML
D. Vertex

---

### Q11. Meta's open-source MMM library is called: *(Remember)*
A. Robyn
B. Meridian
C. Looker
D. Vertex

---

### Q12. Which UTM parameter captures the campaign name? *(Remember)*
A. utm_source
B. utm_medium
C. utm_campaign
D. utm_term

---

### Q13. The 1985 "New Coke" episode is the canonical case study for: *(Understand)*
A. Successful brand relaunch
B. Measurement error (measuring the wrong variable)
C. Programmatic advertising
D. Email deliverability

---

### Q14. Which attribution model gives 40% credit to first, 40% to last, and 20% to middle touches? *(Understand)*
A. Linear
B. Time-decay
C. Position-based (U-shaped)
D. First-click

---

### Q15. The combination most marketers should use for 2026 measurement is: *(Evaluate)*
A. Last-click only
B. Platform-reported attribution alone
C. Platform-reported + DDA + MMM + incrementality + first-party
D. Hire a consultant to decide

---

### Q16. Enhanced Conversions (Google) primarily improves attribution by: *(Understand)*
A. Using third-party cookies
B. Hashing user-provided data (email, phone) and sending it server-side
C. Disabling ad blockers
D. Counting bots

---

### Q17. The Spotify Wrapped campaign is best described as: *(Understand)*
A. The whole of Spotify's analytics work
B. The visible tip of a much larger first-party + ML personalization iceberg
C. A standalone advertising campaign with no data backbone
D. A short-lived experiment

---

### Q18. UTM parameter best practice includes: *(Apply)*
A. UPPERCASE everything
B. Lowercase + consistent naming + documented taxonomy + builder
C. Tag every internal link on your own site
D. Random naming

---

### Q19. Which is TRUE about MMM? *(Evaluate)*
A. It requires user-level tracking
B. It is aggregate-level and resilient to cookie loss
C. It only works for B2C
D. It's the same as DDA

---

### Q20. GA4's primary advantage over UA is: *(Evaluate)*
A. Web + app unification + event model + privacy-aware
B. Older interface
C. Less data
D. Higher cost

---

### Q21. Server-side tagging (e.g., GTM Server-Side) primarily reduces: *(Understand)*
A. The cost of Google Cloud
B. Reliance on the user's browser to send tracking data
C. The need for analytics
D. Site speed (no, sometimes improves it)

---

### Q22. "Goals" (in old UA) ≈ what in GA4? *(Remember)*
A. Sessions
B. Conversions / Key Events
C. Users
D. Audiences

---

### Q23. Which is NOT a typical reason to use MMM in 2026? *(Apply)*
A. Cookie deprecation makes deterministic attribution harder
B. iOS 14.5 reduced platform-reported precision
C. To replace your CRM
D. To measure incrementality at the channel level

---

### Q24. The free Google tool for building UTM-tagged URLs is the: *(Remember)*
A. Campaign URL Builder
B. Search Console
C. Tag Manager preview
D. Looker connector

---

## 🎯 Answers + Explanations

### Q1: **B. July 1, 2023**
Universal Analytics stopped processing new data on July 1, 2023. GA4 is the only version.

### Q2: **C. The event**
GA4 is event-centric. Pageviews are just one type of event.

### Q3: **D. utm_priority**
The 5 standard UTMs are source, medium, campaign, content, term.

### Q4: **B. Google Data Studio**
Renamed Looker Studio in October 2022.

### Q5: **D. Data-driven attribution (DDA)**
DDA became the default in GA4 + Google Ads in 2023.

### Q6: **B. It's defined as 1 minus engagement rate**
GA4's bounce rate differs from UA's. Old guides still cite the UA definition.

### Q7: **A. Lasted ≥ 10 seconds, OR had ≥ 2 page views, OR had a conversion**
GA4's engaged-session definition.

### Q8: **B. March 2024**
Consent Mode v2 became mandatory for ad personalization in the EU in March 2024.

### Q9: **B. Conversions API (CAPI)**
Meta's server-side conversion tracking, post-iOS-14.5 response.

### Q10: **B. Meridian**
Google's open-source MMM, released 2023.

### Q11: **A. Robyn**
Meta's open-source MMM, released 2021. The two-MMM-tool combo (Robyn + Meridian) is the standard 2024–2026 exam pairing.

### Q12: **C. utm_campaign**
Self-explanatory: campaign name.

### Q13: **B. Measurement error (measuring the wrong variable)**
New Coke is the canonical case study for measuring taste-preference when the actual purchase driver was brand identity.

### Q14: **C. Position-based (U-shaped)**
40/20/40 split. Common B2B compromise.

### Q15: **C. Platform-reported + DDA + MMM + incrementality + first-party**
The 2026 best-practice triangulation.

### Q16: **B. Hashing user-provided data (email, phone) and sending it server-side**
Hashed + server-side = recovers signal lost to cookie deprecation.

### Q17: **B. The visible tip of a much larger first-party + ML personalization iceberg**
Most of Spotify's analytics work is invisible to users; Wrapped is the visible output.

### Q18: **B. Lowercase + consistent naming + documented taxonomy + builder**
Standard UTM hygiene; case sensitivity is the #1 mistake.

### Q19: **B. It is aggregate-level and resilient to cookie loss**
MMM's defining property: it works on aggregate spend + outcomes, not user-level tracking.

### Q20: **A. Web + app unification + event model + privacy-aware**
GA4's three core advantages over UA.

### Q21: **B. Reliance on the user's browser to send tracking data**
Server-side moves the tracking call to your server, bypassing many client-side blockers.

### Q22: **B. Conversions / Key Events**
GA4 renamed UA's "goals" to "conversions" (and more recently "key events").

### Q23: **C. To replace your CRM**
MMM is a measurement technique, not a CRM substitute.

### Q24: **A. Campaign URL Builder**
Google's free UTM builder lives at ga-dev-tools.google/campaign-url-builder.

---

## 📊 Score Yourself

- 22–24/24 → 🏆 You can run measurement. Move to Module 9.
- 18–21/24 → ✅ Solid. Note misses, move on.
- 14–17/24 → ⚠️ Re-read GA4 + attribution sections. Re-quiz tomorrow.
- <14/24 → 🔁 Re-read Module 8 fully.

---

## 🃏 Add To Your Flashcards

- UA sunset July 1, 2023
- GA4 = event-centric, web + app, privacy-aware
- 5 UTMs: source, medium, campaign, content, term
- Looker Studio = formerly Data Studio (Oct 2022)
- DDA = GA4 default since 2023
- GA4 bounce = 1 − engagement rate
- Engaged session = ≥10s, ≥2 page views, OR a conversion
- Consent Mode v2 mandatory in EU since March 2024
- CAPI = Meta; Enhanced Conversions = Google; Events API = TikTok
- Robyn = Meta MMM; Meridian = Google MMM
- New Coke = measurement-error case study

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 9](../Module-09-AI-Ethics-Privacy-Compliance/Reading.md)
