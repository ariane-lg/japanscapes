#!/usr/bin/env bash
# Builds the single-file map from src/.
#   japan-map.html             public build: hotel markers and Google tiles on (needs google-key.txt;
#                              the key is visible in the page, so restrict it to the site address)
#   dist/japan-map.local.html  the same, plus local/personal.js (private notes); git-ignored
set -e
cd "$(dirname "$0")"
build() {  # out key use personal(0/1)
  { cat src/head.html src/wards.js; echo
    cat src/akasaka-data.js; echo
    cat src/extra-data.js; echo; cat src/nk-trail.js; echo
    cat src/lore.js; echo
    cat src/lore2.js; echo
    cat src/lore3.js; echo
    cat src/lore4.js; echo; cat src/pins.js; echo; cat src/lines.js; echo; cat src/hotels.js; echo
    if [ "$4" = "1" ] && [ -f local/personal.js ]; then cat local/personal.js; echo; fi
    sed -e "s|__GOOGLE_KEY__|$2|" -e "s|__USE_GOOGLE__|$3|" src/app.js
    printf '\n</script>\n</body>\n</html>\n'
  } > "$1"
}
key=""; [ -f google-key.txt ] && key="$(tr -d '[:space:]' < google-key.txt)"
# Public build: hotel markers and Google tiles are on. The key is visible in the page, so it must be
# restricted to this site's address (HTTP referrer) in Google Cloud. No key file means Esri tiles only.
pub=false; [ -n "$key" ] && pub=true
build japan-map.html "$key" "$pub" 0
echo "Built japan-map.html (public, google: $pub)"
if [ -f local/personal.js ]; then
  mkdir -p dist
  build dist/japan-map.local.html "$key" "$pub" 1
  echo "Built dist/japan-map.local.html (adds private notes from local/personal.js)"
fi
