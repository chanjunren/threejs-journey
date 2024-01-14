import * as THREE from "three";
import scene from ".";
import { loadModel } from "../core/loaders";
import { mixer, setMixer } from "../core/mixers";

export default function loadFox() {
  loadModel("/models/Fox/glTF/Fox.gltf", (gltf) => {
    console.log("Successfully loaded fox", gltf);
    console.log("Fox children", gltf.scene.children);
    gltf.scene.scale.set(0.025, 0.025, 0.025)
    scene.add(gltf.scene);

    setMixer(new THREE.AnimationMixer(gltf.scene))
    const action = mixer.clipAction(gltf.animations[1])
    action.play()

  });
}