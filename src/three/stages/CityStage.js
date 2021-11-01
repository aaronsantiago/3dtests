import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { EffectComposer, SSAO } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { useRef } from "react";

function RotatingGroup() {
  let group = useRef();
  useFrame(() => {
    // group.current.rotation.y += 0.01;
  });
  return (
    <group ref={group}>
      <directionalLight
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        intensity={0.1}
        position={[-5, 9, 5]}
      />
      <directionalLight intensity={0.7} position={[3, 4, -3]} />
    </group>
  );
}
function CityStage(props) {
  return (
    <>
      <group rotation={[0, (3 * Math.PI) / 4, 0]} position={[4.5, 2.5, -1.5]}>
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

      {props.children}

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
      </EffectComposer>
    </>
  );
}

export default CityStage;