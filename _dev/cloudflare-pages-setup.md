# Phase 1: Cloudflare Pages Setup — Step-by-Step

> **Goal:** Get `cert-hub.pages.dev` (or similar) serving the same site that `syedhzrizvi.github.io/Certification-Prep/` does today. **No risk** to the live site — both URLs serve the same content from the same repo.

**Time:** ~30 minutes of dashboard clicks + 5 minutes of build verification.
**Cost:** $0 (Cloudflare Pages free tier).

---

## Prerequisites checklist

- [ ] Cloudflare account (free) — you confirmed you have this
- [ ] You're logged into https://dash.cloudflare.com
- [ ] The GitHub repo `SyedHZRizvi/Certification-Prep` is still public (it is)
- [ ] You can authorize Cloudflare to access your GitHub account (one-time OAuth grant)

---

## Step 1 — Create a new Pages project

1. Open https://dash.cloudflare.com
2. Left sidebar → click **Workers & Pages**
3. Click the **Create** button (top right)
4. In the dialog, click the **Pages** tab (not Workers)
5. Click **Connect to Git**

## Step 2 — Authorize GitHub

1. Click **GitHub** as the source provider
2. Cloudflare opens a GitHub authorization window
3. Choose **Only select repositories**
4. Pick `SyedHZRizvi/Certification-Prep` from the dropdown
5. Click **Install & Authorize**

This grants Cloudflare read-only access to that one repo. Cloudflare will rebuild your site whenever you push to `main`.

## Step 3 — Configure the build

You'll be back in Cloudflare's project setup. Fill in:

| Field | Value | Notes |
|---|---|---|
| **Project name** | `cert-hub` | This becomes your free `cert-hub.pages.dev` URL. Lowercase, no spaces. |
| **Production branch** | `main` | |
| **Framework preset** | **Jekyll** | Should auto-detect. If not, pick from dropdown. |
| **Build command** | `bundle exec jekyll build` | Auto-filled when you pick Jekyll |
| **Build output directory** | `_site` | Auto-filled |
| **Root directory** | *(leave blank)* | |

### Environment variables (click "Add variable")
| Name | Value | Purpose |
|---|---|---|
| `JEKYLL_ENV` | `production` | Tells Jekyll it's a production build |
| `RUBY_VERSION` | `3.3` | Pins Ruby version (avoids surprise upgrades) |

## Step 4 — Save and deploy

1. Click **Save and Deploy**
2. Cloudflare starts the first build immediately. Watch the build log.
3. **Expected time:** 2–4 minutes for the first build (subsequent builds are faster due to caching).
4. When the log shows **Success**, the site is live at `https://cert-hub.pages.dev/` (no `/Certification-Prep/` suffix needed — Cloudflare serves at the root of the subdomain).

## Step 5 — Verify it works

Open these URLs in a new tab and confirm they render correctly:

- `https://cert-hub.pages.dev/` → homepage with 13 cert pills, all category sections
- `https://cert-hub.pages.dev/01-Scrum-Master/Module-01-Agile-Mindset/Reading/` → sample module page
- `https://cert-hub.pages.dev/10-ASCM-CSCP/` → sample SCM course README
- `https://cert-hub.pages.dev/version.txt` → should return a build timestamp (proves Liquid is working)
- `https://cert-hub.pages.dev/assets/protect.js` → should return JS (proves static assets work)

**If any of these 404 or look broken:** stop and ping me with the exact URL. There's a `baseurl` config quirk to fix.

## Step 6 — Heads-up about the baseurl

The Jekyll config currently has `baseurl: "/Certification-Prep"` because that's the GitHub Pages subpath. Cloudflare Pages serves at the root of the subdomain, so you may see broken links (404s) on assets/pages because the baseurl is wrong for Cloudflare.

**Two options to handle this:**

### Option A (recommended): Don't change `_config.yml`. Configure baseurl per-environment.
Cloudflare Pages will use `_config.yml` as-is. The baseurl mismatch is a problem.

**Fix:** add a Cloudflare-specific config override.

I'll write `_config.cloudflare.yml` with `baseurl: ""` and update the build command in Cloudflare to:
```
bundle exec jekyll build --config _config.yml,_config.cloudflare.yml
```

That way GitHub Pages keeps working at `/Certification-Prep/` AND Cloudflare serves at the root. No change to the live site.

### Option B: Move to a custom domain immediately
If you register a domain right now (e.g. `cert-hub.com`), you can skip the `pages.dev` step and go straight to a clean root URL. Up to you.

**My suggestion:** do Option A this session. We can add a custom domain whenever you want, without breaking anything.

---

## Step 7 — Let me know it's running

Reply with:
- The exact URL Cloudflare gave you (e.g. `cert-hub.pages.dev` or `cert-hub-abc.pages.dev` — Cloudflare sometimes adds a random suffix if `cert-hub` is taken)
- Whether any of the verify links in Step 5 failed
- The build log's "Success" or "Failed" status

Then I'll write the `_config.cloudflare.yml` override and we'll redeploy. After that, Phase 1 is done and we can plan Phase 2 (Cloudflare Access for `/admin/`).

---

## What's NOT changing during Phase 1

- The live site at `syedhzrizvi.github.io/Certification-Prep/` keeps working exactly as before
- The GitHub repo stays as-is (still public, still receives commits)
- No code changes; only a new Cloudflare project + the optional `_config.cloudflare.yml` file
- No DNS changes (no custom domain yet)
- No auth yet (the Cloudflare site is publicly accessible, just like GitHub Pages)

So this step is **safe**. The worst case is we delete the Cloudflare project and you've lost 30 minutes.
