import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import "./style.css";

const viewer = new Cesium.Viewer("cesiumContainer");

viewer.camera.setView({
  destination: Cesium.Cartesian3.fromDegrees(83.2185, 17.6868, 500),
});

const building = viewer.entities.add({
  name: "Test Building",
  position: Cesium.Cartesian3.fromDegrees(83.2185, 17.6868, 25),
  box: {
    dimensions: new Cesium.Cartesian3(40, 40, 50),
    material: Cesium.Color.WHITE,
  },
});
