#!/usr/bin/env bash
# ============================================================
# safe-deploy.sh — The Cert Hub
# ============================================================
# Runs scripts/verify-baseline.py BEFORE any deploy. Refuses to
# deploy a broken baseline. Use this instead of calling
# wrangler / git push directly.
#
#   sh scripts/safe-deploy.sh                # normal deploy
#   FORCE=1 sh scripts/safe-deploy.sh        # bypass verifier
#
# Bypass is reserved for DELIBERATE baseline changes. When using
# FORCE=1 you MUST also have updated:
#   - CLAUDE.md (the human rulebook)
#   - scripts/verify-baseline.py (the machine assertions)
# in the same commit that's being deployed.
# ============================================================
set -e

REPO=$(git rev-parse --show-toplevel 2>/dev/null)
if [ -z "$REPO" ]; then
  echo "✗ Not inside a git repository."
  exit 1
fi
cd "$REPO"

# ---- 1. Run the verifier (unless FORCE=1) -----------------
if [ "${FORCE:-0}" = "1" ]; then
  echo "⚠  FORCE=1 set — skipping scripts/verify-baseline.py."
  echo "   Bypass is only valid if CLAUDE.md and"
  echo "   scripts/verify-baseline.py were updated in this commit."
  echo ""
  # Sanity probe: confirm the committed HEAD touched both files.
  if git rev-parse HEAD >/dev/null 2>&1; then
    head_changed=$(git show --pretty=format: --name-only HEAD 2>/dev/null || true)
    touched_claude=$(printf '%s\n' "$head_changed" | grep -c '^CLAUDE.md$' || true)
    touched_verifier=$(printf '%s\n' "$head_changed" | grep -c '^scripts/verify-baseline.py$' || true)
    if [ "$touched_claude" -eq 0 ] || [ "$touched_verifier" -eq 0 ]; then
      echo "⚠  Heads up: HEAD commit did NOT touch both CLAUDE.md and"
      echo "   scripts/verify-baseline.py. FORCE=1 is meant for"
      echo "   intentional baseline changes — make sure that's what"
      echo "   this is. Sleeping 5s in case you want to Ctrl+C."
      sleep 5
    fi
  fi
else
  if [ ! -f "scripts/verify-baseline.py" ]; then
    echo "✗ scripts/verify-baseline.py not found — refusing deploy."
    exit 1
  fi
  echo "→ safe-deploy: running scripts/verify-baseline.py ..."
  if ! python3 scripts/verify-baseline.py; then
    echo ""
    echo "✗ Baseline verifier FAILED. Deploy REFUSED."
    echo ""
    echo "  Fix the underlying issue and try again."
    echo ""
    echo "  If this is a DELIBERATE baseline change, bypass with:"
    echo "      FORCE=1 sh scripts/safe-deploy.sh"
    echo "  (only valid if CLAUDE.md and scripts/verify-baseline.py"
    echo "   were updated in the same commit)."
    exit 1
  fi
  echo "→ safe-deploy: baseline OK — proceeding."
fi

# ---- 2. Pick deploy target --------------------------------
if [ -f "wrangler.toml" ] || [ -f "wrangler.jsonc" ] || [ -f "wrangler.json" ]; then
  # Cloudflare Pages path
  if ! command -v wrangler >/dev/null 2>&1; then
    # Try common install locations
    for d in \
      /opt/homebrew/bin \
      /usr/local/bin \
      "$HOME/.npm-global/bin" \
      "$HOME/node_modules/.bin"; do
      if [ -x "$d/wrangler" ]; then
        export PATH="$d:$PATH"
        break
      fi
    done
  fi
  if ! command -v wrangler >/dev/null 2>&1; then
    echo "✗ wrangler CLI not found. Install with:"
    echo "    npm install -g wrangler"
    echo "  or"
    echo "    brew install cloudflare-wrangler2"
    exit 1
  fi
  project="${CF_PROJECT:-cert-hub}"
  echo "→ Detected wrangler config — deploying to Cloudflare Pages"
  echo "  Project: $project"
  echo ""
  exec wrangler pages deploy . --project-name="$project" --commit-dirty=false
fi

# ---- 3. Fallback: GitHub Pages path ------------------------
echo ""
echo "→ No wrangler config — site deploys via GitHub Pages."
echo ""
remote_url=$(git remote get-url origin 2>/dev/null || echo "")
if [ -z "$remote_url" ]; then
  echo "  This clone has NO git remote configured."
  echo "  This is the preview workspace — by design it cannot push."
  echo ""
  echo "  To promote changes to production:"
  echo "    1. cd ~/Projects/Certification-Prep   # the production clone"
  echo "    2. git checkout -b promote-from-preview-\$(date +%Y%m%d)"
  echo "    3. Copy specific files / folders from this preview"
  echo "    4. git push origin <branch> + open a PR"
  echo "    5. Merge once GitHub Pages confirms a clean build"
  exit 0
fi

case "$remote_url" in
  *SyedHZRizvi/Certification-Prep*)
    echo "  Remote points at the PRODUCTION repo:"
    echo "    $remote_url"
    echo ""
    echo "  Refusing to push to production from a script."
    echo "  Production promotion is a deliberate human step:"
    echo "    git push origin main"
    echo "  Run that yourself, only after explicit human approval."
    exit 0
    ;;
  *)
    echo "  Remote: $remote_url"
    echo "  Pushing to remote..."
    exec git push origin HEAD
    ;;
esac
