# japanscapes

A neighbourhood map and field guide to Tokyo, Nakasendō, Fuji/Hakone, Kyoto and Osaka.

- `japan-map.html` is the main file: ward boundaries drawn as fine linework over a light basemap, with a card for each ward, neighbourhood and place (history, culture and craft, food, tips, sources), metro lines, the Magome–Tsumago trail, and our hotels. Open it in a browser. It is one self-contained file and needs internet for map tiles and fonts.

## Build

The map is assembled from `src/` into one file:

```bash
./build.sh
```

This writes `japan-map.html`. The Google street map and hotel markers are on in the public build. Put a Maps JavaScript API key in `google-key.txt` (git-ignored) before building; without one the map uses the free Esri tiles. The key ends up in the page, so restrict it in Google Cloud to this site's address (Credentials, Application restrictions, Websites) and to the Maps JavaScript API.

`local/personal.js` (git-ignored) adds private notes to `dist/japan-map.local.html`.

## Data and sources

- Ward boundaries: MLIT National Land Numerical Information (国土数値情報), via [niiyz/JapanCityGeoJson](https://github.com/niiyz/JapanCityGeoJson), simplified for the web.
- Basemap tiles: Esri (Light Gray Canvas, World Street Map) and Google Maps. Map library: Leaflet.
- Walking trail: simplified from OpenStreetMap walking routes (approximate).
- Neighbourhood history and culture notes are written from the sources linked beside each entry (`src/lore*.js`). Some dates differ between sources and are flagged in the text.
- `src/akasaka-data.js` holds neighbourhood and place data carried over from the earlier "Tokyo from Akasaka" guide; `src/pins.js` and `src/lines.js` hold the extra pins and the metro and rail lines.
