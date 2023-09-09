import * as THREE from "three";

export default function startTicker({
  controls,
  renderer,
  scene,
  camera,
  ghosts
}) {
  const clock = new THREE.Clock()
  const tick = () => {
    const elapsedTime = clock.getElapsedTime()
    controls.update()

    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
  }

  tick()
}