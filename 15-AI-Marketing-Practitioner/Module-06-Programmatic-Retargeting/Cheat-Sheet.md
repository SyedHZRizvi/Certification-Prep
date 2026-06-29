# 📋 Module 6 Cheat Sheet: Programmatic + Retargeting

> One page. Print it. Tape it to your monitor.

---

## 🌐 The Programmatic Ecosystem

```
ADVERTISER → DSP (Demand-Side Platform) → AD EXCHANGE → SSP (Supply-Side Platform) → PUBLISHER
                   (~50ms auction)
```

| Term | Role |
|------|------|
| **DSP** | Where advertisers BUY |
| **SSP** | Where publishers SELL |
| **Exchange** | The marketplace |

---

## 🛠️ The 4 DSPs

| DSP | Best for |
|-----|----------|
| **DV360** (Google) | Enterprise + Google ecosystem |
| **TTD** (independent) | Agencies, CTV (Connected TV), scale |
| **AdRoll** | SMB / DTC (Direct-to-Consumer) retargeting |
| **Criteo** | Dynamic product retargeting |

---

## 🔄 Retargeting Audience Taxonomy

| Audience | Lookback | Creative tier |
|----------|----------|---------------|
| All visitors | 30 days | Brand-builder |
| Product viewers | 14 days | Same product + benefit |
| Add-to-cart | 14 days | Product + social proof |
| Cart abandoners | 30 days | Product + DISCOUNT |
| Past purchasers | EXCLUDE 30-60 days | Cross-sell only |

---

## 🪜 Casper-Style 3-Stage Funnel

```
Day 1-3:   Aggressive, product + offer
Day 4-7:   Social proof, testimonial
Day 8-14:  Urgency, discount expires
Day 15+:   EXCLUDE
```

---

## 🚨 Frequency Caps (NON-NEGOTIABLE)

```
Per user / per day:      3
Per user / per week:     12
Per user / per campaign: 24
```

---

## 🏭 CDP (Customer Data Platform) Solves the Lag Problem

```
Website event → CDP (Segment) → Ad platforms (Meta/Google/TT) in SECONDS
```

vs. without CDP: 24-hour audience sync = wasted spend.

| CDP | Use case |
|-----|----------|
| Segment | Default for startups |
| Klaviyo | DTC lightweight |
| mParticle | Mobile-first |
| RudderStack | Open-source |

---

## 📊 Attribution Windows

| Window | Era |
|--------|-----|
| 28-day click + 1-day view | Pre-iOS 14 |
| **7-day click + 1-day view** | Current Meta default |
| 90-day click | LinkedIn B2B (Business-to-Business) |
| 28-day click + view-through | YouTube |

### Models

```
Last-click       → biased to bottom funnel
Linear           → equal across touches
Position (40/20/40) → first + last matter most
Data-driven      → ML-based (GA4 (Google Analytics 4) default)
```

---

## 🛡️ Brand Safety + Fraud

| Term | What |
|------|------|
| **IVT** | Invalid Traffic (bots, fraud) |
| **GIVT** | Common bots |
| **SIVT** | Sophisticated bots, click farms |
| **MFA (Multi-Factor Authentication)** | Made-For-Advertising sites (~20% of open web!) |
| **DoubleVerify / IAS** | Enterprise verification tools |

### Block List Starter

```
- MFA categories
- Adult / hate / harmful
- Sites > 70% ad density
- Viewability < 30%
- Geo mismatch
```

---

## 📺 CTV Quick Take

| Spec | Value |
|------|-------|
| Format | 15-30 sec non-skip |
| Aspect | 16:9 (TV) |
| CPMs | $25–$60 |
| Min budget | $50K/qtr realistic |
| Best DSPs | TTD, DV360 |

---

## 🧠 Reality Check

```
Average DTC buyer touches: 25-30 brand interactions before purchase
Single-touch attribution credits: 1 of 30
```

→ Use MMM + incrementality for serious measurement.

---

## ⚠️ Top Mistakes

- ❌ No frequency cap = harassment
- ❌ No purchaser exclusion = wasted spend
- ❌ Same creative across funnel stages
- ❌ Last-click attribution as gospel
- ❌ Trusting open-web inventory blindly
- ❌ CTV without scale ($50K+ budget)

---

## ✏️ Quick Self-Check

1. DSP vs SSP, which does which?
2. The 4 DSPs and their specialties?
3. 3-stage funnel days?
4. Why CDP matters?
5. MFA prevalence on open web?

---

➡️ [Module 7: CRO (Chief Revenue Officer) + Landing Pages](../Module-07-CRO-Landing-Pages-Personalization/Reading.md)
