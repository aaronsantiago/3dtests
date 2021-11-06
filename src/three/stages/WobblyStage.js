import {PerspectiveCamera} from "@react-three/drei";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  ToneMapping,
} from "@react-three/postprocessing";
import {useControls} from "leva";
import {BlendFunction} from "postprocessing";
import {useRef} from "react";
import useScrollLocation from "../../utils/ScrollLocation";
import SmoothFollow from "../SmoothFollow";

function WobblyStage(props) {
  const {gradientType, focalLength, focusDistance} = useControls({
    gradientType: "3",
    focalLength: 2,
    focusDistance: 1,
  });
  const zeroPad = (num, places) => String(num).padStart(places, "0");
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

  return (
    <>
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
        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
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

      <directionalLight castShadow intensity={0.7} position={[0, 9, 10]} />
      {props.children}
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
      </EffectComposer>
    </>
  );
}

export default WobblyStage;
