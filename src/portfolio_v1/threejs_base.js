import * as THREE from "three";
import GUI from "lil-gui";
import {OrbitControls} from "three/addons/controls/OrbitControls.js";
import {ASPECT_RATIO, PERSPECTIVE_SIZE} from "./page_state.js";

export default function initCore() {
  THREE.ColorManagement.enabled = false

  const canvas = document.querySelector('canvas.webgl')
  const scene = new THREE.Scene()

  const cameraGroup = new THREE.Group()
  scene.add(cameraGroup)

  // Base camera
  const camera = new THREE.PerspectiveCamera(35, ASPECT_RATIO, 0.1, 100)
  camera.position.z = 6
  cameraGroup.add(camera)

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
  })

  renderer.outputColorSpace = THREE.LinearSRGBColorSpace
  renderer.setSize(PERSPECTIVE_SIZE.width, PERSPECTIVE_SIZE.height)
  renderer.render(scene, camera)
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio))

  return {
    canvas,
    scene,
    cameraGroup,
    camera,
    renderer,
  }
}