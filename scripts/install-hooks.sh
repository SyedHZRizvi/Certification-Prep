#!/usr/bin/env bash
# ============================================================
# install-hooks.sh — copies versioned git hooks into .git/hooks/
# ============================================================
# Run once per clone:
#     sh scripts/install-hooks.sh
#
# This installs every executable in scripts/git-hooks/ into
# .git/hooks/, overwriting any existing hook of the same name.
# ============================================================
set -e

REPO=$(git rev-parse --show-toplevel 2>/dev/null)
if [ -z "$REPO" ]; then
  echo "✗ Not inside a git repository."
  exit 1
fi

SRC="$REPO/scripts/git-hooks"
DST="$REPO/.git/hooks"

if [ ! -d "$SRC" ]; then
  echo "✗ Missing source dir: $SRC"
  exit 1
fi
if [ ! -d "$DST" ]; then
  echo "✗ Missing destination dir: $DST"
  echo "  Is .git initialized?"
  exit 1
fi

installed=0
for hook in "$SRC"/*; do
  [ -f "$hook" ] || continue
  name=$(basename "$hook")
  cp "$hook" "$DST/$name"
  chmod +x "$DST/$name"
  echo "✓ Installed $name → $DST/$name"
  installed=$((installed + 1))
done

if [ "$installed" -eq 0 ]; then
  echo "⚠ No hooks found in $SRC."
  exit 1
fi

echo ""
echo "Done. $installed hook(s) installed."
echo "Hooks run automatically on every git operation that triggers them."
echo ""
echo "To bypass for a single commit (only for deliberate baseline changes):"
echo "  git commit --no-verify"
