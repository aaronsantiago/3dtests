import {Canvas} from "@react-three/fiber";
import {Suspense} from "react";
import TerrainTest from "../three/models/TerrainTest";
import DestructableCity from "../three/scenes/DestructableCity";
import CityStage from "../three/stages/CityStage";

function CityScreen() {
  return (
    <div className="w-screen h-screen absolute z-0">
      <Canvas
        mode="concurrent"
        colorManagement
        shadows
        pixelRatio={window.devicePixelRatio}
      >
        <CityStage>
          <DestructableCity />
          <Suspense fallback={""}>
            <TerrainTest position={[1,3.4,-16]}/>
          </Suspense>
        </CityStage>
      </Canvas>
    </div>
  );
}

export default CityScreen;
