import { Terrain } from "three-landscape";
import * as THREE from "three";
import { useControls } from "leva";

function TerrainTest() {
  let root = "terrains/test";
  const { position, rotation, scale, normalScale } = useControls({
    position: { x: -3.32, y: 3.39, z: -5 },
    rotation: { x: -0.07, y: 0.3, z: 0 },
    scale: { x: 0.07, y: 0.07, z: 0.07 },
    normalScale: {x: 1, y: 1},
  });
  return (
    <object3D 
    position={[position.x, position.y, position.z]}
    rotation={[rotation.x, rotation.y, rotation.z]}
    scale={[scale.x, scale.y, scale.z]}
    receiveShadow
    >
      <Terrain
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
            normal: `${root}/dirt/norm.png`,
          },
          {
            diffuse: `${root}/grass/col.png`,
            normal: `${root}/grass/norm.png`,
          },
        ]}
        layers={[
          {
            diffuse: { tile: 1, repeat: [50, 50] },
            normal: {
              tile: 1,
              repeat: [50, 50],
              splat: 1,
              weight: 0.5,
            },
          },
          {
            diffuse: { tile: 1, repeat: [35, 35] },
            normal: { tile: 1, repeat: [35, 35], weight: 0.5 },
          },
        ]}
      />
    </object3D>
  );
}

export default TerrainTest;
