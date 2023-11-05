import CANNON from "cannon";
import { cannonObjects, objectsToUpdate } from "../scene/objects/index.js";
// import {sphere, sphereBody} from "../scene/objects/sphere.js";
import { createSphere } from "../scene/objects/sphere.js";
import { concretePlasticContactMaterial, defaultContactMaterial } from "../scene/properties/materials.js";

export const world = new CANNON.World()

export function initCannonWorld() {
    world.gravity.set(0, - 9.82, 0)

    world.addContactMaterial(concretePlasticContactMaterial)
    world.defaultContactMaterial = defaultContactMaterial
    world.broadphase = new CANNON.SAPBroadphase(world)

    cannonObjects.forEach(body => world.addBody(body))

    createSphere(0.5, {x: 0, y: 3, z: 0})
}


export function updatePhysicsWorld(deltaTime) {
    world.step(1/60, deltaTime, 3)

    objectsToUpdate.forEach(pair => {
        // Update position
        pair.mesh.position.copy(pair.body.position)
        // Update rotation
        pair.mesh.quaternion.copy(pair.body.quaternion)
    })
}
