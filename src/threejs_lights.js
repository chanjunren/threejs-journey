import * as THREE from "three";

export default function setupThreeJsLights() {
  // Ambient light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
  directionalLight.position.set(2, 2, - 1)
  directionalLight.castShadow = true
  directionalLight.shadow.mapSize.width = 1024
  directionalLight.shadow.mapSize.height = 1024
  directionalLight.shadow.camera.near = 1
  directionalLight.shadow.camera.far = 6
  console.log(directionalLight.shadow)

  const directionalLightCameraHelper = new THREE.CameraHelper(directionalLight.shadow.camera);

  return {
    // ambientLight,
    directionalLight,
    directionalLightCameraHelper
  }
}