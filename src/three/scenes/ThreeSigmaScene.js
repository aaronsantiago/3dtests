import {useCubeTexture, useGLTF, useTexture} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";
import React, {Suspense, useState, useRef} from "react";
import ShaderBall from "../ShaderBall.js";

export default function ThreeSigmaScene({textureNames, ...props}) {

  console.log(textureNames)
  let env = useCubeTexture(textureNames, {path: "gradient/thumbs/"});
  // let env = useCubeTexture(
  //   [
  //     `Grainy gradient ${zeroPad(Math.floor(Math.random()*78 + 1), 2)}.png`,
  //     `Grainy gradient ${zeroPad(Math.floor(Math.random()*78 + 1), 2)}.png`,
  //     `Grainy gradient ${zeroPad(Math.floor(Math.random()*78 + 1), 2)}.png`,
  //     `Grainy gradient ${zeroPad(Math.floor(Math.random()*78 + 1), 2)}.png`,
  //     `Grainy gradient ${zeroPad(Math.floor(Math.random()*78 + 1), 2)}.png`,
  //     `Grainy gradient ${zeroPad(Math.floor(Math.random()*78 + 1), 2)}.png`,
  //   ],
  //   {path: "gradient/thumbs/"}
  // );

  let cloudTexture = useTexture("/cloud.png");

  let groupRef = useRef();
  useFrame(({clock}) => {
    groupRef.current.rotation.z = clock.getElapsedTime() / 10;
  });
  return (
    <>
      {Array(5)
        .fill(1)
        .map((i) => (
          <mesh
            position={[
              30 * Math.random() - 15,
              -3 * Math.random() - 2,
              -20 + Math.random() * 3,
            ]}
            scale={[20 * (Math.random() > 0.5 ? -1 : 1), 20, 20]}
          >
            <planeGeometry args={[2, 1]} />
            <meshBasicMaterial transparent opacity={0.24} map={cloudTexture} />
          </mesh>
        ))}
      {Array(5)
        .fill(1)
        .map((i) => (
          <mesh
            position={[
              30 * Math.random() - 15,
              -3 * Math.random(),
              -3 + Math.random() * 3,
            ]}
            scale={[5 * (Math.random() > 0.5 ? -1 : 1), 5, 5]}
          >
            <planeGeometry args={[2, 1]} />
            <meshBasicMaterial transparent opacity={0.24} map={cloudTexture} />
          </mesh>
        ))}
      <group ref={groupRef} position={[0, 3, 0]}>
        <ShaderBall
          timeOffset={1173}
          rotation={[0, 0, 0]}
          scale={[1, 1, 1]}
          factor={0.1}
          envMap={env}
          castShadow
          receiveShadow
          displacementScale={0.03}
          movement={0.3}
        >
          {/* <sphereGeometry args={[2, 90, 90]} /> */}
          <torusKnotGeometry args={[2, 0.3, 400, 32, 4, 7]} />
        </ShaderBall>
      </group>
    </>
  );
}

useGLTF.preload("models/kenney_city/large_buildingA.glb");
