#!/usr/bin/env bash
# Builds the single-file map from src/.
#   japan-map.html             public build: no key, no personal details (safe to commit and share)
#   dist/japan-map.local.html  your build: adds local/personal.js (dates, hotel, private notes) and,
#                              if google-key.txt exists, your Google key (both git-ignored)
# Set USE_GOOGLE=1 once billing is enabled on the Google Cloud project to switch Streets to Google tiles.
set -e
cd "$(dirname "$0")"
build() {  # out key use personal(0/1)
  { cat src/head.html src/wards.js; echo
    cat src/akasaka-data.js; echo
    cat src/extra-data.js; echo; cat src/nk-trail.js; echo
    cat src/lore.js; echo
    cat src/lore2.js; echo
    cat src/lore3.js; echo
    cat src/lore4.js; echo; cat src/pins.js; echo; cat src/lines.js; echo
    if [ "$4" = "1" ] && [ -f local/personal.js ]; then cat local/personal.js; echo; fi
    sed -e "s|__GOOGLE_KEY__|$2|" -e "s|__USE_GOOGLE__|$3|" src/app.js
    printf '\n</script>\n</body>\n</html>\n'
  } > "$1"
}
build japan-map.html "" false 0
echo "Built japan-map.html (public)"
if [ -f local/personal.js ] || [ -f google-key.txt ]; then
  mkdir -p dist
  key=""; [ -f google-key.txt ] && key="$(tr -d '[:space:]' < google-key.txt)"
  use=false; [ "${USE_GOOGLE:-}" = "1" ] && use=true
  build dist/japan-map.local.html "$key" "$use" 1
  echo "Built dist/japan-map.local.html (personal overlay, google: $use)"
fi
