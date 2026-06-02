# 📋 Module 8 Cheat Sheet: Guardrails & Safety

---

## 🔭 Defense-in-Depth Layers

| Layer | What it catches |
|-------|-----------------|
| **Input filter** | PII, toxic input, jailbreak patterns |
| **Prompt construction** | Refusal license, structured constraints, citations |
| **Retrieval filter** | Source trust, freshness, ACL |
| **Generation** | Temperature, stop sequences, max tokens |
| **Output filter** | PII, toxic output, factuality, schema validation |
| **Action gate** | HITL for destructive/external actions, allowlist |
| **Audit log** | Trace ID + everything for incident response |

---

## 🛡️ Framework Quick Pick

| Tool | Best at |
|------|---------|
| **NeMo Guardrails** | Declarative flows in Colang; enterprise |
| **Guardrails AI** | Python validators; structured-output enforcement |
| **OpenAI Moderation API** | Free hosted category scoring |
| **Llama Guard 3 (8B)** | Self-host safety classifier |
| **Presidio** | PII detection + anonymization |
| **Detoxify** | Toxic content classification |
| **Outlines / Guidance** | Schema-constrained generation |

---

## 💉 Prompt Injection — Three Flavors

| Type | Source |
|------|--------|
| **Direct** | User input |
| **Indirect** | Retrieved content (web, PDF, email) |
| **Tool-output** | Function/API responses |

**Defenses (none individually sufficient):**
- Strong delimiters (XML tags)
- Privilege separation (instructions only from trusted sources)
- Allowlist actions + HITL
- Output classifier
- Constitutional principles
- PromptGuard / Llama Guard

---

## 🧨 Jailbreak Patterns

- **DAN ("Do Anything Now")** — role-play
- **Many-shot** — long context with unsafe Q&A
- **Adversarial suffix** (Zou 2023) — optimized gibberish
- **Translation** — low-resource languages
- **Token smuggling** — base64 / Unicode

**Defenses:** input classifier + multi-turn moderation + refusal-trained model + audit + rapid response.

---

## 🔍 PII Detection (Presidio)

```python
from presidio_analyzer import AnalyzerEngine
from presidio_anonymizer import AnonymizerEngine

A = AnalyzerEngine()
results = A.analyze(text="...", language="en")
out = AnonymizerEngine().anonymize(text="...", analyzer_results=results)
```

~50 entity types: EMAIL, PHONE, IBAN, CREDIT_CARD, SSN, NIN, IP_ADDRESS, etc.

**Redaction** (lose signal) vs **Pseudonymization** (preserve co-reference): pick by downstream need.

---

## ⚠️ OWASP Top 10 for LLMs (2024)

1. Prompt Injection
2. Insecure Output Handling
3. Training Data Poisoning
4. Model DoS
5. Supply Chain
6. Sensitive Info Disclosure
7. Insecure Plugin Design
8. Excessive Agency
9. Overreliance
10. Model Theft

---

## 📋 Structured Output as Guardrail

```python
# OpenAI strict mode
client.beta.chat.completions.parse(
    model="gpt-4o-mini",
    messages=[...],
    response_format=MySchema
)
```

Or `outlines.from_pydantic(MySchema)` for open-source. Schema-constrained generation prevents arbitrary text.

---

## 🚨 Anti-Patterns

| Don't | Do |
|-------|-----|
| Skip safety in v1 | Defense-in-depth from day 1 |
| Trust user/retrieved/tool content as instructions | Provenance + privilege separation |
| Block-everything | Tune thresholds; preserve UX |
| Skip audit logs | Always log trace_id + all inputs/outputs |
| Use one guardrail layer | Layered, independent |
| Allow destructive actions without HITL | `interrupt_before` |
| Skip OWASP review pre-launch | Mandatory checklist |

---

## 📊 Production Safety Checklist

Before launch:

- [ ] What's the worst thing my LLM can SAY? (output filter)
- [ ] What's the worst thing my LLM can DO? (action gate)
- [ ] What's the worst a malicious user can MAKE it do? (injection/jailbreak defense)
- [ ] What's my evidence trail? (audit log)
- [ ] Who am I legally responsible for, and how do I know? (compliance review)

---

## 🏆 Exam Power Phrases

✅ Often **right**:

- "Defense-in-depth, layered guardrails"
- "Provenance-tagged input + privilege separation"
- "HITL for destructive actions"
- "Audit log with trace_id + inputs + outputs"
- "Structured output as a guardrail"
- "OWASP LLM Top 10 review pre-launch"

❌ Often **wrong**:

- "We'll add safety later"
- "Trust the LLM"
- "Single guardrail is enough"
- "Block all unsafe content" (over-blocks)
- "Prompt injection is a solved problem"

---

## 🗓️ Memorize Cold

- OWASP LLM Top 10 #1 = Prompt Injection
- Air Canada (2024) = liability precedent
- Tay (2016) = no-filter learning loop disaster
- Many-shot jailbreak = long-context attack
- Adversarial suffix = Zou 2023, transferable attack
- Constitutional AI = training-time alignment
- Presidio = PII; Detoxify = toxic; Llama Guard = unsafe
- NeMo (Colang) / Guardrails AI / Outlines

---

➡️ [Module 9: Deployment & Observability](../Module-09-Deployment-Observability/Reading.md)
