# Module 4: Capstone 3, Marketing Automation Workflow ⚙️

> **Why this module matters:** This is the capstone that shows you think in systems, not just tactics. Hiring managers in 2026 expect marketers to build automation themselves, not file a ticket and wait for a developer. You'll build a 5+ step lead-to-customer workflow in Make.com / n8n / Zapier and ship a Loom + JSON export.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - [Portfolio strategy & P-C-A-R-L format](../Module-01-Portfolio-Strategy-What-To-Build/Reading.md), covered earlier in this course
> - Lead-scoring & marketing-ops basics (what an MQL/SQL is, what enrichment does), covered in [14-AI-Marketing-Foundations Module 5](../../14-AI-Marketing-Foundations/Module-05-Social-Media-AI-Tools/Reading.md)
> - Make.com / n8n / Zapier mental model (triggers → modules → outputs), covered in [15-AI-Marketing-Practitioner Module 9](../../15-AI-Marketing-Practitioner/Module-09-Marketing-Automation-AI/Reading.md)
> - Webhooks and API basics (what a POST request is, what JSON looks like)
> If any of these are shaky, pause and complete 15-AI-Marketing-Practitioner Module 9 (Marketing Automation with AI) first, it's the direct prerequisite.

---

## 🎬 A Story: The Marketer Who Replaced A 3-Person Team

Picture an agency that hires Mariana, a marketer they think is mid-level. First Monday, the CEO (Chief Executive Officer) says: *"We get 80 leads/week from our paid social. Right now, our SDR team manually qualifies, scores, emails them. They're drowning. Can you help?"*

Mariana spends Tuesday and Wednesday with the SDR team, sketching what they actually do. By Thursday she has a Make.com scenario open with 9 connected modules:

```
Typeform webhook → Clearbit enrichment → Scoring formula → Branch:
  IF score ≥ 70 → Slack ping + Salesforce hot lead + Cal.com booking link
  IF score 40-69 → Klaviyo "nurture" sequence + Salesforce warm lead
  IF score < 40  → Klaviyo "low touch" + Salesforce cold lead
ALL → Notion CRM mirror for visibility
```

Friday morning she demos it. The SDR team's first reaction is suspicion. By the following Friday, they've stopped checking their inbox before noon, the workflow has already routed leads, sent emails, and booked 4 demos overnight while they slept.

A month in, the CEO realizes Mariana didn't just save the SDR team's time. She built **leverage**. The team now handles 3x the lead volume with no new headcount.

Mariana's bonus that quarter is 25%. Her next job (offered 6 months later by a referral from the CEO) is at a 60% raise.

The Make.com scenario itself? A JSON file you could import in 4 minutes. But the *thinking* what to automate, in what order, with what branching that's what makes a senior marketer in 2026.

---

## 🎯 What You're Building In Module 4

**Deliverable:** A working multi-step marketing automation workflow with at minimum 5 connected steps, hosted in your tool of choice (Make.com / n8n / Zapier / HubSpot Workflows), with:

1. **A live, running scenario**, actually triggers when you submit a test form
2. **An architecture diagram**, one page showing the flow visually (drawn in Excalidraw / Whimsical / FigJam)
3. **A Loom walkthrough** (~7–10 min) explaining each step and why
4. **A JSON / blueprint export**, so a recruiter or client can import and tinker
5. **A case study writeup**, P-C-A-R-L format, published on your portfolio

**Total time:** ~8 hours of focused work.

---

## 🛠️ Picking Your Tool

| Tool | Best For | Cost | Tradeoff |
|------|----------|------|----------|
| **Make.com** | Visual workflows, complex branching | Free tier (1k ops/mo); $9/mo Core plan | Best UI, paid tier needed for some integrations |
| **n8n** | Self-hostable, code-friendly, dev signal | Free if self-hosted; $20/mo cloud | More technical, fewer pre-built apps |
| **Zapier** | Simplest, most integrations | Free for 100 tasks/mo; $20/mo+ | Linear flows only, expensive at scale |
| **HubSpot Workflows** | If you'll work in B2B (Business-to-Business) SaaS | Free CRM (Customer Relationship Management) tier | Walled garden, doesn't show "I can build anywhere" |
| **Pipedream** | Code-heavy automation | Free; $19/mo | Best if you want to write some JS |
| **Activepieces** | OSS alternative to Make | Free self-hosted | Newer, fewer integrations |

### Default Recommendation

**Pick Make.com unless you have a reason not to.** Reasons to pick something else:

- You're targeting dev-tools / AI-engineering marketing jobs → pick n8n (self-hosted)
- You're targeting B2B SaaS where HubSpot is the dominant CRM → also build a HubSpot Workflow version as a 2nd portfolio piece
- You already pay for Zapier → just use Zapier

---

## 📋 The Scenario You'll Build

You don't need to invent this. Here's a 7-step lead-to-customer automation that's both: (a) realistic, and (b) shows off the right surfaces.

### The Reference Scenario: Lead Capture → Score → Personalize → Route

```
[1] TRIGGER: Webform submission (Tally / Typeform / Webflow form)
     ↓
[2] ENRICH: Clearbit / Apollo / Hunter, get company size, industry
     ↓
[3] SCORE: Custom formula based on (industry × size × intent)
     ↓
[4] BRANCH on score:
     ├─ Score ≥ 70 (HOT)
     │   ├─ Slack ping in #sales-hot channel
     │   ├─ Email immediately with Cal.com booking link
     │   ├─ Create Salesforce / HubSpot deal "Hot"
     │   └─ Log to Notion CRM
     ├─ Score 40-69 (WARM)
     │   ├─ Add to Klaviyo "warm nurture" sequence
     │   ├─ Create Salesforce / HubSpot lead "Warm"
     │   └─ Log to Notion CRM
     └─ Score < 40 (COLD)
         ├─ Add to Klaviyo "cold nurture" / monthly newsletter only
         └─ Log to Notion CRM
```

That's the reference. Your version can substitute any of the boxes, the structure is the value.

---

## 🛠️ Tool Walkthrough 1: Make.com Step By Step

### Step 1: Sign up and explore

1. Go to make.com → sign up free.
2. Free tier: 1,000 operations/mo, 2 active scenarios, 5-minute polling minimum. Plenty for this capstone.
3. Click "Create a new scenario."

### Step 2: Add the trigger module

The trigger is what starts the scenario. Most common for marketing automations:

- **Webhook**, for custom forms (most flexible). Make.com gives you a URL; you POST to it from anywhere.
- **Typeform New Submission** direct integration.
- **Tally New Submission** also direct.
- **Webflow New Form Submission** if subject uses Webflow.

For this capstone, use **Webhook**. It's the most general and shows off the cleanest.

1. Search modules → "Webhooks" → "Custom webhook."
2. Click "Add" to create a new webhook → copy the URL.
3. Send a test POST to the URL (use Postman, or just a curl command). The scenario will capture the structure.

### Step 3: Add the enrichment module

Pick one:

- **Clearbit**, best for company data ($99/mo)
- **Apollo**, alternative ($49/mo, decent free tier)
- **Hunter.io**, email finder + verifier (free tier 25 searches/mo)
- **People Data Labs**, alt enrichment

For this capstone, use **Hunter.io** if budget-conscious or **Apollo** if you want richer data.

1. Search modules → "Hunter" or "Apollo."
2. Connect your account (you'll need an API key from their dashboard).
3. Configure: "Enrich Email" or "Enrich Company", pass in the email from the webhook.

### Step 4: Add a "set variable" or "router" for scoring

Make.com has two ways to do logic:

**Option A: Inline tools module ("Set variable")**

```
score = 0
+ 30 if company.size >= 51
+ 30 if industry in ['SaaS', 'Fintech', 'HealthTech']
+ 40 if message_contains 'budget' OR message_contains 'urgent'
```

You can express this with Make's `if()` and `switch()` functions inside a Set Variable module.

**Option B: Router module + filters**

Use the Router module, splits flow into multiple branches, each with a filter condition.

For this capstone, use **Router with 3 branches** (HOT / WARM / COLD).

### Step 5: Add the routing branches

Each branch has its own modules.

**HOT branch (score ≥ 70):**

- Slack: Send Message to #sales-hot
- Gmail or SendGrid: Send personalized email with Cal.com link
- Salesforce or HubSpot: Create Deal
- Notion: Create database item

**WARM branch (score 40-69):**

- Klaviyo: Add to "warm_nurture" list
- Salesforce or HubSpot: Create Lead
- Notion: Create database item

**COLD branch (score < 40):**

- Klaviyo: Add to "monthly_newsletter_only" list
- Notion: Create database item

### Step 6: Test, test, test

1. Save the scenario.
2. Turn it ON.
3. Send 3 test submissions with different "scores" (manipulate input to force HOT, WARM, COLD).
4. Check each output destination, Slack, Klaviyo, Salesforce, Notion. Verify the data landed correctly.

### Step 7: Document everything

- Screenshot the full scenario in Make's visual editor (this is the magic image)
- Screenshot each module's configuration panel
- Note any "gotchas" you ran into

---

## 🛠️ Tool Walkthrough 2: n8n Step By Step (Alternative)

If you want the "dev signal" (targeting AI / dev-tools marketing roles), n8n is the play.

### Setup Options

**Option A: n8n Cloud** ($20/mo)
1. Sign up at n8n.io
2. Spin up a cloud instance.

**Option B: Self-hosted n8n (free)**, the dev-signal version
1. Install Docker on your machine.
2. Run: `docker run -it --rm -p 5678:5678 n8nio/n8n`
3. Browse to localhost:5678.

For portfolio, self-hosted is the better signal. But cloud is fine if you don't want to mess with Docker.

### Building The Same Scenario In n8n

n8n uses "nodes" instead of "modules." The flow is the same:

1. **Webhook node**, receives the form POST.
2. **HTTP Request node**, calls Hunter.io API to enrich.
3. **Function node** JavaScript scoring logic. (This is the n8n superpower write custom JS.)
4. **IF node** (or **Switch node**), branches on score.
5. **Slack / Klaviyo / Notion nodes**, actions per branch.

Screenshot the canvas. Export the workflow as JSON (n8n's "Download" button gives you a  14  file). This export is what you publish.

### Why n8n's JSON Export Is Special

When you publish your `.json` workflow file publicly on GitHub, a recruiter can:

1. Spin up their own n8n.
2. Import your workflow.
3. See exactly what you built.

This is the "GitHub repo" equivalent for marketing automation. It's the highest-trust signal a hiring manager can get.

---

## 🛠️ Tool Walkthrough 3: Zapier (Simpler Alternative)

Zapier is the most user-friendly but has constraints:

- Linear flows by default (no easy branching unless you pay for the Paths feature)
- Free tier: 100 tasks/mo, 5 zaps active

If you choose Zapier, your scenario will be 3 zaps chained instead of 1 scenario:

- **Zap 1:** Form → Hunter enrichment → Update Google Sheet (the "router" sheet)
- **Zap 2:** Sheet row added with status=HOT → Slack + Email + Salesforce
- **Zap 3:** Sheet row added with status=WARM → Klaviyo

It works. It's just less elegant than Make / n8n. For the portfolio, the Loom walkthrough has to explain why the architecture is chunked across 3 zaps.

---

## 🎨 The Architecture Diagram

After your scenario works, draw it visually. This is a 1-page image you'll include in your case study.

### Tools

- **Excalidraw** (free, hand-drawn aesthetic, recommended)
- **Whimsical** (free tier, polished)
- **FigJam** (free tier, polished)
- **Mermaid** (text-based, dev signal)

### The Diagram Structure

```
┌─────────────┐
│  Webform    │
│  (Tally)    │
└──────┬──────┘
       │
       ▼
┌──────────────┐
│  Enrichment  │
│  (Hunter.io) │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   Scoring    │
│  (formula)   │
└──────┬───────┘
       │
       ▼
┌──────────────────────────────────┐
│         Router on score          │
└───┬──────────────┬───────────────┘
    │              │               │
    ▼              ▼               ▼
┌────────┐    ┌────────┐      ┌────────┐
│  HOT   │    │ WARM   │      │ COLD   │
│ Slack  │    │Klaviyo │      │Newsltr │
│ Email  │    │ nurture│      │ list   │
│ SFDC   │    │ SFDC   │      │ Notion │
│ Notion │    │ Notion │      └────────┘
└────────┘    └────────┘
```

Make it clean. Use it as the cover image on your case study page.

---

## 🎥 The Loom Walkthrough

This is what gets watched. Recruiters/clients are 5x more likely to engage with a 7-min Loom than a 15-page document.

### The Script Outline

```
0:00, Hook: "I'll show you a 7-step automation I built that takes 
              a webform lead from submission to Salesforce + Slack 
              + Klaviyo in under 30 seconds."

0:30, Architecture diagram: walk through the diagram first, 
              then show the live scenario.

2:00, Live demo: submit a test form. Watch the scenario fire.

3:30, Step by step walkthrough: open each module, show the config, 
              explain why.

6:00, Show the JSON export. "Here's the file, you could import 
              this into your Make / n8n in 4 minutes."

7:00, Wrap: "If I were doing this for [client type], here's what 
              I'd add: [list of next-level features]."
```

### Recording Tips

- Use Loom's free tier (5-min cap on free; pay $12/mo if you need 7+ min).
- 1080p, system audio + mic.
- Show your face in the corner (humanizes you).
- Re-record if your first take goes long. The Loom should be ≤10 min.

---

## 📝 The Case Study Writeup (P-C-A-R-L)

Published on your portfolio.

### Section structure

```
[Hero: architecture diagram image]

## Problem
[1–2 paragraphs: what business problem? Who was drowning?]

## Constraints
[1 paragraph: budget, tools available, what was off-limits]

## Approach
[3–5 paragraphs: the architecture decisions, with module-level screenshots]

## Result
[2–3 paragraphs: 
 - What it now does in operations
 - Time saved (estimated): "Replaces ~X manual hours/week"
 - Lead routing accuracy improvement (if measured)]

## Lessons
[2–3 paragraphs: 
 - What you'd architect differently
 - Which modules were finicky
 - What you'd add at "v2"]

## Artifacts
- 🎥 Loom walkthrough (link)
- 📐 Architecture diagram (PNG)
- 📦 JSON / blueprint export (download)
- 📸 Scenario screenshots (gallery)
```

---

## ⚠️ Common Mistakes To Avoid

| Mistake | Fix |
|---------|-----|
| Built it in HubSpot only | Build in Make/n8n too, shows portability |
| Linear flow with no branching | At least one router/if module |
| 3 modules instead of 5+ | Add scoring + enrichment + branching to reach 5+ |
| No Loom (just screenshots) | Loom is 5x more engaging than text |
| Tested with one input | Test with HOT, WARM, COLD examples, verify all paths |
| Never exported the JSON | Export and link it. It's the GitHub equivalent. |
| Diagram drawn after build only | Architecture-first thinking is more impressive, show the diagram, THEN the implementation |
| Used a real client's credentials | DON'T. Use your own test accounts. Sanitize the JSON before sharing. |

---

## 🚨 Security & Privacy Gotchas

When exporting the JSON / blueprint, **strip these before sharing**:

- ❌ API keys (any service)
- ❌ OAuth tokens
- ❌ Personal email addresses
- ❌ Slack workspace IDs (depending on org policy)
- ❌ Real customer / lead data

Make / n8n / Zapier all let you "export" with credentials swapped for placeholders. Verify the exported file is clean.

**Pro tip:** Build the scenario with dummy data and dummy accounts. Pretend you're building it for "Acme Co.", that way there's nothing sensitive to scrub.

---

## 📊 Variations You Can Build Instead

If the "lead capture → route" scenario doesn't fit your subject, here are alternatives. All meet the 5+ step rule.

### Variation A: Content Distribution Pipeline

```
1. New blog post published (WordPress webhook / RSS)
2. Generate social variants with Claude API
3. Schedule to Buffer (LinkedIn + X)
4. Add to weekly newsletter draft in ConvertKit
5. Slack notify content team
6. Log to Notion content calendar
```

### Variation B: Abandoned-Cart Recovery (E-commerce)

```
1. Shopify webhook on cart-abandoned event
2. Wait 1 hour
3. Send personalized email via Klaviyo (template based on cart value)
4. Wait 24 hours; if no purchase, send second email
5. Wait 72 hours; if no purchase, add to Meta retargeting audience
6. Log all to Notion analytics sheet
```

### Variation C: Customer Onboarding Sequence

```
1. New Stripe customer event
2. Create Notion workspace from template for them
3. Send welcome email + onboarding video link
4. Schedule day-3 check-in email
5. Day-7: poll NPS, route low scores to founder Slack
6. Day-14: upsell offer based on usage data
```

### Variation D: Competitor Monitoring & Alerts

```
1. Daily cron trigger
2. Scrape competitor blog (RSS or Apify)
3. Pass new posts to Claude API for summarization
4. Detect "topic relevance" to your subject
5. If relevant, Slack the team with summary + link
6. Log to Notion competitive-intel database
```

Pick the variation that matches your subject best. The reference scenario (lead routing) is the safest, but any variation works.

---

## 🎤 The 90-Second Pitch

```
[CONTEXT]: "I built a 7-step lead-routing automation in Make.com for 
            [Subject]."

[PROBLEM]: "Their SDR team was manually qualifying ~80 leads/week. 
            Drowning. Took 6+ hours/week of their senior person's time."

[APPROACH]: "Used Make.com, Tally webhook in, Hunter enrichment, 
             custom scoring formula, Router to 3 branches (Hot/Warm/Cold), 
             each with specific actions across Slack, Klaviyo, Salesforce, 
             and Notion."

[RESULT]: "Replaces ~6 manual hours/week. Lead routing now happens 
          in <30 sec. Hot leads get a Cal.com link before they close 
          the browser tab."

[LESSON]: "First version had no error handling, when Hunter rate-limited, 
          leads disappeared. Added an error branch + retry logic in v2."
```

---

## 🎓 Key Terms To Know

| Term | Definition |
|------|------------|
| **Scenario** | A workflow in Make.com (= "Zap" in Zapier, "Workflow" in n8n) |
| **Module / Node / Step** | An individual action in a scenario |
| **Trigger** | The event that starts a scenario |
| **Webhook** | A custom HTTP endpoint that any service can POST to |
| **Router** | A module that branches a flow based on a condition |
| **Filter** | A condition that decides whether a downstream module runs |
| **Enrichment** | Adding extra data to a lead (company size, industry, etc.) |
| **Scoring** | Numeric value assigned to a lead based on criteria |
| **API key** | Secret credential to access a tool's API |
| **OAuth** | Authentication flow for connecting accounts |
| **Operations** | Make.com's billing unit, each module run = 1 operation |
| **Blueprint** | A JSON export of a Make.com scenario |
| **Cron trigger** | Scheduled trigger (run every X minutes / hours / days) |

---

## ✅ Module 4 Summary

You now know:

- ⚙️ Why marketing automation is a 2026 hiring filter
- 🛠️ How to build in Make.com (default), n8n (dev signal), Zapier (simplest)
- 🧭 The reference 7-step lead-routing scenario
- 🎨 How to draw architecture diagrams (Excalidraw / Whimsical)
- 🎥 How to record a Loom walkthrough recruiters will actually watch
- 📦 How to export + sanitize the JSON for public sharing
- 🚨 The security/privacy gotchas

**Next steps:**
1. 🎥 Watch the videos in `Videos.md` (Make.com, n8n, Zapier tutorials)
2. 🛠️ Build your scenario (8 hours)
3. 📦 Export + sanitize the JSON
4. 🎥 Record the Loom
5. ✏️ Use `Quiz.md` to self-evaluate
6. ➡️ Move to [Module 5: Attribution Model](../Module-05-Capstone-Attribution-Model-Spreadsheet/Reading.md)

---

## 📚 Further Reading (Optional)

- 📖 [Make.com Academy](https://academy.make.com/), free, official, deep
- 📖 [n8n Documentation + Templates](https://docs.n8n.io/), workflow library to learn from
- 📖 [Zapier Learn](https://learn.zapier.com/), official courses
- 📖 [Pierre de Wulf Marketing Engineering Newsletter](https://www.linkedin.com/in/pierredewulf/) for AI + automation case studies
- 📖 [Webflow + Make.com Template Library](https://www.make.com/en/templates), see what others have built

---

## Discussion, Socratic prompts

These prompts test whether you understand *why* the reference scenario looks the way it does. If you can't defend the architectural choices, the Loom won't convince anyone.

1. **The reference scenario uses a Router on a numeric score (≥70 / 40–69 / <40).** A counter-design is a "tier-less" continuous-scoring model where the same actions trigger at *any* score above thresholds you tune over time. What does the discrete-router design optimize for (simplicity? communication?) and what does it sacrifice? When would you architect this differently?
2. **The reading recommends Make.com as the default, but flags n8n (self-hosted) as the right pick if you're targeting "dev-tools / AI-engineering marketing roles."** A senior hiring manager at a B2B SaaS pushes back: *"n8n self-hosted is a maintenance burden no one will ever assign you. Make.com is the boring right answer for 95% of marketing teams."* How do you weigh portfolio signal vs operational reality? When does showing n8n hurt rather than help?
3. **The "security & privacy gotchas" section says to strip API keys and PII before publishing JSON exports.** A pragmatic counter-argument: most students take this so seriously they never publish at all, killing the portfolio piece. What's the minimum sanitization that's actually necessary, versus the paranoid maximum? Where's the line?
4. **The reading describes the JSON export as "the GitHub repo equivalent for marketing automation."** But unlike a GitHub repo, no one will actually *import* and run your Make.com scenario, they'd need to reconnect every credential. Is the JSON export a real signal or a vanity artifact? How would you defend its inclusion to a skeptical engineer?
5. **The four variations (lead routing, content distribution, abandoned-cart, customer onboarding, competitor monitoring) all meet the 5+ step rule.** But for a portfolio targeting B2B SaaS roles vs DTC (Direct-to-Consumer) e-commerce roles vs agency-owner clients, the "right" variation is different. Pick a target audience and defend which variation tells the strongest story for them, and why the others would actively undersell you.

---

> **Where this leads.**
> - Inside this course: Module 6 (AI Agent) reuses the same architectural-diagram and Loom-walkthrough mental model. Module 7 features the architecture diagram as a recommended portfolio hero image.
> - Cross-course: [15-AI-Marketing-Practitioner Module 9](../../15-AI-Marketing-Practitioner/Module-09-Marketing-Automation-AI/Reading.md) deep-dives marketing automation with AI. [17-AI-Marketing-Entrepreneur Module 8](../../17-AI-Marketing-Entrepreneur/README.md) covers the full AI-marketing-ops workflow this capstone is an output of.
> - Practice: Practice Exam 1 has 3 questions on this capstone (Q11–Q13, Q32). The Final Mock's Q19 ("Tell me about your automation workflow") is graded against the Loom + JSON quality.
