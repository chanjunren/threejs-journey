import * as THREE from 'three'
import {OrbitControls} from "three/addons/controls/OrbitControls.js";
import GUI from 'lil-gui';

const gui = new GUI();

const guiAdjustmentParameters = {
    meshColor: 0xff0000
}

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

function initTextures() {
    const textures = []
    textures.push(textureLoader.load('/textures/door/color.jpg'))
    // textures[0].repeat.x = 2
    // textures[0].repeat.y = 3
    // textures[0].offset.x = 0.5
    // textures[0].offset.y = 0.5
    // textures[0].rotation = Math.PI / 4
    // textures[0].wrapS = THREE.MirroredRepeatWrapping
    // textures[0].wrapT = THREE.MirroredRepeatWrapping
    textures.push(textureLoader.load('/textures/door/ambientOcclusion.jpg'))
    textures.push(textureLoader.load('/textures/door/height.jpg'))
    textures.push(textureLoader.load('/textures/door/metalness.jpg'))
    textures.push(textureLoader.load('/textures/door/normal.jpg'))
    textures.push(textureLoader.load('/textures/door/roughness.jpg'))

    textures.push(textureLoader.load('/textures/door/alpha.jpg'))
    // textures.push(textureLoader.load('/textures/minecraft.png'))
    // textures[2].minFilter = THREE.NearestFilter
    // textures[2].magFilter = THREE.NearestFilter
    textures.push(textureLoader.load('/textures/matcaps/1.png'))

    return textures;
}

const textures = initTextures();


const canvas = document.querySelector('canvas.webgl')
const scene = new THREE.Scene()
const material = new THREE.MeshBasicMaterial({
    map: textures[7],
    // color: parameters.meshColor,
    // wireframe: true
})

function buildSphere(material) {
    return new THREE.Mesh(
        new THREE.SphereGeometry(0.5,16,16),
        material
    )
}

function buildPlane(material) {
    return new THREE.Mesh(
        new THREE.PlaneGeometry(1, 1),
        material
    )
}

function buildTorus(material) {
    return new THREE.Mesh(
        new THREE.TorusGeometry(0.3,  0.2,16, 32),
        material
    )
}

gui.addColor(guiAdjustmentParameters, 'meshColor')
    .onChange(() => {
        material.color.set(guiAdjustmentParameters.meshColor)
    })


const sphereMesh = buildSphere(material);
const planeMesh = buildPlane(material);
const torusMesh = buildTorus(material);

sphereMesh.position.x = -1.5
torusMesh.position.x = 1.5

gui.add(sphereMesh.position, 'y', -3, 3, 0.01)
gui.add(planeMesh.position, 'y', -3, 3, 0.01)
gui.add(torusMesh.position, 'y', -3, 3, 0.01)

const clock = new THREE.Clock()
const tick = () => {
    const elapsedTime = clock.getElapsedTime()
    sphereMesh.rotation.x = 0.1 * elapsedTime
    torusMesh.rotation.x = 0.1 * elapsedTime
    planeMesh.rotation.x = 0.1 * elapsedTime
    sphereMesh.rotation.y = 0.1 * elapsedTime
    torusMesh.rotation.y = 0.1 * elapsedTime
    planeMesh.rotation.y = 0.1 * elapsedTime
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
scene.add(sphereMesh)
scene.add(planeMesh)
scene.add(torusMesh)

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(perspectiveSize.width, perspectiveSize.height)
renderer.render(scene, camera)
renderer.setPixelRatio(Math.min(2, window.devicePixelRatio))
tick()
