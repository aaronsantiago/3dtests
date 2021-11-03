import {OrbitControls, useTexture} from "@react-three/drei";
import {SplatStandardMaterial} from "three-landscape";

function TerrainDoubleMountain(props) {
  let root = "/terrains/double_mountain";
  const {position, rotation, scale, normalScale} = {
    position: [-3.32, 40, -5],
    rotation: {x: -0.07, y: 0.3, z: 0},
    scale: {x: 1, y: 1, z: 1},
    normalScale: {x: 1, y: 1},
  };
  const [displacement, normal, noise, splat, d1, n1, d2, n2, d3, n3, d4, n4] =
    useTexture([
      `${root}/heightmap.png`,
      `${root}/normalmap.png`,
      `/simplex-noise.png`,
      `${root}/splatmap.png`,
      `${root}/Cliffs_03/Rock_SharpCrumblingCliff_col_thumb.png`,
      `${root}/Cliffs_03/Rock_SharpCrumblingCliff_norm_thumb.png`,
      `${root}/Grass_04/Ground_IslandClumpyGround_col_thumb.png`,
      `${root}/Grass_04/Ground_IslandClumpyGround_norm_thumb.png`,
      `${root}/Snow_01/Ground_ClumpySnow_col_thumb.png`,
      `${root}/Snow_01/Ground_ClumpySnow_norm_thumb.png`,
      `${root}/Texture_/FOREST-FLOOR-11_DEPTH_4k_thumb.png`,
      `${root}/Texture_/FOREST-FLOOR-11_DEPTH_4k_thumb.png`,
    ]);

  const {width, height} = displacement.image;
  return (
    <group {...props}>
      <group>
        <mesh receiveShadow>
          <planeBufferGeometry args={[100, 100, width / 8, height / 8]} />
          <SplatStandardMaterial
            normalMap={normal}
            splats={[splat]}
            normalMaps={[n1, n3, n2, n4]}
            normalWeights={[1.0, 1.0, 1.0]}
            diffuseMaps={[d1, d3, d2, d4]}
            scale={[8, 8]}
            noise={noise}
            displacementMap={displacement}
            displacementScale={25}
            displacementBias={-10}
          />
        </mesh>
      </group>
    </group>
  );
}

export default TerrainDoubleMountain;
