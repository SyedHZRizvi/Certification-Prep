# 📋 Module 4 Cheat Sheet: Tool Use & Function Calling

> One page. Tape it next to your editor. Reference every time you define a tool.

---

## 🧩 The Three-Step Dance

```
User → messages.create(tools=[...])
            ↓
Claude returns tool_use block(s)
            ↓
YOUR CODE executes the tool(s)  ← model does NOT execute
            ↓
Send tool_result(s) in user-role message
            ↓
Claude continues — more tools or final text
            ↓ stop_reason == "end_turn"
Done
```

---

## 📐 Tool Definition Shape

```python
{
  "name": "verb_noun",
  "description": "What it does; when to use it; preconditions; "
                 "side effects; error modes; when NOT to use it.",
  "input_schema": {
    "type": "object",
    "properties": {
      "param_a": {"type":"string", "description":"...", "enum":[...]},
      "param_b": {"type":"integer", "minimum":0, "maximum":100},
      "param_c": {"type":"boolean"}
    },
    "required": ["param_a"]
  }
}
```

---

## 🎯 `tool_choice` Reference

| Value | Behavior |
|-------|----------|
| `{"type": "auto"}` (default) | Claude decides — may use any/no tool, parallel allowed |
| `{"type": "any"}` | MUST use a tool (any) |
| `{"type": "tool", "name": "X"}` | MUST use tool X |
| `{"type": "auto", "disable_parallel_tool_use": true}` | One tool per turn |
| `{"type": "none"}` | Forbid tools (usually omit `tools` instead) |

---

## 🔁 The Multi-Turn Loop (Pseudocode)

```python
messages = [{"role":"user", "content":"..."}]
while True:
    r = client.messages.create(model=..., tools=tools, messages=messages, max_tokens=...)
    messages.append({"role":"assistant", "content":r.content})

    if r.stop_reason == "end_turn":
        break   # final answer in last text block

    if r.stop_reason == "tool_use":
        results = []
        for block in r.content:
            if block.type == "tool_use":
                out = dispatch(block.name, block.input)
                results.append({
                    "type":"tool_result",
                    "tool_use_id": block.id,
                    "content": json.dumps(out)
                })
        messages.append({"role":"user", "content":results})
```

---

## ⚡ Parallel Tool Use

- **Default ON** — Claude may emit multiple `tool_use` blocks in one response
- Execute them in parallel (asyncio / threads) for latency
- Return ALL results in a single user-role message before the next call
- Opt out: `tool_choice={"type":"auto","disable_parallel_tool_use":True}`

---

## 🎯 Structured Output via Forced Tool

```python
tools = [{"name":"emit_data", "description":"...", "input_schema":SCHEMA}]
r = client.messages.create(
    model=..., max_tokens=...,
    tools=tools,
    tool_choice={"type":"tool", "name":"emit_data"},
    messages=[{"role":"user","content":"Extract from..."}]
)
data = r.content[0].input  # dict matching SCHEMA
```

Often more reliable than prefill-`{` for complex schemas.

---

## 🤖 Computer Use (Beta)

```python
client.beta.messages.create(
  model=...,
  tools=[
    {"type":"computer_20241022", "name":"computer",
     "display_width_px":1280, "display_height_px":800, "display_number":1},
    {"type":"text_editor_20241022", "name":"str_replace_editor"},
    {"type":"bash_20241022", "name":"bash"}
  ],
  betas=["computer-use-2024-10-22"],
  messages=[...]
)
```

- ⚠️ Beta — behavior may change
- Sandbox in Docker/VM
- Each screenshot ≈ 1500 tokens
- Set step caps + watchdog timers
- Require explicit confirmation for destructive actions

---

## 🆚 Anthropic vs OpenAI Tool Use

| Aspect | Anthropic | OpenAI |
|--------|-----------|--------|
| Schema field | `input_schema` | `function.parameters` |
| Result role | `user` (with `tool_result` blocks) | `tool` |
| Force tool | `{"type":"tool","name":...}` | `{"type":"function","function":{"name":...}}` |
| Force any tool | `{"type":"any"}` | `"required"` |
| Parallel default | Yes | Yes |

Conceptually similar; **code is NOT 1:1 portable.**

---

## 🛡️ Tool Safety Rules

1. **Auth is YOUR code's job.** Validate caller, role, scopes.
2. **`confirm=true` for destructive actions.**
3. **Treat tool outputs as untrusted text** (prompt-injection vector).
4. **Surface errors as data** in `tool_result`, not exceptions.
5. **Cap tool output size** (truncate at 8K tokens or whatever fits).
6. **Audit-log every call**: tool name, args, result, user, timestamp.
7. **Idempotency keys** for side-effecting tools when possible.

---

## 🧠 Tool Design Rules

| Rule | Why |
|------|-----|
| Verbs, not nouns | Model thinks in actions |
| Single responsibility | Easier to choose correctly |
| 3–10 tools per surface | Sweet spot for accuracy |
| Description = man page | Pre/post conditions, errors, when-NOT |
| Use JSON Schema features | `enum`, `pattern`, `format` improve reliability |
| Split overloaded tools | `lookup_by_email` + `lookup_by_id`, not one toggle |

---

## 📚 Canonical Tool Set (claude-code)

| Tool | Use |
|------|-----|
| `Read` | Read file |
| `Edit` | Find-and-replace edit |
| `Write` | Create / overwrite |
| `Bash` | Run shell command |
| `Grep` | Ripgrep search |
| `Glob` | File pattern match |
| `WebFetch` | HTTP fetch |
| `WebSearch` | Web search |
| `Skill` | Invoke specialized sub-flow |

Mirror this pattern. Cursor, Cody, Aider all converged here.

---

## 🏆 Exam Power Phrases

✅ Often **right**:
- "Claude requests tool calls; your code executes"
- "Tool results in `user` role with `tool_result` content blocks"
- "Parallel tool use is the default"
- "Force a tool with `tool_choice={'type':'tool','name':...}`"
- "Tool definitions add input tokens; consider caching them"
- "Tool outputs are untrusted text"

❌ Often **wrong**:
- "Claude executes tools itself"
- "Tool results go in `assistant` role"
- "Parallel is opt-in"
- "Tool definitions are free"
- "`enum`/`pattern` are ignored by the model"
- "Computer use is GA"

---

## 🗓️ Key Facts To Memorize Cold

- Roles: tool_use in **assistant**; tool_result in **user**
- `tool_choice` values: **auto / any / tool / none**
- `disable_parallel_tool_use` is on `tool_choice`
- `stop_reason: "tool_use"` triggers the executor
- Computer use: beta header `computer-use-2024-10-22`
- claude-code tools: Read/Edit/Write/Bash/Grep/Glob/WebFetch/Skill
- Module 4 domain: **15% of the assessment**

---

## ✏️ Quick Self-Check

1. Send a `tool_result` — which role? ___
2. Force tool X — which `tool_choice`? ___
3. Disable parallel tool use — how? ___
4. Computer use built-in tools — three names? ___
5. Three rules for safe destructive-action tools? ___

If you answer all 5 in 60 seconds, you own this module. ✅

---

➡️ [Module 5: Model Context Protocol (MCP)](../Module-05-Model-Context-Protocol-MCP/Reading.md)
