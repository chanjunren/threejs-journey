import * as THREE from "three";
import GUI from "lil-gui";

export default function loadThreeJsControls({
    toonMaterial
}) {
  const gui = new GUI();
  const materialColor = {
    color: `#ff0000`
  };

  gui.addColor(materialColor, 'color')
      .name('Cube color')
      .onChange(newColor => {
        toonMaterial.color.set(newColor);
      });

  //
  // gui.add(moonLight.position, 'x')
  // .min(- 5)
  // .max(5)
  // .step(0.01)
  // .onChange(value => {
  //   moonLight.position.x = value
  //   directionalLightCameraHelper.update()
  // })
}
