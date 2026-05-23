#!/usr/bin/env bash
# Local preview launcher. Serves on http://127.0.0.1:4000/Certification-Prep/
set -e

cd "$(dirname "$0")"

# Prefer Homebrew Ruby (system Ruby 2.6 is too old for modern Jekyll).
for d in /opt/homebrew/opt/ruby/bin /usr/local/opt/ruby/bin; do
  if [ -x "$d/ruby" ]; then
    export PATH="$d:$PATH"
    break
  fi
done

if ! command -v jekyll >/dev/null 2>&1; then
  # Fall back to gem-installed jekyll if it's reachable via Homebrew ruby's gem path.
  for gd in /opt/homebrew/lib/ruby/gems/*/bin /usr/local/lib/ruby/gems/*/bin; do
    if [ -x "$gd/jekyll" ]; then
      export PATH="$gd:$PATH"
      break
    fi
  done
fi

if ! command -v jekyll >/dev/null 2>&1; then
  echo "ERROR: jekyll not found. Install with:"
  echo "  brew install ruby && /opt/homebrew/opt/ruby/bin/gem install jekyll bundler"
  exit 1
fi

echo "→ Using $(ruby --version)"
echo "→ Using $(jekyll --version)"
echo "→ Starting Jekyll server. Visit http://127.0.0.1:4000/Certification-Prep/"
echo "  (Ctrl+C to stop.)"
jekyll serve --port 4000 --host 127.0.0.1 --baseurl /Certification-Prep --livereload
