# 🧪 Practice Exam 2 — Google AI Pro (Modules 6–9 focus)

> **Conditions:** Set a 45-minute timer. 30 questions.
> **Pass mark:** 24/30 (~80%).
> Take this AFTER finishing Modules 6–9. Covers Fine-Tuning, Agent Builder, Responsible AI, and MLOps.

---

## 📝 Questions

### 1. Fine-tuning is BEST described as:
A. Adding new knowledge to a model
B. Gradient descent on weights to shape behavior (style, format, vocabulary)
C. Compressing the model
D. Replacing the base model

### 2. For "knowledge updates," the BEST tool is:
A. Supervised Fine-Tuning
B. RAG
C. RLHF
D. Distillation

### 3. The 5 rungs of the customization ladder (simplest → most complex):
A. SFT → RLHF → prompt → RAG → DPO
B. Better prompt → few-shot → RAG → SFT → RLHF/DPO
C. Distillation → SFT → prompt → RAG → RLHF
D. None of the above

### 4. Vertex AI's SFT under the hood uses:
A. Full-parameter fine-tuning
B. LoRA (Low-Rank Adaptation) / parameter-efficient adapters
C. Random weight reset
D. Distillation

### 5. The hyperparameter controlling LoRA rank on Vertex AI:
A. `epochs`
B. `learning_rate_multiplier`
C. `adapter_size`
D. `batch_size`

### 6. After fine-tuning, the model is better on the holdout but worse on general questions. This is:
A. Normal
B. Catastrophic forgetting — solutions: more diverse data, smaller adapter, lower LR
C. Quota issue
D. Network failure

### 7. DPO (Direct Preference Optimization) differs from RLHF in that:
A. DPO requires more humans
B. DPO directly optimizes on preference pairs WITHOUT the RL phase + reward model
C. DPO is older
D. They are identical

### 8. Distillation on Vertex AI:
A. Compresses the base model
B. Trains a small "student" (Flash) to mimic a large "teacher" (Pro) on a target task
C. Removes safety
D. Replaces RAG

### 9. Vertex AI Agent Builder is:
A. A single product
B. An umbrella over Conversational Agents, Search Agents, Function Calling, ADK, Agent Garden
C. The same as Google AI Studio
D. Only for voice

### 10. Conversational Agents was previously known as:
A. Dialogflow ES
B. Dialogflow CX
C. Bard
D. PaLM Chat

### 11. The core abstractions in Conversational Agents:
A. Models, prompts, embeddings
B. Flows, Pages, Intents, Slots, Fulfillments
C. CPU, memory, disk
D. Pods, deployments

### 12. To FORCE Gemini to call a specific function:
A. Lower temperature
B. `tool_config` with `mode=ANY` and `allowed_function_names=["X"]`
C. Add "call X" in user message
D. Not possible

### 13. ADK stands for:
A. Agent Development Kit (Google's open-source agent SDK)
B. Application Delivery Kernel
C. AI Database Kit
D. Auth Daemon Kit

### 14. The MOST appropriate choice for a bank's IVR phone bot with strict slot collection:
A. Pure Gemini with function calling
B. Conversational Agents (structured flows + telephony channel)
C. ADK
D. Search Agent

### 15. The MAIN reason Wendy's FreshAI uses Conversational Agents (not just Gemini):
A. Cheaper
B. Deterministic order-state machine + Gemini for disambiguation; mix of deterministic + creative
C. Required by health regulators
D. To deprecate OpenAI

### 16. The four `safety_settings` thresholds (strict → permissive):
A. BLOCK_LOW_AND_ABOVE → BLOCK_MEDIUM_AND_ABOVE → BLOCK_ONLY_HIGH → BLOCK_NONE
B. STRICT → NORMAL → LOOSE → OFF
C. 1 → 2 → 3 → 4
D. RED → ORANGE → YELLOW → GREEN

### 17. The recitation checker:
A. Can be disabled per call
B. Detects training-data verbatim recitation; blocks output; cannot be disabled
C. Is opt-in only
D. Doesn't exist

### 18. The FIRST technical lever to reduce hallucination:
A. Lower temperature
B. Grounding (Google Search or Vertex AI Search)
C. Bigger model
D. Disable safety_settings

### 19. SynthID variants include:
A. Image only
B. Image, audio, AND text — all invisible watermarks
C. Text only
D. Audio only

### 20. By default on Vertex AI, your prompts and responses:
A. Are used to train Google's models
B. Are NOT used to train Google's models (opt-out is default)
C. Are shared with third parties
D. Are publicly indexed

### 21. Google's published security framework for AI systems is called:
A. NIST CSF
B. SAIF (Secure AI Framework)
C. OWASP ASVS
D. ISO 27001

### 22. The MOST IMPORTANT defense against indirect prompt injection:
A. Lower temperature
B. Authority hierarchy in system prompt + tool output tagging + output filtering + tool least-privilege (defense in depth)
C. Use Pro
D. Single firewall

### 23. The Vertex AI MLOps loop includes (in order):
A. Ingest → train → register → deploy → monitor → retrain
B. Train → eval → deploy → forget
C. Code → ship → pray
D. Notebook → SSH

### 24. Vertex AI Pipelines is built on:
A. Apache Airflow
B. Kubeflow Pipelines v2 (KFP) + TFX
C. Jenkins
D. Cloud Composer

### 25. The three primary failure modes Vertex AI Model Monitoring detects:
A. Training/serving skew, prediction drift, data drift
B. CPU, memory, disk
C. Auth failures
D. Cost overruns

### 26. Vertex AI Feature Store solves:
A. Model registration
B. Training/serving skew by being the single source of truth for features
C. Auth
D. Pricing

### 27. The Bayesian hyperparameter tuning service on Vertex AI is:
A. AutoML
B. Vizier
C. Optuna
D. Hyperopt

### 28. `traffic_split={"0": 90, "1": 10}` on a Vertex AI Endpoint represents:
A. 90% errors
B. 90% to model 0, 10% canary to model 1
C. 90% CPU, 10% memory
D. Invalid

### 29. The MOST appropriate deployment for a VPC-SC-compliant predictor:
A. Public Endpoint
B. Private Endpoint (VPC-only)
C. Cloud Functions
D. GitHub Pages

### 30. Vodafone's MLOps migration improved their update velocity from ~2/month to:
A. ~2/month (no change)
B. ~25/month (12× improvement)
C. ~1000/month
D. They stopped shipping

---

## 🎯 Answer Key (No Cheating!)

```
1.  B    11. B    21. B
2.  B    12. B    22. B
3.  B    13. A    23. A
4.  B    14. B    24. B
5.  C    15. B    25. A
6.  B    16. A    26. B
7.  B    17. B    27. B
8.  B    18. B    28. B
9.  B    19. B    29. B
10. B    20. B    30. B
```

---

## 📊 Score Yourself

- **27–30 correct** → 🏆 Ready for Final Mock
- **24–26** → ✅ Solid
- **20–23** → ⚠️ Re-read weak modules
- **<20** → 🔁 Restart weak modules

### Topic-by-topic breakdown

- **Module 6 (Fine-Tuning):** Q1, 2, 3, 4, 5, 6, 7, 8 → Module 6 if 3+ missed
- **Module 7 (Agent Builder):** Q9, 10, 11, 12, 13, 14, 15 → Module 7 if 3+ missed
- **Module 8 (Responsible AI):** Q16, 17, 18, 19, 20, 21, 22 → Module 8 if 3+ missed
- **Module 9 (MLOps):** Q23, 24, 25, 26, 27, 28, 29, 30 → Module 9 if 3+ missed

---

➡️ When ready: [Final Mock Exam](./Final-Mock-Exam.md)
