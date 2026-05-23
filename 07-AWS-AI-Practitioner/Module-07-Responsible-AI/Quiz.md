# ✏️ Module 7 Quiz: Responsible AI

> **Instructions:** Answer all 24 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 20/24 minimum.

---

## Questions

### Q1. Which AWS service is the GO-TO for detecting bias in a model and providing feature-attribution explainability? *(Remember)*
A. AWS Macie
B. SageMaker Clarify
C. Amazon Bedrock Guardrails
D. AWS Audit Manager

---

### Q2. A chatbot must NOT reveal customer SSNs or credit-card numbers. The BEST AWS feature to apply is: *(Apply)*
A. SageMaker Clarify
B. Guardrails for Amazon Bedrock (PII filter)
C. Amazon CloudFront
D. AWS WAF

---

### Q3. Which Bedrock Guardrails filter blocks topics like "do not give legal advice"? *(Apply)*
A. Word filters
B. Denied topics
C. PII filter
D. Image filter

---

### Q4. A bank's loan-approval model approves Group A at 70% and Group B at 40%. The right diagnostic is: *(Analyze)*
A. A privacy issue
B. A bias / fairness issue (disparate impact)
C. A latency issue
D. A throughput issue

---

### Q5. SHAP is BEST described as: *(Understand)*
A. A vector database
B. A feature-attribution technique that explains individual predictions
C. A Bedrock model
D. An IAM action

---

### Q6. Which is TRUE about SageMaker Model Cards vs AWS AI Service Cards? *(Analyze)*
A. They are the same thing
B. Model Cards are customer-authored; AI Service Cards are published by AWS for AWS AI services
C. Both are published by AWS
D. AI Service Cards are required by law

---

### Q7. A hospital wants every AI-generated diagnosis reviewed by a doctor before action. Which pattern + service? *(Apply)*
A. Human-over-the-loop with CloudWatch
B. Human-in-the-loop with Amazon Augmented AI (A2I)
C. Fully automated approval
D. SageMaker Edge Manager

---

### Q8. Which is NOT a Bedrock Guardrails filter category? *(Analyze)*
A. Content filters (hate, insults, violence, etc.)
B. Denied topics
C. PII / sensitive information
D. Encrypted volume scanning

---

### Q9. "Adversarial examples" in ML are: *(Remember)*
A. Misconfigured IAM policies
B. Inputs intentionally crafted to fool a model
C. Test set leakage
D. Noisy training labels

---

### Q10. Which feature in Bedrock Guardrails helps catch HALLUCINATIONS in RAG outputs? *(Apply)*
A. Contextual grounding check
B. AWS Macie
C. Provisioned Throughput
D. Word filter

---

### Q11. SageMaker Model Monitor's BIAS DRIFT capability is built on top of: *(Understand)*
A. AWS Config
B. SageMaker Clarify
C. Amazon Lex
D. AWS Backup

---

### Q12. Which is NOT one of AWS's named Responsible AI pillars? *(Analyze)*
A. Fairness
B. Explainability
C. Profitability
D. Privacy & Security

---

### Q13. "Disparate impact" is a measure of: *(Remember)*
A. GPU usage
B. Difference in selection rates across demographic groups
C. Model size
D. Token throughput

---

### Q14. Which AWS service classifies and discovers PII inside S3 buckets at scale? *(Remember)*
A. AWS Macie
B. AWS CloudTrail
C. AWS Shield
D. AWS Backup

---

### Q15. "Interpretability" differs from "explainability" because: *(Understand)*
A. They mean the same thing
B. Interpretability = directly inspect the model; explainability = post-hoc explanation of opaque models
C. Explainability is for trees only
D. Interpretability only applies to LLMs

---

### Q16. Which framework is the U.S. federal voluntary framework for managing AI risk? *(Remember)*
A. NIST AI RMF
B. PCI DSS
C. SOC 2
D. ITIL

---

### Q17. The EU AI Act classifies AI systems primarily by: *(Understand)*
A. Model size in parameters
B. Risk level (unacceptable / high / limited / minimal)
C. Latency
D. Country of origin

---

### Q18. Which AWS document gives you SOC, ISO, HIPAA compliance reports? *(Remember)*
A. AWS CloudTrail
B. AWS Artifact
C. AWS Config
D. AWS WAF

---

### Q19. Which is the BEST description of "red-teaming" in AI? *(Understand)*
A. Doing security pen-tests on EC2 instances
B. Proactive adversarial testing of an AI model to find safety failures
C. A type of fine-tuning
D. An IAM role naming convention

---

### Q20. To run automatic + human + LLM-as-judge evaluations of foundation models on YOUR data, use: *(Apply)*
A. Amazon Bedrock Model Evaluation
B. SageMaker Edge Manager
C. AWS Glue DataBrew
D. AWS Snowball

---

### Q21. SageMaker Clarify CANNOT do which of the following? *(Evaluate)*
A. Pre-training bias detection
B. Post-training bias detection
C. SHAP feature attributions
D. Real-time PII redaction in chatbot outputs

---

### Q22. Which is an example of CONTROLLABILITY? *(Apply)*
A. Encrypting data at rest
B. The ability to override, intervene in, or shut down an AI system
C. Tokenization
D. Embedding generation

---

### Q23. A model trained on data where one group is underrepresented exhibits: *(Understand)*
A. Adversarial robustness
B. Sampling bias
C. Algorithmic transparency
D. Reinforcement learning

---

### Q24. To filter user-uploaded IMAGES sent to a multimodal model for safety, use: *(Create)*
A. Bedrock Guardrails image content filters
B. SageMaker Edge Manager
C. AWS Glue
D. Amazon Polly

---

## 🎯 Answers + Explanations

### Q1: **B. SageMaker Clarify**
Bias + explainability. Don't confuse with Guardrails (safety/PII) or Macie (PII discovery in S3).

### Q2: **B. Guardrails (PII filter)**
Bedrock Guardrails detect and either block or redact sensitive info in inputs/outputs.

### Q3: **B. Denied topics**
You write the topic; the model refuses to discuss it. Word filters are for exact strings.

### Q4: **B. Bias / fairness (disparate impact)**
70/40 = ratio of ~0.57, below the 0.8 "80% rule" → disparate impact red flag.

### Q5: **B. Feature-attribution technique**
SHAP (SHapley Additive exPlanations) attributes a prediction to each input feature.

### Q6: **B. Customer-authored vs AWS-published**
SageMaker Model Cards = you write them. AI Service Cards = AWS writes them for AWS AI services.

### Q7: **B. HITL with Amazon A2I**
A2I is AWS's managed HITL service — Textract/Rekognition/Comprehend/custom predictions.

### Q8: **D. Encrypted volume scanning**
Guardrails filters: content, denied topics, word, PII/sensitive info, contextual grounding, image content. EBS volume scanning is a totally different concern.

### Q9: **B. Inputs crafted to fool the model**
Tiny perturbations that flip model output — a robustness concern.

### Q10: **A. Contextual grounding check**
A newer Guardrails feature that flags ungrounded responses for RAG.

### Q11: **B. SageMaker Clarify**
Model Monitor's bias drift detection uses Clarify under the hood.

### Q12: **C. Profitability**
Not a Responsible AI pillar. The named ones: Fairness, Explainability, Robustness, Privacy & Security, Transparency, Governance, Safety, Controllability, Veracity, Inclusivity.

### Q13: **B. Selection rate difference across groups**
The classic fairness metric — the "80% rule" threshold.

### Q14: **A. AWS Macie**
ML-powered discovery and classification of PII in S3.

### Q15: **B. Direct inspect vs post-hoc**
Decision trees are interpretable. Deep nets need explainability techniques like SHAP/LIME.

### Q16: **A. NIST AI RMF**
US federal voluntary framework. PCI DSS / SOC 2 / ITIL are not AI-specific.

### Q17: **B. Risk level**
Unacceptable (banned) / high / limited / minimal — a tiered risk approach.

### Q18: **B. AWS Artifact**
The repository of AWS compliance and security reports. CloudTrail logs API activity; different purpose.

### Q19: **B. Proactive adversarial testing**
Find failures before users / attackers do. Supported in Bedrock Model Evaluation.

### Q20: **A. Amazon Bedrock Model Evaluation**
All four eval modes — automatic, human, KB, LLM-as-judge — live here.

### Q21: **D. Real-time PII redaction**
That's a Guardrails job. Clarify focuses on bias and feature-attribution explainability.

### Q22: **B. Ability to override, intervene, shut down**
Controllability is about human authority over the system.

### Q23: **B. Sampling bias**
Underrepresented groups in training data → poor performance for them. A classic bias source.

### Q24: **A. Bedrock Guardrails image content filters**
Newer Guardrails feature; filters images on input/output for multimodal models.

---

## 📊 Score Yourself

- 23–24/24 → 🏆 Responsible AI on lock — this is where many candidates lose marks.
- 20–22/24 → ✅ Strong.
- 17–19/24 → ⚠️ Re-read the AWS Toolkit table and the Guardrails filter types.
- <17 → 🔁 Re-do the module — Domain 4 is tightly tested.

---

## 🃏 Add To Your Flashcards

- 10 Responsible AI pillars
- AWS toolkit mapping: Clarify (bias + explain), Guardrails (safety/PII), Model Cards (your docs), AI Service Cards (AWS docs), A2I (HITL), Macie (PII discovery)
- 5 Guardrails filter types
- Disparate impact + 80% rule
- HITL / HOTL / human-over-the-loop
- NIST AI RMF, ISO 42001, EU AI Act
- AWS Artifact = compliance reports

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 8: AI Security & Governance](../Module-08-AI-Security-Governance/Reading.md)
