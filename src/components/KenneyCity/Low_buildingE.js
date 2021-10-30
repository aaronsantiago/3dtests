/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useMemo } from 'react'
import { useGLTF, Merged } from '@react-three/drei'

export default function InstancedModel(props) {
  const { nodes } = useGLTF('/models/kenney_city/low_buildingE.glb')
  const instances = useMemo(
    () => ({
      MeshlowbuildingE: nodes.Mesh_low_buildingE,
      MeshlowbuildingE1: nodes.Mesh_low_buildingE_1,
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
  const { nodes, materials } = useGLTF('/models/kenney_city/low_buildingE.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <instances.MeshlowbuildingE />
      <instances.MeshlowbuildingE1 />
    </group>
  )
}

useGLTF.preload('/models/kenney_city/low_buildingE.glb')
