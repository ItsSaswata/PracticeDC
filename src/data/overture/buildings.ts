export async function loadBuildings() {
  const response = await fetch("/data/vizag-osm-buildings.geojson");

  if (!response.ok) {
    throw new Error("Failed to load OSM buildings");
  }

  const data = await response.json();

  return data;
}
