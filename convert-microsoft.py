import gzip
import json

INPUT = "part-00089-6362069d-6eea-4a1e-8c47-524b38a5fb20.c000.csv.gz"
OUTPUT = "vizag-microsoft-buildings.geojson"

MIN_LON = 83.20
MAX_LON = 83.25
MIN_LAT = 17.67
MAX_LAT = 17.72

features = []

with gzip.open(INPUT, "rt", encoding="utf-8") as f:
    for line in f:
        feature = json.loads(line)

        coordinates = feature["geometry"]["coordinates"][0]

        lon = coordinates[0][0]
        lat = coordinates[0][1]

        if not (
            MIN_LON <= lon <= MAX_LON
            and MIN_LAT <= lat <= MAX_LAT
        ):
            continue

        features.append(feature)

geojson = {
    "type": "FeatureCollection",
    "features": features,
}

with open(OUTPUT, "w", encoding="utf-8") as f:
    json.dump(geojson, f)

print("Exported:", len(features))
print("File:", OUTPUT)