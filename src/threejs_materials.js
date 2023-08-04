import * as THREE from "three";

export default function loadMaterials() {
  function initLoadingManager() {
    const loadingManager = new THREE.LoadingManager()
    loadingManager.onError = (url) => {
      console.log('There was an error loading ' + url);
    };
    loadingManager.onLoad = () => {
      console.log("Loaded")
    }
    return loadingManager;
  }

  const loadingManager = initLoadingManager();
  const textureLoader = new THREE.TextureLoader(loadingManager)

  const bakedShadows = textureLoader.load('/textures/bakedShadow.jpg')
  const simpleShadow =  textureLoader.load('/textures/simpleShadow.jpg')
  const sphereMeshMaterial = new THREE.MeshStandardMaterial()
  sphereMeshMaterial.roughness = 0.7

  const planeMeshMaterial = new THREE.MeshStandardMaterial({color: "#a9c388"})
  return {
    sphereMeshMaterial,
    planeMeshMaterial,
    bakedShadows,
    simpleShadow
  }
}
