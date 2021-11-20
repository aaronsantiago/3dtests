import {Canvas} from "@react-three/fiber";
import {Suspense, useState} from "react";
import ScrollIndex from "../components/ScrollIndex";
import WobblyScene from "../three/scenes/WobblyScene";
import WobblyStage from "../three/stages/WobblyStage";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

function FlyThroughScreen() {
  const zeroPad = (num, places) => String(num).padStart(places, "0");

  let [textureNames] = useState([
    `Grainy gradient ${zeroPad(Math.floor(Math.random() * 78 + 1), 2)}.png`,
    `Grainy gradient ${zeroPad(Math.floor(Math.random() * 78 + 1), 2)}.png`,
    `Grainy gradient ${zeroPad(Math.floor(Math.random() * 78 + 1), 2)}.png`,
    `Grainy gradient ${zeroPad(Math.floor(Math.random() * 78 + 1), 2)}.png`,
    `Grainy gradient ${zeroPad(Math.floor(Math.random() * 78 + 1), 2)}.png`,
    `Grainy gradient ${zeroPad(Math.floor(Math.random() * 78 + 1), 2)}.png`,
  ]);

  return (
    <>
      <div className="w-screen h-screen absolute z-0">
        <Canvas colorManagement pixelRatio={window.devicePixelRatio}>
          <WobblyStage>
            <Suspense fallback={"sup"}>
              <WobblyScene textureNames={textureNames} />
            </Suspense>
          </WobblyStage>
        </Canvas>
      </div>
      <div className="h-screen text-white relative z-10 overflow-y-scroll snap snap-y snap-mandatory">
        <ScrollIndex
          scrollIndex={0}
          className="snap-start w-screen h-screen text-3xl align-middle flex place-items-center text-center"
        >
          <svg class="knockout-text-container" width="100vw" height="100vh">
            <rect
              class="knockout-text-bg"
              width="100%"
              height="100%"
              fill="rgb(156, 163, 175)"
              x="0"
              y="0"
              fill-opacity="1"
              mask="url(#knockout-text)"
            />

            <mask id="knockout-text">
              <rect width="100%" height="80.1%" fill="#fff" x="0" y="0" />
              <text
                className="font-work-sans"
                style={{fontSize: "30vmin"}}
                x="50%"
                y="50%"
                fill="#000"
                text-anchor="middle"
              >
                <tspan x="50%" dy="-.5em">
                  three
                </tspan>
                <tspan x="50%" dy=".8em">
                  sigma
                </tspan>
              </text>
            </mask>
          </svg>
          <div style={{width:"100%", height:"20%"}} className="bg-gradient-to-b from-gray-400 to-transparent absolute bottom-0"></div>
          <div className="w-full animate-bounce absolute bottom-0 text-color-gray-400 text-center">
            <FontAwesomeIcon icon={faArrowDown} color="rgb(156, 163, 175)" size="lg"/>
          </div>
        </ScrollIndex>
        <ScrollIndex
          scrollIndex={1}
          className="snap-start w-screen h-screen text-3xl align-middle flex place-items-center text-center"
        >
          <div className="w-screen"> yeah</div>
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
