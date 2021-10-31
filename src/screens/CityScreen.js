import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import TerrainTest from "../three/models/TerrainTest";
import DestructableCity from "../three/scenes/DestructableCity";
import CityStage from "../three/stages/CityStage";

function CityScreen() {
  return (
    <div className="w-screen h-screen absolute z-0">
      <Suspense fallback={<div> sup </div>}>
        <Canvas
          mode="concurrent"
          colorManagement
          shadows
          pixelRatio={window.devicePixelRatio}
        >
          <CityStage>
            <DestructableCity />
            <TerrainTest />
          </CityStage>
        </Canvas>
      </Suspense>
    </div>
  );
}

export default CityScreen;
