import { addChildrenToScene, loadModel } from "../core/loaders";

export default function loadFlightHelmet() {
    loadModel("/models/FlightHelmet/glTF/FlightHelmet.gltf", (gltf) => {
        console.log("Successfully loaded flight helmet", addChildrenToScene(gltf));
    })
}