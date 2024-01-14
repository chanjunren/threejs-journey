import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const gltfLoader = new GLTFLoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('/draco/');

gltfLoader.setDRACOLoader(dracoLoader)

export function loadModel(path, handle) {
  gltfLoader.load(
    path,
    (gltf) => {
      handle(gltf);
    },
    (progress) => {
      console.log("Loading model...", progress);
    },
    (error) => {
      console.log("Error loading model", error);
    }
  );
}