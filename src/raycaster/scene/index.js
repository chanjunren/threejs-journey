import { scene } from "../base/three";
import { object1, object2, object3 } from "./objects";

const SCENE_OBJECTS = [
    object1,
    object2,
    object3,
]
export function addObjectsToScene() {
    SCENE_OBJECTS.forEach(o => scene.add(o));
}