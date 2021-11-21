import "./App.css";
import CityScreen from "./screens/CityScreen";
// import {Route, Switch} from "react-router";
import { useLocation, Switch, Route } from "wouter"
import FlyThroughScreen from "./screens/FlyThroughScreen";
import CustomCursor from "./components/CustomCursor";
import InstancedGridScene from "./screens/InstancedGridScreen";
import {Suspense} from "react";
import ThreeSigmaScreen from "./screens/ThreeSigmaScreen";
import WorkContainer from "./screens/WorkContainer";

function App() {
  return (
    <>
      <CustomCursor />
      <Switch>
        <Route path="/" exact>
          <FlyThroughScreen />
          <WorkContainer>
            <img className="w-screen h-screen" src="https://aaron.work/albums/presence/1.png"/>
            <img className="w-screen h-screen" src="https://aaron.work/albums/severe-clear/1.png"/>
            <img className="w-screen h-screen" src="https://aaron.work/albums/crystalball/0.png"/>
            <img className="w-screen h-screen" src="/75.png"/>
          </WorkContainer>
          <ThreeSigmaScreen/>
        </Route>
        <Route path="/city">
          <CityScreen />
        </Route>
        <Route path="/grid">
          <Suspense fallback="hi">
            <InstancedGridScene />
          </Suspense>
        </Route>
        <Route path="/home/:foo*">
          <ThreeSigmaScreen/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
