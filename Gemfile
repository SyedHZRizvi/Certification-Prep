source "https://rubygems.org"

# Plain Jekyll 4.x — modern, fast, well-supported on Ruby 3.2+.
# Previously this Gemfile used the github-pages gem which pulls in 50+
# legacy gems and pins Jekyll to 3.9.5. That stack failed to build on
# Cloudflare Pages with Ruby 3.2.2 (crash during page rendering, deep in
# the converter chain). Switching to plain Jekyll 4 fixes it.
#
# GitHub Pages IGNORES this Gemfile and uses its own internal gem set,
# so changing what's here does not affect the GitHub Pages deployment.
gem "jekyll", "~> 4.3"

# Plugins explicitly used in _config.yml.
group :jekyll_plugins do
  gem "jekyll-relative-links", "~> 0.6"
  gem "jekyll-optional-front-matter", "~> 0.3"
  gem "jekyll-readme-index", "~> 0.3"
end

# Markdown engine (kramdown is Jekyll 4's default but pinned explicitly
# so Cloudflare can't pick a major-bumped version mid-flight).
gem "kramdown", "~> 2.4"
gem "kramdown-parser-gfm", "~> 1.1"

# Rouge for syntax highlighting (pinned the same way).
gem "rouge", "~> 4.2"

# Windows + JRuby compatibility (harmless on macOS / Linux).
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 2.0"
  gem "tzinfo-data"
end
gem "wdm", "~> 0.2.0", platforms: [:mingw, :x64_mingw, :mswin]

# Webrick is no longer bundled with Ruby 3+ (Jekyll's `serve` command
# needs it for local dev; harmless to include for builds too).
gem "webrick", "~> 1.8"
