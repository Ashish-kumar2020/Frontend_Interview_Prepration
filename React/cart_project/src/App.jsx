import "./App.css";
import { Provider } from "react-redux";

import store from "./store";
import Home from "./component/Home";
import Header from "./component/Header";
function App() {
  return (
    <Provider store={store}>
      <Header />
      <Home />
    </Provider>
  );
}

export default App;
