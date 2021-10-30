/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useMemo } from 'react'
import { useGLTF, Merged } from '@react-three/drei'

export default function InstancedModel(props) {
  const { nodes } = useGLTF('/models/kenney_city/small_buildingD.glb')
  const instances = useMemo(
    () => ({
      MeshsmallbuildingD: nodes.Mesh_small_buildingD,
      MeshsmallbuildingD1: nodes.Mesh_small_buildingD_1,
      MeshsmallbuildingD2: nodes.Mesh_small_buildingD_2,
      MeshsmallbuildingD3: nodes.Mesh_small_buildingD_3,
      MeshsmallbuildingD4: nodes.Mesh_small_buildingD_4,
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
  const { nodes, materials } = useGLTF('/models/kenney_city/small_buildingD.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <instances.MeshsmallbuildingD />
      <instances.MeshsmallbuildingD1 />
      <instances.MeshsmallbuildingD2 />
      <instances.MeshsmallbuildingD3 />
      <instances.MeshsmallbuildingD4 />
    </group>
  )
}

useGLTF.preload('/models/kenney_city/small_buildingD.glb')
