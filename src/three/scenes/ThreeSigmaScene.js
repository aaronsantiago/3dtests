import {useCubeTexture, useGLTF} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";
import React, {useRef} from "react";
import {useTransition} from "react-spring";
import {Route, Switch, useLocation} from "wouter";
import CloudParticle from "../CloudParticle.js";
import ShaderBall from "../ShaderBall.js";
import WobblyScene from "./WobblyScene";
import {a} from "@react-spring/three";
import {useSpring, animated} from "@react-spring/three";

export default function ThreeSigmaScene({textureNames, ...props}) {
  // Current route
  const [location] = useLocation();
  let env = useCubeTexture(textureNames, {path: "/gradient/thumbs/"});

  let groupRef = useRef();
  useFrame(({clock}) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.x = Math.PI/2 + .8;
    groupRef.current.rotation.z = clock.getElapsedTime() / 10;
  });
  const springs = useSpring({
    wobblySceneScale: location.endsWith("foo") ? 0.003 : 0,
    torusKnotScale: location.endsWith("foo") ? 0 : 1,
    config: {friction:70}
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
              offset={i / 10}
            />
          );
        })}

      {/* {transition((style, location) => {

        return ( */}
      {/* <a.group position={style.position}> */}
      {/* <Switch location={location}> */}
      {/* <Route path="/home/foo"> */}
      <group position={[0, 1.5, -30]}>
        <animated.group scale={springs.wobblySceneScale}>
          <WobblyScene textureNames={textureNames} />
        </animated.group>
        <animated.group scale={1} ref={groupRef}>
          <ShaderBall
            timeOffset={1173}
            rotation={[0, 0, 0]}
            scale={[3, 3, 3]}
            factor={0.13}
            envMap={env}
            castShadow
            receiveShadow
            displacementScale={0.03}
            movement={0.3}
          >
            <torusKnotGeometry args={[2, 0.35, 400, 32, 4, 7]} />
          </ShaderBall>
          {/* <ShaderBall
                      timeOffset={1173}
                      rotation={[0, 0, 0]}
                      scale={[3, 3, 3]}
                      factor={0.13}
                      envMap={env}
                      castShadow
                      receiveShadow
                      displacementScale={0.03}
                      movement={0.3}
                    >
                      <sphereGeometry args={[1, 32,32]} />
                    </ShaderBall> */}
        </animated.group>
      </group>
      {/* </Route> */}
      {/* </Switch> */}
      {/* </a.group>
        );
      })} */}
    </>
  );
}

useGLTF.preload("models/kenney_city/large_buildingA.glb");
