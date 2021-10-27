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
  _movement = 1;

  constructor(parameters = {}) {
    super(parameters);
    this.setValues(parameters);
    this._time = { value: 0 };
    this._factor = { value: 1 };
    this._movement = { value: 1 };
  }

  onBeforeCompile(shader) {
    shader.uniforms.time = this._time;
    shader.uniforms.factor = this._factor;
    shader.uniforms.movement = this._movement;

    shader.uniforms.fogNearColor = { value: new THREE.Color("blue") };
    shader.uniforms.fogCustomColor = { value: new THREE.Color("red") };
    shader.uniforms.fogNoiseFreq = { value: .02 };
    shader.uniforms.fogNoiseSpeed = { value: 1 };
    shader.uniforms.fogNoiseImpact = { value: 1 };

    shader.vertexShader = glsl`
      #pragma glslify: noise = require('glsl-noise/simplex/4d')
      uniform float time;
      uniform float factor;
      uniform float movement;
      ${shader.vertexShader}
    `;
    shader.vertexShader = shader.vertexShader.replace(
      "#include <begin_vertex>",
      `
        vec3 transformed = position;
        vec4 nPos = vec4(position/2.3, time * factor);
        transformed += sin(time) * vNormal * noise(nPos * 2.5) * 0.8 * movement;
        vNormal.x += noise(nPos * 1.5);
        vNormal.y += noise(nPos * 2.5);
        vNormal.z += noise(nPos * 3.5);
        `
    );

    shader.vertexShader = shader.vertexShader.replace(`#include <fog_pars_vertex>`, `
    #ifdef USE_FOG
      varying float fogDepth;
      varying vec3 vFogWorldPosition;
    #endif
    // `);
    shader.vertexShader = shader.vertexShader.replace(`#include <fog_vertex>`, `
    #ifdef USE_FOG
      // fogDepth = - mvPosition.z;
      fogDepth = length(mvPosition.xyz - vec3(0.0,0.0,-1000.0)) * 5.0;
      vFogWorldPosition = (modelMatrix * vec4( transformed, 1.0 )).xyz;
    #endif
    `);


    shader.fragmentShader = glsl`
      #pragma glslify: noise = require('glsl-noise/simplex/4d')
      ${shader.fragmentShader}
    `;
    shader.fragmentShader = shader.fragmentShader.replace(`#include <fog_pars_fragment>`, `
    #ifdef USE_FOG
      uniform vec3 fogColor;
      uniform vec3 fogNearColor;
      uniform vec3 fogCustomColor;
      varying float fogDepth;
      #ifdef FOG_EXP2
        uniform float fogDensity;
      #else
        uniform float fogNear;
        uniform float fogFar;
      #endif
      varying vec3 vFogWorldPosition;
      uniform float time;
      uniform float fogNoiseSpeed;
      uniform float fogNoiseFreq;
      uniform float fogNoiseImpact;
    #endif
    `);
    shader.fragmentShader = shader.fragmentShader.replace(`#include <fog_fragment>`, `
    #ifdef USE_FOG
      vec3 windDir = vec3(0.0, 0.0, 0.0);
      vec3 scrollingPos = vFogWorldPosition.xyz + fogNoiseSpeed * windDir;  
      // float n = noise(vec4(fogNoiseFreq * scrollingPos.xyz, 1));
      float vFogDepth = (1.0 - fogNoiseImpact) * fogDepth;
      #ifdef FOG_EXP2
      float customColorFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
      float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
      #else
      float customColorFactor = smoothstep( fogNear, fogFar, vFogDepth );
      float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
      #endif
      // vec3 foggedCustomColor = mix( fogCustomColor.rgb, fogColor, fogFactor );
    
      gl_FragColor.rgb = mix( gl_FragColor.rgb, fogCustomColor, customColorFactor );
      gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
    #endif
    
    `);


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

  get movement() {
    return this._movement.value;
  }

  set movement(v) {
    this._movement.value = v;
  }
}

extend({ MegaWobbleMaterial });

function ShaderBall(props) {
  let material = useRef();
  let meshRef = useRef();
  const [colorMap, displacementMap, normalMap, roughnessMap] = useLoader(TextureLoader, [
    'materials/metal/color.jpg',
    'materials/metal/displacement.jpg',
    'materials/metal/normal.jpg',
    'materials/metal/roughness.jpg'
  ])
  let initialY = props.position[2];
  useFrame((state) => {
    // meshRef.current.position.y = Math.sin(state.clock.getElapsedTime) * initialY;
    material.current.time = state.clock.getElapsedTime() + props.timeOffset;
    // console.log(material.current);
  });

  return (
    <mesh ref={meshRef} {...props}>
      {props.children}
      <megaWobbleMaterial
        ref={material}
        metalness={1}
        roughness={.1}
        envMap={props.envMap}
        factor={props.factor}
        displacementScale={0.2}
        // transparent
        side= {THREE.DoubleSide}
        movement={props.movement}
        // map={colorMap}
        color={"#9f9f9f"}
        // opacity={.9}
        // depthWrite={false}
        // displacementMap={displacementMap}
        // normalMap={normalMap}
        // roughnessMap={roughnessMap}
      />
    </mesh>
  );
}

export default ShaderBall;
