# Module 3: Capstone 2 — Live Paid Campaign 💰

> **Why this module matters:** This is the only capstone with real money at stake. You'll spend $200 on Google Ads + Meta Ads, document everything that happens, and publish the post-mortem as a public case study. The story you tell — even if the campaign fails — is the portfolio piece.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - [Portfolio strategy & P-C-A-R-L format](../Module-01-Portfolio-Strategy-What-To-Build/Reading.md) — covered earlier in this course
> - [SEO + Content Audit](../Module-02-Capstone-SEO-Content-Audit/Reading.md) — covered in the previous module (or parallelize if you started both)
> - Paid acquisition fundamentals (auction mechanics, CPC/CPM/ROAS, audience targeting) — covered in [16-AI-Marketing-Paid-Acquisition](../../16-AI-Marketing-Paid-Acquisition/README.md), especially Modules 2–6
> - Google Tag Manager / Meta Pixel basics — covered in [17-AI-Marketing-Analytics-Automation Module 1](../../17-AI-Marketing-Analytics-Automation/Module-01-Tracking-Foundations/Reading.md)
> If any of these are shaky, pause and review — this module assumes you can set up conversion tracking without hand-holding.

---

## 🎬 A Story: The $200 That Bought A Job

Picture a marketer — call them Sam — who's stuck. Two years of agency work, lots of "I helped manage the X account," nothing they can link to. They apply for performance marketing roles and get ghosted.

One Saturday, Sam decides to spend $200 of their own money. Real cash, real platforms, real risk. The subject: a friend's online course on watercolor painting that's been generating $300/mo through organic-only.

They map it out: $100 on Google Search Ads targeting "learn watercolor online," $100 on Meta with a lookalike audience built from the friend's email list. 14 days. Three creative variants on each platform.

Day 3, Sam learns that Meta's algorithm hates their first creative. CTR is 0.4%. Pause it. Day 5, Google's search ads are getting clicks but the landing page is converting at 0.8% — way too low. Sam works with the friend to rewrite the headline, swap the hero image. Day 7, conversion rate up to 3.2%. Day 10, the Meta UGC-style variant they relaunched is crushing — CTR 2.1%, CPL $4.50.

At day 14, Sam writes it all up. Final numbers: $189 spent (Meta cut them off before they hit $200, weird), 28 leads, 4 paying customers ($156 revenue). Negative ROAS. Sam includes everything — the failed creatives, the bad landing page, the moment they almost panicked at $40 spent with zero conversions, the rewrite, the relaunch.

The post-mortem goes on LinkedIn. 14k impressions. A growth marketing lead at a SaaS startup comments. Two weeks later, Sam is in interviews. Three weeks later, offer.

The interviewer's exact words: *"We've seen 200 candidates who said they 'managed campaigns.' You're the first who showed me the campaign you ran from start to finish. With your own money. And admitted the parts that failed. That tells me you'll actually run real campaigns, not just sit in meetings about campaigns."*

The $200 was the cheapest tuition Sam ever paid.

---

## 🎯 What You're Building In Module 3

**Deliverable:** A public case study (blog post + LinkedIn carousel) of a live $200 paid campaign you ran across Google Ads + Meta Ads (or one of them, if your subject is clearly a single-channel fit).

**Components:**
1. **The campaign itself** — actually launched, actually spent ~$200, ran ≥14 days
2. **Brief document** — written before launch (goals, audience, creatives, budget split)
3. **14-day optimization log** — daily journal entries
4. **Creative assets** — all variants (winning + losing), screenshots from the ad managers
5. **Post-mortem write-up** — 1,500–2,500 word public blog post
6. **LinkedIn carousel** — 6–10 slides summarizing the post-mortem

**Total time:** ~14 hours of focused work spread across 2.5 weeks (campaign needs 14 days of live data).

---

## 🛒 Picking The Right Subject

The subject is everything. Pick wrong, and you can't get the data, the screenshots, or the testimonial.

### Tier 1 (Best): Your Own Micro-Product

If you have anything you sell — a Notion template, an e-book, a course, a consult service, an Etsy product — use that. You own the data, you own the screenshots, you can be honest about results.

### Tier 2 (Great): A Friend's Real Business

A friend's coaching practice, online course, indie e-commerce store, lead-gen service. They give you ad-account access (or you make a new one with their permission); you give them the budget AND the campaign.

**The deal you offer them:** *"I'll spend $200 of MY money on ads for your business in exchange for: (1) permission to publish the case study publicly, (2) you accept I might fail, (3) you give me a 2-line testimonial when we're done."*

Most friends say yes immediately.

### Tier 3 (OK): A Public Indie Maker Who Trades With You

Same as the SEO audit — find an indie founder on Twitter, offer the trade.

### Tier 4 (Last Resort): Your Own Personal Brand

Run ads for your own LinkedIn profile (newsletter, portfolio, etc.). Easier to control, harder to get conversion-style metrics. Use only if the above options don't work.

---

## 💵 The $200 Budget Breakdown

You have $200 total. Default allocation:

| Channel | Budget | Rationale |
|---------|--------|-----------|
| Google Ads (Search) | $100 | Captures intent — people actively searching |
| Meta Ads (Facebook/Instagram) | $100 | Discovery — people who don't know they need it yet |

**Alternative splits depending on subject:**

- **B2B SaaS with bottom-of-funnel keywords:** $150 Google / $50 Meta
- **DTC product with strong visual:** $60 Google / $140 Meta
- **Local service business:** $130 Google / $70 Meta (search intent dominates)
- **Personal brand / newsletter signup:** $50 Google / $150 Meta

Pick the split BEFORE you start. Don't change it mid-campaign.

---

## 🛠️ Tool Walkthrough 1: Google Ads Setup

**Cost:** Just the $100 budget + a Google account.

### Step By Step

1. **Create the Google Ads account.**
   - Go to ads.google.com → click "Start now."
   - If you don't have a Google Workspace email, use a personal Gmail.
   - **Important:** Skip "Smart Mode" — pick "Switch to Expert Mode" at the very first step. Smart Mode hides the controls you need.

2. **Set up billing.**
   - Add a credit card. Daily budget will cap spend.
   - Set a campaign budget of $100 total, $7-10/day for 14 days.

3. **Pick the campaign type.**
   - "Search" for intent-driven (recommended for most subjects)
   - "Display" if you want awareness (not recommended for this capstone)
   - "Performance Max" — DO NOT pick this for your first campaign. It hides too much. Pick Search.

4. **Set the campaign goal.**
   - "Leads" or "Sales" — pick whichever matches your subject's funnel.

5. **Conversion tracking — CRITICAL.**
   - This is the step 80% of new advertisers skip. Without conversion tracking, you have no idea what's working.
   - Set up either: (a) a Google Tag Manager tag firing on the thank-you page, OR (b) Google Ads conversion pixel on the thank-you page.
   - Test it: complete a form yourself, wait 24 hours, see if the conversion registers.

6. **Keywords — start narrow.**
   - 3 ad groups, 5–10 keywords each. Use [exact match] and "phrase match" only. NO broad match for a $100 campaign.
   - Example for a coaching business: `[career coach NYC]`, `"career coaching services"`, `[hire career coach]`.

7. **Write 2–3 ad variants per ad group.**
   - Responsive Search Ads (RSA) with multiple headlines and descriptions.
   - Include: target keyword in headline 1, value prop in headline 2, CTA in headline 3.
   - Description: highlight 2 differentiators.

8. **Set up Google Ads Editor (optional but useful).**
   - Free desktop app. Lets you edit ads offline, bulk operations.
   - Especially good for managing multiple ad variants.

9. **Launch + screenshot.**
   - Screenshot the campaign setup, ad groups, keyword list. This goes in your brief document.

### The Daily Optimization Routine (10 min/day)

Each day, check:

- Spend vs daily budget (anything off?)
- Click-through rate (CTR) per ad — if any are <1%, consider pausing
- Conversion rate per ad group — if any are 0% after $30 spent, pause and rewrite
- Search terms report — anything weird showing up? Add to negative keywords.

---

## 🛠️ Tool Walkthrough 2: Meta Ads Setup

**Cost:** $100 budget + a Facebook account + a Facebook Page for your subject.

### Step By Step

1. **Set up the Page (if it doesn't exist).**
   - facebook.com/pages/create
   - Add a basic profile pic, description, link to subject's site.

2. **Open Meta Business Suite / Ads Manager.**
   - business.facebook.com/adsmanager
   - Create the ad account.
   - Connect a payment method.

3. **Install the Meta Pixel — CRITICAL.**
   - Same logic as Google's conversion tag.
   - Meta Pixel on every page; "Lead" event on the form-submission thank-you.
   - Verify in Meta Events Manager that the pixel is firing.

4. **Pick the campaign objective.**
   - For most subjects: "Leads" (if collecting signups) or "Sales" (if e-commerce).
   - Avoid "Awareness" or "Engagement" for this capstone — they're vanity metrics.

5. **Build the audience.**
   - **Option A (best): Lookalike Audience.** If your subject has an email list of 500+, upload it as a Custom Audience, then build a 1–3% Lookalike. This is Meta's superpower.
   - **Option B: Interest targeting.** Pick 3–5 interests that match the customer profile. Audience size: 500k–3M.
   - **Option C: Broad.** Just target demographics + location. Surprisingly effective in 2026 with Meta's Advantage+ AI.

6. **Build the creatives — 3 variants.**
   - Variant A: Photo / static image (Canva-made or original)
   - Variant B: UGC-style video (15–30 sec, looks user-generated)
   - Variant C: Carousel (3–5 images with text)

7. **Use Midjourney / DALL·E for visual creative if budget allows.**
   - Midjourney: $10/mo. Generates beautiful images. Good for stylized creatives.
   - DALL·E: free with ChatGPT Plus. Simpler interface.
   - Canva: free. Easiest for static graphics with text overlays.

8. **Write the ad copy.**
   - Primary text (top): hook + benefit (50–125 chars optimal)
   - Headline: clear value (40 chars max)
   - Description: CTA + secondary detail (30 chars optimal)
   - Test 3 hook variations even within the same creative.

9. **Set budget + schedule.**
   - $7/day, 14 days. Use "Advantage Campaign Budget" if testing multiple ad sets.

10. **Launch + screenshot.**
    - Capture the campaign setup, ad sets, creatives, audience config.

### The Daily Optimization Routine (10 min/day)

- CPM trending up or down?
- CPC reasonable for niche?
- Conversion events firing?
- Frequency >2.5? (Audience fatigue starting)
- Which creative has highest CTR? Which has highest conversion rate?

---

## 🛠️ Tool Walkthrough 3: Creative Production With AI

You'll need 6 creative assets total (3 per platform).

### Midjourney Workflow

1. Subscribe to Midjourney ($10/mo for Basic).
2. Use Discord to access it.
3. Prompt structure: `[subject], [style], [setting], [lighting], --ar 1:1` for square Meta ads.
4. Generate 4 variants per prompt. Pick the best.
5. Upscale and download.

**Example prompt for the watercolor course campaign:** `"A woman painting watercolors in a sunlit studio, soft natural lighting, calming aesthetic, photorealistic, --ar 1:1"`

### DALL·E (via ChatGPT) Workflow

Even simpler. Just describe what you want. ChatGPT will generate. Best for: simple concept art, illustrations, basic product photography.

### Canva Workflow For Text Overlays

After generating the image in Midjourney/DALL·E:

1. Upload to Canva.
2. Apply your brand colors and a clear headline.
3. Export as PNG for static ads or MP4 if you animated it.

**Pro tip:** UGC-style videos crush AI-generated visuals on Meta. If you can film a 15-second iPhone video that looks authentic, it'll often outperform a perfectly polished AI creative.

---

## 📝 The Brief Document (Write BEFORE Launching)

Before you spend dollar one, write a 2-page brief. This goes into your post-mortem.

```
# Campaign Brief: [Subject Name]

## Goal
[1 sentence — what does success look like?]

## Budget & Timeline
- Total: $200
- Google: $X | Meta: $Y
- Duration: 14 days
- Start date: [date]
- End date: [date]

## Target Audience
[Who? Why?]

## Channels & Why
[Google + Meta? Just one? Why?]

## Creative Strategy
[3 variants per platform — describe each]

## Landing Page
[Link to landing page; describe key conversion elements]

## Conversion Tracking
[Pixel + tag setup confirmed: yes/no]

## Success Criteria
- Primary KPI: [e.g., cost per lead under $X]
- Secondary KPI: [e.g., 20+ leads total]
- Pass / fail bar: [what makes you call it a "win"]
```

---

## 📊 The 14-Day Optimization Log

Every day, write 2–4 sentences in the log. Date-stamped. Goes in the post-mortem.

```
## Day 1 (2026-05-22)
Launched both campaigns at 9am. Initial CPMs looking high on Meta ($45 vs target $25).
Google search impressions ramping slowly. No conversions yet — expected.

## Day 2 (2026-05-23)
Meta still expensive. Pausing Variant B (carousel) — got 0 clicks in 8 hours.
Google starting to convert: 2 form fills overnight. CPL $11.50. Within target.

## Day 5 (2026-05-26)
Big breakthrough on Meta: UGC variant relaunched with new copy. CTR jumped from 0.8% to 2.4%.
Pausing Google Search ad group #2 — conversion rate too low (0.6%).

(... continue for 14 days)
```

**Why this matters:** Hiring managers and clients can SEE you thinking. The log shows the *process*, not just the final number. Process = trust.

---

## 📰 The Post-Mortem Write-Up (1,500–2,500 words)

The single most important deliverable in this entire capstone. Below is the structure:

### Section 1: Hook (~150 words)

Open with the most interesting thing that happened. Not the boring intro. Examples:

- ❌ "In May 2026, I ran a paid campaign for..."
- ✅ "On day 3, I'd spent $40 and had zero conversions. I almost panicked."

### Section 2: The Setup (~300 words)

Who the subject was, what business they ran, what the goal was, what your budget was, why these channels.

### Section 3: The Plan (~250 words)

Show the brief. Show the creative variants (with images). Show the audience targeting (with screenshots from ad managers).

### Section 4: The 14-Day Story (~700 words)

The optimization log, condensed. Highlight the 3–5 critical inflection points. Embed screenshots from Day 3, Day 7, Day 14.

### Section 5: The Numbers (~300 words)

Final results. Table format. Include both totals AND per-channel breakdown.

| Metric | Google | Meta | Total |
|--------|--------|------|-------|
| Spend | $89 | $97 | $186 |
| Impressions | X | Y | Z |
| Clicks | X | Y | Z |
| CPC | $X | $Y | — |
| Conversions | X | Y | Z |
| CPL | $X | $Y | $Z |
| Revenue generated | $X | $Y | $Z |
| ROAS | X.Xx | X.Xx | X.Xx |

### Section 6: What Worked / What Didn't (~300 words)

Be specific. *"The UGC video crushed; Carousel bombed."* Not *"some creatives outperformed."*

### Section 7: Lessons (~200 words)

What you'd do differently. Vulnerability = trust.

### Section 8: Takeaways For The Reader (~100 words)

The 3–5 generalizable lessons someone else can apply to their own campaign.

---

## 📐 The LinkedIn Carousel (6–10 Slides)

After the post-mortem is published, package the highlights into a LinkedIn carousel. This is what gets the reach.

| Slide | Content |
|-------|---------|
| 1 (cover) | "I spent $200 on Meta + Google. Here's what happened. [arrow]" |
| 2 | The challenge: 1 sentence on the subject + the goal |
| 3 | The plan: budget split + creatives shown |
| 4 | Day 3: the early scare (with screenshot) |
| 5 | The pivot: what you changed |
| 6 | Day 14 results: the table |
| 7 | What worked (1 line + image) |
| 8 | What didn't (1 line + image) |
| 9 | Lessons (3 bullets) |
| 10 (CTA) | "Full case study + screenshots: [link]" |

**Tools:** Canva has LinkedIn Carousel templates. Use 1:1 ratio, ~12-14 slides max for LinkedIn's algorithm.

---

## ⚠️ Common Mistakes That Kill This Capstone

| Mistake | Fix |
|---------|-----|
| Skipped conversion tracking | Set up Pixel + Tag Manager BEFORE launch. Test it. |
| One creative only | Always launch with 3 variants per platform |
| Changed strategy on day 2 | Don't. Give it 5–7 days before judging |
| No daily log | Write daily, even 2 sentences. You will forget what happened by day 14. |
| Polished only the winning creative for the post-mortem | Show the losers too. They're more interesting. |
| ROAS was negative → didn't publish | Negative ROAS is FINE for the case study. The story is the value. |
| Didn't post on LinkedIn | The post is half the portfolio piece. Don't skip. |
| Forgot to ask for subject's testimonial | Ask before publishing |

---

## 🎯 The "It's OK To Fail" Mindset

Here's the truth: at a $200 budget, getting positive ROAS is hard. Realistic outcomes:

- 40% of students get positive ROAS
- 35% break even
- 25% lose money on the campaign

**All three outcomes make a great portfolio piece.** What kills the piece is not running the campaign at all, or hiding the result.

The hiring manager isn't grading you on ROAS. They're grading on:

1. Did you actually run the campaign? (proof: live screenshots)
2. Did you make decisions during it? (proof: optimization log)
3. Can you talk about what worked and didn't? (proof: post-mortem)
4. Would you do better next time? (proof: lessons section)

---

## 🚨 Pre-Launch Checklist (Print This)

```
□ Subject confirmed + access to landing page
□ Campaign brief written and approved
□ Google Ads account set up + billing added
□ Google Ads conversion tracking installed + tested
□ Meta Ads account set up + billing added
□ Meta Pixel installed + events firing (verified in Events Manager)
□ Page on Facebook (for Meta ads to run from) is set up
□ 3 creatives ready for Google (RSA variants)
□ 3 creatives ready for Meta (image + video + carousel)
□ Landing page reviewed (works on mobile, conversion path tested)
□ Daily $/day cap set (don't blow through budget by accident)
□ Negative keyword list seeded for Google
□ Calendar block scheduled — 10 min/day for 14 days
□ Day 14 review slot booked
□ Loom screen recording planned for "before launch" video
```

---

## 🎤 The 90-Second Pitch For This Capstone

```
[CONTEXT]: "I ran a $200 paid campaign across Google + Meta for 
            [Subject's coaching practice]."

[PROBLEM]: "She was 100% organic-driven, had no paid funnel, and 
            wanted to test if paid acquisition was viable."

[APPROACH]: "I split budget 50/50, tested 3 creatives per platform, 
             ran for 14 days with daily optimization checks."

[RESULT]: "Spent $186. 28 leads at avg $6.65 CPL. 4 paying customers. 
          ROAS came in at 0.84x — slight loss, but the data showed 
          which creative + audience combo would scale."

[LESSON]: "Two of three Meta creatives bombed; the UGC-style won by 3x. 
          If I redid it, I'd skip Carousel entirely and put the saved 
          spend toward 2 more UGC variants."
```

---

## 🎓 Key Terms To Know

| Term | Definition |
|------|------------|
| **CPM** | Cost per 1,000 impressions |
| **CPC** | Cost per click |
| **CTR** | Click-through rate (clicks / impressions) |
| **CPL** | Cost per lead |
| **CPA** | Cost per acquisition (often = CPL) |
| **ROAS** | Return on ad spend (revenue / spend) |
| **CAC** | Customer acquisition cost |
| **LTV** | Customer lifetime value |
| **Lookalike** | A Meta audience built from your existing customer data |
| **Custom Audience** | Uploaded data (emails, phone numbers) |
| **Pixel** | Meta's tracking tag |
| **GTM** | Google Tag Manager |
| **RSA** | Responsive Search Ad (multiple headline/description variants) |
| **PMax** | Performance Max (Google's automated campaign type — avoid for first time) |
| **UGC** | User-generated content (or styled like it) |
| **Frequency** | How many times the avg user has seen your ad |
| **Negative keywords** | Search terms you don't want to show for |

---

## ✅ Module 3 Summary

You now know:

- 💰 How to plan a $200 split-channel campaign
- 🛠️ How to set up Google Ads (Search) + Meta Ads (Lookalike/Interest)
- 🎨 How to produce creatives with Midjourney + Canva
- 📝 How to write the brief, the log, and the post-mortem
- 📐 How to package as a LinkedIn carousel for reach
- 🎯 Why the campaign result matters less than the story

**Next steps:**
1. 🎥 Watch the videos in `Videos.md` (Google Ads Editor, Meta Ads Manager, Midjourney walkthroughs)
2. 🚀 Launch your campaign (don't delay this — it needs 14 days live)
3. 📊 Run the daily log + final analysis
4. ✏️ Use `Quiz.md` to self-evaluate
5. ➡️ Move to [Module 4: Automation Workflow](../Module-04-Capstone-Marketing-Automation-Workflow/Reading.md) while the campaign runs (you can parallelize)

---

## 📚 Further Reading (Optional)

- 📖 [Surfside PPC YouTube channel](https://www.youtube.com/@SurfsidePPC) — best Google Ads tutorials anywhere
- 📖 [Cody Schneider's Twitter](https://twitter.com/codyschneiderxx) — live paid campaign breakdowns
- 📖 [Google Ads Help Center — Conversion Tracking](https://support.google.com/google-ads/answer/1722022) — the official setup guide
- 📖 [Meta Blueprint](https://www.facebookblueprint.com/) — free Meta Ads certification courses
- 📖 [Andrew Foxwell — DTC Paid Social Best Practices](https://twitter.com/andrewfoxwell) — DTC-specific tactical content

---

## Discussion — Socratic prompts

These prompts dig at the trade-offs hiding behind the "$200 budget, 14 days, 50/50 split" defaults. Defend your reasoning from the platform mechanics and your own theory of the case.

1. **The reading defaults to a 50/50 Google/Meta split for a $200 budget**, but offers alternative splits for B2B SaaS (75/25 Google), DTC (30/70 Meta), and personal brand (25/75 Meta). A counter-argument from a senior performance marketer: with a $200 budget, you can't get statistically meaningful data on either platform — pick ONE and run $200 against it. Build the case for the single-channel strategy AND the case for the split. Which would you pick for a coaching-business subject, and why?
2. **The reading says positive ROAS is hard at $200 budget and frames negative ROAS as "fine for the case study, the story is the value."** A hiring manager you respect challenges this: *"If you can't return positive ROAS even on a tiny budget, what makes me think you'd return positive ROAS on a $50k budget?"* How do you defend the small-budget portfolio piece against this critique? Where is the manager partially right?
3. **The reading explicitly recommends avoiding Performance Max for a first campaign because "it hides too much."** But PMax now drives 30%+ of Google Ads spend industry-wide, and many roles will *expect* PMax fluency. Should the capstone be Search-only as a learning exercise, or should it include a PMax test as a "modern reality" signal? What's the right teaching call?
4. **The "show your failures" principle says to include bombed creatives in the post-mortem.** A working freelancer counters: *"My clients don't want to see my failed campaigns when deciding to hire me — they want to see my wins."* When is failure-transparency a feature, and when is it a bug? How does the audience (recruiter vs prospective client) change the answer?
5. **The 14-day campaign duration is presented as non-negotiable ("Meta's algorithm needs 7+ days to learn").** A pragmatic counter: most students lose interest by day 5 and the campaign drifts. Is the right answer to teach a tighter "5-day rapid-iteration" version of this capstone, even if the algorithm hasn't fully learned? What does the answer reveal about the tension between *learning paid acquisition the right way* and *finishing the capstone at all*?

---

> **Where this leads.**
> - Inside this course: Module 7 (Personal Brand) will return to this capstone when packaging it as the most-impressive Featured pin on LinkedIn — the carousel from Step 6 of this module IS the post that drives reach.
> - Cross-course: [16-AI-Marketing-Paid-Acquisition Module 8](../../16-AI-Marketing-Paid-Acquisition/Module-08-AI-Paid-Acquisition-Workflow/Reading.md) covers the full AI-paid workflow this campaign exercises. The negative-ROAS conversation is depth-covered in 16's Module 7 (Budget & Bidding).
> - Practice: Practice Exam 1 has 5 questions on this capstone (Q7–Q10, Q22). The Final Mock's Q2 (failure storytelling) and Q25 (negative ROAS honesty) come straight from this post-mortem.
