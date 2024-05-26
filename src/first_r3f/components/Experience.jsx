import { extend, useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import CustomObject from "./CustomObject";

export default function Experience() {
  const cubeRef = useRef();
  const groupRef = useRef();
  const { camera, gl } = useThree();
  extend({ OrbitControls: OrbitControls });

  useFrame((state, delta) => {
    // Look around the center
    const angle = state.clock.elapsedTime;
    state.camera.position.x = Math.sin(angle) * 8;
    state.camera.position.z = Math.cos(angle) * 8;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <>
      {/* <orbitControls args={[camera, gl.domElement]} /> */}
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight inteisity={2.5} />
      <group ref={groupRef}>
        <mesh position={[-2, 0, 0]}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
        <mesh
          position={[2, 0, 0]}
          scale={1.5}
          rotation-y={Math.PI * 0.25}
          ref={cubeRef}
        >
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
      </group>
      <mesh position={[0, -2, 0]} scale={10} rotation-x={-Math.PI / 2}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
      <CustomObject />
    </>
  );
}
