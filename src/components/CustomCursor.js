import { MeshWobbleMaterial, MeshDistortMaterial } from '@react-three/drei'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import useMousePosition from '../utils/useMousePosition'

function CustomWobble() {
  let material = useRef()

  useFrame(({ clock }) => {
    material.current.factor = Math.abs(Math.sin(clock.getElapsedTime())) * 2
    material.current.speed = Math.abs(Math.sin(clock.getElapsedTime())) * 10
  })

  return (
    <MeshWobbleMaterial
      ref={material}
      color={'#0000aa'}
      speed={4}
      factor={0.8}
      roughness={0.3}
      metalness={0.6}
    />
    
  )
}


function CustomDistortMesh() {
  let material = useRef()
  useFrame(({ clock }) => {
    material.current.factor = Math.abs(Math.sin(clock.getElapsedTime())) * 2
    material.current.speed = Math.abs(Math.sin(clock.getElapsedTime())) * 10
  })

  return (
    <MeshDistortMaterial
      ref={material}
      attach='material'
      color='yellow'
      speed = '3'
      distort= '.5'
      radius= '1'
      metalness='.5'
      roughness='.3'
    />
  )
}

export default function CustomCursor() {
  const { x, y } = useMousePosition()
  return (
    <div
      style={{ top: y, left: x }}
      className='fixed z-20 w-48 h-48 -ml-24 -mt-24 pointer-events-none'
    >
      <Canvas>
        <ambientLight intensity={1} color={'white'} />

        <directionalLight
          intensity={0.3}
          color={'#fff'}
          position={[-3, 0, 5]}
        />
        <mesh rotation={[0, Math.PI / 3, 0]}>
          <icosahedronGeometry args={[1, 4]} />
          {/* <sphereGeometry args={[1, 32, 32]} /> */}
          <CustomDistortMesh />
        </mesh>
      </Canvas>
    </div>
  )
}
