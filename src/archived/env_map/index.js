import { loadModels } from "./base/loader";
import { tick } from "./base/tick";
import { initScene } from "./scene";

initScene();
loadModels();
tick();
