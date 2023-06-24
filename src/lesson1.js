import * as THREE from 'three'
import {OrbitControls} from "three/addons/controls/OrbitControls.js";
import GUI from 'lil-gui';

const gui = new GUI();

const parameters = {
    meshColor: 0xff0000
}



const canvas = document.querySelector('canvas.webgl')
const scene = new THREE.Scene()
const material = new THREE.MeshBasicMaterial({
    color: parameters.meshColor,
    wireframe: true
})
function buildMesh(material) {
    return new THREE.Mesh(
        new THREE.BoxGeometry(1,1,1, 5,5,5),
        material
    )
}


gui.addColor(parameters, 'meshColor')
    .onChange(() => {
        material.color.set(parameters.meshColor)
    })


const mesh = buildMesh(material);
gui.add(mesh.position, 'y', -3, 3, 0.01)
const tick = () => {
    renderer.render(scene, camera)
    controls.update()
    window.requestAnimationFrame(tick)
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

const number = 50
const positions = generateRandomTriangles(number)

function generateRandomTriangles(numberOfTriangles) {
    let res = new Float32Array(numberOfTriangles * 3 * 3)
    for (let i = 0; i < numberOfTriangles * 3 * 3; i++) {
        res[i] = (Math.random() - 0.5) * 4
    }
    return res
}

const positionsAttribute = new THREE.BufferAttribute(positions, 3);

const geometry = new THREE.BufferGeometry()
geometry.setAttribute('position', positionsAttribute)

function buildGeometryMesh(geometry) {
    return new THREE.Mesh(
        geometry,
        new THREE.MeshBasicMaterial({
            color: 0xffffff,
            wireframe: true
        })
    )
}

const geometryMesh = buildGeometryMesh(geometry)

const aspectRatio = perspectiveSize.width / perspectiveSize.height
const camera = new THREE.PerspectiveCamera(75,aspectRatio)
camera.position.set(0,0,2)
camera.lookAt(geometryMesh.position)

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

const axesHelper = new THREE.AxesHelper(10)
// scene.add(geometryMesh)
scene.add(axesHelper)
scene.add(mesh)

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(perspectiveSize.width, perspectiveSize.height)
renderer.render(scene, camera)
renderer.setPixelRatio(Math.min(2, window.devicePixelRatio))
tick()
