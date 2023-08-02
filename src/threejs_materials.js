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
  const meshStandard = new THREE.MeshStandardMaterial()
  meshStandard.roughness = 0.7

  return {
    meshStandard,
    bakedShadows,
    simpleShadow
  }
}
