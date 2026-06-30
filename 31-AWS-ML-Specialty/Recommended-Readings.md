# 📚 Recommended Readings, AWS ML Engineer – Associate (MLA-C01)

> Curated bibliography for the AWS Certified Machine Learning Engineer – Associate (MLA-C01) track. 65+ entries sequenced by **when in the course to engage with each**. None are required for passing the exam; all elevate the depth of understanding for production ML on AWS.

The list is roughly Pareto-ordered: the top items per section give 80% of the value with 20% of the reading.

---

## 🎯 The Single Most Important Documents

If you read only 5 things in addition to this course, read these:

1. **AWS Certified Machine Learning Engineer – Associate (MLA-C01) Exam Guide.** The blueprint. Read twice.
2. **Amazon SageMaker Developer Guide.** Every SageMaker feature in detail. Skim the table of contents; deep-read the sections you weren't confident on after the practice exams.
3. **AWS Well-Architected Machine Learning Lens (whitepaper).** AWS's own best-practice document for production ML.
4. **Géron, Aurélien (2022). Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow (3rd ed.). O'Reilly.** The best applied ML book on the market. Chapters 2-4 and 7 pair with Modules 1-4 of this course.
5. **Hidden Technical Debt in Machine Learning Systems, Sculley et al. (2015), NIPS.** The foundational MLOps paper. ~10 pages. Read before Module 9.

---

## 🧠 Foundational Machine Learning Theory

### Textbooks

- 📖 **Goodfellow, Bengio, Courville (2016).** *Deep Learning.* MIT Press. The canonical DL reference. Chapters 5 (ML basics), 6 (DNNs), 9 (CNNs), 10 (RNNs), 12 (applications). Free PDF at deeplearningbook.org.
- 📖 **Bishop, Christopher M. (2006).** *Pattern Recognition and Machine Learning.* Springer. The academic spine of probabilistic ML. Chapters 1, 3, 8 cover Modules 1, 4, 8.
- 📖 **Bishop, Christopher M. & Bishop, Hugh (2024).** *Deep Learning: Foundations and Concepts.* Springer. Modern academic update to PRML. Chapters on transformers and diffusion.
- 📖 **Murphy, Kevin P. (2022).** *Probabilistic Machine Learning: An Introduction.* MIT Press. Free PDF at probml.github.io. Comprehensive textbook.
- 📖 **Burkov, Andriy (2019).** *The Hundred-Page Machine Learning Book.* Concise, dense, well-priced. Best quick reference.
- 📖 **James, Witten, Hastie, Tibshirani, Taylor (2023).** *An Introduction to Statistical Learning with Python* (2nd ed.). Springer. Free PDF at statlearning.com. Best statistical-ML treatment.
- 📖 **Hastie, Tibshirani, Friedman (2009).** *The Elements of Statistical Learning* (2nd ed.). Springer. Free PDF on hastie's Stanford page. The deeper, more mathematical version of ISL.

### Seminal Papers (1958–2017)

- 📄 **Rosenblatt, F. (1958).** *The Perceptron: A Probabilistic Model for Information Storage and Organization in the Brain.* Psychological Review 65(6). The origin of modern neural networks.
- 📄 **Rumelhart, Hinton, Williams (1986).** *Learning Representations by Back-Propagating Errors.* Nature 323. Backpropagation paper.
- 📄 **LeCun et al. (1989).** *Backpropagation Applied to Handwritten Zip Code Recognition.* Neural Computation 1(4). The first practical CNN (LeNet).
- 📄 **Cortes & Vapnik (1995).** *Support-Vector Networks.* Machine Learning 20. SVMs.
- 📄 **Breiman, L. (1996).** *Bagging Predictors.* Machine Learning 24(2). Bagging foundation.
- 📄 **Hochreiter & Schmidhuber (1997).** *Long Short-Term Memory.* Neural Computation 9(8). LSTM origin.
- 📄 **Breiman, L. (2001).** *Random Forests.* Machine Learning 45(1). Random Forest paper.
- 📄 **Breiman, L. (2001).** *Statistical Modeling: The Two Cultures.* Statistical Science 16(3). The data-modelling vs algorithmic-modelling essay. Foundational for the ML mindset.
- 📄 **Krizhevsky, Sutskever, Hinton (2012).** *ImageNet Classification with Deep Convolutional Neural Networks.* NIPS. AlexNet. The DL watershed.
- 📄 **Goodfellow et al. (2014).** *Generative Adversarial Nets.* NIPS. GAN paper.
- 📄 **He et al. (2015).** *Deep Residual Learning for Image Recognition.* CVPR. ResNet.
- 📄 **Vaswani et al. (2017).** *Attention Is All You Need.* NeurIPS. The Transformer. Required reading for the modern era.

---

## 🛠️ Data Engineering for ML (Module 2)

- 📖 **Kleppmann, Martin (2017).** *Designing Data-Intensive Applications.* O'Reilly. Chapters 3 (storage), 10 (batch), 11 (streaming) are the academic spine.
- 📖 **Reis, Joe & Housley, Matt (2022).** *Fundamentals of Data Engineering.* O'Reilly. The modern DE canon.
- 📖 **Inmon, Strauss, Neushloss (2008).** *DW 2.0: The Architecture for the Next Generation of Data Warehousing.* Morgan Kaufmann. Historical context for lake-vs-warehouse.
- 📖 **Beauchemin, Maxime.** *The Rise of the Data Engineer.* Medium blog post. The founder of Airflow on the data-engineering profession.
- 📰 **Netflix Tech Blog.** *Maestro* (workflow orchestration), *Iceberg adoption*, *Genie*. Public deep-dives on petabyte-scale ML data platforms.
- 📰 **AWS Big Data Blog.** Filter by `category=glue` or `category=athena` for hundreds of practical patterns.

---

## 🔬 EDA & Feature Engineering (Module 3)

- 📖 **Zheng & Casari (2018).** *Feature Engineering for Machine Learning.* O'Reilly. The canonical FE handbook.
- 📖 **Kuhn & Johnson (2019).** *Feature Engineering and Selection.* CRC Press. Academic spine; free PDF online.
- 📖 **Molnar, Christoph (2022).** *Interpretable Machine Learning* (2nd ed.). Free online at christophm.github.io/interpretable-ml-book. Best treatment of model interpretability.
- 📄 **van der Maaten & Hinton (2008).** *Visualizing Data using t-SNE.* JMLR. t-SNE origin.
- 📄 **McInnes, Healy, Melville (2018).** *UMAP: Uniform Manifold Approximation and Projection.* arXiv. UMAP origin.
- 📄 **Chawla et al. (2002).** *SMOTE: Synthetic Minority Over-sampling Technique.* JAIR. SMOTE origin.
- 📰 **Kaggle "Grandmaster" interviews** at Coursera / Medium. FE dominates winning approaches; transcripts are gold.
- 📰 **Sebastian Raschka's blog**, practical FE essays.

---

## 🧠 SageMaker Algorithms (Module 4)

- 📄 **Chen & Guestrin (2016).** *XGBoost: A Scalable Tree Boosting System.* KDD. The XGBoost paper.
- 📄 **Ke et al. (2017).** *LightGBM: A Highly Efficient Gradient Boosting Decision Tree.* NeurIPS. LightGBM, sometimes competitive with XGBoost.
- 📄 **Prokhorenkova et al. (2018).** *CatBoost: Unbiased Boosting with Categorical Features.* NeurIPS. CatBoost.
- 📄 **Liu, Ting, Zhou (2008).** *Isolation Forest.* ICDM. Isolation Forest, SageMaker RCF's intellectual ancestor.
- 📄 **Rendle (2010).** *Factorization Machines.* ICDM. The FM paper.
- 📄 **Salinas, Flunkert, Gasthaus (2020).** *DeepAR: Probabilistic forecasting with autoregressive recurrent networks.* International Journal of Forecasting. DeepAR origin.
- 📄 **Mikolov et al. (2013).** *Distributed Representations of Words and Phrases.* NIPS. Word2Vec (BlazingText's lineage).
- 📰 **AWS ML Blog, `category=algorithms`.** Practical applications of each built-in.

---

## 🧬 Deep Learning on AWS (Module 5)

- 📖 **Zhang et al. (2023).** *Dive into Deep Learning.* Free online at d2l.ai. Code-rich, modern. PyTorch + TF + MXNet versions.
- 📖 **Geiger, Florence, Kandel (2024).** *Generative AI with Python and PyTorch.* Manning. Modern hands-on DL book.
- 📄 **Devlin et al. (2018).** *BERT: Pre-training of Deep Bidirectional Transformers.* NAACL. BERT paper.
- 📄 **Brown et al. (2020).** *Language Models are Few-Shot Learners.* NeurIPS. GPT-3.
- 📄 **Ho, Jain, Abbeel (2020).** *Denoising Diffusion Probabilistic Models.* NeurIPS. Diffusion model origin.
- 📄 **Rombach et al. (2022).** *High-Resolution Image Synthesis with Latent Diffusion Models.* CVPR. Stable Diffusion paper.
- 📄 **Touvron et al. (2023).** *Llama 2: Open Foundation and Fine-Tuned Chat Models.* Meta paper.
- 📄 **Touvron et al. (2024).** *Llama 3.* Meta paper (model card + technical report).
- 📰 **AWS Neuron SDK docs** awsdocs-neuron.readthedocs-hosted.com Trainium / Inferentia compilation.
- 📰 **NVIDIA Tensor Core blog posts**, mixed-precision and FP8 best practices.

---

## 🗣️ Managed AI Services (Module 6)

- 📖 **AWS Comprehend Developer Guide**, full coverage of pre-trained APIs and Custom Classifiers / NER.
- 📖 **AWS Rekognition Developer Guide**, image + video.
- 📖 **AWS Textract Developer Guide**, forms, tables, queries, AnalyzeID, AnalyzeExpense.
- 📰 **JPMorgan COiN case studies**, Bloomberg (2017), Wired (2018), American Banker (2019). The reference enterprise managed-AI deployment.
- 📰 **Stripe Engineering Blog**, fraud detection + clinical-notes patterns (when public).
- 📰 **AWS ML Blog, `category=Computer Vision`, `category=NLP`.**

---

## 🌟 Bedrock & GenAI (Module 7)

- 📖 **Amazon Bedrock User Guide**, `docs.aws.amazon.com/bedrock/`. Comprehensive.
- 📖 **Knowledge Bases for Amazon Bedrock**, `docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html`.
- 📖 **Agents for Amazon Bedrock**, `docs.aws.amazon.com/bedrock/latest/userguide/agents.html`.
- 📖 **Anthropic Claude Documentation**, anthropic.com/docs. Prompt engineering best practices.
- 📄 **Lewis et al. (2020).** *Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks.* NeurIPS. RAG paper.
- 📄 **Wei et al. (2022).** *Chain-of-Thought Prompting Elicits Reasoning in LLMs.* NeurIPS. CoT prompting.
- 📄 **Touvron et al. (2023, 2024).** Llama series papers.
- 📄 **Karpukhin et al. (2020).** *Dense Passage Retrieval for Open-Domain Question Answering.* EMNLP. DPR, the embedding-retrieval pattern.
- 📰 **OpenAI Cookbook**, github.com/openai/openai-cookbook. RAG and tool-use patterns applicable to Bedrock too.
- 📰 **Latent Space podcast**, applied GenAI engineering.

---

## 🎯 Evaluation, Tuning & Bias (Module 8)

- 📖 **Molnar, Christoph (2022).** *Interpretable Machine Learning* (2nd ed.). Free online. Best treatment of SHAP, LIME, partial dependence.
- 📖 **Barocas, Hardt, Narayanan (2023).** *Fairness and Machine Learning.* Free online at fairmlbook.org.
- 📄 **Lundberg & Lee (2017).** *A Unified Approach to Interpreting Model Predictions.* NeurIPS. SHAP origin.
- 📄 **Hardt, Price, Srebro (2016).** *Equality of Opportunity in Supervised Learning.* NeurIPS. Fairness definitions.
- 📄 **Mitchell et al. (2019).** *Model Cards for Model Reporting.* FAT*. Model card origin.
- 📄 **Buolamwini & Gebru (2018).** *Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classification.* FAT*. Foundational bias-detection paper for commercial CV systems.
- 📄 **Snoek, Larochelle, Adams (2012).** *Practical Bayesian Optimization of ML Algorithms.* NeurIPS. Bayesian HPO origin.
- 📄 **Li et al. (2017).** *Hyperband: A Novel Bandit-Based Approach to Hyperparameter Optimization.* JMLR. Hyperband.
- 📰 **Fairlearn**, fairlearn.org. Open-source fairness toolkit; complements Clarify.

---

## 🚀 MLOps (Module 9)

- 📖 **Huyen, Chip (2022).** *Designing Machine Learning Systems.* O'Reilly. Best modern MLOps book.
- 📖 **Burkov, Andriy (2024).** *Machine Learning Engineering* (2nd ed.). Practical, production-focused.
- 📖 **Treveil et al. (2020).** *Introducing MLOps.* O'Reilly. Operating perspective.
- 📖 **Kreuzberger, Kühl, Hirschl (2023).** *Machine Learning Operations (MLOps): Overview, Definition, and Architecture.* IEEE Access. Survey paper.
- 📄 **Sculley et al. (2015).** *Hidden Technical Debt in Machine Learning Systems.* NIPS. Required reading.
- 📄 **Breck et al. (2017).** *The ML Test Score: A Rubric for ML Production Readiness.* IEEE Big Data. The "is this model ready to ship?" rubric.
- 📰 **Made With ML (Goku Mohandas)**, madewithml.com. Modern open-source MLOps curriculum.
- 📰 **Eugene Yan's blog**, eugeneyan.com. Practical MLOps essays from a senior MLE.
- 📰 **Chip Huyen's blog**, huyenchip.com. ML systems essays.
- 📰 **AWS ML Blog, `category=MLOps`.**
- 🎤 **re:Invent AIM403 (2023):** *MLOps at Amazon Music.* The reference architecture.
- 🎤 **re:Invent AIM319 (2022):** *Capital One Real-Time Fraud Detection.* Production MLOps case study.

---

## 🔐 Security, Cost & Production (Module 10)

- 📖 **AWS Well-Architected Framework (full docs)**, `docs.aws.amazon.com/wellarchitected/`. 6 pillars; quoted on the exam.
- 📖 **AWS Builders' Library**, `aws.amazon.com/builders-library`. Essays by AWS Principal Engineers.
  - **Marc Brooker, Timeouts, retries, and backoff with jitter**
  - **Marc Brooker, Avoiding fallback in distributed systems**
  - **Becky Weiss, Static stability using Availability Zones**
- 📖 **AWS Macie User Guide.**
- 📖 **AWS Security Best Practices for SageMaker.** Whitepaper.
- 📰 **Corey Quinn's *Last Week in AWS* newsletter**, `lastweekinaws.com`. Practical cost-engineering essays. Strong sense of humour.
- 📰 **AWS Cost Optimization Workshops**, public re:Invent material; search for SVS401.
- 🎤 **re:Invent SVS401 (annual):** *Architecting for sustainability on AWS.*

---

## 🏥 Domain-Specific (Health, Finance, Retail Verticals)

These are not on the exam, but elevate the realism of your capstone or interview answers.

- 📰 **Anthem / Elevance MLOps case study**, public AWS Summit talks 2023.
- 📰 **Capital One All-in on AWS** Bloomberg, re:Invent 2018 / 2022 keynotes.
- 📰 **Pinterest ML Infrastructure**, re:Invent + Pinterest engineering blog 2022/2023.
- 📰 **Stripe Radar engineering posts**, public talks at Strange Loop and Stripe Sessions.
- 📰 **NASA JPL on AWS**, anomaly detection at planetary scale; re:Invent talks.

---

## 📰 Newsletters & Podcasts (Continuous Learning)

- 📰 **The Pragmatic Engineer** (Gergely Orosz), pragmaticengineer.com. Some ML systems content.
- 📰 **Latent Space**, `latent.space`. Applied GenAI / LLM engineering.
- 📰 **Last Week in AWS**, `lastweekinaws.com`. Cost engineering + AWS news.
- 📰 **MLOps Community Slack + podcast**, `mlops.community`. Practitioner-driven.
- 📰 **TWIMLAI podcast (Sam Charrington)**, `twimlai.com`. Long-form ML interviews.
- 📰 **AWS re:Invent + AWS Summit YouTube channels**, every year's official sessions.

---

## 🎓 Free Online Courses (Augment This Curriculum)

- 🎓 **Andrew Ng, Machine Learning Specialization** (Coursera, free to audit). Foundations.
- 🎓 **Andrew Ng, Deep Learning Specialization** (Coursera). CNNs, RNNs, transformers.
- 🎓 **DeepLearning.AI, Generative AI with Large Language Models** (Coursera). LLM-specific.
- 🎓 **MIT 6.S191 Introduction to Deep Learning** `introtodeeplearning.com`. Free MIT lectures.
- 🎓 **Stanford CS229 Machine Learning** Andrew Ng's original Stanford ML class on YouTube.
- 🎓 **Stanford CS231n CNNs for Visual Recognition** free YouTube.
- 🎓 **Stanford CS224n NLP with Deep Learning** free YouTube.
- 🎓 **Made With ML by Goku Mohandas**, `madewithml.com`. Modern free MLOps curriculum.
- 🎓 **fast.ai**, `fast.ai`. Practical DL course (Jeremy Howard's).
- 🎓 **Hugging Face course**, `huggingface.co/learn`. Transformers + diffusion.

---

## 🔄 Re-Reading Schedule (For The Most-Cited)

Some references reward re-reading at different career stages. Here is when:

| When | Re-read |
|------|---------|
| Before Module 1 | AWS MLA-C01 Exam Guide; Géron Ch 1-3 |
| Before Module 5 | Goodfellow Ch 6, 9; Vaswani 2017 (transformer) |
| Before Module 8 | Lundberg & Lee (SHAP); Hardt, Price, Srebro (fairness) |
| Before Module 9 | Sculley et al. 2015 (technical debt); Huyen Ch 1-4 |
| 6 months after passing | Builders' Library essays; re:Invent latest |
| 1 year after passing | Re-read Hidden Technical Debt, you'll see new things |
| 2 years after passing | Re-read your capstone, and laugh / cry |

---

## 🎯 The 80/20 Reading Path (Cert-First)

If you have ~10 hours of total reading time outside this course:

1. AWS MLA-C01 Exam Guide (2 readings, 1 hour total)
2. Géron Chapters 2-4, 7 (4 hours)
3. AWS Well-Architected Machine Learning Lens (1 hour)
4. Sculley et al. 2015 (30 minutes)
5. AWS Builders' Library, Brooker's "Timeouts, retries, backoff" + "Static stability" (1 hour)
6. SageMaker Developer Guide, skim the algorithms chapter (1 hour)
7. Capital One re:Invent 2022 video (1 hour)
8. *Pinterest ML Infrastructure* re:Invent video (30 minutes)

10 hours, 90% of the cert-prep value beyond what this course gives you.

---

🎓 Good reading. Reading is where your *understanding* gets deep enough to *teach others*, which is the real cert.
