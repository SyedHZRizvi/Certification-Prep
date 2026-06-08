# ✏️ Module 2 Quiz: Prompt Engineering with Claude

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 22/26 minimum.
>
> **Bloom distribution (this quiz):** Remember 6 · Understand 7 · Apply 8 · Analyze/Evaluate 4 · Create 1.

---

## Questions

### Q1. Claude was trained to pay particularly strong attention to which type of input delimiter? *(Remember)*
A. Markdown headings
B. JSON nesting
C. XML tags
D. ASCII art borders

---

### Q2. The MOST reliable way to force Claude to start its response with valid JSON (no preamble) is: *(Apply)*
A. Add "Please output JSON only, no preamble" to the user message
B. Use `response_format={"type":"json_object"}` (an OpenAI parameter)
C. Prefill the assistant role with `{`
D. Lower the temperature to 0

---

### Q3. In the Messages API, where should you place a stable role + format + constraint specification? *(Apply)*
A. The system prompt
B. The first user message
C. The assistant prefill
D. A stop sequence

---

### Q4. Which of the following is TRUE about Anthropic prompt caching? *(Understand)*
A. It is enabled by a single boolean parameter; everything is cached
B. The cache attaches to the prompt PREFIX; only stable content at the start is reusable
C. Caching attaches to the suffix; structure your prompt so variable content is first
D. Caching is only available on Opus

---

### Q5. The "Human:" / "Assistant:" prefix markers are required by: *(Remember)*
A. The current Messages API
B. The deprecated Completions API (retired)
C. Both
D. Neither

---

### Q6. A `stop_sequences=["```"]` parameter passed to the API will: *(Understand)*
A. Include "```" at the end of the response
B. Terminate generation before "```" is emitted; the sequence does NOT appear in the output
C. Throw an error
D. Force Markdown formatting

---

### Q7. For a multi-step reasoning task, the MOST RELIABLE technique to improve accuracy is: *(Apply)*
A. Lowering temperature to 0
B. Adding a `<thinking>` scratchpad block before the final answer
C. Repeating the question 3 times
D. Using ALL CAPS in the system prompt

---

### Q8. Few-shot examples in a Claude prompt should be wrapped in: *(Remember)*
A. ```` ``` ```` Markdown code fences
B. `<examples>` and `<example>` XML tags
C. JSON arrays
D. HTML `<div>` tags

---

### Q9. A team places a 6K-token style guide in the system prompt and uses prompt caching. Per call (1K dynamic input + 500 output) on Sonnet 4.6 at $3/Mtok in, $15/Mtok out, cached at ~10% of standard, the approximate cost per call is: *(Analyze)*
A. ~$0.001
B. ~$0.011 (~$0.0018 cached + $0.003 dynamic + $0.0075 output)
C. ~$0.10
D. ~$0.30

---

### Q10. Place these in the correct order from MOST to LEAST authoritative when in conflict in a Claude prompt: *(Understand)*
A. User message > System prompt > Assistant prefill
B. System prompt > User message > Assistant prefill (in conflict-resolution training)
C. Stop sequences > System prompt > User message
D. They are exactly equal

---

### Q11. Anthropic's recommended placement of the user's question in a long-context prompt (lots of documents) is: *(Apply)*
A. At the very beginning, before any documents
B. Buried in the middle
C. At the end, after all documents
D. Repeated in every section

---

### Q12. A team migrates a working OpenAI extraction prompt to Claude with identical text. Accuracy drops 7 points. The MOST LIKELY culprit: *(Analyze)*
A. Claude is a worse model
B. The prompt uses no XML tags / no prefill / system+user collapsed; Claude conventions differ
C. The API endpoint is unreachable
D. Token costs are higher

---

### Q13. Which of the following is NOT a benefit of using XML tags in a Claude prompt? *(Understand)*
A. Clearer delimitation of inputs vs instructions
B. Improved adherence to structured output
C. Automatic encryption of the input
D. Easier programmatic parsing of the output

---

### Q14. The MAXIMUM number of stop sequences typically supported in a single Messages API call is: *(Remember)*
A. 1
B. 4 (approximately; check current docs)
C. 50
D. Unlimited

---

### Q15. The PRIMARY business reason Notion AI restructured its prompts to maximize prompt caching was: *(Apply)*
A. Compliance with EU regulations
B. ~85% reduction in input token costs on the cached prefix, turning unit economics from unprofitable to profitable
C. The CEO liked caching
D. To avoid Anthropic rate limits

---

### Q16. Which of the following is TRUE about the assistant prefill technique? *(Understand)*
A. The prefilled text is free (not billed)
B. The prefilled text is counted as output tokens and is billed accordingly
C. Prefill works in the Workbench chat UI by default
D. Prefill must be exactly one character

---

### Q17. For a classification task where Claude should sometimes abstain, the MOST important thing to include in your few-shot examples is: *(Apply)*
A. Only positive examples of each class
B. At least one example where the correct answer is "unknown" or "I cannot determine"
C. The largest possible number of examples
D. Examples in a different language

---

### Q18. The Anthropic Workbench is: *(Remember)*
A. A CLI for batch processing
B. A web UI at console.anthropic.com for prompt iteration and testing
C. A Python library only
D. A code editor

---

### Q19. "Recency bias" in long-context prompting means: *(Understand)*
A. Old models perform worse than new ones
B. LLMs tend to weight tokens nearer the end of the context more heavily
C. The model only sees the most recent message
D. Newer documents are more accurate

---

### Q20. A team builds a Claude prompt with a 50K-token system prompt and the documents in user messages. They want both maximum cache reuse and per-call personalization. The BEST structure is: *(Apply)*
A. Put per-user content at the start of the system prompt
B. Put stable scaffolding first in system, per-user variable content last in user message
C. Mix them randomly
D. Put everything in the assistant prefill

---

### Q21. Which prompting technique works BETTER on Claude than on GPT due to training differences? *(Evaluate)*
A. Calling Claude "an expert" with no other context
B. XML-tag delimitation of inputs + prefill for output discipline
C. Lengthy "DO NOT" lists
D. Re-stating the role 5 times in the user message

---

### Q22. The "thinking" scratchpad pattern is BEST surfaced to end users by: *(Apply)*
A. Showing the raw `<thinking>` block as part of the user-visible response
B. Parsing out only the `<answer>` block and hiding `<thinking>` (or showing it as expandable "show reasoning")
C. Always hiding both
D. Letting the model decide

---

### Q23. For a long-context Q&A over 50 contracts, telling Claude to cite as `[contract:N, section:M]` PRIMARILY: *(Apply)*
A. Looks pretty in the UI
B. Improves grounding by forcing the model to anchor claims to a specific source AND gives you a programmatic verification structure
C. Is required by the API
D. Reduces token cost

---

### Q24. The Anthropic prompt engineering documentation explicitly endorses which of these as a real technique (NOT slang)? *(Understand)*
A. Prefill
B. Magic words
C. Token whispers
D. Random repetition

---

### Q25. Which of the following is FALSE? *(Evaluate)*
A. Claude has a separate `system` slot in the Messages API
B. Few-shot examples remain a top accuracy-improving technique even for frontier models
C. Claude has an explicit "JSON mode" boolean parameter
D. Stop sequences are not included in the model's output

---

### Q26. Design challenge: A startup wants to extract 12 structured fields from messy uploaded PDFs of US W-9 tax forms, return JSON, NEVER include prose, abstain when fields are illegible, and minimize cost across 10K daily uploads. The MINIMUM viable prompt design should include: *(Create)*

> *Create-level note:* multiple techniques must compose.
A. A single sentence asking for JSON
B. System prompt with schema + abstention rule + role + 3 few-shot examples (one with abstention) wrapped in `<examples>`; user message with the PDF text wrapped in `<document>`; assistant prefill `{`; prompt caching enabled on the cacheable prefix; Haiku 4.5 model
C. Opus 4.6 model with no system prompt
D. GPT-4o (wrong vendor for this course)

---

## 🎯 Answers + Explanations

### Q1: **C. XML tags**
Anthropic has documented Claude's strong attention to XML tags as delimiters; the training data overrepresents structured XML/SGML content.

### Q2: **C. Prefill the assistant role with `{`**
Prefill forces format compliance from token one. Pure instruction-following is less reliable; OpenAI's `response_format` flag does not exist on the Anthropic API.

### Q3: **A. The system prompt**
Role, format, and stable constraints belong in system. This is also the cacheable prefix, double win.

### Q4: **B. The cache attaches to the prompt PREFIX**
Cache reuse requires the prompt prefix to match exactly. Stable content first.

### Q5: **B. The deprecated Completions API**
Messages API uses `system` + `messages: [{role, content}]`. The "Human:/Assistant:" prefix style is retired.

### Q6: **B. Terminate generation BEFORE "```" is emitted; the sequence does NOT appear**
This is the most common bug. The stop sequence is the *boundary*, not output.

### Q7: **B. Adding a `<thinking>` scratchpad block**
Scratchpad reasoning consistently moves multi-step accuracy. Lower temperature helps for consistency, not correctness.

### Q8: **B. `<examples>` and `<example>` XML tags**
Community-converged convention; Anthropic docs endorse this structure.

### Q9: **B. ~$0.011**
- Cached 6K × $0.30/Mtok = $0.0018
- Dynamic 1K × $3/Mtok = $0.003
- Output 0.5K × $15/Mtok = $0.0075
- Total ≈ $0.012

### Q10: **B. System prompt > User message > Assistant prefill**
Anthropic's training reinforces system-prompt authority. Prefill is a *structural* nudge, not an authority signal.

### Q11: **C. At the end, after all documents**
Combats recency bias and is the documented Anthropic best practice.

### Q12: **B. The prompt uses no XML tags / no prefill / system+user collapsed**
The most common port-from-OpenAI failure mode.

### Q13: **C. Automatic encryption of the input**
XML tags are structural, not security primitives.

### Q14: **B. 4 (approximately; check current docs)**
The exact number varies with API version; the answer expects "small fixed limit, not unlimited."

### Q15: **B. ~85% reduction in input token costs on the cached prefix**
This was the stated outcome in Anthropic's published Notion case study. Restructuring made the feature profitable.

### Q16: **B. The prefilled text is counted as output tokens and is billed accordingly**
Important to remember when designing long prefills.

### Q17: **B. At least one example where the correct answer is "unknown" or "I cannot determine"**
Without it, the model will not learn that abstention is an allowed action.

### Q18: **B. A web UI at console.anthropic.com for prompt iteration and testing**
The Workbench is your primary iteration tool.

### Q19: **B. LLMs tend to weight tokens near the end of context more heavily**
Hence: put the question last, near where attention is freshest.

### Q20: **B. Stable scaffolding first in system, per-user variable content last**
Preserves the cacheable prefix while accommodating per-call variation.

### Q21: **B. XML-tag delimitation + prefill**
This combo is Claude-native and outperforms generic OpenAI conventions on Claude.

### Q22: **B. Parse out `<answer>` block; hide or expand `<thinking>`**
The scratchpad is for the model, not necessarily for the end user. Some UIs offer a "show reasoning" expander.

### Q23: **B. Improves grounding AND gives a programmatic verification structure**
Both effects; the second is what enables programmatic eval / verification of model outputs.

### Q24: **A. Prefill**
Documented Anthropic technique. The others are slang or made up.

### Q25: **C. Claude has an explicit "JSON mode" boolean parameter**
False. Claude relies on prompt structure + prefill + schema description, not a flag.

### Q26: **B. All of the above techniques composed**
Schema + abstention rule + examples + tags + prefill + caching + tier choice. This is the production-grade pattern.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Module 2 mastered. Onward to the API.
- 22–24/26 → ✅ Solid. Note the gaps, then move on.
- 18–21/26 → ⚠️ Re-read the XML/Prefill/CoT sections.
- <18/26 → 🔁 Restart the Reading.md, then re-quiz tomorrow.

---

## 🃏 Add To Your Flashcards

- The 4 prompt parts: system / user / assistant prefill / stop_sequences
- XML tag conventions: `<instructions>`, `<context>`, `<examples>`, `<thinking>`, `<answer>`, `<document>`
- Prefill = first chars of assistant response; counts as output tokens
- Stop sequences do NOT appear in output; terminate generation; case-sensitive
- Anthropic 10 tips (memorize the 10)
- Long-context: question AT THE END; cite sources programmatically
- Cache attaches to PREFIX; stable content first
- Recency bias is real

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 3, Claude API & SDK Deep Dive](../Module-03-Claude-API-SDK-Deep-Dive/Reading.md)
