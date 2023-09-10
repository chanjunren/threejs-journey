import * as THREE from "three";

export const GALAXY_PARAMS = {
  particleCount: 100000,
  size: 0.01,
  radius: 5,
  branches: 3,
  spin: 1,
  randomness: 0.2,
  randomnessPower: 3,
  innerColor: '#ff6030',
  outerColor: '#1b3984'
}

let GALAXY_POSITIONS = initGalaxyPositions()
let GALAXY_GEOMETRY = initGalaxyGeometry()
function initGalaxyGeometry() {
  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(GALAXY_POSITIONS, 3))
  geometry.setAttribute('color', new THREE.BufferAttribute(initGalaxyColors(), 3))

  return geometry
}

function initGalaxyColors() {
  const colors = new Float32Array(GALAXY_PARAMS.particleCount * 3)
  const innerColor = new THREE.Color(GALAXY_PARAMS.innerColor)
  const outerColor =new THREE.Color(GALAXY_PARAMS.outerColor)

  const mixedColor = innerColor.clone()
  mxedColor.lerp(outerColor, GALAXY_PARAMS.radius)
  for (let i = 0; i < GALAXY_PARAMS.particleCount; i++) {
    const i3 = i * 3
    colors[i3    ] = 1
    colors[i3 + 1] = 0
    colors[i3 + 2] = 0
  }

  return colors;
}


function initGalaxyPositions() {
  const positions = new Float32Array(GALAXY_PARAMS.particleCount * 3)
  for (let i = 0; i < GALAXY_PARAMS.particleCount; i++) {
    const i3 = i * 3

    const radius = Math.random() * GALAXY_PARAMS.radius

    const spinAngle = radius * GALAXY_PARAMS.spin
    const branchAngle = (i % GALAXY_PARAMS.branches) / GALAXY_PARAMS.branches * Math.PI * 2

    const randomX = Math.pow(Math.random(), GALAXY_PARAMS.randomnessPower) * (Math.random() < 0.5 ? 1 : - 1) * GALAXY_PARAMS.randomness * radius
    const randomY = Math.pow(Math.random(), GALAXY_PARAMS.randomnessPower) * (Math.random() < 0.5 ? 1 : - 1) * GALAXY_PARAMS.randomness * radius
    const randomZ = Math.pow(Math.random(), GALAXY_PARAMS.randomnessPower) * (Math.random() < 0.5 ? 1 : - 1) * GALAXY_PARAMS.randomness * radius

    positions[i3    ] = Math.cos(branchAngle + spinAngle) * radius + randomX
    positions[i3 + 1] = randomY
    positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ
  }
  return positions
}


const GALAXY_MATERIAL = initGalaxyMaterial()
function initGalaxyMaterial() {
  return new THREE.PointsMaterial({
    size: GALAXY_PARAMS.size,
    sizeAttenuation: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexColors: true
  })
}
function initGalaxy() {
  return new THREE.Points(GALAXY_GEOMETRY, GALAXY_MATERIAL)
}
export function regenerateGalaxy(scene) {
  if (GALAXY !== null) {
    GALAXY_MATERIAL.dispose()
    GALAXY_GEOMETRY.dispose()
    scene.remove(GALAXY)
  }

  GALAXY_POSITIONS = initGalaxyPositions()
  GALAXY_GEOMETRY = initGalaxyGeometry()
  GALAXY = initGalaxy()



  scene.add(GALAXY)
  return GALAXY
}

export let GALAXY = initGalaxy()