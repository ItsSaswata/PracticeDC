import { Cartesian3, Color } from "cesium";
import { Viewer, useCesium } from "resium";
import { useEffect } from "react";

import { loadMicrosoftBuildings } from "@/data/microsoft/buildings";

function WorldController() {
  const { viewer } = useCesium();

  useEffect(() => {
    if (!viewer) {
      return;
    }

    loadMicrosoftBuildings().then((data) => {
      viewer.camera.flyTo({
        destination: Cartesian3.fromDegrees(83.205, 17.695, 3000),
      });

      for (const feature of data.features) {
        if (feature.geometry.type !== "Polygon") {
          continue;
        }

        const coordinates = feature.geometry.coordinates[0];

        const positions = Cartesian3.fromDegreesArray(coordinates.flat());

        const height =
          feature.properties.height >= 0 ? feature.properties.height : 6;

        viewer.entities.add({
          name: feature.id,

          polygon: {
            hierarchy: positions,
            height: 0,
            extrudedHeight: height,
            material: Color.WHITE,
            outline: true,
          },
        });
      }
    });
  }, [viewer]);

  return null;
}

function CesiumViewer() {
  return (
    <Viewer>
      <WorldController />
    </Viewer>
  );
}

export default CesiumViewer;
