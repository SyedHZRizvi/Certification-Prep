# ✏️ Module 4 Quiz: Tool Use & Function Calling

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 22/26 minimum.
>
> **Bloom distribution (this quiz):** Remember 6 · Understand 7 · Apply 7 · Analyze/Evaluate 5 · Create 1.

---

## Questions

### Q1. When Claude returns a `tool_use` content block, the next step is: *(Understand)*
A. Claude has already executed the tool
B. Your code executes the tool and returns a `tool_result` in a `user`-role message
C. The API has already executed the tool
D. The conversation has ended

---

### Q2. A tool definition's MOST important field for Claude's decision-making is: *(Understand)*
A. `name`
B. `description` (this is what Claude reads to decide when/whether to call the tool)
C. `input_schema`
D. `version`

---

### Q3. To force Claude to call a SPECIFIC tool exactly once: *(Apply)*
A. `tool_choice={"type": "auto"}`
B. `tool_choice={"type": "any"}`
C. `tool_choice={"type": "tool", "name": "search_flights"}`
D. `tool_choice={"type": "none"}`

---

### Q4. The role in which tool results are sent back to Claude is: *(Remember)*
A. `assistant`
B. `system`
C. `user`
D. `tool`

---

### Q5. Anthropic's tool API supports parallel tool calls BY DEFAULT. To DISABLE parallel: *(Apply)*
A. Pass `tool_choice={"type": "auto", "disable_parallel_tool_use": true}`
B. Set `parallel: false` in each tool
C. Use streaming
D. There is no way to disable

---

### Q6. The standard JSON Schema feature used to constrain a string to a finite set of allowed values: *(Remember)*
A. `pattern`
B. `enum`
C. `oneOf`
D. `format`

---

### Q7. The MOST RELIABLE way to get strict JSON Schema-conformant structured output from Claude is: *(Apply)*
A. Ask "please return JSON"
B. Lower temperature
C. Define a single tool with the schema and force it via `tool_choice={"type":"tool","name":...}`
D. Use Markdown code fences

---

### Q8. A team has a 60-tool surface and Claude often picks the wrong tool. The MOST LIKELY fix is: *(Analyze)*
A. Switch to Opus
B. Reduce the surface to 8–12 well-scoped tools, OR split into hierarchical agents
C. Add 30 more tools
D. Lower temperature

---

### Q9. The Anthropic computer use beta currently includes which BUILT-IN tools? *(Remember)*
A. `computer`, `text_editor`, `bash`
B. `screenshot`, `keyboard`, `mouse` only
C. Only `bash`
D. None, you implement them yourself

---

### Q10. A tool that returns user-provided content (e.g., `fetch_url`) is a vector for: *(Understand)*
A. Rate-limit exhaustion
B. Prompt injection (untrusted text reaches Claude as "tool output")
C. Schema validation failures
D. Nothing, tool outputs are always trusted

---

### Q11. The `stop_reason` you see when Claude wants to invoke tools is: *(Remember)*
A. `end_turn`
B. `max_tokens`
C. `stop_sequence`
D. `tool_use`

---

### Q12. A destructive tool action (e.g., `delete_account`) should require: *(Apply)*
A. Nothing extra, Claude will be careful
B. An explicit `confirm=true` parameter AND server-side authorization AND audit logging
C. Higher temperature
D. A user-facing modal only

---

### Q13. A team wants `lookup_user` to find users by email OR by user_id. The BEST tool design is: *(Apply)*
A. One tool with a `lookup_by` enum + `value` string
B. Two separate tools: `lookup_user_by_email` and `lookup_user_by_id`
C. A single tool with no parameters
D. Don't expose this functionality

---

### Q14. Anthropic's claude-code agent SDK exposes tools including: *(Remember)*
A. `Read`, `Edit`, `Write`, `Bash`, `Grep`, `Glob`, `WebFetch`, `Skill` (and more)
B. Only `chat` and `complete`
C. Only graph database tools
D. Only `screenshot`

---

### Q15. When using `tool_choice={"type":"any"}`, Claude is: *(Understand)*
A. Restricted to one specific tool
B. Required to use some tool, any of them
C. Forbidden from using tools
D. Required to use ALL tools in parallel

---

### Q16. Tool definitions contribute to which token bucket? *(Understand)*
A. Output tokens
B. Input tokens (the definitions are part of the prompt)
C. Neither, tools are free
D. A separate "tool tokens" bucket

---

### Q17. The MOST important reason to log every tool call is: *(Apply)*
A. Aesthetic
B. Audit trail when something goes wrong (and to debug agent loops)
C. Required by GDPR
D. Reduce token cost

---

### Q18. A user reports the model called `delete_file` on the wrong file. The 5 layers of defense include: *(Analyze)*
A. Single-line prompt
B. Tool description warning + `confirm=true` parameter + server-side auth check + path-validation + audit log + revertable backup
C. Switch to Opus
D. Add more tools

---

### Q19. To convert from OpenAI function calling to Anthropic tool use, the LARGEST shape change is: *(Analyze)*
A. JSON Schema → JSON Schema (same)
B. Tool results: OpenAI's `tool` role → Anthropic's `user` role with `tool_result` content blocks
C. `tools` array → `tools` array (same)
D. There is no difference at all

---

### Q20. A Claude call with 12 tool definitions costs MORE per call (vs a no-tools call) because: *(Understand)*
A. Tool definitions add input tokens
B. The API charges a per-tool surcharge
C. Tool definitions add output tokens
D. They don't cost more

---

### Q21. The pattern where one top-level agent delegates to sub-agents (each with a smaller tool surface) is called: *(Remember)*
A. Pipeline pattern
B. Hierarchical agent (Module 6)
C. Singleton agent
D. Stateless agent

---

### Q22. When Claude returns 3 `tool_use` blocks in one response, your code should: *(Apply)*
A. Execute them sequentially in the order given
B. Execute them in PARALLEL (asyncio/threading) and return all 3 results in one user message
C. Pick one and ignore the others
D. Re-prompt Claude

---

### Q23. Computer use is currently: *(Remember)*
A. Generally available
B. Beta, opt in via `betas=["computer-use-..."]`
C. Deprecated
D. Not available on Sonnet

---

### Q24. The CORRECT way to "return an error to Claude" from a tool is: *(Apply)*
A. Raise a Python exception
B. Return a `tool_result` content block with the error described in the `content` (the model can read and recover)
C. Send an HTTP 500
D. Silent failure

---

### Q25. Which statement about tool use is FALSE? *(Evaluate)*
A. Tool definitions count as input tokens
B. Tool results go back in `user`-role messages
C. Claude executes tools directly inside the API
D. The model can call multiple tools in parallel

---

### Q26. Design challenge: Build a 4-tool customer-support agent for a Stripe-based SaaS that can look up a subscription, change the plan, issue a refund, and email the user. List the four tool names AND mark which require explicit confirmation: *(Create)*

> *Create-level note:* one acceptable answer:
A. (any single tool)
B. `lookup_subscription` (no confirm) · `change_plan` (confirm=true) · `issue_refund` (confirm=true, requires reason) · `email_user` (no confirm but idempotent flag), all logged, all server-side authorized
C. `do_everything` (one tool with all logic)
D. None, let Claude write SQL directly to your prod DB

---

## 🎯 Answers + Explanations

### Q1: **B. Your code executes the tool and returns a `tool_result` in a `user`-role message**
The model only *requests*. Your code executes and returns.

### Q2: **B. `description`**
The description tells Claude *when* and *why* to use the tool. Name and schema are mechanical; description is the decision-making text.

### Q3: **C. `tool_choice={"type": "tool", "name": "search_flights"}`**
The `tool` type with a specific name forces exactly that tool.

### Q4: **C. `user`**
Anthropic uses the user role with `tool_result` content blocks. (OpenAI uses a `tool` role, different.)

### Q5: **A. `tool_choice={"type": "auto", "disable_parallel_tool_use": true}`**
The explicit way to opt out of parallel.

### Q6: **B. `enum`**
JSON Schema's `enum` constrains a value to an allowed set.

### Q7: **C. Define a single tool with the schema and force it**
Often more reliable than prefill-`{` for complex schemas because the API validates against the schema.

### Q8: **B. Reduce the surface, or split into hierarchical agents**
Too many tools confuses the model. Smaller surfaces or hierarchical delegation.

### Q9: **A. `computer`, `text_editor`, `bash`**
Anthropic-defined tool types: `computer_YYYYMMDD`, `text_editor_YYYYMMDD`, `bash_YYYYMMDD`.

### Q10: **B. Prompt injection**
Tool outputs reach Claude as authoritative text. Untrusted sources need defensive prompting + sanitization.

### Q11: **D. `tool_use`**
The dedicated stop reason for "I need to call a tool."

### Q12: **B. `confirm=true` + server-side auth + audit logging**
All three layers (model intent + system policy + traceability). Plus, often, a revertable backup.

### Q13: **B. Two separate tools**
Smaller, more scoped tools generally outperform large overloaded tools.

### Q14: **A. `Read`, `Edit`, `Write`, `Bash`, `Grep`, `Glob`, `WebFetch`, `Skill`**
The canonical agentic coding toolset. Cursor, Cody, Aider converged on similar.

### Q15: **B. Required to use some tool, any of them**
`any` = "must use a tool but you pick which one"; useful for force-structured-output flows.

### Q16: **B. Input tokens**
Tool definitions are serialized into the prompt and count as input tokens.

### Q17: **B. Audit trail + debugging**
Indispensable for production debugging and for compliance review.

### Q18: **B. Description + confirm + auth + path-validation + audit + revertable backup**
Defense in depth. Each layer catches a different failure mode.

### Q19: **B. Tool results: OpenAI's `tool` role → Anthropic's `user` role with `tool_result` blocks**
Same conceptual model; different role convention and content-block shape.

### Q20: **A. Tool definitions add input tokens**
Always. Consider caching the tools array as part of the cacheable prefix.

### Q21: **B. Hierarchical agent**
A top-level dispatcher routes to specialized sub-agents with focused tool surfaces.

### Q22: **B. Execute in parallel and return all 3 in one user message**
Parallel execution is the whole point of parallel tool use.

### Q23: **B. Beta, opt in via `betas=["computer-use-..."]`**
Beta as of writing; check Anthropic announcements for GA status.

### Q24: **B. Return a `tool_result` with error described in the content**
The model reads the error and can recover (e.g., try a different parameter). Exceptions kill the loop.

### Q25: **C. Claude executes tools directly inside the API**
FALSE. Claude requests; your code executes.

### Q26: **B. Scoped tools with mixed `confirm` requirements**
Lookup is safe (read-only); change_plan and issue_refund are destructive; email is side-effect but idempotent.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Module 4 mastered.
- 22–24/26 → ✅ Solid.
- 18–21/26 → ⚠️ Re-read the multi-turn-loop and parallel-tool sections.
- <18/26 → 🔁 Restart the Reading.md.

---

## 🃏 Add To Your Flashcards

- Tool = `name`, `description`, `input_schema` (JSON Schema)
- Three-step dance: User → Claude `tool_use` → your code executes → Claude continues
- Tool results role: `user`
- `tool_choice`: `auto` / `any` / `tool` / `none`; `disable_parallel_tool_use` flag
- Parallel tool use: default ON; Claude can return multiple `tool_use` blocks
- Computer use: beta; tools `computer_YYYYMMDD`, `text_editor_YYYYMMDD`, `bash_YYYYMMDD`
- Structured output: forced tool call is most reliable
- Tool design: verbs, single-responsibility, small surface, description matters
- Safety: server-side auth, audit log, `confirm=true` for destructive

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 5, Model Context Protocol (MCP)](../Module-05-Model-Context-Protocol-MCP/Reading.md)
