import { Cartesian3, type Viewer } from "cesium";

export function setInitialCamera(viewer: Viewer) {
  viewer.camera.setView({
    destination: Cartesian3.fromDegrees(83.2185, 17.6868, 500),
  });
}
