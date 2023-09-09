import * as THREE from "three";

export const PARTICLE_COUNT = 50000
export const PARTICLE_POSITIONS = new Float32Array(PARTICLE_COUNT * 3)
export const PARTICLE_COLORS = new Float32Array(PARTICLE_COUNT * 3)
export const PARTICLES_GEOMETRY = new THREE.BufferGeometry()
PARTICLES_GEOMETRY.setAttribute('position', new THREE.BufferAttribute(PARTICLE_POSITIONS, 3))
PARTICLES_GEOMETRY.setAttribute('color', new THREE.BufferAttribute(PARTICLE_COLORS, 3))
PARTICLES_GEOMETRY.attributes.position.needsUpdate = true

for (let particleIdx = 0; particleIdx < PARTICLE_COUNT * 3; particleIdx++) {
  PARTICLE_POSITIONS[particleIdx] = (Math.random() - 0.5) * 10
  PARTICLE_COLORS[particleIdx] = Math.random()
}
