/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useMemo } from 'react'
import { useGLTF, Merged } from '@react-three/drei'

export default function InstancedModel(props) {
  const { nodes } = useGLTF('/models/kenney_city/roof_side.glb')
  const instances = useMemo(
    () => ({
      Meshroofside: nodes.Mesh_roof_side,
      Meshroofside1: nodes.Mesh_roof_side_1,
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
  const { nodes, materials } = useGLTF('/models/kenney_city/roof_side.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <instances.Meshroofside />
      <instances.Meshroofside1 />
    </group>
  )
}

useGLTF.preload('/models/kenney_city/roof_side.glb')
