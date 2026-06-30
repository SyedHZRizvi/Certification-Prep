# 📋 Module 8 Cheat Sheet: Analytics & Measurement Basics

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🌐 GA4 Quick Facts

- **UA sunset:** July 1, 2023 → **GA4 only**
- Core unit: **events** (everything is an event)
- Web + app unified
- **Engagement rate** replaces UA's bounce rate
- **Engaged session** = ≥10s OR ≥2 pages OR a conversion

---

## 🏷️ The 5 UTM Parameters

| Parameter | Captures |
|---|---|
| `utm_source` | Platform (newsletter, google, facebook) |
| `utm_medium` | Channel type (email, cpc, organic, social) |
| `utm_campaign` | Campaign name |
| `utm_content` | Variant / placement |
| `utm_term` | Keyword |

🛠️ Builder: `ga-dev-tools.google/campaign-url-builder/`

⚠️ Lowercase + consistent + documented; never tag internal links.

---

## 📊 Looker Studio (formerly Data Studio, Oct 2022)

Free Google dashboard tool. Connects to GA4, Google Ads, Search Console, BigQuery, Sheets, and 800+ sources.

---

## 🧭 Attribution Models

| Model | Logic |
|---|---|
| Last-click | 100% last touch (legacy) |
| First-click | 100% first touch |
| Linear | Equal split |
| Time-decay | Recent gets more |
| Position-based (U) | 40 / 20 / 40 |
| **Data-Driven (DDA)** | **GA4 default since 2023** |

---

## 🔒 The Privacy-Preserving Stack

| Tool | Platform | Purpose |
|---|---|---|
| **Consent Mode v2** | Google | Mandatory EU since March 2024 |
| **Enhanced Conversions** | Google | Hashed user data, server-side |
| **CAPI** | Meta | Server-side conversion API |
| **Events API** | TikTok | Server-side equivalent |
| **Server-side GTM** | Universal | Browser-independent tracking |

---

## 📈 MMM (The Comeback)

- **Robyn**, Meta open-source
- **Meridian**, Google open-source
- Aggregate-level, resilient to cookie loss
- Required for serious 2026 measurement

---

## 🎯 The 2026 Best-Practice Combo

```
Platform-reported attribution (each ad platform)
  +
GA4 DDA (cross-platform)
  +
MMM (aggregate channel impact)
  +
Incrementality testing (true lift)
  +
First-party data (CRM, server-side)
```

No single model is "right." Triangulate.

---

## 📊 Key Metrics

| Metric | Definition |
|---|---|
| Sessions | Visits |
| Engaged sessions | ≥10s OR ≥2 pages OR conversion |
| Engagement rate | Engaged ÷ total |
| Bounce rate (GA4) | 1 − engagement rate |
| Conversion rate | Conversions ÷ sessions |
| Conversions / Key Events | Meaningful events (GA4) |

---

## 🚨 Common Traps

- ❌ Citing UA terminology in 2026
- ❌ Last-click as the default attribution
- ❌ Bounce rate same as UA (no, GA4 redefined)
- ❌ Mixing Enhanced Conversions (Google) with CAPI (Meta)
- ❌ Ignoring Consent Mode v2 in EU
- ❌ "MMM is for enterprises only" (Robyn + Meridian are free)

---

## 🏆 Exam Power Phrases

✅ Often correct: "DDA," "Consent Mode v2," "Enhanced Conversions + CAPI," "Triangulate platform + GA4 + MMM + incrementality," "First-party data"

❌ Often wrong: "Last-click only," "UA bounce rate," "Disable Consent Mode," "Buy third-party data," "Trust platform-reported metrics blindly"

---

## ✏️ Quick Self-Check

1. UA sunset date? ___
2. The 5 UTMs? ___
3. GA4's default attribution? ___
4. Robyn vs Meridian, which company? ___
5. The 2026 measurement triangulation? ___

If you can do all 5 in under 90 seconds, you own this module. ✅

---

➡️ [Module 9: AI Ethics, Privacy & Compliance](../Module-09-AI-Ethics-Privacy-Compliance/Reading.md)
