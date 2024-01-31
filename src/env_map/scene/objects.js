import * as THREE from "three";
import { floorAORoughnessMetalnessTexture, floorColorTexture, floorNormalTexture } from "../textures";

export const torusKnot = new THREE.Mesh(
  new THREE.TorusKnotGeometry(1, 0.4, 10, 16),
  new THREE.MeshBasicMaterial()
);
torusKnot.position.x = -4;
torusKnot.position.y = 4;

export const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(8, 8),
  new THREE.MeshStandardMaterial({
    map: floorColorTexture,
    normalMap: floorNormalTexture,
    aoMap: floorAORoughnessMetalnessTexture,
    roughnessMap: floorAORoughnessMetalnessTexture,
    metalnessMap: floorAORoughnessMetalnessTexture
  })
)
floor.rotation.x = - Math.PI * 0.5

export const wall = new THREE.Mesh(
  new THREE.PlaneGeometry(8, 8),
  new THREE.MeshStandardMaterial({
    map: floorColorTexture,
    normalMap: floorNormalTexture,
    aoMap: floorAORoughnessMetalnessTexture,
    roughnessMap: floorAORoughnessMetalnessTexture,
    metalnessMap: floorAORoughnessMetalnessTexture
  })
)
wall.position.y = 4
wall.position.z = -4