# 📋 Module 5 Cheat Sheet: Model Context Protocol (MCP)

> One page. Pin it next to your editor when you're wiring MCP servers.

---

## 🧬 What MCP Is, in 1 Sentence

An **open JSON-RPC 2.0 protocol** for AI applications (clients) to discover and invoke **tools, resources, and prompts** exposed by external processes (servers), transport-agnostic (stdio / HTTP+SSE / Streamable HTTP).

Announced by Anthropic: **November 25, 2024**.

---

## 🏛️ Roles

| Role | Examples |
|------|----------|
| **Client / Host** | Claude Desktop, Cursor, Windsurf, Zed, claude-code, Cody, Goose |
| **Server** | filesystem, github, postgres, slack, sentry, your-custom-server.py |
| **Transport** | stdio (local), HTTP+SSE (remote), Streamable HTTP (newer) |

Claude itself does NOT speak MCP, the **host translates** MCP tools into Anthropic Messages API tool definitions.

---

## 🧱 Three Primitives

| Primitive | Purpose | Method names |
|-----------|---------|--------------|
| **Tools** | Model-controllable functions | `tools/list`, `tools/call` |
| **Resources** | Read-only URI-addressable data | `resources/list`, `resources/read` |
| **Prompts** | Server-defined prompt templates (user-picked) | `prompts/list`, `prompts/get` |

---

## 🤝 Lifecycle

```
Client → Server : initialize {capabilities:...}
Server → Client : initialize-response
Client → Server : initialized (notification)
... tools/list, tools/call, resources/list, etc ...
Server → Client : notifications/tools/list_changed (when tools change)
```

---

## 🚌 Transports

| Transport | When |
|-----------|------|
| **stdio** | Local subprocess; auth via env vars; one process per server |
| **HTTP + SSE** | Remote / multi-user; needs OAuth or API key auth |
| **Streamable HTTP** | Newer unified network transport |

---

## ⚙️ Claude Desktop Config (macOS path: `~/Library/Application Support/Claude/claude_desktop_config.json`)

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/workspace"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": { "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_xxxxx" }
    },
    "postgres": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres"],
      "env": { "DATABASE_URL": "postgresql://readonly_user:pw@host:5432/db" }
    }
  }
}
```

Restart Claude Desktop after changes.

---

## 🐍 Minimal Python Server

```python
from mcp.server import Server
from mcp.server.stdio import stdio_server
from mcp.types import Tool, TextContent
import asyncio

server = Server("my-server")

@server.list_tools()
async def list_tools() -> list[Tool]:
    return [Tool(name="add",
                 description="Add two integers.",
                 inputSchema={"type":"object",
                              "properties":{"a":{"type":"integer"},"b":{"type":"integer"}},
                              "required":["a","b"]})]

@server.call_tool()
async def call_tool(name: str, args: dict) -> list[TextContent]:
    if name == "add":
        return [TextContent(type="text", text=str(args["a"] + args["b"]))]
    raise ValueError(f"Unknown tool {name}")

async def main():
    async with stdio_server() as (r, w):
        await server.run(r, w, server.create_initialization_options())

asyncio.run(main())
```

---

## 🟦 Minimal TypeScript Server

```typescript
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";

const server = new Server({name:"my-server", version:"1.0"}, {capabilities:{tools:{}}});

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [{
    name: "add",
    description: "Add two integers.",
    inputSchema: {type:"object", properties:{a:{type:"integer"},b:{type:"integer"}}, required:["a","b"]}
  }]
}));

server.setRequestHandler(CallToolRequestSchema, async (req) => {
  if (req.params.name === "add")
    return { content: [{type:"text", text: String((req.params.arguments!.a as number) + (req.params.arguments!.b as number))}] };
  throw new Error("Unknown tool");
});

await server.connect(new StdioServerTransport());
```

---

## 🌐 Popular MCP Servers (2026)

| Server | Use |
|--------|-----|
| `filesystem` | Read/write files in scoped dirs |
| `github` | Issues, PRs, search, releases |
| `gitlab` | Same for GitLab |
| `postgres` / `sqlite` | DB queries |
| `slack` | Read/post messages |
| `linear` | Issue tracking |
| `notion` | Read/write docs |
| `sentry` | Error queries |
| `brave-search` / `web-search` | Web search |
| `fetch` | HTTP fetches |
| `puppeteer` / `playwright` | Browser automation |
| `gdrive` | Google Drive |
| `gmaps` | Google Maps |
| `time` | Time / timezone |
| `memory` | Persistent agent memory |

Find more in public registries (mcp.so, official Anthropic gallery).

---

## 🔒 Security Cheat

| Layer | Control |
|-------|---------|
| Transport | TLS for remote; localhost-only for stdio |
| Auth | env vars (stdio); OAuth / API keys (remote) |
| Authorization | per-server, least privilege (e.g., read-only DB role) |
| Audit | log every tool call with caller + args + result |
| Server provenance | only install audited servers; track versions |
| Sandbox | run in containers/VMs for untrusted servers |
| Allowlist | central config push of approved servers |

---

## 🆚 MCP vs Tool Use vs LangChain

| Layer | Scope | Standardized? |
|-------|-------|---------------|
| Anthropic tool_use | Per-vendor wire-level mechanism | Yes (per-vendor) |
| OpenAI function calling | Same for OpenAI | Yes (per-vendor) |
| **MCP** | **Cross-vendor interop** | **Yes, open spec** |
| LangChain Tools | Library abstraction | Library-specific |

MCP **composes with** tool_use; it does not replace it.

---

## 🏆 Exam Power Phrases

✅ Often **right**:

- "MCP is JSON-RPC 2.0"
- "Three primitives: tools, resources, prompts"
- "stdio = local subprocess; HTTP+SSE = remote"
- "The host translates MCP to Messages API tool definitions"
- "Local stdio servers inherit user permissions"
- "MCP composes with tool_use; does not replace it"

❌ Often **wrong**:

- "Claude speaks MCP natively"
- "MCP only works with Claude"
- "MCP replaces function calling"
- "MCP servers are sandboxed by default"
- "All MCP traffic is HTTP"

---

## 🗓️ Key Facts To Memorize Cold

- Announced: **November 25, 2024**
- Wire: **JSON-RPC 2.0**
- Primitives: **tools / resources / prompts**
- Methods: `tools/list`, `tools/call`, `resources/list`, `resources/read`, `prompts/list`, `prompts/get`
- Handshake: `initialize` / `initialized`
- Transports: **stdio / HTTP+SSE / Streamable HTTP**
- Config file (macOS Claude Desktop): `~/Library/Application Support/Claude/claude_desktop_config.json`
- claude-code prefix: `mcp__<server>__<tool>`
- Module 5 domain: **10% of the assessment**

---

## ✏️ Quick Self-Check

1. Three MCP primitives? ___
2. Two main transports + when to use each? ___
3. The handshake methods? ___
4. Where does MCP sit vs Anthropic tool_use? ___
5. Three security controls for a corporate MCP deployment? ___

If you answer all 5 in 60 seconds, you own this module. ✅

---

➡️ [Module 6: Agentic Patterns](../Module-06-Agentic-Patterns/Reading.md)
