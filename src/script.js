import * as THREE from 'three'

const canvas = document.querySelector('canvas.webgl')
const scene = new THREE.Scene()
const group = new THREE.Group()

function buildCubeWithRotation() {
    const newMesh = new THREE.Mesh(
        new THREE.BoxGeometry(1,1,1),
        new THREE.MeshBasicMaterial({color: 0xff0000})
    )
    newMesh.position.set(2,0, 0)
    return newMesh;
}

function buildCubeWithColor(color) {
    console.log(color, `LOL: ${color}`)
    return new THREE.Mesh(
        new THREE.BoxGeometry(1,1,1),
        new THREE.MeshBasicMaterial({color: color}),
    )
}

const cube1 = buildCubeWithColor(0x00ff00)
cube1.position.x = -2
const cube2 = buildCubeWithColor(0x0000ff)
const cube3 = buildCubeWithRotation();

group.add(cube1)
group.add(cube2)
group.add(cube3)
group.rotateZ(-10)
const perspectiveSize = {
    width: 800,
    height: 600
}

const camera = new THREE.PerspectiveCamera(75, perspectiveSize.width / perspectiveSize.height)
camera.position.z=10
camera.lookAt(group.position)
const axesHelper = new THREE.AxesHelper(10)

scene.add(camera)
scene.add(axesHelper)
scene.add(group)


const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(perspectiveSize.width, perspectiveSize.height)
renderer.render(scene, camera)