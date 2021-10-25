/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, PerspectiveCamera, useAnimations } from '@react-three/drei'
import * as THREE from "three"

export default function Tvori3({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('models/tvori3.gltf')
  const { actions } = useAnimations(animations, group)
  console.log(animations);
  useEffect(() => {
    for (let action in actions) {
      let a = actions[action].play();
      a.setLoop(THREE.LoopOnce);
      a.clampWhenFinished = true;
      // setInterval(() => {
      //   a.reset();
      // }, 9000);
    }
  },[])
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-0.39, 1.81, -0.63]} rotation={[-1.67, 0.04, 0.51]} scale={[0.07, 0.07, 0.07]}>
        <mesh
          geometry={nodes['BASE_Low_Poly_Man_(FFFD4EE8)'].geometry}
          material={nodes['BASE_Low_Poly_Man_(FFFD4EE8)'].material}
        />
        <mesh geometry={nodes['chestpiece_(FFFD4EDC)'].geometry} material={nodes['chestpiece_(FFFD4EDC)'].material} />
        <mesh geometry={nodes['helmet_(FFFD4ED0)'].geometry} material={nodes['helmet_(FFFD4ED0)'].material} />
        <mesh geometry={nodes['Layer_6_(FFFD4ECA)'].geometry} material={nodes['Layer_6_(FFFD4ECA)'].material} />
        <mesh geometry={nodes['Layer_7_(FFFD4EC4)'].geometry} material={nodes['Layer_7_(FFFD4EC4)'].material} />
        <mesh geometry={nodes['necklace_(FFFD4EE2)'].geometry} material={nodes['necklace_(FFFD4EE2)'].material} />
        <mesh geometry={nodes['pauldrons_(FFFD4ED6)'].geometry} material={nodes['pauldrons_(FFFD4ED6)'].material} />
      </group>
      <group position={[-0.69, 2.13, -1.68]} rotation={[0.08, 0.24, -0.03]} scale={[3.93, 3.93, 3.93]}>
        <group rotation={[Math.PI / 2, 0, Math.PI]}>
        <mesh geometry={nodes['pauldrons_(FFFD4ED6)'].geometry} material={nodes['pauldrons_(FFFD4ED6)'].material} />
          <PerspectiveCamera makeDefault={false} far={25000} near={0.2} fov={54.4} rotation={[-Math.PI / 2, 0, 0]} />
        </group>
      </group>
      <group position={[-1.05, 2.15, -0.77]} rotation={[0.69, 1.31, -0.56]} scale={[3.96, 3.96, 3.96]}>
        <group rotation={[Math.PI / 2, 0, Math.PI]}>
          <PerspectiveCamera makeDefault={false} far={25000} near={0.2} fov={54.4} rotation={[-Math.PI / 2, 0, 0]} />
        </group>
      </group>
      <group position={[-0.25, 1.98, 0.15]} rotation={[3.11, -0.09, 3.1]} scale={8.97}>
        <group rotation={[Math.PI / 2, 0, Math.PI]}>
          <PerspectiveCamera makeDefault={false} far={25000} near={0.45} fov={54.4} rotation={[-Math.PI / 2, 0, 0]} />
        </group>
      </group>
      <group position={[0.36, 1.64, -1.78]} rotation={[-0.32, -0.68, -0.37]} scale={[8.68, 8.68, 8.68]}>
        <group rotation={[Math.PI / 2, 0, Math.PI]}>
          <PerspectiveCamera makeDefault={true} far={25000} near={0.43} fov={54.5} rotation={[-Math.PI / 2, 0, 0]} />
        </group>
      </group>
      <group position={[-2.15, 2.65, -1.48]} rotation={[2.67, -0.48, 2.81]} scale={0.3} />
    </group>
  )
}

useGLTF.preload('/tvori3.gltf')