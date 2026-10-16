# japanscapes

A neighbourhood map and field guide to Tokyo, Nakasendō, Fuji/Hakone, Kyoto and Osaka.

- `japan-map.html` is the main file: real ward boundaries on a light basemap, with a panel for each ward and neighbourhood (history, culture and craft, food, tips, sources) and the places saved from research and Google Maps lists. Open it in a browser. It is one self-contained file and needs internet for map tiles and fonts.

## Build

The map is assembled from `src/` into one file:

```bash
./build.sh
```

This writes `japan-map.html` (public: no API key, no personal details). To use Google tiles for the Streets view, put a Maps JavaScript API key in `google-key.txt` (git-ignored), enable billing on the Google Cloud project, then:

```bash
USE_GOOGLE=1 ./build.sh   # writes dist/japan-map.local.html
```

Without a key it falls back to the free Esri street map.

## Data and sources

- Ward boundaries: MLIT National Land Numerical Information (国土数値情報), via [niiyz/JapanCityGeoJson](https://github.com/niiyz/JapanCityGeoJson), simplified for the web.
- Basemap tiles: Esri (Light Gray Canvas, World Street Map). Map library: Leaflet.
- Neighbourhood history and culture notes are written from the sources linked beside each entry (`src/lore.js`). Culture Trip pages could not be opened directly, so points attributed to it come from search summaries. Some dates differ between sources and are flagged in the text.
- `src/akasaka-data.js` holds hotel, neighbourhood and place data carried over from the earlier "Tokyo from Akasaka" guide.
