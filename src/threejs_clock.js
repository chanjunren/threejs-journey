import * as THREE from "three";

export default function startTicker({
  controls, renderer, scene, camera, sphere, sphereShadow
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