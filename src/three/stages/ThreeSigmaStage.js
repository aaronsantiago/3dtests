import {PerspectiveCamera, Sky} from "@react-three/drei";
import {Bloom, EffectComposer, ToneMapping} from "@react-three/postprocessing";
import {BlendFunction} from "postprocessing";
import {Suspense} from "react";
import {useSpring, animated} from "@react-spring/three";
import {useLocation} from "wouter";
import TerrainDoubleMountain from "../models/TerrainDoubleMountain";

function ThreeSigmaStage(props) {
  const [location] = useLocation();
  const {position, rotation, scale} = {
    position: {x: -35.4, y: 8, z: -18.5},
    rotation: {x: -0.07, y: -1.72, z: 0},
    scale: {x: 1, y: 1, z: 1},
  };
  const springs = useSpring({
    cameraPosition: [0, 0, location.endsWith("foo") ? -30 : 9.5],
    config: {friction:0, tension: 1, clamp: true}
  });

  // const transition = useTransition(location, {
  //   from: {
  //     position: [0, 0, 9.5],
  //     // rotation: [0, Math.PI, 0],
  //     // scale: [0, 0, 0],
  //     // opacity: 0,
  //   },
  //   enter: {
  //     position: [0, 0, 0],
  //     // rotation: [0, 0, 0],
  //     // scale: [1, 1, 1],
  //     // opacity: 1,
  //   },
  //   leave: {
  //     position: [0, 0, -10],
  //     // rotation: [0, -Math.PI, 0],
  //     // scale: [0, 0, 0],
  //     // opacity: 0,
  //   },
  //   config: () => (n) => n === "opacity" && {friction: 60},
  // });
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

      {/* {transition((style, location) => ( */}
      <animated.group position={springs.cameraPosition}>
        <PerspectiveCamera
          rotation={[Math.PI / 16, 0, 0]}
          makeDefault={true}
          far={25000}
          near={0.03}
          fov={54.4}
        />
      </animated.group>
      {/* ))} */}
      <Sky
        distance={450000} // Camera distance (default=450000)
        sunPosition={[0, 1, 0]} // Sun position normal (defaults to inclination and azimuth if not set)
        inclination={0} // Sun elevation angle from 0 to 1 (default=0)
        azimuth={0.25} // Sun rotation around the Y axis from 0 to 1 (default=0.25)
        sunPosition={[1, 0, 0]}
      />
      <ambientLight intensity={0.2} color={"#8a6300"} />
      <fogExp2
        attach="fog"
        near={0.1}
        color={"#8a6300"}
        far={3000}
        density={0.01}
      />

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
