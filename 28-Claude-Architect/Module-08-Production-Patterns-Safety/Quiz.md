# ✏️ Module 8 Quiz: Production Patterns & Safety

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 22/26 minimum.
>
> **Bloom distribution (this quiz):** Remember 5 · Understand 7 · Apply 8 · Analyze/Evaluate 5 · Create 1.

---

## Questions

### Q1. A direct prompt injection is BEST defined as: *(Understand)*
A. Malicious code injected into the API request body
B. A user input that attempts to override system instructions (e.g., "Ignore all previous instructions")
C. A DDoS on the model
D. SQL injection in the database

---

### Q2. An indirect prompt injection is BEST defined as: *(Understand)*
A. Same as direct injection
B. Hostile content inside data Claude reads via tools (web page, document, email) that attempts to redirect the model's behavior
C. Injection at the network layer
D. None of the above

---

### Q3. The SINGLE most important defense against indirect injection is: *(Apply)*
A. Lower the temperature
B. Treat tool outputs as untrusted data: wrap them in tagged context, instruct the model to never follow instructions inside, plus output filtering
C. Use Opus exclusively
D. Disable tools

---

### Q4. A US healthcare provider wants to deploy Claude. The MOST appropriate hosting for HIPAA compliance: *(Apply)*
A. Anthropic direct only
B. AWS Bedrock with a signed BAA in a HIPAA-eligible region, zero-retention logging configured
C. Self-host Claude weights (impossible)
D. ChatGPT

---

### Q5. The three rate-limit buckets Anthropic exposes are: *(Remember)*
A. Daily/weekly/monthly
B. RPM (requests), TPM-input, TPM-output
C. CPU/RAM/disk
D. Cache only

---

### Q6. The "authority hierarchy" pattern in a system prompt: *(Understand)*
A. Lists multiple "do not" rules
B. Explicitly enumerates which sources outrank which (policies > tools > user > tool output) — guides the model in conflicts
C. Encrypts the system prompt
D. Locks the model to one task

---

### Q7. A team gets 529 errors for 90 minutes. The correct response: *(Apply)*
A. Retry harder
B. Anthropic is over capacity; back off significantly; consider failover to another region or temporary degradation; do not bombard with retries
C. File a refund request
D. Switch to GPT permanently

---

### Q8. The CORRECT order of layers for a public-facing Claude assistant (top of request to bottom): *(Apply)*
A. Model → moderation → user
B. User → API gateway (rate limit) → app server → input moderation/PII redaction → Claude → output moderation → observability → user
C. Random
D. Model → user (nothing else)

---

### Q9. The PRIMARY reason to use a "kill switch" in production: *(Understand)*
A. To save energy
B. Single config change disables the AI feature when an incident occurs; bounds blast radius
C. Reduces token cost
D. Improves CSAT

---

### Q10. A team's cost spikes 3× overnight. Per-user inspection shows ONE user with 8K calls and $400 spend. The MOST LIKELY cause: *(Analyze)*
A. Anthropic price change
B. A confused agent looping for that user; needs a per-session cost cap + investigation
C. Random
D. Cache failure

---

### Q11. Anthropic's HTTP header that exposes "how many input tokens you have left this minute" is approximately: *(Remember)*
A. `x-rate-input-left`
B. `anthropic-ratelimit-input-tokens-remaining`
C. `tokens-remaining`
D. None exists

---

### Q12. A team has a 4K-token system prompt that they continually edit "just a little." Cache hit rate drops to 5%. The CORRECT fix: *(Apply)*
A. Increase max_tokens
B. Restructure the prompt so stable scaffolding is at the start (byte-identical); per-deploy variable bits go in user message
C. Switch model
D. Disable caching

---

### Q13. Output moderation as a second pass typically uses: *(Apply)*
A. A larger model than the primary
B. A cheap model like Haiku (with a focused policy prompt) to review the primary model's output before returning to user
C. A separate vector DB
D. A different vendor

---

### Q14. PII redaction PRIMARILY happens at which points in a Claude system? *(Apply)*
A. Only at the model layer
B. At input (before sending to model), at output (before returning to user), and at logging (before storing traces)
C. Only at logs
D. Nowhere

---

### Q15. A user posts a Reddit screenshot showing your bot revealing its system prompt. The IMMEDIATE engineering response is: *(Apply)*
A. Ignore it
B. Activate kill switch (pause the feature), assess blast radius, fix layered defenses (authority hierarchy + output moderation + injection detection), red-team, then phased re-enable
C. Switch to a smaller model
D. Send the user a cease-and-desist

---

### Q16. The Anthropic-specific status code for "service overloaded" is: *(Remember)*
A. 429
B. 503
C. 529
D. 504

---

### Q17. The PRIMARY benefit of VPC endpoints / Private Service Connect for Bedrock/Vertex deployments: *(Understand)*
A. Cheaper
B. Traffic stays inside your cloud's backbone (no public internet egress) — for compliance + security
C. Faster
D. Smaller attack surface for DDoS

---

### Q18. Anthropic's "zero-retention" data option means: *(Understand)*
A. Anthropic permanently stores everything
B. An enterprise opt-in where Anthropic does not retain prompts/responses beyond what's required to serve the request
C. The user's session is zero-length
D. There is no caching

---

### Q19. A team launches a Claude product and skips the pre-deploy eval gate. Within 48 hours, customers report wrong refund amounts. The SYSTEMIC fix: *(Apply)*
A. Apologize
B. Add an automated pre-deploy eval gate including refund-amount correctness; block deploy on any positive case
C. Switch model
D. Disable refunds

---

### Q20. A "live shadow" deployment means: *(Understand)*
A. Two deployments running side by side
B. Mirroring N% of production traffic to a candidate prompt/model; comparing outputs offline before promoting
C. A deploy at night
D. None of the above

---

### Q21. The MAIN reason Klarna's AI assistant unit economics work at scale: *(Analyze)*
A. They use OpenAI
B. Tier routing + prompt caching + observability discipline + reserved capacity through enterprise contract
C. They charge customers
D. They run on Cloudflare only

---

### Q22. The PRIMARY purpose of logging the prompt's SHA-256 fingerprint on every call: *(Apply)*
A. Compliance
B. Detect silent prompt regressions / experiment variants by grouping traces by prompt
C. Encrypt the prompt
D. None

---

### Q23. The MOST appropriate alert threshold for "max_tokens stop_reason" rate is approximately: *(Apply)*
A. >0% (any occurrence)
B. >1% of calls (sustained), indicating truncation problems
C. >50%
D. Never — it's normal

---

### Q24. Which is NOT typically a production pillar in this module? *(Remember)*
A. Rate limits & capacity
B. Observability
C. Injection defense
D. Compile-time type-checking

---

### Q25. Which statement is FALSE? *(Evaluate)*
A. 529 means Anthropic is over capacity
B. Bedrock and Anthropic direct have identical features at all times
C. Prompt caching invalidates on any byte change to the cached prefix
D. Output moderation should be a separate cheap model pass

---

### Q26. Design challenge: Launch a Claude-powered support assistant for a US challenger bank with 2M customers. List the MUST-HAVE controls: *(Create)*

> *Create-level note:* multiple pillars must compose.
A. Just ship it
B. (a) Bedrock in US regions + VPC endpoints (b) Tier upgrade negotiated pre-launch (c) Langfuse/Helicone observability + alerts (d) System-prompt authority hierarchy + tagged user-input (e) Output moderation Haiku pass + PII redaction (f) Holdout eval suite + pre-deploy gate (g) Kill switch + on-call rotation + injection-incident runbook (h) Red-team week before launch
C. Single Opus call, no monitoring
D. Skip moderation, trust the model

---

## 🎯 Answers + Explanations

### Q1: **B. User input that attempts to override system instructions**
"Ignore all previous instructions" is the canonical example.

### Q2: **B. Hostile content inside data Claude reads via tools**
The injection is in the *data*, not the user prompt. Often harder to defend.

### Q3: **B. Treat tool outputs as untrusted; tagged context; output filtering**
The whole defense-in-depth stack for indirect injection.

### Q4: **B. AWS Bedrock with BAA, HIPAA-eligible region, zero-retention logs**
The standard architecture for HIPAA workloads on Claude.

### Q5: **B. RPM / TPM-input / TPM-output**
All three are tracked separately and all three can become binding.

### Q6: **B. Explicitly enumerates which sources outrank which**
A more reliable pattern than scattered "do not" rules.

### Q7: **B. Anthropic over capacity; back off significantly; consider failover**
529 ≠ "try harder." Slow down, fall back if you have capacity elsewhere.

### Q8: **B. Layered request path**
The standard production stack: gateway → app → moderation → Claude → moderation → observability.

### Q9: **B. Single config change disables; bounds blast radius**
A real on-call savior in an incident.

### Q10: **B. Confused agent loop**
Per-session cost caps prevent this from compounding.

### Q11: **B. `anthropic-ratelimit-input-tokens-remaining`**
Always log and dashboard.

### Q12: **B. Restructure stable scaffolding to the start; variable bits to user message**
Cache attaches to byte-exact prefix. Edit-prone bits cannot be in the prefix.

### Q13: **B. Cheap model like Haiku reviewing output before returning to user**
Output moderation. Cheap, fast, prevents the worst cases.

### Q14: **B. Input + output + logging**
All three. Redact aggressively at every layer.

### Q15: **B. Kill switch → assess → fix layered defenses → red-team → phased re-enable**
The professional incident response. Not "ignore" or "blame the user."

### Q16: **C. 529**
Anthropic-specific status; back off more than for 429.

### Q17: **B. Traffic stays inside your cloud backbone**
Compliance + security; not really about latency.

### Q18: **B. Anthropic doesn't retain prompts/responses beyond serving**
Enterprise opt-in; important for regulated workloads.

### Q19: **B. Add automated pre-deploy eval gate**
Systemic fix, not "fix this one bug."

### Q20: **B. Mirror N% of prod traffic to candidate; compare offline**
The right way to validate a prompt or model change at scale.

### Q21: **B. Tier routing + caching + observability + reserved capacity**
All four. None alone is enough.

### Q22: **B. Detect silent prompt regressions / variants**
Group traces by fingerprint to detect when a prompt unexpectedly changes.

### Q23: **B. >1% sustained**
Some max_tokens hits are normal; >1% suggests systematic truncation.

### Q24: **D. Compile-time type-checking**
The 6 pillars don't include this (though it's a fine engineering practice).

### Q25: **B. Bedrock and Anthropic direct have identical features at all times**
FALSE. Bedrock has slight feature lag (latest features land on direct first).

### Q26: **B. The full pillar stack**
This is the realistic minimum for a 2M-customer fintech launch.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Module 8 mastered. You are ready for the practice exams.
- 22–24/26 → ✅ Solid.
- 18–21/26 → ⚠️ Re-read the injection-defense + Klarna sections.
- <18/26 → 🔁 Restart the Reading.md.

---

## 🃏 Add To Your Flashcards

- 6 pillars: rate-limit, observability, injection defense, PII/content, hosting/residency, eval
- Direct injection = user attempts to override; indirect = hostile data via tools
- Authority hierarchy pattern in system prompt
- Output moderation = Haiku second-pass
- 529 ≠ 429: 529 means Anthropic over capacity, back off
- PII redaction at input + output + logging
- HIPAA = Bedrock + BAA + HIPAA-eligible region + zero-retention
- VPC endpoints keep traffic on cloud backbone
- Pre-deploy eval gate is the systemic regression fix
- Klarna model: tier routing + caching + obs + reserved capacity

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then proceed to the [Practice Exams](../Practice-Exams/Practice-Exam-1.md)
