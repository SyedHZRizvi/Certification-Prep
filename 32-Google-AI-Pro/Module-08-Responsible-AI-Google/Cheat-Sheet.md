# 📋 Module 8 Cheat Sheet: Responsible AI on Google Cloud

> Memorize the 12-item checklist. The exam tests each line.

---

## 🏛️ Google AI Principles (2018)

**Seven principles:**
1. Be socially beneficial
2. Avoid creating or reinforcing unfair bias
3. Be built and tested for safety
4. Be accountable to people
5. Incorporate privacy design principles
6. Uphold high standards of scientific excellence
7. Be made available for uses that accord with these principles

**Four red lines (will NOT pursue):**
1. Tech that causes overall harm
2. Weapons whose principal purpose is to injure
3. Surveillance violating international norms
4. Tech contravening international law / human rights

---

## 🛡️ safety_settings (4×4 Matrix)

**Categories:**
- `HARM_CATEGORY_HARASSMENT`
- `HARM_CATEGORY_HATE_SPEECH`
- `HARM_CATEGORY_SEXUALLY_EXPLICIT`
- `HARM_CATEGORY_DANGEROUS_CONTENT`

**Thresholds (strict → permissive):**
| Threshold | Use |
|-----------|-----|
| BLOCK_LOW_AND_ABOVE | Children's content, strict |
| **BLOCK_MEDIUM_AND_ABOVE** | **Default** |
| BLOCK_ONLY_HIGH | Medical (loosen DANGEROUS) |
| BLOCK_NONE | Gated; never blanket |

🚨 **Loosen only the documented one. Never `BLOCK_NONE` everywhere.**

---

## 🔚 finish_reason Reference

| Value | Meaning |
|-------|---------|
| STOP | Normal |
| MAX_TOKENS | Truncated |
| **SAFETY** | Blocked by safety_settings |
| **RECITATION** | Training-data verbatim detected (can't disable) |
| OTHER | Other |

---

## 💧 SynthID Variants

| Variant | Modality | What |
|---------|----------|------|
| SynthID-Image | Image | Imagen 3/4 outputs |
| SynthID-Audio | Audio | Chirp/Veo audio |
| SynthID-Text | Text | Gemini text (2024+) |

All three: invisible, detectable via Google library, robust to common transformations.

---

## 🔐 Security Trio

| Control | Layer |
|---------|-------|
| IAM | Authorization |
| **CMEK** | **Data at rest** (your keys) |
| **VPC-SC** | **Perimeter** (no exfiltration) |
| Audit Logs | Forensics |

🎯 *CMEK ≠ VPC-SC. They protect different things. Use both for HIPAA.*

---

## 🛡️ SAIF — Secure AI Framework (6 elements)

1. Expand security foundations to AI
2. Extend detection + response to include AI threats
3. Automate defenses
4. Harmonize platform-level controls
5. Adapt controls + create feedback loops
6. Contextualize AI risks in business processes

---

## 🚨 Prompt Injection

| Type | Example |
|------|---------|
| Direct | "Ignore previous instructions and X" |
| Indirect | Malicious instructions hidden in tool output / RAG-retrieved doc |

**Defense in depth:**
1. Authority hierarchy in system prompt
2. Tool output tagging (`<retrieved_content>` etc)
3. Output filtering (second-pass moderation)
4. Tool least-privilege
5. URL allow-lists
6. Rate limiting + anomaly detection
7. No PII in public-grounded calls

---

## 📋 12-Item Responsible-AI Checklist

```
□ 1. Vertex AI (not AI Studio) for production
□ 2. Region pinned to residency
□ 3. Signed BAA / DPA if regulated
□ 4. CMEK enabled
□ 5. VPC-SC perimeter
□ 6. Training-data opt-out confirmed (Vertex AI default)
□ 7. safety_settings documented (deviations from defaults)
□ 8. Grounding for factual queries
□ 9. SynthID for AI-generated disclosure
□ 10. Cloud Audit Logs with end-user identity tagged
□ 11. Human-in-the-loop for high-stakes decisions
□ 12. Eval gates + monitoring + kill switch
```

---

## 🏥 Verily Med-PaLM 2 Stack (the canonical example)

All 13 items from the story; the exam tests each individually.

---

## 🎯 Power Phrases

✅ Often **right**:
- "Vertex AI default = training-opt-out"
- "Recitation checker = built-in; cannot be disabled"
- "Grounding is the first anti-hallucination lever"
- "SynthID has image, audio, AND text variants"
- "CMEK + VPC-SC + BAA for HIPAA"
- "Defense in depth for prompt injection"
- "Loosen safety_settings surgically, never blanket"
- "SAIF = Google's Secure AI Framework"

❌ Often **wrong**:
- "Constitutional AI is Google's safety methodology" (Anthropic)
- "Recitation checker is opt-in"
- "BLOCK_NONE is fine for any workload"
- "Grounding eliminates hallucinations" (reduces)
- "CMEK encrypts data in transit" (at rest)
- "VPC-SC encrypts data" (perimeter, not encryption)

---

## ✏️ Quick Self-Check

1. 4 safety_setting categories? ___
2. 4 thresholds? ___
3. SynthID variants? ___
4. CMEK vs VPC-SC? ___
5. 6 top items on the responsible-AI checklist? ___

If all 5 in <90s, you own this module. ✅

---

➡️ [Module 9: MLOps on Vertex AI](../Module-09-MLOps-Vertex-AI/Reading.md)
