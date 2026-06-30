# 📋 Module 9 Cheat Sheet: Privacy-First Measurement

> One page. Print it. Tape it to your monitor.

---

## 🍪 Consent Mode v2, 4 Parameters

| Parameter | Controls |
|-----------|----------|
| `ad_storage` | Cookies/IDs for advertising |
| `ad_user_data` | User-data → Google for ads |
| `ad_personalization` | Personalized advertising |
| `analytics_storage` | Cookies/IDs for analytics |

### Modes

| Mode | When consent denied | Recovery |
|------|---------------------|----------|
| Basic | No tags fire | 0% |
| Advanced | Anonymized pings + modeled conversions | 20–80% |

> **2026 default = Advanced.**

---

## 📞 Meta CAPI

```
POST graph.facebook.com/v18.0/{pixel_id}/events
{
  event_name, event_time, action_source,
  user_data: { em (sha256), ph (sha256), fbc, fbp,
               client_ip_address, client_user_agent },
  custom_data: { currency, value, content_ids }
}
```

**Dedup keys:** `event_id` + `event_name` + `event_time` + `fbc/fbp`

**Typical recovery:** 15–30% in 6 weeks.

---

## 🔑 Google Enhanced Conversions

- **Web:** sends hashed email/phone alongside conversion
- **Leads:** uploads hashed lead ID after CRM (Customer Relationship Management) stage
- **Recipe:** lowercase + trim + SHA-256

---

## 📱 Apple SKAdNetwork 4 / AdAttributionKit

| Feature | Detail |
|---------|--------|
| Conversion value | 6 bits = 0–63 |
| Postback timing | Randomized 24–144 hr delay |
| Identification | None at user level |
| Strategist's lever | Design the 6–8 LTV (Lifetime Value) bins encoded into conversion value |
| Apple 2024+ | AdAttributionKit (broader, more granular) |

---

## 🌐 Privacy Sandbox, 7 APIs

| API | Purpose |
|-----|---------|
| Topics | Interest-based targeting (470-topic taxonomy, 3/week) |
| Protected Audience (FLEDGE) | On-device remarketing auction |
| Attribution Reporting | Browser-native noisy aggregate attribution |
| Private Aggregation | Cross-site aggregate reporting |
| Shared Storage | Limited cross-site storage |
| Private State Tokens | Anti-fraud across sites |
| CHIPS | Partitioned 3p cookies (per-site) |

---

## 🏢 Data Clean Rooms

| Platform | Provider |
|----------|----------|
| AWS Clean Rooms | Amazon |
| Google Ads Data Hub (ADH) | Google |
| Meta Audience Insights | Meta |
| Snowflake Clean Room | Snowflake (2026 default) |
| InfoSum | Independent |
| Habu (LiveRamp) | LiveRamp 2024 acq |
| LiveRamp Safe Haven | LiveRamp (CTV) |

**Rules:** aggregation thresholds, allowed-query restrictions, differential privacy.

---

## 🔢 Differential Privacy

```
Lower ε  →  stronger privacy, more noise (less utility)
Higher ε →  weaker privacy, less noise (more utility)
```

Used in: SKAN, Attribution Reporting API, clean-room outputs.

---

## 📜 Regulatory Map (2026)

| Law | Where | Key issue |
|-----|-------|-----------|
| GDPR (General Data Protection Regulation) | EU/EEA/UK | Lawful basis, consent, DSAR |
| CCPA (California Consumer Privacy Act) / CPRA | California | "Sale/sharing", GPC |
| VCDPA / CPA / CTDPA / UCPA / TDPSA | VA / CO / CT / UT / TX | CCPA-style |
| MHMDA | Washington | Health data; brutal |
| COPPA (Children's Online Privacy Protection Act) | US | Kids <13 |
| LGPD | Brazil | GDPR-style |

**Top 4 strategist must know:** GDPR · CCPA/CPRA · MHMDA · COPPA.

---

## ⚖️ Sephora 2022 Lessons

1. Honor browser-level signals (GPC).
2. Every 3p tag is potentially a "sale" under CCPA.
3. Server-side + first-party-cookie architecture is now table stakes.

---

## 🏆 Exam Power Phrases

✅ Often correct:

- "Hashed PII is still personal data under GDPR..."
- "Advanced Consent Mode + modeling for EU..."
- "Server-side CAPI recovers 15-30%..."
- "Design the 6-bit SKAN conversion value as LTV bins..."
- "Clean room: query, not raw data, leaves the silo..."

❌ Often wrong:

- "Hashing removes GDPR obligations..."
- "Server-side bypasses GDPR..."
- "SKAN gives you user-level data..."
- "GDPR only applies to EU companies..."

---

## ⚠️ Anti-Patterns

- ❌ Pixel-only with no CAPI in 2026
- ❌ Basic Consent Mode in the EU
- ❌ Ignoring GPC
- ❌ 6-bit SKAN value used as "install/not"
- ❌ Treating clean rooms as full data access
- ❌ Treating GDPR compliance as one-time
- ❌ Probabilistic ID for activation in regulated industries

---

## ✏️ Quick Self-Check

1. 4 Consent Mode parameters? ___
2. Basic vs Advanced, which is 2026 default? ___
3. CAPI dedup keys? ___
4. SKAN value bits? ___
5. The 4 top privacy regulations? ___

---

➡️ [Module 10: Marketing Org & Tech Stack Design](../Module-10-Marketing-Org-Tech-Stack-Design/Reading.md)
