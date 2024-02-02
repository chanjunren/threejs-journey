import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { windowSizes } from './constants'

export const canvas = document.querySelector('canvas.webgl')

export const camera = new THREE.PerspectiveCamera(75, windowSizes.width / windowSizes.height, 0.1, 100)
camera.position.set(2, 2, 2)

export const controls = new OrbitControls(camera, canvas)
controls.target.set(0, 0.75, 0)
controls.enableDamping = true

export const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.setSize(windowSizes.width, windowSizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))