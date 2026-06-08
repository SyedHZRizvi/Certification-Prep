# ✏️ Module 4 Quiz: Multi-Touch Attribution

> **Instructions:** 28 questions. No notes. Aim for 24/28 (86%).

---

## Questions

### Q1. Last-click attribution typically OVER-credits which type of channel? *(Understand)*
A. Upper-funnel brand-awareness channels
B. Bottom-funnel, click-driven channels (paid search, retargeting)
C. Offline channels
D. Untrackable channels

---

### Q2. Position-based (U-shaped) attribution allocates: *(Remember)*
A. 25% to each touch
B. 40% to first + 40% to last + 20% split across middle
C. 100% to first
D. 100% to last

---

### Q3. W-shaped attribution gives 22.5% to: *(Remember)*
A. First, lead, opportunity, last (+ 10% middle)
B. Every touch equally
C. Only the first three touches
D. Only the last touch

---

### Q4. Time-decay attribution gives more credit to: *(Understand)*
A. The first touch
B. The middle touch
C. The most recent touches (with exponential decay)
D. The most frequent touch

---

### Q5. The Shapley value approach to attribution distributes credit based on: *(Understand)*
A. Final-touch only
B. Each channel's average marginal contribution across all possible orderings of the channels
C. Equal split
D. A neural network's softmax output

---

### Q6. Markov-chain attribution computes a channel's credit using: *(Understand)*
A. The transition probability
B. The "removal effect", drop in conversion probability when the channel is removed
C. SHAP values
D. Linear regression coefficients

---

### Q7. GA4's Data-Driven Attribution requires at least: *(Remember)*
A. 100 conversions per month
B. 400 conversions per conversion type in 30 days
C. 1,000 conversions per year
D. No minimum

---

### Q8. SHAP (SHapley Additive exPlanations) is: *(Understand)*
A. The same as Shapley values exactly
B. An ML interpretability technique built on the Shapley axioms, used for non-linear models
C. A vendor brand
D. A regression diagnostic

---

### Q9. Which vendor is MOST associated with rigorous enterprise MTA + MMM + incrementality? *(Remember)*
A. Triple Whale
B. Hyros
C. Rockerbox
D. Mailchimp

---

### Q10. Triple Whale is BEST described as: *(Remember)*
A. A rigorous statistical MMM tool
B. A Shopify-DTC pixel-and-survey hybrid attribution dashboard
C. A mobile MMP
D. A CDP

---

### Q11. SKAdNetwork (SKAN) is: *(Remember)*
A. Apple's privacy-preserving iOS install attribution framework
B. Google's attribution framework
C. A Meta product
D. An open-source library

---

### Q12. The biggest *honest* limitation of MTA is: *(Analyze)*
A. It costs too much
B. It cannot measure channels with no click (TV, podcasts, billboards, OOH) and cannot prove causation
C. It only works on desktop
D. It is illegal in the EU

---

### Q13. A geo holdout incrementality test typically requires: *(Remember)*
A. ≥3 DMAs
B. ≥20 matched DMAs for adequate statistical power
C. The entire country
D. International markets

---

### Q14. A PSA test uses a public-service announcement as: *(Understand)*
A. A creative test
B. A control creative (the holdout group sees a PSA, not your brand) to isolate creative effect
C. A backup ad
D. Required by regulation

---

### Q15. Meta's built-in conversion lift test requires a typical minimum budget around: *(Remember)*
A. $1K
B. $50K
C. $500K
D. $5M

---

### Q16. MMM differs from MTA primarily in: *(Analyze)*
A. MMM uses aggregate, channel-level, low-frequency data; MTA uses user-level path data
B. MMM is free; MTA costs money
C. MMM is faster
D. MMM only works for digital

---

### Q17. The 2026 "measurement triangle" combines: *(Remember)*
A. MTA + MMM + Incrementality
B. Email + Display + Search
C. ROI + ROAS + LTV
D. Pixel + Cookie + Server

---

### Q18. If MTA says paid search drove 47% and MMM says 18%, the best interpretation is: *(Analyze)*
A. MTA is correct
B. MMM is closer to truth for budget allocation; MTA may still be fine for tactical bid decisions inside search
C. Average them
D. Discard both

---

### Q19. The number of permutations for an exact Shapley computation with 10 channels is: *(Apply)*
A. 100
B. 1,024
C. 3,628,800 (10!)
D. 10

---

### Q20. The Stitch Fix attribution story (HBR case 9-521-002) illustrates that: *(Apply)*
A. Last-click is always best
B. Replacing last-click with DDA + incrementality testing reallocated ~$80M and restored growth
C. MMM is unnecessary
D. Attribution doesn't matter

---

### Q21. A "removal effect" of 15% for Display means: *(Apply)*
A. Display is 15% of all traffic
B. Conversion probability drops 15% if Display is removed from the graph
C. Display gets 15% credit by default
D. Display has 15% CTR

---

### Q22. AppsFlyer, Branch, and Adjust are: *(Remember)*
A. CDPs
B. Mobile Measurement Partners (MMPs), postback attribution for app installs
C. DMPs
D. MMM vendors

---

### Q23. The strategist's best answer to "which attribution model is right?" is: *(Analyze)*
A. "Last-click."
B. "It depends, DDA for trackable click channels, MMM for untrackable + brand, incrementality to validate."
C. "Linear."
D. "The vendor we just bought."

---

### Q24. A Markov chain has the "memoryless" property meaning: *(Understand)*
A. The next state depends only on the current state, not the full history
B. It uses no memory at runtime
C. It cannot be parallelized
D. It is bounded in time

---

### Q25. The Štrumbelj & Kononenko 2014 paper is foundational for: *(Remember)*
A. CLV
B. Sampling-based Shapley value computation used in modern SHAP libraries
C. CAPI
D. ATT

---

### Q26. A team's last-click model credits paid search with 47% of conversions, but a geo holdout test shows paid search has near-zero incremental impact in 2 of 3 test regions. The likely interpretation is: *(Apply)*
A. Paid search is undervalued
B. Paid search is largely cannibalizing organic / direct (incremental near zero)
C. The geo test is flawed
D. Last-click is correct

---

### Q27. The recommended floor for ongoing media spend reserved for incrementality testing is approximately: *(Remember)*
A. 0% (it's optional)
B. 5–10%
C. 25–50%
D. 100%

---

### Q28. Why might two MTA vendors give 20–60% different results on the same data? *(Analyze)*
A. Bugs
B. Different model assumptions (Markov order, lookback window, channel definitions, view-through credit)
C. Vendor sabotage
D. Random chance

---

## 🎯 Answers + Explanations

### Q1: **B. Bottom-funnel, click-driven channels**
Last-click structurally rewards the channel closest to conversion, paid search, retargeting, branded affiliate. It under-credits upper-funnel.

### Q2: **B. 40% first + 40% last + 20% middle**
U-shaped (a.k.a. position-based). Memorize this exact split.

### Q3: **A. First, lead, opportunity, last (+ 10% middle)**
W-shaped is used heavily in B2B SaaS where lead-generation and opportunity-creation are distinct stages.

### Q4: **C. Most recent touches with exponential decay**
Half-life is typically 7 days; recent touches get most of the weight.

### Q5: **B. Marginal contribution averaged over all orderings**
The Shapley axioms ensure a fair, unique distribution of "winnings" across a coalition. Computationally factorial; sampling-based approximations are used in practice.

### Q6: **B. Removal effect**
(Conversion probability with channel present – Conversion probability with channel removed) / Conversion probability with channel present.

### Q7: **B. 400 conversions per conversion type in 30 days**
Below this threshold, GA4 silently falls back to last-click. Most small properties never qualify.

### Q8: **B. ML interpretability built on Shapley axioms**
SHAP generalizes Shapley to ML model outputs. Lundberg & Lee 2017 is the canonical paper.

### Q9: **C. Rockerbox**
Rockerbox is positioned at the rigorous-enterprise end. Triple Whale and Hyros are dashboard-style tools with simpler methodology.

### Q10: **B. Shopify-DTC pixel-and-survey hybrid**
Triple Whale uses its own pixel + post-purchase surveys ("How did you hear about us?") to triangulate attribution.

### Q11: **A. Apple's iOS install attribution framework**
SKAN 4 is the current version (2024). Covered in depth in Module 9.

### Q12: **B. Cannot measure untrackable channels + cannot prove causation**
The fundamental MTA limitation. Strategists answer "we use MMM + incrementality to plug those gaps."

### Q13: **B. ≥20 matched DMAs**
Below this, the statistical power is too low to detect typical effect sizes. Smaller tests are possible but error bars widen substantially.

### Q14: **B. Control creative**
The PSA isolates the *creative* effect, the holdout group still sees an ad, just not your ad.

### Q15: **B. $50K**
Meta's typical floor for Conversion Lift Tests is around $50K for a 4–6 week run. Below this, the test won't reach statistical significance.

### Q16: **A. Aggregate vs user-path data**
MMM = weekly/daily channel-level spend + outcome data, aggregate. MTA = user-path data. Different granularity, different questions.

### Q17: **A. MTA + MMM + Incrementality**
The 2026 strategist triangle.

### Q18: **B. MMM closer for budget; MTA fine for tactical**
The reconciliation rule. MMM is closer to ground-truth for *allocation* decisions; MTA can still inform *bid* decisions inside a channel.

### Q19: **C. 3,628,800 (10!)**
Factorial growth, which is why production Shapley uses Monte Carlo sampling.

### Q20: **B. ~$80M reallocated + growth restored**
The case study and the underlying lesson. Last-click was over-crediting paid search; switching to DDA + incrementality fixed budget allocation.

### Q21: **B. Conversion probability drops 15% when removed**
Removal effects are computed per channel, then normalized to sum to 100% of conversions.

### Q22: **B. Mobile Measurement Partners**
The three big MMPs. They handle postback attribution and SKAN aggregation.

### Q23: **B. Use the right tool per question**
The hallmark strategist answer. Distinguishes you from "we use [vendor's name] for everything."

### Q24: **A. Next state depends only on current state**
The Markov property. It's a *simplification*, real customer journeys have memory of earlier touches. This is why Markov + sampling-Shapley + ML approaches differ.

### Q25: **B. Sampling-based Shapley computation**
The paper that made Shapley computationally feasible for high-dimensional inputs and underpins SHAP.

### Q26: **B. Paid search largely cannibalizing organic**
The Stitch Fix scenario. Last-click can't see this because organic conversion is what would have happened anyway.

### Q27: **B. 5–10%**
The strategist's "validation tax." This is the budget you spend to validate that the other 90–95% is being allocated correctly.

### Q28: **B. Different model assumptions**
Different Markov order, different lookback windows, different view-through credit, different channel taxonomies. There is no single ground truth.

---

## 📊 Score Yourself

- 26–28/28 → 🏆 Attribution fluency. Move to Module 5.
- 24–25/28 → ✅ Solid.
- 20–23/28 → ⚠️ Re-read the Shapley + Markov + incrementality sections.
- <20/28 → 🔁 Re-read the module + walk through the Python example.

---

## 🃏 Add To Your Flashcards

- The 6 attribution models + when to use each
- U-shaped (40/20/40) vs W-shaped (22.5×4 + 10)
- Shapley value formula + intuition
- Markov removal effect
- GA4 DDA volume threshold (400/30 days)
- The 3 incrementality test types
- MMP names (Branch / AppsFlyer / Adjust)
- SKAdNetwork purpose
- The MTA × MMM × Incrementality triangle

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 5](../Module-05-Marketing-Mix-Modeling/Reading.md)
