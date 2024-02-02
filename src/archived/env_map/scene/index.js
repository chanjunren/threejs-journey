import { camera, scene } from "../base/three";
import { addToDebugger, globalValues } from "../debug";
import { ENV_MAP_INTENSITY, environmentMap } from "../textures";
import { directionalLight, directionalLightCameraHelper } from "./lights";
import { floor, torusKnot, wall } from "./objects";

export const BG_BLUR = "bgBlur";
export const BG_INTENSITY = "bgIntensity";
const SCENE_OBJECTS = [torusKnot, camera, directionalLight, directionalLightCameraHelper, floor, wall];

export function initScene() {
  SCENE_OBJECTS.forEach((o) => scene.add(o));

  addToDebugger(BG_BLUR, 0, blurChangeHandler);
  addToDebugger(BG_INTENSITY, 1, intensityChangeHandler);
}

scene.background = environmentMap;
scene.environment = environmentMap;

export function brightenAllMaterials() {
  scene.traverse((child) => {
    if (child.isMesh && child.material.isMeshStandardMaterial) {
      child.material.envMapIntensity = globalValues[ENV_MAP_INTENSITY];
      child.castShadow = true
      child.receiveShadow = true
    }
  });
}

function blurChangeHandler() {
  scene.backgroundBlurriness = globalValues[BG_BLUR];
}

function intensityChangeHandler() {
  scene.backgroundIntensity = globalValues[BG_INTENSITY];
}
