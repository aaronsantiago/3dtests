/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useMemo } from 'react'
import { useGLTF, Merged } from '@react-three/drei'

export default function InstancedModel(props) {
  const { nodes } = useGLTF('/models/kenney_city/low_buildingK.glb')
  const instances = useMemo(
    () => ({
      MeshlowbuildingK: nodes.Mesh_low_buildingK,
      MeshlowbuildingK1: nodes.Mesh_low_buildingK_1,
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
  const { nodes, materials } = useGLTF('/models/kenney_city/low_buildingK.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <instances.MeshlowbuildingK />
      <instances.MeshlowbuildingK1 />
    </group>
  )
}

useGLTF.preload('/models/kenney_city/low_buildingK.glb')
