# ✏️ Module 6 Self-Evaluation: AI Agent Capstone

> **Instructions:** Take this AFTER your agent is built, pushed to GitHub, and Loom recorded.
> Honest A/B/C/D answers. Target: 80%+ A or B.

---

## Questions

### Q1. Did you build a working agent (runs end-to-end and produces output)? *(Create)*
A. Yes, runs cleanly + produces meaningful output
B. Runs but has minor bugs
C. Runs partially
D. Doesn't run

---

### Q2. Did you pick a specific use case (lead qualification, content brief, competitor research, etc.), not a generic "ChatGPT wrapper"? *(Evaluate)*
A. Yes, specific use case + clear value
B. Specific use case + value unclear
C. Generic agent
D. No use case defined

---

### Q3. Did you use Claude API or OpenAI Assistants API (or equivalent), not just call ChatGPT manually? *(Apply)*
A. Yes, API integration via SDK
B. HTTP requests to API directly
C. Used Make.com or Zapier to call API
D. Manual ChatGPT use only

---

### Q4. Did you push the code to a public GitHub repo? *(Apply)*
A. Yes, public + linkable
B. Public but unfindable
C. Private repo
D. Not on GitHub

---

### Q5. Does the repo have a README explaining what it does + how to run? *(Create)*
A. Yes, clear README with examples
B. README exists, basic
C. Tiny README ("WIP")
D. No README

---

### Q6. Did you verify your .env / API keys are NOT in the public repo? *(Apply)*
A. Yes, checked + .gitignore in place
B. .env was excluded; didn't check history
C. Not checked
D. API key was committed (rotate it now!)

---

### Q7. Did you record a 3–5 min Loom demo? *(Create)*
A. Yes, uploaded + linked
B. Recorded, not linked from README
C. Scripted, not recorded
D. No Loom

---

### Q8. Does the Loom show the agent EXECUTING live (not just code review)? *(Apply)*
A. Yes, live run + output shown
B. Mostly live with some screenshots
C. Code walk-through only
D. No demo

---

### Q9. Did you use structured prompts (system prompt + user message format)? *(Apply)*
A. Yes, well-structured system prompts + JSON / structured output
B. Used system prompts, no structured output
C. Single-prompt agent
D. Just chat interface

---

### Q10. Is the agent multi-step (more than one API call OR more than one stage)? *(Create)*
A. Yes, multi-step (e.g., scrape → analyze → format)
B. Single API call but with structured input/output
C. Single API call
D. N/A

---

### Q11. Did you document the API cost (per-run, projected)? *(Analyze)*
A. Yes, cost analysis in README
B. Mentioned briefly
C. Vague
D. Not addressed

---

### Q12. Did you write the case study using P-C-A-R-L format? *(Apply)*
A. Yes, all sections
B. Most sections
C. Loose structure
D. None

---

### Q13. Did you include sample inputs + sample outputs in the repo? *(Apply)*
A. Yes, `examples/` folder with multiple samples
B. One sample
C. Mentioned, not included
D. No samples

---

### Q14. Did you note the agent's limitations + v2 ideas? *(Evaluate)*
A. Yes, explicit limitations + 3+ v2 ideas
B. Brief mention
C. Glossed over
D. None

---

### Q15. Could a stranger clone your repo + run it (with their own API key) in <10 min? *(Evaluate)*
A. Yes, verified by peer test
B. Should work
C. Probably not
D. Requires too much setup

---

### Q16. Did you use Cursor / Replit Agent / Continue.dev for the build (and is that disclosed)? *(Apply)*
A. Yes, used + disclosed
B. Used, not disclosed
C. Built from scratch
D. N/A

---

### Q17. Does the agent handle errors gracefully (retries, fallbacks, user-facing messages)? *(Create)*
A. Yes, error handling visible
B. Some error handling
C. Crashes on edge cases
D. No error handling

---

### Q18. If you used web scraping, did you respect robots.txt + rate limit? *(Apply)*
A. Yes, explicit handling
B. Considered, not enforced
C. Didn't think about it
D. N/A (no scraping)

---

### Q19. Did you publish the case study on a public URL (portfolio)? *(Apply)*
A. Yes, public + linkable
B. Drafted on portfolio
C. Not published
D. Not written

---

### Q20. Did you share on LinkedIn / Twitter with repo + Loom links? *(Apply)*
A. Yes, posted + engagement
B. Posted, no engagement
C. Planned
D. No post

---

### Q21. Could you explain the prompt-engineering decisions in an interview? *(Evaluate)*
A. Yes, defended every choice
B. Most choices
C. Some choices
D. Vibes-based

---

### Q22. Did you use tool use / function calling? (Bonus signal) *(Create)*
A. Yes, implemented + works
B. Tried, partial
C. Considered, didn't
D. N/A

---

### Q23. Did you measure quality of agent output? (e.g., sample N runs, rate them) *(Evaluate)*
A. Yes, rated 10+ runs
B. Rated 3–9 runs
C. Eyeballed quality
D. No quality measure

---

### Q24. Is the agent's value clear in business terms? ("Saves X hours/week" / "Replaces $Y of manual work") *(Analyze)*
A. Yes, quantified value
B. Roughly estimated
C. Mentioned vaguely
D. Not addressed

---

### Q25. Could you defend WHY you picked Claude (or OpenAI)? *(Evaluate)*
A. Yes, explicit rationale
B. Mostly
C. Roughly
D. "It's what I had"

---

### Q26. Did you spend 8–12 hours on this capstone? *(Evaluate)*
A. Yes, within range
B. 5–8 or 12–16
C. <5 or >16
D. Lost track

---

### Q27. Have you practiced the 90-second pitch out loud? *(Apply)*
A. Yes, 3+ times
B. Once
C. Drafted
D. Not yet

---

### Q28. Is this a portfolio piece you'd lead with for AI-marketing / dev-tools roles? *(Evaluate)*
A. Yes, flagship for those roles
B. Solid backup
C. Decent
D. Wouldn't lead

---

## 🎯 Model Answers + Grading Guidance

### Q1: Excellent looks like: **A**
Working agent. End-to-end. Produces meaningful output. The whole point of this capstone is shipping a thing.

### Q2: Excellent looks like: **A**
Specific use case. "Content brief generator for B2B SaaS topics" >>> "General marketing AI assistant."

### Q3: Excellent looks like: **A**
SDK-level integration. Shows you understand how the API actually works, not just web app interfaces.

### Q4: Excellent looks like: **A**
Public GitHub. Linkable. This is the equivalent of having a portfolio piece, without it, you have nothing to show.

### Q5: Excellent looks like: **A**
Clear README. Most recruiters never run your code, they read the README + watch the Loom. The README is the front door.

### Q6: Excellent looks like: **A**
.env excluded + verified. The single most common embarrassing portfolio failure is leaked API keys. Triple-check.

### Q7: Excellent looks like: **A**
Loom recorded + linked from README. Without it, the recruiter doesn't see the agent run.

### Q8: Excellent looks like: **A**
Live execution. "Watch this run." That's the "show don't tell" moment.

### Q9: Excellent looks like: **A**
System prompt + structured output. *"You are X. Respond in this format..."* This is what makes the agent reliable.

### Q10: Excellent looks like: **A**
Multi-step. Single API call = chat, not agent. Multi-step = actual orchestration.

### Q11: Excellent looks like: **A**
Cost in README. *"Each run uses ~3k input + 1k output tokens, ~$0.04 per run, ~$4 per 100 runs."* Senior signal.

### Q12: Excellent looks like: **A**
P-C-A-R-L. Consistency across all capstones.

### Q13: Excellent looks like: **A**
`examples/` folder. 2–5 sample runs with input + output. Makes the agent feel real.

### Q14: Excellent looks like: **A**
Explicit limitations + 3+ v2 ideas. *"Doesn't handle JavaScript-rendered pages; v2 would add Playwright. No memory across runs; v2 would add vector store. Output occasionally hallucinates competitor pricing, v2 would add citation requirements."*

### Q15: Excellent looks like: **A**
Verified by peer. Clone fresh, follow README, runs. If you can't pass this test, the project isn't shareable.

### Q16: Excellent looks like: **A**
Used Cursor/Replit + disclosed. *"Built with Cursor as pair-programmer; ~70% AI-generated code, all reviewed + customized."* Honesty wins in 2026.

### Q17: Excellent looks like: **A**
Visible error handling. Try/except blocks, retries on rate limits, useful error messages.

### Q18: Excellent looks like: **A**
Robots.txt + rate limit. If you ignore this, your agent is a liability. Senior teams care.

### Q19: Excellent looks like: **A**
Public URL. Portfolio site. Linkable.

### Q20: Excellent looks like: **A**
Posted on LinkedIn. AI + marketing posts do well, niche + interesting.

### Q21: Excellent looks like: **A**
Defended choices. *"Used Claude over GPT because of structured-output reliability for this format."*

### Q22: Excellent looks like: **A**
Tool use implemented. Big signal upgrade if you did this.

### Q23: Excellent looks like: **A**
Rated 10+ runs. Specifically: how many output briefs are "good" vs "needs editing" vs "broken"? This rigor signal separates senior from junior.

### Q24: Excellent looks like: **A**
Quantified. *"Replaces ~6 hours of senior marketer time per competitor analysis; $50/hr × 6hr = $300 value per run × 50 competitors = $15k value, $7.50 cost."*

### Q25: Excellent looks like: **A**
Rationale. *"Picked Claude because it handles long context better for the multi-page competitor pages."*

### Q26: Excellent looks like: **A**
8–12 hours. Calibrated.

### Q27: Excellent looks like: **A**
Practiced 3+ times.

### Q28: Excellent looks like: **A**
Flagship for AI-marketing roles. If not, the issue is usually: README too thin, or Loom too dry, or the use case is too generic.

---

## 📊 Self-Score Yourself

- 22+ A's → 🏆 Strong piece. Lead with this for AI-marketing roles.
- 16–21 A's → ✅ Solid. Polish C/D items.
- 10–15 A's → ⚠️ Half-built. Most likely: improve README, add error handling, write a real Loom.
- <10 A's → 🔁 Re-read Module 6. Rebuild.

---

## 🃏 Add To Your Flashcards

- Claude API SDK basic patterns
- System prompt vs user message
- Structured output (JSON schema)
- Tool use / function calling
- Cursor vs Replit Agent vs Continue.dev
- The .gitignore + .env pattern
- Cost estimation per call

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 7: Personal Brand](../Module-07-Personal-Brand-Online-Presence/Reading.md)
