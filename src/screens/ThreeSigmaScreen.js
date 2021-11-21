import {Text} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import {Suspense, useState} from "react";
import ThreeSigmaScene from "../three/scenes/ThreeSigmaScene";
import ThreeSigmaStage from "../three/stages/ThreeSigmaStage";

function ThreeSigmaScreen() {
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
    <div className="w-screen relative z-0 bg-red-50">
      <div className="h-32 w-screen bg-red-50"/>
      <div style={{width:"100vw", height:"100vh"}} className="relative">
        {/* <div className="bg-gradient-radial from-transparent via-transparent to-red-50 w-full h-full absolute top-0 left-0 z-10" /> */}
        <div
          style={{width: "100%", height: "70%"}}
          className="z-10 bg-gradient-to-b from-red-50 to-transparent absolute top-0"
        ></div>
        {/* <div
          style={{width: "25%", height: "100%"}}
          className="z-10 bg-gradient-to-l from-red-50 to-transparent absolute top-0 right-0"
        ></div> */}
        <Canvas
          mode="concurrent"
          colorManagement
          shadows
          pixelRatio={window.devicePixelRatio}
        >
          <ThreeSigmaStage key="yuanwftaaayunawft">
            <Text
              position={[13, 17, -45]}
              fontSize={40}
              scale={[1, 0.6, 1]}
              metalness={1}
              castShadow
              color="#FFF"
              anchorX="center"
              anchorY="middle"
              font="https://rawcdn.githack.com/google/fonts/3b179b729ac3306ab2a249d848d94ff08b90a0af/apache/robotoslab/static/RobotoSlab-Black.ttf"
            >
              3σ
            </Text>
            <Text
              fillOpacity={0.6}
              position={[-3, 18, -20]}
              rotation={[0, 0, 0]}
              fontSize={10}
              castShadow
              color="#FFF"
              anchorX="center"
              anchorY="middle"
              font="https://rawcdn.githack.com/google/fonts/3b179b729ac3306ab2a249d848d94ff08b90a0af/apache/robotoslab/static/RobotoSlab-Black.ttf"
            >
              THREE[sigma]
            </Text>
            <Text
              fillOpacity={0.5}
              position={[-8, 8, -15]}
              rotation={[0, 0, 0]}
              fontSize={6}
              castShadow
              color="#FFF"
              anchorX="center"
              anchorY="middle"
              font="https://rawcdn.githack.com/google/fonts/3b179b729ac3306ab2a249d848d94ff08b90a0af/apache/robotoslab/static/RobotoSlab-Black.ttf"
            >
              `3`s(igma)
            </Text>
            <Text
              fillOpacity={0.4}
              position={[-20, 7, -30]}
              rotation={[0, 0, 0]}
              fontSize={6}
              castShadow
              color="#FFF"
              anchorX="center"
              anchorY="middle"
              font="https://rawcdn.githack.com/google/fonts/3b179b729ac3306ab2a249d848d94ff08b90a0af/apache/robotoslab/static/RobotoSlab-Black.ttf"
            >
              3//Σ
            </Text>
            <Text
              fillOpacity={0.1}
              position={[-14, 2, -30]}
              rotation={[0, 0, 0]}
              fontSize={2}
              castShadow
              color="#FFF"
              transparent
              anchorX="center"
              anchorY="middle"
              font="https://rawcdn.githack.com/google/fonts/3b179b729ac3306ab2a249d848d94ff08b90a0af/apache/robotoslab/static/RobotoSlab-Black.ttf"
            >
              ::thr.sig.php[!]
            </Text>
            <Suspense fallback={"wut"}>
              <ThreeSigmaScene
                textureNames={textureNames}
                key="yuanwftyunawft"
              />
            </Suspense>
          </ThreeSigmaStage>
        </Canvas>
      </div>
    </div>
  );
}

export default ThreeSigmaScreen;
