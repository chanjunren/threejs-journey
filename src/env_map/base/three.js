import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { sizes } from "./window";

export const canvas = document.querySelector('canvas.webgl')

export const scene = new THREE.Scene()

export const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(4, 5, 4)

export const controls = new OrbitControls(camera, canvas)
controls.target.y = 3
controls.enableDamping = true

export const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

export function initWorld() {
    scene.add(camera)
}