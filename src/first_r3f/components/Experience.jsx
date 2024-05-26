import {
  Float,
  Html,
  MeshReflectorMaterial,
  OrbitControls,
  PivotControls,
  Text,
  TransformControls,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { button, useControls } from "leva";
import { Perf } from "r3f-perf";
import React, { useRef } from "react";

export default function Experience() {
  const { camera, gl } = useThree();
  const { position, color, visible } = useControls("sphere", {
    position: {
      value: { x: -2, y: 0, z: 0 },
      step: 0.01,
    },
    color: "#ff0000",
    visible: true,
    myInterval: {
      min: 0,
      max: 10,
      value: [4, 5],
    },
    clickMe: button(() => {
      console.log("ok");
    }),
    choice: { options: ["a", "b", "c"] },
  });

  const { scale } = useControls("cube", {
    scale: {
      value: 1.5,
      step: 0.01,
      min: 0,
      max: 5,
    },
  });

  const cubeRef = useRef();
  const sphereRef = useRef();

  return (
    <>
      <Perf position="top-left" />
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />
      <PivotControls
        anchor={[0, 0, 0]}
        depthTest={false}
        lineWidth={4}
        axisColors={["#9381ff", "#ff4d6d", "#7ae582"]}
        scale={100}
        fixed
      >
        <mesh
          visible={visible}
          position={[position.x, position.y, position.z]}
          ref={sphereRef}
        >
          <sphereGeometry />
          <meshStandardMaterial color={color} />
          <Html
            distanceFactor={8}
            occlude={[cubeRef, sphereRef]}
            center
            wrapperClass="label"
            position={[1, 1, 0]}
          >
            That's a sphere 👍
          </Html>
        </mesh>
      </PivotControls>
      <TransformControls object={cubeRef} mode={"rotate"}>
        <mesh position-x={2} scale={scale} ref={cubeRef}>
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
      </TransformControls>
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <MeshReflectorMaterial
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={1}
          mirror={0.5}
        />
      </mesh>
      <Float speed={5} floatIntensity={2}>
        <Text
          position-y={2}
          fontSize={1}
          color="salmon"
          font="./bangers-v20-latin-regular.woff"
          textAlign="center"
        >
          I LOVE R3F
        </Text>
      </Float>
    </>
  );
}
