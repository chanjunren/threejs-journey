import * as THREE from "three";
import {
  PARTICLE_COUNT,
  PARTICLE_POSITIONS,
  PARTICLES_GEOMETRY
} from "./particle_constants.js";

export default function startTicker({
  controls,
  renderer,
  scene,
  camera,
}) {
  const clock = new THREE.Clock()
  const tick = () => {
    const elapsedTime = clock.getElapsedTime()
    controls.update()

    for (let particleIdx = 0; particleIdx < PARTICLE_POSITIONS.length; particleIdx++) {
      // console.log(PARTICLES_GEOMETRY.attributes.position.needsUpdate)
      const particleXIdx = particleIdx * 3
      const particleYIdx = particleIdx * 3 + 1
      const x = PARTICLE_POSITIONS[particleXIdx]
      PARTICLE_POSITIONS[particleYIdx] = Math.sin(elapsedTime + x)
    }
    PARTICLES_GEOMETRY.attributes.position.needsUpdate = true
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
  }

  tick()
}

function oscillateParticles(particles) {
}