/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useMemo } from 'react'
import { useGLTF, Merged } from '@react-three/drei'

export default function InstancedModel(props) {
  const { nodes } = useGLTF('/models/pumpkinBasic.glb')
  const instances = useMemo(
    () => ({
      MeshpumpkinBasic: nodes.Mesh_pumpkinBasic,
      MeshpumpkinBasic1: nodes.Mesh_pumpkinBasic_1,
      MeshpumpkinBasic2: nodes.Mesh_pumpkinBasic_2,
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
  const { nodes, materials } = useGLTF('/models/pumpkinBasic.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <instances.MeshpumpkinBasic />
      <instances.MeshpumpkinBasic1 />
      <instances.MeshpumpkinBasic2 />
    </group>
  )
}

useGLTF.preload('/models/pumpkinBasic.glb')
