/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from "react";
import { useGLTF, PerspectiveCamera, useAnimations } from "@react-three/drei";
import * as THREE from "three";

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('models/tvori5.gltf')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    for (let action in actions) {
      let a = actions[action].play();
      a.setLoop(THREE.LoopOnce);
      a.clampWhenFinished = true;
      setInterval(() => {
        a.reset();
      }, 9000);
    }
  }, []);
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <group
          name="aaron_work_2021_10_24_01_34_30"
          position={[-3.91, 23.35, -62.56]}
          rotation={[0.02, -0.03, -0.01]}
          scale={[0.09, 0.09, 0.09]}>
          <group name="topJoint" position={[76.45, -181.21, 477.52]}>
            <primitive object={nodes.Bone2} />
            <primitive object={nodes.Bone4} />
            <primitive object={nodes.Bone6} />
            <primitive object={nodes.Bone7} />
            <primitive object={nodes.Bone9} />
            <skinnedMesh
              geometry={nodes.Layer_1.geometry}
              material={materials.PropsPBR}
              skeleton={nodes.Layer_1.skeleton}
            />
          </group>
        </group>
        <group
          name="ToolCamera__3_"
          position={[-5.4, -70.18, -32.59]}
          rotation={[0.11, -0.01, -0.11]}
          scale={[2.26, 2.26, 2.26]}>
          <group name="Camera" rotation={[0, 0, Math.PI]}>
            <PerspectiveCamera makeDefault={true} far={6000} near={0.12} fov={46.89} rotation={[-Math.PI / 2, 0, 0]} />
          </group>
        </group>
        <group rotation={[-0.47, -0.5, -2.04]} scale={[1.06, 1.06, 1.06]}>
          <directionalLight intensity={1} decay={2} color="#0fe0b7" rotation={[-Math.PI / 2, 0, 0]} />
        </group>
        <group position={[103.21, -48.03, -89.35]} rotation={[-0.5, -0.25, 2.79]} scale={1.45}>
          <pointLight intensity={1.5} decay={2} color="#fff6d3" rotation={[-Math.PI / 2, 0, 0]} />
        </group>
        <group position={[-11.79, 82.63, -51]} rotation={[-0.1, -0.47, 3.08]} scale={1.45}>
          <pointLight intensity={1.5} decay={2} color="#fff6d3" rotation={[-Math.PI / 2, 0, 0]} />
        </group>
        <mesh
          name="build_02__4_"
          geometry={nodes.build_02__4_.geometry}
          material={materials.PropsPBR_1}
          position={[39.32, 9.7, 0.29]}
          rotation={[0.01, 0.01, 2.06]}
          scale={[0, 0, 0]}
        />
        <mesh
          name="build_03__5_"
          geometry={nodes.build_03__5_.geometry}
          material={materials.PropsPBR_2}
          position={[-18.97, 28.64, 1.19]}
          rotation={[-0.04, 0.06, 2.69]}
          scale={0}
        />
        <mesh
          name="Build_05__7_"
          geometry={nodes.Build_05__7_.geometry}
          material={materials.PropsPBR_3}
          position={[-25.55, -0.84, 2.3]}
          rotation={[-0.06, 0.04, 0.71]}
          scale={0}
        />
        <mesh
          name="Build_05__8_"
          geometry={nodes.Build_05__8_.geometry}
          material={materials.PropsPBR_4}
          position={[-37.09, -11.51, 5]}
          rotation={[-0.06, 0.06, 0.75]}
          scale={[0, 0, 0]}
        />
        <mesh
          name="Build_05__9_"
          geometry={nodes.Build_05__9_.geometry}
          material={materials.PropsPBR_5}
          position={[-14.81, -14.33, 5.72]}
          rotation={[0, 0.01, 0.73]}
          scale={0}
        />
        <mesh
          name="Build_05__10_"
          geometry={nodes.Build_05__10_.geometry}
          material={materials.PropsPBR_6}
          position={[-26.01, -24.9, 8.83]}
          rotation={[-0.07, 0.02, 0.74]}
          scale={0}
        />
        <mesh
          geometry={nodes.Chamferbox__13_.geometry}
          material={materials.PropsPBR_7}
          position={[6.24, 6.72, 8.52]}
          rotation={[0.01, 0.04, 1.56]}
          scale={[1.56, 1.28, 0.13]}>
          <mesh geometry={nodes.ChamferboxCrack_LOD1.geometry} material={materials.PropsPBR_8} />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('models/tvori5.gltf')
