import { OrthographicCamera } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Bloom, EffectComposer, SSAO } from "@react-three/postprocessing";
import { useControls } from "leva";
import { BlendFunction } from "postprocessing";
import { useRef } from "react";
import * as THREE from "three";

function MouseLight() {
  const mouseLight = useControls("mouse light", {
    intensity: 0.4,
    multiplier: 1.5,
    color: "#ff005b",
    z: 5,
    lerp: 0.1,
  });

  const mouseLightPositionCache = new THREE.Vector3();
  const mouseLightRef = useRef();
  const {viewport} = useThree();
  useFrame(({mouse}) => {
    mouseLightPositionCache.x =
      ((mouse.x * viewport.width) / 2) * mouseLight.multiplier;
    mouseLightPositionCache.y =
      ((mouse.y * viewport.height) / 2) * mouseLight.multiplier;
    mouseLightRef.current.position.z = mouseLight.z;

    mouseLightRef.current.position.x =
      mouseLightPositionCache.x * mouseLight.lerp +
      mouseLightRef.current.position.x * (1 - mouseLight.lerp);
    mouseLightRef.current.position.y =
      mouseLightPositionCache.y * mouseLight.lerp +
      mouseLightRef.current.position.y * (1 - mouseLight.lerp);
  });
  return (
    <>
      <directionalLight
        ref={mouseLightRef}
        intensity={mouseLight.intensity}
        color={mouseLight.color}
      />
    </>
  );
}

export default function InstancedGridStage(props) {
  const ambient = useControls("ambient light", {
    intensity: 0.4,
    color: "#ff005b",
  });
  const light1 = useControls("light1", {
    intensity: 0.4,
    color: "#00ff5b",
    position: {
      value: {
        x: 3,
        y: 0,
        z: 5,
      },
    },
  });
  const light2 = useControls("light2", {
    intensity: 0.4,
    color: "#5b00ff",
    position: {
      value: {
        x: -3,
        y: 0,
        z: 5,
      },
    },
  });
  return (
    <>
      <OrthographicCamera position={[0,0,0]} near={.01} zoom={100} makeDefault={true}/>
      <ambientLight intensity={ambient.intensity} color={ambient.color} />
      <MouseLight />
      <directionalLight
        intensity={light1.intensity}
        color={light1.color}
        position={[light1.position.x, light1.position.y, light1.position.z]}
      />
      <directionalLight
        intensity={light2.intensity}
        color={light2.color}
        position={[light2.position.x, light2.position.y, light2.position.z]}
      />
      {props.children}
      <EffectComposer multisampling={8}>
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
          scale={0.5} // scale of the ambient occlusion
          bias={0.5} // occlusion bias
        />
        <Bloom
          kernelSize={3}
          luminanceThreshold={0}
          luminanceSmoothing={0.4}
          intensity={0.6}
        />
      </EffectComposer>
    </>
  );
}
