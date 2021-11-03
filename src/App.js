import "./App.css";
import CityScreen from "./screens/CityScreen";
import {Route, Switch} from "react-router";
import FlyThroughScreen from "./screens/FlyThroughScreen";
import CustomCursor from "./components/CustomCursor";
import InstancedGridScene from "./screens/InstancedGridScreen";
import {Suspense} from "react";
import ThreeSigmaScreen from "./screens/ThreeSigmaScreen";

function App() {
  return (
    <>
      {/* <CustomCursor /> */}
      <Switch>
        <Route path="/" exact>
          <FlyThroughScreen />
        </Route>
        <Route path="/city">
          <CityScreen />
        </Route>
        <Route path="/grid">
          <Suspense fallback="hi">
            <InstancedGridScene />
          </Suspense>
        </Route>
        <Route path="/home">
          <ThreeSigmaScreen/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
