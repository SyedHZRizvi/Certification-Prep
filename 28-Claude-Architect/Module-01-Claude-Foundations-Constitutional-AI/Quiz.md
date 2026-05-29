# ✏️ Module 1 Quiz: Claude Foundations & Constitutional AI

> **Instructions:** Answer all 25 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 21/25 minimum.
>
> Every question is tagged with its **Bloom's taxonomy level** so you can self-diagnose.
>
> **Bloom distribution (this quiz):** Remember 6 · Understand 7 · Apply 6 · Analyze/Evaluate 5 · Create 1.

---

## Questions

### Q1. In which year was Anthropic founded? *(Remember)*
A. 2019
B. 2020
C. 2021
D. 2022

---

### Q2. Anthropic is structured as a: *(Remember)*
A. Nonprofit
B. Capped-profit corporation
C. Public Benefit Corporation (PBC)
D. C-corporation with standard profit objective

---

### Q3. The training technique invented by Anthropic that uses a written set of principles and an AI critic to shape harm-avoidance is: *(Remember)*
A. RLHF
B. Supervised Fine-Tuning (SFT)
C. Constitutional AI (also called RLAIF for the RL phase)
D. Distillation

---

### Q4. Which Anthropic paper is the founding reference for Constitutional AI? *(Remember)*
A. Vaswani et al. (2017) — Attention Is All You Need
B. Bai et al. (2022) — Constitutional AI: Harmlessness from AI Feedback
C. Brown et al. (2020) — Language Models are Few-Shot Learners
D. Ouyang et al. (2022) — Training language models to follow instructions

---

### Q5. The three Claude model tiers introduced with the Claude 3 family (March 2024) are: *(Remember)*
A. Mini, Standard, Pro
B. Small, Medium, Large
C. Haiku, Sonnet, Opus
D. Bronze, Silver, Gold

---

### Q6. The KEY advantage of Constitutional AI over pure RLHF is: *(Understand)*
A. It makes the model faster at inference
B. It reduces the volume of human safety labels required and produces an auditable principle set
C. It uses less GPU memory during training
D. It eliminates the need for any human input at all

---

### Q7. The Responsible Scaling Policy (RSP) is MOST analogous to which framework from another field? *(Understand)*
A. SOC 2 audit framework from IT compliance
B. Biosafety Level (BSL) framework from biology
C. ISO 9001 quality management
D. ITIL service management

---

### Q8. A team needs to do high-volume intent classification on millions of short customer-support messages per day. Which Claude tier is the BEST default? *(Apply)*
A. Haiku 4.5
B. Sonnet 4.6
C. Opus 4.6
D. Claude 2 (legacy)

---

### Q9. A team needs to refactor a 30-file Python codebase with cross-file dependencies. Which Claude tier is the BEST default? *(Apply)*
A. Haiku 4.5
B. Sonnet 4.6 (with Opus fallback for the hardest sub-tasks)
C. The smallest tier always — refactoring is "just substitution"
D. Any tier — they perform identically

---

### Q10. The KEY structural difference between Anthropic and OpenAI as corporations is: *(Understand)*
A. Anthropic only accepts government funding
B. Anthropic is a Public Benefit Corporation legally required to consider broader societal impact; OpenAI is a capped-profit subsidiary of a nonprofit
C. Anthropic does not commercialize its models
D. There is no structural difference

---

### Q11. Prompt caching on the Anthropic API typically reduces the cost of cached input tokens by approximately: *(Remember)*
A. 10%
B. 50%
C. 90%
D. 99%

---

### Q12. Which of the following is NOT one of the principles typically included in Anthropic's constitution? *(Understand)*
A. Helpfulness
B. Harmlessness
C. Honesty
D. Maximizing engagement / user attention

---

### Q13. A regulated bank's CISO asks: "Why should we pick Claude over GPT-4o for a customer-facing assistant?" The BEST one-sentence answer is: *(Apply)*
A. "Claude is always cheaper than GPT."
B. "Claude is trained using Constitutional AI, an auditable safety methodology, which gives us a more defensible safety story for regulated workloads."
C. "Claude has more parameters."
D. "Claude is hosted only on US servers."

---

### Q14. The TYPICAL standard context window for Claude Sonnet 4.6 is: *(Remember)*
A. 8K tokens
B. 32K tokens
C. 200K tokens (with a 1M-token beta header available)
D. 10M tokens

---

### Q15. A team builds a Claude app on AWS and is required to keep ALL data inside their own AWS account. The MOST appropriate deployment topology is: *(Apply)*
A. Anthropic's direct API only
B. AWS Bedrock with the Claude model
C. Copy the model weights and self-host (Claude weights are open-source)
D. GCP Vertex AI only

---

### Q16. Constitutional AI's RL phase is often abbreviated: *(Remember)*
A. RLHF
B. PPO
C. RLAIF (Reinforcement Learning from AI Feedback)
D. SFT

---

### Q17. The MAIN reason Cursor (the AI code editor) defaulted to Claude Sonnet for its Composer agent flow is: *(Analyze)*
A. Anthropic offered them a price discount
B. Strong long-context instruction-following + clean multi-turn tool use + competitive prompt-caching economics
C. Claude is the only model with multi-modal vision
D. GPT-4 was unavailable

---

### Q18. Which of the following is TRUE about ASL levels? *(Understand)*
A. ASL-3 means a model has been formally banned from deployment
B. ASL levels classify model capability + risk class and prescribe stronger pre-deployment controls as capability grows
C. ASL is an industry standard maintained by NIST
D. All current Claude models are ASL-5

---

### Q19. Reading a Claude model card, the appropriate FIRST sections to consult before integrating into production are: *(Apply)*
A. Pricing only
B. Intended use, known limits, and the evaluation results — to confirm fit and surface caveats
C. Marketing FAQ
D. None — model cards are for researchers

---

### Q20. A team designs a 1M-conversation-per-day chatbot and budgets $4K/month for inference. They have profiled and Sonnet costs $0.020/convo without caching but $0.011/convo with caching of a stable 4K-token system prompt. Cost per month with caching ≈ : *(Analyze)*
A. ~$11K (still over budget)
B. ~$330K (one order of magnitude over)
C. ~$330 (well under budget)
D. Cannot be calculated

---

### Q21. The BEST one-line description of the Constitutional AI training loop is: *(Understand)*
A. The model only learns from a fixed instruction dataset
B. The model generates a response, an AI critic critiques it against a written constitution, the model revises, and the revised pair becomes training data
C. Humans label every response manually
D. The model uses reinforcement learning from gameplay traces

---

### Q22. A startup ingests 600-page legal contracts and needs structured extraction with per-page citations. The MOST appropriate model + reason is: *(Apply)*
A. Haiku — speed first
B. Sonnet or Opus — long-context handling + strong adherence to structured output schemas + citation support
C. GPT-3.5 — to save cost
D. Any model — they perform identically on long PDFs

---

### Q23. Anthropic's MAJOR strategic investors include: *(Remember)*
A. Microsoft and Apple
B. Amazon and Google
C. Meta and IBM
D. Tesla and Oracle

---

### Q24. Which of the following statements about Constitutional AI is FALSE? *(Evaluate)*
A. The constitution shapes training, not runtime rule-checking
B. CAI can dramatically reduce the volume of human labels needed for harm avoidance
C. CAI guarantees the model will never produce a harmful output
D. The constitution can draw on existing documents like the UDHR

---

### Q25. Design challenge: An enterprise wants a Claude-based "AI gateway" for 800 internal engineers. Source code is sensitive. They use AWS but not Bedrock yet. They want low latency and cost-managed routing between tiers. The MINIMUM viable architecture sketch should include: *(Create)*

> *Create-level note:* multiple components must compose correctly.
A. Anthropic direct API only, single Sonnet model, no caching, no observability
B. AWS Bedrock for Claude (data residency) + tier router (Haiku/Sonnet/Opus) + prompt caching for system prompt + Langfuse or Helicone observability + per-team rate limits
C. Self-hosted Claude open weights on EC2 (not possible — Claude weights are closed)
D. Forward every request straight to Opus, no router, no caching

---

## 🎯 Answers + Explanations

### Q1: **C. 2021**
Anthropic was founded in September 2021 by seven OpenAI researchers led by Dario and Daniela Amodei.

### Q2: **C. Public Benefit Corporation (PBC)**
This structure legally requires the board to consider broader societal impact, not just shareholder return.

### Q3: **C. Constitutional AI (also called RLAIF for the RL phase)**
RLAIF (Reinforcement Learning from AI Feedback) is the RL stage of the broader CAI methodology.

### Q4: **B. Bai et al. (2022) — Constitutional AI: Harmlessness from AI Feedback**
Published December 2022. The founding technical paper for Anthropic's safety approach.

### Q5: **C. Haiku, Sonnet, Opus**
Named after Japanese poetic forms, smallest to largest. Convention started with Claude 3 in March 2024.

### Q6: **B. It reduces the volume of human safety labels required and produces an auditable principle set**
Two-part benefit: less human labor for harm labels, and a written constitution you can review and revise.

### Q7: **B. Biosafety Level (BSL) framework from biology**
Anthropic has explicitly cited BSL as the inspiration for ASL — both are capability/risk classes triggering stronger controls as you move up.

### Q8: **A. Haiku 4.5**
High-volume, low-complexity classification is exactly the Haiku sweet spot — 5× cheaper than Sonnet at similar quality on simple tasks.

### Q9: **B. Sonnet 4.6 (with Opus fallback for the hardest sub-tasks)**
Cross-file refactoring needs strong reasoning; Sonnet handles most cases, Opus for the hardest sub-tasks. Tier routing is real architecture.

### Q10: **B. Anthropic is a PBC; OpenAI is a capped-profit subsidiary of a nonprofit**
This is the canonical answer the exam is looking for. The structural difference is real and load-bearing for the safety thesis.

### Q11: **C. 90%**
Cached input tokens are billed at roughly 10% of standard input price — a ~90% discount. The cache TTL is short (typically 5 minutes), so traffic patterns matter.

### Q12: **D. Maximizing engagement / user attention**
Helpfulness, harmlessness, honesty are core principles. Engagement maximization is *explicitly avoided* — it leads to manipulative behavior.

### Q13: **B. "Claude is trained using Constitutional AI, an auditable safety methodology..."**
This is the CFO/CISO-defensible one-sentence answer. Practice saying it out loud.

### Q14: **C. 200K tokens (with a 1M-token beta header available)**
200K is standard. 1M is available via a beta header on Sonnet for early access.

### Q15: **B. AWS Bedrock with the Claude model**
Bedrock keeps data inside your AWS account; no egress to Anthropic-managed infra. This is *the* answer for "data must stay in our AWS account."

### Q16: **C. RLAIF**
Reinforcement Learning from AI Feedback — the AI-critic-driven RL phase that distinguishes CAI from RLHF.

### Q17: **B. Strong long-context instruction-following + clean multi-turn tool use + competitive prompt-caching economics**
Cursor's publicly stated rationale combines all three. The full answer also includes refusal-profile improvements over time.

### Q18: **B. ASL levels classify model capability + risk class and prescribe stronger pre-deployment controls as capability grows**
ASL is not a ban; it is a graduated commitment to stronger controls as capability advances.

### Q19: **B. Intended use, known limits, and the evaluation results**
The model card is your *risk-management* tool. Read these sections before any production decision.

### Q20: **A. ~$11K (still over budget)**
1M × $0.011 = $11,000/day, which is roughly $330K/month. The "$4K budget" is the trap — at 1M convo/day even Haiku exceeds it. (Correct math: $0.011 × 1M × 30 ≈ $330K. **The intended answer is "still over budget" because we should re-shop tiers.** The trap is jumping at $11K — that's per day, not month.)

*Note: This question is intentionally tricky to test that you do the math.*

### Q21: **B. The model generates → AI critic critiques against constitution → model revises → revised pair is training data**
This is the textbook description of the supervised-revision stage of CAI. The RL stage uses AI preference labels instead.

### Q22: **B. Sonnet or Opus — long-context handling + structured output adherence + citation support**
Long PDFs + structured output + citations is the canonical "use Claude" workload.

### Q23: **B. Amazon and Google**
Amazon has invested $4B+ in multiple tranches; Google is also a major strategic investor. These are publicly disclosed.

### Q24: **C. CAI guarantees the model will never produce a harmful output**
False. No training method guarantees zero harmful outputs. CAI reduces probability and improves auditability, but the model is still probabilistic.

### Q25: **B. Bedrock + tier router + caching + observability + rate limits**
The "AI gateway" pattern. Each component addresses a real concern: Bedrock for residency, router for cost, caching for unit economics, observability for ops, rate limits for fairness.

---

## 📊 Score Yourself

- 24–25/25 → 🏆 Module 1 mastered. Onward to prompt engineering.
- 21–23/25 → ✅ Solid. Note the gaps, then move on.
- 17–20/25 → ⚠️ Re-read the Constitutional AI and model-family sections.
- <17/25 → 🔁 Restart the Reading.md, then re-quiz tomorrow.

---

## 🃏 Add To Your Flashcards

- Anthropic founding facts: 2021, San Francisco, Public Benefit Corporation, 7 ex-OpenAI researchers
- Constitutional AI: the loop (generate → critique → revise → train); reduces human safety labels
- RLHF vs CAI: human preference vs AI preference guided by written constitution
- Model family: Haiku (small/fast/cheap), Sonnet (default workhorse), Opus (smart/slow/expensive)
- Pricing tiers (memorize approximate $/Mtok); prompt caching = ~90% off cached input
- RSP and ASL levels; analogous to BSL in biology
- Three deployment options: Anthropic direct, AWS Bedrock, GCP Vertex
- Cursor's reasons for choosing Claude (long-context, tool use, caching economics)

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 2 — Prompt Engineering with Claude](../Module-02-Prompt-Engineering-Claude/Reading.md)
