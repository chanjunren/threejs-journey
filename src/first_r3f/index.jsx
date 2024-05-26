import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import React from "react";
import ReactDOM from "react-dom/client";
import { ACESFilmicToneMapping, LinearSRGBColorSpace } from "three";
import Experience from "./components/Experience";
import "./style.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));
const glSettings = {
  antialias: true,
  // toneMapping: CineonToneMapping,
  toneMapping: ACESFilmicToneMapping,
  outputColorSpace: LinearSRGBColorSpace,
};
const cameraSettings = {
  fov: 45,
  near: 0.1,
  far: 200,
  position: [-4, 3, 20],
};

root.render(
  <>
    <Leva />
    <Canvas
      // flat
      // linear
      // gl={glSettings}
      // orthographic
      camera={cameraSettings}
    >
      <Experience />
    </Canvas>
  </>
);
