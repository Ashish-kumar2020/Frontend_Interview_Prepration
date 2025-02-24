import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UseState from "./component/UseState";
import UseEffectsData from "./component/UseEffectsData";
import HomeComponent from "./component/HomeComponent";
// import ThemeContextProvider from "./component/ThemeContextProvider";
// import ThemeSwitcher from "./component/ThemeSwitcher";
import UseContextProvider from "./context/UseContextProvider";
import Login from "./component/Login";
import Profile from "./component/Profile";
import { ThemeProvider } from "./context/theme";
import ThemeButton from "./component/ThemeButton";
import Card from "./component/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightThem = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");

    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <>
      {/* <UseState /> */}
      {/* <UseEffectsData /> */}
      {/* <HomeComponent /> */}
      {/* <ThemeSwitcher /> */}
      {/* <UseContextProvider>
        <Login />
        <Profile />
      </UseContextProvider> */}
      <ThemeProvider value={{ themeMode, darkTheme, lightThem }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeButton />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
