import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

export const scene = new THREE.Scene();

export const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.set(-3, 3, 3);

export const canvas = document.querySelector("canvas.webgl");

export const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

export const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

export function update3jsComponents() {
    controls.update()
    renderer.render(scene, camera)
}