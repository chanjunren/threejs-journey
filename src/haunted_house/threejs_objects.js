import * as THREE from "three";
import * as IntStream from "three/nodes";

export default function setupThreeJsGeometryObjects({
  wallMaterial,
  planeMeshMaterial,
  roofMaterial,
  graveMaterial,
  doorMaterial
}) {
  const house = new THREE.Group()
  const walls = new THREE.Mesh(
      new THREE.BoxGeometry(4, 2.5, 4),
      wallMaterial
  )
  walls.position.y = 1.25

  const roof = new THREE.Mesh(
      new THREE.ConeGeometry( 3.5, 2, 4 ),
      roofMaterial
  )
  roof.rotation.y = Math.PI * 0.25
  roof.position.y = 3.5


  const door = new THREE.Mesh(
      new THREE.PlaneGeometry(2.2, 2.2, 100, 100),
      doorMaterial
  )
  door.position.set(0, 1.0, 2.01)

  const doorLight = new THREE.PointLight('#ff7d46', 1, 7)
  doorLight.castShadow = true
  doorLight.position.set(0, 2.2, 2.7)
  house.add(doorLight)
  house.add(walls)
  house.add(roof)
  house.add(door)

  const graves = new THREE.Group()
  const graveGeometry = new THREE.BoxGeometry(0.6, 0.8, 0.2)
  const numberOfGraves = 50
  for (let i = 0; i < numberOfGraves; i++) {
    const angle = Math.random() * Math.PI * 2 // Random angle
    const radius = 3 + Math.random() * 6      // Random radius
    const x = Math.cos(angle) * radius        // Get the x position using cosinus
    const z = Math.sin(angle) * radius        // Get the z position using sinus
    const newGrave = new THREE.Mesh(
        graveGeometry,
        graveMaterial
    )
    newGrave.castShadow = true

    // Position
    newGrave.position.set(x, 0.3, z)

    // Rotation
    newGrave.rotation.z = (Math.random() - 0.5) * 0.4
    newGrave.rotation.y = (Math.random() - 0.5) * 0.4
    graves.add(newGrave)
  }


  const ghost1 = new THREE.PointLight('#ff00ff', 2, 3)
  const ghost2 = new THREE.PointLight('#00ffff', 2, 3)
  const ghost3 = new THREE.PointLight('#ffff00', 2, 3)
  const ghosts = new THREE.Group()
  ghosts.add(ghost1, ghost2, ghost3)

  const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(20,20),
      planeMeshMaterial
  )
  plane.receiveShadow = true
  plane.rotation.x = - Math.PI * 0.5
  plane.position.y = 0

  return {
    house,
    graves,
    plane,
    ghosts
  }
}
