# Module 5: TikTok + LinkedIn Ads (B2B Focus) 🎯

> **Why this module matters:** TikTok and LinkedIn occupy opposite ends of the marketing spectrum but share one truth: both reward authentic, native content and punish polished ads. By the end of this module you can launch a TikTok Spark Ad and a LinkedIn Thought-Leadership Ad with confidence.

---

## 🎯 A Real Story: How Notion Used LinkedIn ABM to 10x Enterprise Pipeline

In 2023, Notion's enterprise team faced a familiar B2B problem: their bottom-up product-led growth was working — small teams discovered Notion organically — but they couldn't break into enterprise accounts (5,000+ employees). The procurement teams weren't searching Google. Marketing emails went to spam.

The fix, publicly shared at SaaStr Annual 2024: a **LinkedIn ABM (Account-Based Marketing) program**. They:

1. Built a target list of 800 Fortune-2000 companies in 3 verticals (tech, finance, professional services).
2. Used **LinkedIn Matched Audiences** with company name targeting.
3. Ran **Thought-Leadership Ads** featuring Notion's CEO Ivan Zhao and product leaders — looking like organic LinkedIn posts, not ads.
4. Layered **Conversation Ads** to high-engagement accounts — interactive InMail-style sponsored DMs.
5. Connected LinkedIn lead form submissions to their HubSpot CRM via the native integration.

Result over 12 months: 10x increase in enterprise pipeline. The single biggest source of meetings: a CEO Thought-Leadership Ad that ran for 4 months with no creative refresh, reaching the same enterprise targets 6-12 times.

This module teaches you to build that kind of campaign. We'll also cover TikTok — because while LinkedIn powers B2B, TikTok is increasingly the discovery engine for everything (yes, even B2B; LinkedIn just told you that's true).

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Meta Business Manager and the audience hierarchy (Custom / Lookalike / Advantage+) — covered in [Module 4](../Module-04-Meta-Ads-Mastery-FB-IG/Reading.md)
> - The 3-second hook concept for short-form video — covered in [Module 3](../Module-03-Google-Ads-PMax-Display-Video/Reading.md)
> - The brief, especially WHO and WHERE — covered in [Module 1](../Module-01-Campaign-Strategy-Brief-Writing/Reading.md)
> If any of these are shaky, pause and review before continuing.

---

## 🎵 TikTok Ads Manager — The Lay of the Land

TikTok Ads Manager (TTAM) has its own hierarchy, but the structure mirrors Meta closely.

```
Business Center (admin hub)
└── Ad Account
    └── Campaign (objective + bidding type)
        └── Ad Group (audience, placements, budget, schedule)
            └── Ad (creative + copy + CTA + URL)
```

**Key differences from Meta:**
- TikTok uses **"Ad Group"** for the audience+budget tier (Meta calls it "Ad Set")
- TikTok's pixel is called the **TikTok Pixel** + **Events API** (their version of CAPI)
- Catalog ads exist; product feeds are supported
- One Business Center can hold multiple ad accounts

### TikTok Pixel + Events API

Same iOS 14.5 problem, same solution. TikTok Pixel is browser-based (blocked by ATT). The Events API is server-side. Use both with deduplication.

| Platform | Events API setup |
|----------|-----------------|
| Shopify | Native TikTok app, takes 5 min |
| WooCommerce | TikTok for WordPress plugin |
| Custom | Server-side via TikTok API directly OR Stape.io |

---

## 🎬 TikTok Ad Formats — What Each Does

| Format | Description | Best for |
|--------|-------------|----------|
| **In-Feed Ads** | Native vertical videos in the For You feed | Almost everything (default) |
| **Spark Ads** | Boost an existing organic TikTok (yours or a creator's) | UGC amplification, highest performing |
| **TopView** | Full-screen video shown when the app opens | Massive awareness campaigns |
| **Brand Takeover** | 3–5 second image/video that owns the app open | Brand launches |
| **Branded Hashtag Challenge** | Sponsored hashtag with branded effects | Engagement campaigns |
| **Branded Effects** | Custom AR filters | Brand engagement |
| **Catalog Ads (Video Shopping)** | Dynamic product video ads | Ecom |

🧠 **MEMORIZE:** Spark Ads consistently outperform regular In-Feed ads by 30–80% on CTR. They look organic because they ARE organic — you're just boosting a real post.

### Spark Ads — The 2026 MVP

Spark Ads let you take any organic TikTok video (yours or a creator's, with their permission via a Spark Code) and run it as an ad. Why it works:

- **Native look**: viewers can't always tell it's an ad
- **Social proof retained**: likes, comments, shares carry over from organic
- **Profile clickthrough**: clicking the username takes viewers to the real account
- **Algorithm boost**: organic + paid signals combine

### How to Get a Spark Code from a Creator

1. Creator posts their organic video
2. Creator goes to Settings → Privacy → Authorize Account → Generate code
3. Creator shares the code with you (it's a string)
4. You paste it into Ads Manager when creating the ad
5. You can now boost that video as an ad on YOUR ad account

🎯 **Exam tip:** TikTok's preferred creative model in 2026 is creator-led + Spark Ads. The brand-shot-in-studio look fails on TikTok.

---

## ⏱️ The 3-Second Hook on TikTok (Stricter Than Meta)

TikTok users scroll faster than Meta users. The hook window is **1.5–3 seconds**, not 3 seconds. Miss it, and they're gone. The For You algorithm penalizes ads that don't retain.

### Hooks That Work on TikTok

| Hook Type | TikTok Example |
|-----------|----------------|
| Direct address | "If you own a Pilates studio, watch this." |
| Question | "Why does my Pilates top ride up every class?" |
| Pattern interrupt | Unexpected visual or sound cut |
| Curiosity gap | "Most studio owners don't know this..." |
| Stitch/Duet style | Open with a screenshot of a comment or post |
| Voice-led | First word is the hook word ("STOP — if you...") |

### TikTok-Specific Production Notes

- **Sound matters MORE than Meta**: TikTok users watch with sound on (~85% vs ~30% on Meta)
- **Captions still required**: for accessibility + retention
- **9:16 vertical 1080×1920**: same as Reels
- **15–34 second sweet spot**: shorter than YouTube Shorts, much shorter than Feed
- **Trending sounds**: leveraging trending audio can 2-3x reach (but use sparingly for paid)

---

## 📈 TikTok Targeting — Audience & Custom Audiences

### Targeting Types

| Type | What it does |
|------|--------------|
| **Demographic** | Age, gender, location, language |
| **Interest** | TikTok's interest classifier (Fitness, Beauty, Tech, etc.) |
| **Behavioral** | Recent actions on TikTok (viewed/liked similar content) |
| **Hashtag** | People who engaged with specific hashtags |
| **Creator** | People who followed specific TikTok creators |
| **Custom Audience** | Built from YOUR data (customer list, website visitors, app users) |
| **Lookalike** | Similar to a custom audience seed |

### Smart Targeting (Automatic Audience)

TikTok's version of Advantage+. The algorithm decides who to show ads to. As of 2024, this is recommended for most campaigns with sufficient conversion data. Like Meta's Advantage+, it's HINT-based — you can provide an interest seed but TikTok will spend outside it.

### Custom Audience Sources

- Customer list (hashed email)
- App activity (last 180 days)
- Pixel events (last 180 days)
- Engagement (viewed your videos, profile, lead form)
- Ad engagement (clicked / converted on past ads)

---

## 💰 TikTok Bidding Strategies

| Strategy | When to use |
|----------|-------------|
| **Lowest Cost** | Default — get most conversions for budget |
| **Cost Cap** | Maintain a target CPA (similar to Meta's cost cap) |
| **Bid Cap** | Maximum bid you'll pay (manual control) |
| **Value-Based Optimization** | tROAS equivalent — requires conversion values |

🎯 **Volume threshold:** TikTok needs ~50 conversions per ad group per week for Cost Cap to stabilize. Below that, use Lowest Cost.

---

## 🎬 TikTok $200 Campaign Walkthrough (DTC Ecom)

Building a TikTok campaign for Sunday Studio Pilates apparel.

```
Objective: Conversions (Purchase)
Budget: $7/day ($200/mo)
Geo: 5 top US markets (Phoenix, LA, Austin, Denver, Seattle)
Placement: TikTok only (NOT Pangle / News Feed app series)
Bidding: Lowest Cost (until you hit 50 conv/week, then Cost Cap)
Conversion event: Purchase via Events API
Attribution: 7-day click + 1-day view (TikTok's default)

Ad Group 1: Spark Ad - UGC Creator A ($3/day)
  → Use Spark Code from a fitness micro-creator's organic post
  → Audience: Smart Targeting + interest seed (Pilates, Yoga, Activewear)

Ad Group 2: Spark Ad - UGC Creator B ($2/day)
  → Different creator, different angle
  → Same audience setup

Ad Group 3: In-Feed Ad - Founder selfie ($2/day)
  → Same content concept as your Meta founder selfie, optimized for TT
```

### TikTok Performance Benchmarks (2026 DTC apparel)

| Metric | Range |
|--------|-------|
| CPM | $3–$10 (often cheaper than Meta) |
| CTR | 1.5–3% |
| CPC | $0.30–$1.20 |
| 6-sec video view rate | 25%+ |
| Cost per Purchase | $20–$60 |
| ROAS | 1.5x–3x |

🚨 **Common mistake:** Cross-posting Meta Reels to TikTok. Same vertical, but TikTok creative has a different vibe — sound-first, faster cuts, trending audio, lower production value. Native TikTok content outperforms ported Reels by 40%+.

---

## 💼 LinkedIn Campaign Manager — B2B Powerhouse

LinkedIn is the only platform where you can target professionals by job title, company, seniority, and industry — at scale. It's also the most expensive paid platform (CPCs $5–$25 are normal). The trick is paying premium prices only for premium targeting.

### Account Structure

```
LinkedIn Ads Account (linked to Company Page)
└── Campaign Group (broad initiative — e.g., "Q2 ABM")
    └── Campaign (objective + audience + budget + format)
        └── Ad (creative)
```

### Ad Formats

| Format | Description | Best for |
|--------|-------------|----------|
| **Sponsored Content** | Single image, video, carousel, document | Default for most B2B |
| **Thought-Leadership Ads** | Boost a personal employee's post | The 2026 winner — outperforms branded by 2x |
| **Message Ads** | Sponsored InMail (one-shot) | Direct outreach (expensive) |
| **Conversation Ads** | Interactive sponsored InMail | Lead generation, ABM |
| **Text Ads** | Right-rail text (declining inventory) | Cheap retargeting |
| **Dynamic Ads** | Personalized to viewer's name/photo | Brand awareness |
| **Lead Gen Forms** | In-feed forms with auto-filled fields | Lead capture (huge conversion lift) |

---

## 🧠 LinkedIn Matched Audiences — The B2B Targeting Edge

This is what makes LinkedIn worth the premium pricing.

### Targeting Options

| Targeting | What it does |
|-----------|--------------|
| **Job Title** | Match exact titles (CEO, VP Marketing, etc.) |
| **Job Function** | Broader functional categories (Marketing, Engineering, Finance) |
| **Job Seniority** | C-Suite, VP, Director, Manager, Senior, etc. |
| **Company Name** | Target specific companies (foundation of ABM) |
| **Company Industry** | LinkedIn's 1,000+ industries |
| **Company Size** | 1–10, 11–50, ... 10,001+ |
| **Skills** | Profile-listed skills (more accurate than titles for tech roles) |
| **Years of Experience** | At company / in field |
| **Groups** | Members of specific LinkedIn groups |

### Matched Audiences (Your Data)

| Source | Use |
|--------|-----|
| **Account List Upload** | Upload Excel of 1,000+ target company names — perfect for ABM |
| **Contact List Upload** | Upload hashed emails of leads — retargeting |
| **Website Retargeting (Insight Tag)** | People who visited your site |
| **Event Retargeting** | People who registered for your webinar |
| **Lead Gen Form Retargeting** | People who opened (but didn't submit) a lead form |

🧠 **MEMORIZE:** LinkedIn's "Account List Upload" feature is what enables true ABM at scale. Upload 800 target companies → LinkedIn matches their employees → you serve ads only to those employees by job title/function. Insanely powerful for B2B.

---

## 💬 Thought-Leadership Ads (The 2026 Winner)

LinkedIn introduced Thought-Leadership Ads (TLAs) in late 2023 as a major format. They let you BOOST a personal employee post as an ad — same as Meta's Page Post Ads but for individual profiles.

### Why TLAs Outperform

- **Looks organic**: appears in feed as a personal post, not a brand ad
- **Higher trust**: people trust individuals more than brand pages
- **Comment-friendly**: real conversation happens; you can reply as the person
- **Profile authority**: clickthrough to a real person's profile builds connection

### The TLA Setup

1. Identify a senior employee or founder willing to be the face
2. They post organically on LinkedIn (1–2x per week ideally)
3. You ask permission to "boost" their post via LinkedIn Campaign Manager
4. The boost runs as a sponsored post — but the engagement (likes/comments) lands on their personal post

🎯 **Exam pattern:** "B2B SaaS wants to reach VP-level decision makers." → Right answer almost always includes "Thought-Leadership Ads from senior employees" because they outperform brand ads on engagement and trust.

---

## 🤝 Conversation Ads — The Interactive Email

Conversation Ads are interactive InMail. Instead of a one-shot message, they present buttons the user can click ("Show me the pricing" → triggers next message → "Book a demo" → triggers next message).

### Anatomy of a Good Conversation Ad

```
Opening Message:
  Subject: "Are you tackling [pain point] this quarter?"
  Body: 2-3 sentences from sender (real human, not brand)
  Buttons:
    Button 1: "Yes — show me how"
    Button 2: "Not right now"

  → Click Button 1 → Triggers next message
  → Click Button 2 → Triggers polite goodbye

Follow-up Message:
  "Great — here's a 5-min explainer video..."
  Buttons:
    Button 1: "Book a 15-min call"
    Button 2: "Send me the PDF first"

  → Click Button 1 → Calendar booking link
  → Click Button 2 → Email capture form
```

🎯 **Best practice:** Send from a REAL employee profile (CEO, VP Sales, etc.), not a generic "Marketing Team" account. Engagement is 3x higher.

---

## 🔌 Sales Navigator + Outreach Integration

LinkedIn Sales Navigator ($99/mo per seat) extends Campaign Manager with:

- **Lead Lists**: Build lists of individuals matching your ICP
- **Account Maps**: Visualize buying committees at target accounts
- **Smart Links**: Trackable content links for sales reps to send
- **InMail**: Direct messages outside the algorithm (limited monthly volume)
- **CRM Sync**: Push lead activity into HubSpot, Salesforce, etc.

The full ABM stack in 2026:

```
1. Sales Nav builds the target account list (companies + people)
2. Upload account list to Campaign Manager Matched Audiences
3. Run TLA ads to that audience (warming up)
4. Sales reps use Sales Nav to send personalized InMail
5. Lead form submissions auto-sync to CRM (HubSpot)
6. Marketing automation triggers nurture sequence
7. Sales follows up on engaged leads
```

This stack — pioneered by companies like Gong, Drift (now Salesloft), and Outreach — is the modern B2B SaaS go-to-market motion.

---

## 💰 LinkedIn $500 Campaign Walkthrough (B2B SaaS)

**Scenario:** B2B SaaS selling project management software to 50-200-person creative agencies. Goal: book 10 demos with VPs of Operations.

```
Campaign Group: Q2 Agency ABM

Campaign 1: Awareness — TLA from CEO ($150)
  Format: Thought-Leadership Ad (boost CEO's post)
  Audience:
    - Job Function: Operations
    - Job Seniority: VP, Director, C-Suite
    - Company Size: 51-200
    - Company Industry: Advertising Services, Design Services, PR
    - Geo: US + Canada
  Goal: Engagement (likes, comments)
  Daily budget: $5

Campaign 2: Consideration — Sponsored content video ($200)
  Format: 60-sec video (founder explaining the "why")
  Audience: SAME as Campaign 1 + retargeted from Campaign 1 (people who engaged)
  Goal: Video Views
  Daily budget: $7

Campaign 3: Conversion — Lead Gen Form ($150)
  Format: Document Ad (10-page case study PDF, auto-filled lead form)
  Audience: Retargeted from Campaign 2 (video viewers >50%)
  Goal: Lead Gen Form submission
  Daily budget: $5
```

### LinkedIn Benchmarks (2026 B2B SaaS)

| Metric | Range |
|--------|-------|
| CPM | $30–$80 (yes — premium pricing) |
| CTR | 0.4–1.2% |
| CPC | $5–$15 |
| Cost per Lead | $50–$300 |
| Conversion to demo | 15–30% of leads |
| Cost per demo | $300–$1,500 |

🚨 **Common mistake:** Comparing LinkedIn CPCs to Meta CPCs and concluding LinkedIn is "too expensive." The math is wrong — LinkedIn leads convert to closed-won deals at much higher rates because the targeting is precise. Compare **cost per closed-won deal**, not CPC.

---

## 🎨 What Works on B2B Creative (Beyond TLAs)

- **Document Ads (formerly Carousel)**: 10-page PDFs that scroll in-feed. Highest engagement of all formats — viewers read them like a slideshow.
- **Founder talking-head video** (60 sec or less): explains a contrarian view or industry insight
- **Customer success snippets**: 30-sec interview clips of real customers
- **Listicle-style document**: "7 things X-role gets wrong about Y" — saved + shared heavily

What FAILS on B2B:

- Polished product demos with stock footage
- Generic "Schedule a demo" CTAs without context
- Anything that looks like a corporate brochure
- Brand-name-first headlines

---

## 📊 Real Case Study: Drift's $2M LinkedIn Pipeline (2022)

Drift (acquired by Salesloft in 2024) publicly shared their B2B LinkedIn playbook at SaaStr 2022 and again at INBOUND 2023:

- **$50K LinkedIn ad budget per quarter** initially, scaled to $200K/qtr after CAC validation
- **80% of budget on TLAs** from CEO + 5 senior executives
- **Account list of 2,000 target accounts** in 3 verticals
- **Lead Gen Form** integrated to HubSpot in real-time
- **Result**: $2M+ in attributable pipeline per quarter at $400-800 cost per qualified lead

The lesson: B2B works when you stack ABM precision (target accounts) + native creative (TLAs) + immediate routing (CRM integration).

---

## 🆚 TikTok vs LinkedIn — When to Use Each

| Question | Right answer |
|----------|--------------|
| Selling Pilates apparel to consumers | TikTok |
| Selling enterprise software to CIOs | LinkedIn (with TLA + ABM) |
| Targeting "VP Marketing at companies > 200 employees" | LinkedIn only |
| Want lowest CPM on creative reach | TikTok |
| Want measurable enterprise pipeline | LinkedIn |
| B2B SaaS with bottom-up growth (PLG) | TikTok + LinkedIn (creative on TT, ABM on LI) |
| Local services business | Neither (use Google Search) |

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Spark Ads** | TikTok ad format that boosts an existing organic post |
| **Spark Code** | Authorization code a creator generates to let you boost their post |
| **TikTok Events API** | TikTok's server-side conversion tracking (CAPI equivalent) |
| **In-Feed Ad** | Native TikTok ad in the For You feed |
| **TopView** | Full-screen video shown at TikTok app open |
| **Smart Targeting** | TikTok's algorithm-driven audience (Advantage+ equivalent) |
| **TLA** | Thought-Leadership Ad — LinkedIn boost of a personal post |
| **ABM** | Account-Based Marketing — targeting specific company accounts |
| **Matched Audiences** | LinkedIn's custom audience system (account lists, contact lists, website retargeting) |
| **Insight Tag** | LinkedIn's website tracking pixel |
| **Conversation Ads** | Interactive multi-step InMail |
| **Sales Navigator** | LinkedIn's premium ABM tool for sales teams |
| **Lead Gen Form** | LinkedIn's in-app lead capture (auto-fills profile data) |
| **Document Ad** | LinkedIn ad format for scrollable PDFs |

---

## ✅ Module 5 Summary

You now know:

- 🎵 TikTok Ads Manager hierarchy + Events API
- 🎬 The 7 TikTok ad formats + why Spark Ads dominate
- ⏱️ The 1.5–3 second hook on TikTok (faster than Meta)
- 📈 TikTok targeting + Smart Targeting (Advantage+ equivalent)
- 💼 LinkedIn Campaign Manager + Matched Audiences (the ABM enabler)
- 💬 Thought-Leadership Ads, Conversation Ads, Lead Gen Forms
- 🔌 The Sales Navigator + ABM + CRM stack
- 💰 Both $200 (TikTok) and $500 (LinkedIn) campaign walkthroughs
- 🆚 When TikTok wins vs when LinkedIn wins

**Next steps:**
1. 🎥 Watch the videos in `Videos.md`
2. ✏️ Take `Quiz.md`
3. 📋 Review `Cheat-Sheet.md`
4. ➡️ Take Practice Exam 1 in `../Practice-Exams/Practice-Exam-1.md`
5. ➡️ Then move to [Module 6: Programmatic + Retargeting](../Module-06-Programmatic-Retargeting/Reading.md)

---

## Discussion — Socratic prompts

Each of these has more than one defensible answer. Argue from the frameworks in this module.

1. Notion's LinkedIn ABM (10x enterprise pipeline) and True Classic's Meta playbook (Module 4) both ran for months without major creative refresh. Reconcile this with the "creative fatigue" wisdom that says you must refresh ads every 2-3 weeks. When does each rule actually apply?
2. TikTok's hook window is 1.5-3 seconds; Meta's is 3 seconds; YouTube's is 5 seconds. A creative director argues you should produce ONE hero asset and trim it for each platform. Argue the opposite — that hook windows shape the entire creative, not just the first cut — and decide where you'd actually invest production budget.
3. LinkedIn CPCs ($8-15) look ~6x more expensive than Meta CPCs ($1-3). Walk through the math that shows when LinkedIn is actually CHEAPER per closed deal for a B2B SaaS. Where does this argument break for a low-ACV product?
4. Thought-Leadership Ads boost an individual's organic post. Defend the case for and against using the founder's account vs a product leader's account. Whose face actually moves the needle, and at what stage of the company's growth?
5. A B2B SaaS founder insists "TikTok is for kids — we don't need to be there." Argue both sides: when is this founder strategically right (and saving budget), and when is this dismissal hiding a generational blind spot in the brand's distribution?

---

> **Where this leads.**
> - Inside this course: Module 6 layers retargeting on top of TikTok / LinkedIn prospecting; Module 8 covers the AI video pipeline you need to feed TikTok's volume; Module 9 wires LinkedIn Lead Gen forms into HubSpot CRM workflows.
> - Cross-course: [14-AI-Marketing-Foundations Module 6](../../14-AI-Marketing-Foundations/Module-06-Email-Marketing-AI-Personalization/Reading.md) covers the organic-creator landscape; [17-AI-Marketing-Entrepreneur](../../../17-AI-Marketing-Entrepreneur/) goes deeper on cross-platform bidding.
> - Practice: Practice Exam 1 has ~7 questions from this module (Spark Ads, TLA, Matched Audiences, hook window, LinkedIn CPC math).

---

## 📚 Further Reading (Optional)

- 📖 [TikTok Ads Manager Beginner Certification (Free)](https://www.tiktok.com/business/en/learn/badge) — official badge program
- 📖 [LinkedIn Learning — LinkedIn Ads](https://www.linkedin.com/learning/) — first-party tutorials
- 📖 [LinkedIn Marketing Solutions Blog](https://www.linkedin.com/business/marketing) — official LI marketing playbooks
- 📖 [TikTok For Business — Creative Center](https://ads.tiktok.com/business/creativecenter/) — actual top-performing ads gallery
- 📖 [SaaStr — B2B SaaS Marketing](https://www.saastr.com/) — Jason Lemkin's B2B playbooks; Notion + Drift case studies
- 📖 [Adam Erhart's TikTok Ads tutorials on YouTube](https://www.youtube.com/@adamerhart)
