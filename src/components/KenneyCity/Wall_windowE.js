/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useMemo } from 'react'
import { useGLTF, Merged } from '@react-three/drei'

export default function InstancedModel(props) {
  const { nodes } = useGLTF('/models/kenney_city/wall_windowE.glb')
  const instances = useMemo(
    () => ({
      MeshwallwindowE: nodes.Mesh_wall_windowE,
      MeshwallwindowE1: nodes.Mesh_wall_windowE_1,
      MeshwallwindowE2: nodes.Mesh_wall_windowE_2,
      MeshwallwindowE3: nodes.Mesh_wall_windowE_3,
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
  const { nodes, materials } = useGLTF('/models/kenney_city/wall_windowE.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <instances.MeshwallwindowE />
      <instances.MeshwallwindowE1 />
      <instances.MeshwallwindowE2 />
      <instances.MeshwallwindowE3 />
    </group>
  )
}

useGLTF.preload('/models/kenney_city/wall_windowE.glb')
