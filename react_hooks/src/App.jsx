import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UseState from "./component/UseState";
import UseEffectsData from "./component/UseEffectsData";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <UseState /> */}
      <UseEffectsData />
    </>
  );
}

export default App;
