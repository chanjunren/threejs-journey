import * as THREE from "three";

export const torusKnot = new THREE.Mesh(
  new THREE.TorusKnotGeometry(1, 0.4, 10, 16),
  new THREE.MeshBasicMaterial()
);
torusKnot.position.x = -4;
torusKnot.position.y = 4;
