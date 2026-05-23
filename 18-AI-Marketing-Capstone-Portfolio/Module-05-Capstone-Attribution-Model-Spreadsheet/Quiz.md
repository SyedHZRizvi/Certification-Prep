# ✏️ Module 5 Self-Evaluation: Attribution Model Capstone

> **Instructions:** Take this AFTER your model is built and chart is rendered.
> Honest A/B/C/D answers. Target: 80%+ A or B.

---

## Questions

### Q1. Did you build the attribution model in Google Sheets OR a Python Colab notebook (not just plan it)? *(Create)*
A. Yes — built + tested + outputs are correct
B. Built but outputs untested
C. Drafted only
D. Not built

---

### Q2. Did you implement at least 3 attribution models? *(Create)*
A. Yes — Last-Click + Linear + Markov (or Shapley)
B. Last-Click + Linear (2 models)
C. Last-Click only
D. No models

---

### Q3. Did you choose your data source explicitly (real anonymized, public sample, or generated synthetic)? *(Evaluate)*
A. Yes — documented source and rationale
B. Used data, source unclear
C. Started with data, didn't document
D. No data, just hypothetical examples

---

### Q4. If using real data, did you anonymize user IDs and remove PII? *(Apply)*
A. Yes — verified clean
B. Removed obvious identifiers
C. Didn't fully review
D. Used raw real data (privacy risk)

---

### Q5. Did you create the comparison chart (clustered bar chart with all 3+ models)? *(Create)*
A. Yes — clean chart, all models, labeled
B. Chart exists, basic
C. Numbers in a table only
D. No chart

---

### Q6. Did you write 2–4 sentences interpreting each model's verdict? *(Analyze)*
A. Yes — interpretation for each model
B. Interpretation for one model
C. Numbers only, no commentary
D. No interpretation

---

### Q7. Is your sample size at least 100 customer journeys? *(Apply)*
A. Yes — 100+
B. 50–99
C. 20–49
D. <20

---

### Q8. Does at least one channel show a meaningfully different rank between models? *(Analyze)*
A. Yes — clear ranking flip documented
B. Some movement
C. Models give similar results
D. Didn't analyze

---

### Q9. Did you make the spreadsheet / notebook public ("Anyone with link")? *(Apply)*
A. Yes — public + linkable
B. Public but unfindable
C. Drafted privately
D. Local only

---

### Q10. Did you record a 5–8 min Loom walkthrough? *(Create)*
A. Yes — uploaded + linked
B. Recorded, not uploaded
C. Scripted, not recorded
D. No Loom

---

### Q11. Does the Loom show the comparison chart and walk through 1+ surprising insight? *(Analyze)*
A. Yes — clear "aha" moment in the Loom
B. Shows chart, no insight narration
C. Some commentary
D. Chart only

---

### Q12. Did you write the case study using P-C-A-R-L format? *(Apply)*
A. Yes — full sections
B. Most sections
C. Loose structure
D. None

---

### Q13. Did you document the Markov chain (or Shapley) implementation details? *(Understand)*
A. Yes — math + code shown
B. Code shown, math unexplained
C. "Used a library"
D. No docs

---

### Q14. Could you explain Markov's "removal effect" to a non-technical stakeholder? *(Understand)*
A. Yes — practiced an explanation
B. Could explain technically
C. Roughly understand
D. Not confident

---

### Q15. Did you note the limitations of your model (sample size, data quality, model assumptions)? *(Evaluate)*
A. Yes — explicit limitations section
B. Brief mention
C. Glossed over
D. No limitations noted

---

### Q16. Did you propose a "v2" with what you'd add next? *(Create)*
A. Yes — 3+ concrete v2 ideas
B. 1–2 ideas
C. Generic mention
D. None

---

### Q17. Did you publish the case study on a public URL? *(Apply)*
A. Yes — public + linkable
B. Drafted on portfolio
C. Written, not published
D. Not written

---

### Q18. Did you share on LinkedIn / Twitter with link + chart? *(Apply)*
A. Yes — posted + engagement
B. Posted, no engagement
C. Planned
D. No

---

### Q19. Could you defend why Markov/Shapley is "fairer" than Last-Click? *(Evaluate)*
A. Yes — articulated rationale
B. Mostly
C. Roughly
D. No

---

### Q20. Did you write the analysis in a voice that translates the math for business audiences? *(Understand)*
A. Yes — bridges math + business
B. Mostly accessible
C. Some jargon
D. Math-only or business-only

---

### Q21. Is the chart visually clean (no chart-junk, clear labels, intuitive colors)? *(Evaluate)*
A. Yes — design-aware
B. Functional
C. Cluttered
D. Hard to read

---

### Q22. Did you test the model with a manually-computable toy example to verify correctness? *(Analyze)*
A. Yes — sanity-checked
B. Partial check
C. No
D. Not aware this is best practice

---

### Q23. Did you spend 6–10 hours on this capstone? *(Evaluate)*
A. Yes — within range
B. 4–6 or 10–14
C. <4 or >14
D. Lost track

---

### Q24. Could a recruiter follow your walkthrough and understand the methodology? *(Evaluate)*
A. Yes — verified by sharing with peer
B. Should be clear
C. Maybe
D. Probably not

---

### Q25. Did you practice the 90-second pitch out loud? *(Apply)*
A. Yes — 3+ times
B. Once
C. Drafted, not practiced
D. Not yet

---

### Q26. Does the methodology section walk through (1) data prep, (2) model choice, (3) implementation, (4) validation? *(Evaluate)*
A. Yes — all 4 steps
B. 3 of 4
C. 1–2 steps
D. No methodology section

---

### Q27. If you used a Python library (like ChannelAttribution), did you document WHY rather than just "imported it"? *(Analyze)*
A. Yes — explained the library's algorithm
B. Mentioned it briefly
C. Used without explanation
D. Didn't use a library / N/A

---

### Q28. Would you flag this as a top-3 portfolio piece for analytics-heavy roles? *(Evaluate)*
A. Yes — strong piece
B. Solid, with caveats
C. Decent
D. Wouldn't lead with it

---

## 🎯 Model Answers + Grading Guidance

### Q1: Excellent looks like: **A**
Built + tested + outputs correct. The whole capstone is the artifact. Plan-only doesn't count.

### Q2: Excellent looks like: **A**
3 models compared. The contrast is the punchline. Skipping Markov/Shapley = no impressive piece.

### Q3: Excellent looks like: **A**
Documented source. *"Used the Criteo Attribution Modeling Kaggle dataset (link). 5,000 sampled journeys."* This is the rigor signal.

### Q4: Excellent looks like: **A**
Anonymization verified. Single most common privacy mistake = forgot to anonymize. Always do it.

### Q5: Excellent looks like: **A**
Clean chart with all models, labeled axes, clear title. This is the *money shot* of the entire capstone.

### Q6: Excellent looks like: **A**
2–4 sentences per model. *"Last-click says paid social is 4% of value, suggesting cutting it. Markov says 23%, suggesting paid social is doing all the discovery work."* That's the interpretation pattern.

### Q7: Excellent looks like: **A**
100+ journeys minimum. Below that, Markov is too noisy.

### Q8: Excellent looks like: **A**
Ranking flip. Without it, the chart shows no insight. Pick a dataset / generation strategy where multi-touch dynamics actually exist.

### Q9: Excellent looks like: **A**
Public link. Sheets: Share → "Anyone with link can view." Colab: Share → "Anyone with link can view." Test in incognito.

### Q10: Excellent looks like: **A**
Loom uploaded + linked. Same logic as Module 4.

### Q11: Excellent looks like: **A**
Aha moment in the Loom. *"Watch this — when I switch from last-click to Markov, paid social goes from #5 to #2."* That's the magic.

### Q12: Excellent looks like: **A**
P-C-A-R-L. Consistent structure across all capstones.

### Q13: Excellent looks like: **A**
Math + code shown. The reader can verify the implementation. Junior portfolios import libraries and hide the math. Senior portfolios show the work.

### Q14: Excellent looks like: **A**
Practiced an explanation. *"Imagine you're testing whether paid social actually matters. We simulate removing it from every journey. If conversions drop 23%, paid social is contributing 23%. That's the removal effect."*

### Q15: Excellent looks like: **A**
Explicit limitations. *"Sample is 200 journeys; Markov needs more for stable estimates. Time-decay variant not implemented. View-through conversions not modeled."*

### Q16: Excellent looks like: **A**
3+ v2 ideas. *"v2 would add Shapley to cross-check, time-decay for recency, and split by customer segment."*

### Q17: Excellent looks like: **A**
Public URL. Same drill.

### Q18: Excellent looks like: **A**
Posted + engaged. Attribution content does well on LinkedIn among marketing leaders.

### Q19: Excellent looks like: **A**
Articulated rationale. *"Markov is fairer because it accounts for the fact that touchpoints depend on each other. Last-click pretends only the final touch mattered — which is empirically false."*

### Q20: Excellent looks like: **A**
Translates math to business. Hiring managers care about the business interpretation, not the algorithm.

### Q21: Excellent looks like: **A**
Clean chart. No 3D effects. No rainbow colors. Use 2-3 colors max. Label axes.

### Q22: Excellent looks like: **A**
Sanity-checked. Build a 3-journey toy example you can hand-compute, then verify your code matches.

### Q23: Excellent looks like: **A**
6–10 hours. Calibrated.

### Q24: Excellent looks like: **A**
Peer-verified. Share with a non-marketer; ask if they understand. Iterate.

### Q25: Excellent looks like: **A**
Practiced 3+ times.

### Q26: Excellent looks like: **A**
All 4 methodology steps. Rigor signal.

### Q27: Excellent looks like: **A**
Library explained. *"Used ChannelAttribution's `markov_model()` which implements the removal-effect algorithm described in [reference]."* Hiding behind libraries without explanation = junior tell.

### Q28: Excellent looks like: **A**
Top-3 piece. If not, the issue is usually: chart isn't striking, or interpretation isn't strong.

---

## 📊 Self-Score Yourself

- 22+ A's → 🏆 Strong analytical signal. Lead with this for analytics-heavy roles.
- 16–21 A's → ✅ Solid. Polish C/D items.
- 10–15 A's → ⚠️ Half there. Most likely: rebuild the chart + interpretation.
- <10 A's → 🔁 Re-read Module 5. Rebuild Markov from scratch.

---

## 🃏 Add To Your Flashcards

- The 7 attribution models (Last-Click, First-Click, Linear, Time-Decay, U-Shaped, Markov, Shapley)
- Markov "removal effect" definition
- When to use MTA vs MMM
- Privacy rules for customer data
- The 4 methodology steps (data prep, model choice, implementation, validation)

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 6: AI Agent Build](../Module-06-Capstone-AI-Agent-Build/Reading.md)
