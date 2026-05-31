# ✏️ Module 7 Quiz: Agent Builder & Conversational AI

> Aim for 21/25.

---

## Questions

### Q1. Vertex AI Agent Builder is: *(Remember)*
A. A single product
B. An umbrella over Conversational Agents, Search Agents, Function Calling, ADK, Agent Garden
C. The same as Google AI Studio
D. Only for voice

---

### Q2. Conversational Agents was previously known as: *(Remember)*
A. Dialogflow ES
B. Dialogflow CX
C. Bard
D. PaLM Chat

---

### Q3. The core abstractions in Conversational Agents are: *(Remember)*
A. Models, prompts, embeddings
B. Flows, Pages, Intents, Slots/Parameters, Fulfillments
C. CPU, memory, disk
D. Pods, deployments, services

---

### Q4. Function calling on Gemini lets you: *(Understand)*
A. Force the model to never call tools
B. Declare tools as JSON Schema; the model emits structured function-call requests; your code executes them
C. Modify model weights
D. Translate languages

---

### Q5. To FORCE Gemini to call a specific function (no free-text response): *(Apply)*
A. Lower temperature
B. `tool_config` with `mode=ANY` and `allowed_function_names=["X"]`
C. Add "Please call X" in user message
D. Not possible

---

### Q6. ADK stands for: *(Remember)*
A. Agent Development Kit
B. Application Delivery Kernel
C. AI Database Kit
D. Authentication Daemon Kit

---

### Q7. Multi-agent orchestration patterns include: *(Remember)*
A. Sequential, hierarchical, parallel, workflow (declarative DAG)
B. Only sequential
C. Random
D. None — agents must be solo

---

### Q8. A coordinator agent in ADK: *(Understand)*
A. Replaces all sub-agents
B. Top-level agent that decomposes a complex task and delegates to specialist sub-agents
C. Runs only on the GPU
D. Is the same as Conversational Agents

---

### Q9. The MOST appropriate choice for a bank's IVR voice bot handling 1M calls/month with strict slot collection (account#, DOB, request type): *(Apply)*
A. Pure Gemini with function calling
B. Conversational Agents (structured flows + slot-filling + telephony channel)
C. ADK
D. Search Agent

---

### Q10. The MOST appropriate choice for an open-ended research assistant that searches the web, summarizes papers, and drafts reports: *(Apply)*
A. Conversational Agents (too rigid)
B. ADK with multi-agent (researcher + summarizer + writer)
C. Search Agent only
D. Fine-tuning

---

### Q11. Mercedes MBUX's voice assistant architecture uses: *(Analyze)*
A. Only Gemini
B. Conversational Agents (state) + function calling (vehicle/cloud APIs) + Gemini (synthesis) + Chirp (ASR + TTS)
C. Only Conversational Agents
D. Only OpenAI

---

### Q12. Parallel function calling means: *(Remember)*
A. Calling the same function twice
B. Gemini emitting multiple function calls in one turn (e.g., get_weather + get_flights)
C. Function calls across servers
D. Not supported

---

### Q13. Webhooks in Conversational Agents: *(Understand)*
A. Are deprecated
B. HTTPS endpoints you host; called when a page needs fulfillment (execute code, return updated state)
C. Internal-only
D. Same as fine-tuning

---

### Q14. Generative fallback in Conversational Agents: *(Understand)*
A. Always disabled
B. When no intent matches, Gemini synthesizes a context-appropriate reply (often grounded against a data store)
C. Static "I don't understand" only
D. Calls a competitor model

---

### Q15. The MAIN reason Wendy's FreshAI uses Conversational Agents (not just Gemini): *(Analyze)*
A. Cheaper
B. Deterministic state machine for menu/order flow + structured slot-filling + Gemini for disambiguation; mixes deterministic + creative
C. Required by health regulations
D. To deprecate OpenAI

---

### Q16. To regression-test a Conversational Agent: *(Apply)*
A. Manual spot-checks
B. Test sets (recorded conversations) + simulator + Vertex AI Evaluation (LLM-as-judge) + end-to-end metrics
C. Hope for the best
D. Not possible

---

### Q17. Function calling differs from JSON mode in that: *(Understand)*
A. Same thing
B. Function calling triggers a structured request to a declared tool (then you execute it); JSON mode just constrains output format
C. JSON mode is faster
D. Function calling is deprecated

---

### Q18. ADK is: *(Remember)*
A. Closed-source, Vertex-only
B. Open-source SDK that works with Gemini API and Vertex AI both
C. A proprietary database
D. Same as Conversational Agents

---

### Q19. Shopify Sidekick's architecture: *(Analyze)*
A. Pure fine-tuned model
B. Gemini Pro + ADK (multi-step) + function calling (Shopify Admin API) + Vertex AI Search (help docs) + Conversational Agents for guided flows
C. Conversational Agents only
D. Self-hosted

---

### Q20. A team has a 60-tool surface and Gemini is frequently picking wrong tools. The MOST LIKELY fix: *(Apply)*
A. Switch to Pro
B. Reduce tool count to 8-12 well-scoped tools, or split into hierarchical sub-agents (multi-agent), and ensure clean tool descriptions
C. Increase temperature
D. Disable safety_settings

---

### Q21. Comparing platforms: a Google Workspace customer wants a sales-CRM assistant integrated with Calendar + Drive + Gmail. The MOST natural choice: *(Apply)*
A. Microsoft Copilot Studio (Microsoft 365 only)
B. Vertex AI Agent Builder (native Workspace integration; Conversational Agents + ADK + multi-modal)
C. AWS Bedrock Agents (no Workspace integration)
D. Self-host LLaMA

---

### Q22. Dialogflow ES vs Conversational Agents: *(Understand)*
A. Same product
B. Dialogflow ES is the older sibling; Conversational Agents (formerly Dialogflow CX) is the newer flow-based platform; both still exist
C. Conversational Agents replaced Dialogflow ES
D. Neither exists

---

### Q23. The MAIN benefit of multi-agent vs one giant agent: *(Analyze)*
A. Faster only
B. Specialist sub-agents on cheap tiers (Flash) often outperform one Pro generalist, with clearer traces + easier maintenance
C. Cheaper API calls always
D. None

---

### Q24. Which is FALSE? *(Evaluate)*
A. Conversational Agents supports generative fallback
B. ADK can build multi-agent systems
C. Function calling is built into Gemini SDK
D. Conversational Agents requires Pro for any generative response

---

### Q25. Design challenge: A pizza chain wants a voice + text drive-thru ordering bot, EU residency, integrates with the chain's POS, handles allergens, and gracefully escalates to humans. MINIMUM viable architecture: *(Create)*
A. Pure Gemini Flash
B. Vertex AI in EU region: Chirp ASR/TTS + Conversational Agents (order flow, allergen slots, escalation page) + function calling (POS API) + Vertex AI Search (allergen grounding) + Gemini Flash for upsell synthesis + observability (Cloud Logging) + CMEK + VPC-SC
C. Self-host an open-source agent framework
D. ChatGPT Plus

---

## 🎯 Answers + Explanations

### Q1: **B. Umbrella over multiple products**
### Q2: **B. Dialogflow CX → Conversational Agents**
### Q3: **B. Flows, Pages, Intents, Slots, Fulfillments**
### Q4: **B. Declare tools, model emits structured call, you execute**
### Q5: **B. `tool_config` with `mode=ANY` + allowed_function_names**
### Q6: **A. Agent Development Kit**
### Q7: **A. Sequential, hierarchical, parallel, workflow**
### Q8: **B. Decomposes + delegates to sub-agents**
### Q9: **B. Conversational Agents**
### Q10: **B. ADK with multi-agent**
### Q11: **B. Conversational Agents + function calling + Gemini + Chirp**
### Q12: **B. Multiple function calls in one turn**
### Q13: **B. HTTPS endpoints called on fulfillment**
### Q14: **B. Gemini synthesizes when no intent matches**
### Q15: **B. Deterministic state machine + Gemini for disambiguation**
### Q16: **B. Test sets + simulator + Eval + end-to-end metrics**
### Q17: **B. Function calling triggers tool call; JSON mode constrains output format**
### Q18: **B. Open-source, works with both Gemini API and Vertex AI**
### Q19: **B. Gemini Pro + ADK + function calling + Vertex AI Search + Conversational Agents**
### Q20: **B. Reduce to 8-12 well-scoped tools OR split via multi-agent**
### Q21: **B. Vertex AI Agent Builder (Workspace integration)**
### Q22: **B. Both still exist; CX/Conversational Agents is newer**
### Q23: **B. Specialist sub-agents on cheap tiers + clearer traces**
### Q24: **D. Conversational Agents requires Pro for any generative response — FALSE**
Flash works for generative fallback in most cases.
### Q25: **B. Full stack: Chirp + Conversational Agents + function calling + Vertex Search + Gemini + observability + security**

---

## 📊 Score Yourself

- 24–25/25 → 🏆 Module 7 mastered.
- 21–23/25 → ✅ Solid.
- <21/25 → Re-read the Conversational Agents vs ADK distinction.

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 8 — Responsible AI on Google Cloud](../Module-08-Responsible-AI-Google/Reading.md)
