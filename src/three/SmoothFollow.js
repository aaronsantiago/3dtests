import { useFrame } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'

export default function SmoothFollow({ lerpFactor = .3, slerpFactor = .3, toFollow, children, position, rotation, ...props }) {
  const group = useRef()
  
  useEffect(() => {
    if (position) {
      group.current.position.x = position[0];
      group.current.position.y = position[1];
      group.current.position.z = position[2];
    }
    if (rotation) {
      group.current.rotation.x = rotation[0];
      group.current.rotation.y = rotation[1];
      group.current.rotation.z = rotation[2];
    }
  },[])
  useFrame(() => {
    if(toFollow) {
      group.current.position.lerp(toFollow.position, lerpFactor);
      group.current.quaternion.slerp(toFollow.quaternion, slerpFactor);
    }
  })
  return (
    <group ref={group} {...props}>
      {children}
    </group>
  )
}