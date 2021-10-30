import logo from "./logo.svg";
import "./App.css";
import Main from "./layouts/Main";
import { Suspense } from "react";
import ScrollIndex from "./components/ScrollIndex";
import CityScene from "./layouts/CityScene";

function App() {
  return (
    <>
      <Suspense fallback="hi">
        <Main />
        {/* <CityScene /> */}
      </Suspense>
      <div className="h-screen text-white relative z-10 overflow-y-scroll snap snap-y snap-mandatory">
        <ScrollIndex scrollIndex={0} className="snap-start w-screen h-screen text-3xl align-middle flex place-items-center text-center">
          <div className="w-screen"> bing bang</div>
        </ScrollIndex>
        <ScrollIndex scrollIndex={1} className="snap-start w-screen h-screen text-3xl align-middle flex place-items-center text-center">
          <div className="w-screen"> bop</div>
        </ScrollIndex>
        <ScrollIndex scrollIndex={2} className="snap-start w-screen h-screen text-3xl align-middle flex place-items-center text-center">
          <div className="w-screen"> badabing</div>
        </ScrollIndex>
        <ScrollIndex scrollIndex={3} className="snap-start w-screen h-screen text-3xl align-middle flex place-items-center text-center">
          <div className="w-screen"> pow</div>
        </ScrollIndex>
      </div>
    </>
  );
}

export default App;
