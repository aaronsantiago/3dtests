import * as THREE from "three";
import { extend, useFrame } from "@react-three/fiber";
import glsl from "babel-plugin-glsl/macro";
import { shaderMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as React from "react";
import {
  MeshStandardMaterial,
  MeshStandardMaterialParameters,
  Shader,
} from "three";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

class MegaWobbleMaterial extends MeshStandardMaterial {
  _time = 0;
  _factor = 1;
  _noiseScale = 1;

  constructor(parameters = {}) {
    super(parameters);
    this.setValues(parameters);
    this._time = { value: 0 };
    this._factor = { value: 1 };
    this._noiseScale = { value: 1 };
  }

  onBeforeCompile(shader) {
    shader.uniforms.time = this._time;
    shader.uniforms.factor = this._factor;

    shader.vertexShader = glsl`
      #pragma glslify: noise = require('glsl-noise/simplex/4d')
      uniform float time;
      uniform float factor;
      ${shader.vertexShader}
    `;
    shader.vertexShader = shader.vertexShader.replace(
      "#include <begin_vertex>",
      `
        vec3 transformed = position;
        vec4 nPos = vec4(position/2.3, time * factor);
        transformed += sin(time) * vNormal * noise(nPos * 2.5) * 0.8;
        vNormal.x += noise(nPos * 1.5);
        vNormal.y += noise(nPos * 2.5);
        vNormal.z += noise(nPos * 3.5);
        `
    );
  }

  get time() {
    return this._time.value;
  }

  set time(v) {
    this._time.value = v;
  }

  get factor() {
    return this._factor.value;
  }

  set factor(v) {
    this._factor.value = v;
  }
}

extend({ MegaWobbleMaterial });

function ShaderBall(props) {
  let material = useRef();
  const [colorMap, displacementMap, normalMap, roughnessMap] = useLoader(TextureLoader, [
    'materials/metal/color.jpg',
    'materials/metal/displacement.jpg',
    'materials/metal/normal.jpg',
    'materials/metal/roughness.jpg'
  ])
  useFrame((state) => {
    material.current.time = state.clock.getElapsedTime() + props.timeOffset;
    // console.log(material.current);
  });
  return (
    <mesh {...props}>
      <sphereGeometry args={[1,256,256]}/>
      <megaWobbleMaterial
        ref={material}
        metalness={1}
        roughness={.1}
        envMap={props.envMap}
        factor={.3}
        displacementScale={0.2}
        transparent
        // map={colorMap}
        color={"#9f9f9f"}
        opacity={.9}
        // depthWrite={false}
        // displacementMap={displacementMap}
        // normalMap={normalMap}
        // roughnessMap={roughnessMap}
      />
    </mesh>
  );
}

export default ShaderBall;
