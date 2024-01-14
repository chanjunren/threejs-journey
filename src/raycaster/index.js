import { initWorld } from "./base/three";
import { tick } from "./base/tick";
import { decorateWindow } from "./base/window";
import { addObjectsToScene } from "./scene";

initWorld();
decorateWindow();

addObjectsToScene();

tick();