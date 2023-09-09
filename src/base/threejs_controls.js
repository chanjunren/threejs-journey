import GUI from "lil-gui";

export default function loadThreeJsControls({
  moonLight,
  directionalLightCameraHelper
}) {
  const gui = new GUI();
  // gui.add(moonLight, 'intensity')
  // .name('MoonLight Intensity')
  // .min(0)
  // .max(1)
  // .step(0.001)
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
