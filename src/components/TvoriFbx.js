import React, { useEffect, useRef } from 'react'
import { useGLTF, PerspectiveCamera, useAnimations } from '@react-three/drei'
import * as THREE from "three"

export default function TvoriFbx({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('models/untitled2.gltf')
  const { actions } = useAnimations(animations, group)
  console.log(actions);
  useEffect(() => {
    for (let action in actions) {
      let a = actions[action].play();
      console.log(a);
      a.setLoop(THREE.LoopOnce);
      a.clampWhenFinished = true;
      setInterval(() => {
        a.reset();
      }, 3000);
    }
  },[])
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[4.08, 5.9, -1.01]} rotation={[1.89, 0.88, -2.05]}>
        <pointLight intensity={1} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
      <group name="Camera" position={[7.36, 4.96, 6.93]} rotation={[1.24, 0.33, -0.76]}>
        <PerspectiveCamera makeDefault={false} far={100} near={0.1} fov={22.9} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <group
          name="DefaultPreset__2_"
          position={[38.09, 86.15, -116.14]}
          rotation={[0, 0, 1.16]}
          scale={[0.07, 0.07, 0.07]}>
          <group name="Puppet_Separated" position={[-7.33, -61.07, 8.19]} rotation={[Math.PI / 6, -0.06, 0.01]}>
            <group name="Puppet_Pelvis" position={[0, 0.2, -100]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
              <group name="Puppet_LThigh" position={[-12.28, 7, 1.43]} rotation={[-0.07, -1, 2.79]}>
                <group name="Puppet_LLeg" position={[37.82, 0, 0]} rotation={[-0.05, -1.34, -0.05]}>
                  <group name="Puppet_LFoot" position={[39.52, 0, 0]} rotation={[-2.35, 1.3, 2.48]}>
                    <mesh geometry={nodes.Puppet_LLegAnkle_Clone_.geometry} material={materials.PropsPBR_11} />
                  </group>
                  <mesh geometry={nodes.Puppet_LLeg_Clone_.geometry} material={materials.PropsPBR_12} />
                </group>
                <mesh geometry={nodes.Puppet_LThigh_Clone_.geometry} material={materials.PropsPBR_13} />
              </group>
              <group name="Puppet_RThigh" position={[-12.28, -7, 1.43]} rotation={[-0.23, -1.34, 3.1]}>
                <group name="Puppet_RLeg" position={[37.82, 0, 0]} rotation={[0, -0.43, 0.01]}>
                  <group name="Puppet_RFoot" position={[39.52, 0, 0]} rotation={[0.1, 0.56, -0.32]}>
                    <mesh geometry={nodes.Puppet_RLegAnkle_Clone_.geometry} material={materials.PropsPBR_14} />
                  </group>
                  <mesh geometry={nodes.Puppet_RLeg_Clone_.geometry} material={materials.PropsPBR_15} />
                </group>
                <mesh geometry={nodes.Puppet_RThigh_Clone_.geometry} material={materials.PropsPBR_16} />
              </group>
              <group name="Puppet_Spine" position={[10.42, 0, -0.79]} rotation={[0, 0.03, 0.01]}>
                <group name="Puppet_Chest" position={[10.99, 0, 0]} rotation={[0, 0.11, -0.01]}>
                  <group name="Puppet_LCollarbone" position={[18.1, 1.62, -4.44]} rotation={[0.58, -0.18, 1.51]}>
                    <group name="Puppet_LArm" position={[17.35, 0, 0]} rotation={[-0.04, 0.43, 1.21]}>
                      <group name="Puppet_LForearm" position={[30.54, 0, 0]} rotation={[0, 0.88, 0]}>
                        <group name="Puppet_LHand" position={[27.88, 0, 0]} rotation={[-1.71, 0.5, 0.78]}>
                          <mesh geometry={nodes.Puppet_LArmPalm_Clone_.geometry} material={materials.PropsPBR_17} />
                        </group>
                        <mesh geometry={nodes.Puppet_LForearm_Clone_.geometry} material={materials.PropsPBR_18} />
                      </group>
                      <mesh geometry={nodes.Puppet_LArm_Clone_.geometry} material={materials.PropsPBR_19} />
                    </group>
                  </group>
                  <group name="Puppet_Neck" position={[26.94, 0, 4.04]} rotation={[0.02, 0.58, -0.14]}>
                    <group name="Puppet_Head" position={[9.44, 0, 0]} rotation={[0.08, -0.65, 0.2]}>
                      <mesh geometry={nodes.Puppet_Head_Clone_.geometry} material={materials.PropsPBR_20} />
                    </group>
                    <mesh geometry={nodes.Puppet_Neck_Clone_.geometry} material={materials.PropsPBR_21} />
                  </group>
                  <group name="Puppet_RCollarbone" position={[18.1, -1.62, -4.44]} rotation={[-0.58, -0.18, -1.5]}>
                    <group name="Puppet_RArm" position={[17.27, 0, 0]} rotation={[0.5, 0.38, -0.66]}>
                      <group name="Puppet_RForearm" position={[30.54, 0, 0]} rotation={[0, 1.46, 0]}>
                        <group name="Puppet_RHand" position={[27.88, 0, 0]} rotation={[2.08, -0.17, 0.08]}>
                          <mesh geometry={nodes.Puppet_RArmPalm_Clone_.geometry} material={materials.PropsPBR_22} />
                        </group>
                        <mesh geometry={nodes.Puppet_RForearm_Clone_.geometry} material={materials.PropsPBR_23} />
                      </group>
                      <mesh geometry={nodes.Puppet_RArm_Clone_.geometry} material={materials.PropsPBR_24} />
                    </group>
                  </group>
                  <mesh geometry={nodes.Puppet_Chest_Clone_.geometry} material={materials.PropsPBR_25} />
                </group>
                <mesh geometry={nodes.Puppet_Spine_Clone_.geometry} material={materials.PropsPBR_26} />
              </group>
              <mesh geometry={nodes.Puppet_Pelvis_Clone_.geometry} material={materials.PropsPBR_27} />
            </group>
          </group>
          <group name="Head" position={[12.24, 87.69, -142.57]} rotation={[2.08, -0.54, -1.27]} />
          <group name="LFoot" position={[3.99, 37.13, -9.44]} rotation={[0.56, -0.33, 1.08]} />
          <group name="LHand" position={[20.9, 44.31, -83.4]} rotation={[-1.2, -0.64, -0.43]} />
          <group name="Pelvis" position={[-1.71, 60.41, -101.04]} rotation={[1.62, -0.38, -1.42]}>
            <group position={[-10.07, 36.12, 29.53]} rotation={[-0.03, 0.1, 1.54]} />
            <group position={[-59.31, 7.96, -14.19]} rotation={[0, 0, Math.PI / 2]} />
            <group position={[-10.42, 0, -0.01]} />
            <group position={[-16.66, -32.39, 15.9]} rotation={[0.04, 0.88, -2.03]} />
            <group position={[-59.31, -7.96, -14.19]} rotation={[0, 0, Math.PI / 2]} />
          </group>
          <group position={[0, 0.93, -121.41]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
          <group name="RFoot" position={[-17.21, 64.94, -6.7]} rotation={[0.72, -0.04, 1.37]} />
          <group name="RHand" position={[-28.29, 79.65, -83.45]} rotation={[1.09, 0.65, 1.72]} />
        </group>
        <group name="ToolCamera__0_" position={[37.48, 38.83, -138.9]} rotation={[0.45, -0.03, -0.17]} scale={1.34}>
          <PerspectiveCamera makeDefault={true} far={6000} near={0.07} fov={51.95} rotation={[Math.PI/2, 0, Math.PI]} />
        </group>
        <group position={[-0.18, 0.5, 50.76]} scale={[10.14, 10.14, 0.47]}>
          <mesh geometry={nodes.Cylinder_1x0_25_LOD0_1.geometry} material={materials.PropsPBR_3} />
          <mesh geometry={nodes.Cylinder_1x0_25_LOD1_1.geometry} material={materials.PropsPBR_4} />
          <mesh geometry={nodes.Cylinder_1x0_25_LOD2_1.geometry} material={materials.PropsPBR_5} />
        </group>
        <group position={[-0.18, 0.5, 11.48]} scale={[2.47, 2.47, 0.11]}>
          <mesh geometry={nodes.Cylinder_1x0_25_LOD0.geometry} material={materials.PropsPBR} />
          <mesh geometry={nodes.Cylinder_1x0_25_LOD1.geometry} material={materials.PropsPBR_1} />
          <mesh geometry={nodes.Cylinder_1x0_25_LOD2.geometry} material={materials.PropsPBR_2} />
        </group>
        <group position={[14.14, 88.61, -104.17]} rotation={[-0.03, -0.01, -0.09]} scale={[0.28, 0.28, 0.11]}>
          <mesh geometry={nodes.Cylinder_1x0_25_LOD0_2.geometry} material={materials.PropsPBR_8} />
          <mesh geometry={nodes.Cylinder_1x0_25_LOD1_2.geometry} material={materials.PropsPBR_9} />
          <mesh geometry={nodes.Cylinder_1x0_25_LOD2_2.geometry} material={materials.PropsPBR_10} />
        </group>
        <group rotation={[-0.47, -0.5, -2.04]} scale={[1.06, 1.06, 1.06]}>
          <directionalLight intensity={.1} decay={2} color="#0fe0b7" rotation={[-Math.PI / 2, 0, 0]} />
        </group>
        <group position={[16.33, 79.68, -133.92]} rotation={[-0.23, 0.57, -1.46]} scale={[0.3, 0.3, 0.3]}>
          <pointLight intensity={.15} decay={2} color="#97b9ff" rotation={[-Math.PI / 2, 0, 0]} />
        </group>
        <mesh
          geometry={nodes.Box_1x1__5_.geometry}
          material={materials.PropsPBR_32}
          position={[-13.7, 73.1, -105.46]}
          rotation={[0.03, 0.02, 2.07]}
          scale={[0.11, 0.11, 0.11]}
        />
        <mesh
          geometry={nodes.Chamferbox__3_.geometry}
          material={materials.PropsPBR_28}
          position={[3.72, 82.71, -110.46]}
          rotation={[0.04, 0.02, -2.65]}
          scale={0.1}>
          <mesh geometry={nodes.ChamferboxCrack_LOD1_1.geometry} material={materials.PropsPBR_29} />
        </mesh>
        <mesh
          geometry={nodes.Chamferbox__4_.geometry}
          material={materials.PropsPBR_30}
          position={[-5, 78, -110.59]}
          rotation={[0.03, 0.02, 2.07]}
          scale={[0.09, 0.09, 0.09]}>
          <mesh geometry={nodes.ChamferboxCrack_LOD1_2.geometry} material={materials.PropsPBR_31} />
        </mesh>
        <mesh
          geometry={nodes.ChamferboxCrack__0_.geometry}
          material={materials.PropsPBR_6}
          position={[37.79, 85.48, -110.18]}
          rotation={[0, 0, -0.54]}
          scale={0.12}>
          <mesh geometry={nodes.ChamferboxCrack_LOD1.geometry} material={materials.PropsPBR_7} />
        </mesh>
      </group>
      <mesh geometry={nodes.Cube.geometry} material={materials.Material} />
    </group>
  )
}

useGLTF.preload('/untitled2.gltf')