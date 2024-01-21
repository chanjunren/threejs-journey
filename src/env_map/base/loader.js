import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { addToDebugger } from "../debug";
import { brightenAllMaterials } from "../scene";
import { ENV_MAP_INTENSITY } from "../textures";
import { scene } from "./three";

const gltfLoader = new GLTFLoader();

export function loadModels() {
  gltfLoader.load("/models/FlightHelmet/glTF/FlightHelmet.gltf", (gltf) => {
    console.log("FlightHelmet successfully loaded", gltf.scene);
    gltf.scene.scale.set(10, 10, 10);
    scene.add(gltf.scene);

    addToDebugger(ENV_MAP_INTENSITY, 3, brightenAllMaterials);
  });
}
