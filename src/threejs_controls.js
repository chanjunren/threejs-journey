import GUI from "lil-gui";

export default function loadThreeJsControls({
  camera,
  material,
  ambientLight
}) {
  const gui = new GUI();
  gui.add(camera.rotation, 'x')
  .name('Camera x position')
  .onChange(value => camera.position.x = value)
  .min(-Math.PI / 2)
  .max(Math.PI / 2)
  .step(0.2)

  gui.add(material, 'roughness')
  .name('Material roughness')
  .min(-1)
  .max(1)
  .step(0.001)

  gui.add(material, 'metalness')
  .name('Material metalness')
  .min(-1)
  .max(1)
  .step(0.001)

  gui.add(ambientLight, 'intensity')
  .name('Ambient light intensity')
  .min(0)
  .max(1)
  .step(0.001)
}
