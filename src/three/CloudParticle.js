import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function lerp(a, b, l) {
  return a * (1 - l) + b * l;
}
export default function CloudParticle({
  position,
  endPosition,
  scale,
  endScale,
  startOpacity,
  endOpacity,
  time,
  offset,
  ...props
}) {

  let cloudTexture = useTexture("/cloud.png");
  let meshRef = useRef();
  let materialRef = useRef();
  useFrame(({clock}) => {
    let t = ((clock.getElapsedTime()) / time  + offset) % 1;

    // We mutate the positions directly here to avoid using memory-intensive
    // vector operations
    meshRef.current.position.x = lerp(position[0], endPosition[0], t);
    meshRef.current.position.y = lerp(position[1], endPosition[1], t);
    meshRef.current.position.z = lerp(position[2], endPosition[2], t);
    meshRef.current.scale.x = lerp(scale[0], endScale[0], t);
    meshRef.current.scale.y = lerp(scale[1], endScale[1], t);
    meshRef.current.scale.z = lerp(scale[2], endScale[2], t);

    materialRef.current.opacity = lerp(startOpacity, endOpacity, t);
    materialRef.current.depthWrite = false;
  });

  return (
    <mesh ref={meshRef} {...props}>
      <planeGeometry args={[2, 1]} />
      <meshBasicMaterial ref={materialRef} transparent opacity={0.24} map={cloudTexture} />
    </mesh>
  );
}
