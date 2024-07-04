import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";

export default function Character(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("./models/male/model.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={0.64}>
        <primitive object={nodes.LeftFootCtrl} />
        <primitive object={nodes.RightFootCtrl} />
        <primitive object={nodes.HipsCtrl} />
        <skinnedMesh
          geometry={nodes.characterMedium.geometry}
          material={materials["skin.001"]}
          skeleton={nodes.characterMedium.skeleton}
          castShadow
        />
      </group>
    </group>
  );
}

useGLTF.preload("./models/male/model.gltf");
