import {Canvas} from "@react-three/fiber";
import {Suspense, useState} from "react";
import ScrollIndex from "../components/ScrollIndex";
import WobblyScene from "../three/scenes/WobblyScene";
import WobblyStage from "../three/stages/WobblyStage";
import "./FlyThroughScreenArrow.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";

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
      <div className="relative z-0">
        <div className="w-full h-full absolute top-0">
          <div className="w-screen h-screen z-0 sticky top-0">
            <Canvas colorManagement pixelRatio={window.devicePixelRatio}>
              <WobblyStage>
                <Suspense fallback={"sup"}>
                  <WobblyScene textureNames={textureNames} />
                </Suspense>
              </WobblyStage>
            </Canvas>
          </div>
        </div>
        <div className="text-white relative z-10 top-0">
          <ScrollIndex
            scrollIndex={0}
            className="relative snap-start w-screen h-screen text-3xl align-middle flex place-items-center text-center"
          >
            <svg
              class="knockout-text-container relative"
              width="100vw"
              height="100vh"
            >
              <rect
                class="knockout-text-bg"
                width="100%"
                height="100%"
                fill="rgb(254, 242, 242)"
                x="0"
                y="0"
                fill-opacity="1"
                mask="url(#knockout-text)"
              />

              <mask id="knockout-text">
                <rect width="100%" height="100.1%" fill="#fff" x="0" y="0" />
                <text
                  className="font-sans"
                  style={{fontSize: "30vmin", letterSpacing: ".04em", fontWeight: "900"}}
                  x="50%"
                  y="50%"
                  fill="#000"
                  text-anchor="middle"
                >
                  <tspan x="50%" dy="-.3em">
                    three
                  </tspan>
                  <tspan x="50%" dy="1em">
                    sigma
                  </tspan>
                  {/* <div className="w-full animate-bounce absolute bottom-0 text-color-red-50 text-center">
              <FontAwesomeIcon
                icon={faArrowDown}
                color="rgb(229, 231, 235)"
                size="lg"
              />
            </div> */}
                </text>
                <text
                  className="arrow"
                  style={{fontSize: "40vmin"}}
                  x="50%"
                  y="20%"
                  fill="#000"
                  text-anchor="middle"
                >
                  <tspan x="50%" dy="72%">
                    ˬ
                  </tspan>
                </text>
              </mask>
            </svg>
            {/* <div className="w-full animate-bounce absolute bottom-0 text-color-red-50 text-center">
              <FontAwesomeIcon
                icon={faArrowDown}
                color="rgb(229, 231, 235)"
                size="lg"
              />
            </div> */}
          </ScrollIndex>
          <ScrollIndex
            scrollIndex={1}
            className="relative snap-start w-screen h-screen text-3xl align-middle flex place-items-center text-center"
          >
            <div
              style={{width: "100%", height: "70%"}}
              className="bg-gradient-to-b from-red-50 to-transparent absolute top-0"
            ></div>
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
            className="relative snap-start w-screen h-screen text-3xl align-middle flex place-items-center text-center"
          >
            <div
              style={{width: "100%", height: "70%"}}
              className="bg-gradient-to-b to-red-50 from-transparent absolute bottom-0"
            ></div>
            <div className="w-screen"> pow</div>
          </ScrollIndex>
        </div>
      </div>
    </>
  );
}

export default FlyThroughScreen;
