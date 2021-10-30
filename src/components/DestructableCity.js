import React, { useEffect, useRef } from "react";
import { useGLTF, PerspectiveCamera, useAnimations } from "@react-three/drei";
import * as THREE from "three";
import {
  Physics,
  Debug,
  usePlane,
  useSphere,
  useBox,
} from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import Large_buildingA from "./KenneyCity/Large_buildingA.js";
import Large_buildingB from "./KenneyCity/Large_buildingB.js";
import Large_buildingC from "./KenneyCity/Large_buildingC.js";
import Large_buildingD from "./KenneyCity/Large_buildingD.js";
import Large_buildingE from "./KenneyCity/Large_buildingE.js";
import Large_buildingF from "./KenneyCity/Large_buildingF.js";
import Pumpkin from "./KenneyCity/PumpkinBasic";

function Plane(props) {
  const [ref] = usePlane(() => ({
    args: [1],
    rotation: [-Math.PI / 2, 0, 0],
    ...props,
  }));
  return (
    <group receiveShadow castShadow ref={ref}>
    </group>
  );
}
function Ball(props) {
  const [ref,api] = useSphere(() => ({
    mass: 20,
    ...props,
  }));
  useFrame(() => {
    api.applyImpulse([0, 0, 3],[0,0,0]);
  });
  return (
    <object3D receiveShadow castShadow ref={ref}>
      <Pumpkin position={[0,-.1,0]} scale={[1.5,1.7,1.5]}/>
    </object3D>
  );
}

function Building({ Type, offset, collider, ...props }) {
  const [ref, api] = useBox(() => ({
    mass: 1,
    position: [0, 3, 0],
    args: collider,
    ...props,
  }));
  useEffect(() => {
    // api.applyTorque([Math.PI * 100 * Math.random(), 0, 0]);
  }, []);
  return (
    <object3D ref={ref}>
      <group position={offset} scale={[1, 1, 1]}>
        {/* <Large_buildingA castShadow receiveShadow/> */}
        <Type castShadow receiveShadow />
      </group>
    </object3D>
  );
}

export default function DestructableCity({ ...props }) {
  return (
    <>
      <Physics broadphase="SAP">
        {/* <Debug> */}
        <Ball position={[0, 5, -30]} rotation={[Math.PI/3,0,Math.PI/8.324]} />
        <Ball position={[-3, 5, -40]} rotation={[Math.PI/9,0,Math.PI*2.324]} />
        <Ball position={[3, 5, -35]} rotation={[Math.PI/5,0,Math.PI/17.324]} />
        <Plane />
        {Array(20)
          .fill(1)
          .map((v, i) => (
            <Building
              key={i}
              position={[(i % 5) * 2.3 - 5, 1.5, Math.floor(i / 5) * 2]}
              rotation={[0, (Math.floor(Math.random() * 4) * Math.PI) / 2, 0]}
              {...[
                {
                  offset: [0, -0.85, 0],
                  collider: [2, 1.65, 1.3],
                  Type: Large_buildingA,
                },
                {
                  offset: [0, -0.85, 0],
                  collider: [0.8, 1.65, 0.8],
                  Type: Large_buildingB,
                },
                {
                  offset: [0, -0.85, 0],
                  collider: [0.8, 1.65, 0.8],
                  Type: Large_buildingC,
                },
                {
                  offset: [0, -0.85, 0],
                  collider: [1.2, 1.65, 1.2],
                  Type: Large_buildingD,
                },
                {
                  offset: [0, -1.03, 0],
                  collider: [1.2, 2.05, 1.3],
                  Type: Large_buildingE,
                },
                {
                  offset: [0, -0.65, 0],
                  collider: [2, 1.25, 0.8],
                  Type: Large_buildingF,
                },
              ][i % 6]}
            />
          ))}
        {/* </Debug> */}
      </Physics>
    </>
  );
}

useGLTF.preload("models/kenney_city/large_buildingA.glb");
