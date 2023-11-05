import GUI from "lil-gui"
import {
    createSphere
} from './scene/objects/sphere'

import { resetWorld } from "./scene/objects"
import {
    createBox
} from './scene/objects/box'


const gui = new GUI()

const LIL_GUI_PARAMS = {}

export function addFunctionToLilGui(label, functionRef) {
  LIL_GUI_PARAMS[label] = functionRef;
  gui.add(LIL_GUI_PARAMS, label);
}

export function initLilGui() {
  addFunctionToLilGui("createSphere", () =>
    createSphere(0.5, { x: 0, y: 3, z: 0 })
  );
  addFunctionToLilGui("createBox", () => createBox(
        Math.random(),
        Math.random(),
        Math.random(),
        {
            x: (Math.random() - 0.5) * 3,
            y: 3,
            z: (Math.random() - 0.5) * 3
        }
    ));
    addFunctionToLilGui("resetWord", () => resetWorld())
}