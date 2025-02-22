import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UseState from "./component/UseState";
import UseEffectsData from "./component/UseEffectsData";
import HomeComponent from "./component/HomeComponent";
import ThemeContextProvider from "./component/ThemeContextProvider";
import ThemeSwitcher from "./component/ThemeSwitcher";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <UseState /> */}
      {/* <UseEffectsData /> */}
      {/* <HomeComponent /> */}
      <ThemeContextProvider>
        <ThemeSwitcher />
      </ThemeContextProvider>
    </>
  );
}

export default App;
