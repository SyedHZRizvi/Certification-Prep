# Recommended Readings, Azure AI Apps and Agents Developer (AI-103)

> This is the *outside-the-cert-book* reading list. The official AI-103 study guide and Microsoft Learn paths teach you the exam. These materials teach you the discipline, the technical foundations, the regulatory shape, and the production reality that the exam can only test in a limited way. Pair this list with the modules; don't substitute.

---

## 📚 Canonical textbooks

### 1. Official AI-103 study guide + Azure AI Foundry documentation (Microsoft Learn)
The authoritative, free reference for *Developing AI Apps and Agents on Azure*. Start with the [AI-103 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-103) for the skill outline, then work through the [Azure AI Foundry documentation](https://learn.microsoft.com/en-us/azure/ai-foundry/) (generative AI apps, single- and multi-agent orchestration, evaluation, observability). Maps section-by-section to the blueprint. **When to engage:** read alongside Modules 1–8; use it for blueprint-section coverage you may have skimmed here.

### 2. *Hands-On Machine Learning with Azure* Thomas K. Abraham, Parashar Shah, Jen Stirrup, Lauri Lehman, Anindita Basak (Packt, 2019; ISBN 978-1-78913-195-6)
Practical, code-first walkthrough of Azure ML and its overlap with the AI-services + Foundry surface. **When to engage:** before the Capstone, gives the hands-on muscle memory for resource provisioning and eval workflows.

### 3. *Deep Learning*, Ian Goodfellow, Yoshua Bengio, Aaron Courville (MIT Press, 2016; ISBN 978-0-262-03561-3; free at deeplearningbook.org)
The canonical deep-learning textbook. Pre-transformer-era, but every chapter on optimization, regularization, and CNNs/RNNs is still required reading. **When to engage:** Module 3 (vision) and Module 7 (model anatomy), read chapters 1, 5, 6, 9 for AI-103 purposes.

### 4. *Designing Data-Intensive Applications*, Martin Kleppmann (O'Reilly, 2017; ISBN 978-1-449-37332-0)
Not AI-specific, but the chapters on distributed systems, replication, consistency, and indexes are the implicit context every Azure AI engineer needs when reasoning about Azure AI Search, Cosmos DB, and durability of agent state. **When to engage:** Module 5 (knowledge mining) and Module 8 (production GenAI apps).

### 5. *Practical Natural Language Processing*, Sowmya Vajjala et al. (O'Reilly, 2020; ISBN 978-1-492-05405-4)
Industry-flavored NLP, covers the same problems Azure AI Language solves, with the engineering trade-offs articulated. **When to engage:** Module 4 (NLP); supplement to Microsoft Learn's narrower service-level material.

---

## 📰 Seminal papers (read these in this order)

### 1. Vaswani et al. (2017). *"Attention Is All You Need."* NeurIPS 2017. [arxiv.org/abs/1706.03762](https://arxiv.org/abs/1706.03762)
The transformer paper. Every model in Modules 3–8 descends from it. **Why it matters:** if you cannot explain attention in your own words you cannot pass a senior ML-engineer architecture interview, however well you do on AI-103.

### 2. Devlin et al. (2018). *"BERT: Pre-training of Deep Bidirectional Transformers."* NAACL 2019.
The encoder-only lineage that powers many of Azure AI Language's classification and NER models. **Why it matters:** explains why "Language understanding" works differently from "language generation."

### 3. Brown et al. (2020). *"Language Models are Few-Shot Learners."* NeurIPS 2020 (GPT-3 paper).
In-context learning + few-shot prompting are products of this paper. **Why it matters:** every prompt-engineering pattern in Module 7 derives from the empirical claims here.

### 4. Wei et al. (2022). *"Chain-of-Thought Prompting Elicits Reasoning."* NeurIPS 2022.
**Why it matters:** Module 8's ReAct and Plan-and-Execute patterns build on Chain-of-Thought.

### 5. Yao et al. (2023). *"ReAct: Synergizing Reasoning and Acting in Language Models."* ICLR 2023.
**Why it matters:** the canonical reference for agent reasoning loops, exactly what Foundry's Agent Service codifies.

### 6. Bai et al. (Anthropic, 2022). *"Constitutional AI: Harmlessness from AI Feedback."*
**Why it matters:** alternative-alignment view to Microsoft's Responsible AI Standard, useful for understanding the *space* of safety approaches, not just Microsoft's.

### 7. Microsoft (June 2022). *Responsible AI Standard v2.* [microsoft.com/en-us/ai/principles-and-approach](https://www.microsoft.com/en-us/ai/principles-and-approach)
**Why it matters:** the corporate standard the AI-103 RAI questions test against. Read it once cover-to-cover; you'll recognize every Module 2 concept.

### 8. NIST (January 2023). *AI Risk Management Framework, AI RMF 1.0.* [nist.gov/itl/ai-risk-management-framework](https://www.nist.gov/itl/ai-risk-management-framework)
**Why it matters:** the US-federal alignment Azure customers in regulated industries map to. Pair with Module 2.

### 9. European Parliament & Council (June 2024). *Regulation (EU) 2024/1689, the EU AI Act.* [eur-lex.europa.eu](https://eur-lex.europa.eu/)
**Why it matters:** the law that will shape AI engineering globally through 2027. The risk-tier framework + foundation-model obligations are exam-adjacent in 2026 and will be on the exam by 2027.

### 10. HBR / MIT Sloan / McKinsey 2023–2024 GenAI articles (selection)
*Harvard Business Review*'s 2023 issue on *Generative AI*; *MIT Sloan Management Review*'s ongoing coverage of GenAI in marketing, ops, and ethics; McKinsey's *State of AI* annual report. **Why it matters:** the business-context layer the exam cannot test directly but every senior practitioner needs.

---

## 🏭 Industry resources (subscribe / bookmark)

### 1. Microsoft AI blog, [blogs.microsoft.com/ai](https://blogs.microsoft.com/ai)
Authoritative announcement source. Read every Microsoft Build / Ignite keynote. **When to engage:** continuously.

### 2. Azure OpenAI service updates, [techcommunity.microsoft.com](https://techcommunity.microsoft.com/) (Azure OpenAI hub)
Tracks model availability per region, new SDK releases, content-filter changes. **When to engage:** monthly, the surface changes monthly.

### 3. Sarah Bird (Microsoft Responsible AI), talks at RSA Conference and Microsoft Build (search YouTube for the latest)
The 4-layer mitigation framework articulation, RAI Dashboard demos, evolving threat-modeling for GenAI. **When to engage:** before tackling Module 2 in earnest.

### 4. Microsoft Mechanics, [youtube.com/@MicrosoftMechanics](https://www.youtube.com/@MicrosoftMechanics)
Deep dive episodes on Azure AI Foundry, Agent Service, Document Intelligence, Azure OpenAI features. Often hosted by product-group leaders. **When to engage:** alongside every module.

### 5. Simon Willison's TIL blog, [simonwillison.net](https://simonwillison.net/)
Pragmatic, daily-updated writing on LLM engineering across providers (including Azure OpenAI). **When to engage:** for the practitioner's eye on what works and what doesn't beyond Microsoft's docs.

---

## 🎓 Free academic courses

### 1. Microsoft Learn, AI-103 learning path: [learn.microsoft.com/en-us/credentials/certifications/azure-ai-apps-agents-developer/](https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-apps-agents-developer/)
Free, hands-on labs included; covers generative AI apps, agents, and multi-agent orchestration on Azure AI Foundry alongside the vision/language/document modules. **When to engage:** in parallel with each module here; the labs cement the SDK calls.

### 2. Stanford CS224n *Natural Language Processing with Deep Learning* (Chris Manning) free lectures + materials on YouTube and Stanford's CS website
The graduate-level NLP curriculum. **When to engage:** if you want to understand *why* the NLP services work the way they do; pair with Module 4. (Free lectures on Stanford Online + YouTube.)

### 3. Andrej Karpathy, *Neural Networks: Zero to Hero* (YouTube)
Karpathy's free YouTube series builds GPT-style models from scratch. **When to engage:** before tackling Modules 7–8 if you want intuition for what's happening under `chat.completions.create(...)`.

### 4. Microsoft Reactor, live coding events
Free, live walkthroughs of Azure AI scenarios. **When to engage:** monthly; great for staying current.

### 5. Coursera, *Microsoft Azure AI Fundamentals* (AI-900 path; free to audit)
Lower-level than AI-103, but useful prereq fill-in for anyone shaky on Azure ML, vision, or NLP fundamentals. **When to engage:** before Module 1 if Azure-AI vocabulary is new.

---

## 🗓️ When to read what, a 6-week reading map

| Week | Course module | Outside reading |
|---|---|---|
| 1 | Module 1 (AI Services) | AI-103 study guide (skill outline); Microsoft Learn AI-103 path Unit 1; Microsoft AI blog (back 30 days) |
| 2 | Module 2 (Responsible AI) | Microsoft RAI Standard v2 (cover-to-cover); NIST AI RMF 1.0; Sarah Bird Build 2024 talk |
| 3 | Module 3 (Vision) | Vaswani et al. (2017); *Deep Learning* Ch. 9 (CNNs); Microsoft Mechanics on Vision 4.0 |
| 4 | Module 4 (NLP) | Devlin et al. (2018); Vajjala et al. NLP textbook Ch. 1–3, 8 |
| 5 | Module 5 (Doc Intelligence + AI Search) | Kleppmann *DDIA* Ch. 3 (storage + retrieval); Microsoft Mechanics on hybrid + semantic |
| 5 | Module 6 (Conversational AI) | Microsoft Security Copilot deep dives; Bot Framework SDK docs |
| 6 | Module 7 (Azure OpenAI) | Brown et al. (2020); Bai et al. (Constitutional AI); Wei et al. (CoT); EU AI Act Articles 3, 5, 50–55 |
| 6 | Module 8 (Build GenAI) | Yao et al. (ReAct); Microsoft Mechanics on Foundry + Agent Service; Karpathy *Zero to Hero* parts 1–4 |

**During the Capstone:** revisit the RAI Standard v2 + NIST AI RMF in detail; use the EU AI Act as a check against your security-review write-up.

---

## 💬 How to use this list

1. **Don't try to read it all before the exam.** That's not how Cornell or Harvard syllabi work either, they're scaffolds you return to.
2. **Read one paper a week during the course.** By the end you'll have the foundation.
3. **Quote a named reference in every Capstone deliverable.** Every architecture choice should cite at least one of these sources.
4. **Build your own annotated reading list.** As the field moves, this list will too, keep your own version of it.

---

➡️ Return to [course README](./README.md) | [Capstone Project](./Capstone-Project.md)
