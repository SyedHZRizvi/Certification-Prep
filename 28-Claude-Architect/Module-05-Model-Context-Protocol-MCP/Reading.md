# Module 5: Model Context Protocol (MCP) 🔌

> **Why this module matters:** Tool use (Module 4) tells you how Claude *requests* a tool. MCP tells you how that tool gets *discovered, connected, and shared across applications*. Announced by Anthropic on **November 25, 2024**, the **Model Context Protocol** is the open standard that turned "every agent reinvents its own tool surface" into "every Claude app speaks the same plug protocol." If tool use is USB, MCP is the USB-C spec — the part the industry agrees on.

> **Prerequisites for this module.** You should be comfortable with:
> - Module 4 (Claude tool use semantics)
> - Basic HTTP and JSON-RPC concepts
> - Standard I/O and process spawning (`stdin`, `stdout`, subprocess)
> - The general idea of "client/server architecture"

---

## 📖 A Story: The Day Cursor Made Every Tool a Plugin

It is December 2024. The Cursor team — already shipping the most popular AI code editor in the world — adds support for "MCP servers" to the Cursor settings panel. With three checkboxes, a Cursor user can give Claude (running inside Cursor) tools that read GitHub issues, query a Postgres database, control a Figma file, take screenshots through Playwright, or chat with Linear. None of these tools were written by the Cursor team. They were written by anyone — Anthropic, GitHub, the Postgres community, a 22-year-old hacker in Sao Paulo — and they all work because they all speak the **Model Context Protocol**.

Three months earlier this would have been impossible. Each AI app had a bespoke tool integration. The Cursor team wrote `read_file` and `edit_file` themselves. The Aider team wrote *their* `read_file` and *their* `edit_file`. The Lindy team wrote *theirs*. The same tools, three times. The same maintenance burden, three times. The same security review, three times.

What changed: on November 25, 2024, Anthropic published the **Model Context Protocol** as an open spec and shipped reference implementations (in Python and TypeScript) and a starter library of MCP servers (filesystem, GitHub, Slack, Postgres, sqlite, Brave Search, fetch, memory, time, puppeteer, gdrive, gmaps). MCP was Anthropic's contribution to a problem the entire industry had: *the tool layer needs a standard before AI agents are useful at scale*.

By Q1 2026, **Claude Desktop**, **Cursor**, **Windsurf**, **Zed**, **Sourcegraph Cody**, **Lindy**, **Block (Square)**, **Replit**, **Apollo MCP for Salesforce**, and dozens of others have shipped MCP-client support. There is a public MCP server registry. Building a "Claude integration" for your SaaS company means **building one MCP server** and the entire ecosystem can use it. This module is how that works.

---

## 🧬 What MCP Actually Is (One Paragraph)

The Model Context Protocol is a **JSON-RPC 2.0 based protocol** for an AI application (the **client**, often the host of a Claude session) to discover and use **tools, resources, and prompts** exposed by an external process (the **server**). The protocol is transport-agnostic — typically **stdio** (the server runs as a subprocess of the client) or **SSE / HTTP** (the server runs as an HTTP service the client connects to). The protocol specifies: capability negotiation, tool discovery (`tools/list`), tool invocation (`tools/call`), resource discovery (`resources/list`), resource read (`resources/read`), prompt discovery (`prompts/list`), prompt get (`prompts/get`), and a few admin/notification methods.

That sentence is the whole module in compressed form. The rest is making it operational.

---

## 🏛️ The MCP Architecture

```
┌──────────────────────────────────────────────────────────────┐
│  CLIENT (AI app — Claude Desktop / Cursor / your app)        │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐  │
│  │  Claude model (via Anthropic API)                      │  │
│  └────────────────────────────────────────────────────────┘  │
│                          ▲                                   │
│   Tool definitions       │     Tool call results             │
│                          │                                   │
│  ┌────────────────────────────────────────────────────────┐  │
│  │  MCP CLIENT LIBRARY (in the host app)                  │  │
│  └────────────────────────────────────────────────────────┘  │
│             │              │             │                   │
│      stdio  │      HTTP    │       SSE   │                   │
│             ▼              ▼             ▼                   │
└─────────────│──────────────│─────────────│───────────────────┘
              │              │             │
   ┌──────────┴──┐   ┌───────┴────┐  ┌─────┴──────┐
   │ MCP SERVER  │   │ MCP SERVER │  │ MCP SERVER │
   │ filesystem  │   │  github    │  │  postgres  │
   │ (local)     │   │  (remote)  │  │  (local)   │
   └─────────────┘   └────────────┘  └────────────┘
```

The roles:

- **Client / Host** — the application running Claude. It owns the user's session and the model. It connects to one or more MCP servers and *exposes the servers' tools to Claude*.
- **Server** — a process (local or remote) that implements the MCP protocol and offers tools, resources, and prompts. Independent of any particular model.
- **Transport** — stdio (subprocess pipes) or HTTP+SSE. Stdio is the most common for local servers.

Critically: **Claude does not "know about MCP."** Claude only sees the tool definitions in the API call (Module 4). The MCP client converts MCP-served tools into Claude-API tool definitions and routes tool_use calls back to MCP servers. MCP is a layer *above* the Anthropic API, not inside it.

🎯 **Exam pattern:** *"Where does MCP sit in relation to the Anthropic Messages API?"* → **MCP is an interop layer above the Messages API; Claude itself doesn't speak MCP, the client does and surfaces the tools through standard tool_use.**

---

## 🧱 The MCP Primitives — Tools, Resources, Prompts

MCP defines three first-class primitives. All clients support tools at minimum; many also support resources and prompts.

### Tools (most important)

Tools are model-controllable functions. Same shape as Claude tool definitions — `name`, `description`, `inputSchema` (camelCase in JSON-RPC). The MCP client surfaces these to Claude as Claude-API tool definitions. The model decides when to call them; the call routes through the MCP client to the server.

```json
// Server response to tools/list
{
  "tools": [
    {
      "name": "create_issue",
      "description": "Create a GitHub issue in the specified repository.",
      "inputSchema": {
        "type": "object",
        "properties": {
          "repo": {"type": "string"},
          "title": {"type": "string"},
          "body": {"type": "string"},
          "labels": {"type": "array", "items": {"type": "string"}}
        },
        "required": ["repo", "title"]
      }
    }
  ]
}
```

### Resources (next most common)

Resources are **read-only data sources** the user (or sometimes the model) can attach to context. Examples: a file at `file:///Users/alice/notes/today.md`, a Postgres table at `postgres://db/users`, a GitHub README at `github://owner/repo/README.md`. The client typically lets the user pick which resources to inject into a session; some clients let the model request resources via tools.

```json
// Server response to resources/list
{
  "resources": [
    {
      "uri": "file:///workspace/architecture.md",
      "name": "Architecture Doc",
      "description": "System architecture overview",
      "mimeType": "text/markdown"
    }
  ]
}
```

### Prompts (less common but powerful)

Prompts are **server-defined parameterized prompt templates** the user can pick from a menu in the host. Useful for "agent recipes" — `summarize_pr`, `code_review`, `refactor_with_tests`.

```json
// Server response to prompts/list
{
  "prompts": [
    {
      "name": "summarize_pr",
      "description": "Summarize a GitHub pull request, including diff impact analysis.",
      "arguments": [
        {"name": "repo", "required": true},
        {"name": "pr_number", "required": true}
      ]
    }
  ]
}
```

🎯 **Exam pattern:** *"Name the three MCP primitives."* → **Tools, resources, prompts.**

---

## 🚌 Transports — stdio vs SSE / HTTP

MCP is transport-agnostic. In practice you'll see two:

### stdio transport (most common for local)

The client spawns the server as a child process. They communicate via JSON-RPC 2.0 messages on the server's stdin/stdout. One process per server.

```json
// Claude Desktop config snippet
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/Users/alice/workspace"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {"GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_xxxxx"}
    }
  }
}
```

Pros: simplest auth (env vars), no network surface, low latency.
Cons: one-machine only; the client must be able to spawn processes.

### HTTP + SSE transport (for remote servers)

The server is a long-running HTTP service. The client opens an SSE connection for server-pushed messages and POSTs requests on a separate endpoint. Useful for multi-user, cloud-hosted MCP servers (e.g., a Slack server that lives in your cloud).

```typescript
// Pseudocode client init
const transport = new SSEClientTransport(new URL("https://my-mcp-server.example.com/sse"));
const client = new MCPClient({name:"myapp", version:"1.0"}, {capabilities:{}});
await client.connect(transport);
```

Pros: remote, scalable, multi-tenant.
Cons: needs proper auth (OAuth, API keys, mTLS), network reliability, more complex deployment.

A newer **Streamable HTTP** transport is being standardized as the unified successor; check current MCP spec for status.

🎯 **Exam pattern:** *"For a local Claude Desktop integration to your team's PostgreSQL, which transport is the simplest?"* → **stdio** (server spawned as subprocess).

---

## 🤝 Capability Negotiation & Lifecycle

When a client connects to a server, they exchange capabilities. Negotiation is JSON-RPC `initialize` → `initialized` notification.

```
Client → Server : initialize { capabilities: { tools: {}, resources: {}, prompts: {} } }
Server → Client : initialize-response { capabilities: { tools: {listChanged: true}, ... } }
Client → Server : initialized (notification — confirms handshake complete)
... normal RPC traffic ...
```

After init, the client knows which primitives the server supports and which features (e.g., `listChanged` notifications) it implements.

The standard JSON-RPC method names you must recognize:

| Method | What it does |
|--------|--------------|
| `initialize` | Handshake & capability exchange |
| `initialized` | Confirm handshake (notification) |
| `tools/list` | List available tools |
| `tools/call` | Invoke a tool with args |
| `resources/list` | List resources |
| `resources/read` | Read a resource by URI |
| `prompts/list` | List prompts |
| `prompts/get` | Get a prompt template with args |
| `notifications/tools/list_changed` | Server pushes when its tool list changes |
| `logging/setLevel` | Adjust server log verbosity |
| `ping` | Keepalive |

---

## 🛠️ Building Your First MCP Server (Python)

The official Python SDK is `mcp` (`pip install mcp`).

```python
# server.py — a tiny MCP server exposing two tools and one resource
import asyncio
from mcp.server import Server
from mcp.server.stdio import stdio_server
from mcp.types import Tool, TextContent, Resource

server = Server("hello-world")

# ---------- Tools ----------
@server.list_tools()
async def list_tools() -> list[Tool]:
    return [
        Tool(
            name="add",
            description="Add two integers and return the sum.",
            inputSchema={
                "type": "object",
                "properties": {
                    "a": {"type": "integer"},
                    "b": {"type": "integer"}
                },
                "required": ["a", "b"]
            }
        ),
        Tool(
            name="greet",
            description="Generate a greeting for a given name.",
            inputSchema={
                "type": "object",
                "properties": {"name": {"type": "string"}},
                "required": ["name"]
            }
        )
    ]

@server.call_tool()
async def call_tool(name: str, arguments: dict) -> list[TextContent]:
    if name == "add":
        result = arguments["a"] + arguments["b"]
        return [TextContent(type="text", text=str(result))]
    if name == "greet":
        return [TextContent(type="text", text=f"Hello, {arguments['name']}!")]
    raise ValueError(f"Unknown tool: {name}")

# ---------- Resources ----------
@server.list_resources()
async def list_resources() -> list[Resource]:
    return [
        Resource(
            uri="hello://manifesto",
            name="Manifesto",
            description="A short manifesto.",
            mimeType="text/plain"
        )
    ]

@server.read_resource()
async def read_resource(uri: str) -> str:
    if uri == "hello://manifesto":
        return "Be kind. Ship working code. Document for the next person."
    raise ValueError(f"Unknown resource: {uri}")

# ---------- Boot ----------
async def main():
    async with stdio_server() as (read, write):
        await server.run(read, write, server.create_initialization_options())

if __name__ == "__main__":
    asyncio.run(main())
```

To wire this into Claude Desktop, add to `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS):

```json
{
  "mcpServers": {
    "hello-world": {
      "command": "python",
      "args": ["/Users/you/server.py"]
    }
  }
}
```

Restart Claude Desktop. Open a new chat, type "use the `add` tool to compute 17 + 25" and watch it work.

---

## 🛠️ Building Your First MCP Server (TypeScript)

The official TS SDK is `@modelcontextprotocol/sdk`.

```typescript
// server.ts
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";

const server = new Server(
  { name: "hello-world", version: "1.0.0" },
  { capabilities: { tools: {}, resources: {} } }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "add",
      description: "Add two integers and return the sum.",
      inputSchema: {
        type: "object",
        properties: { a: { type: "integer" }, b: { type: "integer" } },
        required: ["a", "b"]
      }
    }
  ]
}));

server.setRequestHandler(CallToolRequestSchema, async (req) => {
  const { name, arguments: args } = req.params;
  if (name === "add") {
    return { content: [{ type: "text", text: String((args.a as number) + (args.b as number)) }] };
  }
  throw new Error(`Unknown tool ${name}`);
});

const transport = new StdioServerTransport();
await server.connect(transport);
```

---

## 🧭 Discovery, Registries, and the MCP Ecosystem

By Q1 2026 the MCP ecosystem includes:

- **Anthropic's reference servers** — filesystem, github, gitlab, postgres, sqlite, brave-search, fetch, memory, puppeteer, gdrive, google-maps, slack, sentry, time
- **Block (Square), GitLab, Replit, Apollo (Salesforce MCP), Cloudflare, Stripe, Linear, Notion, Atlassian, Figma, MongoDB, Snowflake** — first-party MCP servers from these companies
- **Community registries** — searchable indexes like `mcp.so`, `mcphub`, the official Anthropic spec site listings
- **Claude Code** — Anthropic's CLI exposes MCP server config; many users add 5–15 servers
- **Cursor / Windsurf / Zed / Cody** — all expose MCP server configuration in settings

The pattern: a SaaS company publishes an MCP server (often `npx`-runnable). Any MCP-aware AI app can adopt it in two lines of config. The flywheel — more clients → more value to publish a server → more servers → more reason to be a client — is precisely the "USB-C for AI" story.

---

## 🔒 Security & Auth in MCP

MCP is transport-agnostic; security depends on the transport.

### Local / stdio

- Server runs with the **user's local permissions** (file access, env vars, sockets).
- Auth is usually via **environment variables** (`GITHUB_PERSONAL_ACCESS_TOKEN`, `DATABASE_URL`).
- Threats: a malicious MCP server could exfiltrate data, run arbitrary code. **Audit before installing.**

### Remote / HTTP + SSE

- Server needs proper auth — **OAuth 2.0**, **API keys**, **mTLS**, depending on deployment.
- The 2025 spec evolution added a recommended **OAuth-style flow** for remote MCP authorization.
- Threats: standard HTTP threats (TLS termination, replay, SSRF) plus tool-injection threats (a malicious server could expose tools that lie about what they do).

### Tool-call authorization

Independent of transport: just because the model calls a tool doesn't mean the server should execute it. Re-validate caller identity & scope in the server. Default to "deny unless permitted."

🚨 **Trap on the exam:** *"MCP servers are sandboxed by default."* — FALSE. Server processes inherit the spawning user's permissions. Security is the operator's responsibility.

---

## 🆚 MCP vs Function Calling vs LangChain Tools

| Layer | What it is | Stable / standardized? |
|-------|------------|------------------------|
| **Anthropic Messages API tool_use** | Wire-level "model requested a function call" content blocks | Yes; per-model-vendor API |
| **OpenAI function calling** | OpenAI's per-vendor equivalent | Yes; per-model-vendor API |
| **MCP** | Cross-vendor STANDARD for tool discovery and invocation between AI apps and tool servers | Yes; open spec, multi-vendor |
| **LangChain Tools / LlamaIndex Tools** | Python/JS framework abstractions over per-vendor APIs | Library-specific; opinionated |

MCP is *not* a replacement for tool_use. MCP **uses** tool_use under the hood (when the host is Claude). MCP **standardizes the layer above** — discovery, transport, and the contract between independent processes.

🎯 **Exam pattern:** *"Does MCP replace Anthropic's tool_use?"* → **No. MCP composes with tool_use. MCP standardizes tool *discovery and transport*; tool_use is the *model-side runtime mechanism*.**

---

## 🤖 MCP in Claude Code

`claude-code` (the CLI you may be using right now) is an MCP client. The `.claude/settings.json` and per-project `.mcp.json` files list which MCP servers to spawn at startup. Custom MCP servers can be added per-project, per-user, or globally.

Anthropic also exposes a public **MCP server gallery** with one-click installs. Some popular Claude Code MCP servers:

- **GitHub** — issues, PRs, search, releases
- **Filesystem** — beyond the workspace, for cross-repo work
- **Slack** — read channels, post messages
- **Linear** — read/update issues
- **Postgres / SQLite** — query databases
- **Sentry** — read errors, query events
- **Playwright / Puppeteer** — browser automation

When you use these in claude-code, the tools appear in your Bash / Read / etc. tool surface as `mcp__<server>__<tool_name>` (the `mcp__` prefix disambiguates from built-in tools).

---

## 🔬 Scenario Walkthrough

> **Scenario:** Your engineering org wants a "company copilot" — Claude Desktop, with access to GitHub issues, internal documentation (Notion), the production Postgres database (read-only), and the team Slack. How do you architect this with MCP, and what is the security review?

**Walkthrough:**

1. **Identify MCP servers needed:**
   - GitHub: official `@modelcontextprotocol/server-github` (stdio, PAT auth)
   - Notion: official Notion MCP server (HTTP, OAuth)
   - Postgres: official `@modelcontextprotocol/server-postgres` — but use a **read-only role** with row-level security as appropriate (critical)
   - Slack: official Slack MCP server (OAuth)

2. **Deployment model:**
   - Each developer's Claude Desktop runs the four servers locally via `npx`
   - OR a centrally hosted "team copilot" runs them in a managed environment (more scale, more security work)

3. **Auth:**
   - GitHub: PAT scoped to `read:org`, `repo:status`, `pull:read` minimum
   - Notion: org-level OAuth grant
   - Postgres: dedicated read-only user; no DELETE/UPDATE/DROP perms; per-table grants
   - Slack: bot user with read scope; restricted channels

4. **Security review:**
   - Audit the source of every MCP server (community ones especially)
   - Enforce a list of approved servers via central config push
   - Log all tool calls to Splunk / Datadog for review
   - Periodic re-review when servers update

5. **User UX:**
   - Engineers query naturally: "What's the open issue list for project X with priority high?"
   - Claude routes via the GitHub MCP server, summarizes, surfaces in chat

This is a real organizational architecture as of 2026. Many Fortune 500s are running it.

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Claude understands MCP natively." | Claude only sees tool definitions in the Messages API. The MCP client translates. |
| "MCP replaces tool_use." | They compose. MCP is discovery/transport; tool_use is runtime. |
| "MCP only works with Claude." | The spec is model-agnostic. Other clients/models adopt it too. |
| "MCP servers are sandboxed by default." | Not by the protocol. The OS/container is the sandbox. |
| "MCP is HTTP-only." | Stdio is the most common transport for local servers. |
| "There's no auth in MCP." | Auth is transport- and server-specific; the protocol allows it but doesn't prescribe a single mechanism. |
| "Resources are only for documents." | Any URI-addressable read-only data — DB tables, API endpoints, file paths. |
| "I can't write my own MCP server." | Trivial — the SDKs are <100 LOC for a basic server. |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **MCP** | Model Context Protocol — open standard for AI-to-tool interop, announced by Anthropic Nov 2024 |
| **MCP client** | Application (Claude Desktop, Cursor, etc.) that connects to MCP servers |
| **MCP server** | Process exposing tools/resources/prompts via the MCP protocol |
| **stdio transport** | Subprocess-based transport; client spawns server, JSON-RPC over stdin/stdout |
| **SSE / HTTP transport** | Network transport; client opens SSE to server, posts via HTTP |
| **Streamable HTTP** | Unified network transport in newer spec versions |
| **JSON-RPC 2.0** | The wire protocol MCP uses |
| **Tools** | Model-controllable functions (like Anthropic tool_use) |
| **Resources** | Read-only data sources (file paths, DB queries) the user/model can reference |
| **Prompts** | Server-defined prompt templates the user picks from a menu |
| **Capability negotiation** | The `initialize`/`initialized` handshake exchanging supported features |
| **`tools/list`, `tools/call`** | The two main JSON-RPC methods you'll hit |
| **mcp:// scheme** | Common URI prefix for MCP-referenced resources |
| **MCP server registry** | Public listings of available MCP servers (e.g., mcp.so, official Anthropic gallery) |

---

## 📊 Case Study — Block (Square) and the Goose Agent

**Situation.** Block (the fintech holding company behind Square, Cash App, Tidal) shipped an open-source AI agent called **Goose** in early 2025. Goose is positioned as a "developer agent that can drive your terminal, IDE, and the rest of your dev tooling." It runs primarily on Claude.

**The MCP play.** Goose was MCP-first from day one. Rather than write bespoke integrations to GitHub, JIRA, Confluence, Sentry, Splunk, and the dozens of internal Block tools, Goose's core agent connects to an extensible list of MCP servers. Block's published rationale: "MCP lets us pay engineering effort once per integration and reuse it across every internal AI tool, not just Goose."

**The internal scaling story.** Block has thousands of engineers. Their internal "developer experience" team maintains MCP servers for: Block's internal CI system, the Block design system catalog, the Block internal-incident timeline, the Block API gateway, the Block monorepo tool, and a "memory" server that lets Goose recall facts across sessions. Each is one node in the standard MCP graph. New use cases (e.g., a quarterly retro summarizer) are *prompt + tool selection*, not new integrations.

**Lesson for the architect.**
- **Standardization compounds.** The 6th MCP server is far cheaper than the 6th bespoke integration.
- **MCP servers are reusable across agents.** Goose, Claude Desktop, Cursor, and any future Block-internal AI tool can use the same Postgres MCP server.
- **Reusability changes the build/buy calculus.** Many companies that would have considered "build a custom agent platform" now compose existing MCP-aware clients with their own MCP servers.

**Discussion (Socratic).**
- **Q1:** Block's internal Postgres MCP server exposes a `run_sql` tool. Argue for and against giving it `SELECT *` capability vs constraining it to a list of pre-registered query templates.
- **Q2:** A community-maintained Slack MCP server is buggy and occasionally times out. Block's options: fork, contribute upstream, switch transports, or write their own. Argue the trade-offs.
- **Q3:** What changes if a malicious MCP server gets added to the corporate registry by an insider? Walk through the blast radius and the controls that should prevent it.

---

## ✅ Module 5 Summary

You now know:
- 🧬 **What MCP is** — JSON-RPC 2.0-based interop protocol for AI tool integration; announced Nov 25, 2024
- 🏛️ **Architecture** — clients (Claude Desktop, Cursor, claude-code) ↔ MCP client lib ↔ servers (local or remote)
- 🧱 **Three primitives** — tools, resources, prompts
- 🚌 **Two main transports** — stdio (local subprocess) and HTTP+SSE (remote)
- 🤝 **Handshake** — `initialize` → `initialized` capability negotiation
- 🛠️ **How to build a server** — Python and TypeScript SDKs, <100 LOC for a basic one
- 🧭 **The ecosystem** — Anthropic reference servers, first-party SaaS servers, community registries
- 🔒 **Security** — transport-dependent; local stdio servers inherit user perms; remote needs OAuth/keys
- 🆚 **MCP vs tool_use** — MCP is the discovery/transport layer above tool_use; they compose
- 📊 **Block's Goose / Cursor / Claude Desktop** as real adopters

**Next steps:**
1. 🎥 Watch the curated videos: [Videos.md](./Videos.md)
2. ✏️ Take the quiz: [Quiz.md](./Quiz.md) — aim for 22/26
3. 📋 Review the [Cheat-Sheet.md](./Cheat-Sheet.md)
4. 🛠️ **Hands-on:** Install Claude Desktop. Add the filesystem MCP server. Ask Claude to list files in your home directory. Then build the `hello-world` server above and add it.
5. ➡️ Move on: [Module 6 — Agentic Patterns](../Module-06-Agentic-Patterns/Reading.md)

> **Where this leads.**
> - Inside this course: [Module 6](../Module-06-Agentic-Patterns/Reading.md) shows how to build full agent loops on top of these primitives. [Module 8](../Module-08-Production-Patterns-Safety/Reading.md) covers MCP security in prod.
> - Cross-course: Generative AI Engineer (course 30) covers competing agent frameworks (LangChain, LlamaIndex, AutoGen, CrewAI).
> - Practice: Practice Exam 2 has ~5 questions from this module.

---

## 📚 Further Reading (Optional)

**Primary sources:**
- 📄 [*Model Context Protocol Specification*](https://spec.modelcontextprotocol.io/). The authoritative spec.
- 📄 [*MCP Introduction*](https://modelcontextprotocol.io/introduction). Anthropic's intro doc.
- 📄 [*MCP Python SDK*](https://github.com/modelcontextprotocol/python-sdk). Source + examples.
- 📄 [*MCP TypeScript SDK*](https://github.com/modelcontextprotocol/typescript-sdk). Source + examples.
- 📄 [*Reference MCP servers*](https://github.com/modelcontextprotocol/servers). The Anthropic-maintained collection.

**Case-study / practitioner:**
- 📖 Block / Square. [*Introducing Goose*](https://block.github.io/goose/) — open-source Claude-powered agent.
- 📖 Anthropic. [*Introducing the Model Context Protocol*](https://www.anthropic.com/news/model-context-protocol) — Nov 25, 2024 launch announcement.
- 📖 Public MCP server registries: [mcp.so](https://mcp.so) and similar listings.
