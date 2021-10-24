import logo from "./logo.svg";
import "./App.css";
import Main from "./layouts/Main";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback="hi">
      <div className="App">
        <Main />
      </div>
    </Suspense>
  );
}

export default App;
