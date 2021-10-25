import { Canvas } from "@react-three/fiber";
import Model from "../components/Ruins";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import TerrainTest from "../components/TerrainTest";
import ShaderBall from "../components/ShaderBall";
import { CubeCamera } from "@react-three/drei";
import { Environment } from "@react-three/drei";
import { useControls } from "leva";
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
  return (
    <div className="w-screen h-screen">
      <Canvas colorManagement shadowMap pixelRatio={window.devicePixelRatio}>
        <OrbitControls />
        <PerspectiveCamera
          position={[-2.5, 0.7, 5.5]}
          rotation={[Math.PI / 16, -Math.PI / 8, 0]}
          makeDefault={true}
          far={25000}
          near={0.2}
          fov={54.4}
        />
        {/* <fog attach="fog" args={['#f0f0f0', 100, 200]} /> */}

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
        <pointLight intensity={0.4} position={[-2, 1.3, 0]} />
        {/* <TvoriFbx/> */}
        {/* <Model /> */}
        {/* <TerrainTest /> */}
        {/* <CubeCamera>
          {(texture) => ( */}
        {Array(80)
          .fill(1)
          .map((i) => {
            let scale = 1 + Math.random() * sizeRange;
            return (
              <ShaderBall
                // envMap={texture}
                position={[
                  (Math.random() - 0.5) * spawnWidth,
                  6 + Math.random() * spawnHeight,
                  (Math.random() - 0.5) * spawnWidth,
                ]}
                timeOffset={Math.random() * 1118173}
                rotation={[0, -Math.PI / 4, 0]}
                scale={[scale, scale, scale]}
                factor={.2}
              >
                <sphereGeometry args={[1, 64, 64]} />
              </ShaderBall>
            );
          })}
        {/* )} */}
        {/* </CubeCamera> */}
        <ShaderBall
                // envMap={texture}
                position={[0,-100,0
                ]}
                timeOffset={Math.random() * 1118173}
                rotation={[-Math.PI/2, 0, 0]}
                scale={[2000, 2000, 2000]}
                movement={.3}
                factor={.1}
              >
          <planeGeometry args={[1, 1,2000,2000]} />
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
