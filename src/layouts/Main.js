import { Canvas } from "@react-three/fiber";
import Model from "../components/Ruins";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import TerrainTest from "../components/TerrainTest";

function Main() {
  return (
    <div className="w-screen h-screen">
      <Canvas shadows >
        {/* <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} /> */}
        <PerspectiveCamera
          position={[-2.5, .7, 5.5]}
          rotation={[Math.PI/16, -Math.PI/8, 0]}
          makeDefault={true}
          far={25000}
          near={0.2}
          fov={54.4}
        />
        <color attach="background" args={['#000']} />
        <ambientLight intensity={.1} />
        <directionalLight position={[0, 9, 10]} castShadow />
        {/* <pointLight intensity={1} position={[0, 1, 0]} castShadow /> */}
        {/* <TvoriFbx/> */}
        <Model />
        <TerrainTest />
      </Canvas>
    </div>
  );
}

export default Main;
