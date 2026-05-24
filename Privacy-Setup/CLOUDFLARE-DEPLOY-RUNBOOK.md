# Cloudflare Pages — One-Time Activation Runbook

**Audience:** Humayun (site owner / super-user).
**Time:** ~15 minutes of dashboard clicks. No coding required.
**Risk:** Zero — your existing GitHub Pages site (`syedhzrizvi.github.io/Certification-Prep/`) stays running and untouched throughout. This adds a NEW gated URL alongside it.

After you finish this runbook **once**, the auth system is live. From then on, all future code changes deploy automatically via `git push` (same as today), and you manage users via the Manage-Users admin page in your browser — no more dashboard clicks needed.

---

## Step 0 — What you'll need before starting

Open these 3 tabs in your browser:

| # | Page | Why |
|---|------|-----|
| 1 | https://dash.cloudflare.com/sign-up | Cloudflare account (free) |
| 2 | https://resend.com/signup | Email delivery for magic-link sign-in (free 100/day) |
| 3 | https://github.com/SyedHZRizvi/Certification-Prep | Your existing repo — will be the source for Cloudflare |

You'll also need access to your Mac's terminal for two short commands at the end (to generate a JWT secret and seed your first user). All other steps are dashboard clicks.

---

## Step 1 — Create the Cloudflare account (3 min)

1. Go to https://dash.cloudflare.com/sign-up
2. Sign up with your email (you can also use Google/GitHub OAuth — fastest)
3. Verify the email Cloudflare sends you
4. ✅ When you land in the dashboard, you're done.

**Free tier covers everything we need.** No credit card required.

---

## Step 2 — Create the Resend account (2 min)

1. Go to https://resend.com/signup
2. Sign up (Google OAuth is fastest)
3. Skip the "verify your domain" step for now — you'll start with Resend's default sender (`onboarding@resend.dev`), which works out of the box
4. From the left sidebar → **API Keys** → click **Create API Key**
5. Name it `cert-hub-auth` → Permission: **Full access** → Domain: **All domains**
6. Click **Create** → **COPY THE KEY** (`re_xxx...`) — you'll only see it once
7. Paste it temporarily into a notes app — you'll need it in Step 5

---

## Step 3 — Connect the GitHub repo to Cloudflare Pages (5 min)

1. In Cloudflare dashboard, left sidebar → **Workers & Pages**
2. Top right → **Create** → switch to the **Pages** tab → **Connect to Git**
3. Click **GitHub** → authorize Cloudflare to read your account (one-time OAuth)
4. From the repo list → select **`SyedHZRizvi/Certification-Prep`** → click **Begin setup**
5. Fill in the build settings:

   | Field | Value |
   |-------|-------|
   | **Project name** | `cert-hub` |
   | **Production branch** | `main` |
   | **Framework preset** | `Jekyll` |
   | **Build command** | `bundle exec jekyll build` (auto-filled) |
   | **Build output directory** | `_site` (auto-filled) |
   | **Root directory** | (leave blank) |
   | **Environment variables (build)** | leave empty for now |

6. Click **Save and Deploy**
7. Cloudflare runs the first build (~2 minutes — watch the log)
8. ✅ When it says "Success", click the deployment URL. You'll see your site at something like `cert-hub.pages.dev` — **same content as your GitHub Pages site**.

**Note:** the auth gate isn't active yet — no Worker bindings or env vars set. Pages just serves the static site.

---

## Step 4 — Create the KV namespace (2 min)

1. Cloudflare dashboard → **Workers & Pages** → **KV** (left sidebar, under Workers)
2. Click **Create namespace** → name it **`CERT_HUB_USERS`** → **Create**
3. ✅ Copy the namespace ID (long hex string) — you'll need it next.

---

## Step 5 — Wire up the KV + secrets + bindings (5 min)

1. Go back to **Workers & Pages** → click your **`cert-hub`** project
2. Click **Settings** → **Functions**
3. Scroll to **KV namespace bindings** → **Add binding**
   - Variable name: `USERS_KV`
   - KV namespace: `CERT_HUB_USERS` (the one you just created)
   - Click **Save**

4. Click **Settings** → **Environment variables**
5. Add these one at a time (use the **Production** environment; click "Encrypt" on the secret ones):

   | Variable name | Value | Encrypted? |
   |---------------|-------|------------|
   | `JWT_SECRET` | Generate one — see below | ✅ YES |
   | `RESEND_API_KEY` | The `re_xxx...` key from Step 2 | ✅ YES |
   | `EMAIL_FROM` | `onboarding@resend.dev` | No |
   | `SITE_URL` | `https://cert-hub.pages.dev` (or your custom domain if you've added one) | No |
   | `MAGIC_LINK_TTL_SECONDS` | `900` | No |
   | `SESSION_TTL_SECONDS` | `2592000` | No |

   **To generate `JWT_SECRET`**, open your Mac's Terminal and run:
   ```
   openssl rand -hex 32
   ```
   Paste the 64-character hex string into the dashboard.

6. After all variables are saved, scroll to the top of the page → click **Retry deployment** (or trigger a new deploy by pushing any small commit to main). The new build will pick up the bindings and secrets.

---

## Step 6 — Seed your initial users (3 min)

You're the hardcoded super-user (`syed@transcrypts.com`) — you're already in the system **automatically**. No setup needed for your own account.

To add students, you have two options:

**Option A (easiest): use the admin UI**

1. Open `https://cert-hub.pages.dev/login/`
2. Enter `syed@transcrypts.com` → click "Send sign-in link"
3. Check your email → click the magic link
4. You're signed in. Navigate to `https://cert-hub.pages.dev/Manage-Users/`
5. Use the form to add students — their email + which courses they can access.

**Option B (bulk): use the Cloudflare dashboard**

1. Cloudflare dashboard → **Workers & Pages** → **KV** → **`CERT_HUB_USERS`** → **View**
2. Click **Add entry** for each student:
   - Key: `user:student@example.com` (replace with actual email)
   - Value (JSON):
     ```json
     {
       "role": "student",
       "courses": ["01-Scrum-Master", "02-PMP"],
       "created_at": "2026-05-23T00:00:00Z",
       "notes": "paid annual subscription"
     }
     ```
   - To grant access to all 20 courses, use `"courses": "*"` instead of a list.

---

## Step 7 — Smoke test (2 min)

Verify everything works:

1. **Sign in as you (super-user):**
   - Visit `https://cert-hub.pages.dev/login/`
   - Enter `syed@transcrypts.com` → submit
   - Check email → click magic link
   - ✅ You're redirected to the homepage with a session cookie set

2. **Verify your access:**
   - Try opening any course module: `https://cert-hub.pages.dev/01-Scrum-Master/Module-01-Agile-Mindset/Reading/`
   - ✅ Should load normally (super-user bypasses every check)

3. **Verify the admin panel:**
   - Visit `https://cert-hub.pages.dev/Manage-Users/`
   - ✅ Should show the admin UI with the "Add a new user" form + existing users table

4. **Verify the gate works for unauthorized users (use an incognito window):**
   - Open `https://cert-hub.pages.dev/01-Scrum-Master/Module-01-Agile-Mindset/Reading/` in incognito (no cookie)
   - ✅ Should redirect to `/login/?next=...`

5. **Verify entitlement gating (use a different student email you added in Step 6):**
   - Sign in as that student
   - Try opening a course they DON'T have access to
   - ✅ Should show "🔒 Subscription Required" page

If all 5 checks pass, the system is live and bypass-proof. 🎉

---

## Step 8 — Optional: add a custom domain (5 min)

If you have a domain (e.g. `certhub.com`):

1. Cloudflare dashboard → your `cert-hub` project → **Custom domains** → **Set up a domain**
2. Enter `certhub.com` (or `app.certhub.com` for a subdomain)
3. Follow Cloudflare's DNS instructions (usually one CNAME record)
4. Wait ~10 min for DNS to propagate
5. Update `SITE_URL` env var to the new domain
6. ✅ Done. Magic links and the rest of the system now use the custom domain.

---

## What happens AFTER this runbook

Once you complete Steps 1-7 once, **you never touch the Cloudflare dashboard again for normal operations**:

- **Code changes** (e.g. add a new course): edit in the preview workspace → push to GitHub → Cloudflare Pages auto-deploys within ~60 seconds.
- **User management** (add a student, revoke access, change which courses someone can see): go to `https://cert-hub.pages.dev/Manage-Users/` → use the UI. Saves directly to KV in real time.
- **Compromised user / urgent revoke**: Manage-Users → click Delete → user is locked out immediately (their session cookie still works for ~30 days, but any new request fails the KV lookup). For instant lockout, also rotate `JWT_SECRET` in the dashboard.

---

## What about my existing GitHub Pages URL?

It keeps working **exactly as today** — students who bookmarked `syedhzrizvi.github.io/Certification-Prep/` see the public preview, with no auth gate. This is your marketing/discovery URL.

The gated paid experience lives at `cert-hub.pages.dev` (or your custom domain). When you're ready to fully migrate paying students:

- Send them an email with the new URL + their login email
- Optionally add a banner on the GitHub Pages site pointing to the gated URL
- Eventually retire the GitHub Pages site by deleting the Pages config on github.com (the repo stays — only the deployment is turned off)

---

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| "Build failed" on first Cloudflare deploy | Check the build log. Usually a Jekyll dependency issue. Make sure `Gemfile` includes `jekyll` and `github-pages`. |
| Magic-link emails don't arrive | (1) Check Resend dashboard → Logs to see if Resend received the request. (2) Check spam folder. (3) Confirm `RESEND_API_KEY` is set correctly. (4) Confirm `EMAIL_FROM` is `onboarding@resend.dev` (or a verified domain if you've set one up). |
| "Forbidden" on `/Manage-Users/` even though I'm signed in | Verify your email matches the hardcoded super-user in `functions/lib/superusers.js`. If not, edit that file, commit, and re-deploy. |
| Pages deploy succeeded but auth gate not active | Double-check the Functions are present: dashboard → your project → Functions tab → should list `_middleware.js`, `api/auth/*`, `api/admin/*`. If empty, the build skipped them — check `_config.yml` exclude rules. |
| Want to lock everyone out instantly | Rotate `JWT_SECRET` in dashboard → all existing sessions become invalid → users must sign in again. Their KV records are unchanged. |

---

## Important security notes

1. **`syed@transcrypts.com` is hardcoded** as the super-user in `functions/lib/superusers.js`. To change this (e.g. if you change your email), edit that file, commit, and push to redeploy. **Do not move this to env vars or KV** — the whole point is that you cannot be locked out even if KV is wiped or compromised.

2. **`JWT_SECRET` should be rotated** if you ever suspect it's been leaked. After rotation, all sessions are invalidated and users will re-sign-in.

3. **`RESEND_API_KEY`** can be rotated anytime in the Resend dashboard. No site downtime — just paste the new value into the Cloudflare env vars.

4. **Backups**: Cloudflare KV is durable and backed up by Cloudflare. For extra safety, periodically export your user list from the Manage-Users page (the API returns a JSON dump) and save it somewhere offline.

5. **Audit log** (future enhancement): the current system doesn't log every login/admin action. If you want this, a Cloudflare Logpush integration to R2 storage can be added later (~30 min of additional setup, free tier covers it).

---

## Questions / when to ask for help

If anything breaks during Step 1-7, send me a screenshot of the error. The deploy is fully reversible — disabling the Cloudflare Pages project takes 2 clicks and restores you to GitHub-Pages-only.
