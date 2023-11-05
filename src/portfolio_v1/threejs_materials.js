import * as THREE from "three";
import * as parameters from "three/nodes";

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
  const toonGradient = textureLoader.load('textures/gradients/3.jpg')
  toonGradient.magFilter = THREE.NearestFilter

  const toonMaterial = new THREE.MeshToonMaterial({
    color: '#ff0000',
    gradientMap: toonGradient
  })

  return {
    toonMaterial
  }
}
