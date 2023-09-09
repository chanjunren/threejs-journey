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

  const doorColorTexture = textureLoader.load('/textures/door/color.jpg')
  const doorAlphaTexture = textureLoader.load('/textures/door/alpha.jpg')
  const doorAmbientOcclusionTexture = textureLoader.load('/textures/door/ambientOcclusion.jpg')
  const doorHeightTexture = textureLoader.load('/textures/door/height.jpg')
  const doorNormalTexture = textureLoader.load('/textures/door/normal.jpg')
  const doorMetalTexture = textureLoader.load('/textures/door/metalness.jpg')
  const doorRoughnessTexture = textureLoader.load('/textures/door/roughness.jpg')

  const doorMaterial = new THREE.MeshStandardMaterial({
    map: doorColorTexture,
    transparent: true,
    alphaMap: doorAlphaTexture,
    aoMap: doorAmbientOcclusionTexture,
    displacementMap: doorHeightTexture,
    displacementScale: 0.1,
    normalMap: doorNormalTexture,
    metalnessMap: doorMetalTexture,
    roughnessMap: doorRoughnessTexture
  })

  const bricksColorTexture = textureLoader.load('/textures/bricks/color.jpg')
  const bricksAmbientOcclusionTexture = textureLoader.load('/textures/bricks/ambientOcclusion.jpg')
  const bricksNormalTexture = textureLoader.load('/textures/bricks/normal.jpg')
  const bricksRoughnessTexture = textureLoader.load('/textures/bricks/roughness.jpg')
  const wallMaterial = new THREE.MeshStandardMaterial({
    map: bricksColorTexture,
    aoMap: bricksAmbientOcclusionTexture,
    normalMap: bricksNormalTexture,
    roughnessMap: bricksRoughnessTexture
  })

  const grassColorTexture = textureLoader.load('/textures/grass/color.jpg')
  grassColorTexture.repeat.set(8, 8)
  grassColorTexture.wrapS = THREE.RepeatWrapping
  grassColorTexture.wrapT = THREE.RepeatWrapping
  const grassAmbientOcclusionTexture = textureLoader.load('/textures/grass/ambientOcclusion.jpg')
  grassAmbientOcclusionTexture.repeat.set(8,8)
  grassAmbientOcclusionTexture.wrapS = THREE.RepeatWrapping
  grassAmbientOcclusionTexture.wrapT = THREE.RepeatWrapping
  const grassNormalTexture = textureLoader.load('/textures/grass/normal.jpg')
  grassNormalTexture.repeat.set(8,8)
  grassNormalTexture.wrapS = THREE.RepeatWrapping
  grassNormalTexture.wrapT = THREE.RepeatWrapping
  const grassRoughnessTexture = textureLoader.load('/textures/grass/roughness.jpg')
  grassRoughnessTexture.repeat.set(8,8)
  grassRoughnessTexture.wrapS = THREE.RepeatWrapping
  grassRoughnessTexture.wrapT = THREE.RepeatWrapping
  const planeMeshMaterial = new THREE.MeshStandardMaterial({
    map: grassColorTexture,
    aoMap: grassAmbientOcclusionTexture,
    normalMap: grassNormalTexture,
    roughnessMap: grassRoughnessTexture
  })


  const sphereMeshMaterial = new THREE.MeshStandardMaterial()
  sphereMeshMaterial.roughness = 0.7

  const roofMaterial = new THREE.MeshStandardMaterial({color : '#b35f45'})
  const graveMaterial = new THREE.MeshStandardMaterial({ color: '#b2b6b1' })


  return {
    sphereMeshMaterial,
    planeMeshMaterial,
    wallMaterial,
    roofMaterial,
    graveMaterial,
    doorMaterial,
    bakedShadows,
    simpleShadow
  }
}
