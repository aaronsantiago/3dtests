/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useMemo } from 'react'
import { useGLTF, Merged } from '@react-three/drei'

export default function InstancedModel(props) {
  const { nodes } = useGLTF('/models/kenney_city/wall_windowB.glb')
  const instances = useMemo(
    () => ({
      MeshwallwindowB: nodes.Mesh_wall_windowB,
      MeshwallwindowB1: nodes.Mesh_wall_windowB_1,
      MeshwallwindowB2: nodes.Mesh_wall_windowB_2,
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
  const { nodes, materials } = useGLTF('/models/kenney_city/wall_windowB.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <instances.MeshwallwindowB />
      <instances.MeshwallwindowB1 />
      <instances.MeshwallwindowB2 />
    </group>
  )
}

useGLTF.preload('/models/kenney_city/wall_windowB.glb')
