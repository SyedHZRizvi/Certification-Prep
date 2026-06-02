# Module 4: Structured Outputs & JSON 📦

> **Why this module matters:** 13% of the Final Mock. The moment your LLM output flows into other software — a database, an API, a UI, another LLM — you need *guaranteed* structure. Hoping for valid JSON is how you wake up at 3am to a 500-error log full of "trailing comma" and "unterminated string." This module is the engineering layer that ends that pager.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Modules 1, 2, 3
> - JSON syntax and basic schemas
> - Python type hints (Pydantic) or TypeScript interfaces
>
> If JSON Schema is unfamiliar, skim [json-schema.org/learn](https://json-schema.org/learn) for 15 minutes first.

---

## 🛒 A Story: The E-Commerce Site That Returned $1.2M in Refunds Because of Invalid JSON

Meet Rashid, lead engineer at a 4-year-old D2C cosmetics brand. His team shipped a "Tell us in plain English what you want, and our AI builds your shopping cart" feature in 2024 — a natural-language interface that calls GPT-4 to extract product names and quantities from a user message, then constructs a real cart.

The first week, the feature converted at 28% — higher than the form-based flow. Marketing celebrated.

Then a customer wrote: *"I'd like 2 of the rose oil serums, the lipstick in nude, and I'll think about the eye cream — actually yes one of those too."*

The LLM extracted (correct content, broken JSON):

```json
{"items": [
  {"product": "Rose Oil Serum", "quantity": 2},
  {"product": "Lipstick - Nude", "quantity": 1},
  {"product": "Eye Cream, quantity": 1}
]}
```

See the missing closing quote after "Cream"? Standard JSON parser → `ValueError`. The team's catch-all error handler routed the user to a generic "we couldn't process your order" page. The user left.

Multiply that pattern over 6 months. Rashid's team estimated **$1.2M in lost cart revenue** from parse failures across thousands of variations of the same bug — quoted strings inside product names, em-dashes that looked like minus signs, currency symbols that became Unicode escapes, trailing commas, unmatched braces, hallucinated keys, missing required fields.

The fix took 4 days when they finally understood the tooling: **structured outputs**, **JSON mode**, **tool use**, and the **Pydantic + instructor + retry-on-validation-error** pattern. After the rebuild: 0 parse failures in 60 days. Module 4 is exactly that toolkit.

---

## 🧭 The Three Levels of Structure Guarantee

| Level | What you get | How |
|-------|--------------|-----|
| **L0: Prompt-only** | "Please respond in JSON" — model usually complies but can break | Just ask in the prompt |
| **L1: JSON Mode** | Model is constrained to produce *some* valid JSON | OpenAI `response_format={"type": "json_object"}` |
| **L2: Schema-enforced (Structured Outputs)** | Model is constrained to produce JSON matching YOUR schema | OpenAI `response_format={"type": "json_schema", ...}`, Anthropic tool use, Gemini structured output |

Each level eliminates a category of failure. L0 → L1 → L2 is the progression every production prompt should make.

---

## L0️⃣ Prompt-Only JSON — The Naïve Approach

```python
prompt = """Extract the product names and quantities from this message.

Respond with valid JSON in this exact format:
{"items": [{"product": "name", "quantity": 1}]}

Message: I want 2 lipsticks and 3 serums."""
```

### Why this fails in production

| Failure mode | Frequency |
|--------------|-----------|
| Missing comma between items | ~0.5% on GPT-4-class |
| Trailing comma after last item | ~0.3% |
| Single-quoted strings (JavaScript-style) | ~0.2% |
| Markdown code-block wrapping (` ```json...``` `) | 1–5% |
| Hallucinated keys | ~0.5% |
| Missing required fields | ~1–3% |
| Type mismatch (string where int expected) | ~1% |
| Output truncated at max_tokens | varies |

A 1% parse failure rate is **10,000 broken orders per million** — Rashid's pager.

### Defensive prompting helps but doesn't solve

Things that *reduce* L0 failures:

- `"Respond with ONLY valid JSON, no markdown, no commentary, no code blocks."`
- One or two few-shot examples of the exact output shape
- `temperature=0`
- `response.strip("` ```json")` post-processing
- `json.loads` wrapped in a retry-with-error-context loop

But none of these *guarantee* validity. The only guaranteed solutions are L1 and L2.

---

## L1️⃣ JSON Mode — Constrained Decoding to Valid JSON

OpenAI introduced **JSON Mode** in November 2023. The model is constrained to emit only tokens that form valid JSON.

```python
# OpenAI JSON mode
response = client.chat.completions.create(
    model="gpt-5",
    messages=[
        {"role": "system", "content": "You output JSON. The JSON has items with product and quantity."},
        {"role": "user", "content": "I want 2 lipsticks and 3 serums."}
    ],
    response_format={"type": "json_object"}
)
```

### What JSON Mode guarantees

- Valid JSON syntax (braces match, strings closed, commas right)
- No code fences, no commentary
- No trailing garbage

### What JSON Mode does NOT guarantee

- YOUR schema (missing fields and hallucinated extra keys are still valid JSON)
- Field types matching expectations
- Sane enum values

🚨 **Two traps:** OpenAI JSON Mode requires the *string* "json" to appear in the prompt. Gemini's "JSON mode" is actually closer to L2 — you provide a schema. Vendor terminology varies.

---

## L2️⃣ Structured Outputs — Schema-Enforced (The 2026 Standard)

Released by OpenAI in August 2024 (and the analog on Anthropic and Gemini followed), **Structured Outputs** constrain the model to produce JSON that *exactly matches* a JSON Schema you provide.

### OpenAI Structured Outputs

```python
from openai import OpenAI
from pydantic import BaseModel

class CartItem(BaseModel):
    product: str
    quantity: int

class Cart(BaseModel):
    items: list[CartItem]

client = OpenAI()
response = client.beta.chat.completions.parse(
    model="gpt-5",
    messages=[
        {"role": "system", "content": "Extract cart items."},
        {"role": "user", "content": "2 lipsticks and 3 serums."}
    ],
    response_format=Cart,
)
cart: Cart = response.choices[0].message.parsed
print(cart.items)
```

The model output is guaranteed to match the Pydantic schema. Period. No try/except. No retries. No regex post-processing.

### Anthropic Structured Outputs (via tool use)

Anthropic doesn't have a separate "structured outputs" flag — they leverage **tool use**. You define a tool with a JSON Schema; the model is constrained to call it with valid args.

```python
import anthropic

client = anthropic.Anthropic()
response = client.messages.create(
    model="claude-sonnet-4-7",
    max_tokens=1024,
    tools=[{
        "name": "extract_cart",
        "description": "Extract products and quantities from user message",
        "input_schema": {
            "type": "object",
            "properties": {
                "items": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "product": {"type": "string"},
                            "quantity": {"type": "integer"}
                        },
                        "required": ["product", "quantity"]
                    }
                }
            },
            "required": ["items"]
        }
    }],
    tool_choice={"type": "tool", "name": "extract_cart"},
    messages=[{"role": "user", "content": "2 lipsticks and 3 serums."}]
)
cart = response.content[0].input  # the structured tool input
```

The `tool_choice={"type": "tool", "name": "..."}` forces the model to ALWAYS call this tool — turning it into a guaranteed structured-output mechanism.

### Gemini Structured Output

```python
from google import genai
from pydantic import BaseModel

class CartItem(BaseModel):
    product: str
    quantity: int

class Cart(BaseModel):
    items: list[CartItem]

client = genai.Client()
response = client.models.generate_content(
    model="gemini-2.5-pro",
    contents="2 lipsticks and 3 serums.",
    config={
        "response_mime_type": "application/json",
        "response_schema": Cart,
    },
)
cart: Cart = response.parsed
```

### Side-by-side comparison

| Provider | Mechanism | Schema source |
|----------|-----------|---------------|
| OpenAI | `response_format=PydanticModel` (beta SDK) OR `response_format={"type": "json_schema", ...}` (raw API) | Pydantic OR JSON Schema |
| Anthropic | `tools=[...]` with `tool_choice={"type":"tool", "name":...}` | JSON Schema |
| Gemini | `config={"response_mime_type":"application/json", "response_schema": ...}` | Pydantic OR JSON Schema |
| Llama (via instructor) | `client = instructor.from_openai(client)`, then `response_model=PydanticModel` | Pydantic |

🎯 **Memorize:** *The instructor library* (`pip install instructor`) wraps OpenAI/Anthropic/Google/Mistral/Ollama clients and gives you a uniform Pydantic-based interface. For multi-vendor production, this is the abstraction layer of choice.

---

## 🐍 The Pydantic + instructor Pattern (The 2026 Default)

`instructor` (by Jason Liu) is the most popular structured-outputs library in the LLM ecosystem. It wraps any provider's client and gives you:

1. Pydantic-class-as-schema
2. Automatic retries on validation failure
3. Provider-agnostic interface

```python
import instructor
from openai import OpenAI
from pydantic import BaseModel, Field
from typing import List

class CartItem(BaseModel):
    product: str = Field(..., description="Product name, e.g., 'Rose Oil Serum'")
    quantity: int = Field(..., ge=1, description="Quantity, must be at least 1")
    color: str | None = Field(None, description="Optional color/variant")

class Cart(BaseModel):
    items: List[CartItem]
    customer_note: str | None = None

client = instructor.from_openai(OpenAI())

cart = client.chat.completions.create(
    model="gpt-5",
    response_model=Cart,
    max_retries=3,
    messages=[
        {"role": "system", "content": "Extract a shopping cart from natural language."},
        {"role": "user", "content": "2 rose oil serums, lipstick in nude, and the eye cream."}
    ],
)
print(cart.items)
```

### Why Pydantic + instructor is so good

| Feature | Benefit |
|---------|---------|
| `Field(description=...)` | Becomes part of the schema the model sees — improves accuracy |
| `Field(ge=1)` / `pattern=r"..."` | Compile-time constraints, validation-time enforcement |
| `Optional[...]` / `X | None` | Optional fields modeled cleanly |
| `Enum`, `Literal["a", "b"]` | Categorical constraints (model can ONLY pick from the enum values) |
| `max_retries=3` | If the model violates, instructor reprompts with the validation error context |
| Provider-swap | `instructor.from_anthropic`, `from_gemini` — same Pydantic class everywhere |

### Constraint patterns to know cold

Use `Enum` or `Literal["a","b","c"]` for categorical fields. Use `Field(..., ge=N, le=M)` for bounded numerics. Use `Field(..., min_length=N, max_length=M, pattern=r"...")` for strings. Use `Optional[T]` / `T | None` for fields that may be absent. The Module 4 cheat sheet has the full production-grade template.

🎯 **Memorize:** *Use `Enum` or `Literal` for any field that must be one of N values. The model becomes incapable of hallucinating a 6th option.*

---

## 🔁 Retry-on-Invalid Patterns

Even with structured outputs, **semantic** validation can still fail. The product name might be valid English but not match any product in your catalog. The retry pattern:

```python
import instructor
from openai import OpenAI
from pydantic import BaseModel, field_validator

VALID_PRODUCTS = {"rose oil serum", "lipstick", "eye cream", ...}

class CartItem(BaseModel):
    product: str
    quantity: int

    @field_validator("product")
    @classmethod
    def must_be_real_product(cls, v: str) -> str:
        if v.lower() not in VALID_PRODUCTS:
            raise ValueError(f"'{v}' is not a real product. Valid: {sorted(VALID_PRODUCTS)[:5]}...")
        return v

client = instructor.from_openai(OpenAI())
cart = client.chat.completions.create(
    model="gpt-5",
    response_model=list[CartItem],
    max_retries=3,  # instructor catches the ValueError and reprompts
    messages=[...]
)
```

When the validator raises, instructor catches the error and appends it to the next prompt:

```
Previous attempt failed validation: 'Magical Unicorn Cream' is not a real product. Valid: ['eye cream', ...]
Please correct the response.
```

This is **closed-loop self-correction** — one of the most powerful patterns in production prompting.

---

## 🛠️ Tool Use Schemas (Function Calling)

Tool use (a.k.a. function calling) is structurally identical to structured outputs — the model is constrained to produce a function name + JSON arguments. The semantic difference is intent: with tool use, your code is going to *execute* the call.

### The canonical tool-use shape

```python
tools = [
    {
        "name": "get_weather",
        "description": "Get current weather for a city",
        "input_schema": {
            "type": "object",
            "properties": {
                "city": {"type": "string", "description": "City name, e.g., 'Boston'"},
                "unit": {"type": "string", "enum": ["celsius", "fahrenheit"]}
            },
            "required": ["city"]
        }
    },
    {
        "name": "send_email",
        ...
    }
]
```

The model picks which tool to call (or none, or multiple), produces structured args, and your code executes. Conversation continues with the result fed back as a `tool_result` (Anthropic) or `tool` message (OpenAI).

### Parallel tool calls

GPT-5 and Claude 4.7 can request **multiple tool calls in one turn**. Your code dispatches them in parallel and returns all results together. This dramatically reduces latency in agent flows.

### Tool descriptions are part of the prompt

The model reads `description` and `properties[].description` to decide which tool to use and how. Writing good descriptions IS prompt engineering:

| Bad description | Good description |
|-----------------|------------------|
| `"Gets the weather"` | `"Returns current weather conditions for a city. Use this when the user asks about current weather. Do NOT use for forecasts beyond today (use 'get_forecast' instead)."` |
| `"Sends a message"` | `"Sends an email. Use ONLY when the user explicitly asks to send an email. Confirm recipient and content with the user before calling this tool."` |

🎯 **Memorize:** *In Anthropic's docs, "tools and tool descriptions ARE your prompt for agent behavior."*

---

## 🚨 Where Structured Outputs Still Break

Even L2 has failure modes — they're just rarer and more predictable.

| Failure | Cause | Defense |
|---------|-------|---------|
| Truncated output (`stop_reason: "length"`) | max_tokens too low for the schema | Raise max_tokens; consider chunking long inputs |
| Model refuses | Content policy triggered | Adjust prompt; consider less-strict provider |
| Schema is impossible to satisfy | E.g., required field with no data source | Make fields `Optional` |
| Schema too complex (nested 10+ levels) | Model loses coherence on deep schemas | Flatten the schema; use multi-step extraction |
| Latency tanks | Constrained decoding is slower | Use Haiku/Flash/mini for simple extractions |
| Cost rises (verbose schemas in prompt) | Long schema = lots of input tokens | Cache schemas (Anthropic prompt caching) |

---

## 🧪 CoT + Structured Outputs — Reasoning JSON

A common pattern: ask the model to *reason* then *output structured*. Use a dedicated `reasoning` field:

```python
class ClassifiedTicket(BaseModel):
    reasoning: str = Field(..., description="One-sentence rationale for the chosen category")
    category: Literal["billing", "technical", "shipping", "other"]
    priority: Literal["low", "medium", "high"]
    confidence: float = Field(..., ge=0.0, le=1.0)
```

The model thinks in the `reasoning` field, then commits to the categorical answers. Best of both worlds.

🚨 **Trap:** Put `reasoning` BEFORE `category` in the schema. Pydantic preserves field order, and structured outputs respect it. The model literally generates `reasoning` first, conditioning the `category` output on its own reasoning.

---

## 🔬 Scenario Walkthrough (Rashid's fix, step by step)

> **Scenario:** Rashid's team has the broken cart-extraction prompt. Walk through their 4-day rebuild.

**Day 1 — Add schema:**
```python
class CartItem(BaseModel):
    product_id: str = Field(..., pattern=r"^SKU-\d{6}$")
    quantity: int = Field(..., ge=1, le=20)
    variant: str | None = None
```
Move from L0 to L2. Pydantic + instructor + GPT-4-turbo.

**Day 2 — Add product validator:**
```python
@field_validator("product_id")
@classmethod
def must_exist_in_catalog(cls, v):
    if not catalog.exists(v):
        raise ValueError(f"Product {v} not found in catalog")
    return v
```

**Day 3 — Add fuzzy-match prompt:**
Customers say "Rose Oil Serum" but the catalog has `SKU-103456`. Add a tool call to look up SKU by name:
```python
tools = [{"name": "lookup_sku", "description": "Find SKU by product name", ...}]
```
Model now calls `lookup_sku("rose oil serum")` → gets SKU → puts SKU in the final structured output.

**Day 4 — Eval harness:**
Build 200 golden examples (Module 6). Run the new pipeline. 0/200 parse failures, 197/200 correct extraction. Ship.

After 60 days in production: **0 parse failures, 99.4% extraction accuracy, $1.2M annualized recovered revenue.**

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "JSON mode and structured outputs are the same" | JSON mode = valid JSON. Structured outputs = JSON matching YOUR schema. |
| "Prompt-only JSON works fine if I'm careful" | 0.5–5% failure rate in production. Use L1 or L2. |
| "Pydantic is just for Python" | The schemas it generates are language-agnostic JSON Schema. |
| "Tool use and structured outputs are different things" | Same constrained-decoding plumbing under the hood; different semantic intent. |
| "Enum fields prevent all hallucination" | They prevent hallucinated enum *values*. Other fields can still drift. |
| "JSON mode requires no special prompt" | OpenAI's JSON mode requires the word "json" in the prompt. |
| "Structured outputs are free" | The schema is part of the input tokens; complex schemas cost more. |
| "Anthropic doesn't have structured outputs" | Anthropic uses tool use with `tool_choice={"type":"tool", "name":...}`. |
| "Retry-on-invalid is a band-aid" | It's the recommended pattern (instructor, Outlines, others all use it). |
| "instructor is OpenAI-only" | It wraps OpenAI, Anthropic, Google, Mistral, Ollama, and more. |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **JSON Mode** | OpenAI flag that constrains output to valid JSON (not schema-checked) |
| **Structured Outputs** | OpenAI flag that constrains output to a specific JSON Schema |
| **Tool use / Function calling** | Constrained generation of `function_name(args)` calls |
| **JSON Schema** | The IETF spec for describing JSON structure |
| **Pydantic** | Python data validation library; generates JSON Schema from Python classes |
| **instructor** | Multi-provider library wrapping LLM clients with Pydantic schemas |
| **Outlines** | Alternative library for structured generation (works on open-source models) |
| **Guidance** | Microsoft library for constrained generation |
| **Constrained decoding** | The technical mechanism — model is restricted to tokens that keep output valid |
| **Field constraint** | `ge`, `le`, `min_length`, `max_length`, `pattern`, `default_factory` |
| **Enum / Literal** | Categorical field types — model can ONLY pick from the listed values |
| **Validator** | A Pydantic method that runs after parsing to enforce semantic rules |
| **Retry-on-invalid** | Catch validation error, re-prompt with the error context, let the model self-correct |
| **`tool_choice`** | Per-API control over whether/which tool the model must call |
| **Parallel tool calls** | Multiple tool calls in one model turn (GPT-5, Claude 4.7) |
| **`response_format`** | OpenAI parameter for selecting JSON mode or structured outputs |
| **`response_schema`** | Gemini parameter for schema-enforced output |

### Acronyms cheat-row (Module 4)
| Acronym | Meaning |
|---------|---------|
| JSON | JavaScript Object Notation |
| OpenAI SO | OpenAI Structured Outputs |
| ASA | (informal) Anthropic Schema Adherence (via tool use) |
| BAML | Boundary's "AI ML language" — schema-first prompt language |
| TS | TypeScript / interface (analog of Pydantic in JS land) |

---

## 📊 Case Study — OpenAI Structured Outputs Launch (August 2024)

**Situation.** Before August 2024, the industry standard for "force the LLM to output JSON" was a hodgepodge: JSON mode (OpenAI), tool calling abuse (Anthropic), Outlines/Guidance/instructor wrappers (open-source), or just prompt-and-pray. Across the ecosystem, **5–15% of production LLM JSON outputs failed validation** even with JSON mode. Every team that shipped LLM-to-database or LLM-to-API had a retry layer.

**The announcement.** On August 6, 2024, OpenAI launched **Structured Outputs** — a `response_format` mode that constrained the model's token sampling to a user-supplied JSON Schema, with **100% schema adherence guaranteed**. The launch blog and an accompanying paper showed:

- 100% schema adherence in tests (vs ~85.9% for prompt-only)
- ~40% reduction in tokens spent on retries
- Native support for Pydantic via the `.parse()` SDK helper

**The technical mechanism.** OpenAI implemented this via **context-free grammar masking**: before each token is sampled, only tokens that keep the output on a valid path through the schema's grammar are allowed. This is the same technique used by Outlines (open-source, 2023) and similar to lm-format-enforcer.

**The industry response.**
- **Anthropic** had `tool_choice={"type":"tool", "name":"..."}` since early 2024 — already an L2 mechanism in practice, but they continued to refine the doc story.
- **Google** added Gemini structured output with Pydantic/JSON Schema later in 2024.
- **Mistral, Cohere, Groq** all adopted similar patterns.
- **DeepSeek, Llama-via-Together** added it in 2025.

By early 2026, schema-enforced structured output is the **default** for any new LLM-to-software integration. Teams still on L0 are considered behind.

**Lesson for the exam / for practitioners.**
- Always use the highest level of structure guarantee your provider supports.
- Pydantic + instructor is the lingua franca for cross-provider structured work.
- Schema design matters — over-deep nesting, missing descriptions, ambiguous enums all hurt accuracy even with constrained decoding.
- Tool descriptions ARE prompt engineering — write them with the same care as system prompts.

**Discussion (Socratic).**
- **Q1:** A startup CTO insists their team's elaborate JSON-mode + regex retry layer is "good enough." Make the technical and business case for migrating to schema-enforced structured outputs.
- **Q2:** Anthropic doesn't have a `response_format` flag — they use tool use. Are these meaningfully different from a developer's POV, or just spelling? Argue both sides.
- **Q3:** Constrained decoding can occasionally produce *low-quality* outputs because the model is forced into a token it didn't want to pick. When does this trade-off matter? How do you measure it?

---

## ✅ Module 4 Summary

You now know:

- 📦 The three levels of structure guarantee: L0 prompt-only / L1 JSON Mode / L2 schema-enforced
- 🐍 The Pydantic + instructor pattern as the 2026 default
- 🛠️ Tool use schemas as constrained generation in disguise
- 🔁 Retry-on-invalid closed-loop self-correction
- 🚨 The remaining failure modes even at L2 and how to defend against them
- 🧪 CoT + structured outputs (reasoning field first, answer after)
- 🔬 Rashid's 4-day rebuild from $1.2M-loss-rate to 0 parse failures

**Next steps:**
1. 🎥 Watch the curated videos: [Videos.md](./Videos.md)
2. ✏️ Take the quiz: [Quiz.md](./Quiz.md) — aim for 22/26
3. 📋 Review the [Cheat-Sheet.md](./Cheat-Sheet.md) before bed
4. ➡️ Move on: [Module 5 — Multi-Modal Prompting](../Module-05-Multi-Modal/Reading.md)

> **Where this leads.**
> - Inside this course: [Module 5](../Module-05-Multi-Modal/Reading.md) extracts structured outputs from images. [Module 6](../Module-06-Evaluation-AB-Testing/Reading.md) builds an eval harness that checks both schema and semantics. [Module 7](../Module-07-Adversarial-Defense/Reading.md) explores tool-use as a prompt-injection vector.
> - Cross-course: Claude Architect (Cert Hub) covers Anthropic tool use end-to-end. Azure AI Engineer (course 08) covers Azure OpenAI Service structured outputs.
> - Practice: Practice Exam 1 has ~4 questions from this module.

---

## 📚 Further Reading (Optional)

**Primary sources:**
- 📄 OpenAI (2024). *Introducing Structured Outputs in the API*. https://openai.com/index/introducing-structured-outputs-in-the-api/
- 📄 Willard & Louf (2023). *Efficient Guided Generation for Large Language Models* — the Outlines paper.
- 📄 IETF (2020). *JSON Schema Specification — Draft 2020-12*.

**Vendor docs:**
- 📖 [OpenAI — Structured Outputs Guide](https://platform.openai.com/docs/guides/structured-outputs)
- 📖 [Anthropic — Tool Use](https://docs.anthropic.com/en/docs/build-with-claude/tool-use)
- 📖 [Google Gemini — Generate Structured Output](https://ai.google.dev/gemini-api/docs/structured-output)

**Libraries:**
- 📖 [instructor — Structured outputs powered by LLMs](https://python.useinstructor.com)
- 📖 [Outlines](https://github.com/dottxt-ai/outlines) — works on open-source models
- 📖 [Pydantic Docs](https://docs.pydantic.dev)
- 📖 [Guidance (Microsoft)](https://github.com/guidance-ai/guidance) — constrained generation framework
- 📖 [BAML](https://docs.boundaryml.com) — schema-first prompt language

**Practitioner:**
- 📖 [Jason Liu — instructor patterns](https://jxnl.co)
- 📖 [Simon Willison — Schema-enforced LLM output](https://simonwillison.net/tags/openai/) (search for structured outputs posts)
