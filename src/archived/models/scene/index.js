
import * as THREE from "three";
import { camera } from "../core/threeJs";
import { floor } from "./floor";
import loadFox from "./fox";
import { ambientLight, directionalLight } from "./lights";

const scene = new THREE.Scene()

export function loadScene() {
  scene.add(camera);
  scene.add(directionalLight);
  scene.add(ambientLight);
  scene.add(floor);

  loadFox();
//   loadDuck();
//   loadFlightHelmet();
}

export default scene;