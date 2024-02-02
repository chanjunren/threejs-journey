import { scene } from "../../core/three.js";
import { world } from "../../core/world.js";
import { playHitSound } from "../properties/sounds.js";
import { floor, floorBody } from "./floor.js";

export const threeJsObjects = [floor]

export const cannonObjects = [floorBody]

export const objectsToUpdate = []

export function resetWorld() {
  objectsToUpdate.forEach((pair) => {
    scene.remove(pair.mesh);
    world.removeBody(pair.body);
    pair.body.removeEventListener("collide", playHitSound);

    objectsToUpdate.splice(0, objectsToUpdate.length);
  });
}