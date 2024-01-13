import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
const gltfLoader = new GLTFLoader();

export default function loadModels() {
  gltfLoader.load(
    "/models/Duck/glTF/Duck.gltf",
    (gltf) => {
      console.log("success");
      console.log(gltf);
    },
    (progress) => {
      console.log("progress");
      console.log(progress);
    },
    (error) => {
      console.log("error");
      console.log(error);
    }
  );
}
