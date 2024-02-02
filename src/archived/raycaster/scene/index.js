import { scene } from "../base/three";
import { loadDuck } from "./duck";
import { ambientLight, directionalLight } from "./lights";
import { object1, object2, object3 } from "./objects";

const SCENE_OBJECTS = [
  object1,
  object2,
  object3,
  directionalLight,
  ambientLight,
];

export function addObjectsToScene() {
  addToScene(SCENE_OBJECTS);
  loadDuck();
}

export function addToScene(objects) {
  objects.forEach((o) => scene.add(o));
}
