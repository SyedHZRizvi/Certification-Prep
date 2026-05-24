# Auth & Entitlements — Implementation Architecture

**Status:** Implementation in progress (2026-05-23).
**Owner:** Humayun Zafar (super-user).

This document is the authoritative engineering reference for the auth system. The high-level design is in `auth-design.md`. This file is the **how** — what code lives where, request flow, security model, deploy procedure.

---

## 1. Stack choice (decision rationale)

| Component | Choice | Why |
|---|---|---|
| **Hosting** | Cloudflare Pages | Free tier; functions run on every request (server-side enforcement); same Git source as GitHub Pages → no content fork |
| **Auth** | Email magic link via Cloudflare Pages Functions | No third-party identity-provider setup required (no Google OAuth dance, no Cloudflare Access subscription beyond free tier). User enters email → if it's in our users-KV, gets a one-time link → clicks → session cookie set. |
| **Sessions** | Signed JWT in HttpOnly cookie | Stateless, server-side-verifiable, no separate session store needed |
| **User store** | Cloudflare KV namespace `CERT_HUB_USERS` | One read per request; ~10ms latency; free tier is 100k reads/day |
| **Email delivery** | Resend.com API (free tier: 100/day, 3k/mo) | Cleanest API; one env var; no DNS setup required for basic sending |
| **Token signing** | HMAC-SHA256 with secret env var | Standard, no crypto-library dependencies; jose/jsrsasign too heavy for Workers |

---

## 2. KV schema

Namespace binding: `USERS_KV` (Cloudflare dashboard creates this; we bind it in `wrangler.toml`).

### Key patterns

```
user:<email>           → user record (JSON)
magiclink:<token>      → pending magic link (JSON, TTL 15 min)
session:<jti>          → optional session blacklist for revocation (TTL = cookie expiry)
```

### User record

```json
{
  "email": "student@example.com",
  "role": "student" | "admin" | "superuser",
  "courses": ["01-Scrum-Master", "02-PMP"] | "*",
  "created_at": "2026-05-23T19:00:00Z",
  "created_by": "syed@transcrypts.com",
  "last_login": "2026-05-24T08:13:22Z",
  "expires_at": null,  // optional; null = no expiry
  "notes": "Paid annual subscription, renews 2027-05-23"
}
```

### Super-user record (immutable, hardcoded fallback)

```json
{
  "email": "syed@transcrypts.com",
  "role": "superuser",
  "courses": "*"
}
```

**Hardcoded in `functions/lib/superusers.js`** — even if KV is wiped or compromised, the Worker still recognizes the super-user. This is the failsafe.

### Magic link record

```json
{
  "email": "student@example.com",
  "issued_at": "2026-05-23T19:00:00Z",
  "expires_at": "2026-05-23T19:15:00Z"
}
```

Key: `magiclink:<random-32-byte-token>`. TTL on KV entry = 900 seconds (15 min).

---

## 3. Request flow

### 3a. Public request (homepage, marketing, /login)

```
Browser → /                                          (no cookie required)
       → Cloudflare CDN → Pages Functions middleware
       → middleware sees public route → serves directly
```

### 3b. Authenticated request (course content)

```
Browser → /01-Scrum-Master/Module-01-Agile-Mindset/Reading/
       → middleware reads session JWT from HttpOnly cookie
       → verifies signature with env JWT_SECRET
       → if invalid or missing → redirect to /login?next=<original-url>
       → if valid: check claims.role
       → if superuser: serve content
       → else: check if claims.courses includes "01-Scrum-Master"
       → if yes: serve content
       → if no: serve "🔒 Subscription Required" page
```

### 3c. Login flow

```
Browser → /login → user enters email → POST /api/auth/request-link
                                            ↓
                                       middleware
                                            ↓
                            check if email is in USERS_KV
                                            ↓
                       generate magic-link token (32 bytes random)
                                            ↓
                              store in KV with 15-min TTL
                                            ↓
                          send email via Resend with link
                                            ↓
                  user clicks link → /api/auth/verify?token=<token>
                                            ↓
                                       middleware
                                            ↓
                                  look up token in KV
                                            ↓
                          if found and not expired:
                            - delete the magic link from KV
                            - mint JWT { email, role, courses, exp: 30 days }
                            - set as HttpOnly Secure cookie
                            - redirect to original URL (or homepage)
                          if not found or expired:
                            - redirect to /login?error=expired
```

### 3d. Logout

```
Browser → POST /api/auth/logout
       → middleware clears cookie (Set-Cookie with Max-Age=0)
       → redirect to /
```

### 3e. Manage Users (super-user only)

```
Browser → /Manage-Users/  (the admin UI, static HTML)
       → middleware sees authenticated route
       → checks claims.role === "superuser" → if not, 403
       → serves the UI
       → UI calls /api/admin/users via fetch with cookie
       → each API call also checks superuser role
```

---

## 4. File layout

```
functions/
  _middleware.js               # Runs on every request — auth gate
  api/
    auth/
      request-link.js          # POST { email } → sends magic link
      verify.js                # GET ?token=... → sets session cookie
      logout.js                # POST → clears cookie
      me.js                    # GET → returns current session info
    admin/
      users.js                 # GET/POST/PATCH/DELETE — CRUD on users
      courses.js               # GET → list of all courses + ids
  lib/
    jwt.js                     # HS256 sign/verify
    kv.js                      # KV wrapper with typed user/magic-link helpers
    email.js                   # Resend client
    superusers.js              # Hardcoded super-user list (failsafe)
    courses.js                 # The 20-course list (mirrors verify-baseline.py)
    response.js                # Common response helpers (JSON, redirect, error)

login/
  index.html                   # Login page (asks for email)

Manage-Users/
  index.html                   # Super-user admin UI

wrangler.toml                  # Cloudflare config + KV binding
_redirects                     # Pages SPA-style routing hints
```

The `functions/` directory is **the standard Cloudflare Pages Functions convention**. Pages auto-detects and deploys these as Workers on every request.

`_dev/cloudflare-functions/_middleware.js` from the earlier draft is the starting point but will be rewritten for the magic-link flow.

---

## 5. Environment variables / secrets

Set via `wrangler secret put <name>` after Cloudflare Pages project is created.

| Name | Purpose | Example |
|---|---|---|
| `JWT_SECRET` | HMAC-SHA256 signing key | 64 hex chars (use `openssl rand -hex 32`) |
| `RESEND_API_KEY` | Resend.com API key for magic-link emails | `re_xxx...` |
| `EMAIL_FROM` | "From" address for magic links | `auth@certhub.com` or `onboarding@resend.dev` (default Resend sender) |
| `SITE_URL` | Base URL for magic links | `https://certhub.pages.dev` |
| `MAGIC_LINK_TTL_SECONDS` | Magic link expiry | `900` (15 min default) |
| `SESSION_TTL_SECONDS` | Session cookie expiry | `2592000` (30 days default) |

`SUPERUSER_EMAILS` is **hardcoded in code**, not in env vars — by design, so a compromised env var cannot lock out the owner.

---

## 6. Security model

| Threat | Mitigation |
|---|---|
| **Anyone can fetch the raw markdown URL and bypass auth** | Worker runs on every Pages request — every `.html` page is gated. Raw markdown is never served by Cloudflare Pages (Jekyll builds to HTML; only HTML is in the build output). |
| **JS-disabled bypass** | Auth gate is in the Worker (server-side) — JS state is irrelevant. |
| **Session theft via JS** | HttpOnly + Secure + SameSite=Lax cookies. JS cannot read the session cookie. |
| **Magic-link replay** | Magic links are deleted from KV on first use. 15-min TTL provides defense in depth. |
| **Brute-force token guessing** | Magic-link tokens are 32 cryptographically-random bytes (2^256 search space). |
| **JWT tampering** | HS256 signature is verified on every request with the server-side `JWT_SECRET`. |
| **Super-user lockout via KV wipe / corruption** | Super-user emails are HARDCODED in `lib/superusers.js`. If KV returns nothing for a super-user email, the Worker still grants full access. |
| **Compromised admin account adding a fake super-user** | Admins can create/modify `student` users but the Worker rejects any attempt to set `role: superuser` from the API. Only manual KV edits (which require Cloudflare dashboard login) can promote to super-user. |
| **CSRF on /api/admin endpoints** | Server-side: check `Origin` and `Referer` headers match the site. Cookies are SameSite=Lax. |
| **Subdomain takeover** | Cloudflare Access protects the custom domain. |
| **Email-spoofing magic-link phishing** | Resend has SPF + DKIM by default for the `resend.dev` sender. Custom domain requires DNS records (documented in runbook). |

---

## 7. Deploy procedure (the part that needs the user)

This is the runbook the user follows ONCE to flip the switch. After this, all subsequent updates ship via `git push` like today.

Documented in: **`Privacy-Setup/CLOUDFLARE-DEPLOY-RUNBOOK.md`** (created in the same commit).

Minimum user steps:
1. Sign up at [cloudflare.com](https://cloudflare.com) (free; ~3 min)
2. Sign up at [resend.com](https://resend.com) (free; ~2 min)
3. Cloudflare dashboard → Workers & Pages → connect GitHub → import the repo → set build settings (~5 min)
4. Create KV namespace `USERS_KV` (~1 min, 2 clicks)
5. Set the 5 environment variables in Pages settings (~3 min)
6. Seed initial KV entries via `wrangler kv:key put` (or just one-click via dashboard for super-user) (~2 min)

**Total: ~15 min of dashboard work.** All the code is already in the repo by the time the user starts.

---

## 8. What stays on GitHub Pages

The current `syedhzrizvi.github.io/Certification-Prep/` URL keeps working — students who paid for the existing setup are unaffected.

The new gated experience lives at `cert-hub.pages.dev` (or custom domain once user adds one). Once the user is satisfied with the gated version, they can:
- Add a custom domain to Cloudflare Pages
- Add a redirect from GitHub Pages → Cloudflare URL (or leave GitHub as a preview)
- Eventually retire GitHub Pages

---

## 9. Implementation order

1. `lib/` modules (jwt, kv, email, superusers, courses, response)
2. `_middleware.js` (the gate)
3. `api/auth/*.js` (login/verify/logout/me)
4. `api/admin/*.js` (CRUD)
5. `/login/index.html` (login page)
6. `/Manage-Users/index.html` (admin UI)
7. `wrangler.toml` + `_redirects`
8. `CLAUDE.md` update — document the new auth layer
9. Privacy-Setup runbook
10. Local test via `wrangler pages dev`
11. Commit + push to GitHub
12. Hand runbook to user

---

## 10. What will NOT work until the user does the runbook

- Cloudflare Pages site is not deployed yet
- KV namespace doesn't exist yet
- No magic links can be sent (no Resend account)
- No environment variables are set
- Existing GitHub Pages site is completely unaffected (no gates added)

Everything in this commit is **inert until the user activates Cloudflare Pages**. Zero risk to the current live site.
