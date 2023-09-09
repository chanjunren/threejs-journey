import * as THREE from "three";
import {texture} from "three/nodes";

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

  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.1,
    sizeAttenuation: true
  })
  const particleTexture = textureLoader.load('/textures/particles/2.png')

  particlesMaterial.color = new THREE.Color('#ff88cc')
  particlesMaterial.map = particleTexture
  particlesMaterial.transparent = true
  particlesMaterial.alphaMap = particleTexture
  particlesMaterial.vertexColors = true

  // particlesMaterial.alphaTest = 0.001
  // particlesMaterial.depthTest = false
  particlesMaterial.depthWrite = false
  particlesMaterial.blending = THREE.AdditiveBlending
  return {
    particlesMaterial
  }
}
