import {Canvas} from "@react-three/fiber";
import {useControls} from "leva";
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
            <group rotation={[0, Math.PI / 6, 0]}>
              <TerrainTest
                position={[0, 9.8, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
            </group>
          </Suspense>
        </CityStage>
      </Canvas>
    </div>
  );
}

export default CityScreen;
