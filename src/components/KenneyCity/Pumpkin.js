/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useMemo } from 'react'
import { useGLTF, Merged } from '@react-three/drei'

export default function InstancedModel(props) {
  const { nodes } = useGLTF('/models/pumpkin.glb')
  const instances = useMemo(
    () => ({
      Meshpumpkin: nodes.Mesh_pumpkin,
      Meshpumpkin1: nodes.Mesh_pumpkin_1,
    }),
    [nodes]
  )
  return (
    <Merged meshes={instances} {...props}>
      {(instances) => <Model instances={instances} />}
    </Merged>
  )
}

function Model({ instances, ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/pumpkin.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <instances.Meshpumpkin />
      <instances.Meshpumpkin1 />
    </group>
  )
}

useGLTF.preload('/models/pumpkin.glb')
