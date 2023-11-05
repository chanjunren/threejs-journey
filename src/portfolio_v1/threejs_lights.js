import * as THREE from "three";

export default function setupThreeJsLights() {
  // Ambient light
  // const ambientLight = new THREE.AmbientLight('#ffffff', 1.7)

  const directionalLight = new THREE.DirectionalLight('#ffffff', 1)
  directionalLight.position.set(1, 1, 0)
  // scene.add(directionalLight)
  return {
    directionalLight
  }
}