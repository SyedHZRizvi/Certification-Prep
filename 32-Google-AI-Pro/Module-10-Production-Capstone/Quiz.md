# ✏️ Module 10 Quiz: Production Patterns & Capstone

> Aim for 21/25.

---

## Questions

### Q1. The MAIN architectural difference that helped Wendy's FreshAI succeed where McDonald's/IBM drive-thru struggled: *(Analyze)*
A. Wendy's hired more engineers
B. Native audio understanding (one model handles speech-to-intent) + Conversational Agents for deterministic order state + grounding against menu
C. Cheaper hardware
D. Required by health regulators

---

### Q2. Mercedes MBUX uses Gemini Nano on-device for: *(Apply)*
A. Full conversation handling
B. Wake-word detection + lightweight intent (privacy + no-network)
C. Voice synthesis
D. Engine management

---

### Q3. Shopify Sidekick's architecture relies on which Vertex AI sub-products: *(Apply)*
A. Just Gemini
B. Gemini Pro + ADK (multi-step) + function calling (Shopify Admin API) + Vertex AI Search (help docs) + Conversational Agents (guided flows) + context caching
C. AWS only
D. Self-host

---

### Q4. Google Photos with Gemini processes photos via: *(Understand)*
A. LLM call per search query (expensive)
B. Batch-index with Gemini at upload time → vector + keyword index → ANN query at search time
C. Manual tagging only
D. Static metadata only

---

### Q5. Verily's Med-PaLM 2 clinical deployment REQUIRES (not optional): *(Apply)*
A. Vertex AI in HIPAA-eligible region + signed BAA + CMEK + VPC-SC + clinician-in-the-loop + grounding + audit logs
B. Just an API key
C. Self-host
D. ChatGPT Plus

---

### Q6. The MOST IMPACTFUL cost-optimization lever for a sustained 10K-RPM Gemini Pro workload: *(Apply)*
A. Streaming
B. Provisioned Throughput (GSCUs) — replaces variable PAYG with reserved capacity at 2-4× savings
C. Disable safety_settings
D. Switch cloud providers

---

### Q7. Stacking cost-optimization levers (Batch + Flash Lite + caching) can deliver: *(Analyze)*
A. ~5% savings
B. 10-100× savings vs Pro PAYG baseline on appropriate workloads
C. No savings
D. Always 50%

---

### Q8. The MAIN reason multi-agent on Flash often beats one big Pro agent: *(Analyze)*
A. Multi-agent is faster only
B. Specialist sub-agents on cheap tiers + clearer traces + easier debugging + better quality on narrow sub-tasks
C. Required by cost regulators
D. None

---

### Q9. A bank wants Gemini-powered claims processing for medical records. The MINIMUM region + service stack: *(Apply)*
A. Google AI Studio
B. Vertex AI in HIPAA-eligible US region + signed BAA + CMEK + VPC-SC + audit logs + clinician/adjuster human-in-the-loop
C. Self-hosted Gemini
D. Consumer Gemini app

---

### Q10. Why Vertex AI Search is the default RAG choice in most production architectures: *(Analyze)*
A. Cheapest
B. Managed end-to-end (chunking + embedding + index + retrieval + reranking + grounding); reduces engineering burden vs DIY
C. Mandatory
D. Only option

---

### Q11. Cross-cloud: a multi-modal video-understanding workload is BEST suited to: *(Apply)*
A. AWS Bedrock (limited multi-modal native)
B. Vertex AI with Gemini (native video + audio + image trained jointly)
C. Azure OpenAI (text-mostly)
D. Self-host

---

### Q12. Cross-cloud: a workload requiring Claude's specific reasoning + AWS-only data residency would pick: *(Apply)*
A. Vertex AI
B. AWS Bedrock with Claude
C. Both
D. Neither

---

### Q13. Provisioned Throughput on Vertex AI charges: *(Remember)*
A. Per-token
B. Per-GSCU per month (fixed); overflow falls back to PAYG
C. Per-minute compute
D. Free

---

### Q14. To handle traffic peaks above provisioned capacity on Vertex AI Gemini: *(Apply)*
A. Drop requests
B. Excess traffic falls back to PAYG (overflow); plan capacity for steady-state with PAYG headroom
C. Switch to Claude
D. Not possible

---

### Q15. The 18-item production security checklist top item is: *(Remember)*
A. Use the cheapest tier
B. IAM least privilege on service accounts
C. Disable Cloud Logging
D. Make everything public

---

### Q16. The CORRECT response to "AI Studio API key in our React app" in a security review: *(Apply)*
A. Approve
B. Reject — move calls server-side; API key in Secret Manager; frontend calls backend; backend calls Gemini
C. Use a shorter key
D. Base64-encode it

---

### Q17. A team's Gemini cost is 5× higher than projected; investigation shows context caching not enabled despite 30K-token stable prompt prefix. CORRECT fix: *(Apply)*
A. Switch to Flash
B. Enable explicit context caching (~75% off cached prefix); validate prefix is byte-identical
C. Add more workers
D. Disable monitoring

---

### Q18. For an EU bank with GDPR + DORA compliance, the MINIMUM responsible-AI stack: *(Apply)*
A. AI Studio with API key
B. Vertex AI in EU region + signed DPA + CMEK + VPC-SC + audit logs + opt-out + safety_settings + grounding + monitoring + kill switch
C. Self-host
D. None

---

### Q19. The MAIN risk if your responsible-AI deployment lacks a human-in-the-loop for high-stakes decisions: *(Analyze)*
A. Higher cost
B. Model errors propagate unchecked to consequential outcomes (legal, medical, financial liability)
C. Slower response
D. Cosmetic only

---

### Q20. The CORRECT order of operations when a Model Monitoring alert fires on production drift: *(Apply)*
A. Ignore until next quarter
B. Alert oncall → investigate → if confirmed drift, trigger retrain pipeline OR rollback to prior model version → document
C. Disable monitoring
D. Restart endpoint

---

### Q21. A claims-processing AI escalates ambiguous cases to a human adjuster. The metric to track is: *(Apply)*
A. Total cost
B. Deflection rate (% handled by AI without escalation) + accuracy of AI-handled cases
C. Latency only
D. CPU usage

---

### Q22. The MOST IMPORTANT lesson from the Wendy's vs McDonald's comparison: *(Analyze)*
A. Brand matters
B. Architecture matters more than model choice — same model with different architecture would have different outcomes
C. Pricing differences
D. None

---

### Q23. A capstone architecture for any production GenAI workload should include AT MINIMUM: *(Apply)*
A. Just the LLM
B. Tier-appropriate model + grounding for facts + safety controls + audit logging + monitoring + human-in-loop for high-stakes + cost optimization + kill switch
C. Just RAG
D. Self-host

---

### Q24. Which is FALSE? *(Evaluate)*
A. Vertex AI Search is managed RAG
B. Multi-agent on Flash can outperform one Pro generalist
C. Provisioned Throughput is always cheaper than PAYG
D. Native multi-modal collapses old multi-pipeline architectures

---

### Q25. Design challenge: A US fintech wants Gemini-powered investment-research summarization for advisors. SEC compliance required (Reg BI, books-and-records). Multi-modal input (PDFs of 10-Ks + analyst PDFs + market-data CSVs). 100K queries/day. The MINIMUM architecture: *(Create)*
A. Just AI Studio
B. Vertex AI in `us-central1` + Gemini 2.5 Pro + Vertex AI Search grounding over SEC filings + EDGAR data + analyst docs + context caching on stable corpus + structured-output schema (summary + cited sources) + Conversational Agents for guided flows + ADK for multi-step research + CMEK + VPC-SC + Cloud Audit Logs (7-yr retention for SEC) + advisor-in-the-loop sign-off + SynthID + safety_settings + cost monitoring + Provisioned Throughput at scale
C. Self-host
D. ChatGPT

---

## 🎯 Answers + Explanations

### Q1: **B. Native audio + Conversational Agents + grounding**
### Q2: **B. Wake-word + lightweight intent on-device**
### Q3: **B. Gemini Pro + ADK + function calling + Vertex AI Search + Conversational Agents + caching**
### Q4: **B. Batch-index at upload; ANN query at search**
### Q5: **A. Full HIPAA stack + clinician-in-the-loop**
### Q6: **B. Provisioned Throughput**
### Q7: **B. 10-100× savings stacked**
### Q8: **B. Specialist sub-agents + traces + debugging**
### Q9: **B. Vertex AI HIPAA stack + human-in-loop**
### Q10: **B. Managed end-to-end**
### Q11: **B. Vertex AI with Gemini (native video + audio)**
### Q12: **B. AWS Bedrock with Claude**
### Q13: **B. Per-GSCU/month + PAYG overflow**
### Q14: **B. PAYG overflow**
### Q15: **B. IAM least privilege**
### Q16: **B. Move server-side + Secret Manager**
### Q17: **B. Enable explicit context caching**
### Q18: **B. Full Vertex AI EU stack**
### Q19: **B. Errors propagate unchecked to consequential outcomes**
### Q20: **B. Alert → investigate → retrain or rollback → document**
### Q21: **B. Deflection rate + accuracy**
### Q22: **B. Architecture matters more than model choice**
### Q23: **B. The full production stack**
### Q24: **C. Provisioned Throughput is always cheaper — FALSE**
Below ~1K RPM, PAYG wins.
### Q25: **B. The full Vertex AI fintech stack**

---

## 📊 Score Yourself

- 24–25/25 → 🏆 Module 10 + course mastered.
- 21–23/25 → ✅ Pass-ready.
- <21/25 → Re-read the case studies + capstone.

---

## 🎓 Course Complete — Your Next Steps

1. ✏️ Take all three Practice Exams in order
2. 🃏 Drill the Master [Flashcards](../Flashcards.md) daily
3. 🎯 Schedule **Google Cloud Generative AI Leader** ($99 USD)
4. 🎯 (Later) Schedule **Google Cloud Professional Machine Learning Engineer** ($200 USD)
5. 🌟 Return to [Course README](../README.md) to share your win

You got this. 🟦

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md)
