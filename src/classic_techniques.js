import * as THREE from 'three'
import loadThreeJsClock from "./threejs_clock.js";
import loadThreeJsControls from "./threejs_controls.js";
import loadPageState from "./page_state.js";
import loadThreeJsBase from "./threejs_base.js";
import loadEventListeners from "./threejs_eventlisteners.js";
import setupThreeJsGeometryObjects from "./threejs_objects.js";
import setupThreeJsLights from "./threejs_lights.js";
import loadThreeJsMaterials from "./threejs_materials.js";

const pageState  = loadPageState()
const baseComponents = loadThreeJsBase(pageState)
loadEventListeners(pageState, baseComponents)

const materials = loadThreeJsMaterials()

const geometryObjects = setupThreeJsGeometryObjects(materials);
const lights = setupThreeJsLights()

loadThreeJsClock({
    ...baseComponents,
    ...geometryObjects
})

const sceneObjects = [
    ...Object.values(geometryObjects),
    ...Object.values(lights)
]

sceneObjects.forEach(obj => baseComponents.scene.add(obj));

loadThreeJsControls({
    ...lights,
    ...baseComponents,
    ...geometryObjects
})