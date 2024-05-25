import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

export default function Experience() {
  const cubeRef = useRef();
  const groupRef = useRef();

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta;
    groupRef.current.rotation.y += delta;
  });

  return (
    <>
      <group ref={groupRef}>
        <mesh position={[-2, 0, 0]} scale={1.5} ref={cubeRef}>
          <sphereGeometry />
          <meshBasicMaterial color="orange" />
        </mesh>
        <mesh position={[2, 0, 0]} scale={1.5} rotation-y={Math.PI * 0.25}>
          <boxGeometry />
          <meshBasicMaterial color="mediumpurple" />
        </mesh>
      </group>
      <mesh position={[0, -2, 0]} scale={10} rotation-x={-Math.PI / 2}>
        <planeGeometry />
        <meshBasicMaterial color="greenyellow" />
      </mesh>
    </>
  );
}
