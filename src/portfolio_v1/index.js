import startTicker from "./threejs_clock.js";
import loadThreeJsControls from "./threejs_controls.js";
import initCore from "./threejs_base.js";
import initEventListeners from "./threejs_eventlisteners.js";
import initGeometryObjects from "./threejs_objects.js";
import initLights from "./threejs_lights.js";
import loadMaterials from "./threejs_materials.js";

const coreComponents = initCore()

initEventListeners(coreComponents)

const materials = loadMaterials()

const geometryObjects = initGeometryObjects(materials);
const lights = initLights()

startTicker({
    ...coreComponents,
    ...geometryObjects
})

const sceneObjects = [
    ...Object.values(geometryObjects),
    ...Object.values(lights)
]

sceneObjects.forEach(obj => {
    // obj.castShadow = true
    coreComponents.scene.add(obj)
});

loadThreeJsControls({
    ...lights,
    ...coreComponents,
    ...geometryObjects,
    ...materials
})