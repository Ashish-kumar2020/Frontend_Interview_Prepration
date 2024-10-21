import "./App.css";
import ThemeComponent from "./component/ThemeComponent";
import BasicState from "./component/use-State";
import UseEffectHook from "./component/use-effect";
import UseRef from "./component/use-ref";
import { ThemeProvider } from "./context/themeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        {/* <BasicState /> */}
        {/* <UseEffectHook /> */}
        {/* <UseRef /> */}
        <ThemeComponent />
      </ThemeProvider>
    </>
  );
}

export default App;
