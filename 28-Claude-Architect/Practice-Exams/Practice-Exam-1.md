# 🧪 Practice Exam 1, Claude Architect (Modules 1–4 focus)

> **Conditions:** Set a 30-minute timer. 30 questions. Treat it like the real assessment.
> **Pass mark:** 25/30 (~85%), the live assessment passes at 85%, so aim higher in practice.
> Take this AFTER finishing Modules 1–4. Covers Foundations, Prompt Engineering, API/SDK, Tool Use.

---

## 📝 Questions

### 1. Anthropic was founded in:
A. 2019
B. 2020
C. 2021
D. 2022

### 2. The training technique invented by Anthropic that uses a written constitution + AI critic to shape harm-avoidance is:
A. RLHF
B. Constitutional AI / RLAIF
C. Supervised fine-tuning only
D. Distillation

### 3. The Claude model tier naming introduced with Claude 3 (March 2024) is:
A. Mini / Standard / Pro
B. Haiku / Sonnet / Opus
C. Bronze / Silver / Gold
D. Small / Medium / Large

### 4. A high-volume intent classification workload should default to which tier?
A. Haiku
B. Sonnet
C. Opus
D. Claude 2 (legacy)

### 5. Prompt caching on the Anthropic API reduces the cost of CACHED input tokens by approximately:
A. 25%
B. 50%
C. 75%
D. 90%

### 6. Claude's standard Sonnet context window is:
A. 8K tokens
B. 32K tokens
C. 200K tokens (1M via beta header)
D. 1M tokens default

### 7. The Anthropic Responsible Scaling Policy is most analogous to which framework?
A. SOC 2
B. ISO 9001
C. BSL (BioSafety Levels) from biology
D. ITIL

### 8. The MOST appropriate way to force Claude to start its response with valid JSON without preamble:
A. "Please return JSON only"
B. `response_format={"type":"json_object"}` (OpenAI-only)
C. Prefill the assistant role with `{`
D. Lower temperature to 0

### 9. Few-shot examples for Claude should be wrapped in:
A. Markdown code fences
B. `<examples>` / `<example>` XML tags
C. JSON arrays
D. HTML `<div>` tags

### 10. The Messages API endpoint is:
A. `POST /v1/completions`
B. `POST /v1/messages`
C. `POST /chat`
D. `POST /v1/generate`

### 11. The required HTTP header pinning the API contract version is:
A. `x-claude-version`
B. `anthropic-version`
C. `api-version`
D. `version`

### 12. Streaming with the Messages API PRIMARILY reduces:
A. Total tokens
B. Time-to-first-token (perceived latency)
C. Cache misses
D. Compute cost

### 13. The Batch API discount on input AND output tokens is approximately:
A. 10%
B. 50%
C. 75%
D. 90%

### 14. Which `stop_reason` indicates Claude wants to invoke a tool?
A. `end_turn`
B. `max_tokens`
C. `stop_sequence`
D. `tool_use`

### 15. The role in which tool RESULTS are sent back to Claude is:
A. assistant
B. system
C. user
D. tool

### 16. Anthropic tool use supports parallel calls BY DEFAULT. To DISABLE parallel:
A. Pass `tool_choice={"type":"auto","disable_parallel_tool_use":true}`
B. Set `parallel:false` in each tool
C. Use streaming
D. Not possible

### 17. To force Claude to call a SPECIFIC tool exactly once:
A. `tool_choice={"type":"auto"}`
B. `tool_choice={"type":"any"}`
C. `tool_choice={"type":"tool","name":"X"}`
D. `tool_choice={"type":"none"}`

### 18. The MOST IMPORTANT field on a tool definition for Claude's decision-making is:
A. `name`
B. `description`
C. `version`
D. `permission`

### 19. To use Claude on AWS Bedrock with the official SDK, you instantiate:
A. `Anthropic(api_key=...)`
B. `AnthropicBedrock(aws_region=...)`
C. `BedrockClient(model=...)`
D. There is no Anthropic SDK for Bedrock

### 20. Anthropic's MAJOR strategic investors include:
A. Microsoft + Apple
B. Amazon + Google
C. Meta + IBM
D. Tesla + Oracle

### 21. The MOST appropriate response to repeated 429 errors under load:
A. Increase worker count
B. Exponential backoff with jitter; honor `retry-after`; consider tier upgrade
C. Switch API key
D. Reduce `max_tokens` to 1

### 22. Which is RETRYABLE?
A. 400 BadRequestError
B. 401 AuthenticationError
C. 422 UnprocessableEntityError
D. 529 OverloadedError

### 23. The CFO-defensible one-sentence answer for picking Claude over GPT in a regulated industry:
A. "Claude is cheaper"
B. "Claude is trained using Constitutional AI, an auditable safety methodology, which provides a more defensible safety story for regulated workloads"
C. "Claude has more parameters"
D. "Claude has no rate limits"

### 24. Anthropic's recommended placement of the user's question in a long-context prompt:
A. At the very beginning
B. Buried in the middle
C. At the end, after all documents
D. Repeated every section

### 25. A 60-tool surface produces frequent wrong-tool choices. The MOST LIKELY architectural fix:
A. Switch to Opus
B. Reduce to 8–12 well-scoped tools, OR split into hierarchical agents
C. Add 60 more tools
D. Lower temperature

### 26. The MOST RELIABLE way to get strict JSON-Schema-conformant output from Claude:
A. "Please return JSON" in user message
B. Lower temperature
C. Define a tool with the schema and force it via `tool_choice={"type":"tool","name":...}`
D. Markdown fences

### 27. To enable prompt caching on a system block, you set on that block:
A. `cache:true`
B. `cache_control:{"type":"ephemeral"}`
C. `useCache:True`
D. `?cache=1` query

### 28. The PRIMARY reason `metadata.user_id` matters on Anthropic calls:
A. Cache key
B. Abuse monitoring + per-user attribution
C. Compliance
D. None

### 29. A junior engineer hardcodes `sk-ant-...` into a React frontend. The CORRECT fix:
A. Base64-obfuscate
B. Move the call server-side; the frontend talks to YOUR backend, which holds the key
C. Use a "limited" key
D. Leave it; the key is fine in frontend

### 30. Anthropic computer use is currently:
A. Generally available
B. Beta, opt in via `betas=["computer-use-..."]`
C. Deprecated
D. Not on Sonnet

---

## 🎯 Answer Key (No Cheating!)

```
1.  C    11. B    21. B
2.  B    12. B    22. D
3.  B    13. B    23. B
4.  A    14. D    24. C
5.  D    15. C    25. B
6.  C    16. A    26. C
7.  C    17. C    27. B
8.  C    18. B    28. B
9.  B    19. B    29. B
10. B    20. B    30. B
```

---

## 📊 Score Yourself

- **27–30 correct** → 🏆 You're ready for Practice Exam 2.
- **24–26** → ✅ Solid; review the modules where you missed.
- **20–23** → ⚠️ Re-read those modules; re-take in 3 days.
- **<20** → 🔁 Restart from the modules that produced the misses.

### Topic-by-topic breakdown

- **Module 1 (Foundations & CAI)**: Q1, 2, 3, 7, 20, 23 → if you missed 3+ → Module 1
- **Module 2 (Prompt Engineering)**: Q8, 9, 24, 26 → Module 2
- **Module 3 (API & SDK)**: Q5, 6, 10, 11, 12, 13, 19, 21, 22, 27, 28 → Module 3
- **Module 4 (Tool Use)**: Q14, 15, 16, 17, 18, 25, 30 → Module 4
- Cross-module / security: Q29

---

➡️ When ready: [Practice Exam 2](./Practice-Exam-2.md)
