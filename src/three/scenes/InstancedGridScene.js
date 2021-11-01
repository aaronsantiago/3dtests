import { useFrame, useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import { useRef, useState } from 'react'
import * as THREE from 'three'
import { Perlin } from 'three-noise'

export function InstancedGridScene() {
  const {
    xCount,
    yCount,
    spacing,
    shapeSize,
    perlinSpeed,
    perlinScale,
    shape,
  } = useControls('perlin shapes', {
    xCount: 100,
    yCount: 100,
    spacing: 0.35,
    shapeSize: 0.25,
    perlinSpeed: 0.5,
    perlinScale: 2.0,
    shape: { value: 'cube', options: ['cube', 'sphere', "ico"] },
  })

  const { mouseRadius, mouseStrength, mouseLerp } = useControls(
    'mouse effects',
    {
      mouseRadius: 2,
      mouseStrength: 6,
      mouseLerp: 0.13,
    }
  )

  const { roughness, metalness } = useControls(
    'material',
    {
      roughness: 0,
      metalness: .1
    }
  )
  // Instantiate the class with a seed
  const [perlin] = useState([
    new Perlin(Math.random()),
    new Perlin(Math.random()),
  ])

  let screenSpaceCoords = []
  let screenSpaceCache = []
  for (let x = 0; x < xCount; x++) {
    for (let y = 0; y < yCount; y++) {
      let xC = (x - xCount / 2) * spacing + ((y % 2) * spacing) / 2
      let yC = (y - yCount / 2) * spacing
      screenSpaceCoords.push(new THREE.Vector3(xC, yC, 0))
      screenSpaceCache.push(new THREE.Vector3(xC, yC, 0))
    }
  }

  const instancedRef = useRef()
  let temp = new THREE.Object3D()

  const { viewport } = useThree()
  useFrame(({ clock, mouse }) => {
    // let s = document.documentElement.scrollTop / (document.body.scrollHeight - window.innerHeight);
    // if (isNaN(s)) s = 1;
    // console.log(s, Date.now());

    for (let i = 0; i < screenSpaceCoords.length; i++) {
      let perlinPos = new THREE.Vector3(
        screenSpaceCoords[i].x / perlinScale,
        screenSpaceCoords[i].y / perlinScale,
        screenSpaceCoords[i].z + clock.getElapsedTime() * perlinSpeed
        // screenSpaceCoords[i].z + s * perlinSpeed
      )
      temp.position.x =
        screenSpaceCoords[i].x +
        perlin[0].get3(perlinPos.clone()) * 0.3 -
        0.3 / 2
      temp.position.y =
        screenSpaceCoords[i].y +
        perlin[1].get3(perlinPos.clone()) * 0.3 -
        0.3 / 2
      temp.position.z = 0
      temp.rotation.x =
        (perlin[1].get3(perlinPos.clone()) * Math.PI * 3 - Math.PI * 3 / 2) * mouseLerp/10
        + temp.rotation.x * (1 - mouseLerp/10);
      temp.rotation.y =
        (perlin[1].get3(perlinPos.clone()) * Math.PI * 3 - Math.PI * 3 / 2) * mouseLerp/10
        + temp.rotation.y * (1 - mouseLerp/10);

      let objX = temp.position.x
      let objY = temp.position.y
      let objZ = temp.position.z

      let mouseX = (mouse.x * viewport.width) / 2
      let mouseY = (mouse.y * viewport.height) / 2

      let xOffset = 0
      let yOffset = 0
      let zOffset = 0

      let dist = Math.sqrt(
        Math.pow(mouseX - objX, 2) + Math.pow(mouseY - objY, 2)
      )
      let angle = Math.atan2(objY - mouseY, objX - mouseX)
      if (dist < mouseRadius) {
        let effectStrength = Math.pow(1 - dist / mouseRadius, 1.5)
        // xOffset = Math.cos(angle) * effectStrength * mouseStrength;
        // yOffset = Math.sin(angle) * effectStrength * mouseStrength;
        zOffset = -effectStrength * mouseStrength
      }
      temp.position.x += xOffset
      temp.position.y += yOffset
      temp.position.z += zOffset

      screenSpaceCache[i].x =
        screenSpaceCache[i].x * (1 - mouseLerp) + temp.position.x * mouseLerp
      screenSpaceCache[i].y =
        screenSpaceCache[i].y * (1 - mouseLerp) + temp.position.y * mouseLerp
      screenSpaceCache[i].z =
        screenSpaceCache[i].z * (1 - mouseLerp) + temp.position.z * mouseLerp

      temp.position.x = screenSpaceCache[i].x
      temp.position.y = screenSpaceCache[i].y
      temp.position.z = screenSpaceCache[i].z
      temp.updateMatrix()
      instancedRef.current.setMatrixAt(i, temp.matrix)
    }
    // Update the instance
    instancedRef.current.instanceMatrix.needsUpdate = true
  })
  return (
    <instancedMesh
      ref={instancedRef}
      args={[null, null, screenSpaceCoords.length]}
    >
      {shape == 'cube' ? (
        <boxGeometry args={[shapeSize, shapeSize, shapeSize]} />
      ) : null}
      {shape == 'sphere' ? <sphereGeometry args={[shapeSize]} /> : null}
      {shape == 'ico' ? <icosahedronGeometry args={[shapeSize]} /> : null}
      <meshStandardMaterial color={'#FFFFFF'} roughness={roughness} metalness={metalness} />
    </instancedMesh>
  )
} 