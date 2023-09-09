import * as THREE from 'three'
import {OrbitControls} from "three/addons/controls/OrbitControls.js";
import GUI from 'lil-gui';
import {FontLoader} from "three/addons/loaders/FontLoader.js";
import {TextGeometry} from "three/addons/geometries/TextGeometry.js";

const canvas = document.querySelector('canvas.webgl')
const scene = new THREE.Scene()
const gui = new GUI();

function initLoadingManager() {
  const loadingManager = new THREE.LoadingManager()
  loadingManager.onError = (url) => {
    console.log('There was an error loading ' + url);
  };
  loadingManager.onLoad = () => {
    console.log("Loaded")
  }
  return loadingManager;
}

const loadingManager = initLoadingManager();
const textureLoader = new THREE.TextureLoader(loadingManager)


const fontLoader = new FontLoader()
const textMaterial = new THREE.MeshBasicMaterial()
textMaterial.map = textureLoader.load('/textures/matcaps/8.png')
fontLoader.load(
    '/fonts/helvetiker_regular.typeface.json',
    (font) => {
      const textGeometry = new TextGeometry(
          'Shiny donut heaven',
          {
            font: font,
            size: 0.5,
            height: 0.2,
            curveSegments: 6,
            bevelEnabled: true,
            bevelThickness: 0.03,
            bevelSize: 0.02,
            bevelOffset: 0,
            bevelSegments: 0,
          }
      )
      textGeometry.center()

      // textMaterial.wireframe = true
      const text = new THREE.Mesh(textGeometry, textMaterial)
      scene.add(text)
    }
)


let NUMBER_OF_DONUTS = 100
let donutGeometry = new THREE.TorusGeometry()
for (let i = 0; i < NUMBER_OF_DONUTS; i++) {
  const newDonut = new THREE.Mesh(donutGeometry, textMaterial)
  newDonut.position.x = (Math.random() - 0.5) * 50
  newDonut.position.y = (Math.random() - 0.5) * 50
  newDonut.position.z = (Math.random() - 0.5) * 50

  newDonut.rotation.x = (Math.random() - 0.5) * 50
  newDonut.rotation.y = (Math.random() - 0.5) * 50
  newDonut.rotation.z = (Math.random() - 0.5) * 50
  scene.add(newDonut)
}

const perspectiveSize = {
  width: window.innerWidth,
  height: window.innerHeight
}

const cursor = {
  x: 0, y: 0
}

window.addEventListener('mousemove', (event => {
  cursor.x = event.clientX / perspectiveSize.width - 0.5;
  cursor.y = event.clientY / perspectiveSize.height - 0.5;
}))

window.addEventListener('resize', (event => {
  perspectiveSize.width = window.innerWidth,

      perspectiveSize.height = window.innerHeight
  camera.aspect = perspectiveSize.width / perspectiveSize.height
  camera.updateProjectionMatrix()

  renderer.setSize(perspectiveSize.width, perspectiveSize.height)
}))

window.addEventListener('dblclick', (event => {
  if (document.fullscreenElement) {
    document.exitFullscreen()
  } else {
    canvas.requestFullscreen()
  }
}))

const aspectRatio = perspectiveSize.width / perspectiveSize.height
const camera = new THREE.PerspectiveCamera(75, aspectRatio)
camera.position.set(0,0,2)

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

const axesHelper = new THREE.AxesHelper(10)
scene.add(axesHelper)

const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})
renderer.setSize(perspectiveSize.width, perspectiveSize.height)
renderer.render(scene, camera)
renderer.setPixelRatio(Math.min(2, window.devicePixelRatio))
const clock = new THREE.Clock()
const tick = () =>
{
  const elapsedTime = clock.getElapsedTime()

  // Update controls
  controls.update()

  // Render
  renderer.render(scene, camera)

  // Call tick again on the next frame
  window.requestAnimationFrame(tick)
}

tick()
