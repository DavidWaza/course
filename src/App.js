import React from "react";
import "./App.css";
import "./index.css";
import Homepage from './component/homepage'
import HeroPage from './component/hero'
import MiniHero from './component/miniHero'
import Maincomponent from "./component/Maincomponent";

function App() {
  return(
    <div>
      <Homepage />
      <HeroPage />
      <MiniHero />
      <Maincomponent />
    </div>
  )
}
export default App;