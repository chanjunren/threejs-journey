import { windowSizes } from "./constants";
import { camera, renderer } from "./threeJs";

export default function initEventListeners() {
  window.addEventListener("resize", () => {
    windowSizes.width = window.innerWidth;
    windowSizes.height = window.innerHeight;

    camera.aspect = windowSizes.width / windowSizes.height;
    camera.updateProjectionMatrix();

    renderer.setSize(windowSizes.width, windowSizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });
}
