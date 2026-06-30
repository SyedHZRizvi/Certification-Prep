# Module 6: Capstone 5, AI Marketing Agent 🤖

> **Why this module matters:** "I use ChatGPT" is table stakes in 2026. The signal that actually matters is: can you build with the API, not just chat with the UI? A working agent lead qualifier, content brief generator, competitor researcher separates you from 90% of applicants.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - [Portfolio strategy & P-C-A-R-L format](../Module-01-Portfolio-Strategy-What-To-Build/Reading.md), covered earlier in this course
> - [Marketing automation mental model](../Module-04-Capstone-Marketing-Automation-Workflow/Reading.md), covered in Module 4 (the agent is "automation with intelligence")
> - LLM fundamentals (prompts, tokens, context windows, system vs user messages), covered in [14-AI-Marketing-Foundations Modules 2–3](../../14-AI-Marketing-Foundations/Module-02-AI-Fundamentals-for-Marketers/Reading.md)
> - Basic command-line + Python read-ability (you don't need to write code from scratch Cursor will help but you need to read what it writes)
> - Git basics (clone, commit, push), any 1-hour primer is fine
> If any of these are shaky, pause and review, building an agent in 10 hours assumes the prereqs are solid.

---

## 🎬 A Story: The Marketer Who Outshipped The Engineering Team

Imagine the marketing team at a Series A startup. The CEO wants them to research the top 50 competitors in their space and write strategic briefs on each. Manually, this is 4–6 weeks of work for a senior content marketer.

A marketer on the team call them Theo opens Cursor on a Tuesday. They've never written serious code before. By Tuesday night they have a working Python script: 200 lines, uses the Claude API + an Apify scraper. Feed it a competitor URL → it fetches the homepage + pricing page + about page, runs them through Claude with a structured prompt, outputs a 2-page strategic brief.

Wednesday morning, Theo runs it on all 50 competitors. ~$8 in API costs. Done by lunchtime.

The CEO is so impressed she announces it in the all-hands. The engineering team is annoyed; they were going to build something similar in Q3 and quote 4 weeks of dev time. The marketing team's reputation flips from "asks for things" to "ships things."

Theo doesn't get promoted (politics). But six months later, when they put it on their LinkedIn portfolio with a Loom + public GitHub repo, three recruiters reach out in two weeks. The offer is $40k more than their then-current salary.

The agent itself? Could be built by any marketer who reads docs and isn't afraid of Cursor. The fact Theo did it is the entire signal.

---

## 🎯 What You're Building In Module 6

**Deliverable:** A working AI agent that does ONE marketing task. Choose from:

1. **Lead Qualification Bot**, given a lead's company URL + form data, qualify with a structured response
2. **Content Brief Generator**, given a keyword + target audience, produce a 2-page brief
3. **Competitor Research Agent**, given competitor URLs, produce a strategic summary
4. **Email Personalization Agent**, given a recipient profile, generate a personalized cold email
5. **SEO Content Generator**, given a topic + outline, produce a full-length article
6. **Social Media Repurposer**, given a blog post URL, generate LinkedIn carousel + Twitter thread + Reddit post

**Specifications:**
- Built with **Claude API** or **OpenAI Assistants API**
- Public GitHub repo
- README explaining what it does, how to run it
- Loom demo (3–5 min)
- Case study writeup using P-C-A-R-L

**Total time:** ~10 hours of focused work.

---

## 🛠️ Tool Walkthrough 1: Choose Your Build Environment

You have three paths to building this agent. Pick based on your comfort.

### Path A: Cursor / Replit Agent (Recommended)

**For:** Marketers who don't write code daily but can read it.

**Setup:**
1. Download Cursor (cursor.com) or open Replit Agent (replit.com).
2. Both are AI-pair-programming IDEs, you describe what you want; the AI writes Python for you.
3. Free tiers exist; paid ($20/mo Cursor or $25/mo Replit) gives unlimited.

**Workflow:**
1. Open a blank Python project.
2. Type the agent description in plain English: *"Build a Python script that takes a competitor URL, scrapes the homepage and pricing page, sends them to Claude API, and outputs a 2-page strategic brief."*
3. Cursor writes the code. You read it, ask questions, iterate.
4. Run it. Fix errors with Cursor's help.
5. Done in 4–6 hours.

### Path B: VSCode + Continue.dev (Free Alternative)

**For:** Marketers who want a free Cursor alternative.

**Setup:**
1. Install VSCode (free).
2. Install Continue.dev extension (free, open-source AI assistant).
3. Configure with your Claude API key (so Continue calls Claude when you ask for code).

Same workflow as Cursor, less polished.

### Path C: Make.com + Claude API (No-Code Friendly)

**For:** Marketers who would rather not look at code at all.

**Setup:**
- Make.com scenario where one module calls Anthropic's API directly via HTTP request.
- You're not "building an agent" in the dev sense, but you ARE building a working AI workflow.

This works for portfolio purposes, but the signal is weaker than a GitHub repo. **Recommend Path A or B if you can.**

---

## 🛠️ Tool Walkthrough 2: Claude API Step By Step

### Step 1: Get An API Key

1. Go to console.anthropic.com.
2. Sign up. Add a payment method.
3. Top up $5 of credits. (You'll spend $1-3 building + testing.)
4. Settings → API Keys → Create new key.
5. Copy the key. Save it in a `.env` file (NEVER commit this to GitHub).

### Step 2: Hello World

In Cursor or VSCode, create `agent.py`:

```python
import os
from anthropic import Anthropic

client = Anthropic(api_key=os.environ.get("ANTHROPIC_API_KEY"))

response = client.messages.create(
    model="claude-sonnet-4-7",  # 2026-current; check Anthropic docs for latest stable
    max_tokens=1024,
    messages=[
        {"role": "user", "content": "Hello, Claude! Write a 1-sentence ad for a watercolor painting course."}
    ]
)

print(response.content[0].text)
```

Run it: `python agent.py`. If you see a response, you're set up.

### Step 3: Structured Prompts

The difference between "using ChatGPT" and "building an agent" is structured prompts. Here's an example for a content brief generator:

```python
SYSTEM_PROMPT = """You are a senior content strategist. When given a topic and audience,
you produce a content brief in this exact structure:

# Content Brief: [Topic]

## Target Audience
[2-3 sentences describing the audience]

## Primary Search Intent
[Informational / Commercial / Transactional / Navigational]

## Suggested Headline Variations
1. [Headline]
2. [Headline]
3. [Headline]

## Outline
- [Section 1] - [1 sentence]
- [Section 2] - [1 sentence]
...

## Target Word Count
[Number based on competitive analysis]

## Key Sources To Cite
- [Source 1]
- [Source 2]

## Internal Links To Add
[Suggestions based on related topics]

## Calls To Action
[2-3 CTAs aligned with the funnel stage]
"""

def generate_brief(topic, audience):
    response = client.messages.create(
        model="claude-sonnet-4-7",  # 2026-current
        max_tokens=2048,
        system=SYSTEM_PROMPT,
        messages=[
            {"role": "user", "content": f"Topic: {topic}\nTarget audience: {audience}"}
        ]
    )
    return response.content[0].text
```

### Step 4: Multi-Step Workflow

A real agent does multiple steps. Here's a competitor research agent:

```python
import requests
from bs4 import BeautifulSoup

def scrape_page(url):
    """Step 1: Fetch and clean a webpage."""
    response = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'})
    soup = BeautifulSoup(response.text, 'html.parser')
    
    # Remove scripts and styles
    for script in soup(['script', 'style']):
        script.decompose()
    
    text = ' '.join(soup.stripped_strings)
    return text[:8000]  # Truncate for context limits


def analyze_competitor(url):
    """Step 2: Fetch competitor + analyze with Claude."""
    page_content = scrape_page(url)
    
    response = client.messages.create(
        model="claude-sonnet-4-7",  # 2026-current
        max_tokens=2048,
        system="""You are a competitive intelligence analyst. Given a competitor's 
        homepage content, produce a structured strategic brief.""",
        messages=[
            {"role": "user", "content": f"""
            Competitor URL: {url}
            Homepage content (truncated):
            {page_content}
            
            Produce a brief with these sections:
            1. Positioning statement (1 sentence)
            2. Target customer (3 sentences)
            3. Pricing approach (if visible)
            4. Top 3 differentiators they claim
            5. Suggested counter-messaging for us
            """}
        ]
    )
    return response.content[0].text


def analyze_competitors(urls):
    """Step 3: Loop through and produce a comparison."""
    results = {}
    for url in urls:
        print(f"Analyzing {url}...")
        results[url] = analyze_competitor(url)
    return results


if __name__ == "__main__":
    competitors = [
        "https://competitor1.com",
        "https://competitor2.com",
        "https://competitor3.com",
    ]
    results = analyze_competitors(competitors)
    
    for url, brief in results.items():
        print(f"\n{'='*60}\n{url}\n{'='*60}\n{brief}")
```

That's a multi-step agent. ~80 lines. Works.

### Step 5: Add Tool Use (Advanced)

If you want to flex, add Claude's tool-use feature so the agent can call functions:

```python
tools = [
    {
        "name": "get_keyword_volume",
        "description": "Get monthly search volume for a keyword from Ahrefs API",
        "input_schema": {
            "type": "object",
            "properties": {
                "keyword": {"type": "string"}
            },
            "required": ["keyword"]
        }
    }
]

response = client.messages.create(
    model="claude-sonnet-4-7",  # 2026-current
    max_tokens=2048,
    tools=tools,
    messages=[
        {"role": "user", "content": "Suggest 5 keywords for a watercolor course. Use the tool to check their volumes."}
    ]
)
```

Tool use elevates this from "agent that calls Claude once" to "agent Claude orchestrates." This is a significant signal upgrade for the portfolio piece.

---

## 🛠️ Tool Walkthrough 3: OpenAI Assistants API (Alternative)

If you're using OpenAI instead of Claude:

```python
from openai import OpenAI

client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))

# Create the assistant
assistant = client.beta.assistants.create(
    name="Content Brief Generator",
    instructions="You are a senior content strategist. When given a topic and audience, produce a structured content brief.",
    model="gpt-4-turbo",
)

# Use it
thread = client.beta.threads.create()
client.beta.threads.messages.create(
    thread_id=thread.id,
    role="user",
    content="Topic: how to start watercolor painting. Audience: beginner adults age 30-50."
)
run = client.beta.threads.runs.create(
    thread_id=thread.id,
    assistant_id=assistant.id,
)

# Poll until done
import time
while run.status != "completed":
    time.sleep(1)
    run = client.beta.threads.runs.retrieve(thread_id=thread.id, run_id=run.id)

messages = client.beta.threads.messages.list(thread_id=thread.id)
print(messages.data[0].content[0].text.value)
```

Claude's API is generally simpler. OpenAI Assistants has more built-in features (file uploads, code interpreter). Pick whichever your target audience uses more.

---

## 🛠️ Tool Walkthrough 4: Replit Agent For Faster Build

Replit Agent (replit.com) is purpose-built for AI-generated apps. If you want to compress 10 hours into 3:

1. Sign up at replit.com.
2. Click "Build a new app" → describe what you want in plain English.
3. Replit generates the full app (Python + frontend) and runs it.
4. Iterate by chatting.

You can have a deployed lead-qualification web app in under an hour. The trade-off: less control over the code.

For portfolio purposes, the Loom demo of a *running* Replit app + the GitHub link to the code is sometimes MORE impressive than 200 hand-written lines.

---

## 📦 The GitHub Repo Structure

Your repo should look like:

```
ai-marketing-agent/
├── README.md               (overview + how to run + Loom link)
├── agent.py                (main script)
├── prompts/
│   ├── content_brief.txt
│   └── competitor_analysis.txt
├── examples/
│   └── sample_output.md    (example output from running it)
├── requirements.txt        (Python deps)
├── .env.example            (template; never commit real .env)
└── .gitignore              (must include .env and __pycache__)
```

### The README Template

```markdown
# [Agent Name]

A [one-sentence description] built with the Claude API.

## What It Does

[2-3 sentences explaining the use case]

## Demo

[Loom video link]

## Example Output

See `examples/sample_output.md` for a real run.

## How To Run

```bash
git clone https://github.com/[you]/[repo]
cd [repo]
pip install -r requirements.txt
cp .env.example .env
# Add your ANTHROPIC_API_KEY to .env
python agent.py
```

## Architecture

[1-paragraph high-level overview, optionally with a Mermaid diagram]

## Cost

~$[X] per run. ~$[X] / 100 runs.

## Limitations

- [What it doesn't do well]
- [What you'd add at v2]

## Author

[Your name + link to portfolio]
```

---

## 🎥 The Loom Demo (3–5 min)

```
0:00, Hook: "Here's a [agent name] I built that does X in Y seconds."
0:30, Show the GitHub repo briefly (README, file structure).
1:00, Run it live. Show the input. Show the output. 
2:30, Briefly explain ONE technical decision (e.g., "I used Claude's 
       structured prompts because...").
4:00, Limitations + v2 ideas.
4:30, CTA: "Repo + README at [link]."
```

Live execution is key. Anyone can show a screenshot of code. Showing it actually working sells it.

---

## 📝 The Case Study Writeup

```
[Hero: screenshot of the agent's output OR a Mermaid diagram of the architecture]

## Problem
[What marketing task takes hours that this can do in seconds?]

## Constraints
[Languages used, APIs available, budget]

## Approach
[Architecture, prompt-engineering decisions, tool-use if you used it]

## Result
[Sample input → sample output, with metrics: time saved, cost per run]

## Lessons
[Where the agent fails, what you'd add at v2, what the model can't do]

## Artifacts
- 📦 GitHub repo (public)
- 🎥 Loom demo
- 📄 README.md (linked)
- 💰 Cost breakdown
```

---

## ⚠️ Common Mistakes To Avoid

| Mistake | Fix |
|---------|-----|
| Built it but didn't push to GitHub | The repo IS the portfolio. Push it. |
| Committed .env with API key | Use .gitignore. Rotate the key if leaked. |
| No README | The README is the front door. Spend 30 min on it. |
| Agent only works on your machine | Document the install steps. Test in incognito on a fresh clone. |
| One-shot prompt only | Multi-step agent = stronger signal |
| No example output in repo | Include `examples/sample_output.md` |
| No Loom demo | Recruiters don't run code. They watch Looms. |
| Generic "ChatGPT wrapper" | Pick a specific use case. Solve it well. |
| Cost not documented | Senior marketers think about unit economics |
| Used Cursor / Replit but lied about authorship | Disclose it. Saying *"built with Cursor as pair-programmer"* is GOOD now. |

---

## 🚨 Security Gotchas

```
□ .env is in .gitignore, verify before pushing
□ API key NOT committed to any file in git history
□ If you committed the key by mistake: rotate it AND use git-filter-branch to scrub history
□ Don't hardcode email addresses, customer data, or other PII in prompts
□ Rate-limit your agent if it can be triggered by anyone (no auth)
□ If the agent does web scraping, respect robots.txt
```

---

## 🎯 Picking Your Agent, Decision Matrix

| If You Want... | Build |
|----------------|-------|
| Lowest difficulty + clearest value | **Content Brief Generator** |
| Highest "wow" factor | **Competitor Research Agent** |
| Most business-applicable | **Lead Qualification Bot** |
| Most differentiated | **Email Personalization Agent** (with web scraping) |
| Most B2C-friendly | **Social Media Repurposer** |
| Highest technical signal | **Email Personalization** OR **Competitor Research** w/ tool use |

---

## 💰 Cost Estimating

Claude API pricing (as of writing, verify at console.anthropic.com):

- **Claude 3.7 Sonnet:** ~$3 per 1M input tokens, ~$15 per 1M output tokens
- **Claude 3.5 Haiku:** ~$0.80 per 1M input, ~$4 per 1M output

For a content brief agent:

- Per run: ~2k input + 1k output tokens = ~$0.02
- 100 runs = ~$2

For a competitor research agent with scraping:

- Per run: ~10k input + 3k output = ~$0.075
- 100 runs = ~$7.50

Document this in your README. It's a senior-marketer signal.

---

## 🎤 The 90-Second Pitch

```
[CONTEXT]: "I built an AI competitor-research agent in Python using 
            the Claude API and a scraping layer."

[PROBLEM]: "Manually researching 50 competitors took 4–6 weeks 
            of senior marketer time on our team."

[APPROACH]: "Agent takes a competitor URL, fetches homepage + pricing 
             page, runs them through Claude with a structured prompt, 
             outputs a 2-page strategic brief. Public GitHub repo."

[RESULT]: "Ran on 50 competitors in ~2 hours of compute time. 
          Cost: ~$8 in API. Time saved: ~4 weeks of senior time."

[LESSON]: "The first version hallucinated competitor pricing when 
          the page used dynamic JavaScript. v2 uses Playwright to 
          render properly. Also added a structured-output format 
          to reduce parsing errors."
```

---

## 🎓 Key Terms To Know

| Term | Definition |
|------|------------|
| **API** | Application Programming Interface, how programs talk to services |
| **API key** | Secret credential for accessing an API |
| **Token** | Roughly a word; LLM context windows measured in tokens |
| **Context window** | The total tokens an LLM can process in one call |
| **System prompt** | Instructions to the model about its role |
| **Structured output** | LLM response formatted as JSON or specific schema |
| **Tool use / Function calling** | Letting an LLM call external functions |
| **Agent** | An LLM doing multiple steps autonomously (vs single chat response) |
| **RAG** | Retrieval-Augmented Generation; supplementing prompts with retrieved docs |
| **Embedding** | Vector representation of text used for semantic search |
| **Fine-tuning** | Customizing a model on specific data (usually overkill for portfolio agents) |
| **Hallucination** | Model generating plausible-but-false output |
| **Temperature** | LLM parameter controlling randomness (0 = deterministic, 1 = creative) |
| **Max tokens** | Cap on output length per call |

---

## ✅ Module 6 Summary

You now know:

- 🤖 What makes an "agent" vs a "ChatGPT prompt"
- 🛠️ How to build with Claude API (and OpenAI Assistants alt)
- 🎯 6 agent use cases to choose from
- 📦 The GitHub repo structure recruiters expect
- 🎥 What goes in the Loom demo
- 💰 How to estimate and document cost
- 🚨 The security/privacy gotchas

**Next steps:**
1. 🎥 Watch the videos in `Videos.md` (Claude API + Cursor + Replit Agent walkthroughs)
2. 🛠️ Build your agent (10 hours)
3. 📦 Push to GitHub + write README
4. 🎥 Record the Loom demo
5. ✏️ Use `Quiz.md` to self-evaluate
6. ➡️ Move to [Module 7: Personal Brand](../Module-07-Personal-Brand-Online-Presence/Reading.md)

---

## 📚 Further Reading (Optional)

- 📖 [Anthropic API documentation](https://docs.anthropic.com/), the official reference
- 📖 [Anthropic Cookbook](https://github.com/anthropics/anthropic-cookbook), example agents
- 📖 [OpenAI Assistants API docs](https://platform.openai.com/docs/assistants/overview)
- 📖 [Cursor tutorials](https://docs.cursor.com/), for the AI-pair-programming environment
- 📖 [Pierre de Wulf Marketing Engineering Newsletter](https://www.linkedin.com/in/pierredewulf/) AI agents in marketing
- 📖 [The Replit Agent docs](https://docs.replit.com/replitai/agent), for the no-code path

---

## Discussion, Socratic prompts

These prompts probe the line between "useful agent" and "ChatGPT wrapper," and what hiring managers actually grade.

1. **The reading distinguishes a "ChatGPT wrapper" (single API call) from an "agent" (multi-step, orchestrated, possibly with tool use).** A pragmatist counter-argument: a well-prompted single-call ChatGPT *wrapper* often outperforms a complex multi-step agent on real marketing tasks because each extra step compounds errors. For a content-brief generator, when is single-shot the right architecture, and when is multi-step worth the complexity? What's the test?
2. **Path A is Cursor / Replit ($20-25/mo "AI-pair-programming"), Path B is VSCode + Continue.dev (free), Path C is Make.com calling Claude API (no-code).** The reading recommends A or B "if you can." But a senior marketer counters: *"If Cursor writes 90% of your code, what skill did you actually demonstrate?"* What does the agent capstone *actually* test in 2026, coding ability, system thinking, prompt engineering, or shipping discipline? And does the answer change what tooling you pick?
3. **The reading recommends disclosing AI pair-programming use ("built with Cursor as pair-programmer is GOOD now").** A counter-view from an old-school engineer: disclosing it lets the reader discount your work entirely. What's the right framing in the README? When is disclosure a strength signal, and when does it undersell you?
4. **Six agent use cases are offered (lead qualifier, content brief, competitor research, email personalization, SEO content, social repurposer).** A senior marketer says only competitor research and email personalization with web scraping are "real" agents, the others are just structured prompt templates. Is the senior right? What's the dividing line between "prompt template I wrap in a Python file" and "agent that does something not achievable in pure chat"?
5. **The reading documents API cost (~$0.02 per content-brief run, ~$0.075 per competitor-research run).** A marketing-ops manager pushes back: *"At those prices, the human time saved is way less than the API spend if you account for setup and maintenance. Build vs buy, most teams should just pay for Jasper / Writer / Copy.ai."* When does building the agent yourself pencil out vs paying for a SaaS that already does it? Defend the build for portfolio purposes AND argue against it for production.

---

> **Where this leads.**
> - Inside this course: Module 7 (Personal Brand), the GitHub repo + README + cost analysis from this capstone become a Featured pin on LinkedIn. Module 8 will use the agent demo as the "differentiator" slide in the pitch deck.
> - Cross-course: [14-AI-Marketing-Foundations Module 3](../../14-AI-Marketing-Foundations/Module-03-SEO-in-the-AI-Era/Reading.md) covers the prompt-engineering depth this agent needs. [17-AI-Marketing-Analytics-Automation Module 8](../../17-AI-Marketing-Entrepreneur/README.md) shows how agents like this fit into a full AI-marketing-ops workflow.
> - Practice: Practice Exam 2 has 4 questions on this capstone (Q13–Q15, Q35). The Final Mock's Q4 ("show me code"), Q10 ("AI in marketing"), and Q35 ("tell me about your AI agent") all grade against the GitHub repo + Loom quality.
