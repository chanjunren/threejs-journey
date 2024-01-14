import * as THREE from "three";
export const ambientLight = new THREE.AmbientLight('#ffffff', 0.9)

export const directionalLight = new THREE.DirectionalLight('#ffffff', 2.1)
directionalLight.position.set(1, 2, 3)