# Auth & Entitlements Design — The Cert Hub on Cloudflare

Status: design draft (Phase 3 of the Cloudflare migration plan).
Owner: Humayun Zafar (super-user).

---

## 1. User roles

The system supports three roles. **Every check the Worker does branches on role first.**

| Role | Who | Scope |
|---|---|---|
| **`superuser`** | Syed (site owner / developer) | **Full access to everything, always.** No entitlement checks. Can read every course, every module, every admin page. Bypasses every paywall, every drip-release schedule, every "subscription required" gate. Has full read/write on the Manage Users admin UI. Multiple super-users can exist. |
| **`admin`** | Future delegated staff (TBD) | Same as super-user except cannot create or delete other admins/super-users. Can manage `student` users and their entitlements. |
| **`student`** | Paying users | Sees public pages (homepage, course landing pages, module list, navigation). Can only open module content (Reading / Videos / Quiz / Cheat-Sheet / Practice-Exams / Flashcards) for courses they have an entitlement for. Other courses' content shows "🔒 Subscription Required". |

### Hard rule for the super-user
Super-user is **not** subject to:
- Course-level entitlement checks
- Time-based access (e.g. "expires after 1 year")
- Drip release (e.g. "Module 5 unlocks after 7 days")
- Rate limiting on admin endpoints
- "First-time login" flows
- Any future paywall, content lock, or beta-feature flag

The Worker's first check on every request:
```js
if (user.role === 'superuser') return serveContent();  // skip every gate
```

---

## 2. KV schema (Cloudflare KV namespace: `CERT_HUB_USERS`)

Key pattern: `user:<email>` → JSON value.

### Super-user record (mine)
```json
{
  "email": "syed@transcrypts.com",
  "role": "superuser",
  "created_at": "2026-05-21T00:00:00Z",
  "courses": "*",
  "notes": "Site owner. Never modify or delete without explicit out-of-band confirmation."
}
```

`"courses": "*"` is a sentinel meaning "all current and future courses". Even if the Worker logic for super-users somehow gets bypassed, the wildcard ensures all course content still resolves.

### Student record (example)
```json
{
  "email": "student@example.com",
  "role": "student",
  "created_at": "2026-05-21T00:00:00Z",
  "courses": ["03-AWS-Cloud-Practitioner", "05-Azure-Fundamentals"],
  "subscription_ends_at": "2027-05-21T00:00:00Z",
  "notes": "Self-signup via Stripe webhook 2026-05-21."
}
```

### Admin record (future)
```json
{
  "email": "support@certhub.com",
  "role": "admin",
  "created_at": "...",
  "courses": "*",
  "can_manage": ["student"]
}
```

---

## 3. Worker request flow

```
Request → Cloudflare Pages (static asset cache) → Cloudflare Worker (auth + gate)
                                                          │
                                                          ├── Public path? (/, /version.txt, /assets/*, /<NN>-X/README/, /00-Study-Plan/*, /Resources/*)
                                                          │       → serve as-is, no auth required
                                                          │
                                                          ├── Admin path? (/admin/*)
                                                          │       → require user authenticated via Cloudflare Access
                                                          │       → load user record from KV
                                                          │       → if role is superuser or admin → serve
                                                          │       → else → 403
                                                          │
                                                          └── Course content? (/<NN>-X/Module-*/<Page>/ or /<NN>-X/Practice-Exams/* or /<NN>-X/Flashcards/)
                                                                  → require Cloudflare Access authentication
                                                                  → load user record from KV
                                                                  → if user.role === 'superuser' || user.role === 'admin' → serve  ← THIS LINE GUARANTEES SUPER-USER FULL ACCESS
                                                                  → if user.courses === '*' → serve
                                                                  → if requested course slug is in user.courses → serve
                                                                  → else → 403 with "Subscription Required" template
```

### Public paths (visible to anyone, no auth)
- Homepage `/`
- Course landing pages `/<NN>-X/` (README — so the cert lists, "what you'll learn", and module names stay visible to non-paying visitors)
- Static assets `/assets/*`
- Build version endpoint `/version.txt`
- Site-wide resources `/00-Study-Plan/*`, `/Resources/*`

### Gated paths (require auth + entitlement)
- `/<NN>-X/Module-<XX>-*/<Reading|Videos|Quiz|Cheat-Sheet>/`
- `/<NN>-X/Practice-Exams/<exam>/`
- `/<NN>-X/Flashcards/`
- `/admin/*`

### "Visible but locked" UX
When a student hits a gated path they don't have entitlement for, the Worker returns a 200 with a "Subscription Required" page that:
- Renders inside the normal site chrome (so sidebar still shows all 13 tracks)
- Shows the course's title + the module name they tried to open
- Has a "Subscribe to unlock" CTA → Stripe checkout (in Phase 5b)

This way the user sees the BREADTH of what's available without seeing the content of what they haven't paid for — exactly what was requested.

---

## 4. Super-user safety guarantees

These are enforced in the Worker code, in the verifier, and in the admin UI:

1. **The list of super-user emails is in code, not just KV.** The Worker has a hardcoded constant `SUPERUSER_EMAILS = ['syed@transcrypts.com', ...]` so even if KV is wiped or corrupted, super-users still authenticate as super-users.
2. **Super-users cannot be deleted from the admin UI.** The Delete button on the admin Users table is disabled for any user whose email is in the `SUPERUSER_EMAILS` constant.
3. **Super-users cannot have their role downgraded from the admin UI.** Same enforcement.
4. **Super-users always have `courses: "*"`** — the Worker treats this as "all current and future courses, no expiration."
5. **The verifier** (a future check in `scripts/verify-baseline.py`) will assert that the SUPERUSER_EMAILS list is non-empty and includes `syed@transcrypts.com`.

---

## 5. Initial super-user list

To start (will go in the Worker code as a constant when we get to Phase 3):

```js
const SUPERUSER_EMAILS = [
  "syed@transcrypts.com",   // Humayun Zafar — site owner / developer
  // Add more by edit + redeploy. Never managed from the admin UI.
];
```

If you want to add a second super-user later (e.g. a co-founder), it's a code change + redeploy — explicit, version-controlled, and visible in git history.

---

## 6. Cloudflare Access policy

Phase 2 sets up two Access Applications:

### Application 1: `/admin/*`
- Policy: only emails in `SUPERUSER_EMAILS` (`syed@transcrypts.com`)
- Session duration: 7 days
- Identity provider: Cloudflare Access magic link (no password needed)

### Application 2: `/(03|04|...|13)-*/Module-*` and other gated content (defined by URL pattern)
- Policy: any authenticated email (Cloudflare Access magic link or future Google OAuth)
- Session duration: 30 days
- The Worker then does the per-course entitlement check after Access lets the request through

This means: super-user logs in once → 7-day session to admin area → can manage everything. Students log in once → 30-day session → can read whichever courses they paid for. Cloudflare Access handles the "is this person really who they say they are" step; the Worker handles "what are they allowed to see".

---

## 7. Build order

1. **Phase 1 (this session):** Cloudflare Pages set up alongside GitHub Pages. No auth yet. Public site serves at `cert-hub.pages.dev`.
2. **Phase 2:** Cloudflare Access on `/admin/*` only. Super-user can log in; nothing exists at `/admin/` yet.
3. **Phase 3:** Worker + KV. Super-user gets full access on every request via the hardcoded list. Student records can be created manually via KV CLI. "Subscription Required" page wired in.
4. **Phase 4:** `/admin/` UI for the super-user to create/edit/delete student records.
5. **Phase 5:** Cutover from GitHub Pages → Cloudflare Pages. GitHub Pages disabled or kept as redirect.
6. **Phase 5b (optional):** Stripe checkout for self-serve student signup.

---

## 8. What this guarantees you (the super-user)

- Day 1 of Cloudflare auth: you can read every page on the site, every time, with no friction beyond the initial magic-link login (7-day session).
- You will **never** be locked out by your own paywall.
- You can manage users without ever needing developer/SSH/CLI access.
- If you forget your magic link email or change emails, the SUPERUSER_EMAILS list is in code and a quick git commit lets you add the new one.
- Your access is enforced at THREE levels: Cloudflare Access (identity), Worker code (role check), and admin UI (no self-demote).
