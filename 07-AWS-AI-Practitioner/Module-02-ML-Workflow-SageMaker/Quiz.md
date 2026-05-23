# ✏️ Module 2 Quiz: ML Workflow on Amazon SageMaker

> **Instructions:** Answer all 24 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 20/24 minimum.

---

## Questions

### Q1. A marketing analyst with no Python experience wants to build a customer churn model on a CSV uploaded to S3. The BEST SageMaker tool is: *(Apply)*
A. SageMaker Training Job
B. SageMaker Canvas
C. SageMaker Pipelines
D. SageMaker Edge Manager

---

### Q2. A team has 100 GB of input each week and needs to score the whole dataset overnight (no live API needed). The BEST inference option is: *(Apply)*
A. Real-time endpoint
B. Serverless inference
C. Asynchronous inference
D. Batch transform

---

### Q3. SageMaker Feature Store provides: *(Remember)*
A. A managed Jupyter notebook
B. An online + offline central store for ML features
C. Hyperparameter tuning
D. Model deployment

---

### Q4. Which service automatically searches across algorithms and hyperparameters to build the best tabular model with one API call? *(Understand)*
A. SageMaker JumpStart
B. SageMaker Autopilot
C. SageMaker Studio
D. SageMaker Ground Truth

---

### Q5. A company needs to label 500,000 X-ray images with strict medical confidentiality. The BEST Ground Truth workforce is: *(Analyze)*
A. Amazon Mechanical Turk (public)
B. Vendor workforce
C. Private workforce (your own staff)
D. Crowdsource via Twitter

---

### Q6. A team wants ONE-CLICK access to a catalog of pretrained foundation models to fine-tune and deploy. The right SageMaker feature is: *(Apply)*
A. JumpStart
B. Autopilot
C. Canvas
D. Processing Jobs

---

### Q7. Which inference endpoint is BEST for spiky workloads that may be idle for hours? *(Apply)*
A. Real-time endpoint
B. Serverless inference
C. Asynchronous inference
D. Batch transform

---

### Q8. SageMaker Model Monitor can detect all of the following EXCEPT: *(Analyze)*
A. Data quality drift
B. Bias drift
C. Feature attribution drift
D. GPU utilization drift

---

### Q9. A startup wants OCR on a million scanned invoices. The BEST AWS service is: *(Apply)*
A. SageMaker Training Job
B. Amazon Textract
C. Amazon Rekognition
D. Amazon Comprehend

---

### Q10. To extract sentiment and key phrases from customer reviews without training a model, use: *(Apply)*
A. Amazon Polly
B. Amazon Lex
C. Amazon Comprehend
D. Amazon Transcribe

---

### Q11. A retailer wants real-time product recommendations on its website powered by a managed service. The BEST choice is: *(Apply)*
A. Amazon Forecast
B. Amazon Personalize
C. Amazon Translate
D. SageMaker Ground Truth

---

### Q12. A logistics company wants accurate demand forecasts for thousands of SKUs using a managed time-series service. The BEST choice is: *(Apply)*
A. SageMaker Canvas
B. Amazon Forecast
C. Amazon Rekognition
D. Amazon Personalize

---

### Q13. The browser-based IDE that lets you do notebooks, training, deployment, and monitoring in one place is: *(Remember)*
A. AWS Cloud9
B. SageMaker Studio
C. AWS Console
D. SageMaker Edge Manager

---

### Q14. SageMaker Clarify provides: *(Remember)*
A. Hyperparameter tuning
B. Bias detection and explainability
C. Real-time inference
D. Container builds

---

### Q15. Which is NOT a typical stage of the ML lifecycle? *(Analyze)*
A. Data collection
B. Model deployment
C. Model monitoring
D. Quantum compilation

---

### Q16. A team wants to track parameters, metrics, and lineage across hundreds of training runs. The BEST SageMaker tool is: *(Apply)*
A. SageMaker Experiments
B. SageMaker Endpoints
C. SageMaker Polly
D. SageMaker Canvas

---

### Q17. SageMaker Pipelines is BEST described as: *(Understand)*
A. A messaging queue
B. CI/CD orchestration for the ML lifecycle
C. A model registry
D. A drift-detection service

---

### Q18. A call center wants to convert thousands of recorded phone calls into text. The BEST service is: *(Apply)*
A. Amazon Polly
B. Amazon Lex
C. Amazon Transcribe
D. Amazon Comprehend

---

### Q19. A company needs lifelike text-to-speech audio for an IVR system. The BEST service is: *(Apply)*
A. Amazon Polly
B. Amazon Transcribe
C. Amazon Comprehend
D. Amazon Translate

---

### Q20. A bank wants enterprise search over thousands of internal PDFs using natural language questions, without writing ML code. The BEST service is: *(Apply)*
A. Amazon Personalize
B. Amazon Kendra
C. SageMaker Autopilot
D. Amazon Translate

---

### Q21. A development team needs to detect fraud in real-time online transactions using a managed AWS service. The BEST first choice is: *(Apply)*
A. Amazon Fraud Detector
B. Amazon Polly
C. AWS Glue
D. SageMaker Edge Manager

---

### Q22. Asynchronous inference is BEST suited for: *(Understand)*
A. Sub-50 ms web requests
B. Large payloads (up to ~1 GB) with seconds-to-minutes processing
C. Scoring a static CSV overnight
D. Embedded device inference

---

### Q23. The right SageMaker tool for *running a CONTAINERIZED data-prep job at scale* (not via the visual UI) is: *(Evaluate)*
A. Data Wrangler
B. Processing Jobs
C. Ground Truth
D. Endpoints

---

### Q24. The Model Registry's primary purpose is to: *(Understand)*
A. Train new models
B. Catalog and version trained models with approval workflow
C. Detect bias
D. Visually prep data

---

## 🎯 Answers + Explanations

### Q1: **B. SageMaker Canvas**
Canvas is *no-code* visual ML aimed at business analysts. Autopilot is API/notebook-driven (still requires some technical skill). Training Jobs are even more hands-on.

### Q2: **D. Batch transform**
Score a whole dataset offline = batch transform. No need for a live endpoint.

### Q3: **B. An online + offline central store for ML features**
Online for low-latency inference; offline (S3) for training. Same definitions for both → no train/serve skew.

### Q4: **B. Autopilot**
AutoML for tabular data. Searches algorithms + hyperparameters and gives you a "best" model plus a transparent notebook.

### Q5: **C. Private workforce**
Medical data → confidentiality wins. Private = your own vetted employees. Mechanical Turk is the wrong answer for sensitive data.

### Q6: **A. JumpStart**
One-click catalog of pretrained models and end-to-end solutions, incl. foundation models.

### Q7: **B. Serverless inference**
Pay-per-request, idle-friendly. Real-time charges per instance-hour even when idle.

### Q8: **D. GPU utilization drift**
Model Monitor handles **data quality, model quality, bias, feature attribution** drift. GPU utilization is a CloudWatch concern.

### Q9: **B. Amazon Textract**
OCR + structured form/table extraction. Rekognition is general vision; Textract is specifically document-aware.

### Q10: **C. Amazon Comprehend**
Sentiment, entities, key phrases, language detection. Out of the box, no training.

### Q11: **B. Amazon Personalize**
The same engine that powers Amazon.com personalization, offered as a managed API.

### Q12: **B. Amazon Forecast**
Managed time-series forecasting with built-in algorithms tuned for retail/demand.

### Q13: **B. SageMaker Studio**
The unified ML IDE in the browser.

### Q14: **B. Bias detection and explainability**
Clarify shows up in Module 2 (pre/post-training) AND Module 7 (responsible AI).

### Q15: **D. Quantum compilation**
Not part of any ML lifecycle. The standard stages: business problem → data → prep → train → evaluate → deploy → monitor.

### Q16: **A. SageMaker Experiments**
Specifically built to log runs, params, metrics, lineage. Pipelines orchestrate; Experiments track.

### Q17: **B. CI/CD orchestration for the ML lifecycle**
Define steps as code; SageMaker runs the DAG. Tightly integrated with Model Registry.

### Q18: **C. Amazon Transcribe**
Speech-to-text. There's even Transcribe Call Analytics tailored to contact centers.

### Q19: **A. Amazon Polly**
Lifelike TTS, dozens of voices and languages.

### Q20: **B. Amazon Kendra**
Enterprise intelligent search powered by NLP — finds the actual passage in a document, not just keywords.

### Q21: **A. Amazon Fraud Detector**
Pre-built service that includes account-takeover, payment fraud, and new-account fraud models. Use this before reaching for SageMaker.

### Q22: **B. Large payloads (up to ~1 GB) with seconds-to-minutes processing**
Async queues requests, handles big inputs, returns when done. Perfect for big PDFs, MRI scans, long audio.

### Q23: **B. Processing Jobs**
Run any container on managed infra for data prep / evaluation. Data Wrangler is the visual UI alternative.

### Q24: **B. Catalog and version trained models with approval workflow**
Model Registry stores versions, lineage, and approval status; Pipelines deploy *approved* models.

---

## 📊 Score Yourself

- 23–24/24 → 🏆 SageMaker is now reflex.
- 20–22/24 → ✅ Great. Review your wrongs, then on to Module 3.
- 17–19/24 → ⚠️ Re-read the SageMaker tools table and the inference endpoint section.
- <17 → 🔁 Re-read the whole module.

---

## 🃏 Add To Your Flashcards

- 7-stage ML lifecycle with one tool per stage
- 4 inference endpoint modes (real-time / serverless / async / batch) with use cases
- Canvas vs Autopilot vs JumpStart (one-line each)
- AI services menu — Rekognition, Textract, Comprehend, Translate, Polly, Transcribe, Lex, Personalize, Forecast, Kendra, Fraud Detector
- 4 drift types Model Monitor detects

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 3: Generative AI Fundamentals](../Module-03-Generative-AI-Fundamentals/Reading.md)
