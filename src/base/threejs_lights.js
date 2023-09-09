import * as THREE from "three";

export default function setupThreeJsLights() {
  // Ambient light
  const ambientLight = new THREE.AmbientLight('#ffffff', 1.7)

  return {
    ambientLight,
  }
}