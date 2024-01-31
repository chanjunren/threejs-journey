import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { debugGui } from "../debug";
import { sizes } from "./window";

export const canvas = document.querySelector('canvas.webgl')

export const scene = new THREE.Scene()

export const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(4, 5, 4)

export const controls = new OrbitControls(camera, canvas)
controls.target.y = 3
controls.enableDamping = true

export const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    // antialias : true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1))
renderer.toneMapping = THREE.ReinhardToneMapping
renderer.toneMappingExposure = 2 
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap


debugGui.add(renderer, 'toneMapping', {
    No: THREE.NoToneMapping,
    Linear: THREE.LinearToneMapping,
    Reinhard: THREE.ReinhardToneMapping,
    Cineon: THREE.CineonToneMapping,
    ACESFilmic: THREE.ACESFilmicToneMapping
})
debugGui.add(renderer, 'toneMappingExposure').min(0).max(10).step(0.001)

export function initWorld() {
    scene.add(camera)
}