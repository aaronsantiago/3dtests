import { Canvas } from "@react-three/fiber";
import Model from "../components/Ruins";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import TerrainTest from "../components/TerrainTest";
import ShaderBall from "../components/ShaderBall";
import { CubeCamera } from "@react-three/drei";
import { Environment } from "@react-three/drei";
import { useControls } from "leva";
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from '@react-three/postprocessing'

function Main() {
  const { gradientType } = useControls({
    gradientType: "3",
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
        <TerrainTest />
        {/* <CubeCamera>
          {(texture) => ( */}
        {[
          0, 1, 2, 3, 4, 5, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1, 1, 1, 1, 11,
        ].map((i) => (
          <ShaderBall
            // envMap={texture}
            position={[
              Math.random() * 30 - 15,
              6 + Math.random() * 10,
              Math.random() * 30 - 15,
            ]}
            timeOffset={Math.random() * 1118173}
            rotation={[0, -Math.PI / 4, 0]}
            scale={[1 + Math.random(), 1 + Math.random(), 1 + Math.random()]}
          />
        ))}
        {/* )} */}
        {/* </CubeCamera> */}

        {/* Your regular scene contents go here, like always ... */}
        <EffectComposer>
          <DepthOfField
            focusDistance={0}
            focalLength={0.02}
            bokehScale={2}
            height={480}
          />
          <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
          <Noise opacity={0.02} />
          {/* <Vignette eskil={false} offset={0.1} darkness={1.1} /> */}
        </EffectComposer>
      </Canvas>
    </div>
  );
}

export default Main;
