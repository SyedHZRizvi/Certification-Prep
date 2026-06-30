# Cloudflare Functions — drafts

These files are **drafts**, not yet deployed.

## What's here

- `_middleware.js` — the auth + entitlement engine. Runs before every static asset is served. Identifies the user via Cloudflare Access JWT, looks up their KV record, and either lets the request through or returns a "🔒 Subscription Required" page.

## When this gets deployed

During **Phase 3** of the Cloudflare migration. At that point this directory moves to `/functions/` at the repo root (Cloudflare Pages convention).

## What needs to happen before deploy

1. **Phase 1 done**: Cloudflare Pages project exists and serves the site
2. **Phase 2 done**: Cloudflare Access set up on `/admin/*`
3. **KV namespace created**: `CERT_HUB_USERS` in the Cloudflare dashboard
4. **KV binding configured** in Pages project settings: name `CERT_HUB_USERS` → the namespace
5. **Cloudflare Access app extended** to also gate course content paths (so the JWT is present when this middleware runs)

## Local test plan (before deploy)

Once Phase 3 is closer:

```bash
# Install wrangler (Cloudflare CLI)
npm install -g wrangler

# Test locally against a fake KV
wrangler pages dev _site --kv CERT_HUB_USERS

# Pre-populate fake users via wrangler kv
wrangler kv key put --binding=CERT_HUB_USERS \
  "user:test-student@example.com" \
  '{"role":"student","courses":["03-AWS-Cloud-Practitioner"],"subscription_ends_at":"2027-01-01"}'
```

Then visit `http://localhost:8788/03-AWS-Cloud-Practitioner/Module-01-Cloud-Fundamentals/Reading/` with a header simulating Cloudflare Access:

```bash
curl -H "cf-access-jwt-assertion: <fake-jwt-with-email-claim>" \
  http://localhost:8788/...
```

## Super-user guarantees

The constant `SUPERUSER_EMAILS` at the top of `_middleware.js` includes:
- `syed@transcrypts.com`

The middleware does the super-user check **before** any KV lookup or paywall logic. Even if KV is empty, wiped, or unreachable, super-users still get full access.

See `_dev/auth-design.md` for the full design rationale.
