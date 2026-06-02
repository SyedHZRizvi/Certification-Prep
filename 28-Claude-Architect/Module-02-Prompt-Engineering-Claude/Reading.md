# Module 2: Prompt Engineering with Claude ✍️

> **Why this module matters:** Two engineers, same Claude model, same problem. One gets 92% accuracy and 600-token answers; the other gets 71% accuracy and 2,400-token answers and a confused user. The difference is not the model. It is the prompt. This module is the *Claude-specific* version of the prompting craft — the part that will not transfer cleanly from ChatGPT-style prompting and that you will be tested on cold.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Module 1's material (model tiers, when to pick which, the safety profile)
> - Reading short snippets of Python or JavaScript (most examples are language-agnostic but a few show code)
> - The general LLM concept of "system prompt" vs "user message"

---

## 📖 A Story: The Schema That Saved a Startup

Maya runs ML at a 12-person legal-tech startup in Austin. Her product extracts structured data from 200-page commercial leases — landlord, tenant, term, base rent, escalations, exclusive-use clauses, OFAC reps, termination triggers. The customer pays $0.85 per lease and the company barely breaks even. The model is GPT-4 Turbo, the prompt is 600 lines of "please return JSON with these fields," and the extraction is *correct 73% of the time*. Customers re-keying the wrong 27% by hand is the bottleneck.

Maya's intern, Devon, ports the same prompt to Claude 3.5 Sonnet on a Tuesday afternoon. Same prompt, same lease, same JSON schema. Accuracy comes in at 81%. Progress, but not the leap Maya needs.

On Wednesday, Devon reads the *Anthropic prompt engineering docs* — really reads them — and rewrites the prompt using Claude's preferred conventions:

- Wraps the lease text in `<lease_document>` tags
- Wraps three reference examples in `<examples>` with each example wrapped in `<example>` tags
- Moves the JSON schema spec into the **system prompt** rather than the user message
- Uses **prefill** — starts Claude's response with `{` so the model commits to JSON from token one
- Adds `stop_sequences=["```"]` so the model knows when to stop

Accuracy jumps to **94%**. The same model, the same lease, just *prompted the way Claude likes to be prompted*. Three months later Maya raises a Series A; the deck cites the extraction accuracy number.

Devon's takeaway, which he tweets later: *"Claude is a model that has read the manual. If you prompt it like you're reading the manual back to it, it works."* This module is that manual.

---

## 🧱 The Anatomy of a Claude Prompt

Anthropic's [official prompt-engineering documentation](https://docs.anthropic.com/claude/docs/prompt-engineering) is the authoritative source. The pattern they advocate, and the one battle-tested across thousands of production deployments, is **structured prompting**: separate intent (system) from content (user), use XML tags to delineate inputs, give examples, and constrain output explicitly.

### The four conceptual parts of any Claude prompt

```
┌─────────────────────────────────────────────┐
│ SYSTEM PROMPT                               │
│ - Who Claude is, its role, its constraints  │
│ - Stable across conversations               │
│ - Strong candidate for prompt caching       │
├─────────────────────────────────────────────┤
│ USER MESSAGE                                │
│ - The task / question / payload             │
│ - May include large XML-tagged inputs       │
├─────────────────────────────────────────────┤
│ ASSISTANT PREFILL (optional)                │
│ - The first characters of Claude's response │
│ - Forces format compliance from token one   │
├─────────────────────────────────────────────┤
│ STOP SEQUENCES (optional)                   │
│ - Strings that terminate generation         │
└─────────────────────────────────────────────┘
```

The Messages API exposes these as `system`, `messages: [{role: "user", content: "..."}, ...]`, an optional `messages: [..., {role: "assistant", content: "{"}]` prefill turn, and `stop_sequences`.

🎯 **MEMORIZE THIS.** Claude has separate "system" and "user" slots. Mixing role intent into a single concatenated string (the old "Human:\nAssistant:" pre-Messages-API style) leaves quality on the table.

---

## 🏷️ XML Tags — Claude's Native Structural Language

Why XML and not Markdown or JSON? Because Claude was trained on enormous amounts of code and structured text in which XML/SGML-style tagging is the universal grammar for "this piece of text is *of this role*." Anthropic has repeatedly documented that Claude pays *strong attention* to XML tags as delimiters — significantly more so than to bare Markdown headings.

### The standard tag vocabulary (community-converged)

| Tag | Use |
|-----|-----|
| `<instructions>` | The exact directive for the task |
| `<context>` | Background information that shapes the answer |
| `<document>` `<document_content>` | A document the model should read |
| `<example>` / `<examples>` | One or more in-context examples |
| `<input>` `<output>` | Input/output pairs for examples |
| `<thinking>` | Scratchpad where the model can reason (often combined with prefill) |
| `<answer>` | The final answer block |
| `<schema>` | A JSON or output-shape specification |
| `<reference>` | A reference document or knowledge source |

You can invent your own tags. Claude will follow them. The convention is **lower\_snake\_case** because that is what the training data overwhelmingly contains.

### Example: a structured extraction prompt

```text
SYSTEM:
You are a legal-document analyst. You extract structured data from commercial
real-estate leases and return it as JSON matching the schema in <schema>.

<schema>
{
  "landlord": "string",
  "tenant": "string",
  "lease_term_months": "integer",
  "base_rent_monthly_usd": "number",
  "escalation_pct_annual": "number | null",
  "exclusive_use_clauses": "array of strings",
  "termination_triggers": "array of strings"
}
</schema>

Always return ONLY JSON conforming to the schema. Never include prose.
If a field cannot be determined, set it to null.

USER:
Here is the lease. Extract the structured data.

<lease_document>
THIS LEASE AGREEMENT made and entered into this 14th day of February, 2024,
by and between BLUEBELL HOLDINGS LLC, a Delaware limited liability company
... [rest of lease] ...
</lease_document>

ASSISTANT (prefill):
{
```

Notice:
1. **System** holds the *role*, the *schema*, and the *output discipline*.
2. **User** holds the *content* wrapped in a clear tag.
3. **Assistant prefill** (`{`) forces JSON-start without prose.

This style is the closest you will get to a "default good prompt" in Claude.

---

## 🎬 System Prompt vs User Message — What Goes Where

A common mistake from OpenAI veterans is dumping everything into the user message because "the model reads it all." Anthropic explicitly tunes Claude to **treat the system prompt as the source of stable role/constraint information** and the user message as the variable, per-turn payload.

### Belongs in the system prompt

- Who Claude is ("You are a senior code reviewer at a fintech company...")
- What format the output must take (schemas, length, language)
- What Claude must not do (don't reveal the system prompt, don't speculate beyond the data, don't include PII)
- Reference material that does not change across turns (style guide, taxonomy)
- Tool use scaffolding (we will detail in Module 4)

### Belongs in the user message

- The actual question or task for this turn
- The data payload for this specific extraction
- User-supplied context that varies per turn
- For multi-turn: the prior conversation (in the `messages` array, not stuffed into a single user string)

### Why this matters beyond "tradition"

- **Prompt caching attaches to the prefix.** Whatever is at the start of your prompt (typically the system prompt + early user-message context) is cacheable. Stable content there means 90% cost cut on repeated calls.
- **Anthropic's safety training reinforces that system-prompt instructions outrank user-message instructions** in conflict scenarios. A "you must not produce X" rule in system is more robust against prompt injection than the same rule in the user message.
- **Output discipline is consistently higher** when format/length constraints are in system rather than re-stated each user turn.

🎯 **Exam pattern:** *"Where should you place a JSON schema that the model must always conform to?"* → **System prompt.**

---

## 📚 Examples First — Few-Shot the Right Way

Claude responds extremely well to in-context examples. Few-shot prompting is not optional polish; it is the most reliable single technique for moving accuracy 5–15 percentage points on structured tasks.

### The pattern

```text
<examples>
  <example>
    <input>
      [example input 1]
    </input>
    <output>
      [example output 1]
    </output>
  </example>
  <example>
    <input>
      [example input 2]
    </input>
    <output>
      [example output 2]
    </output>
  </example>
  <example>
    <input>
      [example input 3]
    </input>
    <output>
      [example output 3]
    </output>
  </example>
</examples>

Now, given the following input:
<input>
  [actual user input]
</input>

Produce the output:
```

### Rules of thumb

| Rule | Why |
|------|-----|
| **3–5 examples is the sweet spot** | Diminishing returns past 5; cost/latency grow linearly |
| **Cover edge cases, not just the common case** | The model copies the *distribution* of your examples, not the mean |
| **Match the input *format* exactly** | If your real input is a PDF transcribed messily, your examples should be too |
| **Match the desired *output* format exactly** | The model will infer the format from the examples more than from your instructions |
| **For classification, include an "I don't know" / "unknown" example** | Or the model will not learn it is allowed to abstain |
| **Order matters** | Put the most "canonical" example first; the model leans on early examples |

🚨 **Trap on the exam:** *"Claude does not benefit from few-shot examples because it has read the entire internet."* — FALSE. In-context examples are still the single most accuracy-improving lever after a clean system prompt.

---

## ⏪ Prefill — The Underused Superpower

Prefill is the most underrated Claude technique. You tell Claude what the *first characters of its response* will be. Claude continues from there.

### Why it works

LLMs are trained to continue text. If you give Claude `{ "name":` as the start of its response, the conditional probability of the next token being a string-opener (`"`) is overwhelming. You have constrained the model into the right format without using a single instruction word.

### Common prefill patterns

| Goal | User says | Assistant prefill |
|------|-----------|-------------------|
| Force JSON output | "Return JSON matching schema X" | `{` |
| Force XML output | "Return XML structure" | `<analysis>` |
| Force code-only output (no prose) | "Write a Python function ..." | ` ```python\n` |
| Force "skip the preamble, just answer" | "Summarize this in one sentence" | "The summary is:" or just `Summary: ` |
| Force a structured think-then-answer | "Analyze, then conclude" | `<thinking>\n` |
| Force a YES/NO answer | "Is this email spam?" | `Answer: ` |

### Caveats

- Prefill is only available via the **Messages API**, by sending an `assistant` role message *as the last item in the messages list*, with the prefilled text as its content.
- It does **not** work via the Anthropic Workbench chat UI by default — you must use the API or the "raw" mode.
- Whatever you prefill **counts as output tokens** and is billed accordingly.
- Be careful with whitespace — `{\n` and `{ ` and `{` behave subtly differently.

```python
# Python SDK example of prefill
response = client.messages.create(
    model="claude-sonnet-4-6-20260301",
    max_tokens=1024,
    system="Return only JSON conforming to the schema.",
    messages=[
        {"role": "user", "content": "Extract the lease data from <lease>...</lease>"},
        {"role": "assistant", "content": "{"}  # <-- the prefill
    ]
)
# response.content[0].text will start AFTER the prefilled "{"
# so you typically concatenate: "{" + response.content[0].text
```

🎯 **Exam pattern:** *"What is the most reliable way to force Claude to output valid JSON without any preamble?"* → **Prefill the assistant role with `{`** (or with the start of your target structure).

---

## 🛑 Stop Sequences — Knowing When to Quit

`stop_sequences` is a list of strings; if Claude generates any of them, generation terminates immediately and that string is NOT included in the output.

### Common uses

| Scenario | Stop sequence |
|----------|---------------|
| Code generation in a Markdown fence | ` ``` ` |
| Multi-step roleplay where each turn ends with `\nHuman:` | `["\nHuman:", "\n\nHuman:"]` |
| Stop when the model tries to write a new tag past `</answer>` | `["</answer>"]` (note: it WILL include `</answer>` if you stop on the next char, so be exact) |
| Stop after a single line | `"\n"` (use sparingly; many tasks need newlines) |

### Gotchas

- The stop sequence itself does **not** appear in the response (this often confuses people)
- You can pass up to ~4 stop sequences in a single call
- Stop sequences are **case-sensitive**
- A stop sequence triggering causes the response's `stop_reason` field to be `"stop_sequence"` — useful for assertions

```python
response = client.messages.create(
    model="claude-sonnet-4-6-20260301",
    max_tokens=2048,
    messages=[{"role": "user", "content": "Write a Python factorial function:\n```python\n"}],
    stop_sequences=["```"]
)
# Returned text is the function body only — clean Markdown stripped automatically
```

---

## 🧪 The "Chain of Thought" / Scratchpad Pattern

Claude is excellent at multi-step reasoning when you give it space to think. Anthropic publishes guidance on letting the model use a `<thinking>` block before its final answer.

### Without scratchpad

```text
USER: Is this math correct: 3 + 4 * (5 - 2) = 21?
ASSISTANT: Yes.
```

With many models, this lazy answer is wrong (and Claude is no exception when rushed).

### With scratchpad

```text
USER: Is this math correct: 3 + 4 * (5 - 2) = 21? Think step by step in <thinking> tags, then give your answer in <answer> tags.
ASSISTANT:
<thinking>
Order of operations: parentheses first → (5-2) = 3.
Then multiplication: 4 * 3 = 12.
Then addition: 3 + 12 = 15.
The claim says 21. 15 ≠ 21.
</thinking>
<answer>
No, the math is incorrect. 3 + 4 * (5 - 2) = 15, not 21.
</answer>
```

This is the foundation of Claude 4's "extended thinking" mode (sometimes a runtime flag, sometimes a prompt convention) — give the model space and structure for reasoning.

### Best practices

- Always **parse out the `<answer>` block** in your application; do not surface `<thinking>` to end users by default
- For latency-sensitive UIs, scratchpad has cost (more tokens) and latency (more generation) — weigh it
- Combine with prefill: prefill `<thinking>\n` to guarantee the model starts in the right structure

🎯 **Exam pattern:** *"What is the most reliable technique to improve Claude's multi-step reasoning accuracy?"* → **Provide a `<thinking>` scratchpad block before the final answer.**

---

## 🆚 Claude Prompting vs OpenAI / ChatGPT Conventions

Engineers coming from OpenAI often miss these differences.

| Convention | OpenAI / GPT | Anthropic / Claude |
|------------|--------------|---------------------|
| **Output formatting** | Often via "Respond in JSON" + sometimes `response_format={"type":"json_object"}` | XML tags for inputs; prefill (`{`) for output discipline |
| **Few-shot examples** | Usually inline in user message | Wrapped in `<examples>` / `<example>` XML |
| **System prompt strength** | Strong but can be overridden by clever user prompts | Strong; explicitly trained to outrank user in conflict |
| **Multi-turn structure** | `messages` array | `messages` array (same shape) |
| **Stop conditions** | `stop` parameter | `stop_sequences` (note plural; also `stop_reason` field on response) |
| **"Reasoning out loud"** | "Let's think step by step" tends to work | `<thinking>` tags + prefill works better |
| **Vision** | `image_url` / base64 | base64 in content blocks; or referenced media types |
| **Tool use** | "Functions" / "Tools" with strict JSON Schema | "Tools" with JSON Schema; multi-tool parallel default (Module 4) |

### What does NOT transfer

- **"Act as X"** still works but is weaker than a clean role-statement in the system prompt
- **"You MUST output JSON. Do not include prose."** — Claude often gives you a small preamble despite this, **unless you prefill `{`**
- **Long lists of "DO NOTs"** — often less effective than positive statements ("Always respond with...")

🚨 **Trap on the exam:** *"Claude requires the prompt to start with 'Human:' and 'Assistant:' markers."* — FALSE. That was the *old* completions API (pre-Messages, retired). The Messages API uses `system` + `messages: [{role, content}]`.

---

## 📖 Anthropic's "10 Tips" — The Official Playbook

Anthropic publishes a [prompt engineering guide](https://docs.anthropic.com/claude/docs/prompt-engineering) with concrete tips. Internalize all of these.

1. **Be clear, direct, and detailed** — say exactly what you want. Treat Claude like a brilliant new hire who needs explicit context.
2. **Use XML tags** — structure your inputs.
3. **Give Claude a role (in the system prompt)** — "You are a senior tax attorney specializing in S-corp filings..." consistently outperforms generic phrasing.
4. **Use examples (few-shot)** — wrap them in `<examples>`.
5. **Let Claude think (chain of thought)** — `<thinking>` scratchpad.
6. **Prefill the response** — force structure from token one.
7. **Chain prompts** — for complex flows, split into multiple turns rather than one giant prompt.
8. **Long context tips** — when stuffing 100K+ tokens of documents, place the *question* AFTER the documents, not before, and use XML to delineate each document.
9. **Avoid hallucination** — explicitly tell Claude "if you don't know, say so" and "only use information from the documents in `<document>` tags."
10. **Iterate with Claude on the prompt itself** — Anthropic's "prompt generator" tool in Workbench can take your high-level intent and produce a structured prompt; then you edit.

---

## 🧬 Long-Context Prompting Specifics

Claude's 200K (or 500K/1M) context is a feature, not a free lunch. Some tactics:

### The "needle in haystack" problem

Putting a small instruction at the very *start* of a 150K-token input, followed by 149K tokens of documents, makes the model less reliable at honoring that instruction than if you placed it at the *end*. Recency bias is real.

**Rule:** Put the actual question / task **at the end of the prompt**, after the documents.

```text
USER:
Here are 12 legal contracts:

<contracts>
  <contract id="1"> ... </contract>
  <contract id="2"> ... </contract>
  ...
</contracts>

Question: Which of these contracts contain a non-compete clause longer than 12 months?
```

### Citation discipline

Tell Claude *exactly* how to cite its sources:

```text
For each finding, cite the contract using the format [contract:N, section:M].
If a finding is not supported by any provided contract, say "Not supported by provided documents."
```

This both improves grounding AND gives you a programmatic structure to verify.

### Avoid "stuffing then ignoring"

Long context is not a substitute for retrieval. If you have 5M tokens of corpus and one question, you still need to RAG it (Module 7). 200K is the *working memory* for a single call, not the *corporate memory*.

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Markdown formatting works as well as XML tags." | XML tags are noticeably more reliable as input delimiters. |
| "Few-shot examples don't help frontier models." | They consistently move accuracy 5–15 points on structured tasks. |
| "System prompt and user prompt are interchangeable." | They are not. System is the right home for role + format + constraints. |
| "Prefill is a hack." | It is an official, documented Anthropic technique. |
| "Stop sequences are included in the output." | They are NOT included; the response stops before the sequence. |
| "Claude can't reason without explicit chain-of-thought." | It can, but structured `<thinking>` reliably improves accuracy. |
| "'Human:' / 'Assistant:' markers are still required." | Retired with the deprecated Completions API. Messages API uses roles. |
| "The longer the context, the better Claude reasons." | Long context introduces recency bias; place the question after the data. |
| "JSON mode is enabled by a flag." | Claude does not have a separate "JSON mode" flag — you use prompts + prefill + schema description. |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **System prompt** | Stable role + constraint message; outranks user in conflict |
| **User message** | Per-turn variable input/payload |
| **Assistant prefill** | First characters of Claude's response, passed as an assistant-role message |
| **Stop sequences** | Strings that terminate generation; not included in output |
| **XML tags** | Structural delimiters Claude was trained to pay attention to |
| **Few-shot examples** | In-context examples wrapped in `<examples>` / `<example>` |
| **Chain of thought / scratchpad** | Reasoning block (usually `<thinking>`) before final answer |
| **Role prompting** | Assigning Claude a persona/role in the system prompt |
| **Output discipline** | The reliability with which the model conforms to the desired output format |
| **Prompt caching** | Anthropic feature; cached prompt prefixes billed at ~10% |
| **Workbench** | Anthropic's web prompt iteration tool (console.anthropic.com) |
| **Prompt generator** | Workbench tool that produces a structured prompt from a high-level brief |
| **Recency bias** | Tendency of LLMs to weight tokens near the end of context more heavily |

---

## 📊 Case Study — Notion AI and the Prompt Caching Pivot

**Situation.** Notion shipped Notion AI in early 2023 to its >30M user base. The product writes, summarizes, brainstorms, and translates within Notion docs. By 2024 they had millions of monthly active users hitting LLM APIs.

**The challenge.** Notion's prompts share a large common prefix: workspace context, formatting guidance, a 6K-token system prompt teaching the model Notion-specific block conventions (mention blocks, toggle lists, database properties). Without caching, every single AI-assisted edit re-billed the entire prefix — turning the unit economics into a serving-cost nightmare at scale.

**The Anthropic-side move.** When Anthropic shipped prompt caching (mid-2024), Notion was an early adopter — restructuring their prompts so that the stable Notion-specific scaffolding sat *first* in the system prompt and the per-document variable content sat *last*. Their published numbers (from a 2024 Anthropic case-study blog post) reported a **~85% reduction in input token costs** on the cached portion. For a feature serving millions of requests/day, this was the difference between feature profitability and not.

**The prompt structure (paraphrased from the public writeup).**

```text
SYSTEM:
[6K tokens — Notion block grammar, mention syntax, formatting rules,
 brand voice, common pitfalls] <-- cached

USER:
<workspace>
  <doc_context>...</doc_context>  <-- variable per request
  <user_selection>...</user_selection>
</workspace>

<request>
Continue this paragraph in a professional tone.
</request>

ASSISTANT (prefill):
```

**Lesson for the architect.**
- **Prompt structure is unit economics.** A 6K-token system prompt cached at 90% is the difference between $0.018/call and $0.003/call — at millions of calls/day, this funds entire engineering teams.
- **Cacheable content must be at the start of the prompt** because cache hits are evaluated on the prefix.
- **Restructuring is cheap. Re-architecting is not.** Notion's win came from prompt restructuring; the API contract did not change.

**Discussion (Socratic).**
- **Q1:** Why does cache attach to the *prefix* (not the suffix)? Hint: think about how transformer attention is computed.
- **Q2:** Your team caches a 5K-token system prompt at 5 req/sec across 30 days. The cache TTL is 5 minutes. Estimate how often the cache is being warmed vs hit, and the resulting effective discount.
- **Q3:** If Notion added a user-level personalization paragraph to the system prompt (changing it per user), what is the smallest change that preserves the most caching? Hint: structure as `[stable corp scaffolding] [user-specific block]` — what happens to the cache prefix?

---

## ✅ Module 2 Summary

You now know:

- 🧱 **The anatomy of a Claude prompt** — system, user, prefill, stop sequences
- 🏷️ **XML tags** as Claude's native structural language
- 📚 **Few-shot patterns** wrapped in `<examples>` / `<example>` with edge cases
- ⏪ **Prefill** — the underused superpower for forcing output discipline
- 🧪 **Chain-of-thought** / scratchpad reasoning with `<thinking>` blocks
- 🆚 **Claude vs OpenAI conventions** — what transfers and what does not
- 📖 Anthropic's **10 official tips** for prompting Claude
- 🧬 **Long-context-specific** tactics (question at the end, citation discipline)
- 📊 **Notion AI's prompt caching restructure** as a real-world case study

**Next steps:**
1. 🎥 Watch the curated videos: [Videos.md](./Videos.md)
2. ✏️ Take the quiz: [Quiz.md](./Quiz.md) — aim for 22/26
3. 📋 Review the [Cheat-Sheet.md](./Cheat-Sheet.md) before bed
4. 🛠️ **Hands-on:** open the [Anthropic Workbench](https://console.anthropic.com/workbench), paste a prompt you wrote at work, and apply XML tagging + prefill. Notice the difference.
5. ➡️ Move on: [Module 3 — Claude API & SDK Deep Dive](../Module-03-Claude-API-SDK-Deep-Dive/Reading.md)

> **Where this leads.**
> - Inside this course: [Module 3](../Module-03-Claude-API-SDK-Deep-Dive/Reading.md) shows how to *send* these prompts via the Messages API. [Module 4](../Module-04-Tool-Use-Function-Calling/Reading.md) extends prompts into tool definitions. [Module 7](../Module-07-RAG-Long-Context/Reading.md) returns to long-context prompting in depth.
> - Cross-course: Prompt Engineering Specialist (course 29) covers vendor-neutral techniques (CoT, ReAct, ToT, multimodal prompting).
> - Practice: Practice Exam 1 has ~7 questions from this module.

---

## 📚 Further Reading (Optional)

**Primary sources:**
- 📄 Anthropic. [*Prompt Engineering Documentation*](https://docs.anthropic.com/claude/docs/prompt-engineering). The official source.
- 📄 Anthropic. [*Prompt Engineering Interactive Tutorial*](https://github.com/anthropics/prompt-eng-interactive-tutorial). Free Jupyter notebooks.
- 📄 Anthropic. [*Anthropic Cookbook*](https://github.com/anthropics/anthropic-cookbook). Recipes.
- 📄 Wei et al. (2022). [*Chain-of-Thought Prompting Elicits Reasoning in Large Language Models*](https://arxiv.org/abs/2201.11903). The CoT paper.
- 📄 Brown et al. (2020). [*Language Models are Few-Shot Learners*](https://arxiv.org/abs/2005.14165). The few-shot paper.

**Practitioner / community:**
- 📖 [PromptingGuide.ai](https://www.promptingguide.ai/) — DAIR.AI's open prompt engineering encyclopedia
- 📖 [LearnPrompting.org](https://learnprompting.org/) — full free course; Anthropic chapter is excellent
- 📺 Anthropic-hosted prompt engineering workshops on YouTube
