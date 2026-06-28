# Module 7: Responsible AI 🤝

> **Why this module matters:** Domain 4 ("Guidelines for Responsible AI") is "only" 14% of the exam, but it's a *dense*, vocabulary-heavy 14%. The exam doesn't just ask philosophical questions; it tests whether you can pick the *specific AWS service* that addresses *bias* vs *PII* vs *content safety* vs *explainability*. Get this module right and you'll bank 8–9 questions other candidates lose.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - [Module 1: AI/ML Fundamentals](../Module-01-AI-ML-Fundamentals/Reading.md), training data, model evaluation, what "bias" means in ML
> - [Module 2: ML Workflow on SageMaker](../Module-02-ML-Workflow-SageMaker/Reading.md), Clarify and Model Monitor at a vocabulary level
> - [Module 4: AWS GenAI Stack](../Module-04-AWS-GenAI-Stack/Reading.md), Amazon Bedrock and where Guardrails sit
>
> The NIST AI Risk Management Framework (NIST AI 100-1, Jan 2023) and the EU AI Act (Regulation (EU) 2024/1689, in force 1 Aug 2024) are the two named external frameworks that anchor this module's external-policy questions. Skim each before reading if you can.

---

## 🍕 A Story: The Hiring Model That Refused to Interview Women

In 2014, a major tech company built an AI tool to screen résumés. Trained on a decade of past hires, it learned a pattern: "the company has historically hired more men in technical roles." So it started **down-ranking résumés that included the word *women's*** (as in "women's chess club captain"). It also penalized graduates from two all-women colleges.

The model wasn't malicious. It was a faithful student of biased history. The company quietly killed the project in 2018, but the damage was made public, and the lesson is industry-wide:

> **A model trained on biased data will produce biased outcomes, confidently, at scale, and without anyone explicitly telling it to.**

Responsible AI exists to catch problems like this *before* they ship. AWS has built a toolkit specifically for this, and the AIF-C01 expects you to know each tool by name and purpose.

---

## 🧭 The Core Pillars of Responsible AI (AWS's Framing)

AWS publishes a set of **Responsible AI dimensions**. Memorize the names, the exam uses them verbatim.

| Pillar | One-line definition |
|--------|---------------------|
| **Fairness** | Avoid harmful bias and discriminatory outcomes across demographic groups |
| **Explainability** | Make model behavior understandable to humans |
| **Robustness** | The model performs reliably under varied conditions, including adversarial inputs |
| **Privacy & Security** | Protect personal and sensitive data throughout the lifecycle |
| **Transparency** | Be open about what the system is, its limits, and its training |
| **Governance** | Policies, oversight, audit, and human accountability for AI systems |
| **Safety** | The model avoids producing harmful or unsafe content |
| **Controllability** | Humans can intervene, override, and shut down the system |
| **Veracity / Truthfulness** | The model gives accurate, factual outputs (anti-hallucination) |
| **Inclusivity / Accessibility** | The system works for diverse users and is accessible |

🔥 **MEMORIZE the top 5** (Fairness, Explainability, Robustness, Privacy & Security, Transparency), they appear most often on the exam.

---

## ⚖️ Bias and Fairness, The Most-Tested Topic

**Bias** in AI means systematic unfairness baked into a model's outputs. It can enter at *every* stage:

| Bias type | Where it enters | Example |
|-----------|-----------------|---------|
| **Sampling bias** | Data collection | Survey only conducted in English; non-English speakers under-represented |
| **Labeling / annotation bias** | Human labelers | Annotators differ in how strictly they label "hate speech" |
| **Historical bias** | The world the data reflects | Past hiring favored one group; model learns to favor it too |
| **Measurement bias** | Wrong proxy variable | Using arrests as a proxy for crime (arrest != crime) |
| **Aggregation bias** | One model for many subgroups | Model works on the "average" patient but fails minority subgroups |
| **Confirmation bias** | Developers / reviewers | We accept results that confirm our prior beliefs |
| **Algorithmic bias** | The algorithm's own properties | Models can amplify minority signals or majority defaults |

Fairness **metrics** the exam may reference:

- **Demographic parity**, selection rates equal across groups
- **Equal opportunity**, true-positive rates equal across groups
- **Equalized odds**, both TPR and FPR equal across groups
- **Disparate impact ratio**, selection-rate ratio between groups (target ~0.8–1.25 = "80% rule")

🎯 **Exam pattern:** "A bank's loan-approval model approves applicants from Group A at 70% but Group B at 40%." → A **bias / fairness** issue (specifically disparate impact).

---

## 🔍 Explainability vs Interpretability

Two terms the exam uses almost interchangeably, but with a subtle difference:

| Term | Definition |
|------|------------|
| **Interpretability** | You can *directly inspect* the model and see how decisions are made (e.g., a decision tree, linear regression) |
| **Explainability** | The model is too complex to interpret directly, so you build *post-hoc explanations* (e.g., feature importance, counterfactuals), common for deep learning and LLMs |

Common explainability techniques (recognize the names):

- **SHAP (SHapley Additive exPlanations)**, per-prediction feature attribution
- **LIME (Local Interpretable Model-Agnostic Explanations)**, local linear approximation around a prediction
- **Partial Dependence Plots (PDP)**, how one feature affects predictions on average
- **Counterfactuals**, "what minimum change to the input would flip the decision?"

---

## 🛡️ The AWS Responsible AI Toolkit (BY HEART)

This is THE table for Module 7 exam questions. Each tool has a job, don't confuse them.

| Service / feature | Type | What it does | Pillar |
|-------------------|------|--------------|--------|
| **SageMaker Clarify** | Tool | **Bias detection** (pre-training, post-training, in-production) + **explainability** via SHAP feature attributions | Fairness, Explainability |
| **SageMaker Model Monitor, Bias drift** | Tool | Detects when a deployed model's fairness metrics drift over time | Fairness |
| **SageMaker Model Cards** | Doc artifact | Standardized model documentation: purpose, training data, performance, limits, intended use | Transparency, Governance |
| **AWS AI Service Cards** | Doc artifact | AWS-published responsible-AI documentation for each AWS AI service (Rekognition, Textract, etc.), explains intended use, limits, fairness considerations | Transparency |
| **Guardrails for Amazon Bedrock** | Runtime safety | Filter PROMPTS and RESPONSES for PII, denied topics, harmful content categories, custom word filters, and contextual grounding | Safety, Privacy, Veracity |
| **Bedrock Model Evaluation** | Tool | Evaluate FMs (incl. on bias, toxicity, robustness) using auto / human / LLM (Large Language Model)-as-judge | Fairness, Robustness |
| **SageMaker Ground Truth** | Tool | Labeling with diverse human workforces, quality and bias control | Fairness |
| **Amazon A2I (Augmented AI)** | Tool | Built-in human-in-the-loop review for AI predictions (Textract, Rekognition, custom) | Controllability, Safety |
| **Macie** | Tool | Discover & classify PII / sensitive data in S3 (Simple Storage Service) | Privacy |
| **AWS Audit Manager / CloudTrail** | Tool | Audit trails for AI workflows | Governance |
| **AWS Artifact** | Tool | Access AWS compliance reports (SOC (Security Operations Center), ISO, HIPAA) | Governance |

---

## 🚦 Guardrails for Amazon Bedrock, Deep Dive

Bedrock Guardrails are the single most-tested AWS feature in Domain 4. Know each filter type:

| Filter | What it blocks |
|--------|----------------|
| **Content filters** | Configurable severity thresholds for *hate*, *insults*, *sexual*, *violence*, *misconduct*, *prompt attacks* |
| **Denied topics** | Topics you define ("Do not discuss competitor products," "Do not offer legal advice") |
| **Word filters / profanity filters** | Block exact words or built-in profanity dictionary |
| **Sensitive information (PII)** | Detect or mask PII like SSN, names, emails, addresses, phone, credit cards, block or redact |
| **Contextual grounding check** | (Newer) Detects ungrounded responses in RAG (Retrieval-Augmented Generation), flags hallucinations when output isn't supported by retrieved sources |
| **Image content filters** | (Newer) Filter image inputs/outputs in multimodal models |

Where Guardrails apply:

- **Input**, block / redact what the user sends
- **Output**, block / redact what the model returns
- Reusable across **any FM in Bedrock**, **Agents**, and **Knowledge Bases**

🎯 **Trap on the exam:** "Use SageMaker Clarify to block PII in chatbot outputs." → **Wrong.** Clarify is for **bias and explainability**. PII filtering is **Guardrails**.

🎯 **Trap on the exam:** "Use Bedrock Guardrails to detect bias in a hiring model." → **Wrong.** Bias detection is **SageMaker Clarify**.

---

## 📄 Model Cards and AI Service Cards, Don't Confuse Them

| | SageMaker Model Cards | AWS AI Service Cards |
|---|------------------------|-----------------------|
| **Who creates it** | You (the customer) for *your* models | AWS publishes them for *AWS AI services* |
| **Where it lives** | Inside SageMaker / your account | AWS public documentation |
| **Content** | Model purpose, training data summary, metrics, limitations, intended/unintended uses, risk and rating | Service overview, intended use cases, limits, fairness considerations, design choices |
| **Why** | Internal governance and audit | Customer transparency from AWS |
| **Standard** | Inspired by Google's "Model Cards for Model Reporting" (2019) | AWS responsible-AI documentation initiative |

Examples of services with AI Service Cards: Amazon Rekognition Face Matching, Amazon Textract AnalyzeID, Amazon Transcribe, Amazon Comprehend, Amazon Titan Text, Amazon Q, and others.

---

## 👥 Human Oversight, When Humans Stay in the Loop

For high-stakes decisions (medical, legal, hiring, loans), AI should *augment* humans, not replace them.

| Pattern | When |
|---------|------|
| **Human-in-the-loop (HITL)** | Human approves every prediction (medical diagnosis, legal contract review) |
| **Human-on-the-loop** | Human monitors and intervenes when needed (autonomous systems) |
| **Human-over-the-loop** | Human reviews aggregate behavior periodically (low-risk recommendations) |

**Amazon A2I (Augmented AI)** is the AWS service for building review workflows on AI predictions, supports Textract, Rekognition, Comprehend, and your own custom models. Routes low-confidence predictions to a human workforce (private, vendor, or Mechanical Turk).

🎯 **Exam pattern:** "Doctors should review every AI-generated diagnosis before patient action." → **Human-in-the-loop** via **Amazon A2I**.

---

## 🛡️ Robustness, Adversarial Inputs, and Red-Teaming

A model is **robust** if it performs well under varied, noisy, or adversarial inputs. Risks the exam touches on:

- **Adversarial examples**, small intentional perturbations that fool the model (a sticker that makes a stop sign read as "Speed Limit 80")
- **Distribution shift / drift**, the world changes; the model becomes stale (covered by Model Monitor)
- **Prompt attacks**, covered in Module 5 (prompt injection, jailbreaking)
- **Data poisoning**, attacker injects malicious training data to plant a backdoor
- **Model theft**, extracting a copy of the model via many queries

Defenses:

- **Red-teaming**, proactively testing your AI for failure modes (Bedrock supports red-team testing in Model Evaluation)
- **Guardrails + content filters** at runtime
- **Robust training**, adversarial training, data augmentation
- **Monitoring + drift detection** in production

---

## 🌍 AI Governance, The Org-Level View

Responsible AI isn't just a model engineer's job. The exam touches on **AI governance**:

| Governance practice | What it looks like |
|---------------------|---------------------|
| **AI policy / acceptable use** | A written internal policy on how AI is built and used |
| **Risk classification** | Categorize use cases by harm potential (low/medium/high) |
| **Approval workflows** | Different rigor for different risk levels |
| **Data governance** | Clear data sources, lineage, consent, retention |
| **Audit trails** | CloudTrail for Bedrock/SageMaker API (Application Programming Interface) calls |
| **Model lifecycle** | Versioning (Model Registry), retraining cadence |
| **Incident response** | What to do when the model misbehaves in production |
| **Compliance mapping** | Map to frameworks: NIST AI RMF, ISO/IEC 42001, EU AI Act |

External references the exam may name:

- **NIST AI Risk Management Framework (AI RMF)**, US federal framework for AI risk
- **ISO/IEC 42001**, international AI management system standard
- **EU AI Act**, EU regulation classifying AI systems by risk (limited use, high risk, prohibited)

🎯 **Trap on the exam:** "Which AWS service stores audit-grade compliance reports?" → **AWS Artifact**. (Not CloudTrail, CloudTrail is the live log; Artifact is the report repository.)

---

## 🌐 Environmental & Societal Considerations

The exam guide mentions sustainability and societal impact briefly:

- LLM training is **energy-intensive**, frontier models consume megawatt-hours
- AWS Trainium / Inferentia chips are **more energy-efficient than equivalent GPU workloads**
- AWS Region choice impacts carbon footprint (some Regions are 100% renewable powered)
- Sustainability is also a Well-Architected pillar

You don't need to memorize numbers, just recognize that this is part of "Responsible AI" too.

---

## 🚨 Common Exam Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Guardrails detect bias" | Wrong. Guardrails = safety/PII/content. **Clarify** = bias. |
| "Clarify filters PII" | Wrong. PII handling = **Guardrails** + **Macie**. |
| "Model Cards are public" | Customer model cards are *internal* by default. *AI Service Cards* (from AWS) are public. |
| "Bias only enters from data" | Bias enters at data, labeling, algorithm choice, deployment, and feedback loops |
| "Explainability and interpretability are the same" | Subtle difference, interpretability is inherent, explainability is post-hoc |
| "Guardrails are only for chatbots" | They apply to ALL Bedrock invocations: direct, Agents, Knowledge Bases |
| "Bedrock Guardrails handle hallucinations" | Partially, the **contextual grounding check** flags ungrounded responses for RAG |

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Fairness** | Avoiding biased / discriminatory outcomes |
| **Bias** | Systematic unfairness from data, labels, or algorithm |
| **Disparate impact** | Different selection rates across protected groups (80% rule) |
| **Demographic parity** | Equal selection rates across groups |
| **Explainability** | Making opaque model behavior understandable post-hoc |
| **Interpretability** | Models you can inspect directly |
| **SHAP / LIME** | Feature-attribution explainability techniques |
| **SageMaker Clarify** | AWS service for bias detection + explainability |
| **SageMaker Model Cards** | Standardized customer-authored model documentation |
| **AWS AI Service Cards** | AWS-published responsible-AI documentation for AI services |
| **Guardrails for Bedrock** | Runtime safety: content filters, denied topics, PII, word filters, grounding check |
| **Bedrock Model Evaluation** | Evaluate FMs incl. for bias, toxicity, robustness |
| **Amazon A2I (Augmented AI)** | Human-in-the-loop review for AI predictions |
| **HITL / HOTL** | Human-in-the-loop / on-the-loop / over-the-loop |
| **Red-teaming** | Proactive adversarial testing |
| **Adversarial example** | Crafted input that fools a model |
| **Data poisoning** | Malicious training data inserted by attacker |
| **NIST AI RMF / ISO 42001 / EU AI Act** | External AI governance frameworks |
| **AWS Artifact** | Repository for AWS compliance reports |

---

## 📊 Case Study, Air Canada Chatbot Tribunal Ruling (Feb 2024)

**Situation.** In November 2022, a customer named Jake Moffatt visited Air Canada's website to inquire about *bereavement fares*, discounted last-minute travel after the death of a family member. The website's **AI-powered chatbot** told him he could *book the full-price ticket first and apply for the bereavement discount retroactively, within 90 days*. He did so, kept the receipts, and applied. Air Canada refused the refund. Their published bereavement policy actually required the discount to be applied *before* travel, not after. The chatbot had **hallucinated** a policy that didn't exist.

**Decision.** Moffatt took Air Canada to the British Columbia Civil Resolution Tribunal, a small-claims-style adjudicator. The airline's defense was striking: they argued that the chatbot was a *"separate legal entity that is responsible for its own actions,"* and that the customer should have cross-checked with the policy page (which was linked elsewhere on the site).

**Outcome.** On **14 February 2024**, the tribunal ruled against Air Canada. Tribunal member Christopher Rivers wrote that this argument was "remarkable" and that "while a chatbot has an interactive component, it is still just a part of Air Canada's website. It should be obvious to Air Canada that it is responsible for all the information on its website. It makes no difference whether the information comes from a static page or a chatbot." Air Canada was ordered to pay Moffatt **CAD $812.02** (the price difference plus tribunal fees and interest).

The ruling was tiny in dollars and enormous in precedent. By March 2024, it was being cited in legal trade press around the world. By mid-2024, in-house counsel and Chief Risk Officers across regulated industries explicitly used the case to justify investment in Bedrock Guardrails, RAG over verified policy sources, human-in-the-loop fallback for high-stakes customer interactions, and **model cards** documenting the chatbot's intended use and limitations.

In parallel, two other 2023–2024 cases reinforced the trend:

- The **NYC AI Bias Hiring Law (Local Law 144)**, in force July 5, 2023, requires bias audits and candidate notification for any "automated employment decision tool" used on NYC jobs. Penalties: $500–$1,500 per violation per day.
- The **EU AI Act** (Regulation (EU) 2024/1689) classifies AI systems by risk tier (unacceptable, high, limited, minimal), in force from 1 Aug 2024 with phased obligations through 2026. "High-risk" tier (employment, credit, education, law enforcement) triggers mandatory risk management, data governance, transparency, human oversight, and conformity assessment.

**Lesson for the exam / for practitioners.** Four AIF-C01 talking points anchor here:

1. **The company is responsible for the AI's output. Period.** Air Canada's "the chatbot did it" defense failed because legally, deploying an AI is equivalent to publishing the content yourself. The exam tests this through scenarios where the right answer involves **Bedrock Guardrails (contextual grounding check + denied topics + PII filter)**, **invocation logging for audit**, and **human-in-the-loop via Amazon A2I** for high-stakes outputs.
2. **Hallucination is now a legally enforceable risk, not a research curiosity.** "The model made it up" is not a defense. The standard response pattern: **RAG over a *verified* source of truth + grounding check + citations + human review for high-stakes cases.** Module 5's RAG architecture is your concrete answer.
3. **Documentation matters.** SageMaker **Model Cards** and AWS **AI Service Cards** are not paperwork bureaucracy, they're the artifacts that show "we knew what this system could and couldn't do; we configured it accordingly; we documented intended use." Post-Air Canada, they're effectively pre-litigation insurance.
4. **External frameworks now bite.** NIST AI RMF (voluntary federal) and EU AI Act (mandatory, with fines up to €35M or 7% of global revenue for prohibited uses) shifted the landscape from "best practices" to enforceable compliance. The exam tests recognition of both, plus ISO/IEC 42001 (international AI management standard, published Dec 2023) and the NYC LL 144 framing of "automated decision tool."

**Discussion (Socratic).**
- Q1: Imagine you're advising Air Canada *the day before* the chatbot was deployed. Build the 5-control pre-deployment checklist that would have prevented the lawsuit. For each control, name the AWS service/feature that implements it and the residual risk it does NOT cover.
- Q2: A retail competitor reads the Air Canada ruling and decides to *retire* its chatbot entirely. Argue both for and against this overcorrection. What's the right risk-management posture for "AI as customer-facing front door" in 2026?
- Q3: The Amazon Rekognition gender-bias episode (ACLU 2018 study found higher error rates for women and darker-skinned individuals on Amazon Rekognition face matching; Amazon imposed a moratorium on police use of Rekognition in June 2020, extended indefinitely) and the *Air Canada* ruling are different failure modes (bias vs hallucination) but the same root cause: shipping AI before robustness was verified. What's the common org-level capability missing in both, and which AWS services build it?
- Q4: The EU AI Act fines for "high-risk" violations top out at €35M or 7% of global annual revenue (whichever is higher). Sketch the case for treating AI compliance as a board-level concern at a Fortune 1000 company, and what role AWS Audit Manager + Artifact + CloudTrail + Bedrock invocation logging play in evidence collection.
- Q5: NYC Local Law 144 requires *publishing* bias-audit results from the past year. This creates a perverse incentive: companies that bias-audit *aggressively* may surface problems that those who don't audit can claim ignorance of. Build the strongest argument that audits should *still* be done aggressively, and the strongest counter from the "regulatory exposure" school. What's the principled answer?

---

## ✅ Module 7 Summary

You now know:

- 🧭 The AWS Responsible AI pillars (Fairness, Explainability, Robustness, Privacy & Security, Transparency, Governance, Safety, Controllability, Veracity, Inclusivity)
- ⚖️ Where bias enters AI systems and how to measure fairness
- 🔍 Explainability vs interpretability and the SHAP / LIME family of techniques
- 🛡️ The AWS Responsible AI toolkit, **Clarify (bias + explainability), Guardrails (safety + PII + grounding), Model Cards (docs), AI Service Cards (AWS docs), A2I (HITL), Model Monitor (drift)**
- 🚦 The five Bedrock Guardrails filter types
- 👥 Human-in-the-loop patterns and Amazon A2I
- 🌍 AI governance frameworks (NIST AI RMF, ISO 42001, EU AI Act)
- 🛡️ Robustness threats (adversarial, poisoning, prompt attacks) and red-teaming

**Next steps:**
1. 🎥 Watch the videos in [`Videos.md`](./Videos.md)
2. ✏️ Take [`Quiz.md`](./Quiz.md), aim for 20/24
3. 📋 Review [`Cheat-Sheet.md`](./Cheat-Sheet.md)
4. ➡️ Move to [Module 8: AI Security & Governance](../Module-08-AI-Security-Governance/Reading.md)

---

> **Where this leads.**
> - Inside this course: Module 8 extends the AI governance lens to the security primitives IAM (Identity and Access Management), KMS, PrivateLink, CloudTrail, model invocation logging that make compliance auditable.
> - Cross-course: `09-CompTIA-Security-Plus` Module 10 covers the broader risk management framing (NIST CSF, ISO 27001 lineage). `08-Azure-AI-Engineer` Module 7 covers the Azure equivalents (Azure AI Content Safety, Responsible AI Standard).
> - Practice: Practice Exam 1, 2, and the Final Mock Exam each have ~5–7 Responsible AI questions; the patterns are mostly "match the AWS service to the responsibility."

---

## 💬 Discussion, Socratic prompts

1. **Clarify vs Guardrails, the single most-confused pair.** Construct three scenarios where one of these is right and the other is wrong, and explain why the cross-confusion is the #1 exam trap in Domain 4. Make sure your scenarios include (a) loan approval, (b) chatbot output safety, and (c) a third you choose.
2. **The "10 pillars but only 5 in the toolkit" problem.** AWS lists 10 Responsible AI pillars but the practical AWS toolkit (Clarify, Guardrails, Model Cards, AI Service Cards, A2I, Model Monitor, Macie, Artifact, CloudTrail) really only addresses 5–6 of them well. Which pillars are *underserved* by the AWS-native toolkit, and what would you build (third-party tools, internal processes, external auditors) to fill the gap?
3. **HITL economics.** Amazon A2I lets you route low-confidence predictions to humans. At what confidence-threshold does the marginal benefit (catch errors) get swamped by the marginal cost (human time + slower response)? Construct a back-of-envelope cost model for an insurance-claim approval workflow.
4. **The Amazon Rekognition police-use moratorium of 2020.** Amazon imposed (and later extended indefinitely) a moratorium on police use of Rekognition for face identification after the ACLU's 2018 audit showed disparate error rates by gender and race. Build the strongest argument that this self-imposed restriction was the right move AND the strongest argument that it was an over-reaction. What does the *evidence we have today* (2026) suggest?
5. **EU AI Act tiers in practice.** Map the following four use cases onto the EU AI Act risk tiers (unacceptable / high / limited / minimal): (a) a real-time biometric ID system in public spaces, (b) a CV-screening tool used by an EU hiring agency, (c) a customer-service chatbot for a clothing brand, (d) a recommendation engine for a music app. For each, name the AWS-native control that maps to the act's requirements.

---

## 📚 Further Reading (Optional)

- 📖 [AWS Responsible AI page](https://aws.amazon.com/ai/responsible-ai/)
- 📖 [Guardrails for Amazon Bedrock, User Guide](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html)
- 📖 [SageMaker Clarify, Bias & explainability](https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-configure-processing-jobs.html)
- 📖 [SageMaker Model Cards](https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards.html)
- 📖 [AWS AI Service Cards (index)](https://aws.amazon.com/ai/responsible-ai/resources/), read at least 2 (e.g., Rekognition Face, Amazon Titan)
- 📖 [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
- 📖 [EU AI Act overview](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai)
