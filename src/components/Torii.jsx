import { useGLTF } from "@react-three/drei";
import React from "react";

export function Torii(props) {
  const { nodes, materials } = useGLTF("./models/torii/model.glb");
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes["Node-Mesh"].geometry} material={materials.mat23} />
      <mesh
        geometry={nodes["Node-Mesh_1"].geometry}
        material={materials.mat14}
      />
    </group>
  );
}

useGLTF.preload("./models/torii/model.glb");
