import * as THREE from "three";

export default function loadThreeJsClock(baseComponents) {
  const {
    controls, renderer, scene, camera
  } = baseComponents

  const clock = new THREE.Clock()
  const tick = () => {
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
  }

  tick()
}