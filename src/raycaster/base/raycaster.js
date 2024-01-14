import * as THREE from "three";
import { duck } from "../scene/duck";
import { object1, object2, object3 } from "../scene/objects";
import { camera } from "./three";
import { mouse } from "./window";

export const rayCaster = new THREE.Raycaster();
const rayOrigin = new THREE.Vector3(-3, 0, 0);
const rayDirection = new THREE.Vector3(10, 0, 0);
rayDirection.normalize();
rayCaster.set(rayOrigin, rayDirection);

export const TEST_OBJECTS = [object1, object2, object3, duck];

let currentIntersect = null;

export function updateRayCaster() {
  if (!duck) {
    return;
  }
  rayCaster.setFromCamera(mouse, camera);
  const duckIntersects = rayCaster.intersectObject(duck);
  if (duckIntersects.length) {
    duck.scale.set(1.2, 1.2, 1.2);
  } else {
    duck.scale.set(1, 1, 1);
  }
  // console.log("Duck intersects", duckIntersects);
}

function logMouseEnterOrLeave() {
  const intersects = rayCaster.intersectObjects(TEST_OBJECTS);
  if (intersects.length) {
    if (!currentIntersect) {
      console.log("mouse enter");
    }
    currentIntersect = intersects[0];
  } else {
    if (currentIntersect) {
      console.log("mouse leave");
    }
    currentIntersect = null;
  }

}

function updateObjectColors(intersects) {
  TEST_OBJECTS.map((o) => o.material.color.set("#ff0000"));
  intersects.forEach((i) => {
    i.object.material.color.set("#0000ff");
  });
}
