import * as THREE from 'three'

const canvas = document.querySelector('canvas.webgl')
const scene = new THREE.Scene()

function buildCubeWithRotation() {
    const newMesh = new THREE.Mesh(
        new THREE.BoxGeometry(1,1,1),
        new THREE.MeshBasicMaterial({color: 0xffffff})
    )
    newMesh.position.set(0,0, 0)
    newMesh.scale.set(2,2,2)
    // newMesh.rotateX(5)
    // newMesh.scale.set(2, 4, 2)
    // newMesh.rotation.reorder('XYZ')
    // newMesh.rotation.y = Math.PI / 2;
    // newMesh.rotation.z = Math.PI / 2;
    // newMesh.rotation.x = Math.PI / 4;
    return newMesh;
}
const cube = buildCubeWithRotation();

const tick = () => {
    // setNextFrame()
    setNextFrameV2()
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

// Method 1
let prevTime = Date.now()
function setNextFrame() {
    let currentTime = Date.now()
    cube.rotation.z += 0.001 * timeDiff
    let timeDiff = currentTime - prevTime
    prevTime = currentTime

    // For making sure that rotation takes place at the same rate
    cube.rotation.z += 0.001 * timeDiff
    cube.rotation.x += 0.001 * timeDiff
}

const clock = new THREE.Clock()
function setNextFrameV2() {
    const elapsedTime = clock.getElapsedTime()
    // cube.rotation.x = elapsedTime * Math.PI * 2;
    // cube.rotation.x = elapsedTime * Math.PI * 2;
    // cube.position.x = Math.sin(elapsedTime)
    // cube.position.y = Math.sin(elapsedTime)
    cube.rotation.y = elapsedTime
}

const perspectiveSize = {
    width: 800,
    height: 600
}

const camera = new THREE.PerspectiveCamera(75, perspectiveSize.width / perspectiveSize.height)
camera.position.z=5
camera.position.y=1
const axesHelper = new THREE.AxesHelper(10)

scene.add(camera)
scene.add(axesHelper)
scene.add(cube)

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(perspectiveSize.width, perspectiveSize.height)

tick(0)