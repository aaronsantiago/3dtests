import {useControls} from "leva";
import {useEffect, useState} from "react";
import ShaderBall from "../ShaderBall";

function WobblyScene() {
  const {spawnWidth, sizeRange, spawnHeight} = useControls({
    spawnWidth: 1000,
    spawnHeight: 300,
    sizeRange: 45,
  });
  const [shaderBallList, setShaderBallList] = useState([]);
  const [pointLightList, setPointLightList] = useState([]);

  useEffect(() => {
    setShaderBallList(
      Array(160)
        .fill(1)
        .map((i) => {
          return [
            Math.random(),
            Math.random(),
            Math.random(),
            Math.random(),
            Math.random(),
          ];
        })
    );

    setPointLightList(
      Array(4)
        .fill(1)
        .map((i) => {
          return [
            Math.random(),
            Math.random(),
            Math.random(),
            Math.random(),
            Math.random(),
          ];
        })
    );
  }, []);

  return (
    <>
      {pointLightList.map((r,i) => (
        <pointLight
          key={"light" + i}
          intensity={r[3] * r[3] * r[4] * r[4] * 30}
          position={[
            (r[0] - 0.5) * 3000,
            r[1] * 300 + 200,
            (r[2] - 0.5) * 3000,
          ]}
        />
      ))}
      {shaderBallList.map((r, i) => {
        let scale = 1 + r[4] * sizeRange;
        return (
          <ShaderBall
            // envMap={texture}
            key={"ball" + i}
            position={[
              (r[0] - 0.5) * spawnWidth,
              (r[1] - 0.5) * spawnHeight,
              (r[2] - 0.5) * spawnWidth,
            ]}
            timeOffset={r[3] * 1173}
            rotation={[0, -Math.PI / 4, 0]}
            scale={[scale, scale, scale]}
            factor={0.1}
          >
            <sphereGeometry args={[1, 32, 32]} />
          </ShaderBall>
        );
      })}

      <ShaderBall
        // envMap={texture}
        position={[0, -100, 100]}
        timeOffset={111813}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1500, 1500, 1500]}
        movement={0.3}
        factor={0.1}
      >
        {/* <polyhedronGeometry args={[verticesOfCube, indicesOfFaces, 1, 3]} /> */}
        <sphereGeometry args={[1, 128, 128]} />
      </ShaderBall>
    </>
  );
}

export default WobblyScene;
