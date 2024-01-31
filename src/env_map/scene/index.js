import { camera, scene } from "../base/three";
import { addToDebugger, globalValues } from "../debug";
import { ENV_MAP_INTENSITY } from "../textures";
import { torusKnot } from "./objects";

export const BG_BLUR = "bgBlur";
export const BG_INTENSITY = "bgIntensity";
const SCENE_OBJECTS = [torusKnot, camera];

export function initScene() {
  SCENE_OBJECTS.forEach((o) => scene.add(o));

  addToDebugger(BG_BLUR, 0, blurChangeHandler);
  addToDebugger(BG_INTENSITY, 1, intensityChangeHandler);
}

// scene.background = environmentMap;
// scene.environment = environmentMap;

export function brightenAllMaterials() {
  scene.traverse((child) => {
    if (child.isMesh && child.material.isMeshStandardMaterial) {
      child.material.envMapIntensity = globalValues[ENV_MAP_INTENSITY];
    }
  });
}

function blurChangeHandler() {
  scene.backgroundBlurriness = globalValues[BG_BLUR];
}

function intensityChangeHandler() {
  scene.backgroundIntensity = globalValues[BG_INTENSITY];
}
