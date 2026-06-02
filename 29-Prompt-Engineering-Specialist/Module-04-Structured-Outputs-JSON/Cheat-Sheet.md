# 📋 Module 4 Cheat Sheet: Structured Outputs & JSON

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 📦 Three Levels of Structure Guarantee

| Level | What | How |
|-------|------|-----|
| **L0** | Ask in prompt — hope for the best | Plain prompt |
| **L1** | Valid JSON guaranteed | OpenAI `response_format={"type": "json_object"}` |
| **L2** | Schema-enforced JSON | OpenAI Structured Outputs; Anthropic forced tool use; Gemini `response_schema` |

🎯 *Always use the highest level your provider supports.*

---

## 🐍 Provider Syntax Quick Reference

```python
# OpenAI L2
client.beta.chat.completions.parse(
    model="gpt-5",
    messages=[...],
    response_format=MyPydanticModel,
)

# Anthropic L2 (via forced tool use)
client.messages.create(
    model="claude-sonnet-4-7",
    tools=[{"name":"extract","input_schema":{...}}],
    tool_choice={"type":"tool", "name":"extract"},
    messages=[...]
)

# Gemini L2
client.models.generate_content(
    model="gemini-2.5-pro",
    contents="...",
    config={"response_mime_type":"application/json",
            "response_schema": MyPydanticModel}
)

# Cross-provider via instructor
client = instructor.from_openai(OpenAI())
client.chat.completions.create(
    model="gpt-5",
    response_model=MyPydanticModel,
    max_retries=3,
    messages=[...]
)
```

---

## 🏗️ Pydantic Patterns

```python
from pydantic import BaseModel, Field
from typing import Literal
from enum import Enum

class Severity(str, Enum):
    LOW = "LOW"; MED = "MED"; HIGH = "HIGH"

class Item(BaseModel):
    sku: str = Field(..., pattern=r"^SKU-\d{6}$")
    qty: int = Field(..., ge=1, le=20)
    color: str | None = None
    severity: Severity                  # enum
    status: Literal["open", "closed"]   # literal

    @field_validator("sku")
    @classmethod
    def in_catalog(cls, v):
        if not catalog.exists(v):
            raise ValueError(f"{v} not in catalog")
        return v
```

| Pattern | Use |
|---------|-----|
| `Field(..., ge=N, le=N)` | Constrained int/float |
| `Field(..., pattern=r"...")` | Regex constraint |
| `Field(..., min_length=N, max_length=N)` | String length |
| `Field(..., description="...")` | Visible to model — improves accuracy |
| `Literal["a","b","c"]` | Categorical (or use Enum) |
| `str | None` / `Optional[str]` | Optional field |
| `@field_validator` | Semantic check after parsing |

---

## 🛠️ Tool Use Schema Anatomy

```json
{
  "name": "send_email",
  "description": "Send an email. Use ONLY when the user explicitly asks. Confirm recipient first.",
  "input_schema": {
    "type": "object",
    "properties": {
      "to": {"type": "string", "format": "email"},
      "subject": {"type": "string", "maxLength": 200},
      "body": {"type": "string"}
    },
    "required": ["to", "subject", "body"]
  }
}
```

🎯 *Tool descriptions ARE prompt engineering. Be specific about when NOT to call.*

---

## 🔁 Retry-on-Invalid Pattern

```
1. Model produces output → Pydantic parses
2. Field validator runs → raises ValueError
3. instructor catches the error
4. Adds error + original prompt to a new request
5. Model self-corrects with the error context
6. Up to max_retries times
```

---

## 🚨 Failure Modes Even At L2

| Failure | Defense |
|---------|---------|
| `stop_reason: "length"` truncation | Raise max_tokens; chunk inputs |
| Schema impossible to satisfy | Mark fields Optional |
| Deep nesting → coherence loss | Flatten or multi-step extraction |
| Latency too high | Use Haiku/Flash/mini |
| Hallucinated enum values | Use `Enum` or `Literal` — impossible to violate |

---

## 🧪 CoT in Structured Outputs

```python
class Result(BaseModel):
    reasoning: str   # FIRST — model thinks here
    answer: str      # AFTER — conditioned on reasoning
```

🎯 *Pydantic preserves field order. The model literally writes `reasoning` first.*

---

## 🏆 Exam Power Phrases

✅ Often **right**:

- "Use the highest level of structure guarantee your provider supports"
- "Anthropic structured outputs = forced tool use"
- "Use Enum / Literal for fields with controlled vocabularies"
- "Field validators + instructor retries for semantic validation"
- "Tool descriptions are part of the prompt"

❌ Often **wrong**:

- "JSON Mode and Structured Outputs are the same"
- "L0 with careful prompting is enough for production"
- "instructor bypasses rate limits"
- "Schema-enforced outputs eliminate ALL failures"
- "Pydantic is Python-only" (the schema is JSON Schema, universal)

---

## 🗓️ Key Facts To Memorize Cold

- L0 / L1 / L2 hierarchy
- OpenAI JSON Mode requires "json" in the prompt
- Anthropic structured = `tool_choice={"type":"tool", "name":...}`
- instructor = the cross-provider Pydantic wrapper
- Outlines / Guidance = open-source constrained generation
- Field order = generation order = reasoning-then-answer pattern
- Structured outputs domain = **13% of Final Mock**

---

## ✏️ Quick Self-Check

Cover the answers and recite:

1. L0/L1/L2 in one line each? ___
2. How does Anthropic do schema-enforced output? ___
3. What does `Literal["a","b"]` guarantee? ___
4. What's the retry-on-invalid loop? ___
5. Why put `reasoning` before `answer` in a schema? ___

If you can answer all 5 in under 60 seconds, you own this module. ✅

---

## 🛠️ The Production Pydantic Template

```python
from typing import Literal, Optional
from enum import Enum
from pydantic import BaseModel, Field, field_validator
import instructor
from openai import OpenAI

class Priority(str, Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    URGENT = "urgent"

class ExtractedTicket(BaseModel):
    """Customer support ticket extraction."""

    # Reasoning FIRST — conditions everything below
    reasoning: str = Field(..., description="One sentence rationale for the classification.")

    # Categorical with Literal — model cannot invent new values
    category: Literal["billing", "technical", "shipping", "refund", "other"]

    # Enum with semantic meaning
    priority: Priority

    # Constrained numeric
    estimated_minutes: int = Field(..., ge=1, le=480, description="Estimated resolution time in minutes.")

    # Optional / nullable
    customer_id: Optional[str] = Field(None, pattern=r"^CUST-\d{6}$")

    # List with bounds
    relevant_tags: list[str] = Field(default_factory=list, max_length=5)

    # Self-rated confidence — drive downstream routing
    confidence: float = Field(..., ge=0.0, le=1.0)

    @field_validator("customer_id")
    @classmethod
    def must_be_real_customer(cls, v: str | None) -> str | None:
        if v is None:
            return v
        # Lookup in real CRM; raise on miss → instructor retries
        if not crm.exists(v):
            raise ValueError(f"Customer {v} not found in CRM")
        return v

client = instructor.from_openai(OpenAI())

ticket = client.chat.completions.create(
    model="gpt-5",
    response_model=ExtractedTicket,
    max_retries=3,
    messages=[
        {"role": "system", "content": "You extract structured information from customer support emails."},
        {"role": "user", "content": email_text}
    ],
)
```

---

## 🚨 Pydantic Common Anti-Patterns

| Anti-pattern | Fix |
|--------------|-----|
| Plain `str` for categorical (e.g., `severity: str`) | Use `Literal[...]` or `Enum` |
| `int` for bounded number (e.g., `rating: int`) | Use `Field(..., ge=N, le=M)` |
| Required field that model often can't fill | Mark `Optional[...]` |
| No `description=` on fields | Add — model reads them |
| 10-level nested schema | Flatten or multi-step extraction |
| `reasoning` field AFTER `answer` | Put `reasoning` BEFORE — generates first |
| Cross-validation across fields | Use a `@model_validator(mode='after')` |

---

➡️ [Module 5: Multi-Modal Prompting](../Module-05-Multi-Modal/Reading.md)
