# 📋 Module 2 Cheat Sheet: Responsible AI & Content Safety

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🧭 The 6 RAI Principles (MEMORIZE)

```
1. FAIRNESS             , equitable outcomes across groups
2. RELIABILITY & SAFETY , works under expected + edge conditions
3. PRIVACY & SECURITY   , protect data; don't leak training data
4. INCLUSIVENESS        , usable by diverse abilities
5. TRANSPARENCY         , users know it's AI + how it decided
6. ACCOUNTABILITY       , humans answer for AI outcomes
```
🧠 Mnemonic: **F**riendly **R**obots **P**rotect **I**nclusive **T**ech **A**ccountably

---

## 🚨 Harm Categories + Severity

| Category | Hate · Sexual · Violence · Self-Harm |
|---|---|
| Severity | **0 / 2 / 4 / 6** (discrete; no odd numbers) |
| Default OpenAI threshold | **Medium** (blocks 4+) |

---

## 🧪 Content Safety APIs

| API (Application Programming Interface) | Catches |
|---|---|
| `analyze_text` / `analyze_image` | Harmful content in 4 categories |
| `shield_prompt` (Prompt Shields) | Jailbreaks (**user attack**) + indirect injection (**document attack**) |
| `detect_groundedness` | LLM (Large Language Model) output not supported by sources |
| Protected Material Detection | Reproducing copyrighted text/code |
| Custom Categories (preview) | Your own classifier (e.g. competitor mentions) |

```python
from azure.ai.contentsafety import ContentSafetyClient
from azure.ai.contentsafety.models import AnalyzeTextOptions
client = ContentSafetyClient(endpoint, AzureKeyCredential(key))
r = client.analyze_text(AnalyzeTextOptions(text="..."))
```

---

## 🏗️ Azure OpenAI Content Filtering

- Built-in, ON by default for new deployments
- 4 categories × 2 directions (prompt + completion)
- Configure via **Azure AI Foundry → Content filters**
- Apply a **custom configuration** per **deployment**
- Includes: Prompt Shields, Protected Material, Groundedness (where supported)

---

## 🚦 The 4-Step Workflow

```
1. IDENTIFY harms
2. MEASURE them (test sets + evaluation)
3. MITIGATE with 4 layers:
     Model · Safety system · Metaprompt + grounding · UX (User Experience)
4. OPERATE (staged rollout, monitoring, IR plan)
```

🚨 Skipping **Measure** is the classic mistake.

---

## 📑 RAI Documentation Artifacts

| Artifact | What it is |
|---|---|
| **Transparency Note** | Capabilities, limits, recommended uses per service |
| **Impact Assessment** | Internal RAI checklist for big deployments |
| **Code of Conduct** | Customer terms for Azure OpenAI use |
| **Limited Access form** | Application for Face ID, Custom Neural Voice, Speaker Recognition |

---

## 🩺 RAI Dashboard + GenAI Eval

| Tool | Use |
|---|---|
| RAI Dashboard | Error analysis, interpretability (SHAP), counterfactuals, causal, data slicing |
| AI Foundry Evaluation | Score on **Groundedness · Relevance · Coherence · Fluency · Similarity · Safety** |
| Fairlearn | Bias assessment + mitigation |
| InterpretML | Glassbox + explainability |
| PyRIT | Open-source GenAI red-teaming |

---

## 🏆 Exam Power Phrases

**Usually right**:

- ✅ "Custom content filter configuration"
- ✅ "Prompt Shields document attack" (for indirect injection)
- ✅ "Detect groundedness against grounding sources"
- ✅ "Apply layered mitigations"
- ✅ "Measure harm rates before mitigating"

**Usually wrong**:

- ❌ "Disable Content Safety entirely"
- ❌ "Sustainability principle"
- ❌ "Severity 3" (no odd severities)
- ❌ "Built-in filter is off by default"

---

## ⚠️ Anti-Patterns

- ❌ Mitigations without measurement baseline
- ❌ Confusing Inclusiveness with Fairness
- ❌ Bot pretending to be human (Transparency)
- ❌ "The AI made the decision" (Accountability)
- ❌ Using default filter for clinical/medical workloads

---

## ✏️ Quick Self-Check

1. Recite the 6 principles in order.
2. List the 4 harm categories.
3. Severity values? ___
4. Prompt Shield types? ___
5. 4 mitigation layers? ___

If you can answer all 5 in 60 seconds, you own Module 2. ✅

---

## 🎯 Principle → Test Scenario Lookup

| If the question says… | Principle violated |
|---|---|
| "Bot impersonates a human" | Transparency |
| "Model rejects women at 2× the rate" | Fairness |
| "Speech model fails on non-American English" | Inclusiveness |
| "LLM regurgitates training PII" | Privacy & Security |
| "Self-driving can't handle snow / unusual conditions" | Reliability & Safety |
| "'The AI decided to deny the loan'" | Accountability |

## 🧱 The 4 Mitigation Layers (Sarah Bird's framing, MS Build 2024)

| # | Layer | Lever | Azure feature |
|---|---|---|---|
| 1 | Model | Choose safer base model; fine-tune | Azure OpenAI / Foundry model catalog |
| 2 | Safety system | Filters + Shields + Groundedness | Azure AI Content Safety; built-in OpenAI filters |
| 3 | Metaprompt + grounding | System prompt + RAG (Retrieval-Augmented Generation) `in_scope=true` + citations | Foundry prompt flow; On Your Data |
| 4 | User experience | UX cues, badges, "report" button, escape hatch | Application code + Adaptive Cards |

## 📋 Regulatory Mapping (2024–2026)

| Regulation | Year | Microsoft alignment |
|---|---|---|
| **Microsoft Responsible AI Standard v2** | June 2022 | The source standard |
| **NIST AI RMF 1.0** | January 2023 | Microsoft maps RAI controls to NIST |
| **EU AI Act (Reg. 2024/1689)** | June 2024 (force Aug 2024) | Risk-tier compliance staged through 2027 |
| **NIST SP 800-218A, GenAI Secure Dev** | 2024 | Companion guidance |
| **ISO/IEC 42001 (AI Management)** | December 2023 | Voluntary AI management certification |

## 🏷️ Limited-Access Services To Memorize

| Service | What's gated | Why |
|---|---|---|
| Face, Verify / Identify | 1-to-1, 1-to-N | Biometric privacy |
| Custom Neural Voice | Train branded voice | Deepfake / impersonation risk |
| Speaker Recognition | Voice-print auth | Biometric privacy |
| Azure OpenAI Abuse-Monitoring Opt-Out | Disable 30-day prompt retention | Regulated workloads only |

---

➡️ [Module 3: Computer Vision](../Module-03-Computer-Vision/Reading.md)
