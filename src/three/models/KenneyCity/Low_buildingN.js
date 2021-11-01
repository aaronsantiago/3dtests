/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useMemo } from 'react'
import { useGLTF, Merged } from '@react-three/drei'

export default function InstancedModel(props) {
  const { nodes } = useGLTF('/models/kenney_city/low_buildingN.glb')
  const instances = useMemo(
    () => ({
      MeshlowbuildingN: nodes.Mesh_low_buildingN,
      MeshlowbuildingN1: nodes.Mesh_low_buildingN_1,
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
  const { nodes, materials } = useGLTF('/models/kenney_city/low_buildingN.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <instances.MeshlowbuildingN />
      <instances.MeshlowbuildingN1 />
    </group>
  )
}

useGLTF.preload('/models/kenney_city/low_buildingN.glb')