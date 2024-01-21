import GUI from "lil-gui";

export const globalValues = {};
const debugGui = new GUI();

export function addToDebugger(key, initialValue, callback) {
  globalValues[key] = initialValue;
  debugGui.add(globalValues, key).min(0).max(10).step(0.001).onChange(callback);
}
