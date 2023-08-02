import * as THREE from "three";

export default function setupThreeJsGeometryObjects(material) {
  const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 32, 32),
      material
  )
  sphere.castShadow = true

  const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(5, 5),
      material
  )
  plane.rotation.x = - Math.PI * 0.5
  plane.position.y = - 0.5
  plane.receiveShadow = true

  return {
    sphere,
    plane
  }
}