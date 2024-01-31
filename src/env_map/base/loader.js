import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { addToDebugger } from "../debug";
import { brightenAllMaterials } from "../scene";
import { ENV_MAP_INTENSITY } from "../textures";
import { scene } from "./three";

const gltfLoader = new GLTFLoader();

const rgbeLoader = new RGBELoader();

export function loadModels() {
  gltfLoader.load("/models/FlightHelmet/glTF/FlightHelmet.gltf", (gltf) => {
    console.log("FlightHelmet successfully loaded", gltf.scene);
    gltf.scene.scale.set(10, 10, 10);
    scene.add(gltf.scene);

    brightenAllMaterials();

    addToDebugger(ENV_MAP_INTENSITY, 3, brightenAllMaterials);
  });
}


// rgbeLoader.load('/environmentMaps/light_test.hdr', (environmentMap) => {
//   console.log("ENV_MAP", environmentMap);
//   environmentMap.mapping = THREE.EquirectangularReflectionMapping

//   scene.background = environmentMap
//   scene.environment = environmentMap
// })