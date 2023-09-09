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
  const planeMeshMaterial = new THREE.MeshStandardMaterial({
    color: '#f5f3e7'
  })

  return {
    planeMeshMaterial
  }
}
