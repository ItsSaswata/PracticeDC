export async function loadMicrosoftBuildings() {
  const response = await fetch("/data/vizag-microsoft-buildings.geojson");

  if (!response.ok) {
    throw new Error("Failed to load Microsoft buildings");
  }

  const data = await response.json();

  return data;
}
