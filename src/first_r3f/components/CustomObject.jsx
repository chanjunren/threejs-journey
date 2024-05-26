import React, { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

export default function CustomObject() {
  const verticesCount = 10 * 3;
  const geometryRef = useRef();

  const positions = useMemo(() => {
    const result = new Float32Array(verticesCount * 3);

    for (let i = 0; i < verticesCount * 3; i++) {
      result[i] = (Math.random() - 0.5) * 3;
    }
    return result;
  }, []);

  useEffect(() => {
    geometryRef.current.computeVertexNormals();
  }, [positions]);

  return (
    <mesh>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute
          side={THREE.DoubleSide}
          attach={"attributes-position"}
          count={verticesCount}
          itemSize={3}
          array={positions}
        />
      </bufferGeometry>
      <meshStandardMaterial color="red" />
    </mesh>
  );
}
