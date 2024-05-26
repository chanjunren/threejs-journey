import { Canvas } from "@react-three/fiber";
import React from "react";
import ReactDOM from "react-dom/client";
import { ACESFilmicToneMapping, LinearSRGBColorSpace } from "three";
import Experience from "./components/Experience";
import "./style.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));
const cameraSettings = {
  fov: 45,
  zoom: 50,
  near: 0.1,
  far: 200,
  position: [3, 2, 6],
};

root.render(
  <>
    <Canvas
      flat // Applies
      gl={{
        antialias: true,
        // toneMapping: CineonToneMapping,
        toneMapping: ACESFilmicToneMapping,
        outputColorSpace: LinearSRGBColorSpace,
      }}
      orthographic
      camera={cameraSettings}
    >
      <Experience />
    </Canvas>
  </>
);
