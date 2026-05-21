# 📋 Module 7 Cheat Sheet: Responsible AI

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🧭 AWS Responsible AI Pillars

Fairness · Explainability · Robustness · Privacy & Security · Transparency · Governance · Safety · Controllability · Veracity · Inclusivity

🔥 Top 5 most-tested: **Fairness, Explainability, Robustness, Privacy/Security, Transparency**

---

## 🛡️ AWS Responsible AI Toolkit (MEMORIZE!)

| Service | Job | Pillar |
|---------|-----|--------|
| **SageMaker Clarify** | Bias + explainability (SHAP) | Fairness, Explainability |
| **Guardrails for Bedrock** | Safety filters + PII + grounding | Safety, Privacy, Veracity |
| **SageMaker Model Cards** | Your model docs | Transparency, Governance |
| **AWS AI Service Cards** | AWS's docs for AWS AI services | Transparency |
| **Amazon A2I** | Human-in-the-loop reviews | Controllability, Safety |
| **Macie** | PII discovery in S3 | Privacy |
| **SageMaker Model Monitor (bias drift)** | Detect fairness drift in prod | Fairness |
| **Bedrock Model Evaluation** | Auto / Human / LLM-judge / KB eval | Fairness, Robustness |
| **AWS Artifact** | Compliance reports (SOC, ISO, HIPAA) | Governance |
| **CloudTrail / Audit Manager** | Audit trail for AI APIs | Governance |

---

## 🚦 Bedrock Guardrails — 5 Filter Types

1. **Content filters** — hate, insults, sexual, violence, misconduct, prompt attacks
2. **Denied topics** — your custom prohibitions
3. **Word / profanity filters** — exact words
4. **Sensitive information / PII** — detect / block / redact
5. **Contextual grounding check** — flags ungrounded RAG outputs (hallucination guard)
6. **(Image content filters)** — newer, for multimodal

Applies to: input, output, all Bedrock invocations (direct, Agents, KBs).

---

## ⚖️ Bias Types & Fairness Metrics

| Bias source | Example |
|-------------|---------|
| Sampling | Survey only in English |
| Labeling | Annotators disagree on hate-speech |
| Historical | Past hiring favored Group A |
| Aggregation | One model fits "average," fails subgroups |
| Algorithmic | Algorithm itself amplifies a signal |

Fairness metrics: **Demographic parity · Equal opportunity · Equalized odds · Disparate impact (80% rule)**

---

## 🔍 Explainability vs Interpretability

- **Interpretability** — you can see how the model decides (trees, linear)
- **Explainability** — post-hoc explanations (SHAP, LIME) for opaque models

---

## 👥 Human-in-the-Loop Patterns

| Pattern | Use |
|---------|-----|
| **HITL** | Approves every prediction (medical, legal) |
| **HOTL (on)** | Monitors & intervenes when needed |
| **Human-over** | Periodic aggregate review |

AWS service: **Amazon A2I (Augmented AI)**.

---

## 🌍 External Frameworks

- **NIST AI RMF** — US federal voluntary
- **ISO/IEC 42001** — International AI management system standard
- **EU AI Act** — Risk tiers: unacceptable / high / limited / minimal

---

## 🏆 Exam Power Phrases

Usually right:
- ✅ "Bias → **SageMaker Clarify**"
- ✅ "PII / safety / denied topics → **Bedrock Guardrails**"
- ✅ "Human review of AI predictions → **Amazon A2I**"
- ✅ "Customer model docs → **SageMaker Model Cards**"
- ✅ "AWS service docs → **AWS AI Service Cards**"
- ✅ "PII discovery in S3 → **AWS Macie**"
- ✅ "Compliance reports → **AWS Artifact**"
- ✅ "Bias drift in production → **Model Monitor with Clarify**"

Usually wrong:
- ❌ "Use Clarify for PII"
- ❌ "Use Guardrails for bias detection"
- ❌ "Model Cards are public AWS docs" (those are AI Service Cards)
- ❌ "Guardrails only work for chatbots"
- ❌ "Adversarial examples are the same as drift"

---

## ⚠️ Anti-Patterns

- ❌ Shipping a hiring model without bias analysis
- ❌ Trusting a single fairness metric — context matters
- ❌ Using Mechanical Turk for sensitive medical/legal data
- ❌ Treating LLM outputs as facts without grounding
- ❌ Skipping audit logs for AI inferences

---

## ✏️ Quick Self-Check

1. Clarify vs Guardrails — one line each? ___
2. 5 Bedrock Guardrails filter types? ___
3. Disparate impact threshold (80% rule)? ___
4. Service for HITL? ___
5. Customer Model Cards vs AWS AI Service Cards? ___

---

➡️ [Module 8: AI Security & Governance](../Module-08-AI-Security-Governance/Reading.md)
