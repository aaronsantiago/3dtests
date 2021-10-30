import { Canvas, extend, useThree } from "@react-three/fiber";
import Model from "../components/Ruins";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import TerrainTest from "../components/TerrainTest";
import ShaderBall from "../components/ShaderBall";
import { CubeCamera } from "@react-three/drei";
import { Environment } from "@react-three/drei";
import { useControls } from "leva";
import * as THREE from "three";
import {
  EffectComposer,
  ChromaticAberration,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
  ToneMapping,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { useEffect, useRef, useState } from "react";
import SmoothFollow from "../components/SmoothFollow";
import useScrollLocation from "../stores/ScrollLocation";

function Main() {
  const {
    gradientType,
    spawnWidth,
    sizeRange,
    spawnHeight,
    focalLength,
    focusDistance,
  } = useControls({
    gradientType: "3",
    spawnWidth: 1000,
    spawnHeight: 300,
    sizeRange: 45,
    focalLength: 2,
    focusDistance: 1,
  });
  const zeroPad = (num, places) => String(num).padStart(places, "0");
  const [cameraFollow, setCameraFollow] = useState(null);
  const cameraFollow0 = useRef();
  const cameraFollow1 = useRef();
  const cameraFollow2 = useRef();
  const cameraFollow3 = useRef();

  const cameraFollows = [
    cameraFollow0,
    cameraFollow1,
    cameraFollow2,
    cameraFollow3,
  ];
  const scrollIndex = useScrollLocation((state) => state.scrollIndex);

  const verticesOfCube = [
    -1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1, 1, 1, -1, 1, 1, 1, 1,
    -1, 1, 1,
  ];

  const indicesOfFaces = [
    2, 1, 0, 0, 3, 2, 0, 4, 7, 7, 3, 0, 0, 1, 5, 5, 4, 0, 1, 2, 6, 6, 5, 1, 2,
    3, 7, 7, 6, 2, 4, 5, 6, 6, 7, 4,
  ];

  return (
    <div className="w-screen h-screen absolute z-0">
      <Canvas colorManagement pixelRatio={window.devicePixelRatio}>
        {/* <OrbitControls /> */}
        <SmoothFollow
          lerpFactor={0.03}
          slerpFactor={0.03}
          toFollow={cameraFollows[scrollIndex].current}
        >
          <PerspectiveCamera
            position={[-2.5, 0.7, 5.5]}
            rotation={[Math.PI / 16, -Math.PI / 8, 0]}
            makeDefault={true}
            far={25000}
            near={30}
            fov={54.4}
          />
        </SmoothFollow>
        <group
          ref={cameraFollow0}
          position={[0, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <group
          ref={cameraFollow1}
          position={[0, 300, 0]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <group
          ref={cameraFollow2}
          position={[100, 0, 0]}
          rotation={[0, (-Math.PI / 4) * 1, 0]}
        />
        <group
          ref={cameraFollow3}
          position={[-400, 0, -500]}
          rotation={[0, (-Math.PI / 4) * 3, 0]}
        />
        <fog attach="fog" args={["#000", 0.0025, 4000]} />

        <color attach="background" args={["#000"]} />
        <Environment
          background={false} // Whether to affect scene.background
          // preset={"night"} // Preset string (overrides files and path)
          // scene={undefined} // adds the ability to pass a custom THREE.Scene
          files={`Grainy gradient ${zeroPad(Math.floor(gradientType), 2)}.hdr`}
          path={"gradient/"}
        />

        {/* <ambientLight intensity={0.3} /> */}
        <directionalLight intensity={0.7} position={[0, 9, 10]} />
        {/* <pointLight intensity={0.4} position={[-2, 1.3, 0]} />
        <pointLight intensity={0.6} position={[2000, 550, 1627]} />
        <pointLight intensity={0.6} position={[-1300, 250, -2427]} /> */}
        {Array(4)
          .fill(1)
          .map((i) => 
            <pointLight
              intensity={Math.random() * Math.random() * Math.random() * Math.random() * 30}
              position={[
                (Math.random() - 0.5) * 3000,
                Math.random() * 300 + 200,
                (Math.random() - 0.5) * 3000,
              ]}
            />
          )}
        {/* <TvoriFbx/> */}
        {/* <Model /> */}
        {/* <TerrainTest /> */}
        {/* <CubeCamera>
          {(texture) => ( */}
        {Array(160)
          .fill(1)
          .map((i) => {
            let scale = 1 + Math.random() * sizeRange;
            return (
              <ShaderBall
                // envMap={texture}
                position={[
                  (Math.random() - 0.5) * spawnWidth,
                  (Math.random() - .5) * spawnHeight,
                  (Math.random() - 0.5) * spawnWidth,
                ]}
                timeOffset={Math.random() * 1118173}
                rotation={[0, -Math.PI / 4, 0]}
                scale={[scale, scale, scale]}
                factor={0.2}
              >
                <sphereGeometry args={[1, 32, 32]} />
              </ShaderBall>
            );
          })}
        {/* )} */}
        {/* </CubeCamera> */}
        {/* <ShaderBall
          // envMap={texture}
          position={[0, -100, 0]}
          timeOffset={Math.random() * 1118173}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[4000, 4000, 2000]}
          movement={0.3}
          factor={0.1}
        >
          <planeGeometry args={[1, 1, 1300, 1300]} />
        </ShaderBall> */}

        {/* <ShaderBall
          // envMap={texture}
          position={[0, 750, 0]}
          timeOffset={Math.random() * 1118173}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[4000, 4000, 2000]}
          movement={0.3}
          factor={0.1}
        >
          <planeGeometry args={[1, 1, 1000, 1000]} />
        </ShaderBall> */}

        <ShaderBall
          // envMap={texture}
          position={[0, -100, 100]}
          timeOffset={Math.random() * 1118173}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1500, 1500, 1500]}
          movement={0.3}
          factor={0.1}
        >
          {/* <polyhedronGeometry args={[verticesOfCube, indicesOfFaces, 1, 3]} /> */}
          <sphereGeometry args={[1, 128,128]} />
        </ShaderBall>

        {/* Your regular scene contents go here, like always ... */}
        <EffectComposer>
          <DepthOfField
            focusDistance={focusDistance}
            focalLength={focalLength}
            bokehScale={2}
          />
          <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
          <Noise opacity={0.02} />
          <ToneMapping
            blendFunction={BlendFunction.NORMAL} // blend mode
            adaptive={true} // toggle adaptive luminance map usage
            resolution={256} // texture resolution of the luminance map
            middleGrey={0.6} // middle grey factor
            maxLuminance={16.0} // maximum luminance
            averageLuminance={1.0} // average luminance
            adaptationRate={1.0} // luminance adaptation rate
          />
          {/* <ChromaticAberration
            blendFunction={BlendFunction.NORMAL} // blend mode
            offset={[-0.002, 0.002]} // color offset
          /> */}
          {/* <Vignette eskil={false} offset={0.1} darkness={1.1} /> */}
        </EffectComposer>
      </Canvas>
    </div>
  );
}

export default Main;
