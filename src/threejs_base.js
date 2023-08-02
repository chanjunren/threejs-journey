import * as THREE from "three";
import GUI from "lil-gui";
import {OrbitControls} from "three/addons/controls/OrbitControls.js";

export default function initCore({
    perspectiveSize,
    aspectRatio
}) {
  const canvas = document.querySelector('canvas.webgl')
  const scene = new THREE.Scene()

  const camera = new THREE.PerspectiveCamera(75, aspectRatio)
  camera.position.set(0,1,1.5)

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas
  })
  renderer.setSize(perspectiveSize.width, perspectiveSize.height)
  renderer.render(scene, camera)
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio))
  renderer.shadowMap.enabled = true
  // renderer.shadowMap.type = THREE.PCFSoftShadowMap

  const controls = new OrbitControls(camera, canvas)
  controls.enableDamping = true

  const axesHelper = new THREE.AxesHelper(10)
  scene.add(axesHelper)

  return {
    canvas,
    scene,
    camera,
    renderer,
    controls
  }
}