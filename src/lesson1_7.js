import * as THREE from 'three'
import {OrbitControls} from "three/addons/controls/OrbitControls.js";

const canvas = document.querySelector('canvas.webgl')
const scene = new THREE.Scene()

function buildMesh() {
    const newMesh = new THREE.Mesh(
        new THREE.BoxGeometry(1,1,1, 5,5,5),
        new THREE.MeshBasicMaterial({color: 0xffffff})
    )
    return newMesh;
}
const mesh = buildMesh();

const tick = () => {
    // setNextFrame()
    // setNextFrameV2()
    renderer.render(scene, camera)
    controls.update()
    window.requestAnimationFrame(tick)
}

function setNextFrameV2() {
    camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3
    camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3
    camera.position.y = cursor.y * 5
    camera.lookAt(mesh.position)
}

const perspectiveSize = {
    width: 800,
    height: 600
}
const cursor = {
    x: 0, y: 0
}

window.addEventListener('mousemove', (event => {
    cursor.x = event.clientX / perspectiveSize.width - 0.5;
    cursor.y = event.clientY / perspectiveSize.height - 0.5;
}))

const aspectRatio = perspectiveSize.width / perspectiveSize.height
const camera = new THREE.PerspectiveCamera(75,aspectRatio)
camera.position.set(0,0,2)
// const camera = new THREE.OrthographicCamera(
//     -1 * aspectRatio,
//     1 * aspectRatio,
//     1,
//     -1,
//     0.1,
//     1000
// )
camera.lookAt(mesh.position)

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
const axesHelper = new THREE.AxesHelper(10)
scene.add(camera)
scene.add(axesHelper)
scene.add(mesh)

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(perspectiveSize.width, perspectiveSize.height)
renderer.render(scene, camera)
tick()