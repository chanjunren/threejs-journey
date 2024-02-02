import * as THREE from "three";
import { update3jsComponents } from "./core/three.js";
import {updatePhysicsWorld} from "./core/world.js";
import {createSphere} from "./scene/objects/sphere.js";
const clock = new THREE.Clock()

let oldElapsedTime = 0

export default function tick() {
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - oldElapsedTime;
    oldElapsedTime = elapsedTime;


    update3jsComponents()
    updatePhysicsWorld(deltaTime)


    window.requestAnimationFrame(tick)
}