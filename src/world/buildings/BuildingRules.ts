import type { BuildingData } from "@/data/types/BuildingData";

export type BuildingClass = "small" | "medium" | "tall" | "skyscraper";

export function getBuildingClass(building: BuildingData): BuildingClass {
  const height = building.height ?? 0;

  if (height < 10) {
    return "small";
  }

  if (height < 30) {
    return "medium";
  }

  if (height < 80) {
    return "tall";
  }

  return "skyscraper";
}
