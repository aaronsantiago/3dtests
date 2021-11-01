/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useMemo } from 'react'
import { useGLTF, Merged } from '@react-three/drei'

export default function InstancedModel(props) {
  const { nodes } = useGLTF('/models/kenney_city/large_buildingB.glb')
  const instances = useMemo(
    () => ({
      MeshlargebuildingB: nodes.Mesh_large_buildingB,
      MeshlargebuildingB1: nodes.Mesh_large_buildingB_1,
      MeshlargebuildingB2: nodes.Mesh_large_buildingB_2,
      MeshlargebuildingB3: nodes.Mesh_large_buildingB_3,
      MeshlargebuildingB4: nodes.Mesh_large_buildingB_4,
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
  const { nodes, materials } = useGLTF('/models/kenney_city/large_buildingB.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <instances.MeshlargebuildingB />
      <instances.MeshlargebuildingB1 />
      <instances.MeshlargebuildingB2 />
      <instances.MeshlargebuildingB3 />
      <instances.MeshlargebuildingB4 />
    </group>
  )
}

useGLTF.preload('/models/kenney_city/large_buildingB.glb')