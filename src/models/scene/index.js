
import * as THREE from "three";
import { camera } from "../core/threeJs";
import { floor } from "./floor";
import { ambientLight, directionalLight } from "./lights";

const scene = new THREE.Scene()

scene.add(camera)
scene.add(directionalLight);
scene.add(ambientLight);
scene.add(floor);

export default scene;