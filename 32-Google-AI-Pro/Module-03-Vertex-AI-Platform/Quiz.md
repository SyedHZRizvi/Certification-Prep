# ✏️ Module 3 Quiz: Vertex AI Platform Deep Dive

> Aim for 21/25 minimum.

---

## Questions

### Q1. Vertex AI is BEST described as: *(Remember)*
A. A single API
B. Google Cloud's enterprise ML/AI umbrella over ~25 sub-products
C. The consumer-grade free Gemini playground
D. An open-source ML framework

---

### Q2. Vertex AI Model Garden hosts: *(Remember)*
A. Only Google's Gemini models
B. Gemini + Claude + Llama + Mistral + Cohere + AI21 + Gemma + …
C. Only Anthropic models
D. Only open-weight models

---

### Q3. The Python SDK to call Gemini on Vertex AI imports from: *(Remember)*
A. `google.generativeai`
B. `vertexai.generative_models` (in package `google-cloud-aiplatform`)
C. `openai`
D. `tensorflow`

---

### Q4. Vertex AI Search vs Vertex AI Vector Search, the difference is: *(Understand)*
A. Same product, two names
B. Search = managed RAG (chunking + embedding + indexing + retrieval + grounding); Vector Search = ANN index for custom embeddings
C. Search is text-only; Vector Search is image-only
D. Vector Search is deprecated

---

### Q5. The MOST appropriate Vertex AI sub-product to host a Jupyter notebook for a data scientist who needs IAM-integrated BigQuery access: *(Apply)*
A. Local Jupyter
B. Vertex AI Workbench
C. Cloud Functions
D. AppSheet

---

### Q6. The reserved-capacity pricing tier for Gemini on Vertex AI is called: *(Remember)*
A. Reserved Instances
B. Provisioned Throughput (measured in GSCUs)
C. Spot Pricing
D. Free Tier

---

### Q7. Provisioned Throughput is MOST appropriate when: *(Apply)*
A. You have unpredictable, low-volume requests
B. You have steady-state high-volume traffic (e.g., >5K RPM) and need capacity guarantees
C. You're prototyping
D. You're using Claude

---

### Q8. VPC Service Controls primarily protects against: *(Understand)*
A. Encryption-at-rest
B. Data exfiltration outside a configured perimeter
C. CPU starvation
D. Cost overruns

---

### Q9. CMEK on Vertex AI provides: *(Understand)*
A. Free encryption
B. Customer-Managed Encryption Keys via your KMS, you can rotate/revoke
C. Per-request encryption
D. Self-hosting

---

### Q10. The MOST appropriate Vertex AI region for a German bank requiring data residency in Germany: *(Apply)*
A. `us-central1`
B. `europe-west3` (Frankfurt)
C. `europe-west1` (Belgium)
D. `asia-northeast1`

---

### Q11. Vertex AI Pipelines is most analogous to: *(Understand)*
A. Cloud Build (CI/CD)
B. Kubeflow Pipelines / TFX-style ML workflow orchestration with metadata + lineage
C. Cron
D. Apache Airflow exclusively

---

### Q12. Vertex AI Feature Store solves: *(Understand)*
A. Training/serving skew by being the single source of truth for features (online + offline)
B. Model registration
C. GPU scheduling
D. Auth

---

### Q13. A Vertex AI Endpoint with `traffic_split={"0": 90, "1": 10}` represents: *(Apply)*
A. 90% errors
B. 90% traffic to deployed model "0", 10% canary to model "1"
C. 90% latency target
D. Invalid configuration

---

### Q14. The three primary failure modes Vertex AI Model Monitoring detects: *(Remember)*
A. Authentication, authorization, audit
B. Training/serving skew, prediction drift, data drift
C. CPU, memory, disk
D. Cost, latency, throughput

---

### Q15. Vertex AI Studio differs from Google AI Studio in that: *(Understand)*
A. They are the same product
B. Vertex AI Studio runs under your GCP project's IAM, audit, billing, regional choice; Google AI Studio is consumer/free
C. Vertex AI Studio is consumer; AI Studio is enterprise
D. Vertex AI Studio supports only English

---

### Q16. Claude on Google Cloud is available via: *(Remember)*
A. Not available
B. Vertex AI Model Garden alongside Gemini
C. Only via AWS Bedrock
D. Only via direct Anthropic API

---

### Q17. The MOST appropriate Vertex AI sub-product to run a 30M-product custom-embedding ANN index for image search: *(Apply)*
A. Vertex AI Search (managed RAG)
B. Vertex AI Vector Search (formerly Matching Engine)
C. BigQuery
D. Cloud Storage

---

### Q18. The MOST appropriate Vertex AI sub-product to run a managed RAG over 100K product manual PDFs: *(Apply)*
A. Vertex AI Vector Search (low-level ANN)
B. Vertex AI Search (managed RAG with chunking + embedding + retrieval + grounding)
C. Cloud SQL
D. Compute Engine

---

### Q19. A team's Vertex AI Endpoint hits 100% CPU and starts dropping requests under burst load. The CORRECT fix: *(Apply)*
A. Disable monitoring
B. Increase `max_replica_count` and verify autoscaling triggers; consider larger `machine_type`
C. Switch to Cloud Run
D. Lower temperature

---

### Q20. The Vertex AI region in which a model is deployed determines: *(Understand)*
A. Data residency (data stays in that region)
B. Latency to nearby users
C. Quota allocations
D. All of the above

---

### Q21. To track training-run params + metrics + artifacts on Vertex AI: *(Remember)*
A. Vertex AI Experiments + TensorBoard
B. Cloud Logging only
C. BigQuery only
D. Not possible on Vertex AI

---

### Q22. The MAIN reason Spotify consolidated 3,000 ML models onto Vertex AI: *(Analyze)*
A. To cut cloud bill in half
B. One platform for training + features + pipelines + registry + endpoints + monitoring; reduced production handoff cost dramatically
C. To deprecate Python
D. They were paid by Google

---

### Q23. Which combination is REQUIRED for a HIPAA-eligible Gemini deployment? *(Apply)*
A. Google AI Studio + API key
B. Vertex AI + signed BAA + HIPAA-eligible region + appropriate Vertex services (Gemini, GCS, BigQuery as eligible) + VPC-SC + CMEK
C. Self-hosted Gemini
D. Vertex AI alone (no BAA needed)

---

### Q24. Which of the following is FALSE? *(Evaluate)*
A. Vertex AI is one product
B. Provisioned Throughput is sometimes cheaper at scale than PAYG
C. Model Garden hosts third-party models
D. CMEK and VPC-SC protect different layers

---

### Q25. Design challenge: An internal docs assistant for a 5,000-person org, EU residency, audit, quarterly retrain. The MINIMUM Vertex AI sub-products to wire together: *(Create)*
A. Vertex AI Studio only
B. Gemini 2.5 Pro endpoint in europe-west1 + Vertex AI Search (Drive/Confluence/GitHub connectors) + Search Agent on Agent Builder + VPC-SC + CMEK + Cloud Audit Logs + Vertex AI Pipelines (weekly index rebuild) + Provisioned Throughput once stable
C. Google AI Studio
D. Cloud Functions only

---

## 🎯 Answers + Explanations

### Q1: **B. Google Cloud's enterprise ML/AI umbrella over ~25 sub-products**
The umbrella framing is the right mental model.

### Q2: **B. Gemini + Claude + Llama + Mistral + Cohere + AI21 + Gemma + …**
200+ models under one IAM.

### Q3: **B. `vertexai.generative_models` (in `google-cloud-aiplatform`)**
The Vertex AI SDK; different from `google-generativeai` (Gemini API).

### Q4: **B. Search = managed RAG; Vector Search = ANN index**
Memorize this distinction. Search wraps the entire RAG pipeline; Vector Search is the low-level vector DB.

### Q5: **B. Vertex AI Workbench**
IAM-integrated, VPC-SC-compliant, BigQuery-connected, GPU/TPU-attachable.

### Q6: **B. Provisioned Throughput (GSCUs)**
The reserved-capacity tier on Vertex.

### Q7: **B. Steady-state high-volume with capacity guarantees**
Below ~1K RPM sustained, PAYG wins. Above ~5K RPM steady, Provisioned Throughput.

### Q8: **B. Data exfiltration outside a configured perimeter**
VPC-SC is the perimeter.

### Q9: **B. Customer-Managed Encryption Keys**
Your KMS keys encrypt Vertex AI data at rest; you can rotate/revoke.

### Q10: **B. `europe-west3` (Frankfurt)**
German residency = `europe-west3`. `europe-west1` is Belgium (EU but not German).

### Q11: **B. Kubeflow Pipelines / TFX-style with metadata + lineage**
Cloud Build is generic CI; Vertex AI Pipelines has ML-specific metadata.

### Q12: **A. Training/serving skew via single feature source of truth**
The classic ML reliability win.

### Q13: **B. 90% to model "0", 10% canary to model "1"**
Canary deployment via traffic_split.

### Q14: **B. Training/serving skew, prediction drift, data drift**
The three drift types Model Monitoring detects.

### Q15: **B. Vertex AI Studio = enterprise (IAM, audit, region); Google AI Studio = consumer**
Different products, similar UI; the auth/governance is what differs.

### Q16: **B. Vertex AI Model Garden alongside Gemini**
Claude Sonnet/Haiku/Opus are first-class on Vertex.

### Q17: **B. Vertex AI Vector Search**
30M custom embeddings → low-level ANN.

### Q18: **B. Vertex AI Search (managed RAG)**
PDFs + grounding → Search wraps it all.

### Q19: **B. Increase max_replicas + verify autoscaling; consider larger machine_type**
The right Vertex-native fix.

### Q20: **D. All of the above**
Region = residency + latency + quota.

### Q21: **A. Experiments + TensorBoard**
Both managed on Vertex.

### Q22: **B. One platform consolidation = lower handoff cost**
Spotify's published rationale was platform-consolidation, not cost-cutting per se.

### Q23: **B. Vertex AI + signed BAA + HIPAA-eligible region + eligible services + VPC-SC + CMEK**
Full HIPAA-eligible deployment requires all of these.

### Q24: **A. Vertex AI is one product, FALSE**
It's an umbrella over ~25 sub-products.

### Q25: **B. Gemini Pro + Vertex AI Search + Agent Builder + VPC-SC + CMEK + Audit Logs + Pipelines + Provisioned Throughput**
The canonical enterprise architecture.

---

## 📊 Score Yourself

- 24–25/25 → 🏆 Module 3 mastered. Onward to multi-modal.
- 21–23/25 → ✅ Solid.
- <21/25 → Re-read the umbrella section + the Search vs Vector Search distinction.

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 4, Multi-Modal AI with Gemini](../Module-04-Multi-Modal-Gemini/Reading.md)
