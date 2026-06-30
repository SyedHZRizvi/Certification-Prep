# 📋 Module 2 Cheat Sheet: CDPs & Server-Side Tracking

> One page. Print it. Tape it to your monitor.

---

## 🧬 CDP vs DMP vs DXP vs Warehouse

| Property | CDP | DMP | DXP | Warehouse |
|----------|-----|-----|-----|-----------|
| Data | First-party PII | 3P + anon 1P | Content/experience | Structured analytic |
| Use | Activation | Media buying | Site/app experiences | Querying / SoR |
| Owner | Marketing | Media | Web team | Data eng |
| Example | Segment, mParticle | LiveRamp | Adobe AEM | Snowflake, BigQuery |

---

## 🛠️ 4 CDP Architectural Patterns

| Pattern | Vendor examples | When to choose |
|---------|----------------|----------------|
| Packaged | Segment, mParticle, Tealium | No data engineer, fast rollout |
| Composable (warehouse-native) | Hightouch, Census on Snowflake/BigQuery | Have data eng, want single SoR |
| Self-hosted / OSS | Snowplow, Jitsu, PostHog | Engineering-heavy, cost-sensitive |
| Embedded in marketing cloud | Adobe RT-CDP, Salesforce Data Cloud | Already on Adobe / Salesforce stack |

---

## 🍪 Death of 3P Cookie, Timeline

```
2017, Safari ITP launches
2018, GDPR
2019, Firefox ETP
2020, CCPA + Google Privacy Sandbox announced
2021, iOS 14.5 ATT (opt-in 25-35%)
2023, CPRA
2024, UA shutdown, GA4 only
2026, 3P cookie functionally dead in Safari/Firefox;
       unreliable in Chrome under Privacy Sandbox
```

---

## 🛰️ Server-Side Stack

```
Browser → YOUR collection domain → sGTM container →
  ├─ GA4 Measurement Protocol
  ├─ Meta CAPI
  ├─ Google Ads (Enhanced Conversions)
  ├─ TikTok Events API
  └─ Warehouse (BigQuery streaming)
```

| Platform | Pricing | Best for |
|----------|---------|----------|
| GTM-SS on GCP | $120–500/mo | Self-managed teams |
| Stape.io | $20–100+/mo | SMB, no DevOps |
| JenTis | €100–500/mo | European / GDPR (General Data Protection Regulation)-strict |

**Reality check:** server-side recovers **5–25%** of measurement loss, NOT 100%.

---

## 🪪 Identity Resolution

| Type | How | When to use |
|------|-----|-------------|
| Deterministic | Login, hashed email match | Default in 2026, esp. regulated industries |
| Probabilistic | IP + behavioral ML inference | Fallback only, declining usage |

**2026 default:** deterministic-first. Probabilistic only for analytical reporting, never for activation in regulated industries (finance, health, kids' products).

---

## 💵 2026 Cost Reality (DTC at $20M revenue, 2M MTU)

| Layer | Cost |
|-------|------|
| Collection | $1,200–$3,000 |
| Server | $200–$600 |
| Warehouse | $400–$1,500 |
| Reverse ETL | $800–$2,500 |
| BI | $0–$2,000 |
| **TOTAL** | **$2,600–$9,600/mo** |

---

## 🏆 Exam Power Phrases

✅ Often correct:

- "Warehouse stays the system of record..."
- "Server-side recovers some but not all losses..."
- "Hashing does not replace consent..."
- "Deterministic-first identity resolution..."
- "CDPs activate; warehouses query..."

❌ Often wrong:

- "Server-side recovers 100% of losses..."
- "Hashing means we don't need consent..."
- "Probabilistic ID is fine everywhere..."
- "CDP replaces the data warehouse..."

---

## ⚠️ Anti-Patterns To Recognize

- ❌ Buying a CDP without a clear activation use case
- ❌ Treating server-side as a silver bullet for ATT loss
- ❌ Probabilistic ID in regulated industries
- ❌ Plaintext PII in event payloads
- ❌ Sending events to a destination without a DPA
- ❌ CDP and warehouse holding *duplicate* data (cost waste)

---

## ✏️ Quick Self-Check

1. The 5 CDP Institute properties? ___
2. The 4 architectural patterns? ___
3. Realistic server-side recovery range? ___
4. Deterministic vs probabilistic, which is 2026 default? ___
5. The 4-layer first-party stack? ___

---

➡️ [Module 3: GA4 Mastery & Custom Events](../Module-03-GA4-Mastery-Custom-Events/Reading.md)
