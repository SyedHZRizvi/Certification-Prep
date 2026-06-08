# 📋 Capstone 4 Deliverable Rubric: Attribution Model

> Print this. Grade before sharing.

---

## 🎯 The Deliverable

```
□ Sample data (100+ journeys, anonymized/public/synthetic)
□ At least 3 attribution models implemented (Last-Click + Linear + Markov/Shapley)
□ Built in Google Sheets OR Python Colab notebook
□ Comparison chart (clustered bar chart) showing channel-credit deltas
□ Interpretation: which model "wins" + why; surprising findings
□ Loom walkthrough (5–8 min)
□ Public link to sheet/notebook
□ Case study writeup using P-C-A-R-L on portfolio
□ LinkedIn post with chart + link
```

---

## 📐 Section-By-Section Rubric

| Component | Failing | Passing | Excellent |
|-----------|---------|---------|-----------|
| **Data Source** | Toy / unclear | Real or public dataset | Documented source + anonymization steps |
| **Sample Size** | <50 journeys | 50–99 | 100+ |
| **Models Implemented** | 1 model | 2 models | 3+ including Markov or Shapley |
| **Implementation** | Library only, no docs | Library + brief docs | Hand-implemented OR library w/ algorithm explained |
| **Comparison Chart** | None | Listed numbers | Clean clustered bar chart, labeled |
| **Interpretation** | Numbers only | Some commentary | Each model interpreted + surprising finding called out |
| **Limitations** | None acknowledged | Brief mention | Explicit limitations section |
| **v2 Ideas** | None | 1 idea | 3+ concrete v2 ideas |
| **Public Hosting** | Local only | Drafted | Public Sheet / Notebook + indexable URL |
| **Loom** | None | Recorded | Live exec + aha moment shown |
| **Case Study** | None | Drafted | Published P-C-A-R-L |

### To Pass: ≥8 cells Passing+
### Recruiter-Grade: ≥9 Excellent

---

## 📊 The 7 Attribution Models Quick Reference

| Model | Rule | Best For |
|-------|------|----------|
| **Last-Click** | 100% to final touch | Bottom-of-funnel-only biz |
| **First-Click** | 100% to first touch | Discovery channels visibility |
| **Linear** | Equal split | Simple multi-touch |
| **Time-Decay** | Recent touches > older | Long sales cycles |
| **U-Shaped (Position-Based)** | 40/40/20 (first/last/middle) | Balanced view |
| **Markov Chain** | Removal effect | Data-driven default |
| **Shapley Value** | Game-theoretic fair share | Provably "fairest" |

---

## 🧠 The Markov "Removal Effect" In One Paragraph

For each channel, simulate removing it from every customer journey. Calculate the resulting conversion probability. The drop in conversion rate is the "removal effect." Normalize across all channels → each channel's % of credit.

```
removal_effect(channel) = P(conv | all channels) - P(conv | channel removed)
```

---

## 📋 Implementation Choice Matrix

| You Want... | Pick |
|-------------|------|
| No code; fast | **Google Sheets (Last-Click + Linear; skip Markov)** |
| Code but accessible | **Python in Google Colab** |
| Full control + library | **Python + ChannelAttribution / pychattr** |
| Dev signal | **Python + manual Markov implementation** |
| Big data | **BigQuery SQL** (advanced) |

---

## 📈 The Money-Shot Chart

```
            Last-Click | Linear | Markov
            ─────────────────────────────
organic_search:  12  |  18.4  |  21.7
paid_search:     34  |  22.1  |  19.3
meta_ad:          8  |  14.6  |  17.2  ← Look!
email:           18  |  21.0  |  19.8
direct:          22  |  18.2  |  15.5
referral:         6  |   5.7  |   6.5
```

Clustered bar chart. 3 bars per channel. Different colors per model. The story is in the *deltas*, not the absolute numbers.

---

## 🚨 Privacy Checklist

```
□ User IDs replaced with sequential pseudo-IDs (user_001, etc.)
□ No real names, emails, IPs, or phone numbers in data
□ Geographic data limited to country (no cities, no zip codes)
□ Timestamps rounded to day, not exact second
□ Internal campaign names generalized (no `Q4_2026_FinTech_Strategy_v3`)
□ If real data: written consent obtained
□ If synthetic/public: source documented
```

---

## 📝 Case Study Structure

```
[Hero: comparison chart image]

## Problem
[Why does attribution matter? Channel investment decision?]

## Constraints
[Data source, sample size, what's NOT modeled]

## Approach
- Data prep & anonymization
- Model choice rationale  
- Implementation overview (Sheets or Python)
- Validation (sanity-check vs toy example)

## Result
[Chart + interpretation: which model says what; the surprise]

## Lessons
- Limitations: sample size, Markov assumption, attribution windows
- v2 next steps: 3+ ideas

## Artifacts
- 📊 Public Google Sheet / Colab notebook
- 🎥 Loom walkthrough
- 📈 Chart PNG download
- 📄 Methodology PDF (optional polish)
```

---

## 🚨 Anti-Patterns To Avoid

- ❌ Only Last-Click model (no comparison = no insight)
- ❌ Sample size <50 (Markov unstable)
- ❌ Library imported with no explanation
- ❌ Chart with bad design (3D, rainbow, no labels)
- ❌ No interpretation alongside numbers
- ❌ Real PII in published data
- ❌ Sheet/notebook permissions not public
- ❌ No limitations section (looks naive)

---

## 🏆 Power Phrases For Writeup & Pitch

- ✅ "Last-click credits paid social 4%; Markov credits 23%..."
- ✅ "Removal effect of [channel] is X%..."
- ✅ "Sample of N journeys; limitations noted..."
- ✅ "Channel ranking flips at position #N when switching from..."
- ✅ "Validated implementation against a hand-computed 3-journey example..."

Avoid:

- ❌ "Used a library to do it..."
- ❌ "I think paid social is undercredited..."
- ❌ "Markov is just better..."
- ❌ "Numbers speak for themselves..."

---

## ✏️ Quick Self-Check

1. Sample size is ___
2. Models implemented: ___
3. Chart shows ranking flip for ___
4. Sheet/notebook is at (public URL): ___
5. Loom is at ___ min

---

## 🎤 90-Second Pitch (Practice Out Loud)

```
"I built a multi-touch attribution model comparing Last-Click, Linear, 
and Markov chain on 200 customer journeys [from data source]. 
The chart [show it]: paid social moves from 4% credit under last-click 
to 23% under Markov. That's the gap that gets paid-social budgets cut 
when they shouldn't be. Limitations: sample size, attribution window 
chosen. v2 I'd add Shapley + segmentation."
```

5 reps.

---

➡️ [Module 6: Capstone 5, AI Marketing Agent](../Module-06-Capstone-AI-Agent-Build/Reading.md)
