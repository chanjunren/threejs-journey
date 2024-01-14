import * as THREE from "three";
import { camera, controls, renderer, scene } from "./three";
const clock = new THREE.Clock();

export const tick = () => {
  const elapsedTime = clock.getElapsedTime();
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};
