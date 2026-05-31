# 📋 Module 7 Cheat Sheet: Agent Builder & Conversational AI

> Agent Builder = umbrella. Conversational Agents = structured flows. Function calling = tools. ADK = multi-step + multi-agent.

---

## 🏛️ The Agent Builder Stack

| Component | What |
|-----------|------|
| **Conversational Agents** | Structured-flow conversational AI (formerly **Dialogflow CX**) |
| **Search Agents** | Pre-built RAG chat over Vertex AI Search |
| **Function Calling** | Gemini's native tool-use |
| **ADK** | Open-source SDK for multi-step + multi-agent |
| **Agent Garden** | Pre-built templates |
| **Tool Registry** | Central tool definitions |

---

## 💬 Conversational Agents Concepts

| Term | Meaning |
|------|---------|
| **Flow** | Top-level grouping per user goal |
| **Page** | State in a flow |
| **Intent** | What the user wants |
| **Slot / Parameter** | Typed data point (`cuisine: string`, `party_size: number`) |
| **Fulfillment** | Response or webhook execution |
| **Webhook** | Your HTTPS endpoint called by the agent |
| **Generative fallback** | LLM-synthesized reply when no intent matches |

---

## 🔧 Function Calling Pattern

```python
from vertexai.generative_models import FunctionDeclaration, Tool, GenerativeModel, ToolConfig

get_weather = FunctionDeclaration(
    name="get_weather",
    description="Get current weather.",
    parameters={"type":"object","properties":{"city":{"type":"string"}},"required":["city"]},
)

model = GenerativeModel("gemini-2.5-flash", tools=[Tool(function_declarations=[get_weather])])

# Force a function call:
config = ToolConfig(function_calling_config=ToolConfig.FunctionCallingConfig(
    mode=ToolConfig.FunctionCallingConfig.Mode.ANY,
    allowed_function_names=["get_weather"]
))

r = model.generate_content("Weather in Tokyo?", tool_config=config)
fn_call = r.candidates[0].content.parts[0].function_call
```

**Modes:** AUTO (default) · ANY (must call) · NONE (no calls)

---

## 🛠️ ADK Pattern

```python
from google.adk.agents import Agent
from google.adk.tools import Tool

@Tool
def search_db(q): return db.search(q)

agent = Agent(
    model="gemini-2.5-pro",
    tools=[search_db],
    instruction="..."
)

result = agent.run("help customer 1234")
```

**Multi-agent:**
```python
coord = Agent(model="gemini-2.5-pro", sub_agents=[researcher, writer, reviewer])
```

---

## 🧭 When to Pick Which

| Workload | Pick |
|----------|------|
| IVR / phone bot / booking flow | **Conversational Agents** |
| Open-ended assistant w/ tools | **Function calling** (or ADK) |
| Multi-step agentic loops | **ADK** |
| RAG chat over docs (fast) | **Search Agent** |
| Hybrid (deterministic + creative) | **Conversational Agents + function calling + Gemini** (Mercedes pattern) |

---

## 🚗 Mercedes MBUX Stack

```
Driver speech
   → Chirp ASR
   → Conversational Agent (intent + slots)
   → Function calls (location, search, rank, book)
   → Gemini synthesis
   → Chirp TTS
```

---

## 🍔 Wendy's FreshAI Stack

```
Audio → Chirp + Gemini Flash (speech-to-intent)
     → Conversational Agent (menu state machine)
     → Function calls (POS, allergens)
     → Vertex AI Search (menu/upsell grounding)
     → Chirp TTS
```

---

## 🛒 Shopify Sidekick Stack

```
Merchant query
   → Gemini Pro
   → ADK (multi-step)
   → Function calls (Shopify Admin API)
   → Vertex AI Search (help docs)
   → Conversational Agents for guided flows
```

---

## 🎯 Power Phrases

✅ Often **right**:
- "Conversational Agents = formerly Dialogflow CX"
- "Function calling = native Gemini tool use"
- "ADK = open-source agent SDK; multi-step + multi-agent"
- "Hybrid: Conversational Agents for state + Gemini for synthesis"
- "Parallel function calling: multiple tools in one turn"
- "Force a tool with `tool_config` mode=ANY"
- "Webhooks are your fulfillment endpoints"
- "60-tool surface → reduce or split via hierarchical agents"

❌ Often **wrong**:
- "Conversational Agents = Dialogflow ES" (it's CX-derived)
- "Function calling = JSON mode" (different)
- "ADK is closed-source" (it's open)
- "ADK only works on Vertex AI" (works on Gemini API too)
- "Always use one big Pro agent" (multi-agent on Flash often wins)

---

## 🆚 Cross-Cloud

| | Google | Microsoft | AWS |
|---|--------|-----------|------|
| Product | Agent Builder | Copilot Studio | Bedrock Agents |
| LLM | Gemini | Azure OpenAI | Multi-vendor (Claude, Llama, …) |
| RAG | Vertex AI Search | SharePoint/Dataverse | Knowledge Bases |
| Strengths | Multi-modal, multi-channel, scale | M365 integration | Multi-model choice |

---

## ✏️ Quick Self-Check

1. Conversational Agents vs ADK — when each? ___
2. Function calling vs JSON mode? ___
3. Three components of Mercedes MBUX flow? ___
4. Three FunctionCallingConfig modes? ___
5. Multi-agent benefits over one giant agent? ___

If all 5 in <90s, you own this module. ✅

---

➡️ [Module 8: Responsible AI on Google Cloud](../Module-08-Responsible-AI-Google/Reading.md)
