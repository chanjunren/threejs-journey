import { camera, scene } from "./core/three.js";
import { initCannonWorld } from "./core/world.js";
import { initLilGui } from "./gui";
import { threeJsObjects } from "./scene/objects/index.js";
import threeJsLights from "./scene/properties/lights.js";
import tick from "./tick";
import { registerClickListeners } from "./window.js";

const sceneChildren = [...threeJsObjects, ...threeJsLights, camera];
sceneChildren.forEach((o) => scene.add(o));

initCannonWorld();

registerClickListeners();

initLilGui();

tick();
