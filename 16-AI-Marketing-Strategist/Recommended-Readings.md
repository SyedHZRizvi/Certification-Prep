# Recommended Readings — AI Digital Marketing Strategist Track

> **Purpose:** This curated list extends the per-module "Further Reading" sections with the canonical bibliography for a marketing analytics, attribution, MMM, and predictive-modeling strategist. Use it during preparation, after passing the GA4 + Meta Marketing Science Professional credentials, and as the foundation of a personal reference library.

> **How to use:** Engage each item at the point in the course indicated. The single most important free anchor is the Google + Meta + LinkedIn official documentation. The seminal books listed below are the long-tail foundation that distinguishes "the senior strategist" from "the operator."

---

## Canonical Textbooks (3-5 must-haves)

### Analytics and Measurement
- **Kaushik, Avinash — *Web Analytics 2.0: The Art of Online Accountability and Science of Customer Centricity* (Sybex, 2009).**
  - The most-quoted measurement book in the field. The "Trinity" framework (Behavior, Outcomes, Experience), the multi-channel-attribution chapter, the "customer-centricity" framing. Some specific tools are dated, but the frameworks are timeless. Engage during Modules 3, 4.
- **Tellis, Gerard J. — *Effective Advertising: Understanding When, How, and Why Advertising Works* (SAGE, 2003).**
  - The empirical-research synthesis on advertising effects. Forms the theoretical foundation of Marketing Mix Modeling — what works, what doesn't, by how much, and why. Engage during Module 5.
- **Hanssens, Dominique M., Parsons, Leonard J. & Schultz, Randall L. — *Market Response and Marketing Mix Models*, 2nd ed. (Kluwer Academic, 2003).**
  - The canonical academic reference on MMM mathematics — ad-stock, saturation, Bayesian priors, decomposition. Required reading for anyone building MMM themselves. Engage during Module 5.
- **Kohavi, Ron, Tang, Diane & Xu, Ya — *Trustworthy Online Controlled Experiments: A Practical Guide to A/B Testing* (Cambridge University Press, 2020).**
  - The Microsoft-grade textbook on running A/B tests at scale. Sample-size math, sample-ratio mismatch, novelty effects, twyman's law. The "A/B testing bible." Engage during Module 4 and the Capstone's incrementality calendar.
- **Fader, Peter — *Customer Centricity: Focus on the Right Customers for Strategic Advantage*, 2nd ed. (Wharton Digital Press, 2020).**
  - The customer-centricity framework from the Wharton professor behind BG/NBD. The 20%-of-customers-drive-80%-of-profit framing, with the math behind it. Engage during Module 6.

### Statistical Foundations
- **Gelman, Andrew, Carlin, John B., et al. — *Bayesian Data Analysis*, 3rd ed. (CRC Press, 2013).**
  - The graduate-level textbook on Bayesian inference. Required for anyone building Bayesian MMM (PyMC, Stan) from scratch. Engage during Module 5 deep dives.
- **McElreath, Richard — *Statistical Rethinking: A Bayesian Course with Examples in R and Stan*, 2nd ed. (CRC Press, 2020).**
  - The most accessible Bayesian-statistics textbook. Optional for the strategist; required for the modeler. Engage during Module 5.

---

## Seminal Papers and HBR Articles (5-10 indispensable)

### Customer Lifetime Value
- **Fader, Peter S., Hardie, Bruce G.S. & Lee, Ka Lok — "RFM and CLV: Using Iso-Value Curves for Customer Base Analysis" — *Journal of Marketing Research*, November 2005.**
  - One of the foundational papers behind modern CLV modeling. Free on Fader's homepage. Engage during Module 6.
- **Fader, Peter S. & Hardie, Bruce G.S. — "Counting Your Customers the Easy Way: An Alternative to the Pareto/NBD Model" — *Marketing Science*, Spring 2005.**
  - The BG/NBD paper — the model behind the `lifetimes` Python library. Engage during Module 6.
- **Schmittlein, David C., Morrison, Donald G. & Colombo, Richard — "Counting Your Customers: Who Are They and What Will They Do Next?" — *Management Science*, 1987.**
  - The original Pareto/NBD paper that BG/NBD extends. Engage during Module 6 (depth-skip if not math-focused).

### Attribution
- **Shao, Xuhui & Li, Lexin — "Data-driven multi-touch attribution models" — *KDD '11 Proceedings*, 2011.**
  - One of the foundational papers on data-driven attribution. Free on ACM. Engage during Module 4.
- **Berman, Ron — "Beyond the Last Touch: Attribution in Online Advertising" — *Marketing Science*, July 2018.**
  - Critique of last-touch attribution + a more rigorous alternative. Engage during Module 4 and the Capstone.
- **Lewis, Randall A. & Rao, Justin M. — "The Unfavorable Economics of Measuring the Returns to Advertising" — *Quarterly Journal of Economics*, 2015.**
  - Required reading on the difficulty of measuring incremental advertising lift. Engage during Module 4 and the Capstone's incrementality calendar.
- **Hartmann, Wesley R., Manchanda, Puneet, Nair, Harikesh, et al. — "Modeling Consumer Search and Choice in Industries with Multiple Heterogeneous Products" — *Marketing Science*, 2008.**
  - Foundational paper for understanding search-channel attribution mechanics.

### MMM and Optimization
- **Jin, Yuxue, Wang, Yueqing, et al. — "Bayesian Methods for Media Mix Modeling with Carryover and Shape Effects" — *Google Research*, 2017.**
  - The foundational Google paper that became the basis for Meridian. Free on research.google. Engage during Module 5.
- **Meta — *Robyn: An R Package for Marketing Mix Modeling* (open source, 2020-current).**
  - Free documentation at facebookexperimental.github.io/Robyn. The most-used open-source MMM library. Engage during Module 5.
- **Google — *Meridian* (open source, 2024-current).**
  - Google's open-source MMM library, Bayesian-by-design. Engage during Module 5.
- **McKinsey & Company — *State of Marketing Analytics* (annual; mckinsey.com).**
  - Free. The McKinsey perspective on how to operationalize MMM at scale.
- **PyMC Labs — *Bayesian Marketing Mix Modeling* (open source; pymc-marketing.readthedocs.io).**
  - Free. The Bayesian alternative to Robyn/Meridian. Engage during Module 5.

### Strategic Frameworks
- **Porter, Michael E. — *Competitive Strategy: Techniques for Analyzing Industries and Competitors* (Free Press, 1980).**
  - The five-forces framework. Engage during Module 1.
- **Christensen, Clayton M., Hall, Taddy, Dillon, Karen & Duncan, David — *Competing Against Luck: The Story of Innovation and Customer Choice* (HarperBusiness, 2016).**
  - The Jobs-to-Be-Done framework. Engage during Module 1.
- **Doerr, John — *Measure What Matters: How Google, Bono, and the Gates Foundation Rock the World with OKRs* (Portfolio, 2018).**
  - The OKR framework. Engage during Module 1.

### Practitioner Reports (free, annual)
- **McKinsey & Company — *State of Marketing Mix Modeling* (annual; mckinsey.com).**
  - Free. Engage during Module 5.
- **Google — *Marketing Measurement Insights* whitepapers (think.google.com/marketing-strategies/).**
  - Free. The official Google view on attribution + MMM + incrementality. Engage during Modules 4, 5.
- **Meta — *Marketing Science Resource Library* (facebook.com/business/m/marketing-science).**
  - Free. The Conversions API whitepaper, the Aggregated Event Measurement whitepaper, the Robyn case studies. Engage during Module 4, 5.

---

## Industry Resources (3-5 worth subscribing to)

- **Avinash Kaushik's *Occam's Razor* blog** (kaushik.net/avinash) — quarterly long-form posts. The single most-quoted measurement-strategist voice in the field. Subscribe from Module 1.
- **Simo Ahava's blog** (simoahava.com) — weekly. The most technical GTM + GA4 + server-side tagging blog on the internet. Engage during Module 3.
- **Julian Juenemann (MeasureSchool) on YouTube** — weekly. Tactical GA4 + GTM + Looker Studio walkthroughs. Engage during Module 3.
- **Bounteous + Code3 + Search Discovery + BTI Studios blogs** — the major measurement consultancies publish high-quality case studies. Subscribe from Module 1.
- **Locally Optimistic** (locallyoptimistic.com) — analytics-engineering community blog. Particularly relevant if Solway-style use cases (data warehouse + CDP + reverse-ETL) are your daily reality. Engage during Module 2.
- **The Marketing Sherpa annual reports** (marketingsherpa.com) — free with email. B2B measurement focus. Engage between modules.
- **Recast** (getrecast.com/blog) — the modern MMM vendor's blog; particularly strong on the "why your MMM is wrong" diagnostics. Engage during Module 5.
- **Mass** (massvanity.com) and **MMM Hub** (mmmhub.com) — counterpart MMM vendors with publicly-shared case studies. Engage during Module 5.
- **Northbeam, Triple Whale, Rockerbox, Hyros blogs** — the post-iOS attribution vendors. Compare their narratives critically. Engage during Module 4.
- **Reforge** (reforge.com) — paid mini-degrees + free articles. The retention + growth-loops content. Engage during Modules 6, 8.

---

## Free Academic Courses (2-3 that overlap with this material)

- **Coursera *Google Analytics Certification* prep** + the actual Google Analytics 4 Certification on Google Skillshop (free; required for this track). Engage during Module 3.
- **Stanford CS246 *Mining Massive Datasets*** (Jure Leskovec et al.; web.stanford.edu/class/cs246) — free lecture notes + textbook. The graduate-level foundation for predictive analytics at scale. Engage during Module 6, optional.
- **CXL Institute *Digital Analytics Minidegree*** (cxl.com/institute/digital-analytics) — paid $999/yr; free articles widely available. The most rigorous applied-analytics curriculum outside academia. Engage during Modules 3, 4.
- **CXL Institute *Measurement & Analytics Minidegree*** (cxl.com/institute/measurement-analytics) — paid; free articles. The complement to the Digital Analytics minidegree. Engage during Modules 3, 4, 8.
- **Andrew Ng *Machine Learning Specialization*** (Coursera; DeepLearning.AI) — free audit. The most-watched ML primer. Engage during Module 6.
- **Andrew Ng *Generative AI for Everyone*** (Coursera; DeepLearning.AI) — free audit. Engage during Modules 7, 10.
- **MIT OpenCourseWare — 15.075 *Statistical Thinking and Data Analysis*** (ocw.mit.edu) — free graduate-level statistics. Engage during Modules 4, 5, 6.
- **MIT OpenCourseWare — 15.071 *The Analytics Edge*** (ocw.mit.edu) — free MIT Sloan analytics course. Engage during Modules 3, 6.
- **Harvard CS109 *Data Science*** (harvard-iacs.github.io) — free lecture notes. Engage during Module 6.
- **Wharton *Customer Analytics*** (Coursera; Peter Fader) — audit free. Direct overlap with Module 6 (Fader teaches the BG/NBD model himself in the course). Engage during Module 6.

---

## Standards and Regulatory References

- **GDPR (General Data Protection Regulation)** — full text at gdpr-info.eu. Free. Engage during Module 9 and the Capstone.
- **CCPA + CPRA (California)** — oag.ca.gov/privacy/ccpa. Free.
- **EU AI Act** (effective phases through 2026-2027) — eur-lex.europa.eu. Free. Engage during Module 9.
- **NIST AI Risk Management Framework** (nist.gov/itl/ai-risk-management-framework) — free. US-side AI governance baseline. Engage during Module 9.
- **Apple App Tracking Transparency (ATT) + SKAdNetwork 4 + AdAttributionKit** — developer.apple.com. Reference for iOS measurement.
- **IAB Tech Lab — Privacy Sandbox documentation** (iabtechlab.com) — free; the open-source reference for the post-cookie web.
- **AWS Clean Rooms + Snowflake Clean Rooms + LiveRamp Safe Haven documentation** — free vendor documentation. Engage during the Capstone's clean-room strategy.
- **Google's *Differential Privacy* documentation** (developers.google.com/identity/differential-privacy) — free. Engage during Module 9.

---

## Recommended Reading Sequence

If you have time for only 6 books, read in this order:

1. **Kaushik — *Web Analytics 2.0*** (the measurement foundation)
2. **Kohavi, Tang & Xu — *Trustworthy Online Controlled Experiments*** (the experimentation bible)
3. **Fader — *Customer Centricity*** (the customer-centric strategic frame)
4. **Hanssens, Parsons & Schultz — *Market Response and Marketing Mix Models*** (the MMM mathematical foundation)
5. **Tellis — *Effective Advertising*** (the advertising-effectiveness empirical synthesis)
6. **Doerr — *Measure What Matters*** (the OKR system)

If you have time for only 4 papers, read:

1. **Fader & Hardie 2005 (BG/NBD)** — the CLV model paper
2. **Shao & Li 2011 (Data-driven attribution)** — the DDA foundational paper
3. **Jin, Wang et al. 2017 (Google Bayesian MMM)** — the MMM paper behind Meridian
4. **Lewis & Rao 2015 (Unfavorable Economics of Advertising Measurement)** — the counter-narrative that calibrates expectations on attribution

These four combined contain roughly 70% of the technical foundation for the senior-strategist conversations in 2026.

---

## Tool Documentation You Should Bookmark

At the strategist level, the official vendor documentation is your primary reference:

- **Google Analytics 4 Help Center** — support.google.com/analytics
- **Google Tag Manager Help (web + server-side)** — support.google.com/tagmanager
- **Google Ads Help Center** — support.google.com/google-ads
- **Meta Business Help Center** — facebook.com/business/help
- **LinkedIn Marketing Help Center** — business.linkedin.com/marketing-solutions/help
- **Segment Documentation** — segment.com/docs
- **Hightouch Documentation** — hightouch.com/docs
- **Snowflake Documentation** — docs.snowflake.com
- **BigQuery Documentation** — cloud.google.com/bigquery/docs (especially GA4 export schema)
- **PyMC Documentation** — docs.pymc.io
- **Robyn Documentation** — facebookexperimental.github.io/Robyn
- **Meridian Documentation** — developers.google.com/meridian

---

## A Note on AI in Strategic Marketing (2024-2026 specifics)

The biggest shifts you should be tracking:

- **Bayesian MMM** (PyMC Marketing, Robyn 4.0+, Meridian) — replacing frequentist MMM at most major advertisers.
- **AI-driven CDP** — Segment's CustomerAI, Twilio Engage, mParticle's predictive audiences. Activate predictive audiences directly from the CDP.
- **AI-driven personalization at scale** — contextual bandits + LLM-generated dynamic creative + 1:1 product recommendations.
- **AI explainability** — LIME, SHAP, integrated gradients. Required for EU AI Act compliance on any "limited risk" use case.
- **Data clean rooms** — AWS Clean Rooms, Snowflake, LiveRamp Safe Haven for cookieless partner-data joins.
- **Privacy-preserving ML** — differential privacy, federated learning. Apple and Google's preferred approach in the post-cookie web.

Tool pricing and feature names verified as of 2026-05. **Always verify current pricing on the vendor's site before committing budget.**

---

## Maintaining Your Skills

Strategist-level skill atrophy is slower than practitioner-level, but the math gets rusty fast. Plan to:

- Retake GA4 Certification annually (it's free; the exam updates).
- Build one new model (MMM, CLV, churn) per year on a synthetic dataset to keep the math alive.
- Attend one MeasureCamp regional unconference per year (free; measurecamp.org).
- Subscribe to Avinash Kaushik + Simo Ahava + at least one MMM-vendor blog (Recast or Mass).
- Read one peer-reviewed marketing-science paper per quarter. *Marketing Science*, *Journal of Marketing Research*, and *Journal of Marketing* are the three top journals.

---

## Career-Path Note

The strategist role is one of the highest-leverage seats in modern marketing. The career ladder typically runs:

- **Marketing Analyst (Years 0-3)** — dashboards + ad-hoc analysis
- **Senior Marketing Analyst / Analytics Lead (Years 3-6)** — measurement architecture
- **Marketing Science Manager / Director, Marketing Analytics (Years 5-10)** — cross-functional measurement strategy
- **VP, Growth / Performance Marketing (Years 10-15)** — measurement + budget allocation + agency oversight
- **Chief Marketing Officer (Years 15+)** — total marketing P&L

The strategist credentials open the door at Year 5+. The peer-reviewed-paper reading habit is what compounds toward the VP/CMO seat.

---

Good luck. AI Digital Marketing Strategist is the credential that proves you can stand in front of a CFO and defend a $50M budget with numbers, not anecdotes. Stay rigorous, stay numerate, stay readable. 🧠
