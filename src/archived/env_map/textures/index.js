import * as THREE from "three";

const cubeTextureLoader = new THREE.CubeTextureLoader();
const textureLoader = new THREE.TextureLoader()

export const ENV_MAP_INTENSITY = "envMapIntensity";

export const environmentMap = cubeTextureLoader.load([
  "/environmentMaps/0/px.png",
  "/environmentMaps/0/nx.png",
  "/environmentMaps/0/py.png",
  "/environmentMaps/0/ny.png",
  "/environmentMaps/0/pz.png",
  "/environmentMaps/0/nz.png",
]);

// export const environmentMap = cubeTextureLoader.load([
//   "/environmentMaps/1/px.png",
//   "/environmentMaps/1/nx.png",
//   "/environmentMaps/1/py.png",
//   "/environmentMaps/1/ny.png",
//   "/environmentMaps/1/pz.png",
//   "/environmentMaps/1/nz.png",
// ]);

// export const environmentMap = cubeTextureLoader.load([
//   "/environmentMaps/2/px.png",
//   "/environmentMaps/2/nx.png",
//   "/environmentMaps/2/py.png",
//   "/environmentMaps/2/ny.png",
//   "/environmentMaps/2/pz.png",
//   "/environmentMaps/2/nz.png",
// ]);

export const floorColorTexture = textureLoader.load('/textures/wood_cabinet_worn_long/wood_cabinet_worn_long_diff_1k.jpg')
export const floorNormalTexture = textureLoader.load('/textures/wood_cabinet_worn_long/wood_cabinet_worn_long_nor_gl_1k.png')
export const floorAORoughnessMetalnessTexture = textureLoader.load('/textures/wood_cabinet_worn_long/wood_cabinet_worn_long_arm_1k.jpg')