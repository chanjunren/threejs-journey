import * as THREE from 'three'

const canvas = document.querySelector('canvas.webgl')

const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
mesh.position.set(0,0,0)
mesh.scale.set(2,4,2)
mesh.rotation.x
const perspectiveSize = {
    width: 800,
    height: 600
}

const camera = new THREE.PerspectiveCamera(75, perspectiveSize.width / perspectiveSize.height)
camera.position.z=10
camera.position.x=4

const axesHelper = new THREE.AxesHelper(10)

scene.add(mesh)
scene.add(camera)
scene.add(axesHelper)

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(perspectiveSize.width, perspectiveSize.height)
renderer.render(scene, camera)