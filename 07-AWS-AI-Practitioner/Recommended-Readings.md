---
permalink: /07-AWS-AI-Practitioner/Recommended-Readings/
title: Recommended Readings, AWS AI Practitioner
---

# Recommended Readings, AWS AI Practitioner (AIF-C01) 📚

> This reading list is intentionally short and high-signal. Read the **canonical textbooks** as background while studying. Read the **seminal papers** before or during the modules they anchor (notes below). Read the **industry resources** weekly during your study period. Use the **free academic courses** for any topic where the course modules feel too compressed.
>
> Last verified 2026-05.

---

## 📖 Canonical textbooks

### 1. *Deep Learning*, Goodfellow, Bengio, Courville (MIT Press, 2016)

The canonical free-online textbook for deep learning. The first 5 chapters give you everything Module 1's vocabulary needs plus the math intuition. Skip the second half unless you're aiming beyond AIF-C01.

- **Read when:** Module 1 (background) or any time you want depth on a vocabulary word
- **Why it's worth your time:** No book is cited more in the field; you'll see "Goodfellow et al." referenced in nearly every academic talk
- **Free online:** https://www.deeplearningbook.org/

### 2. *AWS Certified AI Practitioner Official Study Guide: Exam AIF-C01*, AWS / Sybex (Wiley, 2025)

The official Sybex study guide. Best used as a *cross-reference* against the modules in this course; if a topic feels under-covered here, look there next. Includes domain-by-domain breakdowns and ~100 practice questions in the book + ~200 in the online supplement.

- **Read when:** As a parallel reference throughout, especially Domain 3 & Domain 4
- **Why it's worth your time:** Wiley books are the closest thing to "the official answer key" for AWS exams
- **ISBN-13:** 978-1394330158

### 3. *Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow* (3rd ed.), Aurélien Géron (O'Reilly, 2022)

The "ML practitioner's handbook." Chapters 1–4 cover everything Module 1 expects you to know, with worked code. The deep-learning second half (Keras + TensorFlow) is more than AIF-C01 needs but invaluable if you continue toward the AWS Machine Learning Engineer Associate or beyond.

- **Read when:** Module 1 (deeper) or pre-AIF-C01 if it's your first ML book
- **Why it's worth your time:** Bridges concept and code better than any single book in 2026
- **ISBN-13:** 978-1098125974

### 4. *Machine Learning Yearning*, Andrew Ng (free, 2018)

A short (~118 pages), strategic-rather-than-mathematical book on how to *prioritize* ML work. Reads in 2–3 hours. The chapters on bias/variance, error analysis, and human-level performance are the practical complement to Module 1's vocabulary.

- **Read when:** Modules 1, 2, 6, 7
- **Why it's worth your time:** Andrew Ng's career-distilled advice on what *matters* in ML projects
- **Free PDF:** https://www.deeplearning.ai/machine-learning-yearning/

### 5. *Designing Machine Learning Systems*, Chip Huyen (O'Reilly, 2022)

The MLOps textbook. The chapters on feature stores, model monitoring, and the data flywheel directly support Module 2 and reinforce the Pinterest case study.

- **Read when:** Module 2; revisit during Capstone Project §3
- **Why it's worth your time:** Operational depth most AIF-C01 study guides skip
- **ISBN-13:** 978-1098107963

---

## 📰 Seminal papers and industry references (skim, don't memorize math)

### 6. "Attention Is All You Need", Vaswani et al. (NeurIPS 2017)

The Transformer paper. The architectural backbone of every LLM you'll touch (Claude, Nova, Titan, Llama, Mistral, Cohere). The first 3 pages are sufficient for AIF-C01 intuition.

- **Read when:** Module 3
- **Why:** It's *the* reference for any AI discussion past 2017
- **arXiv:** https://arxiv.org/abs/1706.03762

### 7. "Language Models are Few-Shot Learners", Brown et al. (NeurIPS 2020)

The GPT-3 paper. Introduces the language and framing of *foundation model* + *few-shot prompting* that Module 3 and Module 5 use.

- **Read when:** Module 3 (FM definition) or Module 5 (few-shot prompting)
- **Why:** Defines half the vocabulary on the exam
- **arXiv:** https://arxiv.org/abs/2005.14165

### 8. "Training Language Models to Follow Instructions with Human Feedback", Ouyang et al. (NeurIPS 2022)

The InstructGPT paper. Introduces RLHF as the standard chat-LLM alignment technique. Module 1's brief RLHF mention and Module 6's alignment vocabulary trace back here.

- **Read when:** Module 1 (RL section), Module 6 (alignment)
- **Why:** The reason ChatGPT works; the reason chat-LLMs feel different from raw GPT-3
- **arXiv:** https://arxiv.org/abs/2203.02155

### 9. "Constitutional AI: Harmlessness from AI Feedback", Bai et al. (Anthropic, 2022)

Anthropic's alternative alignment technique using an AI critic against a written constitution. The lineage behind Claude on Bedrock and why Anthropic's models are positioned the way they are.

- **Read when:** Module 4 (Bedrock providers) or Module 6 (alignment alternatives)
- **Why:** Differentiates Anthropic's approach in the marketplace
- **arXiv:** https://arxiv.org/abs/2212.08073

### 10. "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models", Wei et al. (NeurIPS 2022)

The CoT paper. Module 5's chain-of-thought technique is *this* paper.

- **Read when:** Module 5
- **Why:** Cited in every prompt-engineering discussion since
- **arXiv:** https://arxiv.org/abs/2201.11903

### 11. "ReAct: Synergizing Reasoning and Acting in Language Models", Yao et al. (ICLR 2023)

The ReAct paper. The architectural pattern behind Bedrock Agents (Module 5).

- **Read when:** Module 5
- **Why:** Names the reasoning + tool-use loop pattern verbatim
- **arXiv:** https://arxiv.org/abs/2210.03629

### 12. "BloombergGPT: A Large Language Model for Finance", Wu et al. (Bloomberg, 2023)

The case study from Module 6. The reference for "when is from-scratch domain training justified?" Read the abstract and the eval-results section.

- **Read when:** Module 6 (Case Study)
- **Why:** Canonical example of continued pre-training; the foil for "fine-tune a frontier FM instead"
- **arXiv:** https://arxiv.org/abs/2303.17564

### 13. AWS Responsible AI whitepaper + Bedrock Security & Privacy User Guide

AWS's official voice on Responsible AI patterns plus the Bedrock-specific security/privacy posture (no-train-on-customer-data, KMS, IAM, PrivateLink). Read these twice, the AIF-C01 exam treats these as canon.

- **Read when:** Module 7 and Module 8
- **Why:** The exam's "official answer" comes from these documents
- **Sources:** https://aws.amazon.com/ai/responsible-ai/ and https://docs.aws.amazon.com/bedrock/latest/userguide/security.html

### 14. NIST AI Risk Management Framework, NIST AI 100-1 (January 2023)

The US federal voluntary framework, named on the exam. The four functions (Govern, Map, Measure, Manage) anchor the Capstone Project's §4.

- **Read when:** Module 7; Capstone Project §4
- **Why:** Exam tests recognition of the framework name and its four functions
- **PDF:** https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf

### 15. EU AI Act, Regulation (EU) 2024/1689 (in force 1 August 2024)

The EU's risk-tiered AI regulation. The exam tests recognition of the tier names (unacceptable, high, limited, minimal). The Capstone Project §4 requires a defended position on whether the FNOL summarizer is "high-risk" under Annex III.

- **Read when:** Module 7; Capstone Project §4
- **Why:** The most-significant binding AI regulation as of 2026
- **EU summary:** https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai

---

## 🎙️ Industry resources (weekly during prep)

### 16. AWS Bedrock Blog + AWS Machine Learning Blog

Official AWS source for new model releases, Bedrock feature drops, and AWS Responsible-AI announcements. Subscribe via RSS or email.

- **Why:** Exam refresh cycles track AWS announcements
- **Source:** https://aws.amazon.com/blogs/machine-learning/

### 17. Andrej Karpathy, *Intro to LLMs* (1-hour YouTube talk) + *Neural Networks: Zero to Hero* (free YouTube series)

The single best free explainer of how LLMs actually work. Karpathy is a co-founder of OpenAI and former Tesla Director of AI. The 1-hour talk fits in Module 3 prep; the *Zero to Hero* series is a multi-week deeper dive.

- **Why:** Best free intuition for foundation-model mechanics
- **Source:** YouTube, search "Karpathy intro to LLMs" and "Karpathy Neural Networks Zero to Hero"

### 18. Sebastian Raschka, *Ahead of AI* substack

Weekly digests of important new ML papers, plus deep dives on specific architectures (LoRA, RLHF, DPO, mixture-of-experts). Written for technical practitioners; matches AIF-C01 depth.

- **Why:** Top-tier signal-to-noise for current ML developments
- **Source:** https://magazine.sebastianraschka.com/

### 19. Jack Clark, *Import AI* newsletter

A free weekly newsletter from one of Anthropic's co-founders. Mixes policy, technical, and industry coverage. The single best way to know what AI policy debate matters this week.

- **Why:** Anchor for Module 7's EU AI Act / NIST AI RMF discussions
- **Source:** https://importai.substack.com/

### 20. *AI Snake Oil*, Arvind Narayanan & Sayash Kapoor (Princeton, 2024)

Both a book and an ongoing substack. Strongly skeptical of AI hype; the necessary counterweight to vendor-fueled enthusiasm. Read at least the introduction.

- **Why:** Sharpens Module 1's "where AI hurts" discussion; critical for the Capstone Project's risk register
- **Book ISBN-13:** 978-0691249131
- **Substack:** https://www.aisnakeoil.com/

---

## 🎓 Free academic courses

### 21. Andrew Ng, *Machine Learning Specialization* on Coursera (Stanford / DeepLearning.AI)

The reboot of the classic Coursera ML course. ~3 months part-time. Audits are free. Covers Modules 1–2 of this course at deeper depth.

- **Use when:** Module 1 feels too compressed
- **Source:** https://www.coursera.org/specializations/machine-learning-introduction

### 22. Andrew Ng, *Deep Learning Specialization* + *Generative AI with LLMs* on Coursera

Two short specializations that map almost directly to Modules 3, 5, 6 of this course. ~6 weeks part-time. Audit free.

- **Use when:** Module 3 (Deep Learning Spec), Modules 5–6 (Generative AI with LLMs)
- **Source:** https://www.coursera.org/specializations/deep-learning and https://www.coursera.org/learn/generative-ai-with-llms

### 23. Stanford CS231n / CS224n / CS336

Stanford's free CS lecture series for computer vision (CS231n), NLP (CS224n), and large-scale ML systems (CS336). All recordings and slides are freely posted. Skim the first two lectures of each, the slide decks alone are exam-grade reference material.

- **Use when:** Anytime you want academic depth
- **Sources:** https://cs231n.stanford.edu/ , https://web.stanford.edu/class/cs224n/ , https://stanford-cs336.github.io/

### 24. Fast.ai, *Practical Deep Learning for Coders*

Jeremy Howard's free, code-first deep-learning course. ~20 hours of video. Practitioner orientation matches the AIF-C01 better than purely theoretical courses.

- **Use when:** Module 3 + Module 6, especially if Géron's book felt too dense
- **Source:** https://course.fast.ai/

### 25. DeepLearning.AI short courses (free, ~1 hr each)

A library of 1-hour applied courses with hands-on notebooks: *LangChain*, *RAG*, *Building Systems with the ChatGPT API*, *Pair Programming with a Large Language Model*, *Functions, Tools and Agents with LangChain*, *Quantization Fundamentals*, *Red Teaming LLM Applications*, *Quality and Safety for LLM Applications*. New ones drop monthly.

- **Use when:** Module 5 (RAG, prompt engineering), Module 7 (safety, red-teaming)
- **Source:** https://www.deeplearning.ai/short-courses/

---

## 🗂️ How to sequence this reading list with the course

| When you're studying… | Read / watch |
|------------------------|---------------|
| Module 1 | Géron Ch 1–4 (or audit Ng ML Spec); skim Goodfellow Ch 1; Karpathy *Intro to LLMs* |
| Module 2 | Géron Ch 2 (project lifecycle); Huyen Ch 1–4 (MLOps); revisit AWS Bedrock blog for SageMaker updates |
| Module 3 | Vaswani 2017 (skim 3 pages); Brown 2020 abstract; Karpathy 1-hour talk; DeepLearning.AI Generative AI with LLMs |
| Module 4 | AWS Bedrock User Guide (security, models-supported pages); Ng *AI for Everyone* if non-technical |
| Module 5 | Wei 2022 (CoT); Yao 2022 (ReAct); DeepLearning.AI short courses on RAG + Functions/Tools/Agents |
| Module 6 | Wu 2023 (BloombergGPT abstract + eval); Ouyang 2022 (InstructGPT); Raschka substack on LoRA/PEFT |
| Module 7 | AWS Responsible AI whitepaper; NIST AI RMF (read fully); EU AI Act EU summary page; *AI Snake Oil* intro |
| Module 8 | AWS Bedrock Security & Privacy User Guide; AWS Shared Responsibility Model page; *Import AI* recent issues on AI security |
| Capstone Project | Re-read all of the above, focused on what you cite in your deliverables |

---

## ⚠️ What to **not** spend time on

For the AIF-C01 specifically, *avoid*:

- Detailed math behind backpropagation, attention mechanics, or Transformer internals, the exam does not test these
- Implementation-level Python code, the exam is multiple choice / multiple response
- Pre-2023 generic "intro to AI" books, most are stale on the GenAI shift
- Anthropic / OpenAI / Cohere full developer docs, read AWS Bedrock's wrapping instead
- YouTube ad-supported "AWS exam dumps" channels, they violate AWS exam terms and are often factually wrong

---

➡️ Done with the reading list? Return to the [course README](./README.md), or jump to the [Capstone Project](./Capstone-Project.md).
