import * as THREE from "three";

export default function setupThreeJsGeometryObjects({
  bakedShadows,
  sphereMeshMaterial,
  planeMeshMaterial,
  simpleShadow
}) {
  const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(1, 32, 32),
      sphereMeshMaterial
  )
  sphere.position.y = 1

  const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(20,20),
      planeMeshMaterial
  )

  plane.rotation.x = - Math.PI * 0.5
  plane.position.y = 0
  // plane.receiveShadow = true

  const sphereShadow = new THREE.Mesh(
      new THREE.PlaneGeometry(1.5, 1.5),
      new THREE.MeshBasicMaterial({
        color: 0x000000,
        transparent: true,
        alphaMap: simpleShadow
      })
  )
  sphereShadow.rotation.x = - Math.PI * 0.5
  sphereShadow.position.y = plane.position.y + 0.01
  // sphere.castShadow = true


  return {
    sphere,
    sphereShadow,
    plane
  }
}