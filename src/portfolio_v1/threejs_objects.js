import * as THREE from "three";
import {OBJECTS_DISTANCE} from "./page_state.js";

export default function setupThreeJsGeometryObjects({
    toonMaterial
}) {
    const mesh1 = new THREE.Mesh(
        new THREE.TorusGeometry(1, 0.4, 16, 60),
        toonMaterial
    )
    const mesh2 = new THREE.Mesh(
        new THREE.ConeGeometry(1, 2, 32),
        toonMaterial
    )
    const mesh3 = new THREE.Mesh(
        new THREE.TorusKnotGeometry(0.8, 0.35, 100, 16),
        toonMaterial
    )
    mesh1.position.x = 2
    mesh1.position.y = OBJECTS_DISTANCE * 0
    mesh2.position.y = OBJECTS_DISTANCE * -1
    mesh2.position.x = -2
    mesh3.position.y = OBJECTS_DISTANCE * -2
    mesh3.position.x = 2

    return {
      mesh1,
      mesh2,
      mesh3
  }
}
