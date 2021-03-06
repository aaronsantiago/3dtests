/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useMemo } from 'react'
import { useGLTF, Merged } from '@react-three/drei'

export default function InstancedModel(props) {
  const { nodes } = useGLTF('/models/kenney_city/detail_overhangWide.glb')
  const instances = useMemo(
    () => ({
      MeshdetailoverhangWide: nodes.Mesh_detail_overhangWide,
      MeshdetailoverhangWide1: nodes.Mesh_detail_overhangWide_1,
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
  const { nodes, materials } = useGLTF('/models/kenney_city/detail_overhangWide.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <instances.MeshdetailoverhangWide />
      <instances.MeshdetailoverhangWide1 />
    </group>
  )
}

useGLTF.preload('/models/kenney_city/detail_overhangWide.glb')
