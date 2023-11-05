import * as THREE from "three";
import {CURSOR, OBJECTS_DISTANCE, PERSPECTIVE_SIZE, SCROLL_Y} from "./page_state.js";

export default function startTicker({
  controls,
  renderer,
  scene,
  camera,
  cameraGroup,
  mesh1,
  mesh2,
  mesh3
}) {
  const clock = new THREE.Clock()
  const rotatingMeshes = [mesh1, mesh2, mesh3]
  const tick = () => {
    const elapsedTime = clock.getElapsedTime()
    for (let idx in rotatingMeshes) {
      rotatingMeshes[idx].rotation.x = elapsedTime * 0.1
      rotatingMeshes[idx].rotation.y = elapsedTime * 1.2
    }

    camera.position.y = - SCROLL_Y / PERSPECTIVE_SIZE.height * OBJECTS_DISTANCE

    const parallaxX = CURSOR.x
    const parallaxY = CURSOR.y

    cameraGroup.position.x = parallaxX
    cameraGroup.position.y = parallaxY

    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
  }

  tick()
}