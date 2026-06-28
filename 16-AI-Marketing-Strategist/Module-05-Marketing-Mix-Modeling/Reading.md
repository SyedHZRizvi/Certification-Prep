# Module 5: Marketing Mix Modeling 📈

> **Why this module matters:** Marketing Mix Modeling (MMM) is the 60-year-old discipline that became the most-asked-for skill on marketing-strategist job postings in 2024–2026. It's the only measurement technique that can attribute the impact of TV ads, podcasts, billboards, and brand campaigns *alongside* digital channels, using only aggregate weekly data. By 2026, every senior marketing strategist is expected to be able to read an MMM output and defend its numbers in front of a CFO (Chief Financial Officer).

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - The attribution-method vocabulary from [Module 4: Multi-Touch Attribution](../Module-04-Multi-Touch-Attribution/Reading.md), especially the MTA limits that motivate MMM.
> - Linear regression at the level of "what's a coefficient and what's R²", refresher in [Course 14 Module 8](../../14-AI-Marketing-Foundations/Module-08-Analytics-Measurement-Basics/Reading.md).
> - A working mental model of *ad-stock* (carry-over) and *diminishing returns* (saturation), even if the math is new, the intuition that "ads keep working for weeks after they air" and "the 10th impression matters less than the 1st" should already feel right.
> - Python or R reading-fluency for the worked code skeletons (you do not need to write your own PyMC model from scratch).
> If Bayesian inference is unfamiliar, that's OK, this module introduces priors and posteriors at a strategist (not statistician) depth.

---

## 🏢 A Story: How Walmart's MMM Team Saved a $50M Holiday Campaign

December 2022. Walmart's media-mix model a Bayesian MMM built in-house by a team of 12 economists and data scientists predicts that a planned $50M Q4 holiday TV campaign will deliver a return on ad spend (ROAS (Return on Ad Spend)) of 1.8×. This is *below* the threshold Walmart's CFO sets for incremental media investment (2.4×). The Marketing VP wants to run the campaign anyway, "we always run holiday TV." The CFO blocks it.

The team reallocates $50M as follows:

- $18M to **Connected TV** (Roku, Disney+, Hulu), which the MMM scored at 3.1× ROAS.
- $14M to **paid social with brand creative**, scored at 2.9× ROAS.
- $10M to **retail-media networks** (Walmart Connect, Target Roundel, Amazon Sponsored Display), scored at 4.5× ROAS.
- $8M to **upper-funnel YouTube**, scored at 2.6× ROAS.

Q1 2023 financial review: Walmart's marketing-driven revenue lift versus the prior holiday is **+9.4%**, against a flat ad-spend total. The blended ROAS on the reallocated $50M is **3.2×, versus the 1.8× the linear TV plan would have produced**. The CFO calculates the realized incremental margin at roughly $70M above what the original plan would have delivered.

This is what mature MMM does. Not "telling you what worked", *deciding* what to fund and what not to. The team is publicly profiled in Walmart's 2024 10-K filing as part of the company's "Media-Mix Operating Cadence."

This is the module where you learn how to do this. You will not be a senior strategist in 2026 without understanding MMM at the depth this module teaches.

---

## 📚 What Is MMM, Exactly?

A **Marketing Mix Model** is a statistical model usually a multivariate regression, increasingly Bayesian that relates **aggregate weekly or daily marketing inputs** to **aggregate sales or business outcomes**. It does NOT use user-level data. It does NOT require cookies or pixels. It is *immune to ATT, ITP, Privacy Sandbox, and every other privacy headwind* because it operates above the individual-user level.

The canonical MMM equation (simplified):

```
Sales_t  =  Baseline_t  +  Σ_c β_c × AdStock(Spend_{c,t})  +  Σ_x γ_x × Control_{x,t}  +  ε_t
```

Where:

- `Sales_t` = revenue or units in week `t`
- `Baseline_t` = the "would have happened anyway" sales (seasonality, brand equity, price, distribution)
- `c` indexes each marketing **channel** (TV, paid search, social, etc.)
- `β_c` = the channel's marginal effectiveness coefficient
- `AdStock(Spend_{c,t})` = the *carryover-adjusted, saturated* spend in channel `c` at time `t` (defined below)
- `Control_{x,t}` = exogenous factors (price, weather, holidays, competitor activity, macroeconomic indicators)
- `ε_t` = noise

The model is fit using historical data, typically **2–3 years of weekly** observations. Once fit, it can:

- Decompose past sales into baseline + each channel's incremental contribution.
- Compute the *marginal* ROAS of each channel (what one more dollar would deliver).
- Simulate the impact of different budget allocations on future sales.

---

## 🌊 Ad-Stock, The "Carryover" Effect

Marketing impact doesn't end the week the ad runs. A TV ad seen on Monday may drive a purchase on Friday, or three weeks later. The **ad-stock transformation** (Broadbent 1979) models this lagged effect.

The geometric ad-stock formula:

```
AdStock_t  =  Spend_t  +  λ × AdStock_{t-1}
```

Where `λ` is the **decay rate** between 0 and 1.

The **half-life** is the time for ad-stock to decay to 50%:

```
half-life  =  log(0.5) / log(λ)
```

| λ (decay) | Half-life |
|-----------|-----------|
| 0.5 | 1 week |
| 0.7 | 1.94 weeks |
| 0.8 | 3.1 weeks |
| 0.9 | 6.58 weeks |

🎯 **Typical half-lives by channel** (rules of thumb from Hanssens & Parsons + Meta Robyn defaults):

| Channel | Half-life |
|---------|-----------|
| Paid search (intent-driven) | 1–2 days |
| Display retargeting | 3–7 days |
| Paid social (DR) | 1–2 weeks |
| Paid social (brand) | 2–4 weeks |
| TV (DR) | 2–6 weeks |
| TV (brand) | 8–12 weeks |
| Podcast | 4–8 weeks |
| OOH / Billboards | 6–12 weeks |
| Brand campaigns (broad) | 12–26 weeks |

⚠️ **What most teams get wrong:** Using one half-life across all channels. Different channels work on different timescales, and modeling that is what makes MMM useful versus just a regression.

---

## 🪞 Saturation, Diminishing Returns

The other key transformation. Spending $10M doesn't deliver 10× the impact of spending $1M because of *diminishing returns*, eventually you're advertising to the same people repeatedly, reaching less-relevant audiences, or exhausting the market.

Two common saturation functions:

### Hill function (Robyn default)

```
Hill(x) = x^α / (x^α + K^α)
```

Where:

- `α` = shape parameter (typically 0.5–3)
- `K` = half-saturation point (the spend level at which 50% of the maximum impact is achieved)

### Adbudg / Reach curve

```
S(x) = a × x^b / (c + x^b)
```

Visually, both look like an S-curve or a concave-down curve depending on parameters.

**Worked example:**

Suppose paid search has the parameters `α = 2.0`, `K = $500K/week` for a specific brand. Then:

- $100K/week → Hill = (100²) / (100² + 500²) = 10,000 / 260,000 = **0.038** of max effect.
- $500K/week → Hill = (500²) / (500² + 500²) = 0.5 (the half-saturation point).
- $1M/week → Hill = (1000²) / (1000² + 500²) = 1,000,000 / 1,250,000 = **0.80** of max.
- $2M/week → Hill = (2000²) / (2000² + 500²) = **0.94** of max.

Between $1M and $2M, you're getting only an additional 14% of max effect, the marginal ROAS is collapsing. *This* is what the saturation curve shows, and it's the most important MMM output for budget decisions.

---

## 🌳 Meta's Robyn, The Open-Source MMM

In 2020, Meta open-sourced **Robyn**, an MMM library built in R (with a Python port in development). Robyn made what was previously a $250K-per-engagement consulting product available to anyone with R + a CSV.

### Robyn's architecture

1. **Hyperparameter optimization with Nevergrad**: tries thousands of (ad-stock, saturation, model) combinations.
2. **Penalized regression with Ridge**: fits the best model under penalty for overfitting.
3. **Pareto-optimal model selection**: identifies models on the Pareto front of NRMSE (error) vs decomp.RSSD (decomposition stability).
4. **Calibration to ground-truth**: ingest incrementality test results to constrain the model.
5. **Budget optimizer**: outputs the recommended reallocation across channels.

### A minimal Robyn workflow (R)

```r
library(Robyn)

# 1. Load 2 years of weekly data
input_data <- read.csv('weekly_marketing.csv')
# Columns expected: week_starting, sales, search_spend, social_spend, tv_spend,
#                   ooh_spend, holidays_dummy, price_index, ...

# 2. Configure model
InputCollect <- robyn_inputs(
  dt_input = input_data,
  dt_holidays = dt_prophet_holidays,
  date_var = "week_starting",
  dep_var = "sales",
  dep_var_type = "revenue",
  prophet_vars = c("trend","season","holiday"),
  prophet_country = "US",
  paid_media_spends = c("search_spend","social_spend","tv_spend","ooh_spend"),
  paid_media_vars = c("search_impr","social_impr","tv_grps","ooh_imp"),
  organic_vars = c("newsletter_sends"),
  context_vars = c("price_index","competitor_spend"),
  adstock = "geometric",  # or "weibull_cdf" / "weibull_pdf"
  hyperparameters = hyper_names(adstock="geometric",
                                all_media = c("search","social","tv","ooh"))
)

# 3. Run the model, typically 5,000 iterations × 5 trials
OutputCollect <- robyn_run(InputCollect = InputCollect,
                            iterations = 5000,
                            trials = 5,
                            ts_validation = TRUE,
                            outputs = TRUE)

# 4. Pick a Pareto-optimal model
robyn_select <- "1_120_3"   # for example

# 5. Budget optimizer, "what's the best mix going forward?"
robyn_allocator(InputCollect = InputCollect,
                OutputCollect = OutputCollect,
                select_model = robyn_select,
                scenario = "max_response",
                channel_constr_low = 0.7,    # don't drop any channel below 70% of current
                channel_constr_up = 1.5)     # don't raise above 150%
```

The output charts:

- **Waterfall of effect**: decomposition of total sales into baseline + each channel's incremental contribution.
- **Response curves**: per-channel saturation curve with current spend point marked.
- **Optimized allocation**: bar chart of "current vs optimized" spend per channel.

These are the four charts you'll show the CFO.

---

## 🌐 Google's Meridian (2024)

In April 2024, Google launched **Meridian**, an open-source MMM library in Python. Meridian is conceptually similar to Robyn but with three differences:

| Feature | Robyn (Meta) | Meridian (Google) |
|---------|-------------|-------------------|
| Language | R (Python port in development) | Python (Tensorflow Probability) |
| Inference | Ridge regression + Nevergrad hyper-opt | Hierarchical Bayesian |
| Reach / frequency inputs | Spend-only | Native R&F (Reach & Frequency) inputs |
| Geo-level data | Geo support added 2023 | Geo-level model is the default |
| Calibration to experiments | Supported | Supported (formal priors) |
| Maturity | Heavily battle-tested since 2020 | Newer (2024), fewer production case studies |

**Strategist rule:** If your brand spends ≥30% of marketing on TV / OOH / podcast (channels with measurable reach), Meridian's R&F-native model captures more accurate diminishing returns. If you're digital-heavy with spend-only data, Robyn is fine. If your team is R-native, Robyn. If Python-native, Meridian. Both produce comparable outputs in head-to-head benchmarks on the same data.

---

## 🧮 Bayesian MMM with PyMC

For maximum flexibility (and academic rigor), modern teams roll their own MMM in **PyMC** or **Stan** using a hierarchical Bayesian framework.

```python
import pymc as pm
import numpy as np
import pandas as pd

# Load weekly data
df = pd.read_csv('weekly_marketing.csv')
N = len(df)
channels = ['search','social','tv','ooh']

with pm.Model() as mmm:
    # Priors
    baseline      = pm.Normal('baseline', mu=df['sales'].mean(),
                              sigma=df['sales'].std())
    intercept_t   = pm.Normal('intercept_t', mu=0, sigma=1, shape=N)

    # Per-channel adstock decay (prior: Beta concentrated around 0.5)
    lambdas       = pm.Beta('lambdas', alpha=2, beta=2, shape=len(channels))

    # Per-channel saturation half-point (prior: log-normal)
    K             = pm.LogNormal('K', mu=np.log(500_000), sigma=1.0,
                                 shape=len(channels))

    # Per-channel saturation shape
    alphas        = pm.Gamma('alphas', alpha=3, beta=1, shape=len(channels))

    # Per-channel coefficient
    betas         = pm.HalfNormal('betas', sigma=5, shape=len(channels))

    # Build adstock + saturation contributions
    channel_contributions = []
    for i, ch in enumerate(channels):
        x = df[f'{ch}_spend'].values
        # Adstock
        adstocked = pm.math.zeros(N)
        for t in range(N):
            if t == 0:
                adstocked = pm.math.set_subtensor(adstocked[t], x[t])
            else:
                adstocked = pm.math.set_subtensor(
                    adstocked[t], x[t] + lambdas[i] * adstocked[t-1])
        # Hill saturation
        hill = (adstocked ** alphas[i]) / (adstocked ** alphas[i] + K[i] ** alphas[i])
        channel_contributions.append(betas[i] * hill)

    # Sum
    mu = baseline + sum(channel_contributions)

    # Observation likelihood
    sigma_obs = pm.HalfNormal('sigma_obs', sigma=df['sales'].std())
    sales_obs = pm.Normal('sales_obs', mu=mu, sigma=sigma_obs,
                          observed=df['sales'].values)

    # Sample
    trace = pm.sample(2000, tune=1000, target_accept=0.95)
```

The Bayesian approach gives you **posterior distributions** over every parameter, not just a point estimate. You can say "we are 95% confident that paid search ROAS is between 2.1 and 3.4" rather than just "ROAS is 2.7." This is what allows defensible CFO conversations.

---

## 🎯 MMM vs MTA, The Decision Tree

When do you reach for which tool? This decision tree is the strategist's answer:

```
Question being asked
       │
       ├── "What's the marginal ROAS of adding $1M to channel X?"
       │       → MMM (best with calibrated incrementality)
       │
       ├── "Which campaign / creative / ad-set is delivering?"
       │       → MTA (or platform-native conversion lift)
       │
       ├── "Should we go from $3M TV to $5M TV this quarter?"
       │       → MMM
       │
       ├── "How do we bid in Google Ads tomorrow?"
       │       → MTA / DDA (real-time)
       │
       ├── "Can we prove paid search is incremental?"
       │       → Incrementality (geo holdout)
       │
       ├── "What is our total halo from TV → search?"
       │       → MMM (catches the cross-channel effect)
       │
       └── "What's the right total budget for next year?"
               → MMM + scenario simulation
```

🎯 **Memorize this.** When asked "MMM or MTA?" the senior answer is *"It depends on the question. MMM for strategic budget allocation across channels; MTA for tactical, click-level decisions inside a channel. Both calibrated by incrementality."*

---

## 💲 Cost Reality

| Approach | Build cost | Run / refresh cost |
|----------|-----------|---------------------|
| Robyn (open-source) | 6–12 weeks of 1 senior analyst | ~1 week per quarterly refresh |
| Meridian (open-source) | Similar | Similar |
| In-house Bayesian (PyMC / Stan) | 4–9 months for a team | 1–2 weeks per refresh |
| Consultant MMM (Analytics Partners, MMA, Marketing Evolution) | $150K–$500K per engagement | Monthly refresh fees $20K–$80K |
| Platform MMM (Rockerbox, Measured, Northbeam) | Built-in to platform | Included in SaaS (Software as a Service) subscription |

🎯 **What the 2026 best practice looks like:**
1. Run a quarterly **MMM refresh** on Robyn or Meridian, calibrated against incrementality tests.
2. Use the MMM output to set **channel-level budget guidance**.
3. Inside each channel, use **MTA + platform-DDA** for tactical decisions.
4. Reserve **5–10% of spend** for ongoing incrementality tests, prioritizing channels where MMM and MTA disagree most.

---

## 📊 Reading an MMM Output Like a CFO

Below are the four charts every MMM output should produce. You must be able to interpret all four, and defend them in a 15-minute meeting.

### Chart 1: Sales decomposition (waterfall)

```
              Total quarterly sales: $400M
              ─────────────────────────────
              Baseline (would have happened):   $260M (65%)
              Paid search incremental:           $54M (13.5%)
              Paid social incremental:           $34M (8.5%)
              TV incremental:                    $28M (7.0%)
              OOH incremental:                   $14M (3.5%)
              Email + Owned:                      $10M (2.5%)
```

🎯 **Strategist insight:** Most CMOs are shocked to learn that 50–80% of revenue is **baseline** (would have happened with zero ads). The marketing's job is to maximize the *incremental* portion, typically 20–50% of total revenue.

### Chart 2: Channel ROAS

| Channel | Spend | Incremental sales | ROAS |
|---------|-------|-------------------|------|
| Paid search | $18M | $54M | 3.0× |
| Paid social | $16M | $34M | 2.1× |
| TV | $20M | $28M | 1.4× |
| OOH | $8M | $14M | 1.75× |
| Email/owned | $1M | $10M | 10× |

### Chart 3: Saturation curves (per channel)

This is the chart that drives reallocation. If TV is *flat* on its saturation curve at current spend, reducing it 30% may lose only 5% of impact.

### Chart 4: Optimized vs current allocation

The MMM's recommendation. Shown as a bar chart, current spend versus optimized spend per channel. The CFO wants to see the *expected sales lift* under the optimized scenario.

⚠️ **What most teams get wrong:** Showing the CFO only Chart 2 (ROAS). The ROAS number is meaningless without the saturation curve, *because you're being asked to reallocate, not to grade existing channels*.

---

## ⚠️ Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "MMM is dead because we have MTA now" | MMM is *more* relevant in 2026, it's the only model immune to cookie/ATT loss |
| "MMM needs 5+ years of data" | 2 years of *weekly* data is the typical minimum |
| "MMM is too slow to be useful" | Modern MMM (Robyn / Meridian) refreshes in 1 week; many teams refresh monthly |
| "One MMM ROAS number = absolute truth" | MMM gives a *range*, communicate confidence intervals |
| "The same MMM works for all channels" | Different channels need different adstock + saturation parameters |
| "MMM and MTA should give the same numbers" | They will diverge, they answer different questions |
| "Robyn is just a Meta product to push Meta channels" | Robyn is open-source, channel-agnostic; calibrate against your own data |

---

## 🎓 Key Terms To Know

| Term | Definition |
|------|------------|
| **MMM** | Marketing Mix Modeling, aggregate-level statistical attribution |
| **Ad-stock** | Time-lagged residual effect of past advertising on current sales |
| **λ (lambda) / decay rate** | The geometric decay parameter in ad-stock |
| **Half-life** | Weeks until ad-stock falls to 50% of its original value |
| **Saturation** | Diminishing returns to additional spend in a channel |
| **Hill function** | Common saturation curve: `x^α / (x^α + K^α)` |
| **K (half-saturation point)** | Spend level where 50% of max impact is reached |
| **Baseline** | The "would have happened anyway" sales not driven by paid marketing |
| **Marginal ROAS** | ROAS on the next incremental dollar, usually lower than blended ROAS |
| **Robyn** | Meta's open-source MMM library (R, Python port in dev) |
| **Meridian** | Google's open-source MMM library (Python, Bayesian, R&F-native) |
| **Bayesian MMM** | MMM fit via Markov-chain Monte Carlo (PyMC, Stan) giving posterior distributions |
| **Pareto-optimal model** | A model on the Pareto front of error vs decomposition stability |
| **Calibration** | Constraining MMM coefficients with incrementality-test results |
| **Decomposition** | Breaking total sales into baseline + per-channel incremental |
| **Response curve** | Per-channel saturation curve with current spend marked |

---

## 💼 Case Study, Procter & Gamble's MMM Revival (2021–2024)

**Situation.** Procter & Gamble is the world's largest advertiser by absolute spend roughly **$8.1 billion in global advertising in fiscal year 2023** across Tide, Pampers, Gillette, Crest, Olay, Pantene, Charmin, and dozens of other brands. For nearly a decade, P&G had been progressively reducing its reliance on traditional Marketing Mix Modeling, shifting toward MTA and platform-native attribution as digital channels grew. Then in April 2021, **Apple's iOS 14.5 launched App Tracking Transparency (ATT)**, which caused opt-in rates for the mobile advertising IDFA to collapse to roughly 25%. Within 18 months, P&G's MTA models particularly for the share of spend that touched Meta, TikTok, and other mobile inventory, were producing channel-ROAS estimates that internal analysts described as "directionally unreliable." Marc Pritchard, P&G's Chief Brand Officer, had been publicly criticizing the digital-ad-measurement industry since his 2017 ANA "Media Transparency" speech; the post-ATT measurement collapse vindicated his concerns and forced an architectural rebuild.

**Decision.** P&G's marketing-science function executed a multi-year **MMM revival** through 2021–2024, with three concrete components: (1) build out a unified Bayesian MMM across all top P&G brands (rather than per-brand silos), using a hierarchical model that shared learnings across category-similar brands; (2) calibrate the MMM with a continuous program of *geo-holdout* incrementality tests, reportedly running 60+ incrementality tests per year by 2024; (3) make MMM-derived channel guidance the *binding* input to brand-budget decisions, with MTA outputs reserved for tactical, within-channel decisions only. P&G also publicly disclosed via Pritchard's 2023 ANA Masters of Marketing keynote that the company was using its MMM-plus-incrementality stack to *reduce reach but increase frequency* on the precise sub-audiences the model identified as response-curve-sensitive.

**Outcome.** P&G reported in its FY2023 annual report that despite a flat-to-slightly-down total advertising budget, the company achieved organic-sales growth of **+7%** for the fiscal year an outperformance Pritchard explicitly attributed to "spending more efficiently in the places the data tells us work." Industry analysts (Ad Age, Marketing Week, WARC) profiled the P&G case as one of the canonical "post-ATT MMM revivals" alongside parallel moves at Unilever and Mondelez. The deeper learning was that *MMM is the only measurement technique structurally immune to the privacy collapse* because it operates on aggregate weekly spend and aggregate weekly sales, never on user-level data, and that lesson reshaped the entire CPG-industry measurement playbook.

**Lesson for the exam / for practitioners.** P&G's MMM revival is the canonical 2021–2024 reference for *why MMM is more relevant in 2026 than it was in 2018*, despite being a 60-year-old discipline. The case also illustrates the **MMM + incrementality calibration** pattern this module teaches: MMM alone gives you a model; MMM calibrated against quarterly geo-holdout tests gives you a model you can defend in front of a CFO. On the exam, when a case asks "the iOS-ATT-driven measurement collapse damaged our MTA, what do we do?", the senior-strategist answer is "rebuild MMM as the primary budget-allocation tool, use MTA only for within-channel tactical decisions, and continuously calibrate MMM via incrementality tests." That's the P&G playbook, and it's exam-aligned.

**Discussion (Socratic).**
- Q1: P&G has the budget, brand portfolio, and data-science headcount to run 60+ incrementality tests per year. A mid-market DTC (Direct-to-Consumer) brand with $20M in revenue cannot run more than 3–4 per year. What's the *minimum viable* MMM-plus-incrementality cadence for that smaller brand, and how would you defend the methodological compromises to a board that wants "the P&G approach at our scale"?
- Q2: The official answer here is that MMM is "more relevant in 2026 than 2018." Steel-man the contrarian view: a CDP (Customer Data Platform)-rich enterprise with high consent rates and strong server-side CAPI implementations could plausibly argue MTA + incrementality is enough, that MMM is yesterday's tool. Where does this contrarian case actually hold, and where does it fail?
- Q3: P&G's choice to make MMM *binding* for brand-budget decisions (with MTA only advisory) implicitly accepts the trade-off that MMM is *slow*, it can refresh monthly at best, while MTA refreshes daily. What governance design lets a marketing org commit to MMM-led allocation without losing the speed of tactical MTA-driven decisions?

---

## Discussion, Socratic prompts

1. Walmart's MMM rejected a $50M linear-TV plan because the predicted ROAS was 1.8× against a 2.4× threshold. The marketing VP said "we always run holiday TV." Defend the VP's instinct as a *strategic* position (brand-building, share-of-voice, retail-channel dynamics). Then defend the CFO's MMM-driven veto. Which side actually wins if the company has a 10-year horizon?
2. Robyn (Meta) and Meridian (Google) are both open-source MMM tools sponsored by ad platforms that have a financial interest in their outputs. What specific *biases* should a senior strategist check for in each tool's defaults, and what would an independent calibration test look like?
3. The minimum MMM data requirement is typically 2 years of weekly data. A startup launched 18 months ago and the board wants an MMM "this quarter." What's a defensible alternative that doesn't pretend to be MMM but gives the board real budget-allocation signal?
4. MMM's baseline (non-paid revenue) is typically 50–80% of total revenue. If your model produces a 30% baseline or a 90% baseline, what specific implementation errors are most likely the cause, and how do you triage them?
5. Bayesian MMM in PyMC gives you *posterior distributions* on coefficients, uncertainty, not just point estimates. Most CFOs want point estimates. How do you present the uncertainty in a way that *informs* rather than *paralyzes* the budget conversation?

---

## ✅ Module 5 Summary

You now know:

- 📚 The canonical MMM equation and what each term represents.
- 🌊 Ad-stock, the carryover/decay model with typical half-lives per channel.
- 🪞 Saturation, Hill function, half-saturation point, and how diminishing returns drive reallocation decisions.
- 🌳 Robyn (Meta), workflow, hyper-optimization, Pareto model selection.
- 🌐 Meridian (Google), when to pick it over Robyn.
- 🧮 Bayesian MMM in PyMC, full Python code skeleton.
- 🎯 MMM vs MTA decision tree.
- 💲 Cost realities and the 2026 best-practice cadence.
- 📊 The 4 charts every MMM output must produce.

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md)
2. ✏️ Take [Quiz.md](./Quiz.md)
3. 📋 Review [Cheat-Sheet.md](./Cheat-Sheet.md)
4. ➡️ Move to [Module 6: Predictive Analytics, CLV (Customer Lifetime Value) & Churn](../Module-06-Predictive-Analytics-LTV (Lifetime Value)-Churn/Reading.md)

> **Where this leads.**
> - Inside this course: [Module 6](../Module-06-Predictive-Analytics-LTV-Churn/Reading.md) takes the marketing-decision lens from MMM and extends it to *per-customer* prediction (CLV, churn); [Module 10](../Module-10-Marketing-Org-Tech-Stack-Design/Reading.md) covers how an MMM function is staffed, budgeted, and governed inside a CMO (Chief Marketing Officer) org.
> - Cross-course: [Course 18: AI Digital Marketing Capstone Portfolio](../../18-AI-Marketing-Capstone-Portfolio/README.md) expects a worked MMM artifact (Robyn or Meridian on a real or synthetic dataset).
> - Practice: [Practice Exam 1](../Practice-Exams/Practice-Exam-1.md) (questions 22–29) and the [Final Mock Exam](../Practice-Exams/Final-Mock-Exam.md) test ad-stock, Hill saturation, and the MTA-vs-MMM decision tree.

---

## 📚 Further Reading (Optional)

- 📖 **Hanssens, Parsons & Schultz "Market Response Models" (Kluwer Academic, 2nd ed.)** the canonical MMM textbook.
- 📖 **Broadbent, S. (1979) "One way TV advertising works"** the foundational ad-stock paper.
- 📖 **"Marketing Performance Measurement Today" (Hanssens et al., 2017)**, Wharton MMM update.
- 🔗 [Meta's Robyn documentation](https://facebookexperimental.github.io/Robyn/), read the whole site, it's small.
- 🔗 [Google Meridian on GitHub](https://github.com/google/meridian), official repository + worked examples.
- 🔗 [PyMC-Labs "Bayesian MMM" tutorial](https://www.pymc-labs.com/blog-posts/), the open-source Bayesian path.
- 🔗 [Stan + brms MMM walkthrough](https://mc-stan.org/), for R-native teams who want full Bayesian.
- 📖 **Sweldens, Tavasolli, Hanssens (2023) "How long does TV advertising work? A model of ad-stock heterogeneity"** modern updates to Broadbent's original parameters.
- 📖 **Wolfe & Wang (2022) "Calibrating MMM with experiments" (Journal of Marketing Research)** formal calibration to incrementality tests.
