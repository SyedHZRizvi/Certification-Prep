# Module 2: ML Workflow on Amazon SageMaker 🔧

> **Why this module matters:** The AIF-C01 doesn't ask you to *write* training code, but it absolutely asks "which SageMaker tool fits this stage of the ML lifecycle?" Get the stages right and the service mapping is easy. Get them wrong and you'll lose 4–6 marks in a hurry.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - [Module 1: AI/ML Fundamentals](../Module-01-AI-ML-Fundamentals/Reading.md), supervised vs unsupervised, training vs inference, overfitting
> - Basic AWS service-naming conventions (S3 buckets, IAM roles, Region selection)
> - Comfort with the idea of an "API endpoint" and "managed service"
>
> If [`03-AWS-Cloud-Practitioner`](../../03-AWS-Cloud-Practitioner/README.md) Module 5 (AWS AI/ML services overview) is fresh, you can move faster through the AI Services menu at the end. If you've never seen IAM roles in action, also skim [`04-AWS-Solutions-Architect-Associate/Module-02-Compute`](../../../04-AWS-Solutions-Architect-Associate/) for context.

---

## 🍕 A Story: Building Riya's Cappuccino Predictor, End to End

Back to **Riya** from Module 1. She wants to ship her cappuccino-demand model to production. Here's the *full journey*, and at every stop, there's a SageMaker tool waiting.

1. **Frame the problem.** "I want to predict tomorrow's oat-cappuccino demand within ±5 cups." (Regression, supervised, ~6 months of data.)
2. **Gather data.** Sales logs in CSV, weather from an API, holiday calendar in Excel. → *Amazon S3* as the data lake.
3. **Clean and transform.** Drop bad rows, one-hot encode "day of week," join weather. → *SageMaker Data Wrangler*.
4. **Store reusable features.** "Day-of-week" and "weather" will be used by *other* future models. → *SageMaker Feature Store*.
5. **Train.** Run XGBoost on her training set. → *SageMaker Training Job*.
6. **Tune.** Try 20 combinations of learning rate × tree depth. → *SageMaker Automatic Model Tuning (Hyperparameter Tuning Job)*.
7. **Evaluate.** Check accuracy, look for bias. → *SageMaker Clarify*.
8. **Deploy.** Stick the trained model behind an HTTPS endpoint. → *SageMaker Real-time Endpoint*.
9. **Monitor in production.** Demand patterns might drift in winter. → *SageMaker Model Monitor*.
10. **Iterate.** Retrain when drift is detected. → Back to step 5.

That whole journey lives inside one IDE: **Amazon SageMaker Studio** (now called *SageMaker Studio*, part of *Amazon SageMaker AI* within the broader 2024-rebranded "Next-Generation Amazon SageMaker"). Think of Studio as VS Code-for-ML.

Hold the 10 steps in your head. Every Module 2 exam question is a variation of *"Riya is at step N; which AWS service?"*.

---

## 🔁 The Canonical ML Lifecycle (AWS Framing)

AWS docs and the exam guide describe the ML lifecycle in **6 or 7 stages**. The exact wording shifts but the substance is identical:

```
1. Business problem    → "What are we predicting & why?"
2. Data collection     → S3, Kinesis, Glue, Data Wrangler
3. Data prep/feature   → Data Wrangler, Feature Store, Processing
4. Train               → Training Jobs, AutoML, JumpStart
5. Evaluate            → Clarify, model metrics
6. Deploy              → Endpoints (real-time / serverless / async / batch)
7. Monitor & iterate   → Model Monitor, MLOps Pipelines
```

🔥 **MEMORIZE THE STAGES.** Almost every "scenario → service" question wants you to first identify the stage, then pick the right tool.

---

## 🏛️ Amazon SageMaker, One Service, Many Tools

Amazon SageMaker is a **managed end-to-end ML platform**. It removes the heavy lifting of provisioning GPUs, configuring frameworks, and stitching pipelines together. You can mostly do everything from one IDE called **SageMaker Studio**.

### The tools you must recognize for the exam

| Tool | Lifecycle stage | What it does |
|------|-----------------|--------------|
| **SageMaker Studio** | All stages | The browser-based IDE for ML, notebooks, training, deployment, all in one |
| **SageMaker Canvas** | Train (no-code) | Build ML models visually, no code, for business analysts |
| **SageMaker Data Wrangler** | Data prep | 300+ built-in data transformations through a visual UI |
| **SageMaker Feature Store** | Feature mgmt | Central, versioned, online + offline store for ML features |
| **SageMaker Ground Truth** | Data labeling | Managed human-in-the-loop labeling (workforce: your team, vendors, or Mechanical Turk) |
| **SageMaker Processing Jobs** | Data prep / eval | Run arbitrary container-based data jobs on managed infra |
| **SageMaker Training Jobs** | Train | Distributed training on managed GPUs/CPUs; spot instances supported |
| **SageMaker Automatic Model Tuning (HPO)** | Train | Hyperparameter optimization (Bayesian, random, grid search) |
| **SageMaker Autopilot** | Train (AutoML) | Hands-free AutoML, explores algorithms + hyperparameters for tabular data |
| **SageMaker JumpStart** | Train (pre-built) | One-click pretrained models and solutions, incl. **foundation models** from Hugging Face, Meta, Stability, Anthropic*, etc. |
| **SageMaker Experiments** | Train / track | Track runs, parameters, and metrics across experiments |
| **SageMaker Model Registry** | Train / deploy | Catalog of trained models with versions and approval workflow |
| **SageMaker Endpoints** | Deploy | Real-time, serverless, async, or batch inference |
| **SageMaker Model Monitor** | Monitor | Detects data drift, model drift, bias drift, feature attribution drift |
| **SageMaker Clarify** | Evaluate / monitor | Bias detection + explainability (pre- and post-training) |
| **SageMaker Pipelines** | All MLOps | CI/CD for ML orchestrates the whole lifecycle |
| **SageMaker Edge Manager** | Deploy (edge) | Optimize and deploy models to edge devices |
| **SageMaker Neo** | Deploy | Compile models for specific target hardware (faster, smaller) |

*Anthropic Claude is primarily available on Amazon Bedrock; JumpStart hosts a wide library of *other* foundation models. We'll separate the two carefully in Module 4.

---

## 🚪 The Four Inference Endpoint Modes

Even just for the AIF-C01, the **four endpoint types** are worth memorizing, every other AWS cert touches them too.

| Mode | Latency | Cost model | When to use |
|------|---------|-----------|-------------|
| **Real-time** | Milliseconds | Pay per instance-hour while endpoint is up | Live API, chatbots, recommendations on a website |
| **Serverless** | Seconds (cold start possible) | Pay per request | Spiky traffic, idle most of the day |
| **Asynchronous** | Seconds to minutes | Pay per instance-hour; queues requests | Large payloads (~1 GB), long processing, video, big PDFs |
| **Batch transform** | Minutes to hours | Pay per job | Score a whole dataset overnight; no live endpoint needed |

🎯 **Trap on the exam:** "Score 100 million records once a week." That's not real-time, that's **Batch Transform**.

🎯 **Trap on the exam:** "Process a 500 MB MRI scan asynchronously and return the result when ready." → **Asynchronous Inference** (real-time has a payload limit, serverless has cold starts and a smaller limit).

---

## 🤖 SageMaker Autopilot vs Canvas vs JumpStart

These three confuse people because they all sound "easy mode." Here's the difference:

| Service | Audience | What you do | What it gives back |
|---------|----------|-------------|---------------------|
| **Canvas** | Business analyst, *no code* | Click through a visual UI on tabular data | A trained model + predictions in a spreadsheet-like view |
| **Autopilot** | Data scientist, *some code or notebook* | Point it at a CSV in S3 with a target column | The best model + a notebook explaining the pipeline |
| **JumpStart** | Anyone | Browse a catalog of pretrained models / solutions | A pretrained or pre-built solution you can fine-tune and deploy |

🎯 **Exam pattern:** *"A marketing analyst with no coding background wants to predict customer churn on a CSV."* → **Canvas** (no code).
*"A team wants to deploy a pretrained large language model with one click."* → **JumpStart**.

---

## 🧹 Data Prep: Three Tools Side by Side

| Tool | Style | Strength |
|------|-------|----------|
| **Data Wrangler** | Visual UI, 300+ built-in transformations | Fast exploration; one-click export to a Processing Job, Pipeline, or Feature Store |
| **Processing Jobs** | Bring your own container or use SageMaker scripts | Scalable, repeatable, fits into Pipelines |
| **AWS Glue** | Spark-based ETL (broader AWS, not SageMaker-only) | Huge datasets, joins, complex transformations |

🎯 **For the AIF-C01, focus on Data Wrangler.** It's the SageMaker-specific tool the exam likes to test.

---

## 🏷️ SageMaker Ground Truth, Labeling

Supervised learning needs labels. **Ground Truth** is AWS's managed labeling service. You pick a *workforce*:

- **Public**, Amazon Mechanical Turk (cheap, sometimes lower quality)
- **Private**, Your own employees (best for confidential data)
- **Vendor**, Pre-vetted third-party labeling teams

It also offers **active learning**, the model auto-labels what it's confident about and only sends uncertain items to humans, saving cost.

🎯 **Trap on the exam:** "Highly confidential medical data needs labeling." → **Private workforce**, *not* Mechanical Turk.

---

## 📦 SageMaker Feature Store

A **feature** that took 3 hours of Spark to compute should be saved once and reused. That's what Feature Store does.

- **Online store**, low-latency read for real-time inference (e.g., a fraud model needs the user's recent transaction count *now*)
- **Offline store**, historical features for training and batch use (lives in S3)

Big win: training and inference use the *same* feature definitions → no skew between offline training and online predictions.

---

## 📊 SageMaker Model Monitor, Drift Detection

Models go stale. Customer behavior changes. The data flowing into your endpoint slowly diverges from what you trained on. **Model Monitor** detects four kinds of drift:

| Drift type | What's changing | Example |
|------------|-----------------|---------|
| **Data quality drift** | The *distribution of incoming features* shifts | Average customer age was 38; now it's 24 |
| **Model quality drift** | The *accuracy of predictions* degrades (needs ground truth) | Click-through-rate predictions miss reality more often |
| **Bias drift** | A *fairness metric* shifts in production | Approval rate drifts apart between two demographic groups |
| **Feature attribution drift** | The *importance of features* changes | Model used to weigh "income" most; now it weighs "device type", something's off |

🎯 **Trap on the exam:** Model Monitor for *bias drift* uses **SageMaker Clarify** under the hood. Clarify shows up in both Module 2 and Module 7.

---

## 🛠️ SageMaker MLOps, Pipelines + Model Registry

Once a workflow works, you automate it:

- **SageMaker Pipelines** = CI/CD for ML. Define steps (process → train → evaluate → register → deploy) as code; SageMaker orchestrates them.
- **Model Registry** = central catalog of trained models, with versions, approval status, and lineage.

A common pattern: a Pipeline trains and *registers* a model in the Registry with status `PendingManualApproval`. A human reviewer flips it to `Approved`, and another Pipeline deploys it to a SageMaker Endpoint.

---

## 🆚 SageMaker vs AWS AI Services, Don't Confuse Them

This is a *very* common trap on the AIF-C01.

| Layer | Examples | Who uses it |
|-------|----------|-------------|
| **AWS AI Services** (pre-built APIs) | Rekognition (vision), Comprehend (NLP), Translate, Polly (text-to-speech), Transcribe (speech-to-text), Textract (OCR/forms), Lex (chatbots), Forecast (time-series), Personalize (recommendations), Kendra (intelligent search) | App developers, no ML knowledge needed |
| **Amazon SageMaker** | Studio, Training Jobs, JumpStart, etc. | Data scientists / ML engineers, wants control over the model |
| **Amazon Bedrock** (Module 4) | Anthropic Claude, Amazon Nova, Meta Llama, etc. | Anyone building **generative AI** applications |

🎯 **Decision rule the exam loves:**
- "I need OCR on scanned invoices." → **Textract** (don't build it; use the AI service).
- "I need to detect objects in customer photos." → **Rekognition**.
- "I want to convert phone-call audio to text." → **Transcribe**.
- "I want to translate text between languages." → **Translate**.
- "I want a chatbot for my IVR." → **Amazon Lex**.
- "I want full control to train a custom recommendation model." → **SageMaker**.
- "I want to build a chatbot powered by Claude that answers from our internal docs." → **Bedrock** (Module 4 + 5).

### The AI Services menu, memorize the one-liner

| Service | Does what |
|---------|-----------|
| **Amazon Rekognition** | Image and video analysis, object/face/celebrity/text detection, content moderation |
| **Amazon Textract** | Extract text + structured data (tables, forms) from documents (OCR++) |
| **Amazon Comprehend** | NLP, entities, sentiment, key phrases, language; Comprehend Medical = PHI extraction |
| **Amazon Translate** | Neural machine translation |
| **Amazon Polly** | Text-to-speech (lifelike voices) |
| **Amazon Transcribe** | Speech-to-text (incl. medical, call analytics) |
| **Amazon Lex** | Build conversational chatbots (the engine behind Alexa) |
| **Amazon Personalize** | Real-time personalized recommendations (the engine behind Amazon.com retail) |
| **Amazon Forecast** | Time-series forecasting as a managed service |
| **Amazon Kendra** | Enterprise intelligent search with natural language queries |
| **Amazon Fraud Detector** | Online fraud detection (account takeover, payment fraud) |
| **Amazon Lookout for Equipment / Vision / Metrics** | Anomaly detection (industrial, visual, business metrics) |

🎯 **Trap on the exam:** They'll describe a use case that screams "Comprehend" and offer SageMaker as the obvious-looking distractor. **Prefer the managed AI service** if it does exactly the task. Reach for SageMaker only when you need a custom model.

---

## 🚨 Common Exam Misconceptions

| Misconception | Reality |
|---------------|---------|
| "SageMaker IS the ML model" | SageMaker is the *platform*. Models live inside training jobs / endpoints. |
| "Endpoints are always real-time" | Endpoints have 4 modes: real-time, serverless, async, batch transform. |
| "Ground Truth is just Mechanical Turk" | Ground Truth supports public, private, and vendor workforces. |
| "Bedrock and SageMaker are alternatives" | Bedrock is for generative-AI APIs to FMs. SageMaker is the broader ML platform. They co-exist, Bedrock is even integrated with SageMaker JumpStart in many places. |
| "Model Monitor is just for accuracy" | It also detects data, bias, and feature attribution drift. |

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **SageMaker Studio** | The browser-based ML IDE |
| **Data Wrangler** | Visual data prep for SageMaker |
| **Feature Store** | Central, versioned store for ML features (online + offline) |
| **Ground Truth** | Managed data labeling with public/private/vendor workforces |
| **Training Job** | Managed training on AWS-provisioned compute |
| **Automatic Model Tuning (HPO)** | Hyperparameter optimization service |
| **Autopilot** | AutoML for tabular data |
| **Canvas** | No-code ML for business users |
| **JumpStart** | One-click pretrained models and solutions |
| **Pipelines** | MLOps orchestration (CI/CD for ML) |
| **Model Registry** | Versioned catalog of trained models |
| **Endpoint** | Hosted inference (real-time / serverless / async / batch) |
| **Model Monitor** | Detects data, model, bias, and feature attribution drift |
| **Clarify** | Bias detection + explainability |
| **Rekognition** | Pre-built vision service |
| **Textract** | OCR + form extraction |
| **Comprehend** | Pre-built NLP service |
| **Lex** | Pre-built chatbot service |
| **Polly** | Text-to-speech |
| **Transcribe** | Speech-to-text |
| **Personalize** | Pre-built recommendation engine |
| **Forecast** | Pre-built time-series forecasting |

---

## 📊 Case Study, Pinterest's MLOps on Amazon SageMaker (2020–2024)

**Situation.** Pinterest's entire business is recommendation: serving the right pin to the right user out of a catalog of ~5 billion pins, ~500 million monthly active users (2024 IR filings), and ~5 billion impressions per day. Pre-2020, Pinterest's ML platform was a sprawl of bespoke Python and Spark pipelines. Each team trained its own models on its own infrastructure; reproducibility was poor, drift detection ad-hoc, and onboarding new ML engineers took weeks. Around 50+ production models powered Home Feed, related-pin, search, shopping, and ads, and the team forecasted the next two years would need that to triple. The CTO's mandate (per the 2021 Pinterest Engineering blog series): "consolidate to one ML platform; reduce time-to-production from weeks to days."

**Decision.** Starting in 2020 and accelerating through 2022, Pinterest standardized on **Amazon SageMaker** as the unified ML platform, while continuing to run inference at the edge on its own Kubernetes infrastructure. The architecture, as described in AWS and Pinterest joint blog posts (2021–2023) and Pinterest's engineering channel:

- **SageMaker Training Jobs** for distributed training across hundreds of GPU instances, using Spot pricing for ~70% cost reduction on non-time-sensitive jobs
- **SageMaker Processing Jobs** for feature engineering at petabyte scale
- **SageMaker Feature Store** (rolled out in 2022) as the central feature catalog, solving the train/serve skew that had bitten the team multiple times
- **SageMaker Experiments + Model Registry** to track every training run and gate models behind a manual-approval step before promotion
- **SageMaker Pipelines** for the end-to-end orchestration; CI/CD ran on top
- Custom inference *outside* SageMaker (Pinterest's own systems) for latency reasons, a deliberate hybrid choice

**Outcome.** Per Pinterest engineering blog (2022) and the AWS re:Invent 2022 talk "How Pinterest scaled ML on SageMaker":

- Time-to-production for a new model dropped from **3+ weeks to 3–5 days** for typical recommendation experiments
- The number of production ML models grew from ~50 (2020) to **300+** (2023) without proportionally increasing platform headcount
- Training-compute costs fell **~60%** through Spot-instance adoption and right-sized instance recommendations
- A 2023 outage post-mortem credited SageMaker Model Registry's approval workflow with catching a regression that would have shipped if the team's older "git-push-and-pray" pipeline had still been in use

**Lesson for the exam / for practitioners.** Pinterest is the canonical "managed-platform-beats-bespoke" reference for SageMaker. Three AIF-C01 talking points:

1. **The right answer is rarely "build it yourself."** Pinterest is famously engineering-rich. Even *they* chose to use the managed platform for the undifferentiated heavy lifting (training infra, experiment tracking, model registry) and only customized where they had real edge cases (inference latency). The exam pattern: when a scenario describes "we want full control of every detail," that's often wrong, managed services usually win on TCO. When a scenario describes "we need millisecond inference at extreme scale," that's the rare case where roll-your-own may be justified.
2. **The Feature Store is the most-underused SageMaker feature.** Pinterest's train/serve skew bugs (where a feature computed offline at training time differed subtly from the same feature computed online at inference time) were among the most-painful production incidents. Feature Store's online + offline architecture (single feature definition, two access patterns) is the cure. The exam often asks "what prevents train/serve skew?", the answer is **Feature Store**.
3. **MLOps maturity = Model Registry + Pipelines + Model Monitor.** The "MLOps" buzzword on the exam means *these three together*: versioned models with approval workflow (Registry), repeatable CI/CD-style execution (Pipelines), and drift detection in production (Model Monitor). Pinterest's outcome 300 models, 5-day time-to-production, 60% cost reduction is the kind of payoff the exam expects you to associate with this combo.

**Discussion (Socratic).**
- Q1: Pinterest deliberately kept *inference* outside SageMaker for latency reasons but consolidated *training* inside it. Build the strongest argument for each side of this hybrid choice. At what scale (latency budget, request volume, dollar value per ms) does it stop making sense to manage your own inference, and at what scale is the latency penalty of SageMaker Real-time endpoints worth the operational savings?
- Q2: A competitor (say, a smaller image-platform startup with 20 ML engineers, not 200) wants to copy Pinterest's playbook. Which three SageMaker tools should they adopt first, and which three should they *skip* until later? Defend a sequencing that prioritizes ROI over feature completeness.
- Q3: Pinterest used Spot Instances for ~70% of training jobs. Spot can be reclaimed with 2-minute notice. What kind of training workloads are safe for Spot, what kind are not, and how would you design a Pipeline that *automatically* falls back from Spot to On-Demand if a job has been preempted three times? (Hint: SageMaker Managed Spot Training has built-in checkpointing.)

---

## ✅ Module 2 Summary

You now know:

- 🔁 The 7-stage ML lifecycle and which SageMaker tool fits each stage
- 🏛️ The full SageMaker menu, Studio, Data Wrangler, Feature Store, Ground Truth, Training Jobs, Autopilot, Canvas, JumpStart, Pipelines, Model Registry, Endpoints, Model Monitor, Clarify
- 🚪 The four inference endpoint modes (real-time / serverless / async / batch)
- 🆚 SageMaker vs AWS AI Services vs Bedrock, and how to pick the right layer
- 📊 The four types of drift Model Monitor detects
- 🤖 The full AI Services menu by one-liner

**Next steps:**
1. 🎥 Watch the videos in [`Videos.md`](./Videos.md)
2. ✏️ Take [`Quiz.md`](./Quiz.md), aim for 20/24
3. 📋 Review [`Cheat-Sheet.md`](./Cheat-Sheet.md)
4. ➡️ Move to [Module 3: Generative AI Fundamentals](../Module-03-Generative-AI-Fundamentals/Reading.md)

---

> **Where this leads.**
> - Inside this course: Module 4 contrasts SageMaker (general ML platform) with Amazon Bedrock (managed-FM API); Module 6 returns to SageMaker for *fine-tuning* foundation models; Module 7 returns to SageMaker Clarify for bias detection and to Model Monitor for fairness drift; Module 8 returns to SageMaker for IAM execution roles and VPC mode.
> - Cross-course: `08-Azure-AI-Engineer` covers Azure Machine Learning (the SageMaker equivalent); `04-AWS-Solutions-Architect-Associate` Module 7 (storage) deepens the S3 + KMS integration patterns under SageMaker training data.
> - Practice: Practice Exam 1 has 10+ SageMaker questions; the Final Mock Exam revisits with multi-service scenarios.

---

## 💬 Discussion, Socratic prompts

1. **Canvas vs Autopilot vs JumpStart strategic positioning.** A pharma company has three internal teams: data scientists, business analysts, and platform engineers. Each wants "an ML capability." Assign one of the three tools (Canvas / Autopilot / JumpStart) to each team and defend why including the *political* trade-off (data scientists may feel demoted by Canvas; business analysts may feel out-skilled by Autopilot). What's the rollout sequence?
2. **Batch transform vs Real-time vs Async, the same model, three deployments.** Imagine you've trained a single image-classification model. Sketch three production scenarios where the same model would be best served by Real-time, Batch Transform, and Async respectively. For each, name a concrete payload size, latency budget, and cost rationale. This is the structure of about 1 in 5 questions in Domain 1/2.
3. **The "use Amazon Comprehend or fine-tune in SageMaker?" debate.** Your team needs sentiment analysis on 50 million customer reviews per month. Comprehend's per-unit cost is moderate but predictable; a fine-tuned in-house model might be 70% cheaper at this volume but adds engineering and maintenance. At what monthly volume does the math flip, and how does the answer change if accuracy requirements are stricter than Comprehend's published benchmarks? Build the TCO comparison framework you'd present to a CFO.
4. **Ground Truth and the labeling-quality dilemma.** A medical-imaging startup needs to label 500,000 X-rays for tumor presence. Public Mechanical Turk is the cheapest path but lacks HIPAA eligibility and clinical expertise. A vendor workforce is HIPAA-eligible but 5× the cost. A private workforce (radiologists on staff) is 20× the cost but produces gold-standard labels. Design a *hybrid* strategy that uses each appropriately. How does Ground Truth's active-learning feature change the math?
5. **Model Monitor's four drift types in practice.** For each of: (a) a credit-approval model, (b) a YouTube-thumbnail click-through-rate model, (c) a manufacturing-defect computer-vision model, rank the four drift types (data quality, model quality, bias, feature attribution) by which is most likely to fire first in production, and why. Then propose the response runbook for each.

---

## 📚 Further Reading (Optional)

- 📖 [Amazon SageMaker, Developer Guide](https://docs.aws.amazon.com/sagemaker/latest/dg/whatis.html)
- 📖 [AWS AI Services landing page](https://aws.amazon.com/ai/ai-services/)
- 📖 [SageMaker JumpStart catalog](https://aws.amazon.com/sagemaker-ai/jumpstart/)
- 📖 [SageMaker Pricing (read the endpoint types)](https://aws.amazon.com/sagemaker/pricing/)
- 📖 [AIF-C01 Exam Guide, Domain 1 task statements](https://d1.awsstatic.com/training-and-certification/docs-ai-practitioner/AWS-Certified-AI-Practitioner_Exam-Guide.pdf)
