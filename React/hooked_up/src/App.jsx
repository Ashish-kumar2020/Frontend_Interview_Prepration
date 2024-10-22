import "./App.css";
import ThemeComponent from "./component/ThemeComponent";
import UseReducerHook from "./component/UseReducerHook";
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
        <UseMemoHook />
      </ThemeProvider>
    </>
  );
}

export default App;
