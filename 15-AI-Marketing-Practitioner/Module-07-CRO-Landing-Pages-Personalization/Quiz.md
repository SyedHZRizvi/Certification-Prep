# ✏️ Module 7 Quiz: CRO, Landing Pages & Personalization

> **Instructions:** Answer all 25 questions WITHOUT looking at the reading.
> Aim for 20/25 minimum.

---

## Questions

### Q1. The 4-stage CRO cycle is: *(Remember)*
A. Plan, Execute, Inspect, Improve
B. Observe, Hypothesize, Test, Iterate
C. Brand, Promote, Sell, Repeat
D. Audience, Offer, Creative, Place

---

### Q2. In Frequentist A/B testing, a p-value of 0.04 means: *(Understand)*
A. There's a 96% chance the treatment is better
B. There's a 4% probability of seeing this data if there were no real effect
C. The lift is 4%
D. The test has 4% power

---

### Q3. Peeking at a Frequentist test before reaching sample size: *(Analyze)*
A. Helps you stop early
B. Inflates the false positive rate
C. Improves accuracy
D. Has no effect

---

### Q4. Bayesian testing outputs: *(Understand)*
A. A p-value
B. A "probability the treatment is better" (e.g., 92% chance treatment wins)
C. A z-score only
D. Only the lift percentage

---

### Q5. The Minimum Detectable Effect (MDE) is: *(Remember)*
A. The smallest absolute conversion rate possible
B. The smallest relative lift you want to detect statistically
C. The mandatory test duration
D. The minimum sample size

---

### Q6. A site with 5,000 visits/month at 2% conversion rate, trying to detect a 10% lift, will need approximately: *(Apply)*
A. A few days
B. About 9 months
C. 5 years
D. 1 month

---

### Q7. Mutiny is best described as: *(Remember)*
A. An A/B testing tool only
B. A B2B website personalization platform (uses reverse-IP detection)
C. An email marketing platform
D. A landing page builder

---

### Q8. Unbounce Smart Traffic does what differently from Mutiny? *(Analyze)*
A. Personalizes copy based on company
B. Routes each visitor to the variant ML thinks they'll convert on
C. Sends emails
D. Builds reports

---

### Q9. The landing page section that should appear FIRST (above the fold) is: *(Apply)*
A. Pricing table
B. FAQ
C. Hero with headline, subhead, CTA
D. Footer

---

### Q10. Best practice for a paid-traffic landing page is to: *(Apply)*
A. Send traffic to the homepage
B. Build a campaign-specific landing page (consistently outperforms homepage)
C. Use only the contact page
D. Multiple navigation menus

---

### Q11. Form fields that exceed a certain number significantly reduce conversion. The threshold above which you typically see drop-off is: *(Remember)*
A. 2 fields
B. 5 fields
C. 25 fields
D. 50 fields

---

### Q12. Hotjar's three core features are: *(Remember)*
A. Email + SMS + Push
B. Heatmaps + Session Replays + Surveys
C. Ads + Analytics + SEO
D. CRM + Pipeline + Reports

---

### Q13. Microsoft Clarity is: *(Remember)*
A. A paid enterprise tool
B. A free heatmap + session replay tool (no usage limits)
C. The same as Hotjar
D. Microsoft's CRM

---

### Q14. Booking.com's publicly-shared experimentation data showed that approximately what % of tests are NEGATIVE (would have hurt the business)? *(Remember)*
A. 1%
B. 20%
C. 50%
D. 90%

---

### Q15. Multi-Armed Bandit testing differs from classic A/B testing because: *(Analyze)*
A. It only works on email
B. It adaptively allocates more traffic to winning variants as the test runs
C. It uses no statistics
D. It requires manual variant switching

---

### Q16. Statistical power of 0.80 means: *(Understand)*
A. The test has a 20% lift
B. There's an 80% chance of detecting the effect IF it exists
C. The treatment wins 80% of the time
D. Confidence level is 80%

---

### Q17. The Airbnb search-result conversion test that doubled conversion (2019) primarily tested: *(Remember)*
A. Pricing layout
B. Larger photos on listing cards
C. Search algorithm
D. Checkout flow

---

### Q18. The most common reason CRO programs fail is: *(Evaluate)*
A. Wrong tool choice
B. Testing without observation first (random guessing)
C. Low budget
D. Wrong platform

---

### Q19. A "Risk Reversal" element on a landing page is: *(Remember)*
A. A logo
B. An offer that reduces purchase risk (money-back guarantee, free trial, etc.)
C. The price
D. A testimonial

---

### Q20. Stock photography (especially handshake / business meeting photos) on landing pages: *(Evaluate)*
A. Improves conversion
B. Typically reduces conversion (looks generic, inauthentic)
C. Has no effect
D. Is required for SEO

---

### Q21. The recommended weekly habit for CRO is: *(Apply)*
A. Run 10 new tests per week
B. Watch 5 random session replays daily and note one improvement each
C. Change designs weekly
D. Email customers weekly

---

### Q22. ClickFunnels is best suited for: *(Understand)*
A. Single landing pages
B. Funnel-first flows (offers + upsells + downsells + order bumps)
C. SEO content sites
D. Email-only campaigns

---

### Q23. Dynamic Yield's specialty is: *(Understand)*
A. B2B SaaS
B. Ecom personalization (product recommendations, dynamic copy by segment)
C. Email marketing
D. SEO

---

### Q24. Realistic conversion lift from "moving CTA above the fold" is typically: *(Apply)*
A. 0-2%
B. 10-30%
C. 100%
D. 500%

---

### Q25. The single most important CRO discipline that compounds is: *(Create)*
A. Running the most tests possible
B. Combining many changes into one big launch
C. Disciplined hypothesis → sample-size → significance → roll out cycle
D. Following design trends

---

## 🎯 Answers + Explanations

### Q1: **B. Observe, Hypothesize, Test, Iterate**
The classic CRO cycle. Skip the Observe step and you're guessing — the most common failure mode.

### Q2: **B. 4% probability of seeing this data if there were no real effect**
P-value is the probability of observing the data (or more extreme) under the null hypothesis. It's NOT "the probability the treatment is better" — that's a common misinterpretation.

### Q3: **B. Inflates the false positive rate**
Peeking creates a multiple-comparisons problem. Every time you peek and could stop, you're doing another test. False positive rates compound. Either use Bayesian (peek-tolerant) or commit to fixed sample size.

### Q4: **B. "Probability the treatment is better"**
Bayesian outputs a probability statement: "92% chance treatment beats control." More intuitive than a p-value. Also tolerant of peeking.

### Q5: **B. The smallest relative lift you want to detect statistically**
MDE is what you tell the calculator: "I want to detect a 10% relative lift if it exists." Smaller MDE = more sample size needed.

### Q6: **B. About 9 months**
Math: 5K visits × 12 months ÷ 2 variants = 30K per variant per year. To detect 10% lift at 2% baseline = ~77K per variant needed. ~9 months minimum.

### Q7: **B. A B2B website personalization platform (reverse-IP)**
Mutiny uses Clearbit / 6sense reverse-IP data to detect visitor's company, then serves personalized hero/copy/CTA. Acquired by Salesforce in 2024.

### Q8: **B. Routes each visitor to the variant ML thinks they'll convert on**
Unbounce doesn't personalize copy per visitor — it uses ML to send Visitor A to Variant 2 because users like A historically converted on V2. Different mechanism.

### Q9: **C. Hero with headline, subhead, CTA**
Above-the-fold hero with headline (proposition), subhead (clarification), CTA (one button). Critical: only ONE primary CTA. Multiple CTAs above fold = analysis paralysis.

### Q10: **B. Build a campaign-specific landing page**
Campaign-specific landing pages consistently outperform homepages by 2-5x. NEVER send paid traffic to a homepage.

### Q11: **B. 5 fields**
Above 5 form fields, conversion drops sharply. Each field after 5 reduces conversion ~5-10%. Pare to absolute essentials.

### Q12: **B. Heatmaps + Session Replays + Surveys**
Hotjar's three core features. Session replays = watch real users. Heatmaps = aggregate behavior. Surveys = trigger pop-up questions.

### Q13: **B. A free heatmap + session replay tool (no usage limits)**
Microsoft Clarity is fully free with unlimited sessions. Same core features as Hotjar's paid tier. Launched 2020.

### Q14: **B. 20%**
Booking.com publicly shares: ~10% positive tests, ~70% neutral, ~20% NEGATIVE (would have hurt the business). The discipline of testing catches losers.

### Q15: **B. Adaptively allocates more traffic to winning variants**
Multi-armed bandits start 50/50, then shift traffic to leading variants as evidence accumulates. Faster convergence, less wasted traffic on losers — but harder to interpret p-values from.

### Q16: **B. 80% chance of detecting the effect IF it exists**
Power = sensitivity. 0.80 power means: if a 10% lift exists, there's an 80% chance your test will detect it as statistically significant.

### Q17: **B. Larger photos on listing cards**
Airbnb's 2019 test made photos larger + more padding. Conversion doubled from 2.3% to 4.5%. Estimated $250M+ annual revenue impact.

### Q18: **B. Testing without observation first (random guessing)**
The most common CRO failure mode. Marketers guess at what's broken, test random changes, and hit at random rates. Always observe first (replays + heatmaps).

### Q19: **B. An offer that reduces purchase risk**
Money-back guarantee, 30-day free trial, no-credit-card-required — all reduce the buyer's risk of "what if it doesn't work." Lifts conversion 5-10% typically.

### Q20: **B. Reduces conversion (looks generic, inauthentic)**
Generic stock photography is a conversion killer. Real customer photos, real product photos, or carefully-staged authentic photos outperform stock by significant margins.

### Q21: **B. Watch 5 random session replays daily, note one improvement each**
30 days = 30 prioritized improvements. The most impactful daily habit for any CRO program.

### Q22: **B. Funnel-first flows**
ClickFunnels specializes in multi-step sales flows: tripwire → main offer → order bump → upsell → downsell. NOT a general landing page builder.

### Q23: **B. Ecom personalization**
Dynamic Yield (Mastercard-owned, formerly McDonald's) specializes in ecom — dynamic product recommendations, copy by segment, real-time personalization for shopping flows.

### Q24: **B. 10-30%**
Moving CTA above the fold consistently delivers 10-30% lift. One of the highest-leverage common tests.

### Q25: **C. Disciplined hypothesis → sample-size → significance → roll out cycle**
The DISCIPLINE compounds. Booking.com runs 1,000+ tests because each one teaches them what's true about their users. Random testing or "follow design trends" yields randomness.

---

## 📊 Score Yourself

- 23–25/25 → 🏆 Move to Module 8!
- 20–22/25 → ✅ Solid.
- 16–19/25 → ⚠️ Re-read Bayesian/Frequentist + sample size + Hotjar sections.
- <16/25 → 🔁 Restart Module 7.

---

## 🃏 Add To Your Flashcards

- 4-stage CRO cycle
- P-value interpretation
- Bayesian vs Frequentist outputs
- MDE definition
- 8-section landing page anatomy
- Mutiny vs Unbounce Smart Traffic (different mechanisms)
- Booking.com 10/70/20 split (positive/neutral/negative tests)
- Statistical Power (0.80)
- Form field threshold (5)

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 8](../Module-08-AI-Content-Production-Scale/Reading.md)
