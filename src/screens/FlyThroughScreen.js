import {Canvas} from "@react-three/fiber";
import ScrollIndex from "../components/ScrollIndex";
import DestructableCity from "../three/scenes/DestructableCity";
import WobblyScene from "../three/scenes/WobblyScene";
import WobblyStage from "../three/stages/WobblyStage";

function FlyThroughScreen() {
  return (
    <>
      <div className="w-screen h-screen absolute z-0">
        <Canvas colorManagement pixelRatio={window.devicePixelRatio}>
          <WobblyStage>
            <WobblyScene />
          </WobblyStage>
        </Canvas>
      </div>
      <div className="h-screen text-white relative z-10 overflow-y-scroll snap snap-y snap-mandatory">
        <ScrollIndex
          scrollIndex={0}
          className="snap-start w-screen h-screen text-3xl align-middle flex place-items-center text-center"
        >
          <div className="w-screen"> bing bang</div>
        </ScrollIndex>
        <ScrollIndex
          scrollIndex={1}
          className="snap-start w-screen h-screen text-3xl align-middle flex place-items-center text-center"
        >
          <div className="w-screen"> bop</div>
        </ScrollIndex>
        <ScrollIndex
          scrollIndex={2}
          className="snap-start w-screen h-screen text-3xl align-middle flex place-items-center text-center"
        >
          <div className="w-screen"> badabing</div>
        </ScrollIndex>
        <ScrollIndex
          scrollIndex={3}
          className="snap-start w-screen h-screen text-3xl align-middle flex place-items-center text-center"
        >
          <div className="w-screen"> pow</div>
        </ScrollIndex>
      </div>
    </>
  );
}

export default FlyThroughScreen;
