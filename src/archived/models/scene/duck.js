import { addChildrenToScene, loadModel } from "../core/loaders";

export default function loadDuck() {
    loadModel('/models/Duck/glTF-Draco/Duck.gltf', (gltf) => {
        console.log("Successfully loaded duck", addChildrenToScene(gltf));
    })
}