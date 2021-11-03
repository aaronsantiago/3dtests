import {OrbitControls, PerspectiveCamera, Sky} from "@react-three/drei";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  SSAO,
  ToneMapping,
} from "@react-three/postprocessing";
import {useControls} from "leva";
import {BlendFunction} from "postprocessing";
import TerrainDoubleMountain from "../models/TerrainDoubleMountain";
import {Suspense} from "react";

function ThreeSigmaStage(props) {
  const {position, rotation, scale} = {
    position: {x: -35.4, y: 8, z: -18.5},
    rotation: {x: -0.07, y: -1.72, z: 0},
    scale: {x: 1, y: 1, z: 1},
  };
  return (
    <>
      <directionalLight
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        intensity={0.45}
        position={[-1, 9, -7]}
      />
      {props.children}

      <group rotation={[rotation.x, rotation.y, rotation.z]}>
        <Suspense fallback={"aa"}>
          <TerrainDoubleMountain
            position={[position.x, position.y, position.z]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </Suspense>
      </group>
      <PerspectiveCamera
        position={[0, 0, 9.5]}
        rotation={[Math.PI / 16, 0, 0]}
        makeDefault={true}
        far={25000}
        near={0.03}
        fov={54.4}
      />
      <Sky
        distance={450000} // Camera distance (default=450000)
        sunPosition={[0, 1, 0]} // Sun position normal (defaults to inclination and azimuth if not set)
        inclination={0} // Sun elevation angle from 0 to 1 (default=0)
        azimuth={0.25} // Sun rotation around the Y axis from 0 to 1 (default=0.25)
        sunPosition={[1, 0, 0]}
      />
      <ambientLight intensity={0.2} color={"#8a6300"} />
      <fogExp2 attach="fog" near={0.1} far={1000} density={0.001} />

      {/* <Suspense fallback="hi">
        <Environment background={true} preset={"park"} />
      </Suspense> */}
      <EffectComposer>
        <ToneMapping
          blendFunction={BlendFunction.NORMAL} // blend mode
          adaptive={true} // toggle adaptive luminance map usage
          resolution={256} // texture resolution of the luminance map
          middleGrey={0.6} // middle grey factor
          maxLuminance={16.0} // maximum luminance
          averageLuminance={1.0} // average luminance
          adaptationRate={1.0} // luminance adaptation rate
        />
        <Bloom luminanceThreshold={0.3} luminanceSmoothing={0.9} height={300} />
      </EffectComposer>
    </>
  );
}

export default ThreeSigmaStage;
