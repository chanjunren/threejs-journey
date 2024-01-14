import { loadModel } from "../base/loaders";
import { scene } from "../base/three";

export let duck = null;

export function loadDuck() {
  loadModel("./models/Duck/glTF-Binary/Duck.glb", (gltf) => {
    duck = gltf.scene;
    duck.position.y = -1.2;
    scene.add(duck);
  });
}
