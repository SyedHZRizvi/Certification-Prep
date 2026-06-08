# ✏️ Module 5 Quiz: Model Context Protocol (MCP)

> **Instructions:** Answer all 25 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 21/25 minimum.
>
> **Bloom distribution (this quiz):** Remember 6 · Understand 7 · Apply 7 · Analyze/Evaluate 4 · Create 1.

---

## Questions

### Q1. The Model Context Protocol was announced by Anthropic in: *(Remember)*
A. March 2023
B. June 2024
C. November 2024
D. February 2026

---

### Q2. MCP's wire-level protocol is based on: *(Remember)*
A. gRPC
B. REST
C. JSON-RPC 2.0
D. GraphQL

---

### Q3. The three first-class primitives MCP defines are: *(Remember)*
A. Tools, resources, prompts
B. Models, weights, embeddings
C. Functions, services, APIs
D. Servers, clients, transports

---

### Q4. The TWO most common MCP transports are: *(Remember)*
A. stdio (local subprocess) and HTTP+SSE (remote service)
B. WebSocket and TCP
C. Email and SMS
D. FTP and Telnet

---

### Q5. Claude itself: *(Understand)*
A. Speaks MCP directly inside the Anthropic API
B. Sees tool definitions via the standard Messages API; the host app (MCP client) translates MCP → Anthropic tool definitions
C. Cannot use MCP-served tools
D. Replaces the MCP protocol with its own

---

### Q6. In a typical local Claude Desktop MCP server config, the server is launched via: *(Apply)*
A. A web request
B. A subprocess command (e.g., `npx`, `python`, `node`) defined in the config; stdio transport
C. A Docker push to ECR
D. None, the server is built into Claude Desktop

---

### Q7. The capability-exchange handshake in MCP is: *(Remember)*
A. `start` / `ack`
B. `initialize` / `initialized`
C. `hello` / `world`
D. `connect` / `ready`

---

### Q8. The MCP JSON-RPC method to list available tools is: *(Remember)*
A. `tools/get`
B. `tools/list`
C. `discover/tools`
D. `mcp/tools`

---

### Q9. MCP "resources" are BEST described as: *(Understand)*
A. Model checkpoints
B. Read-only URI-addressable data sources (files, DB queries, API endpoints) that the user/model can attach to context
C. Bash scripts the model runs
D. Server-side environment variables

---

### Q10. The MAIN reason to use HTTP+SSE transport instead of stdio: *(Understand)*
A. Better latency
B. The server is remote (cloud-hosted) or multi-user
C. Simpler auth
D. JSON-RPC requires HTTP

---

### Q11. The PRIMARY security risk of installing a community MCP server locally is: *(Understand)*
A. The server is sandboxed by the protocol, no risk
B. The server process inherits your local permissions and can exfiltrate data or run arbitrary code if malicious
C. The server cannot read environment variables
D. It will slow down your computer

---

### Q12. MCP relates to Claude tool_use as follows: *(Understand)*
A. MCP replaces tool_use
B. MCP is the discovery/transport layer ABOVE tool_use; they compose
C. They are unrelated
D. tool_use is a subset of MCP

---

### Q13. A Postgres MCP server should typically be exposed with: *(Apply)*
A. Superuser DB access
B. A dedicated read-only role with grants on a specific schema, plus row-level security where needed
C. Direct connection-string passthrough from the model
D. No auth at all

---

### Q14. MCP "prompts" are: *(Understand)*
A. System prompts for Claude
B. Server-defined parameterized prompt templates the user can pick from a menu in the host
C. The same as XML tags
D. Audit logs

---

### Q15. A user wants Claude Desktop to access a GitHub repo. The MOST appropriate setup: *(Apply)*
A. Paste their PAT into the chat
B. Configure the `@modelcontextprotocol/server-github` MCP server with the PAT in the `env` block of the server config
C. Modify Claude's training data
D. There is no way to integrate GitHub

---

### Q16. In the claude-code CLI, MCP-provided tools typically appear with the prefix: *(Remember)*
A. `tool_`
B. `mcp__`
C. `ext_`
D. `plugin_`

---

### Q17. The unified network transport being standardized as the successor for remote MCP servers is called: *(Remember)*
A. Streamable HTTP
B. WebSocket++
C. gRPC-over-MCP
D. None, SSE is final

---

### Q18. An MCP server publishes 5 tools. Adding it to a host app exposes: *(Understand)*
A. 5 tools to the model (each prefixed/namespaced by the host)
B. 1 mega-tool
C. Nothing, must rewrite each tool
D. The model decides which to ignore

---

### Q19. The MAIN benefit of an "MCP-first" architecture (per Block's Goose team) is: *(Analyze)*
A. Cheaper inference
B. Pay engineering effort ONCE per integration and reuse it across every MCP-aware AI tool
C. Eliminates rate limits
D. Replaces the need for prompts

---

### Q20. A team adds 12 MCP servers to their Claude Desktop and the model becomes confused about which tool to use. The MOST APPROPRIATE next step: *(Apply)*
A. Add more servers
B. Reduce or namespace tools surfaced to the model; consider per-conversation server enabling rather than always-on; or split via hierarchical agents
C. Switch to Opus
D. Disable MCP entirely

---

### Q21. The MCP protocol allows a server to NOTIFY clients when its tool list changes via: *(Remember)*
A. `tools/refresh`
B. `notifications/tools/list_changed`
C. `tools/update`
D. There is no notification mechanism

---

### Q22. MCP is: *(Understand)*
A. Anthropic-only
B. An open, model-agnostic specification; adopters include multiple AI applications and clients
C. Tied to GPT
D. Proprietary to Cursor

---

### Q23. The simplest way to TRY an existing MCP server is: *(Apply)*
A. Write your own from scratch
B. Run `npx -y @modelcontextprotocol/server-filesystem /path/to/dir` (or equivalent) and wire it into a config file
C. Submit a PR to Anthropic
D. Wait for a GA release

---

### Q24. Which statement about MCP is FALSE? *(Evaluate)*
A. MCP supports tools, resources, and prompts as primitives
B. MCP servers can run locally or remotely
C. MCP requires Claude as the model
D. MCP uses JSON-RPC 2.0

---

### Q25. Design challenge: Architect a "team copilot" using Claude Desktop with MCP servers for: GitHub, Notion, read-only Postgres, and Slack. List the most important security controls: *(Create)*

> *Create-level note:* multiple concerns must be addressed.
A. None needed
B. Per-server least-privilege auth (PAT scopes, OAuth grants, RO DB role) + audit logs of every tool call + approved-server allowlist + tracking server source/version + periodic re-review
C. Trust all community servers
D. Disable all auth and rely on Claude refusing to do bad things

---

## 🎯 Answers + Explanations

### Q1: **C. November 2024**
Specifically November 25, 2024. Anthropic announced and open-sourced spec + SDKs + reference servers in one move.

### Q2: **C. JSON-RPC 2.0**
The wire protocol. Transport-agnostic on top.

### Q3: **A. Tools, resources, prompts**
The three first-class primitives. Tools are mandatory-ish; resources and prompts are optional capabilities.

### Q4: **A. stdio and HTTP+SSE**
The most common transports today. Streamable HTTP is the consolidating successor.

### Q5: **B. Sees tool definitions via Messages API; the host translates MCP → Anthropic tools**
Claude itself doesn't speak MCP. The MCP client converts.

### Q6: **B. A subprocess command in the config; stdio transport**
The classic Claude Desktop pattern: `command` + `args` + optional `env`.

### Q7: **B. `initialize` / `initialized`**
Client sends `initialize`, server replies, client sends `initialized` notification to confirm.

### Q8: **B. `tools/list`**
JSON-RPC method name. Pairs with `tools/call`.

### Q9: **B. Read-only URI-addressable data sources**
Files, DB tables, API endpoints, anything URI-addressable that the user (or model) wants to attach as reference data.

### Q10: **B. The server is remote or multi-user**
stdio is local-only by nature. HTTP+SSE is for scaled / shared / cloud deployments.

### Q11: **B. The server inherits your local permissions**
No sandbox by default. Audit community servers before installing.

### Q12: **B. MCP is above tool_use; they compose**
MCP is the inter-process / cross-vendor layer; tool_use is the model-side runtime.

### Q13: **B. Dedicated read-only role + appropriate grants + RLS**
Least privilege. Don't expose superuser via the model.

### Q14: **B. Server-defined parameterized prompt templates picked from a menu**
A way for a server to offer "starter recipes" to users.

### Q15: **B. Configure the official server with PAT in `env`**
Use the standard server. Never paste secrets into chat.

### Q16: **B. `mcp__`**
Disambiguates MCP-provided tools from built-ins.

### Q17: **A. Streamable HTTP**
The unified network transport in newer spec versions.

### Q18: **A. 5 tools to the model**
Each is surfaced individually. Hosts often namespace by server.

### Q19: **B. Pay once per integration, reuse across tools**
Block's stated rationale. The reuse compounds.

### Q20: **B. Reduce or namespace; per-conversation enable; or hierarchical agents**
Tool-surface too large. Standard agent-design fix.

### Q21: **B. `notifications/tools/list_changed`**
Server notification convention. Clients react by re-listing.

### Q22: **B. Open, model-agnostic; multi-adopter**
The spec is published as an open standard; adopters include many AI apps, not just Claude clients.

### Q23: **B. Run `npx ...` and wire into config**
The fastest way: official servers are one `npx` command away.

### Q24: **C. MCP requires Claude as the model**
FALSE. The spec is model-agnostic; other model vendors and apps adopt it too.

### Q25: **B. Per-server least-privilege auth + audit logs + allowlist + version tracking + periodic review**
Defense in depth. This is real enterprise MCP architecture.

---

## 📊 Score Yourself

- 24–25/25 → 🏆 Module 5 mastered.
- 21–23/25 → ✅ Solid.
- 17–20/25 → ⚠️ Re-read the transports + handshake sections.
- <17/25 → 🔁 Restart the Reading.md.

---

## 🃏 Add To Your Flashcards

- MCP announced: **Nov 25, 2024**
- Wire: **JSON-RPC 2.0**
- Primitives: **tools / resources / prompts**
- Transports: **stdio** (local), **HTTP+SSE** (remote), **Streamable HTTP** (newer)
- Methods: `tools/list`, `tools/call`, `resources/list`, `resources/read`, `prompts/list`, `prompts/get`
- Handshake: `initialize` / `initialized`
- Claude Desktop config: `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS)
- claude-code tool prefix: `mcp__<server>__<tool>`
- Security: transport-dependent; local stdio inherits user perms

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 6, Agentic Patterns](../Module-06-Agentic-Patterns/Reading.md)
