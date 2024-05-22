import GUI from "lil-gui";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import firefliesFragmentShader from "/shaders/fireflies/fragment.glsl";
import firefliesVertexShader from "/shaders/fireflies/vertex.glsl";
import portalFragmentShader from "/shaders/portal/fragment.glsl";
import portalVertexShader from "/shaders/portal/vertex.glsl";

import { Spector } from "spectorjs";

const spector = new Spector();
// spector.displayUI();

/**
 * Base
 */
// Debug
const debugObject = {};
const gui = new GUI({
  width: 400,
});

debugObject.clearColor = "#1f1414";
gui
  .addColor(debugObject, "clearColor")
  .onChange(() => renderer.setClearColor(debugObject.clearColor));

const LIGHT_MESHES = new Set(["left_light", "right_light"]);

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Loaders
 */
// Texture loader
const textureLoader = new THREE.TextureLoader();
const bakedTexture = textureLoader.load("baked_portal.jpg");
bakedTexture.flipY = false;
bakedTexture.colorSpace = THREE.SRGBColorSpace;

// Draco loader
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("draco/");

const bakedMaterial = new THREE.MeshBasicMaterial({ map: bakedTexture });
const lightMaterial = new THREE.MeshBasicMaterial({ color: 0xffffe5 });

// GLTF loader
const gltfLoader = new GLTFLoader();
gltfLoader.setDRACOLoader(dracoLoader);

gltfLoader.load("merged_portal_windows.glb", (gltf) => {
  gltf.scene.traverse((child) => {
    child.material = bakedMaterial;
  });
  const lightMeshes = gltf.scene.children.filter((child) =>
    LIGHT_MESHES.has(child.name)
  );
  lightMeshes.forEach((mesh) => (mesh.material = lightMaterial));
  const portal = gltf.scene.children.find(
    (child) => child.name === "portal_light"
  );
  portal.material = portalMaterial;

  scene.add(gltf.scene);
});

const firefliesGeometry = new THREE.BufferGeometry();
const firefliesCount = 30;
const positionArray = new Float32Array(firefliesCount * 3);

const scaleArray = new Float32Array(firefliesCount);

const portalMaterial = new THREE.ShaderMaterial({
  vertexShader: portalVertexShader,
  fragmentShader: portalFragmentShader,
  uniforms: {
    uTime: {
      value: 0,
    },
    uColorStart: { value: new THREE.Color(0xffffff) },
    uColorEnd: { value: new THREE.Color(0xece4e4) },
  },
});

debugObject.portalColorStart = "#black";
debugObject.portalColorEnd = "#white";

gui.addColor(debugObject, "portalColorStart").onChange(() => {
  portalMaterial.uniforms.uColorStart.value.set(debugObject.portalColorStart);
});

gui.addColor(debugObject, "portalColorEnd").onChange(() => {
  portalMaterial.uniforms.uColorEnd.value.set(debugObject.portalColorEnd);
});

for (let i = 0; i < firefliesCount; i++) {
  positionArray[i * 3 + 0] = (Math.random() - 0.5) * 4;
  positionArray[i * 3 + 1] = Math.random() * 1.5;
  positionArray[i * 3 + 2] = (Math.random() - 0.5) * 4;

  scaleArray[i] = Math.random();
}
firefliesGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(positionArray, 3)
);

firefliesGeometry.setAttribute(
  "aScale",
  new THREE.BufferAttribute(scaleArray, 1)
);

const firefliesMaterial = new THREE.ShaderMaterial({
  blending: THREE.AdditiveBlending,
  depthWrite: false,
  uniforms: {
    uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
    uSize: {
      value: 200,
    },
    uTime: {
      value: 0,
    },
  },
  transparent: true,
  vertexShader: firefliesVertexShader,
  fragmentShader: firefliesFragmentShader,
});

gui
  .add(firefliesMaterial.uniforms.uSize, "value")
  .min(0)
  .max(500)
  .step(1)
  .name("firefliesSize");

const fireflies = new THREE.Points(firefliesGeometry, firefliesMaterial);
scene.add(fireflies);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  firefliesMaterial.uniforms.uPixelRatio.value = Math.min(
    window.devicePixelRatio,
    2
  );
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  45,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = 4;
camera.position.y = 3;
camera.position.z = 7;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

renderer.setClearColor(debugObject.clearColor);

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();
  firefliesMaterial.uniforms.uTime.value = elapsedTime;
  portalMaterial.uniforms.uTime.value = elapsedTime;
  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
