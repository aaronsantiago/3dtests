/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useMemo } from 'react'
import { useGLTF, Merged } from '@react-three/drei'

export default function InstancedModel(props) {
  const { nodes } = useGLTF('/models/kenney_city/small_buildingC.glb')
  const instances = useMemo(
    () => ({
      MeshsmallbuildingC: nodes.Mesh_small_buildingC,
      MeshsmallbuildingC1: nodes.Mesh_small_buildingC_1,
      MeshsmallbuildingC2: nodes.Mesh_small_buildingC_2,
      MeshsmallbuildingC3: nodes.Mesh_small_buildingC_3,
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
  const { nodes, materials } = useGLTF('/models/kenney_city/small_buildingC.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <instances.MeshsmallbuildingC />
      <instances.MeshsmallbuildingC1 />
      <instances.MeshsmallbuildingC2 />
      <instances.MeshsmallbuildingC3 />
    </group>
  )
}

useGLTF.preload('/models/kenney_city/small_buildingC.glb')