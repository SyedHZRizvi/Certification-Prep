# Module 5: Capstone 4 — Multi-Touch Attribution Model 📊

> **Why this module matters:** This is the "are you actually analytical?" capstone. Most marketers claim to be data-driven; very few have built an attribution model from scratch. Doing it once — even on small sample data — separates you immediately.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - [Portfolio strategy & P-C-A-R-L format](../Module-01-Portfolio-Strategy-What-To-Build/Reading.md) — covered earlier in this course
> - Marketing analytics & GA4 basics (events, sessions, source/medium) — covered in [17-AI-Marketing-Analytics-Automation Module 1](../../17-AI-Marketing-Analytics-Automation/Module-01-Tracking-Foundations/Reading.md) and Module 3
> - Spreadsheet formulas (QUERY, SUMPRODUCT, SUMIF) — covered in [17-AI-Marketing-Analytics-Automation Module 2](../../17-AI-Marketing-Analytics-Automation/Module-02-Spreadsheet-Power-Tools/Reading.md)
> - Optional but recommended: Python / pandas basics if you're choosing the Colab path
> If any of these are shaky, pause and review — Markov chain math is hard enough without also fighting GA4 exports or VLOOKUP.

---

## 🎬 A Story: The Marketer Who Won The Budget War

Picture a Series B SaaS startup mid-2026. Marketing team is being asked to defend their channel mix to a new CFO. Paid social budget = $40k/mo, content/SEO = $25k/mo, partnerships = $15k/mo.

The CFO opens with: *"All your tracking says 'last-click attribution.' That means Google is getting credit for every customer that searched our brand name after seeing a Meta ad. I'm cutting paid social by 60% until you can prove it actually does anything."*

The marketing team panics. They have GA4 reports, HubSpot reports, Mixpanel funnels — but every report defaults to last-click. They can't actually prove paid social drives anything beyond the conversion moment.

One marketer on the team — let's call them Aisha — disappears for 4 days. She comes back with a Google Sheet. It has:

- Anonymized customer journey data from the last 12 months
- A Markov-chain attribution model built in Sheets
- A Shapley-value attribution calculation
- A side-by-side comparison: Last-Click vs Linear vs Time-Decay vs Markov vs Shapley
- A clear answer: paid social is generating 23% of "first-touch" customer journeys, but last-click only credits it 4% — making it look like a money pit when it isn't

The CFO doesn't cut the budget. Aisha gets the senior analyst promotion that quarter.

The math wasn't fancy. The fact she could build it was the whole signal.

---

## 🎯 What You're Building In Module 5

**Deliverable:** A public multi-touch attribution model showing:

1. **Sample data** — 100–500 anonymized customer journeys (real or realistic)
2. **At least 3 attribution models compared** — Last-click, Linear, AND either Markov chain or Shapley value
3. **Built in Google Sheets OR a Colab notebook (Python)** — both work
4. **A simple dashboard** — table + chart showing channel credit under each model
5. **A walkthrough video** (~5–8 min Loom)
6. **A case study writeup** — P-C-A-R-L, published on portfolio

**Total time:** ~8 hours.

---

## 📊 Attribution Models — A Quick Primer

Before you build, understand what each model does. Hiring managers will quiz you.

### 1. Last-Click Attribution

**Rule:** 100% of credit to the FINAL touchpoint before conversion.

**Pros:** Simple, easy to implement, this is what GA4 and most CRMs default to.

**Cons:** Completely ignores everything that happened before the final click. Massively under-credits awareness channels.

**Best for:** Bottom-of-funnel-only businesses (e.g., emergency plumbing — there is no "consideration phase").

### 2. First-Click Attribution

**Rule:** 100% of credit to the FIRST touchpoint.

**Pros:** Honors discovery channels.

**Cons:** Under-credits closing channels.

### 3. Linear Attribution

**Rule:** Equal credit to every touchpoint in the journey.

**Pros:** Simple, no bias, easy to communicate.

**Cons:** Treats a banner ad seen once the same as a 30-min product demo.

### 4. Time-Decay Attribution

**Rule:** More credit to touchpoints closer to conversion (exponential decay).

**Pros:** Reflects the intuition that recent touches matter more.

**Cons:** Still under-credits awareness; decay rate is arbitrary.

### 5. Position-Based (U-Shaped) Attribution

**Rule:** 40% to first touch, 40% to last touch, 20% spread across middle.

**Pros:** Recognizes both discovery and conversion.

**Cons:** Still simplistic — assumes the middle doesn't matter much.

### 6. Markov Chain Attribution (Data-Driven)

**Rule:** Calculates "removal effect" — for each channel, how much would conversion rates drop if you removed that channel from the journey?

**Pros:** Data-driven, accounts for paths and dependencies, considered fair by most analysts.

**Cons:** Requires enough data, harder to compute.

### 7. Shapley Value Attribution (Data-Driven)

**Rule:** Game-theoretic fair-share calculation — each channel gets the average marginal contribution it makes across all possible coalition orderings.

**Pros:** Mathematically proven to be the "fairest" allocation.

**Cons:** Computationally expensive (factorial); typically approximated.

---

## 🎯 The 3 Models You'll Compare In Your Capstone

For portfolio purposes, build:

1. **Last-Click** (baseline — easy)
2. **Linear** (slightly more sophisticated — easy)
3. **Markov Chain** OR **Shapley Value** (the impressive one — moderate difficulty)

The contrast is the punchline. You'll show that channel rankings change dramatically depending on which model you use.

---

## 📋 The Sample Data

You'll need a customer-journey data set. Three options:

### Option A: Use Your Own Data (Best)

If you have an e-commerce site, agency, or SaaS that uses Google Analytics 4 or Mixpanel, export real data:

1. GA4: Reports → Explore → Custom report with `User pseudo ID`, `Event name`, `Session source / medium`, `Timestamp`.
2. Mixpanel: Cohorts → Export user journey events.
3. Anonymize (replace user IDs with `user_001`, etc.).

### Option B: Use A Public Sample Dataset

These are free and good enough for this capstone:

- **Google Analytics Sample Dataset** (BigQuery public) — real e-commerce data from Google Merch Store
- **Olist Brazilian E-commerce Dataset** (Kaggle) — 100k orders with channel data
- **Criteo Attribution Modeling Dataset** (Kaggle) — designed specifically for attribution

### Option C: Generate Realistic Synthetic Data

If you don't have data and don't want to use a public set, generate ~200 fake customer journeys with realistic patterns. Below is a Python snippet you can run in Colab:

```python
import pandas as pd
import random

channels = ['organic_search', 'paid_search', 'meta_ad', 
            'email', 'direct', 'referral']

def gen_journey():
    n_touches = random.choices([1, 2, 3, 4, 5], 
                                weights=[10, 30, 30, 20, 10])[0]
    return [random.choice(channels) for _ in range(n_touches)]

data = []
for i in range(200):
    user_id = f'user_{i:03d}'
    journey = gen_journey()
    converted = random.choices([0, 1], weights=[70, 30])[0]
    for step, channel in enumerate(journey):
        data.append({
            'user_id': user_id,
            'step': step + 1,
            'channel': channel,
            'converted': converted if step == len(journey) - 1 else 0
        })

df = pd.DataFrame(data)
df.to_csv('attribution_data.csv', index=False)
```

That's 200 customer journeys, weighted realistically. Save the CSV — that's your input data.

---

## 🛠️ Tool Walkthrough 1: Google Sheets Approach

If you don't write Python, Sheets is enough for this capstone. You'll lose Shapley (it's painful in Sheets) but Last-Click + Linear + Markov is doable.

### Step 1: Set Up The Data Sheet

Tab 1: `raw_data`

| user_id | step | channel | converted |
|---------|------|---------|-----------|
| user_001 | 1 | organic_search | 0 |
| user_001 | 2 | email | 0 |
| user_001 | 3 | paid_search | 1 |
| user_002 | 1 | meta_ad | 0 |
| user_002 | 2 | direct | 1 |

Import your sample data here.

### Step 2: Calculate Last-Click Credit

Tab 2: `last_click`

Use SUMIF / QUERY:

```
=QUERY(raw_data, 
       "SELECT channel, COUNT(user_id) 
        WHERE converted = 1 
        GROUP BY channel 
        LABEL COUNT(user_id) 'Last-Click Conversions'")
```

This gives you total conversions credited to each channel under last-click.

### Step 3: Calculate Linear Credit

Tab 3: `linear`

For each converted user:

1. Count their total touches.
2. Each touch gets `1 / total_touches` credit.

In Sheets:
```
=SUMPRODUCT((raw_data.channel = "paid_search") *
            (raw_data.converted_user = 1) /
            COUNTIF(raw_data.user_id, raw_data.user_id))
```

(You'll need a helper column `converted_user` = 1 if any step for that user had converted=1.)

### Step 4: Calculate Markov Chain (Simple Version)

This is harder. The full Markov implementation in Sheets is doable but verbose. Here's the simplified approach:

1. Build a transition matrix: for each (channel_from, channel_to) pair, count how often that transition appears in your data.
2. Compute removal effect: for each channel, simulate removing it and recalculating the conversion probability.
3. Allocate credit proportional to removal effects.

**Easier alternative:** Use a free Google Sheets add-on like "Channel Attribution" or "Funnel Vision" if available. These compute Markov for you.

**OR:** Build it in Python (Colab) — much cleaner.

### Step 5: Build The Dashboard Tab

Tab 4: `dashboard`

| Channel | Last-Click | Linear | Markov |
|---------|-----------|--------|--------|
| organic_search | 12 | 18.4 | 21.7 |
| paid_search | 34 | 22.1 | 19.3 |
| meta_ad | 8 | 14.6 | 17.2 |
| email | 18 | 21.0 | 19.8 |
| direct | 22 | 18.2 | 15.5 |
| referral | 6 | 5.7 | 6.5 |

Add a clustered bar chart comparing all three columns. **This chart is the money shot of your capstone.**

---

## 🛠️ Tool Walkthrough 2: Python / Colab Approach

If you're comfortable with Python, this is faster + cleaner + impressive.

### Step 1: Open Colab

colab.research.google.com → New notebook.

### Step 2: Load Data

```python
import pandas as pd

df = pd.read_csv('attribution_data.csv')
df.head()
```

### Step 3: Last-Click

```python
def last_click_attribution(df):
    converted_users = df[df['converted'] == 1]['user_id'].unique()
    last_touches = df[df['user_id'].isin(converted_users)].groupby(
        'user_id').tail(1)
    return last_touches['channel'].value_counts()

print(last_click_attribution(df))
```

### Step 4: Linear

```python
def linear_attribution(df):
    converted_users = df[df['converted'] == 1]['user_id'].unique()
    converted_journeys = df[df['user_id'].isin(converted_users)]
    
    journey_lengths = converted_journeys.groupby('user_id').size()
    
    credit = {}
    for user_id, group in converted_journeys.groupby('user_id'):
        n = len(group)
        for channel in group['channel']:
            credit[channel] = credit.get(channel, 0) + (1 / n)
    
    return pd.Series(credit).sort_values(ascending=False)

print(linear_attribution(df))
```

### Step 5: Markov Chain

```python
import numpy as np
from collections import defaultdict

def markov_attribution(df):
    # Build journeys with start/conversion markers
    journeys = []
    for user_id, group in df.groupby('user_id'):
        seq = group['channel'].tolist()
        converted = group['converted'].max() == 1
        if converted:
            journeys.append(['start'] + seq + ['conversion'])
        else:
            journeys.append(['start'] + seq + ['null'])
    
    # Build transition matrix
    transitions = defaultdict(lambda: defaultdict(int))
    for journey in journeys:
        for i in range(len(journey) - 1):
            transitions[journey[i]][journey[i+1]] += 1
    
    # Normalize
    transition_probs = {}
    for from_state, to_dict in transitions.items():
        total = sum(to_dict.values())
        transition_probs[from_state] = {
            k: v / total for k, v in to_dict.items()
        }
    
    # Calculate baseline conversion probability
    baseline_p = baseline_conversion_prob(transition_probs)
    
    # Calculate removal effect for each channel
    channels = set(df['channel'].unique())
    removal_effects = {}
    for channel in channels:
        new_probs = remove_channel(transition_probs, channel)
        new_p = baseline_conversion_prob(new_probs)
        removal_effects[channel] = baseline_p - new_p
    
    # Normalize to sum to total conversions
    total_effect = sum(removal_effects.values())
    total_conversions = df['converted'].sum()
    
    credit = {ch: (eff / total_effect) * total_conversions 
              for ch, eff in removal_effects.items()}
    
    return pd.Series(credit).sort_values(ascending=False)

# (baseline_conversion_prob and remove_channel are helper functions —
#  implement using matrix power or recursion)
```

The full Markov implementation is ~50–80 lines. There are also Python libraries that do this for you:

- **ChannelAttribution** (R package, but has Python ports)
- **marketing-attribution-models** (pip install)
- **pychattr** (PyPI)

For the portfolio, **showing your own implementation > importing a library**. But importing is fine if you understand what it's doing.

### Step 6: Visualize

```python
import matplotlib.pyplot as plt

results = pd.DataFrame({
    'Last-Click': last_click_attribution(df),
    'Linear': linear_attribution(df),
    'Markov': markov_attribution(df)
}).fillna(0)

results.plot(kind='bar', figsize=(12, 6))
plt.title('Channel Attribution: Last-Click vs Linear vs Markov')
plt.ylabel('Conversions Credited')
plt.xticks(rotation=45)
plt.tight_layout()
plt.savefig('attribution_comparison.png', dpi=150)
plt.show()
```

That chart goes on the case study page as the hero image.

---

## 🛠️ Tool Walkthrough 3: Shapley Value (Bonus)

If you want to go beyond Markov:

```python
from itertools import combinations
from math import factorial

def shapley_value(df, channel):
    converted_users = df[df['converted'] == 1]['user_id'].unique()
    
    all_channels = set(df['channel'].unique())
    other_channels = all_channels - {channel}
    
    shapley = 0
    n = len(all_channels)
    
    for coalition_size in range(len(other_channels) + 1):
        for coalition in combinations(other_channels, coalition_size):
            coalition_set = set(coalition)
            coalition_with = coalition_set | {channel}
            
            # Count conversions where journey channels ⊆ coalition_with
            v_with = count_journeys_using(df, converted_users, coalition_with)
            v_without = count_journeys_using(df, converted_users, coalition_set)
            
            marginal = v_with - v_without
            
            weight = (factorial(coalition_size) * 
                      factorial(n - coalition_size - 1) / 
                      factorial(n))
            
            shapley += weight * marginal
    
    return shapley
```

Shapley is computationally expensive (factorial), so for >10 channels you'd need to approximate with Monte Carlo. For 6 channels and 200 users, it runs in <30 seconds.

---

## 📈 The Money-Shot Chart

This single chart is what hiring managers will linger on. Build it carefully.

A clustered bar chart with:

- X-axis: channel names
- Y-axis: conversions credited
- Grouped bars: Last-Click / Linear / Markov (or +Shapley)
- Different colors per model
- Title: "Channel Credit Changes Depending on Attribution Model"

Then in the writeup, walk through the most surprising delta. Example:

*"Paid social gets only 8 conversions under last-click but 17 under Markov. The model is telling us that paid social is doing a LOT of the awareness work, but isn't getting credit at close — because Google search captures the converting click after the user comes back."*

That insight is the whole capstone.

---

## 📝 The Case Study Writeup

```
[Hero: the comparison chart]

## Problem
[Context: business needs to defend channel mix? Or just answer "what's working?"]

## Constraints
[Sample data size, sources, what tooling you used]

## Approach
- Data prep methodology (anonymization, journey reconstruction)
- Model choice rationale
- Implementation overview (link to spreadsheet or notebook)

## Result
[The chart + 2–3 sentence interpretation of each model's verdict]

## Lessons
[Limitations: data size, what assumptions break, what'd you'd add at v2]

## Artifacts
- 📊 Public Google Sheet OR Colab notebook
- 🎥 Walkthrough video
- 📈 Comparison chart (PNG)
- 📄 Methodology PDF (optional but classy)
```

---

## 🎥 The Walkthrough Video (5–8 min)

Same format as Module 4's Loom. Hook → data → models → comparison → insight.

The "magic moment" of this video: when you toggle between the 3 model tabs and the channel ranking visibly changes. **That contrast is what sells the entire piece.**

---

## ⚠️ Common Mistakes To Avoid

| Mistake | Fix |
|---------|-----|
| Only built Last-Click | Need 3+ models to show comparison |
| Used real customer data without anonymizing | Anonymize IDs. Or use public sample dataset. |
| Markov implementation is wrong | Test with a toy example you can hand-compute |
| Didn't visualize the comparison | The chart IS the capstone |
| Wrote 0 lines of commentary | Numbers don't speak for themselves — add interpretation |
| Made spreadsheet "view only" but not public | Set to "anyone with link can view" |
| Forgot to share the Colab notebook publicly | Click Share → "Anyone with link" |
| Picked a use case that has no journeys (e.g., pure last-click search business) | Pick a use case where multi-touch is plausible |

---

## 🚨 Privacy Gotchas

If you're using REAL customer data:

- ❌ Don't include real names, emails, IPs, or phone numbers
- ❌ Don't include geographic data finer than country
- ❌ Don't include exact timestamps (round to day)
- ✅ Replace user IDs with sequential pseudo-IDs (`user_001`, `user_002`)
- ✅ Generalize channel sources (don't expose internal campaign names)
- ✅ Get written consent if the data isn't yours

When in doubt, use a public sample dataset or generate synthetic data. The portfolio piece is just as strong.

---

## 🎤 The 90-Second Pitch

```
[CONTEXT]: "I built a multi-touch attribution model in Google Sheets / 
            Python comparing Last-Click, Linear, and Markov Chain 
            attribution on [data source]."

[PROBLEM]: "Last-click was massively under-crediting awareness channels. 
            CFO was about to cut paid social by 60% based on its terrible 
            last-click numbers."

[APPROACH]: "Anonymized 200 customer journeys, ran 3 models in parallel, 
             visualized the channel-credit deltas in a clustered bar chart."

[RESULT]: "Paid social moved from 8% of credit under last-click to 23% 
          under Markov. Saved the budget. The insight was that paid 
          social was the initial-discovery channel for 40% of converters."

[LESSON]: "Markov assumes Markov property — past sequence doesn't matter 
          beyond the previous step. That's a simplification. For v2 I'd 
          add Shapley to cross-check."
```

---

## 🎓 Key Terms To Know

| Term | Definition |
|------|------------|
| **Attribution** | Assigning credit for conversions across touchpoints |
| **Touchpoint** | An interaction in a customer journey (ad click, email open, etc.) |
| **Customer journey** | Ordered sequence of touchpoints leading to (or not leading to) conversion |
| **Last-click attribution** | 100% credit to final touchpoint |
| **First-click attribution** | 100% credit to initial touchpoint |
| **Linear attribution** | Equal credit across all touchpoints |
| **Time-decay attribution** | More credit to touches closer to conversion (exponential decay) |
| **U-shaped / Position-based attribution** | 40/40/20 split (first / last / middle) |
| **Markov chain attribution** | Data-driven; uses removal effect on conversion probability |
| **Shapley value attribution** | Game-theoretic fair-share allocation |
| **Removal effect** | Drop in conversion probability when a channel is removed |
| **Transition matrix** | Markov chain's table of probabilities of going from state A to state B |
| **Multi-touch attribution (MTA)** | Any attribution model that credits >1 touchpoint |
| **Media mix modeling (MMM)** | Statistical alternative to MTA; uses aggregate data |
| **Incrementality** | The "lift" caused by a marketing activity vs no activity |

---

## ✅ Module 5 Summary

You now know:

- 📊 Why attribution matters (and why last-click is often wrong)
- 🧮 The 7 attribution models + their trade-offs
- 🛠️ How to build Last-Click, Linear, and Markov in Sheets or Python
- 📈 How to visualize the comparison so the insight is unmissable
- 🚨 Privacy gotchas when using real data
- 🎯 What hiring managers care about (the comparison chart + your interpretation)

**Next steps:**
1. 🎥 Watch the videos in `Videos.md`
2. 🛠️ Build the model (8 hours, choose Sheets or Python)
3. 📈 Create the comparison chart
4. 🎥 Record the Loom
5. ✏️ Use `Quiz.md` to self-evaluate
6. ➡️ Move to [Module 6: AI Agent Build](../Module-06-Capstone-AI-Agent-Build/Reading.md)

---

## 📚 Further Reading (Optional)

- 📖 [Avinash Kaushik — Multi-Channel Attribution](https://www.kaushik.net/avinash/) — the OG reference
- 📖 [Markov Chains for Marketing Attribution (Towards Data Science)](https://towardsdatascience.com/) — math walkthrough
- 📖 [Google Analytics 4 — Attribution Reports](https://support.google.com/analytics/answer/10596866) — official docs
- 📖 [Shapley Value paper applied to marketing](https://arxiv.org/) — academic foundation
- 📖 [The Criteo Attribution Modeling Dataset (Kaggle)](https://www.kaggle.com/datasets/criteo-research/criteo-attribution-modeling-bidding-dataset) — public data for practice

---

## Discussion — Socratic prompts

These prompts probe whether you understand the *limits* of attribution modeling, not just how to compute it. That's what separates an analyst from a junior with a spreadsheet.

1. **The reading says Markov Chain attribution is "data-driven, considered fair by most analysts" and contrasts it with Last-Click.** But Markov makes a strong assumption — the *Markov property* (the future depends only on the present state, not the full history). For real marketing journeys (email → blog → ad → search → conversion), is this assumption a reasonable simplification or a fatal flaw? When would you use Markov anyway, and when would you reach for Shapley despite the compute cost?
2. **The capstone asks for 100–500 customer journeys.** A senior analyst would say that's far too few for Markov to produce stable results — you need 1,000+ for reliable transition probabilities. Should the capstone be honest about this limitation in the writeup, or does the small sample size invalidate the portfolio piece? How would you frame the trade-off to a skeptical interviewer?
3. **The "money-shot chart" — the clustered bar chart comparing Last-Click vs Linear vs Markov — is presented as the centerpiece of the capstone.** A statistician might point out that without confidence intervals, three different-looking bars could be statistical noise. Should the chart include error bars? If you add them, does the story change?
4. **Multi-Touch Attribution (MTA) and Media Mix Modeling (MMM) are increasingly seen as alternatives.** MTA needs user-level data (cookies, identifiers); MMM uses aggregate channel spend. With cookie deprecation and privacy laws (GDPR, CCPA, iOS 14.5+), MTA is getting harder every quarter. Is this capstone teaching a method that will be obsolete in 3 years? Defend "build MTA anyway because the *thinking* transfers to MMM" — or argue it's miseducation.
5. **The reading frames attribution as a budget-defense tool ("CFO was about to cut paid social by 60%").** A counter-view: attribution models are *political* artifacts — every team picks the model that makes their channel look best. Last-click favors closing-channel teams; first-click favors brand teams. Is "the most fair attribution model" a real thing, or is fairness in the eye of the budget-defender? How would you handle this tension in a CFO presentation?

---

> **Where this leads.**
> - Inside this course: Module 6 (AI Agent) — you can build an agent that *automates attribution analysis* from a raw CSV input. That's a fun stretch goal. Module 7 features the comparison chart as a recommended portfolio hero image.
> - Cross-course: [17-AI-Marketing-Analytics-Automation Module 3](../../17-AI-Marketing-Analytics-Automation/Module-03-Customer-Data-Journey/Reading.md) covers the customer-journey data layer this capstone consumes. Module 4 covers dashboards where attribution outputs typically live.
> - Practice: Practice Exam 1 has 3 questions on this capstone (Q14–Q16, Q33). The Final Mock's Q3 ("difference between Last-Click and Markov") and Q20 ("comfort with data analysis") both expect the depth this capstone builds.
