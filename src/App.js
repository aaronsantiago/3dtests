import "./App.css";
import CityScreen from "./screens/CityScreen";
import { Route, Switch } from "react-router";
import FlyThroughScreen from "./screens/FlyThroughScreen";

function App() {
  return (
      <Switch>
        <Route path="/" exact>
          <FlyThroughScreen />
        </Route>
        <Route path="/city">
          <CityScreen />
        </Route>
      </Switch>
  );
}

export default App;
