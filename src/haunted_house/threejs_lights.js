import * as THREE from "three";

export default function setupThreeJsLights() {
  // Ambient light
  const ambientLight = new THREE.AmbientLight('#ffffff', 0.12)

  const moonLight = new THREE.DirectionalLight(0xffffff, 0.12)
  moonLight.position.set(3,3,-3)

  const directionalLightCameraHelper = new THREE.DirectionalLightHelper(moonLight, 5);

  return {
    moonLight,
    directionalLightCameraHelper,
    ambientLight,
  }
}