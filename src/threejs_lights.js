import * as THREE from "three";

export default function setupThreeJsLights() {
  // Ambient light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
  directionalLight.position.set(2, 2, - 1)

  return {
    ambientLight,
    directionalLight
  }
}