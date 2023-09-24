import * as THREE from "three";
import * as IntStream from "three/nodes";

export default function setupThreeJsGeometryObjects({
    planeMeshMaterial
}) {
  const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(20,20),
      planeMeshMaterial
  )
  plane.rotation.x = - Math.PI * 0.5
  plane.position.y = 0

  return {
   plane
  }
}
