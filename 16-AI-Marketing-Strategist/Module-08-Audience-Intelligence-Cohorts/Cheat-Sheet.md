# 📋 Module 8 Cheat Sheet: Audience Intelligence & Cohorts

> One page. Print it. Tape it to your monitor.

---

## 📅 Cohort Matrix Structure

```
Acq month | M0   | M1   | M2   | M3   | M4
2026-01   | 100% | 78%  | 65%  | 55%  | 49%
2026-02   | 100% | 82%  | 69%  | 58%  | 51%
2026-03   | 100% | 80%  | 68%  | 56%  | —
2026-04   | 100% | 84%  | 71%  |,    | —
2026-05   | 100% | 86%  |,    |,    | —
```

- Rows = cohort. Columns = months since acquisition.
- M0 = month of acquisition.
- Diagonal = most recent observation per cohort.
- Newer rows higher than older = product improving.

---

## 📈 3 Canonical Shapes

| Shape | Meaning |
|-------|---------|
| L-curve | Heavy early drop + plateau. Most consumer apps. |
| Smile | Resurrection / habit formation. |
| Cliff | Sharp drop at a specific tenure point = product moment to find. |

---

## 💰 Cohort Metrics

| Metric | Formula |
|--------|---------|
| Retention % | active in M_n / cohort size at M0 |
| NRR | (start ARR + expansion − contraction − churn) / start ARR |
| GRR | (start ARR − contraction − churn) / start ARR |
| LTV cohort curve | Cumulative revenue per user at M_n |

**Best-in-class B2B SaaS NRR:** >120%.

---

## 🎯 Cohort-of-One / Dimensional Cohorts

```
Acquisition month
     ×
Acquisition channel (paid social, organic, paid search)
     ×
Geography (NYC, SF, ...)
     ×
Onboarding event (tutorial complete / not)
     ×
First-purchase product
     =  the dimensional cohort
```

> Never settle for the blended average.

---

## 🎯 Activation Events, Real Examples

| Company | Activation event |
|---------|------------------|
| Stitch Fix | 3rd Fix |
| Slack | 2,000 messages sent in a team |
| Facebook (2007) | 7 friends in 10 days |
| Dropbox | Files saved across 3+ devices |
| Spotify | Created own playlist + followed ≥3 artists |

---

## 🆚 Look-Alike vs Advantage+ Audience

| | Manual Look-alike (legacy) | Advantage+ Audience (2024+) |
|---|---------------------------|------------------------------|
| Who chooses target | You (via seed) | Meta's ML (given your signals) |
| Default in 2026? | Niche | Yes |
| Strategist's job | Build seed | Feed conversion signals |

---

## 💀 The Death Spiral

```
W-12: -5% usage
W-8:  -12%
W-4:  -28%
W-2:  -51%
W-1:  -78%
W0:   churn
```

→ Intervention window: ~W-4 to W-2.

---

## 🎙️ The 4 CEO Charts

1. Cohort triangle heat-map (green→red)
2. Retention-curve overlay (3–5 cohorts)
3. Behavioral driver waterfall (retention lift per behavior)
4. LTV by acq month × channel

> Avoid the blended single-line retention curve as the headline.

---

## 🏆 Exam Power Phrases

✅ Often correct:

- "Disaggregate cohorts before averaging..."
- "M0 = acquisition month..."
- "Find the activation event that 5×'s retention..."
- "Feed conversion signals to Advantage+; don't manual-segment..."
- "Best-in-class B2B NRR > 120%..."

❌ Often wrong:

- "Average retention is enough..."
- "Manual look-alikes are still the default..."
- "Cohort is the same as segment..."
- "Reactivation timing is the same for all companies..."

---

## ⚠️ Anti-Patterns

- ❌ Blended retention as the headline metric
- ❌ Cohort analysis once a year instead of weekly
- ❌ Mapping the journey for an "average user"
- ❌ Ignoring the death-spiral pre-warning
- ❌ Treating all churned users equally (no LTV-weighted retention budget)

---

## ✏️ Quick Self-Check

1. M0 vs M1? ___
2. 3 retention curve shapes? ___
3. NRR formula? ___
4. Best-in-class NRR bar? ___
5. Advantage+ vs Look-alike, 2026 default? ___

---

➡️ [Module 9: Privacy-First Measurement](../Module-09-Privacy-First-Measurement/Reading.md)
