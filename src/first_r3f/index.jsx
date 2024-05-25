import { Canvas } from "@react-three/fiber";
import React from "react";
import ReactDOM from "react-dom/client";
import Experience from "./components/Experience";
import "./style.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <>
    <Canvas>
      <Experience />
    </Canvas>
  </>
);
