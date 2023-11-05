import CANNON from "cannon";
import * as THREE from "three";
import { scene } from "../../core/three.js";
import { world } from "../../core/world.js";
import { defaultMaterial } from "../properties/materials.js";
import { environmentMapTexture } from "../properties/textures.js";
import { objectsToUpdate } from "./index.js";

export function createSphere(radius, position) {
  const sphereGeometry = new THREE.SphereGeometry(radius, 20, 20);
  const sphereMeshMaterial = new THREE.MeshStandardMaterial({
    metalness: 0.3,
    roughness: 0.4,
    envMap: environmentMapTexture,
    envMapIntensity: 0.5,
  });

  const shape = new CANNON.Sphere(radius);
  const mesh = new THREE.Mesh(sphereGeometry, sphereMeshMaterial);
  mesh.castShadow = true;
  mesh.position.copy(position);
  scene.add(mesh);

  const body = new CANNON.Body({
    mass: 1,
    position: new CANNON.Vec3(0, 3, 0),
    shape: shape,
    material: defaultMaterial,
  });
  body.position.copy(position);

  world.addBody(body);

  objectsToUpdate.push({
    mesh: mesh,
    body: body,
  });
}

