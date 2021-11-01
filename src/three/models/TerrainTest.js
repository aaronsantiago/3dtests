import { OrbitControls, useTexture } from "@react-three/drei";
import { SplatStandardMaterial } from "three-landscape";

function TerrainTest(props) {
  let root = "/terrains/test";
  const {position, rotation, scale, normalScale} = {
    position: [-3.32, 40, -5],
    rotation: {x: -0.07, y: 0.3, z: 0},
    scale: {x: 1, y: 1, z: 1},
    normalScale: {x: 1, y: 1},
  };
  const [displacement, normal, noise, splat, d1, n1, d2, n2] = useTexture([
    `${root}/heightmap.png`,
    `${root}/normalmap.png`,
    `/simplex-noise.png`,
    `${root}/splatmap.png`,
    `${root}/dirt/col.png`,
    `${root}/dirt/norm.png`,
    `${root}/grass/col.png`,
    `${root}/grass/norm.png`,
  ]);

  const { width, height } = displacement.image;
  return (
    <group {...props}>
      <group
      >
        <mesh receiveShadow>
          <planeBufferGeometry args={[100, 100, width, height]} />
          <SplatStandardMaterial
            normalMap={normal}
            splats={[splat]}
            normalMaps={[n1, n2]}
            normalWeights={[1.0, 1.0, 1.0]}
            diffuseMaps={[d1, d2]}
            scale={[128 / 4, 128 / 2, 128 / 2]}
            noise={noise}
            displacementMap={displacement}
            displacementScale={10}
            displacementBias={-10}
          />
        </mesh>
      </group>
    </group>
  );
}

export default TerrainTest;
