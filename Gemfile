source "https://rubygems.org"

# Matches what GitHub Pages uses. The github-pages gem locks Jekyll +
# all the GP-supported plugins to versions that match prod.
gem "github-pages", group: :jekyll_plugins

# Plugins explicitly listed in _config.yml (also pulled in by github-pages,
# but listed here so `bundle install` makes them obvious).
group :jekyll_plugins do
  gem "jekyll-relative-links"
  gem "jekyll-optional-front-matter"
  gem "jekyll-readme-index"
end

# Windows + JRuby compat — harmless on macOS.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", platforms: [:mingw, :x64_mingw, :mswin]
