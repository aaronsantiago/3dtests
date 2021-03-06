/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useMemo } from 'react'
import { useGLTF, Merged } from '@react-three/drei'

export default function InstancedModel(props) {
  const { nodes } = useGLTF('/models/kenney_city/large_buildingD.glb')
  const instances = useMemo(
    () => ({
      MeshlargebuildingD: nodes.Mesh_large_buildingD,
      MeshlargebuildingD1: nodes.Mesh_large_buildingD_1,
      MeshlargebuildingD2: nodes.Mesh_large_buildingD_2,
      MeshlargebuildingD3: nodes.Mesh_large_buildingD_3,
      MeshlargebuildingD4: nodes.Mesh_large_buildingD_4,
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
  const { nodes, materials } = useGLTF('/models/kenney_city/large_buildingD.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <instances.MeshlargebuildingD />
      <instances.MeshlargebuildingD1 />
      <instances.MeshlargebuildingD2 />
      <instances.MeshlargebuildingD3 />
      <instances.MeshlargebuildingD4 />
    </group>
  )
}

useGLTF.preload('/models/kenney_city/large_buildingD.glb')
