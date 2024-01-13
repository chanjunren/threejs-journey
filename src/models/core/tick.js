import * as THREE from 'three';
import scene from '../scene';
import { camera, controls, renderer } from './threeJs';

const clock = new THREE.Clock()
let previousTime = 0

export default function tick () {
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime
    controls.update()
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}
