import gzip
import json

filename = "part-00089-6362069d-6eea-4a1e-8c47-524b38a5fb20.c000.csv.gz"

MIN_LON = 83.20
MAX_LON = 83.25
MIN_LAT = 17.67
MAX_LAT = 17.72

total = 0
in_bbox = 0
with_height = 0
with_confidence = 0

with gzip.open(filename, "rt", encoding="utf-8") as f:
    for line in f:
        feature = json.loads(line)

        total += 1

        coordinates = feature["geometry"]["coordinates"][0]

        lon = coordinates[0][0]
        lat = coordinates[0][1]

        if MIN_LON <= lon <= MAX_LON and MIN_LAT <= lat <= MAX_LAT:
            in_bbox += 1

            if feature["properties"]["height"] >= 0:
                with_height += 1

            if feature["properties"]["confidence"] >= 0:
                with_confidence += 1

print("total:", total)
print("in bbox:", in_bbox)
print("with height:", with_height)
print("with confidence:", with_confidence)