import {Terrain} from "three-landscape";
import * as THREE from "three";
import {useControls} from "leva";

function TerrainTest(props) {
  let root = "terrains/test";
  const {position, rotation, scale, normalScale} = {
    position: [-3.32, 40, -5],
    rotation: {x: -0.07, y: 0.3, z: 0},
    scale: {x: 1, y: 1, z: 1},
    normalScale: {x: 1, y: 1},
  };
  return (
    <group {...props}>
      <group
        position={position}
        rotation={[rotation.x, rotation.y, rotation.z]}
        scale={[scale.x, scale.y, scale.z]}
        receiveShadow
      >
        <Terrain
          receiveShadow
          envMapIntensity={0.5}
          metalness={0}
          roughness={1}
          displacement={`${root}/heightmap.png`}
          displacementScale={100}
          displacementBias={-60}
          normalScale={new THREE.Vector2(normalScale.x, normalScale.y)}
          normal={`${root}/normalmap.png`}
          splats={[`${root}/splatmap.tga`]}
          tiles={[
            {
              diffuse: `${root}/dirt/col.png`,
              // diffuse: `gradient/Grainy gradient 78.png`,
              normal: `${root}/dirt/norm.png`,
            },
            {
              // diffuse: `gradient/Grainy gradient 78.png`,
              diffuse: `${root}/grass/col.png`,
              normal: `${root}/grass/norm.png`,
            },
          ]}
          layers={[
            {
              diffuse: {tile: 1, repeat: [4, 4]},
              normal: {
                tile: 1,
                repeat: [50, 50],
                weight: 0.5,
              },
            },
            {
              diffuse: {tile: 0, repeat: [1, 1]},
              normal: {tile: 0, repeat: [1, 1], weight: 0.5},
            },
          ]}
        />
      </group>
    </group>
  );
}

export default TerrainTest;
