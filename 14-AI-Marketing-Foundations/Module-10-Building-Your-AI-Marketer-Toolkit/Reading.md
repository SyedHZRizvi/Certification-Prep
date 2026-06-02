# Module 10: Building Your AI Marketer Toolkit 🛠️

> **Why this module matters:** Nine modules of theory mean nothing without a *personal stack* that runs your daily work. This is your build-it-this-week module: the tools, the workflows, the prompt library, the "second brain." Everything that turns this course into a job.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Modules 1–9 of this course (this is the capstone-prep module; it assumes everything before it)
> - In particular: [Module 2 — AI Fundamentals](../Module-02-AI-Fundamentals-for-Marketers/Reading.md) (prompt structure), [Module 8 — Analytics](../Module-08-Analytics-Measurement-Basics/Reading.md) (the measurement stack), and [Module 9 — Compliance](../Module-09-AI-Ethics-Privacy-Compliance/Reading.md) (the privacy floor)
> - Comfort signing up for free tiers of unfamiliar SaaS — many sections are most useful with the tool open alongside the reading
>
> If you're parachuting in without completing earlier modules, you'll recognize the tool names but may miss the strategic logic for *why* this stack is structured this way. Don't skip ahead.

---

## 🧰 A Story: How a Solo Newsletter Operator Out-Produces a 5-Person Agency

In 2024, a Substack-based newsletter operator named **Lenny Rachitsky** (former Airbnb PM) was running a one-person operation that out-produced multiple traditional marketing teams. His weekly newsletter had ~600,000+ subscribers. His podcast routinely topped the tech-business charts. His operations cost was a small fraction of a comparable media company.

His stack (as he's described in podcast interviews and public talks):

- **Substack** for newsletter + community
- **ChatGPT / Claude** for ideation, drafting, repurposing
- **Notion** as the central command center
- **Riverside** for podcast recording
- **Descript** for editing + transcripts + clips
- **Canva** for visuals
- **Zapier + Make** for the connective tissue
- A handful of contract freelancers for specific tasks

The lesson:

**In 2026, the right small stack with great workflows beats a big team with bad workflows. AI made the leverage 10×.**

This module is your blueprint for building that personal stack.

---

## 🎯 The 2026 AI Marketer Stack — The Full Map

Below is a comprehensive map of every category you'll likely need. Pick one tool per row that fits your budget; expand later.

### Tier 1 — Foundation (everyone needs these)

| Category | Tool Options | Free Tier? |
|---|---|---|
| **General LLM (paid)** | ChatGPT Plus, Claude Pro, Gemini Advanced | Free tiers available; pay for production |
| **Note-taking + Second Brain** | Notion, Obsidian, Logseq, Apple Notes | Most have generous free |
| **Cloud storage** | Google Drive, OneDrive, Dropbox | All have free tier |
| **Calendar + Email** | Google Workspace, Microsoft 365 | Paid for custom domain |
| **Password Manager** | 1Password, Bitwarden, Apple Passwords | Bitwarden is free OSS |

### Tier 2 — Content + Creative

| Category | Tool Options |
|---|---|
| **Long-form AI writing** | ChatGPT / Claude / Gemini (or Jasper for teams) |
| **Short-form / ad copy** | Copy.ai, Anyword, Writesonic |
| **SEO content optimizer** | Surfer SEO, Frase, MarketMuse, Clearscope |
| **Grammar + style** | Grammarly, Hemingway Editor |
| **Image generation** | Midjourney, DALL-E 3+, Adobe Firefly, Ideogram |
| **Image editing** | Canva, Adobe Photoshop, Photopea (free OSS) |
| **Stock + design assets** | Canva, Figma, Pexels, Unsplash, Adobe Stock |
| **AI video — avatars** | Synthesia, HeyGen |
| **AI video — generation** | Runway, Sora, Pika |
| **AI video — editing** | Descript, Captions, Opus Clip |
| **AI voice / audio** | ElevenLabs, OpenAI Voice, Descript |
| **Slide decks** | Gamma.app, Tome, Pitch, PowerPoint, Google Slides |

### Tier 3 — Distribution + Channel

| Category | Tool Options |
|---|---|
| **Email — SMB** | Mailchimp, Beehiiv, ConvertKit/Kit, ActiveCampaign |
| **Email — E-comm** | Klaviyo, Omnisend |
| **Email — Enterprise** | HubSpot Marketing Hub, Salesforce Marketing Cloud, Braze, Iterable |
| **Social scheduling** | Buffer, Hootsuite, Later, Publer, FeedHive, Socialbee |
| **LinkedIn AI** | Taplio, Postwise, Authoredup |
| **X/Threads AI** | Postwise, Tweet Hunter, Typefully |
| **Webinars** | Zoom, Riverside, StreamYard, Demio |
| **Podcasting** | Riverside, Descript, Buzzsprout, Transistor, Captivate |
| **Community** | Circle, Discord, Slack, Skool, Mighty Networks |
| **Forms + Surveys** | Typeform, Tally, Google Forms, SurveyMonkey |

### Tier 4 — Measurement + CRM

| Category | Tool Options |
|---|---|
| **Web analytics** | GA4 (free), Plausible, Fathom, Matomo |
| **Dashboards** | Looker Studio (free), Power BI, Tableau, Metabase |
| **Product / event analytics** | Mixpanel, Amplitude, PostHog |
| **CRM — SMB** | HubSpot CRM (free), Pipedrive, Close, Folk, Attio |
| **CRM — Enterprise** | Salesforce, HubSpot Enterprise, Microsoft Dynamics |
| **CDP** | Segment, RudderStack, mParticle, Tealium, BlueConic |
| **Tag management** | Google Tag Manager (free), Tealium iQ |
| **Heatmaps + session replay** | Hotjar, FullStory, Microsoft Clarity (free) |

### Tier 5 — Workflow + Automation (the connective tissue)

| Category | Tool Options |
|---|---|
| **Low-code automation** | Zapier, Make (formerly Integromat), n8n (self-hosted OSS) |
| **Spreadsheets + DBs** | Google Sheets, Airtable, Notion DBs |
| **Project mgmt** | Notion, Asana, ClickUp, Linear, Trello, Monday |
| **Calendar scheduling** | Calendly, Cal.com (OSS), Reclaim, Motion |
| **AI agent / multi-step** | OpenAI Agents, Claude Code, AutoGen, custom n8n flows |
| **Chrome extensions** | ChatGPT for Google, Magical AI text expander, Save as PDF |

### Tier 6 — Specialized AI

| Category | Tool Options |
|---|---|
| **Transcription** | Otter, Fireflies, Whisper, Krisp |
| **Meeting AI** | Fireflies, Otter, Granola, Read.ai |
| **Sales AI** | Apollo.io, Lavender, Salesloft, Outreach |
| **Customer support AI** | Intercom Fin, Zendesk AI, Ada |
| **Research + recall** | Perplexity, Elicit, Consensus, ChatGPT Search |
| **Voice → notes** | Voicenotes, AudioPen, Rev |

> **Pricing reality (as of writing):** Most foundational AI tools have $20/month-ish entry points. The full enterprise stack can run $5K–$50K+/month at scale. For a solo marketer or small team, plan $200–$500/month for a complete AI-enhanced stack. Always check provider pricing pages — these change constantly.

---

## 🛒 Solo / Small / Mid-Market / Enterprise — A Sample Stack by Stage

### Solo Marketer / Founder (target spend: $50–$150/month)

| Need | Pick |
|---|---|
| LLM | ChatGPT Plus or Claude Pro |
| Notes + DB | Notion |
| Email | Beehiiv (creator) or ConvertKit (SMB) |
| Social scheduling | Buffer or Publer |
| Image | Canva Pro (+ Midjourney or DALL-E inside ChatGPT) |
| Web + analytics | Webflow / WordPress + GA4 (free) + Looker Studio (free) |
| Automation | Zapier (lowest paid tier) |

### Small Team (5–25 ppl; target spend: $500–$2,000/month)

Add to the Solo stack:

- **HubSpot Marketing Hub** (or Klaviyo if e-comm)
- **Hootsuite** or **Sprout Social**
- **Make.com** for more complex automation
- **Notion Team**
- **Mixpanel or Amplitude** (free tier)
- **HubSpot CRM** (free) or **Pipedrive** (paid)

### Mid-Market (25–250 ppl; target spend: $5K–$20K/month)

Add:

- **Klaviyo / HubSpot Pro / Iterable** (depending on vertical)
- **Sprinklr** or **Brandwatch** for listening
- **CreatorIQ** for influencer
- **Salesforce or HubSpot Sales**
- **Looker / Mixpanel / Amplitude** Growth tier
- **Segment** CDP
- **n8n self-hosted** for workflow

### Enterprise (250+; target spend: $50K+/month)

The full stack: **Salesforce Marketing Cloud or Adobe Experience Cloud + Braze + Snowflake + Looker + Segment + Sprinklr + CreatorIQ + dedicated MMM team + dedicated bias / governance team.**

---

## 🧠 Building Your Second Brain (Prompt Library + Asset Library)

This is the most underrated career investment a 2026 marketer can make. Two parts.

### Part 1: The Prompt Library

Create a Notion (or Obsidian, or Google Doc) page titled "My Prompt Library." Organize by use case. For each prompt store:

- **Title**
- **Use case** (blog intro, email subject, ad copy, etc.)
- **The exact prompt**
- **Model** (which AI you used)
- **Variables to swap** (e.g. {AUDIENCE}, {TOPIC})
- **Sample output**
- **Notes** (what worked, what to improve)

After 6 months, you'll have 50–200 battle-tested prompts. This is your unfair advantage.

### Part 2: The Asset Library

A parallel library of:

- **Brand voice docs** (tone, vocabulary, what-to-avoid)
- **Customer personas + JTBD**
- **Customer interview notes**
- **Past high-performing assets** (top blog posts, ads, emails, social)
- **Stats + research** you've fact-checked and might reuse
- **Visual templates + brand colors / fonts**

When you feed Notion → ChatGPT or Claude (via integrations or copy-paste) along with a new task, the AI now has *your context*. The output is dramatically better.

---

## 🛠️ Tutorial: Build a "GTM Engine" with Make + AI

This is the kind of workflow that wins jobs. Try it.

### What it does
- Trigger: new lead fills out your website form
- Step 1: Make enriches the lead with company data via Clearbit / Apollo
- Step 2: Make sends the company info + form responses to ChatGPT (or Claude) via API
- Step 3: AI scores the lead 1–10 and writes a personalized first-touch email
- Step 4: Make creates a CRM record + drafts the email in your ESP
- Step 5: Make pings your sales rep in Slack with the lead summary

### What you need
- Make.com (free tier OK to start)
- ChatGPT API or Claude API ($5–$20/month at low volume)
- Your form (Typeform / Tally / WP form)
- Your CRM (HubSpot free works)
- Slack (free works)

### Build steps (60–90 min)
1. Set up your form to trigger a webhook
2. In Make, create a scenario starting from the webhook
3. Add a Clearbit / Apollo enrichment step (free trials work)
4. Add an OpenAI/Anthropic "Make a Completion" step with a structured prompt
5. Add a HubSpot create-contact step
6. Add a Slack message step
7. Test with a sample form submission

This is a *real* AI workflow. You'll save 20–40 hours/year per workflow. Stack 5–10 of them and you've reshaped your job.

---

## 🎓 The 10 Battle-Tested Prompts Every Marketer Should Have

Adapt and save these to your library.

### 1. The Blog Brief Generator
```
You are a content strategist. Generate a brief for a blog post on
"{TOPIC}" for {AUDIENCE}. Include: target search intent, primary
keyword + 5 secondary, H1 + 5 H2 suggestions, key points per H2,
3 stats to verify + cite, opening hook idea, word count, internal
link suggestions. Output as markdown table.
```

### 2. The Repurposing Engine
```
Given this {LONG_FORM_PIECE}, produce: (1) a 5-email newsletter
mini-series, (2) 3 LinkedIn posts in {VOICE}, (3) 5 X/Threads
thread starters, (4) 1 IG/TikTok video script (60s), (5) a 6-slide
carousel script. Preserve the core argument across all formats.
```

### 3. The Subject Line Generator
```
Generate 20 email subject lines for {EMAIL_TOPIC} targeting
{AUDIENCE}. Cover: curiosity, benefit-driven, urgency,
question-style, contrarian, social proof, FOMO. Each ≤ 50 chars.
Output as a numbered list.
```

### 4. The Persona Refiner
```
Based on these {CUSTOMER_INTERVIEWS}, refine our persona for
{SEGMENT}. Output: name + role, daily routine, top 3 jobs to be
done, top 3 frustrations, top 3 motivations, buying triggers,
preferred channels, exact words they use.
```

### 5. The Ad Copy Variation Generator
```
Generate 10 variations of Facebook ad copy for {PRODUCT} targeting
{AUDIENCE}. Use the {FRAMEWORK} framework (HSO / PAS / BAB / AIDA).
Each variation: hook (3s), body, CTA. Format as a markdown table
with framework labeled.
```

### 6. The Voice Translator
```
Rewrite this {EXISTING_TEXT} in the voice of {BRAND}. Voice
characteristics: {TONE_DESCRIPTORS}. Words to avoid:
{FORBIDDEN_LIST}. Preserve the core message and length.
```

### 7. The Competitor Teardown
```
Analyze {COMPETITOR_URL} for: positioning, messaging hierarchy,
proof points, pricing strategy, voice + tone, conversion path
strengths, weaknesses. Output as a markdown report with 5 specific
takeaways for our own positioning.
```

### 8. The SEO Outline Builder
```
For the keyword "{KEYWORD}" targeting {AUDIENCE}, draft a Skyscraper
outline that would beat the current top-3 SERP results. Include:
H1 + 6–10 H2 + sub-H3, FAQ section (8 questions), schema types
to use, internal link opportunities.
```

### 9. The "Boring Email to Engaging Email" Translator
```
Rewrite this {BORING_EMAIL} as an engaging, conversational, human
email. Keep the core ask. Cut filler. Add one specific story or
detail that makes it feel personal. Max 150 words. Preserve any
required compliance text.
```

### 10. The Weekly Review Prompt
```
Given my work this week {ACTIVITY_LIST}, summarize: 3 highest-impact
things I shipped, 2 misses + lessons, 5 metrics that moved, what
to optimize next week. Output as a markdown weekly review I can
share with my manager.
```

🎯 **MEMORIZE THIS:** A small library of well-engineered prompts beats a thousand one-off chats. Build the library.

---

## 🔁 When to Upgrade / Downgrade

Decision rules for your stack:

### Upgrade signals
- You hit the free-tier limit consistently (Mailchimp 500 contacts, Buffer 10 posts/profile, Zapier 100 tasks/month)
- Your manual time on a task exceeds 1 hour/week on a recurring basis
- A specific tool feature is the only thing standing between you and a workflow you'd run
- Your team has grown and you need shared access / approval flows

### Downgrade signals
- A tool's per-month cost exceeds the value of the time it saves
- You're using <10% of features
- A free alternative covers your real needs (Microsoft Clarity vs Hotjar; Cal.com vs Calendly; Plausible vs GA4)
- You're paying for separate tools when one platform's free tier covers both

### The "Stack Audit" — every 6 months
1. List every paid tool + monthly cost
2. For each: "Did I use this in the last 30 days?"
3. For each: "Is the free / cheaper alternative actually good enough?"
4. Cancel the bottom 20% by ROI

You'll find $200–$1,000/month of bloat in even small marketing stacks.

---

## 📊 Real Case Study: How Stripe's Marketing Team Runs

Stripe is widely studied as a paragon of modern marketing operations. Their team has shared the stack publicly through interviews and the Stripe Press blog:

- **Notion** as the company-wide command center
- **Salesforce** as the central CRM
- **HubSpot Marketing Hub** for marketing operations
- **Customer.io** for lifecycle email
- **Segment** as the CDP
- **Looker** for dashboards
- **Snowflake** as the data warehouse
- Custom-built tooling on top of all of the above

What it teaches:

1. **The stack scales with the company.** Don't try to start at Stripe's level.
2. **Notion is the connective tissue** even at enterprise scale.
3. **A real CDP (Segment) is the difference** between siloed channels and unified intelligence.
4. **Documentation culture** — Stripe is famous for documenting every workflow. The reason their AI integrations work isn't the AI; it's the documentation the AI reads.

The lesson scales down: **your stack is only as good as your documentation.** Spend 20% of your tool budget on documentation discipline.

---

## 🚨 Common Misconceptions to Unlearn

| Misconception | Reality |
|---|---|
| "More tools = more capability" | More tools = more switching cost. Master 2–3 per category. |
| "AI replaces every tool" | AI is a *layer*. Your ESP, CRM, analytics, CDP still matter. |
| "Free tiers are always enough" | True early; eventually free tiers throttle the workflows that matter most. |
| "I'll figure out automation later" | Workflow automation compounds. Start the first month. |
| "Prompt libraries are for engineers" | Marketing prompt libraries are the new "swipe file" — career capital. |
| "Documentation is busywork" | Stripe and HubSpot are documentation cultures because it's a competitive advantage. |
| "AI agents will replace workflow tools" | Eventually maybe. In 2026, Make / Zapier / n8n still beat agentic AI for reliability. |

---

## ⚠️ Exam Traps

1. **CDP vs CRM vs ESP vs MA platform** — distinct categories. Segment is a CDP, HubSpot is an all-in-one MA platform, Salesforce is a CRM, Klaviyo is an ESP.
2. **Make vs Zapier vs n8n** — same category, different positioning. n8n is open-source self-hostable.
3. **Notion is a knowledge management tool**, not a CRM (despite some teams using it as one).
4. **Looker Studio is free.** Power BI's free tier is limited.
5. **OpenAI Voice, ElevenLabs, Descript** are voice tools with different strengths.
6. **First-party + zero-party + consent-aware** stays the strategic answer.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|---|---|
| **Stack** | Your collection of tools |
| **CDP** | Customer Data Platform (Segment, mParticle) |
| **CRM** | Customer Relationship Management |
| **ESP** | Email Service Provider |
| **MA platform** | Marketing Automation platform (HubSpot, Marketo) |
| **CMS** | Content Management System (WordPress, Webflow) |
| **DAM** | Digital Asset Management |
| **MarTech stack** | The full constellation of marketing tools |
| **Low-code / No-code** | Building workflows without traditional coding (Zapier, Make, n8n) |
| **Agent / Agentic AI** | AI that takes multi-step actions on your behalf |
| **API** | Application Programming Interface (how tools talk to each other) |
| **Webhook** | A real-time HTTP callback (event → action) |
| **OSS** | Open-Source Software |
| **Self-hosted** | Software running on your own infrastructure |
| **SaaS** | Software-as-a-Service |
| **Prompt library** | Your stored collection of reusable AI prompts |
| **Second brain** | Niklas Lentz's concept; a personal knowledge management system |
| **Documentation culture** | Organizational discipline of writing things down |

---

## ✅ Module 10 Summary

You now know:

- 🧰 The 6-tier 2026 AI marketer stack map
- 🛒 Sample stacks by company stage (solo → enterprise)
- 🧠 How to build a prompt library + asset library (the "second brain")
- 🛠️ A real end-to-end Make + AI workflow you can build this week
- 🎓 10 battle-tested prompts to start with
- 🔁 The stack-audit process (upgrade / downgrade signals)
- 📊 Stripe + Lenny Rachitsky as reference architectures (enterprise + solo)

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md)
2. ✏️ Take the [Quiz](./Quiz.md) — aim for 20/24
3. 📋 Print the [Cheat Sheet](./Cheat-Sheet.md)
4. ➡️ Take [Practice Exam 2](../Practice-Exams/Practice-Exam-2.md)
5. ➡️ Then the [Final Mock Exam](../Practice-Exams/Final-Mock-Exam.md)
6. 🎓 Then sit your first real industry exam (recommended: HubSpot Marketing Software Cert — free)

---

> **Where this leads.**
> - Inside this course: This is the capstone-prep module. You're now ready for `Capstone-Project.md`, then Practice Exam 2 and the Final Mock Exam.
> - Cross-course: `15-AI-Marketing-Strategy` covers stack governance at the executive level (CMO-led tool budget, RFPs); `16-AI-Marketing-Automation-Workflows` builds Make/Zapier/n8n workflows in depth; `17-AI-Marketing-Analytics-Personalization` deepens the CDP and personalization-engine layer; `18-AI-Marketing-Capstone-Portfolio` is the multi-artifact capstone.
> - Practice: Practice Exam 2 + Final Mock both have 6–8 tool/stack questions (CDP vs CRM, Make vs Zapier, Notion's role, second brain, stack audit).

---

## 💬 Discussion — Socratic prompts

1. **Mastery vs coverage in the stack.** The reading says "master 2–3 per category." A founder argues that as AI tools commoditize, the right move is to actively *try every new tool* because the next one might be 10× better and cancel the old one. Construct the strongest argument for "stay with proven tools 18+ months" and the strongest for "rotate aggressively as the market evolves." How do you build a stack that's stable enough to ship work but flexible enough to upgrade?
2. **Prompt library as portable career capital.** The reading argues a 200-prompt personal library is a career moat. A skeptic says: when LLMs become 100× better, your hand-tuned prompts become irrelevant — you're investing in a depreciating asset. Steel-man both. What's the half-life of a well-engineered prompt today, and what *kind* of prompt has the longest half-life?
3. **The Make + Zapier + n8n choice.** Make is visual + complex flows; Zapier is simple + most integrations; n8n is open-source + self-hostable. For a 5-person marketing team running 10 workflows, which would you commit to? Defend with reference to (a) maintenance burden, (b) lock-in risk, (c) data-residency concerns from Module 9, and (d) total cost of ownership over 24 months.
4. **CDP as the "right" investment for mid-market.** Segment ($120K+/year at scale) and competitors are pitched as the bridge from siloed channels to unified intelligence. A CFO objects: "We're 50 employees with $5M revenue — a CDP is over-spec." A marketing-ops lead counters: "Without a CDP, our first-party data strategy is hot air." Make both cases. At what revenue + headcount + channel-count *does* a CDP start to pay back in 12 months?
5. **The "documentation culture" claim from Stripe.** The reading argues Stripe's documentation discipline is what makes their AI integrations work — that AI quality is a function of input quality, and input is documentation. A skeptic argues this is post-hoc rationalization; Stripe wins for product reasons unrelated to docs. Construct both. What's an experiment you'd run inside your own team to test whether a 90-day documentation push actually moves the AI-output quality needle?

---

## 📚 Further Reading (Optional)

- 📖 *Building a Second Brain* by Tiago Forte — the personal knowledge management classic
- 📖 *Atomic Habits* by James Clear — workflow discipline frameworks
- 📰 *Marketing AI Institute* (Paul Roetzer) — practitioner-focused AI weekly
- 📰 *Stratechery* (Ben Thompson) — strategic analysis of the platform shifts
- 📰 *Lenny's Newsletter* (Lenny Rachitsky) — PM + growth + marketing
- 📰 *The Tilt* by Joe Pulizzi — content-business operations
- 📰 *Indie Hackers* — solo + small-team workflows
- 📰 HubSpot, Klaviyo, Stripe — public engineering blogs for stack inspiration
