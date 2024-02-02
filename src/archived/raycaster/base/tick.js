import * as THREE from "three";
import { object1, object2, object3 } from "../scene/objects";
import { updateRayCaster } from "./raycaster";
import { camera, controls, renderer, scene } from "./three";
const clock = new THREE.Clock();

export const tick = () => {
  const elapsedTime = clock.getElapsedTime();
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);

  object1.position.y = Math.sin(elapsedTime * 0.3) * 1.5;
  object2.position.y = Math.sin(elapsedTime * 0.8) * 1.5;
  object3.position.y = Math.sin(elapsedTime * 1.4) * 1.5;

  updateRayCaster();
};
