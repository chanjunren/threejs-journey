import * as THREE from 'three'
import loadThreeJsClock from "./threejs_clock.js";
import loadThreeJsControls from "./threejs_controls.js";
import loadPageState from "./page_state.js";
import loadThreeJsBase from "./threejs_base.js";
import loadEventListeners from "./threejs_eventlisteners.js";
import setupThreeJsGeometryObjects from "./threejs_objects.js";
import setupThreeJsLights from "./threejs_lights.js";

const pageState  = loadPageState()
const baseComponents = loadThreeJsBase(pageState)
loadEventListeners(pageState, baseComponents)

const material = new THREE.MeshStandardMaterial()
material.roughness = 0.7

const geometryObjects = setupThreeJsGeometryObjects(material);
const lights = setupThreeJsLights()

loadThreeJsClock(baseComponents)

const sceneObjects = [
    ...Object.values(geometryObjects),
    ...Object.values(lights)
]

sceneObjects.forEach(obj => baseComponents.scene.add(obj));

loadThreeJsControls({
    material,
    ...lights,
    ...baseComponents,
    ...geometryObjects
})