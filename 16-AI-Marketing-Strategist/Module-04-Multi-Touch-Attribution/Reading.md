# Module 4: Multi-Touch Attribution 🎯

> **Why this module matters:** Attribution is the single most contested measurement domain in marketing. Last-click attribution the default for two decades over-credits bottom-funnel channels by 30–60% and starves the upper-funnel that grows the brand. Multi-touch attribution (MTA) was the 2010–2020 fix. By 2026 we know MTA is itself a flawed approximation, and the strategist's job is to *combine* MTA + MMM + incrementality with full awareness of each method's limits. This module teaches that combination at depth.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Basic probability and conditional probability (`P(A|B)` is intuitive), high-school stats refresher is enough.
> - GA4's data model and Key Events from [Module 3](../Module-03-GA4-Mastery-Custom-Events/Reading.md), DDA runs on top of these.
> - Server-side tracking + CAPI concepts from [Module 2](../Module-02-CDP-Server-Side-Tracking/Reading.md), your MTA accuracy depends on what survives the privacy stack.
> - A reading-level familiarity with linear regression, covered at intro depth in [Course 15 Module 1: Campaign Strategy & Brief Writing](../../15-AI-Marketing-Practitioner/Module-01-Campaign-Strategy-Brief-Writing/Reading.md).
> If Shapley values or Markov chains are new to you, that's expected, this module teaches both from first principles.

---

## 🧦 A Story: How Stitch Fix's Attribution Model Cost and Then Saved $80M

January 2019. Stitch Fix has been growing 25% YoY using last-click attribution. The model says paid search (branded + non-branded) drives 47% of acquisition. The CMO doubles search budget. Q1 revenue grows 8%, below the 25% trend. Q2 grows 4%. The CMO is fired.

The new VP of Marketing Science runs a holdout test: turn off paid search in three test geos. In two of three, organic + direct traffic absorbs ~85% of the lost paid-search clicks within 14 days. *Paid search was cannibalizing organic.* Last-click had been crediting paid search with conversions that would have happened anyway. The team had been over-investing in a channel that was largely *incremental zero*.

The fix:

1. Replace last-click with a **data-driven attribution (DDA) model** built on Shapley values + Markov chains. New view of paid search incremental contribution: 18% (not 47%).
2. Reallocate ~$80M annually to upper-funnel (paid social, podcast, brand TV).
3. Build a quarterly **geo-holdout incrementality test** to validate the MTA output.

Within 18 months Stitch Fix is back at 22% YoY growth and the new VP is promoted to CMO. The episode is now a Harvard case study used in MBA programs (Harvard Business School Case 9-521-002, 2021).

**The lesson:** Your attribution model is *a story you choose to tell*. Last-click tells a story that flatters the bottom of the funnel. Data-driven attribution + incrementality testing tells a story closer to the truth.

---

## 🎯 The Attribution Taxonomy

Six canonical attribution models. The first five are *rule-based*; the sixth is *data-driven*. Memorize all six.

| Model | Rule | When it makes sense |
|-------|------|---------------------|
| **Last-click** | 100% credit to the final touchpoint | Direct-response, one-touch funnels |
| **First-click** | 100% credit to the first touchpoint | Pure brand-awareness measurement |
| **Linear** | Equal credit to every touchpoint | When you genuinely don't know which matters |
| **Time-decay** | More credit to recent touches (exponential decay) | When recency matters (e.g., flash sales) |
| **Position-based (U-shaped)** | 40/20/40, first / middle (split) / last | When start and end both matter |
| **Data-driven (DDA)** | Probabilistic credit based on observed paths | The default when you have enough data |

⚠️ **Trap on the exam:** Position-based is sometimes called "U-shaped." When the first + last get 40% each and the middle 20%, it's U-shaped. The 22.5/22.5/22.5/22.5/10 variant is "W-shaped" (credits 22.5% to first + lead + opportunity-creation + last + 10% middle).

### Worked example, comparing models on one path

A customer's path before purchase, in order: Display ad → Organic search → Email open → Paid search → Purchase.

| Model | Display | Organic | Email | Paid search |
|-------|---------|---------|-------|-------------|
| Last-click | 0 | 0 | 0 | **100%** |
| First-click | **100%** | 0 | 0 | 0 |
| Linear | 25% | 25% | 25% | 25% |
| Time-decay (24h half-life, all within 3 days) | ~7% | ~13% | ~25% | ~55% |
| Position-based | **40%** | 10% | 10% | **40%** |
| Data-driven (illustrative) | 12% | 18% | 28% | 42% |

🎯 **Strategist's insight:** Every model gives a different answer to "what drove this sale?" There is no objectively correct answer, only models with different assumptions. The Data-Driven model is the closest to ground truth *only if the underlying probability model is well-fit*, which is a real "if."

---

## 🧮 Data-Driven Attribution, How It Actually Works

Three mathematical approaches to data-driven attribution. You will be asked about all three.

### Approach 1: Shapley Values (cooperative game theory)

Lloyd Shapley's 1953 paper on cooperative-game theory gives a unique, fair way to distribute the "winnings" among a coalition of players. Each player gets their **marginal contribution averaged over every possible ordering of the coalition**.

Translated to marketing: each channel is a player. The "winnings" = the conversion. The Shapley value of channel `i` is its average marginal contribution to conversions across every permutation of channels in the customer journey.

**Math (simplified):**

```
φ_i(v) =  (1 / |N|!)  ·  Σ_{S ⊆ N\{i}}  |S|! · (|N|-|S|-1)! · [v(S ∪ {i}) - v(S)]
```

where:

- `N` = set of all channels
- `S` = a subset of channels not including `i`
- `v(S)` = the conversion probability given channels in `S` were touched
- `v(S ∪ {i}) - v(S)` = the *marginal contribution* of adding channel `i`

In plain English: simulate every order in which the channels could have shown up, see how often adding channel `i` to a partial path leads to a conversion that wouldn't have happened otherwise, and average across all simulations.

Computational cost: factorial in the number of channels. For 6 channels, 720 permutations per user-path. For 10 channels, 3.6M permutations. In practice, **sampling-based approximations** are used (Štrumbelj & Kononenko 2014).

### Approach 2: Markov Chains

Treat the customer journey as a **state-transition graph**. Channels are states. The transition matrix gives the probability of moving from state A to state B. The credit assigned to channel `i` is the **drop in conversion probability** if state `i` is removed from the graph (the "removal effect").

```
Removal effect of channel i  =  (P_conv with i present  -  P_conv with i removed)
                                / P_conv with i present
```

This computes how *essential* each channel is to the overall conversion machinery.

**Worked example:**

Suppose we observe 1,000 user journeys. The Markov model estimates:

- Total conversion probability: 0.10 (100 conversions / 1,000 journeys).
- Conversion probability if "Display" is removed from the graph: 0.085.
- Removal effect of Display: (0.10 − 0.085) / 0.10 = 15%.

Total removal effects across all channels are normalized to sum to the actual number of conversions.

### Approach 3: ML-based / deep-learning attribution

Modern vendors (Google's GA4 DDA, Northbeam, Rockerbox) use **gradient-boosted trees, deep neural networks, or transformer models** trained to predict conversion probability given a path. The contribution of each channel is then extracted via **SHAP values** (a generalization of Shapley to ML) or **LIME**.

| Approach | Pros | Cons |
|----------|------|------|
| Shapley | Fair (game-theory axioms), interpretable | Computationally expensive |
| Markov | Fast, intuitive | Markov assumption (next state depends only on current) is a simplification |
| ML / SHAP | Captures non-linearities, interactions | Requires lots of data; harder to explain to execs |

---

## 🤖 GA4's Data-Driven Attribution

GA4 ships with a built-in DDA model. The model:

1. Uses a **deep neural network** trained on your property's conversion data.
2. Considers up to **50 touchpoints** before conversion within a 30-day window.
3. Outputs **fractional credit** per channel per conversion.
4. Is the *default* attribution model in GA4 Advertising → Attribution settings since 2023.

⚠️ **Volume threshold (critical for the exam):** GA4 DDA requires **at least 400 conversions per conversion type within 30 days** to train the model. Below this threshold, GA4 falls back to last-click. Most small properties never see DDA in action because they don't hit this threshold.

**How to check if your property qualifies:**
```
GA4 → Admin → Attribution Settings → Reporting Attribution Model
  → If "Data-driven" is available without a warning, you've passed the threshold.
```

GA4's DDA output flows directly into Google Ads conversion-bid optimization when you link the accounts. This is one of the biggest benefits of using GA4 + Google Ads as a stack, the bid algorithm uses the same DDA values you see in reports.

---

## 🐍 A Worked Python Example, Markov-Chain Attribution

Let's build a Markov-chain attribution model from scratch. (Real code; you can run this on a Pandas-style dataset.)

```python
import pandas as pd
import numpy as np
from collections import defaultdict

# Sample data: each row is a user journey, channels as a list
journeys = pd.DataFrame({
    'user_id': [1, 2, 3, 4, 5, 6, 7, 8],
    'path':    [['Display','Search','Purchase'],
                ['Email','Purchase'],
                ['Search','Purchase'],
                ['Display','Email','Search','Purchase'],
                ['Display','NULL'],     # dropoff (NULL = no conversion)
                ['Search','NULL'],
                ['Email','Display','Search','Purchase'],
                ['Display','NULL']]
})

# Step 1: Build transition matrix from paths
def build_transition_matrix(paths):
    transitions = defaultdict(lambda: defaultdict(int))
    for path in paths:
        # Add Start state at the beginning
        states = ['Start'] + path
        for i in range(len(states) - 1):
            transitions[states[i]][states[i+1]] += 1
    # Normalize rows to probabilities
    matrix = {}
    for src, dests in transitions.items():
        total = sum(dests.values())
        matrix[src] = {dest: cnt/total for dest, cnt in dests.items()}
    return matrix

matrix = build_transition_matrix(journeys['path'].tolist())

# Step 2: Compute conversion probability via random walk simulation
def conversion_probability(matrix, n_simulations=10000):
    conversions = 0
    for _ in range(n_simulations):
        state = 'Start'
        while state not in ('Purchase', 'NULL'):
            if state not in matrix:
                break
            probs = matrix[state]
            state = np.random.choice(list(probs.keys()), p=list(probs.values()))
        if state == 'Purchase':
            conversions += 1
    return conversions / n_simulations

base_p = conversion_probability(matrix)
print(f"Base conversion probability: {base_p:.4f}")

# Step 3: Compute removal effect for each channel
channels = ['Display', 'Email', 'Search']
removal_effects = {}
for ch in channels:
    # Build matrix with channel removed (re-route to next state)
    altered = {}
    for src, dests in matrix.items():
        if src == ch:
            continue
        new_dests = {}
        for dest, p in dests.items():
            if dest == ch:
                # re-route to NULL (lost conversion path)
                new_dests['NULL'] = new_dests.get('NULL', 0) + p
            else:
                new_dests[dest] = p
        altered[src] = new_dests
    p_without = conversion_probability(altered)
    removal_effects[ch] = (base_p - p_without) / base_p

# Step 4: Normalize to sum to 100%
total_re = sum(removal_effects.values())
attribution = {ch: re_val / total_re for ch, re_val in removal_effects.items()}

print("Channel attribution shares:")
for ch, share in attribution.items():
    print(f"  {ch}: {share*100:.1f}%")
```

In production, you'd run this against millions of paths and use libraries like **ChannelAttribution** (R) or roll your own with **PyMarketing** (Python).

---

## 🏪 The MTA Vendor Landscape (2026)

| Vendor | Focus | Approach | Price tier |
|--------|-------|----------|-----------|
| **Rockerbox** | Mid-market & enterprise | MTA + MMM + incrementality unified | $$$ ($60K–$300K/yr) |
| **Northbeam** | DTC e-commerce | Hybrid MTA/MMM, "Performance Score" | $$ ($30K–$150K/yr) |
| **Triple Whale** | Shopify DTC | Pixel + post-purchase survey hybrid | $ ($5K–$30K/yr) |
| **Hyros** | Info products / coaches | Click-tracking heavy, last-touch hybrid | $ ($5K–$40K/yr) |
| **Wicked Reports** | DTC | Last-touch + first-touch hybrid | $$ ($15K–$60K/yr) |
| **Measured** | Enterprise | Incrementality + MMM (NOT MTA) | $$$ ($100K+/yr) |
| **Branch / AppsFlyer / Adjust** | Mobile app MMP | Postback MTA | $$ ($20K–$100K/yr) |

⚠️ **What most teams get wrong:** Buying Triple Whale or Hyros expecting it to be a *measurement* tool when it's actually a *dashboard* on top of partly-modeled click data. These tools are useful, but their "MTA" is less rigorous than Rockerbox / Northbeam / Measured. The strategist's job is to understand what's *in the box* before signing the contract.

### What "Mobile MMP" (Branch / AppsFlyer / Adjust) does

Mobile measurement partners (MMPs) handle **postback** attribution for mobile apps:

- When a user installs your app from an ad, the ad network sends a "postback" to the MMP.
- The MMP de-duplicates across networks (so Meta and TikTok don't both claim the same install).
- On iOS, the MMP uses **SKAdNetwork** (Apple's privacy-preserving install attribution), covered in Module 9.

If you don't have a mobile app, you can skip MMPs entirely. If you do, MMP selection is as important as CDP selection.

---

## ⚖️ MTA's Honest Limitations

This is the section nobody talks about enough, and the section that earns you respect when you raise it in interviews.

1. **MTA cannot measure channels with no click**. Brand TV, billboards, podcast hosts speaking your brand, none generate a clickable touchpoint. MTA gives them 0% credit by design. *They are not zero impact.*
2. **MTA over-credits trackable channels at the expense of untrackable ones**. By construction. Always.
3. **MTA requires accurate touchpoint data**. iOS ATT, 7-day cookie cap, ad blockers, view-through visibility, all degrade the input. Bad input → wrong attribution.
4. **MTA cannot measure incrementality directly**. It models *correlation* between touchpoints and conversions. Holdout tests measure *causation*. These are different.
5. **MTA cannot capture "halo" effects**, when a TV ad boosts search-click conversion rate without being clicked itself.
6. **Most MTA vendors disagree by 20–60%** on the same data because their model assumptions differ.

🎯 **Memorize this.** When asked "which attribution model is right?", the senior answer is *"It depends on what we're trying to measure. For trackable, click-driven channels we use DDA. For brand and untrackable channels we use MMM. To validate either we run incrementality tests."* That answer alone differentiates you from 80% of marketers.

---

## 🧪 Incrementality Testing, The Ground Truth

An **incrementality test** measures the *causal* impact of a marketing intervention by withholding it from a randomized hold-out group. Three canonical designs:

### 1. Geo holdout (also called "matched markets")

Randomly assign some geographic regions (DMAs in the US) to a "treatment" group and others to "control". Run the campaign only in treatment geos. Compare revenue between groups, scaled by population.

Statistical floor: typically need **≥20 matched DMAs** for adequate power.

### 2. PSA test (public service announcement)

In digital channels, the "control" group receives a **PSA ad** (an unrelated public-service creative, e.g., World Wildlife Fund) instead of your brand. The control group is *exposed to an ad* but not your ad. This isolates the *creative* effect.

### 3. Conversion lift test (Meta / Google Ads built-in)

Both Meta and Google Ads have built-in conversion-lift testing, they randomly hold out X% of the addressable audience from seeing your ads and report the lift in conversions among the exposed group versus the hold-out.

**Meta's Conversion Lift Test setup:**
```
Ads Manager → Experiments → New Test → Conversion Lift
  Budget: $50K minimum (Meta's typical threshold)
  Duration: 4–6 weeks
  Cells: 1 treatment + 1 holdout (or multi-cell)
  Outcome metric: Purchases / leads / installs
```

The output: an absolute lift in conversions (e.g., "the campaign drove 1,820 incremental purchases at a 95% confidence interval of [1,460, 2,180]") and a cost-per-incremental-conversion.

⚠️ **Strategist's bar:** Incrementality testing is the only measurement that produces *causal* evidence. MTA and MMM are observational. Every senior measurement strategy should reserve **5–10% of media spend** for incrementality testing, treating it as a tax that buys validation.

---

## 🔄 The 2026 Measurement Triangle

The modern strategist combines three views:

```
                MTA (Multi-Touch Attribution)
                   ↑
                   │  daily/weekly, channel-level
                   │  high-frequency, click-based
                   │  WRONG ABOUT MAGNITUDE
                   │
INCREMENTALITY  ←──┼──→  MMM (Marketing Mix Modeling)
   ↑                        ↑
   │ quarterly,             │ weekly, channel-level
   │ campaign-level         │ low-frequency, aggregate
   │ CAUSAL TRUTH           │ HOLISTIC INCLUDING TV
   │ EXPENSIVE
   │                        │
```

| Use MTA when | Use MMM when | Use Incrementality when |
|--------------|--------------|-------------------------|
| Click-based digital channels | Mix includes TV/radio/OOH/podcast | Need causal evidence |
| Daily/weekly bid decisions | Quarterly budget allocation | Validating MTA / MMM |
| Path-level questions | Channel-level questions | High-stakes ROI defense |

**Reconciliation rule:** If MTA says paid search drove 47% of conversions and MMM says 18%, **MMM is closer to the truth for budget allocation**, but MTA is fine for *tactical bid* decisions inside paid search. They are answering different questions.

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "DDA is just a fancy last-click" | DDA distributes credit across the path; last-click gives 100% to one touchpoint |
| "MTA measures incrementality" | MTA measures *correlation*. Incrementality measures *causation*. |
| "We can compare MTA outputs across vendors" | Vendor outputs diverge by 20–60% on the same data, apples to oranges |
| "Once we have DDA we don't need MMM" | DDA cannot see TV, billboards, podcasts. MMM can. |
| "Position-based and W-shaped are the same" | U-shaped (position-based) = 40/20/40. W-shaped = 22.5 × 4 + 10% middle. |
| "GA4 DDA works for everyone" | Requires 400+ conversions per type in 30 days. Most small properties never qualify. |
| "Triple Whale = Rockerbox quality" | Different rigor levels. Read the methodology before buying. |

---

## 🎓 Key Terms To Know

| Term | Definition |
|------|------------|
| **MTA** | Multi-Touch Attribution, assigning fractional credit across touchpoints |
| **DDA** | Data-Driven Attribution, fractional credit determined algorithmically |
| **Last-click / First-click** | Heuristic models giving 100% credit to last/first touch |
| **Linear / Time-decay / Position-based** | Heuristic models with different rules |
| **U-shaped / W-shaped** | Position-based variants (40/20/40 vs 22.5×4+10) |
| **Shapley value** | Cooperative game-theory credit allocation (Shapley 1953) |
| **Markov chain attribution** | Removal-effect-based credit using a state-transition graph |
| **Removal effect** | Drop in conversion probability when a channel is removed |
| **SHAP** | SHapley Additive exPlanations, ML interpretability built on Shapley |
| **MMP** | Mobile Measurement Partner (Branch, AppsFlyer, Adjust), mobile attribution |
| **SKAdNetwork (SKAN)** | Apple's privacy-preserving iOS install attribution framework |
| **Postback** | The ad-network → MMP attribution message |
| **Incrementality test** | Causal measurement via randomized holdout |
| **Geo holdout** | Incrementality test by region |
| **PSA test** | Incrementality test using a non-brand creative as control |
| **Conversion lift test** | Platform-native incrementality (Meta / Google) |
| **GA4 DDA threshold** | 400+ conversions per type in 30 days |

---

## Discussion, Socratic prompts

1. Stitch Fix's last-click model said paid search drove 47% of acquisition. A geo-holdout said the true incremental contribution was 18%. If you were the CMO who *just* signed off on the search budget based on the 47% number, how do you communicate the discovery to the board, and what governance change ensures you don't repeat the mistake on a different channel next year?
2. Shapley-value attribution and Markov-chain attribution typically produce *similar* channel rankings but different point values. When the numbers disagree by 5–10%, is that a *bug* or a *feature*? How would you operationalize a process that uses both without paralysis?
3. GA4 DDA needs 400 conversions per type / 30 days. A B2B SaaS team has 80. The vendor sales pitch is to buy a third-party MTA. What's the strategist's honest framing of *what the vendor can and cannot deliver* at that conversion volume, and the alternative path that may serve the team better?
4. Apple's SKAdNetwork 4 / AdAttributionKit gives advertisers a *postback* with limited and delayed conversion-value information. Some advertisers run blind; others over-fit creative to the SKAN signal. What's a defensible mobile-measurement strategy in 2026 that doesn't make either mistake?
5. The "measurement triangle" combines MTA + MMM + incrementality. In practice, most teams run only one. Pick a hypothetical company (DTC e-com, B2B SaaS, retail enterprise) and argue which two-of-three combo is the *minimum viable* triangle for them, and why dropping the third is acceptable for now.

---

## ✅ Module 4 Summary

You now know:

- 🎯 Six attribution models + when each is appropriate.
- 🧮 Three mathematical approaches to DDA, Shapley, Markov, ML/SHAP.
- 🤖 GA4's DDA implementation + its 400-conversion threshold.
- 🐍 How to build a Markov-chain attribution model in Python from scratch.
- 🏪 The 2026 MTA vendor landscape and what's actually *in the box* per vendor.
- ⚖️ MTA's honest six limitations.
- 🧪 Incrementality testing, geo holdout, PSA test, platform conversion-lift.
- 🔄 The 2026 measurement triangle, MTA × MMM × incrementality.

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md)
2. ✏️ Take [Quiz.md](./Quiz.md)
3. 📋 Review [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ Move to [Module 5: Marketing Mix Modeling](../Module-05-Marketing-Mix-Modeling/Reading.md)

> **Where this leads.**
> - Inside this course: [Module 5](../Module-05-Marketing-Mix-Modeling/Reading.md) is the MMM half of the triangle, the only method that can attribute upper-funnel and offline channels; [Module 9](../Module-09-Privacy-First-Measurement/Reading.md) covers Consent Mode v2 and CAPI, which determine how much signal survives to feed your MTA.
> - Cross-course: [Course 18: AI Digital Marketing Capstone Portfolio](../../18-AI-Marketing-Capstone-Portfolio/README.md) asks you to defend an attribution methodology in writing for a portfolio scenario.
> - Practice: [Practice Exam 1](../Practice-Exams/Practice-Exam-1.md) (questions 16–21, 37–38) heavily tests attribution methods and Shapley/Markov math; the [Final Mock Exam](../Practice-Exams/Final-Mock-Exam.md) revisits the measurement triangle.

---

## 📚 Further Reading (Optional)

- 📖 **Hanssens, Parsons & Schultz "Market Response Models" (Kluwer)** the canonical MMM/MTA textbook.
- 📖 **Shapley, L.S. (1953) "A Value for n-Person Games"** the foundational paper.
- 📖 **Štrumbelj & Kononenko (2014) "Explaining prediction models and individual predictions with feature contributions"** the sampling-Shapley paper used in SHAP.
- 📖 **Anderl et al. (2016) "Mapping the customer journey: Lessons learned from graph-based online attribution modeling"** IJRM.
- 🔗 [Harvard Business School Case 9-521-002, Stitch Fix Attribution](https://store.hbr.org/) (paid case but worth it).
- 🔗 [Google's "Attribution Modeling" Skillshop course](https://skillshop.withgoogle.com/), free.
- 🔗 [Meta Marketing Science Whitepaper Library](https://www.facebook.com/business/m/marketing-science), strong incrementality content.
- 🔗 [Northbeam's "Performance Score" methodology](https://www.northbeam.io/methodology), read the small print.
- 🔗 [The Pareto/NBD vs BG/NBD comparison Fader & Hardie](https://www.brucehardie.com/papers.html) for CLV (Module 6 prep).
- 🔗 [ChannelAttribution R package](https://cran.r-project.org/web/packages/ChannelAttribution/), production-grade Markov MTA.
