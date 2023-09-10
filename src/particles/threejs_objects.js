import * as THREE from "three";
import {
  PARTICLES_GEOMETRY
} from "./particle_constants.js";

export default function setupThreeJsGeometryObjects({
  particlesMaterial
}) {
  const particles = new THREE.Points(PARTICLES_GEOMETRY, particlesMaterial)
  const cube = new THREE.Mesh(
      new THREE.BoxGeometry(),
      new THREE.MeshBasicMaterial()
  )

  return {
   particles,
    cube
  }
}
