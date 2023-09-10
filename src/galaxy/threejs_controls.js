import GUI from "lil-gui";
import {GALAXY_PARAMS, regenerateGalaxy} from "./galaxy_factory.js";

export default function loadThreeJsControls({
  scene
}) {
  const gui = new GUI();

  gui.add(GALAXY_PARAMS, 'particleCount')
  .name('Particle count')
  .min(1)
  .max(100000)
  .step(1)
  .onChange(value =>  {
    GALAXY_PARAMS.particleCount = value
    regenerateGalaxy(scene)
  })

  gui.add(GALAXY_PARAMS, 'size')
  .name('Particle size')
  .min(0.001)
  .max(0.1)
  .step(0.001)
  .onChange(value =>  {
    GALAXY_PARAMS.size = value
    regenerateGalaxy(scene)
  })

  gui.add(GALAXY_PARAMS, 'radius')
  .name('Radius')
  .min(0.01)
  .max(20)
  .step(0.01)
  .onChange(value =>  {
    GALAXY_PARAMS.radius = value
    regenerateGalaxy(scene)
  })


  gui.add(GALAXY_PARAMS, 'branches')
  .name('Branches')
  .min(2)
  .max(20)
  .step(1)
  .onChange(value =>  {
    GALAXY_PARAMS.branches = value
    regenerateGalaxy(scene)
  })


  gui.add(GALAXY_PARAMS, 'spin')
  .name('Spin')
  .min(-5)
  .max(5)
  .step(0.001)
  .onChange(value =>  {
    GALAXY_PARAMS.spin = value
    regenerateGalaxy(scene)
  })


  gui.add(GALAXY_PARAMS, 'randomness')
  .name('Randomness')
  .min(0)
  .max(2)
  .step(0.001)
  .onChange(value =>  {
    GALAXY_PARAMS.randomness = value
    regenerateGalaxy(scene)
  })


  gui.add(GALAXY_PARAMS, 'randomnessPower')
  .name('Randomness Power')
  .min(0)
  .max(2)
  .step(0.001)
  .onChange(value =>  {
    GALAXY_PARAMS.randomnessPower = value
    regenerateGalaxy(scene)
  })


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
