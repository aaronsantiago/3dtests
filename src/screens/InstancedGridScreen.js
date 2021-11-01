import {Environment, OrbitControls, Text} from "@react-three/drei";
import {Canvas, extend, useLoader} from "@react-three/fiber";
import {Suspense, useMemo} from "react";
import * as THREE from "three";
import {InstancedGridScene} from "../three/scenes/InstancedGridScene";
import ShaderBall from "../three/ShaderBall";
import InstancedGridStage from "../three/stages/InstancedGridStage";

export default function InstancedGridScreen() {
  return (
    <div className="bg-black w-screen h-screen fixed top-0 left-0">
      <Canvas>
        <Suspense fallback="sup">
          <InstancedGridStage>
            <InstancedGridScene />
            <Text
              position={[0, 0, -6]}
              fontSize={4}
              color="white"
              anchorX="center"
              anchorY="middle"
              font="https://rawcdn.githack.com/google/fonts/3b179b729ac3306ab2a249d848d94ff08b90a0af/apache/robotoslab/static/RobotoSlab-Black.ttf"
            >
              3σ
            </Text>
          </InstancedGridStage>
        </Suspense>
      </Canvas>
    </div>
  );
}
