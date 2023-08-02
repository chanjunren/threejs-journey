import * as THREE from "three";

export default function loadThreeJsClock(baseComponents, componentsToUpdate) {
  const {
    controls, renderer, scene, camera
  } = baseComponents

  const clock = new THREE.Clock()
  const tick = () => {
    const elapsedTime = clock.getElapsedTime()

    controls.update()
    // Idk why this doesn't work, but the intention is for the camera helper to update based on LIL-GUI changes
    componentsToUpdate.forEach(c => c.update())

    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
  }

  tick()
}