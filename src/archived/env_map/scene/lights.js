import * as THREE from "three";
import { debugGui } from "../debug";

export const pointLight = new THREE.PointLight();
pointLight.position.set(0, 0, 5);

export const directionalLight = new THREE.DirectionalLight('#ffffff', 6)
directionalLight.castShadow = true
directionalLight.position.set(- 4, 6.5, 2.5)
directionalLight.shadow.camera.far = 15;
directionalLight.shadow.mapSize.set(512, 512)
// directionalLight.shadow.mapSize.set(1024, 1024)

directionalLight.target.updateWorldMatrix();

export const directionalLightCameraHelper = new THREE.CameraHelper(directionalLight.shadow.camera)

debugGui.add(directionalLight, 'intensity').min(0).max(10).step(0.001).name('lightIntensity')
debugGui.add(directionalLight.position, 'x').min(- 10).max(10).step(0.001).name('lightX')
debugGui.add(directionalLight.position, 'y').min(- 10).max(10).step(0.001).name('lightY')
debugGui.add(directionalLight.position, 'z').min(- 10).max(10).step(0.001).name('lightZ')

debugGui.add(directionalLight, 'castShadow')