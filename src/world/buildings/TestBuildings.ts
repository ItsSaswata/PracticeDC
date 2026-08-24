import { Cartesian3, Color, type Viewer } from "cesium";

import type { BuildingData } from "@/data/types/BuildingData";
import { getBuildingClass } from "@/world/buildings/BuildingRules";

export function addTestBuilding(viewer: Viewer, building: BuildingData) {
  const buildingClass = getBuildingClass(building);

  let width = 40;
  let depth = 40;

  if (buildingClass === "skyscraper") {
    width = 25;
    depth = 25;
  }

  return viewer.entities.add({
    name: building.id,

    position: Cartesian3.fromDegrees(building.longitude, building.latitude, 25),

    box: {
      dimensions: new Cartesian3(width, depth, building.height ?? 50),

      material: Color.WHITE,
    },
  });
}
