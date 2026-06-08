# 📋 Capstone 3 Deliverable Rubric: Automation Workflow

> Print this. Grade before sharing.

---

## 🎯 The Deliverable

```
□ Live, working scenario (Make.com / n8n / Zapier / HubSpot)
□ 5+ connected modules with at least one branching decision
□ Enrichment + scoring + routing layers
□ Architecture diagram (Excalidraw / Whimsical / FigJam)
□ Loom walkthrough (5–10 min) with live execution shown
□ JSON / blueprint export, sanitized, hosted publicly
□ Case study writeup using P-C-A-R-L on portfolio
□ LinkedIn post with Loom + writeup links
```

---

## 📐 Section-By-Section Rubric

| Component | Failing | Passing | Excellent |
|-----------|---------|---------|-----------|
| **Tool Selection** | None chosen | Picked, not built | Picked w/ stated rationale (target audience signal) |
| **Module Count** | <3 modules | 4–5 modules linear | 5+ modules with router + 3 branches |
| **Enrichment** | None | Set up | Enrichment running, real data added |
| **Scoring** | None | Single attribute | 3+ attribute formula, weights documented |
| **Branching** | Linear | One IF | Router w/ HOT/WARM/COLD paths |
| **Error Handling** | None | Aware | Explicit error/retry path in scenario |
| **Testing** | Untested | One happy path | HOT, WARM, COLD + edge cases tested |
| **Architecture Diagram** | None | Sketched | Clean 1-page, matches implementation |
| **Loom** | None | Recorded | Public + opens with hook + live execution shown |
| **JSON Export** | None | Exported with creds (bad!) | Sanitized + hosted publicly |
| **Case Study** | None | Drafted | Published P-C-A-R-L + screenshots + v2 ideas |

### To Pass: ≥8 cells Passing+
### Recruiter-Grade: ≥9 cells Excellent

---

## 🛠️ Tool Stack At A Glance

| You Want... | Pick |
|-------------|------|
| Cleanest visual UI | **Make.com** |
| Dev signal / self-host / OSS | **n8n** |
| Simplest interface | **Zapier** |
| B2B SaaS / HubSpot ecosystem | **HubSpot Workflows** |
| Default for this course | **Make.com** |

---

## 📋 The Reference Scenario (Copy + Customize)

```
[1] TRIGGER: Webhook / Typeform / Tally
     ↓
[2] ENRICH: Hunter / Apollo / Clearbit
     ↓
[3] SCORE: Formula (industry × size × intent)
     ↓
[4] ROUTER:
     ├─ HOT (≥70): Slack + Email + SFDC + Notion
     ├─ WARM (40-69): Klaviyo + SFDC + Notion
     └─ COLD (<40): Klaviyo newsletter + Notion
```

5+ steps. Branching. Real value. Replaces ~6 hrs/wk.

---

## 🚨 Pre-Build Checklist

```
□ Tool picked (and account created)
□ Subject / use case defined (real or realistic)
□ Architecture diagram sketched first (top-down)
□ All API accounts ready (Hunter / Apollo / Slack / Klaviyo / etc.)
□ Test form built (Tally / Typeform free)
□ Test "scoring inputs" ready (3+ records to test HOT/WARM/COLD)
□ Sanitization plan ready (so JSON export is safe to share)
```

---

## 🧠 Scoring Formula Template

```
score = 0

# Company size (0–30 points)
+ 30 if employees >= 51
+ 15 if employees 11-50
+ 5 if employees 1-10

# Industry fit (0–30 points)
+ 30 if industry in ['SaaS', 'Fintech', 'HealthTech']
+ 15 if industry in ['E-commerce', 'Agency']
+ 0 otherwise

# Intent keywords in message (0–40 points)
+ 40 if message contains 'urgent' OR 'budget' OR 'asap'
+ 20 if message contains 'pricing' OR 'demo'
+ 0 otherwise

# Total max: 100
```

Customize weights to your subject. Document them in the case study.

---

## 🎥 Loom Outline

```
0:00, Hook + problem
0:30, Diagram overview
2:00, Live demo (submit form, show fanout)
3:30, Tour each module + config
6:00, Show JSON export + "you can import this"
7:00, Wrap + what v2 adds
```

5–10 min. 1080p. Face in corner. Pacing matters.

---

## 📝 Case Study Page Structure

```
[Hero: architecture diagram]

## Problem
[Drowning SDR team? Manual lead routing? What was broken?]

## Constraints
[Tools you could use, budget, time]

## Approach
[Tool choice rationale + screenshots of each module]

## Result
[What it does now + estimated hours saved/week]

## Lessons
[What was finicky, what'd you change for v2]

## Artifacts
- 🎥 Loom walkthrough
- 📐 Architecture diagram (PNG download)
- 📦 JSON blueprint (download or GitHub gist)
- 📸 Module screenshots gallery
```

---

## 🚨 Anti-Patterns To Avoid

- ❌ <5 modules (too thin)
- ❌ Linear flow only (no branching = no decisioning)
- ❌ Built it but didn't test the paths
- ❌ No Loom (just screenshots)
- ❌ Exported JSON with API keys still in (security failure)
- ❌ No architecture diagram (or one that doesn't match the build)
- ❌ Toy scenario with no real business problem
- ❌ No "v2 next steps" (shows you can't think about extensibility)
- ❌ Built in HubSpot only (looks tied to one ecosystem)

---

## 🏆 Power Phrases For Writeup & Pitch

When describing the scenario:

- ✅ "Replaces ~6 manual hours/week..."
- ✅ "Router branches by score; each branch fires in <30 sec..."
- ✅ "Enrichment uses [tool], added data we couldn't get from the form..."
- ✅ "Error handler routes failed enrichments to a manual review queue..."

Avoid:

- ❌ "It's basically a Zapier workflow..."
- ❌ "Pretty straightforward setup..."
- ❌ "Used some integrations..."
- ❌ "Took me a while to figure out..."

---

## ✏️ Quick Self-Check

1. My scenario has ___ modules + ___ branches
2. The Loom is ___ minutes
3. The JSON is hosted at ___
4. The diagram is drawn in ___
5. The case study lives at ___

All 5 filled? Ship it.

---

## 🎤 90-Second Pitch (Practice Out Loud)

```
"I built a 7-step lead-routing automation in Make.com for [Subject].
Webhook → Hunter enrichment → scoring → Router to HOT/WARM/COLD.
Each branch fires Slack + email + Salesforce + Notion based on score.
Replaces ~6 manual hours/week. Lead routing now happens in <30 sec.
v2 I'd add LLM message classification + dedupe + feedback loop.
Loom + JSON public, you can import and customize in 4 minutes."
```

5 reps. Then move on.

---

➡️ [Module 5: Attribution Model](../Module-05-Capstone-Attribution-Model-Spreadsheet/Reading.md)
