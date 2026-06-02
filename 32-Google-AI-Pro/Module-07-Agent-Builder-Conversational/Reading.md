# Module 7: Agent Builder & Conversational AI 🤖

> **Why this module matters:** Agentic AI is the highest-value pattern of 2025–2026, and Google's agent stack has its own vocabulary — **Vertex AI Agent Builder** (the umbrella), **Conversational Agents** (formerly Dialogflow CX, the structured-flow conversational AI product), **function calling** (Gemini's native tool-use mechanism), **ADK** (the Agent Development Kit, Google's open-source agent SDK), **multi-agent orchestration** (the latest pattern). The exam tests every one of these distinctions. This module deconstructs the stack and the architectural choices each enables.

> **Prerequisites for this module.** Modules 1–6 finished. A Vertex AI project; Conversational Agents and Agent Builder console access. Familiarity with the concept of tool-using LLMs (the LLM decides "I should call function X with argument Y," your code executes X(Y), the result goes back to the LLM, the LLM uses it).

---

## 📖 A Story: Mercedes-Benz Picks Gemini, Builds On Agent Builder

It is CES 2024. Mercedes-Benz announces that its next-generation **MBUX** (Mercedes-Benz User Experience) in-car voice assistant will run on Google Cloud Vertex AI, with Gemini as the LLM and Vertex AI Agent Builder as the orchestration layer. By 2026, this assistant ships in the new E-Class, S-Class, and EQS lines. A driver says: *"I'm getting hungry, find me a kosher restaurant within 15 minutes of here that's still open and book a table for 7pm."* The car responds with three options, the driver picks one by voice, and the booking happens. Behind the simple exchange, eleven Vertex AI Agent Builder components fire in 1.4 seconds.

```
Driver speech
   ↓
[Chirp ASR: speech → text]
   ↓
[Conversational Agent: intent = "find_restaurant" + slot extraction
  (cuisine: kosher, time: now, duration: 15min, party_size: ??)]
   ↓
[Slot-filling: "How many people?"  ← agent asks if missing]
   ↓
[Function call: get_current_location() → GPS coords]
   ↓
[Function call: search_restaurants(cuisine="kosher", lat=X, lng=Y, max_drive_min=15, open_now=true)]
   ↓
[Function call: rank_restaurants(results, user_preferences)]
   ↓
[Gemini synthesizes top-3 with brief descriptions]
   ↓
[Chirp TTS: response → speech]
   ↓
Driver picks "the second one"
   ↓
[Function call: book_table(restaurant_id, party=4, time="19:00")]
   ↓
[Confirmation TTS]
```

Eight function calls, one Conversational Agent (intent/slot/flow management), one Gemini (synthesis), two Chirp endpoints (ASR + TTS). All built on Vertex AI Agent Builder with no custom orchestration code beyond declaring the tools.

The interesting architectural choice: Mercedes did NOT have Gemini decide *the whole flow*. They use **Conversational Agents** (structured flows + slot-filling + state machine) for the *deterministic* parts (orientation, intent detection, slot-filling, booking confirmation) and **Gemini with function calling** for the *creative* parts (natural-sounding summaries, handling ambiguous user phrasings). That hybrid is the Google-recommended pattern for production conversational agents. The exam tests whether you understand *when to use each*.

---

## 🏛️ The Agent Builder Umbrella

**Vertex AI Agent Builder** is an umbrella under Vertex AI for building conversational and agentic systems. It includes:

| Component | What it does |
|-----------|--------------|
| **Conversational Agents** | Structured-flow conversational AI (formerly Dialogflow CX). State machine, intents, slots, flows, fulfillments. The deterministic backbone. |
| **Search Agents** | Pre-built RAG agents that wrap Vertex AI Search as a chat interface |
| **Function calling** | Gemini's native ability to call tools you define (single-turn) |
| **ADK (Agent Development Kit)** | Google's open-source SDK for building multi-step agentic systems with Gemini + tools |
| **Agent Garden** | Catalog of pre-built agent templates |
| **Tool Registry** | Centralized definitions of functions/APIs your agents can call |

---

## 💬 Conversational Agents (formerly Dialogflow CX)

**Conversational Agents** is Google's product for *structured* conversational AI. The core abstraction is the **Flow** — a state machine where:

- **Intent** = what the user wants ("find_restaurant", "book_appointment")
- **Slot / Parameter** = a piece of information you need to collect (`cuisine`, `time`, `party_size`)
- **Page** = a state in the flow where the agent prompts for missing slots or executes an action
- **Fulfillment** = the response or function call that satisfies the user

### When to pick Conversational Agents

- **Goal-driven, finite-state conversations** — booking, ordering, IVR-like flows, customer-service triage
- **Strict compliance** — regulated industries that need auditable conversation paths
- **Multi-language consistency** — out-of-the-box NLU in 40+ languages
- **Channels** — telephony (Google Cloud Phone Gateway), web chat, messaging (WhatsApp, FB Messenger), in-car
- **High-volume** — built for tens of millions of conversations per day

### When NOT to pick Conversational Agents

- **Open-ended chat** — Gemini with function calling is cleaner
- **Agentic, multi-step research tasks** — ADK or function calling
- **A pure RAG bot** — Search Agent or grounding tool

### Example flow

```
Flow: "find_restaurant"
  Page "Welcome" → bot greets, listens for intent
  Page "CollectInfo" → required slots: cuisine, time, location, party_size
    if cuisine missing → "What kind of food?"
    if party_size missing → "How many people?"
  Page "Search" → fulfillment: call search_api(); show results
  Page "Confirm" → "Should I book {restaurant} at {time} for {party}?"
  Page "Book" → fulfillment: call book_api(); confirm with user
```

🎯 **Exam pattern:** *"A bank deploys an FAQ + appointment-booking phone bot for 1M monthly calls."* → **Conversational Agents** (structured flows + telephony channel + slot-filling).

---

## 🔧 Function Calling on Gemini

**Function calling** is Gemini's native ability to look at user intent and emit a structured request to call one of your declared functions. You execute the function in your code; the result goes back to Gemini for synthesis.

### The shape

You declare functions as JSON-Schema-like tools:

```python
from vertexai.generative_models import FunctionDeclaration, Tool, GenerativeModel

get_weather = FunctionDeclaration(
    name="get_weather",
    description="Get current weather for a location.",
    parameters={
        "type": "object",
        "properties": {
            "city": {"type": "string", "description": "City name"},
            "units": {"type": "string", "enum": ["celsius","fahrenheit"]},
        },
        "required": ["city"],
    },
)

tools = Tool(function_declarations=[get_weather])
model = GenerativeModel("gemini-2.5-flash", tools=[tools])

response = model.generate_content("What's it like in Paris today?")
# response will contain a function_call: get_weather(city="Paris", units="celsius")
```

You inspect `response.candidates[0].content.parts[0].function_call`, run the function, then return its result back via a follow-up turn.

### Parallel function calls

Gemini can emit *multiple* function calls in one turn (e.g., `get_weather("Paris")` and `get_flights("NYC","Paris")` for "What's the weather in Paris and what flights are available?"). The SDK handles the parallel-call return shape.

### Forced function calling

To force Gemini to call a specific function (no free-text response option):

```python
from vertexai.generative_models import ToolConfig

config = ToolConfig(function_calling_config=ToolConfig.FunctionCallingConfig(
    mode=ToolConfig.FunctionCallingConfig.Mode.ANY,
    allowed_function_names=["get_weather"],
))
response = model.generate_content("...", tool_config=config)
```

Modes: `AUTO` (let Gemini decide), `ANY` (must call some function), `NONE` (no calls).

🎯 **Exam pattern:** *"Force Gemini to always call `submit_order()` after order confirmation."* → `tool_config={"function_calling_config":{"mode":"ANY", "allowed_function_names":["submit_order"]}}`.

---

## 🛠️ ADK — The Agent Development Kit

**ADK (Agent Development Kit)** is Google's open-source SDK for building **agentic systems** — multi-step loops where Gemini reasons, calls tools, observes results, and continues until the task is done.

```python
from google.adk.agents import Agent
from google.adk.tools import Tool

@Tool
def search_database(query: str) -> str:
    """Search internal database for relevant records."""
    return db.search(query)

@Tool
def send_email(to: str, subject: str, body: str) -> str:
    """Send email to a customer."""
    return mail.send(to, subject, body)

agent = Agent(
    model="gemini-2.5-pro",
    name="customer_support_agent",
    instruction="""You are a customer support agent. Help customers by:
    1. Searching the database for their issue
    2. Sending them an appropriate email response
    3. Escalating to a human if confidence is low""",
    tools=[search_database, send_email],
)

result = agent.run("Help customer 1234 with their refund request.")
print(result.text)
print(result.tool_calls)   # Trace of every step
```

ADK supports:

- **Sequential** agents (do A, then B, then C)
- **Hierarchical** agents (a planner agent delegates to specialist sub-agents)
- **Parallel** agents (run multiple sub-agents concurrently)
- **Workflow** style (declarative DAG of steps)

### Multi-agent orchestration

ADK ships with a multi-agent pattern: a **coordinator** agent decomposes a complex task and dispatches sub-tasks to specialist agents.

```python
research_agent = Agent(model="gemini-2.5-pro", name="researcher", tools=[search_web])
writer_agent = Agent(model="gemini-2.5-pro", name="writer", tools=[])
coordinator = Agent(
    model="gemini-2.5-pro",
    name="coordinator",
    sub_agents=[research_agent, writer_agent],
    instruction="Coordinate: send research questions to the researcher, then ask the writer to draft."
)
```

🎯 **Exam pattern:** *"A research assistant needs to (1) search the web for sources, (2) summarize each, (3) compile a draft, (4) review for facts. Best architecture?"* → **Multi-agent orchestration with ADK** — coordinator + researcher + summarizer + writer + reviewer.

---

## 🆚 Conversational Agents vs Function Calling vs ADK — When to Use Which

| Tool | When |
|------|------|
| **Conversational Agents** | Structured, finite-state conversations (booking, IVR, ordering) — deterministic backbone matters more than creative reasoning |
| **Function Calling (raw)** | Single-turn or short multi-turn tool use; you control the loop in your code; for chat-style assistants |
| **ADK** | Multi-step agentic loops; multi-agent orchestration; production agents with traces + evals |
| **Search Agents** | Pre-built RAG chat over a Vertex AI Search corpus; minimal code |
| **All hybrid** | Mercedes MBUX uses Conversational Agents for flow + function calling for tools + Gemini for synthesis |

🎯 **Exam pattern:** *"Pizza ordering bot with strict menu compliance + slot-filling."* → **Conversational Agents.** *"Open-ended assistant that can search the web, query DB, and send email."* → **ADK** (or function calling for simpler).

---

## 🤖 Real Customer Architectures

### Shopify Sidekick

Shopify launched **Sidekick** in 2024 as an AI assistant for merchants ("rewrite my product description," "show me which products to promote in spring"). Architecture per Shopify Engineering + Google Cloud Next 2024:

- **Gemini 2.5 Pro on Vertex AI** — the LLM
- **ADK** — multi-step agentic orchestration
- **Function calling** — tools for Shopify Admin API (products, orders, customers, analytics)
- **Vertex AI Search** — grounding against Shopify help docs + merchant guides
- **Conversational Agents** — for "guided flow" actions (e.g. "set up Black Friday discount" walks through structured slots)

### Snap MyAI

Snap MyAI (from Module 2's case study) — when it includes agentic features ("create me a Bitmoji avatar matching this style"), uses ADK-style orchestration on Vertex AI under the hood.

### Mercedes MBUX

Mercedes-Benz MBUX (the opening story) — Conversational Agents for state, function calling for vehicle/cloud APIs, Gemini for synthesis, Chirp for voice.

### Wendy's FreshAI (Module 4)

The drive-thru — Conversational Agents managing order state, function calling for menu/POS, Chirp ASR/TTS, Gemini Flash for disambiguation.

---

## 🔍 Conversational Agents Deep-Dive (Concepts)

### Intent vs Page vs Flow

- **Flow:** a top-level grouping of pages, typically one per user goal ("find_restaurant," "track_package")
- **Page:** a state within a flow; has entry fulfillment, slot-filling, transitions
- **Intent:** what the user says that matches a goal ("find me food," "I want to eat")
- **Slot/Parameter:** typed data point (`cuisine: string`, `party_size: number`)
- **Fulfillment:** what happens (response, webhook call)

### Webhooks

Pages can trigger **webhooks** — HTTPS endpoints in your service that the agent calls with current state and a request to execute (e.g., `book_table(...)`). Your webhook returns updated state + response.

### Generative fallback

When no intent matches well, Conversational Agents can fall back to **generative responses** — Gemini synthesizes a contextually-appropriate reply, drawing from a configured data store.

### NLU training

You provide training phrases per intent. The agent's NLU model learns to match new user utterances to intents.

---

## 🧪 Testing & Evaluating Agents

| Tool | What |
|------|------|
| **Conversational Agents Simulator** | Web-based "chat with the bot" test environment |
| **Test sets** | Pre-recorded conversations replayed for regression testing |
| **Vertex AI Evaluation** | Per-turn quality (relevance, helpfulness) via LLM-as-judge |
| **End-to-end metrics** | Task completion rate, deflection rate, average turns, fallback rate |
| **ADK tracing** | Per-step trace of every agent decision (tool call, observation, reasoning) |

🎯 **Exam pattern:** *"How do you regression-test changes to a Conversational Agent?"* → **Test sets + simulator + LLM-as-judge eval** (not just spot-checking).

---

## 🆚 Google Agent Builder vs Microsoft Copilot Studio vs AWS Bedrock Agents

The exam likes a comparison question.

| | Google Agent Builder | Microsoft Copilot Studio | AWS Bedrock Agents |
|---|---|---|---|
| LLM | Gemini (configurable) | Azure OpenAI (GPT) | Bedrock-hosted (Claude, Llama, Mistral, …) |
| No-code surface | Yes (Conversational Agents UI) | Yes (Copilot Studio UI) | Limited (CDK / console) |
| Tool integration | Function calling, Webhooks, Tool Registry, ADK | Power Platform connectors | Action groups + Lambda |
| RAG built-in | Yes (Vertex AI Search) | Yes (SharePoint, Dataverse) | Yes (Knowledge Bases) |
| Strengths | Multi-modal native, multi-channel, scale | Microsoft 365 integration | Multi-model choice (incl. Claude) |
| Weakness | Less M365 integration | LLM choice limited | Less mature UI |

🎯 **Exam pattern:** *"A Google Workspace customer wants a sales-CRM voice assistant."* → **Agent Builder** (native Workspace integration; multi-modal; multi-channel).

---

## ⚠️ Agent Builder Exam Traps

| Misconception | Reality |
|---------------|---------|
| "Conversational Agents is the same as Dialogflow." | Dialogflow CX → renamed to **Conversational Agents** in 2024. Dialogflow ES is a different (older) product still around. |
| "Agent Builder is one product." | Umbrella over Conversational Agents, Search Agents, Function Calling, ADK, Agent Garden. |
| "Function calling needs a separate agent SDK." | It's built into the Gemini SDK; you declare tools and call as normal. |
| "ADK requires Vertex AI only." | ADK is open-source; works against Gemini API too. |
| "Use ADK for everything." | Conversational Agents is *better* for goal-driven structured flows (booking, IVR). |
| "Function calling = JSON mode." | Different. Function calling triggers a structured request to a tool; JSON mode constrains response format. |
| "Multi-agent = expensive." | Often cheaper than one giant agent — small specialist sub-agents on Flash beat one Pro generalist. |
| "Conversational Agents can't use Gemini." | They can — generative fallback + agent steps can invoke Gemini for synthesis. |

---

## 🎓 Key Terms

| Term | Definition |
|------|------------|
| **Agent Builder** | Vertex AI umbrella for conversational + agentic AI |
| **Conversational Agents** | Structured-flow conversational AI (formerly Dialogflow CX) |
| **Dialogflow ES** | Older sibling product still around |
| **Search Agents** | Pre-built RAG chat agents |
| **Function calling** | Gemini's native tool-use mechanism |
| **ADK** | Agent Development Kit; open-source SDK for agents |
| **Tool Registry** | Centralized tool definitions in Agent Builder |
| **Flow** | Top-level grouping of pages in Conversational Agents |
| **Page** | State in a flow |
| **Intent** | User goal |
| **Slot / Parameter** | Typed data point collected from the user |
| **Fulfillment** | Response / webhook execution |
| **Webhook** | Your HTTPS endpoint that Conversational Agents calls |
| **Generative fallback** | LLM-generated reply when no intent matches |
| **FunctionDeclaration** | Tool schema on Gemini |
| **ToolConfig** | Force / restrict function calling |
| **Coordinator agent** | Top-level agent that delegates to sub-agents |
| **Multi-agent** | Architecture with multiple specialist agents collaborating |
| **Chirp** | Google's speech models (ASR + TTS) |
| **MBUX** | Mercedes-Benz User Experience (in-car) |

---

## ✅ Module 7 Summary

You now know:

- 🏛️ **Agent Builder** as an umbrella over multiple products
- 💬 **Conversational Agents** — structured flows + slots + state machine
- 🔧 **Function calling** — Gemini's native tool use
- 🛠️ **ADK** — open-source agent SDK for multi-step + multi-agent
- 🤖 **Real architectures** — Mercedes MBUX, Shopify Sidekick, Snap MyAI, Wendy's FreshAI
- 🧪 **Testing patterns** — simulator + test sets + LLM-as-judge + end-to-end metrics
- 🆚 **Comparison** with Microsoft Copilot Studio + AWS Bedrock Agents

**Next:** [Module 8 — Responsible AI on Google Cloud](../Module-08-Responsible-AI-Google/Reading.md)

---

## 📚 Further Reading

- 📖 [Vertex AI Agent Builder overview](https://cloud.google.com/products/agent-builder)
- 📖 [Conversational Agents docs](https://cloud.google.com/dialogflow/cx/docs)
- 📖 [Function calling on Gemini](https://ai.google.dev/gemini-api/docs/function-calling)
- 📖 [ADK GitHub](https://github.com/google/adk-python) — open-source agent SDK
- 📖 [Shopify Sidekick architecture](https://shopify.engineering/sidekick-ai-architecture)
- 📖 Mercedes-Benz × Google Cloud (CES 2024 announcement)
