import "./App.css";
import ThemeComponent from "./component/ThemeComponent";
import UseFetchHook from "./component/UseFetchHook";
import UseImperativeHandleHook from "./component/UseImperativeHandleHook";
import UseReducerHook from "./component/UseReducerHook";
import WindowSize from "./component/WindowSize";
import BasicState from "./component/use-State";
import UseEffectHook from "./component/use-effect";
import UseRef from "./component/use-ref";
import UseMemoHook from "./component/useMemoHook";
import { ThemeProvider } from "./context/themeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        {/* <BasicState /> */}
        {/* <UseEffectHook /> */}
        {/* <UseRef /> */}
        {/* <ThemeComponent /> */}
        {/* <UseReducerHook /> */}
        {/* <UseMemoHook /> */}
        {/* <UseImperativeHandleHook /> */}
        {/* <WindowSize /> */}
        <UseFetchHook />
      </ThemeProvider>
    </>
  );
}

export default App;
