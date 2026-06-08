# Capstone Project, AI Digital Marketing Foundations

> **Format:** Self-directed; 4-8 weeks; ~25-40 hours of work
> **Deliverables:** 7 artifacts + a board-ready 1-pager
> **Scoring:** Use the rubric below to self-grade or peer-review with a marketing colleague

---

## Brief

You have just been hired as **Marketing Manager at Northwind Analytics, Inc.**, a Series-A B2B SaaS company headquartered in Austin, Texas. Northwind sells a no-code analytics dashboard to product managers at mid-market SaaS companies (50-1,000 employees). Annual Recurring Revenue is **$1.4M**, the company closed a $9M Series A six weeks ago, and the CEO has handed you a clear mandate:

> "Eight weeks. Take MRR from $115K to $200K while keeping CAC under $1,800. I want an AI-augmented marketing plan that doesn't burn the Series A in 90 days. The board reviews progress every two weeks."

**The situation you've walked into.** The previous Head of Marketing left after 11 months. There is no documented ICP, the content blog has 47 posts that average 12 pageviews/month, the paid program is a $40K/month Google Ads spend with last-click attribution and no negative-keyword discipline, GA4 was set up by an engineer who is no longer at the company, and the marketing team is you + one junior content writer + a freelance designer. The CRO has handed you a $35K/month budget envelope (down from the $52K the prior Head was spending). The CMO seat is currently the CEO. You report into the COO.

You have one week to deliver an 8-week plan, then 7 weeks to execute it.

---

## Deliverables (7 artifacts)

### 1. ICP Definition Memo (Modules 1, 2, 4)

Write a **2-3 page ICP memo** that defines who Northwind sells to. It must include:

- **Firmographic profile** (industry, company size, revenue band, geography, funding stage)
- **Buyer persona** (job title, daily pain, the 3 jobs-to-be-done they hire your product for)
- **Anti-ICP** (who you explicitly will not sell to, and why, pricing, churn, support cost)
- **Validation evidence** (cite 3-5 closed-won deals from the last 6 months; if data is thin, list the 5 customer-interview questions you would run in Week 1)
- **Why this matters now**, connect the ICP to the $115K → $200K MRR target

**Format:** Markdown or Google Doc, 800-1,500 words. Use the JTBD framework from Christensen (*Competing Against Luck*, 2016) and reference at least one named competitor.

### 2. 8-Week Content Calendar (Modules 3, 4, 5, 6)

Build a **week-by-week content calendar** across **three channels**: SEO blog (long-form), social (LinkedIn + X), and email (nurture + announce). At minimum:

- **8 SEO articles** mapped to keywords with intent + difficulty + estimated TAM (use Ahrefs free or Google Keyword Planner)
- **24 social posts** (3/week across LinkedIn + X), each with a hook + format (text, carousel, video)
- **6 email campaigns** (2 nurture sequences for new MQLs + 4 broadcast emails, pricing change, customer story, product update, webinar)
- **For each piece**: AI tool used (Claude / ChatGPT / Midjourney / HeyGen), human edit-time estimate, owner

**Format:** Google Sheet or Notion database with columns: Week, Channel, Title/Hook, Keyword/Audience, AI Tool, Edit Time, Owner, Status.

### 3. Paid Channel Test Plan (Modules 7, 8)

You have **$22K/month of the $35K budget** allocated to paid. Design 3 paid-channel test plans:

- **Google Ads** (Search + Performance Max), restructure the existing $40K spend into a $12K/month structure. Include account architecture, 3 ad groups per campaign, negative-keyword seed list, bidding strategy with justification (Maximize Conversions vs Target CPA vs Target ROAS).
- **LinkedIn Ads**, $6K/month, Sponsored Content + Conversation Ads. Include audience targeting (Matched Audiences from CRM + lookalikes + job-title-based).
- **One contrarian test**, $4K/month on a channel you suspect is underutilized for B2B SaaS (Reddit Ads, X Ads, podcast pre-rolls, or a niche newsletter). Justify the hypothesis in 1 paragraph.

For each plan: target CAC, target conversion event in GA4 + ad platform, learnings hypothesis ("If LinkedIn CAC is below $1,400, we double down in Week 5"), and the 2-week kill criteria.

**Format:** 2-page narrative + 1 spreadsheet.

### 4. GA4 Measurement Plan (Module 8)

Northwind's GA4 is "set up but broken." You inherit it. Design:

- **A custom-event taxonomy** (10-15 events: `signup_started`, `trial_activated`, `pricing_viewed`, `demo_requested`, `webinar_registered`, etc.) with parameter schemas
- **Conversion event flagging**, which 5-7 events count as Key Events (formerly Conversions) and feed Google Ads + LinkedIn CAPI
- **Audience definitions**, 6 GA4 audiences (e.g., "Pricing Page Bouncers", "Trial Activated Not Converted", "Webinar Attendees")
- **Looker Studio dashboard**, a 1-page exec view (MRR, MQLs, CAC, CAC payback, CVR by source) sketched in markdown wireframe
- **Consent Mode v2 + Enhanced Conversions**, implementation checklist (which tag manager, which forms, which fields hash)

**Format:** 3-4 pages of markdown + 1 wireframe sketch (ASCII or screenshot).

### 5. AI Tool Stack with Cost Forecast (Module 10)

Northwind currently spends $0 on AI tools (the prior Head of Marketing didn't believe in them). Propose a **complete AI marketing stack** under $1,200/month. Categories must include:

- **Generative writing** (Claude Pro / ChatGPT Team / Jasper / Copy.ai)
- **Image generation** (Midjourney / DALL-E / Adobe Firefly)
- **Video & avatars** (HeyGen / Synthesia / Runway)
- **AI for paid creative variants** (Pencil / AdCreative.ai / Meta Advantage+ creative)
- **AI for SEO** (Surfer / Clearscope / MarketMuse)
- **AI orchestration** (Make.com / n8n / Zapier with AI steps)
- **Analytics AI** (Mutiny / Pattern89 / a GA4 BigQuery + Gemini setup)

For each tool: tier, monthly cost, who uses it, what tasks it replaces or augments, the 1-week kill criteria. **Total monthly cost cannot exceed $1,200.** Justify trade-offs.

**Format:** 1-page table + 1-page narrative on trade-offs.

### 6. Weekly OKR Scorecard (Module 1 + content from across)

Design a **weekly OKR scorecard** the marketing team will fill out every Monday. It must include:

- **3 marketing OKRs** for the 8-week period (one revenue, one funnel, one efficiency)
- **For each OKR**: 3-5 weekly KRs with formula, owner, data source, current vs target
- **Leading vs lagging indicator** designation on each KR
- **The "red flag" rule**, if any KR is red 2 weeks in a row, what triggers (escalate to CEO, kill the channel, reallocate budget)

Reference Doerr's *Measure What Matters* (2018) framework explicitly.

**Format:** 1-page Google Sheet template + 1-paragraph operating-rhythm note.

### 7. Board-Ready 1-Pager (Synthesis)

Compile the plan into a **single 1-page board document** the CEO will present to the board on Day 5. It must include:

- Mandate (1 sentence) + 8-week goal ($115K → $200K MRR, CAC < $1,800)
- Budget allocation pie chart ($35K total: $22K paid + $1.2K AI tools + $3K freelance creative + $4.8K events/sponsorships + $4K reserve)
- The 8-week roadmap on a Gantt-style timeline
- The 3 OKRs with their 8-week targets
- The 3 biggest risks and the mitigation for each
- One ask of the CEO (e.g., "approval to redirect $6K from outbound SDR to LinkedIn Ads if Week-4 CAC trends red")

**Format:** Single page. Black-and-white-printable. No more than 200 words of prose.

---

## Rubric (scored out of 100)

| Criterion | Points | Excellent (90-100%) | Acceptable (70-89%) | Below bar (<70%) |
|-----------|--------|---------------------|---------------------|------------------|
| **ICP memo** | 12 | Firmographic + persona + anti-ICP + validation evidence + JTBD framing, all defensible | Most elements present, JTBD framing thin | Generic ICP ("SaaS companies") or missing anti-ICP |
| **Content calendar** | 14 | 8 SEO + 24 social + 6 emails, mapped to keywords/audiences, AI tool + edit-time per piece, owner assigned | Most cells filled, some keyword research thin | Skeleton calendar with no keyword/audience mapping |
| **Paid channel test plans** | 18 | All 3 channels designed with structure, targeting, target CAC, kill criteria; contrarian test has a real hypothesis | Most elements present, kill criteria weak | Missing one channel or no kill criteria |
| **GA4 measurement plan** | 16 | Event taxonomy + audiences + conversion flagging + Looker wireframe + Consent Mode v2 plan all present | Most elements present, Consent Mode v2 thin | Missing the wireframe or the consent layer |
| **AI tool stack** | 12 | Full 7-category stack under $1,200, trade-offs explicit, kill criteria per tool | Most categories covered, budget within range | Over budget or 2+ categories missing |
| **Weekly OKR scorecard** | 14 | 3 OKRs + leading/lagging KRs + red-flag rule + Doerr citation | Most elements present, leading vs lagging not labeled | OKRs are activities ("publish 8 posts") not outcomes |
| **Board 1-pager** | 14 | Single page, all 6 elements, audience-appropriate, 1 ask of CEO | Most elements present, slightly over length | Multi-page or no clear ask |

**Pass mark:** 75/100 overall, with no individual criterion below 50%.

---

## Suggested Timeline (8 weeks)

- **Week 1:** Deliverables 1 (ICP) + 7 (Board 1-pager draft). Get sign-off from CEO before executing.
- **Week 2:** Deliverable 4 (GA4 plan) + Deliverable 5 (AI stack). Wire up the measurement layer; you cannot optimize what you cannot see.
- **Week 3:** Deliverable 3 (Paid channel plans). Launch the restructured Google Ads + LinkedIn campaigns by end of Week 3.
- **Weeks 4-5:** Deliverable 2 (Content calendar). Begin shipping 1 SEO post + 3 social posts + 1 email per week. Run the contrarian paid test.
- **Week 6:** Deliverable 6 (OKR scorecard live). First mid-flight review with CEO. Kill or scale based on Week 5 data.
- **Week 7:** Optimization sprint. Cut the 2 worst-performing pieces of content + the worst-performing paid channel. Double down on the winner.
- **Week 8:** Final board readout. Update the 1-pager with actuals vs plan. Self-grade the rubric.

If you have only 4 weeks (compressed mode): combine Weeks 1-2, Weeks 4-5, and Weeks 7-8. Do not skip Deliverable 7, the board 1-pager is what gets you re-funded.

---

## What "submission" looks like

This is a portfolio you build for yourself. Save as:
```
/AIMarketing-Capstone-Northwind/
   01-icp-memo.md
   02-content-calendar.xlsx
   03-paid-test-plans.pdf
   04-ga4-measurement-plan.md
   05-ai-tool-stack.pdf
   06-okr-scorecard.xlsx
   07-board-1-pager.pdf
   README.md  (1-page summary of approach + self-score)
```

Self-grading: complete the rubric above honestly. If you're below 75, identify the 2-3 weakest deliverables and redo them. Peer review (a marketing colleague or a LinkedIn marketing community) is even better.

---

## Optional Stretch Goals

If you want to push beyond pass:

1. **AI Overviews optimization audit.** Take your 8 SEO articles and re-optimize them for Google's AI Overviews using semantic SEO + schema. Document the on-page changes.
2. **Predictive send-time test.** Add an A/B test to Deliverable 6 that compares AI-predicted send time (Klaviyo or HubSpot Smart Send Time) vs a fixed Tuesday 10am send.
3. **Webinar funnel.** Design a webinar funnel for one of the content pieces, landing page, registration confirmation email, reminder cadence, replay nurture, MQL handoff to sales.
4. **Privacy-first measurement.** Implement Consent Mode v2 + Enhanced Conversions + Meta CAPI end-to-end. Document the cookie-deprecation contingency plan.
5. **Brand-vs-performance budget split rationale.** Write a 2-page memo arguing the optimal brand-vs-performance split for Northwind right now, citing Binet & Field's *The Long and the Short of It* (IPA, 2013).

---

## Why this Capstone Matters

Foundations courses teach you the names of things. This capstone forces you to integrate those names into a defensible plan a CEO would actually approve and a board would actually review. If you can defend each deliverable to a peer or a real marketing leader, you will pass HubSpot Marketing Software, Google Digital Marketing & E-commerce, and the Meta Certified Digital Marketing Associate exams comfortably, and more importantly, you'll be ready for the marketing-manager role this capstone simulates.

Good luck. 🚀
