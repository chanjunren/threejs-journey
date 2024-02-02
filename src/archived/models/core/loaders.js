import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import scene from '../scene';

const gltfLoader = new GLTFLoader();
/**
 * The Draco version can be much lighter than the default version.
 * Compression is applied to the buffer data (typically the geometry)
 * It doesn't matter if you are using the default glTF, the binary glTF or the embedded glTF.
 * 
 * When to use the Draco compression
 * While you might think that the Draco compression is a win-win situation, it is not.
 * Yes, the geometries are lighter, but first, you have to load the DRACOLoader class and the decoder.
 * Secondly, it takes time and resources for your computer to decode a compressed file that can result in a short freeze at the start of the experience,
 *  even if we are using a worker and Web Assembly code.
 * You'll have to adapt and decide what the best solution is.
 * If you only have one model with a 100kB geometry, you probably don't need Draco.
 * But if you have many MB of models to load and don't care about some freezes at the start of the experience,
 * you might need the Draco compression.
 */
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

/**
 * Duplicate the children because ThreeJS removes certain elements when refreshing the scene
 * Scene is refreshed when objects are added to the scene 
 * @param {*} glft success handler param
 */
export function addChildrenToScene(glft) {
  [...glft.scene.children].forEach(c => {
    scene.add(c)
  })
}
