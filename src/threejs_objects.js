import * as THREE from "three";

export default function setupThreeJsGeometryObjects({
    bakedShadows,
    meshStandard,
    simpleShadow
}) {
  const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 32, 32),
      meshStandard
  )
  const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(5, 5),
      meshStandard
  )
  plane.rotation.x = - Math.PI * 0.5
  plane.position.y = - 0.5
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