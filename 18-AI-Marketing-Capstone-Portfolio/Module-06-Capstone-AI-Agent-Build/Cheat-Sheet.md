# 📋 Capstone 5 Deliverable Rubric: AI Marketing Agent

> Print this. Grade before sharing.

---

## 🎯 The Deliverable

```
□ Working agent (Python, Claude API or OpenAI Assistants)
□ Multi-step (not just one API call)
□ Public GitHub repo with README
□ Sample inputs + outputs in /examples
□ Loom demo (3–5 min, live execution shown)
□ .env in .gitignore; verified no API keys committed
□ API cost analysis in README
□ Case study writeup using P-C-A-R-L on portfolio
□ LinkedIn post with repo + Loom links
```

---

## 📐 Section-By-Section Rubric

| Component | Failing | Passing | Excellent |
|-----------|---------|---------|-----------|
| **Use Case Definition** | Generic | Specific | Specific + clear business value quantified |
| **Working Build** | Doesn't run | Runs with issues | End-to-end + edge cases handled |
| **Multi-Step** | One call | Two steps | 3+ orchestrated steps OR tool use |
| **Code Hosting** | Local | Private repo | Public GitHub + linkable |
| **README** | None / WIP | Basic | Clear: what + how to run + examples + cost + limits |
| **Security** | Leaked keys | Excluded but unchecked | Verified clean + .gitignore + rotation plan |
| **Loom** | None | Recorded | Live exec + clear hook + linked from README |
| **Prompt Engineering** | Vibes prompts | System prompts | System prompts + structured output + iteration notes |
| **Cost Analysis** | None | Mentioned | Per-run cost + 100-run + scaling notes |
| **Case Study** | None | Drafted | Published P-C-A-R-L + technical decisions explained |
| **Quality Measure** | Not measured | Eyeballed | Rated 10+ runs (success/needs-edit/fail) |

### To Pass: ≥8 cells Passing+
### Recruiter-Grade: ≥9 Excellent

---

## 🛠️ The 6 Agent Use Cases, Pick One

| # | Agent Type | Difficulty | Wow Factor |
|---|-----------|------------|-----------|
| 1 | Lead Qualification Bot | Medium | High |
| 2 | Content Brief Generator | Low | Medium |
| 3 | Competitor Research Agent | Medium | High |
| 4 | Email Personalization Agent | Medium | High |
| 5 | SEO Content Generator | Low | Medium |
| 6 | Social Media Repurposer | Low | Medium |

---

## 🏗️ Build Path Choice

| You Want... | Pick |
|-------------|------|
| Most control + dev signal | **Cursor + Python + Claude API** |
| Fast, no-code-ish | **Replit Agent + Claude API** |
| Free Cursor alternative | **VSCode + Continue.dev** |
| Minimal coding | **Make.com + Claude HTTP module** (weaker signal) |

Default: **Cursor + Python + Claude API**.

---

## 📦 GitHub Repo Structure

```
ai-marketing-agent/
├── README.md
├── agent.py
├── prompts/
│   └── *.txt or *.md
├── examples/
│   └── sample_output.md
├── requirements.txt
├── .env.example
└── .gitignore (with .env)
```

---

## 📝 README Outline

```
# [Agent Name]
[Tagline]

## What It Does
[2-3 sentences]

## Demo
[Loom link]

## Example Output
[Link to examples/]

## How To Run
[3-step setup + run]

## Architecture
[High-level summary]

## Cost
[Per-run + scaling]

## Limitations
[What it doesn't do]

## Author
[You + portfolio link]
```

---

## 🎥 Loom Outline (3–5 min)

```
0:00, Hook: "Here's a [thing] I built that does X in Y seconds."
0:30, Show repo briefly.
1:00, Run it live + show output.
2:30, Explain one prompt-engineering decision.
4:00, Limitations + v2.
4:30, CTA: "Repo at [link]."
```

---

## 🚨 Anti-Patterns To Avoid

- ❌ Generic "ChatGPT wrapper" (no specific use case)
- ❌ Single API call (not actually "agent")
- ❌ Private repo / local only
- ❌ Leaked API keys
- ❌ No README (the front door)
- ❌ No Loom (recruiters watch, not run)
- ❌ No examples folder
- ❌ Used Cursor but lied about authorship
- ❌ No cost analysis
- ❌ No error handling

---

## 💰 Cost Estimating Cheat Sheet

**Claude 3.7 Sonnet:**
- ~$3 / 1M input tokens
- ~$15 / 1M output tokens

**Per-call rough math:**
- Small (2k in, 500 out): ~$0.014
- Medium (5k in, 1.5k out): ~$0.038
- Large (15k in, 3k out): ~$0.090

**Document this in README. Recruiters notice.**

---

## 🚨 Security Checklist

```
□ .env in .gitignore (verified)
□ API key never in code (use os.environ)
□ git log scanned for accidental commit of keys
□ If leaked: rotate the key + use git-filter-branch
□ Rate limit if web-accessible
□ Robots.txt respected if scraping
```

---

## 📝 Case Study Page Structure

```
[Hero: screenshot of agent output OR architecture diagram]

## Problem
[What manual task takes hours that this can replace?]

## Constraints
[Tools available, budget, language choice]

## Approach
[Architecture: input → process → output. Prompt engineering decisions.
 Why this tool stack.]

## Result
[Sample input → output. Quality measurement (X/10 rated successful). 
 Time saved estimate. Cost per run.]

## Lessons
[Where it fails. v2 ideas (3+).]

## Artifacts
- 📦 GitHub repo (public)
- 🎥 Loom demo
- 📄 README
- 💰 Cost breakdown
```

---

## 🏆 Power Phrases For Writeup & Pitch

- ✅ "Multi-step agent: scrape → analyze → format..."
- ✅ "System prompt enforces structured JSON output..."
- ✅ "Cost per run is ~$X; replaces ~Y hrs of senior marketing time..."
- ✅ "Rated 10 sample outputs: 7 ship-ready, 2 need editing, 1 broken, v2 fixes..."
- ✅ "Built with Cursor as pair-programmer; ~70% AI-generated, all reviewed..."

Avoid:

- ❌ "I made a ChatGPT thing..."
- ❌ "It uses AI..."
- ❌ "Pretty straightforward setup..."
- ❌ "Works great, no issues..."
- ❌ "Built it from scratch" (when you used Cursor, be honest)

---

## ✏️ Quick Self-Check

1. Repo URL: ___
2. Loom URL: ___
3. Use case: ___
4. Multi-step: yes/no
5. Cost per run: ___
6. .env verified excluded: yes/no

---

## 🎤 90-Second Pitch (Practice)

```
"I built [agent name], a Python script using Claude API that takes [input], 
performs [N steps], and outputs [output format]. Repo public on GitHub.
Replaces ~[X hrs of manual work / $Y in time]. Per-run cost ~$Z. 
First version had [specific issue]; v2 added [specific fix]. 
Built with Cursor as pair-programmer; reviewed every line."
```

5 reps. Internalize.

---

➡️ [Module 7: Personal Brand & Online Presence](../Module-07-Personal-Brand-Online-Presence/Reading.md)
