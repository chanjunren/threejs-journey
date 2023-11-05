import CANNON from "cannon";
import * as THREE from "three";
import { scene } from "../../core/three.js";
import { world } from "../../core/world.js";
import { objectsToUpdate } from "./index.js";

import { defaultMaterial } from "../properties/materials";
import { environmentMapTexture } from "../properties/textures.js";

import { playHitSound } from "../properties/sounds";

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const boxMaterial = new THREE.MeshStandardMaterial({
    metalness: 0.3,
    roughness: 0.4,
    envMap: environmentMapTexture,
    envMapIntensity: 0.5
})

export function createBox(width, height, depth, position) {
  const mesh = new THREE.Mesh(boxGeometry, boxMaterial);
  mesh.scale.set(width, height, depth);
  mesh.castShadow = true;
  mesh.position.copy(position);
  scene.add(mesh)

  const shape = new CANNON.Box(new CANNON.Vec3(width * 0.5, height * 0.5, depth * 0.5))

  const body = new CANNON.Body({
    mass: 1,
    position: new THREE.Vector3(0, 0, 0),
    shape: shape,
    material: defaultMaterial,
  });
  body.position.copy(position);
  body.addEventListener('collide', playHitSound)

  world.addBody(body);

  objectsToUpdate.push({
    mesh: mesh,
    body: body,
  });
}
