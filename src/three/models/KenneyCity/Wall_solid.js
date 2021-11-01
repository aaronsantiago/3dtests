/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useMemo } from 'react'
import { useGLTF, Merged } from '@react-three/drei'

export default function InstancedModel(props) {
  const { nodes } = useGLTF('/models/kenney_city/wall_solid.glb')
  const instances = useMemo(
    () => ({
      Meshwallsolid: nodes.Mesh_wall_solid,
      Meshwallsolid1: nodes.Mesh_wall_solid_1,
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
  const { nodes, materials } = useGLTF('/models/kenney_city/wall_solid.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <instances.Meshwallsolid />
      <instances.Meshwallsolid1 />
    </group>
  )
}

useGLTF.preload('/models/kenney_city/wall_solid.glb')