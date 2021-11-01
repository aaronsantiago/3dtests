import {Environment, PerspectiveCamera} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";
import {
  EffectComposer,
  SSAO,
  ToneMapping,
  DepthOfField,
} from "@react-three/postprocessing";
import {useControls} from "leva";
import {BlendFunction} from "postprocessing";
import {Suspense, useRef} from "react";

function RotatingGroup() {
  let group = useRef();
  useFrame(() => {
    // group.current.rotation.y += 0.01;
  });
  return (
    <group ref={group}>
      <directionalLight
        castShadow
        color={"#FF9900"}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        intensity={0.8}
        position={[5, 9, 5]}
      />
      {/* <directionalLight intensity={0.03} position={[3, 4, -3]} /> */}
    </group>
  );
}
function CityStage(props) {
  let {focusDistance, focalLength, bokehScale} = useControls({
    focusDistance: 2.5,
    focalLength:9,
    bokehScale: 3,
  });
  return (
    <>
    <group rotation={[-.03,0,0]}>
      <group rotation={[0, (3 * Math.PI) / 4 -.2, 0]} position={[4.5, 2.5, -1.5]}>
        <PerspectiveCamera
          rotation={[-Math.PI / 8, 0, 0]}
          makeDefault={true}
          far={25000}
          near={0.1}
          fov={84.4}
        />
      </group>
      <RotatingGroup />
      <fog attach="fog" args={["#000", 0.0025, 250]} />
      <color attach="background" args={["#000"]} />
      <Suspense fallback="hi">
        <Environment background={true} preset={"park"} />
      </Suspense>
      {props.children}
      </group>

      <EffectComposer>
        <SSAO
          blendFunction={BlendFunction.MULTIPLY} // blend mode
          samples={30} // amount of samples per pixel (shouldn't be a multiple of the ring count)
          rings={4} // amount of rings in the occlusion sampling pattern
          distanceThreshold={1.0} // global distance threshold at which the occlusion effect starts to fade out. min: 0, max: 1
          distanceFalloff={0.0} // distance falloff. min: 0, max: 1
          rangeThreshold={0.5} // local occlusion range threshold at which the occlusion starts to fade out. min: 0, max: 1
          rangeFalloff={0.1} // occlusion range falloff. min: 0, max: 1
          luminanceInfluence={0.9} // how much the luminance of the scene influences the ambient occlusion
          radius={20} // occlusion sampling radius
          scale={1} // scale of the ambient occlusion
          bias={0.5} // occlusion bias
        />

        <ToneMapping
          blendFunction={BlendFunction.NORMAL} // blend mode
          adaptive={true} // toggle adaptive luminance map usage
          resolution={256} // texture resolution of the luminance map
          middleGrey={0.6} // middle grey factor
          maxLuminance={16.0} // maximum luminance
          averageLuminance={1.0} // average luminance
          adaptationRate={1.0} // luminance adaptation rate
        />

        <DepthOfField
          focusDistance={focusDistance} // where to focus
          focalLength={focalLength} // focal length
          bokehScale={bokehScale} // bokeh size
        />
      </EffectComposer>
    </>
  );
}

export default CityStage;
