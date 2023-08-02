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
  directionalLight.shadow.camera.top = 2
  directionalLight.shadow.camera.right = 2
  directionalLight.shadow.camera.bottom = - 2
  directionalLight.shadow.camera.left = -2

  const directionalLightCameraHelper = new THREE.CameraHelper(directionalLight.shadow.camera);

  const spotlight = new THREE.SpotLight(0xffffff, 0.4, 10, Math.PI * 0.3)
  spotlight.castShadow = true
  spotlight.position.set(0, 2, 2)
  const spotlightTarget = spotlight.target

  const spotlightCameraHelper = new THREE.CameraHelper(spotlight.shadow.camera)

  const pointLight = new THREE.PointLight(0xffffff, 0.3)
  pointLight.castShadow = true
  pointLight.shadow.mapSize.width = 1024
  pointLight.shadow.mapSize.height = 1024
  pointLight.shadow.camera.near = 0.1
  pointLight.shadow.camera.far = 5
  pointLight.position.set(- 1, 1, 0)

  const pointLightCameraHelper = new THREE.CameraHelper(pointLight.shadow.camera)

  return {
    ambientLight,
    directionalLight,
    // directionalLightCameraHelper
    spotlight,
    // spotlightTarget,
    // spotlightCameraHelper
    pointLight,
    // pointLightCameraHelper
  }
}