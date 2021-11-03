import {useCubeTexture, useGLTF, useTexture} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";
import { useControls } from "leva";
import React, {useRef} from "react";
import CloudParticle from "../CloudParticle.js";
import ShaderBall from "../ShaderBall.js";

export default function ThreeSigmaScene({textureNames, ...props}) {
  console.log(textureNames);
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

  let groupRef = useRef();
  useFrame(({clock}) => {
    groupRef.current.rotation.z = clock.getElapsedTime() / 10;
  });
  return (
    <>
      {Array(10)
        .fill(1)
        .map((x, i) => {
          let pos = [
            30 * Math.random() - 15,
            -3 * Math.random() - 10,
            -3 + Math.random() * 3,
          ];
          let scale = [0, 0, 0];
          return (
            <CloudParticle
              position={pos}
              endPosition={pos}
              scale={scale}
              endScale={[50 * (Math.random() > 0.5 ? -1 : 1), 50, 50]}
              startOpacity={0.64}
              endOpacity={0}
              time={40}
              offset={i/10}
            />
          );
        })}
      <group ref={groupRef} position={[0, 2.5, 0]}>
        <ShaderBall
          timeOffset={1173}
          rotation={[0, 0, 0]}
          scale={[1, 1, 1]}
          factor={0.13}
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
